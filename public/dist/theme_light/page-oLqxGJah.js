import { j as h } from "./vendor-radix-BcySUdtt.js";
import { B as at } from "./index-Sjo3pVHC.js";
import { T as st, a as it, b as Se, c as ae, d as lt, e as se } from "./table-BwF7M6qH.js";
import { a as ct, g as ft, f as ut, j as dt, m as je, c as mt, h as pt } from "./main-CDK5RuLO.js";
import { p as T, a as i } from "./vendor-react-BdtkaT_f.js";
import { B as gt } from "./vendor-utils-CISROZyj.js";
import { _ as Ce, R as ht } from "./vendor-ui-utils-D5jysYH4.js";
import { I as bt, K as D, v as vt, b as M, U as yt, a2 as Ct, A as ce, z as Re, x as xe, Z as Le, a1 as xt, W as ke, e as we, u as wt, j as $e, t as $t, a6 as Ot, k as St, a5 as jt, h as kt, a8 as Nt, a9 as Pt, q as Et, aa as ve, a0 as It, G as _t, O as Tt, Q as At, P as Dt } from "./roundedArrow-CoNkB6bg.js";
import { k as ze, _ as ye, e as ie } from "./vendor-web3-CfO0z015.js";
const de = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function Rt(e, t) {
  return de.reduce((o, r) => {
    const n = e[`${r}1`], a = e[`${r}3`], s = e[`${r}6`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, o), t(r, {
      lightColor: n,
      lightBorderColor: a,
      darkColor: s,
      textColor: l
    }));
  }, {});
}
var Lt = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, zt = function(t, o) {
  return /* @__PURE__ */ i.createElement(bt, Ce({}, t, {
    ref: o,
    icon: Lt
  }));
}, Ve = /* @__PURE__ */ i.forwardRef(zt);
T.env.NODE_ENV !== "production" && (Ve.displayName = "CheckCircleFilled");
const Vt = (e, t, o) => o !== void 0 ? o : `${e}-${t}`, Bt = new D("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Wt = new D("antZoomOut", {
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
}), Mt = new D("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Xt = new D("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Ft = new D("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Ht = new D("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Kt = new D("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Zt = new D("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Yt = new D("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Ut = new D("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Gt = {
  zoom: {
    inKeyframes: Bt,
    outKeyframes: Wt
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
    inKeyframes: Ft,
    outKeyframes: Ht
  },
  "zoom-right": {
    inKeyframes: Kt,
    outKeyframes: Zt
  },
  "zoom-up": {
    inKeyframes: Mt,
    outKeyframes: Xt
  },
  "zoom-down": {
    inKeyframes: Yt,
    outKeyframes: Ut
  }
}, qt = (e, t) => {
  const {
    antCls: o
  } = e, r = `${o}-${t}`, {
    inKeyframes: n,
    outKeyframes: a
  } = Gt[t];
  return [vt(r, n, a, e.motionDurationFast), {
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
  var t = e.children, o = e.prefixCls, r = e.id, n = e.overlayInnerStyle, a = e.className, s = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    className: M("".concat(o, "-content"), a),
    style: s
  }, /* @__PURE__ */ i.createElement("div", {
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
}, V = [0, 0], Qt = {
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
}, Jt = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], er = function(t, o) {
  var r = t.overlayClassName, n = t.trigger, a = n === void 0 ? ["hover"] : n, s = t.mouseEnterDelay, l = s === void 0 ? 0 : s, c = t.mouseLeaveDelay, d = c === void 0 ? 0.1 : c, u = t.overlayStyle, f = t.prefixCls, m = f === void 0 ? "rc-tooltip" : f, v = t.children, g = t.onVisibleChange, b = t.afterVisibleChange, y = t.transitionName, w = t.animation, C = t.motion, I = t.placement, N = I === void 0 ? "right" : I, x = t.align, $ = x === void 0 ? {} : x, P = t.destroyTooltipOnHide, S = P === void 0 ? !1 : P, j = t.defaultVisible, p = t.getTooltipContainer, X = t.overlayInnerStyle;
  t.arrowContent;
  var Z = t.overlay, B = t.id, _ = t.showArrow, W = _ === void 0 ? !0 : _, R = ze(t, Jt), L = i.useRef(null);
  i.useImperativeHandle(o, function() {
    return L.current;
  });
  var H = ye({}, R);
  "visible" in t && (H.popupVisible = t.visible);
  var O = function() {
    return /* @__PURE__ */ i.createElement(Be, {
      key: "content",
      prefixCls: m,
      id: B,
      overlayInnerStyle: X
    }, Z);
  };
  return /* @__PURE__ */ i.createElement(yt, Ce({
    popupClassName: r,
    prefixCls: m,
    popup: O,
    action: a,
    builtinPlacements: Qt,
    popupPlacement: N,
    ref: L,
    popupAlign: $,
    getPopupContainer: p,
    onPopupVisibleChange: g,
    afterPopupVisibleChange: b,
    popupTransitionName: y,
    popupAnimation: w,
    popupMotion: C,
    defaultPopupVisible: j,
    autoDestroy: S,
    mouseLeaveDelay: d,
    popupStyle: u,
    mouseEnterDelay: l,
    arrow: W
  }, H), v);
};
const tr = /* @__PURE__ */ i.forwardRef(er), We = 8;
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
function rr(e, t, o) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: n,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: s
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
      }, Ct(e, t, n)), {
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
        "--arrow-offset-horizontal": s,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: s
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ce(s)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: s
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
        "--arrow-offset-horizontal": s,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: s
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ce(s)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: s
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
        top: a
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: a
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
        top: a
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function or(e, t, o, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const n = r && typeof r == "object" ? r : {}, a = {};
  switch (e) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + o, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + o, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const s = Object.assign(Object.assign({}, a), n);
  return s.shiftX || (s.adjustX = !0), s.shiftY || (s.adjustY = !0), s;
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
}, nr = {
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
}, ar = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function sr(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: o,
    arrowPointAtCenter: r,
    offset: n,
    borderRadius: a,
    visibleFirst: s
  } = e, l = t / 2, c = {};
  return Object.keys(Ee).forEach((d) => {
    const u = r && nr[d] || Ee[d], f = Object.assign(Object.assign({}, u), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[d] = f, ar.has(d) && (f.autoArrow = !1), d) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -l - n;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = l + n;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -l - n;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = l + n;
        break;
    }
    const m = Me({
      contentRadius: a,
      limitVerticalRadius: !0
    });
    if (r)
      switch (d) {
        case "topLeft":
        case "bottomLeft":
          f.offset[0] = -m.arrowOffsetHorizontal - l;
          break;
        case "topRight":
        case "bottomRight":
          f.offset[0] = m.arrowOffsetHorizontal + l;
          break;
        case "leftTop":
        case "rightTop":
          f.offset[1] = -m.arrowOffsetHorizontal * 2 + l;
          break;
        case "leftBottom":
        case "rightBottom":
          f.offset[1] = m.arrowOffsetHorizontal * 2 - l;
          break;
      }
    f.overflow = or(d, m, t, o), s && (f.htmlRegion = "visibleFirst");
  }), c;
}
const ir = (e) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: o,
    tooltipColor: r,
    tooltipBg: n,
    tooltipBorderRadius: a,
    zIndexPopup: s,
    controlHeight: l,
    boxShadowSecondary: c,
    paddingSM: d,
    paddingXS: u
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Le(e)), {
        position: "absolute",
        zIndex: s,
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
          padding: `${ce(e.calc(d).div(2).equal())} ${ce(u)}`,
          color: r,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: n,
          borderRadius: a,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(a, We)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Rt(e, (f, m) => {
        let {
          darkColor: v
        } = m;
        return {
          [`&${t}-${f}`]: {
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
    rr(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, lr = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Me({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), xt(xe(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Xe = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Re("Tooltip", (r) => {
    const {
      borderRadius: n,
      colorTextLightSolid: a,
      colorBgSpotlight: s
    } = r, l = xe(r, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: a,
      tooltipBorderRadius: n,
      tooltipBg: s
    });
    return [ir(l), qt(r, "zoom-big-fast")];
  }, lr, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(e);
}, cr = de.map((e) => `${e}-inverse`);
function fr(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(ke(cr), ke(de)).includes(e) : de.includes(e);
}
function Fe(e, t) {
  const o = fr(t), r = M({
    [`${e}-${t}`]: t && o
  }), n = {}, a = {};
  return t && !o && (n.background = t, a["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: n,
    arrowStyle: a
  };
}
const ur = (e) => {
  const {
    prefixCls: t,
    className: o,
    placement: r = "top",
    title: n,
    color: a,
    overlayInnerStyle: s
  } = e, {
    getPrefixCls: l
  } = i.useContext(we), c = l("tooltip", t), [d, u, f] = Xe(c), m = Fe(c, a), v = m.arrowStyle, g = Object.assign(Object.assign({}, s), m.overlayStyle), b = M(u, f, c, `${c}-pure`, `${c}-placement-${r}`, o, m.className);
  return d(/* @__PURE__ */ i.createElement("div", {
    className: b,
    style: v
  }, /* @__PURE__ */ i.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ i.createElement(Be, Object.assign({}, e, {
    className: u,
    prefixCls: c,
    overlayInnerStyle: g
  }), n)));
};
var dr = function(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
    t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
  return o;
};
const mr = /* @__PURE__ */ i.forwardRef((e, t) => {
  var o, r;
  const {
    prefixCls: n,
    openClassName: a,
    getTooltipContainer: s,
    overlayClassName: l,
    color: c,
    overlayInnerStyle: d,
    children: u,
    afterOpenChange: f,
    afterVisibleChange: m,
    destroyTooltipOnHide: v,
    arrow: g = !0,
    title: b,
    overlay: y,
    builtinPlacements: w,
    arrowPointAtCenter: C = !1,
    autoAdjustOverflow: I = !0
  } = e, N = !!g, [, x] = wt(), {
    getPopupContainer: $,
    getPrefixCls: P,
    direction: S
  } = i.useContext(we), j = $e("Tooltip"), p = i.useRef(null), X = () => {
    var k;
    (k = p.current) === null || k === void 0 || k.forceAlign();
  };
  i.useImperativeHandle(t, () => {
    var k;
    return {
      forceAlign: X,
      forcePopupAlign: () => {
        j.deprecated(!1, "forcePopupAlign", "forceAlign"), X();
      },
      nativeElement: (k = p.current) === null || k === void 0 ? void 0 : k.nativeElement
    };
  }), T.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((k) => {
    let [F, G] = k;
    j.deprecated(!(F in e), F, G);
  }), T.env.NODE_ENV !== "production" && j(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), T.env.NODE_ENV !== "production" && j(!g || typeof g == "boolean" || !("arrowPointAtCenter" in g), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [Z, B] = $t(!1, {
    value: (o = e.open) !== null && o !== void 0 ? o : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), _ = !b && !y && b !== 0, W = (k) => {
    var F, G;
    B(_ ? !1 : k), _ || ((F = e.onOpenChange) === null || F === void 0 || F.call(e, k), (G = e.onVisibleChange) === null || G === void 0 || G.call(e, k));
  }, R = i.useMemo(() => {
    var k, F;
    let G = C;
    return typeof g == "object" && (G = (F = (k = g.pointAtCenter) !== null && k !== void 0 ? k : g.arrowPointAtCenter) !== null && F !== void 0 ? F : C), w || sr({
      arrowPointAtCenter: G,
      autoAdjustOverflow: I,
      arrowWidth: N ? x.sizePopupArrow : 0,
      borderRadius: x.borderRadius,
      offset: x.marginXXS,
      visibleFirst: !0
    });
  }, [C, g, w, x]), L = i.useMemo(() => b === 0 ? b : y || b || "", [y, b]), H = /* @__PURE__ */ i.createElement(Ot, {
    space: !0
  }, typeof L == "function" ? L() : L), {
    getPopupContainer: O,
    placement: E = "top",
    mouseEnterDelay: A = 0.1,
    mouseLeaveDelay: Y = 0.1,
    overlayStyle: K,
    rootClassName: U
  } = e, Q = dr(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), z = P("tooltip", n), J = P(), ne = e["data-popover-inject"];
  let ee = Z;
  !("open" in e) && !("visible" in e) && _ && (ee = !1);
  const fe = /* @__PURE__ */ i.isValidElement(u) && !St(u) ? u : /* @__PURE__ */ i.createElement("span", null, u), te = fe.props, Ue = !te.className || typeof te.className == "string" ? M(te.className, a || `${z}-open`) : te.className, [Ge, qe, Qe] = Xe(z, !ne), he = Fe(z, c), Je = he.arrowStyle, et = Object.assign(Object.assign({}, d), he.overlayStyle), tt = M(l, {
    [`${z}-rtl`]: S === "rtl"
  }, he.className, U, qe, Qe), [rt, ot] = jt("Tooltip", Q.zIndex), nt = /* @__PURE__ */ i.createElement(tr, Object.assign({}, Q, {
    zIndex: rt,
    showArrow: N,
    placement: E,
    mouseEnterDelay: A,
    mouseLeaveDelay: Y,
    prefixCls: z,
    overlayClassName: tt,
    overlayStyle: Object.assign(Object.assign({}, Je), K),
    getTooltipContainer: O || s || $,
    ref: p,
    builtinPlacements: R,
    overlay: H,
    visible: ee,
    onVisibleChange: W,
    afterVisibleChange: f ?? m,
    overlayInnerStyle: et,
    arrowContent: /* @__PURE__ */ i.createElement("span", {
      className: `${z}-arrow-content`
    }),
    motion: {
      motionName: Vt(J, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!v
  }), ee ? kt(fe, {
    className: Ue
  }) : fe);
  return Ge(/* @__PURE__ */ i.createElement(Nt.Provider, {
    value: ot
  }, nt));
}), Oe = mr;
T.env.NODE_ENV !== "production" && (Oe.displayName = "Tooltip");
Oe._InternalPanelDoNotUseOrYouWillBeFired = ur;
var pr = {
  percent: 0,
  prefixCls: "rc-progress",
  strokeColor: "#2db7f5",
  strokeLinecap: "round",
  strokeWidth: 1,
  trailColor: "#D9D9D9",
  trailWidth: 1,
  gapPosition: "bottom"
}, gr = function() {
  var t = i.useRef([]), o = i.useRef(null);
  return i.useEffect(function() {
    var r = Date.now(), n = !1;
    t.current.forEach(function(a) {
      if (a) {
        n = !0;
        var s = a.style;
        s.transitionDuration = ".3s, .3s, .3s, .06s", o.current && r - o.current < 100 && (s.transitionDuration = "0s, 0s");
      }
    }), n && (o.current = Date.now());
  }), t.current;
};
T.env.NODE_ENV;
var Ie = 0, hr = T.env.NODE_ENV !== "test" && Pt();
function br() {
  var e;
  return hr ? (e = Ie, Ie += 1) : e = "TEST_OR_SSR", e;
}
const vr = function(e) {
  var t = i.useState(), o = Et(t, 2), r = o[0], n = o[1];
  return i.useEffect(function() {
    n("rc_progress_".concat(br()));
  }, []), e || r;
};
var _e = function(t) {
  var o = t.bg, r = t.children;
  return /* @__PURE__ */ i.createElement("div", {
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
var He = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var o = e.prefixCls, r = e.color, n = e.gradientId, a = e.radius, s = e.style, l = e.ptg, c = e.strokeLinecap, d = e.strokeWidth, u = e.size, f = e.gapDegree, m = r && ie(r) === "object", v = m ? "#FFF" : void 0, g = u / 2, b = /* @__PURE__ */ i.createElement("circle", {
    className: "".concat(o, "-circle-path"),
    r: a,
    cx: g,
    cy: g,
    stroke: v,
    strokeLinecap: c,
    strokeWidth: d,
    opacity: l === 0 ? 0 : 1,
    style: s,
    ref: t
  });
  if (!m)
    return b;
  var y = "".concat(n, "-conic"), w = f ? "".concat(180 + f / 2, "deg") : "0deg", C = Te(r, (360 - f) / 360), I = Te(r, 1), N = "conic-gradient(from ".concat(w, ", ").concat(C.join(", "), ")"), x = "linear-gradient(to ".concat(f ? "bottom" : "top", ", ").concat(I.join(", "), ")");
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("mask", {
    id: y
  }, b), /* @__PURE__ */ i.createElement("foreignObject", {
    x: 0,
    y: 0,
    width: u,
    height: u,
    mask: "url(#".concat(y, ")")
  }, /* @__PURE__ */ i.createElement(_e, {
    bg: x
  }, /* @__PURE__ */ i.createElement(_e, {
    bg: N
  }))));
});
T.env.NODE_ENV !== "production" && (He.displayName = "PtgCircle");
var le = 100, be = function(t, o, r, n, a, s, l, c, d, u) {
  var f = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0, m = r / 100 * 360 * ((360 - s) / 360), v = s === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[l], g = (100 - n) / 100 * o;
  d === "round" && n !== 100 && (g += u / 2, g >= o && (g = o - 0.01));
  var b = le / 2;
  return {
    stroke: typeof c == "string" ? c : void 0,
    strokeDasharray: "".concat(o, "px ").concat(t),
    strokeDashoffset: g + f,
    transform: "rotate(".concat(a + m + v, "deg)"),
    transformOrigin: "".concat(b, "px ").concat(b, "px"),
    transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
    fillOpacity: 0
  };
}, yr = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];
function Ae(e) {
  var t = e ?? [];
  return Array.isArray(t) ? t : [t];
}
var Ke = function(t) {
  var o = ye(ye({}, pr), t), r = o.id, n = o.prefixCls, a = o.steps, s = o.strokeWidth, l = o.trailWidth, c = o.gapDegree, d = c === void 0 ? 0 : c, u = o.gapPosition, f = o.trailColor, m = o.strokeLinecap, v = o.style, g = o.className, b = o.strokeColor, y = o.percent, w = ze(o, yr), C = le / 2, I = vr(r), N = "".concat(I, "-gradient"), x = C - s / 2, $ = Math.PI * 2 * x, P = d > 0 ? 90 + d / 2 : -90, S = $ * ((360 - d) / 360), j = ie(a) === "object" ? a : {
    count: a,
    gap: 2
  }, p = j.count, X = j.gap, Z = Ae(y), B = Ae(b), _ = B.find(function(A) {
    return A && ie(A) === "object";
  }), W = _ && ie(_) === "object", R = W ? "butt" : m, L = be($, S, 0, 100, P, d, u, f, R, s), H = gr(), O = function() {
    var Y = 0;
    return Z.map(function(K, U) {
      var Q = B[U] || B[B.length - 1], z = be($, S, Y, K, P, d, u, Q, R, s);
      return Y += K, /* @__PURE__ */ i.createElement(He, {
        key: U,
        color: Q,
        ptg: K,
        radius: x,
        prefixCls: n,
        gradientId: N,
        style: z,
        strokeLinecap: R,
        strokeWidth: s,
        gapDegree: d,
        ref: function(ne) {
          H[U] = ne;
        },
        size: le
      });
    }).reverse();
  }, E = function() {
    var Y = Math.round(p * (Z[0] / 100)), K = 100 / p, U = 0;
    return new Array(p).fill(null).map(function(Q, z) {
      var J = z <= Y - 1 ? B[0] : f, ne = J && ie(J) === "object" ? "url(#".concat(N, ")") : void 0, ee = be($, S, U, K, P, d, u, J, "butt", s, X);
      return U += (S - ee.strokeDashoffset + X) * 100 / S, /* @__PURE__ */ i.createElement("circle", {
        key: z,
        className: "".concat(n, "-circle-path"),
        r: x,
        cx: C,
        cy: C,
        stroke: ne,
        strokeWidth: s,
        opacity: 1,
        style: ee,
        ref: function(te) {
          H[z] = te;
        }
      });
    });
  };
  return /* @__PURE__ */ i.createElement("svg", Ce({
    className: M("".concat(n, "-circle"), g),
    viewBox: "0 0 ".concat(le, " ").concat(le),
    style: v,
    id: r,
    role: "presentation"
  }, w), !p && /* @__PURE__ */ i.createElement("circle", {
    className: "".concat(n, "-circle-trail"),
    r: x,
    cx: C,
    cy: C,
    stroke: f,
    strokeLinecap: R,
    strokeWidth: l || s,
    style: L
  }), p ? E() : O());
};
T.env.NODE_ENV !== "production" && (Ke.displayName = "Circle");
function q(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function me(e) {
  let {
    success: t,
    successPercent: o
  } = e, r = o;
  return t && "progress" in t && (r = t.progress), t && "percent" in t && (r = t.percent), r;
}
const Cr = (e) => {
  let {
    percent: t,
    success: o,
    successPercent: r
  } = e;
  const n = q(me({
    success: o,
    successPercent: r
  }));
  return [n, q(q(t) - n)];
}, xr = (e) => {
  let {
    success: t = {},
    strokeColor: o
  } = e;
  const {
    strokeColor: r
  } = t;
  return [r || ve.green, o || null];
}, ge = (e, t, o) => {
  var r, n, a, s;
  let l = -1, c = -1;
  if (t === "step") {
    const d = o.steps, u = o.strokeWidth;
    typeof e == "string" || typeof e > "u" ? (l = e === "small" ? 2 : 14, c = u ?? 8) : typeof e == "number" ? [l, c] = [e, e] : [l = 14, c = 8] = Array.isArray(e) ? e : [e.width, e.height], l *= d;
  } else if (t === "line") {
    const d = o == null ? void 0 : o.strokeWidth;
    typeof e == "string" || typeof e > "u" ? c = d || (e === "small" ? 6 : 8) : typeof e == "number" ? [l, c] = [e, e] : [l = -1, c = 8] = Array.isArray(e) ? e : [e.width, e.height];
  } else (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [l, c] = e === "small" ? [60, 60] : [120, 120] : typeof e == "number" ? [l, c] = [e, e] : Array.isArray(e) && (l = (n = (r = e[0]) !== null && r !== void 0 ? r : e[1]) !== null && n !== void 0 ? n : 120, c = (s = (a = e[0]) !== null && a !== void 0 ? a : e[1]) !== null && s !== void 0 ? s : 120));
  return [l, c];
}, wr = 3, $r = (e) => wr / e * 100, Or = (e) => {
  const {
    prefixCls: t,
    trailColor: o = null,
    strokeLinecap: r = "round",
    gapPosition: n,
    gapDegree: a,
    width: s = 120,
    type: l,
    children: c,
    success: d,
    size: u = s,
    steps: f
  } = e, [m, v] = ge(u, "circle");
  let {
    strokeWidth: g
  } = e;
  g === void 0 && (g = Math.max($r(m), 6));
  const b = {
    width: m,
    height: v,
    fontSize: m * 0.15 + 6
  }, y = i.useMemo(() => {
    if (a || a === 0)
      return a;
    if (l === "dashboard")
      return 75;
  }, [a, l]), w = Cr(e), C = n || l === "dashboard" && "bottom" || void 0, I = Object.prototype.toString.call(e.strokeColor) === "[object Object]", N = xr({
    success: d,
    strokeColor: e.strokeColor
  }), x = M(`${t}-inner`, {
    [`${t}-circle-gradient`]: I
  }), $ = /* @__PURE__ */ i.createElement(Ke, {
    steps: f,
    percent: f ? w[1] : w,
    strokeWidth: g,
    trailWidth: g,
    strokeColor: f ? N[1] : N,
    strokeLinecap: r,
    trailColor: o,
    prefixCls: t,
    gapDegree: y,
    gapPosition: C
  }), P = m <= 20, S = /* @__PURE__ */ i.createElement("div", {
    className: x,
    style: b
  }, $, !P && c);
  return P ? /* @__PURE__ */ i.createElement(Oe, {
    title: c
  }, S) : S;
}, pe = "--progress-line-stroke-color", Ze = "--progress-percent", De = (e) => {
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
}, Sr = (e) => {
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
            value: ["inherit", `var(${pe})`]
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
}, jr = (e) => {
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
}, kr = (e) => {
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
}, Nr = (e) => {
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
}, Pr = (e) => ({
  circleTextColor: e.colorText,
  defaultColor: e.colorInfo,
  remainingColor: e.colorFillSecondary,
  lineBorderRadius: 100,
  // magic for capsule shape, should be a very large number
  circleTextFontSize: "1em",
  circleIconFontSize: `${e.fontSize / e.fontSizeSM}em`
}), Er = Re("Progress", (e) => {
  const t = e.calc(e.marginXXS).div(2).equal(), o = xe(e, {
    progressStepMarginInlineEnd: t,
    progressStepMinWidth: t,
    progressActiveMotionDuration: "2.4s"
  });
  return [Sr(o), jr(o), kr(o), Nr(o)];
}, Pr);
var Ir = function(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
    t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
  return o;
};
const _r = (e) => {
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
}, Tr = (e, t) => {
  const {
    from: o = ve.blue,
    to: r = ve.blue,
    direction: n = t === "rtl" ? "to left" : "to right"
  } = e, a = Ir(e, ["from", "to", "direction"]);
  if (Object.keys(a).length !== 0) {
    const l = _r(a), c = `linear-gradient(${n}, ${l})`;
    return {
      background: c,
      [pe]: c
    };
  }
  const s = `linear-gradient(${n}, ${o}, ${r})`;
  return {
    background: s,
    [pe]: s
  };
}, Ar = (e) => {
  const {
    prefixCls: t,
    direction: o,
    percent: r,
    size: n,
    strokeWidth: a,
    strokeColor: s,
    strokeLinecap: l = "round",
    children: c,
    trailColor: d = null,
    percentPosition: u,
    success: f
  } = e, {
    align: m,
    type: v
  } = u, g = s && typeof s != "string" ? Tr(s, o) : {
    [pe]: s,
    background: s
  }, b = l === "square" || l === "butt" ? 0 : void 0, y = n ?? [-1, a || (n === "small" ? 6 : 8)], [w, C] = ge(y, "line", {
    strokeWidth: a
  });
  T.env.NODE_ENV !== "production" && $e("Progress").deprecated(!("strokeWidth" in e), "strokeWidth", "size");
  const I = {
    backgroundColor: d || void 0,
    borderRadius: b
  }, N = Object.assign(Object.assign({
    width: `${q(r)}%`,
    height: C,
    borderRadius: b
  }, g), {
    [Ze]: q(r) / 100
  }), x = me(e), $ = {
    width: `${q(x)}%`,
    height: C,
    borderRadius: b,
    backgroundColor: f == null ? void 0 : f.strokeColor
  }, P = {
    width: w < 0 ? "100%" : w
  }, S = /* @__PURE__ */ i.createElement("div", {
    className: `${t}-inner`,
    style: I
  }, /* @__PURE__ */ i.createElement("div", {
    className: M(`${t}-bg`, `${t}-bg-${v}`),
    style: N
  }, v === "inner" && c), x !== void 0 && /* @__PURE__ */ i.createElement("div", {
    className: `${t}-success-bg`,
    style: $
  })), j = v === "outer" && m === "start", p = v === "outer" && m === "end";
  return v === "outer" && m === "center" ? /* @__PURE__ */ i.createElement("div", {
    className: `${t}-layout-bottom`
  }, S, c) : /* @__PURE__ */ i.createElement("div", {
    className: `${t}-outer`,
    style: P
  }, j && c, S, p && c);
}, Dr = (e) => {
  const {
    size: t,
    steps: o,
    percent: r = 0,
    strokeWidth: n = 8,
    strokeColor: a,
    trailColor: s = null,
    prefixCls: l,
    children: c
  } = e, d = Math.round(o * (r / 100)), f = t ?? [t === "small" ? 2 : 14, n], [m, v] = ge(f, "step", {
    steps: o,
    strokeWidth: n
  }), g = m / o, b = new Array(o);
  for (let y = 0; y < o; y++) {
    const w = Array.isArray(a) ? a[y] : a;
    b[y] = /* @__PURE__ */ i.createElement("div", {
      key: y,
      className: M(`${l}-steps-item`, {
        [`${l}-steps-item-active`]: y <= d - 1
      }),
      style: {
        backgroundColor: y <= d - 1 ? w : s,
        width: g,
        height: v
      }
    });
  }
  return /* @__PURE__ */ i.createElement("div", {
    className: `${l}-steps-outer`
  }, b, c);
};
var Rr = function(e, t) {
  var o = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
    t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]]);
  return o;
};
const Lr = ["normal", "exception", "active", "success"], Ye = /* @__PURE__ */ i.forwardRef((e, t) => {
  const {
    prefixCls: o,
    className: r,
    rootClassName: n,
    steps: a,
    strokeColor: s,
    percent: l = 0,
    size: c = "default",
    showInfo: d = !0,
    type: u = "line",
    status: f,
    format: m,
    style: v,
    percentPosition: g = {}
  } = e, b = Rr(e, ["prefixCls", "className", "rootClassName", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format", "style", "percentPosition"]), {
    align: y = "end",
    type: w = "outer"
  } = g, C = Array.isArray(s) ? s[0] : s, I = typeof s == "string" || Array.isArray(s) ? s : void 0, N = i.useMemo(() => {
    if (C) {
      const O = typeof C == "string" ? C : Object.values(C)[0];
      return new It(O).isLight();
    }
    return !1;
  }, [s]), x = i.useMemo(() => {
    var O, E;
    const A = me(e);
    return parseInt(A !== void 0 ? (O = A ?? 0) === null || O === void 0 ? void 0 : O.toString() : (E = l ?? 0) === null || E === void 0 ? void 0 : E.toString(), 10);
  }, [l, e.success, e.successPercent]), $ = i.useMemo(() => !Lr.includes(f) && x >= 100 ? "success" : f || "normal", [f, x]), {
    getPrefixCls: P,
    direction: S,
    progress: j
  } = i.useContext(we), p = P("progress", o), [X, Z, B] = Er(p), _ = u === "line", W = _ && !a, R = i.useMemo(() => {
    if (!d)
      return null;
    const O = me(e);
    let E;
    const A = m || ((K) => `${K}%`), Y = _ && N && w === "inner";
    return w === "inner" || m || $ !== "exception" && $ !== "success" ? E = A(q(l), q(O)) : $ === "exception" ? E = _ ? /* @__PURE__ */ i.createElement(Tt, null) : /* @__PURE__ */ i.createElement(At, null) : $ === "success" && (E = _ ? /* @__PURE__ */ i.createElement(Ve, null) : /* @__PURE__ */ i.createElement(Dt, null)), /* @__PURE__ */ i.createElement("span", {
      className: M(`${p}-text`, {
        [`${p}-text-bright`]: Y,
        [`${p}-text-${y}`]: W,
        [`${p}-text-${w}`]: W
      }),
      title: typeof E == "string" ? E : void 0
    }, E);
  }, [d, l, x, $, u, p, m]);
  if (T.env.NODE_ENV !== "production") {
    const O = $e("Progress");
    O.deprecated(!("successPercent" in e), "successPercent", "success.percent"), O.deprecated(!("width" in e), "width", "size"), (u === "circle" || u === "dashboard") && (Array.isArray(c) ? T.env.NODE_ENV !== "production" && O(!1, "usage", 'Type "circle" and "dashboard" do not accept array as `size`, please use number or preset size instead.') : typeof c == "object" && T.env.NODE_ENV !== "production" && O(!1, "usage", 'Type "circle" and "dashboard" do not accept object as `size`, please use number or preset size instead.')), e.success && "progress" in e.success && O.deprecated(!1, "success.progress", "success.percent");
  }
  let L;
  u === "line" ? L = a ? /* @__PURE__ */ i.createElement(Dr, Object.assign({}, e, {
    strokeColor: I,
    prefixCls: p,
    steps: typeof a == "object" ? a.count : a
  }), R) : /* @__PURE__ */ i.createElement(Ar, Object.assign({}, e, {
    strokeColor: C,
    prefixCls: p,
    direction: S,
    percentPosition: {
      align: y,
      type: w
    }
  }), R) : (u === "circle" || u === "dashboard") && (L = /* @__PURE__ */ i.createElement(Or, Object.assign({}, e, {
    strokeColor: C,
    prefixCls: p,
    progressStatus: $
  }), R));
  const H = M(p, `${p}-status-${$}`, {
    [`${p}-${u === "dashboard" && "circle" || u}`]: u !== "line",
    [`${p}-inline-circle`]: u === "circle" && ge(c, "circle")[0] <= 20,
    [`${p}-line`]: W,
    [`${p}-line-align-${y}`]: W,
    [`${p}-line-position-${w}`]: W,
    [`${p}-steps`]: a,
    [`${p}-show-info`]: d,
    [`${p}-${c}`]: typeof c == "string",
    [`${p}-rtl`]: S === "rtl"
  }, j == null ? void 0 : j.className, r, n, Z, B);
  return X(/* @__PURE__ */ i.createElement("div", Object.assign({
    ref: t,
    style: Object.assign(Object.assign({}, j == null ? void 0 : j.style), v),
    className: H,
    role: "progressbar",
    "aria-valuenow": x,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, _t(b, ["trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"])), L));
});
T.env.NODE_ENV !== "production" && (Ye.displayName = "Progress");
const zr = {
  ETH: "/imgs/logos/eth.png",
  MATIC: "/imgs/logos/matic.png",
  TVWT: "/imgs/logos/tvwt.png"
};
function Yr() {
  const { address: e } = ct.all(), [t, o] = i.useState([]);
  i.useEffect(() => {
    r();
  }, []);
  const r = async () => {
    try {
      const n = await ft("/user-assets/asset-distribution", {
        params: {
          address: e
        }
      });
      ut("ress", n), o(n.data.assetDistribution);
    } catch (n) {
      const a = dt(n);
      gt.error(a.message);
    }
  };
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-between mt-[46px] mb-[52px] text-[#52c41a]", children: [
      /* @__PURE__ */ h.jsx(at, {}),
      /* @__PURE__ */ h.jsx(
        ht,
        {
          size: 22,
          className: "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
          onClick: () => r()
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs(st, { children: [
      /* @__PURE__ */ h.jsx(it, { className: "", children: /* @__PURE__ */ h.jsxs(Se, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
        /* @__PURE__ */ h.jsx(ae, { className: "h-[16px] px-0 pb-[8px]", children: "Asset" }),
        /* @__PURE__ */ h.jsx(ae, { className: "h-[16px] px-0 pb-[8px]", children: "Price" }),
        /* @__PURE__ */ h.jsx(ae, { className: "h-[16px] px-0 pb-[8px] text-right tablet:text-left", children: "Balance" }),
        /* @__PURE__ */ h.jsx(ae, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Proportion" }),
        /* @__PURE__ */ h.jsx(ae, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px] text-right" })
      ] }) }),
      /* @__PURE__ */ h.jsx(lt, { children: t.map((n) => /* @__PURE__ */ h.jsxs(Se, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ h.jsx(se, { className: "px-0 py-6", children: /* @__PURE__ */ h.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ h.jsx("img", { src: zr[n.token], alt: "img", className: "w-[28px] h-[28px]" }),
          /* @__PURE__ */ h.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ h.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: n.token }) })
        ] }) }),
        /* @__PURE__ */ h.jsx(se, { className: "px-0 py-6", children: /* @__PURE__ */ h.jsxs("div", { children: [
          /* @__PURE__ */ h.jsxs("p", { className: "text-sm font-normal leading-snug text-black", children: [
            "$",
            je(n.price)
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: mt(
            "text-sm font-normal leading-snug text-black",
            n.priceChange.startsWith("+") ? "text-[#52c41a]" : "text-[#ff0004]"
          ), children: n.priceChange })
        ] }) }),
        /* @__PURE__ */ h.jsxs(se, { className: "px-0 py-6 text-right tablet:text-left", children: [
          /* @__PURE__ */ h.jsx("p", { className: "text-sm font-normal leading-snug text-black", children: pt(n.balance) }),
          /* @__PURE__ */ h.jsxs("p", { className: "text-sm font-normal leading-snug text-[#828282]", children: [
            "$",
            je(n.value)
          ] })
        ] }),
        /* @__PURE__ */ h.jsx(se, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ h.jsx("div", { children: /* @__PURE__ */ h.jsx(Ye, { percent: parseFloat(n.proportion), strokeColor: "#52c41a", strokeWidth: 12 }) }) }),
        /* @__PURE__ */ h.jsx(se, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ h.jsxs("div", { className: "flex items-center justify-end gap-[17px]", children: [
          /* @__PURE__ */ h.jsx("img", { className: "cursor-pointer", src: "/imgs/icons/send.svg", alt: "" }),
          /* @__PURE__ */ h.jsx("img", { className: "cursor-pointer", src: "/imgs/icons/receive.svg", alt: "" })
        ] }) })
      ] }, n.token)) })
    ] })
  ] });
}
export {
  Yr as default
};
