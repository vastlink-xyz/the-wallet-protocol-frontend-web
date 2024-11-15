import { j as m } from "./vendor-radix-CNSo_uHA.js";
import { B as at } from "./index-CDE0BOFM.js";
import { T as st, a as it, b as Se, c as ae, d as lt, e as se } from "./table-Dhhux1DB.js";
import { a as ct, f as ft, g as ut, h as dt, m as ke, c as pt, i as mt, S as gt, R as ht } from "./main-BjushY0K.js";
import { p as T, r as s } from "./vendor-react-U4DfHahV.js";
import { B as bt } from "./vendor-utils-BclDYac0.js";
import { _ as Ce, R as vt } from "./vendor-ui-utils-BJ7JrnFc.js";
import { I as yt, K as D, v as Ct, b as M, U as xt, a2 as wt, A as ce, z as Re, x as xe, Z as Le, a1 as $t, W as je, e as we, u as Ot, j as $e, t as St, a6 as kt, k as jt, a5 as Nt, h as Pt, a8 as Et, a9 as It, q as _t, aa as ve, a0 as Tt, G as At, O as Dt, Q as Rt, P as Lt } from "./roundedArrow-B8nY1w-V.js";
import { k as ze, _ as ye, e as ie } from "./vendor-web3-Bd_bcm0c.js";
const de = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function zt(e, t) {
  return de.reduce((o, r) => {
    const n = e[`${r}1`], i = e[`${r}3`], a = e[`${r}6`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, o), t(r, {
      lightColor: n,
      lightBorderColor: i,
      darkColor: a,
      textColor: l
    }));
  }, {});
}
var Vt = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Bt = function(t, o) {
  return /* @__PURE__ */ s.createElement(yt, Ce({}, t, {
    ref: o,
    icon: Vt
  }));
}, Ve = /* @__PURE__ */ s.forwardRef(Bt);
T.env.NODE_ENV !== "production" && (Ve.displayName = "CheckCircleFilled");
const Wt = (e, t, o) => o !== void 0 ? o : `${e}-${t}`, Mt = new D("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Xt = new D("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Ne = new D("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Pe = new D("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Ft = new D("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Ht = new D("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Kt = new D("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Zt = new D("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Yt = new D("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Ut = new D("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Gt = new D("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), qt = new D("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Qt = {
  zoom: {
    inKeyframes: Mt,
    outKeyframes: Xt
  },
  "zoom-big": {
    inKeyframes: Ne,
    outKeyframes: Pe
  },
  "zoom-big-fast": {
    inKeyframes: Ne,
    outKeyframes: Pe
  },
  "zoom-left": {
    inKeyframes: Kt,
    outKeyframes: Zt
  },
  "zoom-right": {
    inKeyframes: Yt,
    outKeyframes: Ut
  },
  "zoom-up": {
    inKeyframes: Ft,
    outKeyframes: Ht
  },
  "zoom-down": {
    inKeyframes: Gt,
    outKeyframes: qt
  }
}, Jt = (e, t) => {
  const {
    antCls: o
  } = e, r = `${o}-${t}`, {
    inKeyframes: n,
    outKeyframes: i
  } = Qt[t];
  return [Ct(r, n, i, e.motionDurationFast), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
};
function Be(e) {
  var t = e.children, o = e.prefixCls, r = e.id, n = e.overlayInnerStyle, i = e.className, a = e.style;
  return /* @__PURE__ */ s.createElement("div", {
    className: M("".concat(o, "-content"), i),
    style: a
  }, /* @__PURE__ */ s.createElement("div", {
    className: "".concat(o, "-inner"),
    id: r,
    role: "tooltip",
    style: n
  }, typeof t == "function" ? t() : t));
}
var re = {
  shiftX: 64,
  adjustY: 1
}, oe = {
  adjustX: 1,
  shiftY: !0
}, V = [0, 0], er = {
  left: {
    points: ["cr", "cl"],
    overflow: oe,
    offset: [-4, 0],
    targetOffset: V
  },
  right: {
    points: ["cl", "cr"],
    overflow: oe,
    offset: [4, 0],
    targetOffset: V
  },
  top: {
    points: ["bc", "tc"],
    overflow: re,
    offset: [0, -4],
    targetOffset: V
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: re,
    offset: [0, 4],
    targetOffset: V
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: re,
    offset: [0, -4],
    targetOffset: V
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: oe,
    offset: [-4, 0],
    targetOffset: V
  },
  topRight: {
    points: ["br", "tr"],
    overflow: re,
    offset: [0, -4],
    targetOffset: V
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: oe,
    offset: [4, 0],
    targetOffset: V
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: re,
    offset: [0, 4],
    targetOffset: V
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: oe,
    offset: [4, 0],
    targetOffset: V
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: re,
    offset: [0, 4],
    targetOffset: V
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: oe,
    offset: [-4, 0],
    targetOffset: V
  }
}, tr = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], rr = function(t, o) {
  var r = t.overlayClassName, n = t.trigger, i = n === void 0 ? ["hover"] : n, a = t.mouseEnterDelay, l = a === void 0 ? 0 : a, c = t.mouseLeaveDelay, d = c === void 0 ? 0.1 : c, f = t.overlayStyle, u = t.prefixCls, p = u === void 0 ? "rc-tooltip" : u, v = t.children, h = t.onVisibleChange, b = t.afterVisibleChange, y = t.transitionName, w = t.animation, C = t.motion, I = t.placement, N = I === void 0 ? "right" : I, x = t.align, $ = x === void 0 ? {} : x, P = t.destroyTooltipOnHide, S = P === void 0 ? !1 : P, k = t.defaultVisible, g = t.getTooltipContainer, X = t.overlayInnerStyle;
  t.arrowContent;
  var Z = t.overlay, B = t.id, _ = t.showArrow, W = _ === void 0 ? !0 : _, R = ze(t, tr), L = s.useRef(null);
  s.useImperativeHandle(o, function() {
    return L.current;
  });
  var H = ye({}, R);
  "visible" in t && (H.popupVisible = t.visible);
  var O = function() {
    return /* @__PURE__ */ s.createElement(Be, {
      key: "content",
      prefixCls: p,
      id: B,
      overlayInnerStyle: X
    }, Z);
  };
  return /* @__PURE__ */ s.createElement(xt, Ce({
    popupClassName: r,
    prefixCls: p,
    popup: O,
    action: i,
    builtinPlacements: er,
    popupPlacement: N,
    ref: L,
    popupAlign: $,
    getPopupContainer: g,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: b,
    popupTransitionName: y,
    popupAnimation: w,
    popupMotion: C,
    defaultPopupVisible: k,
    autoDestroy: S,
    mouseLeaveDelay: d,
    popupStyle: f,
    mouseEnterDelay: l,
    arrow: W
  }, H), v);
};
const or = /* @__PURE__ */ s.forwardRef(rr), We = 8;
function Me(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: o
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: o ? We : r
  };
}
function ue(e, t) {
  return e ? t : {};
}
function nr(e, t, o) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: n,
    arrowOffsetVertical: i,
    arrowOffsetHorizontal: a
  } = e, {
    arrowDistance: l = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, wt(e, t, n)), {
        "&:before": {
          background: t
        }
      })]
    }, ue(!!c.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: l,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": a,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: a
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ce(a)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: a
          }
        }
      }
    })), ue(!!c.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: l,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": a,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: a
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ce(a)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: a
          }
        }
      }
    })), ue(!!c.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: i
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: i
      }
    })), ue(!!c.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: i
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: i
      }
    }))
  };
}
function ar(e, t, o, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const n = r && typeof r == "object" ? r : {}, i = {};
  switch (e) {
    case "top":
    case "bottom":
      i.shiftX = t.arrowOffsetHorizontal * 2 + o, i.shiftY = !0, i.adjustY = !0;
      break;
    case "left":
    case "right":
      i.shiftY = t.arrowOffsetVertical * 2 + o, i.shiftX = !0, i.adjustX = !0;
      break;
  }
  const a = Object.assign(Object.assign({}, i), n);
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
}
const Ee = {
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
}, sr = {
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
}, ir = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function lr(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: o,
    arrowPointAtCenter: r,
    offset: n,
    borderRadius: i,
    visibleFirst: a
  } = e, l = t / 2, c = {};
  return Object.keys(Ee).forEach((d) => {
    const f = r && sr[d] || Ee[d], u = Object.assign(Object.assign({}, f), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[d] = u, ir.has(d) && (u.autoArrow = !1), d) {
      case "top":
      case "topLeft":
      case "topRight":
        u.offset[1] = -l - n;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        u.offset[1] = l + n;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        u.offset[0] = -l - n;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        u.offset[0] = l + n;
        break;
    }
    const p = Me({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (r)
      switch (d) {
        case "topLeft":
        case "bottomLeft":
          u.offset[0] = -p.arrowOffsetHorizontal - l;
          break;
        case "topRight":
        case "bottomRight":
          u.offset[0] = p.arrowOffsetHorizontal + l;
          break;
        case "leftTop":
        case "rightTop":
          u.offset[1] = -p.arrowOffsetHorizontal * 2 + l;
          break;
        case "leftBottom":
        case "rightBottom":
          u.offset[1] = p.arrowOffsetHorizontal * 2 - l;
          break;
      }
    u.overflow = ar(d, p, t, o), a && (u.htmlRegion = "visibleFirst");
  }), c;
}
const cr = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: o,
    tooltipColor: r,
    tooltipBg: n,
    tooltipBorderRadius: i,
    zIndexPopup: a,
    controlHeight: l,
    boxShadowSecondary: c,
    paddingSM: d,
    paddingXS: f
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Le(e)), {
        position: "absolute",
        zIndex: a,
        display: "block",
        width: "max-content",
        maxWidth: o,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": n,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: "1em",
          minHeight: l,
          padding: `${ce(e.calc(d).div(2).equal())} ${ce(f)}`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: n,
          borderRadius: i,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(i, We)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), zt(e, (u, p) => {
        let {
          darkColor: v
        } = p;
        return {
          [`&${t}-${u}`]: {
            [`${t}-inner`]: {
              backgroundColor: v
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": v
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
    nr(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, fr = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Me({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), $t(xe(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Xe = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Re("Tooltip", (r) => {
    const {
      borderRadius: n,
      colorTextLightSolid: i,
      colorBgSpotlight: a
    } = r, l = xe(r, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: i,
      tooltipBorderRadius: n,
      tooltipBg: a
    });
    return [cr(l), Jt(r, "zoom-big-fast")];
  }, fr, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, ur = de.map((e) => `${e}-inverse`);
function dr(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(je(ur), je(de)).includes(e) : de.includes(e);
}
function Fe(e, t) {
  const o = dr(t), r = M({
    [`${e}-${t}`]: t && o
  }), n = {}, i = {};
  return t && !o && (n.background = t, i["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: n,
    arrowStyle: i
  };
}
const pr = (e) => {
  const {
    prefixCls: t,
    className: o,
    placement: r = "top",
    title: n,
    color: i,
    overlayInnerStyle: a
  } = e, {
    getPrefixCls: l
  } = s.useContext(we), c = l("tooltip", t), [d, f, u] = Xe(c), p = Fe(c, i), v = p.arrowStyle, h = Object.assign(Object.assign({}, a), p.overlayStyle), b = M(f, u, c, `${c}-pure`, `${c}-placement-${r}`, o, p.className);
  return d(/* @__PURE__ */ s.createElement("div", {
    className: b,
    style: v
  }, /* @__PURE__ */ s.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ s.createElement(Be, Object.assign({}, e, {
    className: f,
    prefixCls: c,
    overlayInnerStyle: h
  }), n)));
};
var mr = function(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
    t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
  return o;
};
const gr = /* @__PURE__ */ s.forwardRef((e, t) => {
  var o, r;
  const {
    prefixCls: n,
    openClassName: i,
    getTooltipContainer: a,
    overlayClassName: l,
    color: c,
    overlayInnerStyle: d,
    children: f,
    afterOpenChange: u,
    afterVisibleChange: p,
    destroyTooltipOnHide: v,
    arrow: h = !0,
    title: b,
    overlay: y,
    builtinPlacements: w,
    arrowPointAtCenter: C = !1,
    autoAdjustOverflow: I = !0
  } = e, N = !!h, [, x] = Ot(), {
    getPopupContainer: $,
    getPrefixCls: P,
    direction: S
  } = s.useContext(we), k = $e("Tooltip"), g = s.useRef(null), X = () => {
    var j;
    (j = g.current) === null || j === void 0 || j.forceAlign();
  };
  s.useImperativeHandle(t, () => {
    var j;
    return {
      forceAlign: X,
      forcePopupAlign: () => {
        k.deprecated(!1, "forcePopupAlign", "forceAlign"), X();
      },
      nativeElement: (j = g.current) === null || j === void 0 ? void 0 : j.nativeElement
    };
  }), T.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((j) => {
    let [F, G] = j;
    k.deprecated(!(F in e), F, G);
  }), T.env.NODE_ENV !== "production" && k(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), T.env.NODE_ENV !== "production" && k(!h || typeof h == "boolean" || !("arrowPointAtCenter" in h), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [Z, B] = St(!1, {
    value: (o = e.open) !== null && o !== void 0 ? o : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), _ = !b && !y && b !== 0, W = (j) => {
    var F, G;
    B(_ ? !1 : j), _ || ((F = e.onOpenChange) === null || F === void 0 || F.call(e, j), (G = e.onVisibleChange) === null || G === void 0 || G.call(e, j));
  }, R = s.useMemo(() => {
    var j, F;
    let G = C;
    return typeof h == "object" && (G = (F = (j = h.pointAtCenter) !== null && j !== void 0 ? j : h.arrowPointAtCenter) !== null && F !== void 0 ? F : C), w || lr({
      arrowPointAtCenter: G,
      autoAdjustOverflow: I,
      arrowWidth: N ? x.sizePopupArrow : 0,
      borderRadius: x.borderRadius,
      offset: x.marginXXS,
      visibleFirst: !0
    });
  }, [C, h, w, x]), L = s.useMemo(() => b === 0 ? b : y || b || "", [y, b]), H = /* @__PURE__ */ s.createElement(kt, {
    space: !0
  }, typeof L == "function" ? L() : L), {
    getPopupContainer: O,
    placement: E = "top",
    mouseEnterDelay: A = 0.1,
    mouseLeaveDelay: Y = 0.1,
    overlayStyle: K,
    rootClassName: U
  } = e, Q = mr(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), z = P("tooltip", n), J = P(), ne = e["data-popover-inject"];
  let ee = Z;
  !("open" in e) && !("visible" in e) && _ && (ee = !1);
  const fe = /* @__PURE__ */ s.isValidElement(f) && !jt(f) ? f : /* @__PURE__ */ s.createElement("span", null, f), te = fe.props, Ue = !te.className || typeof te.className == "string" ? M(te.className, i || `${z}-open`) : te.className, [Ge, qe, Qe] = Xe(z, !ne), he = Fe(z, c), Je = he.arrowStyle, et = Object.assign(Object.assign({}, d), he.overlayStyle), tt = M(l, {
    [`${z}-rtl`]: S === "rtl"
  }, he.className, U, qe, Qe), [rt, ot] = Nt("Tooltip", Q.zIndex), nt = /* @__PURE__ */ s.createElement(or, Object.assign({}, Q, {
    zIndex: rt,
    showArrow: N,
    placement: E,
    mouseEnterDelay: A,
    mouseLeaveDelay: Y,
    prefixCls: z,
    overlayClassName: tt,
    overlayStyle: Object.assign(Object.assign({}, Je), K),
    getTooltipContainer: O || a || $,
    ref: g,
    builtinPlacements: R,
    overlay: H,
    visible: ee,
    onVisibleChange: W,
    afterVisibleChange: u ?? p,
    overlayInnerStyle: et,
    arrowContent: /* @__PURE__ */ s.createElement("span", {
      className: `${z}-arrow-content`
    }),
    motion: {
      motionName: Wt(J, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!v
  }), ee ? Pt(fe, {
    className: Ue
  }) : fe);
  return Ge(/* @__PURE__ */ s.createElement(Et.Provider, {
    value: ot
  }, nt));
}), Oe = gr;
T.env.NODE_ENV !== "production" && (Oe.displayName = "Tooltip");
Oe._InternalPanelDoNotUseOrYouWillBeFired = pr;
var hr = {
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1,
  gapPosition: "bottom"
}, br = function() {
  var t = s.useRef([]), o = s.useRef(null);
  return s.useEffect(function() {
    var r = Date.now(), n = !1;
    t.current.forEach(function(i) {
      if (i) {
        n = !0;
        var a = i.style;
        a.transitionDuration = ".3s, .3s, .3s, .06s", o.current && r - o.current < 100 && (a.transitionDuration = "0s, 0s");
      }
    }), n && (o.current = Date.now());
  }), t.current;
};
T.env.NODE_ENV;
var Ie = 0, vr = T.env.NODE_ENV !== "test" && It();
function yr() {
  var e;
  return vr ? (e = Ie, Ie += 1) : e = "TEST_OR_SSR", e;
}
const Cr = function(e) {
  var t = s.useState(), o = _t(t, 2), r = o[0], n = o[1];
  return s.useEffect(function() {
    n("rc_progress_".concat(yr()));
  }, []), e || r;
};
var _e = function(t) {
  var o = t.bg, r = t.children;
  return /* @__PURE__ */ s.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: o
    }
  }, r);
};
function Te(e, t) {
  return Object.keys(e).map(function(o) {
    var r = parseFloat(o), n = "".concat(Math.floor(r * t), "%");
    return "".concat(e[o], " ").concat(n);
  });
}
var He = /* @__PURE__ */ s.forwardRef(function(e, t) {
  var o = e.prefixCls, r = e.color, n = e.gradientId, i = e.radius, a = e.style, l = e.ptg, c = e.strokeLinecap, d = e.strokeWidth, f = e.size, u = e.gapDegree, p = r && ie(r) === "object", v = p ? "#FFF" : void 0, h = f / 2, b = /* @__PURE__ */ s.createElement("circle", {
    className: "".concat(o, "-circle-path"),
    r: i,
    cx: h,
    cy: h,
    stroke: v,
    strokeLinecap: c,
    strokeWidth: d,
    opacity: l === 0 ? 0 : 1,
    style: a,
    ref: t
  });
  if (!p)
    return b;
  var y = "".concat(n, "-conic"), w = u ? "".concat(180 + u / 2, "deg") : "0deg", C = Te(r, (360 - u) / 360), I = Te(r, 1), N = "conic-gradient(from ".concat(w, ", ").concat(C.join(", "), ")"), x = "linear-gradient(to ".concat(u ? "bottom" : "top", ", ").concat(I.join(", "), ")");
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("mask", {
    id: y
  }, b), /* @__PURE__ */ s.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: f,
    height: f,
    mask: "url(#".concat(y, ")")
  }, /* @__PURE__ */ s.createElement(_e, {
    bg: x
  }, /* @__PURE__ */ s.createElement(_e, {
    bg: N
  }))));
});
T.env.NODE_ENV !== "production" && (He.displayName = "PtgCircle");
var le = 100, be = function(t, o, r, n, i, a, l, c, d, f) {
  var u = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0, p = r / 100 * 360 * ((360 - a) / 360), v = a === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[l], h = (100 - n) / 100 * o;
  d === "round" && n !== 100 && (h += f / 2, h >= o && (h = o - 0.01));
  var b = le / 2;
  return {
    stroke: typeof c == "string" ? c : void 0,
    strokeDasharray: "".concat(o, "px ").concat(t),
    strokeDashoffset: h + u,
    transform: "rotate(".concat(i + p + v, "deg)"),
    transformOrigin: "".concat(b, "px ").concat(b, "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
    fillOpacity: 0
  };
}, xr = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];
function Ae(e) {
  var t = e ?? [];
  return Array.isArray(t) ? t : [t];
}
var Ke = function(t) {
  var o = ye(ye({}, hr), t), r = o.id, n = o.prefixCls, i = o.steps, a = o.strokeWidth, l = o.trailWidth, c = o.gapDegree, d = c === void 0 ? 0 : c, f = o.gapPosition, u = o.trailColor, p = o.strokeLinecap, v = o.style, h = o.className, b = o.strokeColor, y = o.percent, w = ze(o, xr), C = le / 2, I = Cr(r), N = "".concat(I, "-gradient"), x = C - a / 2, $ = Math.PI * 2 * x, P = d > 0 ? 90 + d / 2 : -90, S = $ * ((360 - d) / 360), k = ie(i) === "object" ? i : {
    count: i,
    gap: 2
  }, g = k.count, X = k.gap, Z = Ae(y), B = Ae(b), _ = B.find(function(A) {
    return A && ie(A) === "object";
  }), W = _ && ie(_) === "object", R = W ? "butt" : p, L = be($, S, 0, 100, P, d, f, u, R, a), H = br(), O = function() {
    var Y = 0;
    return Z.map(function(K, U) {
      var Q = B[U] || B[B.length - 1], z = be($, S, Y, K, P, d, f, Q, R, a);
      return Y += K, /* @__PURE__ */ s.createElement(He, {
        key: U,
        color: Q,
        ptg: K,
        radius: x,
        prefixCls: n,
        gradientId: N,
        style: z,
        strokeLinecap: R,
        strokeWidth: a,
        gapDegree: d,
        ref: function(ne) {
          H[U] = ne;
        },
        size: le
      });
    }).reverse();
  }, E = function() {
    var Y = Math.round(g * (Z[0] / 100)), K = 100 / g, U = 0;
    return new Array(g).fill(null).map(function(Q, z) {
      var J = z <= Y - 1 ? B[0] : u, ne = J && ie(J) === "object" ? "url(#".concat(N, ")") : void 0, ee = be($, S, U, K, P, d, f, J, "butt", a, X);
      return U += (S - ee.strokeDashoffset + X) * 100 / S, /* @__PURE__ */ s.createElement("circle", {
        key: z,
        className: "".concat(n, "-circle-path"),
        r: x,
        cx: C,
        cy: C,
        stroke: ne,
        strokeWidth: a,
        opacity: 1,
        style: ee,
        ref: function(te) {
          H[z] = te;
        }
      });
    });
  };
  return /* @__PURE__ */ s.createElement("svg", Ce({
    className: M("".concat(n, "-circle"), h),
    viewBox: "0 0 ".concat(le, " ").concat(le),
    style: v,
    id: r,
    role: "presentation"
  }, w), !g && /* @__PURE__ */ s.createElement("circle", {
    className: "".concat(n, "-circle-trail"),
    r: x,
    cx: C,
    cy: C,
    stroke: u,
    strokeLinecap: R,
    strokeWidth: l || a,
    style: L
  }), g ? E() : O());
};
T.env.NODE_ENV !== "production" && (Ke.displayName = "Circle");
function q(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function pe(e) {
  let {
    success: t,
    successPercent: o
  } = e, r = o;
  return t && "progress" in t && (r = t.progress), t && "percent" in t && (r = t.percent), r;
}
const wr = (e) => {
  let {
    percent: t,
    success: o,
    successPercent: r
  } = e;
  const n = q(pe({
    success: o,
    successPercent: r
  }));
  return [n, q(q(t) - n)];
}, $r = (e) => {
  let {
    success: t = {},
    strokeColor: o
  } = e;
  const {
    strokeColor: r
  } = t;
  return [r || ve.green, o || null];
}, ge = (e, t, o) => {
  var r, n, i, a;
  let l = -1, c = -1;
  if (t === "step") {
    const d = o.steps, f = o.strokeWidth;
    typeof e == "string" || typeof e > "u" ? (l = e === "small" ? 2 : 14, c = f ?? 8) : typeof e == "number" ? [l, c] = [e, e] : [l = 14, c = 8] = Array.isArray(e) ? e : [e.width, e.height], l *= d;
  } else if (t === "line") {
    const d = o == null ? void 0 : o.strokeWidth;
    typeof e == "string" || typeof e > "u" ? c = d || (e === "small" ? 6 : 8) : typeof e == "number" ? [l, c] = [e, e] : [l = -1, c = 8] = Array.isArray(e) ? e : [e.width, e.height];
  } else (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [l, c] = e === "small" ? [60, 60] : [120, 120] : typeof e == "number" ? [l, c] = [e, e] : Array.isArray(e) && (l = (n = (r = e[0]) !== null && r !== void 0 ? r : e[1]) !== null && n !== void 0 ? n : 120, c = (a = (i = e[0]) !== null && i !== void 0 ? i : e[1]) !== null && a !== void 0 ? a : 120));
  return [l, c];
}, Or = 3, Sr = (e) => Or / e * 100, kr = (e) => {
  const {
    prefixCls: t,
    trailColor: o = null,
    strokeLinecap: r = "round",
    gapPosition: n,
    gapDegree: i,
    width: a = 120,
    type: l,
    children: c,
    success: d,
    size: f = a,
    steps: u
  } = e, [p, v] = ge(f, "circle");
  let {
    strokeWidth: h
  } = e;
  h === void 0 && (h = Math.max(Sr(p), 6));
  const b = {
    width: p,
    height: v,
    fontSize: p * 0.15 + 6
  }, y = s.useMemo(() => {
    if (i || i === 0)
      return i;
    if (l === "dashboard")
      return 75;
  }, [i, l]), w = wr(e), C = n || l === "dashboard" && "bottom" || void 0, I = Object.prototype.toString.call(e.strokeColor) === "[object Object]", N = $r({
    success: d,
    strokeColor: e.strokeColor
  }), x = M(`${t}-inner`, {
    [`${t}-circle-gradient`]: I
  }), $ = /* @__PURE__ */ s.createElement(Ke, {
    steps: u,
    percent: u ? w[1] : w,
    strokeWidth: h,
    trailWidth: h,
    strokeColor: u ? N[1] : N,
    strokeLinecap: r,
    trailColor: o,
    prefixCls: t,
    gapDegree: y,
    gapPosition: C
  }), P = p <= 20, S = /* @__PURE__ */ s.createElement("div", {
    className: x,
    style: b
  }, $, !P && c);
  return P ? /* @__PURE__ */ s.createElement(Oe, {
    title: c
  }, S) : S;
}, me = "--progress-line-stroke-color", Ze = "--progress-percent", De = (e) => {
  const t = e ? "100%" : "-100%";
  return new D(`antProgress${e ? "RTL" : "LTR"}Active`, {
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
}, jr = (e) => {
  const {
    componentCls: t,
    iconCls: o
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Le(e)), {
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
            value: ["inherit", `var(${me})`]
          },
          height: "100%",
          width: `calc(1 / var(${Ze}) * 100%)`,
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
        [o]: {
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
        padding: `0 ${ce(e.paddingXXS)}`,
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
          animationName: De(),
          animationDuration: e.progressActiveMotionDuration,
          animationTimingFunction: e.motionEaseOutQuint,
          animationIterationCount: "infinite",
          content: '""'
        }
      },
      [`&${t}-rtl${t}-status-active`]: {
        [`${t}-bg::before`]: {
          animationName: De(!0)
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
}, Nr = (e) => {
  const {
    componentCls: t,
    iconCls: o
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
        [o]: {
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
}, Pr = (e) => {
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
}, Er = (e) => {
  const {
    componentCls: t,
    iconCls: o
  } = e;
  return {
    [t]: {
      [`${t}-small&-line, ${t}-small&-line ${t}-text ${o}`]: {
        fontSize: e.fontSizeSM
      }
    }
  };
}, Ir = (e) => ({
  circleTextColor: e.colorText,
  defaultColor: e.colorInfo,
  remainingColor: e.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: "1em",
  circleIconFontSize: `${e.fontSize / e.fontSizeSM}em`
}), _r = Re("Progress", (e) => {
  const t = e.calc(e.marginXXS).div(2).equal(), o = xe(e, {
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [jr(o), Nr(o), Pr(o), Er(o)];
}, Ir);
var Tr = function(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
    t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
  return o;
};
const Ar = (e) => {
  let t = [];
  return Object.keys(e).forEach((o) => {
    const r = parseFloat(o.replace(/%/g, ""));
    isNaN(r) || t.push({
      key: r,
      value: e[o]
    });
  }), t = t.sort((o, r) => o.key - r.key), t.map((o) => {
    let {
      key: r,
      value: n
    } = o;
    return `${n} ${r}%`;
  }).join(", ");
}, Dr = (e, t) => {
  const {
    from: o = ve.blue,
    to: r = ve.blue,
    direction: n = t === "rtl" ? "to left" : "to right"
  } = e, i = Tr(e, ["from", "to", "direction"]);
  if (Object.keys(i).length !== 0) {
    const l = Ar(i), c = `linear-gradient(${n}, ${l})`;
    return {
      background: c,
      [me]: c
    };
  }
  const a = `linear-gradient(${n}, ${o}, ${r})`;
  return {
    background: a,
    [me]: a
  };
}, Rr = (e) => {
  const {
    prefixCls: t,
    direction: o,
    percent: r,
    size: n,
    strokeWidth: i,
    strokeColor: a,
    strokeLinecap: l = "round",
    children: c,
    trailColor: d = null,
    percentPosition: f,
    success: u
  } = e, {
    align: p,
    type: v
  } = f, h = a && typeof a != "string" ? Dr(a, o) : {
    [me]: a,
    background: a
  }, b = l === "square" || l === "butt" ? 0 : void 0, y = n ?? [-1, i || (n === "small" ? 6 : 8)], [w, C] = ge(y, "line", {
    strokeWidth: i
  });
  T.env.NODE_ENV !== "production" && $e("Progress").deprecated(!("strokeWidth" in e), "strokeWidth", "size");
  const I = {
    backgroundColor: d || void 0,
    borderRadius: b
  }, N = Object.assign(Object.assign({
    width: `${q(r)}%`,
    height: C,
    borderRadius: b
  }, h), {
    [Ze]: q(r) / 100
  }), x = pe(e), $ = {
    width: `${q(x)}%`,
    height: C,
    borderRadius: b,
    backgroundColor: u == null ? void 0 : u.strokeColor
  }, P = {
    width: w < 0 ? "100%" : w
  }, S = /* @__PURE__ */ s.createElement("div", {
    className: `${t}-inner`,
    style: I
  }, /* @__PURE__ */ s.createElement("div", {
    className: M(`${t}-bg`, `${t}-bg-${v}`),
    style: N
  }, v === "inner" && c), x !== void 0 && /* @__PURE__ */ s.createElement("div", {
    className: `${t}-success-bg`,
    style: $
  })), k = v === "outer" && p === "start", g = v === "outer" && p === "end";
  return v === "outer" && p === "center" ? /* @__PURE__ */ s.createElement("div", {
    className: `${t}-layout-bottom`
  }, S, c) : /* @__PURE__ */ s.createElement("div", {
    className: `${t}-outer`,
    style: P
  }, k && c, S, g && c);
}, Lr = (e) => {
  const {
    size: t,
    steps: o,
    percent: r = 0,
    strokeWidth: n = 8,
    strokeColor: i,
    trailColor: a = null,
    prefixCls: l,
    children: c
  } = e, d = Math.round(o * (r / 100)), u = t ?? [t === "small" ? 2 : 14, n], [p, v] = ge(u, "step", {
    steps: o,
    strokeWidth: n
  }), h = p / o, b = new Array(o);
  for (let y = 0; y < o; y++) {
    const w = Array.isArray(i) ? i[y] : i;
    b[y] = /* @__PURE__ */ s.createElement("div", {
      key: y,
      className: M(`${l}-steps-item`, {
        [`${l}-steps-item-active`]: y <= d - 1
      }),
      style: {
        backgroundColor: y <= d - 1 ? w : a,
        width: h,
        height: v
      }
    });
  }
  return /* @__PURE__ */ s.createElement("div", {
    className: `${l}-steps-outer`
  }, b, c);
};
var zr = function(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
    t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
  return o;
};
const Vr = ["normal", "exception", "active", "success"], Ye = /* @__PURE__ */ s.forwardRef((e, t) => {
  const {
    prefixCls: o,
    className: r,
    rootClassName: n,
    steps: i,
    strokeColor: a,
    percent: l = 0,
    size: c = "default",
    showInfo: d = !0,
    type: f = "line",
    status: u,
    format: p,
    style: v,
    percentPosition: h = {}
  } = e, b = zr(e, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style", "percentPosition"]), {
    align: y = "end",
    type: w = "outer"
  } = h, C = Array.isArray(a) ? a[0] : a, I = typeof a == "string" || Array.isArray(a) ? a : void 0, N = s.useMemo(() => {
    if (C) {
      const O = typeof C == "string" ? C : Object.values(C)[0];
      return new Tt(O).isLight();
    }
    return !1;
  }, [a]), x = s.useMemo(() => {
    var O, E;
    const A = pe(e);
    return parseInt(A !== void 0 ? (O = A ?? 0) === null || O === void 0 ? void 0 : O.toString() : (E = l ?? 0) === null || E === void 0 ? void 0 : E.toString(), 10);
  }, [l, e.success, e.successPercent]), $ = s.useMemo(() => !Vr.includes(u) && x >= 100 ? "success" : u || "normal", [u, x]), {
    getPrefixCls: P,
    direction: S,
    progress: k
  } = s.useContext(we), g = P("progress", o), [X, Z, B] = _r(g), _ = f === "line", W = _ && !i, R = s.useMemo(() => {
    if (!d)
      return null;
    const O = pe(e);
    let E;
    const A = p || ((K) => `${K}%`), Y = _ && N && w === "inner";
    return w === "inner" || p || $ !== "exception" && $ !== "success" ? E = A(q(l), q(O)) : $ === "exception" ? E = _ ? /* @__PURE__ */ s.createElement(Dt, null) : /* @__PURE__ */ s.createElement(Rt, null) : $ === "success" && (E = _ ? /* @__PURE__ */ s.createElement(Ve, null) : /* @__PURE__ */ s.createElement(Lt, null)), /* @__PURE__ */ s.createElement("span", {
      className: M(`${g}-text`, {
        [`${g}-text-bright`]: Y,
        [`${g}-text-${y}`]: W,
        [`${g}-text-${w}`]: W
      }),
      title: typeof E == "string" ? E : void 0
    }, E);
  }, [d, l, x, $, f, g, p]);
  if (T.env.NODE_ENV !== "production") {
    const O = $e("Progress");
    O.deprecated(!("successPercent" in e), "successPercent", "success.percent"), O.deprecated(!("width" in e), "width", "size"), (f === "circle" || f === "dashboard") && (Array.isArray(c) ? T.env.NODE_ENV !== "production" && O(!1, "usage", 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.') : typeof c == "object" && T.env.NODE_ENV !== "production" && O(!1, "usage", 'Type "circle" and "dashboard" do not accept object as `size`, please use number or preset size instead.')), e.success && "progress" in e.success && O.deprecated(!1, "success.progress", "success.percent");
  }
  let L;
  f === "line" ? L = i ? /* @__PURE__ */ s.createElement(Lr, Object.assign({}, e, {
    strokeColor: I,
    prefixCls: g,
    steps: typeof i == "object" ? i.count : i
  }), R) : /* @__PURE__ */ s.createElement(Rr, Object.assign({}, e, {
    strokeColor: C,
    prefixCls: g,
    direction: S,
    percentPosition: {
      align: y,
      type: w
    }
  }), R) : (f === "circle" || f === "dashboard") && (L = /* @__PURE__ */ s.createElement(kr, Object.assign({}, e, {
    strokeColor: C,
    prefixCls: g,
    progressStatus: $
  }), R));
  const H = M(g, `${g}-status-${$}`, {
    [`${g}-${f === "dashboard" && "circle" || f}`]: f !== "line",
    [`${g}-inline-circle`]: f === "circle" && ge(c, "circle")[0] <= 20,
    [`${g}-line`]: W,
    [`${g}-line-align-${y}`]: W,
    [`${g}-line-position-${w}`]: W,
    [`${g}-steps`]: i,
    [`${g}-show-info`]: d,
    [`${g}-${c}`]: typeof c == "string",
    [`${g}-rtl`]: S === "rtl"
  }, k == null ? void 0 : k.className, r, n, Z, B);
  return X(/* @__PURE__ */ s.createElement("div", Object.assign({
    ref: t,
    style: Object.assign(Object.assign({}, k == null ? void 0 : k.style), v),
    className: H,
    role: "progressbar",
    "aria-valuenow": x,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, At(b, ["trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"])), L));
});
T.env.NODE_ENV !== "production" && (Ye.displayName = "Progress");
const Br = {
  ETH: "/imgs/logos/eth.png",
  MATIC: "/imgs/logos/matic.png",
  TVWT: "/imgs/logos/tvwt.png"
};
function Gr() {
  const { address: e } = ct.all(), [t, o] = s.useState([]), [r, n] = s.useState(!1), [i, a] = s.useState(!1), [l, c] = s.useState("ETH");
  s.useEffect(() => {
    d();
  }, []);
  const d = async () => {
    try {
      const f = await ft("/user-assets/asset-distribution", {
        params: {
          address: e
        }
      });
      ut("ress", f), o(f.data.assetDistribution);
    } catch (f) {
      const u = dt(f);
      bt.error(u.message);
    }
  };
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-between mt-[46px] mb-[52px] text-[#52c41a]", children: [
      /* @__PURE__ */ m.jsx(at, {}),
      /* @__PURE__ */ m.jsx(
        vt,
        {
          size: 22,
          className: "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
          onClick: () => d()
        }
      )
    ] }),
    /* @__PURE__ */ m.jsxs(st, { children: [
      /* @__PURE__ */ m.jsx(it, { className: "", children: /* @__PURE__ */ m.jsxs(Se, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
        /* @__PURE__ */ m.jsx(ae, { className: "h-[16px] px-0 pb-[8px]", children: "Asset" }),
        /* @__PURE__ */ m.jsx(ae, { className: "h-[16px] px-0 pb-[8px]", children: "Price" }),
        /* @__PURE__ */ m.jsx(ae, { className: "h-[16px] px-0 pb-[8px] text-right tablet:text-left", children: "Balance" }),
        /* @__PURE__ */ m.jsx(ae, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Proportion" }),
        /* @__PURE__ */ m.jsx(ae, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px] text-right" })
      ] }) }),
      /* @__PURE__ */ m.jsx(lt, { children: t.map((f) => /* @__PURE__ */ m.jsxs(Se, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ m.jsx(se, { className: "px-0 py-6", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ m.jsx("img", { src: Br[f.token], alt: "img", className: "w-[28px] h-[28px]" }),
          /* @__PURE__ */ m.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ m.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: f.token }) })
        ] }) }),
        /* @__PURE__ */ m.jsx(se, { className: "px-0 py-6", children: /* @__PURE__ */ m.jsxs("div", { children: [
          /* @__PURE__ */ m.jsxs("p", { className: "text-sm font-normal leading-snug text-black", children: [
            "$",
            ke(f.price)
          ] }),
          /* @__PURE__ */ m.jsx("p", { className: pt(
            "text-sm font-normal leading-snug text-black",
            f.priceChange.startsWith("+") ? "text-[#52c41a]" : "text-[#ff0004]"
          ), children: f.priceChange })
        ] }) }),
        /* @__PURE__ */ m.jsxs(se, { className: "px-0 py-6 text-right tablet:text-left", children: [
          /* @__PURE__ */ m.jsx("p", { className: "text-sm font-normal leading-snug text-black", children: mt(f.balance) }),
          /* @__PURE__ */ m.jsxs("p", { className: "text-sm font-normal leading-snug text-[#828282]", children: [
            "$",
            ke(f.value)
          ] })
        ] }),
        /* @__PURE__ */ m.jsx(se, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ m.jsx("div", { children: /* @__PURE__ */ m.jsx(Ye, { percent: parseFloat(f.proportion), strokeColor: "#52c41a", strokeWidth: 12 }) }) }),
        /* @__PURE__ */ m.jsx(se, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ m.jsxs("div", { className: "flex items-center justify-end gap-[17px]", children: [
          /* @__PURE__ */ m.jsx("img", { className: "cursor-pointer", src: "/imgs/icons/send.svg", alt: "", onClick: () => {
            c(f.token), n(!0);
          } }),
          /* @__PURE__ */ m.jsx("img", { className: "cursor-pointer", src: "/imgs/icons/receive.svg", alt: "", onClick: () => {
            a(!0);
          } })
        ] }) })
      ] }, f.token)) })
    ] }),
    /* @__PURE__ */ m.jsx(
      gt,
      {
        open: r,
        setOpen: n,
        address: e,
        tokenType: l,
        onClose: () => n(!1)
      }
    ),
    /* @__PURE__ */ m.jsx(
      ht,
      {
        address: e,
        open: i,
        setOpen: a,
        onClose: () => a(!1)
      }
    )
  ] });
}
export {
  Gr as default
};
