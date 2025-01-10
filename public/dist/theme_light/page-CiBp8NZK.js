var et = Object.defineProperty;
var tt = (i, r, u) => r in i ? et(i, r, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[r] = u;
var Ae = (i, r, u) => tt(i, typeof r != "symbol" ? r + "" : r, u);
import { j as n } from "./vendor-radix-BYJ0AyiX.js";
import { N as nt, M as st, O as at, q as ke, m as rt, n as it, v as ot, c as M, g as $e, I as qe, aH as lt, aa as ct, B as _e, t as R, aI as dt, i as je, aJ as Ne, f as Re, j as De, a as ut, aK as ht, ag as ft, aq as pt, aL as ze, a4 as pe, $ as be, h as mt, ad as gt, aM as xt, ar as bt, G as vt, D as yt, b as kt, d as wt, e as _t, aN as Tt } from "./main-B1SHNhU7.js";
import { r as S, p as Me, o as jt, q as Et, d as Nt, g as Ct, k as Ge } from "./vendor-react-CuOkI7kW.js";
import { u as St, i as He, L as At, f as Ke, g as Fe, T as It, P as Ot, I as Rt } from "./vendor-ui-utils-2_WY-nJY.js";
import { u as Qe, B as Ie } from "./vendor-utils-BfzDPiRN.js";
import { u as Dt } from "./useTransaction-BGUQGS07.js";
import { w as Pe, x as Mt, j as Ft, l as Vt, n as $t, i as Te, u as Ce } from "./vendor-web3-DDgB3Js4.js";
import { d as Lt } from "./index-jfo5xPVO.js";
const zt = (i) => {
  const {
    componentCls: r,
    sizePaddingEdgeHorizontal: u,
    colorSplit: a,
    lineWidth: l,
    textPaddingInline: f,
    orientationMargin: b,
    verticalMarginInline: m
  } = i;
  return {
    [r]: Object.assign(Object.assign({}, at(i)), {
      borderBlockStart: `${ke(l)} solid ${a}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        marginInline: m,
        marginBlock: 0,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${ke(l)} solid ${a}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${ke(i.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${r}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${ke(i.dividerHorizontalWithTextGutterMargin)} 0`,
        color: i.colorTextHeading,
        fontWeight: 500,
        fontSize: i.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${a}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${ke(l)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${r}-with-text-left`]: {
        "&::before": {
          width: `calc(${b} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${b} * 100%)`
        }
      },
      [`&-horizontal${r}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${b} * 100%)`
        },
        "&::after": {
          width: `calc(${b} * 100%)`
        }
      },
      [`${r}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: f
      },
      "&-dashed": {
        background: "none",
        borderColor: a,
        borderStyle: "dashed",
        borderWidth: `${ke(l)} 0 0`
      },
      [`&-horizontal${r}-with-text${r}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${r}-dashed`]: {
        borderInlineStartWidth: l,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-dotted": {
        background: "none",
        borderColor: a,
        borderStyle: "dotted",
        borderWidth: `${ke(l)} 0 0`
      },
      [`&-horizontal${r}-with-text${r}-dotted`]: {
        "&::before, &::after": {
          borderStyle: "dotted none none"
        }
      },
      [`&-vertical${r}-dotted`]: {
        borderInlineStartWidth: l,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${r}-with-text`]: {
        color: i.colorText,
        fontWeight: "normal",
        fontSize: i.fontSize
      },
      [`&-horizontal${r}-with-text-left${r}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${r}-inner-text`]: {
          paddingInlineStart: u
        }
      },
      [`&-horizontal${r}-with-text-right${r}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${r}-inner-text`]: {
          paddingInlineEnd: u
        }
      }
    })
  };
}, Pt = (i) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: i.marginXS
}), Bt = nt("Divider", (i) => {
  const r = st(i, {
    dividerHorizontalWithTextGutterMargin: i.margin,
    dividerHorizontalGutterMargin: i.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [zt(r)];
}, Pt, {
  unitless: {
    orientationMargin: !0
  }
});
var Wt = function(i, r) {
  var u = {};
  for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && r.indexOf(a) < 0 && (u[a] = i[a]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, a = Object.getOwnPropertySymbols(i); l < a.length; l++)
    r.indexOf(a[l]) < 0 && Object.prototype.propertyIsEnumerable.call(i, a[l]) && (u[a[l]] = i[a[l]]);
  return u;
};
const Je = (i) => {
  const {
    getPrefixCls: r,
    direction: u,
    divider: a
  } = S.useContext(rt), {
    prefixCls: l,
    type: f = "horizontal",
    orientation: b = "center",
    orientationMargin: m,
    className: c,
    rootClassName: _,
    children: j,
    dashed: O,
    variant: F = "solid",
    plain: Z,
    style: B
  } = i, re = Wt(i, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), D = r("divider", l), [ee, z, P] = Bt(D), K = !!j, te = b === "left" && m != null, Q = b === "right" && m != null, I = it(D, a == null ? void 0 : a.className, z, P, `${D}-${f}`, {
    [`${D}-with-text`]: K,
    [`${D}-with-text-${b}`]: K,
    [`${D}-dashed`]: !!O,
    [`${D}-${F}`]: F !== "solid",
    [`${D}-plain`]: !!Z,
    [`${D}-rtl`]: u === "rtl",
    [`${D}-no-default-orientation-margin-left`]: te,
    [`${D}-no-default-orientation-margin-right`]: Q
  }, c, _), t = S.useMemo(() => typeof m == "number" ? m : /^\d+$/.test(m) ? Number(m) : m, [m]), e = Object.assign(Object.assign({}, te && {
    marginLeft: t
  }), Q && {
    marginRight: t
  });
  if (Me.env.NODE_ENV !== "production") {
    const o = ot("Divider");
    Me.env.NODE_ENV !== "production" && o(!j || f !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return ee(/* @__PURE__ */ S.createElement("div", Object.assign({
    className: I,
    style: Object.assign(Object.assign({}, a == null ? void 0 : a.style), B)
  }, re, {
    role: "separator"
  }), j && f !== "vertical" && /* @__PURE__ */ S.createElement("span", {
    className: `${D}-inner-text`,
    style: e
  }, j)));
};
Me.env.NODE_ENV !== "production" && (Je.displayName = "Divider");
const Oe = 337;
function Ut({
  className: i,
  onSuccess: r,
  disabled: u = !1,
  loading: a = !1,
  ...l
}) {
  const [f, b] = S.useState(!1), [m, c] = S.useState(0), [_, j] = S.useState(!1), O = S.useRef(null), F = S.useRef(null), Z = S.useRef(0), B = () => {
    const z = Date.now();
    z - Z.current >= 1e3 ? (Z.current = z, j(!0), b(!1), $e("onSuccess"), r == null || r()) : (c(0), b(!1));
  }, re = (z, P) => {
    u || a || b(!0);
  }, D = (z) => {
    if (!f || !O.current || !F.current) return;
    const P = O.current, K = F.current, te = P.getBoundingClientRect();
    let Q = z - te.left - K.offsetWidth / 2;
    if (z - te.left < K.offsetWidth / 2) {
      c(0);
      return;
    }
    Q + K.offsetWidth >= Oe && (Q = Oe - K.offsetWidth - 2, B()), c(Q);
  }, ee = () => {
    _ || c(0), b(!1);
  };
  return S.useEffect(() => {
    const z = (K) => D(K.clientX), P = (K) => {
      K.preventDefault(), D(K.touches[0].clientX);
    };
    return f && (window.addEventListener("mousemove", z), window.addEventListener("mouseup", ee), window.addEventListener("touchmove", P, { passive: !1 }), window.addEventListener("touchend", ee)), () => {
      window.removeEventListener("mousemove", z), window.removeEventListener("mouseup", ee), window.removeEventListener("touchmove", P), window.removeEventListener("touchend", ee);
    };
  }, [f]), S.useEffect(() => {
    !u && !a && (c(0), j(!1));
  }, [u, a]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: O,
      className: M(
        "relative h-[42px] rounded-full ring-1 ring-[#e0e0e0] ring-offset-[3px] cursor-pointer select-none touch-none",
        u && "cursor-not-allowed",
        i
      ),
      style: { width: `${Oe}px` },
      ...l,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: M(
              "absolute left-0 h-[42px] bg-black rounded-full",
              u && "bg-[#f2f2f2]"
            ),
            style: { width: `${m + 42}px` }
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: F,
            className: M(
              "absolute z-10 left-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center cursor-grab",
              f && "cursor-grabbing",
              u && "bg-[#f2f2f2]"
            ),
            style: { transform: `translate(${m}px, -50%)` },
            onMouseDown: (z) => re(z.clientX),
            onTouchStart: (z) => re(z.touches[0].clientX),
            children: /* @__PURE__ */ n.jsx(St, { className: M("w-[20px] h-[20px] text-white") })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "absolute text-white inset-0 flex items-center justify-center pointer-events-none", children: a ? /* @__PURE__ */ n.jsx(He, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ n.jsx("span", { className: M(
          "text-black text-base font-bold leading-tight",
          u && "text-[#e0e0e0]"
        ), children: "Slide to send" }) })
      ]
    }
  );
}
function qt({
  index: i,
  transfer: r,
  validation: {
    isValidating: u,
    isValidEmail: a,
    fullAddress: l,
    error: f
  },
  handleToChange: b,
  handleToBlur: m,
  sending: c
}) {
  const { t: _ } = Qe(), j = _("/dashboard.[token].sendModal.unregisteredEmailNotice");
  return /* @__PURE__ */ n.jsxs("div", { className: M(
    "flex items-center px-0 relative",
    (a && l || f) && "mb-[16px] tablet:mb-0"
  ), children: [
    /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
      i + 1,
      "."
    ] }),
    /* @__PURE__ */ n.jsx(
      qe,
      {
        disabled: c,
        value: r.to,
        onChange: (O) => b(O, i),
        onBlur: () => m(i),
        placeholder: "Enter email or crypto address",
        className: M(
          "desktop:w-[380px] laptop:w-[318px] tablet:w-[426px] w-[322px]",
          a && "border-green-500 focus-visible:border-green-500",
          f && "border-destructive focus-visible:border-destructive",
          f === j && "border-blue-500 focus-visible:border-blue-500",
          "pr-10"
        )
      }
    ),
    u && /* @__PURE__ */ n.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ n.jsx(At, { className: "animate-spin", size: 16 }) }),
    a && !u && !f && /* @__PURE__ */ n.jsx(Ke, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
    f && !u && /* @__PURE__ */ n.jsx(Fe, { className: M(
      "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
      f === j && "text-blue-500"
    ), size: 16 }),
    a && l && /* @__PURE__ */ n.jsx("p", { className: "absolute -bottom-[20px] left-[22px] mt-1 text-xs text-primary/60", children: l }),
    f && /* @__PURE__ */ n.jsx("p", { className: M(
      "absolute -bottom-[20px] left-[22px] text-xs text-destructive",
      f === j && "text-blue-400"
    ), children: f })
  ] });
}
function Be({
  index: i,
  transfer: r,
  handleNoteChange: u,
  sending: a
}) {
  return /* @__PURE__ */ n.jsx(
    lt,
    {
      disabled: a,
      rows: 1,
      value: r.note,
      onChange: (l) => u(l, i),
      className: M(
        "min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border focus-visible:border-black placeholder:text-black/25",
        "desktop:w-[308px] laptop:w-[299px] tablet:w-[658px] w-[322px]"
      ),
      placeholder: "Write a note to the recipient"
    }
  );
}
function We({
  index: i,
  handleDeleteTransfer: r,
  sending: u
}) {
  return /* @__PURE__ */ n.jsx(
    It,
    {
      className: M(
        "w-[20px] h-[20px] text-[#979797] cursor-pointer",
        u && "hidden"
      ),
      onClick: () => r(i)
    }
  );
}
function Gt({
  isOpen: i,
  onClose: r
}) {
  const u = /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ n.jsx(_e, { className: "", variant: "outline", onClick: () => r(!0), children: "Quit" }),
    /* @__PURE__ */ n.jsx(_e, { className: "", onClick: () => r(!1), children: "Stay" })
  ] });
  return /* @__PURE__ */ n.jsx(
    ct,
    {
      isOpen: i,
      onClose: () => r(!1),
      title: "Are you sure you want to quit?",
      footer: u,
      children: /* @__PURE__ */ n.jsx("p", { className: "text-sm leading-none my-3", children: "Your progress may not be saved." })
    }
  );
}
function Ht({ shouldBlock: i }) {
  const [r, u] = S.useState(!1);
  jt(
    S.useCallback((f) => {
      if (i)
        return f.preventDefault(), f.returnValue = "You have unsaved changes, are you sure you want to leave?";
    }, [i])
  );
  const a = Et(
    S.useCallback(() => i ? (u(!0), !0) : !1, [i])
  );
  return {
    showExitPrompt: r,
    handleExitPrompt: (f) => {
      var b;
      u(!1), f && ((b = a == null ? void 0 : a.proceed) == null || b.call(a));
    }
  };
}
class Kt {
  constructor(r = 800) {
    Ae(this, "cache", /* @__PURE__ */ new Map());
    Ae(this, "expiryTime");
    this.expiryTime = r;
  }
  async getOrCreate(r, u) {
    const a = Date.now(), l = this.cache.get(r);
    if (l && a - l.timestamp < this.expiryTime)
      return l.promise;
    const f = u();
    this.cache.set(r, {
      promise: f,
      timestamp: a
    });
    try {
      return await f;
    } finally {
      setTimeout(() => {
        var b;
        ((b = this.cache.get(r)) == null ? void 0 : b.timestamp) === a && this.cache.delete(r);
      }, this.expiryTime);
    }
  }
  clear() {
    this.cache.clear();
  }
}
const Ue = /* @__PURE__ */ new Map(), Qt = ({
  tokenType: i,
  transferParams: r,
  fromAddress: u
}) => JSON.stringify({
  tokenType: i,
  to: r.to.toLowerCase(),
  amount: r.amount.toString(),
  from: u.toLowerCase()
}), Jt = new Kt(5e3);
async function Yt({
  tokenType: i,
  transferParams: r,
  fromAddress: u,
  defaultGasPrice: a,
  defaultBlock: l
}) {
  const f = Qt({ tokenType: i, transferParams: r, fromAddress: u });
  return Jt.getOrCreate(f, async () => {
    const b = Ue.get(f);
    if (b)
      return b.result;
    try {
      const m = R.getToken(i).viemChain;
      if (!m) return null;
      if (R.getToken(i).gasless)
        return {
          estimatedGas: BigInt(0),
          maxFeePerGas: BigInt(0),
          maxPriorityFeePerGas: BigInt(0),
          estimatedTotalFee: BigInt(0),
          baseFee: BigInt(0),
          gasPrice: BigInt(0),
          feeInTokens: "0"
        };
      const c = Ft({
        chain: m,
        transport: Vt()
      });
      let _;
      if (R.isERC20Token(i) && (_ = R.getToken(i).contractAddress, !_))
        throw new Error("Invalid token contract address");
      let j;
      if (R.isERC20Token(i)) {
        const K = $t({
          abi: dt,
          functionName: "transfer",
          args: [r.to, r.amount]
        });
        j = {
          to: _,
          data: K,
          value: BigInt(0)
        };
      } else
        j = {
          to: r.to,
          value: r.amount
        };
      $e("start to call getEstimatedGasFeeByToken", { tokenType: i, transferParams: r, fromAddress: u });
      const O = await c.estimateGas({
        ...j,
        account: u
      }), F = a || await c.getGasPrice(), B = (l || await c.getBlock()).baseFeePerGas || BigInt(0), re = F > B ? F - B : BigInt(1e9), D = B + re * BigInt(2), ee = O * D, z = je(
        (Number(ee) / Math.pow(10, 18)).toString(),
        18
      ), P = {
        estimatedGas: O,
        maxFeePerGas: D,
        maxPriorityFeePerGas: re,
        estimatedTotalFee: ee,
        baseFee: B,
        gasPrice: F,
        feeInTokens: Ne(z)
      };
      return Ue.set(f, {
        result: P,
        params: {
          tokenType: i,
          transferParams: r,
          fromAddress: u
        }
      }), console.log("Cache updated:", f), P;
    } catch (m) {
      throw console.error("Gas estimation error:", m), m;
    }
  });
}
const Xt = (i) => {
  if (!i.length)
    return { isValid: !1, error: "CSV file is empty" };
  const r = i[0];
  if (!Array.isArray(r) || r.length < 4)
    return {
      isValid: !1,
      error: "Invalid CSV format: missing required columns"
    };
  const u = ["To", "Note", "Token", "Amount"], a = r.map((f) => f.trim());
  for (let f = 0; f < u.length; f++)
    if (a[f] !== u[f])
      return {
        isValid: !1,
        error: `Invalid header format. Expected: ${u.join(", ")}`
      };
  const l = R.getAllTokens().map((f) => f.tokenType);
  for (let f = 1; f < i.length; f++) {
    const b = i[f];
    if (!(!b[0] || b[0].trim() === "")) {
      if (!(Te(b[0]) || De.test(b[0])))
        return {
          isValid: !1,
          error: `Invalid to format at row ${f + 1}`
        };
      if (!b[2] || !l.includes(b[2].toUpperCase()))
        return {
          isValid: !1,
          error: `Invalid token type at row ${f + 1}. Allowed tokens: ${l.join(", ")}`
        };
      if (!b[3] || isNaN(Number(b[3])) || Number(b[3]) <= 0)
        return {
          isValid: !1,
          error: `Invalid amount at row ${f + 1}`
        };
    }
  }
  return { isValid: !0 };
}, Ve = /* @__PURE__ */ new Map(), Zt = 5 * 60 * 1e3;
async function en(i) {
  const r = Ve.get(i), u = Date.now();
  if (r && u - r.timestamp < Zt)
    return {
      data: r.data
    };
  const a = await Re.get("/address/", {
    params: { email: i }
  });
  return Ve.set(i, {
    data: a.data,
    timestamp: u
  }), a;
}
function tn() {
  Ve.clear();
}
const Ye = (i) => i ? Object.entries(i).reduce((r, [u, a]) => {
  if (u === "usdValue") return r;
  const l = R.getToken(u).gasSymbol, f = Pe(r[l] || "0", 18);
  return r[l] = Mt(f + Pe(a, 18), 18), r;
}, {}) : null;
var Xe = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(i, r) {
  (function(u, a) {
    i.exports = a();
  })(Nt, function u() {
    var a = typeof self < "u" ? self : typeof window < "u" ? window : a !== void 0 ? a : {}, l = !a.document && !!a.postMessage, f = a.IS_PAPA_WORKER || !1, b = {}, m = 0, c = { parse: function(t, e) {
      var o = (e = e || {}).dynamicTyping || !1;
      if (I(o) && (e.dynamicTypingFunction = o, o = {}), e.dynamicTyping = o, e.transform = !!I(e.transform) && e.transform, e.worker && c.WORKERS_SUPPORTED) {
        var x = function() {
          if (!c.WORKERS_SUPPORTED) return !1;
          var w = (U = a.URL || a.webkitURL || null, V = u.toString(), c.BLOB_URL || (c.BLOB_URL = U.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", V, ")();"], { type: "text/javascript" })))), T = new a.Worker(w), U, V;
          return T.onmessage = z, T.id = m++, b[T.id] = T;
        }();
        return x.userStep = e.step, x.userChunk = e.chunk, x.userComplete = e.complete, x.userError = e.error, e.step = I(e.step), e.chunk = I(e.chunk), e.complete = I(e.complete), e.error = I(e.error), delete e.worker, void x.postMessage({ input: t, config: e, workerId: x.id });
      }
      var v = null;
      return c.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(w) {
        return w.charCodeAt(0) === 65279 ? w.slice(1) : w;
      }(t), v = e.download ? new O(e) : new Z(e)) : t.readable === !0 && I(t.read) && I(t.on) ? v = new B(e) : (a.File && t instanceof File || t instanceof Object) && (v = new F(e)), v.stream(t);
    }, unparse: function(t, e) {
      var o = !1, x = !0, v = ",", w = `\r
`, T = '"', U = T + T, V = !1, k = null, q = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || c.BAD_DELIMITERS.filter(function(y) {
            return e.delimiter.indexOf(y) !== -1;
          }).length || (v = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (o = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (V = e.skipEmptyLines), typeof e.newline == "string" && (w = e.newline), typeof e.quoteChar == "string" && (T = e.quoteChar), typeof e.header == "boolean" && (x = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            k = e.columns;
          }
          e.escapeChar !== void 0 && (U = e.escapeChar + T), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (q = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var E = new RegExp(D(T), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return oe(null, t, V);
        if (typeof t[0] == "object") return oe(k || Object.keys(t[0]), t, V);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || k), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), oe(t.fields || [], t.data || [], V);
      throw new Error("Unable to serialize unrecognized input");
      function oe(y, L, se) {
        var G = "";
        typeof y == "string" && (y = JSON.parse(y)), typeof L == "string" && (L = JSON.parse(L));
        var ae = Array.isArray(y) && 0 < y.length, Y = !Array.isArray(L[0]);
        if (ae && x) {
          for (var X = 0; X < y.length; X++) 0 < X && (G += v), G += ne(y[X], X);
          0 < L.length && (G += w);
        }
        for (var s = 0; s < L.length; s++) {
          var h = ae ? y.length : L[s].length, d = !1, p = ae ? Object.keys(L[s]).length === 0 : L[s].length === 0;
          if (se && !ae && (d = se === "greedy" ? L[s].join("").trim() === "" : L[s].length === 1 && L[s][0].length === 0), se === "greedy" && ae) {
            for (var g = [], N = 0; N < h; N++) {
              var C = Y ? y[N] : N;
              g.push(L[s][C]);
            }
            d = g.join("").trim() === "";
          }
          if (!d) {
            for (var A = 0; A < h; A++) {
              0 < A && !p && (G += v);
              var W = ae && Y ? y[A] : A;
              G += ne(L[s][W], A);
            }
            s < L.length - 1 && (!se || 0 < h && !p) && (G += w);
          }
        }
        return G;
      }
      function ne(y, L) {
        if (y == null) return "";
        if (y.constructor === Date) return JSON.stringify(y).slice(1, 25);
        var se = !1;
        q && typeof y == "string" && q.test(y) && (y = "'" + y, se = !0);
        var G = y.toString().replace(E, U);
        return (se = se || o === !0 || typeof o == "function" && o(y, L) || Array.isArray(o) && o[L] || function(ae, Y) {
          for (var X = 0; X < Y.length; X++) if (-1 < ae.indexOf(Y[X])) return !0;
          return !1;
        }(G, c.BAD_DELIMITERS) || -1 < G.indexOf(v) || G.charAt(0) === " " || G.charAt(G.length - 1) === " ") ? T + G + T : G;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !l && !!a.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = ee, c.ParserHandle = re, c.NetworkStreamer = O, c.FileStreamer = F, c.StringStreamer = Z, c.ReadableStreamStreamer = B, a.jQuery) {
      var _ = a.jQuery;
      _.fn.parse = function(t) {
        var e = t.config || {}, o = [];
        return this.each(function(w) {
          if (!(_(this).prop("tagName").toUpperCase() === "INPUT" && _(this).attr("type").toLowerCase() === "file" && a.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var T = 0; T < this.files.length; T++) o.push({ file: this.files[T], inputElem: this, instanceConfig: _.extend({}, e) });
        }), x(), this;
        function x() {
          if (o.length !== 0) {
            var w, T, U, V, k = o[0];
            if (I(t.before)) {
              var q = t.before(k.file, k.inputElem);
              if (typeof q == "object") {
                if (q.action === "abort") return w = "AbortError", T = k.file, U = k.inputElem, V = q.reason, void (I(t.error) && t.error({ name: w }, T, U, V));
                if (q.action === "skip") return void v();
                typeof q.config == "object" && (k.instanceConfig = _.extend(k.instanceConfig, q.config));
              } else if (q === "skip") return void v();
            }
            var E = k.instanceConfig.complete;
            k.instanceConfig.complete = function(oe) {
              I(E) && E(oe, k.file, k.inputElem), v();
            }, c.parse(k.file, k.instanceConfig);
          } else I(t.complete) && t.complete();
        }
        function v() {
          o.splice(0, 1), x();
        }
      };
    }
    function j(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var o = te(e);
        o.chunkSize = parseInt(o.chunkSize), e.step || e.chunk || (o.chunkSize = null), this._handle = new re(o), (this._handle.streamer = this)._config = o;
      }).call(this, t), this.parseChunk = function(e, o) {
        if (this.isFirstChunk && I(this._config.beforeFirstChunk)) {
          var x = this._config.beforeFirstChunk(e);
          x !== void 0 && (e = x);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var v = this._partialLine + e;
        this._partialLine = "";
        var w = this._handle.parse(v, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var T = w.meta.cursor;
          this._finished || (this._partialLine = v.substring(T - this._baseIndex), this._baseIndex = T), w && w.data && (this._rowCount += w.data.length);
          var U = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (f) a.postMessage({ results: w, workerId: c.WORKER_ID, finished: U });
          else if (I(this._config.chunk) && !o) {
            if (this._config.chunk(w, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            w = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(w.data), this._completeResults.errors = this._completeResults.errors.concat(w.errors), this._completeResults.meta = w.meta), this._completed || !U || !I(this._config.complete) || w && w.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), U || w && w.meta.paused || this._nextChunk(), w;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        I(this._config.error) ? this._config.error(e) : f && this._config.error && a.postMessage({ workerId: c.WORKER_ID, error: e, finished: !1 });
      };
    }
    function O(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = c.RemoteChunkSize), j.call(this, t), this._nextChunk = l ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(o) {
        this._input = o, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), l || (e.onload = Q(this._chunkLoaded, this), e.onerror = Q(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !l), this._config.downloadRequestHeaders) {
            var o = this._config.downloadRequestHeaders;
            for (var x in o) e.setRequestHeader(x, o[x]);
          }
          if (this._config.chunkSize) {
            var v = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + v);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (w) {
            this._chunkError(w.message);
          }
          l && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(o) {
          var x = o.getResponseHeader("Content-Range");
          return x === null ? -1 : parseInt(x.substring(x.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(o) {
        var x = e.statusText || o;
        this._sendError(new Error(x));
      };
    }
    function F(t) {
      var e, o;
      (t = t || {}).chunkSize || (t.chunkSize = c.LocalChunkSize), j.call(this, t);
      var x = typeof FileReader < "u";
      this.stream = function(v) {
        this._input = v, o = v.slice || v.webkitSlice || v.mozSlice, x ? ((e = new FileReader()).onload = Q(this._chunkLoaded, this), e.onerror = Q(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var v = this._input;
        if (this._config.chunkSize) {
          var w = Math.min(this._start + this._config.chunkSize, this._input.size);
          v = o.call(v, this._start, w);
        }
        var T = e.readAsText(v, this._config.encoding);
        x || this._chunkLoaded({ target: { result: T } });
      }, this._chunkLoaded = function(v) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(v.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function Z(t) {
      var e;
      j.call(this, t = t || {}), this.stream = function(o) {
        return e = o, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var o, x = this._config.chunkSize;
          return x ? (o = e.substring(0, x), e = e.substring(x)) : (o = e, e = ""), this._finished = !e, this.parseChunk(o);
        }
      };
    }
    function B(t) {
      j.call(this, t = t || {});
      var e = [], o = !0, x = !1;
      this.pause = function() {
        j.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        j.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(v) {
        this._input = v, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        x && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : o = !0;
      }, this._streamData = Q(function(v) {
        try {
          e.push(typeof v == "string" ? v : v.toString(this._config.encoding)), o && (o = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (w) {
          this._streamError(w);
        }
      }, this), this._streamError = Q(function(v) {
        this._streamCleanUp(), this._sendError(v);
      }, this), this._streamEnd = Q(function() {
        this._streamCleanUp(), x = !0, this._streamData("");
      }, this), this._streamCleanUp = Q(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function re(t) {
      var e, o, x, v = Math.pow(2, 53), w = -v, T = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, U = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, V = this, k = 0, q = 0, E = !1, oe = !1, ne = [], y = { data: [], errors: [], meta: {} };
      if (I(t.step)) {
        var L = t.step;
        t.step = function(s) {
          if (y = s, ae()) G();
          else {
            if (G(), y.data.length === 0) return;
            k += s.data.length, t.preview && k > t.preview ? o.abort() : (y.data = y.data[0], L(y, V));
          }
        };
      }
      function se(s) {
        return t.skipEmptyLines === "greedy" ? s.join("").trim() === "" : s.length === 1 && s[0].length === 0;
      }
      function G() {
        return y && x && (X("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), x = !1), t.skipEmptyLines && (y.data = y.data.filter(function(s) {
          return !se(s);
        })), ae() && function() {
          if (!y) return;
          function s(d, p) {
            I(t.transformHeader) && (d = t.transformHeader(d, p)), ne.push(d);
          }
          if (Array.isArray(y.data[0])) {
            for (var h = 0; ae() && h < y.data.length; h++) y.data[h].forEach(s);
            y.data.splice(0, 1);
          } else y.data.forEach(s);
        }(), function() {
          if (!y || !t.header && !t.dynamicTyping && !t.transform) return y;
          function s(d, p) {
            var g, N = t.header ? {} : [];
            for (g = 0; g < d.length; g++) {
              var C = g, A = d[g];
              t.header && (C = g >= ne.length ? "__parsed_extra" : ne[g]), t.transform && (A = t.transform(A, C)), A = Y(C, A), C === "__parsed_extra" ? (N[C] = N[C] || [], N[C].push(A)) : N[C] = A;
            }
            return t.header && (g > ne.length ? X("FieldMismatch", "TooManyFields", "Too many fields: expected " + ne.length + " fields but parsed " + g, q + p) : g < ne.length && X("FieldMismatch", "TooFewFields", "Too few fields: expected " + ne.length + " fields but parsed " + g, q + p)), N;
          }
          var h = 1;
          return !y.data.length || Array.isArray(y.data[0]) ? (y.data = y.data.map(s), h = y.data.length) : y.data = s(y.data, 0), t.header && y.meta && (y.meta.fields = ne), q += h, y;
        }();
      }
      function ae() {
        return t.header && ne.length === 0;
      }
      function Y(s, h) {
        return d = s, t.dynamicTypingFunction && t.dynamicTyping[d] === void 0 && (t.dynamicTyping[d] = t.dynamicTypingFunction(d)), (t.dynamicTyping[d] || t.dynamicTyping) === !0 ? h === "true" || h === "TRUE" || h !== "false" && h !== "FALSE" && (function(p) {
          if (T.test(p)) {
            var g = parseFloat(p);
            if (w < g && g < v) return !0;
          }
          return !1;
        }(h) ? parseFloat(h) : U.test(h) ? new Date(h) : h === "" ? null : h) : h;
        var d;
      }
      function X(s, h, d, p) {
        var g = { type: s, code: h, message: d };
        p !== void 0 && (g.row = p), y.errors.push(g);
      }
      this.parse = function(s, h, d) {
        var p = t.quoteChar || '"';
        if (t.newline || (t.newline = function(C, A) {
          C = C.substring(0, 1048576);
          var W = new RegExp(D(A) + "([^]*?)" + D(A), "gm"), ie = (C = C.replace(W, "")).split("\r"), ue = C.split(`
`), he = 1 < ue.length && ue[0].length < ie[0].length;
          if (ie.length === 1 || he) return `
`;
          for (var le = 0, H = 0; H < ie.length; H++) ie[H][0] === `
` && le++;
          return le >= ie.length / 2 ? `\r
` : "\r";
        }(s, p)), x = !1, t.delimiter) I(t.delimiter) && (t.delimiter = t.delimiter(s), y.meta.delimiter = t.delimiter);
        else {
          var g = function(C, A, W, ie, ue) {
            var he, le, H, J;
            ue = ue || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ve = 0; ve < ue.length; ve++) {
              var $ = ue[ve], we = 0, fe = 0, ye = 0;
              H = void 0;
              for (var me = new ee({ comments: ie, delimiter: $, newline: A, preview: 10 }).parse(C), ge = 0; ge < me.data.length; ge++) if (W && se(me.data[ge])) ye++;
              else {
                var xe = me.data[ge].length;
                fe += xe, H !== void 0 ? 0 < xe && (we += Math.abs(xe - H), H = xe) : H = xe;
              }
              0 < me.data.length && (fe /= me.data.length - ye), (le === void 0 || we <= le) && (J === void 0 || J < fe) && 1.99 < fe && (le = we, he = $, J = fe);
            }
            return { successful: !!(t.delimiter = he), bestDelimiter: he };
          }(s, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          g.successful ? t.delimiter = g.bestDelimiter : (x = !0, t.delimiter = c.DefaultDelimiter), y.meta.delimiter = t.delimiter;
        }
        var N = te(t);
        return t.preview && t.header && N.preview++, e = s, o = new ee(N), y = o.parse(e, h, d), G(), E ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } };
      }, this.paused = function() {
        return E;
      }, this.pause = function() {
        E = !0, o.abort(), e = I(t.chunk) ? "" : e.substring(o.getCharIndex());
      }, this.resume = function() {
        V.streamer._halted ? (E = !1, V.streamer.parseChunk(e, !0)) : setTimeout(V.resume, 3);
      }, this.aborted = function() {
        return oe;
      }, this.abort = function() {
        oe = !0, o.abort(), y.meta.aborted = !0, I(t.complete) && t.complete(y), e = "";
      };
    }
    function D(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ee(t) {
      var e, o = (t = t || {}).delimiter, x = t.newline, v = t.comments, w = t.step, T = t.preview, U = t.fastMode, V = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (V = t.escapeChar), (typeof o != "string" || -1 < c.BAD_DELIMITERS.indexOf(o)) && (o = ","), v === o) throw new Error("Comment character same as delimiter");
      v === !0 ? v = "#" : (typeof v != "string" || -1 < c.BAD_DELIMITERS.indexOf(v)) && (v = !1), x !== `
` && x !== "\r" && x !== `\r
` && (x = `
`);
      var k = 0, q = !1;
      this.parse = function(E, oe, ne) {
        if (typeof E != "string") throw new Error("Input must be a string");
        var y = E.length, L = o.length, se = x.length, G = v.length, ae = I(w), Y = [], X = [], s = [], h = k = 0;
        if (!E) return ce();
        if (t.header && !oe) {
          var d = E.split(x)[0].split(o), p = [], g = {}, N = !1;
          for (var C in d) {
            var A = d[C];
            I(t.transformHeader) && (A = t.transformHeader(A, C));
            var W = A, ie = g[A] || 0;
            for (0 < ie && (N = !0, W = A + "_" + ie), g[A] = ie + 1; p.includes(W); ) W = W + "_" + ie;
            p.push(W);
          }
          if (N) {
            var ue = E.split(x);
            ue[0] = p.join(o), E = ue.join(x);
          }
        }
        if (U || U !== !1 && E.indexOf(e) === -1) {
          for (var he = E.split(x), le = 0; le < he.length; le++) {
            if (s = he[le], k += s.length, le !== he.length - 1) k += x.length;
            else if (ne) return ce();
            if (!v || s.substring(0, G) !== v) {
              if (ae) {
                if (Y = [], ye(s.split(o)), Ee(), q) return ce();
              } else ye(s.split(o));
              if (T && T <= le) return Y = Y.slice(0, T), ce(!0);
            }
          }
          return ce();
        }
        for (var H = E.indexOf(o, k), J = E.indexOf(x, k), ve = new RegExp(D(V) + D(e), "g"), $ = E.indexOf(e, k); ; ) if (E[k] !== e) if (v && s.length === 0 && E.substring(k, k + G) === v) {
          if (J === -1) return ce();
          k = J + se, J = E.indexOf(x, k), H = E.indexOf(o, k);
        } else if (H !== -1 && (H < J || J === -1)) s.push(E.substring(k, H)), k = H + L, H = E.indexOf(o, k);
        else {
          if (J === -1) break;
          if (s.push(E.substring(k, J)), xe(J + se), ae && (Ee(), q)) return ce();
          if (T && Y.length >= T) return ce(!0);
        }
        else for ($ = k, k++; ; ) {
          if (($ = E.indexOf(e, $ + 1)) === -1) return ne || X.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: Y.length, index: k }), ge();
          if ($ === y - 1) return ge(E.substring(k, $).replace(ve, e));
          if (e !== V || E[$ + 1] !== V) {
            if (e === V || $ === 0 || E[$ - 1] !== V) {
              H !== -1 && H < $ + 1 && (H = E.indexOf(o, $ + 1)), J !== -1 && J < $ + 1 && (J = E.indexOf(x, $ + 1));
              var we = me(J === -1 ? H : Math.min(H, J));
              if (E.substr($ + 1 + we, L) === o) {
                s.push(E.substring(k, $).replace(ve, e)), E[k = $ + 1 + we + L] !== e && ($ = E.indexOf(e, k)), H = E.indexOf(o, k), J = E.indexOf(x, k);
                break;
              }
              var fe = me(J);
              if (E.substring($ + 1 + fe, $ + 1 + fe + se) === x) {
                if (s.push(E.substring(k, $).replace(ve, e)), xe($ + 1 + fe + se), H = E.indexOf(o, k), $ = E.indexOf(e, k), ae && (Ee(), q)) return ce();
                if (T && Y.length >= T) return ce(!0);
                break;
              }
              X.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: Y.length, index: k }), $++;
            }
          } else $++;
        }
        return ge();
        function ye(de) {
          Y.push(de), h = k;
        }
        function me(de) {
          var Le = 0;
          if (de !== -1) {
            var Se = E.substring($ + 1, de);
            Se && Se.trim() === "" && (Le = Se.length);
          }
          return Le;
        }
        function ge(de) {
          return ne || (de === void 0 && (de = E.substring(k)), s.push(de), k = y, ye(s), ae && Ee()), ce();
        }
        function xe(de) {
          k = de, ye(s), s = [], J = E.indexOf(x, k);
        }
        function ce(de) {
          return { data: Y, errors: X, meta: { delimiter: o, linebreak: x, aborted: q, truncated: !!de, cursor: h + (oe || 0) } };
        }
        function Ee() {
          w(ce()), Y = [], X = [];
        }
      }, this.abort = function() {
        q = !0;
      }, this.getCharIndex = function() {
        return k;
      };
    }
    function z(t) {
      var e = t.data, o = b[e.workerId], x = !1;
      if (e.error) o.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var v = { abort: function() {
          x = !0, P(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: K, resume: K };
        if (I(o.userStep)) {
          for (var w = 0; w < e.results.data.length && (o.userStep({ data: e.results.data[w], errors: e.results.errors, meta: e.results.meta }, v), !x); w++) ;
          delete e.results;
        } else I(o.userChunk) && (o.userChunk(e.results, v, e.file), delete e.results);
      }
      e.finished && !x && P(e.workerId, e.results);
    }
    function P(t, e) {
      var o = b[t];
      I(o.userComplete) && o.userComplete(e), o.terminate(), delete b[t];
    }
    function K() {
      throw new Error("Not implemented.");
    }
    function te(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var o in t) e[o] = te(t[o]);
      return e;
    }
    function Q(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function I(t) {
      return typeof t == "function";
    }
    return f && (a.onmessage = function(t) {
      var e = t.data;
      if (c.WORKER_ID === void 0 && e && (c.WORKER_ID = e.workerId), typeof e.input == "string") a.postMessage({ workerId: c.WORKER_ID, results: c.parse(e.input, e.config), finished: !0 });
      else if (a.File && e.input instanceof File || e.input instanceof Object) {
        var o = c.parse(e.input, e.config);
        o && a.postMessage({ workerId: c.WORKER_ID, results: o, finished: !0 });
      }
    }), (O.prototype = Object.create(j.prototype)).constructor = O, (F.prototype = Object.create(j.prototype)).constructor = F, (Z.prototype = Object.create(Z.prototype)).constructor = Z, (B.prototype = Object.create(j.prototype)).constructor = B, c;
  });
})(Xe);
var nn = Xe.exports;
const sn = /* @__PURE__ */ Ct(nn);
function an({
  onSent: i
}) {
  const { address: r } = ut.all(), { t: u } = Qe(), { data: a, isFetched: l } = ht(), { data: f } = ft(), { data: b } = pt(), [m, c] = S.useState(null), [_, j] = S.useState([]), [O, F] = S.useState([]), [Z, B] = S.useState([]), [re, D] = S.useState(!1), [ee, z] = S.useState(!1), [P, K] = S.useState({
    ...R.createTokenMap(() => "0"),
    usdValue: "0"
  }), [te, Q] = S.useState(null), I = ze(_, 800), t = ze(O, 800), { signTransaction: e } = Dt();
  S.useEffect(() => {
    l && U();
  }, [l]), S.useEffect(() => {
    tn(), k();
  }, []), S.useEffect(() => {
    const s = R.createTokenMap(() => 0);
    _.forEach((p) => {
      p.amount && !isNaN(parseFloat(p.amount)) && (s[p.token] += parseFloat(p.amount));
    });
    let h = 0;
    f && (h = Object.values(pe).reduce((p, g) => p + s[g] * parseFloat(f[g] || "0"), 0));
    const d = R.getAllTokens().reduce((p, g) => ({
      ...p,
      [g.tokenType]: s[g.tokenType].toString()
    }), {});
    K({
      ...d,
      usdValue: be(h.toString(), 2)
    });
  }, [_, f]);
  const o = S.useMemo(
    () => Object.entries(P).filter(([s]) => s !== "usdValue").some(([s, h]) => {
      const d = s, p = parseFloat((a == null ? void 0 : a[d]) || "0"), g = parseFloat(h), N = te && te[d] ? parseFloat(te[d]) : 0;
      return g + N > p;
    }),
    [P, a, te]
  ), x = ({
    transfer: s,
    validation: h
  }) => De.test(s.to) && (h == null ? void 0 : h.error) === u("/dashboard.[token].sendModal.unregisteredEmailNotice"), v = S.useMemo(() => _.some((s, h) => {
    if (!s.to || !s.amount || !s.token)
      return !0;
    const d = O[h];
    if (d != null && d.error && !x({ transfer: s, validation: d }) || d != null && d.isValidating)
      return !0;
    const p = parseFloat(s.amount);
    return !!(isNaN(p) || p <= 0 || o);
  }), [_, O, o]), w = S.useMemo(() => _.some((s) => s.to || s.note || s.amount), [_]);
  S.useEffect(() => {
    I.forEach((s, h) => {
      s.to && V(s.to, h);
    });
  }, [I]), S.useEffect(() => {
    T();
  }, [t, I]);
  const T = S.useCallback(async () => {
    if (v) {
      Q(null);
      return;
    }
    z(!0);
    try {
      const s = R.getAllTokens().map((g) => g.tokenType), h = {}, d = (g) => I.filter((N, C) => {
        var W;
        return N.token === g && N.amount && (Te(N.to) || ((W = t[C]) == null ? void 0 : W.fullAddress));
      }).map((N, C) => {
        var A;
        return {
          to: Te(N.to) ? N.to : (A = t[C]) == null ? void 0 : A.fullAddress,
          amount: Ce(N.amount)
        };
      });
      for (const g of s) {
        const N = d(g);
        if (N.length > 0) {
          const A = (await Promise.all(
            N.map(
              (W) => Yt({
                tokenType: g,
                transferParams: W,
                fromAddress: r
              })
            )
          )).reduce(
            (W, ie) => ie ? W + parseFloat(ie.feeInTokens) : W,
            0
          );
          if (A > 0) {
            const W = je(A.toFixed(18), 18);
            h[g] = Ne(W);
          }
        }
      }
      const p = R.getAllTokens().reduce((g, N) => {
        const C = h[N.tokenType], A = f == null ? void 0 : f[N.tokenType];
        return g + (C && A ? parseFloat(C) * parseFloat(A) : 0);
      }, 0);
      h.usdValue = be(p.toString(), 2), Q(h);
    } catch (s) {
      console.error("Failed to calculate gas fee:", s), Q(null);
    } finally {
      z(!1);
    }
  }, [t, I, v, r, f]), U = () => {
    j([{
      to: "",
      note: "",
      amount: "",
      token: pe.VAST,
      balance: (a == null ? void 0 : a[pe.VAST]) || "0"
    }]), F([{
      isValidating: !1,
      isValidEmail: !1,
      fullAddress: "",
      error: ""
    }]), B([!1]);
  }, V = async (s, h) => {
    if (!s) {
      F((d) => {
        const p = [...d];
        return p[h] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "Address or email is required"
        }, p;
      });
      return;
    }
    F((d) => {
      const p = [...d];
      return p[h] = {
        ...d[h],
        isValidating: !0
      }, p;
    });
    try {
      if (Te(s)) {
        F((p) => {
          const g = [...p];
          return g[h] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }, g;
        });
        return;
      }
      if (!De.test(s)) {
        F((p) => {
          const g = [...p];
          return g[h] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: u("/dashboard.[token].sendModal.invalidEmailFormat")
          }, g;
        });
        return;
      }
      const d = await en(s);
      F((p) => {
        const g = [...p];
        return g[h] = {
          isValidating: !1,
          isValidEmail: !0,
          fullAddress: d.data.success ? d.data.address : "",
          error: d.data.success ? "" : u("/dashboard.[token].sendModal.unregisteredEmailNotice")
        }, g;
      });
    } catch {
      F((p) => {
        const g = [...p];
        return g[h] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "error"
        }, g;
      });
    }
  }, k = async () => {
    try {
      const { data: s } = await Re.post("/transaction/outbound-amount", {
        tokens: R.getAllTokens().map((h) => h.tokenType)
      });
      c(s);
    } catch (s) {
      console.error("Failed to fetch token transferred:", s);
    }
  }, q = async (s, h) => {
    const d = s.target.value.trim(), p = [..._];
    p[h].to = d, j(p);
  }, E = (s) => {
    V(_[s].to, s);
  }, oe = (s) => {
    const h = _[s].amount;
    B((d) => {
      const p = [...d];
      return p[s] = h === "", p;
    });
  }, ne = (s, h) => {
    const d = [..._];
    d[h].note = s.target.value, j(d);
  }, y = (s, h) => {
    const d = s.target.value.trim(), p = [..._];
    p[h].amount = d, j(p), B((g) => {
      const N = [...g];
      return N[h] = !1, N;
    });
  }, L = async (s, h) => {
    z(!1);
    try {
      const d = (a == null ? void 0 : a[s]) || "0";
      j((p) => {
        const g = [...p];
        return g[h] = {
          ...p[h],
          token: s,
          amount: "",
          balance: d
        }, g;
      });
    } catch (d) {
      console.error("Failed to fetch balance:", d);
    }
  }, se = async (s, h) => {
    const d = O[h], p = s.amount;
    let g, N;
    if (Te(s.to))
      g = s.to;
    else if (x({ transfer: s, validation: d })) {
      N = s.to, await Re.post("/invite/invite-register", {
        toEmail: N,
        from: r,
        amount: Ce(p).toString(),
        token: s.token,
        note: s.note
      });
      return;
    } else
      g = d == null ? void 0 : d.fullAddress;
    const C = await e({
      to: g,
      amount: p,
      data: "",
      token: s.token,
      transactionType: gt.TRANSFER,
      note: s.note,
      isNotifySubmit: !1,
      isNotifyOtp: !1,
      isNotifyError: !1
    }), A = R.getToken(s.token);
    if (C != null && C.hash && (A != null && A.gasless)) {
      const W = await xt(C.hash, s.token);
      if (!W || W.status !== "success")
        throw new Error("Transfer failed. Please try again.");
    }
    return C;
  };
  return {
    transfers: _,
    toValidations: O,
    sending: re,
    isDisabled: v,
    hasContent: w,
    isEstimatingFee: ee,
    tokenBalances: a,
    tokenPrices: f,
    hasInsufficientBalance: o,
    handleToChange: q,
    handleToBlur: E,
    handleNoteChange: ne,
    handleAmountChange: y,
    handleTokenTypeChange: L,
    handleSend: async () => {
      D(!0);
      try {
        const s = [];
        for (let h = 0; h < _.length; h++) {
          const d = _[h];
          try {
            const p = await se(d, h);
            x({ transfer: d, validation: O[h] }) ? s.push({
              to: d.to,
              type: "invitation",
              status: "sent",
              statusMessage: "Invitation email sent. The recipient will receive an invitation email to sign up their account.",
              amount: d.amount,
              token: d.token
            }) : s.push({
              to: d.to,
              type: "transaction",
              status: p != null && p.hash ? "sent" : "failed",
              statusMessage: p != null && p.needOtp ? "Daily transaction limit exceeded. Please check your email and verify by the OTP." : "Sent and received",
              amount: d.amount,
              token: d.token
            });
          } catch (p) {
            const g = x({ transfer: d, validation: O[h] }) ? "invitation" : "transaction", N = mt(p);
            $e("handleSend", { errorInfo: N }), s.push({
              to: d.to,
              type: g,
              status: "failed",
              statusMessage: g === "transaction" ? N.message : "Not sent. Please try transferring again.",
              amount: d.amount,
              token: d.token
            });
          }
        }
        i(s, te, P);
      } catch (s) {
        console.error("Failed to send transfers:", s);
      } finally {
        D(!1);
      }
    },
    handleAddTransfer: () => {
      const s = {
        to: "",
        note: "",
        amount: "",
        token: pe.VAST,
        balance: (a == null ? void 0 : a[pe.VAST]) || "0"
      };
      j([..._, s]), F([...O, {
        isValidating: !1,
        isValidEmail: !1,
        fullAddress: "",
        error: ""
      }]), B([...Z, !1]);
    },
    handleDeleteTransfer: (s) => {
      j(_.filter((h, d) => d !== s)), F(O.filter((h, d) => d !== s)), B(Z.filter((h, d) => d !== s));
    },
    handleFileChange: (s) => {
      var d;
      const h = (d = s.target.files) == null ? void 0 : d[0];
      h && sn.parse(h, {
        header: !1,
        complete: (p) => {
          const g = Xt(p.data);
          if (!g.isValid) {
            Ie.error(g.error), j([]), s.target.value = "";
            return;
          }
          const N = p.data.slice(1).filter((C) => C[0] && C[0].trim() !== "").map((C) => ({
            to: C[0],
            note: C[1],
            token: C[2],
            amount: C[3],
            balance: (a == null ? void 0 : a[C[2]]) || "0"
          }));
          j(N), F(N.map(() => ({
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }))), B(N.map(() => !1)), Ie.success("CSV file uploaded successfully");
        },
        error: (p) => {
          Ie.error(`Error parsing CSV: ${p.message}`);
        }
      });
    },
    totalAmount: P,
    todayTokenTransferred: m,
    defaultLimits: b,
    gasFees: te,
    handleAmountBlur: oe,
    amountRequiredValidations: Z
  };
}
function rn({
  todayTokenTransferred: i,
  defaultLimits: r,
  totalAmount: u
}) {
  const [a, l] = S.useState(!1), b = R.getAllTokens().map((m) => m.tokenType).filter((m) => {
    const c = BigInt(i[m]), _ = BigInt(Ce(u[m])), j = BigInt(Ce(r[m]));
    return c + _ > j;
  });
  return b.length === 0 ? null : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        b.map((m) => /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black font-normal leading-snug", children: [
          R.getToken(m).symbol,
          " daily transaction limit exceeded. Current ",
          R.getToken(m).symbol,
          " limit: ",
          je(r[m] || "0"),
          " ",
          R.getToken(m).symbol
        ] }, m)),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-xs text-black font-bold leading-none mt-[12px] cursor-pointer w-fit",
            onClick: () => l(!0),
            children: [
              /* @__PURE__ */ n.jsx("span", { children: "Change limit" }),
              /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/arrow_right.svg", className: "w-[12px]" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsx(
      bt,
      {
        isOpen: a,
        onClose: () => l(!1),
        defaultLimits: r
      }
    )
  ] });
}
function on({
  tokenBalances: i,
  tokenPrices: r,
  totalAmount: u,
  hasInsufficientBalance: a,
  gasFees: l
}) {
  if (!a) return null;
  const f = (b, m) => r != null && r[m] ? be((parseFloat(b) * parseFloat(r[m])).toString(), 2) : "0";
  return /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
    /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-black font-bold leading-none mb-[8px]", children: "Insufficient balance:" }),
      Object.keys(i).map((b) => {
        const m = b, c = parseFloat(i[m] || "0"), _ = parseFloat(u[m] || "0"), j = l && l[m] ? parseFloat(l[m]) : 0, O = _ + j;
        return O > c && /* @__PURE__ */ n.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            R.getToken(m).symbol,
            " balance: ",
            be(c.toString(), 6),
            " ",
            R.getToken(m).symbol,
            " ~",
            f(c.toString(), m),
            " USDT"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            "Required: ",
            be(O.toString(), 6),
            " ",
            R.getToken(m).symbol,
            " (Transfer: ",
            be(_.toString(), 6),
            " + Gas: ",
            be(j.toString(), 6),
            ")"
          ] })
        ] }, b);
      })
    ] })
  ] }) });
}
function Ze({
  totalAmount: i,
  gasFees: r
}) {
  const u = Ye(r), a = (m) => {
    const c = R.getNativeTokenTypeByGasSymbol(m);
    let _ = 0;
    return c ? _ = parseFloat(i[c] || "0") + parseFloat((u == null ? void 0 : u[m]) || "0") : _ = parseFloat((u == null ? void 0 : u[m]) || "0"), _ ? {
      amount: Ne(je(_.toString(), 18)),
      symbol: m
    } : null;
  }, l = (m) => {
    const c = m, _ = parseFloat(i[c] || "0");
    return _ ? {
      amount: Ne(je(_.toString())),
      symbol: c
    } : null;
  }, f = () => {
    const m = [];
    return Object.values(vt).forEach((c) => {
      m.push(a(c));
    }), R.getAllTokens().filter((c) => R.isERC20Token(c.tokenType)).forEach((c) => {
      m.push(l(c.tokenType));
    }), m.filter((c) => c !== null);
  }, b = () => {
    const m = parseFloat(i.usdValue), c = parseFloat((r == null ? void 0 : r.usdValue) || "0"), _ = m + c;
    return be(_.toString());
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Total amount:" }) }),
    /* @__PURE__ */ n.jsxs("p", { className: "text-black text-xl font-medium leading-none text-right mt-0.5", children: [
      f().map((m, c, _) => /* @__PURE__ */ n.jsxs("span", { children: [
        m.amount,
        " ",
        m.symbol,
        c < _.length - 1 && " & "
      ] }, c)),
      parseFloat(b()) !== 0 && ` (~$${b()} USD)`
    ] })
  ] });
}
const ln = R.getAllTokens().map((i) => i.tokenType);
function cn({
  handleTokenTypeChange: i,
  index: r,
  transfer: u,
  sending: a
}) {
  return /* @__PURE__ */ n.jsxs(yt, { children: [
    /* @__PURE__ */ n.jsxs(kt, { disabled: a, className: "flex items-center gap-[6px] px-0 py-1 focus:outline-none", children: [
      /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: R.getToken(u.token).logo, alt: "" }),
      /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: R.getToken(u.token).symbol }),
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/down_caret.svg", alt: "" })
    ] }),
    /* @__PURE__ */ n.jsx(wt, { align: "start", className: "bg-white", children: ln.map((l) => /* @__PURE__ */ n.jsxs(
      _t,
      {
        disabled: a,
        onClick: () => i(l, r),
        className: "flex items-center gap-[6px]",
        children: [
          /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: R.getToken(l).logo, alt: "" }),
          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: R.getToken(l).symbol })
        ]
      },
      l
    )) })
  ] });
}
function dn({
  transfer: i,
  sending: r,
  handleAmountChange: u,
  handleTokenTypeChange: a,
  index: l,
  handleAmountBlur: f,
  isEmpty: b
}) {
  const m = S.useRef(null), [c, _] = S.useState(0);
  return S.useEffect(() => {
    m.current && setTimeout(() => {
      var O;
      const j = (O = m.current) == null ? void 0 : O.getBoundingClientRect().width;
      j && _(j + 12);
    }, 0);
  }, [i.token]), /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ n.jsx(
      qe,
      {
        disabled: r,
        value: i.amount,
        type: "number",
        inputMode: "decimal",
        onChange: (j) => u(j, l),
        onBlur: () => f(l),
        className: M(
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          "desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]"
        ),
        placeholder: "Amount",
        style: {
          paddingLeft: `${c}px`
        }
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { ref: m, className: "absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center", children: [
      /* @__PURE__ */ n.jsx(
        cn,
        {
          index: l,
          transfer: i,
          handleTokenTypeChange: a,
          sending: r
        }
      ),
      /* @__PURE__ */ n.jsx(Je, { type: "vertical", className: "h-[16px]" })
    ] }),
    b && /* @__PURE__ */ n.jsx("p", { className: M(
      "absolute -bottom-[20px] left-[0] text-xs text-destructive"
    ), children: "Amount is required" })
  ] });
}
function un({
  onSent: i
}) {
  const {
    transfers: r,
    toValidations: u,
    sending: a,
    isDisabled: l,
    hasContent: f,
    handleToChange: b,
    handleToBlur: m,
    handleNoteChange: c,
    handleAmountChange: _,
    handleTokenTypeChange: j,
    handleSend: O,
    handleAddTransfer: F,
    handleDeleteTransfer: Z,
    totalAmount: B,
    tokenBalances: re,
    tokenPrices: D,
    todayTokenTransferred: ee,
    defaultLimits: z,
    gasFees: P,
    isEstimatingFee: K,
    hasInsufficientBalance: te,
    handleFileChange: Q,
    handleAmountBlur: I,
    amountRequiredValidations: t
  } = an({
    onSent: i
  }), { showExitPrompt: e, handleExitPrompt: o } = Ht({
    shouldBlock: f
  }), x = Ge(), v = () => {
    x(-1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: M(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Multisender" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: "You can add multiple recipients in custom settings" })
    ] }),
    ee && /* @__PURE__ */ n.jsx(
      rn,
      {
        todayTokenTransferred: ee,
        defaultLimits: z,
        totalAmount: B
      }
    ),
    D && re && /* @__PURE__ */ n.jsx(
      on,
      {
        tokenBalances: re,
        tokenPrices: D,
        totalAmount: B,
        hasInsufficientBalance: te,
        gasFees: P
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: M(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug",
        "desktop:gap-[28px] laptop:gap-[23px]"
      ), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "desktop:w-[382px] laptop:w-[318px]", children: [
          "To",
          r.length > 1 && `(${r.length})`
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] hidden laptop:block", children: "Notes" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: r.map((w, T) => /* @__PURE__ */ n.jsxs("div", { className: "border-b border-[#ebebeb]", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: M(
              "flex items-center flex-wrap py-[25px]",
              "desktop:gap-[28px] laptop:gap-[23px] tablet:gap-[7px] gap-0"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { children: /* @__PURE__ */ n.jsx(
                qt,
                {
                  index: T,
                  transfer: w,
                  validation: u[T] || {
                    isValidating: !1,
                    isValidEmail: !1,
                    fullAddress: "",
                    error: ""
                  },
                  handleToChange: b,
                  handleToBlur: m,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("section", { className: M(
                "block tablet:hidden laptop:block",
                "pl-[22px] tablet:pl-0",
                "py-[12px] tablet:py-0"
              ), children: /* @__PURE__ */ n.jsx(
                Be,
                {
                  index: T,
                  transfer: w,
                  handleNoteChange: c,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsxs("section", { className: M(
                "relative",
                "ml-[22px] tablet:ml-0"
              ), children: [
                /* @__PURE__ */ n.jsx(
                  dn,
                  {
                    index: T,
                    transfer: w,
                    handleAmountChange: _,
                    handleTokenTypeChange: j,
                    sending: a,
                    handleAmountBlur: I,
                    isEmpty: t[T]
                  }
                ),
                /* @__PURE__ */ n.jsx("div", { className: M(
                  "absolute top-1/2 -translate-y-1/2",
                  "laptop:-right-[33px] -right-[102px]",
                  "block tablet:hidden laptop:block",
                  r.length === 1 && "hidden laptop:hidden"
                ), children: /* @__PURE__ */ n.jsx(
                  We,
                  {
                    index: T,
                    handleDeleteTransfer: Z,
                    sending: a
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: M(
              "items-center justify-between gap-[22px]",
              "hidden tablet:flex laptop:hidden",
              "pb-[25px]"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { className: "pl-[22px] flex-1", children: /* @__PURE__ */ n.jsx(
                Be,
                {
                  index: T,
                  transfer: w,
                  handleNoteChange: c,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("div", { className: M(
                r.length === 1 && "hidden"
              ), children: /* @__PURE__ */ n.jsx(
                We,
                {
                  index: T,
                  handleDeleteTransfer: Z,
                  sending: a
                }
              ) })
            ]
          }
        )
      ] }, T)) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-end gap-[12px] mt-[24px]", children: [
      /* @__PURE__ */ n.jsx(
        _e,
        {
          className: "h-[24px] text-xs",
          onClick: () => {
            Tt("/static/files/multisender_template.csv", "multisender_template.csv");
          },
          children: /* @__PURE__ */ n.jsx("span", { children: "Download CSV Template" })
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx(
          _e,
          {
            variant: "outline",
            className: "h-[24px] text-xs",
            disabled: a,
            onClick: () => {
              const w = document.querySelector('input[type="file"]');
              w && w.click();
            },
            children: /* @__PURE__ */ n.jsx("span", { children: "Import CSV" })
          }
        ),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            className: "hidden",
            type: "file",
            accept: ".csv",
            onChange: Q
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        _e,
        {
          variant: "outline",
          className: "h-[24px] text-xs px-[26px]",
          onClick: F,
          disabled: a,
          children: /* @__PURE__ */ n.jsx(Ot, { className: "w-[12px] h-[12px]", strokeWidth: 3 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[120px]", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: [
        /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }),
        /* @__PURE__ */ n.jsx(Lt, { title: "Estimated fees may vary and will be recalculated during backend checks.", overlayStyle: { maxWidth: "none" }, children: /* @__PURE__ */ n.jsx(Rt, { className: "w-[16px] h-[16px]" }) })
      ] }),
      K ? /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-end mt-0.5", children: /* @__PURE__ */ n.jsx(He, { className: "animate-spin", size: 14 }) }) : P ? /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        (() => {
          const w = Ye(P);
          return Object.entries(w || {}).filter(([T, U]) => U !== "0").map(([T, U], V, k) => /* @__PURE__ */ n.jsxs("span", { children: [
            U,
            " ",
            T,
            V < k.length - 1 && " & "
          ] }, T));
        })(),
        Object.values(P).some((w) => w !== "0") && ` (~$${P.usdValue} USD)`
      ] }) : /* @__PURE__ */ n.jsx("p", { className: "text-black text-right", children: "-" }),
      /* @__PURE__ */ n.jsx(
        Ze,
        {
          totalAmount: B,
          gasFees: P
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "mt-[104px]", children: [
        /* @__PURE__ */ n.jsx(
          Ut,
          {
            onSuccess: O,
            loading: a,
            disabled: l || K,
            className: "mx-auto"
          }
        ),
        !a && /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-center mt-[26px]", children: /* @__PURE__ */ n.jsx(
          "p",
          {
            className: "w-auto cursor-pointer text-black text-base font-bold leading-tight",
            onClick: v,
            children: "Cancel"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      Gt,
      {
        isOpen: e,
        onClose: o
      }
    )
  ] });
}
function hn({
  transferResults: i,
  onTransferAgain: r,
  gasFees: u,
  totalAmount: a
}) {
  return Ge(), /* @__PURE__ */ n.jsxs("div", { className: M(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Token sent" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: 'You can find the transactions under the "History" tab in the Dashboard page.' })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: M(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug"
      ), children: [
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[397px] laptop:w-[397px] tablet:w-[319px]", children: "To" }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] tablet:w-[252px] hidden tablet:block", children: "Status" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: i.map((l, f) => /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: M(
            "border-b border-[#ebebeb]",
            "flex items-center flex-wrap py-[25px]"
          ),
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: M(
              "flex items-center justify-between px-0 text-xs"
            ), children: [
              /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
                f + 1,
                "."
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: M(
                "flex items-center",
                "desktop:w-[297px] laptop:w-[297px] tablet:w-[297px] w-[302px]",
                "desktop:mr-[100px] laptop:mr-[100px] tablet:mr-[20px]",
                "py-[8px] tablet:py-0"
              ), children: [
                /* @__PURE__ */ n.jsx("p", { className: M(
                  "mr-1",
                  "[text-decoration:none]",
                  l.type === "transaction" && l.status === "sent" && "text-green-500",
                  l.type === "invitation" && l.status === "sent" && "text-blue-500",
                  l.status === "failed" && "text-destructive"
                ), children: l.to }),
                l.type === "transaction" && l.status === "sent" && /* @__PURE__ */ n.jsx(Ke, { className: "text-green-500", size: 12 }),
                l.type === "invitation" && l.status === "sent" && /* @__PURE__ */ n.jsx(Fe, { className: "text-blue-500", size: 12 }),
                l.status === "failed" && /* @__PURE__ */ n.jsx(Fe, { className: "text-destructive", size: 12 })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("p", { className: M(
              "text-xs text-black font-normal leading-tight break-words",
              "desktop:w-[362px] laptop:w-[348px] tablet:w-[252px] w-full",
              "mb-1 tablet:mb-0",
              l.status === "failed" && "text-destructive"
            ), children: l.statusMessage }),
            /* @__PURE__ */ n.jsxs("div", { className: M(
              "flex-1 text-sm text-black font-normal leading-none text-right",
              "pr-0 tablet:pr-[8px]"
            ), children: [
              /* @__PURE__ */ n.jsxs("p", { children: [
                l.amount,
                " ",
                R.getToken(l.token).symbol
              ] }),
              l.type === "transaction" && l.status === "failed" && /* @__PURE__ */ n.jsx("p", { children: "(Not Sent)" })
            ] })
          ]
        },
        f
      )) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[30px]", children: [
      /* @__PURE__ */ n.jsx("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }) }),
      /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        u && Object.entries(u).filter(([l]) => l !== "usdValue" && u[l] !== "0").map(([l, f], b, m) => /* @__PURE__ */ n.jsxs("span", { children: [
          f,
          " ",
          R.getToken(l).symbol,
          b < m.length - 1 && " & "
        ] }, l)),
        u && Object.values(u).some((l) => l !== "0") && ` (~$${u.usdValue} USD)`
      ] }),
      /* @__PURE__ */ n.jsx(
        Ze,
        {
          totalAmount: a,
          gasFees: u
        }
      ),
      /* @__PURE__ */ n.jsx("div", { className: "mt-[104px]", children: /* @__PURE__ */ n.jsx("div", { className: "flex justify-center flex-wrap gap-4 mt-6 w-full", children: /* @__PURE__ */ n.jsx(_e, { className: "w-[343px] tablet:w-[242px]", onClick: () => {
        r();
      }, children: "OK" }) }) })
    ] })
  ] });
}
pe.ETH, pe.ETH, pe.ETH, pe.ETH;
function wn() {
  const [i, r] = S.useState(!1), [u, a] = S.useState([]), [l, f] = S.useState(null), [b, m] = S.useState({
    ...R.createTokenMap(() => "0"),
    usdValue: "0"
  }), c = (_, j, O) => {
    a(_), f(j), m(O), r(!0);
  };
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: i ? /* @__PURE__ */ n.jsx(
    hn,
    {
      transferResults: u,
      onTransferAgain: () => {
        r(!1);
      },
      gasFees: l,
      totalAmount: b
    }
  ) : /* @__PURE__ */ n.jsx(
    un,
    {
      onSent: c
    }
  ) });
}
export {
  wn as default
};
