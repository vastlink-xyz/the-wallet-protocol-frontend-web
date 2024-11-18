import { j as V } from "./vendor-radix-hWeKeDdS.js";
import { m as ui, a as ts, u as Yg, f as Ji, h as zf, c as Ce, n as A1, o as T1, p as wp, D as M1, b as I1, d as j1, e as D1, B as Uf, q as qg, g as Gg } from "./main-ZZ3REj0_.js";
import { c as De, I as N1, _ as we, h as R1 } from "./vendor-ui-utils-CO-kYQvn.js";
import { d as ur, e as We, a as b, R as T, p as Oe, k as rs, m as k1, b as B1 } from "./vendor-react-DM3ZG7W6.js";
import { r as L1, L as H1, l as Sp, u as Yf, I as Pa, _ as Kg, a as Yo, g as F1, d as W1, w as Wt, C as Xg, c as qf, b as je, e as en, f as ut, s as V1, h as Zg, i as Qg, S as z1, j as eo, k as U1, m as Y1, n as q1, o as Gf, p as Kf, q as X, t as fr, K as Mt, v as Jg, x as $r, y as Sc, z as Xf, A as se, B as G1, D as K1, E as Zf, F as Qf, G as Jf, H as ey, R as ns, J as Br, V as X1, M as Z1, N as Q1, O as J1, P as eS, Q as tS, T as rS, U as nS, W as Vt, X as dr, Y as aS, Z as qo, $ as iS, a0 as Go, a1 as oS, a2 as lS, a3 as sS, a4 as ty, a5 as ry, a6 as ny, a7 as ay } from "./roundedArrow-Bne1GA9c.js";
import { P as Me, B as iy } from "./vendor-utils-CAOmphX6.js";
import { _ as ue, e as An, g as ve, j as Kt, f as Op } from "./vendor-web3-CyMcXvNw.js";
import { T as cS, a as uS, b as Oc, c as Rn, d as $p, e as Er } from "./table-DgFcL77q.js";
import { E as fS, R as oy, P as dS, u as pS } from "./index-BZ0Wuhg1.js";
import { W as hS } from "./index-CwJV7Dvr.js";
import { u as Cp, a as ed } from "./MarketplaceProvider-9Gof3rn2.js";
var vS = Array.isArray, zt = vS, mS = typeof ur == "object" && ur && ur.Object === Object && ur, ly = mS, gS = ly, yS = typeof self == "object" && self && self.Object === Object && self, bS = gS || yS || Function("return this")(), _r = bS, xS = _r, wS = xS.Symbol, to = wS, Pp = to, sy = Object.prototype, SS = sy.hasOwnProperty, OS = sy.toString, qa = Pp ? Pp.toStringTag : void 0;
function $S(e) {
  var t = SS.call(e, qa), r = e[qa];
  try {
    e[qa] = void 0;
    var n = !0;
  } catch {
  }
  var a = OS.call(e);
  return n && (t ? e[qa] = r : delete e[qa]), a;
}
var CS = $S, PS = Object.prototype, _S = PS.toString;
function ES(e) {
  return _S.call(e);
}
var AS = ES, _p = to, TS = CS, MS = AS, IS = "[object Null]", jS = "[object Undefined]", Ep = _p ? _p.toStringTag : void 0;
function DS(e) {
  return e == null ? e === void 0 ? jS : IS : Ep && Ep in Object(e) ? TS(e) : MS(e);
}
var Vr = DS;
function NS(e) {
  return e != null && typeof e == "object";
}
var zr = NS, RS = Vr, kS = zr, BS = "[object Symbol]";
function LS(e) {
  return typeof e == "symbol" || kS(e) && RS(e) == BS;
}
var _a = LS, HS = zt, FS = _a, WS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, VS = /^\w*$/;
function zS(e, t) {
  if (HS(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || FS(e) ? !0 : VS.test(e) || !WS.test(e) || t != null && e in Object(t);
}
var td = zS;
function US(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tn = US;
const Ea = /* @__PURE__ */ We(tn);
var YS = Vr, qS = tn, GS = "[object AsyncFunction]", KS = "[object Function]", XS = "[object GeneratorFunction]", ZS = "[object Proxy]";
function QS(e) {
  if (!qS(e))
    return !1;
  var t = YS(e);
  return t == KS || t == XS || t == GS || t == ZS;
}
var rd = QS;
const Pe = /* @__PURE__ */ We(rd);
var JS = _r, eO = JS["__core-js_shared__"], tO = eO, $c = tO, Ap = function() {
  var e = /[^.]+$/.exec($c && $c.keys && $c.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function rO(e) {
  return !!Ap && Ap in e;
}
var nO = rO, aO = Function.prototype, iO = aO.toString;
function oO(e) {
  if (e != null) {
    try {
      return iO.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var cy = oO, lO = rd, sO = nO, cO = tn, uO = cy, fO = /[\\^$.*+?()[\]{}|]/g, dO = /^\[object .+?Constructor\]$/, pO = Function.prototype, hO = Object.prototype, vO = pO.toString, mO = hO.hasOwnProperty, gO = RegExp(
  "^" + vO.call(mO).replace(fO, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yO(e) {
  if (!cO(e) || sO(e))
    return !1;
  var t = lO(e) ? gO : dO;
  return t.test(uO(e));
}
var bO = yO;
function xO(e, t) {
  return e == null ? void 0 : e[t];
}
var wO = xO, SO = bO, OO = wO;
function $O(e, t) {
  var r = OO(e, t);
  return SO(r) ? r : void 0;
}
var Tn = $O, CO = Tn, PO = CO(Object, "create"), as = PO, Tp = as;
function _O() {
  this.__data__ = Tp ? Tp(null) : {}, this.size = 0;
}
var EO = _O;
function AO(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var TO = AO, MO = as, IO = "__lodash_hash_undefined__", jO = Object.prototype, DO = jO.hasOwnProperty;
function NO(e) {
  var t = this.__data__;
  if (MO) {
    var r = t[e];
    return r === IO ? void 0 : r;
  }
  return DO.call(t, e) ? t[e] : void 0;
}
var RO = NO, kO = as, BO = Object.prototype, LO = BO.hasOwnProperty;
function HO(e) {
  var t = this.__data__;
  return kO ? t[e] !== void 0 : LO.call(t, e);
}
var FO = HO, WO = as, VO = "__lodash_hash_undefined__";
function zO(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = WO && t === void 0 ? VO : t, this;
}
var UO = zO, YO = EO, qO = TO, GO = RO, KO = FO, XO = UO;
function Aa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Aa.prototype.clear = YO;
Aa.prototype.delete = qO;
Aa.prototype.get = GO;
Aa.prototype.has = KO;
Aa.prototype.set = XO;
var ZO = Aa;
function QO() {
  this.__data__ = [], this.size = 0;
}
var JO = QO;
function e$(e, t) {
  return e === t || e !== e && t !== t;
}
var nd = e$, t$ = nd;
function r$(e, t) {
  for (var r = e.length; r--; )
    if (t$(e[r][0], t))
      return r;
  return -1;
}
var is = r$, n$ = is, a$ = Array.prototype, i$ = a$.splice;
function o$(e) {
  var t = this.__data__, r = n$(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : i$.call(t, r, 1), --this.size, !0;
}
var l$ = o$, s$ = is;
function c$(e) {
  var t = this.__data__, r = s$(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var u$ = c$, f$ = is;
function d$(e) {
  return f$(this.__data__, e) > -1;
}
var p$ = d$, h$ = is;
function v$(e, t) {
  var r = this.__data__, n = h$(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var m$ = v$, g$ = JO, y$ = l$, b$ = u$, x$ = p$, w$ = m$;
function Ta(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ta.prototype.clear = g$;
Ta.prototype.delete = y$;
Ta.prototype.get = b$;
Ta.prototype.has = x$;
Ta.prototype.set = w$;
var os = Ta, S$ = Tn, O$ = _r, $$ = S$(O$, "Map"), ad = $$, Mp = ZO, C$ = os, P$ = ad;
function _$() {
  this.size = 0, this.__data__ = {
    hash: new Mp(),
    map: new (P$ || C$)(),
    string: new Mp()
  };
}
var E$ = _$;
function A$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var T$ = A$, M$ = T$;
function I$(e, t) {
  var r = e.__data__;
  return M$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ls = I$, j$ = ls;
function D$(e) {
  var t = j$(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var N$ = D$, R$ = ls;
function k$(e) {
  return R$(this, e).get(e);
}
var B$ = k$, L$ = ls;
function H$(e) {
  return L$(this, e).has(e);
}
var F$ = H$, W$ = ls;
function V$(e, t) {
  var r = W$(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var z$ = V$, U$ = E$, Y$ = N$, q$ = B$, G$ = F$, K$ = z$;
function Ma(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ma.prototype.clear = U$;
Ma.prototype.delete = Y$;
Ma.prototype.get = q$;
Ma.prototype.has = G$;
Ma.prototype.set = K$;
var id = Ma, uy = id, X$ = "Expected a function";
function od(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(X$);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (od.Cache || uy)(), r;
}
od.Cache = uy;
var fy = od;
const Z$ = /* @__PURE__ */ We(fy);
var Q$ = fy, J$ = 500;
function eC(e) {
  var t = Q$(e, function(n) {
    return r.size === J$ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var tC = eC, rC = tC, nC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, aC = /\\(\\)?/g, iC = rC(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(nC, function(r, n, a, i) {
    t.push(a ? i.replace(aC, "$1") : n || r);
  }), t;
}), oC = iC;
function lC(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var ld = lC, Ip = to, sC = ld, cC = zt, uC = _a, fC = 1 / 0, jp = Ip ? Ip.prototype : void 0, Dp = jp ? jp.toString : void 0;
function dy(e) {
  if (typeof e == "string")
    return e;
  if (cC(e))
    return sC(e, dy) + "";
  if (uC(e))
    return Dp ? Dp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -fC ? "-0" : t;
}
var dC = dy, pC = dC;
function hC(e) {
  return e == null ? "" : pC(e);
}
var py = hC, vC = zt, mC = td, gC = oC, yC = py;
function bC(e, t) {
  return vC(e) ? e : mC(e, t) ? [e] : gC(yC(e));
}
var hy = bC, xC = _a, wC = 1 / 0;
function SC(e) {
  if (typeof e == "string" || xC(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -wC ? "-0" : t;
}
var ss = SC, OC = hy, $C = ss;
function CC(e, t) {
  t = OC(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[$C(t[r++])];
  return r && r == n ? e : void 0;
}
var sd = CC, PC = sd;
function _C(e, t, r) {
  var n = e == null ? void 0 : PC(e, t);
  return n === void 0 ? r : n;
}
var vy = _C;
const Xt = /* @__PURE__ */ We(vy);
function EC(e) {
  return e == null;
}
var AC = EC;
const Ae = /* @__PURE__ */ We(AC);
var TC = Vr, MC = zt, IC = zr, jC = "[object String]";
function DC(e) {
  return typeof e == "string" || !MC(e) && IC(e) && TC(e) == jC;
}
var NC = DC;
const ro = /* @__PURE__ */ We(NC);
var RC = Vr, kC = zr, BC = "[object Number]";
function LC(e) {
  return typeof e == "number" || kC(e) && RC(e) == BC;
}
var my = LC;
const HC = /* @__PURE__ */ We(my);
var FC = my;
function WC(e) {
  return FC(e) && e != +e;
}
var VC = WC;
const Ia = /* @__PURE__ */ We(VC);
var Nt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, yn = function(t) {
  return ro(t) && t.indexOf("%") === t.length - 1;
}, ee = function(t) {
  return HC(t) && !Ia(t);
}, gt = function(t) {
  return ee(t) || ro(t);
}, zC = 0, ja = function(t) {
  var r = ++zC;
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
}, UC = function(t) {
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
function Ko(e, t, r) {
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
function fu(e) {
  "@babel/helpers - typeof";
  return fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fu(e);
}
var YC = ["viewBox", "children"], qC = [
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
], Np = ["points", "pathLength"], Cc = {
  svg: YC,
  polygon: Np,
  polyline: Np
}, cd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Xo = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ b.isValidElement(t) && (n = t.props), !Ea(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    cd.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, GC = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Cn = function(t, r, n) {
  if (!Ea(t) || fu(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    cd.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = GC(o, r, n));
  }), a;
}, KC = ["children"], XC = ["children"];
function Rp(e, t) {
  if (e == null) return {};
  var r = ZC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ZC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function du(e) {
  "@babel/helpers - typeof";
  return du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, du(e);
}
var kp = {
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
}, Bp = null, Pc = null, ud = function e(t) {
  if (t === Bp && Array.isArray(Pc))
    return Pc;
  var r = [];
  return b.Children.forEach(t, function(n) {
    Ae(n) || (L1.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Pc = r, Bp = t, r;
};
function rr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return jr(a);
  }) : n = [jr(t)], ud(e).forEach(function(a) {
    var i = Xt(a, "type.displayName") || Xt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function qt(e, t) {
  var r = rr(e, t);
  return r && r[0];
}
var Lp = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!ee(n) || n <= 0 || !ee(a) || a <= 0);
}, QC = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], JC = function(t) {
  return t && t.type && ro(t.type) && QC.indexOf(t.type) >= 0;
}, eP = function(t) {
  return t && du(t) === "object" && "clipDot" in t;
}, tP = function(t, r, n, a) {
  var i, o = (i = Cc == null ? void 0 : Cc[a]) !== null && i !== void 0 ? i : [];
  return !Pe(t) && (a && o.includes(r) || qC.includes(r)) || n && cd.includes(r);
}, me = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ b.isValidElement(t) && (a = t.props), !Ea(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var l;
    tP((l = a) === null || l === void 0 ? void 0 : l[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, pu = function e(t, r) {
  if (t === r)
    return !0;
  var n = b.Children.count(t);
  if (n !== b.Children.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Hp(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!Hp(i, o))
      return !1;
  }
  return !0;
}, Hp = function(t, r) {
  if (Ae(t) && Ae(r))
    return !0;
  if (!Ae(t) && !Ae(r)) {
    var n = t.props || {}, a = n.children, i = Rp(n, KC), o = r.props || {}, l = o.children, s = Rp(o, XC);
    return a && l ? Yn(i, s) && pu(a, l) : !a && !l ? Yn(i, s) : !1;
  }
  return !1;
}, Fp = function(t, r) {
  var n = [], a = {};
  return ud(t).forEach(function(i, o) {
    if (JC(i))
      n.push(i);
    else if (i) {
      var l = jr(i.type), s = r[l] || {}, c = s.handler, u = s.once;
      if (c && (!u || !a[l])) {
        var f = c(i, l, o);
        n.push(f), a[l] = !0;
      }
    }
  }), n;
}, rP = function(t) {
  var r = t && t.type;
  return r && kp[r] ? kp[r] : null;
}, nP = function(t, r) {
  return ud(r).indexOf(t);
}, aP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function hu() {
  return hu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hu.apply(this, arguments);
}
function iP(e, t) {
  if (e == null) return {};
  var r = oP(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function vu(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, l = e.title, s = e.desc, c = iP(e, aP), u = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = De("recharts-surface", i);
  return /* @__PURE__ */ T.createElement("svg", hu({}, me(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ T.createElement("title", null, l), /* @__PURE__ */ T.createElement("desc", null, s), t);
}
var lP = ["children", "className"];
function mu() {
  return mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mu.apply(this, arguments);
}
function sP(e, t) {
  if (e == null) return {};
  var r = cP(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cP(e, t) {
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
  var r = e.children, n = e.className, a = sP(e, lP), i = De("recharts-layer", n);
  return /* @__PURE__ */ T.createElement("g", mu({
    className: i
  }, me(a, !0), {
    ref: t
  }), r);
}), uP = Oe.env.NODE_ENV !== "production", Dr = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (uP && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
};
function fP(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var dP = fP, pP = dP;
function hP(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : pP(e, t, r);
}
var vP = hP, mP = "\\ud800-\\udfff", gP = "\\u0300-\\u036f", yP = "\\ufe20-\\ufe2f", bP = "\\u20d0-\\u20ff", xP = gP + yP + bP, wP = "\\ufe0e\\ufe0f", SP = "\\u200d", OP = RegExp("[" + SP + mP + xP + wP + "]");
function $P(e) {
  return OP.test(e);
}
var gy = $P;
function CP(e) {
  return e.split("");
}
var PP = CP, yy = "\\ud800-\\udfff", _P = "\\u0300-\\u036f", EP = "\\ufe20-\\ufe2f", AP = "\\u20d0-\\u20ff", TP = _P + EP + AP, MP = "\\ufe0e\\ufe0f", IP = "[" + yy + "]", gu = "[" + TP + "]", yu = "\\ud83c[\\udffb-\\udfff]", jP = "(?:" + gu + "|" + yu + ")", by = "[^" + yy + "]", xy = "(?:\\ud83c[\\udde6-\\uddff]){2}", wy = "[\\ud800-\\udbff][\\udc00-\\udfff]", DP = "\\u200d", Sy = jP + "?", Oy = "[" + MP + "]?", NP = "(?:" + DP + "(?:" + [by, xy, wy].join("|") + ")" + Oy + Sy + ")*", RP = Oy + Sy + NP, kP = "(?:" + [by + gu + "?", gu, xy, wy, IP].join("|") + ")", BP = RegExp(yu + "(?=" + yu + ")|" + kP + RP, "g");
function LP(e) {
  return e.match(BP) || [];
}
var HP = LP, FP = PP, WP = gy, VP = HP;
function zP(e) {
  return WP(e) ? VP(e) : FP(e);
}
var UP = zP, YP = vP, qP = gy, GP = UP, KP = py;
function XP(e) {
  return function(t) {
    t = KP(t);
    var r = qP(t) ? GP(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? YP(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var ZP = XP, QP = ZP, JP = QP("toUpperCase"), e_ = JP;
const cs = /* @__PURE__ */ We(e_);
function tt(e) {
  return function() {
    return e;
  };
}
const $y = Math.cos, Zo = Math.sin, pr = Math.sqrt, Qo = Math.PI, us = 2 * Qo, bu = Math.PI, xu = 2 * bu, hn = 1e-6, t_ = xu - hn;
function Cy(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function r_(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Cy;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class n_ {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Cy : r_(t);
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
      let p = n - o, v = a - l, m = s * s + c * c, h = p * p + v * v, y = Math.sqrt(m), w = Math.sqrt(d), S = i * Math.tan((bu - Math.acos((m + d - h) / (2 * y * w))) / 2), O = S / w, g = S / y;
      Math.abs(O - 1) > hn && this._append`L${t + O * u},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > u * v)},${this._x1 = t + g * s},${this._y1 = r + g * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(a), s = n * Math.sin(a), c = t + l, u = r + s, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > hn || Math.abs(this._y1 - u) > hn) && this._append`L${c},${u}`, n && (d < 0 && (d = d % xu + xu), d > t_ ? this._append`A${n},${n},0,1,${f},${t - l},${r - s}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = u}` : d > hn && this._append`A${n},${n},0,${+(d >= bu)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function fd(e) {
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
  }, () => new n_(t);
}
function dd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Py(e) {
  this._context = e;
}
Py.prototype = {
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
function fs(e) {
  return new Py(e);
}
function _y(e) {
  return e[0];
}
function Ey(e) {
  return e[1];
}
function Ay(e, t) {
  var r = tt(!0), n = null, a = fs, i = null, o = fd(l);
  e = typeof e == "function" ? e : e === void 0 ? _y : tt(e), t = typeof t == "function" ? t : t === void 0 ? Ey : tt(t);
  function l(s) {
    var c, u = (s = dd(s)).length, f, d = !1, p;
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
  var n = null, a = tt(!0), i = null, o = fs, l = null, s = fd(c);
  e = typeof e == "function" ? e : e === void 0 ? _y : tt(+e), t = typeof t == "function" ? t : tt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Ey : tt(+r);
  function c(f) {
    var d, p, v, m = (f = dd(f)).length, h, y = !1, w, S = new Array(m), O = new Array(m);
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
    return Ay().defined(a).curve(o).context(i);
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
class Ty {
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
function a_(e) {
  return new Ty(e, !0);
}
function i_(e) {
  return new Ty(e, !1);
}
const pd = {
  draw(e, t) {
    const r = pr(t / Qo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, us);
  }
}, o_ = {
  draw(e, t) {
    const r = pr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, My = pr(1 / 3), l_ = My * 2, s_ = {
  draw(e, t) {
    const r = pr(t / l_), n = r * My;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, c_ = {
  draw(e, t) {
    const r = pr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, u_ = 0.8908130915292852, Iy = Zo(Qo / 10) / Zo(7 * Qo / 10), f_ = Zo(us / 10) * Iy, d_ = -$y(us / 10) * Iy, p_ = {
  draw(e, t) {
    const r = pr(t * u_), n = f_ * r, a = d_ * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = us * i / 5, l = $y(o), s = Zo(o);
      e.lineTo(s * r, -l * r), e.lineTo(l * n - s * a, s * n + l * a);
    }
    e.closePath();
  }
}, _c = pr(3), h_ = {
  draw(e, t) {
    const r = -pr(t / (_c * 3));
    e.moveTo(0, r * 2), e.lineTo(-_c * r, -r), e.lineTo(_c * r, -r), e.closePath();
  }
}, Zt = -0.5, Qt = pr(3) / 2, wu = 1 / pr(12), v_ = (wu / 2 + 1) * 3, m_ = {
  draw(e, t) {
    const r = pr(t / v_), n = r / 2, a = r * wu, i = n, o = r * wu + r, l = -i, s = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(l, s), e.lineTo(Zt * n - Qt * a, Qt * n + Zt * a), e.lineTo(Zt * i - Qt * o, Qt * i + Zt * o), e.lineTo(Zt * l - Qt * s, Qt * l + Zt * s), e.lineTo(Zt * n + Qt * a, Zt * a - Qt * n), e.lineTo(Zt * i + Qt * o, Zt * o - Qt * i), e.lineTo(Zt * l + Qt * s, Zt * s - Qt * l), e.closePath();
  }
};
function g_(e, t) {
  let r = null, n = fd(a);
  e = typeof e == "function" ? e : tt(e || pd), t = typeof t == "function" ? t : tt(t === void 0 ? 64 : +t);
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
function Jo() {
}
function el(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function jy(e) {
  this._context = e;
}
jy.prototype = {
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
        el(this, this._x1, this._y1);
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
        el(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function y_(e) {
  return new jy(e);
}
function Dy(e) {
  this._context = e;
}
Dy.prototype = {
  areaStart: Jo,
  areaEnd: Jo,
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
        el(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function b_(e) {
  return new Dy(e);
}
function Ny(e) {
  this._context = e;
}
Ny.prototype = {
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
        el(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function x_(e) {
  return new Ny(e);
}
function Ry(e) {
  this._context = e;
}
Ry.prototype = {
  areaStart: Jo,
  areaEnd: Jo,
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
function w_(e) {
  return new Ry(e);
}
function Wp(e) {
  return e < 0 ? -1 : 1;
}
function Vp(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), l = (i * a + o * n) / (n + a);
  return (Wp(i) + Wp(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(l)) || 0;
}
function zp(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ec(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, l = (i - n) / 3;
  e._context.bezierCurveTo(n + l, a + l * t, i - l, o - l * r, i, o);
}
function tl(e) {
  this._context = e;
}
tl.prototype = {
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
        Ec(this, this._t0, zp(this, this._t0));
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
          this._point = 3, Ec(this, zp(this, r = Vp(this, e, t)), r);
          break;
        default:
          Ec(this, this._t0, r = Vp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function ky(e) {
  this._context = new By(e);
}
(ky.prototype = Object.create(tl.prototype)).point = function(e, t) {
  tl.prototype.point.call(this, t, e);
};
function By(e) {
  this._context = e;
}
By.prototype = {
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
function S_(e) {
  return new tl(e);
}
function O_(e) {
  return new ky(e);
}
function Ly(e) {
  this._context = e;
}
Ly.prototype = {
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
        for (var n = Up(e), a = Up(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Up(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function $_(e) {
  return new Ly(e);
}
function ds(e, t) {
  this._context = e, this._t = t;
}
ds.prototype = {
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
function C_(e) {
  return new ds(e, 0.5);
}
function P_(e) {
  return new ds(e, 0);
}
function __(e) {
  return new ds(e, 1);
}
function Qn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, l = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < l; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Su(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function E_(e, t) {
  return e[t];
}
function A_(e) {
  const t = [];
  return t.key = e, t;
}
function T_() {
  var e = tt([]), t = Su, r = Qn, n = E_;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), A_), l, s = o.length, c = -1, u;
    for (const f of i)
      for (l = 0, ++c; l < s; ++l)
        (o[l][c] = [0, +n(f, o[l].key, c, i)]).data = f;
    for (l = 0, u = dd(t(o)); l < s; ++l)
      o[u[l]].index = l;
    return r(o, u), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : tt(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : tt(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? Su : typeof i == "function" ? i : tt(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Qn, a) : r;
  }, a;
}
function M_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    Qn(e, t);
  }
}
function I_(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, l = 0; o < a; ++o) l += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    Qn(e, t);
  }
}
function j_(e, t) {
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
var D_ = ["type", "size", "sizeType"];
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
function qp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yp(Object(r), !0).forEach(function(n) {
      N_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N_(e, t, r) {
  return t = R_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R_(e) {
  var t = k_(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function k_(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function B_(e, t) {
  if (e == null) return {};
  var r = L_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function L_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Hy = {
  symbolCircle: pd,
  symbolCross: o_,
  symbolDiamond: s_,
  symbolSquare: c_,
  symbolStar: p_,
  symbolTriangle: h_,
  symbolWye: m_
}, H_ = Math.PI / 180, F_ = function(t) {
  var r = "symbol".concat(cs(t));
  return Hy[r] || pd;
}, W_ = function(t, r, n) {
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
      var a = 18 * H_;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, V_ = function(t, r) {
  Hy["symbol".concat(cs(t))] = r;
}, hd = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, l = o === void 0 ? "area" : o, s = B_(t, D_), c = qp(qp({}, s), {}, {
    type: n,
    size: i,
    sizeType: l
  }), u = function() {
    var h = F_(n), y = g_().type(h).size(W_(i, l, n));
    return y();
  }, f = c.className, d = c.cx, p = c.cy, v = me(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ T.createElement("path", Ou({}, v, {
    className: De("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: u()
  })) : null;
};
hd.registerSymbol = V_;
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function $u() {
  return $u = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $u.apply(this, arguments);
}
function Gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function z_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gp(Object(r), !0).forEach(function(n) {
      xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Y_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wy(n.key), n);
  }
}
function q_(e, t, r) {
  return t && Y_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function G_(e, t, r) {
  return t = rl(t), K_(e, Fy() ? Reflect.construct(t, r || [], rl(e).constructor) : t.apply(e, r));
}
function K_(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return X_(e);
}
function X_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fy = function() {
    return !!e;
  })();
}
function rl(e) {
  return rl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rl(e);
}
function Z_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cu(e, t);
}
function Cu(e, t) {
  return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Cu(e, t);
}
function xi(e, t, r) {
  return t = Wy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wy(e) {
  var t = Q_(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function Q_(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jt = 32, vd = /* @__PURE__ */ function(e) {
  function t() {
    return U_(this, t), G_(this, t, arguments);
  }
  return Z_(t, e), q_(t, [{
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
          var c = z_({}, n);
          return delete c.legendIcon, /* @__PURE__ */ T.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ T.createElement(hd, {
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
        return /* @__PURE__ */ T.createElement("li", $u({
          className: h,
          style: f,
          key: "legend-item-".concat(v)
        }, Cn(n.props, p, v)), /* @__PURE__ */ T.createElement(vu, {
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
xi(vd, "displayName", "Legend");
xi(vd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var J_ = os;
function eE() {
  this.__data__ = new J_(), this.size = 0;
}
var tE = eE;
function rE(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var nE = rE;
function aE(e) {
  return this.__data__.get(e);
}
var iE = aE;
function oE(e) {
  return this.__data__.has(e);
}
var lE = oE, sE = os, cE = ad, uE = id, fE = 200;
function dE(e, t) {
  var r = this.__data__;
  if (r instanceof sE) {
    var n = r.__data__;
    if (!cE || n.length < fE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new uE(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var pE = dE, hE = os, vE = tE, mE = nE, gE = iE, yE = lE, bE = pE;
function Da(e) {
  var t = this.__data__ = new hE(e);
  this.size = t.size;
}
Da.prototype.clear = vE;
Da.prototype.delete = mE;
Da.prototype.get = gE;
Da.prototype.has = yE;
Da.prototype.set = bE;
var Vy = Da, xE = "__lodash_hash_undefined__";
function wE(e) {
  return this.__data__.set(e, xE), this;
}
var SE = wE;
function OE(e) {
  return this.__data__.has(e);
}
var $E = OE, CE = id, PE = SE, _E = $E;
function nl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new CE(); ++t < r; )
    this.add(e[t]);
}
nl.prototype.add = nl.prototype.push = PE;
nl.prototype.has = _E;
var zy = nl;
function EE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Uy = EE;
function AE(e, t) {
  return e.has(t);
}
var Yy = AE, TE = zy, ME = Uy, IE = Yy, jE = 1, DE = 2;
function NE(e, t, r, n, a, i) {
  var o = r & jE, l = e.length, s = t.length;
  if (l != s && !(o && s > l))
    return !1;
  var c = i.get(e), u = i.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, p = r & DE ? new TE() : void 0;
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
      if (!ME(t, function(y, w) {
        if (!IE(p, w) && (v === y || a(v, y, r, n, i)))
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
var qy = NE, RE = _r, kE = RE.Uint8Array, BE = kE;
function LE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var HE = LE;
function FE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var md = FE, Kp = to, Xp = BE, WE = nd, VE = qy, zE = HE, UE = md, YE = 1, qE = 2, GE = "[object Boolean]", KE = "[object Date]", XE = "[object Error]", ZE = "[object Map]", QE = "[object Number]", JE = "[object RegExp]", eA = "[object Set]", tA = "[object String]", rA = "[object Symbol]", nA = "[object ArrayBuffer]", aA = "[object DataView]", Zp = Kp ? Kp.prototype : void 0, Ac = Zp ? Zp.valueOf : void 0;
function iA(e, t, r, n, a, i, o) {
  switch (r) {
    case aA:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case nA:
      return !(e.byteLength != t.byteLength || !i(new Xp(e), new Xp(t)));
    case GE:
    case KE:
    case QE:
      return WE(+e, +t);
    case XE:
      return e.name == t.name && e.message == t.message;
    case JE:
    case tA:
      return e == t + "";
    case ZE:
      var l = zE;
    case eA:
      var s = n & YE;
      if (l || (l = UE), e.size != t.size && !s)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= qE, o.set(e, t);
      var u = VE(l(e), l(t), n, a, i, o);
      return o.delete(e), u;
    case rA:
      if (Ac)
        return Ac.call(e) == Ac.call(t);
  }
  return !1;
}
var oA = iA;
function lA(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Gy = lA, sA = Gy, cA = zt;
function uA(e, t, r) {
  var n = t(e);
  return cA(e) ? n : sA(n, r(e));
}
var fA = uA;
function dA(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var pA = dA;
function hA() {
  return [];
}
var vA = hA, mA = pA, gA = vA, yA = Object.prototype, bA = yA.propertyIsEnumerable, Qp = Object.getOwnPropertySymbols, xA = Qp ? function(e) {
  return e == null ? [] : (e = Object(e), mA(Qp(e), function(t) {
    return bA.call(e, t);
  }));
} : gA, wA = xA;
function SA(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var OA = SA, $A = Vr, CA = zr, PA = "[object Arguments]";
function _A(e) {
  return CA(e) && $A(e) == PA;
}
var EA = _A, Jp = EA, AA = zr, Ky = Object.prototype, TA = Ky.hasOwnProperty, MA = Ky.propertyIsEnumerable, IA = Jp(/* @__PURE__ */ function() {
  return arguments;
}()) ? Jp : function(e) {
  return AA(e) && TA.call(e, "callee") && !MA.call(e, "callee");
}, gd = IA, al = { exports: {} };
function jA() {
  return !1;
}
var DA = jA;
al.exports;
(function(e, t) {
  var r = _r, n = DA, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, s = l ? l.isBuffer : void 0, c = s || n;
  e.exports = c;
})(al, al.exports);
var Xy = al.exports, NA = 9007199254740991, RA = /^(?:0|[1-9]\d*)$/;
function kA(e, t) {
  var r = typeof e;
  return t = t ?? NA, !!t && (r == "number" || r != "symbol" && RA.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var yd = kA, BA = 9007199254740991;
function LA(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= BA;
}
var bd = LA, HA = Vr, FA = bd, WA = zr, VA = "[object Arguments]", zA = "[object Array]", UA = "[object Boolean]", YA = "[object Date]", qA = "[object Error]", GA = "[object Function]", KA = "[object Map]", XA = "[object Number]", ZA = "[object Object]", QA = "[object RegExp]", JA = "[object Set]", eT = "[object String]", tT = "[object WeakMap]", rT = "[object ArrayBuffer]", nT = "[object DataView]", aT = "[object Float32Array]", iT = "[object Float64Array]", oT = "[object Int8Array]", lT = "[object Int16Array]", sT = "[object Int32Array]", cT = "[object Uint8Array]", uT = "[object Uint8ClampedArray]", fT = "[object Uint16Array]", dT = "[object Uint32Array]", at = {};
at[aT] = at[iT] = at[oT] = at[lT] = at[sT] = at[cT] = at[uT] = at[fT] = at[dT] = !0;
at[VA] = at[zA] = at[rT] = at[UA] = at[nT] = at[YA] = at[qA] = at[GA] = at[KA] = at[XA] = at[ZA] = at[QA] = at[JA] = at[eT] = at[tT] = !1;
function pT(e) {
  return WA(e) && FA(e.length) && !!at[HA(e)];
}
var hT = pT;
function vT(e) {
  return function(t) {
    return e(t);
  };
}
var Zy = vT, il = { exports: {} };
il.exports;
(function(e, t) {
  var r = ly, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var s = a && a.require && a.require("util").types;
      return s || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(il, il.exports);
var mT = il.exports, gT = hT, yT = Zy, eh = mT, th = eh && eh.isTypedArray, bT = th ? yT(th) : gT, Qy = bT, xT = OA, wT = gd, ST = zt, OT = Xy, $T = yd, CT = Qy, PT = Object.prototype, _T = PT.hasOwnProperty;
function ET(e, t) {
  var r = ST(e), n = !r && wT(e), a = !r && !n && OT(e), i = !r && !n && !a && CT(e), o = r || n || a || i, l = o ? xT(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || _T.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    $T(c, s))) && l.push(c);
  return l;
}
var AT = ET, TT = Object.prototype;
function MT(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || TT;
  return e === r;
}
var IT = MT;
function jT(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Jy = jT, DT = Jy, NT = DT(Object.keys, Object), RT = NT, kT = IT, BT = RT, LT = Object.prototype, HT = LT.hasOwnProperty;
function FT(e) {
  if (!kT(e))
    return BT(e);
  var t = [];
  for (var r in Object(e))
    HT.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var WT = FT, VT = rd, zT = bd;
function UT(e) {
  return e != null && zT(e.length) && !VT(e);
}
var ps = UT, YT = AT, qT = WT, GT = ps;
function KT(e) {
  return GT(e) ? YT(e) : qT(e);
}
var xd = KT, XT = fA, ZT = wA, QT = xd;
function JT(e) {
  return XT(e, QT, ZT);
}
var eM = JT, rh = eM, tM = 1, rM = Object.prototype, nM = rM.hasOwnProperty;
function aM(e, t, r, n, a, i) {
  var o = r & tM, l = rh(e), s = l.length, c = rh(t), u = c.length;
  if (s != u && !o)
    return !1;
  for (var f = s; f--; ) {
    var d = l[f];
    if (!(o ? d in t : nM.call(t, d)))
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
var iM = aM, oM = Tn, lM = _r, sM = oM(lM, "DataView"), cM = sM, uM = Tn, fM = _r, dM = uM(fM, "Promise"), pM = dM, hM = Tn, vM = _r, mM = hM(vM, "Set"), eb = mM, gM = Tn, yM = _r, bM = gM(yM, "WeakMap"), xM = bM, Pu = cM, _u = ad, Eu = pM, Au = eb, Tu = xM, tb = Vr, Na = cy, nh = "[object Map]", wM = "[object Object]", ah = "[object Promise]", ih = "[object Set]", oh = "[object WeakMap]", lh = "[object DataView]", SM = Na(Pu), OM = Na(_u), $M = Na(Eu), CM = Na(Au), PM = Na(Tu), vn = tb;
(Pu && vn(new Pu(new ArrayBuffer(1))) != lh || _u && vn(new _u()) != nh || Eu && vn(Eu.resolve()) != ah || Au && vn(new Au()) != ih || Tu && vn(new Tu()) != oh) && (vn = function(e) {
  var t = tb(e), r = t == wM ? e.constructor : void 0, n = r ? Na(r) : "";
  if (n)
    switch (n) {
      case SM:
        return lh;
      case OM:
        return nh;
      case $M:
        return ah;
      case CM:
        return ih;
      case PM:
        return oh;
    }
  return t;
});
var _M = vn, Tc = Vy, EM = qy, AM = oA, TM = iM, sh = _M, ch = zt, uh = Xy, MM = Qy, IM = 1, fh = "[object Arguments]", dh = "[object Array]", Oo = "[object Object]", jM = Object.prototype, ph = jM.hasOwnProperty;
function DM(e, t, r, n, a, i) {
  var o = ch(e), l = ch(t), s = o ? dh : sh(e), c = l ? dh : sh(t);
  s = s == fh ? Oo : s, c = c == fh ? Oo : c;
  var u = s == Oo, f = c == Oo, d = s == c;
  if (d && uh(e)) {
    if (!uh(t))
      return !1;
    o = !0, u = !1;
  }
  if (d && !u)
    return i || (i = new Tc()), o || MM(e) ? EM(e, t, r, n, a, i) : AM(e, t, s, r, n, a, i);
  if (!(r & IM)) {
    var p = u && ph.call(e, "__wrapped__"), v = f && ph.call(t, "__wrapped__");
    if (p || v) {
      var m = p ? e.value() : e, h = v ? t.value() : t;
      return i || (i = new Tc()), a(m, h, r, n, i);
    }
  }
  return d ? (i || (i = new Tc()), TM(e, t, r, n, a, i)) : !1;
}
var NM = DM, RM = NM, hh = zr;
function rb(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !hh(e) && !hh(t) ? e !== e && t !== t : RM(e, t, r, n, rb, a);
}
var wd = rb, kM = Vy, BM = wd, LM = 1, HM = 2;
function FM(e, t, r, n) {
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
      var f = new kM();
      if (n)
        var d = n(c, u, s, e, t, f);
      if (!(d === void 0 ? BM(u, c, LM | HM, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var WM = FM, VM = tn;
function zM(e) {
  return e === e && !VM(e);
}
var nb = zM, UM = nb, YM = xd;
function qM(e) {
  for (var t = YM(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, UM(a)];
  }
  return t;
}
var GM = qM;
function KM(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var ab = KM, XM = WM, ZM = GM, QM = ab;
function JM(e) {
  var t = ZM(e);
  return t.length == 1 && t[0][2] ? QM(t[0][0], t[0][1]) : function(r) {
    return r === e || XM(r, e, t);
  };
}
var eI = JM;
function tI(e, t) {
  return e != null && t in Object(e);
}
var rI = tI, nI = hy, aI = gd, iI = zt, oI = yd, lI = bd, sI = ss;
function cI(e, t, r) {
  t = nI(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = sI(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && lI(a) && oI(o, a) && (iI(e) || aI(e)));
}
var uI = cI, fI = rI, dI = uI;
function pI(e, t) {
  return e != null && dI(e, t, fI);
}
var hI = pI, vI = wd, mI = vy, gI = hI, yI = td, bI = nb, xI = ab, wI = ss, SI = 1, OI = 2;
function $I(e, t) {
  return yI(e) && bI(t) ? xI(wI(e), t) : function(r) {
    var n = mI(r, e);
    return n === void 0 && n === t ? gI(r, e) : vI(t, n, SI | OI);
  };
}
var CI = $I;
function PI(e) {
  return e;
}
var Ra = PI;
function _I(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var EI = _I, AI = sd;
function TI(e) {
  return function(t) {
    return AI(t, e);
  };
}
var MI = TI, II = EI, jI = MI, DI = td, NI = ss;
function RI(e) {
  return DI(e) ? II(NI(e)) : jI(e);
}
var kI = RI, BI = eI, LI = CI, HI = Ra, FI = zt, WI = kI;
function VI(e) {
  return typeof e == "function" ? e : e == null ? HI : typeof e == "object" ? FI(e) ? LI(e[0], e[1]) : BI(e) : WI(e);
}
var rn = VI;
function zI(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var UI = zI;
function YI(e) {
  return e !== e;
}
var qI = YI;
function GI(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var KI = GI, XI = UI, ZI = qI, QI = KI;
function JI(e, t, r) {
  return t === t ? QI(e, t, r) : XI(e, ZI, r);
}
var ej = JI, tj = ej;
function rj(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && tj(e, t, 0) > -1;
}
var nj = rj;
function aj(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var ij = aj;
function oj() {
}
var lj = oj, Mc = eb, sj = lj, cj = md, uj = 1 / 0, fj = Mc && 1 / cj(new Mc([, -0]))[1] == uj ? function(e) {
  return new Mc(e);
} : sj, dj = fj, pj = zy, hj = nj, vj = ij, mj = Yy, gj = dj, yj = md, bj = 200;
function xj(e, t, r) {
  var n = -1, a = hj, i = e.length, o = !0, l = [], s = l;
  if (r)
    o = !1, a = vj;
  else if (i >= bj) {
    var c = t ? null : gj(e);
    if (c)
      return yj(c);
    o = !1, a = mj, s = new pj();
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
var wj = xj, Sj = rn, Oj = wj;
function $j(e, t) {
  return e && e.length ? Oj(e, Sj(t)) : [];
}
var Cj = $j;
const vh = /* @__PURE__ */ We(Cj);
function ib(e, t, r) {
  return t === !0 ? vh(e, r) : Pe(t) ? vh(e, t) : e;
}
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
var Pj = ["ref"];
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
function Ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mh(Object(r), !0).forEach(function(n) {
      hs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _j(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lb(n.key), n);
  }
}
function Ej(e, t, r) {
  return t && gh(e.prototype, t), r && gh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Aj(e, t, r) {
  return t = ol(t), Tj(e, ob() ? Reflect.construct(t, r || [], ol(e).constructor) : t.apply(e, r));
}
function Tj(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Mj(e);
}
function Mj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ob() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ob = function() {
    return !!e;
  })();
}
function ol(e) {
  return ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ol(e);
}
function Ij(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Mu(e, t);
}
function Mu(e, t) {
  return Mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Mu(e, t);
}
function hs(e, t, r) {
  return t = lb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lb(e) {
  var t = jj(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function jj(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dj(e, t) {
  if (e == null) return {};
  var r = Nj(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Nj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Rj(e) {
  return e.value;
}
function kj(e, t) {
  if (/* @__PURE__ */ T.isValidElement(e))
    return /* @__PURE__ */ T.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ T.createElement(e, t);
  t.ref;
  var r = Dj(t, Pj);
  return /* @__PURE__ */ T.createElement(vd, r);
}
var yh = 1, qn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    _j(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = Aj(this, t, [].concat(a)), hs(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return Ij(t, e), Ej(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > yh || Math.abs(a.height - this.lastBoundingBox.height) > yh) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      }, kj(i, Ar(Ar({}, this.props), {}, {
        payload: ib(u, c, Rj)
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
hs(qn, "displayName", "Legend");
hs(qn, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var bh = to, Bj = gd, Lj = zt, xh = bh ? bh.isConcatSpreadable : void 0;
function Hj(e) {
  return Lj(e) || Bj(e) || !!(xh && e && e[xh]);
}
var Fj = Hj, Wj = Gy, Vj = Fj;
function sb(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Vj), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? sb(l, t - 1, r, n, a) : Wj(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var cb = sb;
function zj(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var s = o[e ? l : ++a];
      if (r(i[s], s, i) === !1)
        break;
    }
    return t;
  };
}
var Uj = zj, Yj = Uj, qj = Yj(), Gj = qj, Kj = Gj, Xj = xd;
function Zj(e, t) {
  return e && Kj(e, t, Xj);
}
var ub = Zj, Qj = ps;
function Jj(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Qj(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var eD = Jj, tD = ub, rD = eD, nD = rD(tD), Sd = nD, aD = Sd, iD = ps;
function oD(e, t) {
  var r = -1, n = iD(e) ? Array(e.length) : [];
  return aD(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
var fb = oD;
function lD(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var sD = lD, wh = _a;
function cD(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, i = wh(e), o = t !== void 0, l = t === null, s = t === t, c = wh(t);
    if (!l && !c && !i && e > t || i && o && s && !l && !c || n && o && s || !r && s || !a)
      return 1;
    if (!n && !i && !c && e < t || c && r && a && !n && !i || l && r && a || !o && a || !s)
      return -1;
  }
  return 0;
}
var uD = cD, fD = uD;
function dD(e, t, r) {
  for (var n = -1, a = e.criteria, i = t.criteria, o = a.length, l = r.length; ++n < o; ) {
    var s = fD(a[n], i[n]);
    if (s) {
      if (n >= l)
        return s;
      var c = r[n];
      return s * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var pD = dD, Ic = ld, hD = sd, vD = rn, mD = fb, gD = sD, yD = Zy, bD = pD, xD = Ra, wD = zt;
function SD(e, t, r) {
  t.length ? t = Ic(t, function(i) {
    return wD(i) ? function(o) {
      return hD(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : t = [xD];
  var n = -1;
  t = Ic(t, yD(vD));
  var a = mD(e, function(i, o, l) {
    var s = Ic(t, function(c) {
      return c(i);
    });
    return { criteria: s, index: ++n, value: i };
  });
  return gD(a, function(i, o) {
    return bD(i, o, r);
  });
}
var OD = SD;
function $D(e, t, r) {
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
var CD = $D, PD = CD, Sh = Math.max;
function _D(e, t, r) {
  return t = Sh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = Sh(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), PD(e, this, l);
  };
}
var ED = _D;
function AD(e) {
  return function() {
    return e;
  };
}
var TD = AD, MD = Tn, ID = function() {
  try {
    var e = MD(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), db = ID, jD = TD, Oh = db, DD = Ra, ND = Oh ? function(e, t) {
  return Oh(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: jD(t),
    writable: !0
  });
} : DD, RD = ND, kD = 800, BD = 16, LD = Date.now;
function HD(e) {
  var t = 0, r = 0;
  return function() {
    var n = LD(), a = BD - (n - r);
    if (r = n, a > 0) {
      if (++t >= kD)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var FD = HD, WD = RD, VD = FD, zD = VD(WD), UD = zD, YD = Ra, qD = ED, GD = UD;
function KD(e, t) {
  return GD(qD(e, t, YD), e + "");
}
var XD = KD, ZD = nd, QD = ps, JD = yd, e2 = tn;
function t2(e, t, r) {
  if (!e2(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? QD(r) && JD(t, r.length) : n == "string" && t in r) ? ZD(r[t], e) : !1;
}
var vs = t2, r2 = cb, n2 = OD, a2 = XD, $h = vs, i2 = a2(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && $h(e, t[0], t[1]) ? t = [] : r > 2 && $h(t[0], t[1], t[2]) && (t = [t[0]]), n2(e, r2(t, 1), []);
}), o2 = i2;
const Od = /* @__PURE__ */ We(o2);
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function Iu() {
  return Iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Iu.apply(this, arguments);
}
function l2(e, t) {
  return f2(e) || u2(e, t) || c2(e, t) || s2();
}
function s2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c2(e, t) {
  if (e) {
    if (typeof e == "string") return Ch(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ch(e, t);
  }
}
function Ch(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u2(e, t) {
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
function f2(e) {
  if (Array.isArray(e)) return e;
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
function jc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ph(Object(r), !0).forEach(function(n) {
      d2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d2(e, t, r) {
  return t = p2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p2(e) {
  var t = h2(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function h2(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v2(e) {
  return Array.isArray(e) && gt(e[0]) && gt(e[1]) ? e.join(" ~ ") : e;
}
var m2 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, l = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, u = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, v = t.labelClassName, m = t.label, h = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, S = function() {
    if (u && u.length) {
      var I = {
        padding: 0,
        margin: 0
      }, N = (d ? Od(u, d) : u).map(function(j, E) {
        if (j.type === "none")
          return null;
        var A = jc({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, l), D = j.formatter || f || v2, R = j.value, k = j.name, L = R, H = k;
        if (D && L != null && H != null) {
          var B = D(R, k, j, E, u);
          if (Array.isArray(B)) {
            var W = l2(B, 2);
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
  }, O = jc({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), g = jc({
    margin: 0
  }, c), x = !Ae(m), $ = x ? m : "", C = De("recharts-default-tooltip", p), _ = De("recharts-tooltip-label", v);
  x && h && u !== void 0 && u !== null && ($ = h(m, u));
  var M = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ T.createElement("div", Iu({
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
  return t = g2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g2(e) {
  var t = y2(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function y2(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ga = "recharts-tooltip-wrapper", b2 = {
  visibility: "hidden"
};
function x2(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return De(Ga, $o($o($o($o({}, "".concat(Ga, "-right"), ee(r) && t && ee(t.x) && r >= t.x), "".concat(Ga, "-left"), ee(r) && t && ee(t.x) && r < t.x), "".concat(Ga, "-bottom"), ee(n) && t && ee(t.y) && n >= t.y), "".concat(Ga, "-top"), ee(n) && t && ee(t.y) && n < t.y));
}
function _h(e) {
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
function w2(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function S2(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, l = e.useTranslate3d, s = e.viewBox, c, u, f;
  return o.height > 0 && o.width > 0 && r ? (u = _h({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), f = _h({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = w2({
    translateX: u,
    translateY: f,
    useTranslate3d: l
  })) : c = b2, {
    cssProperties: c,
    cssClasses: x2({
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
function Eh(e, t) {
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
    t % 2 ? Eh(Object(r), !0).forEach(function(n) {
      Du(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hb(n.key), n);
  }
}
function C2(e, t, r) {
  return t && $2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function P2(e, t, r) {
  return t = ll(t), _2(e, pb() ? Reflect.construct(t, r || [], ll(e).constructor) : t.apply(e, r));
}
function _2(e, t) {
  if (t && (ta(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return E2(e);
}
function E2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pb = function() {
    return !!e;
  })();
}
function ll(e) {
  return ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ll(e);
}
function A2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ju(e, t);
}
function ju(e, t) {
  return ju = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ju(e, t);
}
function Du(e, t, r) {
  return t = hb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hb(e) {
  var t = T2(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function T2(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Th = 1, M2 = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    O2(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = P2(this, t, [].concat(a)), Du(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Du(r, "handleKeyDown", function(o) {
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
  return A2(t, e), C2(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Th || Math.abs(n.height - this.state.lastBoundingBox.height) > Th) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, s = a.animationEasing, c = a.children, u = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, v = a.position, m = a.reverseDirection, h = a.useTranslate3d, y = a.viewBox, w = a.wrapperStyle, S = S2({
        allowEscapeViewBox: o,
        coordinate: u,
        offsetTopLeft: p,
        position: v,
        reverseDirection: m,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: h,
        viewBox: y
      }), O = S.cssClasses, g = S.cssProperties, x = Ah(Ah({
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
}(b.PureComponent), I2 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wr = {
  isSsr: I2(),
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
function Mh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ih(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mh(Object(r), !0).forEach(function(n) {
      $d(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function j2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function D2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mb(n.key), n);
  }
}
function N2(e, t, r) {
  return t && D2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function R2(e, t, r) {
  return t = sl(t), k2(e, vb() ? Reflect.construct(t, r || [], sl(e).constructor) : t.apply(e, r));
}
function k2(e, t) {
  if (t && (ra(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return B2(e);
}
function B2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vb = function() {
    return !!e;
  })();
}
function sl(e) {
  return sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sl(e);
}
function L2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nu(e, t);
}
function Nu(e, t) {
  return Nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Nu(e, t);
}
function $d(e, t, r) {
  return t = mb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mb(e) {
  var t = H2(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function H2(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F2(e) {
  return e.dataKey;
}
function W2(e, t) {
  return /* @__PURE__ */ T.isValidElement(e) ? /* @__PURE__ */ T.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ T.createElement(e, t) : /* @__PURE__ */ T.createElement(m2, t);
}
var lr = /* @__PURE__ */ function(e) {
  function t() {
    return j2(this, t), R2(this, t, arguments);
  }
  return L2(t, e), N2(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, s = a.animationEasing, c = a.content, u = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, v = a.payload, m = a.payloadUniqBy, h = a.position, y = a.reverseDirection, w = a.useTranslate3d, S = a.viewBox, O = a.wrapperStyle, g = v ?? [];
      f && g.length && (g = ib(v.filter(function($) {
        return $.value != null && ($.hide !== !0 || n.props.includeHidden);
      }), m, F2));
      var x = g.length > 0;
      return /* @__PURE__ */ T.createElement(M2, {
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
      }, W2(c, Ih(Ih({}, this.props), {}, {
        payload: g
      })));
    }
  }]);
}(b.PureComponent);
$d(lr, "displayName", "Tooltip");
$d(lr, "defaultProps", {
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
var V2 = _r, z2 = function() {
  return V2.Date.now();
}, U2 = z2, Y2 = /\s/;
function q2(e) {
  for (var t = e.length; t-- && Y2.test(e.charAt(t)); )
    ;
  return t;
}
var G2 = q2, K2 = G2, X2 = /^\s+/;
function Z2(e) {
  return e && e.slice(0, K2(e) + 1).replace(X2, "");
}
var Q2 = Z2, J2 = Q2, jh = tn, eN = _a, Dh = NaN, tN = /^[-+]0x[0-9a-f]+$/i, rN = /^0b[01]+$/i, nN = /^0o[0-7]+$/i, aN = parseInt;
function iN(e) {
  if (typeof e == "number")
    return e;
  if (eN(e))
    return Dh;
  if (jh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = jh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = J2(e);
  var r = rN.test(e);
  return r || nN.test(e) ? aN(e.slice(2), r ? 2 : 8) : tN.test(e) ? Dh : +e;
}
var gb = iN, oN = tn, Dc = U2, Nh = gb, lN = "Expected a function", sN = Math.max, cN = Math.min;
function uN(e, t, r) {
  var n, a, i, o, l, s, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(lN);
  t = Nh(t) || 0, oN(r) && (u = !!r.leading, f = "maxWait" in r, i = f ? sN(Nh(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function p(x) {
    var $ = n, C = a;
    return n = a = void 0, c = x, o = e.apply(C, $), o;
  }
  function v(x) {
    return c = x, l = setTimeout(y, t), u ? p(x) : o;
  }
  function m(x) {
    var $ = x - s, C = x - c, _ = t - $;
    return f ? cN(_, i - C) : _;
  }
  function h(x) {
    var $ = x - s, C = x - c;
    return s === void 0 || $ >= t || $ < 0 || f && C >= i;
  }
  function y() {
    var x = Dc();
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
    return l === void 0 ? o : w(Dc());
  }
  function g() {
    var x = Dc(), $ = h(x);
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
var fN = uN, dN = fN, pN = tn, hN = "Expected a function";
function vN(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(hN);
  return pN(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), dN(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var mN = vN;
const yb = /* @__PURE__ */ We(mN);
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
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
function Co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rh(Object(r), !0).forEach(function(n) {
      gN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gN(e, t, r) {
  return t = yN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yN(e) {
  var t = bN(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function bN(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xN(e, t) {
  return $N(e) || ON(e, t) || SN(e, t) || wN();
}
function wN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SN(e, t) {
  if (e) {
    if (typeof e == "string") return kh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kh(e, t);
  }
}
function kh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ON(e, t) {
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
function $N(e) {
  if (Array.isArray(e)) return e;
}
var bb = /* @__PURE__ */ b.forwardRef(function(e, t) {
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
  }), C = xN($, 2), _ = C[0], M = C[1], P = b.useCallback(function(N, j) {
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
    m > 0 && (N = yb(N, m, {
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
}), ms = function(t) {
  return null;
};
ms.displayName = "Cell";
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Bh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ru(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bh(Object(r), !0).forEach(function(n) {
      CN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CN(e, t, r) {
  return t = PN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PN(e) {
  var t = _N(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function _N(e, t) {
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
}, EN = 2e3, AN = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Lh = "recharts_measurement_span";
function TN(e) {
  var t = Ru({}, e);
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
  var n = TN(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (kn.widthCache[a])
    return kn.widthCache[a];
  try {
    var i = document.getElementById(Lh);
    i || (i = document.createElement("span"), i.setAttribute("id", Lh), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Ru(Ru({}, AN), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var l = i.getBoundingClientRect(), s = {
      width: l.width,
      height: l.height
    };
    return kn.widthCache[a] = s, ++kn.cacheCount > EN && (kn.cacheCount = 0, kn.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, MN = function(t) {
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
function cl(e, t) {
  return NN(e) || DN(e, t) || jN(e, t) || IN();
}
function IN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jN(e, t) {
  if (e) {
    if (typeof e == "string") return Hh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hh(e, t);
  }
}
function Hh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DN(e, t) {
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
function NN(e) {
  if (Array.isArray(e)) return e;
}
function RN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, BN(n.key), n);
  }
}
function kN(e, t, r) {
  return t && Fh(e.prototype, t), r && Fh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BN(e) {
  var t = LN(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function LN(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Wh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Vh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, HN = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, FN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, xb = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, WN = Object.keys(xb), Fn = "NaN";
function VN(e, t) {
  return e * xb[t];
}
var Po = /* @__PURE__ */ function() {
  function e(t, r) {
    RN(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !HN.test(r) && (this.num = NaN, this.unit = ""), WN.includes(r) && (this.num = VN(t, r), this.unit = "px");
  }
  return kN(e, [{
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
      var n, a = (n = FN.exec(r)) !== null && n !== void 0 ? n : [], i = cl(a, 3), o = i[1], l = i[2];
      return new e(parseFloat(o), l ?? "");
    }
  }]);
}();
function wb(e) {
  if (e.includes(Fn))
    return Fn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Wh.exec(t)) !== null && r !== void 0 ? r : [], a = cl(n, 4), i = a[1], o = a[2], l = a[3], s = Po.parse(i ?? ""), c = Po.parse(l ?? ""), u = o === "*" ? s.multiply(c) : s.divide(c);
    if (u.isNaN())
      return Fn;
    t = t.replace(Wh, u.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = Vh.exec(t)) !== null && f !== void 0 ? f : [], p = cl(d, 4), v = p[1], m = p[2], h = p[3], y = Po.parse(v ?? ""), w = Po.parse(h ?? ""), S = m === "+" ? y.add(w) : y.subtract(w);
    if (S.isNaN())
      return Fn;
    t = t.replace(Vh, S.toString());
  }
  return t;
}
var zh = /\(([^()]*)\)/;
function zN(e) {
  for (var t = e; t.includes("("); ) {
    var r = zh.exec(t), n = cl(r, 2), a = n[1];
    t = t.replace(zh, wb(a));
  }
  return t;
}
function UN(e) {
  var t = e.replace(/\s+/g, "");
  return t = zN(t), t = wb(t), t;
}
function YN(e) {
  try {
    return UN(e);
  } catch {
    return Fn;
  }
}
function Nc(e) {
  var t = YN(e.slice(5, -1));
  return t === Fn ? "" : t;
}
var qN = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], GN = ["dx", "dy", "angle", "className", "breakAll"];
function ku() {
  return ku = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ku.apply(this, arguments);
}
function Uh(e, t) {
  if (e == null) return {};
  var r = KN(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Yh(e, t) {
  return JN(e) || QN(e, t) || ZN(e, t) || XN();
}
function XN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZN(e, t) {
  if (e) {
    if (typeof e == "string") return qh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qh(e, t);
  }
}
function qh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QN(e, t) {
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
function JN(e) {
  if (Array.isArray(e)) return e;
}
var Sb = /[ \f\n\r\t\v\u2028\u2029]+/, Ob = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    Ae(r) || (n ? i = r.toString().split("") : i = r.toString().split(Sb));
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
}, eR = function(t, r, n, a, i) {
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
    var A = f.slice(0, E), D = Ob({
      breakAll: c,
      style: s,
      children: A + m
    }).wordsWithComputedWidth, R = d(D), k = R.length > o || v(R).width > Number(a);
    return [k, R];
  }, y = 0, w = f.length - 1, S = 0, O; y <= w && S <= f.length - 1; ) {
    var g = Math.floor((y + w) / 2), x = g - 1, $ = h(x), C = Yh($, 2), _ = C[0], M = C[1], P = h(g), I = Yh(P, 1), N = I[0];
    if (!_ && !N && (y = g + 1), _ && N && (w = g - 1), !_ && N) {
      O = M;
      break;
    }
    S++;
  }
  return O || p;
}, Gh = function(t) {
  var r = Ae(t) ? [] : t.toString().split(Sb);
  return [{
    words: r
  }];
}, tR = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, l = t.maxLines;
  if ((r || n) && !wr.isSsr) {
    var s, c, u = Ob({
      breakAll: o,
      children: a,
      style: i
    });
    if (u) {
      var f = u.wordsWithComputedWidth, d = u.spaceWidth;
      s = f, c = d;
    } else
      return Gh(a);
    return eR({
      breakAll: o,
      children: a,
      maxLines: l,
      style: i
    }, s, c, r, n);
  }
  return Gh(a);
}, Kh = "#808080", Pn = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, l = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, u = t.scaleToFit, f = u === void 0 ? !1 : u, d = t.textAnchor, p = d === void 0 ? "start" : d, v = t.verticalAnchor, m = v === void 0 ? "end" : v, h = t.fill, y = h === void 0 ? Kh : h, w = Uh(t, qN), S = b.useMemo(function() {
    return tR({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: f,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, f, w.style, w.width]), O = w.dx, g = w.dy, x = w.angle, $ = w.className, C = w.breakAll, _ = Uh(w, GN);
  if (!gt(n) || !gt(i))
    return null;
  var M = n + (ee(O) ? O : 0), P = i + (ee(g) ? g : 0), I;
  switch (m) {
    case "start":
      I = Nc("calc(".concat(c, ")"));
      break;
    case "middle":
      I = Nc("calc(".concat((S.length - 1) / 2, " * -").concat(l, " + (").concat(c, " / 2))"));
      break;
    default:
      I = Nc("calc(".concat(S.length - 1, " * -").concat(l, ")"));
      break;
  }
  var N = [];
  if (f) {
    var j = S[0].width, E = w.width;
    N.push("scale(".concat((ee(E) ? E / j : 1) / j, ")"));
  }
  return x && N.push("rotate(".concat(x, ", ").concat(M, ", ").concat(P, ")")), N.length && (_.transform = N.join(" ")), /* @__PURE__ */ T.createElement("text", ku({}, me(_, !0), {
    x: M,
    y: P,
    className: De("recharts-text", $),
    textAnchor: p,
    fill: y.includes("url") ? Kh : y
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
function rR(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Cd(e) {
  let t, r, n;
  e.length !== 2 ? (t = Jr, r = (l, s) => Jr(e(l), s), n = (l, s) => e(l) - s) : (t = e === Jr || e === rR ? e : nR, r = e, n = e);
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
function nR() {
  return 0;
}
function $b(e) {
  return e === null ? NaN : +e;
}
function* aR(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const iR = Cd(Jr), no = iR.right;
Cd($b).center;
class Xh extends Map {
  constructor(t, r = sR) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(Zh(this, t));
  }
  has(t) {
    return super.has(Zh(this, t));
  }
  set(t, r) {
    return super.set(oR(this, t), r);
  }
  delete(t) {
    return super.delete(lR(this, t));
  }
}
function Zh({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function oR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function lR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function sR(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function cR(e = Jr) {
  if (e === Jr) return Cb;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Cb(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const uR = Math.sqrt(50), fR = Math.sqrt(10), dR = Math.sqrt(2);
function ul(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= uR ? 10 : i >= fR ? 5 : i >= dR ? 2 : 1;
  let l, s, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, l = Math.round(e * c), s = Math.round(t * c), l / c < e && ++l, s / c > t && --s, c = -c) : (c = Math.pow(10, a) * o, l = Math.round(e / c), s = Math.round(t / c), l * c < e && ++l, s * c > t && --s), s < l && 0.5 <= r && r < 2 ? ul(e, t, r * 2) : [l, s, c];
}
function Bu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? ul(t, e, r) : ul(e, t, r);
  if (!(i >= a)) return [];
  const l = i - a + 1, s = new Array(l);
  if (n)
    if (o < 0) for (let c = 0; c < l; ++c) s[c] = (i - c) / -o;
    else for (let c = 0; c < l; ++c) s[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < l; ++c) s[c] = (a + c) / -o;
  else for (let c = 0; c < l; ++c) s[c] = (a + c) * o;
  return s;
}
function Lu(e, t, r) {
  return t = +t, e = +e, r = +r, ul(e, t, r)[2];
}
function Hu(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? Lu(t, e, r) : Lu(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function Qh(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Jh(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Pb(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? Cb : cR(a); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, u = Math.log(s), f = 0.5 * Math.exp(2 * u / 3), d = 0.5 * Math.sqrt(u * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / s + d)), v = Math.min(n, Math.floor(t + (s - c) * f / s + d));
      Pb(e, t, p, v, a);
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
function pR(e, t, r) {
  if (e = Float64Array.from(aR(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Jh(e);
    if (t >= 1) return Qh(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = Qh(Pb(e, i).subarray(0, i + 1)), l = Jh(e.subarray(i + 1));
    return o + (l - o) * (a - i);
  }
}
function hR(e, t, r = $b) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), l = +r(e[i + 1], i + 1, e);
    return o + (l - o) * (a - i);
  }
}
function vR(e, t, r) {
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
const Fu = Symbol("implicit");
function Pd() {
  var e = new Xh(), t = [], r = [], n = Fu;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Fu) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new Xh();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Pd(t, r).unknown(n);
  }, ar.apply(a, arguments), a;
}
function Pi() {
  var e = Pd().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, l = !1, s = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, v = p ? a : n, m = p ? n : a;
    i = (m - v) / Math.max(1, d - s + c * 2), l && (i = Math.floor(i)), v += (m - v - i * (d - s)) * u, o = i * (1 - s), l && (v = Math.round(v), o = Math.round(o));
    var h = vR(d).map(function(y) {
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
function _b(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return _b(t());
  }, e;
}
function di() {
  return _b(Pi.apply(null, arguments).paddingInner(1));
}
function _d(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Eb(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ao() {
}
var _i = 0.7, fl = 1 / _i, Gn = "\\s*([+-]?\\d+)\\s*", Ei = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mR = /^#([0-9a-f]{3,8})$/, gR = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`), yR = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), bR = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${Ei}\\)$`), xR = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${Ei}\\)$`), wR = new RegExp(`^hsl\\(${Ei},${Sr},${Sr}\\)$`), SR = new RegExp(`^hsla\\(${Ei},${Sr},${Sr},${Ei}\\)$`), ev = {
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
_d(ao, Ai, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: tv,
  // Deprecated! Use color.formatHex.
  formatHex: tv,
  formatHex8: OR,
  formatHsl: $R,
  formatRgb: rv,
  toString: rv
});
function tv() {
  return this.rgb().formatHex();
}
function OR() {
  return this.rgb().formatHex8();
}
function $R() {
  return Ab(this).formatHsl();
}
function rv() {
  return this.rgb().formatRgb();
}
function Ai(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = mR.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? nv(t) : r === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? _o(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? _o(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = gR.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = yR.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = bR.exec(e)) ? _o(t[1], t[2], t[3], t[4]) : (t = xR.exec(e)) ? _o(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = wR.exec(e)) ? ov(t[1], t[2] / 100, t[3] / 100, 1) : (t = SR.exec(e)) ? ov(t[1], t[2] / 100, t[3] / 100, t[4]) : ev.hasOwnProperty(e) ? nv(ev[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function nv(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function _o(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ht(e, t, r, n);
}
function CR(e) {
  return e instanceof ao || (e = Ai(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function Wu(e, t, r, n) {
  return arguments.length === 1 ? CR(e) : new Ht(e, t, r, n ?? 1);
}
function Ht(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
_d(Ht, Wu, Eb(ao, {
  brighter(e) {
    return e = e == null ? fl : Math.pow(fl, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(On(this.r), On(this.g), On(this.b), dl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: av,
  // Deprecated! Use color.formatHex.
  formatHex: av,
  formatHex8: PR,
  formatRgb: iv,
  toString: iv
}));
function av() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}`;
}
function PR() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}${bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function iv() {
  const e = dl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${On(this.r)}, ${On(this.g)}, ${On(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function dl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function On(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function bn(e) {
  return e = On(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ov(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new cr(e, t, r, n);
}
function Ab(e) {
  if (e instanceof cr) return new cr(e.h, e.s, e.l, e.opacity);
  if (e instanceof ao || (e = Ai(e)), !e) return new cr();
  if (e instanceof cr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, l = i - a, s = (i + a) / 2;
  return l ? (t === i ? o = (r - n) / l + (r < n) * 6 : r === i ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= s < 0.5 ? i + a : 2 - i - a, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new cr(o, l, s, e.opacity);
}
function _R(e, t, r, n) {
  return arguments.length === 1 ? Ab(e) : new cr(e, t, r, n ?? 1);
}
function cr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
_d(cr, _R, Eb(ao, {
  brighter(e) {
    return e = e == null ? fl : Math.pow(fl, e), new cr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new cr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new Ht(
      Rc(e >= 240 ? e - 240 : e + 120, a, n),
      Rc(e, a, n),
      Rc(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new cr(lv(this.h), Eo(this.s), Eo(this.l), dl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = dl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${lv(this.h)}, ${Eo(this.s) * 100}%, ${Eo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function lv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Eo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Rc(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Ed = (e) => () => e;
function ER(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function AR(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function TR(e) {
  return (e = +e) == 1 ? Tb : function(t, r) {
    return r - t ? AR(t, r, e) : Ed(isNaN(t) ? r : t);
  };
}
function Tb(e, t) {
  var r = t - e;
  return r ? ER(e, r) : Ed(isNaN(e) ? t : e);
}
const sv = function e(t) {
  var r = TR(t);
  function n(a, i) {
    var o = r((a = Wu(a)).r, (i = Wu(i)).r), l = r(a.g, i.g), s = r(a.b, i.b), c = Tb(a.opacity, i.opacity);
    return function(u) {
      return a.r = o(u), a.g = l(u), a.b = s(u), a.opacity = c(u), a + "";
    };
  }
  return n.gamma = e, n;
}(1);
function MR(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function IR(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function jR(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = ka(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(l) {
    for (o = 0; o < n; ++o) i[o] = a[o](l);
    return i;
  };
}
function DR(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function pl(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function NR(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = ka(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var Vu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, kc = new RegExp(Vu.source, "g");
function RR(e) {
  return function() {
    return e;
  };
}
function kR(e) {
  return function(t) {
    return e(t) + "";
  };
}
function BR(e, t) {
  var r = Vu.lastIndex = kc.lastIndex = 0, n, a, i, o = -1, l = [], s = [];
  for (e = e + "", t = t + ""; (n = Vu.exec(e)) && (a = kc.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), l[o] ? l[o] += i : l[++o] = i), (n = n[0]) === (a = a[0]) ? l[o] ? l[o] += a : l[++o] = a : (l[++o] = null, s.push({ i: o, x: pl(n, a) })), r = kc.lastIndex;
  return r < t.length && (i = t.slice(r), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? s[0] ? kR(s[0].x) : RR(t) : (t = s.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = s[u]).i] = f.x(c);
    return l.join("");
  });
}
function ka(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Ed(t) : (r === "number" ? pl : r === "string" ? (n = Ai(t)) ? (t = n, sv) : BR : t instanceof Ai ? sv : t instanceof Date ? DR : IR(t) ? MR : Array.isArray(t) ? jR : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? NR : pl)(e, t);
}
function Ad(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function LR(e, t) {
  t === void 0 && (t = e, e = ka);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[l](o - l);
  };
}
function HR(e) {
  return function() {
    return e;
  };
}
function hl(e) {
  return +e;
}
var cv = [0, 1];
function kt(e) {
  return e;
}
function zu(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : HR(isNaN(t) ? NaN : 0.5);
}
function FR(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function WR(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = zu(a, n), i = r(o, i)) : (n = zu(n, a), i = r(i, o)), function(l) {
    return i(n(l));
  };
}
function VR(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = zu(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(l) {
    var s = no(e, l, 1, n) - 1;
    return i[s](a[s](l));
  };
}
function io(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function gs() {
  var e = cv, t = cv, r = ka, n, a, i, o = kt, l, s, c;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== kt && (o = FR(e[0], e[d - 1])), l = d > 2 ? VR : WR, s = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (s || (s = l(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((c || (c = l(t, e.map(n), pl)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, hl), u()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Ad, u();
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
function Td() {
  return gs()(kt, kt);
}
function zR(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function vl(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function na(e) {
  return e = vl(Math.abs(e)), e ? e[1] : NaN;
}
function UR(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, l = e[0], s = 0; a > 0 && l > 0 && (s + l + 1 > n && (l = Math.max(1, n - s)), i.push(r.substring(a -= l, a + l)), !((s += l + 1) > n)); )
      l = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function YR(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var qR = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ti(e) {
  if (!(t = qR.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Md({
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
Ti.prototype = Md.prototype;
function Md(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Md.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function GR(e) {
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
var Mb;
function KR(e, t) {
  var r = vl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (Mb = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + vl(e, Math.max(0, t + i - 1))[0];
}
function uv(e, t) {
  var r = vl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const fv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: zR,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => uv(e * 100, t),
  r: uv,
  s: KR,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function dv(e) {
  return e;
}
var pv = Array.prototype.map, hv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function XR(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? dv : UR(pv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? dv : YR(pv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Ti(f);
    var d = f.fill, p = f.align, v = f.sign, m = f.symbol, h = f.zero, y = f.width, w = f.comma, S = f.precision, O = f.trim, g = f.type;
    g === "n" ? (w = !0, g = "g") : fv[g] || (S === void 0 && (S = 12), O = !0, g = "g"), (h || d === "0" && p === "=") && (h = !0, d = "0", p = "=");
    var x = m === "$" ? r : m === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", $ = m === "$" ? n : /[%p]/.test(g) ? o : "", C = fv[g], _ = /[defgprs%]/.test(g);
    S = S === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function M(P) {
      var I = x, N = $, j, E, A;
      if (g === "c")
        N = C(P) + N, P = "";
      else {
        P = +P;
        var D = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? s : C(Math.abs(P), S), O && (P = GR(P)), D && +P == 0 && v !== "+" && (D = !1), I = (D ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + I, N = (g === "s" ? hv[8 + Mb / 3] : "") + N + (D && v === "(" ? ")" : ""), _) {
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
    var p = c((f = Ti(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(na(d) / 3))) * 3, m = Math.pow(10, -v), h = hv[8 + v / 3];
    return function(y) {
      return p(m * y) + h;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Ao, Id, Ib;
ZR({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ZR(e) {
  return Ao = XR(e), Id = Ao.format, Ib = Ao.formatPrefix, Ao;
}
function QR(e) {
  return Math.max(0, -na(Math.abs(e)));
}
function JR(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(na(t) / 3))) * 3 - na(Math.abs(e)));
}
function ek(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, na(t) - na(e)) + 1;
}
function jb(e, t, r, n) {
  var a = Hu(e, t, r), i;
  switch (n = Ti(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = JR(a, o)) && (n.precision = i), Ib(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = ek(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = QR(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return Id(n);
}
function nn(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Bu(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return jb(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], l = n[i], s, c, u = 10;
    for (l < o && (c = o, o = l, l = c, c = a, a = i, i = c); u-- > 0; ) {
      if (c = Lu(o, l, r), c === s)
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
function ml() {
  var e = Td();
  return e.copy = function() {
    return io(e, ml());
  }, ar.apply(e, arguments), nn(e);
}
function Db(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, hl), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Db(e).unknown(t);
  }, e = arguments.length ? Array.from(e, hl) : [0, 1], nn(r);
}
function Nb(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function vv(e) {
  return Math.log(e);
}
function mv(e) {
  return Math.exp(e);
}
function tk(e) {
  return -Math.log(-e);
}
function rk(e) {
  return -Math.exp(-e);
}
function nk(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function ak(e) {
  return e === 10 ? nk : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function ik(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function gv(e) {
  return (t, r) => -e(-t, r);
}
function jd(e) {
  const t = e(vv, mv), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = ik(n), i = ak(n), r()[0] < 0 ? (a = gv(a), i = gv(i), e(tk, rk)) : e(vv, mv), t;
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
      y.length * 2 < h && (y = Bu(c, u, h));
    } else
      y = Bu(d, p, Math.min(p - d, h)).map(i);
    return f ? y.reverse() : y;
  }, t.tickFormat = (l, s) => {
    if (l == null && (l = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Ti(s)).precision == null && (s.trim = !0), s = Id(s)), l === 1 / 0) return s;
    const c = Math.max(1, n * l / t.ticks().length);
    return (u) => {
      let f = u / i(Math.round(a(u)));
      return f * n < n - 0.5 && (f *= n), f <= c ? s(u) : "";
    };
  }, t.nice = () => r(Nb(r(), {
    floor: (l) => i(Math.floor(a(l))),
    ceil: (l) => i(Math.ceil(a(l)))
  })), t;
}
function Rb() {
  const e = jd(gs()).domain([1, 10]);
  return e.copy = () => io(e, Rb()).base(e.base()), ar.apply(e, arguments), e;
}
function yv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function bv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Dd(e) {
  var t = 1, r = e(yv(t), bv(t));
  return r.constant = function(n) {
    return arguments.length ? e(yv(t = +n), bv(t)) : t;
  }, nn(r);
}
function kb() {
  var e = Dd(gs());
  return e.copy = function() {
    return io(e, kb()).constant(e.constant());
  }, ar.apply(e, arguments);
}
function xv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function ok(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function lk(e) {
  return e < 0 ? -e * e : e * e;
}
function Nd(e) {
  var t = e(kt, kt), r = 1;
  function n() {
    return r === 1 ? e(kt, kt) : r === 0.5 ? e(ok, lk) : e(xv(r), xv(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, nn(t);
}
function Rd() {
  var e = Nd(gs());
  return e.copy = function() {
    return io(e, Rd()).exponent(e.exponent());
  }, ar.apply(e, arguments), e;
}
function sk() {
  return Rd.apply(null, arguments).exponent(0.5);
}
function wv(e) {
  return Math.sign(e) * e * e;
}
function ck(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Bb() {
  var e = Td(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = ck(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(wv(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, hl)).map(wv)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Bb(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ar.apply(a, arguments), nn(a);
}
function Lb() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++o < l; ) r[o - 1] = hR(e, o / l);
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
    return Lb().domain(e).range(t).unknown(n);
  }, ar.apply(i, arguments);
}
function Hb() {
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
    return Hb().domain([e, t]).range(a).unknown(i);
  }, ar.apply(nn(o), arguments);
}
function Fb() {
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
    return Fb().domain(e).range(t).unknown(r);
  }, ar.apply(a, arguments);
}
const Bc = /* @__PURE__ */ new Date(), Lc = /* @__PURE__ */ new Date();
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
  }), r && (a.count = (i, o) => (Bc.setTime(+i), Lc.setTime(+o), e(Bc), e(Lc), Math.floor(r(Bc, Lc))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const gl = bt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
gl.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? bt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : gl);
gl.range;
const Mr = 1e3, tr = Mr * 60, Ir = tr * 60, Lr = Ir * 24, kd = Lr * 7, Sv = Lr * 30, Hc = Lr * 365, xn = bt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Mr);
}, (e, t) => (t - e) / Mr, (e) => e.getUTCSeconds());
xn.range;
const Bd = bt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mr);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getMinutes());
Bd.range;
const Ld = bt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getUTCMinutes());
Ld.range;
const Hd = bt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mr - e.getMinutes() * tr);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getHours());
Hd.range;
const Fd = bt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCHours());
Fd.range;
const oo = bt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * tr) / Lr,
  (e) => e.getDate() - 1
);
oo.range;
const ys = bt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => e.getUTCDate() - 1);
ys.range;
const Wb = bt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => Math.floor(e / Lr));
Wb.range;
function Mn(e) {
  return bt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * tr) / kd);
}
const bs = Mn(0), yl = Mn(1), uk = Mn(2), fk = Mn(3), aa = Mn(4), dk = Mn(5), pk = Mn(6);
bs.range;
yl.range;
uk.range;
fk.range;
aa.range;
dk.range;
pk.range;
function In(e) {
  return bt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / kd);
}
const xs = In(0), bl = In(1), hk = In(2), vk = In(3), ia = In(4), mk = In(5), gk = In(6);
xs.range;
bl.range;
hk.range;
vk.range;
ia.range;
mk.range;
gk.range;
const Wd = bt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Wd.range;
const Vd = bt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Vd.range;
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
function Vb(e, t, r, n, a, i) {
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
    [r, 1, kd],
    [t, 1, Sv],
    [t, 3, 3 * Sv],
    [e, 1, Hc]
  ];
  function l(c, u, f) {
    const d = u < c;
    d && ([c, u] = [u, c]);
    const p = f && typeof f.range == "function" ? f : s(c, u, f), v = p ? p.range(c, +u + 1) : [];
    return d ? v.reverse() : v;
  }
  function s(c, u, f) {
    const d = Math.abs(u - c) / f, p = Cd(([, , h]) => h).right(o, d);
    if (p === o.length) return e.every(Hu(c / Hc, u / Hc, f));
    if (p === 0) return gl.every(Math.max(Hu(c, u, f), 1));
    const [v, m] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return v.every(m);
  }
  return [l, s];
}
const [yk, bk] = Vb(Fr, Vd, xs, Wb, Fd, Ld), [xk, wk] = Vb(Hr, Wd, bs, oo, Hd, Bd);
function Fc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Wc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Xa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Sk(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, l = e.months, s = e.shortMonths, c = Za(a), u = Qa(a), f = Za(i), d = Qa(i), p = Za(o), v = Qa(o), m = Za(l), h = Qa(l), y = Za(s), w = Qa(s), S = {
    a: D,
    A: R,
    b: k,
    B: L,
    c: null,
    d: Ev,
    e: Ev,
    f: Uk,
    g: tB,
    G: nB,
    H: Wk,
    I: Vk,
    j: zk,
    L: zb,
    m: Yk,
    M: qk,
    p: H,
    q: B,
    Q: Mv,
    s: Iv,
    S: Gk,
    u: Kk,
    U: Xk,
    V: Zk,
    w: Qk,
    W: Jk,
    x: null,
    X: null,
    y: eB,
    Y: rB,
    Z: aB,
    "%": Tv
  }, O = {
    a: W,
    A: U,
    b: G,
    B: Q,
    c: null,
    d: Av,
    e: Av,
    f: sB,
    g: yB,
    G: xB,
    H: iB,
    I: oB,
    j: lB,
    L: Yb,
    m: cB,
    M: uB,
    p: ne,
    q: te,
    Q: Mv,
    s: Iv,
    S: fB,
    u: dB,
    U: pB,
    V: hB,
    w: vB,
    W: mB,
    x: null,
    X: null,
    y: gB,
    Y: bB,
    Z: wB,
    "%": Tv
  }, g = {
    a: M,
    A: P,
    b: I,
    B: N,
    c: j,
    d: Pv,
    e: Pv,
    f: Bk,
    g: Cv,
    G: $v,
    H: _v,
    I: _v,
    j: Dk,
    L: kk,
    m: jk,
    M: Nk,
    p: _,
    q: Ik,
    Q: Hk,
    s: Fk,
    S: Rk,
    u: _k,
    U: Ek,
    V: Ak,
    w: Pk,
    W: Tk,
    x: E,
    X: A,
    y: Cv,
    Y: $v,
    Z: Mk,
    "%": Lk
  };
  S.x = x(r, S), S.X = x(n, S), S.c = x(t, S), O.x = x(r, O), O.X = x(n, O), O.c = x(t, O);
  function x(z, K) {
    return function(q) {
      var F = [], J = -1, Z = 0, le = z.length, re, ae, de;
      for (q instanceof Date || (q = /* @__PURE__ */ new Date(+q)); ++J < le; )
        z.charCodeAt(J) === 37 && (F.push(z.slice(Z, J)), (ae = Ov[re = z.charAt(++J)]) != null ? re = z.charAt(++J) : ae = re === "e" ? " " : "0", (de = K[re]) && (re = de(q, ae)), F.push(re), Z = J + 1);
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
        "w" in F || (F.w = 1), "Z" in F ? (Z = Wc(Xa(F.y, 0, 1)), le = Z.getUTCDay(), Z = le > 4 || le === 0 ? bl.ceil(Z) : bl(Z), Z = ys.offset(Z, (F.V - 1) * 7), F.y = Z.getUTCFullYear(), F.m = Z.getUTCMonth(), F.d = Z.getUTCDate() + (F.w + 6) % 7) : (Z = Fc(Xa(F.y, 0, 1)), le = Z.getDay(), Z = le > 4 || le === 0 ? yl.ceil(Z) : yl(Z), Z = oo.offset(Z, (F.V - 1) * 7), F.y = Z.getFullYear(), F.m = Z.getMonth(), F.d = Z.getDate() + (F.w + 6) % 7);
      } else ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), le = "Z" in F ? Wc(Xa(F.y, 0, 1)).getUTCDay() : Fc(Xa(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (le + 5) % 7 : F.w + F.U * 7 - (le + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, Wc(F)) : Fc(F);
    };
  }
  function C(z, K, q, F) {
    for (var J = 0, Z = K.length, le = q.length, re, ae; J < Z; ) {
      if (F >= le) return -1;
      if (re = K.charCodeAt(J++), re === 37) {
        if (re = K.charAt(J++), ae = g[re in Ov ? K.charAt(J++) : re], !ae || (F = ae(z, q, F)) < 0) return -1;
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
var Ov = { "-": "", _: " ", 0: "0" }, $t = /^\s*\d+/, Ok = /^%/, $k = /[\\^$*+?|[\]().{}]/g;
function ze(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function Ck(e) {
  return e.replace($k, "\\$&");
}
function Za(e) {
  return new RegExp("^(?:" + e.map(Ck).join("|") + ")", "i");
}
function Qa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Pk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function _k(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function Ek(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Ak(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Tk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function $v(e, t, r) {
  var n = $t.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Cv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Mk(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Ik(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function jk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Pv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Dk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function _v(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Nk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Rk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function kk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Bk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Lk(e, t, r) {
  var n = Ok.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Hk(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Fk(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Ev(e, t) {
  return ze(e.getDate(), t, 2);
}
function Wk(e, t) {
  return ze(e.getHours(), t, 2);
}
function Vk(e, t) {
  return ze(e.getHours() % 12 || 12, t, 2);
}
function zk(e, t) {
  return ze(1 + oo.count(Hr(e), e), t, 3);
}
function zb(e, t) {
  return ze(e.getMilliseconds(), t, 3);
}
function Uk(e, t) {
  return zb(e, t) + "000";
}
function Yk(e, t) {
  return ze(e.getMonth() + 1, t, 2);
}
function qk(e, t) {
  return ze(e.getMinutes(), t, 2);
}
function Gk(e, t) {
  return ze(e.getSeconds(), t, 2);
}
function Kk(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Xk(e, t) {
  return ze(bs.count(Hr(e) - 1, e), t, 2);
}
function Ub(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? aa(e) : aa.ceil(e);
}
function Zk(e, t) {
  return e = Ub(e), ze(aa.count(Hr(e), e) + (Hr(e).getDay() === 4), t, 2);
}
function Qk(e) {
  return e.getDay();
}
function Jk(e, t) {
  return ze(yl.count(Hr(e) - 1, e), t, 2);
}
function eB(e, t) {
  return ze(e.getFullYear() % 100, t, 2);
}
function tB(e, t) {
  return e = Ub(e), ze(e.getFullYear() % 100, t, 2);
}
function rB(e, t) {
  return ze(e.getFullYear() % 1e4, t, 4);
}
function nB(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? aa(e) : aa.ceil(e), ze(e.getFullYear() % 1e4, t, 4);
}
function aB(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ze(t / 60 | 0, "0", 2) + ze(t % 60, "0", 2);
}
function Av(e, t) {
  return ze(e.getUTCDate(), t, 2);
}
function iB(e, t) {
  return ze(e.getUTCHours(), t, 2);
}
function oB(e, t) {
  return ze(e.getUTCHours() % 12 || 12, t, 2);
}
function lB(e, t) {
  return ze(1 + ys.count(Fr(e), e), t, 3);
}
function Yb(e, t) {
  return ze(e.getUTCMilliseconds(), t, 3);
}
function sB(e, t) {
  return Yb(e, t) + "000";
}
function cB(e, t) {
  return ze(e.getUTCMonth() + 1, t, 2);
}
function uB(e, t) {
  return ze(e.getUTCMinutes(), t, 2);
}
function fB(e, t) {
  return ze(e.getUTCSeconds(), t, 2);
}
function dB(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function pB(e, t) {
  return ze(xs.count(Fr(e) - 1, e), t, 2);
}
function qb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ia(e) : ia.ceil(e);
}
function hB(e, t) {
  return e = qb(e), ze(ia.count(Fr(e), e) + (Fr(e).getUTCDay() === 4), t, 2);
}
function vB(e) {
  return e.getUTCDay();
}
function mB(e, t) {
  return ze(bl.count(Fr(e) - 1, e), t, 2);
}
function gB(e, t) {
  return ze(e.getUTCFullYear() % 100, t, 2);
}
function yB(e, t) {
  return e = qb(e), ze(e.getUTCFullYear() % 100, t, 2);
}
function bB(e, t) {
  return ze(e.getUTCFullYear() % 1e4, t, 4);
}
function xB(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ia(e) : ia.ceil(e), ze(e.getUTCFullYear() % 1e4, t, 4);
}
function wB() {
  return "+0000";
}
function Tv() {
  return "%";
}
function Mv(e) {
  return +e;
}
function Iv(e) {
  return Math.floor(+e / 1e3);
}
var Bn, Gb, Kb;
SB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function SB(e) {
  return Bn = Sk(e), Gb = Bn.format, Bn.parse, Kb = Bn.utcFormat, Bn.utcParse, Bn;
}
function OB(e) {
  return new Date(e);
}
function $B(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function zd(e, t, r, n, a, i, o, l, s, c) {
  var u = Td(), f = u.invert, d = u.domain, p = c(".%L"), v = c(":%S"), m = c("%I:%M"), h = c("%I %p"), y = c("%a %d"), w = c("%b %d"), S = c("%B"), O = c("%Y");
  function g(x) {
    return (s(x) < x ? p : l(x) < x ? v : o(x) < x ? m : i(x) < x ? h : n(x) < x ? a(x) < x ? y : w : r(x) < x ? S : O)(x);
  }
  return u.invert = function(x) {
    return new Date(f(x));
  }, u.domain = function(x) {
    return arguments.length ? d(Array.from(x, $B)) : d().map(OB);
  }, u.ticks = function(x) {
    var $ = d();
    return e($[0], $[$.length - 1], x ?? 10);
  }, u.tickFormat = function(x, $) {
    return $ == null ? g : c($);
  }, u.nice = function(x) {
    var $ = d();
    return (!x || typeof x.range != "function") && (x = t($[0], $[$.length - 1], x ?? 10)), x ? d(Nb($, x)) : u;
  }, u.copy = function() {
    return io(u, zd(e, t, r, n, a, i, o, l, s, c));
  }, u;
}
function CB() {
  return ar.apply(zd(xk, wk, Hr, Wd, bs, oo, Hd, Bd, xn, Gb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function PB() {
  return ar.apply(zd(yk, bk, Fr, Vd, xs, ys, Fd, Ld, xn, Kb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function ws() {
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
  return c.range = u(ka), c.rangeRound = u(Ad), c.unknown = function(f) {
    return arguments.length ? (s = f, c) : s;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function an(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Xb() {
  var e = nn(ws()(kt));
  return e.copy = function() {
    return an(e, Xb());
  }, Ur.apply(e, arguments);
}
function Zb() {
  var e = jd(ws()).domain([1, 10]);
  return e.copy = function() {
    return an(e, Zb()).base(e.base());
  }, Ur.apply(e, arguments);
}
function Qb() {
  var e = Dd(ws());
  return e.copy = function() {
    return an(e, Qb()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function Ud() {
  var e = Nd(ws());
  return e.copy = function() {
    return an(e, Ud()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function _B() {
  return Ud.apply(null, arguments).exponent(0.5);
}
function Jb() {
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
    return Array.from({ length: n + 1 }, (a, i) => pR(e, i / n));
  }, r.copy = function() {
    return Jb(t).domain(e);
  }, Ur.apply(r, arguments);
}
function Ss() {
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
      return arguments.length ? ([y, w, S] = h, c = LR(m, [y, w, S]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = v(ka), p.rangeRound = v(Ad), p.unknown = function(m) {
    return arguments.length ? (d = m, p) : d;
  }, function(m) {
    return u = m, a = m(e), i = m(t), o = m(r), l = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function e0() {
  var e = nn(Ss()(kt));
  return e.copy = function() {
    return an(e, e0());
  }, Ur.apply(e, arguments);
}
function t0() {
  var e = jd(Ss()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return an(e, t0()).base(e.base());
  }, Ur.apply(e, arguments);
}
function r0() {
  var e = Dd(Ss());
  return e.copy = function() {
    return an(e, r0()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function Yd() {
  var e = Nd(Ss());
  return e.copy = function() {
    return an(e, Yd()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function EB() {
  return Yd.apply(null, arguments).exponent(0.5);
}
const jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Pi,
  scaleDiverging: e0,
  scaleDivergingLog: t0,
  scaleDivergingPow: Yd,
  scaleDivergingSqrt: EB,
  scaleDivergingSymlog: r0,
  scaleIdentity: Db,
  scaleImplicit: Fu,
  scaleLinear: ml,
  scaleLog: Rb,
  scaleOrdinal: Pd,
  scalePoint: di,
  scalePow: Rd,
  scaleQuantile: Lb,
  scaleQuantize: Hb,
  scaleRadial: Bb,
  scaleSequential: Xb,
  scaleSequentialLog: Zb,
  scaleSequentialPow: Ud,
  scaleSequentialQuantile: Jb,
  scaleSequentialSqrt: _B,
  scaleSequentialSymlog: Qb,
  scaleSqrt: sk,
  scaleSymlog: kb,
  scaleThreshold: Fb,
  scaleTime: CB,
  scaleUtc: PB,
  tickFormat: jb
}, Symbol.toStringTag, { value: "Module" }));
var AB = _a;
function TB(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n], o = t(i);
    if (o != null && (l === void 0 ? o === o && !AB(o) : r(o, l)))
      var l = o, s = i;
  }
  return s;
}
var Os = TB;
function MB(e, t) {
  return e > t;
}
var n0 = MB, IB = Os, jB = n0, DB = Ra;
function NB(e) {
  return e && e.length ? IB(e, DB, jB) : void 0;
}
var RB = NB;
const Zr = /* @__PURE__ */ We(RB);
function kB(e, t) {
  return e < t;
}
var a0 = kB, BB = Os, LB = a0, HB = Ra;
function FB(e) {
  return e && e.length ? BB(e, HB, LB) : void 0;
}
var WB = FB;
const $s = /* @__PURE__ */ We(WB);
var VB = ld, zB = rn, UB = fb, YB = zt;
function qB(e, t) {
  var r = YB(e) ? VB : UB;
  return r(e, zB(t));
}
var GB = qB, KB = cb, XB = GB;
function ZB(e, t) {
  return KB(XB(e, t), 1);
}
var QB = ZB;
const JB = /* @__PURE__ */ We(QB);
var eL = wd;
function tL(e, t) {
  return eL(e, t);
}
var rL = tL;
const oa = /* @__PURE__ */ We(rL);
var Ba = 1e9, nL = {
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
}, Gd, lt = !0, nr = "[DecimalError] ", $n = nr + "Invalid argument: ", qd = nr + "Exponent out of range: ", La = Math.floor, mn = Math.pow, aL = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Gt, St = 1e7, it = 7, i0 = 9007199254740991, xl = La(i0 / it), ce = {};
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
  return e = new t.constructor(e), t.s == e.s ? s0(t, e) : o0(t, (e.s = -e.s, e));
};
ce.modulo = ce.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(nr + "NaN");
  return r.s ? (lt = !1, t = Nr(r, e, 0, 1).times(e), lt = !0, r.minus(t)) : Ze(new n(r), a);
};
ce.naturalExponential = ce.exp = function() {
  return l0(this);
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
  return e = new t.constructor(e), t.s == e.s ? o0(t, e) : s0(t, (e.s = -e.s, e));
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
    if ((r = u < 0 ? -u : u) <= i0) {
      for (a = new s(Gt), t = Math.ceil(n / it + 4), lt = !1; r % 2 && (a = a.times(l), Nv(a.d, t)), r = La(r / 2), r !== 0; )
        l = l.times(l), Nv(l.d, t);
      return lt = !0, e.s < 0 ? new s(Gt).div(a) : Ze(a, n);
    }
  } else if (i < 0) throw Error(nr + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, lt = !1, a = e.times(Mi(l, n + c)), lt = !0, a = l0(a), a.s = i, a;
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
function o0(e, t) {
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
function l0(e, t) {
  var r, n, a, i, o, l, s = 0, c = 0, u = e.constructor, f = u.precision;
  if (pt(e) > 16) throw Error(qd + pt(e));
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
function Vc(e, t, r) {
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
    return t == null && (lt = !0), Vc(m, c);
  if (c += d, m.precision = c, r = br(v), n = r.charAt(0), i = pt(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = br(p.d), n = r.charAt(0), f++;
    i = pt(p), n > 1 ? (p = new m("0." + r), i++) : p = new m(n + "." + r.slice(1));
  } else
    return s = Vc(m, c + 2, h).times(i + ""), p = Mi(new m(n + "." + r.slice(1)), c - d).plus(s), m.precision = h, t == null ? (lt = !0, Ze(p, h)) : p;
  for (l = o = p = Nr(p.minus(Gt), p.plus(Gt), c), u = Ze(p.times(p), c), a = 3; ; ) {
    if (o = Ze(o.times(u), c), s = l.plus(Nr(o, new m(a), c)), br(s.d).slice(0, c) === br(l.d).slice(0, c))
      return l = l.times(2), i !== 0 && (l = l.plus(Vc(m, c + 2, h).times(i + ""))), l = Nr(l, new m(f), c), m.precision = h, t == null ? (lt = !0, Ze(l, h)) : l;
    l = s, a += 2;
  }
}
function Dv(e, t) {
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
    if (e.d.push(+t), lt && (e.e > xl || e.e < -xl)) throw Error(qd + r);
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
  if (lt && (e.e > xl || e.e < -xl))
    throw Error(qd + pt(e));
  return e;
}
function s0(e, t) {
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
function Nv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function c0(e) {
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
      return Dv(o, i.toString());
    } else if (typeof i != "string")
      throw Error($n + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, aL.test(i)) Dv(o, i);
    else throw Error($n + i);
  }
  if (a.prototype = ce, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = c0, a.config = a.set = iL, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function iL(e) {
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
var Gd = c0(nL);
Gt = new Gd(1);
const qe = Gd;
function oL(e) {
  return uL(e) || cL(e) || sL(e) || lL();
}
function lL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sL(e, t) {
  if (e) {
    if (typeof e == "string") return Uu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uu(e, t);
  }
}
function cL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function uL(e) {
  if (Array.isArray(e)) return Uu(e);
}
function Uu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var fL = function(t) {
  return t;
}, u0 = {
  "@@functional/placeholder": !0
}, f0 = function(t) {
  return t === u0;
}, Rv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && f0(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, dL = function e(t, r) {
  return t === 1 ? r : Rv(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(l) {
      return l !== u0;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, Rv(function() {
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      var u = a.map(function(f) {
        return f0(f) ? s.shift() : f;
      });
      return r.apply(void 0, oL(u).concat(s));
    }));
  });
}, Cs = function(t) {
  return dL(t.length, t);
}, Yu = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, pL = Cs(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), hL = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return fL;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(l, s) {
      return s(l);
    }, i.apply(void 0, arguments));
  };
}, qu = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, d0 = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(l, s) {
      return l === r[s];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function vL(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new qe(e).abs().log(10).toNumber()) + 1, t;
}
function mL(e, t, r) {
  for (var n = new qe(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var gL = Cs(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), yL = Cs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), bL = Cs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Ps = {
  rangeStep: mL,
  getDigitCount: vL,
  interpolateNumber: gL,
  uninterpolateNumber: yL,
  uninterpolateTruncation: bL
};
function Gu(e) {
  return SL(e) || wL(e) || p0(e) || xL();
}
function xL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function SL(e) {
  if (Array.isArray(e)) return Ku(e);
}
function Ii(e, t) {
  return CL(e) || $L(e, t) || p0(e, t) || OL();
}
function OL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p0(e, t) {
  if (e) {
    if (typeof e == "string") return Ku(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ku(e, t);
  }
}
function Ku(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function $L(e, t) {
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
function CL(e) {
  if (Array.isArray(e)) return e;
}
function h0(e) {
  var t = Ii(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function v0(e, t, r) {
  if (e.lte(0))
    return new qe(0);
  var n = Ps.getDigitCount(e.toNumber()), a = new qe(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, l = new qe(Math.ceil(i.div(o).toNumber())).add(r).mul(o), s = l.mul(a);
  return t ? s : new qe(Math.ceil(s));
}
function PL(e, t, r) {
  var n = 1, a = new qe(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new qe(10).pow(Ps.getDigitCount(e) - 1), a = new qe(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new qe(Math.floor(e)));
  } else e === 0 ? a = new qe(Math.floor((t - 1) / 2)) : r || (a = new qe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), l = hL(pL(function(s) {
    return a.add(new qe(s - o).mul(n)).toNumber();
  }), Yu);
  return l(0, t);
}
function m0(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new qe(0),
      tickMin: new qe(0),
      tickMax: new qe(0)
    };
  var i = v0(new qe(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new qe(0) : (o = new qe(e).add(t).div(2), o = o.sub(new qe(o).mod(i)));
  var l = Math.ceil(o.sub(e).div(i).toNumber()), s = Math.ceil(new qe(t).sub(o).div(i).toNumber()), c = l + s + 1;
  return c > r ? m0(e, t, r, n, a + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, l = t > 0 ? l : l + (r - c)), {
    step: i,
    tickMin: o.sub(new qe(l).mul(i)),
    tickMax: o.add(new qe(s).mul(i))
  });
}
function _L(e) {
  var t = Ii(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), l = h0([r, n]), s = Ii(l, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0) {
    var f = u === 1 / 0 ? [c].concat(Gu(Yu(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Gu(Yu(0, a - 1).map(function() {
      return -1 / 0;
    })), [u]);
    return r > n ? qu(f) : f;
  }
  if (c === u)
    return PL(c, a, i);
  var d = m0(c, u, o, i), p = d.step, v = d.tickMin, m = d.tickMax, h = Ps.rangeStep(v, m.add(new qe(0.1).mul(p)), p);
  return r > n ? qu(h) : h;
}
function EL(e, t) {
  var r = Ii(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = h0([n, a]), l = Ii(o, 2), s = l[0], c = l[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (s === c)
    return [s];
  var u = Math.max(t, 2), f = v0(new qe(c).sub(s).div(u - 1), i, 0), d = [].concat(Gu(Ps.rangeStep(new qe(s), new qe(c).sub(new qe(0.99).mul(f)), f)), [c]);
  return n > a ? qu(d) : d;
}
var AL = d0(_L), TL = d0(EL), ML = Oe.env.NODE_ENV === "production", zc = "Invariant failed";
function Ft(e, t) {
  if (ML)
    throw new Error(zc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(zc, ": ").concat(r) : zc;
  throw new Error(n);
}
var IL = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
}
function wl() {
  return wl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wl.apply(this, arguments);
}
function jL(e, t) {
  return kL(e) || RL(e, t) || NL(e, t) || DL();
}
function DL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NL(e, t) {
  if (e) {
    if (typeof e == "string") return kv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kv(e, t);
  }
}
function kv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function RL(e, t) {
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
function kL(e) {
  if (Array.isArray(e)) return e;
}
function BL(e, t) {
  if (e == null) return {};
  var r = LL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function HL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function FL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, b0(n.key), n);
  }
}
function WL(e, t, r) {
  return t && FL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VL(e, t, r) {
  return t = Sl(t), zL(e, g0() ? Reflect.construct(t, r || [], Sl(e).constructor) : t.apply(e, r));
}
function zL(e, t) {
  if (t && (la(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UL(e);
}
function UL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function g0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (g0 = function() {
    return !!e;
  })();
}
function Sl(e) {
  return Sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sl(e);
}
function YL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xu(e, t);
}
function Xu(e, t) {
  return Xu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xu(e, t);
}
function y0(e, t, r) {
  return t = b0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b0(e) {
  var t = qL(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function qL(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _s = /* @__PURE__ */ function(e) {
  function t() {
    return HL(this, t), VL(this, t, arguments);
  }
  return YL(t, e), WL(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, l = n.dataKey, s = n.data, c = n.dataPointFormatter, u = n.xAxis, f = n.yAxis, d = BL(n, IL), p = me(d, !1);
      this.props.direction === "x" && u.type !== "number" && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'ErrorBar requires Axis type property to be "number".') : Ft());
      var v = s.map(function(m) {
        var h = c(m, l), y = h.x, w = h.y, S = h.value, O = h.errorVal;
        if (!O)
          return null;
        var g = [], x, $;
        if (Array.isArray(O)) {
          var C = jL(O, 2);
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
        return /* @__PURE__ */ T.createElement(Fe, wl({
          className: "recharts-errorBar",
          key: "bar-".concat(g.map(function(H) {
            return "".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2);
          }))
        }, p), g.map(function(H) {
          return /* @__PURE__ */ T.createElement("line", wl({}, H, {
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
y0(_s, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
y0(_s, "displayName", "ErrorBar");
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
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
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bv(Object(r), !0).forEach(function(n) {
      GL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GL(e, t, r) {
  return t = KL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KL(e) {
  var t = XL(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function XL(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var x0 = function(t) {
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
      color: Kd(f),
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
function Lv(e) {
  return eH(e) || JL(e) || QL(e) || ZL();
}
function ZL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QL(e, t) {
  if (e) {
    if (typeof e == "string") return Zu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zu(e, t);
  }
}
function JL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function eH(e) {
  if (Array.isArray(e)) return Zu(e);
}
function Zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Hv(e, t) {
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
    t % 2 ? Hv(Object(r), !0).forEach(function(n) {
      Kn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kn(e, t, r) {
  return t = tH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tH(e) {
  var t = rH(e, "string");
  return Di(t) == "symbol" ? t : t + "";
}
function rH(e, t) {
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
  var a = JB(e, function(l) {
    return mt(l, t);
  });
  if (r === "number") {
    var i = a.filter(function(l) {
      return ee(l) || parseFloat(l);
    });
    return i.length ? [$s(i), Zr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(l) {
    return !Ae(l);
  }) : a;
  return o.map(function(l) {
    return gt(l) || l instanceof Date ? l : "";
  });
}
var nH = function(t) {
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
}, Kd = function(t) {
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
}, aH = function(t) {
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
}, iH = function(t) {
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
      }, $ = [].concat(Lv(O), [x]);
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
      var $ = [].concat(Lv(O), [{
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
}, oH = function(t, r, n, a) {
  var i = n.children, o = n.width, l = n.margin, s = o - (l.left || 0) - (l.right || 0), c = x0({
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
}, lH = function(t, r, n) {
  return Ae(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, w0 = function(t, r, n, a, i) {
  var o = r.props.children, l = rr(o, _s).filter(function(c) {
    return lH(a, i, c.props.direction);
  });
  if (l && l.length) {
    var s = l.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, u) {
      var f = mt(u, n);
      if (Ae(f)) return c;
      var d = Array.isArray(f) ? [$s(f), Zr(f)] : [f, f], p = s.reduce(function(v, m) {
        var h = mt(u, m, 0), y = d[0] - Math.abs(Array.isArray(h) ? h[0] : h), w = d[1] + Math.abs(Array.isArray(h) ? h[1] : h);
        return [Math.min(y, v[0]), Math.max(w, v[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, sH = function(t, r, n, a, i) {
  var o = r.map(function(l) {
    return w0(t, l, n, i, a);
  }).filter(function(l) {
    return !Ae(l);
  });
  return o && o.length ? o.reduce(function(l, s) {
    return [Math.min(l[0], s[0]), Math.max(l[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, S0 = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && w0(t, s, c, a) || pi(t, c, n, i);
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
}, O0 = function(t, r) {
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
}, Uc = /* @__PURE__ */ new WeakMap(), To = function(t, r) {
  if (typeof r != "function")
    return t;
  Uc.has(t) || Uc.set(t, /* @__PURE__ */ new WeakMap());
  var n = Uc.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, $0 = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, l = t.axisType;
  if (a === "auto")
    return o === "radial" && l === "radiusAxis" ? {
      scale: Pi(),
      realScaleType: "band"
    } : o === "radial" && l === "angleAxis" ? {
      scale: ml(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: di(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: Pi(),
      realScaleType: "band"
    } : {
      scale: ml(),
      realScaleType: "linear"
    };
  if (ro(a)) {
    var s = "scale".concat(cs(a));
    return {
      scale: (jv[s] || di)(),
      realScaleType: jv[s] ? s : "point"
    };
  }
  return Pe(a) ? {
    scale: a
  } : {
    scale: di(),
    realScaleType: "point"
  };
}, Fv = 1e-4, C0 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - Fv, o = Math.max(a[0], a[1]) + Fv, l = t(r[0]), s = t(r[n - 1]);
    (l < i || l > o || s < i || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, cH = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, uH = function(t, r) {
  if (!r || r.length !== 2 || !ee(r[0]) || !ee(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!ee(t[0]) || t[0] < n) && (i[0] = n), (!ee(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, fH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, l = 0; l < r; ++l) {
        var s = Ia(t[l][n][1]) ? t[l][n][0] : t[l][n][1];
        s >= 0 ? (t[l][n][0] = i, t[l][n][1] = i + s, i = t[l][n][1]) : (t[l][n][0] = o, t[l][n][1] = o + s, o = t[l][n][1]);
      }
}, dH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var l = Ia(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        l >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + l, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, pH = {
  sign: fH,
  // @ts-expect-error definitelytyped types are incorrect
  expand: M_,
  // @ts-expect-error definitelytyped types are incorrect
  none: Qn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: I_,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: j_,
  positive: dH
}, hH = function(t, r, n) {
  var a = r.map(function(l) {
    return l.props.dataKey;
  }), i = pH[n], o = T_().keys(a).value(function(l, s) {
    return +mt(l, s, 0);
  }).order(Su).offset(i);
  return o(t);
}, vH = function(t, r, n, a, i, o) {
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
          stackedData: hH(t, y.items, i)
        }));
      }, v);
    }
    return st(st({}, f), {}, Kn({}, d, p));
  }, u);
}, P0 = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, l = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var u = AL(c, i, l);
    return t.domain([$s(u), Zr(u)]), {
      niceTicks: u
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = TL(f, i, l);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Wv(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ae(a[t.dataKey])) {
      var l = Ko(r, "value", a[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var s = mt(a, Ae(o) ? t.dataKey : o);
  return Ae(s) ? null : t.scale(s);
}
var Vv = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, l = t.index;
  if (r.type === "category")
    return n[l] ? n[l].coordinate + a : null;
  var s = mt(o, r.dataKey, r.domain[l]);
  return Ae(s) ? null : r.scale(s) - i / 2 + a;
}, mH = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, gH = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? st(st({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (gt(i)) {
    var o = r[i];
    if (o) {
      var l = o.items.indexOf(t);
      return l >= 0 ? o.stackedData[l] : null;
    }
  }
  return null;
}, yH = function(t) {
  return t.reduce(function(r, n) {
    return [$s(n.concat([r[0]]).filter(ee)), Zr(n.concat([r[1]]).filter(ee))];
  }, [1 / 0, -1 / 0]);
}, _0 = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], l = o.stackedData, s = l.reduce(function(c, u) {
      var f = yH(u.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], a[0]), Math.max(s[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, zv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Uv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Qu = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (ee(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (zv.test(t[0])) {
    var i = +zv.exec(t[0])[1];
    a[0] = r[0] - i;
  } else Pe(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (ee(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Uv.test(t[1])) {
    var o = +Uv.exec(t[1])[1];
    a[1] = r[1] + o;
  } else Pe(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Ol = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = Od(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, l = 1, s = i.length; l < s; l++) {
      var c = i[l], u = i[l - 1];
      o = Math.min((c.coordinate || 0) - (u.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Yv = function(t, r, n) {
  return !t || !t.length || oa(t, Xt(n, "type.defaultProps.domain")) ? r : t;
}, E0 = function(t, r) {
  var n = t.type.defaultProps ? st(st({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, l = n.formatter, s = n.tooltipType, c = n.chartType, u = n.hide;
  return st(st({}, me(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: l,
    name: i || a,
    color: Kd(t),
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
function qv(e, t) {
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
    t % 2 ? qv(Object(r), !0).forEach(function(n) {
      A0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A0(e, t, r) {
  return t = bH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bH(e) {
  var t = xH(e, "string");
  return Ni(t) == "symbol" ? t : t + "";
}
function xH(e, t) {
  if (Ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wH(e, t) {
  return CH(e) || $H(e, t) || OH(e, t) || SH();
}
function SH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OH(e, t) {
  if (e) {
    if (typeof e == "string") return Gv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gv(e, t);
  }
}
function Gv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $H(e, t) {
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
function CH(e) {
  if (Array.isArray(e)) return e;
}
var $l = Math.PI / 180, PH = function(t) {
  return t * 180 / Math.PI;
}, rt = function(t, r, n, a) {
  return {
    x: t + Math.cos(-$l * a) * n,
    y: r + Math.sin(-$l * a) * n
  };
}, T0 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, _H = function(t, r, n, a, i) {
  var o = t.width, l = t.height, s = t.startAngle, c = t.endAngle, u = Rt(t.cx, o, o / 2), f = Rt(t.cy, l, l / 2), d = T0(o, l, n), p = Rt(t.innerRadius, d, 0), v = Rt(t.outerRadius, d, d * 0.8), m = Object.keys(r);
  return m.reduce(function(h, y) {
    var w = r[y], S = w.domain, O = w.reversed, g;
    if (Ae(w.range))
      a === "angleAxis" ? g = [s, c] : a === "radiusAxis" && (g = [p, v]), O && (g = [g[1], g[0]]);
    else {
      g = w.range;
      var x = g, $ = wH(x, 2);
      s = $[0], c = $[1];
    }
    var C = $0(w, i), _ = C.realScaleType, M = C.scale;
    M.domain(S).range(g), C0(M);
    var P = P0(M, Tr(Tr({}, w), {}, {
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
    return Tr(Tr({}, h), {}, A0({}, y, I));
  }, {});
}, EH = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, AH = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, l = EH({
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
    angle: PH(c),
    angleInRadian: c
  };
}, TH = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, MH = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), l = Math.min(i, o);
  return t + l * 360;
}, Kv = function(t, r) {
  var n = t.x, a = t.y, i = AH({
    x: n,
    y: a
  }, r), o = i.radius, l = i.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var u = TH(r), f = u.startAngle, d = u.endAngle, p = l, v;
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
    angle: MH(p, r)
  }) : null;
}, M0 = function(t) {
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
var IH = ["offset"];
function jH(e) {
  return kH(e) || RH(e) || NH(e) || DH();
}
function DH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NH(e, t) {
  if (e) {
    if (typeof e == "string") return Ju(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ju(e, t);
  }
}
function RH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kH(e) {
  if (Array.isArray(e)) return Ju(e);
}
function Ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function BH(e, t) {
  if (e == null) return {};
  var r = LH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Xv(e, t) {
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
    t % 2 ? Xv(Object(r), !0).forEach(function(n) {
      HH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HH(e, t, r) {
  return t = FH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FH(e) {
  var t = WH(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function WH(e, t) {
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
var VH = function(t) {
  var r = t.value, n = t.formatter, a = Ae(t.children) ? r : t.children;
  return Pe(n) ? n(a) : a;
}, zH = function(t, r) {
  var n = Nt(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, UH = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, l = t.className, s = i, c = s.cx, u = s.cy, f = s.innerRadius, d = s.outerRadius, p = s.startAngle, v = s.endAngle, m = s.clockWise, h = (f + d) / 2, y = zH(p, v), w = y >= 0 ? 1 : -1, S, O;
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
}, YH = function(t) {
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
}, qH = function(t) {
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
}, GH = function(t) {
  return "cx" in t && ee(t.cx);
};
function Ot(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = BH(e, IH), a = vt({
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
    p = VH(a);
  var v = GH(i), m = me(a, !0);
  if (v && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return UH(a, p, m);
  var h = v ? YH(a) : qH(a);
  return /* @__PURE__ */ T.createElement(Pn, ki({
    className: De("recharts-label", f)
  }, m, h, {
    breakAll: d
  }), p);
}
Ot.displayName = "Label";
var I0 = function(t) {
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
}, KH = function(t, r) {
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
}, XH = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = I0(t), o = rr(a, Ot).map(function(s, c) {
    return /* @__PURE__ */ b.cloneElement(s, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var l = KH(t.label, r || i);
  return [l].concat(jH(o));
};
Ot.parseViewBox = I0;
Ot.renderCallByParent = XH;
function ZH(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var QH = ZH;
const JH = /* @__PURE__ */ We(QH);
function Bi(e) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bi(e);
}
var eF = ["valueAccessor"], tF = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function rF(e) {
  return oF(e) || iF(e) || aF(e) || nF();
}
function nF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aF(e, t) {
  if (e) {
    if (typeof e == "string") return ef(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ef(e, t);
  }
}
function iF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oF(e) {
  if (Array.isArray(e)) return ef(e);
}
function ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Cl() {
  return Cl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cl.apply(this, arguments);
}
function Zv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zv(Object(r), !0).forEach(function(n) {
      lF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lF(e, t, r) {
  return t = sF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sF(e) {
  var t = cF(e, "string");
  return Bi(t) == "symbol" ? t : t + "";
}
function cF(e, t) {
  if (Bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Jv(e, t) {
  if (e == null) return {};
  var r = uF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var fF = function(t) {
  return Array.isArray(t.value) ? JH(t.value) : t.value;
};
function Rr(e) {
  var t = e.valueAccessor, r = t === void 0 ? fF : t, n = Jv(e, eF), a = n.data, i = n.dataKey, o = n.clockWise, l = n.id, s = n.textBreakAll, c = Jv(n, tF);
  return !a || !a.length ? null : /* @__PURE__ */ T.createElement(Fe, {
    className: "recharts-label-list"
  }, a.map(function(u, f) {
    var d = Ae(i) ? r(u, f) : mt(u && u.payload, i), p = Ae(l) ? {} : {
      id: "".concat(l, "-").concat(f)
    };
    return /* @__PURE__ */ T.createElement(Ot, Cl({}, me(u, !0), c, p, {
      parentViewBox: u.parentViewBox,
      value: d,
      textBreakAll: s,
      viewBox: Ot.parseViewBox(Ae(o) ? u : Qv(Qv({}, u), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Rr.displayName = "LabelList";
function dF(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ T.createElement(Rr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ T.isValidElement(e) || Pe(e) ? /* @__PURE__ */ T.createElement(Rr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Ea(e) ? /* @__PURE__ */ T.createElement(Rr, Cl({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function pF(e, t) {
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
  var i = dF(e.label, t);
  return [i].concat(rF(a));
}
Rr.renderCallByParent = pF;
function Li(e) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e);
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
      hF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hF(e, t, r) {
  return t = vF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vF(e) {
  var t = mF(e, "string");
  return Li(t) == "symbol" ? t : t + "";
}
function mF(e, t) {
  if (Li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gF = function(t, r) {
  var n = Nt(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, Mo = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, l = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, u = s * (l ? 1 : -1) + a, f = Math.asin(s / u) / $l, d = c ? i : i + o * f, p = rt(r, n, u, d), v = rt(r, n, a, d), m = c ? i - o * f : i, h = rt(r, n, u * Math.cos(f * $l), m);
  return {
    center: p,
    circleTangency: v,
    lineTangency: h,
    theta: f
  };
}, j0 = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, l = t.endAngle, s = gF(o, l), c = o + s, u = rt(r, n, i, o), f = rt(r, n, i, c), d = "M ".concat(u.x, ",").concat(u.y, `
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
}, yF = function(t) {
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
      `) : j0({
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
}, bF = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, D0 = function(t) {
  var r = tm(tm({}, bF), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, l = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, u = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || u === f)
    return null;
  var p = De("recharts-sector", d), v = o - i, m = Rt(l, v, 0, !0), h;
  return m > 0 && Math.abs(u - f) < 360 ? h = yF({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(m, v / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: u,
    endAngle: f
  }) : h = j0({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: u,
    endAngle: f
  }), /* @__PURE__ */ T.createElement("path", tf({}, me(r, !0), {
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
function rf() {
  return rf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rf.apply(this, arguments);
}
function rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rm(Object(r), !0).forEach(function(n) {
      xF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xF(e, t, r) {
  return t = wF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wF(e) {
  var t = SF(e, "string");
  return Hi(t) == "symbol" ? t : t + "";
}
function SF(e, t) {
  if (Hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var am = {
  curveBasisClosed: b_,
  curveBasisOpen: x_,
  curveBasis: y_,
  curveBumpX: a_,
  curveBumpY: i_,
  curveLinearClosed: w_,
  curveLinear: fs,
  curveMonotoneX: S_,
  curveMonotoneY: O_,
  curveNatural: $_,
  curveStep: C_,
  curveStepAfter: __,
  curveStepBefore: P_
}, Io = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Ja = function(t) {
  return t.x;
}, ei = function(t) {
  return t.y;
}, OF = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(cs(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? am["".concat(n).concat(r === "vertical" ? "Y" : "X")] : am[n] || fs;
}, $F = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, l = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, u = OF(n, l), f = c ? i.filter(function(m) {
    return Io(m);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(m) {
      return Io(m);
    }) : o, v = f.map(function(m, h) {
      return nm(nm({}, m), {}, {
        base: p[h]
      });
    });
    return l === "vertical" ? d = So().y(ei).x1(Ja).x0(function(m) {
      return m.base.x;
    }) : d = So().x(Ja).y1(ei).y0(function(m) {
      return m.base.y;
    }), d.defined(Io).curve(u), d(v);
  }
  return l === "vertical" && ee(o) ? d = So().y(ei).x1(Ja).x0(o) : ee(o) ? d = So().x(Ja).y1(ei).y0(o) : d = Ay().x(Ja).y(ei), d.defined(Io).curve(u), d(f);
}, Xn = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? $F(t) : a;
  return /* @__PURE__ */ T.createElement("path", rf({}, me(t, !1), Xo(t), {
    className: De("recharts-curve", r),
    d: o,
    ref: i
  }));
}, CF = Object.getOwnPropertyNames, PF = Object.getOwnPropertySymbols, _F = Object.prototype.hasOwnProperty;
function im(e, t) {
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
function om(e) {
  return CF(e).concat(PF(e));
}
var N0 = Object.hasOwn || function(e, t) {
  return _F.call(e, t);
};
function Ha(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var R0 = "_owner", lm = Object.getOwnPropertyDescriptor, sm = Object.keys;
function EF(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function AF(e, t) {
  return Ha(e.getTime(), t.getTime());
}
function cm(e, t, r) {
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
function TF(e, t, r) {
  var n = sm(e), a = n.length;
  if (sm(t).length !== a)
    return !1;
  for (var i; a-- > 0; )
    if (i = n[a], i === R0 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !N0(t, i) || !r.equals(e[i], t[i], i, i, e, t, r))
      return !1;
  return !0;
}
function ti(e, t, r) {
  var n = om(e), a = n.length;
  if (om(t).length !== a)
    return !1;
  for (var i, o, l; a-- > 0; )
    if (i = n[a], i === R0 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !N0(t, i) || !r.equals(e[i], t[i], i, i, e, t, r) || (o = lm(e, i), l = lm(t, i), (o || l) && (!o || !l || o.configurable !== l.configurable || o.enumerable !== l.enumerable || o.writable !== l.writable)))
      return !1;
  return !0;
}
function MF(e, t) {
  return Ha(e.valueOf(), t.valueOf());
}
function IF(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function um(e, t, r) {
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
function jF(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var DF = "[object Arguments]", NF = "[object Boolean]", RF = "[object Date]", kF = "[object Map]", BF = "[object Number]", LF = "[object Object]", HF = "[object RegExp]", FF = "[object Set]", WF = "[object String]", VF = Array.isArray, fm = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, dm = Object.assign, zF = Object.prototype.toString.call.bind(Object.prototype.toString);
function UF(e) {
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
    if (VF(u))
      return t(u, f, d);
    if (fm != null && fm(u))
      return s(u, f, d);
    if (p === Date)
      return r(u, f, d);
    if (p === RegExp)
      return o(u, f, d);
    if (p === Map)
      return n(u, f, d);
    if (p === Set)
      return l(u, f, d);
    var v = zF(u);
    return v === RF ? r(u, f, d) : v === HF ? o(u, f, d) : v === kF ? n(u, f, d) : v === FF ? l(u, f, d) : v === LF ? typeof u.then != "function" && typeof f.then != "function" && a(u, f, d) : v === DF ? a(u, f, d) : v === NF || v === BF || v === WF ? i(u, f, d) : !1;
  };
}
function YF(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? ti : EF,
    areDatesEqual: AF,
    areMapsEqual: n ? im(cm, ti) : cm,
    areObjectsEqual: n ? ti : TF,
    arePrimitiveWrappersEqual: MF,
    areRegExpsEqual: IF,
    areSetsEqual: n ? im(um, ti) : um,
    areTypedArraysEqual: n ? ti : jF
  };
  if (r && (a = dm({}, a, r(a))), t) {
    var i = jo(a.areArraysEqual), o = jo(a.areMapsEqual), l = jo(a.areObjectsEqual), s = jo(a.areSetsEqual);
    a = dm({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: l,
      areSetsEqual: s
    });
  }
  return a;
}
function qF(e) {
  return function(t, r, n, a, i, o, l) {
    return e(t, r, l);
  };
}
function GF(e) {
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
var KF = on();
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
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, l = YF(e), s = UF(l), c = n ? n(s) : qF(s);
  return GF({ circular: r, comparator: s, createState: a, equals: c, strict: o });
}
function XF(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function pm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : XF(a);
  };
  requestAnimationFrame(n);
}
function nf(e) {
  "@babel/helpers - typeof";
  return nf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nf(e);
}
function ZF(e) {
  return t3(e) || e3(e) || JF(e) || QF();
}
function QF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JF(e, t) {
  if (e) {
    if (typeof e == "string") return hm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hm(e, t);
  }
}
function hm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function e3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function t3(e) {
  if (Array.isArray(e)) return e;
}
function r3() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, l = ZF(o), s = l[0], c = l.slice(1);
        if (typeof s == "number") {
          pm(a.bind(null, c), s);
          return;
        }
        a(s), pm(a.bind(null, c));
        return;
      }
      nf(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
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
function vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vm(Object(r), !0).forEach(function(n) {
      k0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k0(e, t, r) {
  return t = n3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n3(e) {
  var t = a3(e, "string");
  return Fi(t) === "symbol" ? t : String(t);
}
function a3(e, t) {
  if (Fi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var i3 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, o3 = function(t) {
  return t;
}, l3 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, hi = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return mm(mm({}, n), {}, k0({}, a, t(a, r[a])));
  }, {});
}, gm = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(l3(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, s3 = Oe.env.NODE_ENV !== "production", Pl = function(t, r, n, a, i, o, l, s) {
  if (s3 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, l, s], u = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[u++];
      }));
    }
};
function c3(e, t) {
  return d3(e) || f3(e, t) || B0(e, t) || u3();
}
function u3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f3(e, t) {
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
function d3(e) {
  if (Array.isArray(e)) return e;
}
function p3(e) {
  return m3(e) || v3(e) || B0(e) || h3();
}
function h3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B0(e, t) {
  if (e) {
    if (typeof e == "string") return af(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return af(e, t);
  }
}
function v3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function m3(e) {
  if (Array.isArray(e)) return af(e);
}
function af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var _l = 1e-4, L0 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, H0 = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, ym = function(t, r) {
  return function(n) {
    var a = L0(t, r);
    return H0(a, n);
  };
}, g3 = function(t, r) {
  return function(n) {
    var a = L0(t, r), i = [].concat(p3(a.map(function(o, l) {
      return o * l;
    }).slice(1)), [0]);
    return H0(i, n);
  };
}, bm = function() {
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
          }), u = c3(c, 4);
          a = u[0], i = u[1], o = u[2], l = u[3];
        } else
          Pl(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Pl([a, o, i, l].every(function(h) {
    return typeof h == "number" && h >= 0 && h <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = ym(a, o), d = ym(i, l), p = g3(a, o), v = function(y) {
    return y > 1 ? 1 : y < 0 ? 0 : y;
  }, m = function(y) {
    for (var w = y > 1 ? 1 : y, S = w, O = 0; O < 8; ++O) {
      var g = f(S) - w, x = p(S);
      if (Math.abs(g - w) < _l || x < _l)
        return d(S);
      S = v(S - g / x);
    }
    return d(S);
  };
  return m.isStepper = !1, m;
}, y3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, l = o === void 0 ? 17 : o, s = function(u, f, d) {
    var p = -(u - f) * n, v = d * i, m = d + (p - v) * l / 1e3, h = d * l / 1e3 + u;
    return Math.abs(h - f) < _l && Math.abs(m) < _l ? [f, 0] : [h, m];
  };
  return s.isStepper = !0, s.dt = l, s;
}, b3 = function() {
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
        return bm(a);
      case "spring":
        return y3();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return bm(a);
        Pl(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Pl(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Wi(e) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e);
}
function xm(e) {
  return S3(e) || w3(e) || F0(e) || x3();
}
function x3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function S3(e) {
  if (Array.isArray(e)) return lf(e);
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
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(r), !0).forEach(function(n) {
      of(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function of(e, t, r) {
  return t = O3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O3(e) {
  var t = $3(e, "string");
  return Wi(t) === "symbol" ? t : String(t);
}
function $3(e, t) {
  if (Wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function C3(e, t) {
  return E3(e) || _3(e, t) || F0(e, t) || P3();
}
function P3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F0(e, t) {
  if (e) {
    if (typeof e == "string") return lf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lf(e, t);
  }
}
function lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _3(e, t) {
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
function E3(e) {
  if (Array.isArray(e)) return e;
}
var El = function(t, r, n) {
  return t + (r - t) * n;
}, sf = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, A3 = function e(t, r, n) {
  var a = hi(function(i, o) {
    if (sf(o)) {
      var l = t(o.from, o.to, o.velocity), s = C3(l, 2), c = s[0], u = s[1];
      return Pt(Pt({}, o), {}, {
        from: c,
        velocity: u
      });
    }
    return o;
  }, r);
  return n < 1 ? hi(function(i, o) {
    return sf(o) ? Pt(Pt({}, o), {}, {
      velocity: El(o.velocity, a[i].velocity, n),
      from: El(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const T3 = function(e, t, r, n, a) {
  var i = i3(e, t), o = i.reduce(function(h, y) {
    return Pt(Pt({}, h), {}, of({}, y, [e[y], t[y]]));
  }, {}), l = i.reduce(function(h, y) {
    return Pt(Pt({}, h), {}, of({}, y, {
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
    return !Object.values(l).filter(sf).length;
  }, v = function(y) {
    c || (c = y);
    var w = y - c, S = w / r.dt;
    l = A3(r, l, S), a(Pt(Pt(Pt({}, e), t), d())), c = y, p() || (s = requestAnimationFrame(f));
  }, m = function(y) {
    u || (u = y);
    var w = (y - u) / n, S = hi(function(g, x) {
      return El.apply(void 0, xm(x).concat([r(w)]));
    }, o);
    if (a(Pt(Pt(Pt({}, e), t), S)), w < 1)
      s = requestAnimationFrame(f);
    else {
      var O = hi(function(g, x) {
        return El.apply(void 0, xm(x).concat([r(1)]));
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
var M3 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function I3(e, t) {
  if (e == null) return {};
  var r = j3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function j3(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Yc(e) {
  return k3(e) || R3(e) || N3(e) || D3();
}
function D3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N3(e, t) {
  if (e) {
    if (typeof e == "string") return cf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cf(e, t);
  }
}
function R3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k3(e) {
  if (Array.isArray(e)) return cf(e);
}
function cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(r), !0).forEach(function(n) {
      li(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function li(e, t, r) {
  return t = W0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, W0(n.key), n);
  }
}
function H3(e, t, r) {
  return t && L3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function W0(e) {
  var t = F3(e, "string");
  return sa(t) === "symbol" ? t : String(t);
}
function F3(e, t) {
  if (sa(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sa(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function W3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uf(e, t);
}
function uf(e, t) {
  return uf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, uf(e, t);
}
function V3(e) {
  var t = z3();
  return function() {
    var n = Al(e), a;
    if (t) {
      var i = Al(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return ff(this, a);
  };
}
function ff(e, t) {
  if (t && (sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return df(e);
}
function df(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function z3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Al(e) {
  return Al = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Al(e);
}
var Pr = /* @__PURE__ */ function(e) {
  W3(r, e);
  var t = V3(r);
  function r(n, a) {
    var i;
    B3(this, r), i = t.call(this, n, a);
    var o = i.props, l = o.isActive, s = o.attributeName, c = o.from, u = o.to, f = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(df(i)), i.changeStyle = i.changeStyle.bind(df(i)), !l || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: u
      }), ff(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, ff(i);
      i.state = {
        style: s ? li({}, s, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return H3(r, [{
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
        if (!(KF(a.to, u) && a.canBegin && a.isActive)) {
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
      var i = this, o = a.from, l = a.to, s = a.duration, c = a.easing, u = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = T3(o, l, b3(c), s, this.changeStyle), v = function() {
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
          return [].concat(Yc(m), [i.runJSAnimation.bind(i, {
            from: C.style,
            to: g,
            duration: w,
            easing: O
          }), w]);
        var M = gm(_, w, O), P = or(or(or({}, C.style), g), {}, {
          transition: M
        });
        return [].concat(Yc(m), [P, w, $]).filter(o3);
      };
      return this.manager.start([s].concat(Yc(o.reduce(p, [u, Math.max(d, l)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = r3());
      var i = a.begin, o = a.duration, l = a.attributeName, s = a.to, c = a.easing, u = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, v = this.manager;
      if (this.unSubscribe = v.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var m = l ? li({}, l, s) : s, h = gm(Object.keys(m), o, c);
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
      var s = I3(a, M3), c = b.Children.count(i), u = this.state.style;
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
function Tl() {
  return Tl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tl.apply(this, arguments);
}
function U3(e, t) {
  return K3(e) || G3(e, t) || q3(e, t) || Y3();
}
function Y3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q3(e, t) {
  if (e) {
    if (typeof e == "string") return Om(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Om(e, t);
  }
}
function Om(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function G3(e, t) {
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
function K3(e) {
  if (Array.isArray(e)) return e;
}
function $m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), !0).forEach(function(n) {
      X3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X3(e, t, r) {
  return t = Z3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z3(e) {
  var t = Q3(e, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function Q3(e, t) {
  if (Vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pm = function(t, r, n, a, i) {
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
}, J3 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, l = r.width, s = r.height;
  if (Math.abs(l) > 0 && Math.abs(s) > 0) {
    var c = Math.min(i, i + l), u = Math.max(i, i + l), f = Math.min(o, o + s), d = Math.max(o, o + s);
    return n >= c && n <= u && a >= f && a <= d;
  }
  return !1;
}, eW = {
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
}, Xd = function(t) {
  var r = Cm(Cm({}, eW), t), n = b.useRef(), a = b.useState(-1), i = U3(a, 2), o = i[0], l = i[1];
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
    }, /* @__PURE__ */ T.createElement("path", Tl({}, me(r, !0), {
      className: S,
      d: Pm($, C, g, x, d),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("path", Tl({}, me(r, !0), {
    className: S,
    d: Pm(s, c, u, f, d)
  }));
}, tW = ["points", "className", "baseLinePoints", "connectNulls"];
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
function rW(e, t) {
  if (e == null) return {};
  var r = nW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _m(e) {
  return lW(e) || oW(e) || iW(e) || aW();
}
function aW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iW(e, t) {
  if (e) {
    if (typeof e == "string") return pf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pf(e, t);
  }
}
function oW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function lW(e) {
  if (Array.isArray(e)) return pf(e);
}
function pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Em = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, sW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Em(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Em(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, vi = function(t, r) {
  var n = sW(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(_m(i), _m(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, l, s) {
      return "".concat(o).concat(s === 0 ? "M" : "L").concat(l.x, ",").concat(l.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, cW = function(t, r, n) {
  var a = vi(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(vi(r.reverse(), n).slice(1));
}, uW = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = rW(t, tW);
  if (!r || !r.length)
    return null;
  var l = De("recharts-polygon", n);
  if (a && a.length) {
    var s = o.stroke && o.stroke !== "none", c = cW(r, a, i);
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
var Es = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = De("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ T.createElement("circle", hf({}, me(t, !1), Xo(t), {
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
var fW = ["x", "y", "top", "left", "width", "height", "className"];
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vf.apply(this, arguments);
}
function Am(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(r), !0).forEach(function(n) {
      pW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Am(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pW(e, t, r) {
  return t = hW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hW(e) {
  var t = vW(e, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function vW(e, t) {
  if (zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mW(e, t) {
  if (e == null) return {};
  var r = gW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var yW = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, bW = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, l = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, u = t.width, f = u === void 0 ? 0 : u, d = t.height, p = d === void 0 ? 0 : d, v = t.className, m = mW(t, fW), h = dW({
    x: n,
    y: i,
    top: l,
    left: c,
    width: f,
    height: p
  }, m);
  return !ee(n) || !ee(i) || !ee(f) || !ee(p) || !ee(l) || !ee(c) ? null : /* @__PURE__ */ T.createElement("path", vf({}, me(h, !0), {
    className: De("recharts-cross", v),
    d: yW(n, i, f, p, l, c)
  }));
}, xW = Os, wW = n0, SW = rn;
function OW(e, t) {
  return e && e.length ? xW(e, SW(t), wW) : void 0;
}
var $W = OW;
const CW = /* @__PURE__ */ We($W);
var PW = Os, _W = rn, EW = a0;
function AW(e, t) {
  return e && e.length ? PW(e, _W(t), EW) : void 0;
}
var TW = AW;
const MW = /* @__PURE__ */ We(TW);
var IW = ["cx", "cy", "angle", "ticks", "axisLine"], jW = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
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
function Tm(e, t) {
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
    t % 2 ? Tm(Object(r), !0).forEach(function(n) {
      As(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mm(e, t) {
  if (e == null) return {};
  var r = DW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function NW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Im(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, z0(n.key), n);
  }
}
function RW(e, t, r) {
  return t && Im(e.prototype, t), r && Im(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kW(e, t, r) {
  return t = Ml(t), BW(e, V0() ? Reflect.construct(t, r || [], Ml(e).constructor) : t.apply(e, r));
}
function BW(e, t) {
  if (t && (ca(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return LW(e);
}
function LW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function V0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (V0 = function() {
    return !!e;
  })();
}
function Ml(e) {
  return Ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ml(e);
}
function HW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mf(e, t);
}
function mf(e, t) {
  return mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, mf(e, t);
}
function As(e, t, r) {
  return t = z0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z0(e) {
  var t = FW(e, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function FW(e, t) {
  if (ca(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ts = /* @__PURE__ */ function(e) {
  function t() {
    return NW(this, t), kW(this, t, arguments);
  }
  return HW(t, e), RW(t, [{
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, s = CW(l, function(u) {
        return u.coordinate || 0;
      }), c = MW(l, function(u) {
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, s = n.axisLine, c = Mm(n, IW), u = l.reduce(function(v, m) {
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
      var n = this, a = this.props, i = a.ticks, o = a.tick, l = a.angle, s = a.tickFormatter, c = a.stroke, u = Mm(a, jW), f = this.getTickTextAnchor(), d = me(u, !1), p = me(o, !1), v = i.map(function(m, h) {
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
          className: De("recharts-polar-radius-axis-tick", M0(o)),
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
As(Ts, "displayName", "PolarRadiusAxis");
As(Ts, "axisType", "radiusAxis");
As(Ts, "defaultProps", {
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
function jm(e, t) {
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
    t % 2 ? jm(Object(r), !0).forEach(function(n) {
      Ms(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y0(n.key), n);
  }
}
function VW(e, t, r) {
  return t && Dm(e.prototype, t), r && Dm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zW(e, t, r) {
  return t = Il(t), UW(e, U0() ? Reflect.construct(t, r || [], Il(e).constructor) : t.apply(e, r));
}
function UW(e, t) {
  if (t && (ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return YW(e);
}
function YW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function U0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (U0 = function() {
    return !!e;
  })();
}
function Il(e) {
  return Il = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Il(e);
}
function qW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gf(e, t);
}
function gf(e, t) {
  return gf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, gf(e, t);
}
function Ms(e, t, r) {
  return t = Y0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y0(e) {
  var t = GW(e, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function GW(e, t) {
  if (ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var KW = Math.PI / 180, Nm = 1e-5, Is = /* @__PURE__ */ function(e) {
  function t() {
    return WW(this, t), zW(this, t, arguments);
  }
  return qW(t, e), VW(t, [{
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * KW), o;
      return i > Nm ? o = a === "outer" ? "start" : "end" : i < -Nm ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, l = n.axisLine, s = n.axisLineType, c = dn(dn({}, me(this.props, !1)), {}, {
        fill: "none"
      }, me(l, !1));
      if (s === "circle")
        return /* @__PURE__ */ T.createElement(Es, gn({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var u = this.props.ticks, f = u.map(function(d) {
        return rt(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ T.createElement(uW, gn({
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
          className: De("recharts-polar-angle-axis-tick", M0(o)),
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
Ms(Is, "displayName", "PolarAngleAxis");
Ms(Is, "axisType", "angleAxis");
Ms(Is, "defaultProps", {
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
var XW = Jy, ZW = XW(Object.getPrototypeOf, Object), QW = ZW, JW = Vr, eV = QW, tV = zr, rV = "[object Object]", nV = Function.prototype, aV = Object.prototype, q0 = nV.toString, iV = aV.hasOwnProperty, oV = q0.call(Object);
function lV(e) {
  if (!tV(e) || JW(e) != rV)
    return !1;
  var t = eV(e);
  if (t === null)
    return !0;
  var r = iV.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && q0.call(r) == oV;
}
var sV = lV;
const cV = /* @__PURE__ */ We(sV);
var uV = Vr, fV = zr, dV = "[object Boolean]";
function pV(e) {
  return e === !0 || e === !1 || fV(e) && uV(e) == dV;
}
var hV = pV;
const vV = /* @__PURE__ */ We(hV);
function Ui(e) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e);
}
function jl() {
  return jl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jl.apply(this, arguments);
}
function mV(e, t) {
  return xV(e) || bV(e, t) || yV(e, t) || gV();
}
function gV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yV(e, t) {
  if (e) {
    if (typeof e == "string") return Rm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rm(e, t);
  }
}
function Rm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bV(e, t) {
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
function xV(e) {
  if (Array.isArray(e)) return e;
}
function km(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? km(Object(r), !0).forEach(function(n) {
      wV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : km(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wV(e, t, r) {
  return t = SV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SV(e) {
  var t = OV(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function OV(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lm = function(t, r, n, a, i) {
  var o = n - a, l;
  return l = "M ".concat(t, ",").concat(r), l += "L ".concat(t + n, ",").concat(r), l += "L ".concat(t + n - o / 2, ",").concat(r + i), l += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), l += "L ".concat(t, ",").concat(r, " Z"), l;
}, $V = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, CV = function(t) {
  var r = Bm(Bm({}, $V), t), n = b.useRef(), a = b.useState(-1), i = mV(a, 2), o = i[0], l = i[1];
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
    }, /* @__PURE__ */ T.createElement("path", jl({}, me(r, !0), {
      className: w,
      d: Lm($, C, O, g, x),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("g", null, /* @__PURE__ */ T.createElement("path", jl({}, me(r, !0), {
    className: w,
    d: Lm(s, c, u, f, d)
  })));
}, PV = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Yi(e) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e);
}
function _V(e, t) {
  if (e == null) return {};
  var r = EV(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function EV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function Dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hm(Object(r), !0).forEach(function(n) {
      AV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AV(e, t, r) {
  return t = TV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TV(e) {
  var t = MV(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function MV(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function IV(e, t) {
  return Dl(Dl({}, t), e);
}
function jV(e, t) {
  return e === "symbols";
}
function Fm(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ T.createElement(Xd, r);
    case "trapezoid":
      return /* @__PURE__ */ T.createElement(CV, r);
    case "sector":
      return /* @__PURE__ */ T.createElement(D0, r);
    case "symbols":
      if (jV(t))
        return /* @__PURE__ */ T.createElement(hd, r);
      break;
    default:
      return null;
  }
}
function DV(e) {
  return /* @__PURE__ */ b.isValidElement(e) ? e.props : e;
}
function G0(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? IV : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, l = e.isActive, s = _V(e, PV), c;
  if (/* @__PURE__ */ b.isValidElement(t))
    c = /* @__PURE__ */ b.cloneElement(t, Dl(Dl({}, s), DV(t)));
  else if (Pe(t))
    c = t(s);
  else if (cV(t) && !vV(t)) {
    var u = a(t, s);
    c = /* @__PURE__ */ T.createElement(Fm, {
      shapeType: r,
      elementProps: u
    });
  } else {
    var f = s;
    c = /* @__PURE__ */ T.createElement(Fm, {
      shapeType: r,
      elementProps: f
    });
  }
  return l ? /* @__PURE__ */ T.createElement(Fe, {
    className: o
  }, c) : c;
}
function js(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Ds(e, t) {
  return t != null && "sectors" in e.props;
}
function qi(e, t) {
  return t != null && "points" in e.props;
}
function NV(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function RV(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function kV(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function BV(e, t) {
  var r;
  return js(e, t) ? r = NV : Ds(e, t) ? r = RV : qi(e, t) && (r = kV), r;
}
function LV(e, t) {
  var r;
  return js(e, t) ? r = "trapezoids" : Ds(e, t) ? r = "sectors" : qi(e, t) && (r = "points"), r;
}
function HV(e, t) {
  if (js(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Ds(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return qi(e, t) ? t.payload : {};
}
function FV(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = LV(r, t), i = HV(r, t), o = n.filter(function(s, c) {
    var u = oa(i, s), f = r.props[a].filter(function(v) {
      var m = BV(r, t);
      return m(v, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return u && p;
  }), l = n.indexOf(o[o.length - 1]);
  return l;
}
var zo;
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
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wm(Object(r), !0).forEach(function(n) {
      er(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, X0(n.key), n);
  }
}
function VV(e, t, r) {
  return t && Vm(e.prototype, t), r && Vm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zV(e, t, r) {
  return t = Nl(t), UV(e, K0() ? Reflect.construct(t, r || [], Nl(e).constructor) : t.apply(e, r));
}
function UV(e, t) {
  if (t && (fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return YV(e);
}
function YV(e) {
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
function Nl(e) {
  return Nl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Nl(e);
}
function qV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yf(e, t);
}
function yf(e, t) {
  return yf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, yf(e, t);
}
function er(e, t, r) {
  return t = X0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X0(e) {
  var t = GV(e, "string");
  return fa(t) == "symbol" ? t : t + "";
}
function GV(e, t) {
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
    return WV(this, t), n = zV(this, t, [r]), er(n, "pieRef", null), er(n, "sectorRefs", []), er(n, "id", ja("recharts-pie-")), er(n, "handleAnimationEnd", function() {
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
  return qV(t, e), VV(t, [{
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
        }), /* @__PURE__ */ T.createElement(G0, Vn({
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
zo = Yr;
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
  var t = e.data, r = e.children, n = me(e, !1), a = rr(r, ms);
  return t && t.length ? t.map(function(i, o) {
    return et(et(et({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return et(et({}, n), i.props);
  }) : [];
});
er(Yr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = T0(a, i), l = n + Rt(e.cx, a, a / 2), s = r + Rt(e.cy, i, i / 2), c = Rt(e.innerRadius, o, 0), u = Rt(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: l,
    cy: s,
    innerRadius: c,
    outerRadius: u,
    maxRadius: f
  };
});
er(Yr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? et(et({}, t.type.defaultProps), t.props) : t.props, a = zo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, l = n.endAngle, s = n.paddingAngle, c = n.dataKey, u = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), v = zo.parseCoordinateOfPie(n, r), m = zo.parseDeltaAngle(o, l), h = Math.abs(m), y = c;
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
var KV = Math.ceil, XV = Math.max;
function ZV(e, t, r, n) {
  for (var a = -1, i = XV(KV((t - e) / (r || 1)), 0), o = Array(i); i--; )
    o[n ? i : ++a] = e, e += r;
  return o;
}
var QV = ZV, JV = gb, zm = 1 / 0, ez = 17976931348623157e292;
function tz(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = JV(e), e === zm || e === -zm) {
    var t = e < 0 ? -1 : 1;
    return t * ez;
  }
  return e === e ? e : 0;
}
var rz = tz, nz = QV, az = vs, qc = rz;
function iz(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && az(t, r, n) && (r = n = void 0), t = qc(t), r === void 0 ? (r = t, t = 0) : r = qc(r), n = n === void 0 ? t < r ? 1 : -1 : qc(n), nz(t, r, n, e);
  };
}
var oz = iz, lz = oz, sz = lz(), cz = sz;
const Rl = /* @__PURE__ */ We(cz);
function Gi(e) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e);
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
function Ym(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Um(Object(r), !0).forEach(function(n) {
      Z0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z0(e, t, r) {
  return t = uz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uz(e) {
  var t = fz(e, "string");
  return Gi(t) == "symbol" ? t : t + "";
}
function fz(e, t) {
  if (Gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dz = ["Webkit", "Moz", "O", "ms"], pz = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = dz.reduce(function(i, o) {
    return Ym(Ym({}, i), {}, Z0({}, o + n, r));
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
function kl() {
  return kl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kl.apply(this, arguments);
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
function Gc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qm(Object(r), !0).forEach(function(n) {
      Yt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, J0(n.key), n);
  }
}
function vz(e, t, r) {
  return t && Gm(e.prototype, t), r && Gm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mz(e, t, r) {
  return t = Bl(t), gz(e, Q0() ? Reflect.construct(t, r || [], Bl(e).constructor) : t.apply(e, r));
}
function gz(e, t) {
  if (t && (da(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yz(e);
}
function yz(e) {
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
function Bl(e) {
  return Bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bl(e);
}
function bz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && bf(e, t);
}
function bf(e, t) {
  return bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, bf(e, t);
}
function Yt(e, t, r) {
  return t = J0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J0(e) {
  var t = xz(e, "string");
  return da(t) == "symbol" ? t : t + "";
}
function xz(e, t) {
  if (da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wz = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, l = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = di().domain(Rl(0, s)).range([i, i + o - l]), u = c.domain().map(function(f) {
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
}, Km = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, pa = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return hz(this, t), n = mz(this, t, [r]), Yt(n, "handleDrag", function(a) {
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
      var i = Km(a) ? a.changedTouches[0] : a;
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
  return bz(t, e), vz(t, [{
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
      var i = Km(a) ? a.changedTouches[0] : a;
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
      var i, o, l = this, s = this.props, c = s.y, u = s.travellerWidth, f = s.height, d = s.traveller, p = s.ariaLabel, v = s.data, m = s.startIndex, h = s.endIndex, y = Math.max(n, this.props.x), w = Gc(Gc({}, me(this.props, !1)), {}, {
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
      }, /* @__PURE__ */ T.createElement(Pn, kl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + l / 2
      }, v), this.getTextOfTick(a)), /* @__PURE__ */ T.createElement(Pn, kl({
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
      var S = De("recharts-brush", i), O = T.Children.count(o) === 1, g = pz("userSelect", "none");
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
        return Gc({
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: l,
          prevWidth: o
        }, i && i.length ? wz({
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
var Sz = Sd;
function Oz(e, t) {
  var r;
  return Sz(e, function(n, a, i) {
    return r = t(n, a, i), !r;
  }), !!r;
}
var $z = Oz, Cz = Uy, Pz = rn, _z = $z, Ez = zt, Az = vs;
function Tz(e, t, r) {
  var n = Ez(e) ? Cz : _z;
  return r && Az(e, t, r) && (t = void 0), n(e, Pz(t));
}
var Mz = Tz;
const Iz = /* @__PURE__ */ We(Mz);
var Or = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, Xm = db;
function jz(e, t, r) {
  t == "__proto__" && Xm ? Xm(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Dz = jz, Nz = Dz, Rz = ub, kz = rn;
function Bz(e, t) {
  var r = {};
  return t = kz(t), Rz(e, function(n, a, i) {
    Nz(r, a, t(n, a, i));
  }), r;
}
var Lz = Bz;
const Hz = /* @__PURE__ */ We(Lz);
function Fz(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var Wz = Fz, Vz = Sd;
function zz(e, t) {
  var r = !0;
  return Vz(e, function(n, a, i) {
    return r = !!t(n, a, i), r;
  }), r;
}
var Uz = zz, Yz = Wz, qz = Uz, Gz = rn, Kz = zt, Xz = vs;
function Zz(e, t, r) {
  var n = Kz(e) ? Yz : qz;
  return r && Xz(e, t, r) && (t = void 0), n(e, Gz(t));
}
var Qz = Zz;
const Jz = /* @__PURE__ */ We(Qz);
var e5 = ["x", "y"];
function ha(e) {
  "@babel/helpers - typeof";
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
function xf() {
  return xf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xf.apply(this, arguments);
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
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zm(Object(r), !0).forEach(function(n) {
      t5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function t5(e, t, r) {
  return t = r5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function r5(e) {
  var t = n5(e, "string");
  return ha(t) == "symbol" ? t : t + "";
}
function n5(e, t) {
  if (ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a5(e, t) {
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
function o5(e, t) {
  var r = e.x, n = e.y, a = a5(e, e5), i = "".concat(r), o = parseInt(i, 10), l = "".concat(n), s = parseInt(l, 10), c = "".concat(t.height || a.height), u = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
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
function Qm(e) {
  return /* @__PURE__ */ T.createElement(G0, xf({
    shapeType: "rectangle",
    propTransformer: o5,
    activeClassName: "recharts-active-bar"
  }, e));
}
var l5 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (Oe.env.NODE_ENV !== "production" ? Ft(!1, "minPointSize callback function received a value with type of ".concat(ha(n), ". Currently only numbers are supported.")) : Ft()), r);
  };
}, s5 = ["value", "background"], ex;
function va(e) {
  "@babel/helpers - typeof";
  return va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, va(e);
}
function c5(e, t) {
  if (e == null) return {};
  var r = u5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function u5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ll() {
  return Ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ll.apply(this, arguments);
}
function Jm(e, t) {
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
    t % 2 ? Jm(Object(r), !0).forEach(function(n) {
      Qr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function eg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rx(n.key), n);
  }
}
function d5(e, t, r) {
  return t && eg(e.prototype, t), r && eg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p5(e, t, r) {
  return t = Hl(t), h5(e, tx() ? Reflect.construct(t, r || [], Hl(e).constructor) : t.apply(e, r));
}
function h5(e, t) {
  if (t && (va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return v5(e);
}
function v5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tx = function() {
    return !!e;
  })();
}
function Hl(e) {
  return Hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Hl(e);
}
function m5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wf(e, t);
}
function wf(e, t) {
  return wf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, wf(e, t);
}
function Qr(e, t, r) {
  return t = rx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rx(e) {
  var t = g5(e, "string");
  return va(t) == "symbol" ? t : t + "";
}
function g5(e, t) {
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
    f5(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = p5(this, t, [].concat(a)), Qr(r, "state", {
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
  return m5(t, e), d5(t, [{
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
        return /* @__PURE__ */ T.createElement(Fe, Ll({
          className: "recharts-bar-rectangle"
        }, Cn(a.props, f, d), {
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value)
        }), /* @__PURE__ */ T.createElement(Qm, m));
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
        var f = c.background, d = c5(c, s5);
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
        return /* @__PURE__ */ T.createElement(Qm, Ll({
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
      var i = this.props, o = i.data, l = i.xAxis, s = i.yAxis, c = i.layout, u = i.children, f = rr(u, _s);
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
ex = lo;
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
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, l = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, p = cH(n, r);
  if (!p)
    return null;
  var v = t.layout, m = r.type.defaultProps, h = m !== void 0 ? dt(dt({}, m), r.props) : r.props, y = h.dataKey, w = h.children, S = h.minPointSize, O = v === "horizontal" ? o : i, g = c ? O.scale.domain() : null, x = mH({
    numericAxis: O
  }), $ = rr(w, ms), C = f.map(function(_, M) {
    var P, I, N, j, E, A;
    c ? P = uH(c[u + M], g) : (P = mt(_, y), Array.isArray(P) || (P = [x, P]));
    var D = l5(S, ex.defaultProps.minPointSize)(P[1], M);
    if (v === "horizontal") {
      var R, k = [o.scale(P[0]), o.scale(P[1])], L = k[0], H = k[1];
      I = Vv({
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
      if (I = G, N = Vv({
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
      tooltipPayload: [E0(r, _)],
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
function y5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nx(n.key), n);
  }
}
function b5(e, t, r) {
  return t && tg(e.prototype, t), r && tg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rg(Object(r), !0).forEach(function(n) {
      Ns(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ns(e, t, r) {
  return t = nx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nx(e) {
  var t = x5(e, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function x5(e, t) {
  if (Ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var w5 = function(t, r, n, a, i) {
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
    var k = $0(m, i, d), L = k.scale, H = k.realScaleType;
    L.domain(y).range(C), C0(L);
    var B = P0(L, sr(sr({}, m), {}, {
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
    return W.bandSize = Ol(W, B), !m.hide && a === "xAxis" ? f[x] += (P ? -1 : 1) * W.height : m.hide || (f[x] += (P ? -1 : 1) * W.width), sr(sr({}, p), {}, Ns({}, v, W));
  }, {});
}, ax = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, S5 = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return ax({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, ix = /* @__PURE__ */ function() {
  function e(t) {
    y5(this, e), this.scale = t;
  }
  return b5(e, [{
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
Ns(ix, "EPS", 1e-4);
var Zd = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return sr(sr({}, n), {}, Ns({}, a, ix.create(t[a])));
  }, {});
  return sr(sr({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, l = i.position;
      return Hz(a, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: l
        });
      });
    },
    isInRange: function(a) {
      return Jz(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function O5(e) {
  return (e % 180 + 180) % 180;
}
var $5 = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = O5(a), o = i * Math.PI / 180, l = Math.atan(n / r), s = o > l && o < Math.PI - l ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, C5 = Z$(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function Fl(e) {
  "@babel/helpers - typeof";
  return Fl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fl(e);
}
var ox = /* @__PURE__ */ b.createContext(void 0), lx = /* @__PURE__ */ b.createContext(void 0), sx = /* @__PURE__ */ b.createContext(void 0), P5 = /* @__PURE__ */ b.createContext({}), cx = /* @__PURE__ */ b.createContext(void 0), ux = /* @__PURE__ */ b.createContext(0), fx = /* @__PURE__ */ b.createContext(0), ng = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, l = t.children, s = t.width, c = t.height, u = C5(i);
  return /* @__PURE__ */ T.createElement(ox.Provider, {
    value: n
  }, /* @__PURE__ */ T.createElement(lx.Provider, {
    value: a
  }, /* @__PURE__ */ T.createElement(P5.Provider, {
    value: i
  }, /* @__PURE__ */ T.createElement(sx.Provider, {
    value: u
  }, /* @__PURE__ */ T.createElement(cx.Provider, {
    value: o
  }, /* @__PURE__ */ T.createElement(ux.Provider, {
    value: c
  }, /* @__PURE__ */ T.createElement(fx.Provider, {
    value: s
  }, l)))))));
}, _5 = function() {
  return b.useContext(cx);
};
function dx(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var px = function(t) {
  var r = b.useContext(ox);
  r == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ft());
  var n = r[t];
  return n == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(Fl(t), "]. ").concat(dx(r))) : Ft()), n;
}, hx = function(t) {
  var r = b.useContext(lx);
  r == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ft());
  var n = r[t];
  return n == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(Fl(t), "]. ").concat(dx(r))) : Ft()), n;
}, E5 = function() {
  var t = b.useContext(sx);
  return t;
}, vx = function() {
  return b.useContext(fx);
}, mx = function() {
  return b.useContext(ux);
};
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
function A5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function T5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, yx(n.key), n);
  }
}
function M5(e, t, r) {
  return t && T5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function I5(e, t, r) {
  return t = Wl(t), j5(e, gx() ? Reflect.construct(t, r || [], Wl(e).constructor) : t.apply(e, r));
}
function j5(e, t) {
  if (t && (ma(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return D5(e);
}
function D5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gx = function() {
    return !!e;
  })();
}
function Wl(e) {
  return Wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wl(e);
}
function N5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sf(e, t);
}
function Sf(e, t) {
  return Sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Sf(e, t);
}
function ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ig(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ag(Object(r), !0).forEach(function(n) {
      Qd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ag(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qd(e, t, r) {
  return t = yx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yx(e) {
  var t = R5(e, "string");
  return ma(t) == "symbol" ? t : t + "";
}
function R5(e, t) {
  if (ma(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ma(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k5(e, t) {
  return F5(e) || H5(e, t) || L5(e, t) || B5();
}
function B5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L5(e, t) {
  if (e) {
    if (typeof e == "string") return og(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return og(e, t);
  }
}
function og(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function H5(e, t) {
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
function F5(e) {
  if (Array.isArray(e)) return e;
}
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
var W5 = function(t, r) {
  var n;
  return /* @__PURE__ */ T.isValidElement(t) ? n = /* @__PURE__ */ T.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ T.createElement("line", Of({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, V5 = function(t, r, n, a, i, o, l, s, c) {
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
    return Or(c, "discard") && Iz(g, function(x) {
      return !t.isInRange(x);
    }) ? null : g;
  }
  return null;
};
function z5(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, l = e.className, s = e.alwaysShow, c = _5(), u = px(a), f = hx(i), d = E5();
  if (!c || !d)
    return null;
  Dr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Zd({
    x: u.scale,
    y: f.scale
  }), v = gt(t), m = gt(r), h = n && n.length === 2, y = V5(p, v, m, h, d, e.position, u.orientation, f.orientation, e);
  if (!y)
    return null;
  var w = k5(y, 2), S = w[0], O = S.x, g = S.y, x = w[1], $ = x.x, C = x.y, _ = Or(e, "hidden") ? "url(#".concat(c, ")") : void 0, M = ig(ig({
    clipPath: _
  }, me(e, !0)), {}, {
    x1: O,
    y1: g,
    x2: $,
    y2: C
  });
  return /* @__PURE__ */ T.createElement(Fe, {
    className: De("recharts-reference-line", l)
  }, W5(o, M), Ot.renderCallByParent(e, S5({
    x1: O,
    y1: g,
    x2: $,
    y2: C
  })));
}
var Jd = /* @__PURE__ */ function(e) {
  function t() {
    return A5(this, t), I5(this, t, arguments);
  }
  return N5(t, e), M5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(z5, this.props);
    }
  }]);
}(T.Component);
Qd(Jd, "displayName", "ReferenceLine");
Qd(Jd, "defaultProps", {
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
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $f.apply(this, arguments);
}
function ga(e) {
  "@babel/helpers - typeof";
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ga(e);
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
      Rs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Y5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xx(n.key), n);
  }
}
function q5(e, t, r) {
  return t && Y5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function G5(e, t, r) {
  return t = Vl(t), K5(e, bx() ? Reflect.construct(t, r || [], Vl(e).constructor) : t.apply(e, r));
}
function K5(e, t) {
  if (t && (ga(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return X5(e);
}
function X5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bx = function() {
    return !!e;
  })();
}
function Vl(e) {
  return Vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vl(e);
}
function Z5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cf(e, t);
}
function Cf(e, t) {
  return Cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Cf(e, t);
}
function Rs(e, t, r) {
  return t = xx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xx(e) {
  var t = Q5(e, "string");
  return ga(t) == "symbol" ? t : t + "";
}
function Q5(e, t) {
  if (ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var J5 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Zd({
    x: a.scale,
    y: i.scale
  }), l = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Or(t, "discard") && !o.isInRange(l) ? null : l;
}, ks = /* @__PURE__ */ function(e) {
  function t() {
    return U5(this, t), G5(this, t, arguments);
  }
  return Z5(t, e), q5(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, l = n.alwaysShow, s = n.clipPathId, c = gt(a), u = gt(i);
      if (Dr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !u)
        return null;
      var f = J5(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, v = this.props, m = v.shape, h = v.className, y = Or(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, w = sg(sg({
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
Rs(ks, "displayName", "ReferenceDot");
Rs(ks, "defaultProps", {
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
Rs(ks, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(Es, $f({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function Pf() {
  return Pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pf.apply(this, arguments);
}
function ya(e) {
  "@babel/helpers - typeof";
  return ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ya(e);
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
function ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), !0).forEach(function(n) {
      Bs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function t6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sx(n.key), n);
  }
}
function r6(e, t, r) {
  return t && t6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n6(e, t, r) {
  return t = zl(t), a6(e, wx() ? Reflect.construct(t, r || [], zl(e).constructor) : t.apply(e, r));
}
function a6(e, t) {
  if (t && (ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return i6(e);
}
function i6(e) {
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
function zl(e) {
  return zl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zl(e);
}
function o6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _f(e, t);
}
function Bs(e, t, r) {
  return t = Sx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sx(e) {
  var t = l6(e, "string");
  return ya(t) == "symbol" ? t : t + "";
}
function l6(e, t) {
  if (ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var s6 = function(t, r, n, a, i) {
  var o = i.x1, l = i.x2, s = i.y1, c = i.y2, u = i.xAxis, f = i.yAxis;
  if (!u || !f) return null;
  var d = Zd({
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
  return Or(i, "discard") && (!d.isInRange(p) || !d.isInRange(v)) ? null : ax(p, v);
}, Ls = /* @__PURE__ */ function(e) {
  function t() {
    return e6(this, t), n6(this, t, arguments);
  }
  return o6(t, e), r6(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, l = n.y2, s = n.className, c = n.alwaysShow, u = n.clipPathId;
      Dr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = gt(a), d = gt(i), p = gt(o), v = gt(l), m = this.props.shape;
      if (!f && !d && !p && !v && !m)
        return null;
      var h = s6(f, d, p, v, this.props);
      if (!h && !m)
        return null;
      var y = Or(this.props, "hidden") ? "url(#".concat(u, ")") : void 0;
      return /* @__PURE__ */ T.createElement(Fe, {
        className: De("recharts-reference-area", s)
      }, t.renderRect(m, ug(ug({
        clipPath: y
      }, me(this.props, !0)), h)), Ot.renderCallByParent(this.props, h));
    }
  }]);
}(T.Component);
Bs(Ls, "displayName", "ReferenceArea");
Bs(Ls, "defaultProps", {
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
Bs(Ls, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(Xd, Pf({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function Ox(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function c6(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return $5(n, r);
}
function u6(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, l = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + l
  } : {
    start: n ? a + o : i + l,
    end: n ? a : i
  };
}
function Ul(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function f6(e, t) {
  return Ox(e, t + 1);
}
function d6(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, l = t.end, s = 0, c = 1, u = o, f = function() {
    var v = n == null ? void 0 : n[s];
    if (v === void 0)
      return {
        v: Ox(n, c)
      };
    var m = s, h, y = function() {
      return h === void 0 && (h = r(v, m)), h;
    }, w = v.coordinate, S = s === 0 || Ul(e, w, y, u, l);
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
function fg(e, t) {
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
    t % 2 ? fg(Object(r), !0).forEach(function(n) {
      p6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p6(e, t, r) {
  return t = h6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h6(e) {
  var t = v6(e, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function v6(e, t) {
  if (Xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m6(e, t, r, n, a) {
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
    var y = Ul(e, p.tickCoord, m, l, s);
    y && (s = p.tickCoord - e * (m() / 2 + a), i[d] = At(At({}, p), {}, {
      isShow: !0
    }));
  }, u = o - 1; u >= 0; u--)
    c(u);
  return i;
}
function g6(e, t, r, n, a, i) {
  var o = (n || []).slice(), l = o.length, s = t.start, c = t.end;
  if (i) {
    var u = n[l - 1], f = r(u, l - 1), d = e * (u.coordinate + e * f / 2 - c);
    o[l - 1] = u = At(At({}, u), {}, {
      tickCoord: d > 0 ? u.coordinate - d * e : u.coordinate
    });
    var p = Ul(e, u.tickCoord, function() {
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
    var $ = Ul(e, S.tickCoord, g, s, c);
    $ && (s = S.tickCoord + e * (g() / 2 + a), o[w] = At(At({}, S), {}, {
      isShow: !0
    }));
  }, h = 0; h < v; h++)
    m(h);
  return o;
}
function y6(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, l = e.orientation, s = e.interval, c = e.tickFormatter, u = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (ee(s) || wr.isSsr)
    return f6(a, typeof s == "number" && ee(s) ? s : 0);
  var d = [], p = l === "top" || l === "bottom" ? "width" : "height", v = u && p === "width" ? fi(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = function(S, O) {
    var g = Pe(c) ? c(S.value, O) : S.value;
    return p === "width" ? c6(fi(g, {
      fontSize: t,
      letterSpacing: r
    }), v, f) : fi(g, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, h = a.length >= 2 ? Nt(a[1].coordinate - a[0].coordinate) : 1, y = u6(i, h, p);
  return s === "equidistantPreserveStart" ? d6(h, y, m, a, o) : (s === "preserveStart" || s === "preserveStartEnd" ? d = g6(h, y, m, a, o, s === "preserveStartEnd") : d = m6(h, y, m, a, o), d.filter(function(w) {
    return w.isShow;
  }));
}
var b6 = ["viewBox"], x6 = ["viewBox"], w6 = ["ticks"];
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
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dg(Object(r), !0).forEach(function(n) {
      ep(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kc(e, t) {
  if (e == null) return {};
  var r = S6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function S6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function O6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Cx(n.key), n);
  }
}
function $6(e, t, r) {
  return t && pg(e.prototype, t), r && pg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function C6(e, t, r) {
  return t = Yl(t), P6(e, $x() ? Reflect.construct(t, r || [], Yl(e).constructor) : t.apply(e, r));
}
function P6(e, t) {
  if (t && (ba(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _6(e);
}
function _6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $x() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($x = function() {
    return !!e;
  })();
}
function Yl(e) {
  return Yl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yl(e);
}
function E6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ef(e, t);
}
function Ef(e, t) {
  return Ef = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ef(e, t);
}
function ep(e, t, r) {
  return t = Cx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cx(e) {
  var t = A6(e, "string");
  return ba(t) == "symbol" ? t : t + "";
}
function A6(e, t) {
  if (ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hs = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return O6(this, t), n = C6(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return E6(t, e), $6(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Kc(n, b6), l = this.props, s = l.viewBox, c = Kc(l, x6);
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
        var o = this, l = this.props, s = l.tickLine, c = l.stroke, u = l.tick, f = l.tickFormatter, d = l.unit, p = y6(Dt(Dt({}, this.props), {}, {
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
      var f = this.props, d = f.ticks, p = Kc(f, w6), v = d;
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
ep(Hs, "displayName", "CartesianAxis");
ep(Hs, "defaultProps", {
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
var T6 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], M6 = ["key"], Px;
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
function _x(e, t) {
  if (e == null) return {};
  var r = I6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I6(e, t) {
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
function hg(e, t) {
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
    t % 2 ? hg(Object(r), !0).forEach(function(n) {
      xr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function j6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ax(n.key), n);
  }
}
function D6(e, t, r) {
  return t && vg(e.prototype, t), r && vg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function N6(e, t, r) {
  return t = ql(t), R6(e, Ex() ? Reflect.construct(t, r || [], ql(e).constructor) : t.apply(e, r));
}
function R6(e, t) {
  if (t && (xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return k6(e);
}
function k6(e) {
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
function ql(e) {
  return ql = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ql(e);
}
function B6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Af(e, t);
}
function Af(e, t) {
  return Af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Af(e, t);
}
function xr(e, t, r) {
  return t = Ax(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ax(e) {
  var t = L6(e, "string");
  return xa(t) == "symbol" ? t : t + "";
}
function L6(e, t) {
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
    j6(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = N6(this, t, [].concat(a)), xr(r, "state", {
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
  return B6(t, e), D6(t, [{
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
      var p = _x(l, T6);
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
      }, _ = C.r, M = _ === void 0 ? 3 : _, P = C.strokeWidth, I = P === void 0 ? 2 : P, N = eP(o) ? o : {}, j = N.clipDot, E = j === void 0 ? !0 : j, A = M * 2 + I;
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
Px = ln;
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
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, l = e.bandSize, s = e.dataKey, c = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, v = c && c.length, m = Px.getBaseValue(t, r, n, a), h = p === "horizontal", y = !1, w = f.map(function(O, g) {
    var x;
    v ? x = c[u + g] : (x = mt(O, s), Array.isArray(x) ? y = !0 : x = [m, x]);
    var $ = x[1] == null || v && mt(O, s) == null;
    return h ? {
      x: Wv({
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
      y: Wv({
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
    var n = De("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = _x(t, M6);
    r = /* @__PURE__ */ T.createElement(Es, Sn({}, i, {
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
function H6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function F6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ix(n.key), n);
  }
}
function W6(e, t, r) {
  return t && F6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function V6(e, t, r) {
  return t = Gl(t), z6(e, Tx() ? Reflect.construct(t, r || [], Gl(e).constructor) : t.apply(e, r));
}
function z6(e, t) {
  if (t && (wa(t) === "object" || typeof t == "function"))
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
function Y6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tf(e, t);
}
function Tf(e, t) {
  return Tf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Tf(e, t);
}
function Mx(e, t, r) {
  return t = Ix(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ix(e) {
  var t = q6(e, "string");
  return wa(t) == "symbol" ? t : t + "";
}
function q6(e, t) {
  if (wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mf() {
  return Mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mf.apply(this, arguments);
}
function G6(e) {
  var t = e.xAxisId, r = vx(), n = mx(), a = px(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(Hs, Mf({}, a, {
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
var Fs = /* @__PURE__ */ function(e) {
  function t() {
    return H6(this, t), V6(this, t, arguments);
  }
  return Y6(t, e), W6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(G6, this.props);
    }
  }]);
}(T.Component);
Mx(Fs, "displayName", "XAxis");
Mx(Fs, "defaultProps", {
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
function K6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function X6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Nx(n.key), n);
  }
}
function Z6(e, t, r) {
  return t && X6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Q6(e, t, r) {
  return t = Kl(t), J6(e, jx() ? Reflect.construct(t, r || [], Kl(e).constructor) : t.apply(e, r));
}
function J6(e, t) {
  if (t && (Sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return e8(e);
}
function e8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jx = function() {
    return !!e;
  })();
}
function Kl(e) {
  return Kl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Kl(e);
}
function t8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && If(e, t);
}
function If(e, t) {
  return If = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, If(e, t);
}
function Dx(e, t, r) {
  return t = Nx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nx(e) {
  var t = r8(e, "string");
  return Sa(t) == "symbol" ? t : t + "";
}
function r8(e, t) {
  if (Sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jf() {
  return jf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jf.apply(this, arguments);
}
var n8 = function(t) {
  var r = t.yAxisId, n = vx(), a = mx(), i = hx(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(Hs, jf({}, i, {
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
}, Ws = /* @__PURE__ */ function(e) {
  function t() {
    return K6(this, t), Q6(this, t, arguments);
  }
  return t8(t, e), Z6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(n8, this.props);
    }
  }]);
}(T.Component);
Dx(Ws, "displayName", "YAxis");
Dx(Ws, "defaultProps", {
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
function mg(e) {
  return l8(e) || o8(e) || i8(e) || a8();
}
function a8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i8(e, t) {
  if (e) {
    if (typeof e == "string") return Df(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Df(e, t);
  }
}
function o8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function l8(e) {
  if (Array.isArray(e)) return Df(e);
}
function Df(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Nf = function(t, r, n, a, i) {
  var o = rr(t, Jd), l = rr(t, ks), s = [].concat(mg(o), mg(l)), c = rr(t, Ls), u = "".concat(a, "Id"), f = a[0], d = r;
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
}, Rx = { exports: {} };
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
})(Rx);
var s8 = Rx.exports;
const c8 = /* @__PURE__ */ We(s8);
var Xc = new c8(), Zc = "recharts.syncMouseEvents";
function Zi(e) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e);
}
function u8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kx(n.key), n);
  }
}
function d8(e, t, r) {
  return t && f8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Qc(e, t, r) {
  return t = kx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kx(e) {
  var t = p8(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function p8(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var h8 = /* @__PURE__ */ function() {
  function e() {
    u8(this, e), Qc(this, "activeIndex", 0), Qc(this, "coordinateList", []), Qc(this, "layout", "horizontal");
  }
  return d8(e, [{
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
function v8(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], a = e == null ? void 0 : e[1];
    if (n && a && ee(n) && ee(a))
      return !0;
  }
  return !1;
}
function m8(e, t, r, n) {
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
function Bx(e) {
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
function g8(e, t, r) {
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
      return Bx(t);
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
function gg(e, t) {
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
    t % 2 ? gg(Object(r), !0).forEach(function(n) {
      y8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y8(e, t, r) {
  return t = b8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b8(e) {
  var t = x8(e, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function x8(e, t) {
  if (Qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w8(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, l = e.activePayload, s = e.offset, c = e.activeTooltipIndex, u = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var v, m = Xn;
  if (d === "ScatterChart")
    v = o, m = bW;
  else if (d === "BarChart")
    v = m8(f, o, s, u), m = Xd;
  else if (f === "radial") {
    var h = Bx(o), y = h.cx, w = h.cy, S = h.radius, O = h.startAngle, g = h.endAngle;
    v = {
      cx: y,
      cy: w,
      startAngle: O,
      endAngle: g,
      innerRadius: S,
      outerRadius: S
    }, m = D0;
  } else
    v = {
      points: g8(f, o, s)
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
var S8 = ["item"], O8 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
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
function yg(e, t) {
  return P8(e) || C8(e, t) || Hx(e, t) || $8();
}
function $8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C8(e, t) {
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
function P8(e) {
  if (Array.isArray(e)) return e;
}
function bg(e, t) {
  if (e == null) return {};
  var r = _8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function E8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Fx(n.key), n);
  }
}
function T8(e, t, r) {
  return t && A8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function M8(e, t, r) {
  return t = Xl(t), I8(e, Lx() ? Reflect.construct(t, r || [], Xl(e).constructor) : t.apply(e, r));
}
function I8(e, t) {
  if (t && (Oa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j8(e);
}
function j8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Lx = function() {
    return !!e;
  })();
}
function Xl(e) {
  return Xl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xl(e);
}
function D8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rf(e, t);
}
function Rf(e, t) {
  return Rf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rf(e, t);
}
function $a(e) {
  return k8(e) || R8(e) || Hx(e) || N8();
}
function N8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hx(e, t) {
  if (e) {
    if (typeof e == "string") return kf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kf(e, t);
  }
}
function R8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function k8(e) {
  if (Array.isArray(e)) return kf(e);
}
function kf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xg(e, t) {
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
    t % 2 ? xg(Object(r), !0).forEach(function(n) {
      ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ye(e, t, r) {
  return t = Fx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fx(e) {
  var t = B8(e, "string");
  return Oa(t) == "symbol" ? t : t + "";
}
function B8(e, t) {
  if (Oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var L8 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, H8 = {
  width: "100%",
  height: "100%"
}, Wx = {
  x: 0,
  y: 0
};
function No(e) {
  return e;
}
var F8 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, W8 = function(t, r, n, a) {
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
  return Wx;
}, Vs = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(l, s) {
    var c = s.props.data;
    return c && c.length ? [].concat($a(l), $a(c)) : l;
  }, []);
  return o.length > 0 ? o : t && t.length && ee(a) && ee(i) ? t.slice(a, i + 1) : [];
};
function Vx(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Bf = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, l = Vs(r, t);
  return n < 0 || !i || !i.length || n >= l.length ? null : i.reduce(function(s, c) {
    var u, f = (u = c.props.data) !== null && u !== void 0 ? u : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? l : f;
      d = Ko(p, o.dataKey, a);
    } else
      d = f && f[n] || l[n];
    return d ? [].concat($a(s), [E0(c, d)]) : s;
  }, []);
}, wg = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = F8(i, n), l = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, u = nH(o, l, c, s);
  if (u >= 0 && c) {
    var f = c[u] && c[u].value, d = Bf(t, r, u, f), p = W8(n, l, u, i);
    return {
      activeTooltipIndex: u,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, V8 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, u = t.layout, f = t.children, d = t.stackOffset, p = O0(u, i);
  return n.reduce(function(v, m) {
    var h, y = m.type.defaultProps !== void 0 ? Y(Y({}, m.type.defaultProps), m.props) : m.props, w = y.type, S = y.dataKey, O = y.allowDataOverflow, g = y.allowDuplicatedCategory, x = y.scale, $ = y.ticks, C = y.includeHidden, _ = y[o];
    if (v[_])
      return v;
    var M = Vs(t.data, {
      graphicalItems: a.filter(function(B) {
        var W, U = o in B.props ? B.props[o] : (W = B.type.defaultProps) === null || W === void 0 ? void 0 : W[o];
        return U === _;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), P = M.length, I, N, j;
    v8(y.domain, O, w) && (I = Qu(y.domain, null, O), p && (w === "number" || x !== "auto") && (j = pi(M, S, "category")));
    var E = Vx(w);
    if (!I || I.length === 0) {
      var A, D = (A = y.domain) !== null && A !== void 0 ? A : E;
      if (S) {
        if (I = pi(M, S, w), w === "category" && p) {
          var R = UC(I);
          g && R ? (N = I, I = Rl(0, P)) : g || (I = Yv(D, I, m).reduce(function(B, W) {
            return B.indexOf(W) >= 0 ? B : [].concat($a(B), [W]);
          }, []));
        } else if (w === "category")
          g ? I = I.filter(function(B) {
            return B !== "" && !Ae(B);
          }) : I = Yv(D, I, m).reduce(function(B, W) {
            return B.indexOf(W) >= 0 || W === "" || Ae(W) ? B : [].concat($a(B), [W]);
          }, []);
        else if (w === "number") {
          var k = sH(M, a.filter(function(B) {
            var W, U, G = o in B.props ? B.props[o] : (W = B.type.defaultProps) === null || W === void 0 ? void 0 : W[o], Q = "hide" in B.props ? B.props.hide : (U = B.type.defaultProps) === null || U === void 0 ? void 0 : U.hide;
            return G === _ && (C || !Q);
          }), S, i, u);
          k && (I = k);
        }
        p && (w === "number" || x !== "auto") && (j = pi(M, S, "category"));
      } else p ? I = Rl(0, P) : l && l[_] && l[_].hasStack && w === "number" ? I = d === "expand" ? [0, 1] : _0(l[_].stackGroups, s, c) : I = S0(M, a.filter(function(B) {
        var W = o in B.props ? B.props[o] : B.type.defaultProps[o], U = "hide" in B.props ? B.props.hide : B.type.defaultProps.hide;
        return W === _ && (C || !U);
      }), w, u, !0);
      if (w === "number")
        I = Nf(f, I, _, i, $), D && (I = Qu(D, I, O));
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
}, z8 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, u = t.layout, f = t.children, d = Vs(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), p = d.length, v = O0(u, i), m = -1;
  return n.reduce(function(h, y) {
    var w = y.type.defaultProps !== void 0 ? Y(Y({}, y.type.defaultProps), y.props) : y.props, S = w[o], O = Vx("number");
    if (!h[S]) {
      m++;
      var g;
      return v ? g = Rl(0, p) : l && l[S] && l[S].hasStack ? (g = _0(l[S].stackGroups, s, c), g = Nf(f, g, S, i)) : (g = Qu(O, S0(d, n.filter(function(x) {
        var $, C, _ = o in x.props ? x.props[o] : ($ = x.type.defaultProps) === null || $ === void 0 ? void 0 : $[o], M = "hide" in x.props ? x.props.hide : (C = x.type.defaultProps) === null || C === void 0 ? void 0 : C.hide;
        return _ === S && !M;
      }), "number", u), a.defaultProps.allowDataOverflow), g = Nf(f, g, S, i)), Y(Y({}, h), {}, ye({}, S, Y(Y({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: Xt(L8, "".concat(i, ".").concat(m % 2), null),
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
}, U8 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, l = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, u = t.children, f = "".concat(a, "Id"), d = rr(u, i), p = {};
  return d && d.length ? p = V8(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (p = z8(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: s,
    dataEndIndex: c
  })), p;
}, Y8 = function(t) {
  var r = Hn(t), n = wn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Od(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Ol(r, n)
  };
}, Sg = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = qt(r, pa), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, q8 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = jr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Og = function(t) {
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
}, G8 = function(t, r) {
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
  p && (y.bottom += p.props.height || pa.defaultProps.height), v && r && (y = oH(y, a, n, r));
  var S = c - y.left - y.right, O = u - y.top - y.bottom;
  return Y(Y({
    brushBottom: w
  }, y), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(O, 0)
  });
}, K8 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, zx = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, l = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, u = t.formatAxisMap, f = t.defaultProps, d = function(y, w) {
    var S = w.graphicalItems, O = w.stackGroups, g = w.offset, x = w.updateId, $ = w.dataStartIndex, C = w.dataEndIndex, _ = y.barSize, M = y.layout, P = y.barGap, I = y.barCategoryGap, N = y.maxBarSize, j = Og(M), E = j.numericAxisName, A = j.cateAxisName, D = q8(S), R = [];
    return S.forEach(function(k, L) {
      var H = Vs(y.data, {
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
      }, ne), z = te[A], K = te["".concat(A, "Ticks")], q = O && O[G] && O[G].hasStack && gH(k, O[G].stackGroups), F = jr(k.type).indexOf("Bar") >= 0, J = Ol(z, K), Z = [], le = D && aH({
        barSize: _,
        stackGroups: O,
        totalSize: K8(te, A)
      });
      if (F) {
        var re, ae, de = Ae(U) ? N : U, $e = (re = (ae = Ol(z, K, !0)) !== null && ae !== void 0 ? ae : de) !== null && re !== void 0 ? re : 0;
        Z = iH({
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
        childIndex: nP(k, y.children),
        item: k
      });
    }), R;
  }, p = function(y, w) {
    var S = y.props, O = y.dataStartIndex, g = y.dataEndIndex, x = y.updateId;
    if (!Lp({
      props: S
    }))
      return null;
    var $ = S.children, C = S.layout, _ = S.stackOffset, M = S.data, P = S.reverseStackOrder, I = Og(C), N = I.numericAxisName, j = I.cateAxisName, E = rr($, n), A = vH(M, E, "".concat(N, "Id"), "".concat(j, "Id"), _, P), D = s.reduce(function(B, W) {
      var U = "".concat(W.axisType, "Map");
      return Y(Y({}, B), {}, ye({}, U, U8(S, Y(Y({}, W), {}, {
        graphicalItems: E,
        stackGroups: W.axisType === N && A,
        dataStartIndex: O,
        dataEndIndex: g
      }))));
    }, {}), R = G8(Y(Y({}, D), {}, {
      props: S,
      graphicalItems: E
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(D).forEach(function(B) {
      D[B] = u(S, D[B], R, B.replace("Map", ""), r);
    });
    var k = D["".concat(j, "Map")], L = Y8(k), H = d(S, Y(Y({}, D), {}, {
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
      return E8(this, y), g = M8(this, y, [w]), ye(g, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), ye(g, "accessibilityManager", new h8()), ye(g, "handleLegendBBoxUpdate", function(x) {
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
        var $ = rP(x), C = Xt(g.props, "".concat($));
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
        g.props.syncId !== void 0 && Xc.emit(Zc, g.props.syncId, x, g.eventEmitterSymbol);
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
          }), H = Math.min(N, L.x + L.width), B = Math.min(j, L.y + L.height), W = R[E] && R[E].value, U = Bf(g.state, g.props.data, E), G = R[E] ? {
            x: C === "horizontal" ? R[E].coordinate : H,
            y: C === "horizontal" ? B : R[E].coordinate
          } : Wx;
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
        return /* @__PURE__ */ T.createElement(w8, {
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
        var x = g.state.formattedGraphicalItems, $ = g.props, C = $.children, _ = $.width, M = $.height, P = g.props.margin || {}, I = _ - (P.left || 0) - (P.right || 0), N = x0({
          children: C,
          formattedGraphicalItems: x,
          legendWidth: I,
          legendContent: c
        });
        if (!N)
          return null;
        var j = N.item, E = bg(N, S8);
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
          fill: Kd($.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: C.payload,
          value: C.value
        }, me(E, !1)), Xo(E));
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
              q = Ko(k, J, E), F = L && H && Ko(H, J, E);
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
      }), g.clipPathId = "".concat((S = w.id) !== null && S !== void 0 ? S : ja("recharts"), "-clip"), g.throttleTriggeredAfterMouseMove = yb(g.triggeredAfterMouseMove, (O = w.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), g.state = {}, g;
    }
    return D8(y, h), T8(y, [{
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
            var M = this.state.tooltipTicks[_] && this.state.tooltipTicks[_].value, P = Bf(this.state, g, _, M), I = this.state.tooltipTicks[_].coordinate, N = (this.state.offset.top + x) / 2, j = $ === "horizontal", E = j ? {
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
        pu([qt(S.children, lr)], [qt(this.props.children, lr)]) || this.displayDefaultTooltip();
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
        var O = this.container, g = O.getBoundingClientRect(), x = MN(g), $ = {
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
        var R = wg(this.state, this.props.data, this.props.layout, _);
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
          return Kv({
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
        var $ = Xo(this.props, this.handleOuterEvent);
        return Y(Y({}, $), x);
      }
    }, {
      key: "addListener",
      value: function() {
        Xc.on(Zc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Xc.removeListener(Zc, this.handleReceiveSyncEvent);
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
          var x = yg(g, 2), $ = x[0], C = x[1];
          return Y(Y({}, O), {}, ye({}, $, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var S = this.state.yAxisMap;
        return S ? Object.entries(S).reduce(function(O, g) {
          var x = yg(g, 2), $ = x[0], C = x[1];
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
                return J3(S, R);
              });
              if (j)
                return {
                  graphicalItem: _,
                  payload: j
                };
            } else if (N === "RadialBar") {
              var E = (M.data || []).find(function(R) {
                return Kv(S, R);
              });
              if (E)
                return {
                  graphicalItem: _,
                  payload: E
                };
            } else if (js(_, x) || Ds(_, x) || qi(_, x)) {
              var A = FV({
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
        if (!Lp(this))
          return null;
        var O = this.props, g = O.children, x = O.className, $ = O.width, C = O.height, _ = O.style, M = O.compact, P = O.title, I = O.desc, N = bg(O, O8), j = me(N, !1);
        if (M)
          return /* @__PURE__ */ T.createElement(ng, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ T.createElement(vu, Un({}, j, {
            width: $,
            height: C,
            title: P,
            desc: I
          }), this.renderClipPath(), Fp(g, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var E, A;
          j.tabIndex = (E = this.props.tabIndex) !== null && E !== void 0 ? E : 0, j.role = (A = this.props.role) !== null && A !== void 0 ? A : "application", j.onKeyDown = function(R) {
            S.accessibilityManager.keyboardEvent(R);
          }, j.onFocus = function() {
            S.accessibilityManager.focus();
          };
        }
        var D = this.parseEventsOfWrapper();
        return /* @__PURE__ */ T.createElement(ng, {
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
        }), /* @__PURE__ */ T.createElement(vu, Un({}, j, {
          width: $,
          height: C,
          title: P,
          desc: I,
          style: H8
        }), this.renderClipPath(), Fp(g, this.renderMap)), this.renderLegend(), this.renderTooltip()));
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
      var I = Sg(h);
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
      var N = Sg(h), j = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: y.chartX,
        chartY: y.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: y.isTooltipActive
      }, E = Y(Y({}, wg(y, S, $)), {}, {
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
    if (!pu(O, y.prevChildren)) {
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
    return /* @__PURE__ */ b.isValidElement(h) ? S = /* @__PURE__ */ b.cloneElement(h, y) : Pe(h) ? S = h(y) : S = /* @__PURE__ */ T.createElement(Es, y), /* @__PURE__ */ T.createElement(Fe, {
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
}, X8 = zx({
  chartName: "PieChart",
  GraphicalChild: Yr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Is
  }, {
    axisType: "radiusAxis",
    AxisComp: Ts
  }],
  formatAxisMap: _H,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Z8 = zx({
  chartName: "AreaChart",
  GraphicalChild: ln,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Fs
  }, {
    axisType: "yAxis",
    AxisComp: Ws
  }],
  formatAxisMap: w5
});
function Q8({ data: e, labels: t }) {
  const r = Math.max(...e), n = Math.min(...e), a = e.map((i, o) => ({
    name: t[o],
    value: i,
    label: i === r || i === n ? `$${ui(i)}` : null
  }));
  return /* @__PURE__ */ V.jsx(bb, { width: "100%", height: "100%", children: /* @__PURE__ */ V.jsxs(
    Z8,
    {
      data: a,
      margin: { top: 0, right: 0, left: 0, bottom: 15 },
      children: [
        /* @__PURE__ */ V.jsx("defs", { children: /* @__PURE__ */ V.jsxs("linearGradient", { id: "colorValue", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ V.jsx("stop", { offset: "0%", stopColor: "#ccfda8", stopOpacity: 1 }),
          /* @__PURE__ */ V.jsx("stop", { offset: "100%", stopColor: "#ccfda8", stopOpacity: 0.05 })
        ] }) }),
        /* @__PURE__ */ V.jsx(
          Fs,
          {
            dataKey: "name",
            hide: !0
          }
        ),
        /* @__PURE__ */ V.jsx(
          Ws,
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
            label: ({ x: i, y: o, value: l }) => {
              if (l === r || l === n) {
                const s = e.indexOf(l), c = s <= 1, u = s >= e.length - 2;
                let f = "middle", d = 0;
                u ? (f = "end", d = -10) : c && (f = "start", d = 10);
                const p = l === r ? -10 : 15;
                return /* @__PURE__ */ V.jsxs(
                  "text",
                  {
                    x: i,
                    y: o,
                    dx: d,
                    dy: p,
                    fill: "#262626",
                    fontSize: 12,
                    textAnchor: f,
                    children: [
                      "$",
                      ui(l)
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
function J8({ data: e }) {
  const t = b.useMemo(() => {
    const r = e.reduce((n, a) => n + a.value, 0);
    return e.map((n) => ({
      ...n,
      value: r ? Number((n.value / r * 100).toFixed(2)) : 0
    }));
  }, [e]);
  return /* @__PURE__ */ V.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ V.jsx("div", { className: "flex-1", children: /* @__PURE__ */ V.jsx(bb, { width: "100%", height: "100%", children: /* @__PURE__ */ V.jsxs(X8, { children: [
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
          children: e.map((r, n) => /* @__PURE__ */ V.jsx(ms, { fill: r.color }, `cell-${n}`))
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
const e4 = ["performanceChart"], t4 = async (e) => {
  try {
    const t = await Ji.get("/user-assets/performance-chart", {
      params: { address: e }
    });
    return {
      chartData: t.data.chartData,
      distribution: t.data.distribution
    };
  } catch (t) {
    throw zf(t);
  }
};
function r4(e) {
  const { address: t } = ts.all();
  return Yg({
    queryKey: [...e4, t],
    queryFn: () => t4(t),
    enabled: (e == null ? void 0 : e.enabled) && !!t
  });
}
const n4 = {
  ETH: "#3d7dc9",
  MATIC: "#c08fec",
  TVWT: "#52c41a"
};
function a4() {
  const e = rs(), { address: t } = ts.all(), [r, n] = b.useState("30D"), [a, i] = b.useState([]), [o, l] = b.useState([]), [s, c] = b.useState([]), { data: u, isFetched: f, refetch: d } = r4({
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
        color: n4[O.label]
      }));
      c(S);
    } catch (m) {
      const h = zf(m);
      iy.error(h.message);
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
            /* @__PURE__ */ V.jsx(N1, { size: 14 })
          ] }),
          /* @__PURE__ */ V.jsx(
            A1,
            {
              value: r,
              onValueChange: (m) => v(m),
              children: /* @__PURE__ */ V.jsxs(T1, { className: "h-[28px] bg-[#f5f5f5]", children: [
                /* @__PURE__ */ V.jsx(
                  wp,
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
                  wp,
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
        /* @__PURE__ */ V.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ V.jsx(Q8, { data: a, labels: o }) })
      ] }),
      /* @__PURE__ */ V.jsxs("div", { className: Ce(
        "border border-[#ebebeb] rounded-xl p-[20px]",
        "flex-1"
      ), children: [
        /* @__PURE__ */ V.jsxs("div", { className: "flex justify-between items-center mb-[20px]", children: [
          /* @__PURE__ */ V.jsx("p", { className: "text-base text-[#111111] font-bold leading-tight", children: "Crypto allocation" }),
          /* @__PURE__ */ V.jsx("button", { className: "text-base text-[#727272]", onClick: () => e("/dashboard/viewall"), children: "View all" })
        ] }),
        /* @__PURE__ */ V.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ V.jsx(J8, { data: s }) })
      ] })
    ] })
  ] });
}
const Ux = (e, t) => {
  const r = b.useContext(H1), n = b.useMemo(() => {
    var i;
    const o = t || Sp[e], l = (i = r == null ? void 0 : r[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof o == "function" ? o() : o), l || {});
  }, [e, t, r]), a = b.useMemo(() => {
    const i = r == null ? void 0 : r.locale;
    return r != null && r.exist && !i ? Sp.locale : i;
  }, [r]);
  return [n, a];
};
var i4 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, o4 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, l4 = "".concat(i4, " ").concat(o4).split(/[\s\n]+/), s4 = "aria-", c4 = "data-";
function $g(e, t) {
  return e.indexOf(t) === 0;
}
function tp(e) {
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
    (r.aria && (a === "role" || $g(a, s4)) || // Data
    r.data && $g(a, c4) || // Attr
    r.attr && l4.includes(a)) && (n[a] = e[a]);
  }), n;
}
const Yx = (e) => {
  const [, , , , t] = Yf();
  return t ? `${e}-css-var` : "";
};
var u4 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, f4 = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: u4
  }));
}, rp = /* @__PURE__ */ b.forwardRef(f4);
Oe.env.NODE_ENV !== "production" && (rp.displayName = "LoadingOutlined");
var so = ue({}, k1), d4 = so.version, p4 = so.render, h4 = so.unmountComponentAtNode, zs;
try {
  var v4 = Number((d4 || "").split(".")[0]);
  v4 >= 18 && (zs = so.createRoot);
} catch {
}
function Cg(e) {
  var t = so.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && An(t) === "object" && (t.usingClientEntryPoint = e);
}
var Zl = "__rc_react_root__";
function m4(e, t) {
  Cg(!0);
  var r = t[Zl] || zs(t);
  Cg(!1), r.render(e), t[Zl] = r;
}
function g4(e, t) {
  p4(e, t);
}
function y4(e, t) {
  if (zs) {
    m4(e, t);
    return;
  }
  g4(e, t);
}
function b4(e) {
  return Lf.apply(this, arguments);
}
function Lf() {
  return Lf = Kg(/* @__PURE__ */ Yo().mark(function e(t) {
    return Yo().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[Zl]) === null || a === void 0 || a.unmount(), delete t[Zl];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Lf.apply(this, arguments);
}
function x4(e) {
  h4(e);
}
function w4(e) {
  return Hf.apply(this, arguments);
}
function Hf() {
  return Hf = Kg(/* @__PURE__ */ Yo().mark(function e(t) {
    return Yo().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (zs === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", b4(t));
        case 2:
          x4(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), Hf.apply(this, arguments);
}
const S4 = (e) => {
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
}, O4 = F1("Wave", (e) => [S4(e)]), qx = `${W1}-wave-target`;
function Jc(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function $4(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Jc(t) ? t : Jc(r) ? r : Jc(n) ? n : null;
}
function eu(e) {
  return Number.isNaN(e) ? 0 : e;
}
const C4 = (e) => {
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
    o($4(r));
    const $ = x.position === "static", {
      borderLeftWidth: C,
      borderTopWidth: _
    } = x;
    u($ ? r.offsetLeft : eu(-parseFloat(C))), d($ ? r.offsetTop : eu(-parseFloat(_))), v(r.offsetWidth), h(r.offsetHeight);
    const {
      borderTopLeftRadius: M,
      borderTopRightRadius: P,
      borderBottomLeftRadius: I,
      borderBottomRightRadius: N
    } = x;
    s([M, P, N, I].map((j) => eu(parseFloat(j))));
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
  const g = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(qx));
  return /* @__PURE__ */ b.createElement(Xg, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (x, $) => {
      var C;
      if ($.deadline || $.propertyName === "opacity") {
        const _ = (C = a.current) === null || C === void 0 ? void 0 : C.parentElement;
        w4(_).then(() => {
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
      ref: qf(a, $),
      className: je(t, C, {
        "wave-quick": g
      }),
      style: S
    });
  });
}, P4 = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), y4(/* @__PURE__ */ b.createElement(C4, Object.assign({}, t, {
    target: e
  })), a);
}, _4 = (e, t, r) => {
  const {
    wave: n
  } = b.useContext(en), [, a, i] = Yf(), o = ut((c) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${qx}`) || u, {
      showEffect: d
    } = n || {};
    (d || P4)(f, {
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
}, Gx = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = b.useContext(en), i = b.useRef(null), o = a("wave"), [, l] = O4(o), s = _4(i, je(o, l), n);
  if (T.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (d) => {
      !Qg(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || s(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ T.isValidElement(t))
    return t ?? null;
  const c = V1(t) ? qf(t.ref, i) : i;
  return Zg(t, {
    ref: c
  });
};
Oe.env.NODE_ENV !== "production" && (Gx.displayName = "Wave");
const np = (e) => {
  const t = T.useContext(z1);
  return T.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
};
var E4 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Kx = /* @__PURE__ */ b.createContext(void 0), A4 = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = b.useContext(en), {
    prefixCls: n,
    size: a,
    className: i
  } = e, o = E4(e, ["prefixCls", "size", "className"]), l = t("btn-group", n), [, , s] = Yf();
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
  return /* @__PURE__ */ b.createElement(Kx.Provider, {
    value: a
  }, /* @__PURE__ */ b.createElement("div", Object.assign({}, o, {
    className: u
  })));
}, Pg = /^[\u4E00-\u9FA5]{2}$/, Ff = Pg.test.bind(Pg);
function _g(e) {
  return typeof e == "string";
}
function Ro(e) {
  return e === "text" || e === "link";
}
function T4(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && _g(e.type) && Ff(e.props.children) ? Zg(e, {
    children: e.props.children.split("").join(r)
  }) : _g(e) ? Ff(e) ? /* @__PURE__ */ T.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ T.createElement("span", null, e) : U1(e) ? /* @__PURE__ */ T.createElement("span", null, e) : e;
}
function M4(e, t) {
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
  }), T.Children.map(n, (a) => T4(a, t));
}
const Xx = /* @__PURE__ */ b.forwardRef((e, t) => {
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
}), Eg = /* @__PURE__ */ b.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: i
  } = e, o = je(`${r}-loading-icon`, n);
  return /* @__PURE__ */ T.createElement(Xx, {
    prefixCls: r,
    className: o,
    style: a,
    ref: t
  }, /* @__PURE__ */ T.createElement(rp, {
    className: i
  }));
}), tu = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ru = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), I4 = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: i
  } = e, o = !!r;
  return n ? /* @__PURE__ */ T.createElement(Eg, {
    prefixCls: t,
    className: a,
    style: i
  }) : /* @__PURE__ */ T.createElement(Xg, {
    visible: o,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: o,
    removeOnLeave: !0,
    onAppearStart: tu,
    onAppearActive: ru,
    onEnterStart: tu,
    onEnterActive: ru,
    onLeaveStart: ru,
    onLeaveActive: tu
  }, (l, s) => {
    let {
      className: c,
      style: u
    } = l;
    return /* @__PURE__ */ T.createElement(Eg, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, i), u),
      ref: s,
      iconClassName: c
    });
  });
}, Ag = (e, t) => ({
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
}), j4 = (e) => {
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
      Ag(`${t}-primary`, a),
      Ag(`${t}-danger`, i)
    ]
  };
}, wt = Math.round;
function nu(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    n[a] = t(n[a] || 0, r[a] || "", a);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Tg = (e, t, r) => r === 0 ? e : e / 100;
function ni(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class Us {
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
    } else if (t instanceof Us)
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
    const r = nu(t, Tg);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = nu(t, Tg);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = nu(t, (n, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? wt(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var D4 = ["b"], N4 = ["v"], au = function(t) {
  return Math.round(Number(t || 0));
}, R4 = function(t) {
  if (t instanceof Us)
    return t;
  if (t && An(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, a = Kt(r, D4);
    return ue(ue({}, a), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Wr = /* @__PURE__ */ function(e) {
  Y1(r, e);
  var t = q1(r);
  function r(n) {
    return Gf(this, r), t.call(this, R4(n));
  }
  return Kf(r, [{
    key: "toHsbString",
    value: function() {
      var a = this.toHsb(), i = au(a.s * 100), o = au(a.b * 100), l = au(a.h), s = a.a, c = "hsb(".concat(l, ", ").concat(i, "%, ").concat(o, "%)"), u = "hsba(".concat(l, ", ").concat(i, "%, ").concat(o, "%, ").concat(s.toFixed(s === 0 ? 0 : 2), ")");
      return s === 1 ? c : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var a = this.toHsv(), i = a.v, o = Kt(a, N4);
      return ue(ue({}, o), {}, {
        b: i,
        a: this.a
      });
    }
  }]), r;
}(Us), k4 = "rc-color-picker", Zn = function(t) {
  return t instanceof Wr ? t : new Wr(t);
}, B4 = Zn("#1677ff"), Zx = function(t) {
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
}, Qx = function(t, r) {
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
}, L4 = function(t) {
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
function H4(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function Jx(e) {
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
    var g = H4(O), x = g.pageX, $ = g.pageY, C = r.current.getBoundingClientRect(), _ = C.x, M = C.y, P = C.width, I = C.height, N = t.current.getBoundingClientRect(), j = N.width, E = N.height, A = j / 2, D = E / 2, R = Math.max(0, Math.min(x - _, P)) - A, k = Math.max(0, Math.min($ - M, I)) - D, L = {
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
var ew = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, a = t.color, i = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: je("".concat(i, "-handler"), ve({}, "".concat(i, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: a
    }
  });
}, tw = function(t) {
  var r = t.children, n = t.style, a = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: "".concat(a, "-palette"),
    style: ue({
      position: "relative"
    }, n)
  }, r);
}, rw = /* @__PURE__ */ b.forwardRef(function(e, t) {
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
}), F4 = function(t) {
  var r = t.color, n = t.onChange, a = t.prefixCls, i = t.onChangeComplete, o = t.disabled, l = b.useRef(), s = b.useRef(), c = b.useRef(r), u = ut(function(m) {
    var h = Zx({
      offset: m,
      targetRef: s,
      containerRef: l,
      color: r
    });
    c.current = h, n(h);
  }), f = Jx({
    color: r,
    containerRef: l,
    targetRef: s,
    calculate: function() {
      return Qx(r);
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
  }, /* @__PURE__ */ T.createElement(tw, {
    prefixCls: a
  }, /* @__PURE__ */ T.createElement(rw, {
    x: p.x,
    y: p.y,
    ref: s
  }, /* @__PURE__ */ T.createElement(ew, {
    color: r.toRgbString(),
    prefixCls: a
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(a, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, W4 = function(t, r) {
  var n = fr(t, {
    value: r
  }), a = X(n, 2), i = a[0], o = a[1], l = b.useMemo(function() {
    return Zn(i);
  }, [i]);
  return [l, o];
}, V4 = function(t) {
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
}, z4 = function(t) {
  var r = t.prefixCls, n = t.colors, a = t.disabled, i = t.onChange, o = t.onChangeComplete, l = t.color, s = t.type, c = b.useRef(), u = b.useRef(), f = b.useRef(l), d = function(g) {
    return s === "hue" ? g.getHue() : g.a * 100;
  }, p = ut(function(O) {
    var g = Zx({
      offset: O,
      targetRef: u,
      containerRef: c,
      color: l,
      type: s
    });
    f.current = g, i(d(g));
  }), v = Jx({
    color: l,
    targetRef: u,
    containerRef: c,
    calculate: function() {
      return Qx(l, s);
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
  }, /* @__PURE__ */ T.createElement(tw, {
    prefixCls: r
  }, /* @__PURE__ */ T.createElement(rw, {
    x: h.x,
    y: h.y,
    ref: u
  }, /* @__PURE__ */ T.createElement(ew, {
    size: "small",
    color: w.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ T.createElement(V4, {
    colors: S,
    type: s,
    prefixCls: r
  })));
};
function U4(e) {
  return b.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || z4];
  }, [e]);
}
var Y4 = [{
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
}], q4 = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.value, n = e.defaultValue, a = e.prefixCls, i = a === void 0 ? k4 : a, o = e.onChange, l = e.onChangeComplete, s = e.className, c = e.style, u = e.panelRender, f = e.disabledAlpha, d = f === void 0 ? !1 : f, p = e.disabled, v = p === void 0 ? !1 : p, m = e.components, h = U4(m), y = X(h, 1), w = y[0], S = W4(n || B4, r), O = X(S, 2), g = O[0], x = O[1], $ = b.useMemo(function() {
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
  }, D = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(F4, we({
    onChange: C
  }, A, {
    onChangeComplete: l
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ T.createElement("div", {
    className: je("".concat(i, "-slider-group"), ve({}, "".concat(i, "-slider-group-disabled-alpha"), d))
  }, /* @__PURE__ */ T.createElement(w, we({}, A, {
    type: "hue",
    colors: Y4,
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
  }))), /* @__PURE__ */ T.createElement(L4, {
    color: g.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ T.createElement("div", {
    className: E,
    style: c,
    ref: t
  }, typeof u == "function" ? u(D) : D);
});
Oe.env.NODE_ENV !== "production" && (q4.displayName = "ColorPicker");
const G4 = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", K4 = (e, t) => e ? G4(e, t) : "";
let X4 = /* @__PURE__ */ function() {
  function e(t) {
    Gf(this, e);
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
  return Kf(e, [{
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
      return K4(this.toHexString(), this.metaColor.a < 1);
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
const Z4 = new Mt("antMoveDownIn", {
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
}), Q4 = new Mt("antMoveDownOut", {
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
}), J4 = new Mt("antMoveLeftIn", {
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
}), eU = new Mt("antMoveLeftOut", {
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
}), tU = new Mt("antMoveRightIn", {
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
}), rU = new Mt("antMoveRightOut", {
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
}), nU = new Mt("antMoveUpIn", {
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
}), aU = new Mt("antMoveUpOut", {
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
}), iU = {
  "move-up": {
    inKeyframes: nU,
    outKeyframes: aU
  },
  "move-down": {
    inKeyframes: Z4,
    outKeyframes: Q4
  },
  "move-left": {
    inKeyframes: J4,
    outKeyframes: eU
  },
  "move-right": {
    inKeyframes: tU,
    outKeyframes: rU
  }
}, Mg = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = iU[t];
  return [Jg(n, a, i, e.motionDurationMid), {
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
}, nw = new Mt("antSlideUpIn", {
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
}), aw = new Mt("antSlideUpOut", {
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
}), iw = new Mt("antSlideDownIn", {
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
}), ow = new Mt("antSlideDownOut", {
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
}), oU = new Mt("antSlideLeftIn", {
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
}), lU = new Mt("antSlideLeftOut", {
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
}), sU = new Mt("antSlideRightIn", {
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
}), cU = new Mt("antSlideRightOut", {
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
}), uU = {
  "slide-up": {
    inKeyframes: nw,
    outKeyframes: aw
  },
  "slide-down": {
    inKeyframes: iw,
    outKeyframes: ow
  },
  "slide-left": {
    inKeyframes: oU,
    outKeyframes: lU
  },
  "slide-right": {
    inKeyframes: sU,
    outKeyframes: cU
  }
}, Ig = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = uU[t];
  return [Jg(n, a, i, e.motionDurationMid), {
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
}, fU = (e, t) => {
  const {
    r,
    g: n,
    b: a,
    a: i
  } = e.toRgb(), o = new Wr(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? o.v > 0.5 : r * 0.299 + n * 0.587 + a * 0.114 > 192;
}, lw = (e) => {
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
}, sw = (e) => {
  var t, r, n, a, i, o;
  const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, s = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, c = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (a = e.contentLineHeight) !== null && a !== void 0 ? a : Sc(l), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : Sc(s), d = (o = e.contentLineHeightLG) !== null && o !== void 0 ? o : Sc(c), p = fU(new X4(e.colorBgSolid), "#fff") ? "#000" : "#fff";
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
}, dU = (e) => {
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
      "&:not(:disabled)": Object.assign({}, G1(e)),
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
}, cw = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), pU = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), hU = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), vU = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), ap = (e, t, r, n, a, i, o, l) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, cw(e, Object.assign({
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
}), mU = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, vU(e))
}), gU = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Ys = (e, t, r, n) => {
  const i = n && ["link", "text"].includes(n) ? gU : mU;
  return Object.assign(Object.assign({}, i(e)), cw(e.componentCls, t, r));
}, ip = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, Ys(e, n, a))
}), op = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, Ys(e, n, a))
}), lp = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), sp = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, Ys(e, r, n))
}), Ca = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, Ys(e, n, a, r))
}), yU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ip(e, e.solidTextColor, e.colorBgSolid, {
  background: e.colorBgSolidHover
}, {
  background: e.colorBgSolidActive
})), lp(e)), sp(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ca(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), ap(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), bU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, op(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), lp(e)), sp(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Ca(e, e.colorLink, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), ap(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), xU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ip(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), op(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), lp(e)), sp(e, e.colorErrorBg, {
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
})), ap(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), wU = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-color-default`]: yU(e),
    [`${t}-color-primary`]: bU(e),
    [`${t}-color-dangerous`]: xU(e)
  };
}, SU = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, op(e, e.defaultBorderColor, e.defaultBg, {
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
})), ip(e, e.primaryColor, e.colorPrimary, {
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
})), cp = function(e) {
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
      [`${r}${r}-circle${t}`]: pU(e)
    },
    {
      [`${r}${r}-round${t}`]: hU(e)
    }
  ];
}, OU = (e) => {
  const t = $r(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return cp(t, e.componentCls);
}, $U = (e) => {
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
  return cp(t, `${e.componentCls}-sm`);
}, CU = (e) => {
  const t = $r(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return cp(t, `${e.componentCls}-lg`);
}, PU = (e) => {
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
}, _U = Xf("Button", (e) => {
  const t = lw(e);
  return [
    // Shared
    dU(t),
    // Size
    OU(t),
    $U(t),
    CU(t),
    // Block
    PU(t),
    // Color
    wU(t),
    // https://github.com/ant-design/ant-design/issues/50969
    SU(t),
    // Button Group
    j4(t)
  ];
}, sw, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function EU(e, t, r) {
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
function AU(e, t, r) {
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
function up(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, EU(e, n, t)), AU(r, n, t))
  };
}
function TU(e, t) {
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
function MU(e, t) {
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
function IU(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, TU(e, t)), MU(e.componentCls, t))
  };
}
const jU = (e) => {
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
}, DU = K1(["Button", "compact"], (e) => {
  const t = lw(e);
  return [
    // Space Compact
    up(t),
    IU(t),
    jU(t)
  ];
}, sw);
var NU = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function RU(e) {
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
const kU = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  link: ["primary", "link"],
  text: ["default", "text"]
}, BU = /* @__PURE__ */ T.forwardRef((e, t) => {
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
  } = e, P = NU(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), I = u || "default", [N, j] = b.useMemo(() => {
    if (s && c)
      return [s, c];
    const Se = kU[I] || [];
    return f ? ["danger", Se[1]] : Se;
  }, [u, s, c, f]), A = N === "danger" ? "dangerous" : N, {
    getPrefixCls: D,
    direction: R,
    button: k
  } = b.useContext(en), L = (r = M ?? (k == null ? void 0 : k.autoInsertSpace)) !== null && r !== void 0 ? r : !0, H = D("btn", l), [B, W, U] = _U(H), G = b.useContext(Zf), Q = m ?? G, ne = b.useContext(Kx), te = b.useMemo(() => RU(o), [o]), [z, K] = b.useState(te.loading), [q, F] = b.useState(!1), Z = qf(t, /* @__PURE__ */ b.createRef()), le = b.Children.count(w) === 1 && !S && !Ro(j);
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
    le && Ff(Se) ? q || F(!0) : q && F(!1);
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
  } = Qf(H, R), $e = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Be = np((Se) => {
    var Ie, pe;
    return (pe = (Ie = p ?? ae) !== null && Ie !== void 0 ? Ie : ne) !== null && pe !== void 0 ? pe : Se;
  }), Te = Be && (n = $e[Be]) !== null && n !== void 0 ? n : "", Ne = z ? "loading" : S, Ge = Jf(P, ["navigate"]), Qe = je(H, W, U, {
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
  }, de, h, y, k == null ? void 0 : k.className), Ke = Object.assign(Object.assign({}, k == null ? void 0 : k.style), _), Ue = je(C == null ? void 0 : C.icon, (a = k == null ? void 0 : k.classNames) === null || a === void 0 ? void 0 : a.icon), Ve = Object.assign(Object.assign({}, (v == null ? void 0 : v.icon) || {}), ((i = k == null ? void 0 : k.styles) === null || i === void 0 ? void 0 : i.icon) || {}), _t = S && !z ? /* @__PURE__ */ T.createElement(Xx, {
    prefixCls: H,
    className: Ue,
    style: Ve
  }, S) : /* @__PURE__ */ T.createElement(I4, {
    existIcon: !!S,
    prefixCls: H,
    loading: z
  }), He = w || w === 0 ? M4(w, le && L) : null;
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
  }), _t, He, !!de && /* @__PURE__ */ T.createElement(DU, {
    key: "compact",
    prefixCls: H
  }));
  return Ro(j) || (ot = /* @__PURE__ */ T.createElement(Gx, {
    component: "Button",
    disabled: z
  }, ot)), B(ot);
}), qs = BU;
qs.Group = A4;
qs.__ANT_BUTTON = !0;
Oe.env.NODE_ENV !== "production" && (qs.displayName = "Button");
function LU(e) {
  return (t) => /* @__PURE__ */ b.createElement(ey, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ b.createElement(e, Object.assign({}, t)));
}
const uw = (e, t, r, n) => LU((i) => {
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
var HU = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Ln = void 0;
function FU(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, i = e.renderItem, o = e.responsive, l = e.responsiveDisabled, s = e.registerSize, c = e.itemKey, u = e.className, f = e.style, d = e.children, p = e.display, v = e.order, m = e.component, h = m === void 0 ? "div" : m, y = Kt(e, HU), w = o && !p;
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
  return o && ($ = /* @__PURE__ */ b.createElement(ns, {
    onResize: function(_) {
      var M = _.offsetWidth;
      S(M);
    },
    disabled: l
  }, $)), $;
}
var gi = /* @__PURE__ */ b.forwardRef(FU);
gi.displayName = "Item";
function WU(e) {
  if (typeof MessageChannel > "u")
    Wt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function VU() {
  var e = b.useRef(null), t = function(n) {
    e.current || (e.current = [], WU(function() {
      B1.unstable_batchedUpdates(function() {
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
var Ql = /* @__PURE__ */ T.createContext(null), zU = ["component"], UU = ["className"], YU = ["className"], qU = function(t, r) {
  var n = b.useContext(Ql);
  if (!n) {
    var a = t.component, i = a === void 0 ? "div" : a, o = Kt(t, zU);
    return /* @__PURE__ */ b.createElement(i, we({}, o, {
      ref: r
    }));
  }
  var l = n.className, s = Kt(n, UU), c = t.className, u = Kt(t, YU);
  return /* @__PURE__ */ b.createElement(Ql.Provider, {
    value: null
  }, /* @__PURE__ */ b.createElement(gi, we({
    ref: r,
    className: je(l, c)
  }, s, u)));
}, fw = /* @__PURE__ */ b.forwardRef(qU);
fw.displayName = "RawItem";
var GU = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], dw = "responsive", pw = "invalidate";
function KU(e) {
  return "+ ".concat(e.length, " ...");
}
function XU(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, i = a === void 0 ? [] : a, o = e.renderItem, l = e.renderRawItem, s = e.itemKey, c = e.itemWidth, u = c === void 0 ? 10 : c, f = e.ssr, d = e.style, p = e.className, v = e.maxCount, m = e.renderRest, h = e.renderRawRest, y = e.suffix, w = e.component, S = w === void 0 ? "div" : w, O = e.itemComponent, g = e.onVisibleChange, x = Kt(e, GU), $ = f === "full", C = VU(), _ = ai(C, null), M = X(_, 2), P = M[0], I = M[1], N = P || 0, j = ai(C, /* @__PURE__ */ new Map()), E = X(j, 2), A = E[0], D = E[1], R = ai(C, 0), k = X(R, 2), L = k[0], H = k[1], B = ai(C, 0), W = X(B, 2), U = W[0], G = W[1], Q = ai(C, 0), ne = X(Q, 2), te = ne[0], z = ne[1], K = b.useState(null), q = X(K, 2), F = q[0], J = q[1], Z = b.useState(null), le = X(Z, 2), re = le[0], ae = le[1], de = b.useMemo(function() {
    return re === null && $ ? Number.MAX_SAFE_INTEGER : re || 0;
  }, [re, P]), $e = b.useState(!1), Be = X($e, 2), Te = Be[0], Ne = Be[1], Ge = "".concat(n, "-item"), Qe = Math.max(L, U), Ke = v === dw, Ue = i.length && Ke, Ve = v === pw, _t = Ue || typeof v == "number" && i.length > v, He = b.useMemo(function() {
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
    return /* @__PURE__ */ b.createElement(Ql.Provider, {
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
    h && (It = /* @__PURE__ */ b.createElement(Ql.Provider, {
      value: ue(ue({}, Xe), Ct)
    }, h(ot)));
  else {
    var jt = m || KU;
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
  return Ke && (xt = /* @__PURE__ */ b.createElement(ns, {
    onResize: oe,
    disabled: !Ue
  }, xt)), xt;
}
var co = /* @__PURE__ */ b.forwardRef(XU);
co.displayName = "Overflow";
co.Item = fw;
co.RESPONSIVE = dw;
co.INVALIDATE = pw;
function hw(e, t, r) {
  return je({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const vw = (e, t) => t || e, mw = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, a;
  const {
    variant: i,
    [e]: o
  } = b.useContext(en), l = b.useContext(X1), s = o == null ? void 0 : o.variant;
  let c;
  typeof t < "u" ? c = t : r === !1 ? c = "borderless" : c = (a = (n = l ?? s) !== null && n !== void 0 ? n : i) !== null && a !== void 0 ? a : "outlined";
  const u = Z1.includes(c);
  return [c, u];
}, ZU = (e) => {
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
}, QU = (e) => {
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
        "&-remove": Object.assign(Object.assign({}, Q1()), {
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
var JU = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, eY = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: JU
  }));
}, gw = /* @__PURE__ */ b.forwardRef(eY);
Oe.env.NODE_ENV !== "production" && (gw.displayName = "DownOutlined");
var tY = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, rY = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: tY
  }));
}, yw = /* @__PURE__ */ b.forwardRef(rY);
Oe.env.NODE_ENV !== "production" && (yw.displayName = "SearchOutlined");
function nY(e) {
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
  const p = r ?? /* @__PURE__ */ b.createElement(J1, null), v = (w) => t === null && !l && !f ? null : /* @__PURE__ */ b.createElement(b.Fragment, null, c !== !1 && w, l && u);
  let m = null;
  if (t !== void 0)
    m = v(t);
  else if (i)
    m = v(/* @__PURE__ */ b.createElement(rp, {
      spin: !0
    }));
  else {
    const w = `${s}-suffix`;
    m = (S) => {
      let {
        open: O,
        showSearch: g
      } = S;
      return v(O && g ? /* @__PURE__ */ b.createElement(yw, {
        className: w
      }) : /* @__PURE__ */ b.createElement(gw, {
        className: w
      }));
    };
  }
  let h = null;
  n !== void 0 ? h = n : o ? h = /* @__PURE__ */ b.createElement(eS, null) : h = null;
  let y = null;
  return a !== void 0 ? y = a : y = /* @__PURE__ */ b.createElement(tS, null), {
    clearIcon: p,
    suffixIcon: m,
    itemIcon: h,
    removeIcon: y
  };
}
var bw = { exports: {} };
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
})(bw);
var aY = bw.exports;
const ct = /* @__PURE__ */ We(aY);
var xw = { exports: {} };
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
})(xw);
var iY = xw.exports;
const oY = /* @__PURE__ */ We(iY);
var ww = { exports: {} };
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
})(ww);
var lY = ww.exports;
const sY = /* @__PURE__ */ We(lY);
var Sw = { exports: {} };
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
})(Sw);
var cY = Sw.exports;
const uY = /* @__PURE__ */ We(cY);
var Ow = { exports: {} };
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
})(Ow);
var fY = Ow.exports;
const dY = /* @__PURE__ */ We(fY);
var $w = { exports: {} };
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
})($w);
var pY = $w.exports;
const hY = /* @__PURE__ */ We(pY);
var Cw = { exports: {} };
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
})(Cw);
var vY = Cw.exports;
const mY = /* @__PURE__ */ We(vY);
ct.extend(mY);
ct.extend(hY);
ct.extend(oY);
ct.extend(sY);
ct.extend(uY);
ct.extend(dY);
ct.extend(function(e, t) {
  var r = t.prototype, n = r.format;
  r.format = function(i) {
    var o = (i || "").replace("Wo", "wo");
    return n.bind(this)(o);
  };
});
var gY = {
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
  var r = gY[t];
  return r || t.split("_")[0];
}, jg = function() {
  rS(!1, "Not match any format. Please help to fire a issue about this.");
}, yY = {
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
          return jg(), null;
        }
        var p = ct(l, o, !0).locale(a);
        if (p.isValid())
          return p;
      }
      return r && jg(), null;
    }
  }
};
function Gs(e, t) {
  return e !== void 0 ? e : t ? "bottomRight" : "bottomLeft";
}
function Pw(e, t) {
  var r = Gs(e, t), n = r == null ? void 0 : r.toLowerCase().endsWith("right"), a = n ? "insetInlineEnd" : "insetInlineStart";
  return t && (a = ["insetInlineStart", "insetInlineEnd"].find(function(i) {
    return i !== a;
  })), a;
}
var hr = /* @__PURE__ */ b.createContext(null), bY = {
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
function _w(e) {
  var t = e.popupElement, r = e.popupStyle, n = e.popupClassName, a = e.popupAlign, i = e.transitionName, o = e.getPopupContainer, l = e.children, s = e.range, c = e.placement, u = e.builtinPlacements, f = u === void 0 ? bY : u, d = e.direction, p = e.visible, v = e.onClose, m = b.useContext(hr), h = m.prefixCls, y = "".concat(h, "-dropdown"), w = Gs(c, d === "rtl");
  return /* @__PURE__ */ b.createElement(nS, {
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
function fp(e, t) {
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
function Ks(e, t) {
  var r = {}, n = t || Object.keys(e);
  return n.forEach(function(a) {
    e[a] !== void 0 && (r[a] = e[a]);
  }), r;
}
function Ew(e, t, r) {
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
function Aw(e, t, r) {
  var n = r !== void 0 ? r : t[t.length - 1], a = t.find(function(i) {
    return e[i];
  });
  return n !== a ? e[a] : void 0;
}
function Tw(e) {
  return Ks(e, ["placement", "builtinPlacements", "popupAlign", "getPopupContainer", "transitionName", "direction"]);
}
function dp(e, t, r, n) {
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
function Mw(e, t) {
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
function Iw(e, t, r, n, a) {
  var i = "", o = [];
  return e && o.push(a ? "hh" : "HH"), t && o.push("mm"), r && o.push("ss"), i = o.join(":"), n && (i += ".SSS"), a && (i += " A"), i;
}
function xY(e, t, r, n, a, i) {
  var o = e.fieldDateTimeFormat, l = e.fieldDateFormat, s = e.fieldTimeFormat, c = e.fieldMonthFormat, u = e.fieldYearFormat, f = e.fieldWeekFormat, d = e.fieldQuarterFormat, p = e.yearFormat, v = e.cellYearFormat, m = e.cellQuarterFormat, h = e.dayFormat, y = e.cellDateFormat, w = Iw(t, r, n, a, i);
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
function jw(e, t) {
  var r = t.showHour, n = t.showMinute, a = t.showSecond, i = t.showMillisecond, o = t.use12Hours;
  return T.useMemo(function() {
    return xY(e, r, n, a, i, o);
  }, [e, r, n, a, i, o]);
}
function ii(e, t, r) {
  return r ?? t.some(function(n) {
    return e.includes(n);
  });
}
var wY = [
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
function SY(e) {
  var t = Ks(e, wY), r = e.format, n = e.picker, a = null;
  return r && (a = r, Array.isArray(a) && (a = a[0]), a = An(a) === "object" ? a.format : a), n === "time" && (t.format = a), [t, a];
}
function OY(e) {
  return e && typeof e == "string";
}
function Dw(e, t, r, n) {
  return [e, t, r, n].some(function(a) {
    return a !== void 0;
  });
}
function Nw(e, t, r, n, a) {
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
function Rw(e) {
  var t = e.showTime, r = SY(e), n = X(r, 2), a = n[0], i = n[1], o = t && An(t) === "object" ? t : {}, l = ue(ue({
    defaultOpenValue: o.defaultOpenValue || o.defaultValue
  }, a), o), s = l.showMillisecond, c = l.showHour, u = l.showMinute, f = l.showSecond, d = Dw(c, u, f, s), p = Nw(d, c, u, f, s), v = X(p, 3);
  return c = v[0], u = v[1], f = v[2], [l, ue(ue({}, l), {}, {
    showHour: c,
    showMinute: u,
    showSecond: f,
    showMillisecond: s
  }), l.format, i];
}
function kw(e, t, r, n, a) {
  var i = e === "time";
  if (e === "datetime" || i) {
    for (var o = n, l = Ew(e, a, null), s = l, c = [t, r], u = 0; u < c.length; u += 1) {
      var f = jn(c[u])[0];
      if (OY(f)) {
        s = f;
        break;
      }
    }
    var d = o.showHour, p = o.showMinute, v = o.showSecond, m = o.showMillisecond, h = o.use12Hours, y = ii(s, ["a", "A", "LT", "LLL", "LTS"], h), w = Dw(d, p, v, m);
    w || (d = ii(s, ["H", "h", "k", "LT", "LLL"]), p = ii(s, ["m", "LT", "LLL"]), v = ii(s, ["s", "LTS"]), m = ii(s, ["SSS"]));
    var S = Nw(w, d, p, v, m), O = X(S, 3);
    d = O[0], p = O[1], v = O[2];
    var g = t || Iw(d, p, v, m, y);
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
function $Y(e, t, r) {
  if (Oe.env.NODE_ENV !== "production" && r && dr(!1, "`clearIcon` will be removed in future. Please use `allowClear` instead."), t === !1)
    return null;
  var n = t && An(t) === "object" ? t : {};
  return n.clearIcon || r || /* @__PURE__ */ b.createElement("span", {
    className: "".concat(e, "-clear-btn")
  });
}
var iu = 7;
function sn(e, t, r) {
  return !e && !t || e === t ? !0 : !e || !t ? !1 : r();
}
function Wf(e, t, r) {
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
function Dg(e, t) {
  var r = Math.floor(e.getMonth(t) / 3);
  return r + 1;
}
function CY(e, t, r) {
  return sn(t, r, function() {
    return En(e, t, r) && Dg(e, t) === Dg(e, r);
  });
}
function pp(e, t, r) {
  return sn(t, r, function() {
    return En(e, t, r) && e.getMonth(t) === e.getMonth(r);
  });
}
function hp(e, t, r) {
  return sn(t, r, function() {
    return En(e, t, r) && pp(e, t, r) && e.getDate(t) === e.getDate(r);
  });
}
function Bw(e, t, r) {
  return sn(t, r, function() {
    return e.getHour(t) === e.getHour(r) && e.getMinute(t) === e.getMinute(r) && e.getSecond(t) === e.getSecond(r);
  });
}
function Lw(e, t, r) {
  return sn(t, r, function() {
    return hp(e, t, r) && Bw(e, t, r) && e.getMillisecond(t) === e.getMillisecond(r);
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
      return hp(e, r, n);
    case "week":
      return si(e, t.locale, r, n);
    case "month":
      return pp(e, r, n);
    case "quarter":
      return CY(e, r, n);
    case "year":
      return En(e, r, n);
    case "decade":
      return Wf(e, r, n);
    case "time":
      return Bw(e, r, n);
    default:
      return Lw(e, r, n);
  }
}
function Xs(e, t, r, n) {
  return !t || !r || !n ? !1 : e.isAfter(n, t) && e.isAfter(r, n);
}
function ko(e, t, r, n, a) {
  return Tt(e, t, r, n, a) ? !0 : e.isAfter(r, n);
}
function PY(e, t, r) {
  var n = t.locale.getWeekFirstDay(e), a = t.setDate(r, 1), i = t.getWeekDay(a), o = t.addDate(a, n - i);
  return t.getMonth(o) === t.getMonth(r) && t.getDate(o) > 1 && (o = t.addDate(o, -7)), o;
}
function yt(e, t) {
  var r = t.generateConfig, n = t.locale, a = t.format;
  return e ? typeof a == "function" ? a(e) : r.locale.format(n.locale, e, a) : "";
}
function Jl(e, t, r) {
  var n = t, a = ["getHour", "getMinute", "getSecond", "getMillisecond"], i = ["setHour", "setMinute", "setSecond", "setMillisecond"];
  return i.forEach(function(o, l) {
    r ? n = e[o](n, e[a[l]](r)) : n = e[o](n, 0);
  }), n;
}
function _Y(e, t, r, n, a) {
  var i = ut(function(o, l) {
    return !!(r && r(o, l) || n && e.isAfter(n, o) && !Tt(e, t, n, o, l.type) || a && e.isAfter(o, a) && !Tt(e, t, a, o, l.type));
  });
  return i;
}
function EY(e, t, r) {
  return b.useMemo(function() {
    var n = Ew(e, t, r), a = jn(n), i = a[0], o = An(i) === "object" && i.type === "mask" ? i.format : null;
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
function AY(e, t, r) {
  return typeof e[0] == "function" || r ? !0 : t;
}
function TY(e, t, r, n) {
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
function Hw(e, t) {
  var r = e.generateConfig, n = e.locale, a = e.picker, i = a === void 0 ? "date" : a, o = e.prefixCls, l = o === void 0 ? "rc-picker" : o, s = e.styles, c = s === void 0 ? {} : s, u = e.classNames, f = u === void 0 ? {} : u, d = e.order, p = d === void 0 ? !0 : d, v = e.components, m = v === void 0 ? {} : v, h = e.inputRender, y = e.allowClear, w = e.clearIcon, S = e.needConfirm, O = e.multiple, g = e.format, x = e.inputReadOnly, $ = e.disabledDate, C = e.minDate, _ = e.maxDate, M = e.showTime, P = e.value, I = e.defaultValue, N = e.pickerValue, j = e.defaultPickerValue, E = Bo(P), A = Bo(I), D = Bo(N), R = Bo(j), k = i === "date" && M ? "datetime" : i, L = k === "time" || k === "datetime", H = L || O, B = S ?? L, W = Rw(e), U = X(W, 4), G = U[0], Q = U[1], ne = U[2], te = U[3], z = jw(n, Q), K = b.useMemo(function() {
    return kw(k, ne, te, G, z);
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
      clearIcon: $Y(l, y, w),
      showTime: K,
      value: E,
      defaultValue: A,
      pickerValue: D,
      defaultPickerValue: R
    }, t == null ? void 0 : t());
  }, [e]), F = EY(k, z, g), J = X(F, 2), Z = J[0], le = J[1], re = AY(Z, x, O), ae = _Y(r, n, $, C, _), de = TY(r, i, ae, K), $e = b.useMemo(function() {
    return ue(ue({}, q), {}, {
      needConfirm: B,
      inputReadOnly: re,
      disabledDate: ae
    });
  }, [q, B, re, ae]);
  return [$e, k, H, Z, le, de];
}
function MY(e, t, r) {
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
function Fw(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = arguments.length > 3 ? arguments[3] : void 0, a = r.every(function(u) {
    return u;
  }) ? !1 : e, i = MY(a, t || !1, n), o = X(i, 2), l = o[0], s = o[1];
  function c(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (!f.inherit || l) && s(u, f.force);
  }
  return [l, c];
}
function Ww(e) {
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
function Vw(e, t) {
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
function vp(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, n = b.useRef(t);
  n.current = t, aS(function() {
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
function zw(e) {
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
  return vp(c || r, function() {
    c || (f.current = []);
  }), b.useEffect(function() {
    c && f.current.push(i);
  }, [c, i]), [c, p, v, i, o, m, f.current];
}
function IY(e, t, r, n, a, i) {
  var o = r[r.length - 1], l = function(c, u) {
    var f = X(e, 2), d = f[0], p = f[1], v = ue(ue({}, u), {}, {
      from: Aw(e, r)
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
var ou = [];
function Uw(e, t, r, n, a, i, o, l) {
  var s = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : ou, c = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : ou, u = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : ou, f = arguments.length > 11 ? arguments[11] : void 0, d = arguments.length > 12 ? arguments[12] : void 0, p = arguments.length > 13 ? arguments[13] : void 0, v = o === "time", m = i || 0, h = function(D) {
    var R = e.getNow();
    return v && (R = Jl(e, R)), s[D] || r[D] || R;
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
    return v ? A : Jl(e, A, u[m]);
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
function Yw(e, t) {
  var r = b.useRef(e), n = b.useState({}), a = X(n, 2), i = a[1], o = function(c) {
    return c && t !== void 0 ? t : r.current;
  }, l = function(c) {
    r.current = c, i({});
  };
  return [o, l, o(!0)];
}
var jY = [];
function qw(e, t, r) {
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
      if (f !== d && !Lw(e, f, d)) {
        c = u;
        break;
      }
    }
    return [c < 0, c !== 0];
  };
  return [n, a];
}
function Gw(e, t) {
  return Vt(e).sort(function(r, n) {
    return t.isAfter(r, n) ? 1 : -1;
  });
}
function DY(e) {
  var t = Yw(e), r = X(t, 2), n = r[0], a = r[1], i = ut(function() {
    a(e);
  });
  return b.useEffect(function() {
    i();
  }, [e]), [n, a];
}
function Kw(e, t, r, n, a, i, o, l, s) {
  var c = fr(i, {
    value: o
  }), u = X(c, 2), f = u[0], d = u[1], p = f || jY, v = DY(p), m = X(v, 2), h = m[0], y = m[1], w = qw(e, t, r), S = X(w, 2), O = S[0], g = S[1], x = ut(function(C) {
    var _ = Vt(C);
    if (n)
      for (var M = 0; M < 2; M += 1)
        _[M] = _[M] || null;
    else a && (_ = Gw(_.filter(function(A) {
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
function Xw(e, t, r, n, a, i, o, l, s, c) {
  var u = e.generateConfig, f = e.locale, d = e.picker, p = e.onChange, v = e.allowEmpty, m = e.order, h = i.some(function(N) {
    return N;
  }) ? !1 : m, y = qw(u, f, o), w = X(y, 2), S = w[0], O = w[1], g = Yw(t), x = X(g, 2), $ = x[0], C = x[1], _ = ut(function() {
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
    h && E[0] && E[1] && (E = Gw(E, u)), a(E);
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
  return vp(!I, function() {
    I && (M(), a(t), _());
  }, 2), [P, M];
}
function Zw(e, t, r, n, a) {
  return t !== "date" && t !== "time" ? !1 : r !== void 0 ? r : n !== void 0 ? n : !a && (e === "date" || e === "time");
}
function NY(e, t, r, n, a, i) {
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
      label: fp(s, i),
      value: s,
      disabled: c
    });
  }
  return o;
}
function mp(e) {
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
        label: fp(K.value % 12 || 12, 2)
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
    var Be = NY(B, U, G, Q, ne, e);
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
function RY(e) {
  var t = e.mode, r = e.internalMode, n = e.renderExtraFooter, a = e.showNow, i = e.showTime, o = e.onSubmit, l = e.onNow, s = e.invalid, c = e.needConfirm, u = e.generateConfig, f = e.disabledDate, d = b.useContext(hr), p = d.prefixCls, v = d.locale, m = d.button, h = m === void 0 ? "button" : m, y = u.getNow(), w = mp(u, i, y), S = X(w, 1), O = S[0], g = n == null ? void 0 : n(t), x = f(y, {
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
function Qw(e, t, r) {
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
function Zs() {
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
  for (var t = e.rowNum, r = e.colNum, n = e.baseDate, a = e.getCellDate, i = e.prefixColumn, o = e.rowClassName, l = e.titleFormat, s = e.getCellText, c = e.getCellClassName, u = e.headerCells, f = e.cellSelection, d = f === void 0 ? !0 : f, p = e.disabledDate, v = Zs(), m = v.prefixCls, h = v.panelType, y = v.now, w = v.disabledDate, S = v.cellRender, O = v.onHover, g = v.hoverValue, x = v.hoverRangeValue, $ = v.generateConfig, C = v.values, _ = v.locale, M = v.onSelect, P = p || w, I = "".concat(m, "-cell"), N = b.useContext(kr), j = N.onCellDblClick, E = function(W) {
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
        Q = Xs($, K, q, U), ne = Tt($, _, U, K, h), te = Tt($, _, U, q, h);
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
  var t = e.offset, r = e.superOffset, n = e.onChange, a = e.getStart, i = e.getEnd, o = e.children, l = Zs(), s = l.prefixCls, c = l.prevIcon, u = c === void 0 ? "‹" : c, f = l.nextIcon, d = f === void 0 ? "›" : f, p = l.superPrevIcon, v = p === void 0 ? "«" : p, m = l.superNextIcon, h = m === void 0 ? "»" : m, y = l.minDate, w = l.maxDate, S = l.generateConfig, O = l.locale, g = l.pickerValue, x = l.panelType, $ = "".concat(s, "-header"), C = b.useContext(kr), _ = C.hidePrev, M = C.hideNext, P = C.hideHeader, I = b.useMemo(function() {
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
function Qs(e) {
  var t = e.prefixCls, r = e.panelName, n = r === void 0 ? "date" : r, a = e.locale, i = e.generateConfig, o = e.pickerValue, l = e.onPickerValueChange, s = e.onModeChange, c = e.mode, u = c === void 0 ? "date" : c, f = e.disabledDate, d = e.onSelect, p = e.onHover, v = e.showWeek, m = "".concat(t, "-").concat(n, "-panel"), h = "".concat(t, "-cell"), y = u === "week", w = Fa(e, u), S = X(w, 2), O = S[0], g = S[1], x = i.locale.getWeekFirstDay(a.locale), $ = i.setDate(o, 1), C = PY(a.locale, i, $), _ = i.getMonth(o), M = v === void 0 ? y : v, P = M ? function(B) {
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
  for (var j = 0; j < iu; j += 1)
    I.push(/* @__PURE__ */ b.createElement("th", {
      key: j
    }, N[(j + x) % iu]));
  var E = function(W, U) {
    return i.addDate(W, U);
  }, A = function(W) {
    return yt(W, {
      locale: a,
      format: a.cellDateFormat,
      generateConfig: i
    });
  }, D = function(W) {
    var U = ve(ve({}, "".concat(t, "-cell-in-view"), pp(i, W, o)), "".concat(t, "-cell-today"), hp(i, W, g));
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
    colNum: iu,
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
var kY = 1 / 3;
function BY(e, t) {
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
        if (w === 0 && d !== p || !Qg(f)) {
          l.current <= 5 && (n.current = Wt(m));
          return;
        }
        var O = h + (S - h) * kY, g = Math.abs(S - O);
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
var LY = 300;
function oi(e) {
  var t = e.units, r = e.value, n = e.optionalValue, a = e.type, i = e.onChange, o = e.onHover, l = e.onDblClick, s = e.changeOnScroll, c = Zs(), u = c.prefixCls, f = c.cellRender, d = c.now, p = c.locale, v = "".concat(u, "-time-panel"), m = "".concat(u, "-time-panel-cell"), h = b.useRef(null), y = b.useRef(), w = function() {
    clearTimeout(y.current);
  }, S = BY(h, r ?? n), O = X(S, 3), g = O[0], x = O[1], $ = O[2];
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
    }, LY));
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
function HY(e) {
  var t = e.showHour, r = e.showMinute, n = e.showSecond, a = e.showMillisecond, i = e.use12Hours, o = e.changeOnScroll, l = Zs(), s = l.prefixCls, c = l.values, u = l.generateConfig, f = l.locale, d = l.onSelect, p = l.onHover, v = p === void 0 ? function() {
  } : p, m = l.pickerValue, h = (c == null ? void 0 : c[0]) || null, y = b.useContext(kr), w = y.onCellDblClick, S = mp(u, e, h), O = X(S, 5), g = O[0], x = O[1], $ = O[2], C = O[3], _ = O[4], M = function(fe) {
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
function Jw(e) {
  var t = e.prefixCls, r = e.value, n = e.locale, a = e.generateConfig, i = e.showTime, o = i || {}, l = o.format, s = "".concat(t, "-time-panel"), c = Fa(e, "time"), u = X(c, 1), f = u[0];
  return /* @__PURE__ */ b.createElement(Dn.Provider, {
    value: f
  }, /* @__PURE__ */ b.createElement("div", {
    className: je(s)
  }, /* @__PURE__ */ b.createElement(Wa, null, r ? yt(r, {
    locale: n,
    format: l,
    generateConfig: a
  }) : " "), /* @__PURE__ */ b.createElement(HY, i)));
}
function FY(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.showTime, a = e.onSelect, i = e.value, o = e.pickerValue, l = e.onHover, s = "".concat(t, "-datetime-panel"), c = mp(r, n), u = X(c, 1), f = u[0], d = function(h) {
    return i ? Jl(r, h, i) : Jl(r, h, o);
  }, p = function(h) {
    l == null || l(h && d(h));
  }, v = function(h) {
    var y = d(h);
    a(f(y, y));
  };
  return /* @__PURE__ */ b.createElement("div", {
    className: s
  }, /* @__PURE__ */ b.createElement(Qs, we({}, e, {
    onSelect: v,
    onHover: p
  })), /* @__PURE__ */ b.createElement(Jw, e));
}
function WY(e) {
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
    return ve({}, "".concat(t, "-cell-in-view"), Wf(n, x, p) || Wf(n, x, v) || Xs(n, p, v, x));
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
function VY(e) {
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
function zY(e) {
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
function UY(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.locale, a = e.value, i = e.hoverValue, o = e.hoverRangeValue, l = n.locale, s = "".concat(t, "-week-panel-row"), c = function(f) {
    var d = {};
    if (o) {
      var p = X(o, 2), v = p[0], m = p[1], h = si(r, l, v, f), y = si(r, l, m, f);
      d["".concat(s, "-range-start")] = h, d["".concat(s, "-range-end")] = y, d["".concat(s, "-range-hover")] = !h && !y && Xs(r, v, m, f);
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
  return /* @__PURE__ */ b.createElement(Qs, we({}, e, {
    mode: "week",
    panelName: "week",
    rowClassName: c
  }));
}
function YY(e) {
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
    return ve({}, "".concat(t, "-cell-in-view"), En(n, $, v) || En(n, $, m) || Xs(n, v, m, $));
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
var qY = {
  date: Qs,
  datetime: FY,
  week: UY,
  month: VY,
  quarter: zY,
  year: YY,
  decade: WY,
  time: Jw
};
function GY(e, t) {
  var r, n = e.locale, a = e.generateConfig, i = e.direction, o = e.prefixCls, l = e.tabIndex, s = l === void 0 ? 0 : l, c = e.multiple, u = e.defaultValue, f = e.value, d = e.onChange, p = e.onSelect, v = e.defaultPickerValue, m = e.pickerValue, h = e.onPickerValueChange, y = e.mode, w = e.onPanelChange, S = e.picker, O = S === void 0 ? "date" : S, g = e.showTime, x = e.hoverValue, $ = e.hoverRangeValue, C = e.cellRender, _ = e.dateRender, M = e.monthCellRender, P = e.components, I = P === void 0 ? {} : P, N = e.hideHeader, j = ((r = b.useContext(hr)) === null || r === void 0 ? void 0 : r.prefixCls) || o || "rc-picker", E = b.useRef();
  b.useImperativeHandle(t, function() {
    return {
      nativeElement: E.current
    };
  });
  var A = Rw(e), D = X(A, 4), R = D[0], k = D[1], L = D[2], H = D[3], B = jw(n, k), W = O === "date" && g ? "datetime" : O, U = b.useMemo(function() {
    return kw(W, L, H, R, B);
  }, [W, L, H, R, B]), G = a.getNow(), Q = fr(O, {
    value: y,
    postState: function(he) {
      return he || "date";
    }
  }), ne = X(Q, 2), te = ne[0], z = ne[1], K = te === "date" && U ? "datetime" : te, q = Qw(a, n, W), F = fr(u, {
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
  }, [$, a]), _t = dp(C, _, M), He = I[K] || qY[K] || Qs, ot = b.useContext(kr), Se = b.useMemo(function() {
    return ue(ue({}, ot), {}, {
      hideHeader: N
    });
  }, [ot, N]);
  Oe.env.NODE_ENV !== "production" && dr(!re || re.every(function(oe) {
    return a.isValidate(oe);
  }), "Invalidate date pass to `value` or `defaultValue`.");
  var Ie = "".concat(j, "-panel"), pe = Ks(e, [
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
var Uo = /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(GY));
Oe.env.NODE_ENV !== "production" && (Uo.displayName = "PanelPicker");
function KY(e) {
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
  }, /* @__PURE__ */ b.createElement(Uo, y)), /* @__PURE__ */ b.createElement(kr.Provider, {
    value: ue(ue({}, m), {}, {
      hidePrev: !0
    })
  }, /* @__PURE__ */ b.createElement(Uo, we({}, y, {
    pickerValue: p,
    onPickerValueChange: v
  })))) : /* @__PURE__ */ b.createElement(kr.Provider, {
    value: ue({}, m)
  }, /* @__PURE__ */ b.createElement(Uo, y));
}
function Ng(e) {
  return typeof e == "function" ? e() : e;
}
function XY(e) {
  var t = e.prefixCls, r = e.presets, n = e.onClick, a = e.onHover;
  return r.length ? /* @__PURE__ */ b.createElement("div", {
    className: "".concat(t, "-presets")
  }, /* @__PURE__ */ b.createElement("ul", null, r.map(function(i, o) {
    var l = i.label, s = i.value;
    return /* @__PURE__ */ b.createElement("li", {
      key: o,
      onClick: function() {
        n(Ng(s));
      },
      onMouseEnter: function() {
        a(Ng(s));
      },
      onMouseLeave: function() {
        a(null);
      }
    }, l);
  }))) : null;
}
function e1(e) {
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
  }, /* @__PURE__ */ b.createElement(XY, {
    prefixCls: C,
    presets: u,
    onClick: d,
    onHover: f
  }), /* @__PURE__ */ b.createElement("div", null, /* @__PURE__ */ b.createElement(KY, we({}, e, {
    value: Q
  })), /* @__PURE__ */ b.createElement(RY, we({}, e, {
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
    var Z = Gs(c, M), le = Pw(Z, M);
    J = /* @__PURE__ */ b.createElement("div", {
      onMouseDown: m,
      ref: I,
      className: je("".concat(C, "-range-wrapper"), "".concat(C, "-").concat(n, "-range-wrapper"))
    }, /* @__PURE__ */ b.createElement("div", {
      ref: P,
      className: "".concat(C, "-range-arrow"),
      style: ve({}, le, s)
    }), /* @__PURE__ */ b.createElement(ns, {
      onResize: H
    }, J));
  }
  return J;
}
function t1(e, t) {
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
    var U = tp(e, {
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
var ZY = ["onMouseEnter", "onMouseLeave"];
function r1(e) {
  return b.useMemo(function() {
    return Ks(e, ZY);
  }, [e]);
}
var QY = ["icon", "type"], JY = ["onClear"];
function Js(e) {
  var t = e.icon, r = e.type, n = Kt(e, QY), a = b.useContext(hr), i = a.prefixCls;
  return t ? /* @__PURE__ */ b.createElement("span", we({
    className: "".concat(i, "-").concat(r)
  }, n), t) : null;
}
function Vf(e) {
  var t = e.onClear, r = Kt(e, JY);
  return /* @__PURE__ */ b.createElement(Js, we({}, r, {
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
var lu = ["YYYY", "MM", "DD", "HH", "mm", "ss", "SSS"], Rg = "顧", eq = /* @__PURE__ */ function() {
  function e(t) {
    Gf(this, e), ve(this, "format", void 0), ve(this, "maskFormat", void 0), ve(this, "cells", void 0), ve(this, "maskCells", void 0), this.format = t;
    var r = lu.map(function(l) {
      return "(".concat(l, ")");
    }).join("|"), n = new RegExp(r, "g");
    this.maskFormat = t.replace(
      n,
      // Use Chinese character to avoid user use it in format
      function(l) {
        return Rg.repeat(l.length);
      }
    );
    var a = new RegExp("(".concat(lu.join("|"), ")")), i = (t.split(a) || []).filter(function(l) {
      return l;
    }), o = 0;
    this.cells = i.map(function(l) {
      var s = lu.includes(l), c = o, u = o + l.length;
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
  return Kf(e, [{
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
        if (!i || a !== Rg && a !== i)
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
function tq(e) {
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
var rq = ["active", "showActiveCls", "suffixIcon", "format", "validateFormat", "onChange", "onInput", "helped", "onHelp", "onSubmit", "onKeyDown", "preserveInvalidOnBlur", "invalid", "clearIcon"], es = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.active, n = e.showActiveCls, a = n === void 0 ? !0 : n, i = e.suffixIcon, o = e.format, l = e.validateFormat, s = e.onChange;
  e.onInput;
  var c = e.helped, u = e.onHelp, f = e.onSubmit, d = e.onKeyDown, p = e.preserveInvalidOnBlur, v = p === void 0 ? !1 : p, m = e.invalid, h = e.clearIcon, y = Kt(e, rq), w = e.value, S = e.onFocus, O = e.onBlur, g = e.onMouseUp, x = b.useContext(hr), $ = x.prefixCls, C = x.input, _ = C === void 0 ? "input" : C, M = "".concat($, "-input"), P = b.useState(!1), I = X(P, 2), N = I[0], j = I[1], E = b.useState(w), A = X(E, 2), D = A[0], R = A[1], k = b.useState(""), L = X(k, 2), H = L[0], B = L[1], W = b.useState(null), U = X(W, 2), G = U[0], Q = U[1], ne = b.useState(null), te = X(ne, 2), z = te[0], K = te[1], q = D || "";
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
    return new eq(o || "");
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
  vp(r, function() {
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
      var jt = tq(Ye), xt = X(jt, 3), be = xt[0], Le = xt[1], Je = xt[2], ht = q.slice(ae, de), Ut = Number(ht);
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
        fp(ie, fe) + // after
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
  })), /* @__PURE__ */ b.createElement(Js, {
    type: "suffix",
    icon: i
  }), h);
});
Oe.env.NODE_ENV !== "production" && (es.displayName = "Input");
var nq = ["id", "clearIcon", "suffixIcon", "separator", "activeIndex", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "value", "onChange", "onSubmit", "onInputChange", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onActiveOffset", "placement", "onMouseDown", "required", "aria-required", "autoFocus"], aq = ["index"];
function iq(e, t) {
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
  var g = e.autoFocus, x = Kt(e, nq), $ = y === "rtl", C = b.useContext(hr), _ = C.prefixCls, M = b.useMemo(function() {
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
          var J, Z = F || {}, le = Z.index, re = le === void 0 ? 0 : le, ae = Kt(Z, aq);
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
  var E = r1(x), A = b.useMemo(function() {
    return Array.isArray(c) ? c : [c, c];
  }, [c]), D = t1(ue(ue({}, e), {}, {
    id: M,
    placeholder: A
  })), R = X(D, 1), k = R[0], L = Gs(S, $), H = Pw(L, $), B = L == null ? void 0 : L.toLowerCase().endsWith("right"), W = b.useState({
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
  return /* @__PURE__ */ b.createElement(ns, {
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
  }), /* @__PURE__ */ b.createElement(es, we({
    ref: I
  }, k(0), {
    autoFocus: z,
    "date-range": "start"
  })), /* @__PURE__ */ b.createElement("div", {
    className: "".concat(_, "-range-separator")
  }, o), /* @__PURE__ */ b.createElement(es, we({
    ref: N
  }, k(1), {
    autoFocus: K,
    "date-range": "end"
  })), /* @__PURE__ */ b.createElement("div", {
    className: "".concat(_, "-active-bar"),
    style: G
  }), /* @__PURE__ */ b.createElement(Js, {
    type: "suffix",
    icon: a
  }), te && /* @__PURE__ */ b.createElement(Vf, {
    icon: n,
    onClear: p
  })));
}
var n1 = /* @__PURE__ */ b.forwardRef(iq);
Oe.env.NODE_ENV !== "production" && (n1.displayName = "RangeSelector");
function kg(e, t) {
  var r = e ?? t;
  return Array.isArray(r) ? r : [r, r];
}
function Wo(e) {
  return e === 1 ? "end" : "start";
}
function oq(e, t) {
  var r = Hw(e, function() {
    var Re = e.disabled, ge = e.allowEmpty, ke = kg(Re, !1), ft = kg(ge, !1);
    return {
      disabled: ke,
      allowEmpty: ft
    };
  }), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], s = n[4], c = n[5], u = a.prefixCls, f = a.styles, d = a.classNames, p = a.placement, v = a.defaultValue, m = a.value, h = a.needConfirm, y = a.onKeyDown, w = a.disabled, S = a.allowEmpty, O = a.disabledDate, g = a.minDate, x = a.maxDate, $ = a.defaultOpen, C = a.open, _ = a.onOpenChange, M = a.locale, P = a.generateConfig, I = a.picker, N = a.showNow, j = a.showToday, E = a.showTime, A = a.mode, D = a.onPanelChange, R = a.onCalendarChange, k = a.onOk, L = a.defaultPickerValue, H = a.pickerValue, B = a.onPickerValueChange, W = a.inputReadOnly, U = a.suffixIcon, G = a.onFocus, Q = a.onBlur, ne = a.presets, te = a.ranges, z = a.components, K = a.cellRender, q = a.dateRender, F = a.monthCellRender, J = a.onClick, Z = Ww(t), le = Fw(C, $, w, _), re = X(le, 2), ae = re[0], de = re[1], $e = function(ge, ke) {
    (w.some(function(ft) {
      return !ft;
    }) || !ge) && de(ge, ke);
  }, Be = Kw(P, M, l, !0, !1, v, m, R, k), Te = X(Be, 5), Ne = Te[0], Ge = Te[1], Qe = Te[2], Ke = Te[3], Ue = Te[4], Ve = Qe(), _t = zw(w, S, ae), He = X(_t, 7), ot = He[0], Se = He[1], Ie = He[2], pe = He[3], oe = He[4], he = He[5], _e = He[6], ie = function(ge, ke) {
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
      var ft = Wo(pe), ir = Aw(Ve, _e, pe);
      return Re(ke, ft, {
        from: ir
      });
    } : void 0;
    return ue(ue({}, E), {}, {
      disabledTime: ge
    });
  }, [E, pe, Ve, _e]), nt = fr([I, I], {
    value: A
  }), Xe = X(nt, 2), Et = Xe[0], It = Xe[1], Ct = Et[pe] || I, jt = Ct === "date" && Ye ? "datetime" : Ct, xt = jt === I && jt !== "time", be = Zw(I, Ct, N, j, !0), Le = Xw(a, Ne, Ge, Qe, Ke, w, l, ot, ae, c), Je = X(Le, 2), ht = Je[0], Ut = Je[1], Nn = IY(Ve, w, _e, P, M, O), cn = Mw(Ve, c, S), fo = X(cn, 2), ec = fo[0], tc = fo[1], rc = Uw(P, M, Ve, Et, ae, pe, i, xt, L, H, Ye == null ? void 0 : Ye.defaultOpenValue, B, g, x), za = X(rc, 2), nc = za[0], ac = za[1], Ua = ut(function(Re, ge, ke) {
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
  }, ic = function(ge) {
    var ke, ft = ge.target.getRootNode();
    if (!Z.current.nativeElement.contains((ke = ft.activeElement) !== null && ke !== void 0 ? ke : document.activeElement)) {
      var ir = w.findIndex(function(E1) {
        return !E1;
      });
      ir >= 0 && Z.current.focus({
        index: ir
      });
    }
    $e(!0), J == null || J(ge);
  }, oc = function() {
    Ut(null), $e(!1, {
      force: !0
    });
  }, po = b.useState(null), ho = X(po, 2), vo = ho[0], mo = ho[1], go = b.useState(null), gr = X(go, 2), qr = gr[0], Ya = gr[1], yo = b.useMemo(function() {
    return qr || Ve;
  }, [Ve, qr]);
  b.useEffect(function() {
    ae || Ya(null);
  }, [ae]);
  var lc = b.useState(0), bo = X(lc, 2), xo = bo[0], sc = bo[1], cc = Vw(ne, te), uc = function(ge) {
    Ya(ge), mo("preset");
  }, fc = function(ge) {
    var ke = Ut(ge);
    ke && $e(!1, {
      force: !0
    });
  }, dc = function(ge) {
    mr(ge);
  }, pc = function(ge) {
    Ya(ge ? vr(ge, pe) : null), mo("cell");
  }, hc = function(ge) {
    $e(!0), ie(ge);
  }, vc = function() {
    Ie("panel");
  }, mc = function(ge) {
    var ke = yi(Ve, pe, ge);
    Ke(ke), !h && !o && i === jt && mr(ge);
  }, gc = function() {
    $e(!1);
  }, yc = dp(K, q, F, Wo(pe)), bc = Ve[pe] || null, xc = ut(function(Re) {
    return c(Re, {
      activeIndex: pe
    });
  }), wc = b.useMemo(function() {
    var Re = tp(a, !1), ge = Jf(a, [].concat(Vt(Object.keys(Re)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange", "disabledTime"]));
    return ge;
  }, [a]), Ee = /* @__PURE__ */ b.createElement(e1, we({}, wc, {
    showNow: be,
    showTime: Ye,
    range: !0,
    multiplePanel: xt,
    activeOffset: xo,
    placement: p,
    disabledDate: Nn,
    onFocus: hc,
    onBlur: fe,
    onPanelMouseDown: vc,
    picker: I,
    mode: Ct,
    internalMode: jt,
    onPanelChange: Ua,
    format: s,
    value: bc,
    isInvalid: xc,
    onChange: null,
    onSelect: mc,
    pickerValue: nc,
    defaultOpenValue: jn(E == null ? void 0 : E.defaultOpenValue)[pe],
    onPickerValueChange: ac,
    hoverValue: yo,
    onHover: pc,
    needConfirm: h,
    onSubmit: mr,
    onOk: Ue,
    presets: cc,
    onPresetHover: uc,
    onPresetSubmit: fc,
    onNow: dc,
    cellRender: yc
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
  }, C1 = function(ge, ke) {
    ge.key === "Tab" && mr(null, !0), y == null || y(ge, ke);
  }, P1 = b.useMemo(function() {
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
    var _1 = function(ge) {
      return (
        // Value is empty
        !(m != null && m[ge]) && // DefaultValue is empty
        !(v != null && v[ge])
      );
    };
    w.some(function(Re, ge) {
      return Re && _1(ge) && !S[ge];
    }) && dr(!1, "`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.");
  }
  return /* @__PURE__ */ b.createElement(hr.Provider, {
    value: P1
  }, /* @__PURE__ */ b.createElement(_w, we({}, Tw(a), {
    popupElement: Ee,
    popupStyle: f.popup,
    popupClassName: d.popup,
    visible: ae,
    onClose: gc,
    range: !0
  }), /* @__PURE__ */ b.createElement(
    n1,
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
      onKeyDown: C1,
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
      onClick: ic,
      onClear: oc,
      invalid: ec,
      onInvalid: tc,
      onActiveOffset: sc
    })
  )));
}
var a1 = /* @__PURE__ */ b.forwardRef(oq);
Oe.env.NODE_ENV !== "production" && (a1.displayName = "RefRangePicker");
function lq(e) {
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
var sq = ["id", "open", "clearIcon", "suffixIcon", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "internalPicker", "value", "onChange", "onSubmit", "onInputChange", "multiple", "maxTagCount", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onMouseDown", "required", "aria-required", "autoFocus", "removeIcon"];
function cq(e, t) {
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
  var $ = e.autoFocus, C = e.removeIcon, _ = Kt(e, sq), M = g === "rtl", P = b.useContext(hr), I = P.prefixCls, N = b.useRef(), j = b.useRef();
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
  var E = r1(_), A = function(G) {
    m([G]);
  }, D = function(G) {
    var Q = v.filter(function(ne) {
      return ne && !Tt(l, o, ne, G, p);
    });
    m(Q), r || h();
  }, R = t1(ue(ue({}, e), {}, {
    onChange: A
  }), function(U) {
    var G = U.valueTexts;
    return {
      value: G[0] || "",
      active: i
    };
  }), k = X(R, 2), L = k[0], H = k[1], B = !!(n && v.length && !S), W = y ? /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(lq, {
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
  }), /* @__PURE__ */ b.createElement(Js, {
    type: "suffix",
    icon: a
  }), B && /* @__PURE__ */ b.createElement(Vf, {
    icon: n,
    onClear: d
  })) : /* @__PURE__ */ b.createElement(es, we({
    ref: j
  }, L(), {
    autoFocus: $,
    suffixIcon: a,
    clearIcon: B && /* @__PURE__ */ b.createElement(Vf, {
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
var i1 = /* @__PURE__ */ b.forwardRef(cq);
Oe.env.NODE_ENV !== "production" && (i1.displayName = "SingleSelector");
function uq(e, t) {
  var r = Hw(e), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], s = n[4], c = n[5], u = a, f = u.prefixCls, d = u.styles, p = u.classNames, v = u.order, m = u.defaultValue, h = u.value, y = u.needConfirm, w = u.onChange, S = u.onKeyDown, O = u.disabled, g = u.disabledDate, x = u.minDate, $ = u.maxDate, C = u.defaultOpen, _ = u.open, M = u.onOpenChange, P = u.locale, I = u.generateConfig, N = u.picker, j = u.showNow, E = u.showToday, A = u.showTime, D = u.mode, R = u.onPanelChange, k = u.onCalendarChange, L = u.onOk, H = u.multiple, B = u.defaultPickerValue, W = u.pickerValue, U = u.onPickerValueChange, G = u.inputReadOnly, Q = u.suffixIcon, ne = u.removeIcon, te = u.onFocus, z = u.onBlur, K = u.presets, q = u.components, F = u.cellRender, J = u.dateRender, Z = u.monthCellRender, le = u.onClick, re = Ww(t);
  function ae(Ee) {
    return Ee === null ? null : H ? Ee : Ee[0];
  }
  var de = Qw(I, P, i), $e = Fw(_, C, [O], M), Be = X($e, 2), Te = Be[0], Ne = Be[1], Ge = function(xe, Bt, yr) {
    if (k) {
      var wo = ue({}, yr);
      delete wo.range, k(ae(xe), ae(Bt), wo);
    }
  }, Qe = function(xe) {
    L == null || L(ae(xe));
  }, Ke = Kw(I, P, l, !1, v, m, h, Ge, Qe), Ue = X(Ke, 5), Ve = Ue[0], _t = Ue[1], He = Ue[2], ot = Ue[3], Se = Ue[4], Ie = He(), pe = zw([O]), oe = X(pe, 4), he = oe[0], _e = oe[1], ie = oe[2], fe = oe[3], Ye = function(xe) {
    _e(!0), te == null || te(xe, {});
  }, nt = function(xe) {
    _e(!1), z == null || z(xe, {});
  }, Xe = fr(N, {
    value: D
  }), Et = X(Xe, 2), It = Et[0], Ct = Et[1], jt = It === "date" && A ? "datetime" : It, xt = Zw(N, It, j, E), be = w && function(Ee, xe) {
    w(ae(Ee), ae(xe));
  }, Le = Xw(
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
  ), Je = X(Le, 2), ht = Je[1], Ut = Mw(Ie, c), Nn = X(Ut, 2), cn = Nn[0], fo = Nn[1], ec = b.useMemo(function() {
    return cn.some(function(Ee) {
      return Ee;
    });
  }, [cn]), tc = function(xe, Bt) {
    if (U) {
      var yr = ue(ue({}, Bt), {}, {
        mode: Bt.mode[0]
      });
      delete yr.range, U(xe[0], yr);
    }
  }, rc = Uw(
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
    tc,
    x,
    $
  ), za = X(rc, 2), nc = za[0], ac = za[1], Ua = ut(function(Ee, xe, Bt) {
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
  }, ic = function() {
    ht(null), Ne(!1, {
      force: !0
    });
  }, oc = b.useState(null), po = X(oc, 2), ho = po[0], vo = po[1], mo = b.useState(null), go = X(mo, 2), gr = go[0], qr = go[1], Ya = b.useMemo(function() {
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
  var lc = Vw(K), bo = function(xe) {
    qr(xe), vo("preset");
  }, xo = function(xe) {
    var Bt = H ? de(He(), xe) : [xe], yr = ht(Bt);
    yr && !H && Ne(!1, {
      force: !0
    });
  }, sc = function(xe) {
    xo(xe);
  }, cc = function(xe) {
    qr(xe), vo("cell");
  }, uc = function(xe) {
    Ne(!0), Ye(xe);
  }, fc = function(xe) {
    ie("panel");
    var Bt = H ? de(He(), xe) : [xe];
    ot(Bt), !y && !o && i === jt && vr();
  }, dc = function() {
    Ne(!1);
  }, pc = dp(F, J, Z), hc = b.useMemo(function() {
    var Ee = tp(a, !1), xe = Jf(a, [].concat(Vt(Object.keys(Ee)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange"]));
    return ue(ue({}, xe), {}, {
      multiple: a.multiple
    });
  }, [a]), vc = /* @__PURE__ */ b.createElement(e1, we({}, hc, {
    showNow: xt,
    showTime: A,
    disabledDate: g,
    onFocus: uc,
    onBlur: nt,
    picker: N,
    mode: It,
    internalMode: jt,
    onPanelChange: Ua,
    format: s,
    value: Ie,
    isInvalid: c,
    onChange: null,
    onSelect: fc,
    pickerValue: nc,
    defaultOpenValue: A == null ? void 0 : A.defaultOpenValue,
    onPickerValueChange: ac,
    hoverValue: Ya,
    onHover: cc,
    needConfirm: y,
    onSubmit: vr,
    onOk: Se,
    presets: lc,
    onPresetHover: bo,
    onPresetSubmit: xo,
    onNow: sc,
    cellRender: pc
  })), mc = function(xe) {
    ot(xe);
  }, gc = function() {
    ie("input");
  }, yc = function(xe) {
    ie("input"), Ne(!0, {
      inherit: !0
    }), Ye(xe);
  }, bc = function(xe) {
    Ne(!1), nt(xe);
  }, xc = function(xe, Bt) {
    xe.key === "Tab" && vr(), S == null || S(xe, Bt);
  }, wc = b.useMemo(function() {
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
    value: wc
  }, /* @__PURE__ */ b.createElement(_w, we({}, Tw(a), {
    popupElement: vc,
    popupStyle: d.popup,
    popupClassName: p.popup,
    visible: Te,
    onClose: dc
  }), /* @__PURE__ */ b.createElement(
    i1,
    we({}, a, {
      // Ref
      ref: re,
      suffixIcon: Q,
      removeIcon: ne,
      activeHelp: !!gr,
      allHelp: !!gr && ho === "preset",
      focused: he,
      onFocus: yc,
      onBlur: bc,
      onKeyDown: xc,
      onSubmit: vr,
      value: yo,
      maskFormat: s,
      onChange: mc,
      onInputChange: gc,
      internalPicker: i,
      format: l,
      inputReadOnly: G,
      disabled: O,
      open: Te,
      onOpenChange: Ne,
      onClick: mr,
      onClear: ic,
      invalid: ec,
      onInvalid: function(xe) {
        fo(xe, 0);
      }
    })
  )));
}
var o1 = /* @__PURE__ */ b.forwardRef(uq);
Oe.env.NODE_ENV !== "production" && (o1.displayName = "RefPicker");
function l1(e) {
  return $r(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const s1 = (e) => {
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
}, fq = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), gp = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, fq($r(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), c1 = (e, t) => ({
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
}), Bg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, c1(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), u1 = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, c1(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, gp(e))
  }), Bg(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Bg(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Lg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), dq = (e) => ({
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
  }, Lg(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Lg(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, gp(e))
    }
  })
}), f1 = (e, t) => {
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
}, d1 = (e, t) => ({
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
}), Hg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, d1(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), p1 = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, d1(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, gp(e))
  }), Hg(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Hg(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Fg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), pq = (e) => ({
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
  }, Fg(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Fg(e, {
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
}), h1 = (e) => ({
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
}), v1 = (e) => {
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
}, m1 = (e) => ({
  padding: `${se(e.paddingBlockSM)} ${se(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), g1 = (e) => Object.assign(Object.assign({
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
}, h1(e.colorTextPlaceholder)), {
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
  "&-lg": Object.assign({}, v1(e)),
  "&-sm": Object.assign({}, m1(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), hq = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, v1(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, m1(e)),
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
    }, iS()), {
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
}, vq = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, o = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, qo(e)), g1(e)), u1(e)), p1(e)), f1(e)), {
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
}, mq = (e) => {
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
}, gq = (e) => {
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
    [s]: Object.assign(Object.assign(Object.assign(Object.assign({}, g1(e)), {
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
    }), mq(e)), {
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
}, yq = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, qo(e)), hq(e)), {
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
      }, dq(e)), pq(e)), {
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
}, bq = (e) => {
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
}, xq = (e) => {
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
}, wq = (e) => {
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
Xf("Input", (e) => {
  const t = $r(e, l1(e));
  return [
    vq(t),
    xq(t),
    gq(t),
    yq(t),
    bq(t),
    wq(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    up(t)
  ];
}, s1, {
  resetFont: !1
});
const su = (e, t) => {
  const {
    componentCls: r,
    controlHeight: n
  } = e, a = t ? `${r}-${t}` : "", i = ZU(e);
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
}, Sq = (e) => {
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
    su(a, "small"),
    su(e),
    su(i, "large"),
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
      }, QU(e)), {
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
}, Oq = (e) => {
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
}, $q = (e) => {
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
      }, Oq(e)),
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
                color: new Go(A).setAlpha(0.5).toHexString()
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
            background: new Go(H).setAlpha(0.2).toHexString()
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
}, Cq = (e) => {
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
}, Pq = (e) => {
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
}, _q = (e) => {
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
    cellHoverWithRangeBg: new Go(e.colorPrimary).lighten(35).toHexString(),
    cellRangeBorderColor: new Go(e.colorPrimary).lighten(20).toHexString(),
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
}, Eq = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, s1(e)), _q(e)), oS(e)), {
  presetsWidth: 120,
  presetsMaxWidth: 200,
  zIndexPopup: e.zIndexPopupBase + 50
}), Aq = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: [
      Object.assign(Object.assign(Object.assign({}, u1(e)), p1(e)), f1(e)),
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
}, cu = (e, t, r, n) => {
  const a = e.calc(r).add(2).equal(), i = e.max(e.calc(t).sub(a).div(2).equal(), 0), o = e.max(e.calc(t).sub(a).sub(i).equal(), 0);
  return {
    padding: `${se(i)} ${se(n)} ${se(o)}`
  };
}, Tq = (e) => {
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
}, Mq = (e) => {
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
      [t]: Object.assign(Object.assign(Object.assign({}, qo(e)), cu(e, n, R, a)), {
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
          }, h1(f)), {
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
        "&-large": Object.assign(Object.assign({}, cu(e, d, k, a)), {
          [`${t}-input > input`]: {
            fontSize: p,
            lineHeight: L
          }
        }),
        "&-small": Object.assign({}, cu(e, v, R, m)),
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
        "&-dropdown": Object.assign(Object.assign(Object.assign({}, qo(e)), $q(e)), {
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
            animationName: iw
          },
          [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]: {
            animationName: nw
          },
          // https://github.com/ant-design/ant-design/issues/48727
          [`&${r}-slide-up-leave ${t}-panel-container`]: {
            pointerEvents: "none"
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topRight`]: {
            animationName: ow
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]: {
            animationName: aw
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
          }, lS(e, _, D)), {
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
                li: Object.assign(Object.assign({}, sS), {
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
    Ig(e, "slide-up"),
    Ig(e, "slide-down"),
    Mg(e, "move-up"),
    Mg(e, "move-down")
  ];
}, y1 = Xf("DatePicker", (e) => {
  const t = $r(l1(e), Pq(e), {
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [
    Cq(t),
    Mq(t),
    Aq(t),
    Tq(t),
    Sq(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    up(e, {
      focusElCls: `${e.componentCls}-focused`
    })
  ];
}, Eq);
var Iq = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" }, jq = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: Iq
  }));
}, yp = /* @__PURE__ */ b.forwardRef(jq);
Oe.env.NODE_ENV !== "production" && (yp.displayName = "CalendarOutlined");
var Dq = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" }, Nq = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: Dq
  }));
}, bp = /* @__PURE__ */ b.forwardRef(Nq);
Oe.env.NODE_ENV !== "production" && (bp.displayName = "ClockCircleOutlined");
var Rq = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, name: "swap-right", theme: "outlined" }, kq = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: Rq
  }));
}, b1 = /* @__PURE__ */ b.forwardRef(kq);
Oe.env.NODE_ENV !== "production" && (b1.displayName = "SwapRightOutlined");
function Bq(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.yearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.quarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.monthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.weekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.placeholder : e.lang.placeholder;
}
function Lq(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.rangeYearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.rangeQuarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.rangeMonthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.rangeWeekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.rangePlaceholder : e.lang.rangePlaceholder;
}
function xp(e, t) {
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
function x1(e, t) {
  const {
    allowClear: r = !0
  } = e, {
    clearIcon: n,
    removeIcon: a
  } = nY(Object.assign(Object.assign({}, e), {
    prefixCls: t,
    componentName: "DatePicker"
  }));
  return [b.useMemo(() => r === !1 ? !1 : Object.assign({
    clearIcon: n
  }, r === !0 ? {} : r), [r, n]), a];
}
const [Hq, Fq] = ["week", "WeekPicker"], [Wq, Vq] = ["month", "MonthPicker"], [zq, Uq] = ["year", "YearPicker"], [Yq, qq] = ["quarter", "QuarterPicker"], [w1, Wg] = ["time", "TimePicker"], Gq = (e) => /* @__PURE__ */ b.createElement(qs, Object.assign({
  size: "small",
  type: "primary"
}, e));
function S1(e) {
  return b.useMemo(() => Object.assign({
    button: Gq
  }, e), [e]);
}
var Kq = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Xq = (e) => {
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
    } = r, g = Kq(r, ["prefixCls", "getPopupContainer", "components", "className", "style", "placement", "size", "disabled", "bordered", "placeholder", "popupClassName", "dropdownClassName", "status", "rootClassName", "variant", "picker"]), x = b.useRef(null), {
      getPrefixCls: $,
      direction: C,
      getPopupContainer: _,
      rangePicker: M
    } = b.useContext(en), P = $("picker", i), {
      compactSize: I,
      compactItemClassnames: N
    } = Qf(P, C), j = $(), [E, A] = mw("rangePicker", S, p), D = Yx(P), [R, k, L] = y1(P, D);
    if (Oe.env.NODE_ENV !== "production") {
      const Z = eo("DatePicker.RangePicker");
      Z.deprecated(!h, "dropdownClassName", "popupClassName"), Z.deprecated(!("bordered" in r), "bordered", "variant");
    }
    const [H] = x1(r, P), B = S1(l), W = np((Z) => {
      var le;
      return (le = f ?? I) !== null && le !== void 0 ? le : Z;
    }), U = b.useContext(Zf), G = d ?? U, Q = b.useContext(ty), {
      hasFeedback: ne,
      status: te,
      feedbackIcon: z
    } = Q, K = /* @__PURE__ */ b.createElement(b.Fragment, null, O === w1 ? /* @__PURE__ */ b.createElement(bp, null) : /* @__PURE__ */ b.createElement(yp, null), ne && z);
    b.useImperativeHandle(n, () => x.current);
    const [q] = Ux("Calendar", ay), F = Object.assign(Object.assign({}, q), r.locale), [J] = ry("DatePicker", (a = r.popupStyle) === null || a === void 0 ? void 0 : a.zIndex);
    return R(/* @__PURE__ */ b.createElement(ny, {
      space: !0
    }, /* @__PURE__ */ b.createElement(a1, Object.assign({
      separator: /* @__PURE__ */ b.createElement("span", {
        "aria-label": "to",
        className: `${P}-separator`
      }, /* @__PURE__ */ b.createElement(b1, null)),
      disabled: G,
      ref: x,
      popupAlign: xp(C, u),
      placement: u,
      placeholder: Lq(F, O, v),
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
      }, hw(P, vw(te, y), ne), k, N, s, M == null ? void 0 : M.className, L, D, w),
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
var Zq = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Qq = (e) => {
  const t = (s, c) => {
    const u = c === Wg ? "timePicker" : "datePicker", f = /* @__PURE__ */ b.forwardRef((d, p) => {
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
      } = d, E = Zq(d, ["prefixCls", "getPopupContainer", "components", "style", "className", "rootClassName", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status", "variant", "onCalendarChange"]), {
        getPrefixCls: A,
        direction: D,
        getPopupContainer: R,
        // Consume different styles according to different names
        [u]: k
      } = b.useContext(en), L = A("picker", m), {
        compactSize: H,
        compactItemClassnames: B
      } = Qf(L, D), W = b.useRef(null), [U, G] = mw("datePicker", N, x), Q = Yx(L), [ne, te, z] = y1(L, Q);
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
      const [ae, de] = x1(d, L), $e = S1(y), Be = np((Se) => {
        var Ie;
        return (Ie = g ?? H) !== null && Ie !== void 0 ? Ie : Se;
      }), Te = b.useContext(Zf), Ne = P ?? Te, Ge = b.useContext(ty), {
        hasFeedback: Qe,
        status: Ke,
        feedbackIcon: Ue
      } = Ge, Ve = /* @__PURE__ */ b.createElement(b.Fragment, null, q === "time" ? /* @__PURE__ */ b.createElement(bp, null) : /* @__PURE__ */ b.createElement(yp, null), Qe && Ue), [_t] = Ux("DatePicker", ay), He = Object.assign(Object.assign({}, _t), d.locale), [ot] = ry("DatePicker", (v = d.popupStyle) === null || v === void 0 ? void 0 : v.zIndex);
      return ne(/* @__PURE__ */ b.createElement(ny, {
        space: !0
      }, /* @__PURE__ */ b.createElement(o1, Object.assign({
        ref: W,
        placeholder: Bq(He, q, C),
        suffixIcon: Ve,
        dropdownAlign: xp(D, $),
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
        }, hw(L, vw(Ke, I), Qe), te, B, k == null ? void 0 : k.className, S, z, Q, O),
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
  }, r = t(), n = t(Hq, Fq), a = t(Wq, Vq), i = t(zq, Uq), o = t(Yq, qq), l = t(w1, Wg);
  return {
    DatePicker: r,
    WeekPicker: n,
    MonthPicker: a,
    YearPicker: i,
    TimePicker: l,
    QuarterPicker: o
  };
}, O1 = (e) => {
  const {
    DatePicker: t,
    WeekPicker: r,
    MonthPicker: n,
    YearPicker: a,
    TimePicker: i,
    QuarterPicker: o
  } = Qq(e), l = Xq(e), s = t;
  return s.WeekPicker = r, s.MonthPicker = n, s.YearPicker = a, s.RangePicker = l, s.TimePicker = i, s.QuarterPicker = o, Oe.env.NODE_ENV !== "production" && (s.displayName = "DatePicker"), s;
}, Va = O1(yY);
function $1(e) {
  const t = xp(e.direction, e.placement);
  return t.overflow.adjustY = !1, t.overflow.adjustX = !1, Object.assign(Object.assign({}, e), {
    dropdownAlign: t
  });
}
const Jq = uw(Va, "picker", null, $1);
Va._InternalPanelDoNotUseOrYouWillBeFired = Jq;
const eG = uw(Va.RangePicker, "picker", null, $1);
Va._InternalRangePanelDoNotUseOrYouWillBeFired = eG;
Va.generatePicker = O1;
const { RangePicker: tG } = Va, uu = [
  { symbol: "All", icon: "" },
  { symbol: "ETH", icon: "/imgs/logos/eth.png" },
  { symbol: "MATIC", icon: "/imgs/logos/matic.png" },
  { symbol: "TVWT", icon: "/imgs/logos/tvwt.png" }
];
function rG({
  onDateChange: e,
  dates: t,
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
      /* @__PURE__ */ V.jsxs(M1, { children: [
        /* @__PURE__ */ V.jsxs(I1, { className: Ce(
          "w-[120px] h-10 bg-white border border-[#E0E0E0] rounded-md",
          "hover:border-[#52c41a] focus:ring-[#52c41a] focus:outline-none",
          "text-sm px-3",
          "flex items-center justify-between"
        ), children: [
          /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ V.jsx(
              "img",
              {
                src: (l = uu.find((c) => c.symbol === n)) == null ? void 0 : l.icon,
                alt: n,
                className: Ce(
                  "w-4 h-4 rounded-full",
                  !((s = uu.find((c) => c.symbol === n)) != null && s.icon) && "invisible"
                )
              }
            ),
            /* @__PURE__ */ V.jsx("span", { children: n })
          ] }),
          /* @__PURE__ */ V.jsx(R1, { className: "h-4 w-4 opacity-50" })
        ] }),
        /* @__PURE__ */ V.jsx(j1, { className: "bg-white", children: uu.map((c) => /* @__PURE__ */ V.jsxs(
          D1,
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
        ey,
        {
          theme: {
            token: {
              colorPrimary: "#52c41a",
              controlHeight: 40
            }
          },
          children: /* @__PURE__ */ V.jsx(
            tG,
            {
              value: [
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
    /* @__PURE__ */ V.jsx(Uf, { className: "hidden tablet:block", onClick: i, children: "Download CSV" })
  ] });
}
const Vg = {
  ETH: "/imgs/logos/eth.png",
  MATIC: "/imgs/logos/matic.png",
  TVWT: "/imgs/logos/tvwt.png"
};
function nG({ data: e }) {
  return /* @__PURE__ */ V.jsxs(cS, { children: [
    /* @__PURE__ */ V.jsx(uS, { className: "hidden tablet:table-header-group", children: /* @__PURE__ */ V.jsxs(Oc, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
      /* @__PURE__ */ V.jsx(Rn, { className: "h-[16px] px-0 pb-[8px]", children: "Transaction" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "h-[16px] px-0 pb-[8px]", children: "Amount" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Network" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "From" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "To" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "h-[16px] px-0 pb-[8px] text-right", children: "Time" })
    ] }) }),
    /* @__PURE__ */ V.jsx($p, { className: "hidden tablet:table-row-group", children: e.map((t) => /* @__PURE__ */ V.jsxs(Oc, { className: "hover:bg-transparent", children: [
      /* @__PURE__ */ V.jsx(Er, { className: Ce(
        "px-0 py-6",
        "desktop:w-[150px] laptop:w-[150px]"
      ), children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsx("img", { src: Vg[t.token], alt: t.token, className: "w-[28px] h-[28px]" }),
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
        ui(Op(t.amount), 2),
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
    /* @__PURE__ */ V.jsx($p, { className: "table-row-group tablet:hidden", children: e.map((t) => /* @__PURE__ */ V.jsxs(Oc, { className: "hover:bg-transparent", children: [
      /* @__PURE__ */ V.jsx(Er, { className: Ce(
        "px-0 py-6 w-[180px]"
      ), children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsx("img", { src: Vg[t.token], alt: t.token, className: "w-[28px] h-[28px]" }),
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
          ui(Op(t.amount), 2),
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
const Vo = [
  ct().subtract(1, "month").startOf("day").toDate(),
  ct().endOf("day").toDate()
];
function aG() {
  const { address: e } = ts.all(), [t, r] = b.useState(Vo), [n, a] = b.useState([]), [i, o] = b.useState([]), [l, s] = b.useState(!1), [c, u] = b.useState("ALL"), { data: f } = qg({
    enabled: !!e
  });
  b.useEffect(() => {
    d(Vo, "ALL");
  }, []);
  const d = async (h, y = "ALL") => {
    r(h);
    const w = h[0].getTime(), S = h[1].getTime();
    try {
      s(!0);
      const O = await Ji.get("/user-assets/transaction-history", {
        params: {
          address: e,
          // address: '0xf79d08f838a962756370c0f10343f7169ec12dc3',
          startDate: w,
          endDate: S
        }
      });
      o(O.data), a(y === "ALL" ? O.data.slice() : O.data.filter((g) => g.token === y));
    } catch (O) {
      const g = zf(O);
      iy.error(g.message);
    } finally {
      s(!1);
    }
  }, p = (h) => {
    u(h), a(h === "ALL" ? i.slice() : i.filter((y) => y.token === h));
  }, v = () => {
    u("ALL"), r(Vo), d(Vo, "ALL");
  }, m = () => {
    Gg("download csv");
    const h = ["Date", "Type", "Token", "Amount", "Status"], y = n.map((x) => [
      ct(x.timestamp).format("YYYY-MM-DD HH:mm:ss"),
      x.type,
      x.token,
      x.amount,
      x.status
    ]), w = [
      h.join(","),
      ...y.map((x) => x.join(","))
    ].join(`
`), S = new Blob([w], { type: "text/csv;charset=utf-8;" }), O = URL.createObjectURL(S), g = document.createElement("a");
    g.setAttribute("href", O), g.setAttribute("download", `transaction-history-${ct().format("YYYY-MM-DD")}.csv`), document.body.appendChild(g), g.click(), document.body.removeChild(g), URL.revokeObjectURL(O);
  };
  return /* @__PURE__ */ V.jsxs("div", { className: "min-h-[500px]", children: [
    /* @__PURE__ */ V.jsx("div", { className: Ce(
      "text-[#111111] font-bold",
      "text-2xl mobile:text-[32px]",
      "mb-6"
    ), children: "History" }),
    f && !f.isZero && /* @__PURE__ */ V.jsx("div", { className: "mb-[40px]", children: /* @__PURE__ */ V.jsx(
      rG,
      {
        onDateChange: (h) => d(h, c),
        dates: t,
        onTokenChange: p,
        selectedToken: c,
        onReset: v,
        onDownloadCSV: m
      }
    ) }),
    !l && n.length === 0 ? /* @__PURE__ */ V.jsxs("div", { className: "mt-[96px]", children: [
      /* @__PURE__ */ V.jsx(
        fS,
        {
          className: "mx-auto w-[120px]",
          text: "No transaction history now, but you can connect wallet and make a transfer!",
          imgSrc: "/imgs/icons/history_empty.svg"
        }
      ),
      /* @__PURE__ */ V.jsx(hS, { className: "mt-[24px]", buttonClassName: "text-white bg-black rounded-full py-[10px] px-[16px] w-[173px]" })
    ] }) : /* @__PURE__ */ V.jsx(nG, { data: n })
  ] });
}
const iG = ["purchased-products"], oG = async () => (await Ji.get("/user/purchasedProducts")).data, lG = () => Yg({
  queryKey: iG,
  queryFn: oG
});
function zg({
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
function sG() {
  const e = rs(), { handleConnect: t } = Cp(), { data: r } = lG(), {
    setIsModalOpen: n,
    setDappInfo: a,
    isConnected: i,
    setDisplayUriInput: o
  } = Cp(), [l, s] = b.useState(!1), [c, u] = b.useState(null), f = () => {
    Gg("handleConnectDApps"), t();
  }, d = () => {
    const p = (r == null ? void 0 : r.filter((v) => v.category === "Payment")) || [];
    if (p.length >= 2) {
      e("/marketplace?category=Payment");
      return;
    }
    if (p.length === 1) {
      const v = p.find((h) => h.vendor === "Moonpay"), m = p.find((h) => h.integrationPoints.includes("walletconnect"));
      v ? (u(v), s(!0)) : m ? (a({
        name: m.name,
        url: m.serviceUrl
      }), o(!1), n(!0)) : e("/marketplace?category=Payment");
      return;
    }
    e("/marketplace?category=Payment");
  };
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsxs("div", { children: [
      /* @__PURE__ */ V.jsx("p", { className: Ce(
        "text-[#111111] font-bold leading-tight",
        "text-2xl tablet:text-[32px]",
        "mb-[24px] tablet:mb-[40px]"
      ), children: "Let’s get started" }),
      /* @__PURE__ */ V.jsx(
        zg,
        {
          icon: "/imgs/icons/connect_dapps.svg",
          title: "Connect dApps",
          description: "Link your wallet to any dApp easily with WalletConnect. Enjoy secure access to DeFi, NFTs, and more—all from your wallet in just a few taps!",
          className: "mb-[24px] cursor-pointer",
          onClick: f
        }
      ),
      /* @__PURE__ */ V.jsx(
        zg,
        {
          icon: "/imgs/icons/top_up.svg",
          title: "Top up",
          description: "Transition smoothly into the web3 world with our intuitive on-ramp. Fund your wallet easily, access decentralized apps.",
          className: "cursor-pointer",
          onClick: d
        }
      )
    ] }),
    /* @__PURE__ */ V.jsx(oy, { isOpen: l, onClose: () => s(!1), product: c })
  ] });
}
function cG({
  className: e
}) {
  const t = rs(), [r, n] = b.useState([]);
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
      /* @__PURE__ */ V.jsx(Uf, { className: "py-[10px] hidden tablet:block", onClick: () => {
        t("/marketplace");
      }, children: "Explore more features" })
    ] }),
    /* @__PURE__ */ V.jsx("div", { className: Ce([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: r.map((i) => /* @__PURE__ */ V.jsx(
      dS,
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
function Ug({
  products: e
}) {
  const [t, r] = b.useState([]), [n, a] = b.useState(!1), [i, o] = b.useState({}), { data: l } = ed();
  b.useEffect(() => {
    if (l && l.purchasedProducts) {
      const u = l.purchasedProducts.filter((f) => f.status === "active").map((f) => f.productId);
      r(u);
    }
  }, [l]);
  const s = (u) => {
    a(!0), o(u);
  }, { handleClick: c } = pS({
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
    /* @__PURE__ */ V.jsx(oy, { isOpen: n, onClose: () => a(!1), product: i })
  ] });
}
function uG() {
  const e = rs(), [t, r] = b.useState("frequently"), [n, a] = b.useState([]), { data: i } = ed(), [o, l] = b.useState([]);
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
      /* @__PURE__ */ V.jsx(Uf, { className: "py-[10px] hidden tablet:block", onClick: () => {
        e("/marketplace");
      }, children: "Explore more features" })
    ] }),
    /* @__PURE__ */ V.jsx("div", { className: "mt-4", children: t === "frequently" ? /* @__PURE__ */ V.jsx(Ug, { products: n }) : /* @__PURE__ */ V.jsx(Ug, { products: o }) })
  ] });
}
function SG() {
  const { address: e } = ts.all(), { data: t } = qg({
    enabled: !!e
  }), { data: r } = ed();
  return /* @__PURE__ */ V.jsxs("div", { className: "mt-[40px] tablet:mt-[100px]", children: [
    t && t.isZero && /* @__PURE__ */ V.jsx(sG, {}),
    t && !t.isZero && /* @__PURE__ */ V.jsx(a4, {}),
    ((r == null ? void 0 : r.purchasedProducts) ?? []).length > 0 ? /* @__PURE__ */ V.jsx(uG, {}) : /* @__PURE__ */ V.jsx(cG, { className: "mt-[48px] tablet:mt-[100px]" }),
    /* @__PURE__ */ V.jsx("div", { className: "mt-[60px] tablet:mt-[100px]", children: /* @__PURE__ */ V.jsx(aG, {}) })
  ] });
}
export {
  SG as default
};
