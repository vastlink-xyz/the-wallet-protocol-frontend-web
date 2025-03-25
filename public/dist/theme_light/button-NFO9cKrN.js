import { r as d, p as W, R as g } from "./vendor-react-CuOkI7kW.js";
import { aw as Ht, at as Ve, x as Bt, ax as Rt, ay as Ot, az as _t, w as ie, ar as Je, aA as wt, aB as xe, n as I, m as ae, aC as Ke, p as $e, aD as Lt, aE as Nt, y as Qe, an as Pt, ao as It, N as Ze, M as ke, _ as Z, O as se, aF as fe, P as Dt, v as re, aG as jt, aH as zt, Y as Tt } from "./main-Cs8rq8oH.js";
import { o as Mt } from "./CheckOutlined-zhTDqrfd.js";
import { f as et, a as At, h as Wt, u as Gt, c as Vt } from "./index-CSoZbC2k.js";
import { _ as ne } from "./vendor-ui-utils-2_WY-nJY.js";
import { q as L, r as tt, p as A, _ as Ft } from "./vendor-web3-DDgB3Js4.js";
const io = (e, t) => {
  const r = d.useContext(Ht), o = d.useMemo(() => {
    var i;
    const a = t || Ve[e], s = (i = r == null ? void 0 : r[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, r]), n = d.useMemo(() => {
    const i = r == null ? void 0 : r.locale;
    return r != null && r.exist && !i ? Ve.locale : i;
  }, [r]);
  return [o, n];
};
var qt = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Xt = function(t, r) {
  return /* @__PURE__ */ d.createElement(Bt, ne({}, t, {
    ref: r,
    icon: qt
  }));
}, rt = /* @__PURE__ */ d.forwardRef(Xt);
W.env.NODE_ENV !== "production" && (rt.displayName = "LoadingOutlined");
const Yt = (e) => {
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
}, Ut = Rt("Wave", (e) => [Yt(e)]), ot = `${Ot}-wave-target`;
function me(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Jt(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: o
  } = getComputedStyle(e);
  return me(t) ? t : me(r) ? r : me(o) ? o : null;
}
function ve(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Kt = (e) => {
  const {
    className: t,
    target: r,
    component: o
  } = e, n = d.useRef(null), [i, a] = d.useState(null), [s, l] = d.useState([]), [c, u] = d.useState(0), [h, m] = d.useState(0), [b, p] = d.useState(0), [S, H] = d.useState(0), [_, B] = d.useState(!1), y = {
    left: c,
    top: h,
    width: b,
    height: S,
    borderRadius: s.map((w) => `${w}px`).join(" ")
  };
  i && (y["--wave-color"] = i);
  function v() {
    const w = getComputedStyle(r);
    a(Jt(r));
    const E = w.position === "static", {
      borderLeftWidth: x,
      borderTopWidth: P
    } = w;
    u(E ? r.offsetLeft : ve(-parseFloat(x))), m(E ? r.offsetTop : ve(-parseFloat(P))), p(r.offsetWidth), H(r.offsetHeight);
    const {
      borderTopLeftRadius: j,
      borderTopRightRadius: V,
      borderBottomLeftRadius: z,
      borderBottomRightRadius: T
    } = w;
    l([j, V, T, z].map((N) => ve(parseFloat(N))));
  }
  if (d.useEffect(() => {
    if (r) {
      const w = ie(() => {
        v(), B(!0);
      });
      let E;
      return typeof ResizeObserver < "u" && (E = new ResizeObserver(v), E.observe(r)), () => {
        ie.cancel(w), E == null || E.disconnect();
      };
    }
  }, []), !_)
    return null;
  const C = (o === "Checkbox" || o === "Radio") && (r == null ? void 0 : r.classList.contains(ot));
  return /* @__PURE__ */ d.createElement(Je, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (w, E) => {
      var x;
      if (E.deadline || E.propertyName === "opacity") {
        const P = (x = n.current) === null || x === void 0 ? void 0 : x.parentElement;
        wt(P).then(() => {
          P == null || P.remove();
        });
      }
      return !1;
    }
  }, (w, E) => {
    let {
      className: x
    } = w;
    return /* @__PURE__ */ d.createElement("div", {
      ref: xe(n, E),
      className: I(t, x, {
        "wave-quick": C
      }),
      style: y
    });
  });
}, Qt = (e, t) => {
  var r;
  const {
    component: o
  } = t;
  if (o === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), _t(/* @__PURE__ */ d.createElement(Kt, Object.assign({}, t, {
    target: e
  })), n);
}, Zt = (e, t, r) => {
  const {
    wave: o
  } = d.useContext(ae), [, n, i] = Ke(), a = $e((c) => {
    const u = e.current;
    if (o != null && o.disabled || !u)
      return;
    const h = u.querySelector(`.${ot}`) || u, {
      showEffect: m
    } = o || {};
    (m || Qt)(h, {
      className: t,
      token: n,
      component: r,
      event: c,
      hashId: i
    });
  }), s = d.useRef();
  return (c) => {
    ie.cancel(s.current), s.current = ie(() => {
      a(c);
    });
  };
}, nt = (e) => {
  const {
    children: t,
    disabled: r,
    component: o
  } = e, {
    getPrefixCls: n
  } = d.useContext(ae), i = d.useRef(null), a = n("wave"), [, s] = Ut(a), l = Zt(i, I(a, s), o);
  if (g.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const h = (m) => {
      !At(m.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || l(m);
    };
    return u.addEventListener("click", h, !0), () => {
      u.removeEventListener("click", h, !0);
    };
  }, [r]), !/* @__PURE__ */ g.isValidElement(t))
    return t ?? null;
  const c = Lt(t) ? xe(t.ref, i) : i;
  return et(t, {
    ref: c
  });
};
W.env.NODE_ENV !== "production" && (nt.displayName = "Wave");
const kt = (e) => {
  const t = g.useContext(Nt);
  return g.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
};
var er = function(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
    t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
  return r;
};
const it = /* @__PURE__ */ d.createContext(void 0), tr = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = d.useContext(ae), {
    prefixCls: o,
    size: n,
    className: i
  } = e, a = er(e, ["prefixCls", "size", "className"]), s = t("btn-group", o), [, , l] = Ke();
  let c = "";
  switch (n) {
    case "large":
      c = "lg";
      break;
    case "small":
      c = "sm";
      break;
  }
  if (W.env.NODE_ENV !== "production") {
    const h = Qe("Button.Group");
    W.env.NODE_ENV !== "production" && h(!n || ["large", "small", "middle"].includes(n), "usage", "Invalid prop `size`.");
  }
  const u = I(s, {
    [`${s}-${c}`]: c,
    [`${s}-rtl`]: r === "rtl"
  }, i, l);
  return /* @__PURE__ */ d.createElement(it.Provider, {
    value: n
  }, /* @__PURE__ */ d.createElement("div", Object.assign({}, a, {
    className: u
  })));
}, Fe = /^[\u4E00-\u9FA5]{2}$/, Se = Fe.test.bind(Fe);
function qe(e) {
  return typeof e == "string";
}
function oe(e) {
  return e === "text" || e === "link";
}
function rr(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && qe(e.type) && Se(e.props.children) ? et(e, {
    children: e.props.children.split("").join(r)
  }) : qe(e) ? Se(e) ? /* @__PURE__ */ g.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ g.createElement("span", null, e) : Wt(e) ? /* @__PURE__ */ g.createElement("span", null, e) : e;
}
function or(e, t) {
  let r = !1;
  const o = [];
  return g.Children.forEach(e, (n) => {
    const i = typeof n, a = i === "string" || i === "number";
    if (r && a) {
      const s = o.length - 1, l = o[s];
      o[s] = `${l}${n}`;
    } else
      o.push(n);
    r = a;
  }), g.Children.map(o, (n) => rr(n, t));
}
const at = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    className: r,
    style: o,
    children: n,
    prefixCls: i
  } = e, a = I(`${i}-icon`, r);
  return /* @__PURE__ */ g.createElement("span", {
    ref: t,
    className: a,
    style: o
  }, n);
}), Xe = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: o,
    style: n,
    iconClassName: i
  } = e, a = I(`${r}-loading-icon`, o);
  return /* @__PURE__ */ g.createElement(at, {
    prefixCls: r,
    className: a,
    style: n,
    ref: t
  }, /* @__PURE__ */ g.createElement(rt, {
    className: i
  }));
}), be = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), pe = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), nr = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: o,
    className: n,
    style: i
  } = e, a = !!r;
  return o ? /* @__PURE__ */ g.createElement(Xe, {
    prefixCls: t,
    className: n,
    style: i
  }) : /* @__PURE__ */ g.createElement(Je, {
    visible: a,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: a,
    removeOnLeave: !0,
    onAppearStart: be,
    onAppearActive: pe,
    onEnterStart: be,
    onEnterActive: pe,
    onLeaveStart: pe,
    onLeaveActive: be
  }, (s, l) => {
    let {
      className: c,
      style: u
    } = s;
    return /* @__PURE__ */ g.createElement(Xe, {
      prefixCls: t,
      className: n,
      style: Object.assign(Object.assign({}, i), u),
      ref: l,
      iconClassName: c
    });
  });
}, Ye = (e, t) => ({
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
}), ir = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: o,
    groupBorderColor: n,
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
            marginInlineStart: e.calc(o).mul(-1).equal(),
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
      Ye(`${t}-primary`, n),
      Ye(`${t}-danger`, i)
    ]
  };
}, O = Math.round;
function Ce(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], o = r.map((n) => parseFloat(n));
  for (let n = 0; n < 3; n += 1)
    o[n] = t(o[n] || 0, r[n] || "", n);
  return r[3] ? o[3] = r[3].includes("%") ? o[3] / 100 : o[3] : o[3] = 1, o;
}
const Ue = (e, t, r) => r === 0 ? e : e / 100;
function te(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class le {
  constructor(t) {
    L(this, "isValid", !0), L(this, "r", 0), L(this, "g", 0), L(this, "b", 0), L(this, "a", 1), L(this, "_h", void 0), L(this, "_s", void 0), L(this, "_l", void 0), L(this, "_v", void 0), L(this, "_max", void 0), L(this, "_min", void 0), L(this, "_brightness", void 0);
    function r(o) {
      return o[0] in t && o[1] in t && o[2] in t;
    }
    if (t) if (typeof t == "string") {
      let n = function(i) {
        return o.startsWith(i);
      };
      const o = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(o) ? this.fromHexString(o) : n("rgb") ? this.fromRgbString(o) : n("hsl") ? this.fromHslString(o) : (n("hsv") || n("hsb")) && this.fromHsvString(o);
    } else if (t instanceof le)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = te(t.r), this.g = te(t.g), this.b = te(t.b), this.a = typeof t.a == "number" ? te(t.a, 1) : 1;
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
      const a = i / 255;
      return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), o = t(this.g), n = t(this.b);
    return 0.2126 * r + 0.7152 * o + 0.0722 * n;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = O(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this.getHue(), o = this.getSaturation();
    let n = this.getLightness() - t / 100;
    return n < 0 && (n = 0), this._c({
      h: r,
      s: o,
      l: n,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), o = this.getSaturation();
    let n = this.getLightness() + t / 100;
    return n > 1 && (n = 1), this._c({
      h: r,
      s: o,
      l: n,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const o = this._c(t), n = r / 100, i = (s) => (o[s] - this[s]) * n + this[s], a = {
      r: O(i("r")),
      g: O(i("g")),
      b: O(i("b")),
      a: O(i("a") * 100) / 100
    };
    return this._c(a);
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
    const r = this._c(t), o = this.a + r.a * (1 - this.a), n = (i) => O((this[i] * this.a + r[i] * r.a * (1 - this.a)) / o);
    return this._c({
      r: n("r"),
      g: n("g"),
      b: n("b"),
      a: o
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
    const o = (this.g || 0).toString(16);
    t += o.length === 2 ? o : "0" + o;
    const n = (this.b || 0).toString(16);
    if (t += n.length === 2 ? n : "0" + n, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = O(this.a * 255).toString(16);
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
    const t = this.getHue(), r = O(this.getSaturation() * 100), o = O(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${o}%,${this.a})` : `hsl(${t},${r}%,${o}%)`;
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
  _sc(t, r, o) {
    const n = this.clone();
    return n[t] = te(r, o), n;
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
    function o(n, i) {
      return parseInt(r[n] + r[i || n], 16);
    }
    r.length < 6 ? (this.r = o(0), this.g = o(1), this.b = o(2), this.a = r[3] ? o(3) / 255 : 1) : (this.r = o(0, 1), this.g = o(2, 3), this.b = o(4, 5), this.a = r[6] ? o(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: o,
    a: n
  }) {
    if (this._h = t % 360, this._s = r, this._l = o, this.a = typeof n == "number" ? n : 1, r <= 0) {
      const m = O(o * 255);
      this.r = m, this.g = m, this.b = m;
    }
    let i = 0, a = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * o - 1)) * r, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, a = u) : l >= 1 && l < 2 ? (i = u, a = c) : l >= 2 && l < 3 ? (a = c, s = u) : l >= 3 && l < 4 ? (a = u, s = c) : l >= 4 && l < 5 ? (i = u, s = c) : l >= 5 && l < 6 && (i = c, s = u);
    const h = o - c / 2;
    this.r = O((i + h) * 255), this.g = O((a + h) * 255), this.b = O((s + h) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: o,
    a: n
  }) {
    this._h = t % 360, this._s = r, this._v = o, this.a = typeof n == "number" ? n : 1;
    const i = O(o * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const a = t / 60, s = Math.floor(a), l = a - s, c = O(o * (1 - r) * 255), u = O(o * (1 - r * l) * 255), h = O(o * (1 - r * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = h, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = h;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = h, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = Ce(t, Ue);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Ce(t, Ue);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Ce(t, (o, n) => (
      // Convert percentage to number. e.g. 50% -> 128
      n.includes("%") ? O(o / 100 * 255) : o
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var ar = ["b"], sr = ["v"], ye = function(t) {
  return Math.round(Number(t || 0));
}, lr = function(t) {
  if (t instanceof le)
    return t;
  if (t && Ft(t) === "object" && "h" in t && "b" in t) {
    var r = t, o = r.b, n = tt(r, ar);
    return A(A({}, n), {}, {
      v: o
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, G = /* @__PURE__ */ function(e) {
  Pt(r, e);
  var t = It(r);
  function r(o) {
    return Ze(this, r), t.call(this, lr(o));
  }
  return ke(r, [{
    key: "toHsbString",
    value: function() {
      var n = this.toHsb(), i = ye(n.s * 100), a = ye(n.b * 100), s = ye(n.h), l = n.a, c = "hsb(".concat(s, ", ").concat(i, "%, ").concat(a, "%)"), u = "hsba(".concat(s, ", ").concat(i, "%, ").concat(a, "%, ").concat(l.toFixed(l === 0 ? 0 : 2), ")");
      return l === 1 ? c : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var n = this.toHsv(), i = n.v, a = tt(n, sr);
      return A(A({}, a), {}, {
        b: i,
        a: this.a
      });
    }
  }]), r;
}(le), cr = "rc-color-picker", Q = function(t) {
  return t instanceof G ? t : new G(t);
}, ur = Q("#1677ff"), st = function(t) {
  var r = t.offset, o = t.targetRef, n = t.containerRef, i = t.color, a = t.type, s = n.current.getBoundingClientRect(), l = s.width, c = s.height, u = o.current.getBoundingClientRect(), h = u.width, m = u.height, b = h / 2, p = m / 2, S = (r.x + b) / l, H = 1 - (r.y + p) / c, _ = i.toHsb(), B = S, y = (r.x + b) / l * 360;
  if (a)
    switch (a) {
      case "hue":
        return Q(A(A({}, _), {}, {
          h: y <= 0 ? 0 : y
        }));
      case "alpha":
        return Q(A(A({}, _), {}, {
          a: B <= 0 ? 0 : B
        }));
    }
  return Q({
    h: _.h,
    s: S <= 0 ? 0 : S,
    b: H >= 1 ? 1 : H,
    a: _.a
  });
}, lt = function(t, r) {
  var o = t.toHsb();
  switch (r) {
    case "hue":
      return {
        x: o.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    default:
      return {
        x: o.s * 100,
        y: (1 - o.b) * 100
      };
  }
}, dr = function(t) {
  var r = t.color, o = t.prefixCls, n = t.className, i = t.style, a = t.onClick, s = "".concat(o, "-color-block");
  return /* @__PURE__ */ g.createElement("div", {
    className: I(s, n),
    style: i,
    onClick: a
  }, /* @__PURE__ */ g.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: r
    }
  }));
};
function gr(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, o = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - o
  };
}
function ct(e) {
  var t = e.targetRef, r = e.containerRef, o = e.direction, n = e.onDragChange, i = e.onDragChangeComplete, a = e.calculate, s = e.color, l = e.disabledDrag, c = d.useState({
    x: 0,
    y: 0
  }), u = Z(c, 2), h = u[0], m = u[1], b = d.useRef(null), p = d.useRef(null);
  d.useEffect(function() {
    m(a());
  }, [s]), d.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", p.current), document.removeEventListener("touchmove", b.current), document.removeEventListener("touchend", p.current), b.current = null, p.current = null;
    };
  }, []);
  var S = function(v) {
    var C = gr(v), w = C.pageX, E = C.pageY, x = r.current.getBoundingClientRect(), P = x.x, j = x.y, V = x.width, z = x.height, T = t.current.getBoundingClientRect(), N = T.width, Y = T.height, F = N / 2, U = Y / 2, D = Math.max(0, Math.min(w - P, V)) - F, f = Math.max(0, Math.min(E - j, z)) - U, X = {
      x: D,
      y: o === "x" ? h.y : f
    };
    if (N === 0 && Y === 0 || N !== Y)
      return !1;
    n == null || n(X);
  }, H = function(v) {
    v.preventDefault(), S(v);
  }, _ = function(v) {
    v.preventDefault(), document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", p.current), document.removeEventListener("touchmove", b.current), document.removeEventListener("touchend", p.current), b.current = null, p.current = null, i == null || i();
  }, B = function(v) {
    document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", p.current), !l && (S(v), document.addEventListener("mousemove", H), document.addEventListener("mouseup", _), document.addEventListener("touchmove", H), document.addEventListener("touchend", _), b.current = H, p.current = _);
  };
  return [h, B];
}
var ut = function(t) {
  var r = t.size, o = r === void 0 ? "default" : r, n = t.color, i = t.prefixCls;
  return /* @__PURE__ */ g.createElement("div", {
    className: I("".concat(i, "-handler"), L({}, "".concat(i, "-handler-sm"), o === "small")),
    style: {
      backgroundColor: n
    }
  });
}, dt = function(t) {
  var r = t.children, o = t.style, n = t.prefixCls;
  return /* @__PURE__ */ g.createElement("div", {
    className: "".concat(n, "-palette"),
    style: A({
      position: "relative"
    }, o)
  }, r);
}, gt = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var r = e.children, o = e.x, n = e.y;
  return /* @__PURE__ */ g.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(o, "%"),
      top: "".concat(n, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), hr = function(t) {
  var r = t.color, o = t.onChange, n = t.prefixCls, i = t.onChangeComplete, a = t.disabled, s = d.useRef(), l = d.useRef(), c = d.useRef(r), u = $e(function(S) {
    var H = st({
      offset: S,
      targetRef: l,
      containerRef: s,
      color: r
    });
    c.current = H, o(H);
  }), h = ct({
    color: r,
    containerRef: s,
    targetRef: l,
    calculate: function() {
      return lt(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(c.current);
    },
    disabledDrag: a
  }), m = Z(h, 2), b = m[0], p = m[1];
  return /* @__PURE__ */ g.createElement("div", {
    ref: s,
    className: "".concat(n, "-select"),
    onMouseDown: p,
    onTouchStart: p
  }, /* @__PURE__ */ g.createElement(dt, {
    prefixCls: n
  }, /* @__PURE__ */ g.createElement(gt, {
    x: b.x,
    y: b.y,
    ref: l
  }, /* @__PURE__ */ g.createElement(ut, {
    color: r.toRgbString(),
    prefixCls: n
  })), /* @__PURE__ */ g.createElement("div", {
    className: "".concat(n, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, fr = function(t, r) {
  var o = Gt(t, {
    value: r
  }), n = Z(o, 2), i = n[0], a = n[1], s = d.useMemo(function() {
    return Q(i);
  }, [i]);
  return [s, a];
}, mr = function(t) {
  var r = t.colors, o = t.children, n = t.direction, i = n === void 0 ? "to right" : n, a = t.type, s = t.prefixCls, l = d.useMemo(function() {
    return r.map(function(c, u) {
      var h = Q(c);
      return a === "alpha" && u === r.length - 1 && (h = new G(h.setA(1))), h.toRgbString();
    }).join(",");
  }, [r, a]);
  return /* @__PURE__ */ g.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(l, ")")
    }
  }, o);
}, vr = function(t) {
  var r = t.prefixCls, o = t.colors, n = t.disabled, i = t.onChange, a = t.onChangeComplete, s = t.color, l = t.type, c = d.useRef(), u = d.useRef(), h = d.useRef(s), m = function(C) {
    return l === "hue" ? C.getHue() : C.a * 100;
  }, b = $e(function(v) {
    var C = st({
      offset: v,
      targetRef: u,
      containerRef: c,
      color: s,
      type: l
    });
    h.current = C, i(m(C));
  }), p = ct({
    color: s,
    targetRef: u,
    containerRef: c,
    calculate: function() {
      return lt(s, l);
    },
    onDragChange: b,
    onDragChangeComplete: function() {
      a(m(h.current));
    },
    direction: "x",
    disabledDrag: n
  }), S = Z(p, 2), H = S[0], _ = S[1], B = g.useMemo(function() {
    if (l === "hue") {
      var v = s.toHsb();
      v.s = 1, v.b = 1, v.a = 1;
      var C = new G(v);
      return C;
    }
    return s;
  }, [s, l]), y = g.useMemo(function() {
    return o.map(function(v) {
      return "".concat(v.color, " ").concat(v.percent, "%");
    });
  }, [o]);
  return /* @__PURE__ */ g.createElement("div", {
    ref: c,
    className: I("".concat(r, "-slider"), "".concat(r, "-slider-").concat(l)),
    onMouseDown: _,
    onTouchStart: _
  }, /* @__PURE__ */ g.createElement(dt, {
    prefixCls: r
  }, /* @__PURE__ */ g.createElement(gt, {
    x: H.x,
    y: H.y,
    ref: u
  }, /* @__PURE__ */ g.createElement(ut, {
    size: "small",
    color: B.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ g.createElement(mr, {
    colors: y,
    type: l,
    prefixCls: r
  })));
};
function br(e) {
  return d.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || vr];
  }, [e]);
}
var pr = [{
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
}], Cr = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var r = e.value, o = e.defaultValue, n = e.prefixCls, i = n === void 0 ? cr : n, a = e.onChange, s = e.onChangeComplete, l = e.className, c = e.style, u = e.panelRender, h = e.disabledAlpha, m = h === void 0 ? !1 : h, b = e.disabled, p = b === void 0 ? !1 : b, S = e.components, H = br(S), _ = Z(H, 1), B = _[0], y = fr(o || ur, r), v = Z(y, 2), C = v[0], w = v[1], E = d.useMemo(function() {
    return C.setA(1).toRgbString();
  }, [C]), x = function(f, X) {
    r || w(f), a == null || a(f, X);
  }, P = function(f) {
    return new G(C.setHue(f));
  }, j = function(f) {
    return new G(C.setA(f / 100));
  }, V = function(f) {
    x(P(f), {
      type: "hue",
      value: f
    });
  }, z = function(f) {
    x(j(f), {
      type: "alpha",
      value: f
    });
  }, T = function(f) {
    s && s(P(f));
  }, N = function(f) {
    s && s(j(f));
  }, Y = I("".concat(i, "-panel"), l, L({}, "".concat(i, "-panel-disabled"), p)), F = {
    prefixCls: i,
    disabled: p,
    color: C
  }, U = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(hr, ne({
    onChange: x
  }, F, {
    onChangeComplete: s
  })), /* @__PURE__ */ g.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ g.createElement("div", {
    className: I("".concat(i, "-slider-group"), L({}, "".concat(i, "-slider-group-disabled-alpha"), m))
  }, /* @__PURE__ */ g.createElement(B, ne({}, F, {
    type: "hue",
    colors: pr,
    min: 0,
    max: 359,
    value: C.getHue(),
    onChange: V,
    onChangeComplete: T
  })), !m && /* @__PURE__ */ g.createElement(B, ne({}, F, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: E
    }],
    min: 0,
    max: 100,
    value: C.a * 100,
    onChange: z,
    onChangeComplete: N
  }))), /* @__PURE__ */ g.createElement(dr, {
    color: C.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ g.createElement("div", {
    className: Y,
    style: c,
    ref: t
  }, typeof u == "function" ? u(U) : U);
});
W.env.NODE_ENV !== "production" && (Cr.displayName = "ColorPicker");
const yr = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", Sr = (e, t) => e ? yr(e, t) : "";
let xr = /* @__PURE__ */ function() {
  function e(t) {
    Ze(this, e);
    var r;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (r = t.colors) === null || r === void 0 ? void 0 : r.map((n) => ({
        color: new e(n.color),
        percent: n.percent
      })), this.cleared = t.cleared;
      return;
    }
    const o = Array.isArray(t);
    o && t.length ? (this.colors = t.map((n) => {
      let {
        color: i,
        percent: a
      } = n;
      return {
        color: new e(i),
        percent: a
      };
    }), this.metaColor = new G(this.colors[0].color.metaColor)) : this.metaColor = new G(o ? "" : t), (!t || o && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return ke(e, [{
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
      return Sr(this.toHexString(), this.metaColor.a < 1);
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
      return r ? `linear-gradient(90deg, ${r.map((n) => `${n.color.toRgbString()} ${n.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(r) {
      return !r || this.isGradient() !== r.isGradient() ? !1 : this.isGradient() ? this.colors.length === r.colors.length && this.colors.every((o, n) => {
        const i = r.colors[n];
        return o.percent === i.percent && o.color.equals(i.color);
      }) : this.toHexString() === r.toHexString();
    }
  }]);
}();
const $r = (e, t) => {
  const {
    r,
    g: o,
    b: n,
    a: i
  } = e.toRgb(), a = new G(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? a.v > 0.5 : r * 0.299 + o * 0.587 + n * 0.114 > 192;
}, ht = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: o
  } = e;
  return se(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: o,
    buttonIconOnlyFontSize: r
  });
}, ft = (e) => {
  var t, r, o, n, i, a;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, c = (o = e.contentFontSizeLG) !== null && o !== void 0 ? o : e.fontSizeLG, u = (n = e.contentLineHeight) !== null && n !== void 0 ? n : fe(s), h = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : fe(l), m = (a = e.contentLineHeightLG) !== null && a !== void 0 ? a : fe(c), b = $r(new xr(e.colorBgSolid), "#fff") ? "#000" : "#fff";
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
    solidTextColor: b,
    contentFontSize: s,
    contentFontSizeSM: l,
    contentFontSizeLG: c,
    contentLineHeight: u,
    contentLineHeightSM: h,
    contentLineHeightLG: m,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - l * h) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - c * m) / 2 - e.lineWidth, 0)
  };
}, Er = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: o
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: o,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${re(e.lineWidth)} ${e.lineType} transparent`,
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
      "&:not(:disabled)": Object.assign({}, jt(e)),
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
}, mt = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), Hr = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Br = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Rr = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ee = (e, t, r, o, n, i, a, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: o || void 0,
    boxShadow: "none"
  }, mt(e, Object.assign({
    background: t
  }, a), Object.assign({
    background: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: n || void 0,
      borderColor: i || void 0
    }
  })
}), Or = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Rr(e))
}), _r = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ce = (e, t, r, o) => {
  const i = o && ["link", "text"].includes(o) ? _r : Or;
  return Object.assign(Object.assign({}, i(e)), mt(e.componentCls, t, r));
}, He = (e, t, r, o, n) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, ce(e, o, n))
}), Be = (e, t, r, o, n) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, ce(e, o, n))
}), Re = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Oe = (e, t, r, o) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, ce(e, r, o))
}), k = (e, t, r, o, n) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, ce(e, o, n, r))
}), wr = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, He(e, e.solidTextColor, e.colorBgSolid, {
  background: e.colorBgSolidHover
}, {
  background: e.colorBgSolidActive
})), Re(e)), Oe(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), k(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ee(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Lr = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Be(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Re(e)), Oe(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), k(e, e.colorLink, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Ee(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Nr = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, He(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Be(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Re(e)), Oe(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), k(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), k(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ee(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Pr = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-color-default`]: wr(e),
    [`${t}-color-primary`]: Lr(e),
    [`${t}-color-dangerous`]: Nr(e)
  };
}, Ir = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Be(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), k(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), He(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), k(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), _e = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: o,
    fontSize: n,
    lineHeight: i,
    borderRadius: a,
    buttonPaddingHorizontal: s,
    iconCls: l,
    buttonPaddingVertical: c
  } = e, u = `${r}-icon-only`;
  return [
    {
      [t]: {
        fontSize: n,
        lineHeight: i,
        height: o,
        padding: `${re(c)} ${re(s)}`,
        borderRadius: a,
        [`&${u}`]: {
          width: o,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${r}-compact-item`]: {
            flex: "none"
          },
          [`&${r}-round`]: {
            width: "auto"
          },
          [l]: {
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
      [`${r}${r}-circle${t}`]: Hr(e)
    },
    {
      [`${r}${r}-round${t}`]: Br(e)
    }
  ];
}, Dr = (e) => {
  const t = se(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return _e(t, e.componentCls);
}, jr = (e) => {
  const t = se(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return _e(t, `${e.componentCls}-sm`);
}, zr = (e) => {
  const t = se(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return _e(t, `${e.componentCls}-lg`);
}, Tr = (e) => {
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
}, Mr = Dt("Button", (e) => {
  const t = ht(e);
  return [
    // Shared
    Er(t),
    // Size
    Dr(t),
    jr(t),
    zr(t),
    // Block
    Tr(t),
    // Color
    Pr(t),
    // https://github.com/ant-design/ant-design/issues/50969
    Ir(t),
    // Button Group
    ir(t)
  ];
}, ft, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Ar(e, t, r) {
  const {
    focusElCls: o,
    focus: n,
    borderElCls: i
  } = r, a = i ? "> *" : "", s = ["hover", n ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${a}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function Wr(e, t, r) {
  const {
    borderElCls: o
  } = r, n = o ? `> ${o}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${n}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${n}, &${e}-sm ${n}, &${e}-lg ${n}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${n}, &${e}-sm ${n}, &${e}-lg ${n}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Gr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, o = `${r}-compact`;
  return {
    [o]: Object.assign(Object.assign({}, Ar(e, o, t)), Wr(r, o, t))
  };
}
function Vr(e, t) {
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
function Fr(e, t) {
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
function qr(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Vr(e, t)), Fr(e.componentCls, t))
  };
}
const Xr = (e) => {
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
            height: `calc(100% + ${re(e.lineWidth)} * 2)`,
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
              width: `calc(100% + ${re(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Yr = zt(["Button", "compact"], (e) => {
  const t = ht(e);
  return [
    // Space Compact
    Gr(t),
    qr(t),
    Xr(t)
  ];
}, ft);
var Ur = function(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
    t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
  return r;
};
function Jr(e) {
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
const Kr = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  link: ["primary", "link"],
  text: ["default", "text"]
}, Qr = /* @__PURE__ */ g.forwardRef((e, t) => {
  var r, o, n, i;
  const {
    loading: a = !1,
    prefixCls: s,
    color: l,
    variant: c,
    type: u,
    danger: h = !1,
    shape: m = "default",
    size: b,
    styles: p,
    disabled: S,
    className: H,
    rootClassName: _,
    children: B,
    icon: y,
    iconPosition: v = "start",
    ghost: C = !1,
    block: w = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: E = "button",
    classNames: x,
    style: P = {},
    autoInsertSpace: j
  } = e, V = Ur(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), z = u || "default", [T, N] = d.useMemo(() => {
    if (l && c)
      return [l, c];
    const R = Kr[z] || [];
    return h ? ["danger", R[1]] : R;
  }, [u, l, c, h]), F = T === "danger" ? "dangerous" : T, {
    getPrefixCls: U,
    direction: D,
    button: f
  } = d.useContext(ae), X = (r = j ?? (f == null ? void 0 : f.autoInsertSpace)) !== null && r !== void 0 ? r : !0, $ = U("btn", s), [Le, vt, bt] = Mr($), pt = d.useContext(Tt), J = S ?? pt, Ct = d.useContext(it), ee = d.useMemo(() => Jr(a), [a]), [q, Ne] = d.useState(ee.loading), [ue, Pe] = d.useState(!1), K = xe(t, /* @__PURE__ */ d.createRef()), Ie = d.Children.count(B) === 1 && !y && !oe(N);
  d.useEffect(() => {
    let R = null;
    ee.delay > 0 ? R = setTimeout(() => {
      R = null, Ne(!0);
    }, ee.delay) : Ne(ee.loading);
    function M() {
      R && (clearTimeout(R), R = null);
    }
    return M;
  }, [ee]), d.useEffect(() => {
    if (!K || !K.current || !X)
      return;
    const R = K.current.textContent;
    Ie && Se(R) ? ue || Pe(!0) : ue && Pe(!1);
  }, [K]);
  const De = g.useCallback((R) => {
    var M;
    if (q || J) {
      R.preventDefault();
      return;
    }
    (M = e.onClick) === null || M === void 0 || M.call(e, R);
  }, [e.onClick, q, J]);
  if (W.env.NODE_ENV !== "production") {
    const R = Qe("Button");
    W.env.NODE_ENV !== "production" && R(!(typeof y == "string" && y.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${y}\` at https://ant.design/components/icon`), W.env.NODE_ENV !== "production" && R(!(C && oe(N)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: yt,
    compactItemClassnames: je
  } = Vt($, D), St = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ze = kt((R) => {
    var M, he;
    return (he = (M = b ?? yt) !== null && M !== void 0 ? M : Ct) !== null && he !== void 0 ? he : R;
  }), Te = ze && (o = St[ze]) !== null && o !== void 0 ? o : "", xt = q ? "loading" : y, de = Mt(V, ["navigate"]), Me = I($, vt, bt, {
    [`${$}-${m}`]: m !== "default" && m,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${$}-${z}`]: z,
    [`${$}-dangerous`]: h,
    [`${$}-color-${F}`]: F,
    [`${$}-variant-${N}`]: N,
    [`${$}-${Te}`]: Te,
    [`${$}-icon-only`]: !B && B !== 0 && !!xt,
    [`${$}-background-ghost`]: C && !oe(N),
    [`${$}-loading`]: q,
    [`${$}-two-chinese-chars`]: ue && X && !q,
    [`${$}-block`]: w,
    [`${$}-rtl`]: D === "rtl",
    [`${$}-icon-end`]: v === "end"
  }, je, H, _, f == null ? void 0 : f.className), Ae = Object.assign(Object.assign({}, f == null ? void 0 : f.style), P), $t = I(x == null ? void 0 : x.icon, (n = f == null ? void 0 : f.classNames) === null || n === void 0 ? void 0 : n.icon), Et = Object.assign(Object.assign({}, (p == null ? void 0 : p.icon) || {}), ((i = f == null ? void 0 : f.styles) === null || i === void 0 ? void 0 : i.icon) || {}), We = y && !q ? /* @__PURE__ */ g.createElement(at, {
    prefixCls: $,
    className: $t,
    style: Et
  }, y) : /* @__PURE__ */ g.createElement(nr, {
    existIcon: !!y,
    prefixCls: $,
    loading: q
  }), Ge = B || B === 0 ? or(B, Ie && X) : null;
  if (de.href !== void 0)
    return Le(/* @__PURE__ */ g.createElement("a", Object.assign({}, de, {
      className: I(Me, {
        [`${$}-disabled`]: J
      }),
      href: J ? void 0 : de.href,
      style: Ae,
      onClick: De,
      ref: K,
      tabIndex: J ? -1 : 0
    }), We, Ge));
  let ge = /* @__PURE__ */ g.createElement("button", Object.assign({}, V, {
    type: E,
    className: Me,
    style: Ae,
    onClick: De,
    disabled: J,
    ref: K
  }), We, Ge, !!je && /* @__PURE__ */ g.createElement(Yr, {
    key: "compact",
    prefixCls: $
  }));
  return oe(N) || (ge = /* @__PURE__ */ g.createElement(nt, {
    component: "Button",
    disabled: q
  }, ge)), Le(ge);
}), we = Qr;
we.Group = tr;
we.__ANT_BUTTON = !0;
W.env.NODE_ENV !== "production" && (we.displayName = "Button");
export {
  we as B,
  rt as R,
  io as a,
  Gr as g,
  kt as u
};
