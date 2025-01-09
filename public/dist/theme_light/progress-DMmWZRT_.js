import { a as s, p as _ } from "./vendor-react-DSEtE0wE.js";
import { aE as pe, _ as me, n as B, aF as te, N as ye, M as ve, O as he, q as Ce, K as be, v as le, T as $e, m as Se, R as ke, x as xe, aG as Ee } from "./main-DuqIT5w7.js";
import { o as Pe, R as we } from "./CheckOutlined-CyTLhz-m.js";
import { _ as Ne } from "./vendor-ui-utils-CGOon9_P.js";
import { _ as G, p as ne, r as Oe } from "./vendor-web3-CQEmmIwE.js";
import { d as Ie } from "./index-BNXxT-a8.js";
var _e = {
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1,
  gapPosition: "bottom"
}, De = function() {
  var t = s.useRef([]), r = s.useRef(null);
  return s.useEffect(function() {
    var n = Date.now(), o = !1;
    t.current.forEach(function(a) {
      if (a) {
        o = !0;
        var i = a.style;
        i.transitionDuration = ".3s, .3s, .3s, .06s", r.current && n - r.current < 100 && (i.transitionDuration = "0s, 0s");
      }
    }), o && (r.current = Date.now());
  }), t.current;
};
_.env.NODE_ENV;
var oe = 0, je = _.env.NODE_ENV !== "test" && pe();
function We() {
  var e;
  return je ? (e = oe, oe += 1) : e = "TEST_OR_SSR", e;
}
const Ae = function(e) {
  var t = s.useState(), r = me(t, 2), n = r[0], o = r[1];
  return s.useEffect(function() {
    o("rc_progress_".concat(We()));
  }, []), e || n;
};
var se = function(t) {
  var r = t.bg, n = t.children;
  return /* @__PURE__ */ s.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: r
    }
  }, n);
};
function ie(e, t) {
  return Object.keys(e).map(function(r) {
    var n = parseFloat(r), o = "".concat(Math.floor(n * t), "%");
    return "".concat(e[r], " ").concat(o);
  });
}
var de = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.color, o = e.gradientId, a = e.radius, i = e.style, l = e.ptg, c = e.strokeLinecap, f = e.strokeWidth, d = e.size, g = e.gapDegree, p = n && G(n) === "object", C = p ? "#FFF" : void 0, m = d / 2, h = /* @__PURE__ */ s.createElement("circle", {
    className: "".concat(r, "-circle-path"),
    r: a,
    cx: m,
    cy: m,
    stroke: C,
    strokeLinecap: c,
    strokeWidth: f,
    opacity: l === 0 ? 0 : 1,
    style: i,
    ref: t
  });
  if (!p)
    return h;
  var y = "".concat(o, "-conic"), b = g ? "".concat(180 + g / 2, "deg") : "0deg", v = ie(n, (360 - g) / 360), I = ie(n, 1), P = "conic-gradient(from ".concat(b, ", ").concat(v.join(", "), ")"), $ = "linear-gradient(to ".concat(g ? "bottom" : "top", ", ").concat(I.join(", "), ")");
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("mask", {
    id: y
  }, h), /* @__PURE__ */ s.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: d,
    height: d,
    mask: "url(#".concat(y, ")")
  }, /* @__PURE__ */ s.createElement(se, {
    bg: $
  }, /* @__PURE__ */ s.createElement(se, {
    bg: P
  }))));
});
_.env.NODE_ENV !== "production" && (de.displayName = "PtgCircle");
var z = 100, ee = function(t, r, n, o, a, i, l, c, f, d) {
  var g = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0, p = n / 100 * 360 * ((360 - i) / 360), C = i === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[l], m = (100 - o) / 100 * r;
  f === "round" && o !== 100 && (m += d / 2, m >= r && (m = r - 0.01));
  var h = z / 2;
  return {
    stroke: typeof c == "string" ? c : void 0,
    strokeDasharray: "".concat(r, "px ").concat(t),
    strokeDashoffset: m + g,
    transform: "rotate(".concat(a + p + C, "deg)"),
    transformOrigin: "".concat(h, "px ").concat(h, "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
    fillOpacity: 0
  };
}, Le = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];
function ce(e) {
  var t = e ?? [];
  return Array.isArray(t) ? t : [t];
}
var ue = function(t) {
  var r = ne(ne({}, _e), t), n = r.id, o = r.prefixCls, a = r.steps, i = r.strokeWidth, l = r.trailWidth, c = r.gapDegree, f = c === void 0 ? 0 : c, d = r.gapPosition, g = r.trailColor, p = r.strokeLinecap, C = r.style, m = r.className, h = r.strokeColor, y = r.percent, b = Oe(r, Le), v = z / 2, I = Ae(n), P = "".concat(I, "-gradient"), $ = v - i / 2, S = Math.PI * 2 * $, O = f > 0 ? 90 + f / 2 : -90, x = S * ((360 - f) / 360), w = G(a) === "object" ? a : {
    count: a,
    gap: 2
  }, u = w.count, F = w.gap, H = ce(y), W = ce(h), A = W.find(function(N) {
    return N && G(N) === "object";
  }), L = A && G(A) === "object", D = L ? "butt" : p, X = ee(S, x, 0, 100, O, f, d, g, D, i), K = De(), k = function() {
    var R = 0;
    return H.map(function(T, M) {
      var Z = W[M] || W[W.length - 1], V = ee(S, x, R, T, O, f, d, Z, D, i);
      return R += T, /* @__PURE__ */ s.createElement(de, {
        key: M,
        color: Z,
        ptg: T,
        radius: $,
        prefixCls: o,
        gradientId: P,
        style: V,
        strokeLinecap: D,
        strokeWidth: i,
        gapDegree: f,
        ref: function(J) {
          K[M] = J;
        },
        size: z
      });
    }).reverse();
  }, E = function() {
    var R = Math.round(u * (H[0] / 100)), T = 100 / u, M = 0;
    return new Array(u).fill(null).map(function(Z, V) {
      var U = V <= R - 1 ? W[0] : g, J = U && G(U) === "object" ? "url(#".concat(P, ")") : void 0, re = ee(S, x, M, T, O, f, d, U, "butt", i, F);
      return M += (x - re.strokeDashoffset + F) * 100 / x, /* @__PURE__ */ s.createElement("circle", {
        key: V,
        className: "".concat(o, "-circle-path"),
        r: $,
        cx: v,
        cy: v,
        stroke: J,
        strokeWidth: i,
        opacity: 1,
        style: re,
        ref: function(ge) {
          K[V] = ge;
        }
      });
    });
  };
  return /* @__PURE__ */ s.createElement("svg", Ne({
    className: B("".concat(o, "-circle"), m),
    viewBox: "0 0 ".concat(z, " ").concat(z),
    style: C,
    id: n,
    role: "presentation"
  }, b), !u && /* @__PURE__ */ s.createElement("circle", {
    className: "".concat(o, "-circle-trail"),
    r: $,
    cx: v,
    cy: v,
    stroke: g,
    strokeLinecap: D,
    strokeWidth: l || i,
    style: X
  }), u ? E() : k());
};
_.env.NODE_ENV !== "production" && (ue.displayName = "Circle");
function j(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function q(e) {
  let {
    success: t,
    successPercent: r
  } = e, n = r;
  return t && "progress" in t && (n = t.progress), t && "percent" in t && (n = t.percent), n;
}
const Te = (e) => {
  let {
    percent: t,
    success: r,
    successPercent: n
  } = e;
  const o = j(q({
    success: r,
    successPercent: n
  }));
  return [o, j(j(t) - o)];
}, Re = (e) => {
  let {
    success: t = {},
    strokeColor: r
  } = e;
  const {
    strokeColor: n
  } = t;
  return [n || te.green, r || null];
}, Y = (e, t, r) => {
  var n, o, a, i;
  let l = -1, c = -1;
  if (t === "step") {
    const f = r.steps, d = r.strokeWidth;
    typeof e == "string" || typeof e > "u" ? (l = e === "small" ? 2 : 14, c = d ?? 8) : typeof e == "number" ? [l, c] = [e, e] : [l = 14, c = 8] = Array.isArray(e) ? e : [e.width, e.height], l *= f;
  } else if (t === "line") {
    const f = r == null ? void 0 : r.strokeWidth;
    typeof e == "string" || typeof e > "u" ? c = f || (e === "small" ? 6 : 8) : typeof e == "number" ? [l, c] = [e, e] : [l = -1, c = 8] = Array.isArray(e) ? e : [e.width, e.height];
  } else (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [l, c] = e === "small" ? [60, 60] : [120, 120] : typeof e == "number" ? [l, c] = [e, e] : Array.isArray(e) && (l = (o = (n = e[0]) !== null && n !== void 0 ? n : e[1]) !== null && o !== void 0 ? o : 120, c = (i = (a = e[0]) !== null && a !== void 0 ? a : e[1]) !== null && i !== void 0 ? i : 120));
  return [l, c];
}, Me = 3, Be = (e) => Me / e * 100, Fe = (e) => {
  const {
    prefixCls: t,
    trailColor: r = null,
    strokeLinecap: n = "round",
    gapPosition: o,
    gapDegree: a,
    width: i = 120,
    type: l,
    children: c,
    success: f,
    size: d = i,
    steps: g
  } = e, [p, C] = Y(d, "circle");
  let {
    strokeWidth: m
  } = e;
  m === void 0 && (m = Math.max(Be(p), 6));
  const h = {
    width: p,
    height: C,
    fontSize: p * 0.15 + 6
  }, y = s.useMemo(() => {
    if (a || a === 0)
      return a;
    if (l === "dashboard")
      return 75;
  }, [a, l]), b = Te(e), v = o || l === "dashboard" && "bottom" || void 0, I = Object.prototype.toString.call(e.strokeColor) === "[object Object]", P = Re({
    success: f,
    strokeColor: e.strokeColor
  }), $ = B(`${t}-inner`, {
    [`${t}-circle-gradient`]: I
  }), S = /* @__PURE__ */ s.createElement(ue, {
    steps: g,
    percent: g ? b[1] : b,
    strokeWidth: m,
    trailWidth: m,
    strokeColor: g ? P[1] : P,
    strokeLinecap: n,
    trailColor: r,
    prefixCls: t,
    gapDegree: y,
    gapPosition: v
  }), O = p <= 20, x = /* @__PURE__ */ s.createElement("div", {
    className: $,
    style: h
  }, S, !O && c);
  return O ? /* @__PURE__ */ s.createElement(Ie, {
    title: c
  }, x) : x;
}, Q = "--progress-line-stroke-color", fe = "--progress-percent", ae = (e) => {
  const t = e ? "100%" : "-100%";
  return new be(`antProgress${e ? "RTL" : "LTR"}Active`, {
    "0%": {
      transform: `translateX(${t}) scaleX(0)`,
      opacity: 0.1
    },
    "20%": {
      transform: `translateX(${t}) scaleX(0)`,
      opacity: 0.5
    },
    to: {
      transform: "translateX(0) scaleX(1)",
      opacity: 0
    }
  });
}, Xe = (e) => {
  const {
    componentCls: t,
    iconCls: r
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, he(e)), {
      display: "inline-block",
      "&-rtl": {
        direction: "rtl"
      },
      "&-line": {
        position: "relative",
        width: "100%",
        fontSize: e.fontSize
      },
      [`${t}-outer`]: {
        display: "inline-flex",
        alignItems: "center",
        width: "100%"
      },
      [`${t}-inner`]: {
        position: "relative",
        display: "inline-block",
        width: "100%",
        flex: 1,
        overflow: "hidden",
        verticalAlign: "middle",
        backgroundColor: e.remainingColor,
        borderRadius: e.lineBorderRadius
      },
      [`${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.defaultColor
        }
      },
      [`${t}-success-bg, ${t}-bg`]: {
        position: "relative",
        background: e.defaultColor,
        borderRadius: e.lineBorderRadius,
        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
      },
      [`${t}-layout-bottom`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [`${t}-text`]: {
          width: "max-content",
          marginInlineStart: 0,
          marginTop: e.marginXXS
        }
      },
      [`${t}-bg`]: {
        overflow: "hidden",
        "&::after": {
          content: '""',
          background: {
            _multi_value_: !0,
            value: ["inherit", `var(${Q})`]
          },
          height: "100%",
          width: `calc(1 / var(${fe}) * 100%)`,
          display: "block"
        },
        [`&${t}-bg-inner`]: {
          minWidth: "max-content",
          "&::after": {
            content: "none"
          },
          [`${t}-text-inner`]: {
            color: e.colorWhite,
            [`&${t}-text-bright`]: {
              color: "rgba(0, 0, 0, 0.45)"
            }
          }
        }
      },
      [`${t}-success-bg`]: {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        backgroundColor: e.colorSuccess
      },
      [`${t}-text`]: {
        display: "inline-block",
        marginInlineStart: e.marginXS,
        color: e.colorText,
        lineHeight: 1,
        width: "2em",
        whiteSpace: "nowrap",
        textAlign: "start",
        verticalAlign: "middle",
        wordBreak: "normal",
        [r]: {
          fontSize: e.fontSize
        },
        [`&${t}-text-outer`]: {
          width: "max-content"
        },
        [`&${t}-text-outer${t}-text-start`]: {
          width: "max-content",
          marginInlineStart: 0,
          marginInlineEnd: e.marginXS
        }
      },
      [`${t}-text-inner`]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginInlineStart: 0,
        padding: `0 ${Ce(e.paddingXXS)}`,
        [`&${t}-text-start`]: {
          justifyContent: "start"
        },
        [`&${t}-text-end`]: {
          justifyContent: "end"
        }
      },
      [`&${t}-status-active`]: {
        [`${t}-bg::before`]: {
          position: "absolute",
          inset: 0,
          backgroundColor: e.colorBgContainer,
          borderRadius: e.lineBorderRadius,
          opacity: 0,
          animationName: ae(),
          animationDuration: e.progressActiveMotionDuration,
          animationTimingFunction: e.motionEaseOutQuint,
          animationIterationCount: "infinite",
          content: '""'
        }
      },
      [`&${t}-rtl${t}-status-active`]: {
        [`${t}-bg::before`]: {
          animationName: ae(!0)
        }
      },
      [`&${t}-status-exception`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorError
        },
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorError
        }
      },
      [`&${t}-status-success`]: {
        [`${t}-bg`]: {
          backgroundColor: e.colorSuccess
        },
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      },
      [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
        [`${t}-circle-path`]: {
          stroke: e.colorSuccess
        }
      }
    })
  };
}, Ve = (e) => {
  const {
    componentCls: t,
    iconCls: r
  } = e;
  return {
    [t]: {
      [`${t}-circle-trail`]: {
        stroke: e.remainingColor
      },
      [`&${t}-circle ${t}-inner`]: {
        position: "relative",
        lineHeight: 1,
        backgroundColor: "transparent"
      },
      [`&${t}-circle ${t}-text`]: {
        position: "absolute",
        insetBlockStart: "50%",
        insetInlineStart: 0,
        width: "100%",
        margin: 0,
        padding: 0,
        color: e.circleTextColor,
        fontSize: e.circleTextFontSize,
        lineHeight: 1,
        whiteSpace: "normal",
        textAlign: "center",
        transform: "translateY(-50%)",
        [r]: {
          fontSize: e.circleIconFontSize
        }
      },
      [`${t}-circle&-status-exception`]: {
        [`${t}-text`]: {
          color: e.colorError
        }
      },
      [`${t}-circle&-status-success`]: {
        [`${t}-text`]: {
          color: e.colorSuccess
        }
      }
    },
    [`${t}-inline-circle`]: {
      lineHeight: 1,
      [`${t}-inner`]: {
        verticalAlign: "bottom"
      }
    }
  };
}, Ge = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`${t}-steps`]: {
        display: "inline-block",
        "&-outer": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        },
        "&-item": {
          flexShrink: 0,
          minWidth: e.progressStepMinWidth,
          marginInlineEnd: e.progressStepMarginInlineEnd,
          backgroundColor: e.remainingColor,
          transition: `all ${e.motionDurationSlow}`,
          "&-active": {
            backgroundColor: e.defaultColor
          }
        }
      }
    }
  };
}, ze = (e) => {
  const {
    componentCls: t,
    iconCls: r
  } = e;
  return {
    [t]: {
      [`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]: {
        fontSize: e.fontSizeSM
      }
    }
  };
}, He = (e) => ({
  circleTextColor: e.colorText,
  defaultColor: e.colorInfo,
  remainingColor: e.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: "1em",
  circleIconFontSize: `${e.fontSize / e.fontSizeSM}em`
}), Ke = ye("Progress", (e) => {
  const t = e.calc(e.marginXXS).div(2).equal(), r = ve(e, {
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [Xe(r), Ve(r), Ge(r), ze(r)];
}, He);
var Ue = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const qe = (e) => {
  let t = [];
  return Object.keys(e).forEach((r) => {
    const n = parseFloat(r.replace(/%/g, ""));
    isNaN(n) || t.push({
      key: n,
      value: e[r]
    });
  }), t = t.sort((r, n) => r.key - n.key), t.map((r) => {
    let {
      key: n,
      value: o
    } = r;
    return `${o} ${n}%`;
  }).join(", ");
}, Qe = (e, t) => {
  const {
    from: r = te.blue,
    to: n = te.blue,
    direction: o = t === "rtl" ? "to left" : "to right"
  } = e, a = Ue(e, ["from", "to", "direction"]);
  if (Object.keys(a).length !== 0) {
    const l = qe(a), c = `linear-gradient(${o}, ${l})`;
    return {
      background: c,
      [Q]: c
    };
  }
  const i = `linear-gradient(${o}, ${r}, ${n})`;
  return {
    background: i,
    [Q]: i
  };
}, Ye = (e) => {
  const {
    prefixCls: t,
    direction: r,
    percent: n,
    size: o,
    strokeWidth: a,
    strokeColor: i,
    strokeLinecap: l = "round",
    children: c,
    trailColor: f = null,
    percentPosition: d,
    success: g
  } = e, {
    align: p,
    type: C
  } = d, m = i && typeof i != "string" ? Qe(i, r) : {
    [Q]: i,
    background: i
  }, h = l === "square" || l === "butt" ? 0 : void 0, y = o ?? [-1, a || (o === "small" ? 6 : 8)], [b, v] = Y(y, "line", {
    strokeWidth: a
  });
  _.env.NODE_ENV !== "production" && le("Progress").deprecated(!("strokeWidth" in e), "strokeWidth", "size");
  const I = {
    backgroundColor: f || void 0,
    borderRadius: h
  }, P = Object.assign(Object.assign({
    width: `${j(n)}%`,
    height: v,
    borderRadius: h
  }, m), {
    [fe]: j(n) / 100
  }), $ = q(e), S = {
    width: `${j($)}%`,
    height: v,
    borderRadius: h,
    backgroundColor: g == null ? void 0 : g.strokeColor
  }, O = {
    width: b < 0 ? "100%" : b
  }, x = /* @__PURE__ */ s.createElement("div", {
    className: `${t}-inner`,
    style: I
  }, /* @__PURE__ */ s.createElement("div", {
    className: B(`${t}-bg`, `${t}-bg-${C}`),
    style: P
  }, C === "inner" && c), $ !== void 0 && /* @__PURE__ */ s.createElement("div", {
    className: `${t}-success-bg`,
    style: S
  })), w = C === "outer" && p === "start", u = C === "outer" && p === "end";
  return C === "outer" && p === "center" ? /* @__PURE__ */ s.createElement("div", {
    className: `${t}-layout-bottom`
  }, x, c) : /* @__PURE__ */ s.createElement("div", {
    className: `${t}-outer`,
    style: O
  }, w && c, x, u && c);
}, Ze = (e) => {
  const {
    size: t,
    steps: r,
    percent: n = 0,
    strokeWidth: o = 8,
    strokeColor: a,
    trailColor: i = null,
    prefixCls: l,
    children: c
  } = e, f = Math.round(r * (n / 100)), g = t ?? [t === "small" ? 2 : 14, o], [p, C] = Y(g, "step", {
    steps: r,
    strokeWidth: o
  }), m = p / r, h = new Array(r);
  for (let y = 0; y < r; y++) {
    const b = Array.isArray(a) ? a[y] : a;
    h[y] = /* @__PURE__ */ s.createElement("div", {
      key: y,
      className: B(`${l}-steps-item`, {
        [`${l}-steps-item-active`]: y <= f - 1
      }),
      style: {
        backgroundColor: y <= f - 1 ? b : i,
        width: m,
        height: C
      }
    });
  }
  return /* @__PURE__ */ s.createElement("div", {
    className: `${l}-steps-outer`
  }, h, c);
};
var Je = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const et = ["normal", "exception", "active", "success"], tt = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    rootClassName: o,
    steps: a,
    strokeColor: i,
    percent: l = 0,
    size: c = "default",
    showInfo: f = !0,
    type: d = "line",
    status: g,
    format: p,
    style: C,
    percentPosition: m = {}
  } = e, h = Je(e, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style", "percentPosition"]), {
    align: y = "end",
    type: b = "outer"
  } = m, v = Array.isArray(i) ? i[0] : i, I = typeof i == "string" || Array.isArray(i) ? i : void 0, P = s.useMemo(() => {
    if (v) {
      const k = typeof v == "string" ? v : Object.values(v)[0];
      return new $e(k).isLight();
    }
    return !1;
  }, [i]), $ = s.useMemo(() => {
    var k, E;
    const N = q(e);
    return parseInt(N !== void 0 ? (k = N ?? 0) === null || k === void 0 ? void 0 : k.toString() : (E = l ?? 0) === null || E === void 0 ? void 0 : E.toString(), 10);
  }, [l, e.success, e.successPercent]), S = s.useMemo(() => !et.includes(g) && $ >= 100 ? "success" : g || "normal", [g, $]), {
    getPrefixCls: O,
    direction: x,
    progress: w
  } = s.useContext(Se), u = O("progress", r), [F, H, W] = Ke(u), A = d === "line", L = A && !a, D = s.useMemo(() => {
    if (!f)
      return null;
    const k = q(e);
    let E;
    const N = p || ((T) => `${T}%`), R = A && P && b === "inner";
    return b === "inner" || p || S !== "exception" && S !== "success" ? E = N(j(l), j(k)) : S === "exception" ? E = A ? /* @__PURE__ */ s.createElement(ke, null) : /* @__PURE__ */ s.createElement(xe, null) : S === "success" && (E = A ? /* @__PURE__ */ s.createElement(Ee, null) : /* @__PURE__ */ s.createElement(we, null)), /* @__PURE__ */ s.createElement("span", {
      className: B(`${u}-text`, {
        [`${u}-text-bright`]: R,
        [`${u}-text-${y}`]: L,
        [`${u}-text-${b}`]: L
      }),
      title: typeof E == "string" ? E : void 0
    }, E);
  }, [f, l, $, S, d, u, p]);
  if (_.env.NODE_ENV !== "production") {
    const k = le("Progress");
    k.deprecated(!("successPercent" in e), "successPercent", "success.percent"), k.deprecated(!("width" in e), "width", "size"), (d === "circle" || d === "dashboard") && (Array.isArray(c) ? _.env.NODE_ENV !== "production" && k(!1, "usage", 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.') : typeof c == "object" && _.env.NODE_ENV !== "production" && k(!1, "usage", 'Type "circle" and "dashboard" do not accept object as `size`, please use number or preset size instead.')), e.success && "progress" in e.success && k.deprecated(!1, "success.progress", "success.percent");
  }
  let X;
  d === "line" ? X = a ? /* @__PURE__ */ s.createElement(Ze, Object.assign({}, e, {
    strokeColor: I,
    prefixCls: u,
    steps: typeof a == "object" ? a.count : a
  }), D) : /* @__PURE__ */ s.createElement(Ye, Object.assign({}, e, {
    strokeColor: v,
    prefixCls: u,
    direction: x,
    percentPosition: {
      align: y,
      type: b
    }
  }), D) : (d === "circle" || d === "dashboard") && (X = /* @__PURE__ */ s.createElement(Fe, Object.assign({}, e, {
    strokeColor: v,
    prefixCls: u,
    progressStatus: S
  }), D));
  const K = B(u, `${u}-status-${S}`, {
    [`${u}-${d === "dashboard" && "circle" || d}`]: d !== "line",
    [`${u}-inline-circle`]: d === "circle" && Y(c, "circle")[0] <= 20,
    [`${u}-line`]: L,
    [`${u}-line-align-${y}`]: L,
    [`${u}-line-position-${b}`]: L,
    [`${u}-steps`]: a,
    [`${u}-show-info`]: f,
    [`${u}-${c}`]: typeof c == "string",
    [`${u}-rtl`]: x === "rtl"
  }, w == null ? void 0 : w.className, n, o, H, W);
  return F(/* @__PURE__ */ s.createElement("div", Object.assign({
    ref: t,
    style: Object.assign(Object.assign({}, w == null ? void 0 : w.style), C),
    className: K,
    role: "progressbar",
    "aria-valuenow": $,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, Pe(h, ["trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"])), X));
});
_.env.NODE_ENV !== "production" && (tt.displayName = "Progress");
export {
  tt as P
};
