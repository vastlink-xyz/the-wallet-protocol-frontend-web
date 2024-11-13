import { j as U } from "./vendor-radix-CXAw23nV.js";
import { m as ui, a as Jl, u as b1, g as Lg, j as Ff, c as Le, n as x1, o as w1, p as mh, D as S1, b as O1, d as $1, e as C1, B as P1, q as _1 } from "./main-aLpcFRdZ.js";
import { c as je, I as E1, _ as we, h as A1 } from "./vendor-ui-utils-DB1608yX.js";
import { c as ur, g as We, r as w, R as T, p as Oe, j as T1, l as M1, a as I1 } from "./vendor-react-U4DfHahV.js";
import { r as j1, L as D1, l as gh, u as Wf, I as Pa, _ as Hg, a as zo, g as N1, d as R1, w as Wt, C as Fg, c as Vf, b as Ie, e as en, f as st, s as k1, h as Wg, i as Vg, S as B1, j as Ji, k as L1, m as H1, n as F1, o as zf, p as Uf, q as X, t as fr, K as Mt, v as zg, x as $r, y as bs, z as Yf, A as ce, B as W1, D as V1, E as qf, F as Gf, G as Kf, H as Ug, R as ec, J as Br, V as z1, M as U1, N as Y1, O as q1, P as G1, Q as K1, T as X1, U as Z1, W as Vt, X as dr, Y as Q1, Z as Uo, $ as J1, a0 as Yo, a1 as eS, a2 as tS, a3 as rS, a4 as Yg, a5 as qg, a6 as Gg, a7 as Kg } from "./roundedArrow-DByPgr0G.js";
import { P as Te, B as Xg } from "./vendor-utils-y1QZaLEY.js";
import { _ as ue, e as An, j as ve, k as Kt, f as yh } from "./vendor-web3-BOznxXNv.js";
import { T as nS, a as aS, b as xs, c as Rn, d as bh, e as Er } from "./table-CtT5VCy4.js";
import { E as iS } from "./index-fnWk4Gz8.js";
import { V as oS } from "./index-tdOMsVjK.js";
var lS = Array.isArray, zt = lS, cS = typeof ur == "object" && ur && ur.Object === Object && ur, Zg = cS, sS = Zg, uS = typeof self == "object" && self && self.Object === Object && self, fS = sS || uS || Function("return this")(), _r = fS, dS = _r, hS = dS.Symbol, eo = hS, xh = eo, Qg = Object.prototype, pS = Qg.hasOwnProperty, vS = Qg.toString, qa = xh ? xh.toStringTag : void 0;
function mS(e) {
  var t = pS.call(e, qa), r = e[qa];
  try {
    e[qa] = void 0;
    var n = !0;
  } catch {
  }
  var a = vS.call(e);
  return n && (t ? e[qa] = r : delete e[qa]), a;
}
var gS = mS, yS = Object.prototype, bS = yS.toString;
function xS(e) {
  return bS.call(e);
}
var wS = xS, wh = eo, SS = gS, OS = wS, $S = "[object Null]", CS = "[object Undefined]", Sh = wh ? wh.toStringTag : void 0;
function PS(e) {
  return e == null ? e === void 0 ? CS : $S : Sh && Sh in Object(e) ? SS(e) : OS(e);
}
var Vr = PS;
function _S(e) {
  return e != null && typeof e == "object";
}
var zr = _S, ES = Vr, AS = zr, TS = "[object Symbol]";
function MS(e) {
  return typeof e == "symbol" || AS(e) && ES(e) == TS;
}
var _a = MS, IS = zt, jS = _a, DS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, NS = /^\w*$/;
function RS(e, t) {
  if (IS(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || jS(e) ? !0 : NS.test(e) || !DS.test(e) || t != null && e in Object(t);
}
var Xf = RS;
function kS(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tn = kS;
const Ea = /* @__PURE__ */ We(tn);
var BS = Vr, LS = tn, HS = "[object AsyncFunction]", FS = "[object Function]", WS = "[object GeneratorFunction]", VS = "[object Proxy]";
function zS(e) {
  if (!LS(e))
    return !1;
  var t = BS(e);
  return t == FS || t == WS || t == HS || t == VS;
}
var Zf = zS;
const Ce = /* @__PURE__ */ We(Zf);
var US = _r, YS = US["__core-js_shared__"], qS = YS, ws = qS, Oh = function() {
  var e = /[^.]+$/.exec(ws && ws.keys && ws.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function GS(e) {
  return !!Oh && Oh in e;
}
var KS = GS, XS = Function.prototype, ZS = XS.toString;
function QS(e) {
  if (e != null) {
    try {
      return ZS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jg = QS, JS = Zf, eO = KS, tO = tn, rO = Jg, nO = /[\\^$.*+?()[\]{}|]/g, aO = /^\[object .+?Constructor\]$/, iO = Function.prototype, oO = Object.prototype, lO = iO.toString, cO = oO.hasOwnProperty, sO = RegExp(
  "^" + lO.call(cO).replace(nO, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function uO(e) {
  if (!tO(e) || eO(e))
    return !1;
  var t = JS(e) ? sO : aO;
  return t.test(rO(e));
}
var fO = uO;
function dO(e, t) {
  return e == null ? void 0 : e[t];
}
var hO = dO, pO = fO, vO = hO;
function mO(e, t) {
  var r = vO(e, t);
  return pO(r) ? r : void 0;
}
var Tn = mO, gO = Tn, yO = gO(Object, "create"), tc = yO, $h = tc;
function bO() {
  this.__data__ = $h ? $h(null) : {}, this.size = 0;
}
var xO = bO;
function wO(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var SO = wO, OO = tc, $O = "__lodash_hash_undefined__", CO = Object.prototype, PO = CO.hasOwnProperty;
function _O(e) {
  var t = this.__data__;
  if (OO) {
    var r = t[e];
    return r === $O ? void 0 : r;
  }
  return PO.call(t, e) ? t[e] : void 0;
}
var EO = _O, AO = tc, TO = Object.prototype, MO = TO.hasOwnProperty;
function IO(e) {
  var t = this.__data__;
  return AO ? t[e] !== void 0 : MO.call(t, e);
}
var jO = IO, DO = tc, NO = "__lodash_hash_undefined__";
function RO(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = DO && t === void 0 ? NO : t, this;
}
var kO = RO, BO = xO, LO = SO, HO = EO, FO = jO, WO = kO;
function Aa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Aa.prototype.clear = BO;
Aa.prototype.delete = LO;
Aa.prototype.get = HO;
Aa.prototype.has = FO;
Aa.prototype.set = WO;
var VO = Aa;
function zO() {
  this.__data__ = [], this.size = 0;
}
var UO = zO;
function YO(e, t) {
  return e === t || e !== e && t !== t;
}
var Qf = YO, qO = Qf;
function GO(e, t) {
  for (var r = e.length; r--; )
    if (qO(e[r][0], t))
      return r;
  return -1;
}
var rc = GO, KO = rc, XO = Array.prototype, ZO = XO.splice;
function QO(e) {
  var t = this.__data__, r = KO(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : ZO.call(t, r, 1), --this.size, !0;
}
var JO = QO, e$ = rc;
function t$(e) {
  var t = this.__data__, r = e$(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var r$ = t$, n$ = rc;
function a$(e) {
  return n$(this.__data__, e) > -1;
}
var i$ = a$, o$ = rc;
function l$(e, t) {
  var r = this.__data__, n = o$(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var c$ = l$, s$ = UO, u$ = JO, f$ = r$, d$ = i$, h$ = c$;
function Ta(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ta.prototype.clear = s$;
Ta.prototype.delete = u$;
Ta.prototype.get = f$;
Ta.prototype.has = d$;
Ta.prototype.set = h$;
var nc = Ta, p$ = Tn, v$ = _r, m$ = p$(v$, "Map"), Jf = m$, Ch = VO, g$ = nc, y$ = Jf;
function b$() {
  this.size = 0, this.__data__ = {
    hash: new Ch(),
    map: new (y$ || g$)(),
    string: new Ch()
  };
}
var x$ = b$;
function w$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var S$ = w$, O$ = S$;
function $$(e, t) {
  var r = e.__data__;
  return O$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ac = $$, C$ = ac;
function P$(e) {
  var t = C$(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var _$ = P$, E$ = ac;
function A$(e) {
  return E$(this, e).get(e);
}
var T$ = A$, M$ = ac;
function I$(e) {
  return M$(this, e).has(e);
}
var j$ = I$, D$ = ac;
function N$(e, t) {
  var r = D$(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var R$ = N$, k$ = x$, B$ = _$, L$ = T$, H$ = j$, F$ = R$;
function Ma(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ma.prototype.clear = k$;
Ma.prototype.delete = B$;
Ma.prototype.get = L$;
Ma.prototype.has = H$;
Ma.prototype.set = F$;
var ed = Ma, ey = ed, W$ = "Expected a function";
function td(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(W$);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (td.Cache || ey)(), r;
}
td.Cache = ey;
var ty = td;
const V$ = /* @__PURE__ */ We(ty);
var z$ = ty, U$ = 500;
function Y$(e) {
  var t = z$(e, function(n) {
    return r.size === U$ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var q$ = Y$, G$ = q$, K$ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, X$ = /\\(\\)?/g, Z$ = G$(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(K$, function(r, n, a, i) {
    t.push(a ? i.replace(X$, "$1") : n || r);
  }), t;
}), Q$ = Z$;
function J$(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var rd = J$, Ph = eo, eC = rd, tC = zt, rC = _a, nC = 1 / 0, _h = Ph ? Ph.prototype : void 0, Eh = _h ? _h.toString : void 0;
function ry(e) {
  if (typeof e == "string")
    return e;
  if (tC(e))
    return eC(e, ry) + "";
  if (rC(e))
    return Eh ? Eh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -nC ? "-0" : t;
}
var aC = ry, iC = aC;
function oC(e) {
  return e == null ? "" : iC(e);
}
var ny = oC, lC = zt, cC = Xf, sC = Q$, uC = ny;
function fC(e, t) {
  return lC(e) ? e : cC(e, t) ? [e] : sC(uC(e));
}
var ay = fC, dC = _a, hC = 1 / 0;
function pC(e) {
  if (typeof e == "string" || dC(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -hC ? "-0" : t;
}
var ic = pC, vC = ay, mC = ic;
function gC(e, t) {
  t = vC(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[mC(t[r++])];
  return r && r == n ? e : void 0;
}
var nd = gC, yC = nd;
function bC(e, t, r) {
  var n = e == null ? void 0 : yC(e, t);
  return n === void 0 ? r : n;
}
var iy = bC;
const Xt = /* @__PURE__ */ We(iy);
function xC(e) {
  return e == null;
}
var wC = xC;
const Ee = /* @__PURE__ */ We(wC);
var SC = Vr, OC = zt, $C = zr, CC = "[object String]";
function PC(e) {
  return typeof e == "string" || !OC(e) && $C(e) && SC(e) == CC;
}
var _C = PC;
const to = /* @__PURE__ */ We(_C);
var EC = Vr, AC = zr, TC = "[object Number]";
function MC(e) {
  return typeof e == "number" || AC(e) && EC(e) == TC;
}
var oy = MC;
const IC = /* @__PURE__ */ We(oy);
var jC = oy;
function DC(e) {
  return jC(e) && e != +e;
}
var NC = DC;
const Ia = /* @__PURE__ */ We(NC);
var Nt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, yn = function(t) {
  return to(t) && t.indexOf("%") === t.length - 1;
}, ee = function(t) {
  return IC(t) && !Ia(t);
}, gt = function(t) {
  return ee(t) || to(t);
}, RC = 0, ja = function(t) {
  var r = ++RC;
  return "".concat(t || "").concat(r);
}, Rt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!ee(t) && !to(t))
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
}, kC = function(t) {
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
function qo(e, t, r) {
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
function cu(e) {
  "@babel/helpers - typeof";
  return cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cu(e);
}
var BC = ["viewBox", "children"], LC = [
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
], Ah = ["points", "pathLength"], Ss = {
  svg: BC,
  polygon: Ah,
  polyline: Ah
}, ad = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Go = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ w.isValidElement(t) && (n = t.props), !Ea(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    ad.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, HC = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Cn = function(t, r, n) {
  if (!Ea(t) || cu(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    ad.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = HC(o, r, n));
  }), a;
}, FC = ["children"], WC = ["children"];
function Th(e, t) {
  if (e == null) return {};
  var r = VC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function VC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function su(e) {
  "@babel/helpers - typeof";
  return su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, su(e);
}
var Mh = {
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
}, Ih = null, Os = null, id = function e(t) {
  if (t === Ih && Array.isArray(Os))
    return Os;
  var r = [];
  return w.Children.forEach(t, function(n) {
    Ee(n) || (j1.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Os = r, Ih = t, r;
};
function rr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return jr(a);
  }) : n = [jr(t)], id(e).forEach(function(a) {
    var i = Xt(a, "type.displayName") || Xt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function qt(e, t) {
  var r = rr(e, t);
  return r && r[0];
}
var jh = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!ee(n) || n <= 0 || !ee(a) || a <= 0);
}, zC = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], UC = function(t) {
  return t && t.type && to(t.type) && zC.indexOf(t.type) >= 0;
}, YC = function(t) {
  return t && su(t) === "object" && "clipDot" in t;
}, qC = function(t, r, n, a) {
  var i, o = (i = Ss == null ? void 0 : Ss[a]) !== null && i !== void 0 ? i : [];
  return !Ce(t) && (a && o.includes(r) || LC.includes(r)) || n && ad.includes(r);
}, me = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ w.isValidElement(t) && (a = t.props), !Ea(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var l;
    qC((l = a) === null || l === void 0 ? void 0 : l[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, uu = function e(t, r) {
  if (t === r)
    return !0;
  var n = w.Children.count(t);
  if (n !== w.Children.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Dh(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!Dh(i, o))
      return !1;
  }
  return !0;
}, Dh = function(t, r) {
  if (Ee(t) && Ee(r))
    return !0;
  if (!Ee(t) && !Ee(r)) {
    var n = t.props || {}, a = n.children, i = Th(n, FC), o = r.props || {}, l = o.children, c = Th(o, WC);
    return a && l ? Yn(i, c) && uu(a, l) : !a && !l ? Yn(i, c) : !1;
  }
  return !1;
}, Nh = function(t, r) {
  var n = [], a = {};
  return id(t).forEach(function(i, o) {
    if (UC(i))
      n.push(i);
    else if (i) {
      var l = jr(i.type), c = r[l] || {}, s = c.handler, u = c.once;
      if (s && (!u || !a[l])) {
        var f = s(i, l, o);
        n.push(f), a[l] = !0;
      }
    }
  }), n;
}, GC = function(t) {
  var r = t && t.type;
  return r && Mh[r] ? Mh[r] : null;
}, KC = function(t, r) {
  return id(r).indexOf(t);
}, XC = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fu.apply(this, arguments);
}
function ZC(e, t) {
  if (e == null) return {};
  var r = QC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QC(e, t) {
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
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, l = e.title, c = e.desc, s = ZC(e, XC), u = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = je("recharts-surface", i);
  return /* @__PURE__ */ T.createElement("svg", fu({}, me(s, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ T.createElement("title", null, l), /* @__PURE__ */ T.createElement("desc", null, c), t);
}
var JC = ["children", "className"];
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
function eP(e, t) {
  if (e == null) return {};
  var r = tP(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tP(e, t) {
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
  var r = e.children, n = e.className, a = eP(e, JC), i = je("recharts-layer", n);
  return /* @__PURE__ */ T.createElement("g", hu({
    className: i
  }, me(a, !0), {
    ref: t
  }), r);
}), rP = Oe.env.NODE_ENV !== "production", Dr = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (rP && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
};
function nP(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var aP = nP, iP = aP;
function oP(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : iP(e, t, r);
}
var lP = oP, cP = "\\ud800-\\udfff", sP = "\\u0300-\\u036f", uP = "\\ufe20-\\ufe2f", fP = "\\u20d0-\\u20ff", dP = sP + uP + fP, hP = "\\ufe0e\\ufe0f", pP = "\\u200d", vP = RegExp("[" + pP + cP + dP + hP + "]");
function mP(e) {
  return vP.test(e);
}
var ly = mP;
function gP(e) {
  return e.split("");
}
var yP = gP, cy = "\\ud800-\\udfff", bP = "\\u0300-\\u036f", xP = "\\ufe20-\\ufe2f", wP = "\\u20d0-\\u20ff", SP = bP + xP + wP, OP = "\\ufe0e\\ufe0f", $P = "[" + cy + "]", pu = "[" + SP + "]", vu = "\\ud83c[\\udffb-\\udfff]", CP = "(?:" + pu + "|" + vu + ")", sy = "[^" + cy + "]", uy = "(?:\\ud83c[\\udde6-\\uddff]){2}", fy = "[\\ud800-\\udbff][\\udc00-\\udfff]", PP = "\\u200d", dy = CP + "?", hy = "[" + OP + "]?", _P = "(?:" + PP + "(?:" + [sy, uy, fy].join("|") + ")" + hy + dy + ")*", EP = hy + dy + _P, AP = "(?:" + [sy + pu + "?", pu, uy, fy, $P].join("|") + ")", TP = RegExp(vu + "(?=" + vu + ")|" + AP + EP, "g");
function MP(e) {
  return e.match(TP) || [];
}
var IP = MP, jP = yP, DP = ly, NP = IP;
function RP(e) {
  return DP(e) ? NP(e) : jP(e);
}
var kP = RP, BP = lP, LP = ly, HP = kP, FP = ny;
function WP(e) {
  return function(t) {
    t = FP(t);
    var r = LP(t) ? HP(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? BP(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var VP = WP, zP = VP, UP = zP("toUpperCase"), YP = UP;
const oc = /* @__PURE__ */ We(YP);
function tt(e) {
  return function() {
    return e;
  };
}
const py = Math.cos, Ko = Math.sin, hr = Math.sqrt, Xo = Math.PI, lc = 2 * Xo, mu = Math.PI, gu = 2 * mu, pn = 1e-6, qP = gu - pn;
function vy(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function GP(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return vy;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class KP {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? vy : GP(t);
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
    let o = this._x1, l = this._y1, c = n - t, s = a - r, u = o - t, f = l - r, d = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > pn) if (!(Math.abs(f * c - s * u) > pn) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, v = a - l, m = c * c + s * s, p = h * h + v * v, y = Math.sqrt(m), x = Math.sqrt(d), S = i * Math.tan((mu - Math.acos((m + d - p) / (2 * y * x))) / 2), O = S / x, g = S / y;
      Math.abs(O - 1) > pn && this._append`L${t + O * u},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * h > u * v)},${this._x1 = t + g * c},${this._y1 = r + g * s}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(a), c = n * Math.sin(a), s = t + l, u = r + c, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${s},${u}` : (Math.abs(this._x1 - s) > pn || Math.abs(this._y1 - u) > pn) && this._append`L${s},${u}`, n && (d < 0 && (d = d % gu + gu), d > qP ? this._append`A${n},${n},0,1,${f},${t - l},${r - c}A${n},${n},0,1,${f},${this._x1 = s},${this._y1 = u}` : d > pn && this._append`A${n},${n},0,${+(d >= mu)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function od(e) {
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
  }, () => new KP(t);
}
function ld(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function my(e) {
  this._context = e;
}
my.prototype = {
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
function cc(e) {
  return new my(e);
}
function gy(e) {
  return e[0];
}
function yy(e) {
  return e[1];
}
function by(e, t) {
  var r = tt(!0), n = null, a = cc, i = null, o = od(l);
  e = typeof e == "function" ? e : e === void 0 ? gy : tt(e), t = typeof t == "function" ? t : t === void 0 ? yy : tt(t);
  function l(c) {
    var s, u = (c = ld(c)).length, f, d = !1, h;
    for (n == null && (i = a(h = o())), s = 0; s <= u; ++s)
      !(s < u && r(f = c[s], s, c)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(f, s, c), +t(f, s, c));
    if (h) return i = null, h + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : tt(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : tt(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : tt(!!c), l) : r;
  }, l.curve = function(c) {
    return arguments.length ? (a = c, n != null && (i = a(n)), l) : a;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? n = i = null : i = a(n = c), l) : n;
  }, l;
}
function wo(e, t, r) {
  var n = null, a = tt(!0), i = null, o = cc, l = null, c = od(s);
  e = typeof e == "function" ? e : e === void 0 ? gy : tt(+e), t = typeof t == "function" ? t : tt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? yy : tt(+r);
  function s(f) {
    var d, h, v, m = (f = ld(f)).length, p, y = !1, x, S = new Array(m), O = new Array(m);
    for (i == null && (l = o(x = c())), d = 0; d <= m; ++d) {
      if (!(d < m && a(p = f[d], d, f)) === y)
        if (y = !y)
          h = d, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = d - 1; v >= h; --v)
            l.point(S[v], O[v]);
          l.lineEnd(), l.areaEnd();
        }
      y && (S[d] = +e(p, d, f), O[d] = +t(p, d, f), l.point(n ? +n(p, d, f) : S[d], r ? +r(p, d, f) : O[d]));
    }
    if (x) return l = null, x + "" || null;
  }
  function u() {
    return by().defined(a).curve(o).context(i);
  }
  return s.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : tt(+f), n = null, s) : e;
  }, s.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : tt(+f), s) : e;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : tt(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : tt(+f), r = null, s) : t;
  }, s.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : tt(+f), s) : t;
  }, s.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : tt(+f), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return u().x(e).y(t);
  }, s.lineY1 = function() {
    return u().x(e).y(r);
  }, s.lineX1 = function() {
    return u().x(n).y(t);
  }, s.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : tt(!!f), s) : a;
  }, s.curve = function(f) {
    return arguments.length ? (o = f, i != null && (l = o(i)), s) : o;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? i = l = null : l = o(i = f), s) : i;
  }, s;
}
class xy {
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
function XP(e) {
  return new xy(e, !0);
}
function ZP(e) {
  return new xy(e, !1);
}
const cd = {
  draw(e, t) {
    const r = hr(t / Xo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, lc);
  }
}, QP = {
  draw(e, t) {
    const r = hr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, wy = hr(1 / 3), JP = wy * 2, e_ = {
  draw(e, t) {
    const r = hr(t / JP), n = r * wy;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, t_ = {
  draw(e, t) {
    const r = hr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, r_ = 0.8908130915292852, Sy = Ko(Xo / 10) / Ko(7 * Xo / 10), n_ = Ko(lc / 10) * Sy, a_ = -py(lc / 10) * Sy, i_ = {
  draw(e, t) {
    const r = hr(t * r_), n = n_ * r, a = a_ * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = lc * i / 5, l = py(o), c = Ko(o);
      e.lineTo(c * r, -l * r), e.lineTo(l * n - c * a, c * n + l * a);
    }
    e.closePath();
  }
}, $s = hr(3), o_ = {
  draw(e, t) {
    const r = -hr(t / ($s * 3));
    e.moveTo(0, r * 2), e.lineTo(-$s * r, -r), e.lineTo($s * r, -r), e.closePath();
  }
}, Zt = -0.5, Qt = hr(3) / 2, yu = 1 / hr(12), l_ = (yu / 2 + 1) * 3, c_ = {
  draw(e, t) {
    const r = hr(t / l_), n = r / 2, a = r * yu, i = n, o = r * yu + r, l = -i, c = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(l, c), e.lineTo(Zt * n - Qt * a, Qt * n + Zt * a), e.lineTo(Zt * i - Qt * o, Qt * i + Zt * o), e.lineTo(Zt * l - Qt * c, Qt * l + Zt * c), e.lineTo(Zt * n + Qt * a, Zt * a - Qt * n), e.lineTo(Zt * i + Qt * o, Zt * o - Qt * i), e.lineTo(Zt * l + Qt * c, Zt * c - Qt * l), e.closePath();
  }
};
function s_(e, t) {
  let r = null, n = od(a);
  e = typeof e == "function" ? e : tt(e || cd), t = typeof t == "function" ? t : tt(t === void 0 ? 64 : +t);
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
function Zo() {
}
function Qo(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
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
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Qo(this, this._x1, this._y1);
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
        Qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function u_(e) {
  return new Oy(e);
}
function $y(e) {
  this._context = e;
}
$y.prototype = {
  areaStart: Zo,
  areaEnd: Zo,
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
        Qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function f_(e) {
  return new $y(e);
}
function Cy(e) {
  this._context = e;
}
Cy.prototype = {
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
        Qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function d_(e) {
  return new Cy(e);
}
function Py(e) {
  this._context = e;
}
Py.prototype = {
  areaStart: Zo,
  areaEnd: Zo,
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
function h_(e) {
  return new Py(e);
}
function Rh(e) {
  return e < 0 ? -1 : 1;
}
function kh(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), l = (i * a + o * n) / (n + a);
  return (Rh(i) + Rh(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(l)) || 0;
}
function Bh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Cs(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, l = (i - n) / 3;
  e._context.bezierCurveTo(n + l, a + l * t, i - l, o - l * r, i, o);
}
function Jo(e) {
  this._context = e;
}
Jo.prototype = {
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
        Cs(this, this._t0, Bh(this, this._t0));
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
          this._point = 3, Cs(this, Bh(this, r = kh(this, e, t)), r);
          break;
        default:
          Cs(this, this._t0, r = kh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function _y(e) {
  this._context = new Ey(e);
}
(_y.prototype = Object.create(Jo.prototype)).point = function(e, t) {
  Jo.prototype.point.call(this, t, e);
};
function Ey(e) {
  this._context = e;
}
Ey.prototype = {
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
function p_(e) {
  return new Jo(e);
}
function v_(e) {
  return new _y(e);
}
function Ay(e) {
  this._context = e;
}
Ay.prototype = {
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
        for (var n = Lh(e), a = Lh(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Lh(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function m_(e) {
  return new Ay(e);
}
function sc(e, t) {
  this._context = e, this._t = t;
}
sc.prototype = {
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
function g_(e) {
  return new sc(e, 0.5);
}
function y_(e) {
  return new sc(e, 0);
}
function b_(e) {
  return new sc(e, 1);
}
function Qn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, l = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < l; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function bu(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function x_(e, t) {
  return e[t];
}
function w_(e) {
  const t = [];
  return t.key = e, t;
}
function S_() {
  var e = tt([]), t = bu, r = Qn, n = x_;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), w_), l, c = o.length, s = -1, u;
    for (const f of i)
      for (l = 0, ++s; l < c; ++l)
        (o[l][s] = [0, +n(f, o[l].key, s, i)]).data = f;
    for (l = 0, u = ld(t(o)); l < c; ++l)
      o[u[l]].index = l;
    return r(o, u), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : tt(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : tt(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? bu : typeof i == "function" ? i : tt(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Qn, a) : r;
  }, a;
}
function O_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    Qn(e, t);
  }
}
function $_(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, l = 0; o < a; ++o) l += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    Qn(e, t);
  }
}
function C_(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var l = 0, c = 0, s = 0; l < o; ++l) {
        for (var u = e[t[l]], f = u[n][1] || 0, d = u[n - 1][1] || 0, h = (f - d) / 2, v = 0; v < l; ++v) {
          var m = e[t[v]], p = m[n][1] || 0, y = m[n - 1][1] || 0;
          h += p - y;
        }
        c += f, s += h * f;
      }
      a[n - 1][1] += a[n - 1][0] = r, c && (r -= s / c);
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
var P_ = ["type", "size", "sizeType"];
function xu() {
  return xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xu.apply(this, arguments);
}
function Hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hh(Object(r), !0).forEach(function(n) {
      __(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function __(e, t, r) {
  return t = E_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E_(e) {
  var t = A_(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function A_(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function T_(e, t) {
  if (e == null) return {};
  var r = M_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ty = {
  symbolCircle: cd,
  symbolCross: QP,
  symbolDiamond: e_,
  symbolSquare: t_,
  symbolStar: i_,
  symbolTriangle: o_,
  symbolWye: c_
}, I_ = Math.PI / 180, j_ = function(t) {
  var r = "symbol".concat(oc(t));
  return Ty[r] || cd;
}, D_ = function(t, r, n) {
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
      var a = 18 * I_;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, N_ = function(t, r) {
  Ty["symbol".concat(oc(t))] = r;
}, sd = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, l = o === void 0 ? "area" : o, c = T_(t, P_), s = Fh(Fh({}, c), {}, {
    type: n,
    size: i,
    sizeType: l
  }), u = function() {
    var p = j_(n), y = s_().type(p).size(D_(i, l, n));
    return y();
  }, f = s.className, d = s.cx, h = s.cy, v = me(s, !0);
  return d === +d && h === +h && i === +i ? /* @__PURE__ */ T.createElement("path", xu({}, v, {
    className: je("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(h, ")"),
    d: u()
  })) : null;
};
sd.registerSymbol = N_;
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function wu() {
  return wu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wu.apply(this, arguments);
}
function Wh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function R_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wh(Object(r), !0).forEach(function(n) {
      xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function B_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Iy(n.key), n);
  }
}
function L_(e, t, r) {
  return t && B_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function H_(e, t, r) {
  return t = el(t), F_(e, My() ? Reflect.construct(t, r || [], el(e).constructor) : t.apply(e, r));
}
function F_(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return W_(e);
}
function W_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function My() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (My = function() {
    return !!e;
  })();
}
function el(e) {
  return el = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, el(e);
}
function V_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Su(e, t);
}
function Su(e, t) {
  return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Su(e, t);
}
function xi(e, t, r) {
  return t = Iy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Iy(e) {
  var t = z_(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function z_(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jt = 32, ud = /* @__PURE__ */ function(e) {
  function t() {
    return k_(this, t), H_(this, t, arguments);
  }
  return V_(t, e), L_(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Jt / 2, o = Jt / 6, l = Jt / 3, c = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ T.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
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
            stroke: c,
            d: "M0,".concat(i, "h").concat(l, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * l, ",").concat(i, `
            H`).concat(Jt, "M").concat(2 * l, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(l, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ T.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Jt / 8, "h").concat(Jt, "v").concat(Jt * 3 / 4, "h").concat(-Jt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ T.isValidElement(n.legendIcon)) {
          var s = R_({}, n);
          return delete s.legendIcon, /* @__PURE__ */ T.cloneElement(n.legendIcon, s);
        }
        return /* @__PURE__ */ T.createElement(sd, {
          fill: c,
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
      var n = this, a = this.props, i = a.payload, o = a.iconSize, l = a.layout, c = a.formatter, s = a.inactiveColor, u = {
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
      return i.map(function(h, v) {
        var m = h.formatter || c, p = je(xi(xi({
          "recharts-legend-item": !0
        }, "legend-item-".concat(v), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var y = Ce(h.value) ? null : h.value;
        Dr(
          !Ce(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = h.inactive ? s : h.color;
        return /* @__PURE__ */ T.createElement("li", wu({
          className: p,
          style: f,
          key: "legend-item-".concat(v)
        }, Cn(n.props, h, v)), /* @__PURE__ */ T.createElement(du, {
          width: o,
          height: o,
          viewBox: u,
          style: d
        }, n.renderIcon(h)), /* @__PURE__ */ T.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, m ? m(y, h, v) : y));
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
}(w.PureComponent);
xi(ud, "displayName", "Legend");
xi(ud, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var U_ = nc;
function Y_() {
  this.__data__ = new U_(), this.size = 0;
}
var q_ = Y_;
function G_(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var K_ = G_;
function X_(e) {
  return this.__data__.get(e);
}
var Z_ = X_;
function Q_(e) {
  return this.__data__.has(e);
}
var J_ = Q_, eE = nc, tE = Jf, rE = ed, nE = 200;
function aE(e, t) {
  var r = this.__data__;
  if (r instanceof eE) {
    var n = r.__data__;
    if (!tE || n.length < nE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new rE(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var iE = aE, oE = nc, lE = q_, cE = K_, sE = Z_, uE = J_, fE = iE;
function Da(e) {
  var t = this.__data__ = new oE(e);
  this.size = t.size;
}
Da.prototype.clear = lE;
Da.prototype.delete = cE;
Da.prototype.get = sE;
Da.prototype.has = uE;
Da.prototype.set = fE;
var jy = Da, dE = "__lodash_hash_undefined__";
function hE(e) {
  return this.__data__.set(e, dE), this;
}
var pE = hE;
function vE(e) {
  return this.__data__.has(e);
}
var mE = vE, gE = ed, yE = pE, bE = mE;
function tl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new gE(); ++t < r; )
    this.add(e[t]);
}
tl.prototype.add = tl.prototype.push = yE;
tl.prototype.has = bE;
var Dy = tl;
function xE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Ny = xE;
function wE(e, t) {
  return e.has(t);
}
var Ry = wE, SE = Dy, OE = Ny, $E = Ry, CE = 1, PE = 2;
function _E(e, t, r, n, a, i) {
  var o = r & CE, l = e.length, c = t.length;
  if (l != c && !(o && c > l))
    return !1;
  var s = i.get(e), u = i.get(t);
  if (s && u)
    return s == t && u == e;
  var f = -1, d = !0, h = r & PE ? new SE() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var v = e[f], m = t[f];
    if (n)
      var p = o ? n(m, v, f, t, e, i) : n(v, m, f, e, t, i);
    if (p !== void 0) {
      if (p)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!OE(t, function(y, x) {
        if (!$E(h, x) && (v === y || a(v, y, r, n, i)))
          return h.push(x);
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
var ky = _E, EE = _r, AE = EE.Uint8Array, TE = AE;
function ME(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var IE = ME;
function jE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var fd = jE, Vh = eo, zh = TE, DE = Qf, NE = ky, RE = IE, kE = fd, BE = 1, LE = 2, HE = "[object Boolean]", FE = "[object Date]", WE = "[object Error]", VE = "[object Map]", zE = "[object Number]", UE = "[object RegExp]", YE = "[object Set]", qE = "[object String]", GE = "[object Symbol]", KE = "[object ArrayBuffer]", XE = "[object DataView]", Uh = Vh ? Vh.prototype : void 0, Ps = Uh ? Uh.valueOf : void 0;
function ZE(e, t, r, n, a, i, o) {
  switch (r) {
    case XE:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case KE:
      return !(e.byteLength != t.byteLength || !i(new zh(e), new zh(t)));
    case HE:
    case FE:
    case zE:
      return DE(+e, +t);
    case WE:
      return e.name == t.name && e.message == t.message;
    case UE:
    case qE:
      return e == t + "";
    case VE:
      var l = RE;
    case YE:
      var c = n & BE;
      if (l || (l = kE), e.size != t.size && !c)
        return !1;
      var s = o.get(e);
      if (s)
        return s == t;
      n |= LE, o.set(e, t);
      var u = NE(l(e), l(t), n, a, i, o);
      return o.delete(e), u;
    case GE:
      if (Ps)
        return Ps.call(e) == Ps.call(t);
  }
  return !1;
}
var QE = ZE;
function JE(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var By = JE, eA = By, tA = zt;
function rA(e, t, r) {
  var n = t(e);
  return tA(e) ? n : eA(n, r(e));
}
var nA = rA;
function aA(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var iA = aA;
function oA() {
  return [];
}
var lA = oA, cA = iA, sA = lA, uA = Object.prototype, fA = uA.propertyIsEnumerable, Yh = Object.getOwnPropertySymbols, dA = Yh ? function(e) {
  return e == null ? [] : (e = Object(e), cA(Yh(e), function(t) {
    return fA.call(e, t);
  }));
} : sA, hA = dA;
function pA(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var vA = pA, mA = Vr, gA = zr, yA = "[object Arguments]";
function bA(e) {
  return gA(e) && mA(e) == yA;
}
var xA = bA, qh = xA, wA = zr, Ly = Object.prototype, SA = Ly.hasOwnProperty, OA = Ly.propertyIsEnumerable, $A = qh(/* @__PURE__ */ function() {
  return arguments;
}()) ? qh : function(e) {
  return wA(e) && SA.call(e, "callee") && !OA.call(e, "callee");
}, dd = $A, rl = { exports: {} };
function CA() {
  return !1;
}
var PA = CA;
rl.exports;
(function(e, t) {
  var r = _r, n = PA, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, s = c || n;
  e.exports = s;
})(rl, rl.exports);
var Hy = rl.exports, _A = 9007199254740991, EA = /^(?:0|[1-9]\d*)$/;
function AA(e, t) {
  var r = typeof e;
  return t = t ?? _A, !!t && (r == "number" || r != "symbol" && EA.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var hd = AA, TA = 9007199254740991;
function MA(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= TA;
}
var pd = MA, IA = Vr, jA = pd, DA = zr, NA = "[object Arguments]", RA = "[object Array]", kA = "[object Boolean]", BA = "[object Date]", LA = "[object Error]", HA = "[object Function]", FA = "[object Map]", WA = "[object Number]", VA = "[object Object]", zA = "[object RegExp]", UA = "[object Set]", YA = "[object String]", qA = "[object WeakMap]", GA = "[object ArrayBuffer]", KA = "[object DataView]", XA = "[object Float32Array]", ZA = "[object Float64Array]", QA = "[object Int8Array]", JA = "[object Int16Array]", eT = "[object Int32Array]", tT = "[object Uint8Array]", rT = "[object Uint8ClampedArray]", nT = "[object Uint16Array]", aT = "[object Uint32Array]", at = {};
at[XA] = at[ZA] = at[QA] = at[JA] = at[eT] = at[tT] = at[rT] = at[nT] = at[aT] = !0;
at[NA] = at[RA] = at[GA] = at[kA] = at[KA] = at[BA] = at[LA] = at[HA] = at[FA] = at[WA] = at[VA] = at[zA] = at[UA] = at[YA] = at[qA] = !1;
function iT(e) {
  return DA(e) && jA(e.length) && !!at[IA(e)];
}
var oT = iT;
function lT(e) {
  return function(t) {
    return e(t);
  };
}
var Fy = lT, nl = { exports: {} };
nl.exports;
(function(e, t) {
  var r = Zg, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var c = a && a.require && a.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(nl, nl.exports);
var cT = nl.exports, sT = oT, uT = Fy, Gh = cT, Kh = Gh && Gh.isTypedArray, fT = Kh ? uT(Kh) : sT, Wy = fT, dT = vA, hT = dd, pT = zt, vT = Hy, mT = hd, gT = Wy, yT = Object.prototype, bT = yT.hasOwnProperty;
function xT(e, t) {
  var r = pT(e), n = !r && hT(e), a = !r && !n && vT(e), i = !r && !n && !a && gT(e), o = r || n || a || i, l = o ? dT(e.length, String) : [], c = l.length;
  for (var s in e)
    (t || bT.call(e, s)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    mT(s, c))) && l.push(s);
  return l;
}
var wT = xT, ST = Object.prototype;
function OT(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ST;
  return e === r;
}
var $T = OT;
function CT(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Vy = CT, PT = Vy, _T = PT(Object.keys, Object), ET = _T, AT = $T, TT = ET, MT = Object.prototype, IT = MT.hasOwnProperty;
function jT(e) {
  if (!AT(e))
    return TT(e);
  var t = [];
  for (var r in Object(e))
    IT.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var DT = jT, NT = Zf, RT = pd;
function kT(e) {
  return e != null && RT(e.length) && !NT(e);
}
var uc = kT, BT = wT, LT = DT, HT = uc;
function FT(e) {
  return HT(e) ? BT(e) : LT(e);
}
var vd = FT, WT = nA, VT = hA, zT = vd;
function UT(e) {
  return WT(e, zT, VT);
}
var YT = UT, Xh = YT, qT = 1, GT = Object.prototype, KT = GT.hasOwnProperty;
function XT(e, t, r, n, a, i) {
  var o = r & qT, l = Xh(e), c = l.length, s = Xh(t), u = s.length;
  if (c != u && !o)
    return !1;
  for (var f = c; f--; ) {
    var d = l[f];
    if (!(o ? d in t : KT.call(t, d)))
      return !1;
  }
  var h = i.get(e), v = i.get(t);
  if (h && v)
    return h == t && v == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var p = o; ++f < c; ) {
    d = l[f];
    var y = e[d], x = t[d];
    if (n)
      var S = o ? n(x, y, d, t, e, i) : n(y, x, d, e, t, i);
    if (!(S === void 0 ? y === x || a(y, x, r, n, i) : S)) {
      m = !1;
      break;
    }
    p || (p = d == "constructor");
  }
  if (m && !p) {
    var O = e.constructor, g = t.constructor;
    O != g && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof g == "function" && g instanceof g) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var ZT = XT, QT = Tn, JT = _r, eM = QT(JT, "DataView"), tM = eM, rM = Tn, nM = _r, aM = rM(nM, "Promise"), iM = aM, oM = Tn, lM = _r, cM = oM(lM, "Set"), zy = cM, sM = Tn, uM = _r, fM = sM(uM, "WeakMap"), dM = fM, Ou = tM, $u = Jf, Cu = iM, Pu = zy, _u = dM, Uy = Vr, Na = Jg, Zh = "[object Map]", hM = "[object Object]", Qh = "[object Promise]", Jh = "[object Set]", ep = "[object WeakMap]", tp = "[object DataView]", pM = Na(Ou), vM = Na($u), mM = Na(Cu), gM = Na(Pu), yM = Na(_u), vn = Uy;
(Ou && vn(new Ou(new ArrayBuffer(1))) != tp || $u && vn(new $u()) != Zh || Cu && vn(Cu.resolve()) != Qh || Pu && vn(new Pu()) != Jh || _u && vn(new _u()) != ep) && (vn = function(e) {
  var t = Uy(e), r = t == hM ? e.constructor : void 0, n = r ? Na(r) : "";
  if (n)
    switch (n) {
      case pM:
        return tp;
      case vM:
        return Zh;
      case mM:
        return Qh;
      case gM:
        return Jh;
      case yM:
        return ep;
    }
  return t;
});
var bM = vn, _s = jy, xM = ky, wM = QE, SM = ZT, rp = bM, np = zt, ap = Hy, OM = Wy, $M = 1, ip = "[object Arguments]", op = "[object Array]", So = "[object Object]", CM = Object.prototype, lp = CM.hasOwnProperty;
function PM(e, t, r, n, a, i) {
  var o = np(e), l = np(t), c = o ? op : rp(e), s = l ? op : rp(t);
  c = c == ip ? So : c, s = s == ip ? So : s;
  var u = c == So, f = s == So, d = c == s;
  if (d && ap(e)) {
    if (!ap(t))
      return !1;
    o = !0, u = !1;
  }
  if (d && !u)
    return i || (i = new _s()), o || OM(e) ? xM(e, t, r, n, a, i) : wM(e, t, c, r, n, a, i);
  if (!(r & $M)) {
    var h = u && lp.call(e, "__wrapped__"), v = f && lp.call(t, "__wrapped__");
    if (h || v) {
      var m = h ? e.value() : e, p = v ? t.value() : t;
      return i || (i = new _s()), a(m, p, r, n, i);
    }
  }
  return d ? (i || (i = new _s()), SM(e, t, r, n, a, i)) : !1;
}
var _M = PM, EM = _M, cp = zr;
function Yy(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !cp(e) && !cp(t) ? e !== e && t !== t : EM(e, t, r, n, Yy, a);
}
var md = Yy, AM = jy, TM = md, MM = 1, IM = 2;
function jM(e, t, r, n) {
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
    var c = l[0], s = e[c], u = l[1];
    if (o && l[2]) {
      if (s === void 0 && !(c in e))
        return !1;
    } else {
      var f = new AM();
      if (n)
        var d = n(s, u, c, e, t, f);
      if (!(d === void 0 ? TM(u, s, MM | IM, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var DM = jM, NM = tn;
function RM(e) {
  return e === e && !NM(e);
}
var qy = RM, kM = qy, BM = vd;
function LM(e) {
  for (var t = BM(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, kM(a)];
  }
  return t;
}
var HM = LM;
function FM(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Gy = FM, WM = DM, VM = HM, zM = Gy;
function UM(e) {
  var t = VM(e);
  return t.length == 1 && t[0][2] ? zM(t[0][0], t[0][1]) : function(r) {
    return r === e || WM(r, e, t);
  };
}
var YM = UM;
function qM(e, t) {
  return e != null && t in Object(e);
}
var GM = qM, KM = ay, XM = dd, ZM = zt, QM = hd, JM = pd, eI = ic;
function tI(e, t, r) {
  t = KM(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = eI(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && JM(a) && QM(o, a) && (ZM(e) || XM(e)));
}
var rI = tI, nI = GM, aI = rI;
function iI(e, t) {
  return e != null && aI(e, t, nI);
}
var oI = iI, lI = md, cI = iy, sI = oI, uI = Xf, fI = qy, dI = Gy, hI = ic, pI = 1, vI = 2;
function mI(e, t) {
  return uI(e) && fI(t) ? dI(hI(e), t) : function(r) {
    var n = cI(r, e);
    return n === void 0 && n === t ? sI(r, e) : lI(t, n, pI | vI);
  };
}
var gI = mI;
function yI(e) {
  return e;
}
var Ra = yI;
function bI(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var xI = bI, wI = nd;
function SI(e) {
  return function(t) {
    return wI(t, e);
  };
}
var OI = SI, $I = xI, CI = OI, PI = Xf, _I = ic;
function EI(e) {
  return PI(e) ? $I(_I(e)) : CI(e);
}
var AI = EI, TI = YM, MI = gI, II = Ra, jI = zt, DI = AI;
function NI(e) {
  return typeof e == "function" ? e : e == null ? II : typeof e == "object" ? jI(e) ? MI(e[0], e[1]) : TI(e) : DI(e);
}
var rn = NI;
function RI(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var kI = RI;
function BI(e) {
  return e !== e;
}
var LI = BI;
function HI(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var FI = HI, WI = kI, VI = LI, zI = FI;
function UI(e, t, r) {
  return t === t ? zI(e, t, r) : WI(e, VI, r);
}
var YI = UI, qI = YI;
function GI(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && qI(e, t, 0) > -1;
}
var KI = GI;
function XI(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var ZI = XI;
function QI() {
}
var JI = QI, Es = zy, ej = JI, tj = fd, rj = 1 / 0, nj = Es && 1 / tj(new Es([, -0]))[1] == rj ? function(e) {
  return new Es(e);
} : ej, aj = nj, ij = Dy, oj = KI, lj = ZI, cj = Ry, sj = aj, uj = fd, fj = 200;
function dj(e, t, r) {
  var n = -1, a = oj, i = e.length, o = !0, l = [], c = l;
  if (r)
    o = !1, a = lj;
  else if (i >= fj) {
    var s = t ? null : sj(e);
    if (s)
      return uj(s);
    o = !1, a = cj, c = new ij();
  } else
    c = t ? [] : l;
  e:
    for (; ++n < i; ) {
      var u = e[n], f = t ? t(u) : u;
      if (u = r || u !== 0 ? u : 0, o && f === f) {
        for (var d = c.length; d--; )
          if (c[d] === f)
            continue e;
        t && c.push(f), l.push(u);
      } else a(c, f, r) || (c !== l && c.push(f), l.push(u));
    }
  return l;
}
var hj = dj, pj = rn, vj = hj;
function mj(e, t) {
  return e && e.length ? vj(e, pj(t)) : [];
}
var gj = mj;
const sp = /* @__PURE__ */ We(gj);
function Ky(e, t, r) {
  return t === !0 ? sp(e, r) : Ce(t) ? sp(e, t) : e;
}
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
var yj = ["ref"];
function up(e, t) {
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
    t % 2 ? up(Object(r), !0).forEach(function(n) {
      fc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : up(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Zy(n.key), n);
  }
}
function xj(e, t, r) {
  return t && fp(e.prototype, t), r && fp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wj(e, t, r) {
  return t = al(t), Sj(e, Xy() ? Reflect.construct(t, r || [], al(e).constructor) : t.apply(e, r));
}
function Sj(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oj(e);
}
function Oj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xy = function() {
    return !!e;
  })();
}
function al(e) {
  return al = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, al(e);
}
function $j(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Eu(e, t);
}
function Eu(e, t) {
  return Eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Eu(e, t);
}
function fc(e, t, r) {
  return t = Zy(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Zy(e) {
  var t = Cj(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function Cj(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pj(e, t) {
  if (e == null) return {};
  var r = _j(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _j(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ej(e) {
  return e.value;
}
function Aj(e, t) {
  if (/* @__PURE__ */ T.isValidElement(e))
    return /* @__PURE__ */ T.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ T.createElement(e, t);
  t.ref;
  var r = Pj(t, yj);
  return /* @__PURE__ */ T.createElement(ud, r);
}
var dp = 1, qn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    bj(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = wj(this, t, [].concat(a)), fc(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return $j(t, e), xj(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > dp || Math.abs(a.height - this.lastBoundingBox.height) > dp) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      var a = this.props, i = a.layout, o = a.align, l = a.verticalAlign, c = a.margin, s = a.chartWidth, u = a.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((s || 0) - h.width) / 2
          };
        } else
          f = o === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (l === "middle") {
          var v = this.getBBoxSnapshot();
          d = {
            top: ((u || 0) - v.height) / 2
          };
        } else
          d = l === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Ar(Ar({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, l = a.height, c = a.wrapperStyle, s = a.payloadUniqBy, u = a.payload, f = Ar(Ar({
        position: "absolute",
        width: o || "auto",
        height: l || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ T.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, Aj(i, Ar(Ar({}, this.props), {}, {
        payload: Ky(u, s, Ej)
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
}(w.PureComponent);
fc(qn, "displayName", "Legend");
fc(qn, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var hp = eo, Tj = dd, Mj = zt, pp = hp ? hp.isConcatSpreadable : void 0;
function Ij(e) {
  return Mj(e) || Tj(e) || !!(pp && e && e[pp]);
}
var jj = Ij, Dj = By, Nj = jj;
function Qy(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Nj), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? Qy(l, t - 1, r, n, a) : Dj(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Jy = Qy;
function Rj(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var c = o[e ? l : ++a];
      if (r(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var kj = Rj, Bj = kj, Lj = Bj(), Hj = Lj, Fj = Hj, Wj = vd;
function Vj(e, t) {
  return e && Fj(e, t, Wj);
}
var eb = Vj, zj = uc;
function Uj(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!zj(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var Yj = Uj, qj = eb, Gj = Yj, Kj = Gj(qj), gd = Kj, Xj = gd, Zj = uc;
function Qj(e, t) {
  var r = -1, n = Zj(e) ? Array(e.length) : [];
  return Xj(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
var tb = Qj;
function Jj(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var eD = Jj, vp = _a;
function tD(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, i = vp(e), o = t !== void 0, l = t === null, c = t === t, s = vp(t);
    if (!l && !s && !i && e > t || i && o && c && !l && !s || n && o && c || !r && c || !a)
      return 1;
    if (!n && !i && !s && e < t || s && r && a && !n && !i || l && r && a || !o && a || !c)
      return -1;
  }
  return 0;
}
var rD = tD, nD = rD;
function aD(e, t, r) {
  for (var n = -1, a = e.criteria, i = t.criteria, o = a.length, l = r.length; ++n < o; ) {
    var c = nD(a[n], i[n]);
    if (c) {
      if (n >= l)
        return c;
      var s = r[n];
      return c * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var iD = aD, As = rd, oD = nd, lD = rn, cD = tb, sD = eD, uD = Fy, fD = iD, dD = Ra, hD = zt;
function pD(e, t, r) {
  t.length ? t = As(t, function(i) {
    return hD(i) ? function(o) {
      return oD(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : t = [dD];
  var n = -1;
  t = As(t, uD(lD));
  var a = cD(e, function(i, o, l) {
    var c = As(t, function(s) {
      return s(i);
    });
    return { criteria: c, index: ++n, value: i };
  });
  return sD(a, function(i, o) {
    return fD(i, o, r);
  });
}
var vD = pD;
function mD(e, t, r) {
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
var gD = mD, yD = gD, mp = Math.max;
function bD(e, t, r) {
  return t = mp(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = mp(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), yD(e, this, l);
  };
}
var xD = bD;
function wD(e) {
  return function() {
    return e;
  };
}
var SD = wD, OD = Tn, $D = function() {
  try {
    var e = OD(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), rb = $D, CD = SD, gp = rb, PD = Ra, _D = gp ? function(e, t) {
  return gp(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: CD(t),
    writable: !0
  });
} : PD, ED = _D, AD = 800, TD = 16, MD = Date.now;
function ID(e) {
  var t = 0, r = 0;
  return function() {
    var n = MD(), a = TD - (n - r);
    if (r = n, a > 0) {
      if (++t >= AD)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var jD = ID, DD = ED, ND = jD, RD = ND(DD), kD = RD, BD = Ra, LD = xD, HD = kD;
function FD(e, t) {
  return HD(LD(e, t, BD), e + "");
}
var WD = FD, VD = Qf, zD = uc, UD = hd, YD = tn;
function qD(e, t, r) {
  if (!YD(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? zD(r) && UD(t, r.length) : n == "string" && t in r) ? VD(r[t], e) : !1;
}
var dc = qD, GD = Jy, KD = vD, XD = WD, yp = dc, ZD = XD(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && yp(e, t[0], t[1]) ? t = [] : r > 2 && yp(t[0], t[1], t[2]) && (t = [t[0]]), KD(e, GD(t, 1), []);
}), QD = ZD;
const yd = /* @__PURE__ */ We(QD);
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function Au() {
  return Au = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Au.apply(this, arguments);
}
function JD(e, t) {
  return n2(e) || r2(e, t) || t2(e, t) || e2();
}
function e2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function t2(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function r2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function n2(e) {
  if (Array.isArray(e)) return e;
}
function xp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xp(Object(r), !0).forEach(function(n) {
      a2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function a2(e, t, r) {
  return t = i2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i2(e) {
  var t = o2(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function o2(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l2(e) {
  return Array.isArray(e) && gt(e[0]) && gt(e[1]) ? e.join(" ~ ") : e;
}
var c2 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, l = o === void 0 ? {} : o, c = t.labelStyle, s = c === void 0 ? {} : c, u = t.payload, f = t.formatter, d = t.itemSorter, h = t.wrapperClassName, v = t.labelClassName, m = t.label, p = t.labelFormatter, y = t.accessibilityLayer, x = y === void 0 ? !1 : y, S = function() {
    if (u && u.length) {
      var I = {
        padding: 0,
        margin: 0
      }, N = (d ? yd(u, d) : u).map(function(j, E) {
        if (j.type === "none")
          return null;
        var A = Ts({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, l), D = j.formatter || f || l2, R = j.value, k = j.name, L = R, H = k;
        if (D && L != null && H != null) {
          var B = D(R, k, j, E, u);
          if (Array.isArray(B)) {
            var W = JD(B, 2);
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
  }, O = Ts({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), g = Ts({
    margin: 0
  }, s), b = !Ee(m), $ = b ? m : "", C = je("recharts-default-tooltip", h), _ = je("recharts-tooltip-label", v);
  b && p && u !== void 0 && u !== null && ($ = p(m, u));
  var M = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ T.createElement("div", Au({
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
function Oo(e, t, r) {
  return t = s2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s2(e) {
  var t = u2(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function u2(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ga = "recharts-tooltip-wrapper", f2 = {
  visibility: "hidden"
};
function d2(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return je(Ga, Oo(Oo(Oo(Oo({}, "".concat(Ga, "-right"), ee(r) && t && ee(t.x) && r >= t.x), "".concat(Ga, "-left"), ee(r) && t && ee(t.x) && r < t.x), "".concat(Ga, "-bottom"), ee(n) && t && ee(t.y) && n >= t.y), "".concat(Ga, "-top"), ee(n) && t && ee(t.y) && n < t.y));
}
function wp(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, l = e.tooltipDimension, c = e.viewBox, s = e.viewBoxDimension;
  if (i && ee(i[n]))
    return i[n];
  var u = r[n] - l - a, f = r[n] + a;
  if (t[n])
    return o[n] ? u : f;
  if (o[n]) {
    var d = u, h = c[n];
    return d < h ? Math.max(f, c[n]) : Math.max(u, c[n]);
  }
  var v = f + l, m = c[n] + s;
  return v > m ? Math.max(u, c[n]) : Math.max(f, c[n]);
}
function h2(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function p2(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, l = e.useTranslate3d, c = e.viewBox, s, u, f;
  return o.height > 0 && o.width > 0 && r ? (u = wp({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = wp({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), s = h2({
    translateX: u,
    translateY: f,
    useTranslate3d: l
  })) : s = f2, {
    cssProperties: s,
    cssClasses: d2({
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
      Mu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ab(n.key), n);
  }
}
function g2(e, t, r) {
  return t && m2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y2(e, t, r) {
  return t = il(t), b2(e, nb() ? Reflect.construct(t, r || [], il(e).constructor) : t.apply(e, r));
}
function b2(e, t) {
  if (t && (ta(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return x2(e);
}
function x2(e) {
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
function w2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tu(e, t);
}
function Tu(e, t) {
  return Tu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Tu(e, t);
}
function Mu(e, t, r) {
  return t = ab(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ab(e) {
  var t = S2(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function S2(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $p = 1, O2 = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    v2(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = y2(this, t, [].concat(a)), Mu(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Mu(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var l, c, s, u;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (l = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && l !== void 0 ? l : 0,
            y: (s = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== null && s !== void 0 ? s : 0
          }
        });
      }
    }), r;
  }
  return w2(t, e), g2(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > $p || Math.abs(n.height - this.state.lastBoundingBox.height) > $p) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, c = a.animationEasing, s = a.children, u = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, h = a.offset, v = a.position, m = a.reverseDirection, p = a.useTranslate3d, y = a.viewBox, x = a.wrapperStyle, S = p2({
        allowEscapeViewBox: o,
        coordinate: u,
        offsetTopLeft: h,
        position: v,
        reverseDirection: m,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: y
      }), O = S.cssClasses, g = S.cssProperties, b = Op(Op({
        transition: d && i ? "transform ".concat(l, "ms ").concat(c) : void 0
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
        /* @__PURE__ */ T.createElement("div", {
          tabIndex: -1,
          className: O,
          style: b,
          ref: function(C) {
            n.wrapperNode = C;
          }
        }, s)
      );
    }
  }]);
}(w.PureComponent), $2 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wr = {
  isSsr: $2(),
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
function Cp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cp(Object(r), !0).forEach(function(n) {
      bd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function C2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function P2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ob(n.key), n);
  }
}
function _2(e, t, r) {
  return t && P2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function E2(e, t, r) {
  return t = ol(t), A2(e, ib() ? Reflect.construct(t, r || [], ol(e).constructor) : t.apply(e, r));
}
function A2(e, t) {
  if (t && (ra(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return T2(e);
}
function T2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ib() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ib = function() {
    return !!e;
  })();
}
function ol(e) {
  return ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ol(e);
}
function M2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Iu(e, t);
}
function Iu(e, t) {
  return Iu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Iu(e, t);
}
function bd(e, t, r) {
  return t = ob(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ob(e) {
  var t = I2(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function I2(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j2(e) {
  return e.dataKey;
}
function D2(e, t) {
  return /* @__PURE__ */ T.isValidElement(e) ? /* @__PURE__ */ T.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ T.createElement(e, t) : /* @__PURE__ */ T.createElement(c2, t);
}
var lr = /* @__PURE__ */ function(e) {
  function t() {
    return C2(this, t), E2(this, t, arguments);
  }
  return M2(t, e), _2(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, c = a.animationEasing, s = a.content, u = a.coordinate, f = a.filterNull, d = a.isAnimationActive, h = a.offset, v = a.payload, m = a.payloadUniqBy, p = a.position, y = a.reverseDirection, x = a.useTranslate3d, S = a.viewBox, O = a.wrapperStyle, g = v ?? [];
      f && g.length && (g = Ky(v.filter(function($) {
        return $.value != null && ($.hide !== !0 || n.props.includeHidden);
      }), m, j2));
      var b = g.length > 0;
      return /* @__PURE__ */ T.createElement(O2, {
        allowEscapeViewBox: o,
        animationDuration: l,
        animationEasing: c,
        isAnimationActive: d,
        active: i,
        coordinate: u,
        hasPayload: b,
        offset: h,
        position: p,
        reverseDirection: y,
        useTranslate3d: x,
        viewBox: S,
        wrapperStyle: O
      }, D2(s, Pp(Pp({}, this.props), {}, {
        payload: g
      })));
    }
  }]);
}(w.PureComponent);
bd(lr, "displayName", "Tooltip");
bd(lr, "defaultProps", {
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
var N2 = _r, R2 = function() {
  return N2.Date.now();
}, k2 = R2, B2 = /\s/;
function L2(e) {
  for (var t = e.length; t-- && B2.test(e.charAt(t)); )
    ;
  return t;
}
var H2 = L2, F2 = H2, W2 = /^\s+/;
function V2(e) {
  return e && e.slice(0, F2(e) + 1).replace(W2, "");
}
var z2 = V2, U2 = z2, _p = tn, Y2 = _a, Ep = NaN, q2 = /^[-+]0x[0-9a-f]+$/i, G2 = /^0b[01]+$/i, K2 = /^0o[0-7]+$/i, X2 = parseInt;
function Z2(e) {
  if (typeof e == "number")
    return e;
  if (Y2(e))
    return Ep;
  if (_p(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = _p(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = U2(e);
  var r = G2.test(e);
  return r || K2.test(e) ? X2(e.slice(2), r ? 2 : 8) : q2.test(e) ? Ep : +e;
}
var lb = Z2, Q2 = tn, Ms = k2, Ap = lb, J2 = "Expected a function", eN = Math.max, tN = Math.min;
function rN(e, t, r) {
  var n, a, i, o, l, c, s = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(J2);
  t = Ap(t) || 0, Q2(r) && (u = !!r.leading, f = "maxWait" in r, i = f ? eN(Ap(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function h(b) {
    var $ = n, C = a;
    return n = a = void 0, s = b, o = e.apply(C, $), o;
  }
  function v(b) {
    return s = b, l = setTimeout(y, t), u ? h(b) : o;
  }
  function m(b) {
    var $ = b - c, C = b - s, _ = t - $;
    return f ? tN(_, i - C) : _;
  }
  function p(b) {
    var $ = b - c, C = b - s;
    return c === void 0 || $ >= t || $ < 0 || f && C >= i;
  }
  function y() {
    var b = Ms();
    if (p(b))
      return x(b);
    l = setTimeout(y, m(b));
  }
  function x(b) {
    return l = void 0, d && n ? h(b) : (n = a = void 0, o);
  }
  function S() {
    l !== void 0 && clearTimeout(l), s = 0, n = c = a = l = void 0;
  }
  function O() {
    return l === void 0 ? o : x(Ms());
  }
  function g() {
    var b = Ms(), $ = p(b);
    if (n = arguments, a = this, c = b, $) {
      if (l === void 0)
        return v(c);
      if (f)
        return clearTimeout(l), l = setTimeout(y, t), h(c);
    }
    return l === void 0 && (l = setTimeout(y, t)), o;
  }
  return g.cancel = S, g.flush = O, g;
}
var nN = rN, aN = nN, iN = tn, oN = "Expected a function";
function lN(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(oN);
  return iN(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), aN(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var cN = lN;
const cb = /* @__PURE__ */ We(cN);
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function Tp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tp(Object(r), !0).forEach(function(n) {
      sN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sN(e, t, r) {
  return t = uN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uN(e) {
  var t = fN(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function fN(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dN(e, t) {
  return mN(e) || vN(e, t) || pN(e, t) || hN();
}
function hN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pN(e, t) {
  if (e) {
    if (typeof e == "string") return Mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mp(e, t);
  }
}
function Mp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function mN(e) {
  if (Array.isArray(e)) return e;
}
var sb = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, l = e.height, c = l === void 0 ? "100%" : l, s = e.minWidth, u = s === void 0 ? 0 : s, f = e.minHeight, d = e.maxHeight, h = e.children, v = e.debounce, m = v === void 0 ? 0 : v, p = e.id, y = e.className, x = e.onResize, S = e.style, O = S === void 0 ? {} : S, g = w.useRef(null), b = w.useRef();
  b.current = x, w.useImperativeHandle(t, function() {
    return Object.defineProperty(g.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), g.current;
      },
      configurable: !0
    });
  });
  var $ = w.useState({
    containerWidth: a.width,
    containerHeight: a.height
  }), C = dN($, 2), _ = C[0], M = C[1], P = w.useCallback(function(N, j) {
    M(function(E) {
      var A = Math.round(N), D = Math.round(j);
      return E.containerWidth === A && E.containerHeight === D ? E : {
        containerWidth: A,
        containerHeight: D
      };
    });
  }, []);
  w.useEffect(function() {
    var N = function(k) {
      var L, H = k[0].contentRect, B = H.width, W = H.height;
      P(B, W), (L = b.current) === null || L === void 0 || L.call(b, B, W);
    };
    m > 0 && (N = cb(N, m, {
      trailing: !0,
      leading: !1
    }));
    var j = new ResizeObserver(N), E = g.current.getBoundingClientRect(), A = E.width, D = E.height;
    return P(A, D), j.observe(g.current), function() {
      j.disconnect();
    };
  }, [P, m]);
  var I = w.useMemo(function() {
    var N = _.containerWidth, j = _.containerHeight;
    if (N < 0 || j < 0)
      return null;
    Dr(yn(o) || yn(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), Dr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var E = yn(o) ? N : o, A = yn(c) ? j : c;
    r && r > 0 && (E ? A = E / r : A && (E = A * r), d && A > d && (A = d)), Dr(E > 0 || A > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, E, A, o, c, u, f, r);
    var D = !Array.isArray(h) && jr(h.type).endsWith("Chart");
    return T.Children.map(h, function(R) {
      return /* @__PURE__ */ T.isValidElement(R) ? /* @__PURE__ */ w.cloneElement(R, $o({
        width: E,
        height: A
      }, D ? {
        style: $o({
          height: "100%",
          width: "100%",
          maxHeight: A,
          maxWidth: E
        }, R.props.style)
      } : {})) : R;
    });
  }, [r, h, c, d, f, u, _, o]);
  return /* @__PURE__ */ T.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: je("recharts-responsive-container", y),
    style: $o($o({}, O), {}, {
      width: o,
      height: c,
      minWidth: u,
      minHeight: f,
      maxHeight: d
    }),
    ref: g
  }, I);
}), hc = function(t) {
  return null;
};
hc.displayName = "Cell";
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Ip(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ip(Object(r), !0).forEach(function(n) {
      gN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ip(Object(r)).forEach(function(n) {
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
  return $i(t) == "symbol" ? t : t + "";
}
function bN(e, t) {
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
}, xN = 2e3, wN = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, jp = "recharts_measurement_span";
function SN(e) {
  var t = ju({}, e);
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
  var n = SN(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (kn.widthCache[a])
    return kn.widthCache[a];
  try {
    var i = document.getElementById(jp);
    i || (i = document.createElement("span"), i.setAttribute("id", jp), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = ju(ju({}, wN), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var l = i.getBoundingClientRect(), c = {
      width: l.width,
      height: l.height
    };
    return kn.widthCache[a] = c, ++kn.cacheCount > xN && (kn.cacheCount = 0, kn.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, ON = function(t) {
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
function ll(e, t) {
  return _N(e) || PN(e, t) || CN(e, t) || $N();
}
function $N() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CN(e, t) {
  if (e) {
    if (typeof e == "string") return Dp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dp(e, t);
  }
}
function Dp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function _N(e) {
  if (Array.isArray(e)) return e;
}
function EN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Np(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, TN(n.key), n);
  }
}
function AN(e, t, r) {
  return t && Np(e.prototype, t), r && Np(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function TN(e) {
  var t = MN(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function MN(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Rp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, kp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, IN = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, jN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, ub = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, DN = Object.keys(ub), Fn = "NaN";
function NN(e, t) {
  return e * ub[t];
}
var Co = /* @__PURE__ */ function() {
  function e(t, r) {
    EN(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !IN.test(r) && (this.num = NaN, this.unit = ""), DN.includes(r) && (this.num = NN(t, r), this.unit = "px");
  }
  return AN(e, [{
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
      var n, a = (n = jN.exec(r)) !== null && n !== void 0 ? n : [], i = ll(a, 3), o = i[1], l = i[2];
      return new e(parseFloat(o), l ?? "");
    }
  }]);
}();
function fb(e) {
  if (e.includes(Fn))
    return Fn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Rp.exec(t)) !== null && r !== void 0 ? r : [], a = ll(n, 4), i = a[1], o = a[2], l = a[3], c = Co.parse(i ?? ""), s = Co.parse(l ?? ""), u = o === "*" ? c.multiply(s) : c.divide(s);
    if (u.isNaN())
      return Fn;
    t = t.replace(Rp, u.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = kp.exec(t)) !== null && f !== void 0 ? f : [], h = ll(d, 4), v = h[1], m = h[2], p = h[3], y = Co.parse(v ?? ""), x = Co.parse(p ?? ""), S = m === "+" ? y.add(x) : y.subtract(x);
    if (S.isNaN())
      return Fn;
    t = t.replace(kp, S.toString());
  }
  return t;
}
var Bp = /\(([^()]*)\)/;
function RN(e) {
  for (var t = e; t.includes("("); ) {
    var r = Bp.exec(t), n = ll(r, 2), a = n[1];
    t = t.replace(Bp, fb(a));
  }
  return t;
}
function kN(e) {
  var t = e.replace(/\s+/g, "");
  return t = RN(t), t = fb(t), t;
}
function BN(e) {
  try {
    return kN(e);
  } catch {
    return Fn;
  }
}
function Is(e) {
  var t = BN(e.slice(5, -1));
  return t === Fn ? "" : t;
}
var LN = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], HN = ["dx", "dy", "angle", "className", "breakAll"];
function Du() {
  return Du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Du.apply(this, arguments);
}
function Lp(e, t) {
  if (e == null) return {};
  var r = FN(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function FN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Hp(e, t) {
  return UN(e) || zN(e, t) || VN(e, t) || WN();
}
function WN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VN(e, t) {
  if (e) {
    if (typeof e == "string") return Fp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fp(e, t);
  }
}
function Fp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function UN(e) {
  if (Array.isArray(e)) return e;
}
var db = /[ \f\n\r\t\v\u2028\u2029]+/, hb = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    Ee(r) || (n ? i = r.toString().split("") : i = r.toString().split(db));
    var o = i.map(function(c) {
      return {
        word: c,
        width: fi(c, a).width
      };
    }), l = n ? 0 : fi(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: l
    };
  } catch {
    return null;
  }
}, YN = function(t, r, n, a, i) {
  var o = t.maxLines, l = t.children, c = t.style, s = t.breakAll, u = ee(o), f = l, d = function() {
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
  }, h = d(r), v = function(E) {
    return E.reduce(function(A, D) {
      return A.width > D.width ? A : D;
    });
  };
  if (!u)
    return h;
  for (var m = "…", p = function(E) {
    var A = f.slice(0, E), D = hb({
      breakAll: s,
      style: c,
      children: A + m
    }).wordsWithComputedWidth, R = d(D), k = R.length > o || v(R).width > Number(a);
    return [k, R];
  }, y = 0, x = f.length - 1, S = 0, O; y <= x && S <= f.length - 1; ) {
    var g = Math.floor((y + x) / 2), b = g - 1, $ = p(b), C = Hp($, 2), _ = C[0], M = C[1], P = p(g), I = Hp(P, 1), N = I[0];
    if (!_ && !N && (y = g + 1), _ && N && (x = g - 1), !_ && N) {
      O = M;
      break;
    }
    S++;
  }
  return O || h;
}, Wp = function(t) {
  var r = Ee(t) ? [] : t.toString().split(db);
  return [{
    words: r
  }];
}, qN = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, l = t.maxLines;
  if ((r || n) && !wr.isSsr) {
    var c, s, u = hb({
      breakAll: o,
      children: a,
      style: i
    });
    if (u) {
      var f = u.wordsWithComputedWidth, d = u.spaceWidth;
      c = f, s = d;
    } else
      return Wp(a);
    return YN({
      breakAll: o,
      children: a,
      maxLines: l,
      style: i
    }, c, s, r, n);
  }
  return Wp(a);
}, Vp = "#808080", Pn = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, l = o === void 0 ? "1em" : o, c = t.capHeight, s = c === void 0 ? "0.71em" : c, u = t.scaleToFit, f = u === void 0 ? !1 : u, d = t.textAnchor, h = d === void 0 ? "start" : d, v = t.verticalAnchor, m = v === void 0 ? "end" : v, p = t.fill, y = p === void 0 ? Vp : p, x = Lp(t, LN), S = w.useMemo(function() {
    return qN({
      breakAll: x.breakAll,
      children: x.children,
      maxLines: x.maxLines,
      scaleToFit: f,
      style: x.style,
      width: x.width
    });
  }, [x.breakAll, x.children, x.maxLines, f, x.style, x.width]), O = x.dx, g = x.dy, b = x.angle, $ = x.className, C = x.breakAll, _ = Lp(x, HN);
  if (!gt(n) || !gt(i))
    return null;
  var M = n + (ee(O) ? O : 0), P = i + (ee(g) ? g : 0), I;
  switch (m) {
    case "start":
      I = Is("calc(".concat(s, ")"));
      break;
    case "middle":
      I = Is("calc(".concat((S.length - 1) / 2, " * -").concat(l, " + (").concat(s, " / 2))"));
      break;
    default:
      I = Is("calc(".concat(S.length - 1, " * -").concat(l, ")"));
      break;
  }
  var N = [];
  if (f) {
    var j = S[0].width, E = x.width;
    N.push("scale(".concat((ee(E) ? E / j : 1) / j, ")"));
  }
  return b && N.push("rotate(".concat(b, ", ").concat(M, ", ").concat(P, ")")), N.length && (_.transform = N.join(" ")), /* @__PURE__ */ T.createElement("text", Du({}, me(_, !0), {
    x: M,
    y: P,
    className: je("recharts-text", $),
    textAnchor: h,
    fill: y.includes("url") ? Vp : y
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
function GN(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function xd(e) {
  let t, r, n;
  e.length !== 2 ? (t = Jr, r = (l, c) => Jr(e(l), c), n = (l, c) => e(l) - c) : (t = e === Jr || e === GN ? e : KN, r = e, n = e);
  function a(l, c, s = 0, u = l.length) {
    if (s < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = s + u >>> 1;
        r(l[f], c) < 0 ? s = f + 1 : u = f;
      } while (s < u);
    }
    return s;
  }
  function i(l, c, s = 0, u = l.length) {
    if (s < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = s + u >>> 1;
        r(l[f], c) <= 0 ? s = f + 1 : u = f;
      } while (s < u);
    }
    return s;
  }
  function o(l, c, s = 0, u = l.length) {
    const f = a(l, c, s, u - 1);
    return f > s && n(l[f - 1], c) > -n(l[f], c) ? f - 1 : f;
  }
  return { left: a, center: o, right: i };
}
function KN() {
  return 0;
}
function pb(e) {
  return e === null ? NaN : +e;
}
function* XN(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const ZN = xd(Jr), ro = ZN.right;
xd(pb).center;
class zp extends Map {
  constructor(t, r = eR) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(Up(this, t));
  }
  has(t) {
    return super.has(Up(this, t));
  }
  set(t, r) {
    return super.set(QN(this, t), r);
  }
  delete(t) {
    return super.delete(JN(this, t));
  }
}
function Up({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function QN({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function JN({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function eR(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function tR(e = Jr) {
  if (e === Jr) return vb;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function vb(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const rR = Math.sqrt(50), nR = Math.sqrt(10), aR = Math.sqrt(2);
function cl(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= rR ? 10 : i >= nR ? 5 : i >= aR ? 2 : 1;
  let l, c, s;
  return a < 0 ? (s = Math.pow(10, -a) / o, l = Math.round(e * s), c = Math.round(t * s), l / s < e && ++l, c / s > t && --c, s = -s) : (s = Math.pow(10, a) * o, l = Math.round(e / s), c = Math.round(t / s), l * s < e && ++l, c * s > t && --c), c < l && 0.5 <= r && r < 2 ? cl(e, t, r * 2) : [l, c, s];
}
function Nu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? cl(t, e, r) : cl(e, t, r);
  if (!(i >= a)) return [];
  const l = i - a + 1, c = new Array(l);
  if (n)
    if (o < 0) for (let s = 0; s < l; ++s) c[s] = (i - s) / -o;
    else for (let s = 0; s < l; ++s) c[s] = (i - s) * o;
  else if (o < 0) for (let s = 0; s < l; ++s) c[s] = (a + s) / -o;
  else for (let s = 0; s < l; ++s) c[s] = (a + s) * o;
  return c;
}
function Ru(e, t, r) {
  return t = +t, e = +e, r = +r, cl(e, t, r)[2];
}
function ku(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? Ru(t, e, r) : Ru(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function Yp(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function qp(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function mb(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? vb : tR(a); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, s = t - r + 1, u = Math.log(c), f = 0.5 * Math.exp(2 * u / 3), d = 0.5 * Math.sqrt(u * f * (c - f) / c) * (s - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - s * f / c + d)), v = Math.min(n, Math.floor(t + (c - s) * f / c + d));
      mb(e, t, h, v, a);
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
function iR(e, t, r) {
  if (e = Float64Array.from(XN(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return qp(e);
    if (t >= 1) return Yp(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = Yp(mb(e, i).subarray(0, i + 1)), l = qp(e.subarray(i + 1));
    return o + (l - o) * (a - i);
  }
}
function oR(e, t, r = pb) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), l = +r(e[i + 1], i + 1, e);
    return o + (l - o) * (a - i);
  }
}
function lR(e, t, r) {
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
const Bu = Symbol("implicit");
function wd() {
  var e = new zp(), t = [], r = [], n = Bu;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Bu) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new zp();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return wd(t, r).unknown(n);
  }, ar.apply(a, arguments), a;
}
function Pi() {
  var e = wd().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, l = !1, c = 0, s = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, h = a < n, v = h ? a : n, m = h ? n : a;
    i = (m - v) / Math.max(1, d - c + s * 2), l && (i = Math.floor(i)), v += (m - v - i * (d - c)) * u, o = i * (1 - c), l && (v = Math.round(v), o = Math.round(o));
    var p = lR(d).map(function(y) {
      return v + i * y;
    });
    return r(h ? p.reverse() : p);
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
    return arguments.length ? (c = Math.min(1, s = +d), f()) : c;
  }, e.paddingInner = function(d) {
    return arguments.length ? (c = Math.min(1, d), f()) : c;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (s = +d, f()) : s;
  }, e.align = function(d) {
    return arguments.length ? (u = Math.max(0, Math.min(1, d)), f()) : u;
  }, e.copy = function() {
    return Pi(t(), [n, a]).round(l).paddingInner(c).paddingOuter(s).align(u);
  }, ar.apply(f(), arguments);
}
function gb(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return gb(t());
  }, e;
}
function di() {
  return gb(Pi.apply(null, arguments).paddingInner(1));
}
function Sd(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function yb(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function no() {
}
var _i = 0.7, sl = 1 / _i, Gn = "\\s*([+-]?\\d+)\\s*", Ei = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", cR = /^#([0-9a-f]{3,8})$/, sR = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`), uR = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), fR = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${Ei}\\)$`), dR = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${Ei}\\)$`), hR = new RegExp(`^hsl\\(${Ei},${Sr},${Sr}\\)$`), pR = new RegExp(`^hsla\\(${Ei},${Sr},${Sr},${Ei}\\)$`), Gp = {
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
Sd(no, Ai, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Kp,
  // Deprecated! Use color.formatHex.
  formatHex: Kp,
  formatHex8: vR,
  formatHsl: mR,
  formatRgb: Xp,
  toString: Xp
});
function Kp() {
  return this.rgb().formatHex();
}
function vR() {
  return this.rgb().formatHex8();
}
function mR() {
  return bb(this).formatHsl();
}
function Xp() {
  return this.rgb().formatRgb();
}
function Ai(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = cR.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Zp(t) : r === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Po(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Po(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = sR.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = uR.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fR.exec(e)) ? Po(t[1], t[2], t[3], t[4]) : (t = dR.exec(e)) ? Po(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hR.exec(e)) ? ev(t[1], t[2] / 100, t[3] / 100, 1) : (t = pR.exec(e)) ? ev(t[1], t[2] / 100, t[3] / 100, t[4]) : Gp.hasOwnProperty(e) ? Zp(Gp[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function Zp(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Po(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ht(e, t, r, n);
}
function gR(e) {
  return e instanceof no || (e = Ai(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function Lu(e, t, r, n) {
  return arguments.length === 1 ? gR(e) : new Ht(e, t, r, n ?? 1);
}
function Ht(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Sd(Ht, Lu, yb(no, {
  brighter(e) {
    return e = e == null ? sl : Math.pow(sl, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(On(this.r), On(this.g), On(this.b), ul(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Qp,
  // Deprecated! Use color.formatHex.
  formatHex: Qp,
  formatHex8: yR,
  formatRgb: Jp,
  toString: Jp
}));
function Qp() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}`;
}
function yR() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}${bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jp() {
  const e = ul(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${On(this.r)}, ${On(this.g)}, ${On(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ul(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function On(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function bn(e) {
  return e = On(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ev(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new sr(e, t, r, n);
}
function bb(e) {
  if (e instanceof sr) return new sr(e.h, e.s, e.l, e.opacity);
  if (e instanceof no || (e = Ai(e)), !e) return new sr();
  if (e instanceof sr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, l = i - a, c = (i + a) / 2;
  return l ? (t === i ? o = (r - n) / l + (r < n) * 6 : r === i ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= c < 0.5 ? i + a : 2 - i - a, o *= 60) : l = c > 0 && c < 1 ? 0 : o, new sr(o, l, c, e.opacity);
}
function bR(e, t, r, n) {
  return arguments.length === 1 ? bb(e) : new sr(e, t, r, n ?? 1);
}
function sr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Sd(sr, bR, yb(no, {
  brighter(e) {
    return e = e == null ? sl : Math.pow(sl, e), new sr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new sr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new Ht(
      js(e >= 240 ? e - 240 : e + 120, a, n),
      js(e, a, n),
      js(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new sr(tv(this.h), _o(this.s), _o(this.l), ul(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ul(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${tv(this.h)}, ${_o(this.s) * 100}%, ${_o(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function tv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function _o(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function js(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Od = (e) => () => e;
function xR(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function wR(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function SR(e) {
  return (e = +e) == 1 ? xb : function(t, r) {
    return r - t ? wR(t, r, e) : Od(isNaN(t) ? r : t);
  };
}
function xb(e, t) {
  var r = t - e;
  return r ? xR(e, r) : Od(isNaN(e) ? t : e);
}
const rv = function e(t) {
  var r = SR(t);
  function n(a, i) {
    var o = r((a = Lu(a)).r, (i = Lu(i)).r), l = r(a.g, i.g), c = r(a.b, i.b), s = xb(a.opacity, i.opacity);
    return function(u) {
      return a.r = o(u), a.g = l(u), a.b = c(u), a.opacity = s(u), a + "";
    };
  }
  return n.gamma = e, n;
}(1);
function OR(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function $R(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function CR(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = ka(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(l) {
    for (o = 0; o < n; ++o) i[o] = a[o](l);
    return i;
  };
}
function PR(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function fl(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function _R(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = ka(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var Hu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ds = new RegExp(Hu.source, "g");
function ER(e) {
  return function() {
    return e;
  };
}
function AR(e) {
  return function(t) {
    return e(t) + "";
  };
}
function TR(e, t) {
  var r = Hu.lastIndex = Ds.lastIndex = 0, n, a, i, o = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (n = Hu.exec(e)) && (a = Ds.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), l[o] ? l[o] += i : l[++o] = i), (n = n[0]) === (a = a[0]) ? l[o] ? l[o] += a : l[++o] = a : (l[++o] = null, c.push({ i: o, x: fl(n, a) })), r = Ds.lastIndex;
  return r < t.length && (i = t.slice(r), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? c[0] ? AR(c[0].x) : ER(t) : (t = c.length, function(s) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(s);
    return l.join("");
  });
}
function ka(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Od(t) : (r === "number" ? fl : r === "string" ? (n = Ai(t)) ? (t = n, rv) : TR : t instanceof Ai ? rv : t instanceof Date ? PR : $R(t) ? OR : Array.isArray(t) ? CR : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? _R : fl)(e, t);
}
function $d(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function MR(e, t) {
  t === void 0 && (t = e, e = ka);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[l](o - l);
  };
}
function IR(e) {
  return function() {
    return e;
  };
}
function dl(e) {
  return +e;
}
var nv = [0, 1];
function kt(e) {
  return e;
}
function Fu(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : IR(isNaN(t) ? NaN : 0.5);
}
function jR(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function DR(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = Fu(a, n), i = r(o, i)) : (n = Fu(n, a), i = r(i, o)), function(l) {
    return i(n(l));
  };
}
function NR(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = Fu(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(l) {
    var c = ro(e, l, 1, n) - 1;
    return i[c](a[c](l));
  };
}
function ao(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function pc() {
  var e = nv, t = nv, r = ka, n, a, i, o = kt, l, c, s;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== kt && (o = jR(e[0], e[d - 1])), l = d > 2 ? NR : DR, c = s = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (c || (c = l(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((s || (s = l(t, e.map(n), fl)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, dl), u()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = $d, u();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : kt, u()) : o !== kt;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, u()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, function(d, h) {
    return n = d, a = h, u();
  };
}
function Cd() {
  return pc()(kt, kt);
}
function RR(e) {
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
function kR(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, l = e[0], c = 0; a > 0 && l > 0 && (c + l + 1 > n && (l = Math.max(1, n - c)), i.push(r.substring(a -= l, a + l)), !((c += l + 1) > n)); )
      l = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function BR(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var LR = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ti(e) {
  if (!(t = LR.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Pd({
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
Ti.prototype = Pd.prototype;
function Pd(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Pd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function HR(e) {
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
var wb;
function FR(e, t) {
  var r = hl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (wb = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + hl(e, Math.max(0, t + i - 1))[0];
}
function av(e, t) {
  var r = hl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const iv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: RR,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => av(e * 100, t),
  r: av,
  s: FR,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ov(e) {
  return e;
}
var lv = Array.prototype.map, cv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function WR(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ov : kR(lv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? ov : BR(lv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(f) {
    f = Ti(f);
    var d = f.fill, h = f.align, v = f.sign, m = f.symbol, p = f.zero, y = f.width, x = f.comma, S = f.precision, O = f.trim, g = f.type;
    g === "n" ? (x = !0, g = "g") : iv[g] || (S === void 0 && (S = 12), O = !0, g = "g"), (p || d === "0" && h === "=") && (p = !0, d = "0", h = "=");
    var b = m === "$" ? r : m === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", $ = m === "$" ? n : /[%p]/.test(g) ? o : "", C = iv[g], _ = /[defgprs%]/.test(g);
    S = S === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function M(P) {
      var I = b, N = $, j, E, A;
      if (g === "c")
        N = C(P) + N, P = "";
      else {
        P = +P;
        var D = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? c : C(Math.abs(P), S), O && (P = HR(P)), D && +P == 0 && v !== "+" && (D = !1), I = (D ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + I, N = (g === "s" ? cv[8 + wb / 3] : "") + N + (D && v === "(" ? ")" : ""), _) {
          for (j = -1, E = P.length; ++j < E; )
            if (A = P.charCodeAt(j), 48 > A || A > 57) {
              N = (A === 46 ? a + P.slice(j + 1) : P.slice(j)) + N, P = P.slice(0, j);
              break;
            }
        }
      }
      x && !p && (P = t(P, 1 / 0));
      var R = I.length + P.length + N.length, k = R < y ? new Array(y - R + 1).join(d) : "";
      switch (x && p && (P = t(k + P, k.length ? y - N.length : 1 / 0), k = ""), h) {
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
    var h = s((f = Ti(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(na(d) / 3))) * 3, m = Math.pow(10, -v), p = cv[8 + v / 3];
    return function(y) {
      return h(m * y) + p;
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var Eo, _d, Sb;
VR({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function VR(e) {
  return Eo = WR(e), _d = Eo.format, Sb = Eo.formatPrefix, Eo;
}
function zR(e) {
  return Math.max(0, -na(Math.abs(e)));
}
function UR(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(na(t) / 3))) * 3 - na(Math.abs(e)));
}
function YR(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, na(t) - na(e)) + 1;
}
function Ob(e, t, r, n) {
  var a = ku(e, t, r), i;
  switch (n = Ti(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = UR(a, o)) && (n.precision = i), Sb(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = YR(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = zR(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return _d(n);
}
function nn(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Nu(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return Ob(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], l = n[i], c, s, u = 10;
    for (l < o && (s = o, o = l, l = s, s = a, a = i, i = s); u-- > 0; ) {
      if (s = Ru(o, l, r), s === c)
        return n[a] = o, n[i] = l, t(n);
      if (s > 0)
        o = Math.floor(o / s) * s, l = Math.ceil(l / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, l = Math.floor(l * s) / s;
      else
        break;
      c = s;
    }
    return e;
  }, e;
}
function pl() {
  var e = Cd();
  return e.copy = function() {
    return ao(e, pl());
  }, ar.apply(e, arguments), nn(e);
}
function $b(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, dl), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return $b(e).unknown(t);
  }, e = arguments.length ? Array.from(e, dl) : [0, 1], nn(r);
}
function Cb(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function sv(e) {
  return Math.log(e);
}
function uv(e) {
  return Math.exp(e);
}
function qR(e) {
  return -Math.log(-e);
}
function GR(e) {
  return -Math.exp(-e);
}
function KR(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function XR(e) {
  return e === 10 ? KR : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function ZR(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function fv(e) {
  return (t, r) => -e(-t, r);
}
function Ed(e) {
  const t = e(sv, uv), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = ZR(n), i = XR(n), r()[0] < 0 ? (a = fv(a), i = fv(i), e(qR, GR)) : e(sv, uv), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, o()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), o()) : r();
  }, t.ticks = (l) => {
    const c = r();
    let s = c[0], u = c[c.length - 1];
    const f = u < s;
    f && ([s, u] = [u, s]);
    let d = a(s), h = a(u), v, m;
    const p = l == null ? 10 : +l;
    let y = [];
    if (!(n % 1) && h - d < p) {
      if (d = Math.floor(d), h = Math.ceil(h), s > 0) {
        for (; d <= h; ++d)
          for (v = 1; v < n; ++v)
            if (m = d < 0 ? v / i(-d) : v * i(d), !(m < s)) {
              if (m > u) break;
              y.push(m);
            }
      } else for (; d <= h; ++d)
        for (v = n - 1; v >= 1; --v)
          if (m = d > 0 ? v / i(-d) : v * i(d), !(m < s)) {
            if (m > u) break;
            y.push(m);
          }
      y.length * 2 < p && (y = Nu(s, u, p));
    } else
      y = Nu(d, h, Math.min(h - d, p)).map(i);
    return f ? y.reverse() : y;
  }, t.tickFormat = (l, c) => {
    if (l == null && (l = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = Ti(c)).precision == null && (c.trim = !0), c = _d(c)), l === 1 / 0) return c;
    const s = Math.max(1, n * l / t.ticks().length);
    return (u) => {
      let f = u / i(Math.round(a(u)));
      return f * n < n - 0.5 && (f *= n), f <= s ? c(u) : "";
    };
  }, t.nice = () => r(Cb(r(), {
    floor: (l) => i(Math.floor(a(l))),
    ceil: (l) => i(Math.ceil(a(l)))
  })), t;
}
function Pb() {
  const e = Ed(pc()).domain([1, 10]);
  return e.copy = () => ao(e, Pb()).base(e.base()), ar.apply(e, arguments), e;
}
function dv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function hv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Ad(e) {
  var t = 1, r = e(dv(t), hv(t));
  return r.constant = function(n) {
    return arguments.length ? e(dv(t = +n), hv(t)) : t;
  }, nn(r);
}
function _b() {
  var e = Ad(pc());
  return e.copy = function() {
    return ao(e, _b()).constant(e.constant());
  }, ar.apply(e, arguments);
}
function pv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function QR(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function JR(e) {
  return e < 0 ? -e * e : e * e;
}
function Td(e) {
  var t = e(kt, kt), r = 1;
  function n() {
    return r === 1 ? e(kt, kt) : r === 0.5 ? e(QR, JR) : e(pv(r), pv(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, nn(t);
}
function Md() {
  var e = Td(pc());
  return e.copy = function() {
    return ao(e, Md()).exponent(e.exponent());
  }, ar.apply(e, arguments), e;
}
function ek() {
  return Md.apply(null, arguments).exponent(0.5);
}
function vv(e) {
  return Math.sign(e) * e * e;
}
function tk(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Eb() {
  var e = Cd(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = tk(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(vv(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, dl)).map(vv)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Eb(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ar.apply(a, arguments), nn(a);
}
function Ab() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++o < l; ) r[o - 1] = oR(e, o / l);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[ro(r, o)];
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
    return Ab().domain(e).range(t).unknown(n);
  }, ar.apply(i, arguments);
}
function Tb() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(c) {
    return c != null && c <= c ? a[ro(n, c, 0, r)] : i;
  }
  function l() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, l()) : [e, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (a = Array.from(c)).length - 1, l()) : a.slice();
  }, o.invertExtent = function(c) {
    var s = a.indexOf(c);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, o.unknown = function(c) {
    return arguments.length && (i = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Tb().domain([e, t]).range(a).unknown(i);
  }, ar.apply(nn(o), arguments);
}
function Mb() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[ro(e, i, 0, n)] : r;
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
    return Mb().domain(e).range(t).unknown(r);
  }, ar.apply(a, arguments);
}
const Ns = /* @__PURE__ */ new Date(), Rs = /* @__PURE__ */ new Date();
function bt(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), l = a.ceil(i);
    return i - o < l - i ? o : l;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, l) => {
    const c = [];
    if (i = a.ceil(i), l = l == null ? 1 : Math.floor(l), !(i < o) || !(l > 0)) return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+i)), t(i, l), e(i);
    while (s < i && i < o);
    return c;
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
  }), r && (a.count = (i, o) => (Ns.setTime(+i), Rs.setTime(+o), e(Ns), e(Rs), Math.floor(r(Ns, Rs))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const vl = bt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
vl.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? bt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : vl);
vl.range;
const Mr = 1e3, tr = Mr * 60, Ir = tr * 60, Lr = Ir * 24, Id = Lr * 7, mv = Lr * 30, ks = Lr * 365, xn = bt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Mr);
}, (e, t) => (t - e) / Mr, (e) => e.getUTCSeconds());
xn.range;
const jd = bt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mr);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getMinutes());
jd.range;
const Dd = bt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getUTCMinutes());
Dd.range;
const Nd = bt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mr - e.getMinutes() * tr);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getHours());
Nd.range;
const Rd = bt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCHours());
Rd.range;
const io = bt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * tr) / Lr,
  (e) => e.getDate() - 1
);
io.range;
const vc = bt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => e.getUTCDate() - 1);
vc.range;
const Ib = bt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => Math.floor(e / Lr));
Ib.range;
function Mn(e) {
  return bt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * tr) / Id);
}
const mc = Mn(0), ml = Mn(1), rk = Mn(2), nk = Mn(3), aa = Mn(4), ak = Mn(5), ik = Mn(6);
mc.range;
ml.range;
rk.range;
nk.range;
aa.range;
ak.range;
ik.range;
function In(e) {
  return bt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Id);
}
const gc = In(0), gl = In(1), ok = In(2), lk = In(3), ia = In(4), ck = In(5), sk = In(6);
gc.range;
gl.range;
ok.range;
lk.range;
ia.range;
ck.range;
sk.range;
const kd = bt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
kd.range;
const Bd = bt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Bd.range;
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
function jb(e, t, r, n, a, i) {
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
    [r, 1, Id],
    [t, 1, mv],
    [t, 3, 3 * mv],
    [e, 1, ks]
  ];
  function l(s, u, f) {
    const d = u < s;
    d && ([s, u] = [u, s]);
    const h = f && typeof f.range == "function" ? f : c(s, u, f), v = h ? h.range(s, +u + 1) : [];
    return d ? v.reverse() : v;
  }
  function c(s, u, f) {
    const d = Math.abs(u - s) / f, h = xd(([, , p]) => p).right(o, d);
    if (h === o.length) return e.every(ku(s / ks, u / ks, f));
    if (h === 0) return vl.every(Math.max(ku(s, u, f), 1));
    const [v, m] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return v.every(m);
  }
  return [l, c];
}
const [uk, fk] = jb(Fr, Bd, gc, Ib, Rd, Dd), [dk, hk] = jb(Hr, kd, mc, io, Nd, jd);
function Bs(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ls(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Xa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function pk(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, l = e.months, c = e.shortMonths, s = Za(a), u = Qa(a), f = Za(i), d = Qa(i), h = Za(o), v = Qa(o), m = Za(l), p = Qa(l), y = Za(c), x = Qa(c), S = {
    a: D,
    A: R,
    b: k,
    B: L,
    c: null,
    d: Sv,
    e: Sv,
    f: kk,
    g: qk,
    G: Kk,
    H: Dk,
    I: Nk,
    j: Rk,
    L: Db,
    m: Bk,
    M: Lk,
    p: H,
    q: B,
    Q: Cv,
    s: Pv,
    S: Hk,
    u: Fk,
    U: Wk,
    V: Vk,
    w: zk,
    W: Uk,
    x: null,
    X: null,
    y: Yk,
    Y: Gk,
    Z: Xk,
    "%": $v
  }, O = {
    a: W,
    A: z,
    b: G,
    B: Q,
    c: null,
    d: Ov,
    e: Ov,
    f: eB,
    g: uB,
    G: dB,
    H: Zk,
    I: Qk,
    j: Jk,
    L: Rb,
    m: tB,
    M: rB,
    p: ne,
    q: te,
    Q: Cv,
    s: Pv,
    S: nB,
    u: aB,
    U: iB,
    V: oB,
    w: lB,
    W: cB,
    x: null,
    X: null,
    y: sB,
    Y: fB,
    Z: hB,
    "%": $v
  }, g = {
    a: M,
    A: P,
    b: I,
    B: N,
    c: j,
    d: xv,
    e: xv,
    f: Tk,
    g: bv,
    G: yv,
    H: wv,
    I: wv,
    j: Pk,
    L: Ak,
    m: Ck,
    M: _k,
    p: _,
    q: $k,
    Q: Ik,
    s: jk,
    S: Ek,
    u: bk,
    U: xk,
    V: wk,
    w: yk,
    W: Sk,
    x: E,
    X: A,
    y: bv,
    Y: yv,
    Z: Ok,
    "%": Mk
  };
  S.x = b(r, S), S.X = b(n, S), S.c = b(t, S), O.x = b(r, O), O.X = b(n, O), O.c = b(t, O);
  function b(V, K) {
    return function(q) {
      var F = [], J = -1, Z = 0, le = V.length, re, ae, de;
      for (q instanceof Date || (q = /* @__PURE__ */ new Date(+q)); ++J < le; )
        V.charCodeAt(J) === 37 && (F.push(V.slice(Z, J)), (ae = gv[re = V.charAt(++J)]) != null ? re = V.charAt(++J) : ae = re === "e" ? " " : "0", (de = K[re]) && (re = de(q, ae)), F.push(re), Z = J + 1);
      return F.push(V.slice(Z, J)), F.join("");
    };
  }
  function $(V, K) {
    return function(q) {
      var F = Xa(1900, void 0, 1), J = C(F, V, q += "", 0), Z, le;
      if (J != q.length) return null;
      if ("Q" in F) return new Date(F.Q);
      if ("s" in F) return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (K && !("Z" in F) && (F.Z = 0), "p" in F && (F.H = F.H % 12 + F.p * 12), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
        if (F.V < 1 || F.V > 53) return null;
        "w" in F || (F.w = 1), "Z" in F ? (Z = Ls(Xa(F.y, 0, 1)), le = Z.getUTCDay(), Z = le > 4 || le === 0 ? gl.ceil(Z) : gl(Z), Z = vc.offset(Z, (F.V - 1) * 7), F.y = Z.getUTCFullYear(), F.m = Z.getUTCMonth(), F.d = Z.getUTCDate() + (F.w + 6) % 7) : (Z = Bs(Xa(F.y, 0, 1)), le = Z.getDay(), Z = le > 4 || le === 0 ? ml.ceil(Z) : ml(Z), Z = io.offset(Z, (F.V - 1) * 7), F.y = Z.getFullYear(), F.m = Z.getMonth(), F.d = Z.getDate() + (F.w + 6) % 7);
      } else ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), le = "Z" in F ? Ls(Xa(F.y, 0, 1)).getUTCDay() : Bs(Xa(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (le + 5) % 7 : F.w + F.U * 7 - (le + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, Ls(F)) : Bs(F);
    };
  }
  function C(V, K, q, F) {
    for (var J = 0, Z = K.length, le = q.length, re, ae; J < Z; ) {
      if (F >= le) return -1;
      if (re = K.charCodeAt(J++), re === 37) {
        if (re = K.charAt(J++), ae = g[re in gv ? K.charAt(J++) : re], !ae || (F = ae(V, q, F)) < 0) return -1;
      } else if (re != q.charCodeAt(F++))
        return -1;
    }
    return F;
  }
  function _(V, K, q) {
    var F = s.exec(K.slice(q));
    return F ? (V.p = u.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function M(V, K, q) {
    var F = h.exec(K.slice(q));
    return F ? (V.w = v.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function P(V, K, q) {
    var F = f.exec(K.slice(q));
    return F ? (V.w = d.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function I(V, K, q) {
    var F = y.exec(K.slice(q));
    return F ? (V.m = x.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function N(V, K, q) {
    var F = m.exec(K.slice(q));
    return F ? (V.m = p.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function j(V, K, q) {
    return C(V, t, K, q);
  }
  function E(V, K, q) {
    return C(V, r, K, q);
  }
  function A(V, K, q) {
    return C(V, n, K, q);
  }
  function D(V) {
    return o[V.getDay()];
  }
  function R(V) {
    return i[V.getDay()];
  }
  function k(V) {
    return c[V.getMonth()];
  }
  function L(V) {
    return l[V.getMonth()];
  }
  function H(V) {
    return a[+(V.getHours() >= 12)];
  }
  function B(V) {
    return 1 + ~~(V.getMonth() / 3);
  }
  function W(V) {
    return o[V.getUTCDay()];
  }
  function z(V) {
    return i[V.getUTCDay()];
  }
  function G(V) {
    return c[V.getUTCMonth()];
  }
  function Q(V) {
    return l[V.getUTCMonth()];
  }
  function ne(V) {
    return a[+(V.getUTCHours() >= 12)];
  }
  function te(V) {
    return 1 + ~~(V.getUTCMonth() / 3);
  }
  return {
    format: function(V) {
      var K = b(V += "", S);
      return K.toString = function() {
        return V;
      }, K;
    },
    parse: function(V) {
      var K = $(V += "", !1);
      return K.toString = function() {
        return V;
      }, K;
    },
    utcFormat: function(V) {
      var K = b(V += "", O);
      return K.toString = function() {
        return V;
      }, K;
    },
    utcParse: function(V) {
      var K = $(V += "", !0);
      return K.toString = function() {
        return V;
      }, K;
    }
  };
}
var gv = { "-": "", _: " ", 0: "0" }, $t = /^\s*\d+/, vk = /^%/, mk = /[\\^$*+?|[\]().{}]/g;
function ze(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function gk(e) {
  return e.replace(mk, "\\$&");
}
function Za(e) {
  return new RegExp("^(?:" + e.map(gk).join("|") + ")", "i");
}
function Qa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function yk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function bk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function xk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function wk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Sk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function yv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function bv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Ok(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function $k(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Ck(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function xv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Pk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function wv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function _k(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Ek(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Ak(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Tk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Mk(e, t, r) {
  var n = vk.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Ik(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function jk(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Sv(e, t) {
  return ze(e.getDate(), t, 2);
}
function Dk(e, t) {
  return ze(e.getHours(), t, 2);
}
function Nk(e, t) {
  return ze(e.getHours() % 12 || 12, t, 2);
}
function Rk(e, t) {
  return ze(1 + io.count(Hr(e), e), t, 3);
}
function Db(e, t) {
  return ze(e.getMilliseconds(), t, 3);
}
function kk(e, t) {
  return Db(e, t) + "000";
}
function Bk(e, t) {
  return ze(e.getMonth() + 1, t, 2);
}
function Lk(e, t) {
  return ze(e.getMinutes(), t, 2);
}
function Hk(e, t) {
  return ze(e.getSeconds(), t, 2);
}
function Fk(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Wk(e, t) {
  return ze(mc.count(Hr(e) - 1, e), t, 2);
}
function Nb(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? aa(e) : aa.ceil(e);
}
function Vk(e, t) {
  return e = Nb(e), ze(aa.count(Hr(e), e) + (Hr(e).getDay() === 4), t, 2);
}
function zk(e) {
  return e.getDay();
}
function Uk(e, t) {
  return ze(ml.count(Hr(e) - 1, e), t, 2);
}
function Yk(e, t) {
  return ze(e.getFullYear() % 100, t, 2);
}
function qk(e, t) {
  return e = Nb(e), ze(e.getFullYear() % 100, t, 2);
}
function Gk(e, t) {
  return ze(e.getFullYear() % 1e4, t, 4);
}
function Kk(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? aa(e) : aa.ceil(e), ze(e.getFullYear() % 1e4, t, 4);
}
function Xk(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ze(t / 60 | 0, "0", 2) + ze(t % 60, "0", 2);
}
function Ov(e, t) {
  return ze(e.getUTCDate(), t, 2);
}
function Zk(e, t) {
  return ze(e.getUTCHours(), t, 2);
}
function Qk(e, t) {
  return ze(e.getUTCHours() % 12 || 12, t, 2);
}
function Jk(e, t) {
  return ze(1 + vc.count(Fr(e), e), t, 3);
}
function Rb(e, t) {
  return ze(e.getUTCMilliseconds(), t, 3);
}
function eB(e, t) {
  return Rb(e, t) + "000";
}
function tB(e, t) {
  return ze(e.getUTCMonth() + 1, t, 2);
}
function rB(e, t) {
  return ze(e.getUTCMinutes(), t, 2);
}
function nB(e, t) {
  return ze(e.getUTCSeconds(), t, 2);
}
function aB(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function iB(e, t) {
  return ze(gc.count(Fr(e) - 1, e), t, 2);
}
function kb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ia(e) : ia.ceil(e);
}
function oB(e, t) {
  return e = kb(e), ze(ia.count(Fr(e), e) + (Fr(e).getUTCDay() === 4), t, 2);
}
function lB(e) {
  return e.getUTCDay();
}
function cB(e, t) {
  return ze(gl.count(Fr(e) - 1, e), t, 2);
}
function sB(e, t) {
  return ze(e.getUTCFullYear() % 100, t, 2);
}
function uB(e, t) {
  return e = kb(e), ze(e.getUTCFullYear() % 100, t, 2);
}
function fB(e, t) {
  return ze(e.getUTCFullYear() % 1e4, t, 4);
}
function dB(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ia(e) : ia.ceil(e), ze(e.getUTCFullYear() % 1e4, t, 4);
}
function hB() {
  return "+0000";
}
function $v() {
  return "%";
}
function Cv(e) {
  return +e;
}
function Pv(e) {
  return Math.floor(+e / 1e3);
}
var Bn, Bb, Lb;
pB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pB(e) {
  return Bn = pk(e), Bb = Bn.format, Bn.parse, Lb = Bn.utcFormat, Bn.utcParse, Bn;
}
function vB(e) {
  return new Date(e);
}
function mB(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ld(e, t, r, n, a, i, o, l, c, s) {
  var u = Cd(), f = u.invert, d = u.domain, h = s(".%L"), v = s(":%S"), m = s("%I:%M"), p = s("%I %p"), y = s("%a %d"), x = s("%b %d"), S = s("%B"), O = s("%Y");
  function g(b) {
    return (c(b) < b ? h : l(b) < b ? v : o(b) < b ? m : i(b) < b ? p : n(b) < b ? a(b) < b ? y : x : r(b) < b ? S : O)(b);
  }
  return u.invert = function(b) {
    return new Date(f(b));
  }, u.domain = function(b) {
    return arguments.length ? d(Array.from(b, mB)) : d().map(vB);
  }, u.ticks = function(b) {
    var $ = d();
    return e($[0], $[$.length - 1], b ?? 10);
  }, u.tickFormat = function(b, $) {
    return $ == null ? g : s($);
  }, u.nice = function(b) {
    var $ = d();
    return (!b || typeof b.range != "function") && (b = t($[0], $[$.length - 1], b ?? 10)), b ? d(Cb($, b)) : u;
  }, u.copy = function() {
    return ao(u, Ld(e, t, r, n, a, i, o, l, c, s));
  }, u;
}
function gB() {
  return ar.apply(Ld(dk, hk, Hr, kd, mc, io, Nd, jd, xn, Bb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function yB() {
  return ar.apply(Ld(uk, fk, Fr, Bd, gc, vc, Rd, Dd, xn, Lb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function yc() {
  var e = 0, t = 1, r, n, a, i, o = kt, l = !1, c;
  function s(f) {
    return f == null || isNaN(f = +f) ? c : o(a === 0 ? 0.5 : (f = (i(f) - r) * a, l ? Math.max(0, Math.min(1, f)) : f));
  }
  s.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), s) : [e, t];
  }, s.clamp = function(f) {
    return arguments.length ? (l = !!f, s) : l;
  }, s.interpolator = function(f) {
    return arguments.length ? (o = f, s) : o;
  };
  function u(f) {
    return function(d) {
      var h, v;
      return arguments.length ? ([h, v] = d, o = f(h, v), s) : [o(0), o(1)];
    };
  }
  return s.range = u(ka), s.rangeRound = u($d), s.unknown = function(f) {
    return arguments.length ? (c = f, s) : c;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), s;
  };
}
function an(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Hb() {
  var e = nn(yc()(kt));
  return e.copy = function() {
    return an(e, Hb());
  }, Ur.apply(e, arguments);
}
function Fb() {
  var e = Ed(yc()).domain([1, 10]);
  return e.copy = function() {
    return an(e, Fb()).base(e.base());
  }, Ur.apply(e, arguments);
}
function Wb() {
  var e = Ad(yc());
  return e.copy = function() {
    return an(e, Wb()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function Hd() {
  var e = Td(yc());
  return e.copy = function() {
    return an(e, Hd()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function bB() {
  return Hd.apply(null, arguments).exponent(0.5);
}
function Vb() {
  var e = [], t = kt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((ro(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (a, i) => iR(e, i / n));
  }, r.copy = function() {
    return Vb(t).domain(e);
  }, Ur.apply(r, arguments);
}
function bc() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, l, c, s = kt, u, f = !1, d;
  function h(m) {
    return isNaN(m = +m) ? d : (m = 0.5 + ((m = +u(m)) - i) * (n * m < n * i ? l : c), s(f ? Math.max(0, Math.min(1, m)) : m));
  }
  h.domain = function(m) {
    return arguments.length ? ([e, t, r] = m, a = u(e = +e), i = u(t = +t), o = u(r = +r), l = a === i ? 0 : 0.5 / (i - a), c = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(m) {
    return arguments.length ? (f = !!m, h) : f;
  }, h.interpolator = function(m) {
    return arguments.length ? (s = m, h) : s;
  };
  function v(m) {
    return function(p) {
      var y, x, S;
      return arguments.length ? ([y, x, S] = p, s = MR(m, [y, x, S]), h) : [s(0), s(0.5), s(1)];
    };
  }
  return h.range = v(ka), h.rangeRound = v($d), h.unknown = function(m) {
    return arguments.length ? (d = m, h) : d;
  }, function(m) {
    return u = m, a = m(e), i = m(t), o = m(r), l = a === i ? 0 : 0.5 / (i - a), c = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, h;
  };
}
function zb() {
  var e = nn(bc()(kt));
  return e.copy = function() {
    return an(e, zb());
  }, Ur.apply(e, arguments);
}
function Ub() {
  var e = Ed(bc()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return an(e, Ub()).base(e.base());
  }, Ur.apply(e, arguments);
}
function Yb() {
  var e = Ad(bc());
  return e.copy = function() {
    return an(e, Yb()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function Fd() {
  var e = Td(bc());
  return e.copy = function() {
    return an(e, Fd()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function xB() {
  return Fd.apply(null, arguments).exponent(0.5);
}
const _v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Pi,
  scaleDiverging: zb,
  scaleDivergingLog: Ub,
  scaleDivergingPow: Fd,
  scaleDivergingSqrt: xB,
  scaleDivergingSymlog: Yb,
  scaleIdentity: $b,
  scaleImplicit: Bu,
  scaleLinear: pl,
  scaleLog: Pb,
  scaleOrdinal: wd,
  scalePoint: di,
  scalePow: Md,
  scaleQuantile: Ab,
  scaleQuantize: Tb,
  scaleRadial: Eb,
  scaleSequential: Hb,
  scaleSequentialLog: Fb,
  scaleSequentialPow: Hd,
  scaleSequentialQuantile: Vb,
  scaleSequentialSqrt: bB,
  scaleSequentialSymlog: Wb,
  scaleSqrt: ek,
  scaleSymlog: _b,
  scaleThreshold: Mb,
  scaleTime: gB,
  scaleUtc: yB,
  tickFormat: Ob
}, Symbol.toStringTag, { value: "Module" }));
var wB = _a;
function SB(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n], o = t(i);
    if (o != null && (l === void 0 ? o === o && !wB(o) : r(o, l)))
      var l = o, c = i;
  }
  return c;
}
var xc = SB;
function OB(e, t) {
  return e > t;
}
var qb = OB, $B = xc, CB = qb, PB = Ra;
function _B(e) {
  return e && e.length ? $B(e, PB, CB) : void 0;
}
var EB = _B;
const Zr = /* @__PURE__ */ We(EB);
function AB(e, t) {
  return e < t;
}
var Gb = AB, TB = xc, MB = Gb, IB = Ra;
function jB(e) {
  return e && e.length ? TB(e, IB, MB) : void 0;
}
var DB = jB;
const wc = /* @__PURE__ */ We(DB);
var NB = rd, RB = rn, kB = tb, BB = zt;
function LB(e, t) {
  var r = BB(e) ? NB : kB;
  return r(e, RB(t));
}
var HB = LB, FB = Jy, WB = HB;
function VB(e, t) {
  return FB(WB(e, t), 1);
}
var zB = VB;
const UB = /* @__PURE__ */ We(zB);
var YB = md;
function qB(e, t) {
  return YB(e, t);
}
var GB = qB;
const oa = /* @__PURE__ */ We(GB);
var Ba = 1e9, KB = {
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
}, Vd, lt = !0, nr = "[DecimalError] ", $n = nr + "Invalid argument: ", Wd = nr + "Exponent out of range: ", La = Math.floor, mn = Math.pow, XB = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Gt, St = 1e7, it = 7, Kb = 9007199254740991, yl = La(Kb / it), se = {};
se.absoluteValue = se.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
se.comparedTo = se.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
se.decimalPlaces = se.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * it;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
se.dividedBy = se.div = function(e) {
  return Nr(this, new this.constructor(e));
};
se.dividedToIntegerBy = se.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ze(Nr(t, new r(e), 0, 1), r.precision);
};
se.equals = se.eq = function(e) {
  return !this.cmp(e);
};
se.exponent = function() {
  return dt(this);
};
se.greaterThan = se.gt = function(e) {
  return this.cmp(e) > 0;
};
se.greaterThanOrEqualTo = se.gte = function(e) {
  return this.cmp(e) >= 0;
};
se.isInteger = se.isint = function() {
  return this.e > this.d.length - 2;
};
se.isNegative = se.isneg = function() {
  return this.s < 0;
};
se.isPositive = se.ispos = function() {
  return this.s > 0;
};
se.isZero = function() {
  return this.s === 0;
};
se.lessThan = se.lt = function(e) {
  return this.cmp(e) < 0;
};
se.lessThanOrEqualTo = se.lte = function(e) {
  return this.cmp(e) < 1;
};
se.logarithm = se.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Gt)) throw Error(nr + "NaN");
  if (r.s < 1) throw Error(nr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Gt) ? new n(0) : (lt = !1, t = Nr(Mi(r, i), Mi(e, i), i), lt = !0, Ze(t, a));
};
se.minus = se.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Qb(t, e) : Xb(t, (e.s = -e.s, e));
};
se.modulo = se.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(nr + "NaN");
  return r.s ? (lt = !1, t = Nr(r, e, 0, 1).times(e), lt = !0, r.minus(t)) : Ze(new n(r), a);
};
se.naturalExponential = se.exp = function() {
  return Zb(this);
};
se.naturalLogarithm = se.ln = function() {
  return Mi(this);
};
se.negated = se.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
se.plus = se.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Xb(t, e) : Qb(t, (e.s = -e.s, e));
};
se.precision = se.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error($n + e);
  if (t = dt(a) + 1, n = a.d.length - 1, r = n * it + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
se.squareRoot = se.sqrt = function() {
  var e, t, r, n, a, i, o, l = this, c = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new c(0);
    throw Error(nr + "NaN");
  }
  for (e = dt(l), lt = !1, a = Math.sqrt(+l), a == 0 || a == 1 / 0 ? (t = br(l.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = La((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(a.toString()), r = c.precision, a = o = r + 3; ; )
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
se.times = se.mul = function(e) {
  var t, r, n, a, i, o, l, c, s, u = this, f = u.constructor, d = u.d, h = (e = new f(e)).d;
  if (!u.s || !e.s) return new f(0);
  for (e.s *= u.s, r = u.e + e.e, c = d.length, s = h.length, c < s && (i = d, d = h, h = i, o = c, c = s, s = o), i = [], o = c + s, n = o; n--; ) i.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, a = c + n; a > n; )
      l = i[a] + h[n] * d[a - n - 1] + t, i[a--] = l % St | 0, t = l / St | 0;
    i[a] = (i[a] + t) % St | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, lt ? Ze(e, f.precision) : e;
};
se.toDecimalPlaces = se.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Cr(e, 0, Ba), t === void 0 ? t = n.rounding : Cr(t, 0, 8), Ze(r, e + dt(r) + 1, t));
};
se.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = _n(n, !0) : (Cr(e, 0, Ba), t === void 0 ? t = a.rounding : Cr(t, 0, 8), n = Ze(new a(n), e + 1, t), r = _n(n, !0, e + 1)), r;
};
se.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? _n(a) : (Cr(e, 0, Ba), t === void 0 ? t = i.rounding : Cr(t, 0, 8), n = Ze(new i(a), e + dt(a) + 1, t), r = _n(n.abs(), !1, e + dt(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
se.toInteger = se.toint = function() {
  var e = this, t = e.constructor;
  return Ze(new t(e), dt(e) + 1, t.rounding);
};
se.toNumber = function() {
  return +this;
};
se.toPower = se.pow = function(e) {
  var t, r, n, a, i, o, l = this, c = l.constructor, s = 12, u = +(e = new c(e));
  if (!e.s) return new c(Gt);
  if (l = new c(l), !l.s) {
    if (e.s < 1) throw Error(nr + "Infinity");
    return l;
  }
  if (l.eq(Gt)) return l;
  if (n = c.precision, e.eq(Gt)) return Ze(l, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = l.s, o) {
    if ((r = u < 0 ? -u : u) <= Kb) {
      for (a = new c(Gt), t = Math.ceil(n / it + 4), lt = !1; r % 2 && (a = a.times(l), Av(a.d, t)), r = La(r / 2), r !== 0; )
        l = l.times(l), Av(l.d, t);
      return lt = !0, e.s < 0 ? new c(Gt).div(a) : Ze(a, n);
    }
  } else if (i < 0) throw Error(nr + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, lt = !1, a = e.times(Mi(l, n + s)), lt = !0, a = Zb(a), a.s = i, a;
};
se.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = dt(a), n = _n(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Cr(e, 1, Ba), t === void 0 ? t = i.rounding : Cr(t, 0, 8), a = Ze(new i(a), e, t), r = dt(a), n = _n(a, e <= r || r <= i.toExpNeg, e)), n;
};
se.toSignificantDigits = se.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Cr(e, 1, Ba), t === void 0 ? t = n.rounding : Cr(t, 0, 8)), Ze(new n(r), e, t);
};
se.toString = se.valueOf = se.val = se.toJSON = se[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = dt(e), r = e.constructor;
  return _n(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Xb(e, t) {
  var r, n, a, i, o, l, c, s, u = e.constructor, f = u.precision;
  if (!e.s || !t.s)
    return t.s || (t = new u(e)), lt ? Ze(t, f) : t;
  if (c = e.d, s = t.d, o = e.e, a = t.e, c = c.slice(), i = o - a, i) {
    for (i < 0 ? (n = c, i = -i, l = s.length) : (n = s, a = o, l = c.length), o = Math.ceil(f / it), l = o > l ? o + 1 : l + 1, i > l && (i = l, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (l = c.length, i = s.length, l - i < 0 && (i = l, n = s, s = c, c = n), r = 0; i; )
    r = (c[--i] = c[i] + s[i] + r) / St | 0, c[i] %= St;
  for (r && (c.unshift(r), ++a), l = c.length; c[--l] == 0; ) c.pop();
  return t.d = c, t.e = a, lt ? Ze(t, f) : t;
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
    var l, c;
    if (i != o)
      c = i > o ? 1 : -1;
    else
      for (l = c = 0; l < i; l++)
        if (n[l] != a[l]) {
          c = n[l] > a[l] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * St + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var l, c, s, u, f, d, h, v, m, p, y, x, S, O, g, b, $, C, _ = n.constructor, M = n.s == a.s ? 1 : -1, P = n.d, I = a.d;
    if (!n.s) return new _(n);
    if (!a.s) throw Error(nr + "Division by zero");
    for (c = n.e - a.e, $ = I.length, g = P.length, h = new _(M), v = h.d = [], s = 0; I[s] == (P[s] || 0); ) ++s;
    if (I[s] > (P[s] || 0) && --c, i == null ? x = i = _.precision : o ? x = i + (dt(n) - dt(a)) + 1 : x = i, x < 0) return new _(0);
    if (x = x / it + 2 | 0, s = 0, $ == 1)
      for (u = 0, I = I[0], x++; (s < g || u) && x--; s++)
        S = u * St + (P[s] || 0), v[s] = S / I | 0, u = S % I | 0;
    else {
      for (u = St / (I[0] + 1) | 0, u > 1 && (I = e(I, u), P = e(P, u), $ = I.length, g = P.length), O = $, m = P.slice(0, $), p = m.length; p < $; ) m[p++] = 0;
      C = I.slice(), C.unshift(0), b = I[0], I[1] >= St / 2 && ++b;
      do
        u = 0, l = t(I, m, $, p), l < 0 ? (y = m[0], $ != p && (y = y * St + (m[1] || 0)), u = y / b | 0, u > 1 ? (u >= St && (u = St - 1), f = e(I, u), d = f.length, p = m.length, l = t(f, m, d, p), l == 1 && (u--, r(f, $ < d ? C : I, d))) : (u == 0 && (l = u = 1), f = I.slice()), d = f.length, d < p && f.unshift(0), r(m, f, p), l == -1 && (p = m.length, l = t(I, m, $, p), l < 1 && (u++, r(m, $ < p ? C : I, p))), p = m.length) : l === 0 && (u++, m = [0]), v[s++] = u, l && m[0] ? m[p++] = P[O] || 0 : (m = [P[O]], p = 1);
      while ((O++ < g || m[0] !== void 0) && x--);
    }
    return v[0] || v.shift(), h.e = c, Ze(h, o ? i + dt(h) + 1 : i);
  };
}();
function Zb(e, t) {
  var r, n, a, i, o, l, c = 0, s = 0, u = e.constructor, f = u.precision;
  if (dt(e) > 16) throw Error(Wd + dt(e));
  if (!e.s) return new u(Gt);
  for (t == null ? (lt = !1, l = f) : l = t, o = new u(0.03125); e.abs().gte(0.1); )
    e = e.times(o), s += 5;
  for (n = Math.log(mn(2, s)) / Math.LN10 * 2 + 5 | 0, l += n, r = a = i = new u(Gt), u.precision = l; ; ) {
    if (a = Ze(a.times(e), l), r = r.times(++c), o = i.plus(Nr(a, r, l)), br(o.d).slice(0, l) === br(i.d).slice(0, l)) {
      for (; s--; ) i = Ze(i.times(i), l);
      return u.precision = f, t == null ? (lt = !0, Ze(i, f)) : i;
    }
    i = o;
  }
}
function dt(e) {
  for (var t = e.e * it, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Hs(e, t, r) {
  if (t > e.LN10.sd())
    throw lt = !0, r && (e.precision = r), Error(nr + "LN10 precision limit exceeded");
  return Ze(new e(e.LN10), t);
}
function Xr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Mi(e, t) {
  var r, n, a, i, o, l, c, s, u, f = 1, d = 10, h = e, v = h.d, m = h.constructor, p = m.precision;
  if (h.s < 1) throw Error(nr + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Gt)) return new m(0);
  if (t == null ? (lt = !1, s = p) : s = t, h.eq(10))
    return t == null && (lt = !0), Hs(m, s);
  if (s += d, m.precision = s, r = br(v), n = r.charAt(0), i = dt(h), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = br(h.d), n = r.charAt(0), f++;
    i = dt(h), n > 1 ? (h = new m("0." + r), i++) : h = new m(n + "." + r.slice(1));
  } else
    return c = Hs(m, s + 2, p).times(i + ""), h = Mi(new m(n + "." + r.slice(1)), s - d).plus(c), m.precision = p, t == null ? (lt = !0, Ze(h, p)) : h;
  for (l = o = h = Nr(h.minus(Gt), h.plus(Gt), s), u = Ze(h.times(h), s), a = 3; ; ) {
    if (o = Ze(o.times(u), s), c = l.plus(Nr(o, new m(a), s)), br(c.d).slice(0, s) === br(l.d).slice(0, s))
      return l = l.times(2), i !== 0 && (l = l.plus(Hs(m, s + 2, p).times(i + ""))), l = Nr(l, new m(f), s), m.precision = p, t == null ? (lt = !0, Ze(l, p)) : l;
    l = c, a += 2;
  }
}
function Ev(e, t) {
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
    if (e.d.push(+t), lt && (e.e > yl || e.e < -yl)) throw Error(Wd + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ze(e, t, r) {
  var n, a, i, o, l, c, s, u, f = e.d;
  for (o = 1, i = f[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += it, a = t, s = f[u = 0];
  else {
    if (u = Math.ceil((n + 1) / it), i = f.length, u >= i) return e;
    for (s = i = f[u], o = 1; i >= 10; i /= 10) o++;
    n %= it, a = n - it + o;
  }
  if (r !== void 0 && (i = mn(10, o - a - 1), l = s / i % 10 | 0, c = t < 0 || f[u + 1] !== void 0 || s % i, c = r < 4 ? (l || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? s / mn(10, o - a) : 0 : f[u - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return c ? (i = dt(e), f.length = 1, t = t - i - 1, f[0] = mn(10, (it - t % it) % it), e.e = La(-t / it) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = u, i = 1, u--) : (f.length = u + 1, i = mn(10, it - n), f[u] = a > 0 ? (s / mn(10, o - a) % mn(10, a) | 0) * i : 0), c)
    for (; ; )
      if (u == 0) {
        (f[0] += i) == St && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[u] += i, f[u] != St) break;
        f[u--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (lt && (e.e > yl || e.e < -yl))
    throw Error(Wd + dt(e));
  return e;
}
function Qb(e, t) {
  var r, n, a, i, o, l, c, s, u, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), lt ? Ze(t, h) : t;
  if (c = e.d, f = t.d, n = t.e, s = e.e, c = c.slice(), o = s - n, o) {
    for (u = o < 0, u ? (r = c, o = -o, l = f.length) : (r = f, n = s, l = c.length), a = Math.max(Math.ceil(h / it), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = c.length, l = f.length, u = a < l, u && (l = a), a = 0; a < l; a++)
      if (c[a] != f[a]) {
        u = c[a] < f[a];
        break;
      }
    o = 0;
  }
  for (u && (r = c, c = f, f = r, t.s = -t.s), l = c.length, a = f.length - l; a > 0; --a) c[l++] = 0;
  for (a = f.length; a > o; ) {
    if (c[--a] < f[a]) {
      for (i = a; i && c[--i] === 0; ) c[i] = St - 1;
      --c[i], c[a] += St;
    }
    c[a] -= f[a];
  }
  for (; c[--l] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, lt ? Ze(t, h) : t) : new d(0);
}
function _n(e, t, r) {
  var n, a = dt(e), i = br(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Xr(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + Xr(-a - 1) + i, r && (n = r - o) > 0 && (i += Xr(n))) : a >= o ? (i += Xr(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + Xr(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += Xr(n))), e.s < 0 ? "-" + i : i;
}
function Av(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Jb(e) {
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
      return Ev(o, i.toString());
    } else if (typeof i != "string")
      throw Error($n + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, XB.test(i)) Ev(o, i);
    else throw Error($n + i);
  }
  if (a.prototype = se, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = Jb, a.config = a.set = ZB, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function ZB(e) {
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
var Vd = Jb(KB);
Gt = new Vd(1);
const qe = Vd;
function QB(e) {
  return rL(e) || tL(e) || eL(e) || JB();
}
function JB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eL(e, t) {
  if (e) {
    if (typeof e == "string") return Wu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wu(e, t);
  }
}
function tL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function rL(e) {
  if (Array.isArray(e)) return Wu(e);
}
function Wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var nL = function(t) {
  return t;
}, e0 = {
  "@@functional/placeholder": !0
}, t0 = function(t) {
  return t === e0;
}, Tv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && t0(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, aL = function e(t, r) {
  return t === 1 ? r : Tv(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(l) {
      return l !== e0;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, Tv(function() {
      for (var l = arguments.length, c = new Array(l), s = 0; s < l; s++)
        c[s] = arguments[s];
      var u = a.map(function(f) {
        return t0(f) ? c.shift() : f;
      });
      return r.apply(void 0, QB(u).concat(c));
    }));
  });
}, Sc = function(t) {
  return aL(t.length, t);
}, Vu = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, iL = Sc(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), oL = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return nL;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(l, c) {
      return c(l);
    }, i.apply(void 0, arguments));
  };
}, zu = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, r0 = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(l, c) {
      return l === r[c];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function lL(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new qe(e).abs().log(10).toNumber()) + 1, t;
}
function cL(e, t, r) {
  for (var n = new qe(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var sL = Sc(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), uL = Sc(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), fL = Sc(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Oc = {
  rangeStep: cL,
  getDigitCount: lL,
  interpolateNumber: sL,
  uninterpolateNumber: uL,
  uninterpolateTruncation: fL
};
function Uu(e) {
  return pL(e) || hL(e) || n0(e) || dL();
}
function dL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function pL(e) {
  if (Array.isArray(e)) return Yu(e);
}
function Ii(e, t) {
  return gL(e) || mL(e, t) || n0(e, t) || vL();
}
function vL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n0(e, t) {
  if (e) {
    if (typeof e == "string") return Yu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yu(e, t);
  }
}
function Yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function mL(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = e[Symbol.iterator](), l; !(n = (l = o.next()).done) && (r.push(l.value), !(t && r.length === t)); n = !0)
        ;
    } catch (c) {
      a = !0, i = c;
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
function gL(e) {
  if (Array.isArray(e)) return e;
}
function a0(e) {
  var t = Ii(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function i0(e, t, r) {
  if (e.lte(0))
    return new qe(0);
  var n = Oc.getDigitCount(e.toNumber()), a = new qe(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, l = new qe(Math.ceil(i.div(o).toNumber())).add(r).mul(o), c = l.mul(a);
  return t ? c : new qe(Math.ceil(c));
}
function yL(e, t, r) {
  var n = 1, a = new qe(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new qe(10).pow(Oc.getDigitCount(e) - 1), a = new qe(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new qe(Math.floor(e)));
  } else e === 0 ? a = new qe(Math.floor((t - 1) / 2)) : r || (a = new qe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), l = oL(iL(function(c) {
    return a.add(new qe(c - o).mul(n)).toNumber();
  }), Vu);
  return l(0, t);
}
function o0(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new qe(0),
      tickMin: new qe(0),
      tickMax: new qe(0)
    };
  var i = i0(new qe(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new qe(0) : (o = new qe(e).add(t).div(2), o = o.sub(new qe(o).mod(i)));
  var l = Math.ceil(o.sub(e).div(i).toNumber()), c = Math.ceil(new qe(t).sub(o).div(i).toNumber()), s = l + c + 1;
  return s > r ? o0(e, t, r, n, a + 1) : (s < r && (c = t > 0 ? c + (r - s) : c, l = t > 0 ? l : l + (r - s)), {
    step: i,
    tickMin: o.sub(new qe(l).mul(i)),
    tickMax: o.add(new qe(c).mul(i))
  });
}
function bL(e) {
  var t = Ii(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), l = a0([r, n]), c = Ii(l, 2), s = c[0], u = c[1];
  if (s === -1 / 0 || u === 1 / 0) {
    var f = u === 1 / 0 ? [s].concat(Uu(Vu(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Uu(Vu(0, a - 1).map(function() {
      return -1 / 0;
    })), [u]);
    return r > n ? zu(f) : f;
  }
  if (s === u)
    return yL(s, a, i);
  var d = o0(s, u, o, i), h = d.step, v = d.tickMin, m = d.tickMax, p = Oc.rangeStep(v, m.add(new qe(0.1).mul(h)), h);
  return r > n ? zu(p) : p;
}
function xL(e, t) {
  var r = Ii(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = a0([n, a]), l = Ii(o, 2), c = l[0], s = l[1];
  if (c === -1 / 0 || s === 1 / 0)
    return [n, a];
  if (c === s)
    return [c];
  var u = Math.max(t, 2), f = i0(new qe(s).sub(c).div(u - 1), i, 0), d = [].concat(Uu(Oc.rangeStep(new qe(c), new qe(s).sub(new qe(0.99).mul(f)), f)), [s]);
  return n > a ? zu(d) : d;
}
var wL = r0(bL), SL = r0(xL), OL = Oe.env.NODE_ENV === "production", Fs = "Invariant failed";
function Ft(e, t) {
  if (OL)
    throw new Error(Fs);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Fs, ": ").concat(r) : Fs;
  throw new Error(n);
}
var $L = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
}
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bl.apply(this, arguments);
}
function CL(e, t) {
  return AL(e) || EL(e, t) || _L(e, t) || PL();
}
function PL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _L(e, t) {
  if (e) {
    if (typeof e == "string") return Mv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mv(e, t);
  }
}
function Mv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function EL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function AL(e) {
  if (Array.isArray(e)) return e;
}
function TL(e, t) {
  if (e == null) return {};
  var r = ML(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ML(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function IL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s0(n.key), n);
  }
}
function DL(e, t, r) {
  return t && jL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NL(e, t, r) {
  return t = xl(t), RL(e, l0() ? Reflect.construct(t, r || [], xl(e).constructor) : t.apply(e, r));
}
function RL(e, t) {
  if (t && (la(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kL(e);
}
function kL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function l0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (l0 = function() {
    return !!e;
  })();
}
function xl(e) {
  return xl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xl(e);
}
function BL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qu(e, t);
}
function qu(e, t) {
  return qu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, qu(e, t);
}
function c0(e, t, r) {
  return t = s0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s0(e) {
  var t = LL(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function LL(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $c = /* @__PURE__ */ function(e) {
  function t() {
    return IL(this, t), NL(this, t, arguments);
  }
  return BL(t, e), DL(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, l = n.dataKey, c = n.data, s = n.dataPointFormatter, u = n.xAxis, f = n.yAxis, d = TL(n, $L), h = me(d, !1);
      this.props.direction === "x" && u.type !== "number" && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'ErrorBar requires Axis type property to be "number".') : Ft());
      var v = c.map(function(m) {
        var p = s(m, l), y = p.x, x = p.y, S = p.value, O = p.errorVal;
        if (!O)
          return null;
        var g = [], b, $;
        if (Array.isArray(O)) {
          var C = CL(O, 2);
          b = C[0], $ = C[1];
        } else
          b = $ = O;
        if (i === "vertical") {
          var _ = u.scale, M = x + a, P = M + o, I = M - o, N = _(S - b), j = _(S + $);
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
          var E = f.scale, A = y + a, D = A - o, R = A + o, k = E(S - b), L = E(S + $);
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
        return /* @__PURE__ */ T.createElement(Fe, bl({
          className: "recharts-errorBar",
          key: "bar-".concat(g.map(function(H) {
            return "".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2);
          }))
        }, h), g.map(function(H) {
          return /* @__PURE__ */ T.createElement("line", bl({}, H, {
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
c0($c, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
c0($c, "displayName", "ErrorBar");
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function Iv(e, t) {
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
    t % 2 ? Iv(Object(r), !0).forEach(function(n) {
      HL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HL(e, t, r) {
  return t = FL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FL(e) {
  var t = WL(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function WL(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var u0 = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = qt(r, qn);
  if (!o)
    return null;
  var l = qn.defaultProps, c = l !== void 0 ? un(un({}, l), o.props) : {}, s;
  return o.props && o.props.payload ? s = o.props && o.props.payload : i === "children" ? s = (n || []).reduce(function(u, f) {
    var d = f.item, h = f.props, v = h.sectors || h.data || [];
    return u.concat(v.map(function(m) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: m.name,
        color: m.fill,
        payload: m
      };
    }));
  }, []) : s = (n || []).map(function(u) {
    var f = u.item, d = f.type.defaultProps, h = d !== void 0 ? un(un({}, d), f.props) : {}, v = h.dataKey, m = h.name, p = h.legendType, y = h.hide;
    return {
      inactive: y,
      dataKey: v,
      type: c.iconType || p || "square",
      color: zd(f),
      value: m || v,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: h
    };
  }), un(un(un({}, c), qn.getWithHeight(o, a)), {}, {
    payload: s,
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
function jv(e) {
  return YL(e) || UL(e) || zL(e) || VL();
}
function VL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zL(e, t) {
  if (e) {
    if (typeof e == "string") return Gu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gu(e, t);
  }
}
function UL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function YL(e) {
  if (Array.isArray(e)) return Gu(e);
}
function Gu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dv(Object(r), !0).forEach(function(n) {
      Kn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kn(e, t, r) {
  return t = qL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qL(e) {
  var t = GL(e, "string");
  return Di(t) == "symbol" ? t : t + "";
}
function GL(e, t) {
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
  return Ee(e) || Ee(t) ? r : gt(t) ? Xt(e, t, r) : Ce(t) ? t(e) : r;
}
function hi(e, t, r, n) {
  var a = UB(e, function(l) {
    return mt(l, t);
  });
  if (r === "number") {
    var i = a.filter(function(l) {
      return ee(l) || parseFloat(l);
    });
    return i.length ? [wc(i), Zr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(l) {
    return !Ee(l);
  }) : a;
  return o.map(function(l) {
    return gt(l) || l instanceof Date ? l : "";
  });
}
var KL = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, l = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (l <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var c = i.range, s = 0; s < l; s++) {
      var u = s > 0 ? a[s - 1].coordinate : a[l - 1].coordinate, f = a[s].coordinate, d = s >= l - 1 ? a[0].coordinate : a[s + 1].coordinate, h = void 0;
      if (Nt(f - u) !== Nt(d - f)) {
        var v = [];
        if (Nt(d - f) === Nt(c[1] - c[0])) {
          h = d;
          var m = f + c[1] - c[0];
          v[0] = Math.min(m, (m + u) / 2), v[1] = Math.max(m, (m + u) / 2);
        } else {
          h = u;
          var p = d + c[1] - c[0];
          v[0] = Math.min(f, (p + f) / 2), v[1] = Math.max(f, (p + f) / 2);
        }
        var y = [Math.min(f, (h + f) / 2), Math.max(f, (h + f) / 2)];
        if (t > y[0] && t <= y[1] || t >= v[0] && t <= v[1]) {
          o = a[s].index;
          break;
        }
      } else {
        var x = Math.min(u, d), S = Math.max(u, d);
        if (t > (x + f) / 2 && t <= (S + f) / 2) {
          o = a[s].index;
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
}, zd = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ct(ct({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, l = i.fill, c;
  switch (a) {
    case "Line":
      c = o;
      break;
    case "Area":
    case "Radar":
      c = o && o !== "none" ? o : l;
      break;
    default:
      c = l;
      break;
  }
  return c;
}, XL = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, l = Object.keys(i), c = 0, s = l.length; c < s; c++)
    for (var u = i[l[c]].stackGroups, f = Object.keys(u), d = 0, h = f.length; d < h; d++) {
      var v = u[f[d]], m = v.items, p = v.cateAxisId, y = m.filter(function($) {
        return jr($.type).indexOf("Bar") >= 0;
      });
      if (y && y.length) {
        var x = y[0].type.defaultProps, S = x !== void 0 ? ct(ct({}, x), y[0].props) : y[0].props, O = S.barSize, g = S[p];
        o[g] || (o[g] = []);
        var b = Ee(O) ? r : O;
        o[g].push({
          item: y[0],
          stackList: y.slice(1),
          barSize: Ee(b) ? void 0 : Rt(b, n, 0)
        });
      }
    }
  return o;
}, ZL = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, l = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var s = Rt(r, a, 0, !0), u, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, h = a / c, v = o.reduce(function(O, g) {
      return O + g.barSize || 0;
    }, 0);
    v += (c - 1) * s, v >= a && (v -= (c - 1) * s, s = 0), v >= a && h > 0 && (d = !0, h *= 0.9, v = c * h);
    var m = (a - v) / 2 >> 0, p = {
      offset: m - s,
      size: 0
    };
    u = o.reduce(function(O, g) {
      var b = {
        item: g.item,
        position: {
          offset: p.offset + p.size + s,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? h : g.barSize
        }
      }, $ = [].concat(jv(O), [b]);
      return p = $[$.length - 1].position, g.stackList && g.stackList.length && g.stackList.forEach(function(C) {
        $.push({
          item: C,
          position: p
        });
      }), $;
    }, f);
  } else {
    var y = Rt(n, a, 0, !0);
    a - 2 * y - (c - 1) * s <= 0 && (s = 0);
    var x = (a - 2 * y - (c - 1) * s) / c;
    x > 1 && (x >>= 0);
    var S = l === +l ? Math.min(x, l) : x;
    u = o.reduce(function(O, g, b) {
      var $ = [].concat(jv(O), [{
        item: g.item,
        position: {
          offset: y + (x + s) * b + (x - S) / 2,
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
}, QL = function(t, r, n, a) {
  var i = n.children, o = n.width, l = n.margin, c = o - (l.left || 0) - (l.right || 0), s = u0({
    children: i,
    legendWidth: c
  });
  if (s) {
    var u = a || {}, f = u.width, d = u.height, h = s.align, v = s.verticalAlign, m = s.layout;
    if ((m === "vertical" || m === "horizontal" && v === "middle") && h !== "center" && ee(t[h]))
      return ct(ct({}, t), {}, Kn({}, h, t[h] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && h === "center") && v !== "middle" && ee(t[v]))
      return ct(ct({}, t), {}, Kn({}, v, t[v] + (d || 0)));
  }
  return t;
}, JL = function(t, r, n) {
  return Ee(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, f0 = function(t, r, n, a, i) {
  var o = r.props.children, l = rr(o, $c).filter(function(s) {
    return JL(a, i, s.props.direction);
  });
  if (l && l.length) {
    var c = l.map(function(s) {
      return s.props.dataKey;
    });
    return t.reduce(function(s, u) {
      var f = mt(u, n);
      if (Ee(f)) return s;
      var d = Array.isArray(f) ? [wc(f), Zr(f)] : [f, f], h = c.reduce(function(v, m) {
        var p = mt(u, m, 0), y = d[0] - Math.abs(Array.isArray(p) ? p[0] : p), x = d[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(y, v[0]), Math.max(x, v[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], s[0]), Math.max(h[1], s[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, eH = function(t, r, n, a, i) {
  var o = r.map(function(l) {
    return f0(t, l, n, i, a);
  }).filter(function(l) {
    return !Ee(l);
  });
  return o && o.length ? o.reduce(function(l, c) {
    return [Math.min(l[0], c[0]), Math.max(l[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, d0 = function(t, r, n, a, i) {
  var o = r.map(function(c) {
    var s = c.props.dataKey;
    return n === "number" && s && f0(t, c, s, a) || hi(t, s, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(c, s) {
        return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
      },
      [1 / 0, -1 / 0]
    );
  var l = {};
  return o.reduce(function(c, s) {
    for (var u = 0, f = s.length; u < f; u++)
      l[s[u]] || (l[s[u]] = !0, c.push(s[u]));
    return c;
  }, []);
}, h0 = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, wn = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, l = t.range, c = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, s = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / c : 0;
  if (s = t.axisType === "angleAxis" && (l == null ? void 0 : l.length) >= 2 ? Nt(l[0] - l[1]) * 2 * s : s, r && (t.ticks || t.niceTicks)) {
    var u = (t.ticks || t.niceTicks).map(function(f) {
      var d = i ? i.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + s,
        value: f,
        offset: s
      };
    });
    return u.filter(function(f) {
      return !Ia(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: a(f) + s,
      value: f,
      index: d,
      offset: s
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: a(f) + s,
      value: f,
      offset: s
    };
  }) : a.domain().map(function(f, d) {
    return {
      coordinate: a(f) + s,
      value: i ? i[f] : f,
      index: d,
      offset: s
    };
  });
}, Ws = /* @__PURE__ */ new WeakMap(), Ao = function(t, r) {
  if (typeof r != "function")
    return t;
  Ws.has(t) || Ws.set(t, /* @__PURE__ */ new WeakMap());
  var n = Ws.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, p0 = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, l = t.axisType;
  if (a === "auto")
    return o === "radial" && l === "radiusAxis" ? {
      scale: Pi(),
      realScaleType: "band"
    } : o === "radial" && l === "angleAxis" ? {
      scale: pl(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: di(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: Pi(),
      realScaleType: "band"
    } : {
      scale: pl(),
      realScaleType: "linear"
    };
  if (to(a)) {
    var c = "scale".concat(oc(a));
    return {
      scale: (_v[c] || di)(),
      realScaleType: _v[c] ? c : "point"
    };
  }
  return Ce(a) ? {
    scale: a
  } : {
    scale: di(),
    realScaleType: "point"
  };
}, Nv = 1e-4, v0 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - Nv, o = Math.max(a[0], a[1]) + Nv, l = t(r[0]), c = t(r[n - 1]);
    (l < i || l > o || c < i || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, tH = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, rH = function(t, r) {
  if (!r || r.length !== 2 || !ee(r[0]) || !ee(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!ee(t[0]) || t[0] < n) && (i[0] = n), (!ee(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, nH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, l = 0; l < r; ++l) {
        var c = Ia(t[l][n][1]) ? t[l][n][0] : t[l][n][1];
        c >= 0 ? (t[l][n][0] = i, t[l][n][1] = i + c, i = t[l][n][1]) : (t[l][n][0] = o, t[l][n][1] = o + c, o = t[l][n][1]);
      }
}, aH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var l = Ia(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        l >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + l, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, iH = {
  sign: nH,
  // @ts-expect-error definitelytyped types are incorrect
  expand: O_,
  // @ts-expect-error definitelytyped types are incorrect
  none: Qn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: $_,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: C_,
  positive: aH
}, oH = function(t, r, n) {
  var a = r.map(function(l) {
    return l.props.dataKey;
  }), i = iH[n], o = S_().keys(a).value(function(l, c) {
    return +mt(l, c, 0);
  }).order(bu).offset(i);
  return o(t);
}, lH = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var l = o ? r.reverse() : r, c = {}, s = l.reduce(function(f, d) {
    var h, v = (h = d.type) !== null && h !== void 0 && h.defaultProps ? ct(ct({}, d.type.defaultProps), d.props) : d.props, m = v.stackId, p = v.hide;
    if (p)
      return f;
    var y = v[n], x = f[y] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (gt(m)) {
      var S = x.stackGroups[m] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      S.items.push(d), x.hasStack = !0, x.stackGroups[m] = S;
    } else
      x.stackGroups[ja("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return ct(ct({}, f), {}, Kn({}, y, x));
  }, c), u = {};
  return Object.keys(s).reduce(function(f, d) {
    var h = s[d];
    if (h.hasStack) {
      var v = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(m, p) {
        var y = h.stackGroups[p];
        return ct(ct({}, m), {}, Kn({}, p, {
          numericAxisId: n,
          cateAxisId: a,
          items: y.items,
          stackedData: oH(t, y.items, i)
        }));
      }, v);
    }
    return ct(ct({}, f), {}, Kn({}, d, h));
  }, u);
}, m0 = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, l = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var s = t.domain();
    if (!s.length)
      return null;
    var u = wL(s, i, l);
    return t.domain([wc(u), Zr(u)]), {
      niceTicks: u
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = SL(f, i, l);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Rv(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ee(a[t.dataKey])) {
      var l = qo(r, "value", a[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var c = mt(a, Ee(o) ? t.dataKey : o);
  return Ee(c) ? null : t.scale(c);
}
var kv = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, l = t.index;
  if (r.type === "category")
    return n[l] ? n[l].coordinate + a : null;
  var c = mt(o, r.dataKey, r.domain[l]);
  return Ee(c) ? null : r.scale(c) - i / 2 + a;
}, cH = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, sH = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ct(ct({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (gt(i)) {
    var o = r[i];
    if (o) {
      var l = o.items.indexOf(t);
      return l >= 0 ? o.stackedData[l] : null;
    }
  }
  return null;
}, uH = function(t) {
  return t.reduce(function(r, n) {
    return [wc(n.concat([r[0]]).filter(ee)), Zr(n.concat([r[1]]).filter(ee))];
  }, [1 / 0, -1 / 0]);
}, g0 = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], l = o.stackedData, c = l.reduce(function(s, u) {
      var f = uH(u.slice(r, n + 1));
      return [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], a[0]), Math.max(c[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, Bv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Lv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ku = function(t, r, n) {
  if (Ce(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (ee(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Bv.test(t[0])) {
    var i = +Bv.exec(t[0])[1];
    a[0] = r[0] - i;
  } else Ce(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (ee(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Lv.test(t[1])) {
    var o = +Lv.exec(t[1])[1];
    a[1] = r[1] + o;
  } else Ce(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, wl = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = yd(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, l = 1, c = i.length; l < c; l++) {
      var s = i[l], u = i[l - 1];
      o = Math.min((s.coordinate || 0) - (u.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Hv = function(t, r, n) {
  return !t || !t.length || oa(t, Xt(n, "type.defaultProps.domain")) ? r : t;
}, y0 = function(t, r) {
  var n = t.type.defaultProps ? ct(ct({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, l = n.formatter, c = n.tooltipType, s = n.chartType, u = n.hide;
  return ct(ct({}, me(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: l,
    name: i || a,
    color: zd(t),
    value: mt(r, a),
    type: c,
    payload: r,
    chartType: s,
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
function Fv(e, t) {
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
    t % 2 ? Fv(Object(r), !0).forEach(function(n) {
      b0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b0(e, t, r) {
  return t = fH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fH(e) {
  var t = dH(e, "string");
  return Ni(t) == "symbol" ? t : t + "";
}
function dH(e, t) {
  if (Ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hH(e, t) {
  return gH(e) || mH(e, t) || vH(e, t) || pH();
}
function pH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vH(e, t) {
  if (e) {
    if (typeof e == "string") return Wv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wv(e, t);
  }
}
function Wv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function gH(e) {
  if (Array.isArray(e)) return e;
}
var Sl = Math.PI / 180, yH = function(t) {
  return t * 180 / Math.PI;
}, rt = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Sl * a) * n,
    y: r + Math.sin(-Sl * a) * n
  };
}, x0 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, bH = function(t, r, n, a, i) {
  var o = t.width, l = t.height, c = t.startAngle, s = t.endAngle, u = Rt(t.cx, o, o / 2), f = Rt(t.cy, l, l / 2), d = x0(o, l, n), h = Rt(t.innerRadius, d, 0), v = Rt(t.outerRadius, d, d * 0.8), m = Object.keys(r);
  return m.reduce(function(p, y) {
    var x = r[y], S = x.domain, O = x.reversed, g;
    if (Ee(x.range))
      a === "angleAxis" ? g = [c, s] : a === "radiusAxis" && (g = [h, v]), O && (g = [g[1], g[0]]);
    else {
      g = x.range;
      var b = g, $ = hH(b, 2);
      c = $[0], s = $[1];
    }
    var C = p0(x, i), _ = C.realScaleType, M = C.scale;
    M.domain(S).range(g), v0(M);
    var P = m0(M, Tr(Tr({}, x), {}, {
      realScaleType: _
    })), I = Tr(Tr(Tr({}, x), P), {}, {
      range: g,
      radius: v,
      realScaleType: _,
      scale: M,
      cx: u,
      cy: f,
      innerRadius: h,
      outerRadius: v,
      startAngle: c,
      endAngle: s
    });
    return Tr(Tr({}, p), {}, b0({}, y, I));
  }, {});
}, xH = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, wH = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, l = xH({
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
  var c = (n - i) / l, s = Math.acos(c);
  return a > o && (s = 2 * Math.PI - s), {
    radius: l,
    angle: yH(s),
    angleInRadian: s
  };
}, SH = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, OH = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), l = Math.min(i, o);
  return t + l * 360;
}, Vv = function(t, r) {
  var n = t.x, a = t.y, i = wH({
    x: n,
    y: a
  }, r), o = i.radius, l = i.angle, c = r.innerRadius, s = r.outerRadius;
  if (o < c || o > s)
    return !1;
  if (o === 0)
    return !0;
  var u = SH(r), f = u.startAngle, d = u.endAngle, h = l, v;
  if (f <= d) {
    for (; h > d; )
      h -= 360;
    for (; h < f; )
      h += 360;
    v = h >= f && h <= d;
  } else {
    for (; h > f; )
      h -= 360;
    for (; h < d; )
      h += 360;
    v = h >= d && h <= f;
  }
  return v ? Tr(Tr({}, r), {}, {
    radius: o,
    angle: OH(h, r)
  }) : null;
}, w0 = function(t) {
  return !/* @__PURE__ */ w.isValidElement(t) && !Ce(t) && typeof t != "boolean" ? t.className : "";
};
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
var $H = ["offset"];
function CH(e) {
  return AH(e) || EH(e) || _H(e) || PH();
}
function PH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _H(e, t) {
  if (e) {
    if (typeof e == "string") return Xu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xu(e, t);
  }
}
function EH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function AH(e) {
  if (Array.isArray(e)) return Xu(e);
}
function Xu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TH(e, t) {
  if (e == null) return {};
  var r = MH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function MH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zv(Object(r), !0).forEach(function(n) {
      IH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IH(e, t, r) {
  return t = jH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jH(e) {
  var t = DH(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function DH(e, t) {
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
var NH = function(t) {
  var r = t.value, n = t.formatter, a = Ee(t.children) ? r : t.children;
  return Ce(n) ? n(a) : a;
}, RH = function(t, r) {
  var n = Nt(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, kH = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, l = t.className, c = i, s = c.cx, u = c.cy, f = c.innerRadius, d = c.outerRadius, h = c.startAngle, v = c.endAngle, m = c.clockWise, p = (f + d) / 2, y = RH(h, v), x = y >= 0 ? 1 : -1, S, O;
  a === "insideStart" ? (S = h + x * o, O = m) : a === "insideEnd" ? (S = v - x * o, O = !m) : a === "end" && (S = v + x * o, O = m), O = y <= 0 ? O : !O;
  var g = rt(s, u, p, S), b = rt(s, u, p, S + (O ? 1 : -1) * 359), $ = "M".concat(g.x, ",").concat(g.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), C = Ee(t.id) ? ja("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ T.createElement("text", ki({}, n, {
    dominantBaseline: "central",
    className: je("recharts-radial-bar-label", l)
  }), /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("path", {
    id: C,
    d: $
  })), /* @__PURE__ */ T.createElement("textPath", {
    xlinkHref: "#".concat(C)
  }, r));
}, BH = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, l = i.cy, c = i.innerRadius, s = i.outerRadius, u = i.startAngle, f = i.endAngle, d = (u + f) / 2;
  if (a === "outside") {
    var h = rt(o, l, s + n, d), v = h.x, m = h.y;
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
  var p = (c + s) / 2, y = rt(o, l, p, d), x = y.x, S = y.y;
  return {
    x,
    y: S,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, LH = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, l = o.x, c = o.y, s = o.width, u = o.height, f = u >= 0 ? 1 : -1, d = f * a, h = f > 0 ? "end" : "start", v = f > 0 ? "start" : "end", m = s >= 0 ? 1 : -1, p = m * a, y = m > 0 ? "end" : "start", x = m > 0 ? "start" : "end";
  if (i === "top") {
    var S = {
      x: l + s / 2,
      y: c - f * a,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return pt(pt({}, S), n ? {
      height: Math.max(c - n.y, 0),
      width: s
    } : {});
  }
  if (i === "bottom") {
    var O = {
      x: l + s / 2,
      y: c + u + d,
      textAnchor: "middle",
      verticalAnchor: v
    };
    return pt(pt({}, O), n ? {
      height: Math.max(n.y + n.height - (c + u), 0),
      width: s
    } : {});
  }
  if (i === "left") {
    var g = {
      x: l - p,
      y: c + u / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return pt(pt({}, g), n ? {
      width: Math.max(g.x - n.x, 0),
      height: u
    } : {});
  }
  if (i === "right") {
    var b = {
      x: l + s + p,
      y: c + u / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return pt(pt({}, b), n ? {
      width: Math.max(n.x + n.width - b.x, 0),
      height: u
    } : {});
  }
  var $ = n ? {
    width: s,
    height: u
  } : {};
  return i === "insideLeft" ? pt({
    x: l + p,
    y: c + u / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, $) : i === "insideRight" ? pt({
    x: l + s - p,
    y: c + u / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, $) : i === "insideTop" ? pt({
    x: l + s / 2,
    y: c + d,
    textAnchor: "middle",
    verticalAnchor: v
  }, $) : i === "insideBottom" ? pt({
    x: l + s / 2,
    y: c + u - d,
    textAnchor: "middle",
    verticalAnchor: h
  }, $) : i === "insideTopLeft" ? pt({
    x: l + p,
    y: c + d,
    textAnchor: x,
    verticalAnchor: v
  }, $) : i === "insideTopRight" ? pt({
    x: l + s - p,
    y: c + d,
    textAnchor: y,
    verticalAnchor: v
  }, $) : i === "insideBottomLeft" ? pt({
    x: l + p,
    y: c + u - d,
    textAnchor: x,
    verticalAnchor: h
  }, $) : i === "insideBottomRight" ? pt({
    x: l + s - p,
    y: c + u - d,
    textAnchor: y,
    verticalAnchor: h
  }, $) : Ea(i) && (ee(i.x) || yn(i.x)) && (ee(i.y) || yn(i.y)) ? pt({
    x: l + Rt(i.x, s),
    y: c + Rt(i.y, u),
    textAnchor: "end",
    verticalAnchor: "end"
  }, $) : pt({
    x: l + s / 2,
    y: c + u / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, $);
}, HH = function(t) {
  return "cx" in t && ee(t.cx);
};
function Ot(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = TH(e, $H), a = pt({
    offset: r
  }, n), i = a.viewBox, o = a.position, l = a.value, c = a.children, s = a.content, u = a.className, f = u === void 0 ? "" : u, d = a.textBreakAll;
  if (!i || Ee(l) && Ee(c) && !/* @__PURE__ */ w.isValidElement(s) && !Ce(s))
    return null;
  if (/* @__PURE__ */ w.isValidElement(s))
    return /* @__PURE__ */ w.cloneElement(s, a);
  var h;
  if (Ce(s)) {
    if (h = /* @__PURE__ */ w.createElement(s, a), /* @__PURE__ */ w.isValidElement(h))
      return h;
  } else
    h = NH(a);
  var v = HH(i), m = me(a, !0);
  if (v && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return kH(a, h, m);
  var p = v ? BH(a) : LH(a);
  return /* @__PURE__ */ T.createElement(Pn, ki({
    className: je("recharts-label", f)
  }, m, p, {
    breakAll: d
  }), h);
}
Ot.displayName = "Label";
var S0 = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, l = t.r, c = t.radius, s = t.innerRadius, u = t.outerRadius, f = t.x, d = t.y, h = t.top, v = t.left, m = t.width, p = t.height, y = t.clockWise, x = t.labelViewBox;
  if (x)
    return x;
  if (ee(m) && ee(p)) {
    if (ee(f) && ee(d))
      return {
        x: f,
        y: d,
        width: m,
        height: p
      };
    if (ee(h) && ee(v))
      return {
        x: h,
        y: v,
        width: m,
        height: p
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
    innerRadius: s || 0,
    outerRadius: u || c || l || 0,
    clockWise: y
  } : t.viewBox ? t.viewBox : {};
}, FH = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    viewBox: r
  }) : gt(t) ? /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ w.isValidElement(t) ? t.type === Ot ? /* @__PURE__ */ w.cloneElement(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Ce(t) ? /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Ea(t) ? /* @__PURE__ */ T.createElement(Ot, ki({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, WH = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = S0(t), o = rr(a, Ot).map(function(c, s) {
    return /* @__PURE__ */ w.cloneElement(c, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(s)
    });
  });
  if (!n)
    return o;
  var l = FH(t.label, r || i);
  return [l].concat(CH(o));
};
Ot.parseViewBox = S0;
Ot.renderCallByParent = WH;
function VH(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var zH = VH;
const UH = /* @__PURE__ */ We(zH);
function Bi(e) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bi(e);
}
var YH = ["valueAccessor"], qH = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function GH(e) {
  return QH(e) || ZH(e) || XH(e) || KH();
}
function KH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XH(e, t) {
  if (e) {
    if (typeof e == "string") return Zu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zu(e, t);
  }
}
function ZH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function QH(e) {
  if (Array.isArray(e)) return Zu(e);
}
function Zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ol() {
  return Ol = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ol.apply(this, arguments);
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
function Yv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uv(Object(r), !0).forEach(function(n) {
      JH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JH(e, t, r) {
  return t = eF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eF(e) {
  var t = tF(e, "string");
  return Bi(t) == "symbol" ? t : t + "";
}
function tF(e, t) {
  if (Bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qv(e, t) {
  if (e == null) return {};
  var r = rF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var nF = function(t) {
  return Array.isArray(t.value) ? UH(t.value) : t.value;
};
function Rr(e) {
  var t = e.valueAccessor, r = t === void 0 ? nF : t, n = qv(e, YH), a = n.data, i = n.dataKey, o = n.clockWise, l = n.id, c = n.textBreakAll, s = qv(n, qH);
  return !a || !a.length ? null : /* @__PURE__ */ T.createElement(Fe, {
    className: "recharts-label-list"
  }, a.map(function(u, f) {
    var d = Ee(i) ? r(u, f) : mt(u && u.payload, i), h = Ee(l) ? {} : {
      id: "".concat(l, "-").concat(f)
    };
    return /* @__PURE__ */ T.createElement(Ot, Ol({}, me(u, !0), s, h, {
      parentViewBox: u.parentViewBox,
      value: d,
      textBreakAll: c,
      viewBox: Ot.parseViewBox(Ee(o) ? u : Yv(Yv({}, u), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Rr.displayName = "LabelList";
function aF(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ T.createElement(Rr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ T.isValidElement(e) || Ce(e) ? /* @__PURE__ */ T.createElement(Rr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Ea(e) ? /* @__PURE__ */ T.createElement(Rr, Ol({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function iF(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = rr(n, Rr).map(function(o, l) {
    return /* @__PURE__ */ w.cloneElement(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(l)
    });
  });
  if (!r)
    return a;
  var i = aF(e.label, t);
  return [i].concat(GH(a));
}
Rr.renderCallByParent = iF;
function Li(e) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e);
}
function Qu() {
  return Qu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qu.apply(this, arguments);
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
function Kv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gv(Object(r), !0).forEach(function(n) {
      oF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oF(e, t, r) {
  return t = lF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lF(e) {
  var t = cF(e, "string");
  return Li(t) == "symbol" ? t : t + "";
}
function cF(e, t) {
  if (Li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sF = function(t, r) {
  var n = Nt(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, To = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, l = t.isExternal, c = t.cornerRadius, s = t.cornerIsExternal, u = c * (l ? 1 : -1) + a, f = Math.asin(c / u) / Sl, d = s ? i : i + o * f, h = rt(r, n, u, d), v = rt(r, n, a, d), m = s ? i - o * f : i, p = rt(r, n, u * Math.cos(f * Sl), m);
  return {
    center: h,
    circleTangency: v,
    lineTangency: p,
    theta: f
  };
}, O0 = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, l = t.endAngle, c = sF(o, l), s = o + c, u = rt(r, n, i, o), f = rt(r, n, i, s), d = "M ".concat(u.x, ",").concat(u.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > s), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (a > 0) {
    var h = rt(r, n, a, o), v = rt(r, n, a, s);
    d += "L ".concat(v.x, ",").concat(v.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= s), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, uF = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, l = t.forceCornerRadius, c = t.cornerIsExternal, s = t.startAngle, u = t.endAngle, f = Nt(u - s), d = To({
    cx: r,
    cy: n,
    radius: i,
    angle: s,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: c
  }), h = d.circleTangency, v = d.lineTangency, m = d.theta, p = To({
    cx: r,
    cy: n,
    radius: i,
    angle: u,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: c
  }), y = p.circleTangency, x = p.lineTangency, S = p.theta, O = c ? Math.abs(s - u) : Math.abs(s - u) - m - S;
  if (O < 0)
    return l ? "M ".concat(v.x, ",").concat(v.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : O0({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: s,
      endAngle: u
    });
  var g = "M ".concat(v.x, ",").concat(v.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(f < 0), ",").concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(x.x, ",").concat(x.y, `
  `);
  if (a > 0) {
    var b = To({
      cx: r,
      cy: n,
      radius: a,
      angle: s,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), $ = b.circleTangency, C = b.lineTangency, _ = b.theta, M = To({
      cx: r,
      cy: n,
      radius: a,
      angle: u,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), P = M.circleTangency, I = M.lineTangency, N = M.theta, j = c ? Math.abs(s - u) : Math.abs(s - u) - _ - N;
    if (j < 0 && o === 0)
      return "".concat(g, "L").concat(r, ",").concat(n, "Z");
    g += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(j > 180), ",").concat(+(f > 0), ",").concat($.x, ",").concat($.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(C.x, ",").concat(C.y, "Z");
  } else
    g += "L".concat(r, ",").concat(n, "Z");
  return g;
}, fF = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, $0 = function(t) {
  var r = Kv(Kv({}, fF), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, l = r.cornerRadius, c = r.forceCornerRadius, s = r.cornerIsExternal, u = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || u === f)
    return null;
  var h = je("recharts-sector", d), v = o - i, m = Rt(l, v, 0, !0), p;
  return m > 0 && Math.abs(u - f) < 360 ? p = uF({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(m, v / 2),
    forceCornerRadius: c,
    cornerIsExternal: s,
    startAngle: u,
    endAngle: f
  }) : p = O0({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: u,
    endAngle: f
  }), /* @__PURE__ */ T.createElement("path", Qu({}, me(r, !0), {
    className: h,
    d: p,
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
function Ju() {
  return Ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ju.apply(this, arguments);
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
function Zv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xv(Object(r), !0).forEach(function(n) {
      dF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dF(e, t, r) {
  return t = hF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hF(e) {
  var t = pF(e, "string");
  return Hi(t) == "symbol" ? t : t + "";
}
function pF(e, t) {
  if (Hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qv = {
  curveBasisClosed: f_,
  curveBasisOpen: d_,
  curveBasis: u_,
  curveBumpX: XP,
  curveBumpY: ZP,
  curveLinearClosed: h_,
  curveLinear: cc,
  curveMonotoneX: p_,
  curveMonotoneY: v_,
  curveNatural: m_,
  curveStep: g_,
  curveStepAfter: b_,
  curveStepBefore: y_
}, Mo = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Ja = function(t) {
  return t.x;
}, ei = function(t) {
  return t.y;
}, vF = function(t, r) {
  if (Ce(t))
    return t;
  var n = "curve".concat(oc(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Qv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Qv[n] || cc;
}, mF = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, l = t.layout, c = t.connectNulls, s = c === void 0 ? !1 : c, u = vF(n, l), f = s ? i.filter(function(m) {
    return Mo(m);
  }) : i, d;
  if (Array.isArray(o)) {
    var h = s ? o.filter(function(m) {
      return Mo(m);
    }) : o, v = f.map(function(m, p) {
      return Zv(Zv({}, m), {}, {
        base: h[p]
      });
    });
    return l === "vertical" ? d = wo().y(ei).x1(Ja).x0(function(m) {
      return m.base.x;
    }) : d = wo().x(Ja).y1(ei).y0(function(m) {
      return m.base.y;
    }), d.defined(Mo).curve(u), d(v);
  }
  return l === "vertical" && ee(o) ? d = wo().y(ei).x1(Ja).x0(o) : ee(o) ? d = wo().x(Ja).y1(ei).y0(o) : d = by().x(Ja).y(ei), d.defined(Mo).curve(u), d(f);
}, Xn = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? mF(t) : a;
  return /* @__PURE__ */ T.createElement("path", Ju({}, me(t, !1), Go(t), {
    className: je("recharts-curve", r),
    d: o,
    ref: i
  }));
}, gF = Object.getOwnPropertyNames, yF = Object.getOwnPropertySymbols, bF = Object.prototype.hasOwnProperty;
function Jv(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function Io(e) {
  return function(r, n, a) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, a);
    var i = a.cache, o = i.get(r), l = i.get(n);
    if (o && l)
      return o === n && l === r;
    i.set(r, n), i.set(n, r);
    var c = e(r, n, a);
    return i.delete(r), i.delete(n), c;
  };
}
function em(e) {
  return gF(e).concat(yF(e));
}
var C0 = Object.hasOwn || function(e, t) {
  return bF.call(e, t);
};
function Ha(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var P0 = "_owner", tm = Object.getOwnPropertyDescriptor, rm = Object.keys;
function xF(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function wF(e, t) {
  return Ha(e.getTime(), t.getTime());
}
function nm(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, a = e.entries(), i = 0, o, l; (o = a.next()) && !o.done; ) {
    for (var c = t.entries(), s = !1, u = 0; (l = c.next()) && !l.done; ) {
      var f = o.value, d = f[0], h = f[1], v = l.value, m = v[0], p = v[1];
      !s && !n[u] && (s = r.equals(d, m, i, u, e, t, r) && r.equals(h, p, d, m, e, t, r)) && (n[u] = !0), u++;
    }
    if (!s)
      return !1;
    i++;
  }
  return !0;
}
function SF(e, t, r) {
  var n = rm(e), a = n.length;
  if (rm(t).length !== a)
    return !1;
  for (var i; a-- > 0; )
    if (i = n[a], i === P0 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !C0(t, i) || !r.equals(e[i], t[i], i, i, e, t, r))
      return !1;
  return !0;
}
function ti(e, t, r) {
  var n = em(e), a = n.length;
  if (em(t).length !== a)
    return !1;
  for (var i, o, l; a-- > 0; )
    if (i = n[a], i === P0 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !C0(t, i) || !r.equals(e[i], t[i], i, i, e, t, r) || (o = tm(e, i), l = tm(t, i), (o || l) && (!o || !l || o.configurable !== l.configurable || o.enumerable !== l.enumerable || o.writable !== l.writable)))
      return !1;
  return !0;
}
function OF(e, t) {
  return Ha(e.valueOf(), t.valueOf());
}
function $F(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function am(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, a = e.values(), i, o; (i = a.next()) && !i.done; ) {
    for (var l = t.values(), c = !1, s = 0; (o = l.next()) && !o.done; )
      !c && !n[s] && (c = r.equals(i.value, o.value, i.value, o.value, e, t, r)) && (n[s] = !0), s++;
    if (!c)
      return !1;
  }
  return !0;
}
function CF(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var PF = "[object Arguments]", _F = "[object Boolean]", EF = "[object Date]", AF = "[object Map]", TF = "[object Number]", MF = "[object Object]", IF = "[object RegExp]", jF = "[object Set]", DF = "[object String]", NF = Array.isArray, im = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, om = Object.assign, RF = Object.prototype.toString.call.bind(Object.prototype.toString);
function kF(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, a = e.areObjectsEqual, i = e.arePrimitiveWrappersEqual, o = e.areRegExpsEqual, l = e.areSetsEqual, c = e.areTypedArraysEqual;
  return function(u, f, d) {
    if (u === f)
      return !0;
    if (u == null || f == null || typeof u != "object" || typeof f != "object")
      return u !== u && f !== f;
    var h = u.constructor;
    if (h !== f.constructor)
      return !1;
    if (h === Object)
      return a(u, f, d);
    if (NF(u))
      return t(u, f, d);
    if (im != null && im(u))
      return c(u, f, d);
    if (h === Date)
      return r(u, f, d);
    if (h === RegExp)
      return o(u, f, d);
    if (h === Map)
      return n(u, f, d);
    if (h === Set)
      return l(u, f, d);
    var v = RF(u);
    return v === EF ? r(u, f, d) : v === IF ? o(u, f, d) : v === AF ? n(u, f, d) : v === jF ? l(u, f, d) : v === MF ? typeof u.then != "function" && typeof f.then != "function" && a(u, f, d) : v === PF ? a(u, f, d) : v === _F || v === TF || v === DF ? i(u, f, d) : !1;
  };
}
function BF(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? ti : xF,
    areDatesEqual: wF,
    areMapsEqual: n ? Jv(nm, ti) : nm,
    areObjectsEqual: n ? ti : SF,
    arePrimitiveWrappersEqual: OF,
    areRegExpsEqual: $F,
    areSetsEqual: n ? Jv(am, ti) : am,
    areTypedArraysEqual: n ? ti : CF
  };
  if (r && (a = om({}, a, r(a))), t) {
    var i = Io(a.areArraysEqual), o = Io(a.areMapsEqual), l = Io(a.areObjectsEqual), c = Io(a.areSetsEqual);
    a = om({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: l,
      areSetsEqual: c
    });
  }
  return a;
}
function LF(e) {
  return function(t, r, n, a, i, o, l) {
    return e(t, r, l);
  };
}
function HF(e) {
  var t = e.circular, r = e.comparator, n = e.createState, a = e.equals, i = e.strict;
  if (n)
    return function(c, s) {
      var u = n(), f = u.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, h = u.meta;
      return r(c, s, {
        cache: d,
        equals: a,
        meta: h,
        strict: i
      });
    };
  if (t)
    return function(c, s) {
      return r(c, s, {
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
  return function(c, s) {
    return r(c, s, o);
  };
}
var FF = on();
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
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, l = BF(e), c = kF(l), s = n ? n(c) : LF(c);
  return HF({ circular: r, comparator: c, createState: a, equals: s, strict: o });
}
function WF(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function lm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : WF(a);
  };
  requestAnimationFrame(n);
}
function ef(e) {
  "@babel/helpers - typeof";
  return ef = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ef(e);
}
function VF(e) {
  return qF(e) || YF(e) || UF(e) || zF();
}
function zF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UF(e, t) {
  if (e) {
    if (typeof e == "string") return cm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cm(e, t);
  }
}
function cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function YF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qF(e) {
  if (Array.isArray(e)) return e;
}
function GF() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, l = VF(o), c = l[0], s = l.slice(1);
        if (typeof c == "number") {
          lm(a.bind(null, s), c);
          return;
        }
        a(c), lm(a.bind(null, s));
        return;
      }
      ef(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
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
function sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function um(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sm(Object(r), !0).forEach(function(n) {
      _0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _0(e, t, r) {
  return t = KF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KF(e) {
  var t = XF(e, "string");
  return Fi(t) === "symbol" ? t : String(t);
}
function XF(e, t) {
  if (Fi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ZF = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, QF = function(t) {
  return t;
}, JF = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, pi = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return um(um({}, n), {}, _0({}, a, t(a, r[a])));
  }, {});
}, fm = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(JF(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, e3 = Oe.env.NODE_ENV !== "production", $l = function(t, r, n, a, i, o, l, c) {
  if (e3 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = [n, a, i, o, l, c], u = 0;
      console.warn(r.replace(/%s/g, function() {
        return s[u++];
      }));
    }
};
function t3(e, t) {
  return a3(e) || n3(e, t) || E0(e, t) || r3();
}
function r3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function a3(e) {
  if (Array.isArray(e)) return e;
}
function i3(e) {
  return c3(e) || l3(e) || E0(e) || o3();
}
function o3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E0(e, t) {
  if (e) {
    if (typeof e == "string") return tf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tf(e, t);
  }
}
function l3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function c3(e) {
  if (Array.isArray(e)) return tf(e);
}
function tf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Cl = 1e-4, A0 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, T0 = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, dm = function(t, r) {
  return function(n) {
    var a = A0(t, r);
    return T0(a, n);
  };
}, s3 = function(t, r) {
  return function(n) {
    var a = A0(t, r), i = [].concat(i3(a.map(function(o, l) {
      return o * l;
    }).slice(1)), [0]);
    return T0(i, n);
  };
}, hm = function() {
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
        var c = r[0].split("(");
        if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
          var s = c[1].split(")")[0].split(",").map(function(p) {
            return parseFloat(p);
          }), u = t3(s, 4);
          a = u[0], i = u[1], o = u[2], l = u[3];
        } else
          $l(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  $l([a, o, i, l].every(function(p) {
    return typeof p == "number" && p >= 0 && p <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = dm(a, o), d = dm(i, l), h = s3(a, o), v = function(y) {
    return y > 1 ? 1 : y < 0 ? 0 : y;
  }, m = function(y) {
    for (var x = y > 1 ? 1 : y, S = x, O = 0; O < 8; ++O) {
      var g = f(S) - x, b = h(S);
      if (Math.abs(g - x) < Cl || b < Cl)
        return d(S);
      S = v(S - g / b);
    }
    return d(S);
  };
  return m.isStepper = !1, m;
}, u3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, l = o === void 0 ? 17 : o, c = function(u, f, d) {
    var h = -(u - f) * n, v = d * i, m = d + (h - v) * l / 1e3, p = d * l / 1e3 + u;
    return Math.abs(p - f) < Cl && Math.abs(m) < Cl ? [f, 0] : [p, m];
  };
  return c.isStepper = !0, c.dt = l, c;
}, f3 = function() {
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
        return hm(a);
      case "spring":
        return u3();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return hm(a);
        $l(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : ($l(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Wi(e) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e);
}
function pm(e) {
  return p3(e) || h3(e) || M0(e) || d3();
}
function d3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function p3(e) {
  if (Array.isArray(e)) return nf(e);
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
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vm(Object(r), !0).forEach(function(n) {
      rf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rf(e, t, r) {
  return t = v3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v3(e) {
  var t = m3(e, "string");
  return Wi(t) === "symbol" ? t : String(t);
}
function m3(e, t) {
  if (Wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g3(e, t) {
  return x3(e) || b3(e, t) || M0(e, t) || y3();
}
function y3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M0(e, t) {
  if (e) {
    if (typeof e == "string") return nf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nf(e, t);
  }
}
function nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function b3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function x3(e) {
  if (Array.isArray(e)) return e;
}
var Pl = function(t, r, n) {
  return t + (r - t) * n;
}, af = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, w3 = function e(t, r, n) {
  var a = pi(function(i, o) {
    if (af(o)) {
      var l = t(o.from, o.to, o.velocity), c = g3(l, 2), s = c[0], u = c[1];
      return Pt(Pt({}, o), {}, {
        from: s,
        velocity: u
      });
    }
    return o;
  }, r);
  return n < 1 ? pi(function(i, o) {
    return af(o) ? Pt(Pt({}, o), {}, {
      velocity: Pl(o.velocity, a[i].velocity, n),
      from: Pl(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const S3 = function(e, t, r, n, a) {
  var i = ZF(e, t), o = i.reduce(function(p, y) {
    return Pt(Pt({}, p), {}, rf({}, y, [e[y], t[y]]));
  }, {}), l = i.reduce(function(p, y) {
    return Pt(Pt({}, p), {}, rf({}, y, {
      from: e[y],
      velocity: 0,
      to: t[y]
    }));
  }, {}), c = -1, s, u, f = function() {
    return null;
  }, d = function() {
    return pi(function(y, x) {
      return x.from;
    }, l);
  }, h = function() {
    return !Object.values(l).filter(af).length;
  }, v = function(y) {
    s || (s = y);
    var x = y - s, S = x / r.dt;
    l = w3(r, l, S), a(Pt(Pt(Pt({}, e), t), d())), s = y, h() || (c = requestAnimationFrame(f));
  }, m = function(y) {
    u || (u = y);
    var x = (y - u) / n, S = pi(function(g, b) {
      return Pl.apply(void 0, pm(b).concat([r(x)]));
    }, o);
    if (a(Pt(Pt(Pt({}, e), t), S)), x < 1)
      c = requestAnimationFrame(f);
    else {
      var O = pi(function(g, b) {
        return Pl.apply(void 0, pm(b).concat([r(1)]));
      }, o);
      a(Pt(Pt(Pt({}, e), t), O));
    }
  };
  return f = r.isStepper ? v : m, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
};
function ca(e) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e);
}
var O3 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function $3(e, t) {
  if (e == null) return {};
  var r = C3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function C3(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Vs(e) {
  return A3(e) || E3(e) || _3(e) || P3();
}
function P3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _3(e, t) {
  if (e) {
    if (typeof e == "string") return of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return of(e, t);
  }
}
function E3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function A3(e) {
  if (Array.isArray(e)) return of(e);
}
function of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mm(Object(r), !0).forEach(function(n) {
      li(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function li(e, t, r) {
  return t = I0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function M3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, I0(n.key), n);
  }
}
function I3(e, t, r) {
  return t && M3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function I0(e) {
  var t = j3(e, "string");
  return ca(t) === "symbol" ? t : String(t);
}
function j3(e, t) {
  if (ca(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ca(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lf(e, t);
}
function lf(e, t) {
  return lf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, lf(e, t);
}
function N3(e) {
  var t = R3();
  return function() {
    var n = _l(e), a;
    if (t) {
      var i = _l(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return cf(this, a);
  };
}
function cf(e, t) {
  if (t && (ca(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sf(e);
}
function sf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function R3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _l(e) {
  return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _l(e);
}
var Pr = /* @__PURE__ */ function(e) {
  D3(r, e);
  var t = N3(r);
  function r(n, a) {
    var i;
    T3(this, r), i = t.call(this, n, a);
    var o = i.props, l = o.isActive, c = o.attributeName, s = o.from, u = o.to, f = o.steps, d = o.children, h = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(sf(i)), i.changeStyle = i.changeStyle.bind(sf(i)), !l || h <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: u
      }), cf(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (s) {
      if (typeof d == "function")
        return i.state = {
          style: s
        }, cf(i);
      i.state = {
        style: c ? li({}, c, s) : s
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return I3(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, l = i.canBegin, c = i.attributeName, s = i.shouldReAnimate, u = i.to, f = i.from, d = this.state.style;
      if (l) {
        if (!o) {
          var h = {
            style: c ? li({}, c, u) : u
          };
          this.state && d && (c && d[c] !== u || !c && d !== u) && this.setState(h);
          return;
        }
        if (!(FF(a.to, u) && a.canBegin && a.isActive)) {
          var v = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var m = v || s ? f : a.to;
          if (this.state && d) {
            var p = {
              style: c ? li({}, c, m) : m
            };
            (c && d[c] !== m || !c && d !== m) && this.setState(p);
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
      var i = this, o = a.from, l = a.to, c = a.duration, s = a.easing, u = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, h = S3(o, l, f3(s), c, this.changeStyle), v = function() {
        i.stopJSAnimation = h();
      };
      this.manager.start([d, u, v, c, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, l = a.begin, c = a.onAnimationStart, s = o[0], u = s.style, f = s.duration, d = f === void 0 ? 0 : f, h = function(m, p, y) {
        if (y === 0)
          return m;
        var x = p.duration, S = p.easing, O = S === void 0 ? "ease" : S, g = p.style, b = p.properties, $ = p.onAnimationEnd, C = y > 0 ? o[y - 1] : p, _ = b || Object.keys(g);
        if (typeof O == "function" || O === "spring")
          return [].concat(Vs(m), [i.runJSAnimation.bind(i, {
            from: C.style,
            to: g,
            duration: x,
            easing: O
          }), x]);
        var M = fm(_, x, O), P = or(or(or({}, C.style), g), {}, {
          transition: M
        });
        return [].concat(Vs(m), [P, x, $]).filter(QF);
      };
      return this.manager.start([c].concat(Vs(o.reduce(h, [u, Math.max(d, l)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = GF());
      var i = a.begin, o = a.duration, l = a.attributeName, c = a.to, s = a.easing, u = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, h = a.children, v = this.manager;
      if (this.unSubscribe = v.subscribe(this.handleStyleChange), typeof s == "function" || typeof h == "function" || s === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var m = l ? li({}, l, c) : c, p = fm(Object.keys(m), o, s);
      v.start([u, i, or(or({}, m), {}, {
        transition: p
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
      var c = $3(a, O3), s = w.Children.count(i), u = this.state.style;
      if (typeof i == "function")
        return i(u);
      if (!l || s === 0 || o <= 0)
        return i;
      var f = function(h) {
        var v = h.props, m = v.style, p = m === void 0 ? {} : m, y = v.className, x = /* @__PURE__ */ w.cloneElement(h, or(or({}, c), {}, {
          style: or(or({}, p), u),
          className: y
        }));
        return x;
      };
      return s === 1 ? f(w.Children.only(i)) : /* @__PURE__ */ T.createElement("div", null, w.Children.map(i, function(d) {
        return f(d);
      }));
    }
  }]), r;
}(w.PureComponent);
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
  from: Te.oneOfType([Te.object, Te.string]),
  to: Te.oneOfType([Te.object, Te.string]),
  attributeName: Te.string,
  // animation duration
  duration: Te.number,
  begin: Te.number,
  easing: Te.oneOfType([Te.string, Te.func]),
  steps: Te.arrayOf(Te.shape({
    duration: Te.number.isRequired,
    style: Te.object.isRequired,
    easing: Te.oneOfType([Te.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Te.func]),
    // transition css properties(dash case), optional
    properties: Te.arrayOf("string"),
    onAnimationEnd: Te.func
  })),
  children: Te.oneOfType([Te.node, Te.func]),
  isActive: Te.bool,
  canBegin: Te.bool,
  onAnimationEnd: Te.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Te.bool,
  onAnimationStart: Te.func,
  onAnimationReStart: Te.func
};
Te.object, Te.object, Te.object, Te.element;
Te.object, Te.object, Te.object, Te.oneOfType([Te.array, Te.element]), Te.any;
function Vi(e) {
  "@babel/helpers - typeof";
  return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vi(e);
}
function El() {
  return El = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, El.apply(this, arguments);
}
function k3(e, t) {
  return F3(e) || H3(e, t) || L3(e, t) || B3();
}
function B3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L3(e, t) {
  if (e) {
    if (typeof e == "string") return gm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gm(e, t);
  }
}
function gm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function H3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function F3(e) {
  if (Array.isArray(e)) return e;
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
function bm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ym(Object(r), !0).forEach(function(n) {
      W3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W3(e, t, r) {
  return t = V3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V3(e) {
  var t = z3(e, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function z3(e, t) {
  if (Vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xm = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), l = a >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, s = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, u;
  if (o > 0 && i instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, h = 4; d < h; d++)
      f[d] = i[d] > o ? o : i[d];
    u = "M".concat(t, ",").concat(r + l * f[0]), f[0] > 0 && (u += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(s, ",").concat(t + c * f[0], ",").concat(r)), u += "L ".concat(t + n - c * f[1], ",").concat(r), f[1] > 0 && (u += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(s, `,
        `).concat(t + n, ",").concat(r + l * f[1])), u += "L ".concat(t + n, ",").concat(r + a - l * f[2]), f[2] > 0 && (u += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(s, `,
        `).concat(t + n - c * f[2], ",").concat(r + a)), u += "L ".concat(t + c * f[3], ",").concat(r + a), f[3] > 0 && (u += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(s, `,
        `).concat(t, ",").concat(r + a - l * f[3])), u += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var v = Math.min(o, i);
    u = "M ".concat(t, ",").concat(r + l * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(t + c * v, ",").concat(r, `
            L `).concat(t + n - c * v, ",").concat(r, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(t + n, ",").concat(r + l * v, `
            L `).concat(t + n, ",").concat(r + a - l * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(t + n - c * v, ",").concat(r + a, `
            L `).concat(t + c * v, ",").concat(r + a, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(s, ",").concat(t, ",").concat(r + a - l * v, " Z");
  } else
    u = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return u;
}, U3 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, l = r.width, c = r.height;
  if (Math.abs(l) > 0 && Math.abs(c) > 0) {
    var s = Math.min(i, i + l), u = Math.max(i, i + l), f = Math.min(o, o + c), d = Math.max(o, o + c);
    return n >= s && n <= u && a >= f && a <= d;
  }
  return !1;
}, Y3 = {
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
}, Ud = function(t) {
  var r = bm(bm({}, Y3), t), n = w.useRef(), a = w.useState(-1), i = k3(a, 2), o = i[0], l = i[1];
  w.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && l(O);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, u = r.width, f = r.height, d = r.radius, h = r.className, v = r.animationEasing, m = r.animationDuration, p = r.animationBegin, y = r.isAnimationActive, x = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || u !== +u || f !== +f || u === 0 || f === 0)
    return null;
  var S = je("recharts-rectangle", h);
  return x ? /* @__PURE__ */ T.createElement(Pr, {
    canBegin: o > 0,
    from: {
      width: u,
      height: f,
      x: c,
      y: s
    },
    to: {
      width: u,
      height: f,
      x: c,
      y: s
    },
    duration: m,
    animationEasing: v,
    isActive: x
  }, function(O) {
    var g = O.width, b = O.height, $ = O.x, C = O.y;
    return /* @__PURE__ */ T.createElement(Pr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: m,
      isActive: y,
      easing: v
    }, /* @__PURE__ */ T.createElement("path", El({}, me(r, !0), {
      className: S,
      d: xm($, C, g, b, d),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("path", El({}, me(r, !0), {
    className: S,
    d: xm(c, s, u, f, d)
  }));
}, q3 = ["points", "className", "baseLinePoints", "connectNulls"];
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
function G3(e, t) {
  if (e == null) return {};
  var r = K3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function K3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function wm(e) {
  return J3(e) || Q3(e) || Z3(e) || X3();
}
function X3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z3(e, t) {
  if (e) {
    if (typeof e == "string") return uf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uf(e, t);
  }
}
function Q3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function J3(e) {
  if (Array.isArray(e)) return uf(e);
}
function uf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Sm = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, eW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Sm(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Sm(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, vi = function(t, r) {
  var n = eW(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(wm(i), wm(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, l, c) {
      return "".concat(o).concat(c === 0 ? "M" : "L").concat(l.x, ",").concat(l.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, tW = function(t, r, n) {
  var a = vi(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(vi(r.reverse(), n).slice(1));
}, rW = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = G3(t, q3);
  if (!r || !r.length)
    return null;
  var l = je("recharts-polygon", n);
  if (a && a.length) {
    var c = o.stroke && o.stroke !== "none", s = tW(r, a, i);
    return /* @__PURE__ */ T.createElement("g", {
      className: l
    }, /* @__PURE__ */ T.createElement("path", Wn({}, me(o, !0), {
      fill: s.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: s
    })), c ? /* @__PURE__ */ T.createElement("path", Wn({}, me(o, !0), {
      fill: "none",
      d: vi(r, i)
    })) : null, c ? /* @__PURE__ */ T.createElement("path", Wn({}, me(o, !0), {
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
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ff.apply(this, arguments);
}
var Cc = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = je("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ T.createElement("circle", ff({}, me(t, !1), Go(t), {
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
var nW = ["x", "y", "top", "left", "width", "height", "className"];
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, df.apply(this, arguments);
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
function aW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), !0).forEach(function(n) {
      iW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iW(e, t, r) {
  return t = oW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oW(e) {
  var t = lW(e, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function lW(e, t) {
  if (zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cW(e, t) {
  if (e == null) return {};
  var r = sW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var uW = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, fW = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, l = o === void 0 ? 0 : o, c = t.left, s = c === void 0 ? 0 : c, u = t.width, f = u === void 0 ? 0 : u, d = t.height, h = d === void 0 ? 0 : d, v = t.className, m = cW(t, nW), p = aW({
    x: n,
    y: i,
    top: l,
    left: s,
    width: f,
    height: h
  }, m);
  return !ee(n) || !ee(i) || !ee(f) || !ee(h) || !ee(l) || !ee(s) ? null : /* @__PURE__ */ T.createElement("path", df({}, me(p, !0), {
    className: je("recharts-cross", v),
    d: uW(n, i, f, h, l, s)
  }));
}, dW = xc, hW = qb, pW = rn;
function vW(e, t) {
  return e && e.length ? dW(e, pW(t), hW) : void 0;
}
var mW = vW;
const gW = /* @__PURE__ */ We(mW);
var yW = xc, bW = rn, xW = Gb;
function wW(e, t) {
  return e && e.length ? yW(e, bW(t), xW) : void 0;
}
var SW = wW;
const OW = /* @__PURE__ */ We(SW);
var $W = ["cx", "cy", "angle", "ticks", "axisLine"], CW = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function sa(e) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e);
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
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), !0).forEach(function(n) {
      Pc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Cm(e, t) {
  if (e == null) return {};
  var r = PW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _W(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, D0(n.key), n);
  }
}
function EW(e, t, r) {
  return t && Pm(e.prototype, t), r && Pm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function AW(e, t, r) {
  return t = Al(t), TW(e, j0() ? Reflect.construct(t, r || [], Al(e).constructor) : t.apply(e, r));
}
function TW(e, t) {
  if (t && (sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return MW(e);
}
function MW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (j0 = function() {
    return !!e;
  })();
}
function Al(e) {
  return Al = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Al(e);
}
function IW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hf(e, t);
}
function hf(e, t) {
  return hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hf(e, t);
}
function Pc(e, t, r) {
  return t = D0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function D0(e) {
  var t = jW(e, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function jW(e, t) {
  if (sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _c = /* @__PURE__ */ function(e) {
  function t() {
    return _W(this, t), AW(this, t, arguments);
  }
  return IW(t, e), EW(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var a = n.coordinate, i = this.props, o = i.angle, l = i.cx, c = i.cy;
        return rt(l, c, a, o);
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, c = gW(l, function(u) {
        return u.coordinate || 0;
      }), s = OW(l, function(u) {
        return u.coordinate || 0;
      });
      return {
        cx: a,
        cy: i,
        startAngle: o,
        endAngle: o,
        innerRadius: s.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, c = n.axisLine, s = Cm(n, $W), u = l.reduce(function(v, m) {
        return [Math.min(v[0], m.coordinate), Math.max(v[1], m.coordinate)];
      }, [1 / 0, -1 / 0]), f = rt(a, i, u[0], o), d = rt(a, i, u[1], o), h = fn(fn(fn({}, me(s, !1)), {}, {
        fill: "none"
      }, me(c, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ T.createElement("line", mi({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, l = a.angle, c = a.tickFormatter, s = a.stroke, u = Cm(a, CW), f = this.getTickTextAnchor(), d = me(u, !1), h = me(o, !1), v = i.map(function(m, p) {
        var y = n.getTickValueCoord(m), x = fn(fn(fn(fn({
          textAnchor: f,
          transform: "rotate(".concat(90 - l, ", ").concat(y.x, ", ").concat(y.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: s
        }, h), {}, {
          index: p
        }, y), {}, {
          payload: m
        });
        return /* @__PURE__ */ T.createElement(Fe, mi({
          className: je("recharts-polar-radius-axis-tick", w0(o)),
          key: "tick-".concat(m.coordinate)
        }, Cn(n.props, m, p)), t.renderTickItem(o, x, c ? c(m.value, p) : m.value));
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
        className: je("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), Ot.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : Ce(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(Pn, mi({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
}(w.PureComponent);
Pc(_c, "displayName", "PolarRadiusAxis");
Pc(_c, "axisType", "radiusAxis");
Pc(_c, "defaultProps", {
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
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      Ec(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Em(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, R0(n.key), n);
  }
}
function NW(e, t, r) {
  return t && Em(e.prototype, t), r && Em(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RW(e, t, r) {
  return t = Tl(t), kW(e, N0() ? Reflect.construct(t, r || [], Tl(e).constructor) : t.apply(e, r));
}
function kW(e, t) {
  if (t && (ua(t) === "object" || typeof t == "function"))
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
function N0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (N0 = function() {
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
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pf(e, t);
}
function pf(e, t) {
  return pf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, pf(e, t);
}
function Ec(e, t, r) {
  return t = R0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R0(e) {
  var t = HW(e, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function HW(e, t) {
  if (ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FW = Math.PI / 180, Am = 1e-5, Ac = /* @__PURE__ */ function(e) {
  function t() {
    return DW(this, t), RW(this, t, arguments);
  }
  return LW(t, e), NW(t, [{
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
        var a = this.props, i = a.cx, o = a.cy, l = a.radius, c = a.orientation, s = a.tickSize, u = s || 8, f = rt(i, o, l, n.coordinate), d = rt(i, o, l + (c === "inner" ? -1 : 1) * u, n.coordinate);
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * FW), o;
      return i > Am ? o = a === "outer" ? "start" : "end" : i < -Am ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, l = n.axisLine, c = n.axisLineType, s = dn(dn({}, me(this.props, !1)), {}, {
        fill: "none"
      }, me(l, !1));
      if (c === "circle")
        return /* @__PURE__ */ T.createElement(Cc, gn({
          className: "recharts-polar-angle-axis-line"
        }, s, {
          cx: a,
          cy: i,
          r: o
        }));
      var u = this.props.ticks, f = u.map(function(d) {
        return rt(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ T.createElement(rW, gn({
        className: "recharts-polar-angle-axis-line"
      }, s, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, l = a.tickLine, c = a.tickFormatter, s = a.stroke, u = me(this.props, !1), f = me(o, !1), d = dn(dn({}, u), {}, {
        fill: "none"
      }, me(l, !1)), h = i.map(function(v, m) {
        var p = n.getTickLineCoord(v), y = n.getTickTextAnchor(v), x = dn(dn(dn({
          textAnchor: y
        }, u), {}, {
          stroke: "none",
          fill: s
        }, f), {}, {
          index: m,
          payload: v,
          x: p.x2,
          y: p.y2
        });
        return /* @__PURE__ */ T.createElement(Fe, gn({
          className: je("recharts-polar-angle-axis-tick", w0(o)),
          key: "tick-".concat(v.coordinate)
        }, Cn(n.props, v, m)), l && /* @__PURE__ */ T.createElement("line", gn({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, p)), o && t.renderTickItem(o, x, c ? c(v.value, m) : v.value));
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ T.createElement(Fe, {
        className: je("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : Ce(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(Pn, gn({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
}(w.PureComponent);
Ec(Ac, "displayName", "PolarAngleAxis");
Ec(Ac, "axisType", "angleAxis");
Ec(Ac, "defaultProps", {
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
var WW = Vy, VW = WW(Object.getPrototypeOf, Object), zW = VW, UW = Vr, YW = zW, qW = zr, GW = "[object Object]", KW = Function.prototype, XW = Object.prototype, k0 = KW.toString, ZW = XW.hasOwnProperty, QW = k0.call(Object);
function JW(e) {
  if (!qW(e) || UW(e) != GW)
    return !1;
  var t = YW(e);
  if (t === null)
    return !0;
  var r = ZW.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && k0.call(r) == QW;
}
var eV = JW;
const tV = /* @__PURE__ */ We(eV);
var rV = Vr, nV = zr, aV = "[object Boolean]";
function iV(e) {
  return e === !0 || e === !1 || nV(e) && rV(e) == aV;
}
var oV = iV;
const lV = /* @__PURE__ */ We(oV);
function Ui(e) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e);
}
function Ml() {
  return Ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ml.apply(this, arguments);
}
function cV(e, t) {
  return dV(e) || fV(e, t) || uV(e, t) || sV();
}
function sV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uV(e, t) {
  if (e) {
    if (typeof e == "string") return Tm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tm(e, t);
  }
}
function Tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function dV(e) {
  if (Array.isArray(e)) return e;
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
function Im(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mm(Object(r), !0).forEach(function(n) {
      hV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hV(e, t, r) {
  return t = pV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pV(e) {
  var t = vV(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function vV(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jm = function(t, r, n, a, i) {
  var o = n - a, l;
  return l = "M ".concat(t, ",").concat(r), l += "L ".concat(t + n, ",").concat(r), l += "L ".concat(t + n - o / 2, ",").concat(r + i), l += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), l += "L ".concat(t, ",").concat(r, " Z"), l;
}, mV = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, gV = function(t) {
  var r = Im(Im({}, mV), t), n = w.useRef(), a = w.useState(-1), i = cV(a, 2), o = i[0], l = i[1];
  w.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && l(S);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, u = r.upperWidth, f = r.lowerWidth, d = r.height, h = r.className, v = r.animationEasing, m = r.animationDuration, p = r.animationBegin, y = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || u !== +u || f !== +f || d !== +d || u === 0 && f === 0 || d === 0)
    return null;
  var x = je("recharts-trapezoid", h);
  return y ? /* @__PURE__ */ T.createElement(Pr, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: c,
      y: s
    },
    to: {
      upperWidth: u,
      lowerWidth: f,
      height: d,
      x: c,
      y: s
    },
    duration: m,
    animationEasing: v,
    isActive: y
  }, function(S) {
    var O = S.upperWidth, g = S.lowerWidth, b = S.height, $ = S.x, C = S.y;
    return /* @__PURE__ */ T.createElement(Pr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: m,
      easing: v
    }, /* @__PURE__ */ T.createElement("path", Ml({}, me(r, !0), {
      className: x,
      d: jm($, C, O, g, b),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("g", null, /* @__PURE__ */ T.createElement("path", Ml({}, me(r, !0), {
    className: x,
    d: jm(c, s, u, f, d)
  })));
}, yV = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Yi(e) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e);
}
function bV(e, t) {
  if (e == null) return {};
  var r = xV(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function Il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dm(Object(r), !0).forEach(function(n) {
      wV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dm(Object(r)).forEach(function(n) {
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
  return Yi(t) == "symbol" ? t : t + "";
}
function OV(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $V(e, t) {
  return Il(Il({}, t), e);
}
function CV(e, t) {
  return e === "symbols";
}
function Nm(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ T.createElement(Ud, r);
    case "trapezoid":
      return /* @__PURE__ */ T.createElement(gV, r);
    case "sector":
      return /* @__PURE__ */ T.createElement($0, r);
    case "symbols":
      if (CV(t))
        return /* @__PURE__ */ T.createElement(sd, r);
      break;
    default:
      return null;
  }
}
function PV(e) {
  return /* @__PURE__ */ w.isValidElement(e) ? e.props : e;
}
function B0(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? $V : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, l = e.isActive, c = bV(e, yV), s;
  if (/* @__PURE__ */ w.isValidElement(t))
    s = /* @__PURE__ */ w.cloneElement(t, Il(Il({}, c), PV(t)));
  else if (Ce(t))
    s = t(c);
  else if (tV(t) && !lV(t)) {
    var u = a(t, c);
    s = /* @__PURE__ */ T.createElement(Nm, {
      shapeType: r,
      elementProps: u
    });
  } else {
    var f = c;
    s = /* @__PURE__ */ T.createElement(Nm, {
      shapeType: r,
      elementProps: f
    });
  }
  return l ? /* @__PURE__ */ T.createElement(Fe, {
    className: o
  }, s) : s;
}
function Tc(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Mc(e, t) {
  return t != null && "sectors" in e.props;
}
function qi(e, t) {
  return t != null && "points" in e.props;
}
function _V(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function EV(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function AV(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function TV(e, t) {
  var r;
  return Tc(e, t) ? r = _V : Mc(e, t) ? r = EV : qi(e, t) && (r = AV), r;
}
function MV(e, t) {
  var r;
  return Tc(e, t) ? r = "trapezoids" : Mc(e, t) ? r = "sectors" : qi(e, t) && (r = "points"), r;
}
function IV(e, t) {
  if (Tc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Mc(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return qi(e, t) ? t.payload : {};
}
function jV(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = MV(r, t), i = IV(r, t), o = n.filter(function(c, s) {
    var u = oa(i, c), f = r.props[a].filter(function(v) {
      var m = TV(r, t);
      return m(v, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), h = s === d;
    return u && h;
  }), l = n.indexOf(o[o.length - 1]);
  return l;
}
var Wo;
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
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rm(Object(r), !0).forEach(function(n) {
      er(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function km(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, H0(n.key), n);
  }
}
function NV(e, t, r) {
  return t && km(e.prototype, t), r && km(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RV(e, t, r) {
  return t = jl(t), kV(e, L0() ? Reflect.construct(t, r || [], jl(e).constructor) : t.apply(e, r));
}
function kV(e, t) {
  if (t && (fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BV(e);
}
function BV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function L0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (L0 = function() {
    return !!e;
  })();
}
function jl(e) {
  return jl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jl(e);
}
function LV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vf(e, t);
}
function vf(e, t) {
  return vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vf(e, t);
}
function er(e, t, r) {
  return t = H0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H0(e) {
  var t = HV(e, "string");
  return fa(t) == "symbol" ? t : t + "";
}
function HV(e, t) {
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
    return DV(this, t), n = RV(this, t, [r]), er(n, "pieRef", null), er(n, "sectorRefs", []), er(n, "id", ja("recharts-pie-")), er(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Ce(a) && a();
    }), er(n, "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Ce(a) && a();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return LV(t, e), NV(t, [{
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
      var i = this.props, o = i.label, l = i.labelLine, c = i.dataKey, s = i.valueKey, u = me(this.props, !1), f = me(o, !1), d = me(l, !1), h = o && o.offsetRadius || 20, v = n.map(function(m, p) {
        var y = (m.startAngle + m.endAngle) / 2, x = rt(m.cx, m.cy, m.outerRadius + h, y), S = et(et(et(et({}, u), m), {}, {
          stroke: "none"
        }, f), {}, {
          index: p,
          textAnchor: t.getTextAnchor(x.x, m.cx)
        }, x), O = et(et(et(et({}, u), m), {}, {
          fill: "none",
          stroke: m.fill
        }, d), {}, {
          index: p,
          points: [rt(m.cx, m.cy, m.outerRadius, y), x]
        }), g = c;
        return Ee(c) && Ee(s) ? g = "value" : Ee(c) && (g = s), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ T.createElement(Fe, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(p)
        }, l && t.renderLabelLineItem(l, O, "line"), t.renderLabelItem(o, S, mt(m, g)));
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-pie-labels"
      }, v);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.activeShape, l = i.blendStroke, c = i.inactiveShape;
      return n.map(function(s, u) {
        if ((s == null ? void 0 : s.startAngle) === 0 && (s == null ? void 0 : s.endAngle) === 0 && n.length !== 1) return null;
        var f = a.isActiveIndex(u), d = c && a.hasActiveIndex() ? c : null, h = f ? o : d, v = et(et({}, s), {}, {
          stroke: l ? s.fill : s.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ T.createElement(Fe, Vn({
          ref: function(p) {
            p && !a.sectorRefs.includes(p) && a.sectorRefs.push(p);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Cn(a.props, s, u), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(s == null ? void 0 : s.startAngle, "-").concat(s == null ? void 0 : s.endAngle, "-").concat(s.midAngle, "-").concat(u)
        }), /* @__PURE__ */ T.createElement(B0, Vn({
          option: h,
          isActive: f,
          shapeType: "sector"
        }, v)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.sectors, o = a.isAnimationActive, l = a.animationBegin, c = a.animationDuration, s = a.animationEasing, u = a.animationId, f = this.state, d = f.prevSectors, h = f.prevIsAnimationActive;
      return /* @__PURE__ */ T.createElement(Pr, {
        begin: l,
        duration: c,
        isActive: o,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(u, "-").concat(h),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(v) {
        var m = v.t, p = [], y = i && i[0], x = y.startAngle;
        return i.forEach(function(S, O) {
          var g = d && d[O], b = O > 0 ? Xt(S, "paddingAngle", 0) : 0;
          if (g) {
            var $ = Lt(g.endAngle - g.startAngle, S.endAngle - S.startAngle), C = et(et({}, S), {}, {
              startAngle: x + b,
              endAngle: x + $(m) + b
            });
            p.push(C), x = C.endAngle;
          } else {
            var _ = S.endAngle, M = S.startAngle, P = Lt(0, _ - M), I = P(m), N = et(et({}, S), {}, {
              startAngle: x + b,
              endAngle: x + I + b
            });
            p.push(N), x = N.endAngle;
          }
        }), /* @__PURE__ */ T.createElement(Fe, null, n.renderSectorsStatically(p));
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
      var n = this, a = this.props, i = a.hide, o = a.sectors, l = a.className, c = a.label, s = a.cx, u = a.cy, f = a.innerRadius, d = a.outerRadius, h = a.isAnimationActive, v = this.state.isAnimationFinished;
      if (i || !o || !o.length || !ee(s) || !ee(u) || !ee(f) || !ee(d))
        return null;
      var m = je("recharts-pie", l);
      return /* @__PURE__ */ T.createElement(Fe, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(y) {
          n.pieRef = y;
        }
      }, this.renderSectors(), c && this.renderLabels(o), Ot.renderCallByParent(this.props, null, !1), (!h || v) && Rr.renderCallByParent(this.props, o, !1));
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
      if (Ce(n))
        return n(a);
      var o = je("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
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
      if (Ce(n) && (o = n(a), /* @__PURE__ */ T.isValidElement(o)))
        return o;
      var l = je("recharts-pie-label-text", typeof n != "boolean" && !Ce(n) ? n.className : "");
      return /* @__PURE__ */ T.createElement(Pn, Vn({}, a, {
        alignmentBaseline: "middle",
        className: l
      }), o);
    }
  }]);
}(w.PureComponent);
Wo = Yr;
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
  var t = e.data, r = e.children, n = me(e, !1), a = rr(r, hc);
  return t && t.length ? t.map(function(i, o) {
    return et(et(et({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return et(et({}, n), i.props);
  }) : [];
});
er(Yr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = x0(a, i), l = n + Rt(e.cx, a, a / 2), c = r + Rt(e.cy, i, i / 2), s = Rt(e.innerRadius, o, 0), u = Rt(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: l,
    cy: c,
    innerRadius: s,
    outerRadius: u,
    maxRadius: f
  };
});
er(Yr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? et(et({}, t.type.defaultProps), t.props) : t.props, a = Wo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, l = n.endAngle, c = n.paddingAngle, s = n.dataKey, u = n.nameKey, f = n.valueKey, d = n.tooltipType, h = Math.abs(n.minAngle), v = Wo.parseCoordinateOfPie(n, r), m = Wo.parseDeltaAngle(o, l), p = Math.abs(m), y = s;
  Ee(s) && Ee(f) ? (Dr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = "value") : Ee(s) && (Dr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = f);
  var x = a.filter(function(C) {
    return mt(C, y, 0) !== 0;
  }).length, S = (p >= 360 ? x : x - 1) * c, O = p - x * h - S, g = a.reduce(function(C, _) {
    var M = mt(_, y, 0);
    return C + (ee(M) ? M : 0);
  }, 0), b;
  if (g > 0) {
    var $;
    b = a.map(function(C, _) {
      var M = mt(C, y, 0), P = mt(C, u, _), I = (ee(M) ? M : 0) / g, N;
      _ ? N = $.endAngle + Nt(m) * c * (M !== 0 ? 1 : 0) : N = o;
      var j = N + Nt(m) * ((M !== 0 ? h : 0) + I * O), E = (N + j) / 2, A = (v.innerRadius + v.outerRadius) / 2, D = [{
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
        paddingAngle: Nt(m) * c
      }), $;
    });
  }
  return et(et({}, v), {}, {
    sectors: b,
    data: a
  });
});
var FV = Math.ceil, WV = Math.max;
function VV(e, t, r, n) {
  for (var a = -1, i = WV(FV((t - e) / (r || 1)), 0), o = Array(i); i--; )
    o[n ? i : ++a] = e, e += r;
  return o;
}
var zV = VV, UV = lb, Bm = 1 / 0, YV = 17976931348623157e292;
function qV(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = UV(e), e === Bm || e === -Bm) {
    var t = e < 0 ? -1 : 1;
    return t * YV;
  }
  return e === e ? e : 0;
}
var GV = qV, KV = zV, XV = dc, zs = GV;
function ZV(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && XV(t, r, n) && (r = n = void 0), t = zs(t), r === void 0 ? (r = t, t = 0) : r = zs(r), n = n === void 0 ? t < r ? 1 : -1 : zs(n), KV(t, r, n, e);
  };
}
var QV = ZV, JV = QV, ez = JV(), tz = ez;
const Dl = /* @__PURE__ */ We(tz);
function Gi(e) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e);
}
function Lm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lm(Object(r), !0).forEach(function(n) {
      F0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F0(e, t, r) {
  return t = rz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rz(e) {
  var t = nz(e, "string");
  return Gi(t) == "symbol" ? t : t + "";
}
function nz(e, t) {
  if (Gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var az = ["Webkit", "Moz", "O", "ms"], iz = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = az.reduce(function(i, o) {
    return Hm(Hm({}, i), {}, F0({}, o + n, r));
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
function Nl() {
  return Nl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nl.apply(this, arguments);
}
function Fm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fm(Object(r), !0).forEach(function(n) {
      Yt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V0(n.key), n);
  }
}
function lz(e, t, r) {
  return t && Wm(e.prototype, t), r && Wm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cz(e, t, r) {
  return t = Rl(t), sz(e, W0() ? Reflect.construct(t, r || [], Rl(e).constructor) : t.apply(e, r));
}
function sz(e, t) {
  if (t && (da(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return uz(e);
}
function uz(e) {
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
function Rl(e) {
  return Rl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rl(e);
}
function fz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mf(e, t);
}
function mf(e, t) {
  return mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, mf(e, t);
}
function Yt(e, t, r) {
  return t = V0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V0(e) {
  var t = dz(e, "string");
  return da(t) == "symbol" ? t : t + "";
}
function dz(e, t) {
  if (da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hz = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, l = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var c = r.length, s = di().domain(Dl(0, c)).range([i, i + o - l]), u = s.domain().map(function(f) {
    return s(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: s(n),
    endX: s(a),
    scale: s,
    scaleValues: u
  };
}, Vm = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, ha = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return oz(this, t), n = cz(this, t, [r]), Yt(n, "handleDrag", function(a) {
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
      var i = Vm(a) ? a.changedTouches[0] : a;
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
  return fz(t, e), lz(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, l = this.props, c = l.gap, s = l.data, u = s.length - 1, f = Math.min(a, i), d = Math.max(a, i), h = t.getIndexInRange(o, f), v = t.getIndexInRange(o, d);
      return {
        startIndex: h - h % c,
        endIndex: v === u ? u : v - v % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, l = a.dataKey, c = mt(i[n], l, n);
      return Ce(o) ? o(c, n) : c;
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
      var a = this.state, i = a.slideMoveStartX, o = a.startX, l = a.endX, c = this.props, s = c.x, u = c.width, f = c.travellerWidth, d = c.startIndex, h = c.endIndex, v = c.onChange, m = n.pageX - i;
      m > 0 ? m = Math.min(m, s + u - f - l, s + u - f - o) : m < 0 && (m = Math.max(m, s - o, s - l));
      var p = this.getIndex({
        startX: o + m,
        endX: l + m
      });
      (p.startIndex !== d || p.endIndex !== h) && v && v(p), this.setState({
        startX: o + m,
        endX: l + m,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = Vm(a) ? a.changedTouches[0] : a;
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
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, l = a.endX, c = a.startX, s = this.state[o], u = this.props, f = u.x, d = u.width, h = u.travellerWidth, v = u.onChange, m = u.gap, p = u.data, y = {
        startX: this.state.startX,
        endX: this.state.endX
      }, x = n.pageX - i;
      x > 0 ? x = Math.min(x, f + d - h - s) : x < 0 && (x = Math.max(x, f - s)), y[o] = s + x;
      var S = this.getIndex(y), O = S.startIndex, g = S.endIndex, b = function() {
        var C = p.length - 1;
        return o === "startX" && (l > c ? O % m === 0 : g % m === 0) || l < c && g === C || o === "endX" && (l > c ? g % m === 0 : O % m === 0) || l > c && g === C;
      };
      this.setState(Yt(Yt({}, o, s + x), "brushMoveStartX", n.pageX), function() {
        v && b() && v(S);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, l = o.scaleValues, c = o.startX, s = o.endX, u = this.state[a], f = l.indexOf(u);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= l.length)) {
          var h = l[d];
          a === "startX" && h >= s || a === "endX" && h <= c || this.setState(Yt({}, a, h), function() {
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
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, c = n.fill, s = n.stroke;
      return /* @__PURE__ */ T.createElement("rect", {
        stroke: s,
        fill: c,
        x: a,
        y: i,
        width: o,
        height: l
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, c = n.data, s = n.children, u = n.padding, f = w.Children.only(s);
      return f ? /* @__PURE__ */ T.cloneElement(f, {
        x: a,
        y: i,
        width: o,
        height: l,
        margin: u,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, l = this, c = this.props, s = c.y, u = c.travellerWidth, f = c.height, d = c.traveller, h = c.ariaLabel, v = c.data, m = c.startIndex, p = c.endIndex, y = Math.max(n, this.props.x), x = Us(Us({}, me(this.props, !1)), {}, {
        x: y,
        y: s,
        width: u,
        height: f
      }), S = h || "Min value: ".concat((i = v[m]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = v[p]) === null || o === void 0 ? void 0 : o.name);
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
      }, t.renderTraveller(d, x));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, l = i.height, c = i.stroke, s = i.travellerWidth, u = Math.min(n, a) + s, f = Math.max(Math.abs(a - n) - s, 0);
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
        fill: c,
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
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, l = n.height, c = n.travellerWidth, s = n.stroke, u = this.state, f = u.startX, d = u.endX, h = 5, v = {
        pointerEvents: "none",
        fill: s
      };
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ T.createElement(Pn, Nl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - h,
        y: o + l / 2
      }, v), this.getTextOfTick(a)), /* @__PURE__ */ T.createElement(Pn, Nl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + c + h,
        y: o + l / 2
      }, v), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, l = n.x, c = n.y, s = n.width, u = n.height, f = n.alwaysShowText, d = this.state, h = d.startX, v = d.endX, m = d.isTextActive, p = d.isSlideMoving, y = d.isTravellerMoving, x = d.isTravellerFocused;
      if (!a || !a.length || !ee(l) || !ee(c) || !ee(s) || !ee(u) || s <= 0 || u <= 0)
        return null;
      var S = je("recharts-brush", i), O = T.Children.count(o) === 1, g = iz("userSelect", "none");
      return /* @__PURE__ */ T.createElement(Fe, {
        className: S,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: g
      }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(h, v), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(v, "endX"), (m || p || y || x || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, l = n.height, c = n.stroke, s = Math.floor(i + l / 2) - 1;
      return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: l,
        fill: c,
        stroke: "none"
      }), /* @__PURE__ */ T.createElement("line", {
        x1: a + 1,
        y1: s,
        x2: a + o - 1,
        y2: s,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ T.createElement("line", {
        x1: a + 1,
        y1: s + 2,
        x2: a + o - 1,
        y2: s + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ T.isValidElement(n) ? i = /* @__PURE__ */ T.cloneElement(n, a) : Ce(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, l = n.x, c = n.travellerWidth, s = n.updateId, u = n.startIndex, f = n.endIndex;
      if (i !== a.prevData || s !== a.prevUpdateId)
        return Us({
          prevData: i,
          prevTravellerWidth: c,
          prevUpdateId: s,
          prevX: l,
          prevWidth: o
        }, i && i.length ? hz({
          data: i,
          width: o,
          x: l,
          travellerWidth: c,
          startIndex: u,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || l !== a.prevX || c !== a.prevTravellerWidth)) {
        a.scale.range([l, l + o - c]);
        var d = a.scale.domain().map(function(h) {
          return a.scale(h);
        });
        return {
          prevData: i,
          prevTravellerWidth: c,
          prevUpdateId: s,
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
        var c = Math.floor((o + l) / 2);
        n[c] > a ? l = c : o = c;
      }
      return a >= n[l] ? l : o;
    }
  }]);
}(w.PureComponent);
Yt(ha, "displayName", "Brush");
Yt(ha, "defaultProps", {
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
var pz = gd;
function vz(e, t) {
  var r;
  return pz(e, function(n, a, i) {
    return r = t(n, a, i), !r;
  }), !!r;
}
var mz = vz, gz = Ny, yz = rn, bz = mz, xz = zt, wz = dc;
function Sz(e, t, r) {
  var n = xz(e) ? gz : bz;
  return r && wz(e, t, r) && (t = void 0), n(e, yz(t));
}
var Oz = Sz;
const $z = /* @__PURE__ */ We(Oz);
var Or = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, zm = rb;
function Cz(e, t, r) {
  t == "__proto__" && zm ? zm(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Pz = Cz, _z = Pz, Ez = eb, Az = rn;
function Tz(e, t) {
  var r = {};
  return t = Az(t), Ez(e, function(n, a, i) {
    _z(r, a, t(n, a, i));
  }), r;
}
var Mz = Tz;
const Iz = /* @__PURE__ */ We(Mz);
function jz(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var Dz = jz, Nz = gd;
function Rz(e, t) {
  var r = !0;
  return Nz(e, function(n, a, i) {
    return r = !!t(n, a, i), r;
  }), r;
}
var kz = Rz, Bz = Dz, Lz = kz, Hz = rn, Fz = zt, Wz = dc;
function Vz(e, t, r) {
  var n = Fz(e) ? Bz : Lz;
  return r && Wz(e, t, r) && (t = void 0), n(e, Hz(t));
}
var zz = Vz;
const Uz = /* @__PURE__ */ We(zz);
var Yz = ["x", "y"];
function pa(e) {
  "@babel/helpers - typeof";
  return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pa(e);
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
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Um(Object(r), !0).forEach(function(n) {
      qz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qz(e, t, r) {
  return t = Gz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gz(e) {
  var t = Kz(e, "string");
  return pa(t) == "symbol" ? t : t + "";
}
function Kz(e, t) {
  if (pa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xz(e, t) {
  if (e == null) return {};
  var r = Zz(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Zz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Qz(e, t) {
  var r = e.x, n = e.y, a = Xz(e, Yz), i = "".concat(r), o = parseInt(i, 10), l = "".concat(n), c = parseInt(l, 10), s = "".concat(t.height || a.height), u = parseInt(s, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return ri(ri(ri(ri(ri({}, t), a), o ? {
    x: o
  } : {}), c ? {
    y: c
  } : {}), {}, {
    height: u,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function Ym(e) {
  return /* @__PURE__ */ T.createElement(B0, gf({
    shapeType: "rectangle",
    propTransformer: Qz,
    activeClassName: "recharts-active-bar"
  }, e));
}
var Jz = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (Oe.env.NODE_ENV !== "production" ? Ft(!1, "minPointSize callback function received a value with type of ".concat(pa(n), ". Currently only numbers are supported.")) : Ft()), r);
  };
}, e5 = ["value", "background"], z0;
function va(e) {
  "@babel/helpers - typeof";
  return va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, va(e);
}
function t5(e, t) {
  if (e == null) return {};
  var r = r5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function r5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qm(Object(r), !0).forEach(function(n) {
      Qr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function n5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y0(n.key), n);
  }
}
function a5(e, t, r) {
  return t && Gm(e.prototype, t), r && Gm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function i5(e, t, r) {
  return t = Bl(t), o5(e, U0() ? Reflect.construct(t, r || [], Bl(e).constructor) : t.apply(e, r));
}
function o5(e, t) {
  if (t && (va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return l5(e);
}
function l5(e) {
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
function Bl(e) {
  return Bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bl(e);
}
function c5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yf(e, t);
}
function yf(e, t) {
  return yf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, yf(e, t);
}
function Qr(e, t, r) {
  return t = Y0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y0(e) {
  var t = s5(e, "string");
  return va(t) == "symbol" ? t : t + "";
}
function s5(e, t) {
  if (va(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (va(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oo = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    n5(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = i5(this, t, [].concat(a)), Qr(r, "state", {
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
  return c5(t, e), a5(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, l = i.dataKey, c = i.activeIndex, s = i.activeBar, u = me(this.props, !1);
      return n && n.map(function(f, d) {
        var h = d === c, v = h ? s : o, m = ft(ft(ft({}, u), f), {}, {
          isActive: h,
          option: v,
          index: d,
          dataKey: l,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ T.createElement(Fe, kl({
          className: "recharts-bar-rectangle"
        }, Cn(a.props, f, d), {
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value)
        }), /* @__PURE__ */ T.createElement(Ym, m));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, l = a.isAnimationActive, c = a.animationBegin, s = a.animationDuration, u = a.animationEasing, f = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ T.createElement(Pr, {
        begin: c,
        duration: s,
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
      }, function(h) {
        var v = h.t, m = i.map(function(p, y) {
          var x = d && d[y];
          if (x) {
            var S = Lt(x.x, p.x), O = Lt(x.y, p.y), g = Lt(x.width, p.width), b = Lt(x.height, p.height);
            return ft(ft({}, p), {}, {
              x: S(v),
              y: O(v),
              width: g(v),
              height: b(v)
            });
          }
          if (o === "horizontal") {
            var $ = Lt(0, p.height), C = $(v);
            return ft(ft({}, p), {}, {
              y: p.y + p.height - C,
              height: C
            });
          }
          var _ = Lt(0, p.width), M = _(v);
          return ft(ft({}, p), {}, {
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
      var n = this, a = this.props, i = a.data, o = a.dataKey, l = a.activeIndex, c = me(this.props.background, !1);
      return i.map(function(s, u) {
        s.value;
        var f = s.background, d = t5(s, e5);
        if (!f)
          return null;
        var h = ft(ft(ft(ft(ft({}, d), {}, {
          fill: "#eee"
        }, f), c), Cn(n.props, s, u)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: u,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ T.createElement(Ym, kl({
          key: "background-bar-".concat(u),
          option: n.props.background,
          isActive: u === l
        }, h));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, l = i.xAxis, c = i.yAxis, s = i.layout, u = i.children, f = rr(u, $c);
      if (!f)
        return null;
      var d = s === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(p, y) {
        var x = Array.isArray(p.value) ? p.value[1] : p.value;
        return {
          x: p.x,
          y: p.y,
          value: x,
          errorVal: mt(p, y)
        };
      }, v = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ T.createElement(Fe, v, f.map(function(m) {
        return /* @__PURE__ */ T.cloneElement(m, {
          key: "error-bar-".concat(a, "-").concat(m.props.dataKey),
          data: o,
          xAxis: l,
          yAxis: c,
          layout: s,
          offset: d,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, l = n.xAxis, c = n.yAxis, s = n.left, u = n.top, f = n.width, d = n.height, h = n.isAnimationActive, v = n.background, m = n.id;
      if (a || !i || !i.length)
        return null;
      var p = this.state.isAnimationFinished, y = je("recharts-bar", o), x = l && l.allowDataOverflow, S = c && c.allowDataOverflow, O = x || S, g = Ee(m) ? this.id : m;
      return /* @__PURE__ */ T.createElement(Fe, {
        className: y
      }, x || S ? /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-".concat(g)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: x ? s : s - f / 2,
        y: S ? u : u - d / 2,
        width: x ? f : f * 2,
        height: S ? d : d * 2
      }))) : null, /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(g, ")") : null
      }, v ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, g), (!h || p) && Rr.renderCallByParent(this.props, i));
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
}(w.PureComponent);
z0 = oo;
Qr(oo, "displayName", "Bar");
Qr(oo, "defaultProps", {
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
Qr(oo, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, l = e.xAxisTicks, c = e.yAxisTicks, s = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, h = tH(n, r);
  if (!h)
    return null;
  var v = t.layout, m = r.type.defaultProps, p = m !== void 0 ? ft(ft({}, m), r.props) : r.props, y = p.dataKey, x = p.children, S = p.minPointSize, O = v === "horizontal" ? o : i, g = s ? O.scale.domain() : null, b = cH({
    numericAxis: O
  }), $ = rr(x, hc), C = f.map(function(_, M) {
    var P, I, N, j, E, A;
    s ? P = rH(s[u + M], g) : (P = mt(_, y), Array.isArray(P) || (P = [b, P]));
    var D = Jz(S, z0.defaultProps.minPointSize)(P[1], M);
    if (v === "horizontal") {
      var R, k = [o.scale(P[0]), o.scale(P[1])], L = k[0], H = k[1];
      I = kv({
        axis: i,
        ticks: l,
        bandSize: a,
        offset: h.offset,
        entry: _,
        index: M
      }), N = (R = H ?? L) !== null && R !== void 0 ? R : void 0, j = h.size;
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
      var z = [i.scale(P[0]), i.scale(P[1])], G = z[0], Q = z[1];
      if (I = G, N = kv({
        axis: o,
        ticks: c,
        bandSize: a,
        offset: h.offset,
        entry: _,
        index: M
      }), j = Q - G, E = h.size, A = {
        x: i.x,
        y: N,
        width: i.width,
        height: E
      }, Math.abs(D) > 0 && Math.abs(j) < Math.abs(D)) {
        var ne = Nt(j || D) * (Math.abs(D) - Math.abs(j));
        j += ne;
      }
    }
    return ft(ft(ft({}, _), {}, {
      x: I,
      y: N,
      width: j,
      height: E,
      value: s ? P : P[1],
      payload: _,
      background: A
    }, $ && $[M] && $[M].props), {}, {
      tooltipPayload: [y0(r, _)],
      tooltipPosition: {
        x: I + j / 2,
        y: N + E / 2
      }
    });
  });
  return ft({
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
function u5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Km(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, q0(n.key), n);
  }
}
function f5(e, t, r) {
  return t && Km(e.prototype, t), r && Km(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xm(Object(r), !0).forEach(function(n) {
      Ic(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ic(e, t, r) {
  return t = q0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q0(e) {
  var t = d5(e, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function d5(e, t) {
  if (Ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var h5 = function(t, r, n, a, i) {
  var o = t.width, l = t.height, c = t.layout, s = t.children, u = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: l - n.bottom,
    bottomMirror: l - n.bottom
  }, d = !!qt(s, oo);
  return u.reduce(function(h, v) {
    var m = r[v], p = m.orientation, y = m.domain, x = m.padding, S = x === void 0 ? {} : x, O = m.mirror, g = m.reversed, b = "".concat(p).concat(O ? "Mirror" : ""), $, C, _, M, P;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var I = y[1] - y[0], N = 1 / 0, j = m.categoricalDomain.sort();
      if (j.forEach(function(z, G) {
        G > 0 && (N = Math.min((z || 0) - (j[G - 1] || 0), N));
      }), Number.isFinite(N)) {
        var E = N / I, A = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && ($ = E * A / 2), m.padding === "no-gap") {
          var D = Rt(t.barCategoryGap, E * A), R = E * A / 2;
          $ = R - D - (R - D) / A * D;
        }
      }
    }
    a === "xAxis" ? C = [n.left + (S.left || 0) + ($ || 0), n.left + n.width - (S.right || 0) - ($ || 0)] : a === "yAxis" ? C = c === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + ($ || 0), n.top + n.height - (S.bottom || 0) - ($ || 0)] : C = m.range, g && (C = [C[1], C[0]]);
    var k = p0(m, i, d), L = k.scale, H = k.realScaleType;
    L.domain(y).range(C), v0(L);
    var B = m0(L, cr(cr({}, m), {}, {
      realScaleType: H
    }));
    a === "xAxis" ? (P = p === "top" && !O || p === "bottom" && O, _ = n.left, M = f[b] - P * m.height) : a === "yAxis" && (P = p === "left" && !O || p === "right" && O, _ = f[b] - P * m.width, M = n.top);
    var W = cr(cr(cr({}, m), B), {}, {
      realScaleType: H,
      x: _,
      y: M,
      scale: L,
      width: a === "xAxis" ? n.width : m.width,
      height: a === "yAxis" ? n.height : m.height
    });
    return W.bandSize = wl(W, B), !m.hide && a === "xAxis" ? f[b] += (P ? -1 : 1) * W.height : m.hide || (f[b] += (P ? -1 : 1) * W.width), cr(cr({}, h), {}, Ic({}, v, W));
  }, {});
}, G0 = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, p5 = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return G0({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, K0 = /* @__PURE__ */ function() {
  function e(t) {
    u5(this, e), this.scale = t;
  }
  return f5(e, [{
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
          var c = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + c;
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
Ic(K0, "EPS", 1e-4);
var Yd = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return cr(cr({}, n), {}, Ic({}, a, K0.create(t[a])));
  }, {});
  return cr(cr({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, l = i.position;
      return Iz(a, function(c, s) {
        return r[s].apply(c, {
          bandAware: o,
          position: l
        });
      });
    },
    isInRange: function(a) {
      return Uz(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function v5(e) {
  return (e % 180 + 180) % 180;
}
var m5 = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = v5(a), o = i * Math.PI / 180, l = Math.atan(n / r), c = o > l && o < Math.PI - l ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, g5 = V$(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function Ll(e) {
  "@babel/helpers - typeof";
  return Ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ll(e);
}
var X0 = /* @__PURE__ */ w.createContext(void 0), Z0 = /* @__PURE__ */ w.createContext(void 0), Q0 = /* @__PURE__ */ w.createContext(void 0), y5 = /* @__PURE__ */ w.createContext({}), J0 = /* @__PURE__ */ w.createContext(void 0), ex = /* @__PURE__ */ w.createContext(0), tx = /* @__PURE__ */ w.createContext(0), Zm = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, l = t.children, c = t.width, s = t.height, u = g5(i);
  return /* @__PURE__ */ T.createElement(X0.Provider, {
    value: n
  }, /* @__PURE__ */ T.createElement(Z0.Provider, {
    value: a
  }, /* @__PURE__ */ T.createElement(y5.Provider, {
    value: i
  }, /* @__PURE__ */ T.createElement(Q0.Provider, {
    value: u
  }, /* @__PURE__ */ T.createElement(J0.Provider, {
    value: o
  }, /* @__PURE__ */ T.createElement(ex.Provider, {
    value: s
  }, /* @__PURE__ */ T.createElement(tx.Provider, {
    value: c
  }, l)))))));
}, b5 = function() {
  return w.useContext(J0);
};
function rx(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var nx = function(t) {
  var r = w.useContext(X0);
  r == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ft());
  var n = r[t];
  return n == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(Ll(t), "]. ").concat(rx(r))) : Ft()), n;
}, ax = function(t) {
  var r = w.useContext(Z0);
  r == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ft());
  var n = r[t];
  return n == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(Ll(t), "]. ").concat(rx(r))) : Ft()), n;
}, x5 = function() {
  var t = w.useContext(Q0);
  return t;
}, ix = function() {
  return w.useContext(tx);
}, ox = function() {
  return w.useContext(ex);
};
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
function w5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function S5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cx(n.key), n);
  }
}
function O5(e, t, r) {
  return t && S5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $5(e, t, r) {
  return t = Hl(t), C5(e, lx() ? Reflect.construct(t, r || [], Hl(e).constructor) : t.apply(e, r));
}
function C5(e, t) {
  if (t && (ma(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return P5(e);
}
function P5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lx = function() {
    return !!e;
  })();
}
function Hl(e) {
  return Hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Hl(e);
}
function _5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && bf(e, t);
}
function bf(e, t) {
  return bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, bf(e, t);
}
function Qm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qm(Object(r), !0).forEach(function(n) {
      qd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qd(e, t, r) {
  return t = cx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cx(e) {
  var t = E5(e, "string");
  return ma(t) == "symbol" ? t : t + "";
}
function E5(e, t) {
  if (ma(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ma(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A5(e, t) {
  return j5(e) || I5(e, t) || M5(e, t) || T5();
}
function T5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M5(e, t) {
  if (e) {
    if (typeof e == "string") return eg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eg(e, t);
  }
}
function eg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function I5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function j5(e) {
  if (Array.isArray(e)) return e;
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
var D5 = function(t, r) {
  var n;
  return /* @__PURE__ */ T.isValidElement(t) ? n = /* @__PURE__ */ T.cloneElement(t, r) : Ce(t) ? n = t(r) : n = /* @__PURE__ */ T.createElement("line", xf({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, N5 = function(t, r, n, a, i, o, l, c, s) {
  var u = i.x, f = i.y, d = i.width, h = i.height;
  if (n) {
    var v = s.y, m = t.y.apply(v, {
      position: o
    });
    if (Or(s, "discard") && !t.y.isInRange(m))
      return null;
    var p = [{
      x: u + d,
      y: m
    }, {
      x: u,
      y: m
    }];
    return c === "left" ? p.reverse() : p;
  }
  if (r) {
    var y = s.x, x = t.x.apply(y, {
      position: o
    });
    if (Or(s, "discard") && !t.x.isInRange(x))
      return null;
    var S = [{
      x,
      y: f + h
    }, {
      x,
      y: f
    }];
    return l === "top" ? S.reverse() : S;
  }
  if (a) {
    var O = s.segment, g = O.map(function(b) {
      return t.apply(b, {
        position: o
      });
    });
    return Or(s, "discard") && $z(g, function(b) {
      return !t.isInRange(b);
    }) ? null : g;
  }
  return null;
};
function R5(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, l = e.className, c = e.alwaysShow, s = b5(), u = nx(a), f = ax(i), d = x5();
  if (!s || !d)
    return null;
  Dr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = Yd({
    x: u.scale,
    y: f.scale
  }), v = gt(t), m = gt(r), p = n && n.length === 2, y = N5(h, v, m, p, d, e.position, u.orientation, f.orientation, e);
  if (!y)
    return null;
  var x = A5(y, 2), S = x[0], O = S.x, g = S.y, b = x[1], $ = b.x, C = b.y, _ = Or(e, "hidden") ? "url(#".concat(s, ")") : void 0, M = Jm(Jm({
    clipPath: _
  }, me(e, !0)), {}, {
    x1: O,
    y1: g,
    x2: $,
    y2: C
  });
  return /* @__PURE__ */ T.createElement(Fe, {
    className: je("recharts-reference-line", l)
  }, D5(o, M), Ot.renderCallByParent(e, p5({
    x1: O,
    y1: g,
    x2: $,
    y2: C
  })));
}
var Gd = /* @__PURE__ */ function(e) {
  function t() {
    return w5(this, t), $5(this, t, arguments);
  }
  return _5(t, e), O5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(R5, this.props);
    }
  }]);
}(T.Component);
qd(Gd, "displayName", "ReferenceLine");
qd(Gd, "defaultProps", {
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
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function ga(e) {
  "@babel/helpers - typeof";
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ga(e);
}
function tg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tg(Object(r), !0).forEach(function(n) {
      jc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function B5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ux(n.key), n);
  }
}
function L5(e, t, r) {
  return t && B5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function H5(e, t, r) {
  return t = Fl(t), F5(e, sx() ? Reflect.construct(t, r || [], Fl(e).constructor) : t.apply(e, r));
}
function F5(e, t) {
  if (t && (ga(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return W5(e);
}
function W5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sx = function() {
    return !!e;
  })();
}
function Fl(e) {
  return Fl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fl(e);
}
function V5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sf(e, t);
}
function Sf(e, t) {
  return Sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Sf(e, t);
}
function jc(e, t, r) {
  return t = ux(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ux(e) {
  var t = z5(e, "string");
  return ga(t) == "symbol" ? t : t + "";
}
function z5(e, t) {
  if (ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var U5 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Yd({
    x: a.scale,
    y: i.scale
  }), l = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Or(t, "discard") && !o.isInRange(l) ? null : l;
}, Dc = /* @__PURE__ */ function(e) {
  function t() {
    return k5(this, t), H5(this, t, arguments);
  }
  return V5(t, e), L5(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, l = n.alwaysShow, c = n.clipPathId, s = gt(a), u = gt(i);
      if (Dr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !u)
        return null;
      var f = U5(this.props);
      if (!f)
        return null;
      var d = f.x, h = f.y, v = this.props, m = v.shape, p = v.className, y = Or(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, x = rg(rg({
        clipPath: y
      }, me(this.props, !0)), {}, {
        cx: d,
        cy: h
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: je("recharts-reference-dot", p)
      }, t.renderDot(m, x), Ot.renderCallByParent(this.props, {
        x: d - o,
        y: h - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(T.Component);
jc(Dc, "displayName", "ReferenceDot");
jc(Dc, "defaultProps", {
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
jc(Dc, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : Ce(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(Cc, wf({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
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
function ya(e) {
  "@babel/helpers - typeof";
  return ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ya(e);
}
function ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ag(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ng(Object(r), !0).forEach(function(n) {
      Nc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function q5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dx(n.key), n);
  }
}
function G5(e, t, r) {
  return t && q5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function K5(e, t, r) {
  return t = Wl(t), X5(e, fx() ? Reflect.construct(t, r || [], Wl(e).constructor) : t.apply(e, r));
}
function X5(e, t) {
  if (t && (ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z5(e);
}
function Z5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fx = function() {
    return !!e;
  })();
}
function Wl(e) {
  return Wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wl(e);
}
function Q5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $f(e, t);
}
function $f(e, t) {
  return $f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $f(e, t);
}
function Nc(e, t, r) {
  return t = dx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dx(e) {
  var t = J5(e, "string");
  return ya(t) == "symbol" ? t : t + "";
}
function J5(e, t) {
  if (ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var e6 = function(t, r, n, a, i) {
  var o = i.x1, l = i.x2, c = i.y1, s = i.y2, u = i.xAxis, f = i.yAxis;
  if (!u || !f) return null;
  var d = Yd({
    x: u.scale,
    y: f.scale
  }), h = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(c, {
      position: "start"
    }) : d.y.rangeMin
  }, v = {
    x: r ? d.x.apply(l, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(s, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Or(i, "discard") && (!d.isInRange(h) || !d.isInRange(v)) ? null : G0(h, v);
}, Rc = /* @__PURE__ */ function(e) {
  function t() {
    return Y5(this, t), K5(this, t, arguments);
  }
  return Q5(t, e), G5(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, l = n.y2, c = n.className, s = n.alwaysShow, u = n.clipPathId;
      Dr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = gt(a), d = gt(i), h = gt(o), v = gt(l), m = this.props.shape;
      if (!f && !d && !h && !v && !m)
        return null;
      var p = e6(f, d, h, v, this.props);
      if (!p && !m)
        return null;
      var y = Or(this.props, "hidden") ? "url(#".concat(u, ")") : void 0;
      return /* @__PURE__ */ T.createElement(Fe, {
        className: je("recharts-reference-area", c)
      }, t.renderRect(m, ag(ag({
        clipPath: y
      }, me(this.props, !0)), p)), Ot.renderCallByParent(this.props, p));
    }
  }]);
}(T.Component);
Nc(Rc, "displayName", "ReferenceArea");
Nc(Rc, "defaultProps", {
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
Nc(Rc, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : Ce(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(Ud, Of({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function hx(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function t6(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return m5(n, r);
}
function r6(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, l = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + l
  } : {
    start: n ? a + o : i + l,
    end: n ? a : i
  };
}
function Vl(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function n6(e, t) {
  return hx(e, t + 1);
}
function a6(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, l = t.end, c = 0, s = 1, u = o, f = function() {
    var v = n == null ? void 0 : n[c];
    if (v === void 0)
      return {
        v: hx(n, s)
      };
    var m = c, p, y = function() {
      return p === void 0 && (p = r(v, m)), p;
    }, x = v.coordinate, S = c === 0 || Vl(e, x, y, u, l);
    S || (c = 0, u = o, s += 1), S && (u = x + e * (y() / 2 + a), c += s);
  }, d; s <= i.length; )
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
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ig(Object(r), !0).forEach(function(n) {
      i6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i6(e, t, r) {
  return t = o6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o6(e) {
  var t = l6(e, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function l6(e, t) {
  if (Xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function c6(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = i.length, l = t.start, c = t.end, s = function(d) {
    var h = i[d], v, m = function() {
      return v === void 0 && (v = r(h, d)), v;
    };
    if (d === o - 1) {
      var p = e * (h.coordinate + e * m() / 2 - c);
      i[d] = h = At(At({}, h), {}, {
        tickCoord: p > 0 ? h.coordinate - p * e : h.coordinate
      });
    } else
      i[d] = h = At(At({}, h), {}, {
        tickCoord: h.coordinate
      });
    var y = Vl(e, h.tickCoord, m, l, c);
    y && (c = h.tickCoord - e * (m() / 2 + a), i[d] = At(At({}, h), {}, {
      isShow: !0
    }));
  }, u = o - 1; u >= 0; u--)
    s(u);
  return i;
}
function s6(e, t, r, n, a, i) {
  var o = (n || []).slice(), l = o.length, c = t.start, s = t.end;
  if (i) {
    var u = n[l - 1], f = r(u, l - 1), d = e * (u.coordinate + e * f / 2 - s);
    o[l - 1] = u = At(At({}, u), {}, {
      tickCoord: d > 0 ? u.coordinate - d * e : u.coordinate
    });
    var h = Vl(e, u.tickCoord, function() {
      return f;
    }, c, s);
    h && (s = u.tickCoord - e * (f / 2 + a), o[l - 1] = At(At({}, u), {}, {
      isShow: !0
    }));
  }
  for (var v = i ? l - 1 : l, m = function(x) {
    var S = o[x], O, g = function() {
      return O === void 0 && (O = r(S, x)), O;
    };
    if (x === 0) {
      var b = e * (S.coordinate - e * g() / 2 - c);
      o[x] = S = At(At({}, S), {}, {
        tickCoord: b < 0 ? S.coordinate - b * e : S.coordinate
      });
    } else
      o[x] = S = At(At({}, S), {}, {
        tickCoord: S.coordinate
      });
    var $ = Vl(e, S.tickCoord, g, c, s);
    $ && (c = S.tickCoord + e * (g() / 2 + a), o[x] = At(At({}, S), {}, {
      isShow: !0
    }));
  }, p = 0; p < v; p++)
    m(p);
  return o;
}
function u6(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, l = e.orientation, c = e.interval, s = e.tickFormatter, u = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (ee(c) || wr.isSsr)
    return n6(a, typeof c == "number" && ee(c) ? c : 0);
  var d = [], h = l === "top" || l === "bottom" ? "width" : "height", v = u && h === "width" ? fi(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = function(S, O) {
    var g = Ce(s) ? s(S.value, O) : S.value;
    return h === "width" ? t6(fi(g, {
      fontSize: t,
      letterSpacing: r
    }), v, f) : fi(g, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, p = a.length >= 2 ? Nt(a[1].coordinate - a[0].coordinate) : 1, y = r6(i, p, h);
  return c === "equidistantPreserveStart" ? a6(p, y, m, a, o) : (c === "preserveStart" || c === "preserveStartEnd" ? d = s6(p, y, m, a, o, c === "preserveStartEnd") : d = c6(p, y, m, a, o), d.filter(function(x) {
    return x.isShow;
  }));
}
var f6 = ["viewBox"], d6 = ["viewBox"], h6 = ["ticks"];
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
function og(e, t) {
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
    t % 2 ? og(Object(r), !0).forEach(function(n) {
      Kd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ys(e, t) {
  if (e == null) return {};
  var r = p6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function p6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function v6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vx(n.key), n);
  }
}
function m6(e, t, r) {
  return t && lg(e.prototype, t), r && lg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g6(e, t, r) {
  return t = zl(t), y6(e, px() ? Reflect.construct(t, r || [], zl(e).constructor) : t.apply(e, r));
}
function y6(e, t) {
  if (t && (ba(t) === "object" || typeof t == "function"))
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
function px() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (px = function() {
    return !!e;
  })();
}
function zl(e) {
  return zl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zl(e);
}
function x6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cf(e, t);
}
function Cf(e, t) {
  return Cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Cf(e, t);
}
function Kd(e, t, r) {
  return t = vx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vx(e) {
  var t = w6(e, "string");
  return ba(t) == "symbol" ? t : t + "";
}
function w6(e, t) {
  if (ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kc = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return v6(this, t), n = g6(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return x6(t, e), m6(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Ys(n, f6), l = this.props, c = l.viewBox, s = Ys(l, d6);
      return !Yn(i, c) || !Yn(o, s) || !Yn(a, this.state);
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
      var a = this.props, i = a.x, o = a.y, l = a.width, c = a.height, s = a.orientation, u = a.tickSize, f = a.mirror, d = a.tickMargin, h, v, m, p, y, x, S = f ? -1 : 1, O = n.tickSize || u, g = ee(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (s) {
        case "top":
          h = v = n.coordinate, p = o + +!f * c, m = p - S * O, x = m - S * d, y = g;
          break;
        case "left":
          m = p = n.coordinate, v = i + +!f * l, h = v - S * O, y = h - S * d, x = g;
          break;
        case "right":
          m = p = n.coordinate, v = i + +f * l, h = v + S * O, y = h + S * d, x = g;
          break;
        default:
          h = v = n.coordinate, p = o + +f * c, m = p + S * O, x = m + S * d, y = g;
          break;
      }
      return {
        line: {
          x1: h,
          y1: m,
          x2: v,
          y2: p
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
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, c = n.orientation, s = n.mirror, u = n.axisLine, f = Dt(Dt(Dt({}, me(this.props, !1)), me(u, !1)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var d = +(c === "top" && !s || c === "bottom" && s);
        f = Dt(Dt({}, f), {}, {
          x1: a,
          y1: i + d * l,
          x2: a + o,
          y2: i + d * l
        });
      } else {
        var h = +(c === "left" && !s || c === "right" && s);
        f = Dt(Dt({}, f), {}, {
          x1: a + h * o,
          y1: i,
          x2: a + h * o,
          y2: i + l
        });
      }
      return /* @__PURE__ */ T.createElement("line", zn({}, f, {
        className: je("recharts-cartesian-axis-line", Xt(u, "className"))
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
        var o = this, l = this.props, c = l.tickLine, s = l.stroke, u = l.tick, f = l.tickFormatter, d = l.unit, h = u6(Dt(Dt({}, this.props), {}, {
          ticks: n
        }), a, i), v = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), p = me(this.props, !1), y = me(u, !1), x = Dt(Dt({}, p), {}, {
          fill: "none"
        }, me(c, !1)), S = h.map(function(O, g) {
          var b = o.getTickLineCoord(O), $ = b.line, C = b.tick, _ = Dt(Dt(Dt(Dt({
            textAnchor: v,
            verticalAnchor: m
          }, p), {}, {
            stroke: "none",
            fill: s
          }, y), C), {}, {
            index: g,
            payload: O,
            visibleTicksCount: h.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ T.createElement(Fe, zn({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, Cn(o.props, O, g)), c && /* @__PURE__ */ T.createElement("line", zn({}, x, $, {
            className: je("recharts-cartesian-axis-tick-line", Xt(c, "className"))
          })), u && t.renderTickItem(u, _, "".concat(Ce(f) ? f(O.value, g) : O.value).concat(d || "")));
        });
        return /* @__PURE__ */ T.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, S);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.axisLine, o = a.width, l = a.height, c = a.ticksGenerator, s = a.className, u = a.hide;
      if (u)
        return null;
      var f = this.props, d = f.ticks, h = Ys(f, h6), v = d;
      return Ce(c) && (v = d && d.length > 0 ? c(this.props) : c(h)), o <= 0 || l <= 0 || !v || !v.length ? null : /* @__PURE__ */ T.createElement(Fe, {
        className: je("recharts-cartesian-axis", s),
        ref: function(p) {
          n.layerReference = p;
        }
      }, i && this.renderAxisLine(), this.renderTicks(v, this.state.fontSize, this.state.letterSpacing), Ot.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : Ce(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(Pn, zn({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
}(w.Component);
Kd(kc, "displayName", "CartesianAxis");
Kd(kc, "defaultProps", {
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
var S6 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], O6 = ["key"], mx;
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
function gx(e, t) {
  if (e == null) return {};
  var r = $6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $6(e, t) {
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
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), !0).forEach(function(n) {
      xr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function C6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bx(n.key), n);
  }
}
function P6(e, t, r) {
  return t && sg(e.prototype, t), r && sg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _6(e, t, r) {
  return t = Ul(t), E6(e, yx() ? Reflect.construct(t, r || [], Ul(e).constructor) : t.apply(e, r));
}
function E6(e, t) {
  if (t && (xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return A6(e);
}
function A6(e) {
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
function Ul(e) {
  return Ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ul(e);
}
function T6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pf(e, t);
}
function Pf(e, t) {
  return Pf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Pf(e, t);
}
function xr(e, t, r) {
  return t = bx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bx(e) {
  var t = M6(e, "string");
  return xa(t) == "symbol" ? t : t + "";
}
function M6(e, t) {
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
    C6(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = _6(this, t, [].concat(a)), xr(r, "state", {
      isAnimationFinished: !0
    }), xr(r, "id", ja("recharts-area-")), xr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Ce(o) && o();
    }), xr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Ce(o) && o();
    }), r;
  }
  return T6(t, e), P6(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, l = this.state.isAnimationFinished;
      if (o && !l)
        return null;
      var c = this.props, s = c.dot, u = c.points, f = c.dataKey, d = me(this.props, !1), h = me(s, !0), v = u.map(function(p, y) {
        var x = Kr(Kr(Kr({
          key: "dot-".concat(y),
          r: 3
        }, d), h), {}, {
          index: y,
          cx: p.x,
          cy: p.y,
          dataKey: f,
          value: p.value,
          payload: p.payload,
          points: u
        });
        return t.renderDotItem(s, x);
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
      var a = this.props, i = a.baseLine, o = a.points, l = a.strokeWidth, c = o[0].x, s = o[o.length - 1].x, u = n * Math.abs(c - s), f = Zr(o.map(function(d) {
        return d.y || 0;
      }));
      return ee(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Zr(i.map(function(d) {
        return d.y || 0;
      })), f)), ee(f) ? /* @__PURE__ */ T.createElement("rect", {
        x: c < s ? c : c - u,
        y: 0,
        width: u,
        height: Math.floor(f + (l ? parseInt("".concat(l), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, l = a.strokeWidth, c = o[0].y, s = o[o.length - 1].y, u = n * Math.abs(c - s), f = Zr(o.map(function(d) {
        return d.x || 0;
      }));
      return ee(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Zr(i.map(function(d) {
        return d.x || 0;
      })), f)), ee(f) ? /* @__PURE__ */ T.createElement("rect", {
        x: 0,
        y: c < s ? c : c - u,
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
      var l = this.props, c = l.layout, s = l.type, u = l.stroke, f = l.connectNulls, d = l.isRange;
      l.ref;
      var h = gx(l, S6);
      return /* @__PURE__ */ T.createElement(Fe, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ T.createElement(Xn, Sn({}, me(h, !0), {
        points: n,
        connectNulls: f,
        type: s,
        baseLine: a,
        layout: c,
        stroke: "none",
        className: "recharts-area-area"
      })), u !== "none" && /* @__PURE__ */ T.createElement(Xn, Sn({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: s,
        connectNulls: f,
        fill: "none",
        points: n
      })), u !== "none" && d && /* @__PURE__ */ T.createElement(Xn, Sn({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: s,
        connectNulls: f,
        fill: "none",
        points: a
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, l = o.points, c = o.baseLine, s = o.isAnimationActive, u = o.animationBegin, f = o.animationDuration, d = o.animationEasing, h = o.animationId, v = this.state, m = v.prevPoints, p = v.prevBaseLine;
      return /* @__PURE__ */ T.createElement(Pr, {
        begin: u,
        duration: f,
        isActive: s,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(y) {
        var x = y.t;
        if (m) {
          var S = m.length / l.length, O = l.map(function(C, _) {
            var M = Math.floor(_ * S);
            if (m[M]) {
              var P = m[M], I = Lt(P.x, C.x), N = Lt(P.y, C.y);
              return Kr(Kr({}, C), {}, {
                x: I(x),
                y: N(x)
              });
            }
            return C;
          }), g;
          if (ee(c) && typeof c == "number") {
            var b = Lt(p, c);
            g = b(x);
          } else if (Ee(c) || Ia(c)) {
            var $ = Lt(p, 0);
            g = $(x);
          } else
            g = c.map(function(C, _) {
              var M = Math.floor(_ * S);
              if (p[M]) {
                var P = p[M], I = Lt(P.x, C.x), N = Lt(P.y, C.y);
                return Kr(Kr({}, C), {}, {
                  x: I(x),
                  y: N(x)
                });
              }
              return C;
            });
          return i.renderAreaStatically(O, g, n, a);
        }
        return /* @__PURE__ */ T.createElement(Fe, null, /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(x))), /* @__PURE__ */ T.createElement(Fe, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(l, c, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, l = i.baseLine, c = i.isAnimationActive, s = this.state, u = s.prevPoints, f = s.prevBaseLine, d = s.totalLength;
      return c && o && o.length && (!u && d > 0 || !oa(u, o) || !oa(f, l)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, l, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, l = a.points, c = a.className, s = a.top, u = a.left, f = a.xAxis, d = a.yAxis, h = a.width, v = a.height, m = a.isAnimationActive, p = a.id;
      if (i || !l || !l.length)
        return null;
      var y = this.state.isAnimationFinished, x = l.length === 1, S = je("recharts-area", c), O = f && f.allowDataOverflow, g = d && d.allowDataOverflow, b = O || g, $ = Ee(p) ? this.id : p, C = (n = me(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, _ = C.r, M = _ === void 0 ? 3 : _, P = C.strokeWidth, I = P === void 0 ? 2 : P, N = YC(o) ? o : {}, j = N.clipDot, E = j === void 0 ? !0 : j, A = M * 2 + I;
      return /* @__PURE__ */ T.createElement(Fe, {
        className: S
      }, O || g ? /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-".concat($)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: O ? u : u - h / 2,
        y: g ? s : s - v / 2,
        width: O ? h : h * 2,
        height: g ? v : v * 2
      })), !E && /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-dots-".concat($)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: u - A / 2,
        y: s - A / 2,
        width: h + A,
        height: v + A
      }))) : null, x ? null : this.renderArea(b, $), (o || x) && this.renderDots(b, E, $), (!m || y) && Rr.renderCallByParent(this.props, l));
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
}(w.PureComponent);
mx = ln;
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
  var c = a === "horizontal" ? n : r, s = c.scale.domain();
  if (c.type === "number") {
    var u = Math.max(s[0], s[1]), f = Math.min(s[0], s[1]);
    return l === "dataMin" ? f : l === "dataMax" || u < 0 ? u : Math.max(Math.min(s[0], s[1]), 0);
  }
  return l === "dataMin" ? s[0] : l === "dataMax" ? s[1] : s[0];
});
xr(ln, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, l = e.bandSize, c = e.dataKey, s = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, h = t.layout, v = s && s.length, m = mx.getBaseValue(t, r, n, a), p = h === "horizontal", y = !1, x = f.map(function(O, g) {
    var b;
    v ? b = s[u + g] : (b = mt(O, c), Array.isArray(b) ? y = !0 : b = [m, b]);
    var $ = b[1] == null || v && mt(O, c) == null;
    return p ? {
      x: Rv({
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
      y: Rv({
        axis: a,
        ticks: o,
        bandSize: l,
        entry: O,
        index: g
      }),
      value: b,
      payload: O
    };
  }), S;
  return v || y ? S = x.map(function(O) {
    var g = Array.isArray(O.value) ? O.value[0] : null;
    return p ? {
      x: O.x,
      y: g != null && O.y != null ? a.scale(g) : null
    } : {
      x: g != null ? n.scale(g) : null,
      y: O.y
    };
  }) : S = p ? a.scale(m) : n.scale(m), Kr({
    points: x,
    baseLine: S,
    layout: h,
    isRange: y
  }, d);
});
xr(ln, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ T.isValidElement(e))
    r = /* @__PURE__ */ T.cloneElement(e, t);
  else if (Ce(e))
    r = e(t);
  else {
    var n = je("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = gx(t, O6);
    r = /* @__PURE__ */ T.createElement(Cc, Sn({}, i, {
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
function I6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function j6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sx(n.key), n);
  }
}
function D6(e, t, r) {
  return t && j6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function N6(e, t, r) {
  return t = Yl(t), R6(e, xx() ? Reflect.construct(t, r || [], Yl(e).constructor) : t.apply(e, r));
}
function R6(e, t) {
  if (t && (wa(t) === "object" || typeof t == "function"))
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
function xx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xx = function() {
    return !!e;
  })();
}
function Yl(e) {
  return Yl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yl(e);
}
function B6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _f(e, t);
}
function wx(e, t, r) {
  return t = Sx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sx(e) {
  var t = L6(e, "string");
  return wa(t) == "symbol" ? t : t + "";
}
function L6(e, t) {
  if (wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ef() {
  return Ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ef.apply(this, arguments);
}
function H6(e) {
  var t = e.xAxisId, r = ix(), n = ox(), a = nx(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(kc, Ef({}, a, {
      className: je("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
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
var Bc = /* @__PURE__ */ function(e) {
  function t() {
    return I6(this, t), N6(this, t, arguments);
  }
  return B6(t, e), D6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(H6, this.props);
    }
  }]);
}(T.Component);
wx(Bc, "displayName", "XAxis");
wx(Bc, "defaultProps", {
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
function F6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function W6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Cx(n.key), n);
  }
}
function V6(e, t, r) {
  return t && W6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z6(e, t, r) {
  return t = ql(t), U6(e, Ox() ? Reflect.construct(t, r || [], ql(e).constructor) : t.apply(e, r));
}
function U6(e, t) {
  if (t && (Sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Y6(e);
}
function Y6(e) {
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
function ql(e) {
  return ql = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ql(e);
}
function q6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Af(e, t);
}
function Af(e, t) {
  return Af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Af(e, t);
}
function $x(e, t, r) {
  return t = Cx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cx(e) {
  var t = G6(e, "string");
  return Sa(t) == "symbol" ? t : t + "";
}
function G6(e, t) {
  if (Sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Sa(n) != "object") return n;
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
var K6 = function(t) {
  var r = t.yAxisId, n = ix(), a = ox(), i = ax(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(kc, Tf({}, i, {
      className: je("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
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
}, Lc = /* @__PURE__ */ function(e) {
  function t() {
    return F6(this, t), z6(this, t, arguments);
  }
  return q6(t, e), V6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(K6, this.props);
    }
  }]);
}(T.Component);
$x(Lc, "displayName", "YAxis");
$x(Lc, "defaultProps", {
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
function ug(e) {
  return J6(e) || Q6(e) || Z6(e) || X6();
}
function X6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z6(e, t) {
  if (e) {
    if (typeof e == "string") return Mf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mf(e, t);
  }
}
function Q6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function J6(e) {
  if (Array.isArray(e)) return Mf(e);
}
function Mf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var If = function(t, r, n, a, i) {
  var o = rr(t, Gd), l = rr(t, Dc), c = [].concat(ug(o), ug(l)), s = rr(t, Rc), u = "".concat(a, "Id"), f = a[0], d = r;
  if (c.length && (d = c.reduce(function(m, p) {
    if (p.props[u] === n && Or(p.props, "extendDomain") && ee(p.props[f])) {
      var y = p.props[f];
      return [Math.min(m[0], y), Math.max(m[1], y)];
    }
    return m;
  }, d)), s.length) {
    var h = "".concat(f, "1"), v = "".concat(f, "2");
    d = s.reduce(function(m, p) {
      if (p.props[u] === n && Or(p.props, "extendDomain") && ee(p.props[h]) && ee(p.props[v])) {
        var y = p.props[h], x = p.props[v];
        return [Math.min(m[0], y, x), Math.max(m[1], y, x)];
      }
      return m;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(m, p) {
    return ee(p) ? [Math.min(m[0], p), Math.max(m[1], p)] : m;
  }, d)), d;
}, Px = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function a(c, s, u) {
    this.fn = c, this.context = s, this.once = u || !1;
  }
  function i(c, s, u, f, d) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var h = new a(u, f || c, d), v = r ? r + s : s;
    return c._events[v] ? c._events[v].fn ? c._events[v] = [c._events[v], h] : c._events[v].push(h) : (c._events[v] = h, c._eventsCount++), c;
  }
  function o(c, s) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[s];
  }
  function l() {
    this._events = new n(), this._eventsCount = 0;
  }
  l.prototype.eventNames = function() {
    var s = [], u, f;
    if (this._eventsCount === 0) return s;
    for (f in u = this._events)
      t.call(u, f) && s.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(u)) : s;
  }, l.prototype.listeners = function(s) {
    var u = r ? r + s : s, f = this._events[u];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, h = f.length, v = new Array(h); d < h; d++)
      v[d] = f[d].fn;
    return v;
  }, l.prototype.listenerCount = function(s) {
    var u = r ? r + s : s, f = this._events[u];
    return f ? f.fn ? 1 : f.length : 0;
  }, l.prototype.emit = function(s, u, f, d, h, v) {
    var m = r ? r + s : s;
    if (!this._events[m]) return !1;
    var p = this._events[m], y = arguments.length, x, S;
    if (p.fn) {
      switch (p.once && this.removeListener(s, p.fn, void 0, !0), y) {
        case 1:
          return p.fn.call(p.context), !0;
        case 2:
          return p.fn.call(p.context, u), !0;
        case 3:
          return p.fn.call(p.context, u, f), !0;
        case 4:
          return p.fn.call(p.context, u, f, d), !0;
        case 5:
          return p.fn.call(p.context, u, f, d, h), !0;
        case 6:
          return p.fn.call(p.context, u, f, d, h, v), !0;
      }
      for (S = 1, x = new Array(y - 1); S < y; S++)
        x[S - 1] = arguments[S];
      p.fn.apply(p.context, x);
    } else {
      var O = p.length, g;
      for (S = 0; S < O; S++)
        switch (p[S].once && this.removeListener(s, p[S].fn, void 0, !0), y) {
          case 1:
            p[S].fn.call(p[S].context);
            break;
          case 2:
            p[S].fn.call(p[S].context, u);
            break;
          case 3:
            p[S].fn.call(p[S].context, u, f);
            break;
          case 4:
            p[S].fn.call(p[S].context, u, f, d);
            break;
          default:
            if (!x) for (g = 1, x = new Array(y - 1); g < y; g++)
              x[g - 1] = arguments[g];
            p[S].fn.apply(p[S].context, x);
        }
    }
    return !0;
  }, l.prototype.on = function(s, u, f) {
    return i(this, s, u, f, !1);
  }, l.prototype.once = function(s, u, f) {
    return i(this, s, u, f, !0);
  }, l.prototype.removeListener = function(s, u, f, d) {
    var h = r ? r + s : s;
    if (!this._events[h]) return this;
    if (!u)
      return o(this, h), this;
    var v = this._events[h];
    if (v.fn)
      v.fn === u && (!d || v.once) && (!f || v.context === f) && o(this, h);
    else {
      for (var m = 0, p = [], y = v.length; m < y; m++)
        (v[m].fn !== u || d && !v[m].once || f && v[m].context !== f) && p.push(v[m]);
      p.length ? this._events[h] = p.length === 1 ? p[0] : p : o(this, h);
    }
    return this;
  }, l.prototype.removeAllListeners = function(s) {
    var u;
    return s ? (u = r ? r + s : s, this._events[u] && o(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
  }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
})(Px);
var e8 = Px.exports;
const t8 = /* @__PURE__ */ We(e8);
var qs = new t8(), Gs = "recharts.syncMouseEvents";
function Zi(e) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e);
}
function r8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _x(n.key), n);
  }
}
function a8(e, t, r) {
  return t && n8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ks(e, t, r) {
  return t = _x(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _x(e) {
  var t = i8(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function i8(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var o8 = /* @__PURE__ */ function() {
  function e() {
    r8(this, e), Ks(this, "activeIndex", 0), Ks(this, "coordinateList", []), Ks(this, "layout", "horizontal");
  }
  return a8(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, l = o === void 0 ? null : o, c = r.layout, s = c === void 0 ? null : c, u = r.offset, f = u === void 0 ? null : u, d = r.mouseHandlerCallback, h = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = l ?? this.container, this.layout = s ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
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
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, l = a.height, c = this.coordinateList[this.activeIndex].coordinate, s = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, u = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = i + c + s, d = o + this.offset.top + l / 2 + u;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
}();
function l8(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], a = e == null ? void 0 : e[1];
    if (n && a && ee(n) && ee(a))
      return !0;
  }
  return !1;
}
function c8(e, t, r, n) {
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
function Ex(e) {
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
function s8(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var l = t.cx, c = t.cy, s = t.innerRadius, u = t.outerRadius, f = t.angle, d = rt(l, c, s, f), h = rt(l, c, u, f);
      n = d.x, a = d.y, i = h.x, o = h.y;
    } else
      return Ex(t);
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
function jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), !0).forEach(function(n) {
      u8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u8(e, t, r) {
  return t = f8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f8(e) {
  var t = d8(e, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function d8(e, t) {
  if (Qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h8(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, l = e.activePayload, c = e.offset, s = e.activeTooltipIndex, u = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var v, m = Xn;
  if (d === "ScatterChart")
    v = o, m = fW;
  else if (d === "BarChart")
    v = c8(f, o, c, u), m = Ud;
  else if (f === "radial") {
    var p = Ex(o), y = p.cx, x = p.cy, S = p.radius, O = p.startAngle, g = p.endAngle;
    v = {
      cx: y,
      cy: x,
      startAngle: O,
      endAngle: g,
      innerRadius: S,
      outerRadius: S
    }, m = $0;
  } else
    v = {
      points: s8(f, o, c)
    }, m = Xn;
  var b = jo(jo(jo(jo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, c), v), me(h, !1)), {}, {
    payload: l,
    payloadIndex: s,
    className: je("recharts-tooltip-cursor", h.className)
  });
  return /* @__PURE__ */ w.isValidElement(h) ? /* @__PURE__ */ w.cloneElement(h, b) : /* @__PURE__ */ w.createElement(m, b);
}
var p8 = ["item"], v8 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
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
function dg(e, t) {
  return y8(e) || g8(e, t) || Tx(e, t) || m8();
}
function m8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g8(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], c = !0, s = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(c = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (u) {
      s = !0, a = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return l;
  }
}
function y8(e) {
  if (Array.isArray(e)) return e;
}
function hg(e, t) {
  if (e == null) return {};
  var r = b8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function b8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function x8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function w8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mx(n.key), n);
  }
}
function S8(e, t, r) {
  return t && w8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function O8(e, t, r) {
  return t = Gl(t), $8(e, Ax() ? Reflect.construct(t, r || [], Gl(e).constructor) : t.apply(e, r));
}
function $8(e, t) {
  if (t && (Oa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return C8(e);
}
function C8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ax() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ax = function() {
    return !!e;
  })();
}
function Gl(e) {
  return Gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Gl(e);
}
function P8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jf(e, t);
}
function jf(e, t) {
  return jf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, jf(e, t);
}
function $a(e) {
  return A8(e) || E8(e) || Tx(e) || _8();
}
function _8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tx(e, t) {
  if (e) {
    if (typeof e == "string") return Df(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Df(e, t);
  }
}
function E8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function A8(e) {
  if (Array.isArray(e)) return Df(e);
}
function Df(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pg(e, t) {
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
    t % 2 ? pg(Object(r), !0).forEach(function(n) {
      ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ye(e, t, r) {
  return t = Mx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mx(e) {
  var t = T8(e, "string");
  return Oa(t) == "symbol" ? t : t + "";
}
function T8(e, t) {
  if (Oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var M8 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, I8 = {
  width: "100%",
  height: "100%"
}, Ix = {
  x: 0,
  y: 0
};
function Do(e) {
  return e;
}
var j8 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, D8 = function(t, r, n, a) {
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
    var c = i.coordinate, s = a.angle;
    return Y(Y(Y({}, a), rt(a.cx, a.cy, c, s)), {}, {
      angle: s,
      radius: c
    });
  }
  return Ix;
}, Hc = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(l, c) {
    var s = c.props.data;
    return s && s.length ? [].concat($a(l), $a(s)) : l;
  }, []);
  return o.length > 0 ? o : t && t.length && ee(a) && ee(i) ? t.slice(a, i + 1) : [];
};
function jx(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Nf = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, l = Hc(r, t);
  return n < 0 || !i || !i.length || n >= l.length ? null : i.reduce(function(c, s) {
    var u, f = (u = s.props.data) !== null && u !== void 0 ? u : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = f === void 0 ? l : f;
      d = qo(h, o.dataKey, a);
    } else
      d = f && f[n] || l[n];
    return d ? [].concat($a(c), [y0(s, d)]) : c;
  }, []);
}, vg = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = j8(i, n), l = t.orderedTooltipTicks, c = t.tooltipAxis, s = t.tooltipTicks, u = KL(o, l, s, c);
  if (u >= 0 && s) {
    var f = s[u] && s[u].value, d = Nf(t, r, u, f), h = D8(n, l, u, i);
    return {
      activeTooltipIndex: u,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: h
    };
  }
  return null;
}, N8 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, u = t.layout, f = t.children, d = t.stackOffset, h = h0(u, i);
  return n.reduce(function(v, m) {
    var p, y = m.type.defaultProps !== void 0 ? Y(Y({}, m.type.defaultProps), m.props) : m.props, x = y.type, S = y.dataKey, O = y.allowDataOverflow, g = y.allowDuplicatedCategory, b = y.scale, $ = y.ticks, C = y.includeHidden, _ = y[o];
    if (v[_])
      return v;
    var M = Hc(t.data, {
      graphicalItems: a.filter(function(B) {
        var W, z = o in B.props ? B.props[o] : (W = B.type.defaultProps) === null || W === void 0 ? void 0 : W[o];
        return z === _;
      }),
      dataStartIndex: c,
      dataEndIndex: s
    }), P = M.length, I, N, j;
    l8(y.domain, O, x) && (I = Ku(y.domain, null, O), h && (x === "number" || b !== "auto") && (j = hi(M, S, "category")));
    var E = jx(x);
    if (!I || I.length === 0) {
      var A, D = (A = y.domain) !== null && A !== void 0 ? A : E;
      if (S) {
        if (I = hi(M, S, x), x === "category" && h) {
          var R = kC(I);
          g && R ? (N = I, I = Dl(0, P)) : g || (I = Hv(D, I, m).reduce(function(B, W) {
            return B.indexOf(W) >= 0 ? B : [].concat($a(B), [W]);
          }, []));
        } else if (x === "category")
          g ? I = I.filter(function(B) {
            return B !== "" && !Ee(B);
          }) : I = Hv(D, I, m).reduce(function(B, W) {
            return B.indexOf(W) >= 0 || W === "" || Ee(W) ? B : [].concat($a(B), [W]);
          }, []);
        else if (x === "number") {
          var k = eH(M, a.filter(function(B) {
            var W, z, G = o in B.props ? B.props[o] : (W = B.type.defaultProps) === null || W === void 0 ? void 0 : W[o], Q = "hide" in B.props ? B.props.hide : (z = B.type.defaultProps) === null || z === void 0 ? void 0 : z.hide;
            return G === _ && (C || !Q);
          }), S, i, u);
          k && (I = k);
        }
        h && (x === "number" || b !== "auto") && (j = hi(M, S, "category"));
      } else h ? I = Dl(0, P) : l && l[_] && l[_].hasStack && x === "number" ? I = d === "expand" ? [0, 1] : g0(l[_].stackGroups, c, s) : I = d0(M, a.filter(function(B) {
        var W = o in B.props ? B.props[o] : B.type.defaultProps[o], z = "hide" in B.props ? B.props.hide : B.type.defaultProps.hide;
        return W === _ && (C || !z);
      }), x, u, !0);
      if (x === "number")
        I = If(f, I, _, i, $), D && (I = Ku(D, I, O));
      else if (x === "category" && D) {
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
      originalDomain: (p = y.domain) !== null && p !== void 0 ? p : E,
      isCategorical: h,
      layout: u
    })));
  }, {});
}, R8 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, u = t.layout, f = t.children, d = Hc(t.data, {
    graphicalItems: n,
    dataStartIndex: c,
    dataEndIndex: s
  }), h = d.length, v = h0(u, i), m = -1;
  return n.reduce(function(p, y) {
    var x = y.type.defaultProps !== void 0 ? Y(Y({}, y.type.defaultProps), y.props) : y.props, S = x[o], O = jx("number");
    if (!p[S]) {
      m++;
      var g;
      return v ? g = Dl(0, h) : l && l[S] && l[S].hasStack ? (g = g0(l[S].stackGroups, c, s), g = If(f, g, S, i)) : (g = Ku(O, d0(d, n.filter(function(b) {
        var $, C, _ = o in b.props ? b.props[o] : ($ = b.type.defaultProps) === null || $ === void 0 ? void 0 : $[o], M = "hide" in b.props ? b.props.hide : (C = b.type.defaultProps) === null || C === void 0 ? void 0 : C.hide;
        return _ === S && !M;
      }), "number", u), a.defaultProps.allowDataOverflow), g = If(f, g, S, i)), Y(Y({}, p), {}, ye({}, S, Y(Y({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: Xt(M8, "".concat(i, ".").concat(m % 2), null),
        domain: g,
        originalDomain: O,
        isCategorical: v,
        layout: u
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return p;
  }, {});
}, k8 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, l = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, u = t.children, f = "".concat(a, "Id"), d = rr(u, i), h = {};
  return d && d.length ? h = N8(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: c,
    dataEndIndex: s
  }) : o && o.length && (h = R8(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: c,
    dataEndIndex: s
  })), h;
}, B8 = function(t) {
  var r = Hn(t), n = wn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: yd(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: wl(r, n)
  };
}, mg = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = qt(r, ha), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, L8 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = jr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, gg = function(t) {
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
}, H8 = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, l = t.yAxisMap, c = l === void 0 ? {} : l, s = n.width, u = n.height, f = n.children, d = n.margin || {}, h = qt(f, ha), v = qt(f, qn), m = Object.keys(c).reduce(function(g, b) {
    var $ = c[b], C = $.orientation;
    return !$.mirror && !$.hide ? Y(Y({}, g), {}, ye({}, C, g[C] + $.width)) : g;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), p = Object.keys(o).reduce(function(g, b) {
    var $ = o[b], C = $.orientation;
    return !$.mirror && !$.hide ? Y(Y({}, g), {}, ye({}, C, Xt(g, "".concat(C)) + $.height)) : g;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), y = Y(Y({}, p), m), x = y.bottom;
  h && (y.bottom += h.props.height || ha.defaultProps.height), v && r && (y = QL(y, a, n, r));
  var S = s - y.left - y.right, O = u - y.top - y.bottom;
  return Y(Y({
    brushBottom: x
  }, y), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(O, 0)
  });
}, F8 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Dx = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, l = o === void 0 ? ["axis"] : o, c = t.axisComponents, s = t.legendContent, u = t.formatAxisMap, f = t.defaultProps, d = function(y, x) {
    var S = x.graphicalItems, O = x.stackGroups, g = x.offset, b = x.updateId, $ = x.dataStartIndex, C = x.dataEndIndex, _ = y.barSize, M = y.layout, P = y.barGap, I = y.barCategoryGap, N = y.maxBarSize, j = gg(M), E = j.numericAxisName, A = j.cateAxisName, D = L8(S), R = [];
    return S.forEach(function(k, L) {
      var H = Hc(y.data, {
        graphicalItems: [k],
        dataStartIndex: $,
        dataEndIndex: C
      }), B = k.type.defaultProps !== void 0 ? Y(Y({}, k.type.defaultProps), k.props) : k.props, W = B.dataKey, z = B.maxBarSize, G = B["".concat(E, "Id")], Q = B["".concat(A, "Id")], ne = {}, te = c.reduce(function(Ae, De) {
        var Ge, Qe, Ke = x["".concat(De.axisType, "Map")], Ue = B["".concat(De.axisType, "Id")];
        Ke && Ke[Ue] || De.axisType === "zAxis" || (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Specifying a(n) ".concat(De.axisType, "Id requires a corresponding ").concat(
          De.axisType,
          "Id on the targeted graphical component "
        ).concat((Ge = k == null || (Qe = k.type) === null || Qe === void 0 ? void 0 : Qe.displayName) !== null && Ge !== void 0 ? Ge : "")) : Ft());
        var Ve = Ke[Ue];
        return Y(Y({}, Ae), {}, ye(ye({}, De.axisType, Ve), "".concat(De.axisType, "Ticks"), wn(Ve)));
      }, ne), V = te[A], K = te["".concat(A, "Ticks")], q = O && O[G] && O[G].hasStack && sH(k, O[G].stackGroups), F = jr(k.type).indexOf("Bar") >= 0, J = wl(V, K), Z = [], le = D && XL({
        barSize: _,
        stackGroups: O,
        totalSize: F8(te, A)
      });
      if (F) {
        var re, ae, de = Ee(z) ? N : z, $e = (re = (ae = wl(V, K, !0)) !== null && ae !== void 0 ? ae : de) !== null && re !== void 0 ? re : 0;
        Z = ZL({
          barGap: P,
          barCategoryGap: I,
          bandSize: $e !== J ? $e : J,
          sizeList: le[Q],
          maxBarSize: de
        }), $e !== J && (Z = Z.map(function(Ae) {
          return Y(Y({}, Ae), {}, {
            position: Y(Y({}, Ae.position), {}, {
              offset: Ae.position.offset - $e / 2
            })
          });
        }));
      }
      var ke = k && k.type && k.type.getComposedData;
      ke && R.push({
        props: Y(Y({}, ke(Y(Y({}, te), {}, {
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
        }, E, te[E]), A, te[A]), "animationId", b)),
        childIndex: KC(k, y.children),
        item: k
      });
    }), R;
  }, h = function(y, x) {
    var S = y.props, O = y.dataStartIndex, g = y.dataEndIndex, b = y.updateId;
    if (!jh({
      props: S
    }))
      return null;
    var $ = S.children, C = S.layout, _ = S.stackOffset, M = S.data, P = S.reverseStackOrder, I = gg(C), N = I.numericAxisName, j = I.cateAxisName, E = rr($, n), A = lH(M, E, "".concat(N, "Id"), "".concat(j, "Id"), _, P), D = c.reduce(function(B, W) {
      var z = "".concat(W.axisType, "Map");
      return Y(Y({}, B), {}, ye({}, z, k8(S, Y(Y({}, W), {}, {
        graphicalItems: E,
        stackGroups: W.axisType === N && A,
        dataStartIndex: O,
        dataEndIndex: g
      }))));
    }, {}), R = H8(Y(Y({}, D), {}, {
      props: S,
      graphicalItems: E
    }), x == null ? void 0 : x.legendBBox);
    Object.keys(D).forEach(function(B) {
      D[B] = u(S, D[B], R, B.replace("Map", ""), r);
    });
    var k = D["".concat(j, "Map")], L = B8(k), H = d(S, Y(Y({}, D), {}, {
      dataStartIndex: O,
      dataEndIndex: g,
      updateId: b,
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
  }, v = /* @__PURE__ */ function(p) {
    function y(x) {
      var S, O, g;
      return x8(this, y), g = O8(this, y, [x]), ye(g, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), ye(g, "accessibilityManager", new o8()), ye(g, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var $ = g.state, C = $.dataStartIndex, _ = $.dataEndIndex, M = $.updateId;
          g.setState(Y({
            legendBBox: b
          }, h({
            props: g.props,
            dataStartIndex: C,
            dataEndIndex: _,
            updateId: M
          }, Y(Y({}, g.state), {}, {
            legendBBox: b
          }))));
        }
      }), ye(g, "handleReceiveSyncEvent", function(b, $, C) {
        if (g.props.syncId === b) {
          if (C === g.eventEmitterSymbol && typeof g.props.syncMethod != "function")
            return;
          g.applySyncEvent($);
        }
      }), ye(g, "handleBrushChange", function(b) {
        var $ = b.startIndex, C = b.endIndex;
        if ($ !== g.state.dataStartIndex || C !== g.state.dataEndIndex) {
          var _ = g.state.updateId;
          g.setState(function() {
            return Y({
              dataStartIndex: $,
              dataEndIndex: C
            }, h({
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
      }), ye(g, "handleMouseEnter", function(b) {
        var $ = g.getMouseInfo(b);
        if ($) {
          var C = Y(Y({}, $), {}, {
            isTooltipActive: !0
          });
          g.setState(C), g.triggerSyncEvent(C);
          var _ = g.props.onMouseEnter;
          Ce(_) && _(C, b);
        }
      }), ye(g, "triggeredAfterMouseMove", function(b) {
        var $ = g.getMouseInfo(b), C = $ ? Y(Y({}, $), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        g.setState(C), g.triggerSyncEvent(C);
        var _ = g.props.onMouseMove;
        Ce(_) && _(C, b);
      }), ye(g, "handleItemMouseEnter", function(b) {
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
      }), ye(g, "handleItemMouseLeave", function() {
        g.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), ye(g, "handleMouseMove", function(b) {
        b.persist(), g.throttleTriggeredAfterMouseMove(b);
      }), ye(g, "handleMouseLeave", function(b) {
        g.throttleTriggeredAfterMouseMove.cancel();
        var $ = {
          isTooltipActive: !1
        };
        g.setState($), g.triggerSyncEvent($);
        var C = g.props.onMouseLeave;
        Ce(C) && C($, b);
      }), ye(g, "handleOuterEvent", function(b) {
        var $ = GC(b), C = Xt(g.props, "".concat($));
        if ($ && Ce(C)) {
          var _, M;
          /.*touch.*/i.test($) ? M = g.getMouseInfo(b.changedTouches[0]) : M = g.getMouseInfo(b), C((_ = M) !== null && _ !== void 0 ? _ : {}, b);
        }
      }), ye(g, "handleClick", function(b) {
        var $ = g.getMouseInfo(b);
        if ($) {
          var C = Y(Y({}, $), {}, {
            isTooltipActive: !0
          });
          g.setState(C), g.triggerSyncEvent(C);
          var _ = g.props.onClick;
          Ce(_) && _(C, b);
        }
      }), ye(g, "handleMouseDown", function(b) {
        var $ = g.props.onMouseDown;
        if (Ce($)) {
          var C = g.getMouseInfo(b);
          $(C, b);
        }
      }), ye(g, "handleMouseUp", function(b) {
        var $ = g.props.onMouseUp;
        if (Ce($)) {
          var C = g.getMouseInfo(b);
          $(C, b);
        }
      }), ye(g, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && g.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), ye(g, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && g.handleMouseDown(b.changedTouches[0]);
      }), ye(g, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && g.handleMouseUp(b.changedTouches[0]);
      }), ye(g, "triggerSyncEvent", function(b) {
        g.props.syncId !== void 0 && qs.emit(Gs, g.props.syncId, b, g.eventEmitterSymbol);
      }), ye(g, "applySyncEvent", function(b) {
        var $ = g.props, C = $.layout, _ = $.syncMethod, M = g.state.updateId, P = b.dataStartIndex, I = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          g.setState(Y({
            dataStartIndex: P,
            dataEndIndex: I
          }, h({
            props: g.props,
            dataStartIndex: P,
            dataEndIndex: I,
            updateId: M
          }, g.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var N = b.chartX, j = b.chartY, E = b.activeTooltipIndex, A = g.state, D = A.offset, R = A.tooltipTicks;
          if (!D)
            return;
          if (typeof _ == "function")
            E = _(R, b);
          else if (_ === "value") {
            E = -1;
            for (var k = 0; k < R.length; k++)
              if (R[k].value === b.activeLabel) {
                E = k;
                break;
              }
          }
          var L = Y(Y({}, D), {}, {
            x: D.left,
            y: D.top
          }), H = Math.min(N, L.x + L.width), B = Math.min(j, L.y + L.height), W = R[E] && R[E].value, z = Nf(g.state, g.props.data, E), G = R[E] ? {
            x: C === "horizontal" ? R[E].coordinate : H,
            y: C === "horizontal" ? B : R[E].coordinate
          } : Ix;
          g.setState(Y(Y({}, b), {}, {
            activeLabel: W,
            activeCoordinate: G,
            activePayload: z,
            activeTooltipIndex: E
          }));
        } else
          g.setState(b);
      }), ye(g, "renderCursor", function(b) {
        var $, C = g.state, _ = C.isTooltipActive, M = C.activeCoordinate, P = C.activePayload, I = C.offset, N = C.activeTooltipIndex, j = C.tooltipAxisBandSize, E = g.getTooltipEventType(), A = ($ = b.props.active) !== null && $ !== void 0 ? $ : _, D = g.props.layout, R = b.key || "_recharts-cursor";
        return /* @__PURE__ */ T.createElement(h8, {
          key: R,
          activeCoordinate: M,
          activePayload: P,
          activeTooltipIndex: N,
          chartName: r,
          element: b,
          isActive: A,
          layout: D,
          offset: I,
          tooltipAxisBandSize: j,
          tooltipEventType: E
        });
      }), ye(g, "renderPolarAxis", function(b, $, C) {
        var _ = Xt(b, "type.axisType"), M = Xt(g.state, "".concat(_, "Map")), P = b.type.defaultProps, I = P !== void 0 ? Y(Y({}, P), b.props) : b.props, N = M && M[I["".concat(_, "Id")]];
        return /* @__PURE__ */ w.cloneElement(b, Y(Y({}, N), {}, {
          className: je(_, N.className),
          key: b.key || "".concat($, "-").concat(C),
          ticks: wn(N, !0)
        }));
      }), ye(g, "renderPolarGrid", function(b) {
        var $ = b.props, C = $.radialLines, _ = $.polarAngles, M = $.polarRadius, P = g.state, I = P.radiusAxisMap, N = P.angleAxisMap, j = Hn(I), E = Hn(N), A = E.cx, D = E.cy, R = E.innerRadius, k = E.outerRadius;
        return /* @__PURE__ */ w.cloneElement(b, {
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
          key: b.key || "polar-grid",
          radialLines: C
        });
      }), ye(g, "renderLegend", function() {
        var b = g.state.formattedGraphicalItems, $ = g.props, C = $.children, _ = $.width, M = $.height, P = g.props.margin || {}, I = _ - (P.left || 0) - (P.right || 0), N = u0({
          children: C,
          formattedGraphicalItems: b,
          legendWidth: I,
          legendContent: s
        });
        if (!N)
          return null;
        var j = N.item, E = hg(N, p8);
        return /* @__PURE__ */ w.cloneElement(j, Y(Y({}, E), {}, {
          chartWidth: _,
          chartHeight: M,
          margin: P,
          onBBoxUpdate: g.handleLegendBBoxUpdate
        }));
      }), ye(g, "renderTooltip", function() {
        var b, $ = g.props, C = $.children, _ = $.accessibilityLayer, M = qt(C, lr);
        if (!M)
          return null;
        var P = g.state, I = P.isTooltipActive, N = P.activeCoordinate, j = P.activePayload, E = P.activeLabel, A = P.offset, D = (b = M.props.active) !== null && b !== void 0 ? b : I;
        return /* @__PURE__ */ w.cloneElement(M, {
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
      }), ye(g, "renderBrush", function(b) {
        var $ = g.props, C = $.margin, _ = $.data, M = g.state, P = M.offset, I = M.dataStartIndex, N = M.dataEndIndex, j = M.updateId;
        return /* @__PURE__ */ w.cloneElement(b, {
          key: b.key || "_recharts-brush",
          onChange: Ao(g.handleBrushChange, b.props.onChange),
          data: _,
          x: ee(b.props.x) ? b.props.x : P.left,
          y: ee(b.props.y) ? b.props.y : P.top + P.height + P.brushBottom - (C.bottom || 0),
          width: ee(b.props.width) ? b.props.width : P.width,
          startIndex: I,
          endIndex: N,
          updateId: "brush-".concat(j)
        });
      }), ye(g, "renderReferenceElement", function(b, $, C) {
        if (!b)
          return null;
        var _ = g, M = _.clipPathId, P = g.state, I = P.xAxisMap, N = P.yAxisMap, j = P.offset, E = b.type.defaultProps || {}, A = b.props, D = A.xAxisId, R = D === void 0 ? E.xAxisId : D, k = A.yAxisId, L = k === void 0 ? E.yAxisId : k;
        return /* @__PURE__ */ w.cloneElement(b, {
          key: b.key || "".concat($, "-").concat(C),
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
      }), ye(g, "renderActivePoints", function(b) {
        var $ = b.item, C = b.activePoint, _ = b.basePoint, M = b.childIndex, P = b.isRange, I = [], N = $.props.key, j = $.item.type.defaultProps !== void 0 ? Y(Y({}, $.item.type.defaultProps), $.item.props) : $.item.props, E = j.activeDot, A = j.dataKey, D = Y(Y({
          index: M,
          dataKey: A,
          cx: C.x,
          cy: C.y,
          r: 4,
          fill: zd($.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: C.payload,
          value: C.value
        }, me(E, !1)), Go(E));
        return I.push(y.renderActiveDot(E, D, "".concat(N, "-activePoint-").concat(M))), _ ? I.push(y.renderActiveDot(E, Y(Y({}, D), {}, {
          cx: _.x,
          cy: _.y
        }), "".concat(N, "-basePoint-").concat(M))) : P && I.push(null), I;
      }), ye(g, "renderGraphicChild", function(b, $, C) {
        var _ = g.filterFormatItem(b, $, C);
        if (!_)
          return null;
        var M = g.getTooltipEventType(), P = g.state, I = P.isTooltipActive, N = P.tooltipAxis, j = P.activeTooltipIndex, E = P.activeLabel, A = g.props.children, D = qt(A, lr), R = _.props, k = R.points, L = R.isRange, H = R.baseLine, B = _.item.type.defaultProps !== void 0 ? Y(Y({}, _.item.type.defaultProps), _.item.props) : _.item.props, W = B.activeDot, z = B.hide, G = B.activeBar, Q = B.activeShape, ne = !!(!z && I && D && (W || G || Q)), te = {};
        M !== "axis" && D && D.props.trigger === "click" ? te = {
          onClick: Ao(g.handleItemMouseEnter, b.props.onClick)
        } : M !== "axis" && (te = {
          onMouseLeave: Ao(g.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: Ao(g.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var V = /* @__PURE__ */ w.cloneElement(b, Y(Y({}, _.props), te));
        function K(De) {
          return typeof N.dataKey == "function" ? N.dataKey(De.payload) : null;
        }
        if (ne)
          if (j >= 0) {
            var q, F;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var J = typeof N.dataKey == "function" ? K : "payload.".concat(N.dataKey.toString());
              q = qo(k, J, E), F = L && H && qo(H, J, E);
            } else
              q = k == null ? void 0 : k[j], F = L && H && H[j];
            if (Q || G) {
              var Z = b.props.activeIndex !== void 0 ? b.props.activeIndex : j;
              return [/* @__PURE__ */ w.cloneElement(b, Y(Y(Y({}, _.props), te), {}, {
                activeIndex: Z
              })), null, null];
            }
            if (!Ee(q))
              return [V].concat($a(g.renderActivePoints({
                item: _,
                activePoint: q,
                basePoint: F,
                childIndex: j,
                isRange: L
              })));
          } else {
            var le, re = (le = g.getItemByXY(g.state.activeCoordinate)) !== null && le !== void 0 ? le : {
              graphicalItem: V
            }, ae = re.graphicalItem, de = ae.item, $e = de === void 0 ? b : de, ke = ae.childIndex, Ae = Y(Y(Y({}, _.props), te), {}, {
              activeIndex: ke
            });
            return [/* @__PURE__ */ w.cloneElement($e, Ae), null, null];
          }
        return L ? [V, null, null] : [V, null];
      }), ye(g, "renderCustomized", function(b, $, C) {
        return /* @__PURE__ */ w.cloneElement(b, Y(Y({
          key: "recharts-customized-".concat(C)
        }, g.props), g.state));
      }), ye(g, "renderMap", {
        CartesianGrid: {
          handler: Do,
          once: !0
        },
        ReferenceArea: {
          handler: g.renderReferenceElement
        },
        ReferenceLine: {
          handler: Do
        },
        ReferenceDot: {
          handler: g.renderReferenceElement
        },
        XAxis: {
          handler: Do
        },
        YAxis: {
          handler: Do
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
      }), g.clipPathId = "".concat((S = x.id) !== null && S !== void 0 ? S : ja("recharts"), "-clip"), g.throttleTriggeredAfterMouseMove = cb(g.triggeredAfterMouseMove, (O = x.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), g.state = {}, g;
    }
    return P8(y, p), S8(y, [{
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
        var S = this.props, O = S.children, g = S.data, b = S.height, $ = S.layout, C = qt(O, lr);
        if (C) {
          var _ = C.props.defaultIndex;
          if (!(typeof _ != "number" || _ < 0 || _ > this.state.tooltipTicks.length - 1)) {
            var M = this.state.tooltipTicks[_] && this.state.tooltipTicks[_].value, P = Nf(this.state, g, _, M), I = this.state.tooltipTicks[_].coordinate, N = (this.state.offset.top + b) / 2, j = $ === "horizontal", E = j ? {
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
      value: function(S) {
        uu([qt(S.children, lr)], [qt(this.props.children, lr)]) || this.displayDefaultTooltip();
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
        var O = this.container, g = O.getBoundingClientRect(), b = ON(g), $ = {
          chartX: Math.round(S.pageX - b.left),
          chartY: Math.round(S.pageY - b.top)
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
        var R = vg(this.state, this.props.data, this.props.layout, _);
        return R ? Y(Y({}, $), R) : null;
      }
    }, {
      key: "inRange",
      value: function(S, O) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, $ = S / g, C = O / g;
        if (b === "horizontal" || b === "vertical") {
          var _ = this.state.offset, M = $ >= _.left && $ <= _.left + _.width && C >= _.top && C <= _.top + _.height;
          return M ? {
            x: $,
            y: C
          } : null;
        }
        var P = this.state, I = P.angleAxisMap, N = P.radiusAxisMap;
        if (I && N) {
          var j = Hn(I);
          return Vv({
            x: $,
            y: C
          }, j);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var S = this.props.children, O = this.getTooltipEventType(), g = qt(S, lr), b = {};
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
        var $ = Go(this.props, this.handleOuterEvent);
        return Y(Y({}, $), b);
      }
    }, {
      key: "addListener",
      value: function() {
        qs.on(Gs, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        qs.removeListener(Gs, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(S, O, g) {
        for (var b = this.state.formattedGraphicalItems, $ = 0, C = b.length; $ < C; $++) {
          var _ = b[$];
          if (_.item === S || _.props.key === S.key || O === jr(_.item.type) && g === _.childIndex)
            return _;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var S = this.clipPathId, O = this.state.offset, g = O.left, b = O.top, $ = O.height, C = O.width;
        return /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
          id: S
        }, /* @__PURE__ */ T.createElement("rect", {
          x: g,
          y: b,
          height: $,
          width: C
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var S = this.state.xAxisMap;
        return S ? Object.entries(S).reduce(function(O, g) {
          var b = dg(g, 2), $ = b[0], C = b[1];
          return Y(Y({}, O), {}, ye({}, $, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var S = this.state.yAxisMap;
        return S ? Object.entries(S).reduce(function(O, g) {
          var b = dg(g, 2), $ = b[0], C = b[1];
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
        var O = this.state, g = O.formattedGraphicalItems, b = O.activeItem;
        if (g && g.length)
          for (var $ = 0, C = g.length; $ < C; $++) {
            var _ = g[$], M = _.props, P = _.item, I = P.type.defaultProps !== void 0 ? Y(Y({}, P.type.defaultProps), P.props) : P.props, N = jr(P.type);
            if (N === "Bar") {
              var j = (M.data || []).find(function(R) {
                return U3(S, R);
              });
              if (j)
                return {
                  graphicalItem: _,
                  payload: j
                };
            } else if (N === "RadialBar") {
              var E = (M.data || []).find(function(R) {
                return Vv(S, R);
              });
              if (E)
                return {
                  graphicalItem: _,
                  payload: E
                };
            } else if (Tc(_, b) || Mc(_, b) || qi(_, b)) {
              var A = jV({
                graphicalItem: _,
                activeTooltipItem: b,
                itemData: I.data
              }), D = I.activeIndex === void 0 ? A : I.activeIndex;
              return {
                graphicalItem: Y(Y({}, _), {}, {
                  childIndex: D
                }),
                payload: qi(_, b) ? I.data[A] : _.props.data[A]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var S = this;
        if (!jh(this))
          return null;
        var O = this.props, g = O.children, b = O.className, $ = O.width, C = O.height, _ = O.style, M = O.compact, P = O.title, I = O.desc, N = hg(O, v8), j = me(N, !1);
        if (M)
          return /* @__PURE__ */ T.createElement(Zm, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ T.createElement(du, Un({}, j, {
            width: $,
            height: C,
            title: P,
            desc: I
          }), this.renderClipPath(), Nh(g, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var E, A;
          j.tabIndex = (E = this.props.tabIndex) !== null && E !== void 0 ? E : 0, j.role = (A = this.props.role) !== null && A !== void 0 ? A : "application", j.onKeyDown = function(R) {
            S.accessibilityManager.keyboardEvent(R);
          }, j.onFocus = function() {
            S.accessibilityManager.focus();
          };
        }
        var D = this.parseEventsOfWrapper();
        return /* @__PURE__ */ T.createElement(Zm, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ T.createElement("div", Un({
          className: je("recharts-wrapper", b),
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
        }), /* @__PURE__ */ T.createElement(du, Un({}, j, {
          width: $,
          height: C,
          title: P,
          desc: I,
          style: I8
        }), this.renderClipPath(), Nh(g, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(w.Component);
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
  }, f)), ye(v, "getDerivedStateFromProps", function(p, y) {
    var x = p.dataKey, S = p.data, O = p.children, g = p.width, b = p.height, $ = p.layout, C = p.stackOffset, _ = p.margin, M = y.dataStartIndex, P = y.dataEndIndex;
    if (y.updateId === void 0) {
      var I = mg(p);
      return Y(Y(Y({}, I), {}, {
        updateId: 0
      }, h(Y(Y({
        props: p
      }, I), {}, {
        updateId: 0
      }), y)), {}, {
        prevDataKey: x,
        prevData: S,
        prevWidth: g,
        prevHeight: b,
        prevLayout: $,
        prevStackOffset: C,
        prevMargin: _,
        prevChildren: O
      });
    }
    if (x !== y.prevDataKey || S !== y.prevData || g !== y.prevWidth || b !== y.prevHeight || $ !== y.prevLayout || C !== y.prevStackOffset || !Yn(_, y.prevMargin)) {
      var N = mg(p), j = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: y.chartX,
        chartY: y.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: y.isTooltipActive
      }, E = Y(Y({}, vg(y, S, $)), {}, {
        updateId: y.updateId + 1
      }), A = Y(Y(Y({}, N), j), E);
      return Y(Y(Y({}, A), h(Y({
        props: p
      }, A), y)), {}, {
        prevDataKey: x,
        prevData: S,
        prevWidth: g,
        prevHeight: b,
        prevLayout: $,
        prevStackOffset: C,
        prevMargin: _,
        prevChildren: O
      });
    }
    if (!uu(O, y.prevChildren)) {
      var D, R, k, L, H = qt(O, ha), B = H && (D = (R = H.props) === null || R === void 0 ? void 0 : R.startIndex) !== null && D !== void 0 ? D : M, W = H && (k = (L = H.props) === null || L === void 0 ? void 0 : L.endIndex) !== null && k !== void 0 ? k : P, z = B !== M || W !== P, G = !Ee(S), Q = G && !z ? y.updateId : y.updateId + 1;
      return Y(Y({
        updateId: Q
      }, h(Y(Y({
        props: p
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
  }), ye(v, "renderActiveDot", function(p, y, x) {
    var S;
    return /* @__PURE__ */ w.isValidElement(p) ? S = /* @__PURE__ */ w.cloneElement(p, y) : Ce(p) ? S = p(y) : S = /* @__PURE__ */ T.createElement(Cc, y), /* @__PURE__ */ T.createElement(Fe, {
      className: "recharts-active-dot",
      key: x
    }, S);
  });
  var m = /* @__PURE__ */ w.forwardRef(function(y, x) {
    return /* @__PURE__ */ T.createElement(v, Un({}, y, {
      ref: x
    }));
  });
  return m.displayName = v.displayName, m;
}, W8 = Dx({
  chartName: "PieChart",
  GraphicalChild: Yr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Ac
  }, {
    axisType: "radiusAxis",
    AxisComp: _c
  }],
  formatAxisMap: bH,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), V8 = Dx({
  chartName: "AreaChart",
  GraphicalChild: ln,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Bc
  }, {
    axisType: "yAxis",
    AxisComp: Lc
  }],
  formatAxisMap: h5
});
function z8({ data: e, labels: t }) {
  const r = Math.max(...e), n = Math.min(...e), a = e.map((i, o) => ({
    name: t[o],
    value: i,
    label: i === r || i === n ? `$${ui(i)}` : null
  }));
  return /* @__PURE__ */ U.jsx(sb, { width: "100%", height: "100%", children: /* @__PURE__ */ U.jsxs(
    V8,
    {
      data: a,
      margin: { top: 20, right: 0, left: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ U.jsx("defs", { children: /* @__PURE__ */ U.jsxs("linearGradient", { id: "colorValue", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ U.jsx("stop", { offset: "5%", stopColor: "#52c41a", stopOpacity: 0.1 }),
          /* @__PURE__ */ U.jsx("stop", { offset: "95%", stopColor: "#52c41a", stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ U.jsx(
          Bc,
          {
            dataKey: "name",
            hide: !0
          }
        ),
        /* @__PURE__ */ U.jsx(
          Lc,
          {
            hide: !0
          }
        ),
        /* @__PURE__ */ U.jsx(
          lr,
          {
            formatter: (i) => [`$${ui(i)}`, "Value"],
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
        /* @__PURE__ */ U.jsx(
          ln,
          {
            type: "monotone",
            dataKey: "value",
            stroke: "#52c41a",
            strokeWidth: 2,
            fill: "url(#colorValue)",
            animationDuration: 1e3,
            label: ({ x: i, y: o, value: l }) => l === r || l === n ? /* @__PURE__ */ U.jsxs(
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
function U8({ data: e }) {
  return /* @__PURE__ */ U.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ U.jsx("div", { className: "flex-1", children: /* @__PURE__ */ U.jsx(sb, { width: "100%", height: "100%", children: /* @__PURE__ */ U.jsxs(W8, { children: [
      /* @__PURE__ */ U.jsx(
        Yr,
        {
          data: e,
          cx: "50%",
          cy: "50%",
          innerRadius: "75%",
          outerRadius: "100%",
          dataKey: "value",
          animationDuration: 1e3,
          children: e.map((t, r) => /* @__PURE__ */ U.jsx(hc, { fill: t.color }, `cell-${r}`))
        }
      ),
      /* @__PURE__ */ U.jsx(
        lr,
        {
          formatter: (t) => [`${t}%`],
          contentStyle: {
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }
        }
      )
    ] }) }) }),
    /* @__PURE__ */ U.jsx("div", { className: "flex gap-4 mt-4 mx-auto", children: e.map((t, r) => /* @__PURE__ */ U.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ U.jsx(
        "div",
        {
          className: "w-3 h-3 rounded-full",
          style: { backgroundColor: t.color }
        }
      ),
      /* @__PURE__ */ U.jsx("span", { className: "text-sm text-gray-600", children: t.label })
    ] }, r)) })
  ] });
}
const Y8 = ["performanceChart"], q8 = async (e) => {
  try {
    const t = await Lg.get("/user-assets/performance-chart", {
      params: { address: e }
    });
    return {
      chartData: t.data.chartData,
      distribution: t.data.distribution
    };
  } catch (t) {
    throw Ff(t);
  }
};
function G8(e) {
  const { address: t } = Jl.all();
  return b1({
    queryKey: [...Y8, t],
    queryFn: () => q8(t),
    enabled: (e == null ? void 0 : e.enabled) && !!t
  });
}
const K8 = {
  ETH: "#3d7dc9",
  MATIC: "#c08fec",
  TVWT: "#52c41a"
};
function X8() {
  const e = T1(), { address: t } = Jl.all(), [r, n] = w.useState("30D"), [a, i] = w.useState([]), [o, l] = w.useState([]), [c, s] = w.useState([]), { data: u, isFetched: f, refetch: d } = G8({
    enabled: !!t
  });
  w.useEffect(() => {
    f && h();
  }, [f]);
  const h = async () => {
    try {
      const m = (u == null ? void 0 : u.chartData) || [], p = m.map((O) => O.value), y = m.map((O) => O.date);
      i(p), l(y);
      const S = ((u == null ? void 0 : u.distribution) || []).map((O) => ({
        label: O.label,
        value: O.value,
        color: K8[O.label]
      }));
      s(S);
    } catch (m) {
      const p = Ff(m);
      Xg.error(p.message);
    }
  }, v = (m) => {
    n(m), m === "7D" ? (i((u == null ? void 0 : u.chartData.slice(-7).map((p) => p.value)) || []), l((u == null ? void 0 : u.chartData.slice(-7).map((p) => p.date)) || [])) : (i((u == null ? void 0 : u.chartData.map((p) => p.value)) || []), l((u == null ? void 0 : u.chartData.map((p) => p.date)) || []));
  };
  return /* @__PURE__ */ U.jsxs("div", { children: [
    /* @__PURE__ */ U.jsx("div", { className: Le(
      "text-[#111111] font-bold",
      "text-2xl mobile:text-[32px]",
      "mb-6"
    ), children: "Overview" }),
    /* @__PURE__ */ U.jsxs("div", { className: Le(
      "flex flex-wrap justify-between",
      "gap-0 mobile:gap-[18px]"
    ), children: [
      /* @__PURE__ */ U.jsxs("div", { className: Le(
        "border border-[#ebebeb] rounded-xl p-[20px]",
        "w-full tablet:w-[366px] laptop:w-[500px] desktop:w-[804px]"
      ), children: [
        /* @__PURE__ */ U.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ U.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ U.jsx("p", { className: "text-base text-[#111111] font-bold leading-tight", children: "Performance" }),
            /* @__PURE__ */ U.jsx(E1, { size: 14 })
          ] }),
          /* @__PURE__ */ U.jsx(
            x1,
            {
              value: r,
              onValueChange: (m) => v(m),
              children: /* @__PURE__ */ U.jsxs(w1, { className: "h-[28px] bg-[#f5f5f5]", children: [
                /* @__PURE__ */ U.jsx(
                  mh,
                  {
                    value: "7D",
                    className: Le(
                      "h-[20px] text-base font-normal text-[#111111]",
                      "data-[state=active]:text-[#979797]"
                    ),
                    children: "7D"
                  }
                ),
                /* @__PURE__ */ U.jsx(
                  mh,
                  {
                    value: "30D",
                    className: Le(
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
        /* @__PURE__ */ U.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ U.jsx(z8, { data: a, labels: o }) })
      ] }),
      /* @__PURE__ */ U.jsxs("div", { className: Le(
        "border border-[#ebebeb] rounded-xl p-[20px]",
        "flex-1"
      ), children: [
        /* @__PURE__ */ U.jsxs("div", { className: "flex justify-between items-center mb-[20px]", children: [
          /* @__PURE__ */ U.jsx("p", { className: "text-base text-[#111111] font-bold leading-tight", children: "Crypto allocation" }),
          /* @__PURE__ */ U.jsx("button", { className: "text-base text-[#727272]", onClick: () => e("/dashboard/viewall"), children: "View all" })
        ] }),
        /* @__PURE__ */ U.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ U.jsx(U8, { data: c }) })
      ] })
    ] })
  ] });
}
const Nx = (e, t) => {
  const r = w.useContext(D1), n = w.useMemo(() => {
    var i;
    const o = t || gh[e], l = (i = r == null ? void 0 : r[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof o == "function" ? o() : o), l || {});
  }, [e, t, r]), a = w.useMemo(() => {
    const i = r == null ? void 0 : r.locale;
    return r != null && r.exist && !i ? gh.locale : i;
  }, [r]);
  return [n, a];
};
var Z8 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Q8 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, J8 = "".concat(Z8, " ").concat(Q8).split(/[\s\n]+/), e4 = "aria-", t4 = "data-";
function yg(e, t) {
  return e.indexOf(t) === 0;
}
function Xd(e) {
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
    (r.aria && (a === "role" || yg(a, e4)) || // Data
    r.data && yg(a, t4) || // Attr
    r.attr && J8.includes(a)) && (n[a] = e[a]);
  }), n;
}
const Rx = (e) => {
  const [, , , , t] = Wf();
  return t ? `${e}-css-var` : "";
};
var r4 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, n4 = function(t, r) {
  return /* @__PURE__ */ w.createElement(Pa, we({}, t, {
    ref: r,
    icon: r4
  }));
}, Zd = /* @__PURE__ */ w.forwardRef(n4);
Oe.env.NODE_ENV !== "production" && (Zd.displayName = "LoadingOutlined");
var lo = ue({}, M1), a4 = lo.version, i4 = lo.render, o4 = lo.unmountComponentAtNode, Fc;
try {
  var l4 = Number((a4 || "").split(".")[0]);
  l4 >= 18 && (Fc = lo.createRoot);
} catch {
}
function bg(e) {
  var t = lo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && An(t) === "object" && (t.usingClientEntryPoint = e);
}
var Kl = "__rc_react_root__";
function c4(e, t) {
  bg(!0);
  var r = t[Kl] || Fc(t);
  bg(!1), r.render(e), t[Kl] = r;
}
function s4(e, t) {
  i4(e, t);
}
function u4(e, t) {
  if (Fc) {
    c4(e, t);
    return;
  }
  s4(e, t);
}
function f4(e) {
  return Rf.apply(this, arguments);
}
function Rf() {
  return Rf = Hg(/* @__PURE__ */ zo().mark(function e(t) {
    return zo().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[Kl]) === null || a === void 0 || a.unmount(), delete t[Kl];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Rf.apply(this, arguments);
}
function d4(e) {
  o4(e);
}
function h4(e) {
  return kf.apply(this, arguments);
}
function kf() {
  return kf = Hg(/* @__PURE__ */ zo().mark(function e(t) {
    return zo().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Fc === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", f4(t));
        case 2:
          d4(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), kf.apply(this, arguments);
}
const p4 = (e) => {
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
}, v4 = N1("Wave", (e) => [p4(e)]), kx = `${R1}-wave-target`;
function Xs(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function m4(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Xs(t) ? t : Xs(r) ? r : Xs(n) ? n : null;
}
function Zs(e) {
  return Number.isNaN(e) ? 0 : e;
}
const g4 = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = w.useRef(null), [i, o] = w.useState(null), [l, c] = w.useState([]), [s, u] = w.useState(0), [f, d] = w.useState(0), [h, v] = w.useState(0), [m, p] = w.useState(0), [y, x] = w.useState(!1), S = {
    left: s,
    top: f,
    width: h,
    height: m,
    borderRadius: l.map((b) => `${b}px`).join(" ")
  };
  i && (S["--wave-color"] = i);
  function O() {
    const b = getComputedStyle(r);
    o(m4(r));
    const $ = b.position === "static", {
      borderLeftWidth: C,
      borderTopWidth: _
    } = b;
    u($ ? r.offsetLeft : Zs(-parseFloat(C))), d($ ? r.offsetTop : Zs(-parseFloat(_))), v(r.offsetWidth), p(r.offsetHeight);
    const {
      borderTopLeftRadius: M,
      borderTopRightRadius: P,
      borderBottomLeftRadius: I,
      borderBottomRightRadius: N
    } = b;
    c([M, P, N, I].map((j) => Zs(parseFloat(j))));
  }
  if (w.useEffect(() => {
    if (r) {
      const b = Wt(() => {
        O(), x(!0);
      });
      let $;
      return typeof ResizeObserver < "u" && ($ = new ResizeObserver(O), $.observe(r)), () => {
        Wt.cancel(b), $ == null || $.disconnect();
      };
    }
  }, []), !y)
    return null;
  const g = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(kx));
  return /* @__PURE__ */ w.createElement(Fg, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (b, $) => {
      var C;
      if ($.deadline || $.propertyName === "opacity") {
        const _ = (C = a.current) === null || C === void 0 ? void 0 : C.parentElement;
        h4(_).then(() => {
          _ == null || _.remove();
        });
      }
      return !1;
    }
  }, (b, $) => {
    let {
      className: C
    } = b;
    return /* @__PURE__ */ w.createElement("div", {
      ref: Vf(a, $),
      className: Ie(t, C, {
        "wave-quick": g
      }),
      style: S
    });
  });
}, y4 = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), u4(/* @__PURE__ */ w.createElement(g4, Object.assign({}, t, {
    target: e
  })), a);
}, b4 = (e, t, r) => {
  const {
    wave: n
  } = w.useContext(en), [, a, i] = Wf(), o = st((s) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${kx}`) || u, {
      showEffect: d
    } = n || {};
    (d || y4)(f, {
      className: t,
      token: a,
      component: r,
      event: s,
      hashId: i
    });
  }), l = w.useRef();
  return (s) => {
    Wt.cancel(l.current), l.current = Wt(() => {
      o(s);
    });
  };
}, Bx = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = w.useContext(en), i = w.useRef(null), o = a("wave"), [, l] = v4(o), c = b4(i, Ie(o, l), n);
  if (T.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (d) => {
      !Vg(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ T.isValidElement(t))
    return t ?? null;
  const s = k1(t) ? Vf(t.ref, i) : i;
  return Wg(t, {
    ref: s
  });
};
Oe.env.NODE_ENV !== "production" && (Bx.displayName = "Wave");
const Qd = (e) => {
  const t = T.useContext(B1);
  return T.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
};
var x4 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Lx = /* @__PURE__ */ w.createContext(void 0), w4 = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = w.useContext(en), {
    prefixCls: n,
    size: a,
    className: i
  } = e, o = x4(e, ["prefixCls", "size", "className"]), l = t("btn-group", n), [, , c] = Wf();
  let s = "";
  switch (a) {
    case "large":
      s = "lg";
      break;
    case "small":
      s = "sm";
      break;
  }
  if (Oe.env.NODE_ENV !== "production") {
    const f = Ji("Button.Group");
    Oe.env.NODE_ENV !== "production" && f(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const u = Ie(l, {
    [`${l}-${s}`]: s,
    [`${l}-rtl`]: r === "rtl"
  }, i, c);
  return /* @__PURE__ */ w.createElement(Lx.Provider, {
    value: a
  }, /* @__PURE__ */ w.createElement("div", Object.assign({}, o, {
    className: u
  })));
}, xg = /^[\u4E00-\u9FA5]{2}$/, Bf = xg.test.bind(xg);
function wg(e) {
  return typeof e == "string";
}
function No(e) {
  return e === "text" || e === "link";
}
function S4(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && wg(e.type) && Bf(e.props.children) ? Wg(e, {
    children: e.props.children.split("").join(r)
  }) : wg(e) ? Bf(e) ? /* @__PURE__ */ T.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ T.createElement("span", null, e) : L1(e) ? /* @__PURE__ */ T.createElement("span", null, e) : e;
}
function O4(e, t) {
  let r = !1;
  const n = [];
  return T.Children.forEach(e, (a) => {
    const i = typeof a, o = i === "string" || i === "number";
    if (r && o) {
      const l = n.length - 1, c = n[l];
      n[l] = `${c}${a}`;
    } else
      n.push(a);
    r = o;
  }), T.Children.map(n, (a) => S4(a, t));
}
const Hx = /* @__PURE__ */ w.forwardRef((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: i
  } = e, o = Ie(`${i}-icon`, r);
  return /* @__PURE__ */ T.createElement("span", {
    ref: t,
    className: o,
    style: n
  }, a);
}), Sg = /* @__PURE__ */ w.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: i
  } = e, o = Ie(`${r}-loading-icon`, n);
  return /* @__PURE__ */ T.createElement(Hx, {
    prefixCls: r,
    className: o,
    style: a,
    ref: t
  }, /* @__PURE__ */ T.createElement(Zd, {
    className: i
  }));
}), Qs = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Js = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), $4 = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: i
  } = e, o = !!r;
  return n ? /* @__PURE__ */ T.createElement(Sg, {
    prefixCls: t,
    className: a,
    style: i
  }) : /* @__PURE__ */ T.createElement(Fg, {
    visible: o,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: o,
    removeOnLeave: !0,
    onAppearStart: Qs,
    onAppearActive: Js,
    onEnterStart: Qs,
    onEnterActive: Js,
    onLeaveStart: Js,
    onLeaveActive: Qs
  }, (l, c) => {
    let {
      className: s,
      style: u
    } = l;
    return /* @__PURE__ */ T.createElement(Sg, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, i), u),
      ref: c,
      iconClassName: s
    });
  });
}, Og = (e, t) => ({
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
}), C4 = (e) => {
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
      Og(`${t}-primary`, a),
      Og(`${t}-danger`, i)
    ]
  };
}, wt = Math.round;
function eu(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    n[a] = t(n[a] || 0, r[a] || "", a);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const $g = (e, t, r) => r === 0 ? e : e / 100;
function ni(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class Wc {
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
    } else if (t instanceof Wc)
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
    const c = t / 60, s = (1 - Math.abs(2 * n - 1)) * r, u = s * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = s, o = u) : c >= 1 && c < 2 ? (i = u, o = s) : c >= 2 && c < 3 ? (o = s, l = u) : c >= 3 && c < 4 ? (o = u, l = s) : c >= 4 && c < 5 ? (i = u, l = s) : c >= 5 && c < 6 && (i = s, l = u);
    const f = n - s / 2;
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
    const o = t / 60, l = Math.floor(o), c = o - l, s = wt(n * (1 - r) * 255), u = wt(n * (1 - r * c) * 255), f = wt(n * (1 - r * (1 - c)) * 255);
    switch (l) {
      case 0:
        this.g = f, this.b = s;
        break;
      case 1:
        this.r = u, this.b = s;
        break;
      case 2:
        this.r = s, this.b = f;
        break;
      case 3:
        this.r = s, this.g = u;
        break;
      case 4:
        this.r = f, this.g = s;
        break;
      case 5:
      default:
        this.g = s, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = eu(t, $g);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = eu(t, $g);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = eu(t, (n, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? wt(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var P4 = ["b"], _4 = ["v"], tu = function(t) {
  return Math.round(Number(t || 0));
}, E4 = function(t) {
  if (t instanceof Wc)
    return t;
  if (t && An(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, a = Kt(r, P4);
    return ue(ue({}, a), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Wr = /* @__PURE__ */ function(e) {
  H1(r, e);
  var t = F1(r);
  function r(n) {
    return zf(this, r), t.call(this, E4(n));
  }
  return Uf(r, [{
    key: "toHsbString",
    value: function() {
      var a = this.toHsb(), i = tu(a.s * 100), o = tu(a.b * 100), l = tu(a.h), c = a.a, s = "hsb(".concat(l, ", ").concat(i, "%, ").concat(o, "%)"), u = "hsba(".concat(l, ", ").concat(i, "%, ").concat(o, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? s : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var a = this.toHsv(), i = a.v, o = Kt(a, _4);
      return ue(ue({}, o), {}, {
        b: i,
        a: this.a
      });
    }
  }]), r;
}(Wc), A4 = "rc-color-picker", Zn = function(t) {
  return t instanceof Wr ? t : new Wr(t);
}, T4 = Zn("#1677ff"), Fx = function(t) {
  var r = t.offset, n = t.targetRef, a = t.containerRef, i = t.color, o = t.type, l = a.current.getBoundingClientRect(), c = l.width, s = l.height, u = n.current.getBoundingClientRect(), f = u.width, d = u.height, h = f / 2, v = d / 2, m = (r.x + h) / c, p = 1 - (r.y + v) / s, y = i.toHsb(), x = m, S = (r.x + h) / c * 360;
  if (o)
    switch (o) {
      case "hue":
        return Zn(ue(ue({}, y), {}, {
          h: S <= 0 ? 0 : S
        }));
      case "alpha":
        return Zn(ue(ue({}, y), {}, {
          a: x <= 0 ? 0 : x
        }));
    }
  return Zn({
    h: y.h,
    s: m <= 0 ? 0 : m,
    b: p >= 1 ? 1 : p,
    a: y.a
  });
}, Wx = function(t, r) {
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
}, M4 = function(t) {
  var r = t.color, n = t.prefixCls, a = t.className, i = t.style, o = t.onClick, l = "".concat(n, "-color-block");
  return /* @__PURE__ */ T.createElement("div", {
    className: Ie(l, a),
    style: i,
    onClick: o
  }, /* @__PURE__ */ T.createElement("div", {
    className: "".concat(l, "-inner"),
    style: {
      background: r
    }
  }));
};
function I4(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function Vx(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, a = e.onDragChange, i = e.onDragChangeComplete, o = e.calculate, l = e.color, c = e.disabledDrag, s = w.useState({
    x: 0,
    y: 0
  }), u = X(s, 2), f = u[0], d = u[1], h = w.useRef(null), v = w.useRef(null);
  w.useEffect(function() {
    d(o());
  }, [l]), w.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", v.current), h.current = null, v.current = null;
    };
  }, []);
  var m = function(O) {
    var g = I4(O), b = g.pageX, $ = g.pageY, C = r.current.getBoundingClientRect(), _ = C.x, M = C.y, P = C.width, I = C.height, N = t.current.getBoundingClientRect(), j = N.width, E = N.height, A = j / 2, D = E / 2, R = Math.max(0, Math.min(b - _, P)) - A, k = Math.max(0, Math.min($ - M, I)) - D, L = {
      x: R,
      y: n === "x" ? f.y : k
    };
    if (j === 0 && E === 0 || j !== E)
      return !1;
    a == null || a(L);
  }, p = function(O) {
    O.preventDefault(), m(O);
  }, y = function(O) {
    O.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", v.current), h.current = null, v.current = null, i == null || i();
  }, x = function(O) {
    document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), !c && (m(O), document.addEventListener("mousemove", p), document.addEventListener("mouseup", y), document.addEventListener("touchmove", p), document.addEventListener("touchend", y), h.current = p, v.current = y);
  };
  return [f, x];
}
var zx = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, a = t.color, i = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: Ie("".concat(i, "-handler"), ve({}, "".concat(i, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: a
    }
  });
}, Ux = function(t) {
  var r = t.children, n = t.style, a = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: "".concat(a, "-palette"),
    style: ue({
      position: "relative"
    }, n)
  }, r);
}, Yx = /* @__PURE__ */ w.forwardRef(function(e, t) {
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
}), j4 = function(t) {
  var r = t.color, n = t.onChange, a = t.prefixCls, i = t.onChangeComplete, o = t.disabled, l = w.useRef(), c = w.useRef(), s = w.useRef(r), u = st(function(m) {
    var p = Fx({
      offset: m,
      targetRef: c,
      containerRef: l,
      color: r
    });
    s.current = p, n(p);
  }), f = Vx({
    color: r,
    containerRef: l,
    targetRef: c,
    calculate: function() {
      return Wx(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(s.current);
    },
    disabledDrag: o
  }), d = X(f, 2), h = d[0], v = d[1];
  return /* @__PURE__ */ T.createElement("div", {
    ref: l,
    className: "".concat(a, "-select"),
    onMouseDown: v,
    onTouchStart: v
  }, /* @__PURE__ */ T.createElement(Ux, {
    prefixCls: a
  }, /* @__PURE__ */ T.createElement(Yx, {
    x: h.x,
    y: h.y,
    ref: c
  }, /* @__PURE__ */ T.createElement(zx, {
    color: r.toRgbString(),
    prefixCls: a
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(a, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, D4 = function(t, r) {
  var n = fr(t, {
    value: r
  }), a = X(n, 2), i = a[0], o = a[1], l = w.useMemo(function() {
    return Zn(i);
  }, [i]);
  return [l, o];
}, N4 = function(t) {
  var r = t.colors, n = t.children, a = t.direction, i = a === void 0 ? "to right" : a, o = t.type, l = t.prefixCls, c = w.useMemo(function() {
    return r.map(function(s, u) {
      var f = Zn(s);
      return o === "alpha" && u === r.length - 1 && (f = new Wr(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [r, o]);
  return /* @__PURE__ */ T.createElement("div", {
    className: "".concat(l, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, n);
}, R4 = function(t) {
  var r = t.prefixCls, n = t.colors, a = t.disabled, i = t.onChange, o = t.onChangeComplete, l = t.color, c = t.type, s = w.useRef(), u = w.useRef(), f = w.useRef(l), d = function(g) {
    return c === "hue" ? g.getHue() : g.a * 100;
  }, h = st(function(O) {
    var g = Fx({
      offset: O,
      targetRef: u,
      containerRef: s,
      color: l,
      type: c
    });
    f.current = g, i(d(g));
  }), v = Vx({
    color: l,
    targetRef: u,
    containerRef: s,
    calculate: function() {
      return Wx(l, c);
    },
    onDragChange: h,
    onDragChangeComplete: function() {
      o(d(f.current));
    },
    direction: "x",
    disabledDrag: a
  }), m = X(v, 2), p = m[0], y = m[1], x = T.useMemo(function() {
    if (c === "hue") {
      var O = l.toHsb();
      O.s = 1, O.b = 1, O.a = 1;
      var g = new Wr(O);
      return g;
    }
    return l;
  }, [l, c]), S = T.useMemo(function() {
    return n.map(function(O) {
      return "".concat(O.color, " ").concat(O.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ T.createElement("div", {
    ref: s,
    className: Ie("".concat(r, "-slider"), "".concat(r, "-slider-").concat(c)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ T.createElement(Ux, {
    prefixCls: r
  }, /* @__PURE__ */ T.createElement(Yx, {
    x: p.x,
    y: p.y,
    ref: u
  }, /* @__PURE__ */ T.createElement(zx, {
    size: "small",
    color: x.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ T.createElement(N4, {
    colors: S,
    type: c,
    prefixCls: r
  })));
};
function k4(e) {
  return w.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || R4];
  }, [e]);
}
var B4 = [{
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
}], L4 = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var r = e.value, n = e.defaultValue, a = e.prefixCls, i = a === void 0 ? A4 : a, o = e.onChange, l = e.onChangeComplete, c = e.className, s = e.style, u = e.panelRender, f = e.disabledAlpha, d = f === void 0 ? !1 : f, h = e.disabled, v = h === void 0 ? !1 : h, m = e.components, p = k4(m), y = X(p, 1), x = y[0], S = D4(n || T4, r), O = X(S, 2), g = O[0], b = O[1], $ = w.useMemo(function() {
    return g.setA(1).toRgbString();
  }, [g]), C = function(k, L) {
    r || b(k), o == null || o(k, L);
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
  }, E = Ie("".concat(i, "-panel"), c, ve({}, "".concat(i, "-panel-disabled"), v)), A = {
    prefixCls: i,
    disabled: v,
    color: g
  }, D = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(j4, we({
    onChange: C
  }, A, {
    onChangeComplete: l
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ T.createElement("div", {
    className: Ie("".concat(i, "-slider-group"), ve({}, "".concat(i, "-slider-group-disabled-alpha"), d))
  }, /* @__PURE__ */ T.createElement(x, we({}, A, {
    type: "hue",
    colors: B4,
    min: 0,
    max: 359,
    value: g.getHue(),
    onChange: P,
    onChangeComplete: N
  })), !d && /* @__PURE__ */ T.createElement(x, we({}, A, {
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
  }))), /* @__PURE__ */ T.createElement(M4, {
    color: g.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ T.createElement("div", {
    className: E,
    style: s,
    ref: t
  }, typeof u == "function" ? u(D) : D);
});
Oe.env.NODE_ENV !== "production" && (L4.displayName = "ColorPicker");
const H4 = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", F4 = (e, t) => e ? H4(e, t) : "";
let W4 = /* @__PURE__ */ function() {
  function e(t) {
    zf(this, e);
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
  return Uf(e, [{
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
      return F4(this.toHexString(), this.metaColor.a < 1);
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
const V4 = new Mt("antMoveDownIn", {
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
}), z4 = new Mt("antMoveDownOut", {
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
}), U4 = new Mt("antMoveLeftIn", {
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
}), Y4 = new Mt("antMoveLeftOut", {
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
}), q4 = new Mt("antMoveRightIn", {
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
}), G4 = new Mt("antMoveRightOut", {
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
}), K4 = new Mt("antMoveUpIn", {
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
}), X4 = new Mt("antMoveUpOut", {
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
}), Z4 = {
  "move-up": {
    inKeyframes: K4,
    outKeyframes: X4
  },
  "move-down": {
    inKeyframes: V4,
    outKeyframes: z4
  },
  "move-left": {
    inKeyframes: U4,
    outKeyframes: Y4
  },
  "move-right": {
    inKeyframes: q4,
    outKeyframes: G4
  }
}, Cg = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = Z4[t];
  return [zg(n, a, i, e.motionDurationMid), {
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
}, qx = new Mt("antSlideUpIn", {
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
}), Gx = new Mt("antSlideUpOut", {
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
}), Kx = new Mt("antSlideDownIn", {
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
}), Xx = new Mt("antSlideDownOut", {
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
}), Q4 = new Mt("antSlideLeftIn", {
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
}), J4 = new Mt("antSlideLeftOut", {
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
}), eU = new Mt("antSlideRightIn", {
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
}), tU = new Mt("antSlideRightOut", {
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
}), rU = {
  "slide-up": {
    inKeyframes: qx,
    outKeyframes: Gx
  },
  "slide-down": {
    inKeyframes: Kx,
    outKeyframes: Xx
  },
  "slide-left": {
    inKeyframes: Q4,
    outKeyframes: J4
  },
  "slide-right": {
    inKeyframes: eU,
    outKeyframes: tU
  }
}, Pg = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = rU[t];
  return [zg(n, a, i, e.motionDurationMid), {
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
}, nU = (e, t) => {
  const {
    r,
    g: n,
    b: a,
    a: i
  } = e.toRgb(), o = new Wr(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? o.v > 0.5 : r * 0.299 + n * 0.587 + a * 0.114 > 192;
}, Zx = (e) => {
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
}, Qx = (e) => {
  var t, r, n, a, i, o;
  const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, s = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (a = e.contentLineHeight) !== null && a !== void 0 ? a : bs(l), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : bs(c), d = (o = e.contentLineHeightLG) !== null && o !== void 0 ? o : bs(s), h = nU(new W4(e.colorBgSolid), "#fff") ? "#000" : "#fff";
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
    solidTextColor: h,
    contentFontSize: l,
    contentFontSizeSM: c,
    contentFontSizeLG: s,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: d,
    paddingBlock: Math.max((e.controlHeight - l * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - s * d) / 2 - e.lineWidth, 0)
  };
}, aU = (e) => {
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
      border: `${ce(e.lineWidth)} ${e.lineType} transparent`,
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
      "&:not(:disabled)": Object.assign({}, W1(e)),
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
}, Jx = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), iU = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), oU = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), lU = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Jd = (e, t, r, n, a, i, o, l) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, Jx(e, Object.assign({
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
}), cU = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, lU(e))
}), sU = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Vc = (e, t, r, n) => {
  const i = n && ["link", "text"].includes(n) ? sU : cU;
  return Object.assign(Object.assign({}, i(e)), Jx(e.componentCls, t, r));
}, eh = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, Vc(e, n, a))
}), th = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, Vc(e, n, a))
}), rh = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), nh = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, Vc(e, r, n))
}), Ca = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, Vc(e, n, a, r))
}), uU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, eh(e, e.solidTextColor, e.colorBgSolid, {
  background: e.colorBgSolidHover
}, {
  background: e.colorBgSolidActive
})), rh(e)), nh(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ca(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Jd(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), fU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, th(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), rh(e)), nh(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Ca(e, e.colorLink, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Jd(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), dU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, eh(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), th(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), rh(e)), nh(e, e.colorErrorBg, {
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
})), Jd(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), hU = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-color-default`]: uU(e),
    [`${t}-color-primary`]: fU(e),
    [`${t}-color-dangerous`]: dU(e)
  };
}, pU = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, th(e, e.defaultBorderColor, e.defaultBg, {
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
})), eh(e, e.primaryColor, e.colorPrimary, {
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
})), ah = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: a,
    lineHeight: i,
    borderRadius: o,
    buttonPaddingHorizontal: l,
    iconCls: c,
    buttonPaddingVertical: s
  } = e, u = `${r}-icon-only`;
  return [
    {
      [t]: {
        fontSize: a,
        lineHeight: i,
        height: n,
        padding: `${ce(s)} ${ce(l)}`,
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
          [c]: {
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
      [`${r}${r}-circle${t}`]: iU(e)
    },
    {
      [`${r}${r}-round${t}`]: oU(e)
    }
  ];
}, vU = (e) => {
  const t = $r(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return ah(t, e.componentCls);
}, mU = (e) => {
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
  return ah(t, `${e.componentCls}-sm`);
}, gU = (e) => {
  const t = $r(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return ah(t, `${e.componentCls}-lg`);
}, yU = (e) => {
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
}, bU = Yf("Button", (e) => {
  const t = Zx(e);
  return [
    // Shared
    aU(t),
    // Size
    vU(t),
    mU(t),
    gU(t),
    // Block
    yU(t),
    // Color
    hU(t),
    // https://github.com/ant-design/ant-design/issues/50969
    pU(t),
    // Button Group
    C4(t)
  ];
}, Qx, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function xU(e, t, r) {
  const {
    focusElCls: n,
    focus: a,
    borderElCls: i
  } = r, o = i ? "> *" : "", l = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${o}`).join(",");
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
function wU(e, t, r) {
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
function ih(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, xU(e, n, t)), wU(r, n, t))
  };
}
function SU(e, t) {
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
function OU(e, t) {
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
function $U(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, SU(e, t)), OU(e.componentCls, t))
  };
}
const CU = (e) => {
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
            height: `calc(100% + ${ce(e.lineWidth)} * 2)`,
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
              width: `calc(100% + ${ce(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, PU = V1(["Button", "compact"], (e) => {
  const t = Zx(e);
  return [
    // Space Compact
    ih(t),
    $U(t),
    CU(t)
  ];
}, Qx);
var _U = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function EU(e) {
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
const AU = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  link: ["primary", "link"],
  text: ["default", "text"]
}, TU = /* @__PURE__ */ T.forwardRef((e, t) => {
  var r, n, a, i;
  const {
    loading: o = !1,
    prefixCls: l,
    color: c,
    variant: s,
    type: u,
    danger: f = !1,
    shape: d = "default",
    size: h,
    styles: v,
    disabled: m,
    className: p,
    rootClassName: y,
    children: x,
    icon: S,
    iconPosition: O = "start",
    ghost: g = !1,
    block: b = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: $ = "button",
    classNames: C,
    style: _ = {},
    autoInsertSpace: M
  } = e, P = _U(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), I = u || "default", [N, j] = w.useMemo(() => {
    if (c && s)
      return [c, s];
    const Se = AU[I] || [];
    return f ? ["danger", Se[1]] : Se;
  }, [u, c, s, f]), A = N === "danger" ? "dangerous" : N, {
    getPrefixCls: D,
    direction: R,
    button: k
  } = w.useContext(en), L = (r = M ?? (k == null ? void 0 : k.autoInsertSpace)) !== null && r !== void 0 ? r : !0, H = D("btn", l), [B, W, z] = bU(H), G = w.useContext(qf), Q = m ?? G, ne = w.useContext(Lx), te = w.useMemo(() => EU(o), [o]), [V, K] = w.useState(te.loading), [q, F] = w.useState(!1), Z = Vf(t, /* @__PURE__ */ w.createRef()), le = w.Children.count(x) === 1 && !S && !No(j);
  w.useEffect(() => {
    let Se = null;
    te.delay > 0 ? Se = setTimeout(() => {
      Se = null, K(!0);
    }, te.delay) : K(te.loading);
    function Me() {
      Se && (clearTimeout(Se), Se = null);
    }
    return Me;
  }, [te]), w.useEffect(() => {
    if (!Z || !Z.current || !L)
      return;
    const Se = Z.current.textContent;
    le && Bf(Se) ? q || F(!0) : q && F(!1);
  }, [Z]);
  const re = T.useCallback((Se) => {
    var Me;
    if (V || Q) {
      Se.preventDefault();
      return;
    }
    (Me = e.onClick) === null || Me === void 0 || Me.call(e, Se);
  }, [e.onClick, V, Q]);
  if (Oe.env.NODE_ENV !== "production") {
    const Se = Ji("Button");
    Oe.env.NODE_ENV !== "production" && Se(!(typeof S == "string" && S.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${S}\` at https://ant.design/components/icon`), Oe.env.NODE_ENV !== "production" && Se(!(g && No(j)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: ae,
    compactItemClassnames: de
  } = Gf(H, R), $e = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ke = Qd((Se) => {
    var Me, he;
    return (he = (Me = h ?? ae) !== null && Me !== void 0 ? Me : ne) !== null && he !== void 0 ? he : Se;
  }), Ae = ke && (n = $e[ke]) !== null && n !== void 0 ? n : "", De = V ? "loading" : S, Ge = Kf(P, ["navigate"]), Qe = Ie(H, W, z, {
    [`${H}-${d}`]: d !== "default" && d,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${H}-${I}`]: I,
    [`${H}-dangerous`]: f,
    [`${H}-color-${A}`]: A,
    [`${H}-variant-${j}`]: j,
    [`${H}-${Ae}`]: Ae,
    [`${H}-icon-only`]: !x && x !== 0 && !!De,
    [`${H}-background-ghost`]: g && !No(j),
    [`${H}-loading`]: V,
    [`${H}-two-chinese-chars`]: q && L && !V,
    [`${H}-block`]: b,
    [`${H}-rtl`]: R === "rtl",
    [`${H}-icon-end`]: O === "end"
  }, de, p, y, k == null ? void 0 : k.className), Ke = Object.assign(Object.assign({}, k == null ? void 0 : k.style), _), Ue = Ie(C == null ? void 0 : C.icon, (a = k == null ? void 0 : k.classNames) === null || a === void 0 ? void 0 : a.icon), Ve = Object.assign(Object.assign({}, (v == null ? void 0 : v.icon) || {}), ((i = k == null ? void 0 : k.styles) === null || i === void 0 ? void 0 : i.icon) || {}), _t = S && !V ? /* @__PURE__ */ T.createElement(Hx, {
    prefixCls: H,
    className: Ue,
    style: Ve
  }, S) : /* @__PURE__ */ T.createElement($4, {
    existIcon: !!S,
    prefixCls: H,
    loading: V
  }), He = x || x === 0 ? O4(x, le && L) : null;
  if (Ge.href !== void 0)
    return B(/* @__PURE__ */ T.createElement("a", Object.assign({}, Ge, {
      className: Ie(Qe, {
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
  }), _t, He, !!de && /* @__PURE__ */ T.createElement(PU, {
    key: "compact",
    prefixCls: H
  }));
  return No(j) || (ot = /* @__PURE__ */ T.createElement(Bx, {
    component: "Button",
    disabled: V
  }, ot)), B(ot);
}), zc = TU;
zc.Group = w4;
zc.__ANT_BUTTON = !0;
Oe.env.NODE_ENV !== "production" && (zc.displayName = "Button");
function MU(e) {
  return (t) => /* @__PURE__ */ w.createElement(Ug, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ w.createElement(e, Object.assign({}, t)));
}
const ew = (e, t, r, n) => MU((i) => {
  const {
    prefixCls: o,
    style: l
  } = i, c = w.useRef(null), [s, u] = w.useState(0), [f, d] = w.useState(0), [h, v] = fr(!1, {
    value: i.open
  }), {
    getPrefixCls: m
  } = w.useContext(en), p = m(t, o);
  w.useEffect(() => {
    if (v(!0), typeof ResizeObserver < "u") {
      const S = new ResizeObserver((g) => {
        const b = g[0].target;
        u(b.offsetHeight + 8), d(b.offsetWidth);
      }), O = setInterval(() => {
        var g;
        const b = `.${p}-dropdown`, $ = (g = c.current) === null || g === void 0 ? void 0 : g.querySelector(b);
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
    open: h,
    visible: h,
    getPopupContainer: () => c.current
  });
  n && (y = n(y));
  const x = {
    paddingBottom: s,
    position: "relative",
    minWidth: f
  };
  return /* @__PURE__ */ w.createElement("div", {
    ref: c,
    style: x
  }, /* @__PURE__ */ w.createElement(e, Object.assign({}, y)));
});
var IU = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Ln = void 0;
function jU(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, i = e.renderItem, o = e.responsive, l = e.responsiveDisabled, c = e.registerSize, s = e.itemKey, u = e.className, f = e.style, d = e.children, h = e.display, v = e.order, m = e.component, p = m === void 0 ? "div" : m, y = Kt(e, IU), x = o && !h;
  function S(C) {
    c(s, C);
  }
  w.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var O = i && a !== Ln ? i(a) : d, g;
  n || (g = {
    opacity: x ? 0 : 1,
    height: x ? 0 : Ln,
    overflowY: x ? "hidden" : Ln,
    order: o ? v : Ln,
    pointerEvents: x ? "none" : Ln,
    position: x ? "absolute" : Ln
  });
  var b = {};
  x && (b["aria-hidden"] = !0);
  var $ = /* @__PURE__ */ w.createElement(p, we({
    className: Ie(!n && r, u),
    style: ue(ue({}, g), f)
  }, b, y, {
    ref: t
  }), O);
  return o && ($ = /* @__PURE__ */ w.createElement(ec, {
    onResize: function(_) {
      var M = _.offsetWidth;
      S(M);
    },
    disabled: l
  }, $)), $;
}
var gi = /* @__PURE__ */ w.forwardRef(jU);
gi.displayName = "Item";
function DU(e) {
  if (typeof MessageChannel > "u")
    Wt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function NU() {
  var e = w.useRef(null), t = function(n) {
    e.current || (e.current = [], DU(function() {
      I1.unstable_batchedUpdates(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function ai(e, t) {
  var r = w.useState(t), n = X(r, 2), a = n[0], i = n[1], o = st(function(l) {
    e(function() {
      i(l);
    });
  });
  return [a, o];
}
var Xl = /* @__PURE__ */ T.createContext(null), RU = ["component"], kU = ["className"], BU = ["className"], LU = function(t, r) {
  var n = w.useContext(Xl);
  if (!n) {
    var a = t.component, i = a === void 0 ? "div" : a, o = Kt(t, RU);
    return /* @__PURE__ */ w.createElement(i, we({}, o, {
      ref: r
    }));
  }
  var l = n.className, c = Kt(n, kU), s = t.className, u = Kt(t, BU);
  return /* @__PURE__ */ w.createElement(Xl.Provider, {
    value: null
  }, /* @__PURE__ */ w.createElement(gi, we({
    ref: r,
    className: Ie(l, s)
  }, c, u)));
}, tw = /* @__PURE__ */ w.forwardRef(LU);
tw.displayName = "RawItem";
var HU = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], rw = "responsive", nw = "invalidate";
function FU(e) {
  return "+ ".concat(e.length, " ...");
}
function WU(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, i = a === void 0 ? [] : a, o = e.renderItem, l = e.renderRawItem, c = e.itemKey, s = e.itemWidth, u = s === void 0 ? 10 : s, f = e.ssr, d = e.style, h = e.className, v = e.maxCount, m = e.renderRest, p = e.renderRawRest, y = e.suffix, x = e.component, S = x === void 0 ? "div" : x, O = e.itemComponent, g = e.onVisibleChange, b = Kt(e, HU), $ = f === "full", C = NU(), _ = ai(C, null), M = X(_, 2), P = M[0], I = M[1], N = P || 0, j = ai(C, /* @__PURE__ */ new Map()), E = X(j, 2), A = E[0], D = E[1], R = ai(C, 0), k = X(R, 2), L = k[0], H = k[1], B = ai(C, 0), W = X(B, 2), z = W[0], G = W[1], Q = ai(C, 0), ne = X(Q, 2), te = ne[0], V = ne[1], K = w.useState(null), q = X(K, 2), F = q[0], J = q[1], Z = w.useState(null), le = X(Z, 2), re = le[0], ae = le[1], de = w.useMemo(function() {
    return re === null && $ ? Number.MAX_SAFE_INTEGER : re || 0;
  }, [re, P]), $e = w.useState(!1), ke = X($e, 2), Ae = ke[0], De = ke[1], Ge = "".concat(n, "-item"), Qe = Math.max(L, z), Ke = v === rw, Ue = i.length && Ke, Ve = v === nw, _t = Ue || typeof v == "number" && i.length > v, He = w.useMemo(function() {
    var be = i;
    return Ue ? P === null && $ ? be = i : be = i.slice(0, Math.min(i.length, N / u)) : typeof v == "number" && (be = i.slice(0, v)), be;
  }, [i, u, P, v, Ue]), ot = w.useMemo(function() {
    return Ue ? i.slice(de + 1) : i.slice(He.length);
  }, [i, He, Ue, de]), Se = w.useCallback(function(be, Be) {
    var Je;
    return typeof c == "function" ? c(be) : (Je = c && (be == null ? void 0 : be[c])) !== null && Je !== void 0 ? Je : Be;
  }, [c]), Me = w.useCallback(o || function(be) {
    return be;
  }, [o]);
  function he(be, Be, Je) {
    re === be && (Be === void 0 || Be === F) || (ae(be), Je || (De(be < i.length - 1), g == null || g(be)), Be !== void 0 && J(Be));
  }
  function oe(be, Be) {
    I(Be.clientWidth);
  }
  function pe(be, Be) {
    D(function(Je) {
      var ht = new Map(Je);
      return Be === null ? ht.delete(be) : ht.set(be, Be), ht;
    });
  }
  function Pe(be, Be) {
    G(Be), H(z);
  }
  function ie(be, Be) {
    V(Be);
  }
  function fe(be) {
    return A.get(Se(He[be], be));
  }
  Br(function() {
    if (N && typeof Qe == "number" && He) {
      var be = te, Be = He.length, Je = Be - 1;
      if (!Be) {
        he(0, null);
        return;
      }
      for (var ht = 0; ht < Be; ht += 1) {
        var Ut = fe(ht);
        if ($ && (Ut = Ut || 0), Ut === void 0) {
          he(ht - 1, void 0, !0);
          break;
        }
        if (be += Ut, // Only one means `totalWidth` is the final width
        Je === 0 && be <= N || // Last two width will be the final width
        ht === Je - 1 && be + fe(Je) <= N) {
          he(Je, null);
          break;
        } else if (be + Qe > N) {
          he(ht - 1, be - Ut - te + z);
          break;
        }
      }
      y && fe(0) + te > N && J(null);
    }
  }, [N, A, z, te, Se, He]);
  var Ye = Ae && !!ot.length, nt = {};
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
  }, Et = l ? function(be, Be) {
    var Je = Se(be, Be);
    return /* @__PURE__ */ w.createElement(Xl.Provider, {
      key: Je,
      value: ue(ue({}, Xe), {}, {
        order: Be,
        item: be,
        itemKey: Je,
        registerSize: pe,
        display: Be <= de
      })
    }, l(be, Be));
  } : function(be, Be) {
    var Je = Se(be, Be);
    return /* @__PURE__ */ w.createElement(gi, we({}, Xe, {
      order: Be,
      key: Je,
      item: be,
      renderItem: Me,
      itemKey: Je,
      registerSize: pe,
      display: Be <= de
    }));
  }, It, Ct = {
    order: Ye ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ge, "-rest"),
    registerSize: Pe,
    display: Ye
  };
  if (p)
    p && (It = /* @__PURE__ */ w.createElement(Xl.Provider, {
      value: ue(ue({}, Xe), Ct)
    }, p(ot)));
  else {
    var jt = m || FU;
    It = /* @__PURE__ */ w.createElement(gi, we({}, Xe, Ct), typeof jt == "function" ? jt(ot) : jt);
  }
  var xt = /* @__PURE__ */ w.createElement(S, we({
    className: Ie(!Ve && n, h),
    style: d,
    ref: t
  }, b), He.map(Et), _t ? It : null, y && /* @__PURE__ */ w.createElement(gi, we({}, Xe, {
    responsive: Ke,
    responsiveDisabled: !Ue,
    order: de,
    className: "".concat(Ge, "-suffix"),
    registerSize: ie,
    display: !0,
    style: nt
  }), y));
  return Ke && (xt = /* @__PURE__ */ w.createElement(ec, {
    onResize: oe,
    disabled: !Ue
  }, xt)), xt;
}
var co = /* @__PURE__ */ w.forwardRef(WU);
co.displayName = "Overflow";
co.Item = tw;
co.RESPONSIVE = rw;
co.INVALIDATE = nw;
function aw(e, t, r) {
  return Ie({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const iw = (e, t) => t || e, ow = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, a;
  const {
    variant: i,
    [e]: o
  } = w.useContext(en), l = w.useContext(z1), c = o == null ? void 0 : o.variant;
  let s;
  typeof t < "u" ? s = t : r === !1 ? s = "borderless" : s = (a = (n = l ?? c) !== null && n !== void 0 ? n : i) !== null && a !== void 0 ? a : "outlined";
  const u = U1.includes(s);
  return [s, u];
}, VU = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: r,
    lineWidth: n,
    INTERNAL_FIXED_ITEM_MARGIN: a
  } = e, i = e.max(e.calc(r).sub(n).equal(), 0), o = e.max(e.calc(i).sub(a).equal(), 0);
  return {
    basePadding: i,
    containerPadding: o,
    itemHeight: ce(t),
    itemLineHeight: ce(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, zU = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    borderRadiusSM: n,
    motionDurationSlow: a,
    paddingXS: i,
    multipleItemColorDisabled: o,
    multipleItemBorderColorDisabled: l,
    colorIcon: c,
    colorIconHover: s,
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
        "&-remove": Object.assign(Object.assign({}, Y1()), {
          display: "inline-flex",
          alignItems: "center",
          color: c,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${r}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: s
          }
        })
      }
    }
  };
};
var UU = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, YU = function(t, r) {
  return /* @__PURE__ */ w.createElement(Pa, we({}, t, {
    ref: r,
    icon: UU
  }));
}, lw = /* @__PURE__ */ w.forwardRef(YU);
Oe.env.NODE_ENV !== "production" && (lw.displayName = "DownOutlined");
var qU = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, GU = function(t, r) {
  return /* @__PURE__ */ w.createElement(Pa, we({}, t, {
    ref: r,
    icon: qU
  }));
}, cw = /* @__PURE__ */ w.forwardRef(GU);
Oe.env.NODE_ENV !== "production" && (cw.displayName = "SearchOutlined");
function KU(e) {
  let {
    suffixIcon: t,
    clearIcon: r,
    menuItemSelectedIcon: n,
    removeIcon: a,
    loading: i,
    multiple: o,
    hasFeedback: l,
    prefixCls: c,
    showSuffixIcon: s,
    feedbackIcon: u,
    showArrow: f,
    componentName: d
  } = e;
  Oe.env.NODE_ENV !== "production" && Ji(d).deprecated(!r, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const h = r ?? /* @__PURE__ */ w.createElement(q1, null), v = (x) => t === null && !l && !f ? null : /* @__PURE__ */ w.createElement(w.Fragment, null, s !== !1 && x, l && u);
  let m = null;
  if (t !== void 0)
    m = v(t);
  else if (i)
    m = v(/* @__PURE__ */ w.createElement(Zd, {
      spin: !0
    }));
  else {
    const x = `${c}-suffix`;
    m = (S) => {
      let {
        open: O,
        showSearch: g
      } = S;
      return v(O && g ? /* @__PURE__ */ w.createElement(cw, {
        className: x
      }) : /* @__PURE__ */ w.createElement(lw, {
        className: x
      }));
    };
  }
  let p = null;
  n !== void 0 ? p = n : o ? p = /* @__PURE__ */ w.createElement(G1, null) : p = null;
  let y = null;
  return a !== void 0 ? y = a : y = /* @__PURE__ */ w.createElement(K1, null), {
    clearIcon: h,
    suffixIcon: m,
    itemIcon: p,
    removeIcon: y
  };
}
var sw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    var r = 1e3, n = 6e4, a = 36e5, i = "millisecond", o = "second", l = "minute", c = "hour", s = "day", u = "week", f = "month", d = "quarter", h = "year", v = "date", m = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(j) {
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
      return { M: f, y: h, w: u, d: s, D: v, h: c, m: l, s: o, ms: i, Q: d }[j] || String(j || "").toLowerCase().replace(/s$/, "");
    }, u: function(j) {
      return j === void 0;
    } }, g = "en", b = {};
    b[g] = x;
    var $ = "$isDayjsObject", C = function(j) {
      return j instanceof I || !(!j || !j[$]);
    }, _ = function j(E, A, D) {
      var R;
      if (!E) return g;
      if (typeof E == "string") {
        var k = E.toLowerCase();
        b[k] && (R = k), A && (b[k] = A, R = k);
        var L = E.split("-");
        if (!R && L.length > 1) return j(L[0]);
      } else {
        var H = E.name;
        b[H] = E, R = H;
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
            var L = R.match(p);
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
        var R = this, k = !!P.u(D) || D, L = P.p(A), H = function(V, K) {
          var q = P.w(R.$u ? Date.UTC(R.$y, K, V) : new Date(R.$y, K, V), R);
          return k ? q : q.endOf(s);
        }, B = function(V, K) {
          return P.w(R.toDate()[V].apply(R.toDate("s"), (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(K)), R);
        }, W = this.$W, z = this.$M, G = this.$D, Q = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case h:
            return k ? H(1, 0) : H(31, 11);
          case f:
            return k ? H(1, z) : H(0, z + 1);
          case u:
            var ne = this.$locale().weekStart || 0, te = (W < ne ? W + 7 : W) - ne;
            return H(k ? G - te : G + (6 - te), z);
          case s:
          case v:
            return B(Q + "Hours", 0);
          case c:
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
        var R, k = P.p(A), L = "set" + (this.$u ? "UTC" : ""), H = (R = {}, R[s] = L + "Date", R[v] = L + "Date", R[f] = L + "Month", R[h] = L + "FullYear", R[c] = L + "Hours", R[l] = L + "Minutes", R[o] = L + "Seconds", R[i] = L + "Milliseconds", R)[k], B = k === s ? this.$D + (D - this.$W) : D;
        if (k === f || k === h) {
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
        var L = P.p(D), H = function(z) {
          var G = M(k);
          return P.w(G.date(G.date() + Math.round(z * A)), k);
        };
        if (L === f) return this.set(f, this.$M + A);
        if (L === h) return this.set(h, this.$y + A);
        if (L === s) return H(1);
        if (L === u) return H(7);
        var B = (R = {}, R[l] = n, R[c] = a, R[o] = r, R)[L] || 1, W = this.$d.getTime() + A * B;
        return P.w(W, this);
      }, E.subtract = function(A, D) {
        return this.add(-1 * A, D);
      }, E.format = function(A) {
        var D = this, R = this.$locale();
        if (!this.isValid()) return R.invalidDate || m;
        var k = A || "YYYY-MM-DDTHH:mm:ssZ", L = P.z(this), H = this.$H, B = this.$m, W = this.$M, z = R.weekdays, G = R.months, Q = R.meridiem, ne = function(K, q, F, J) {
          return K && (K[q] || K(D, k)) || F[q].slice(0, J);
        }, te = function(K) {
          return P.s(H % 12 || 12, K, "0");
        }, V = Q || function(K, q, F) {
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
                return ne(R.weekdaysMin, D.$W, z, 2);
              case "ddd":
                return ne(R.weekdaysShort, D.$W, z, 3);
              case "dddd":
                return z[D.$W];
              case "H":
                return String(H);
              case "HH":
                return P.s(H, 2, "0");
              case "h":
                return te(1);
              case "hh":
                return te(2);
              case "a":
                return V(H, B, !0);
              case "A":
                return V(H, B, !1);
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
        var k, L = this, H = P.p(D), B = M(A), W = (B.utcOffset() - this.utcOffset()) * n, z = this - B, G = function() {
          return P.m(L, B);
        };
        switch (H) {
          case h:
            k = G() / 12;
            break;
          case f:
            k = G();
            break;
          case d:
            k = G() / 3;
            break;
          case u:
            k = (z - W) / 6048e5;
            break;
          case s:
            k = (z - W) / 864e5;
            break;
          case c:
            k = z / a;
            break;
          case l:
            k = z / n;
            break;
          case o:
            k = z / r;
            break;
          default:
            k = z;
        }
        return R ? k : P.a(k);
      }, E.daysInMonth = function() {
        return this.endOf(f).$D;
      }, E.$locale = function() {
        return b[this.$L];
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
    return M.prototype = N, [["$ms", i], ["$s", o], ["$m", l], ["$H", c], ["$W", s], ["$M", f], ["$y", h], ["$D", v]].forEach(function(j) {
      N[j[1]] = function(E) {
        return this.$g(E, j[0], j[1]);
      };
    }), M.extend = function(j, E) {
      return j.$i || (j(E, I, M), j.$i = !0), M;
    }, M.locale = _, M.isDayjs = C, M.unix = function(j) {
      return M(1e3 * j);
    }, M.en = b[g], M.Ls = b, M.p = {}, M;
  });
})(sw);
var XU = sw.exports;
const vt = /* @__PURE__ */ We(XU);
var uw = { exports: {} };
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
})(uw);
var ZU = uw.exports;
const QU = /* @__PURE__ */ We(ZU);
var fw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    return function(r, n, a) {
      var i = n.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, l = function(f, d, h, v, m) {
        var p = f.name ? f : f.$locale(), y = o(p[d]), x = o(p[h]), S = y || x.map(function(g) {
          return g.slice(0, v);
        });
        if (!m) return S;
        var O = p.weekStart;
        return S.map(function(g, b) {
          return S[(b + (O || 0)) % 7];
        });
      }, c = function() {
        return a.Ls[a.locale()];
      }, s = function(f, d) {
        return f.formats[d] || function(h) {
          return h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, m, p) {
            return m || p.slice(1);
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
          return s(f.$locale(), d);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      i.localeData = function() {
        return u.bind(this)();
      }, a.localeData = function() {
        var f = c();
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
          return s(f, d);
        }, meridiem: f.meridiem, ordinal: f.ordinal };
      }, a.months = function() {
        return l(c(), "months");
      }, a.monthsShort = function() {
        return l(c(), "monthsShort", "months", 3);
      }, a.weekdays = function(f) {
        return l(c(), "weekdays", null, null, f);
      }, a.weekdaysShort = function(f) {
        return l(c(), "weekdaysShort", "weekdays", 3, f);
      }, a.weekdaysMin = function(f) {
        return l(c(), "weekdaysMin", "weekdays", 2, f);
      };
    };
  });
})(fw);
var JU = fw.exports;
const eY = /* @__PURE__ */ We(JU);
var dw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    var r = "week", n = "year";
    return function(a, i, o) {
      var l = i.prototype;
      l.week = function(c) {
        if (c === void 0 && (c = null), c !== null) return this.add(7 * (c - this.week()), "day");
        var s = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = o(this).startOf(n).add(1, n).date(s), f = o(this).endOf(r);
          if (u.isBefore(f)) return 1;
        }
        var d = o(this).startOf(n).date(s).startOf(r).subtract(1, "millisecond"), h = this.diff(d, r, !0);
        return h < 0 ? o(this).startOf("week").week() : Math.ceil(h);
      }, l.weeks = function(c) {
        return c === void 0 && (c = null), this.week(c);
      };
    };
  });
})(dw);
var tY = dw.exports;
const rY = /* @__PURE__ */ We(tY);
var hw = { exports: {} };
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
})(hw);
var nY = hw.exports;
const aY = /* @__PURE__ */ We(nY);
var pw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    return function(r, n) {
      var a = n.prototype, i = a.format;
      a.format = function(o) {
        var l = this, c = this.$locale();
        if (!this.isValid()) return i.bind(this)(o);
        var s = this.$utils(), u = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(f) {
          switch (f) {
            case "Q":
              return Math.ceil((l.$M + 1) / 3);
            case "Do":
              return c.ordinal(l.$D);
            case "gggg":
              return l.weekYear();
            case "GGGG":
              return l.isoWeekYear();
            case "wo":
              return c.ordinal(l.week(), "W");
            case "w":
            case "ww":
              return s.s(l.week(), f === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return s.s(l.isoWeek(), f === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return s.s(String(l.$H === 0 ? 24 : l.$H), f === "k" ? 1 : 2, "0");
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
})(pw);
var iY = pw.exports;
const oY = /* @__PURE__ */ We(iY);
var vw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, c = {}, s = function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, u = function(p) {
      return function(y) {
        this[p] = +y;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z") return 0;
        var x = y.match(/([+-]|\d\d)/g), S = 60 * x[1] + (+x[2] || 0);
        return S === 0 ? 0 : x[0] === "+" ? -S : S;
      }(p);
    }], d = function(p) {
      var y = c[p];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, h = function(p, y) {
      var x, S = c.meridiem;
      if (S) {
        for (var O = 1; O <= 24; O += 1) if (p.indexOf(S(O, 0, y)) > -1) {
          x = O > 12;
          break;
        }
      } else x = p === (y ? "pm" : "PM");
      return x;
    }, v = { A: [l, function(p) {
      this.afternoon = h(p, !1);
    }], a: [l, function(p) {
      this.afternoon = h(p, !0);
    }], Q: [a, function(p) {
      this.month = 3 * (p - 1) + 1;
    }], S: [a, function(p) {
      this.milliseconds = 100 * +p;
    }], SS: [i, function(p) {
      this.milliseconds = 10 * +p;
    }], SSS: [/\d{3}/, function(p) {
      this.milliseconds = +p;
    }], s: [o, u("seconds")], ss: [o, u("seconds")], m: [o, u("minutes")], mm: [o, u("minutes")], H: [o, u("hours")], h: [o, u("hours")], HH: [o, u("hours")], hh: [o, u("hours")], D: [o, u("day")], DD: [i, u("day")], Do: [l, function(p) {
      var y = c.ordinal, x = p.match(/\d+/);
      if (this.day = x[0], y) for (var S = 1; S <= 31; S += 1) y(S).replace(/\[|\]/g, "") === p && (this.day = S);
    }], w: [o, u("week")], ww: [i, u("week")], M: [o, u("month")], MM: [i, u("month")], MMM: [l, function(p) {
      var y = d("months"), x = (d("monthsShort") || y.map(function(S) {
        return S.slice(0, 3);
      })).indexOf(p) + 1;
      if (x < 1) throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [l, function(p) {
      var y = d("months").indexOf(p) + 1;
      if (y < 1) throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(p) {
      this.year = s(p);
    }], YYYY: [/\d{4}/, u("year")], Z: f, ZZ: f };
    function m(p) {
      var y, x;
      y = p, x = c && c.formats;
      for (var S = (p = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, P, I) {
        var N = I && I.toUpperCase();
        return P || x[I] || r[I] || x[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, E, A) {
          return E || A.slice(1);
        });
      })).match(n), O = S.length, g = 0; g < O; g += 1) {
        var b = S[g], $ = v[b], C = $ && $[0], _ = $ && $[1];
        S[g] = _ ? { regex: C, parser: _ } : b.replace(/^\[|\]$/g, "");
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
    return function(p, y, x) {
      x.p.customParseFormat = !0, p && p.parseTwoDigitYear && (s = p.parseTwoDigitYear);
      var S = y.prototype, O = S.parse;
      S.parse = function(g) {
        var b = g.date, $ = g.utc, C = g.args;
        this.$u = $;
        var _ = C[1];
        if (typeof _ == "string") {
          var M = C[2] === !0, P = C[3] === !0, I = M || P, N = C[2];
          P && (N = C[2]), c = this.$locale(), !M && N && (c = x.Ls[N]), this.$d = function(D, R, k, L) {
            try {
              if (["x", "X"].indexOf(R) > -1) return new Date((R === "X" ? 1e3 : 1) * D);
              var H = m(R)(D), B = H.year, W = H.month, z = H.day, G = H.hours, Q = H.minutes, ne = H.seconds, te = H.milliseconds, V = H.zone, K = H.week, q = /* @__PURE__ */ new Date(), F = z || (B || W ? 1 : q.getDate()), J = B || q.getFullYear(), Z = 0;
              B && !W || (Z = W > 0 ? W - 1 : q.getMonth());
              var le, re = G || 0, ae = Q || 0, de = ne || 0, $e = te || 0;
              return V ? new Date(Date.UTC(J, Z, F, re, ae, de, $e + 60 * V.offset * 1e3)) : k ? new Date(Date.UTC(J, Z, F, re, ae, de, $e)) : (le = new Date(J, Z, F, re, ae, de, $e), K && (le = L(le).week(K).toDate()), le);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(b, _, $, x), this.init(), N && N !== !0 && (this.$L = this.locale(N).$L), I && b != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
        } else if (_ instanceof Array) for (var j = _.length, E = 1; E <= j; E += 1) {
          C[1] = _[E - 1];
          var A = x.apply(this, C);
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
})(vw);
var lY = vw.exports;
const cY = /* @__PURE__ */ We(lY);
vt.extend(cY);
vt.extend(oY);
vt.extend(QU);
vt.extend(eY);
vt.extend(rY);
vt.extend(aY);
vt.extend(function(e, t) {
  var r = t.prototype, n = r.format;
  r.format = function(i) {
    var o = (i || "").replace("Wo", "wo");
    return n.bind(this)(o);
  };
});
var sY = {
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
}, hn = function(t) {
  var r = sY[t];
  return r || t.split("_")[0];
}, _g = function() {
  X1(!1, "Not match any format. Please help to fire a issue about this.");
}, uY = {
  // get
  getNow: function() {
    var t = vt();
    return typeof t.tz == "function" ? t.tz() : t;
  },
  getFixedDate: function(t) {
    return vt(t, ["YYYY-M-DD", "YYYY-MM-DD"]);
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
      return vt().locale(hn(t)).localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function(t, r) {
      return r.locale(hn(t)).weekday(0);
    },
    getWeek: function(t, r) {
      return r.locale(hn(t)).week();
    },
    getShortWeekDays: function(t) {
      return vt().locale(hn(t)).localeData().weekdaysMin();
    },
    getShortMonths: function(t) {
      return vt().locale(hn(t)).localeData().monthsShort();
    },
    format: function(t, r, n) {
      return r.locale(hn(t)).format(n);
    },
    parse: function(t, r, n) {
      for (var a = hn(t), i = 0; i < n.length; i += 1) {
        var o = n[i], l = r;
        if (o.includes("wo") || o.includes("Wo")) {
          for (var c = l.split("-")[0], s = l.split("-")[1], u = vt(c, "YYYY").startOf("year").locale(a), f = 0; f <= 52; f += 1) {
            var d = u.add(f, "week");
            if (d.format("Wo") === s)
              return d;
          }
          return _g(), null;
        }
        var h = vt(l, o, !0).locale(a);
        if (h.isValid())
          return h;
      }
      return r && _g(), null;
    }
  }
};
function Uc(e, t) {
  return e !== void 0 ? e : t ? "bottomRight" : "bottomLeft";
}
function mw(e, t) {
  var r = Uc(e, t), n = r == null ? void 0 : r.toLowerCase().endsWith("right"), a = n ? "insetInlineEnd" : "insetInlineStart";
  return t && (a = ["insetInlineStart", "insetInlineEnd"].find(function(i) {
    return i !== a;
  })), a;
}
var pr = /* @__PURE__ */ w.createContext(null), fY = {
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
function gw(e) {
  var t = e.popupElement, r = e.popupStyle, n = e.popupClassName, a = e.popupAlign, i = e.transitionName, o = e.getPopupContainer, l = e.children, c = e.range, s = e.placement, u = e.builtinPlacements, f = u === void 0 ? fY : u, d = e.direction, h = e.visible, v = e.onClose, m = w.useContext(pr), p = m.prefixCls, y = "".concat(p, "-dropdown"), x = Uc(s, d === "rtl");
  return /* @__PURE__ */ w.createElement(Z1, {
    showAction: [],
    hideAction: ["click"],
    popupPlacement: x,
    builtinPlacements: f,
    prefixCls: y,
    popupTransitionName: i,
    popup: t,
    popupAlign: a,
    popupVisible: h,
    popupClassName: Ie(n, ve(ve({}, "".concat(y, "-range"), c), "".concat(y, "-rtl"), d === "rtl")),
    popupStyle: r,
    stretch: "minWidth",
    getPopupContainer: o,
    onPopupVisibleChange: function(O) {
      O || v();
    }
  }, l);
}
function oh(e, t) {
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
function Yc(e, t) {
  var r = {}, n = t || Object.keys(e);
  return n.forEach(function(a) {
    e[a] !== void 0 && (r[a] = e[a]);
  }), r;
}
function yw(e, t, r) {
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
function bw(e, t, r) {
  var n = r !== void 0 ? r : t[t.length - 1], a = t.find(function(i) {
    return e[i];
  });
  return n !== a ? e[a] : void 0;
}
function xw(e) {
  return Yc(e, ["placement", "builtinPlacements", "popupAlign", "getPopupContainer", "transitionName", "direction"]);
}
function lh(e, t, r, n) {
  Oe.env.NODE_ENV !== "production" && (dr(!t, "'dateRender' is deprecated. Please use 'cellRender' instead."), dr(!r, "'monthCellRender' is deprecated. Please use 'cellRender' instead."));
  var a = w.useMemo(function() {
    return e || function(o, l) {
      var c = o;
      return t && l.type === "date" ? t(c, l.today) : r && l.type === "month" ? r(c, l.locale) : l.originNode;
    };
  }, [e, r, t]), i = w.useCallback(function(o, l) {
    return a(o, ue(ue({}, l), {}, {
      range: n
    }));
  }, [a, n]);
  return i;
}
function ww(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = w.useState([!1, !1]), a = X(n, 2), i = a[0], o = a[1], l = function(u, f) {
    o(function(d) {
      return yi(d, f, u);
    });
  }, c = w.useMemo(function() {
    return i.map(function(s, u) {
      if (s)
        return !0;
      var f = e[u];
      return f ? !!(!r[u] && !f || f && t(f, {
        activeIndex: u
      })) : !1;
    });
  }, [e, i, t, r]);
  return [c, l];
}
function Sw(e, t, r, n, a) {
  var i = "", o = [];
  return e && o.push(a ? "hh" : "HH"), t && o.push("mm"), r && o.push("ss"), i = o.join(":"), n && (i += ".SSS"), a && (i += " A"), i;
}
function dY(e, t, r, n, a, i) {
  var o = e.fieldDateTimeFormat, l = e.fieldDateFormat, c = e.fieldTimeFormat, s = e.fieldMonthFormat, u = e.fieldYearFormat, f = e.fieldWeekFormat, d = e.fieldQuarterFormat, h = e.yearFormat, v = e.cellYearFormat, m = e.cellQuarterFormat, p = e.dayFormat, y = e.cellDateFormat, x = Sw(t, r, n, a, i);
  return ue(ue({}, e), {}, {
    fieldDateTimeFormat: o || "YYYY-MM-DD ".concat(x),
    fieldDateFormat: l || "YYYY-MM-DD",
    fieldTimeFormat: c || x,
    fieldMonthFormat: s || "YYYY-MM",
    fieldYearFormat: u || "YYYY",
    fieldWeekFormat: f || "gggg-wo",
    fieldQuarterFormat: d || "YYYY-[Q]Q",
    yearFormat: h || "YYYY",
    cellYearFormat: v || "YYYY",
    cellQuarterFormat: m || "[Q]Q",
    cellDateFormat: y || p || "D"
  });
}
function Ow(e, t) {
  var r = t.showHour, n = t.showMinute, a = t.showSecond, i = t.showMillisecond, o = t.use12Hours;
  return T.useMemo(function() {
    return dY(e, r, n, a, i, o);
  }, [e, r, n, a, i, o]);
}
function ii(e, t, r) {
  return r ?? t.some(function(n) {
    return e.includes(n);
  });
}
var hY = [
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
function pY(e) {
  var t = Yc(e, hY), r = e.format, n = e.picker, a = null;
  return r && (a = r, Array.isArray(a) && (a = a[0]), a = An(a) === "object" ? a.format : a), n === "time" && (t.format = a), [t, a];
}
function vY(e) {
  return e && typeof e == "string";
}
function $w(e, t, r, n) {
  return [e, t, r, n].some(function(a) {
    return a !== void 0;
  });
}
function Cw(e, t, r, n, a) {
  var i = t, o = r, l = n;
  if (!e && !i && !o && !l && !a)
    i = !0, o = !0, l = !0;
  else if (e) {
    var c, s, u, f = [i, o, l].some(function(v) {
      return v === !1;
    }), d = [i, o, l].some(function(v) {
      return v === !0;
    }), h = f ? !0 : !d;
    i = (c = i) !== null && c !== void 0 ? c : h, o = (s = o) !== null && s !== void 0 ? s : h, l = (u = l) !== null && u !== void 0 ? u : h;
  }
  return [i, o, l, a];
}
function Pw(e) {
  var t = e.showTime, r = pY(e), n = X(r, 2), a = n[0], i = n[1], o = t && An(t) === "object" ? t : {}, l = ue(ue({
    defaultOpenValue: o.defaultOpenValue || o.defaultValue
  }, a), o), c = l.showMillisecond, s = l.showHour, u = l.showMinute, f = l.showSecond, d = $w(s, u, f, c), h = Cw(d, s, u, f, c), v = X(h, 3);
  return s = v[0], u = v[1], f = v[2], [l, ue(ue({}, l), {}, {
    showHour: s,
    showMinute: u,
    showSecond: f,
    showMillisecond: c
  }), l.format, i];
}
function _w(e, t, r, n, a) {
  var i = e === "time";
  if (e === "datetime" || i) {
    for (var o = n, l = yw(e, a, null), c = l, s = [t, r], u = 0; u < s.length; u += 1) {
      var f = jn(s[u])[0];
      if (vY(f)) {
        c = f;
        break;
      }
    }
    var d = o.showHour, h = o.showMinute, v = o.showSecond, m = o.showMillisecond, p = o.use12Hours, y = ii(c, ["a", "A", "LT", "LLL", "LTS"], p), x = $w(d, h, v, m);
    x || (d = ii(c, ["H", "h", "k", "LT", "LLL"]), h = ii(c, ["m", "LT", "LLL"]), v = ii(c, ["s", "LTS"]), m = ii(c, ["SSS"]));
    var S = Cw(x, d, h, v, m), O = X(S, 3);
    d = O[0], h = O[1], v = O[2];
    var g = t || Sw(d, h, v, m, y);
    return ue(ue({}, o), {}, {
      // Format
      format: g,
      // Show Config
      showHour: d,
      showMinute: h,
      showSecond: v,
      showMillisecond: m,
      use12Hours: y
    });
  }
  return null;
}
function mY(e, t, r) {
  if (Oe.env.NODE_ENV !== "production" && r && dr(!1, "`clearIcon` will be removed in future. Please use `allowClear` instead."), t === !1)
    return null;
  var n = t && An(t) === "object" ? t : {};
  return n.clearIcon || r || /* @__PURE__ */ w.createElement("span", {
    className: "".concat(e, "-clear-btn")
  });
}
var ru = 7;
function cn(e, t, r) {
  return !e && !t || e === t ? !0 : !e || !t ? !1 : r();
}
function Lf(e, t, r) {
  return cn(t, r, function() {
    var n = Math.floor(e.getYear(t) / 10), a = Math.floor(e.getYear(r) / 10);
    return n === a;
  });
}
function En(e, t, r) {
  return cn(t, r, function() {
    return e.getYear(t) === e.getYear(r);
  });
}
function Eg(e, t) {
  var r = Math.floor(e.getMonth(t) / 3);
  return r + 1;
}
function gY(e, t, r) {
  return cn(t, r, function() {
    return En(e, t, r) && Eg(e, t) === Eg(e, r);
  });
}
function ch(e, t, r) {
  return cn(t, r, function() {
    return En(e, t, r) && e.getMonth(t) === e.getMonth(r);
  });
}
function sh(e, t, r) {
  return cn(t, r, function() {
    return En(e, t, r) && ch(e, t, r) && e.getDate(t) === e.getDate(r);
  });
}
function Ew(e, t, r) {
  return cn(t, r, function() {
    return e.getHour(t) === e.getHour(r) && e.getMinute(t) === e.getMinute(r) && e.getSecond(t) === e.getSecond(r);
  });
}
function Aw(e, t, r) {
  return cn(t, r, function() {
    return sh(e, t, r) && Ew(e, t, r) && e.getMillisecond(t) === e.getMillisecond(r);
  });
}
function ci(e, t, r, n) {
  return cn(r, n, function() {
    var a = e.locale.getWeekFirstDate(t, r), i = e.locale.getWeekFirstDate(t, n);
    return En(e, a, i) && e.locale.getWeek(t, r) === e.locale.getWeek(t, n);
  });
}
function Tt(e, t, r, n, a) {
  switch (a) {
    case "date":
      return sh(e, r, n);
    case "week":
      return ci(e, t.locale, r, n);
    case "month":
      return ch(e, r, n);
    case "quarter":
      return gY(e, r, n);
    case "year":
      return En(e, r, n);
    case "decade":
      return Lf(e, r, n);
    case "time":
      return Ew(e, r, n);
    default:
      return Aw(e, r, n);
  }
}
function qc(e, t, r, n) {
  return !t || !r || !n ? !1 : e.isAfter(n, t) && e.isAfter(r, n);
}
function Ro(e, t, r, n, a) {
  return Tt(e, t, r, n, a) ? !0 : e.isAfter(r, n);
}
function yY(e, t, r) {
  var n = t.locale.getWeekFirstDay(e), a = t.setDate(r, 1), i = t.getWeekDay(a), o = t.addDate(a, n - i);
  return t.getMonth(o) === t.getMonth(r) && t.getDate(o) > 1 && (o = t.addDate(o, -7)), o;
}
function yt(e, t) {
  var r = t.generateConfig, n = t.locale, a = t.format;
  return e ? typeof a == "function" ? a(e) : r.locale.format(n.locale, e, a) : "";
}
function Zl(e, t, r) {
  var n = t, a = ["getHour", "getMinute", "getSecond", "getMillisecond"], i = ["setHour", "setMinute", "setSecond", "setMillisecond"];
  return i.forEach(function(o, l) {
    r ? n = e[o](n, e[a[l]](r)) : n = e[o](n, 0);
  }), n;
}
function bY(e, t, r, n, a) {
  var i = st(function(o, l) {
    return !!(r && r(o, l) || n && e.isAfter(n, o) && !Tt(e, t, n, o, l.type) || a && e.isAfter(o, a) && !Tt(e, t, a, o, l.type));
  });
  return i;
}
function xY(e, t, r) {
  return w.useMemo(function() {
    var n = yw(e, t, r), a = jn(n), i = a[0], o = An(i) === "object" && i.type === "mask" ? i.format : null;
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
function wY(e, t, r) {
  return typeof e[0] == "function" || r ? !0 : t;
}
function SY(e, t, r, n) {
  var a = st(function(i, o) {
    var l = ue({
      type: t
    }, o);
    if (delete l.activeIndex, // Date object is invalid
    !e.isValidate(i) || // Date is disabled by `disabledDate`
    r && r(i, l))
      return !0;
    if ((t === "date" || t === "time") && n) {
      var c, s = o && o.activeIndex === 1 ? "end" : "start", u = ((c = n.disabledTime) === null || c === void 0 ? void 0 : c.call(n, i, s, {
        from: l.from
      })) || {}, f = u.disabledHours, d = u.disabledMinutes, h = u.disabledSeconds, v = u.disabledMilliseconds, m = n.disabledHours, p = n.disabledMinutes, y = n.disabledSeconds, x = f || m, S = d || p, O = h || y, g = e.getHour(i), b = e.getMinute(i), $ = e.getSecond(i), C = e.getMillisecond(i);
      if (x && x().includes(g) || S && S(g).includes(b) || O && O(g, b).includes($) || v && v(g, b, $).includes(C))
        return !0;
    }
    return !1;
  });
  return a;
}
function ko(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = w.useMemo(function() {
    var n = e && jn(e);
    return t && n && (n[1] = n[1] || n[0]), n;
  }, [e, t]);
  return r;
}
function Tw(e, t) {
  var r = e.generateConfig, n = e.locale, a = e.picker, i = a === void 0 ? "date" : a, o = e.prefixCls, l = o === void 0 ? "rc-picker" : o, c = e.styles, s = c === void 0 ? {} : c, u = e.classNames, f = u === void 0 ? {} : u, d = e.order, h = d === void 0 ? !0 : d, v = e.components, m = v === void 0 ? {} : v, p = e.inputRender, y = e.allowClear, x = e.clearIcon, S = e.needConfirm, O = e.multiple, g = e.format, b = e.inputReadOnly, $ = e.disabledDate, C = e.minDate, _ = e.maxDate, M = e.showTime, P = e.value, I = e.defaultValue, N = e.pickerValue, j = e.defaultPickerValue, E = ko(P), A = ko(I), D = ko(N), R = ko(j), k = i === "date" && M ? "datetime" : i, L = k === "time" || k === "datetime", H = L || O, B = S ?? L, W = Pw(e), z = X(W, 4), G = z[0], Q = z[1], ne = z[2], te = z[3], V = Ow(n, Q), K = w.useMemo(function() {
    return _w(k, ne, te, G, V);
  }, [k, ne, te, G, V]);
  Oe.env.NODE_ENV !== "production" && i === "time" && ["disabledHours", "disabledMinutes", "disabledSeconds"].some(function(ke) {
    return e[ke];
  }) && dr(!1, "'disabledHours', 'disabledMinutes', 'disabledSeconds' will be removed in the next major version, please use 'disabledTime' instead.");
  var q = w.useMemo(function() {
    return ue(ue({}, e), {}, {
      prefixCls: l,
      locale: V,
      picker: i,
      styles: s,
      classNames: f,
      order: h,
      components: ue({
        input: p
      }, m),
      clearIcon: mY(l, y, x),
      showTime: K,
      value: E,
      defaultValue: A,
      pickerValue: D,
      defaultPickerValue: R
    }, t == null ? void 0 : t());
  }, [e]), F = xY(k, V, g), J = X(F, 2), Z = J[0], le = J[1], re = wY(Z, b, O), ae = bY(r, n, $, C, _), de = SY(r, i, ae, K), $e = w.useMemo(function() {
    return ue(ue({}, q), {}, {
      needConfirm: B,
      inputReadOnly: re,
      disabledDate: ae
    });
  }, [q, B, re, ae]);
  return [$e, k, H, Z, le, de];
}
function OY(e, t, r) {
  var n = fr(t, {
    value: e
  }), a = X(n, 2), i = a[0], o = a[1], l = T.useRef(e), c = T.useRef(), s = function() {
    Wt.cancel(c.current);
  }, u = st(function() {
    o(l.current), r && i !== l.current && r(l.current);
  }), f = st(function(d, h) {
    s(), l.current = d, d || h ? u() : c.current = Wt(u);
  });
  return T.useEffect(function() {
    return s;
  }, []), [i, f];
}
function Mw(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = arguments.length > 3 ? arguments[3] : void 0, a = r.every(function(u) {
    return u;
  }) ? !1 : e, i = OY(a, t || !1, n), o = X(i, 2), l = o[0], c = o[1];
  function s(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (!f.inherit || l) && c(u, f.force);
  }
  return [l, s];
}
function Iw(e) {
  var t = w.useRef();
  return w.useImperativeHandle(e, function() {
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
function jw(e, t) {
  return w.useMemo(function() {
    return e || (t ? (dr(!1, "`ranges` is deprecated. Please use `presets` instead."), Object.entries(t).map(function(r) {
      var n = X(r, 2), a = n[0], i = n[1];
      return {
        label: a,
        value: i
      };
    })) : []);
  }, [e, t]);
}
function uh(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, n = w.useRef(t);
  n.current = t, Q1(function() {
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
function Dw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = w.useState(0), a = X(n, 2), i = a[0], o = a[1], l = w.useState(!1), c = X(l, 2), s = c[0], u = c[1], f = w.useRef([]), d = w.useRef(null), h = function(y) {
    u(y);
  }, v = function(y) {
    return y && (d.current = y), d.current;
  }, m = function(y) {
    var x = f.current, S = new Set(x.filter(function(g) {
      return y[g] || t[g];
    })), O = x[x.length - 1] === 0 ? 1 : 0;
    return S.size >= 2 || e[O] ? null : O;
  };
  return uh(s || r, function() {
    s || (f.current = []);
  }), w.useEffect(function() {
    s && f.current.push(i);
  }, [s, i]), [s, h, v, i, o, m, f.current];
}
function $Y(e, t, r, n, a, i) {
  var o = r[r.length - 1], l = function(s, u) {
    var f = X(e, 2), d = f[0], h = f[1], v = ue(ue({}, u), {}, {
      from: bw(e, r)
    });
    return o === 1 && t[0] && d && // Same date isOK
    !Tt(n, a, d, s, v.type) && // Before start date
    n.isAfter(d, s) || o === 0 && t[1] && h && // Same date isOK
    !Tt(n, a, h, s, v.type) && // After end date
    n.isAfter(s, h) ? !0 : i == null ? void 0 : i(s, v);
  };
  return l;
}
function si(e, t, r, n) {
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
var nu = [];
function Nw(e, t, r, n, a, i, o, l) {
  var c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : nu, s = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : nu, u = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : nu, f = arguments.length > 11 ? arguments[11] : void 0, d = arguments.length > 12 ? arguments[12] : void 0, h = arguments.length > 13 ? arguments[13] : void 0, v = o === "time", m = i || 0, p = function(D) {
    var R = e.getNow();
    return v && (R = Zl(e, R)), c[D] || r[D] || R;
  }, y = X(s, 2), x = y[0], S = y[1], O = fr(function() {
    return p(0);
  }, {
    value: x
  }), g = X(O, 2), b = g[0], $ = g[1], C = fr(function() {
    return p(1);
  }, {
    value: S
  }), _ = X(C, 2), M = _[0], P = _[1], I = w.useMemo(function() {
    var A = [b, M][m];
    return v ? A : Zl(e, A, u[m]);
  }, [v, b, M, m, e, u]), N = function(D) {
    var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "panel", k = [$, P][m];
    k(D);
    var L = [b, M];
    L[m] = D, f && (!Tt(e, t, b, L[0], o) || !Tt(e, t, M, L[1], o)) && f(L, {
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
        return si(e, o, R, -1);
      if (o === "year" && D) {
        var H = Math.floor(e.getYear(D) / 10), B = Math.floor(e.getYear(R) / 10);
        if (H !== B)
          return si(e, o, R, -1);
      }
    }
    return R;
  }, E = w.useRef(null);
  return Br(function() {
    if (a && !c[m]) {
      var A = v ? null : e.getNow();
      if (E.current !== null && E.current !== m ? A = [b, M][m ^ 1] : r[m] ? A = m === 0 ? r[0] : j(r[0], r[1]) : r[m ^ 1] && (A = r[m ^ 1]), A) {
        d && e.isAfter(d, A) && (A = d);
        var D = l ? si(e, o, A, 1) : A;
        h && e.isAfter(D, h) && (A = l ? si(e, o, h, -1) : h), N(A, "reset");
      }
    }
  }, [a, m, r[m]]), w.useEffect(function() {
    a ? E.current = m : E.current = null;
  }, [a, m]), Br(function() {
    a && c && c[m] && N(c[m], "reset");
  }, [a, m]), [I, N];
}
function Rw(e, t) {
  var r = w.useRef(e), n = w.useState({}), a = X(n, 2), i = a[1], o = function(s) {
    return s && t !== void 0 ? t : r.current;
  }, l = function(s) {
    r.current = s, i({});
  };
  return [o, l, o(!0)];
}
var CY = [];
function kw(e, t, r) {
  var n = function(o) {
    return o.map(function(l) {
      return yt(l, {
        generateConfig: e,
        locale: t,
        format: r[0]
      });
    });
  }, a = function(o, l) {
    for (var c = Math.max(o.length, l.length), s = -1, u = 0; u < c; u += 1) {
      var f = o[u] || null, d = l[u] || null;
      if (f !== d && !Aw(e, f, d)) {
        s = u;
        break;
      }
    }
    return [s < 0, s !== 0];
  };
  return [n, a];
}
function Bw(e, t) {
  return Vt(e).sort(function(r, n) {
    return t.isAfter(r, n) ? 1 : -1;
  });
}
function PY(e) {
  var t = Rw(e), r = X(t, 2), n = r[0], a = r[1], i = st(function() {
    a(e);
  });
  return w.useEffect(function() {
    i();
  }, [e]), [n, a];
}
function Lw(e, t, r, n, a, i, o, l, c) {
  var s = fr(i, {
    value: o
  }), u = X(s, 2), f = u[0], d = u[1], h = f || CY, v = PY(h), m = X(v, 2), p = m[0], y = m[1], x = kw(e, t, r), S = X(x, 2), O = S[0], g = S[1], b = st(function(C) {
    var _ = Vt(C);
    if (n)
      for (var M = 0; M < 2; M += 1)
        _[M] = _[M] || null;
    else a && (_ = Bw(_.filter(function(A) {
      return A;
    }), e));
    var P = g(p(), _), I = X(P, 2), N = I[0], j = I[1];
    if (!N && (y(_), l)) {
      var E = O(_);
      l(_, E, {
        range: j ? "end" : "start"
      });
    }
  }), $ = function() {
    c && c(p());
  };
  return [h, d, p, b, $];
}
function Hw(e, t, r, n, a, i, o, l, c, s) {
  var u = e.generateConfig, f = e.locale, d = e.picker, h = e.onChange, v = e.allowEmpty, m = e.order, p = i.some(function(N) {
    return N;
  }) ? !1 : m, y = kw(u, f, o), x = X(y, 2), S = x[0], O = x[1], g = Rw(t), b = X(g, 2), $ = b[0], C = b[1], _ = st(function() {
    C(t);
  });
  w.useEffect(function() {
    _();
  }, [t]);
  var M = st(function(N) {
    var j = N === null, E = Vt(N || $());
    if (j)
      for (var A = Math.max(i.length, E.length), D = 0; D < A; D += 1)
        i[D] || (E[D] = null);
    p && E[0] && E[1] && (E = Bw(E, u)), a(E);
    var R = E, k = X(R, 2), L = k[0], H = k[1], B = !L, W = !H, z = v ? (
      // Validate empty start
      (!B || v[0]) && // Validate empty end
      (!W || v[1])
    ) : !0, G = !m || B || W || Tt(u, f, L, H, d) || u.isAfter(H, L), Q = (
      // Validate start
      (!L || !s(L, {
        activeIndex: 0
      })) && // Validate end
      (!H || !s(H, {
        from: L,
        activeIndex: 1
      }))
    ), ne = (
      // Null value is from clear button
      j || // Normal check
      z && G && Q
    );
    if (ne) {
      r(E);
      var te = O(E, t), V = X(te, 1), K = V[0];
      h && !K && h(
        // Return null directly if all date are empty
        j && E.every(function(q) {
          return !q;
        }) ? null : E,
        S(E)
      );
    }
    return ne;
  }), P = st(function(N, j) {
    var E = yi($(), N, n()[N]);
    C(E), j && M();
  }), I = !l && !c;
  return uh(!I, function() {
    I && (M(), a(t), _());
  }, 2), [P, M];
}
function Fw(e, t, r, n, a) {
  return t !== "date" && t !== "time" ? !1 : r !== void 0 ? r : n !== void 0 ? n : !a && (e === "date" || e === "time");
}
function _Y(e, t, r, n, a, i) {
  var o = e;
  function l(f, d, h) {
    var v = i[f](o), m = h.find(function(S) {
      return S.value === v;
    });
    if (!m || m.disabled) {
      var p = h.filter(function(S) {
        return !S.disabled;
      }), y = Vt(p).reverse(), x = y.find(function(S) {
        return S.value <= v;
      }) || p[0];
      x && (v = x.value, o = i[d](o, v));
    }
    return v;
  }
  var c = l("getHour", "setHour", t()), s = l("getMinute", "setMinute", r(c)), u = l("getSecond", "setSecond", n(c, s));
  return l("getMillisecond", "setMillisecond", a(c, s, u)), o;
}
function Bo() {
  return [];
}
function Lo(e, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 2, o = [], l = r >= 1 ? r | 0 : 1, c = e; c <= t; c += l) {
    var s = a.includes(c);
    (!s || !n) && o.push({
      label: oh(c, i),
      value: c,
      disabled: s
    });
  }
  return o;
}
function fh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = t || {}, a = n.use12Hours, i = n.hourStep, o = i === void 0 ? 1 : i, l = n.minuteStep, c = l === void 0 ? 1 : l, s = n.secondStep, u = s === void 0 ? 1 : s, f = n.millisecondStep, d = f === void 0 ? 100 : f, h = n.hideDisabledOptions, v = n.disabledTime, m = n.disabledHours, p = n.disabledMinutes, y = n.disabledSeconds, x = w.useMemo(function() {
    return r || e.getNow();
  }, [r, e]);
  if (Oe.env.NODE_ENV !== "production") {
    var S = 24 % o === 0, O = 60 % c === 0, g = 60 % u === 0;
    dr(S, "`hourStep` ".concat(o, " is invalid. It should be a factor of 24.")), dr(O, "`minuteStep` ".concat(c, " is invalid. It should be a factor of 60.")), dr(g, "`secondStep` ".concat(u, " is invalid. It should be a factor of 60."));
  }
  var b = w.useCallback(function(H) {
    var B = (v == null ? void 0 : v(H)) || {};
    return [B.disabledHours || m || Bo, B.disabledMinutes || p || Bo, B.disabledSeconds || y || Bo, B.disabledMilliseconds || Bo];
  }, [v, m, p, y]), $ = w.useMemo(function() {
    return b(x);
  }, [x, b]), C = X($, 4), _ = C[0], M = C[1], P = C[2], I = C[3], N = w.useCallback(function(H, B, W, z) {
    var G = Lo(0, 23, o, h, H()), Q = a ? G.map(function(K) {
      return ue(ue({}, K), {}, {
        label: oh(K.value % 12 || 12, 2)
      });
    }) : G, ne = function(q) {
      return Lo(0, 59, c, h, B(q));
    }, te = function(q, F) {
      return Lo(0, 59, u, h, W(q, F));
    }, V = function(q, F, J) {
      return Lo(0, 999, d, h, z(q, F, J), 3);
    };
    return [Q, ne, te, V];
  }, [h, o, a, d, c, u]), j = w.useMemo(function() {
    return N(_, M, P, I);
  }, [N, _, M, P, I]), E = X(j, 4), A = E[0], D = E[1], R = E[2], k = E[3], L = function(B, W) {
    var z = function() {
      return A;
    }, G = D, Q = R, ne = k;
    if (W) {
      var te = b(W), V = X(te, 4), K = V[0], q = V[1], F = V[2], J = V[3], Z = N(K, q, F, J), le = X(Z, 4), re = le[0], ae = le[1], de = le[2], $e = le[3];
      z = function() {
        return re;
      }, G = ae, Q = de, ne = $e;
    }
    var ke = _Y(B, z, G, Q, ne, e);
    return ke;
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
function EY(e) {
  var t = e.mode, r = e.internalMode, n = e.renderExtraFooter, a = e.showNow, i = e.showTime, o = e.onSubmit, l = e.onNow, c = e.invalid, s = e.needConfirm, u = e.generateConfig, f = e.disabledDate, d = w.useContext(pr), h = d.prefixCls, v = d.locale, m = d.button, p = m === void 0 ? "button" : m, y = u.getNow(), x = fh(u, i, y), S = X(x, 1), O = S[0], g = n == null ? void 0 : n(t), b = f(y, {
    type: t
  }), $ = function() {
    if (!b) {
      var j = O(y);
      l(j);
    }
  }, C = "".concat(h, "-now"), _ = "".concat(C, "-btn"), M = a && /* @__PURE__ */ w.createElement("li", {
    className: C
  }, /* @__PURE__ */ w.createElement("a", {
    className: Ie(_, b && "".concat(_, "-disabled")),
    "aria-disabled": b,
    onClick: $
  }, r === "date" ? v.today : v.now)), P = s && /* @__PURE__ */ w.createElement("li", {
    className: "".concat(h, "-ok")
  }, /* @__PURE__ */ w.createElement(p, {
    disabled: c,
    onClick: o
  }, v.ok)), I = (M || P) && /* @__PURE__ */ w.createElement("ul", {
    className: "".concat(h, "-ranges")
  }, M, P);
  return !g && !I ? null : /* @__PURE__ */ w.createElement("div", {
    className: "".concat(h, "-footer")
  }, g && /* @__PURE__ */ w.createElement("div", {
    className: "".concat(h, "-footer-extra")
  }, g), I);
}
function Ww(e, t, r) {
  function n(a, i) {
    var o = a.findIndex(function(c) {
      return Tt(e, t, c, i, r);
    });
    if (o === -1)
      return [].concat(Vt(a), [i]);
    var l = Vt(a);
    return l.splice(o, 1), l;
  }
  return n;
}
var Dn = /* @__PURE__ */ w.createContext(null);
function Gc() {
  return w.useContext(Dn);
}
function Fa(e, t) {
  var r = e.prefixCls, n = e.generateConfig, a = e.locale, i = e.disabledDate, o = e.minDate, l = e.maxDate, c = e.cellRender, s = e.hoverValue, u = e.hoverRangeValue, f = e.onHover, d = e.values, h = e.pickerValue, v = e.onSelect, m = e.prevIcon, p = e.nextIcon, y = e.superPrevIcon, x = e.superNextIcon, S = n.getNow(), O = {
    now: S,
    values: d,
    pickerValue: h,
    prefixCls: r,
    disabledDate: i,
    minDate: o,
    maxDate: l,
    cellRender: c,
    hoverValue: s,
    hoverRangeValue: u,
    onHover: f,
    locale: a,
    generateConfig: n,
    onSelect: v,
    panelType: t,
    // Icons
    prevIcon: m,
    nextIcon: p,
    superPrevIcon: y,
    superNextIcon: x
  };
  return [O, S];
}
var kr = /* @__PURE__ */ w.createContext({});
Oe.env.NODE_ENV !== "production" && (kr.displayName = "PickerHackContext");
function so(e) {
  for (var t = e.rowNum, r = e.colNum, n = e.baseDate, a = e.getCellDate, i = e.prefixColumn, o = e.rowClassName, l = e.titleFormat, c = e.getCellText, s = e.getCellClassName, u = e.headerCells, f = e.cellSelection, d = f === void 0 ? !0 : f, h = e.disabledDate, v = Gc(), m = v.prefixCls, p = v.panelType, y = v.now, x = v.disabledDate, S = v.cellRender, O = v.onHover, g = v.hoverValue, b = v.hoverRangeValue, $ = v.generateConfig, C = v.values, _ = v.locale, M = v.onSelect, P = h || x, I = "".concat(m, "-cell"), N = w.useContext(kr), j = N.onCellDblClick, E = function(W) {
    return C.some(function(z) {
      return z && Tt($, _, W, z, p);
    });
  }, A = [], D = 0; D < t; D += 1) {
    for (var R = [], k = void 0, L = function() {
      var W = D * r + H, z = a(n, W), G = P == null ? void 0 : P(z, {
        type: p
      });
      H === 0 && (k = z, i && R.push(i(k)));
      var Q = !1, ne = !1, te = !1;
      if (d && b) {
        var V = X(b, 2), K = V[0], q = V[1];
        Q = qc($, K, q, z), ne = Tt($, _, z, K, p), te = Tt($, _, z, q, p);
      }
      var F = l ? yt(z, {
        locale: _,
        format: l,
        generateConfig: $
      }) : void 0, J = /* @__PURE__ */ w.createElement("div", {
        className: "".concat(I, "-inner")
      }, c(z));
      R.push(/* @__PURE__ */ w.createElement("td", {
        key: H,
        title: F,
        className: Ie(I, ue(ve(ve(ve(ve(ve(ve({}, "".concat(I, "-disabled"), G), "".concat(I, "-hover"), (g || []).some(function(Z) {
          return Tt($, _, z, Z, p);
        })), "".concat(I, "-in-range"), Q && !ne && !te), "".concat(I, "-range-start"), ne), "".concat(I, "-range-end"), te), "".concat(m, "-cell-selected"), !b && // WeekPicker use row instead
        p !== "week" && E(z)), s(z))),
        onClick: function() {
          G || M(z);
        },
        onDoubleClick: function() {
          !G && j && j();
        },
        onMouseEnter: function() {
          G || O == null || O(z);
        },
        onMouseLeave: function() {
          G || O == null || O(null);
        }
      }, S ? S(z, {
        prefixCls: m,
        originNode: J,
        today: y,
        type: p,
        locale: _
      }) : J));
    }, H = 0; H < r; H += 1)
      L();
    A.push(/* @__PURE__ */ w.createElement("tr", {
      key: D,
      className: o == null ? void 0 : o(k)
    }, R));
  }
  return /* @__PURE__ */ w.createElement("div", {
    className: "".concat(m, "-body")
  }, /* @__PURE__ */ w.createElement("table", {
    className: "".concat(m, "-content")
  }, u && /* @__PURE__ */ w.createElement("thead", null, /* @__PURE__ */ w.createElement("tr", null, u)), /* @__PURE__ */ w.createElement("tbody", null, A)));
}
var Ho = {
  visibility: "hidden"
};
function Wa(e) {
  var t = e.offset, r = e.superOffset, n = e.onChange, a = e.getStart, i = e.getEnd, o = e.children, l = Gc(), c = l.prefixCls, s = l.prevIcon, u = s === void 0 ? "‹" : s, f = l.nextIcon, d = f === void 0 ? "›" : f, h = l.superPrevIcon, v = h === void 0 ? "«" : h, m = l.superNextIcon, p = m === void 0 ? "»" : m, y = l.minDate, x = l.maxDate, S = l.generateConfig, O = l.locale, g = l.pickerValue, b = l.panelType, $ = "".concat(c, "-header"), C = w.useContext(kr), _ = C.hidePrev, M = C.hideNext, P = C.hideHeader, I = w.useMemo(function() {
    if (!y || !t || !i)
      return !1;
    var B = i(t(-1, g));
    return !Ro(S, O, B, y, b);
  }, [y, t, g, i, S, O, b]), N = w.useMemo(function() {
    if (!y || !r || !i)
      return !1;
    var B = i(r(-1, g));
    return !Ro(S, O, B, y, b);
  }, [y, r, g, i, S, O, b]), j = w.useMemo(function() {
    if (!x || !t || !a)
      return !1;
    var B = a(t(1, g));
    return !Ro(S, O, x, B, b);
  }, [x, t, g, a, S, O, b]), E = w.useMemo(function() {
    if (!x || !r || !a)
      return !1;
    var B = a(r(1, g));
    return !Ro(S, O, x, B, b);
  }, [x, r, g, a, S, O, b]), A = function(W) {
    t && n(t(W, g));
  }, D = function(W) {
    r && n(r(W, g));
  };
  if (P)
    return null;
  var R = "".concat($, "-prev-btn"), k = "".concat($, "-next-btn"), L = "".concat($, "-super-prev-btn"), H = "".concat($, "-super-next-btn");
  return /* @__PURE__ */ w.createElement("div", {
    className: $
  }, r && /* @__PURE__ */ w.createElement("button", {
    type: "button",
    "aria-label": "super-prev-year",
    onClick: function() {
      return D(-1);
    },
    tabIndex: -1,
    className: Ie(L, N && "".concat(L, "-disabled")),
    disabled: N,
    style: _ ? Ho : {}
  }, v), t && /* @__PURE__ */ w.createElement("button", {
    type: "button",
    "aria-label": "prev-year",
    onClick: function() {
      return A(-1);
    },
    tabIndex: -1,
    className: Ie(R, I && "".concat(R, "-disabled")),
    disabled: I,
    style: _ ? Ho : {}
  }, u), /* @__PURE__ */ w.createElement("div", {
    className: "".concat($, "-view")
  }, o), t && /* @__PURE__ */ w.createElement("button", {
    type: "button",
    "aria-label": "next-year",
    onClick: function() {
      return A(1);
    },
    tabIndex: -1,
    className: Ie(k, j && "".concat(k, "-disabled")),
    disabled: j,
    style: M ? Ho : {}
  }, d), r && /* @__PURE__ */ w.createElement("button", {
    type: "button",
    "aria-label": "super-next-year",
    onClick: function() {
      return D(1);
    },
    tabIndex: -1,
    className: Ie(H, E && "".concat(H, "-disabled")),
    disabled: E,
    style: M ? Ho : {}
  }, p));
}
function Kc(e) {
  var t = e.prefixCls, r = e.panelName, n = r === void 0 ? "date" : r, a = e.locale, i = e.generateConfig, o = e.pickerValue, l = e.onPickerValueChange, c = e.onModeChange, s = e.mode, u = s === void 0 ? "date" : s, f = e.disabledDate, d = e.onSelect, h = e.onHover, v = e.showWeek, m = "".concat(t, "-").concat(n, "-panel"), p = "".concat(t, "-cell"), y = u === "week", x = Fa(e, u), S = X(x, 2), O = S[0], g = S[1], b = i.locale.getWeekFirstDay(a.locale), $ = i.setDate(o, 1), C = yY(a.locale, i, $), _ = i.getMonth(o), M = v === void 0 ? y : v, P = M ? function(B) {
    var W = f == null ? void 0 : f(B, {
      type: "week"
    });
    return /* @__PURE__ */ w.createElement("td", {
      key: "week",
      className: Ie(p, "".concat(p, "-week"), ve({}, "".concat(p, "-disabled"), W)),
      onClick: function() {
        W || d(B);
      },
      onMouseEnter: function() {
        W || h == null || h(B);
      },
      onMouseLeave: function() {
        W || h == null || h(null);
      }
    }, /* @__PURE__ */ w.createElement("div", {
      className: "".concat(p, "-inner")
    }, i.locale.getWeek(a.locale, B)));
  } : null, I = [], N = a.shortWeekDays || (i.locale.getShortWeekDays ? i.locale.getShortWeekDays(a.locale) : []);
  P && I.push(/* @__PURE__ */ w.createElement("th", {
    key: "empty",
    "aria-label": "empty cell"
  }));
  for (var j = 0; j < ru; j += 1)
    I.push(/* @__PURE__ */ w.createElement("th", {
      key: j
    }, N[(j + b) % ru]));
  var E = function(W, z) {
    return i.addDate(W, z);
  }, A = function(W) {
    return yt(W, {
      locale: a,
      format: a.cellDateFormat,
      generateConfig: i
    });
  }, D = function(W) {
    var z = ve(ve({}, "".concat(t, "-cell-in-view"), ch(i, W, o)), "".concat(t, "-cell-today"), sh(i, W, g));
    return z;
  }, R = a.shortMonths || (i.locale.getShortMonths ? i.locale.getShortMonths(a.locale) : []), k = /* @__PURE__ */ w.createElement("button", {
    type: "button",
    "aria-label": "year panel",
    key: "year",
    onClick: function() {
      c("year", o);
    },
    tabIndex: -1,
    className: "".concat(t, "-year-btn")
  }, yt(o, {
    locale: a,
    format: a.yearFormat,
    generateConfig: i
  })), L = /* @__PURE__ */ w.createElement("button", {
    type: "button",
    "aria-label": "month panel",
    key: "month",
    onClick: function() {
      c("month", o);
    },
    tabIndex: -1,
    className: "".concat(t, "-month-btn")
  }, a.monthFormat ? yt(o, {
    locale: a,
    format: a.monthFormat,
    generateConfig: i
  }) : R[_]), H = a.monthBeforeYear ? [L, k] : [k, L];
  return /* @__PURE__ */ w.createElement(Dn.Provider, {
    value: O
  }, /* @__PURE__ */ w.createElement("div", {
    className: Ie(m, v && "".concat(m, "-show-week"))
  }, /* @__PURE__ */ w.createElement(Wa, {
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
      var z = i.setDate(W, 1);
      return z = i.addMonth(z, 1), i.addDate(z, -1);
    }
  }, H), /* @__PURE__ */ w.createElement(so, we({
    titleFormat: a.fieldDateFormat
  }, e, {
    colNum: ru,
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
var AY = 1 / 3;
function TY(e, t) {
  var r = w.useRef(!1), n = w.useRef(null), a = w.useRef(null), i = function() {
    return r.current;
  }, o = function() {
    Wt.cancel(n.current), r.current = !1;
  }, l = w.useRef(), c = function() {
    var f = e.current;
    if (a.current = null, l.current = 0, f) {
      var d = f.querySelector('[data-value="'.concat(t, '"]')), h = f.querySelector("li"), v = function m() {
        o(), r.current = !0, l.current += 1;
        var p = f.scrollTop, y = h.offsetTop, x = d.offsetTop, S = x - y;
        if (x === 0 && d !== h || !Vg(f)) {
          l.current <= 5 && (n.current = Wt(m));
          return;
        }
        var O = p + (S - p) * AY, g = Math.abs(S - O);
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
      d && h && v();
    }
  }, s = st(c);
  return [s, o, i];
}
var MY = 300;
function oi(e) {
  var t = e.units, r = e.value, n = e.optionalValue, a = e.type, i = e.onChange, o = e.onHover, l = e.onDblClick, c = e.changeOnScroll, s = Gc(), u = s.prefixCls, f = s.cellRender, d = s.now, h = s.locale, v = "".concat(u, "-time-panel"), m = "".concat(u, "-time-panel-cell"), p = w.useRef(null), y = w.useRef(), x = function() {
    clearTimeout(y.current);
  }, S = TY(p, r ?? n), O = X(S, 3), g = O[0], b = O[1], $ = O[2];
  Br(function() {
    return g(), x(), function() {
      b(), x();
    };
  }, [r, n, t]);
  var C = function(P) {
    x();
    var I = P.target;
    !$() && c && (y.current = setTimeout(function() {
      var N = p.current, j = N.querySelector("li").offsetTop, E = Array.from(N.querySelectorAll("li")), A = E.map(function(H) {
        return H.offsetTop - j;
      }), D = A.map(function(H, B) {
        return t[B].disabled ? Number.MAX_SAFE_INTEGER : Math.abs(H - I.scrollTop);
      }), R = Math.min.apply(Math, Vt(D)), k = D.findIndex(function(H) {
        return H === R;
      }), L = t[k];
      L && !L.disabled && i(L.value);
    }, MY));
  }, _ = "".concat(v, "-column");
  return /* @__PURE__ */ w.createElement("ul", {
    className: _,
    ref: p,
    "data-type": a,
    onScroll: C
  }, t.map(function(M) {
    var P = M.label, I = M.value, N = M.disabled, j = /* @__PURE__ */ w.createElement("div", {
      className: "".concat(m, "-inner")
    }, P);
    return /* @__PURE__ */ w.createElement("li", {
      key: I,
      className: Ie(m, ve(ve({}, "".concat(m, "-selected"), r === I), "".concat(m, "-disabled"), N)),
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
      locale: h
    }) : j);
  }));
}
function Gr(e) {
  return e < 12;
}
function IY(e) {
  var t = e.showHour, r = e.showMinute, n = e.showSecond, a = e.showMillisecond, i = e.use12Hours, o = e.changeOnScroll, l = Gc(), c = l.prefixCls, s = l.values, u = l.generateConfig, f = l.locale, d = l.onSelect, h = l.onHover, v = h === void 0 ? function() {
  } : h, m = l.pickerValue, p = (s == null ? void 0 : s[0]) || null, y = w.useContext(kr), x = y.onCellDblClick, S = fh(u, e, p), O = X(S, 5), g = O[0], b = O[1], $ = O[2], C = O[3], _ = O[4], M = function(fe) {
    var Ye = p && u[fe](p), nt = m && u[fe](m);
    return [Ye, nt];
  }, P = M("getHour"), I = X(P, 2), N = I[0], j = I[1], E = M("getMinute"), A = X(E, 2), D = A[0], R = A[1], k = M("getSecond"), L = X(k, 2), H = L[0], B = L[1], W = M("getMillisecond"), z = X(W, 2), G = z[0], Q = z[1], ne = N === null ? null : Gr(N) ? "am" : "pm", te = w.useMemo(function() {
    return i ? Gr(N) ? b.filter(function(ie) {
      return Gr(ie.value);
    }) : b.filter(function(ie) {
      return !Gr(ie.value);
    }) : b;
  }, [N, b, i]), V = function(fe, Ye) {
    var nt, Xe = fe.filter(function(Et) {
      return !Et.disabled;
    });
    return Ye ?? // Fallback to enabled value
    (Xe == null || (nt = Xe[0]) === null || nt === void 0 ? void 0 : nt.value);
  }, K = V(b, N), q = w.useMemo(function() {
    return $(K);
  }, [$, K]), F = V(q, D), J = w.useMemo(function() {
    return C(K, F);
  }, [C, K, F]), Z = V(J, H), le = w.useMemo(function() {
    return _(K, F, Z);
  }, [_, K, F, Z]), re = V(le, G), ae = w.useMemo(function() {
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
      disabled: b.every(function(Xe) {
        return Xe.disabled || !Gr(Xe.value);
      })
    }, {
      label: nt(Ye, "PM"),
      value: "pm",
      disabled: b.every(function(Xe) {
        return Xe.disabled || Gr(Xe.value);
      })
    }];
  }, [b, i, u, f]), de = function(fe) {
    var Ye = g(fe);
    d(Ye);
  }, $e = w.useMemo(function() {
    var ie = p || m || u.getNow(), fe = function(nt) {
      return nt != null;
    };
    return fe(N) ? (ie = u.setHour(ie, N), ie = u.setMinute(ie, D), ie = u.setSecond(ie, H), ie = u.setMillisecond(ie, G)) : fe(j) ? (ie = u.setHour(ie, j), ie = u.setMinute(ie, R), ie = u.setSecond(ie, B), ie = u.setMillisecond(ie, Q)) : fe(K) && (ie = u.setHour(ie, K), ie = u.setMinute(ie, F), ie = u.setSecond(ie, Z), ie = u.setMillisecond(ie, re)), ie;
  }, [p, m, N, D, H, G, K, F, Z, re, j, R, B, Q, u]), ke = function(fe, Ye) {
    return fe === null ? null : u[Ye]($e, fe);
  }, Ae = function(fe) {
    return ke(fe, "setHour");
  }, De = function(fe) {
    return ke(fe, "setMinute");
  }, Ge = function(fe) {
    return ke(fe, "setSecond");
  }, Qe = function(fe) {
    return ke(fe, "setMillisecond");
  }, Ke = function(fe) {
    return fe === null ? null : fe === "am" && !Gr(N) ? u.setHour($e, N - 12) : fe === "pm" && Gr(N) ? u.setHour($e, N + 12) : $e;
  }, Ue = function(fe) {
    de(Ae(fe));
  }, Ve = function(fe) {
    de(De(fe));
  }, _t = function(fe) {
    de(Ge(fe));
  }, He = function(fe) {
    de(Qe(fe));
  }, ot = function(fe) {
    de(Ke(fe));
  }, Se = function(fe) {
    v(Ae(fe));
  }, Me = function(fe) {
    v(De(fe));
  }, he = function(fe) {
    v(Ge(fe));
  }, oe = function(fe) {
    v(Qe(fe));
  }, pe = function(fe) {
    v(Ke(fe));
  }, Pe = {
    onDblClick: x,
    changeOnScroll: o
  };
  return /* @__PURE__ */ w.createElement("div", {
    className: "".concat(c, "-content")
  }, t && /* @__PURE__ */ w.createElement(oi, we({
    units: te,
    value: N,
    optionalValue: j,
    type: "hour",
    onChange: Ue,
    onHover: Se
  }, Pe)), r && /* @__PURE__ */ w.createElement(oi, we({
    units: q,
    value: D,
    optionalValue: R,
    type: "minute",
    onChange: Ve,
    onHover: Me
  }, Pe)), n && /* @__PURE__ */ w.createElement(oi, we({
    units: J,
    value: H,
    optionalValue: B,
    type: "second",
    onChange: _t,
    onHover: he
  }, Pe)), a && /* @__PURE__ */ w.createElement(oi, we({
    units: le,
    value: G,
    optionalValue: Q,
    type: "millisecond",
    onChange: He,
    onHover: oe
  }, Pe)), i && /* @__PURE__ */ w.createElement(oi, we({
    units: ae,
    value: ne,
    type: "meridiem",
    onChange: ot,
    onHover: pe
  }, Pe)));
}
function Vw(e) {
  var t = e.prefixCls, r = e.value, n = e.locale, a = e.generateConfig, i = e.showTime, o = i || {}, l = o.format, c = "".concat(t, "-time-panel"), s = Fa(e, "time"), u = X(s, 1), f = u[0];
  return /* @__PURE__ */ w.createElement(Dn.Provider, {
    value: f
  }, /* @__PURE__ */ w.createElement("div", {
    className: Ie(c)
  }, /* @__PURE__ */ w.createElement(Wa, null, r ? yt(r, {
    locale: n,
    format: l,
    generateConfig: a
  }) : " "), /* @__PURE__ */ w.createElement(IY, i)));
}
function jY(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.showTime, a = e.onSelect, i = e.value, o = e.pickerValue, l = e.onHover, c = "".concat(t, "-datetime-panel"), s = fh(r, n), u = X(s, 1), f = u[0], d = function(p) {
    return i ? Zl(r, p, i) : Zl(r, p, o);
  }, h = function(p) {
    l == null || l(p && d(p));
  }, v = function(p) {
    var y = d(p);
    a(f(y, y));
  };
  return /* @__PURE__ */ w.createElement("div", {
    className: c
  }, /* @__PURE__ */ w.createElement(Kc, we({}, e, {
    onSelect: v,
    onHover: h
  })), /* @__PURE__ */ w.createElement(Vw, e));
}
function DY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = "".concat(t, "-decade-panel"), c = Fa(e, "decade"), s = X(c, 1), u = s[0], f = function(b) {
    var $ = Math.floor(n.getYear(a) / 100) * 100;
    return n.setYear(b, $);
  }, d = function(b) {
    var $ = f(b);
    return n.addYear($, 99);
  }, h = f(a), v = d(a), m = n.addYear(h, -10), p = function(b, $) {
    return n.addYear(b, $ * 10);
  }, y = function(b) {
    var $ = r.cellYearFormat, C = yt(b, {
      locale: r,
      format: $,
      generateConfig: n
    }), _ = yt(n.addYear(b, 9), {
      locale: r,
      format: $,
      generateConfig: n
    });
    return "".concat(C, "-").concat(_);
  }, x = function(b) {
    return ve({}, "".concat(t, "-cell-in-view"), Lf(n, b, h) || Lf(n, b, v) || qc(n, h, v, b));
  }, S = i ? function(g, b) {
    var $ = n.setDate(g, 1), C = n.setMonth($, 0), _ = n.setYear(C, Math.floor(n.getYear(C) / 10) * 10), M = n.addYear(_, 10), P = n.addDate(M, -1);
    return i(_, b) && i(P, b);
  } : null, O = "".concat(yt(h, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }), "-").concat(yt(v, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ w.createElement(Dn.Provider, {
    value: u
  }, /* @__PURE__ */ w.createElement("div", {
    className: l
  }, /* @__PURE__ */ w.createElement(Wa, {
    superOffset: function(b) {
      return n.addYear(a, b * 100);
    },
    onChange: o,
    getStart: f,
    getEnd: d
  }, O), /* @__PURE__ */ w.createElement(so, we({}, e, {
    disabledDate: S,
    colNum: 3,
    rowNum: 4,
    baseDate: m,
    getCellDate: p,
    getCellText: y,
    getCellClassName: x
  }))));
}
function NY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = e.onModeChange, c = "".concat(t, "-month-panel"), s = Fa(e, "month"), u = X(s, 1), f = u[0], d = n.setMonth(a, 0), h = r.shortMonths || (n.locale.getShortMonths ? n.locale.getShortMonths(r.locale) : []), v = function(O, g) {
    return n.addMonth(O, g);
  }, m = function(O) {
    var g = n.getMonth(O);
    return r.monthFormat ? yt(O, {
      locale: r,
      format: r.monthFormat,
      generateConfig: n
    }) : h[g];
  }, p = function() {
    return ve({}, "".concat(t, "-cell-in-view"), !0);
  }, y = i ? function(S, O) {
    var g = n.setDate(S, 1), b = n.setMonth(g, n.getMonth(g) + 1), $ = n.addDate(b, -1);
    return i(g, O) && i($, O);
  } : null, x = /* @__PURE__ */ w.createElement("button", {
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
  return /* @__PURE__ */ w.createElement(Dn.Provider, {
    value: f
  }, /* @__PURE__ */ w.createElement("div", {
    className: c
  }, /* @__PURE__ */ w.createElement(Wa, {
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
  }, x), /* @__PURE__ */ w.createElement(so, we({}, e, {
    disabledDate: y,
    titleFormat: r.fieldMonthFormat,
    colNum: 3,
    rowNum: 4,
    baseDate: d,
    getCellDate: v,
    getCellText: m,
    getCellClassName: p
  }))));
}
function RY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.onPickerValueChange, o = e.onModeChange, l = "".concat(t, "-quarter-panel"), c = Fa(e, "quarter"), s = X(c, 1), u = s[0], f = n.setMonth(a, 0), d = function(y, x) {
    return n.addMonth(y, x * 3);
  }, h = function(y) {
    return yt(y, {
      locale: r,
      format: r.cellQuarterFormat,
      generateConfig: n
    });
  }, v = function() {
    return ve({}, "".concat(t, "-cell-in-view"), !0);
  }, m = /* @__PURE__ */ w.createElement("button", {
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
  return /* @__PURE__ */ w.createElement(Dn.Provider, {
    value: u
  }, /* @__PURE__ */ w.createElement("div", {
    className: l
  }, /* @__PURE__ */ w.createElement(Wa, {
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
  }, m), /* @__PURE__ */ w.createElement(so, we({}, e, {
    titleFormat: r.fieldQuarterFormat,
    colNum: 4,
    rowNum: 1,
    baseDate: f,
    getCellDate: d,
    getCellText: h,
    getCellClassName: v
  }))));
}
function kY(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.locale, a = e.value, i = e.hoverValue, o = e.hoverRangeValue, l = n.locale, c = "".concat(t, "-week-panel-row"), s = function(f) {
    var d = {};
    if (o) {
      var h = X(o, 2), v = h[0], m = h[1], p = ci(r, l, v, f), y = ci(r, l, m, f);
      d["".concat(c, "-range-start")] = p, d["".concat(c, "-range-end")] = y, d["".concat(c, "-range-hover")] = !p && !y && qc(r, v, m, f);
    }
    return i && (d["".concat(c, "-hover")] = i.some(function(x) {
      return ci(r, l, f, x);
    })), Ie(
      c,
      ve({}, "".concat(c, "-selected"), !o && ci(r, l, a, f)),
      // Patch for hover range
      d
    );
  };
  return /* @__PURE__ */ w.createElement(Kc, we({}, e, {
    mode: "week",
    panelName: "week",
    rowClassName: s
  }));
}
function BY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = e.onModeChange, c = "".concat(t, "-year-panel"), s = Fa(e, "year"), u = X(s, 1), f = u[0], d = function($) {
    var C = Math.floor(n.getYear(a) / 10) * 10;
    return n.setYear($, C);
  }, h = function($) {
    var C = d($);
    return n.addYear(C, 9);
  }, v = d(a), m = h(a), p = n.addYear(v, -1), y = function($, C) {
    return n.addYear($, C);
  }, x = function($) {
    return yt($, {
      locale: r,
      format: r.cellYearFormat,
      generateConfig: n
    });
  }, S = function($) {
    return ve({}, "".concat(t, "-cell-in-view"), En(n, $, v) || En(n, $, m) || qc(n, v, m, $));
  }, O = i ? function(b, $) {
    var C = n.setMonth(b, 0), _ = n.setDate(C, 1), M = n.addYear(_, 1), P = n.addDate(M, -1);
    return i(_, $) && i(P, $);
  } : null, g = /* @__PURE__ */ w.createElement("button", {
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
  return /* @__PURE__ */ w.createElement(Dn.Provider, {
    value: f
  }, /* @__PURE__ */ w.createElement("div", {
    className: c
  }, /* @__PURE__ */ w.createElement(Wa, {
    superOffset: function($) {
      return n.addYear(a, $ * 10);
    },
    onChange: o,
    getStart: d,
    getEnd: h
  }, g), /* @__PURE__ */ w.createElement(so, we({}, e, {
    disabledDate: O,
    titleFormat: r.fieldYearFormat,
    colNum: 3,
    rowNum: 4,
    baseDate: p,
    getCellDate: y,
    getCellText: x,
    getCellClassName: S
  }))));
}
var LY = {
  date: Kc,
  datetime: jY,
  week: kY,
  month: NY,
  quarter: RY,
  year: BY,
  decade: DY,
  time: Vw
};
function HY(e, t) {
  var r, n = e.locale, a = e.generateConfig, i = e.direction, o = e.prefixCls, l = e.tabIndex, c = l === void 0 ? 0 : l, s = e.multiple, u = e.defaultValue, f = e.value, d = e.onChange, h = e.onSelect, v = e.defaultPickerValue, m = e.pickerValue, p = e.onPickerValueChange, y = e.mode, x = e.onPanelChange, S = e.picker, O = S === void 0 ? "date" : S, g = e.showTime, b = e.hoverValue, $ = e.hoverRangeValue, C = e.cellRender, _ = e.dateRender, M = e.monthCellRender, P = e.components, I = P === void 0 ? {} : P, N = e.hideHeader, j = ((r = w.useContext(pr)) === null || r === void 0 ? void 0 : r.prefixCls) || o || "rc-picker", E = w.useRef();
  w.useImperativeHandle(t, function() {
    return {
      nativeElement: E.current
    };
  });
  var A = Pw(e), D = X(A, 4), R = D[0], k = D[1], L = D[2], H = D[3], B = Ow(n, k), W = O === "date" && g ? "datetime" : O, z = w.useMemo(function() {
    return _w(W, L, H, R, B);
  }, [W, L, H, R, B]), G = a.getNow(), Q = fr(O, {
    value: y,
    postState: function(pe) {
      return pe || "date";
    }
  }), ne = X(Q, 2), te = ne[0], V = ne[1], K = te === "date" && z ? "datetime" : te, q = Ww(a, n, W), F = fr(u, {
    value: f
  }), J = X(F, 2), Z = J[0], le = J[1], re = w.useMemo(function() {
    var oe = jn(Z).filter(function(pe) {
      return pe;
    });
    return s ? oe : oe.slice(0, 1);
  }, [Z, s]), ae = st(function(oe) {
    le(oe), d && (oe === null || re.length !== oe.length || re.some(function(pe, Pe) {
      return !Tt(a, n, pe, oe[Pe], W);
    })) && (d == null || d(s ? oe : oe[0]));
  }), de = st(function(oe) {
    if (h == null || h(oe), te === O) {
      var pe = s ? q(re, oe) : [oe];
      ae(pe);
    }
  }), $e = fr(v || re[0] || G, {
    value: m
  }), ke = X($e, 2), Ae = ke[0], De = ke[1];
  w.useEffect(function() {
    re[0] && !m && De(re[0]);
  }, [re[0]]);
  var Ge = function(pe, Pe) {
    x == null || x(pe || m, Pe || te);
  }, Qe = function(pe) {
    var Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    De(pe), p == null || p(pe), Pe && Ge(pe);
  }, Ke = function(pe, Pe) {
    V(pe), Pe && Qe(Pe), Ge(Pe, pe);
  }, Ue = function(pe) {
    if (de(pe), Qe(pe), te !== O) {
      var Pe = ["decade", "year"], ie = [].concat(Pe, ["month"]), fe = {
        quarter: [].concat(Pe, ["quarter"]),
        week: [].concat(Vt(ie), ["week"]),
        date: [].concat(Vt(ie), ["date"])
      }, Ye = fe[O] || ie, nt = Ye.indexOf(te), Xe = Ye[nt + 1];
      Xe && Ke(Xe, pe);
    }
  }, Ve = w.useMemo(function() {
    var oe, pe;
    if (Array.isArray($)) {
      var Pe = X($, 2);
      oe = Pe[0], pe = Pe[1];
    } else
      oe = $;
    return !oe && !pe ? null : (oe = oe || pe, pe = pe || oe, a.isAfter(oe, pe) ? [pe, oe] : [oe, pe]);
  }, [$, a]), _t = lh(C, _, M), He = I[K] || LY[K] || Kc, ot = w.useContext(kr), Se = w.useMemo(function() {
    return ue(ue({}, ot), {}, {
      hideHeader: N
    });
  }, [ot, N]);
  Oe.env.NODE_ENV !== "production" && dr(!re || re.every(function(oe) {
    return a.isValidate(oe);
  }), "Invalidate date pass to `value` or `defaultValue`.");
  var Me = "".concat(j, "-panel"), he = Yc(e, [
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
  return /* @__PURE__ */ w.createElement(kr.Provider, {
    value: Se
  }, /* @__PURE__ */ w.createElement("div", {
    ref: E,
    tabIndex: c,
    className: Ie(Me, ve({}, "".concat(Me, "-rtl"), i === "rtl"))
  }, /* @__PURE__ */ w.createElement(He, we({}, he, {
    // Time
    showTime: z,
    prefixCls: j,
    locale: B,
    generateConfig: a,
    onModeChange: Ke,
    pickerValue: Ae,
    onPickerValueChange: function(pe) {
      Qe(pe, !0);
    },
    value: re[0],
    onSelect: Ue,
    values: re,
    cellRender: _t,
    hoverRangeValue: Ve,
    hoverValue: b
  }))));
}
var Vo = /* @__PURE__ */ w.memo(/* @__PURE__ */ w.forwardRef(HY));
Oe.env.NODE_ENV !== "production" && (Vo.displayName = "PanelPicker");
function FY(e) {
  var t = e.picker, r = e.multiplePanel, n = e.pickerValue, a = e.onPickerValueChange, i = e.needConfirm, o = e.onSubmit, l = e.range, c = e.hoverValue, s = w.useContext(pr), u = s.prefixCls, f = s.generateConfig, d = w.useCallback(function(x, S) {
    return si(f, t, x, S);
  }, [f, t]), h = w.useMemo(function() {
    return d(n, 1);
  }, [n, d]), v = function(S) {
    a(d(S, -1));
  }, m = {
    onCellDblClick: function() {
      i && o();
    }
  }, p = t === "time", y = ue(ue({}, e), {}, {
    hoverValue: null,
    hoverRangeValue: null,
    hideHeader: p
  });
  return l ? y.hoverRangeValue = c : y.hoverValue = c, r ? /* @__PURE__ */ w.createElement("div", {
    className: "".concat(u, "-panels")
  }, /* @__PURE__ */ w.createElement(kr.Provider, {
    value: ue(ue({}, m), {}, {
      hideNext: !0
    })
  }, /* @__PURE__ */ w.createElement(Vo, y)), /* @__PURE__ */ w.createElement(kr.Provider, {
    value: ue(ue({}, m), {}, {
      hidePrev: !0
    })
  }, /* @__PURE__ */ w.createElement(Vo, we({}, y, {
    pickerValue: h,
    onPickerValueChange: v
  })))) : /* @__PURE__ */ w.createElement(kr.Provider, {
    value: ue({}, m)
  }, /* @__PURE__ */ w.createElement(Vo, y));
}
function Ag(e) {
  return typeof e == "function" ? e() : e;
}
function WY(e) {
  var t = e.prefixCls, r = e.presets, n = e.onClick, a = e.onHover;
  return r.length ? /* @__PURE__ */ w.createElement("div", {
    className: "".concat(t, "-presets")
  }, /* @__PURE__ */ w.createElement("ul", null, r.map(function(i, o) {
    var l = i.label, c = i.value;
    return /* @__PURE__ */ w.createElement("li", {
      key: o,
      onClick: function() {
        n(Ag(c));
      },
      onMouseEnter: function() {
        a(Ag(c));
      },
      onMouseLeave: function() {
        a(null);
      }
    }, l);
  }))) : null;
}
function zw(e) {
  var t = e.panelRender, r = e.internalMode, n = e.picker, a = e.showNow, i = e.range, o = e.multiple, l = e.activeOffset, c = l === void 0 ? 0 : l, s = e.placement, u = e.presets, f = e.onPresetHover, d = e.onPresetSubmit, h = e.onFocus, v = e.onBlur, m = e.onPanelMouseDown, p = e.direction, y = e.value, x = e.onSelect, S = e.isInvalid, O = e.defaultOpenValue, g = e.onOk, b = e.onSubmit, $ = w.useContext(pr), C = $.prefixCls, _ = "".concat(C, "-panel"), M = p === "rtl", P = w.useRef(null), I = w.useRef(null), N = w.useState(0), j = X(N, 2), E = j[0], A = j[1], D = w.useState(0), R = X(D, 2), k = R[0], L = R[1], H = function(ae) {
    ae.offsetWidth && A(ae.offsetWidth);
  };
  w.useEffect(function() {
    if (i) {
      var re, ae = ((re = P.current) === null || re === void 0 ? void 0 : re.offsetWidth) || 0, de = E - ae;
      c <= de ? L(0) : L(c + ae - E);
    }
  }, [E, c, i]);
  function B(re) {
    return re.filter(function(ae) {
      return ae;
    });
  }
  var W = w.useMemo(function() {
    return B(jn(y));
  }, [y]), z = n === "time" && !W.length, G = w.useMemo(function() {
    return z ? B([O]) : W;
  }, [z, W, O]), Q = z ? O : W, ne = w.useMemo(function() {
    return G.length ? G.some(function(re) {
      return S(re);
    }) : !0;
  }, [G, S]), te = function() {
    z && x(O), g(), b();
  }, V = /* @__PURE__ */ w.createElement("div", {
    className: "".concat(C, "-panel-layout")
  }, /* @__PURE__ */ w.createElement(WY, {
    prefixCls: C,
    presets: u,
    onClick: d,
    onHover: f
  }), /* @__PURE__ */ w.createElement("div", null, /* @__PURE__ */ w.createElement(FY, we({}, e, {
    value: Q
  })), /* @__PURE__ */ w.createElement(EY, we({}, e, {
    showNow: o ? !1 : a,
    invalid: ne,
    onSubmit: te
  }))));
  t && (V = t(V));
  var K = "".concat(_, "-container"), q = "marginLeft", F = "marginRight", J = /* @__PURE__ */ w.createElement("div", {
    onMouseDown: m,
    tabIndex: -1,
    className: Ie(
      K,
      // Used for Today Button style, safe to remove if no need
      "".concat(C, "-").concat(r, "-panel-container")
    ),
    style: ve(ve({}, M ? F : q, k), M ? q : F, "auto"),
    onFocus: h,
    onBlur: v
  }, V);
  if (i) {
    var Z = Uc(s, M), le = mw(Z, M);
    J = /* @__PURE__ */ w.createElement("div", {
      onMouseDown: m,
      ref: I,
      className: Ie("".concat(C, "-range-wrapper"), "".concat(C, "-").concat(n, "-range-wrapper"))
    }, /* @__PURE__ */ w.createElement("div", {
      ref: P,
      className: "".concat(C, "-range-arrow"),
      style: ve({}, le, c)
    }), /* @__PURE__ */ w.createElement(ec, {
      onResize: H
    }, J));
  }
  return J;
}
function Uw(e, t) {
  var r = e.format, n = e.maskFormat, a = e.generateConfig, i = e.locale, o = e.preserveInvalidOnBlur, l = e.inputReadOnly, c = e.required, s = e["aria-required"], u = e.onSubmit, f = e.onFocus, d = e.onBlur, h = e.onInputChange, v = e.onInvalid, m = e.open, p = e.onOpenChange, y = e.onKeyDown, x = e.onChange, S = e.activeHelp, O = e.name, g = e.autoComplete, b = e.id, $ = e.value, C = e.invalid, _ = e.placeholder, M = e.disabled, P = e.activeIndex, I = e.allHelp, N = e.picker, j = function(B, W) {
    var z = a.locale.parse(i.locale, B, [W]);
    return z && a.isValidate(z) ? z : null;
  }, E = r[0], A = w.useCallback(function(H) {
    return yt(H, {
      locale: i,
      format: E,
      generateConfig: a
    });
  }, [i, a, E]), D = w.useMemo(function() {
    return $.map(A);
  }, [$, A]), R = w.useMemo(function() {
    var H = N === "time" ? 8 : 10, B = typeof E == "function" ? E(a.getNow()).length : E.length;
    return Math.max(H, B) + 2;
  }, [E, N, a]), k = function(B) {
    for (var W = 0; W < r.length; W += 1) {
      var z = r[W];
      if (typeof z == "string") {
        var G = j(B, z);
        if (G)
          return G;
      }
    }
    return !1;
  }, L = function(B) {
    function W(Q) {
      return B !== void 0 ? Q[B] : Q;
    }
    var z = Xd(e, {
      aria: !0,
      data: !0
    }), G = ue(ue({}, z), {}, {
      // ============== Shared ==============
      format: n,
      validateFormat: function(ne) {
        return !!k(ne);
      },
      preserveInvalidOnBlur: o,
      readOnly: l,
      required: c,
      "aria-required": s,
      name: O,
      autoComplete: g,
      size: R,
      // ============= By Index =============
      id: W(b),
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
        h();
        var te = k(ne);
        if (te) {
          v(!1, B), x(te, B);
          return;
        }
        v(!!ne, B);
      },
      onHelp: function() {
        p(!0, {
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
              p(!1, {
                index: B
              });
              break;
            case "Enter":
              m || p(!0);
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
var VY = ["onMouseEnter", "onMouseLeave"];
function Yw(e) {
  return w.useMemo(function() {
    return Yc(e, VY);
  }, [e]);
}
var zY = ["icon", "type"], UY = ["onClear"];
function Xc(e) {
  var t = e.icon, r = e.type, n = Kt(e, zY), a = w.useContext(pr), i = a.prefixCls;
  return t ? /* @__PURE__ */ w.createElement("span", we({
    className: "".concat(i, "-").concat(r)
  }, n), t) : null;
}
function Hf(e) {
  var t = e.onClear, r = Kt(e, UY);
  return /* @__PURE__ */ w.createElement(Xc, we({}, r, {
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
var au = ["YYYY", "MM", "DD", "HH", "mm", "ss", "SSS"], Tg = "顧", YY = /* @__PURE__ */ function() {
  function e(t) {
    zf(this, e), ve(this, "format", void 0), ve(this, "maskFormat", void 0), ve(this, "cells", void 0), ve(this, "maskCells", void 0), this.format = t;
    var r = au.map(function(l) {
      return "(".concat(l, ")");
    }).join("|"), n = new RegExp(r, "g");
    this.maskFormat = t.replace(
      n,
      // Use Chinese character to avoid user use it in format
      function(l) {
        return Tg.repeat(l.length);
      }
    );
    var a = new RegExp("(".concat(au.join("|"), ")")), i = (t.split(a) || []).filter(function(l) {
      return l;
    }), o = 0;
    this.cells = i.map(function(l) {
      var c = au.includes(l), s = o, u = o + l.length;
      return o = u, {
        text: l,
        mask: c,
        start: s,
        end: u
      };
    }), this.maskCells = this.cells.filter(function(l) {
      return l.mask;
    });
  }
  return Uf(e, [{
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
        if (!i || a !== Tg && a !== i)
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
        var o = this.maskCells[i], l = o.start, c = o.end;
        if (r >= l && r <= c)
          return i;
        var s = Math.min(Math.abs(r - l), Math.abs(r - c));
        s < n && (n = s, a = i);
      }
      return a;
    }
  }]), e;
}();
function qY(e) {
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
var GY = ["active", "showActiveCls", "suffixIcon", "format", "validateFormat", "onChange", "onInput", "helped", "onHelp", "onSubmit", "onKeyDown", "preserveInvalidOnBlur", "invalid", "clearIcon"], Ql = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var r = e.active, n = e.showActiveCls, a = n === void 0 ? !0 : n, i = e.suffixIcon, o = e.format, l = e.validateFormat, c = e.onChange;
  e.onInput;
  var s = e.helped, u = e.onHelp, f = e.onSubmit, d = e.onKeyDown, h = e.preserveInvalidOnBlur, v = h === void 0 ? !1 : h, m = e.invalid, p = e.clearIcon, y = Kt(e, GY), x = e.value, S = e.onFocus, O = e.onBlur, g = e.onMouseUp, b = w.useContext(pr), $ = b.prefixCls, C = b.input, _ = C === void 0 ? "input" : C, M = "".concat($, "-input"), P = w.useState(!1), I = X(P, 2), N = I[0], j = I[1], E = w.useState(x), A = X(E, 2), D = A[0], R = A[1], k = w.useState(""), L = X(k, 2), H = L[0], B = L[1], W = w.useState(null), z = X(W, 2), G = z[0], Q = z[1], ne = w.useState(null), te = X(ne, 2), V = te[0], K = te[1], q = D || "";
  w.useEffect(function() {
    R(x);
  }, [x]);
  var F = w.useRef(), J = w.useRef();
  w.useImperativeHandle(t, function() {
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
  var Z = w.useMemo(function() {
    return new YY(o || "");
  }, [o]), le = w.useMemo(function() {
    return s ? [0, 0] : Z.getSelection(G);
  }, [Z, G, s]), re = X(le, 2), ae = re[0], de = re[1], $e = function(oe) {
    oe && oe !== o && oe !== x && u();
  }, ke = st(function(he) {
    l(he) && c(he), R(he), $e(he);
  }), Ae = function(oe) {
    if (!o) {
      var pe = oe.target.value;
      $e(pe), R(pe), c(pe);
    }
  }, De = function(oe) {
    var pe = oe.clipboardData.getData("text");
    l(pe) && ke(pe);
  }, Ge = w.useRef(!1), Qe = function() {
    Ge.current = !0;
  }, Ke = function(oe) {
    var pe = oe.target, Pe = pe.selectionStart, ie = Z.getMaskCellIndex(Pe);
    Q(ie), K({}), g == null || g(oe), Ge.current = !1;
  }, Ue = function(oe) {
    j(!0), Q(0), B(""), S(oe);
  }, Ve = function(oe) {
    O(oe);
  }, _t = function(oe) {
    j(!1), Ve(oe);
  };
  uh(r, function() {
    !r && !v && R(x);
  });
  var He = function(oe) {
    oe.key === "Enter" && l(q) && f(), d == null || d(oe);
  }, ot = function(oe) {
    He(oe);
    var pe = oe.key, Pe = null, ie = null, fe = de - ae, Ye = o.slice(ae, de), nt = function(Ct) {
      Q(function(jt) {
        var xt = jt + Ct;
        return xt = Math.max(xt, 0), xt = Math.min(xt, Z.size() - 1), xt;
      });
    }, Xe = function(Ct) {
      var jt = qY(Ye), xt = X(jt, 3), be = xt[0], Be = xt[1], Je = xt[2], ht = q.slice(ae, de), Ut = Number(ht);
      if (isNaN(Ut))
        return String(Je || (Ct > 0 ? be : Be));
      var Nn = Ut + Ct, sn = Be - be + 1;
      return String(be + (sn + Nn - be) % sn);
    };
    switch (pe) {
      case "Backspace":
      case "Delete":
        Pe = "", ie = Ye;
        break;
      case "ArrowLeft":
        Pe = "", nt(-1);
        break;
      case "ArrowRight":
        Pe = "", nt(1);
        break;
      case "ArrowUp":
        Pe = "", ie = Xe(1);
        break;
      case "ArrowDown":
        Pe = "", ie = Xe(-1);
        break;
      default:
        isNaN(Number(pe)) || (Pe = H + pe, ie = Pe);
        break;
    }
    if (Pe !== null && (B(Pe), Pe.length >= fe && (nt(1), B(""))), ie !== null) {
      var Et = (
        // before
        q.slice(0, ae) + // replace
        oh(ie, fe) + // after
        q.slice(de)
      );
      ke(Et.slice(0, o.length));
    }
    K({});
  }, Se = w.useRef();
  Br(function() {
    if (!(!N || !o || Ge.current)) {
      if (!Z.match(q)) {
        ke(o);
        return;
      }
      return J.current.setSelectionRange(ae, de), Se.current = Wt(function() {
        J.current.setSelectionRange(ae, de);
      }), function() {
        Wt.cancel(Se.current);
      };
    }
  }, [Z, o, N, q, G, ae, de, V, ke]);
  var Me = o ? {
    onFocus: Ue,
    onBlur: _t,
    onKeyDown: ot,
    onMouseDown: Qe,
    onMouseUp: Ke,
    onPaste: De
  } : {};
  return /* @__PURE__ */ w.createElement("div", {
    ref: F,
    className: Ie(M, ve(ve({}, "".concat(M, "-active"), r && a), "".concat(M, "-placeholder"), s))
  }, /* @__PURE__ */ w.createElement(_, we({
    ref: J,
    "aria-invalid": m,
    autoComplete: "off"
  }, y, {
    onKeyDown: He,
    onBlur: Ve
    // Replace with format
  }, Me, {
    // Value
    value: q,
    onChange: Ae
  })), /* @__PURE__ */ w.createElement(Xc, {
    type: "suffix",
    icon: i
  }), p);
});
Oe.env.NODE_ENV !== "production" && (Ql.displayName = "Input");
var KY = ["id", "clearIcon", "suffixIcon", "separator", "activeIndex", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "value", "onChange", "onSubmit", "onInputChange", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onActiveOffset", "placement", "onMouseDown", "required", "aria-required", "autoFocus"], XY = ["index"];
function ZY(e, t) {
  var r = e.id, n = e.clearIcon, a = e.suffixIcon, i = e.separator, o = i === void 0 ? "~" : i, l = e.activeIndex;
  e.activeHelp, e.allHelp;
  var c = e.focused;
  e.onFocus, e.onBlur, e.onKeyDown, e.locale, e.generateConfig;
  var s = e.placeholder, u = e.className, f = e.style, d = e.onClick, h = e.onClear, v = e.value;
  e.onChange, e.onSubmit, e.onInputChange, e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid;
  var m = e.disabled, p = e.invalid;
  e.inputReadOnly;
  var y = e.direction;
  e.onOpenChange;
  var x = e.onActiveOffset, S = e.placement, O = e.onMouseDown;
  e.required, e["aria-required"];
  var g = e.autoFocus, b = Kt(e, KY), $ = y === "rtl", C = w.useContext(pr), _ = C.prefixCls, M = w.useMemo(function() {
    if (typeof r == "string")
      return [r];
    var q = r || {};
    return [q.start, q.end];
  }, [r]), P = w.useRef(), I = w.useRef(), N = w.useRef(), j = function(F) {
    var J;
    return (J = [I, N][F]) === null || J === void 0 ? void 0 : J.current;
  };
  w.useImperativeHandle(t, function() {
    return {
      nativeElement: P.current,
      focus: function(F) {
        if (An(F) === "object") {
          var J, Z = F || {}, le = Z.index, re = le === void 0 ? 0 : le, ae = Kt(Z, XY);
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
  var E = Yw(b), A = w.useMemo(function() {
    return Array.isArray(s) ? s : [s, s];
  }, [s]), D = Uw(ue(ue({}, e), {}, {
    id: M,
    placeholder: A
  })), R = X(D, 1), k = R[0], L = Uc(S, $), H = mw(L, $), B = L == null ? void 0 : L.toLowerCase().endsWith("right"), W = w.useState({
    position: "absolute",
    width: 0
  }), z = X(W, 2), G = z[0], Q = z[1], ne = st(function() {
    var q = j(l);
    if (q) {
      var F = q.nativeElement, J = F.offsetWidth, Z = F.offsetLeft, le = F.offsetParent, re = (le == null ? void 0 : le.offsetWidth) || 0, ae = B ? re - J - Z : Z;
      Q(function(de) {
        return ue(ue({}, de), {}, ve({
          width: J
        }, H, ae));
      }), x(ae);
    }
  });
  w.useEffect(function() {
    ne();
  }, [l]);
  var te = n && (v[0] && !m[0] || v[1] && !m[1]), V = g && !m[0], K = g && !V && !m[1];
  return /* @__PURE__ */ w.createElement(ec, {
    onResize: ne
  }, /* @__PURE__ */ w.createElement("div", we({}, E, {
    className: Ie(_, "".concat(_, "-range"), ve(ve(ve(ve({}, "".concat(_, "-focused"), c), "".concat(_, "-disabled"), m.every(function(q) {
      return q;
    })), "".concat(_, "-invalid"), p.some(function(q) {
      return q;
    })), "".concat(_, "-rtl"), $), u),
    style: f,
    ref: P,
    onClick: d,
    onMouseDown: function(F) {
      var J = F.target;
      J !== I.current.inputElement && J !== N.current.inputElement && F.preventDefault(), O == null || O(F);
    }
  }), /* @__PURE__ */ w.createElement(Ql, we({
    ref: I
  }, k(0), {
    autoFocus: V,
    "date-range": "start"
  })), /* @__PURE__ */ w.createElement("div", {
    className: "".concat(_, "-range-separator")
  }, o), /* @__PURE__ */ w.createElement(Ql, we({
    ref: N
  }, k(1), {
    autoFocus: K,
    "date-range": "end"
  })), /* @__PURE__ */ w.createElement("div", {
    className: "".concat(_, "-active-bar"),
    style: G
  }), /* @__PURE__ */ w.createElement(Xc, {
    type: "suffix",
    icon: a
  }), te && /* @__PURE__ */ w.createElement(Hf, {
    icon: n,
    onClear: h
  })));
}
var qw = /* @__PURE__ */ w.forwardRef(ZY);
Oe.env.NODE_ENV !== "production" && (qw.displayName = "RangeSelector");
function Mg(e, t) {
  var r = e ?? t;
  return Array.isArray(r) ? r : [r, r];
}
function Fo(e) {
  return e === 1 ? "end" : "start";
}
function QY(e, t) {
  var r = Tw(e, function() {
    var Ne = e.disabled, ge = e.allowEmpty, Re = Mg(Ne, !1), ut = Mg(ge, !1);
    return {
      disabled: Re,
      allowEmpty: ut
    };
  }), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], c = n[4], s = n[5], u = a.prefixCls, f = a.styles, d = a.classNames, h = a.placement, v = a.defaultValue, m = a.value, p = a.needConfirm, y = a.onKeyDown, x = a.disabled, S = a.allowEmpty, O = a.disabledDate, g = a.minDate, b = a.maxDate, $ = a.defaultOpen, C = a.open, _ = a.onOpenChange, M = a.locale, P = a.generateConfig, I = a.picker, N = a.showNow, j = a.showToday, E = a.showTime, A = a.mode, D = a.onPanelChange, R = a.onCalendarChange, k = a.onOk, L = a.defaultPickerValue, H = a.pickerValue, B = a.onPickerValueChange, W = a.inputReadOnly, z = a.suffixIcon, G = a.onFocus, Q = a.onBlur, ne = a.presets, te = a.ranges, V = a.components, K = a.cellRender, q = a.dateRender, F = a.monthCellRender, J = a.onClick, Z = Iw(t), le = Mw(C, $, x, _), re = X(le, 2), ae = re[0], de = re[1], $e = function(ge, Re) {
    (x.some(function(ut) {
      return !ut;
    }) || !ge) && de(ge, Re);
  }, ke = Lw(P, M, l, !0, !1, v, m, R, k), Ae = X(ke, 5), De = Ae[0], Ge = Ae[1], Qe = Ae[2], Ke = Ae[3], Ue = Ae[4], Ve = Qe(), _t = Dw(x, S, ae), He = X(_t, 7), ot = He[0], Se = He[1], Me = He[2], he = He[3], oe = He[4], pe = He[5], Pe = He[6], ie = function(ge, Re) {
    Se(!0), G == null || G(ge, {
      range: Fo(Re ?? he)
    });
  }, fe = function(ge, Re) {
    Se(!1), Q == null || Q(ge, {
      range: Fo(Re ?? he)
    });
  }, Ye = w.useMemo(function() {
    if (!E)
      return null;
    var Ne = E.disabledTime, ge = Ne ? function(Re) {
      var ut = Fo(he), ir = bw(Ve, Pe, he);
      return Ne(Re, ut, {
        from: ir
      });
    } : void 0;
    return ue(ue({}, E), {}, {
      disabledTime: ge
    });
  }, [E, he, Ve, Pe]), nt = fr([I, I], {
    value: A
  }), Xe = X(nt, 2), Et = Xe[0], It = Xe[1], Ct = Et[he] || I, jt = Ct === "date" && Ye ? "datetime" : Ct, xt = jt === I && jt !== "time", be = Fw(I, Ct, N, j, !0), Be = Hw(a, De, Ge, Qe, Ke, x, l, ot, ae, s), Je = X(Be, 2), ht = Je[0], Ut = Je[1], Nn = $Y(Ve, x, Pe, P, M, O), sn = ww(Ve, s, S), uo = X(sn, 2), Zc = uo[0], Qc = uo[1], Jc = Nw(P, M, Ve, Et, ae, he, i, xt, L, H, Ye == null ? void 0 : Ye.defaultOpenValue, B, g, b), za = X(Jc, 2), es = za[0], ts = za[1], Ua = st(function(Ne, ge, Re) {
    var ut = yi(Et, he, ge);
    if ((ut[0] !== Et[0] || ut[1] !== Et[1]) && It(ut), D && Re !== !1) {
      var ir = Vt(Ve);
      Ne && (ir[he] = Ne), D(ir, ut);
    }
  }), vr = function(ge, Re) {
    return (
      // Trigger change only when date changed
      yi(Ve, Re, ge)
    );
  }, mr = function(ge, Re) {
    var ut = Ve;
    ge && (ut = vr(ge, he));
    var ir = pe(ut);
    Ke(ut), ht(he, ir === null), ir === null ? $e(!1, {
      force: !0
    }) : Re || Z.current.focus({
      index: ir
    });
  }, rs = function(ge) {
    var Re, ut = ge.target.getRootNode();
    if (!Z.current.nativeElement.contains((Re = ut.activeElement) !== null && Re !== void 0 ? Re : document.activeElement)) {
      var ir = x.findIndex(function(y1) {
        return !y1;
      });
      ir >= 0 && Z.current.focus({
        index: ir
      });
    }
    $e(!0), J == null || J(ge);
  }, ns = function() {
    Ut(null), $e(!1, {
      force: !0
    });
  }, fo = w.useState(null), ho = X(fo, 2), po = ho[0], vo = ho[1], mo = w.useState(null), gr = X(mo, 2), qr = gr[0], Ya = gr[1], go = w.useMemo(function() {
    return qr || Ve;
  }, [Ve, qr]);
  w.useEffect(function() {
    ae || Ya(null);
  }, [ae]);
  var as = w.useState(0), yo = X(as, 2), bo = yo[0], is = yo[1], os = jw(ne, te), ls = function(ge) {
    Ya(ge), vo("preset");
  }, cs = function(ge) {
    var Re = Ut(ge);
    Re && $e(!1, {
      force: !0
    });
  }, ss = function(ge) {
    mr(ge);
  }, us = function(ge) {
    Ya(ge ? vr(ge, he) : null), vo("cell");
  }, fs = function(ge) {
    $e(!0), ie(ge);
  }, ds = function() {
    Me("panel");
  }, hs = function(ge) {
    var Re = yi(Ve, he, ge);
    Ke(Re), !p && !o && i === jt && mr(ge);
  }, ps = function() {
    $e(!1);
  }, vs = lh(K, q, F, Fo(he)), ms = Ve[he] || null, gs = st(function(Ne) {
    return s(Ne, {
      activeIndex: he
    });
  }), ys = w.useMemo(function() {
    var Ne = Xd(a, !1), ge = Kf(a, [].concat(Vt(Object.keys(Ne)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange", "disabledTime"]));
    return ge;
  }, [a]), _e = /* @__PURE__ */ w.createElement(zw, we({}, ys, {
    showNow: be,
    showTime: Ye,
    range: !0,
    multiplePanel: xt,
    activeOffset: bo,
    placement: h,
    disabledDate: Nn,
    onFocus: fs,
    onBlur: fe,
    onPanelMouseDown: ds,
    picker: I,
    mode: Ct,
    internalMode: jt,
    onPanelChange: Ua,
    format: c,
    value: ms,
    isInvalid: gs,
    onChange: null,
    onSelect: hs,
    pickerValue: es,
    defaultOpenValue: jn(E == null ? void 0 : E.defaultOpenValue)[he],
    onPickerValueChange: ts,
    hoverValue: go,
    onHover: us,
    needConfirm: p,
    onSubmit: mr,
    onOk: Ue,
    presets: os,
    onPresetHover: ls,
    onPresetSubmit: cs,
    onNow: ss,
    cellRender: vs
  })), xe = function(ge, Re) {
    var ut = vr(ge, Re);
    Ke(ut);
  }, Bt = function() {
    Me("input");
  }, yr = function(ge, Re) {
    Me("input"), $e(!0, {
      inherit: !0
    }), he !== Re && ae && !p && o && mr(null, !0), oe(Re), ie(ge, Re);
  }, xo = function(ge, Re) {
    if ($e(!1), !p && Me() === "input") {
      var ut = pe(Ve);
      ht(he, ut === null);
    }
    fe(ge, Re);
  }, v1 = function(ge, Re) {
    ge.key === "Tab" && mr(null, !0), y == null || y(ge, Re);
  }, m1 = w.useMemo(function() {
    return {
      prefixCls: u,
      locale: M,
      generateConfig: P,
      button: V.button,
      input: V.input
    };
  }, [u, M, P, V.button, V.input]);
  if (Br(function() {
    ae && he !== void 0 && Ua(null, I, !1);
  }, [ae, he, I]), Br(function() {
    var Ne = Me();
    !ae && Ne === "input" && ($e(!1), mr(null, !0)), !ae && o && !p && Ne === "panel" && ($e(!0), mr());
  }, [ae]), Oe.env.NODE_ENV !== "production") {
    var g1 = function(ge) {
      return (
        // Value is empty
        !(m != null && m[ge]) && // DefaultValue is empty
        !(v != null && v[ge])
      );
    };
    x.some(function(Ne, ge) {
      return Ne && g1(ge) && !S[ge];
    }) && dr(!1, "`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.");
  }
  return /* @__PURE__ */ w.createElement(pr.Provider, {
    value: m1
  }, /* @__PURE__ */ w.createElement(gw, we({}, xw(a), {
    popupElement: _e,
    popupStyle: f.popup,
    popupClassName: d.popup,
    visible: ae,
    onClose: ps,
    range: !0
  }), /* @__PURE__ */ w.createElement(
    qw,
    we({}, a, {
      // Ref
      ref: Z,
      suffixIcon: z,
      activeIndex: ot || ae ? he : null,
      activeHelp: !!qr,
      allHelp: !!qr && po === "preset",
      focused: ot,
      onFocus: yr,
      onBlur: xo,
      onKeyDown: v1,
      onSubmit: mr,
      value: go,
      maskFormat: c,
      onChange: xe,
      onInputChange: Bt,
      format: l,
      inputReadOnly: W,
      disabled: x,
      open: ae,
      onOpenChange: $e,
      onClick: rs,
      onClear: ns,
      invalid: Zc,
      onInvalid: Qc,
      onActiveOffset: is
    })
  )));
}
var Gw = /* @__PURE__ */ w.forwardRef(QY);
Oe.env.NODE_ENV !== "production" && (Gw.displayName = "RefRangePicker");
function JY(e) {
  var t = e.prefixCls, r = e.value, n = e.onRemove, a = e.removeIcon, i = a === void 0 ? "×" : a, o = e.formatDate, l = e.disabled, c = e.maxTagCount, s = e.placeholder, u = "".concat(t, "-selector"), f = "".concat(t, "-selection"), d = "".concat(f, "-overflow");
  function h(p, y) {
    return /* @__PURE__ */ w.createElement("span", {
      className: Ie("".concat(f, "-item")),
      title: typeof p == "string" ? p : null
    }, /* @__PURE__ */ w.createElement("span", {
      className: "".concat(f, "-item-content")
    }, p), !l && y && /* @__PURE__ */ w.createElement("span", {
      onMouseDown: function(S) {
        S.preventDefault();
      },
      onClick: y,
      className: "".concat(f, "-item-remove")
    }, i));
  }
  function v(p) {
    var y = o(p), x = function(O) {
      O && O.stopPropagation(), n(p);
    };
    return h(y, x);
  }
  function m(p) {
    var y = "+ ".concat(p.length, " ...");
    return h(y);
  }
  return /* @__PURE__ */ w.createElement("div", {
    className: u
  }, /* @__PURE__ */ w.createElement(co, {
    prefixCls: d,
    data: r,
    renderItem: v,
    renderRest: m,
    itemKey: function(y) {
      return o(y);
    },
    maxCount: c
  }), !r.length && /* @__PURE__ */ w.createElement("span", {
    className: "".concat(t, "-selection-placeholder")
  }, s));
}
var eq = ["id", "open", "clearIcon", "suffixIcon", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "internalPicker", "value", "onChange", "onSubmit", "onInputChange", "multiple", "maxTagCount", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onMouseDown", "required", "aria-required", "autoFocus", "removeIcon"];
function tq(e, t) {
  e.id;
  var r = e.open, n = e.clearIcon, a = e.suffixIcon;
  e.activeHelp, e.allHelp;
  var i = e.focused;
  e.onFocus, e.onBlur, e.onKeyDown;
  var o = e.locale, l = e.generateConfig, c = e.placeholder, s = e.className, u = e.style, f = e.onClick, d = e.onClear, h = e.internalPicker, v = e.value, m = e.onChange, p = e.onSubmit;
  e.onInputChange;
  var y = e.multiple, x = e.maxTagCount;
  e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid;
  var S = e.disabled, O = e.invalid;
  e.inputReadOnly;
  var g = e.direction;
  e.onOpenChange;
  var b = e.onMouseDown;
  e.required, e["aria-required"];
  var $ = e.autoFocus, C = e.removeIcon, _ = Kt(e, eq), M = g === "rtl", P = w.useContext(pr), I = P.prefixCls, N = w.useRef(), j = w.useRef();
  w.useImperativeHandle(t, function() {
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
  var E = Yw(_), A = function(G) {
    m([G]);
  }, D = function(G) {
    var Q = v.filter(function(ne) {
      return ne && !Tt(l, o, ne, G, h);
    });
    m(Q), r || p();
  }, R = Uw(ue(ue({}, e), {}, {
    onChange: A
  }), function(z) {
    var G = z.valueTexts;
    return {
      value: G[0] || "",
      active: i
    };
  }), k = X(R, 2), L = k[0], H = k[1], B = !!(n && v.length && !S), W = y ? /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(JY, {
    prefixCls: I,
    value: v,
    onRemove: D,
    formatDate: H,
    maxTagCount: x,
    disabled: S,
    removeIcon: C,
    placeholder: c
  }), /* @__PURE__ */ w.createElement("input", {
    className: "".concat(I, "-multiple-input"),
    value: v.map(H).join(","),
    ref: j,
    readOnly: !0,
    autoFocus: $
  }), /* @__PURE__ */ w.createElement(Xc, {
    type: "suffix",
    icon: a
  }), B && /* @__PURE__ */ w.createElement(Hf, {
    icon: n,
    onClear: d
  })) : /* @__PURE__ */ w.createElement(Ql, we({
    ref: j
  }, L(), {
    autoFocus: $,
    suffixIcon: a,
    clearIcon: B && /* @__PURE__ */ w.createElement(Hf, {
      icon: n,
      onClear: d
    }),
    showActiveCls: !1
  }));
  return /* @__PURE__ */ w.createElement("div", we({}, E, {
    className: Ie(I, ve(ve(ve(ve(ve({}, "".concat(I, "-multiple"), y), "".concat(I, "-focused"), i), "".concat(I, "-disabled"), S), "".concat(I, "-invalid"), O), "".concat(I, "-rtl"), M), s),
    style: u,
    ref: N,
    onClick: f,
    onMouseDown: function(G) {
      var Q, ne = G.target;
      ne !== ((Q = j.current) === null || Q === void 0 ? void 0 : Q.inputElement) && G.preventDefault(), b == null || b(G);
    }
  }), W);
}
var Kw = /* @__PURE__ */ w.forwardRef(tq);
Oe.env.NODE_ENV !== "production" && (Kw.displayName = "SingleSelector");
function rq(e, t) {
  var r = Tw(e), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], c = n[4], s = n[5], u = a, f = u.prefixCls, d = u.styles, h = u.classNames, v = u.order, m = u.defaultValue, p = u.value, y = u.needConfirm, x = u.onChange, S = u.onKeyDown, O = u.disabled, g = u.disabledDate, b = u.minDate, $ = u.maxDate, C = u.defaultOpen, _ = u.open, M = u.onOpenChange, P = u.locale, I = u.generateConfig, N = u.picker, j = u.showNow, E = u.showToday, A = u.showTime, D = u.mode, R = u.onPanelChange, k = u.onCalendarChange, L = u.onOk, H = u.multiple, B = u.defaultPickerValue, W = u.pickerValue, z = u.onPickerValueChange, G = u.inputReadOnly, Q = u.suffixIcon, ne = u.removeIcon, te = u.onFocus, V = u.onBlur, K = u.presets, q = u.components, F = u.cellRender, J = u.dateRender, Z = u.monthCellRender, le = u.onClick, re = Iw(t);
  function ae(_e) {
    return _e === null ? null : H ? _e : _e[0];
  }
  var de = Ww(I, P, i), $e = Mw(_, C, [O], M), ke = X($e, 2), Ae = ke[0], De = ke[1], Ge = function(xe, Bt, yr) {
    if (k) {
      var xo = ue({}, yr);
      delete xo.range, k(ae(xe), ae(Bt), xo);
    }
  }, Qe = function(xe) {
    L == null || L(ae(xe));
  }, Ke = Lw(I, P, l, !1, v, m, p, Ge, Qe), Ue = X(Ke, 5), Ve = Ue[0], _t = Ue[1], He = Ue[2], ot = Ue[3], Se = Ue[4], Me = He(), he = Dw([O]), oe = X(he, 4), pe = oe[0], Pe = oe[1], ie = oe[2], fe = oe[3], Ye = function(xe) {
    Pe(!0), te == null || te(xe, {});
  }, nt = function(xe) {
    Pe(!1), V == null || V(xe, {});
  }, Xe = fr(N, {
    value: D
  }), Et = X(Xe, 2), It = Et[0], Ct = Et[1], jt = It === "date" && A ? "datetime" : It, xt = Fw(N, It, j, E), be = x && function(_e, xe) {
    x(ae(_e), ae(xe));
  }, Be = Hw(
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
    pe,
    Ae,
    s
  ), Je = X(Be, 2), ht = Je[1], Ut = ww(Me, s), Nn = X(Ut, 2), sn = Nn[0], uo = Nn[1], Zc = w.useMemo(function() {
    return sn.some(function(_e) {
      return _e;
    });
  }, [sn]), Qc = function(xe, Bt) {
    if (z) {
      var yr = ue(ue({}, Bt), {}, {
        mode: Bt.mode[0]
      });
      delete yr.range, z(xe[0], yr);
    }
  }, Jc = Nw(
    I,
    P,
    Me,
    [It],
    Ae,
    fe,
    i,
    !1,
    // multiplePanel,
    B,
    W,
    jn(A == null ? void 0 : A.defaultOpenValue),
    Qc,
    b,
    $
  ), za = X(Jc, 2), es = za[0], ts = za[1], Ua = st(function(_e, xe, Bt) {
    if (Ct(xe), R && Bt !== !1) {
      var yr = _e || Me[Me.length - 1];
      R(yr, xe);
    }
  }), vr = function() {
    ht(He()), De(!1, {
      force: !0
    });
  }, mr = function(xe) {
    !O && !re.current.nativeElement.contains(document.activeElement) && re.current.focus(), De(!0), le == null || le(xe);
  }, rs = function() {
    ht(null), De(!1, {
      force: !0
    });
  }, ns = w.useState(null), fo = X(ns, 2), ho = fo[0], po = fo[1], vo = w.useState(null), mo = X(vo, 2), gr = mo[0], qr = mo[1], Ya = w.useMemo(function() {
    var _e = [gr].concat(Vt(Me)).filter(function(xe) {
      return xe;
    });
    return H ? _e : _e.slice(0, 1);
  }, [Me, gr, H]), go = w.useMemo(function() {
    return !H && gr ? [gr] : Me.filter(function(_e) {
      return _e;
    });
  }, [Me, gr, H]);
  w.useEffect(function() {
    Ae || qr(null);
  }, [Ae]);
  var as = jw(K), yo = function(xe) {
    qr(xe), po("preset");
  }, bo = function(xe) {
    var Bt = H ? de(He(), xe) : [xe], yr = ht(Bt);
    yr && !H && De(!1, {
      force: !0
    });
  }, is = function(xe) {
    bo(xe);
  }, os = function(xe) {
    qr(xe), po("cell");
  }, ls = function(xe) {
    De(!0), Ye(xe);
  }, cs = function(xe) {
    ie("panel");
    var Bt = H ? de(He(), xe) : [xe];
    ot(Bt), !y && !o && i === jt && vr();
  }, ss = function() {
    De(!1);
  }, us = lh(F, J, Z), fs = w.useMemo(function() {
    var _e = Xd(a, !1), xe = Kf(a, [].concat(Vt(Object.keys(_e)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange"]));
    return ue(ue({}, xe), {}, {
      multiple: a.multiple
    });
  }, [a]), ds = /* @__PURE__ */ w.createElement(zw, we({}, fs, {
    showNow: xt,
    showTime: A,
    disabledDate: g,
    onFocus: ls,
    onBlur: nt,
    picker: N,
    mode: It,
    internalMode: jt,
    onPanelChange: Ua,
    format: c,
    value: Me,
    isInvalid: s,
    onChange: null,
    onSelect: cs,
    pickerValue: es,
    defaultOpenValue: A == null ? void 0 : A.defaultOpenValue,
    onPickerValueChange: ts,
    hoverValue: Ya,
    onHover: os,
    needConfirm: y,
    onSubmit: vr,
    onOk: Se,
    presets: as,
    onPresetHover: yo,
    onPresetSubmit: bo,
    onNow: is,
    cellRender: us
  })), hs = function(xe) {
    ot(xe);
  }, ps = function() {
    ie("input");
  }, vs = function(xe) {
    ie("input"), De(!0, {
      inherit: !0
    }), Ye(xe);
  }, ms = function(xe) {
    De(!1), nt(xe);
  }, gs = function(xe, Bt) {
    xe.key === "Tab" && vr(), S == null || S(xe, Bt);
  }, ys = w.useMemo(function() {
    return {
      prefixCls: f,
      locale: P,
      generateConfig: I,
      button: q.button,
      input: q.input
    };
  }, [f, P, I, q.button, q.input]);
  return Br(function() {
    Ae && fe !== void 0 && Ua(null, N, !1);
  }, [Ae, fe, N]), Br(function() {
    var _e = ie();
    !Ae && _e === "input" && (De(!1), vr()), !Ae && o && !y && _e === "panel" && (De(!0), vr());
  }, [Ae]), /* @__PURE__ */ w.createElement(pr.Provider, {
    value: ys
  }, /* @__PURE__ */ w.createElement(gw, we({}, xw(a), {
    popupElement: ds,
    popupStyle: d.popup,
    popupClassName: h.popup,
    visible: Ae,
    onClose: ss
  }), /* @__PURE__ */ w.createElement(
    Kw,
    we({}, a, {
      // Ref
      ref: re,
      suffixIcon: Q,
      removeIcon: ne,
      activeHelp: !!gr,
      allHelp: !!gr && ho === "preset",
      focused: pe,
      onFocus: vs,
      onBlur: ms,
      onKeyDown: gs,
      onSubmit: vr,
      value: go,
      maskFormat: c,
      onChange: hs,
      onInputChange: ps,
      internalPicker: i,
      format: l,
      inputReadOnly: G,
      disabled: O,
      open: Ae,
      onOpenChange: De,
      onClick: mr,
      onClear: rs,
      invalid: Zc,
      onInvalid: function(xe) {
        uo(xe, 0);
      }
    })
  )));
}
var Xw = /* @__PURE__ */ w.forwardRef(rq);
Oe.env.NODE_ENV !== "production" && (Xw.displayName = "RefPicker");
function Zw(e) {
  return $r(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const Qw = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: a,
    controlHeightSM: i,
    controlHeightLG: o,
    fontSizeLG: l,
    lineHeightLG: c,
    paddingSM: s,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: f,
    colorFillAlter: d,
    colorPrimaryHover: h,
    colorPrimary: v,
    controlOutlineWidth: m,
    controlOutline: p,
    colorErrorOutline: y,
    colorWarningOutline: x,
    colorBgContainer: S
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((i - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((o - l * c) / 2 * 10) / 10 - a,
    paddingInline: s - a,
    paddingInlineSM: u - a,
    paddingInlineLG: f - a,
    addonBg: d,
    activeBorderColor: v,
    hoverBorderColor: h,
    activeShadow: `0 0 0 ${m}px ${p}`,
    errorActiveShadow: `0 0 0 ${m}px ${y}`,
    warningActiveShadow: `0 0 0 ${m}px ${x}`,
    hoverBg: S,
    activeBg: S,
    inputFontSize: r,
    inputFontSizeLG: l,
    inputFontSizeSM: r
  };
}, nq = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), dh = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, nq($r(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Jw = (e, t) => ({
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
}), Ig = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Jw(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), e1 = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Jw(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, dh(e))
  }), Ig(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Ig(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), jg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), aq = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, jg(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), jg(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, dh(e))
    }
  })
}), t1 = (e, t) => {
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
}, r1 = (e, t) => ({
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
}), Dg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, r1(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), n1 = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r1(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, dh(e))
  }), Dg(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Dg(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Ng = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), iq = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${ce(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${ce(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, Ng(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Ng(e, {
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
          borderInlineStart: `${ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ce(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), a1 = (e) => ({
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
}), i1 = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${ce(t)} ${ce(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, o1 = (e) => ({
  padding: `${ce(e.paddingBlockSM)} ${ce(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), l1 = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${ce(e.paddingBlock)} ${ce(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, a1(e.colorTextPlaceholder)), {
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
  "&-lg": Object.assign({}, i1(e)),
  "&-sm": Object.assign({}, o1(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), oq = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, i1(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, o1(e)),
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
        padding: `0 ${ce(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${ce(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ce(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${ce(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px ${ce(e.calc(e.paddingInline).mul(-1).equal())}`,
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
    }, J1()), {
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
}, lq = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, o = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Uo(e)), l1(e)), e1(e)), n1(e)), t1(e)), {
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
}, cq = (e) => {
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
        margin: `0 ${ce(e.inputAffixPadding)}`
      }
    }
  };
}, sq = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: a,
    colorIcon: i,
    colorIconHover: o,
    iconCls: l
  } = e, c = `${t}-affix-wrapper`, s = `${t}-affix-wrapper-disabled`;
  return {
    [c]: Object.assign(Object.assign(Object.assign(Object.assign({}, l1(e)), {
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
    }), cq(e)), {
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
    [s]: {
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
}, uq = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Uo(e)), oq(e)), {
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
      }, aq(e)), iq(e)), {
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
}, fq = (e) => {
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
}, dq = (e) => {
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
}, hq = (e) => {
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
Yf("Input", (e) => {
  const t = $r(e, Zw(e));
  return [
    lq(t),
    dq(t),
    sq(t),
    uq(t),
    fq(t),
    hq(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    ih(t)
  ];
}, Qw, {
  resetFont: !1
});
const iu = (e, t) => {
  const {
    componentCls: r,
    controlHeight: n
  } = e, a = t ? `${r}-${t}` : "", i = VU(e);
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
          lineHeight: ce(i.itemLineHeight)
        }
      }
    }
  ];
}, pq = (e) => {
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
    iu(a, "small"),
    iu(e),
    iu(i, "large"),
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
      }, zU(e)), {
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
}, vq = (e) => {
  const {
    pickerCellCls: t,
    pickerCellInnerCls: r,
    cellHeight: n,
    borderRadiusSM: a,
    motionDurationMid: i,
    cellHoverBg: o,
    lineWidth: l,
    lineType: c,
    colorPrimary: s,
    cellActiveWithRangeBg: u,
    colorTextLightSolid: f,
    colorTextDisabled: d,
    cellBgDisabled: h,
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
      lineHeight: ce(n),
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
        border: `${ce(l)} ${c} ${s}`,
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
        background: s
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
        background: h
      }
    },
    [`&-disabled${t}-today ${r}::before`]: {
      borderColor: d
    }
  };
}, mq = (e) => {
  const {
    componentCls: t,
    pickerCellCls: r,
    pickerCellInnerCls: n,
    pickerYearMonthCellWidth: a,
    pickerControlIconSize: i,
    cellWidth: o,
    paddingSM: l,
    paddingXS: c,
    paddingXXS: s,
    colorBgContainer: u,
    lineWidth: f,
    lineType: d,
    borderRadiusLG: h,
    colorPrimary: v,
    colorTextHeading: m,
    colorSplit: p,
    pickerControlIconBorderWidth: y,
    colorIcon: x,
    textHeight: S,
    motionDurationMid: O,
    colorIconHover: g,
    fontWeightStrong: b,
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
    pickerControlIconMargin: z
  } = e, G = e.calc(o).mul(7).add(e.calc(W).mul(2)).equal();
  return {
    [t]: {
      "&-panel": {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        background: u,
        borderRadius: h,
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
        padding: `0 ${ce(c)}`,
        color: m,
        borderBottom: `${ce(f)} ${d} ${p}`,
        "> *": {
          flex: "none"
        },
        button: {
          padding: 0,
          color: x,
          lineHeight: ce(S),
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
          fontWeight: b,
          lineHeight: ce(S),
          "> button": {
            color: "inherit",
            fontWeight: "inherit",
            "&:not(:first-child)": {
              marginInlineStart: c
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
          borderBlockWidth: `${ce(y)} 0`,
          borderInlineWidth: `${ce(y)} 0`,
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
          borderBlockWidth: `${ce(y)} 0`,
          borderInlineWidth: `${ce(y)} 0`,
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
        padding: `${ce(C)} 0`,
        color: _,
        cursor: "pointer",
        // In view
        "&-in-view": {
          color: M
        }
      }, vq(e)),
      "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-content`]: {
          height: e.calc(N).mul(4).equal()
        },
        [n]: {
          padding: `0 ${ce(c)}`
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
          padding: `0 ${ce(e.calc(c).div(2).equal())}`
        },
        [`${t}-cell::before`]: {
          display: "none"
        }
      },
      // ============= Year & Quarter & Month Panel =============
      "&-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-body`]: {
          padding: `0 ${ce(c)}`
        },
        [n]: {
          width: a
        }
      },
      // ====================== Date Panel ======================
      "&-date-panel": {
        [`${t}-body`]: {
          padding: `${ce(c)} ${ce(W)}`
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
                color: new Yo(A).setAlpha(0.5).toHexString()
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
          padding: `${ce(c)} ${ce(l)}`
        },
        [`${t}-content th`]: {
          width: "auto"
        }
      },
      // ==================== Datetime Panel ====================
      "&-datetime-panel": {
        display: "flex",
        [`${t}-time-panel`]: {
          borderInlineStart: `${ce(f)} ${d} ${p}`
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
          margin: `${ce(s)} 0`,
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
            borderInlineStart: `${ce(f)} ${d} ${p}`
          },
          "&-active": {
            background: new Yo(H).setAlpha(0.2).toHexString()
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
                lineHeight: ce(L),
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
}, gq = (e) => {
  const {
    componentCls: t,
    textHeight: r,
    lineWidth: n,
    paddingSM: a,
    antCls: i,
    colorPrimary: o,
    cellActiveWithRangeBg: l,
    colorPrimaryBorder: c,
    lineType: s,
    colorSplit: u
  } = e;
  return {
    [`${t}-dropdown`]: {
      // ======================== Footer ========================
      [`${t}-footer`]: {
        borderTop: `${ce(n)} ${s} ${u}`,
        "&-extra": {
          padding: `0 ${ce(a)}`,
          lineHeight: ce(e.calc(r).sub(e.calc(n).mul(2)).equal()),
          textAlign: "start",
          "&:not(:last-child)": {
            borderBottom: `${ce(n)} ${s} ${u}`
          }
        }
      },
      // ==================== Footer > Ranges ===================
      [`${t}-panels + ${t}-footer ${t}-ranges`]: {
        justifyContent: "space-between"
      },
      [`${t}-ranges`]: {
        marginBlock: 0,
        paddingInline: ce(a),
        overflow: "hidden",
        textAlign: "start",
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "> li": {
          lineHeight: ce(e.calc(r).sub(e.calc(n).mul(2)).equal()),
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
          borderColor: c,
          cursor: "pointer"
        },
        [`${t}-ok`]: {
          paddingBlock: e.calc(n).mul(2).equal(),
          marginInlineStart: "auto"
        }
      }
    }
  };
}, yq = (e) => {
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
}, bq = (e) => {
  const {
    colorBgContainerDisabled: t,
    controlHeight: r,
    controlHeightSM: n,
    controlHeightLG: a,
    paddingXXS: i,
    lineWidth: o
  } = e, l = i * 2, c = o * 2, s = Math.min(r - l, r - c), u = Math.min(n - l, n - c), f = Math.min(a - l, a - c);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(i / 2),
    cellHoverBg: e.controlItemBgHover,
    cellActiveWithRangeBg: e.controlItemBgActive,
    cellHoverWithRangeBg: new Yo(e.colorPrimary).lighten(35).toHexString(),
    cellRangeBorderColor: new Yo(e.colorPrimary).lighten(20).toHexString(),
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
    multipleItemHeight: s,
    multipleItemHeightSM: u,
    multipleItemHeightLG: f,
    multipleSelectorBgDisabled: t,
    multipleItemColorDisabled: e.colorTextDisabled,
    multipleItemBorderColorDisabled: "transparent"
  };
}, xq = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Qw(e)), bq(e)), eS(e)), {
  presetsWidth: 120,
  presetsMaxWidth: 200,
  zIndexPopup: e.zIndexPopupBase + 50
}), wq = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: [
      Object.assign(Object.assign(Object.assign({}, e1(e)), n1(e)), t1(e)),
      // ========================= Multiple =========================
      {
        "&-outlined": {
          [`&${t}-multiple ${t}-selection-item`]: {
            background: e.multipleItemBg,
            border: `${ce(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
          }
        },
        "&-filled": {
          [`&${t}-multiple ${t}-selection-item`]: {
            background: e.colorBgContainer,
            border: `${ce(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
          }
        },
        "&-borderless": {
          [`&${t}-multiple ${t}-selection-item`]: {
            background: e.multipleItemBg,
            border: `${ce(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
          }
        }
      }
    ]
  };
}, ou = (e, t, r, n) => {
  const a = e.calc(r).add(2).equal(), i = e.max(e.calc(t).sub(a).div(2).equal(), 0), o = e.max(e.calc(t).sub(a).sub(i).equal(), 0);
  return {
    padding: `${ce(i)} ${ce(n)} ${ce(o)}`
  };
}, Sq = (e) => {
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
}, Oq = (e) => {
  const {
    componentCls: t,
    antCls: r,
    controlHeight: n,
    paddingInline: a,
    lineWidth: i,
    lineType: o,
    colorBorder: l,
    borderRadius: c,
    motionDurationMid: s,
    colorTextDisabled: u,
    colorTextPlaceholder: f,
    controlHeightLG: d,
    fontSizeLG: h,
    controlHeightSM: v,
    paddingInlineSM: m,
    paddingXS: p,
    marginXS: y,
    colorTextDescription: x,
    lineWidthBold: S,
    colorPrimary: O,
    motionDurationSlow: g,
    zIndexPopup: b,
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
      [t]: Object.assign(Object.assign(Object.assign({}, Uo(e)), ou(e, n, R, a)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        borderRadius: c,
        transition: `border ${s}, box-shadow ${s}, background ${s}`,
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
            transition: `all ${s}`
          }, a1(f)), {
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
        "&-large": Object.assign(Object.assign({}, ou(e, d, k, a)), {
          [`${t}-input > input`]: {
            fontSize: h,
            lineHeight: L
          }
        }),
        "&-small": Object.assign({}, ou(e, v, R, m)),
        [`${t}-suffix`]: {
          display: "flex",
          flex: "none",
          alignSelf: "center",
          marginInlineStart: e.calc(p).div(2).equal(),
          color: u,
          lineHeight: 1,
          pointerEvents: "none",
          transition: `opacity ${s}, color ${s}`,
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
          transition: `opacity ${s}, color ${s}`,
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
          height: h,
          color: u,
          fontSize: h,
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
            padding: `0 ${ce(p)}`,
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
        "&-dropdown": Object.assign(Object.assign(Object.assign({}, Uo(e)), mq(e)), {
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
            animationName: Kx
          },
          [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]: {
            animationName: qx
          },
          // https://github.com/ant-design/ant-design/issues/48727
          [`&${r}-slide-up-leave ${t}-panel-container`]: {
            pointerEvents: "none"
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topRight`]: {
            animationName: Xx
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]: {
            animationName: Gx
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
          }, tS(e, _, D)), {
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
                padding: p,
                borderInlineEnd: `${ce(i)} ${o} ${N}`,
                li: Object.assign(Object.assign({}, rS), {
                  borderRadius: I,
                  paddingInline: p,
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
          padding: `${ce(e.calc(C).mul(2).div(3).equal())} 0`,
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
    Pg(e, "slide-up"),
    Pg(e, "slide-down"),
    Cg(e, "move-up"),
    Cg(e, "move-down")
  ];
}, c1 = Yf("DatePicker", (e) => {
  const t = $r(Zw(e), yq(e), {
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [
    gq(t),
    Oq(t),
    wq(t),
    Sq(t),
    pq(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    ih(e, {
      focusElCls: `${e.componentCls}-focused`
    })
  ];
}, xq);
var $q = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" }, Cq = function(t, r) {
  return /* @__PURE__ */ w.createElement(Pa, we({}, t, {
    ref: r,
    icon: $q
  }));
}, hh = /* @__PURE__ */ w.forwardRef(Cq);
Oe.env.NODE_ENV !== "production" && (hh.displayName = "CalendarOutlined");
var Pq = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" }, _q = function(t, r) {
  return /* @__PURE__ */ w.createElement(Pa, we({}, t, {
    ref: r,
    icon: Pq
  }));
}, ph = /* @__PURE__ */ w.forwardRef(_q);
Oe.env.NODE_ENV !== "production" && (ph.displayName = "ClockCircleOutlined");
var Eq = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, name: "swap-right", theme: "outlined" }, Aq = function(t, r) {
  return /* @__PURE__ */ w.createElement(Pa, we({}, t, {
    ref: r,
    icon: Eq
  }));
}, s1 = /* @__PURE__ */ w.forwardRef(Aq);
Oe.env.NODE_ENV !== "production" && (s1.displayName = "SwapRightOutlined");
function Tq(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.yearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.quarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.monthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.weekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.placeholder : e.lang.placeholder;
}
function Mq(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.rangeYearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.rangeQuarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.rangeMonthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.rangeWeekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.rangePlaceholder : e.lang.rangePlaceholder;
}
function vh(e, t) {
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
function u1(e, t) {
  const {
    allowClear: r = !0
  } = e, {
    clearIcon: n,
    removeIcon: a
  } = KU(Object.assign(Object.assign({}, e), {
    prefixCls: t,
    componentName: "DatePicker"
  }));
  return [w.useMemo(() => r === !1 ? !1 : Object.assign({
    clearIcon: n
  }, r === !0 ? {} : r), [r, n]), a];
}
const [Iq, jq] = ["week", "WeekPicker"], [Dq, Nq] = ["month", "MonthPicker"], [Rq, kq] = ["year", "YearPicker"], [Bq, Lq] = ["quarter", "QuarterPicker"], [f1, Rg] = ["time", "TimePicker"], Hq = (e) => /* @__PURE__ */ w.createElement(zc, Object.assign({
  size: "small",
  type: "primary"
}, e));
function d1(e) {
  return w.useMemo(() => Object.assign({
    button: Hq
  }, e), [e]);
}
var Fq = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Wq = (e) => {
  const t = /* @__PURE__ */ w.forwardRef((r, n) => {
    var a;
    const {
      prefixCls: i,
      getPopupContainer: o,
      components: l,
      className: c,
      style: s,
      placement: u,
      size: f,
      disabled: d,
      bordered: h = !0,
      placeholder: v,
      popupClassName: m,
      dropdownClassName: p,
      status: y,
      rootClassName: x,
      variant: S,
      picker: O
    } = r, g = Fq(r, ["prefixCls", "getPopupContainer", "components", "className", "style", "placement", "size", "disabled", "bordered", "placeholder", "popupClassName", "dropdownClassName", "status", "rootClassName", "variant", "picker"]), b = w.useRef(null), {
      getPrefixCls: $,
      direction: C,
      getPopupContainer: _,
      rangePicker: M
    } = w.useContext(en), P = $("picker", i), {
      compactSize: I,
      compactItemClassnames: N
    } = Gf(P, C), j = $(), [E, A] = ow("rangePicker", S, h), D = Rx(P), [R, k, L] = c1(P, D);
    if (Oe.env.NODE_ENV !== "production") {
      const Z = Ji("DatePicker.RangePicker");
      Z.deprecated(!p, "dropdownClassName", "popupClassName"), Z.deprecated(!("bordered" in r), "bordered", "variant");
    }
    const [H] = u1(r, P), B = d1(l), W = Qd((Z) => {
      var le;
      return (le = f ?? I) !== null && le !== void 0 ? le : Z;
    }), z = w.useContext(qf), G = d ?? z, Q = w.useContext(Yg), {
      hasFeedback: ne,
      status: te,
      feedbackIcon: V
    } = Q, K = /* @__PURE__ */ w.createElement(w.Fragment, null, O === f1 ? /* @__PURE__ */ w.createElement(ph, null) : /* @__PURE__ */ w.createElement(hh, null), ne && V);
    w.useImperativeHandle(n, () => b.current);
    const [q] = Nx("Calendar", Kg), F = Object.assign(Object.assign({}, q), r.locale), [J] = qg("DatePicker", (a = r.popupStyle) === null || a === void 0 ? void 0 : a.zIndex);
    return R(/* @__PURE__ */ w.createElement(Gg, {
      space: !0
    }, /* @__PURE__ */ w.createElement(Gw, Object.assign({
      separator: /* @__PURE__ */ w.createElement("span", {
        "aria-label": "to",
        className: `${P}-separator`
      }, /* @__PURE__ */ w.createElement(s1, null)),
      disabled: G,
      ref: b,
      popupAlign: vh(C, u),
      placement: u,
      placeholder: Mq(F, O, v),
      suffixIcon: K,
      prevIcon: /* @__PURE__ */ w.createElement("span", {
        className: `${P}-prev-icon`
      }),
      nextIcon: /* @__PURE__ */ w.createElement("span", {
        className: `${P}-next-icon`
      }),
      superPrevIcon: /* @__PURE__ */ w.createElement("span", {
        className: `${P}-super-prev-icon`
      }),
      superNextIcon: /* @__PURE__ */ w.createElement("span", {
        className: `${P}-super-next-icon`
      }),
      transitionName: `${j}-slide-up`,
      picker: O
    }, g, {
      className: Ie({
        [`${P}-${W}`]: W,
        [`${P}-${E}`]: A
      }, aw(P, iw(te, y), ne), k, N, c, M == null ? void 0 : M.className, L, D, x),
      style: Object.assign(Object.assign({}, M == null ? void 0 : M.style), s),
      locale: F.lang,
      prefixCls: P,
      getPopupContainer: o || _,
      generateConfig: e,
      components: B,
      direction: C,
      classNames: {
        popup: Ie(k, m || p, L, D, x)
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
var Vq = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const zq = (e) => {
  const t = (c, s) => {
    const u = s === Rg ? "timePicker" : "datePicker", f = /* @__PURE__ */ w.forwardRef((d, h) => {
      var v;
      const {
        prefixCls: m,
        getPopupContainer: p,
        components: y,
        style: x,
        className: S,
        rootClassName: O,
        size: g,
        bordered: b,
        placement: $,
        placeholder: C,
        popupClassName: _,
        dropdownClassName: M,
        disabled: P,
        status: I,
        variant: N,
        onCalendarChange: j
      } = d, E = Vq(d, ["prefixCls", "getPopupContainer", "components", "style", "className", "rootClassName", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status", "variant", "onCalendarChange"]), {
        getPrefixCls: A,
        direction: D,
        getPopupContainer: R,
        // Consume different styles according to different names
        [u]: k
      } = w.useContext(en), L = A("picker", m), {
        compactSize: H,
        compactItemClassnames: B
      } = Gf(L, D), W = w.useRef(null), [z, G] = ow("datePicker", N, b), Q = Rx(L), [ne, te, V] = c1(L, Q);
      w.useImperativeHandle(h, () => W.current);
      const K = {
        showToday: !0
      }, q = c || d.picker, F = A(), {
        onSelect: J,
        multiple: Z
      } = E, le = J && c === "time" && !Z, re = (Se, Me, he) => {
        j == null || j(Se, Me, he), le && J(Se);
      };
      if (Oe.env.NODE_ENV !== "production") {
        const Se = Ji(s || "DatePicker");
        Oe.env.NODE_ENV !== "production" && Se(c !== "quarter", "deprecated", `DatePicker.${s} is legacy usage. Please use DatePicker[picker='${c}'] directly.`), Se.deprecated(!M, "dropdownClassName", "popupClassName"), Se.deprecated(!("bordered" in d), "bordered", "variant"), Se.deprecated(!le, "onSelect", "onCalendarChange");
      }
      const [ae, de] = u1(d, L), $e = d1(y), ke = Qd((Se) => {
        var Me;
        return (Me = g ?? H) !== null && Me !== void 0 ? Me : Se;
      }), Ae = w.useContext(qf), De = P ?? Ae, Ge = w.useContext(Yg), {
        hasFeedback: Qe,
        status: Ke,
        feedbackIcon: Ue
      } = Ge, Ve = /* @__PURE__ */ w.createElement(w.Fragment, null, q === "time" ? /* @__PURE__ */ w.createElement(ph, null) : /* @__PURE__ */ w.createElement(hh, null), Qe && Ue), [_t] = Nx("DatePicker", Kg), He = Object.assign(Object.assign({}, _t), d.locale), [ot] = qg("DatePicker", (v = d.popupStyle) === null || v === void 0 ? void 0 : v.zIndex);
      return ne(/* @__PURE__ */ w.createElement(Gg, {
        space: !0
      }, /* @__PURE__ */ w.createElement(Xw, Object.assign({
        ref: W,
        placeholder: Tq(He, q, C),
        suffixIcon: Ve,
        dropdownAlign: vh(D, $),
        placement: $,
        prevIcon: /* @__PURE__ */ w.createElement("span", {
          className: `${L}-prev-icon`
        }),
        nextIcon: /* @__PURE__ */ w.createElement("span", {
          className: `${L}-next-icon`
        }),
        superPrevIcon: /* @__PURE__ */ w.createElement("span", {
          className: `${L}-super-prev-icon`
        }),
        superNextIcon: /* @__PURE__ */ w.createElement("span", {
          className: `${L}-super-next-icon`
        }),
        transitionName: `${F}-slide-up`,
        picker: c,
        onCalendarChange: re
      }, K, E, {
        locale: He.lang,
        className: Ie({
          [`${L}-${ke}`]: ke,
          [`${L}-${z}`]: G
        }, aw(L, iw(Ke, I), Qe), te, B, k == null ? void 0 : k.className, S, V, Q, O),
        style: Object.assign(Object.assign({}, k == null ? void 0 : k.style), x),
        prefixCls: L,
        getPopupContainer: p || R,
        generateConfig: e,
        components: $e,
        direction: D,
        disabled: De,
        classNames: {
          popup: Ie(te, V, Q, O, _ || M)
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
    return Oe.env.NODE_ENV !== "production" && s && (f.displayName = s), f;
  }, r = t(), n = t(Iq, jq), a = t(Dq, Nq), i = t(Rq, kq), o = t(Bq, Lq), l = t(f1, Rg);
  return {
    DatePicker: r,
    WeekPicker: n,
    MonthPicker: a,
    YearPicker: i,
    TimePicker: l,
    QuarterPicker: o
  };
}, h1 = (e) => {
  const {
    DatePicker: t,
    WeekPicker: r,
    MonthPicker: n,
    YearPicker: a,
    TimePicker: i,
    QuarterPicker: o
  } = zq(e), l = Wq(e), c = t;
  return c.WeekPicker = r, c.MonthPicker = n, c.YearPicker = a, c.RangePicker = l, c.TimePicker = i, c.QuarterPicker = o, Oe.env.NODE_ENV !== "production" && (c.displayName = "DatePicker"), c;
}, Va = h1(uY);
function p1(e) {
  const t = vh(e.direction, e.placement);
  return t.overflow.adjustY = !1, t.overflow.adjustX = !1, Object.assign(Object.assign({}, e), {
    dropdownAlign: t
  });
}
const Uq = ew(Va, "picker", null, p1);
Va._InternalPanelDoNotUseOrYouWillBeFired = Uq;
const Yq = ew(Va.RangePicker, "picker", null, p1);
Va._InternalRangePanelDoNotUseOrYouWillBeFired = Yq;
Va.generatePicker = h1;
const { RangePicker: qq } = Va, lu = [
  { symbol: "All", icon: "" },
  { symbol: "ETH", icon: "/imgs/logos/eth.png" },
  { symbol: "MATIC", icon: "/imgs/logos/matic.png" },
  { symbol: "TVWT", icon: "/imgs/logos/tvwt.png" }
];
function Gq({
  onDateChange: e,
  defaultDates: t,
  onTokenChange: r,
  selectedToken: n,
  onReset: a
}) {
  var o, l;
  const i = (c) => {
    r(c);
  };
  return /* @__PURE__ */ U.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ U.jsxs("div", { className: "flex items-center gap-[14px]", children: [
      /* @__PURE__ */ U.jsxs(S1, { children: [
        /* @__PURE__ */ U.jsxs(O1, { className: Le(
          "w-[120px] h-10 bg-white border border-[#E0E0E0] rounded-md",
          "hover:border-[#52c41a] focus:ring-[#52c41a] focus:outline-none",
          "text-sm px-3",
          "flex items-center justify-between"
        ), children: [
          /* @__PURE__ */ U.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ U.jsx(
              "img",
              {
                src: (o = lu.find((c) => c.symbol === n)) == null ? void 0 : o.icon,
                alt: n,
                className: Le(
                  "w-4 h-4 rounded-full",
                  !((l = lu.find((c) => c.symbol === n)) != null && l.icon) && "invisible"
                )
              }
            ),
            /* @__PURE__ */ U.jsx("span", { children: n })
          ] }),
          /* @__PURE__ */ U.jsx(A1, { className: "h-4 w-4 opacity-50" })
        ] }),
        /* @__PURE__ */ U.jsx($1, { className: "bg-white", children: lu.map((c) => /* @__PURE__ */ U.jsxs(
          C1,
          {
            onClick: () => i(c.symbol),
            className: Le(
              "cursor-pointer text-sm",
              "flex items-center justify-between"
            ),
            children: [
              /* @__PURE__ */ U.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ U.jsx(
                  "img",
                  {
                    src: c.icon,
                    alt: c.symbol,
                    className: Le(
                      "w-4 h-4 rounded-full",
                      !c.icon && "invisible"
                    )
                  }
                ),
                /* @__PURE__ */ U.jsx("span", { className: Le(
                  n === c.symbol && "text-[#52c41a]"
                ), children: c.symbol })
              ] }),
              n === c.symbol && /* @__PURE__ */ U.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          },
          c.symbol
        )) })
      ] }),
      /* @__PURE__ */ U.jsx(
        Ug,
        {
          theme: {
            token: {
              colorPrimary: "#52c41a",
              controlHeight: 40
            }
          },
          children: /* @__PURE__ */ U.jsx(
            qq,
            {
              defaultValue: [
                vt(t[0]),
                vt(t[1])
              ],
              disabledDate: (c) => c && c > vt().endOf("day"),
              onChange: (c) => {
                if (c && c[0] && c[1]) {
                  const s = c[0].startOf("day").toDate(), u = c[1].endOf("day").toDate();
                  e([s, u]);
                }
              }
            }
          )
        }
      ),
      /* @__PURE__ */ U.jsx("div", { className: "hidden tablet:block text-black text-base font-bold leading-tight cursor-pointer", onClick: a, children: " Reset" })
    ] }),
    /* @__PURE__ */ U.jsx(P1, { className: "hidden tablet:block", children: "Download CSV" })
  ] });
}
const kg = {
  ETH: "/imgs/logos/eth.png",
  MATIC: "/imgs/logos/matic.png",
  TVWT: "/imgs/logos/tvwt.png"
};
function Kq({ data: e }) {
  return /* @__PURE__ */ U.jsxs(nS, { children: [
    /* @__PURE__ */ U.jsx(aS, { className: "hidden tablet:table-header-group", children: /* @__PURE__ */ U.jsxs(xs, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
      /* @__PURE__ */ U.jsx(Rn, { className: "h-[16px] px-0 pb-[8px]", children: "Transaction" }),
      /* @__PURE__ */ U.jsx(Rn, { className: "h-[16px] px-0 pb-[8px]", children: "Amount" }),
      /* @__PURE__ */ U.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Network" }),
      /* @__PURE__ */ U.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "From" }),
      /* @__PURE__ */ U.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "To" }),
      /* @__PURE__ */ U.jsx(Rn, { className: "h-[16px] px-0 pb-[8px] text-right", children: "Time" })
    ] }) }),
    /* @__PURE__ */ U.jsx(bh, { className: "hidden tablet:table-row-group", children: e.map((t) => /* @__PURE__ */ U.jsxs(xs, { className: "hover:bg-transparent", children: [
      /* @__PURE__ */ U.jsx(Er, { className: Le(
        "px-0 py-6",
        "desktop:w-[150px] laptop:w-[150px]"
      ), children: /* @__PURE__ */ U.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ U.jsx("img", { src: kg[t.token], alt: t.token, className: "w-[28px] h-[28px]" }),
        /* @__PURE__ */ U.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: t.type })
      ] }) }),
      /* @__PURE__ */ U.jsx(Er, { className: Le(
        "px-0 py-6",
        "desktop:w-[190px] laptop:w-[150px]"
      ), children: /* @__PURE__ */ U.jsxs("span", { className: Le(
        "text-lg font-bold leading-tight",
        t.type === "Receive" ? "text-[#00a478]" : "text-[#ff6363]"
      ), children: [
        t.type === "Receive" ? "+" : "-",
        ui(yh(t.amount), 2),
        " ",
        t.token
      ] }) }),
      /* @__PURE__ */ U.jsx(Er, { className: Le(
        "hidden tablet:table-cell px-0 py-6",
        "text-sm text-[#929292] font-medium leading-none",
        "tablet:w-[90px] laptop:w-[120px]"
      ), children: t.network }),
      /* @__PURE__ */ U.jsxs(Er, { className: Le(
        "hidden tablet:table-cell px-0 py-6",
        "text-xs text-[#929292] font-medium leading-none break-all"
      ), children: [
        /* @__PURE__ */ U.jsx("div", { className: Le(
          "hidden tablet:block laptop:hidden",
          "max-w-[110px] truncate"
        ), children: t.from }),
        /* @__PURE__ */ U.jsx("div", { className: Le(
          "hidden laptop:block desktop:hidden",
          "w-[141px] mr-[30px]"
        ), children: t.from }),
        /* @__PURE__ */ U.jsx("div", { className: Le(
          "hidden desktop:block",
          "w-[298px]"
        ), children: t.from })
      ] }),
      /* @__PURE__ */ U.jsxs(Er, { className: Le(
        "hidden tablet:table-cell px-0 py-6",
        "text-xs text-[#929292] font-medium leading-none break-all"
      ), children: [
        /* @__PURE__ */ U.jsx("div", { className: Le(
          "hidden tablet:block laptop:hidden",
          "max-w-[110px] truncate"
        ), children: t.to }),
        /* @__PURE__ */ U.jsx("div", { className: Le(
          "hidden laptop:block desktop:hidden",
          "w-[141px] mr-[30px]"
        ), children: t.to }),
        /* @__PURE__ */ U.jsx("div", { className: Le(
          "hidden desktop:block",
          "w-[298px]"
        ), children: t.to })
      ] }),
      /* @__PURE__ */ U.jsx(Er, { className: "px-0 py-6 text-right text-sm text-black leading-none font-normal w-[120px]", children: new Date(t.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      }) })
    ] }, t.id)) }),
    /* @__PURE__ */ U.jsx(bh, { className: "table-row-group tablet:hidden", children: e.map((t) => /* @__PURE__ */ U.jsxs(xs, { className: "hover:bg-transparent", children: [
      /* @__PURE__ */ U.jsx(Er, { className: Le(
        "px-0 py-6 w-[180px]"
      ), children: /* @__PURE__ */ U.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ U.jsx("img", { src: kg[t.token], alt: t.token, className: "w-[28px] h-[28px]" }),
        /* @__PURE__ */ U.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ U.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: t.type }),
          /* @__PURE__ */ U.jsxs("div", { className: "flex flex-col gap-1 mt-[6px] text-xs text-[#929292] font-medium leading-none break-all", children: [
            /* @__PURE__ */ U.jsxs("p", { children: [
              "From: ",
              t.from
            ] }),
            /* @__PURE__ */ U.jsxs("p", { children: [
              "To: ",
              t.to
            ] }),
            /* @__PURE__ */ U.jsxs("p", { children: [
              "Network: ",
              t.network
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ U.jsx(Er, { className: Le(
        "px-0 py-6",
        "desktop:w-[190px] laptop:w-[150px]"
      ) }),
      /* @__PURE__ */ U.jsxs(Er, { className: "px-0 py-6 text-right text-sm text-black leading-none font-normal w-[120px]", children: [
        /* @__PURE__ */ U.jsxs("p", { className: Le(
          "text-lg font-bold leading-tight",
          t.type === "Receive" ? "text-[#00a478]" : "text-[#ff6363]"
        ), children: [
          t.type === "Receive" ? "+" : "-",
          ui(yh(t.amount), 2),
          " ",
          t.token
        ] }),
        /* @__PURE__ */ U.jsx("p", { children: new Date(t.timestamp).toLocaleString("en-US", {
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
function Xq() {
  const { address: e } = Jl.all(), [t, r] = w.useState([]), [n, a] = w.useState([
    vt().subtract(1, "month").startOf("day").toDate(),
    vt().endOf("day").toDate()
  ]), [i, o] = w.useState([]), [l, c] = w.useState(!1), [s, u] = w.useState("ALL");
  w.useEffect(() => {
    f(n, "ALL");
  }, []);
  const f = async (v, m = "ALL") => {
    const p = v[0].getTime(), y = v[1].getTime();
    try {
      c(!0);
      const x = await Lg.get("/user-assets/transaction-history", {
        params: {
          address: e,
          startDate: p,
          endDate: y
        }
      });
      o(x.data), r(m === "ALL" ? x.data.slice() : x.data.filter((S) => S.token === m));
    } catch (x) {
      const S = Ff(x);
      Xg.error(S.message);
    } finally {
      c(!1);
    }
  }, d = (v) => {
    u(v), r(v === "ALL" ? i.slice() : i.filter((m) => m.token === v));
  }, h = () => {
    u("ALL"), f(n, "ALL");
  };
  return /* @__PURE__ */ U.jsxs("div", { className: "min-h-[500px]", children: [
    /* @__PURE__ */ U.jsx("div", { className: Le(
      "text-[#111111] font-bold",
      "text-2xl mobile:text-[32px]",
      "mb-6"
    ), children: "History" }),
    /* @__PURE__ */ U.jsx("div", { className: "mb-[40px]", children: /* @__PURE__ */ U.jsx(
      Gq,
      {
        onDateChange: (v) => f(v, s),
        defaultDates: n,
        onTokenChange: d,
        selectedToken: s,
        onReset: h
      }
    ) }),
    !l && t.length === 0 ? /* @__PURE__ */ U.jsxs("div", { className: "mt-[96px]", children: [
      /* @__PURE__ */ U.jsx(iS, { className: "mx-auto", text: "No transaction history now, but you can connect wallet and make a transfer!" }),
      /* @__PURE__ */ U.jsx(oS, { className: "mt-[24px]", buttonClassName: "text-white bg-black rounded-full py-[10px] px-[16px] w-[173px]" })
    ] }) : /* @__PURE__ */ U.jsx(Kq, { data: t })
  ] });
}
function Bg({
  className: e,
  icon: t,
  title: r,
  description: n
}) {
  return /* @__PURE__ */ U.jsx("div", { className: Le(
    "border border-[#ebebeb] bg-[#fafafa] rounded-[20px]",
    "p-[16px] tablet:p-[40px] tablet:pb-[20px]",
    e
  ), children: /* @__PURE__ */ U.jsxs("div", { className: Le(
    "block tablet:flex tablet:items-center tablet:justify-between flex-wrap",
    "tablet:h-[46px] tablet:mb-[30px] tablet:px-[20px]"
  ), children: [
    /* @__PURE__ */ U.jsxs("div", { className: Le(
      "flex items-center",
      "shrink-0 min-w-fit",
      "w-[218px]",
      "mb-[12px] tablet:mb-0"
    ), children: [
      /* @__PURE__ */ U.jsx(
        "img",
        {
          className: Le(
            "w-[27px] tablet:w-[37px]",
            "mr-[16px] tablet:mr-[12px]"
          ),
          src: t,
          alt: "connect-dapps"
        }
      ),
      /* @__PURE__ */ U.jsx("p", { className: Le(
        "text-[#111111] font-bold leading-normal",
        "text-base tablet:text-2xl"
      ), children: r })
    ] }),
    /* @__PURE__ */ U.jsx("p", { className: Le(
      "text-[#828282]",
      "text-[10px] tablet:text-sm",
      "leading-3 tablet:leading-none",
      "w-full tablet:w-[319px] laptop:w-[394px] desktop:w-[587px]",
      "mb-[10px] tablet:mb-0"
    ), children: n }),
    /* @__PURE__ */ U.jsx("div", { className: Le(
      "w-fit ml-auto tablet:ml-0 tablet:w-auto"
    ), children: /* @__PURE__ */ U.jsx(
      "img",
      {
        className: "w-[30px] tablet:w-[44px]",
        src: "/imgs/icons/arrow_right_long.svg",
        alt: "arrow-right"
      }
    ) })
  ] }) });
}
function Zq() {
  return /* @__PURE__ */ U.jsxs("div", { children: [
    /* @__PURE__ */ U.jsx("p", { className: Le(
      "text-[#111111] font-bold leading-tight",
      "text-2xl tablet:text-[32px]",
      "mb-[24px] tablet:mb-[40px]"
    ), children: "Let’s get started" }),
    /* @__PURE__ */ U.jsx(
      Bg,
      {
        icon: "/imgs/icons/connect_dapps.svg",
        title: "Connect dApps",
        description: "Link your wallet to any dApp easily with WalletConnect. Enjoy secure access to DeFi, NFTs, and more—all from your wallet in just a few taps!",
        className: "mb-[24px]"
      }
    ),
    /* @__PURE__ */ U.jsx(
      Bg,
      {
        icon: "/imgs/icons/top_up.svg",
        title: "Top up",
        description: "Transition smoothly into the web3 world with our intuitive on-ramp. Fund your wallet easily, access decentralized apps."
      }
    )
  ] });
}
function cG() {
  const { address: e } = Jl.all(), { data: t, isFetched: r } = _1({
    enabled: !!e
  });
  return /* @__PURE__ */ U.jsxs("div", { className: "mt-[40px] mobile:mt-[100px]", children: [
    t != null && t.isZero ? /* @__PURE__ */ U.jsx(Zq, {}) : /* @__PURE__ */ U.jsx(X8, {}),
    /* @__PURE__ */ U.jsx("div", { className: "mt-[60px] tablet:mt-[100px]", children: /* @__PURE__ */ U.jsx(Xq, {}) })
  ] });
}
export {
  cG as default
};
