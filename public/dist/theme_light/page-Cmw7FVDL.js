var et = Object.defineProperty;
var tt = (i, a, c) => a in i ? et(i, a, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[a] = c;
var Ae = (i, a, c) => tt(i, typeof a != "symbol" ? a + "" : a, c);
import { j as n } from "./vendor-radix-BwSYOuH5.js";
import { T as nt, Q as st, U as at, y as ke, p as rt, q as it, A as ot, c as F, g as $e, I as qe, aL as lt, ae as ct, B as _e, t as D, aM as dt, i as je, aN as Ce, f as Re, k as De, a as ut, aO as ht, ak as ft, au as pt, aP as ze, aa as pe, a3 as be, h as mt, ah as gt, aQ as xt, av as bt, G as vt, D as yt, b as kt, d as wt, e as _t, aR as Tt } from "./main-CPzCMQxT.js";
import { r as A, p as Me, n as jt, o as Et, c as Nt, d as Ct, i as Ge } from "./vendor-react-wyPiRY-L.js";
import { u as St, i as He, L as At, f as Ke, g as Fe, T as It, P as Ot, I as Rt } from "./vendor-ui-utils-BbSwUILz.js";
import { u as Qe, B as Ie } from "./vendor-utils-BSjbfJFn.js";
import { u as Dt } from "./useTransaction-15OHkkS7.js";
import { w as Pe, x as Mt, j as Ft, l as Vt, n as $t, i as Te, u as Ne } from "./vendor-web3-CFt7IwTK.js";
import { d as Lt } from "./index-BFYmRswb.js";
const zt = (i) => {
  const {
    componentCls: a,
    sizePaddingEdgeHorizontal: c,
    colorSplit: s,
    lineWidth: l,
    textPaddingInline: p,
    orientationMargin: g,
    verticalMarginInline: x
  } = i;
  return {
    [a]: Object.assign(Object.assign({}, at(i)), {
      borderBlockStart: `${ke(l)} solid ${s}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        marginInline: x,
        marginBlock: 0,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${ke(l)} solid ${s}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${ke(i.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${a}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${ke(i.dividerHorizontalWithTextGutterMargin)} 0`,
        color: i.colorTextHeading,
        fontWeight: 500,
        fontSize: i.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${s}`,
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
      [`&-horizontal${a}-with-text-left`]: {
        "&::before": {
          width: `calc(${g} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${g} * 100%)`
        }
      },
      [`&-horizontal${a}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${g} * 100%)`
        },
        "&::after": {
          width: `calc(${g} * 100%)`
        }
      },
      [`${a}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: p
      },
      "&-dashed": {
        background: "none",
        borderColor: s,
        borderStyle: "dashed",
        borderWidth: `${ke(l)} 0 0`
      },
      [`&-horizontal${a}-with-text${a}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${a}-dashed`]: {
        borderInlineStartWidth: l,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-dotted": {
        background: "none",
        borderColor: s,
        borderStyle: "dotted",
        borderWidth: `${ke(l)} 0 0`
      },
      [`&-horizontal${a}-with-text${a}-dotted`]: {
        "&::before, &::after": {
          borderStyle: "dotted none none"
        }
      },
      [`&-vertical${a}-dotted`]: {
        borderInlineStartWidth: l,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${a}-with-text`]: {
        color: i.colorText,
        fontWeight: "normal",
        fontSize: i.fontSize
      },
      [`&-horizontal${a}-with-text-left${a}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${a}-inner-text`]: {
          paddingInlineStart: c
        }
      },
      [`&-horizontal${a}-with-text-right${a}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${a}-inner-text`]: {
          paddingInlineEnd: c
        }
      }
    })
  };
}, Pt = (i) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: i.marginXS
}), Bt = nt("Divider", (i) => {
  const a = st(i, {
    dividerHorizontalWithTextGutterMargin: i.margin,
    dividerHorizontalGutterMargin: i.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [zt(a)];
}, Pt, {
  unitless: {
    orientationMargin: !0
  }
});
var Wt = function(i, a) {
  var c = {};
  for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function") for (var l = 0, s = Object.getOwnPropertySymbols(i); l < s.length; l++)
    a.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[l]) && (c[s[l]] = i[s[l]]);
  return c;
};
const Ye = (i) => {
  const {
    getPrefixCls: a,
    direction: c,
    divider: s
  } = A.useContext(rt), {
    prefixCls: l,
    type: p = "horizontal",
    orientation: g = "center",
    orientationMargin: x,
    className: d,
    rootClassName: w,
    children: S,
    dashed: O,
    variant: V = "solid",
    plain: ee,
    style: G
  } = i, ie = Wt(i, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), M = a("divider", l), [te, B, $] = Bt(M), Q = !!S, ne = g === "left" && x != null, Y = g === "right" && x != null, I = it(M, s == null ? void 0 : s.className, B, $, `${M}-${p}`, {
    [`${M}-with-text`]: Q,
    [`${M}-with-text-${g}`]: Q,
    [`${M}-dashed`]: !!O,
    [`${M}-${V}`]: V !== "solid",
    [`${M}-plain`]: !!ee,
    [`${M}-rtl`]: c === "rtl",
    [`${M}-no-default-orientation-margin-left`]: ne,
    [`${M}-no-default-orientation-margin-right`]: Y
  }, d, w), t = A.useMemo(() => typeof x == "number" ? x : /^\d+$/.test(x) ? Number(x) : x, [x]), e = Object.assign(Object.assign({}, ne && {
    marginLeft: t
  }), Y && {
    marginRight: t
  });
  if (Me.env.NODE_ENV !== "production") {
    const o = ot("Divider");
    Me.env.NODE_ENV !== "production" && o(!S || p !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return te(/* @__PURE__ */ A.createElement("div", Object.assign({
    className: I,
    style: Object.assign(Object.assign({}, s == null ? void 0 : s.style), G)
  }, ie, {
    role: "separator"
  }), S && p !== "vertical" && /* @__PURE__ */ A.createElement("span", {
    className: `${M}-inner-text`,
    style: e
  }, S)));
};
Me.env.NODE_ENV !== "production" && (Ye.displayName = "Divider");
const Oe = 337;
function Ut({
  className: i,
  onSuccess: a,
  disabled: c = !1,
  loading: s = !1,
  ...l
}) {
  const [p, g] = A.useState(!1), [x, d] = A.useState(0), [w, S] = A.useState(!1), O = A.useRef(null), V = A.useRef(null), ee = A.useRef(0), G = () => {
    const B = Date.now();
    B - ee.current >= 1e3 ? (ee.current = B, S(!0), g(!1), $e("onSuccess"), a == null || a()) : (d(0), g(!1));
  }, ie = (B, $) => {
    c || s || g(!0);
  }, M = (B) => {
    if (!p || !O.current || !V.current) return;
    const $ = O.current, Q = V.current, ne = $.getBoundingClientRect();
    let Y = B - ne.left - Q.offsetWidth / 2;
    if (B - ne.left < Q.offsetWidth / 2) {
      d(0);
      return;
    }
    Y + Q.offsetWidth >= Oe && (Y = Oe - Q.offsetWidth - 2, G()), d(Y);
  }, te = () => {
    w || d(0), g(!1);
  };
  return A.useEffect(() => {
    const B = (Q) => M(Q.clientX), $ = (Q) => {
      Q.preventDefault(), M(Q.touches[0].clientX);
    };
    return p && (window.addEventListener("mousemove", B), window.addEventListener("mouseup", te), window.addEventListener("touchmove", $, { passive: !1 }), window.addEventListener("touchend", te)), () => {
      window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", te), window.removeEventListener("touchmove", $), window.removeEventListener("touchend", te);
    };
  }, [p]), A.useEffect(() => {
    !c && !s && (d(0), S(!1));
  }, [c, s]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: O,
      className: F(
        "relative h-[42px] rounded-full ring-1 ring-[#e0e0e0] ring-offset-[3px] cursor-pointer select-none touch-none",
        c && "cursor-not-allowed",
        i
      ),
      style: { width: `${Oe}px` },
      ...l,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: F(
              "absolute left-0 h-[42px] bg-black rounded-full",
              c && "bg-[#f2f2f2]"
            ),
            style: { width: `${x + 42}px` }
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: V,
            className: F(
              "absolute z-10 left-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center cursor-grab",
              p && "cursor-grabbing",
              c && "bg-[#f2f2f2]"
            ),
            style: { transform: `translate(${x}px, -50%)` },
            onMouseDown: (B) => ie(B.clientX),
            onTouchStart: (B) => ie(B.touches[0].clientX),
            children: /* @__PURE__ */ n.jsx(St, { className: F("w-[20px] h-[20px] text-white") })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "absolute text-white inset-0 flex items-center justify-center pointer-events-none", children: s ? /* @__PURE__ */ n.jsx(He, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ n.jsx("span", { className: F(
          "text-black text-base font-bold leading-tight",
          c && "text-[#e0e0e0]"
        ), children: "Slide to send" }) })
      ]
    }
  );
}
function qt({
  index: i,
  transfer: a,
  validation: {
    isValidating: c,
    isValidEmail: s,
    fullAddress: l,
    error: p
  },
  handleToChange: g,
  handleToBlur: x,
  sending: d
}) {
  const { t: w } = Qe(), S = w("/dashboard.[token].sendModal.unregisteredEmailNotice");
  return /* @__PURE__ */ n.jsxs("div", { className: F(
    "flex items-center px-0 relative",
    (s && l || p) && "mb-[16px] tablet:mb-0"
  ), children: [
    /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
      i + 1,
      "."
    ] }),
    /* @__PURE__ */ n.jsx(
      qe,
      {
        disabled: d,
        value: a.to,
        onChange: (O) => g(O, i),
        onBlur: () => x(i),
        placeholder: "Enter email or crypto address",
        className: F(
          "desktop:w-[380px] laptop:w-[318px] tablet:w-[426px] w-[322px]",
          s && "border-green-500 focus-visible:border-green-500",
          p && "border-destructive focus-visible:border-destructive",
          p === S && "border-blue-500 focus-visible:border-blue-500",
          "pr-10"
        )
      }
    ),
    c && /* @__PURE__ */ n.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ n.jsx(At, { className: "animate-spin", size: 16 }) }),
    s && !c && !p && /* @__PURE__ */ n.jsx(Ke, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
    p && !c && /* @__PURE__ */ n.jsx(Fe, { className: F(
      "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
      p === S && "text-blue-500"
    ), size: 16 }),
    s && l && /* @__PURE__ */ n.jsx("p", { className: "absolute -bottom-[20px] left-[22px] mt-1 text-xs text-primary/60", children: l }),
    p && /* @__PURE__ */ n.jsx("p", { className: F(
      "absolute -bottom-[20px] left-[22px] text-xs text-destructive",
      p === S && "text-blue-400"
    ), children: p })
  ] });
}
function Be({
  index: i,
  transfer: a,
  handleNoteChange: c,
  sending: s
}) {
  return /* @__PURE__ */ n.jsx(
    lt,
    {
      disabled: s,
      rows: 1,
      value: a.note,
      onChange: (l) => c(l, i),
      className: F(
        "min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border focus-visible:border-black placeholder:text-black/25",
        "desktop:w-[308px] laptop:w-[299px] tablet:w-[658px] w-[322px]"
      ),
      placeholder: "Write a note to the recipient"
    }
  );
}
function We({
  index: i,
  handleDeleteTransfer: a,
  sending: c
}) {
  return /* @__PURE__ */ n.jsx(
    It,
    {
      className: F(
        "w-[20px] h-[20px] text-[#979797] cursor-pointer",
        c && "hidden"
      ),
      onClick: () => a(i)
    }
  );
}
function Gt({
  isOpen: i,
  onClose: a
}) {
  const c = /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ n.jsx(_e, { className: "", variant: "outline", onClick: () => a(!0), children: "Quit" }),
    /* @__PURE__ */ n.jsx(_e, { className: "", onClick: () => a(!1), children: "Stay" })
  ] });
  return /* @__PURE__ */ n.jsx(
    ct,
    {
      isOpen: i,
      onClose: () => a(!1),
      title: "Are you sure you want to quit?",
      footer: c,
      children: /* @__PURE__ */ n.jsx("p", { className: "text-sm leading-none my-3", children: "Your progress may not be saved." })
    }
  );
}
function Ht({ shouldBlock: i }) {
  const [a, c] = A.useState(!1);
  jt(
    A.useCallback((p) => {
      if (i)
        return p.preventDefault(), p.returnValue = "You have unsaved changes, are you sure you want to leave?";
    }, [i])
  );
  const s = Et(
    A.useCallback(() => i ? (c(!0), !0) : !1, [i])
  );
  return {
    showExitPrompt: a,
    handleExitPrompt: (p) => {
      var g;
      c(!1), p && ((g = s == null ? void 0 : s.proceed) == null || g.call(s));
    }
  };
}
class Kt {
  constructor(a = 800) {
    Ae(this, "cache", /* @__PURE__ */ new Map());
    Ae(this, "expiryTime");
    this.expiryTime = a;
  }
  async getOrCreate(a, c) {
    const s = Date.now(), l = this.cache.get(a);
    if (l && s - l.timestamp < this.expiryTime)
      return l.promise;
    const p = c();
    this.cache.set(a, {
      promise: p,
      timestamp: s
    });
    try {
      return await p;
    } finally {
      setTimeout(() => {
        var g;
        ((g = this.cache.get(a)) == null ? void 0 : g.timestamp) === s && this.cache.delete(a);
      }, this.expiryTime);
    }
  }
  clear() {
    this.cache.clear();
  }
}
const Ue = /* @__PURE__ */ new Map(), Qt = ({
  tokenType: i,
  transferParams: a,
  fromAddress: c
}) => JSON.stringify({
  tokenType: i,
  to: a.to.toLowerCase(),
  amount: a.amount.toString(),
  from: c.toLowerCase()
}), Yt = new Kt(5e3);
async function Jt({
  tokenType: i,
  transferParams: a,
  fromAddress: c,
  defaultGasPrice: s,
  defaultBlock: l
}) {
  const p = Qt({ tokenType: i, transferParams: a, fromAddress: c });
  return Yt.getOrCreate(p, async () => {
    const g = Ue.get(p);
    if (g)
      return g.result;
    try {
      const x = D.getToken(i).viemChain;
      if (!x) return null;
      if (D.getToken(i).gasless)
        return {
          estimatedGas: BigInt(0),
          maxFeePerGas: BigInt(0),
          maxPriorityFeePerGas: BigInt(0),
          estimatedTotalFee: BigInt(0),
          baseFee: BigInt(0),
          gasPrice: BigInt(0),
          feeInTokens: "0"
        };
      const d = Ft({
        chain: x,
        transport: Vt()
      });
      let w;
      if (D.isERC20Token(i) && (w = D.getToken(i).contractAddress, !w))
        throw new Error("Invalid token contract address");
      let S;
      if (D.isERC20Token(i)) {
        const Q = $t({
          abi: dt,
          functionName: "transfer",
          args: [a.to, a.amount]
        });
        S = {
          to: w,
          data: Q,
          value: BigInt(0)
        };
      } else
        S = {
          to: a.to,
          value: a.amount
        };
      $e("start to call getEstimatedGasFeeByToken", { tokenType: i, transferParams: a, fromAddress: c });
      const O = await d.estimateGas({
        ...S,
        account: c
      }), V = s || await d.getGasPrice(), G = (l || await d.getBlock()).baseFeePerGas || BigInt(0), ie = V > G ? V - G : BigInt(1e9), M = G + ie * BigInt(2), te = O * M, B = je(
        (Number(te) / Math.pow(10, 18)).toString(),
        18
      ), $ = {
        estimatedGas: O,
        maxFeePerGas: M,
        maxPriorityFeePerGas: ie,
        estimatedTotalFee: te,
        baseFee: G,
        gasPrice: V,
        feeInTokens: Ce(B)
      };
      return Ue.set(p, {
        result: $,
        params: {
          tokenType: i,
          transferParams: a,
          fromAddress: c
        }
      }), console.log("Cache updated:", p), $;
    } catch (x) {
      throw console.error("Gas estimation error:", x), x;
    }
  });
}
const Xt = (i) => {
  if (!i.length)
    return { isValid: !1, error: "CSV file is empty" };
  const a = i[0];
  if (!Array.isArray(a) || a.length < 4)
    return {
      isValid: !1,
      error: "Invalid CSV format: missing required columns"
    };
  const c = ["To", "Note", "Token", "Amount"], s = a.map((p) => p.trim());
  for (let p = 0; p < c.length; p++)
    if (s[p] !== c[p])
      return {
        isValid: !1,
        error: `Invalid header format. Expected: ${c.join(", ")}`
      };
  const l = D.getAllTokens().map((p) => p.tokenType);
  for (let p = 1; p < i.length; p++) {
    const g = i[p];
    if (!(!g[0] || g[0].trim() === "")) {
      if (!(Te(g[0]) || De.test(g[0])))
        return {
          isValid: !1,
          error: `Invalid to format at row ${p + 1}`
        };
      if (!g[2] || !l.includes(g[2].toUpperCase()))
        return {
          isValid: !1,
          error: `Invalid token type at row ${p + 1}. Allowed tokens: ${l.join(", ")}`
        };
      if (!g[3] || isNaN(Number(g[3])) || Number(g[3]) <= 0)
        return {
          isValid: !1,
          error: `Invalid amount at row ${p + 1}`
        };
    }
  }
  return { isValid: !0 };
}, Ve = /* @__PURE__ */ new Map(), Zt = 5 * 60 * 1e3;
async function en(i) {
  const a = Ve.get(i), c = Date.now();
  if (a && c - a.timestamp < Zt)
    return {
      data: a.data
    };
  const s = await Re.get("/address/", {
    params: { email: i }
  });
  return Ve.set(i, {
    data: s.data,
    timestamp: c
  }), s;
}
function tn() {
  Ve.clear();
}
const Je = (i) => i ? Object.entries(i).reduce((a, [c, s]) => {
  if (c === "usdValue") return a;
  const l = D.getToken(c).gasSymbol, p = Pe(a[l] || "0", 18);
  return a[l] = Mt(p + Pe(s, 18), 18), a;
}, {}) : null;
var Xe = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(i, a) {
  (function(c, s) {
    i.exports = s();
  })(Nt, function c() {
    var s = typeof self < "u" ? self : typeof window < "u" ? window : s !== void 0 ? s : {}, l = !s.document && !!s.postMessage, p = s.IS_PAPA_WORKER || !1, g = {}, x = 0, d = { parse: function(t, e) {
      var o = (e = e || {}).dynamicTyping || !1;
      if (I(o) && (e.dynamicTypingFunction = o, o = {}), e.dynamicTyping = o, e.transform = !!I(e.transform) && e.transform, e.worker && d.WORKERS_SUPPORTED) {
        var m = function() {
          if (!d.WORKERS_SUPPORTED) return !1;
          var T = (R = s.URL || s.webkitURL || null, L = c.toString(), d.BLOB_URL || (d.BLOB_URL = R.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", L, ")();"], { type: "text/javascript" })))), C = new s.Worker(T), R, L;
          return C.onmessage = B, C.id = x++, g[C.id] = C;
        }();
        return m.userStep = e.step, m.userChunk = e.chunk, m.userComplete = e.complete, m.userError = e.error, e.step = I(e.step), e.chunk = I(e.chunk), e.complete = I(e.complete), e.error = I(e.error), delete e.worker, void m.postMessage({ input: t, config: e, workerId: m.id });
      }
      var v = null;
      return d.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(T) {
        return T.charCodeAt(0) === 65279 ? T.slice(1) : T;
      }(t), v = e.download ? new O(e) : new ee(e)) : t.readable === !0 && I(t.read) && I(t.on) ? v = new G(e) : (s.File && t instanceof File || t instanceof Object) && (v = new V(e)), v.stream(t);
    }, unparse: function(t, e) {
      var o = !1, m = !0, v = ",", T = `\r
`, C = '"', R = C + C, L = !1, k = null, W = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || d.BAD_DELIMITERS.filter(function(y) {
            return e.delimiter.indexOf(y) !== -1;
          }).length || (v = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (o = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (L = e.skipEmptyLines), typeof e.newline == "string" && (T = e.newline), typeof e.quoteChar == "string" && (C = e.quoteChar), typeof e.header == "boolean" && (m = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            k = e.columns;
          }
          e.escapeChar !== void 0 && (R = e.escapeChar + C), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (W = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var E = new RegExp(M(C), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return oe(null, t, L);
        if (typeof t[0] == "object") return oe(k || Object.keys(t[0]), t, L);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || k), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), oe(t.fields || [], t.data || [], L);
      throw new Error("Unable to serialize unrecognized input");
      function oe(y, P, ae) {
        var H = "";
        typeof y == "string" && (y = JSON.parse(y)), typeof P == "string" && (P = JSON.parse(P));
        var re = Array.isArray(y) && 0 < y.length, X = !Array.isArray(P[0]);
        if (re && m) {
          for (var Z = 0; Z < y.length; Z++) 0 < Z && (H += v), H += se(y[Z], Z);
          0 < P.length && (H += T);
        }
        for (var _ = 0; _ < P.length; _++) {
          var r = re ? y.length : P[_].length, f = !1, u = re ? Object.keys(P[_]).length === 0 : P[_].length === 0;
          if (ae && !re && (f = ae === "greedy" ? P[_].join("").trim() === "" : P[_].length === 1 && P[_][0].length === 0), ae === "greedy" && re) {
            for (var h = [], b = 0; b < r; b++) {
              var j = X ? y[b] : b;
              h.push(P[_][j]);
            }
            f = h.join("").trim() === "";
          }
          if (!f) {
            for (var N = 0; N < r; N++) {
              0 < N && !u && (H += v);
              var U = re && X ? y[N] : N;
              H += se(P[_][U], N);
            }
            _ < P.length - 1 && (!ae || 0 < r && !u) && (H += T);
          }
        }
        return H;
      }
      function se(y, P) {
        if (y == null) return "";
        if (y.constructor === Date) return JSON.stringify(y).slice(1, 25);
        var ae = !1;
        W && typeof y == "string" && W.test(y) && (y = "'" + y, ae = !0);
        var H = y.toString().replace(E, R);
        return (ae = ae || o === !0 || typeof o == "function" && o(y, P) || Array.isArray(o) && o[P] || function(re, X) {
          for (var Z = 0; Z < X.length; Z++) if (-1 < re.indexOf(X[Z])) return !0;
          return !1;
        }(H, d.BAD_DELIMITERS) || -1 < H.indexOf(v) || H.charAt(0) === " " || H.charAt(H.length - 1) === " ") ? C + H + C : H;
      }
    } };
    if (d.RECORD_SEP = "", d.UNIT_SEP = "", d.BYTE_ORDER_MARK = "\uFEFF", d.BAD_DELIMITERS = ["\r", `
`, '"', d.BYTE_ORDER_MARK], d.WORKERS_SUPPORTED = !l && !!s.Worker, d.NODE_STREAM_INPUT = 1, d.LocalChunkSize = 10485760, d.RemoteChunkSize = 5242880, d.DefaultDelimiter = ",", d.Parser = te, d.ParserHandle = ie, d.NetworkStreamer = O, d.FileStreamer = V, d.StringStreamer = ee, d.ReadableStreamStreamer = G, s.jQuery) {
      var w = s.jQuery;
      w.fn.parse = function(t) {
        var e = t.config || {}, o = [];
        return this.each(function(T) {
          if (!(w(this).prop("tagName").toUpperCase() === "INPUT" && w(this).attr("type").toLowerCase() === "file" && s.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var C = 0; C < this.files.length; C++) o.push({ file: this.files[C], inputElem: this, instanceConfig: w.extend({}, e) });
        }), m(), this;
        function m() {
          if (o.length !== 0) {
            var T, C, R, L, k = o[0];
            if (I(t.before)) {
              var W = t.before(k.file, k.inputElem);
              if (typeof W == "object") {
                if (W.action === "abort") return T = "AbortError", C = k.file, R = k.inputElem, L = W.reason, void (I(t.error) && t.error({ name: T }, C, R, L));
                if (W.action === "skip") return void v();
                typeof W.config == "object" && (k.instanceConfig = w.extend(k.instanceConfig, W.config));
              } else if (W === "skip") return void v();
            }
            var E = k.instanceConfig.complete;
            k.instanceConfig.complete = function(oe) {
              I(E) && E(oe, k.file, k.inputElem), v();
            }, d.parse(k.file, k.instanceConfig);
          } else I(t.complete) && t.complete();
        }
        function v() {
          o.splice(0, 1), m();
        }
      };
    }
    function S(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var o = ne(e);
        o.chunkSize = parseInt(o.chunkSize), e.step || e.chunk || (o.chunkSize = null), this._handle = new ie(o), (this._handle.streamer = this)._config = o;
      }).call(this, t), this.parseChunk = function(e, o) {
        if (this.isFirstChunk && I(this._config.beforeFirstChunk)) {
          var m = this._config.beforeFirstChunk(e);
          m !== void 0 && (e = m);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var v = this._partialLine + e;
        this._partialLine = "";
        var T = this._handle.parse(v, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var C = T.meta.cursor;
          this._finished || (this._partialLine = v.substring(C - this._baseIndex), this._baseIndex = C), T && T.data && (this._rowCount += T.data.length);
          var R = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (p) s.postMessage({ results: T, workerId: d.WORKER_ID, finished: R });
          else if (I(this._config.chunk) && !o) {
            if (this._config.chunk(T, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            T = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(T.data), this._completeResults.errors = this._completeResults.errors.concat(T.errors), this._completeResults.meta = T.meta), this._completed || !R || !I(this._config.complete) || T && T.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), R || T && T.meta.paused || this._nextChunk(), T;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        I(this._config.error) ? this._config.error(e) : p && this._config.error && s.postMessage({ workerId: d.WORKER_ID, error: e, finished: !1 });
      };
    }
    function O(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = d.RemoteChunkSize), S.call(this, t), this._nextChunk = l ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(o) {
        this._input = o, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), l || (e.onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !l), this._config.downloadRequestHeaders) {
            var o = this._config.downloadRequestHeaders;
            for (var m in o) e.setRequestHeader(m, o[m]);
          }
          if (this._config.chunkSize) {
            var v = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + v);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (T) {
            this._chunkError(T.message);
          }
          l && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(o) {
          var m = o.getResponseHeader("Content-Range");
          return m === null ? -1 : parseInt(m.substring(m.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(o) {
        var m = e.statusText || o;
        this._sendError(new Error(m));
      };
    }
    function V(t) {
      var e, o;
      (t = t || {}).chunkSize || (t.chunkSize = d.LocalChunkSize), S.call(this, t);
      var m = typeof FileReader < "u";
      this.stream = function(v) {
        this._input = v, o = v.slice || v.webkitSlice || v.mozSlice, m ? ((e = new FileReader()).onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var v = this._input;
        if (this._config.chunkSize) {
          var T = Math.min(this._start + this._config.chunkSize, this._input.size);
          v = o.call(v, this._start, T);
        }
        var C = e.readAsText(v, this._config.encoding);
        m || this._chunkLoaded({ target: { result: C } });
      }, this._chunkLoaded = function(v) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(v.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function ee(t) {
      var e;
      S.call(this, t = t || {}), this.stream = function(o) {
        return e = o, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var o, m = this._config.chunkSize;
          return m ? (o = e.substring(0, m), e = e.substring(m)) : (o = e, e = ""), this._finished = !e, this.parseChunk(o);
        }
      };
    }
    function G(t) {
      S.call(this, t = t || {});
      var e = [], o = !0, m = !1;
      this.pause = function() {
        S.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        S.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(v) {
        this._input = v, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        m && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : o = !0;
      }, this._streamData = Y(function(v) {
        try {
          e.push(typeof v == "string" ? v : v.toString(this._config.encoding)), o && (o = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (T) {
          this._streamError(T);
        }
      }, this), this._streamError = Y(function(v) {
        this._streamCleanUp(), this._sendError(v);
      }, this), this._streamEnd = Y(function() {
        this._streamCleanUp(), m = !0, this._streamData("");
      }, this), this._streamCleanUp = Y(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function ie(t) {
      var e, o, m, v = Math.pow(2, 53), T = -v, C = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, R = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, L = this, k = 0, W = 0, E = !1, oe = !1, se = [], y = { data: [], errors: [], meta: {} };
      if (I(t.step)) {
        var P = t.step;
        t.step = function(_) {
          if (y = _, re()) H();
          else {
            if (H(), y.data.length === 0) return;
            k += _.data.length, t.preview && k > t.preview ? o.abort() : (y.data = y.data[0], P(y, L));
          }
        };
      }
      function ae(_) {
        return t.skipEmptyLines === "greedy" ? _.join("").trim() === "" : _.length === 1 && _[0].length === 0;
      }
      function H() {
        return y && m && (Z("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + d.DefaultDelimiter + "'"), m = !1), t.skipEmptyLines && (y.data = y.data.filter(function(_) {
          return !ae(_);
        })), re() && function() {
          if (!y) return;
          function _(f, u) {
            I(t.transformHeader) && (f = t.transformHeader(f, u)), se.push(f);
          }
          if (Array.isArray(y.data[0])) {
            for (var r = 0; re() && r < y.data.length; r++) y.data[r].forEach(_);
            y.data.splice(0, 1);
          } else y.data.forEach(_);
        }(), function() {
          if (!y || !t.header && !t.dynamicTyping && !t.transform) return y;
          function _(f, u) {
            var h, b = t.header ? {} : [];
            for (h = 0; h < f.length; h++) {
              var j = h, N = f[h];
              t.header && (j = h >= se.length ? "__parsed_extra" : se[h]), t.transform && (N = t.transform(N, j)), N = X(j, N), j === "__parsed_extra" ? (b[j] = b[j] || [], b[j].push(N)) : b[j] = N;
            }
            return t.header && (h > se.length ? Z("FieldMismatch", "TooManyFields", "Too many fields: expected " + se.length + " fields but parsed " + h, W + u) : h < se.length && Z("FieldMismatch", "TooFewFields", "Too few fields: expected " + se.length + " fields but parsed " + h, W + u)), b;
          }
          var r = 1;
          return !y.data.length || Array.isArray(y.data[0]) ? (y.data = y.data.map(_), r = y.data.length) : y.data = _(y.data, 0), t.header && y.meta && (y.meta.fields = se), W += r, y;
        }();
      }
      function re() {
        return t.header && se.length === 0;
      }
      function X(_, r) {
        return f = _, t.dynamicTypingFunction && t.dynamicTyping[f] === void 0 && (t.dynamicTyping[f] = t.dynamicTypingFunction(f)), (t.dynamicTyping[f] || t.dynamicTyping) === !0 ? r === "true" || r === "TRUE" || r !== "false" && r !== "FALSE" && (function(u) {
          if (C.test(u)) {
            var h = parseFloat(u);
            if (T < h && h < v) return !0;
          }
          return !1;
        }(r) ? parseFloat(r) : R.test(r) ? new Date(r) : r === "" ? null : r) : r;
        var f;
      }
      function Z(_, r, f, u) {
        var h = { type: _, code: r, message: f };
        u !== void 0 && (h.row = u), y.errors.push(h);
      }
      this.parse = function(_, r, f) {
        var u = t.quoteChar || '"';
        if (t.newline || (t.newline = function(j, N) {
          j = j.substring(0, 1048576);
          var U = new RegExp(M(N) + "([^]*?)" + M(N), "gm"), q = (j = j.replace(U, "")).split("\r"), le = j.split(`
`), he = 1 < le.length && le[0].length < q[0].length;
          if (q.length === 1 || he) return `
`;
          for (var ce = 0, K = 0; K < q.length; K++) q[K][0] === `
` && ce++;
          return ce >= q.length / 2 ? `\r
` : "\r";
        }(_, u)), m = !1, t.delimiter) I(t.delimiter) && (t.delimiter = t.delimiter(_), y.meta.delimiter = t.delimiter);
        else {
          var h = function(j, N, U, q, le) {
            var he, ce, K, J;
            le = le || [",", "	", "|", ";", d.RECORD_SEP, d.UNIT_SEP];
            for (var ve = 0; ve < le.length; ve++) {
              var z = le[ve], we = 0, fe = 0, ye = 0;
              K = void 0;
              for (var me = new te({ comments: q, delimiter: z, newline: N, preview: 10 }).parse(j), ge = 0; ge < me.data.length; ge++) if (U && ae(me.data[ge])) ye++;
              else {
                var xe = me.data[ge].length;
                fe += xe, K !== void 0 ? 0 < xe && (we += Math.abs(xe - K), K = xe) : K = xe;
              }
              0 < me.data.length && (fe /= me.data.length - ye), (ce === void 0 || we <= ce) && (J === void 0 || J < fe) && 1.99 < fe && (ce = we, he = z, J = fe);
            }
            return { successful: !!(t.delimiter = he), bestDelimiter: he };
          }(_, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          h.successful ? t.delimiter = h.bestDelimiter : (m = !0, t.delimiter = d.DefaultDelimiter), y.meta.delimiter = t.delimiter;
        }
        var b = ne(t);
        return t.preview && t.header && b.preview++, e = _, o = new te(b), y = o.parse(e, r, f), H(), E ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } };
      }, this.paused = function() {
        return E;
      }, this.pause = function() {
        E = !0, o.abort(), e = I(t.chunk) ? "" : e.substring(o.getCharIndex());
      }, this.resume = function() {
        L.streamer._halted ? (E = !1, L.streamer.parseChunk(e, !0)) : setTimeout(L.resume, 3);
      }, this.aborted = function() {
        return oe;
      }, this.abort = function() {
        oe = !0, o.abort(), y.meta.aborted = !0, I(t.complete) && t.complete(y), e = "";
      };
    }
    function M(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function te(t) {
      var e, o = (t = t || {}).delimiter, m = t.newline, v = t.comments, T = t.step, C = t.preview, R = t.fastMode, L = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (L = t.escapeChar), (typeof o != "string" || -1 < d.BAD_DELIMITERS.indexOf(o)) && (o = ","), v === o) throw new Error("Comment character same as delimiter");
      v === !0 ? v = "#" : (typeof v != "string" || -1 < d.BAD_DELIMITERS.indexOf(v)) && (v = !1), m !== `
` && m !== "\r" && m !== `\r
` && (m = `
`);
      var k = 0, W = !1;
      this.parse = function(E, oe, se) {
        if (typeof E != "string") throw new Error("Input must be a string");
        var y = E.length, P = o.length, ae = m.length, H = v.length, re = I(T), X = [], Z = [], _ = [], r = k = 0;
        if (!E) return de();
        if (t.header && !oe) {
          var f = E.split(m)[0].split(o), u = [], h = {}, b = !1;
          for (var j in f) {
            var N = f[j];
            I(t.transformHeader) && (N = t.transformHeader(N, j));
            var U = N, q = h[N] || 0;
            for (0 < q && (b = !0, U = N + "_" + q), h[N] = q + 1; u.includes(U); ) U = U + "_" + q;
            u.push(U);
          }
          if (b) {
            var le = E.split(m);
            le[0] = u.join(o), E = le.join(m);
          }
        }
        if (R || R !== !1 && E.indexOf(e) === -1) {
          for (var he = E.split(m), ce = 0; ce < he.length; ce++) {
            if (_ = he[ce], k += _.length, ce !== he.length - 1) k += m.length;
            else if (se) return de();
            if (!v || _.substring(0, H) !== v) {
              if (re) {
                if (X = [], ye(_.split(o)), Ee(), W) return de();
              } else ye(_.split(o));
              if (C && C <= ce) return X = X.slice(0, C), de(!0);
            }
          }
          return de();
        }
        for (var K = E.indexOf(o, k), J = E.indexOf(m, k), ve = new RegExp(M(L) + M(e), "g"), z = E.indexOf(e, k); ; ) if (E[k] !== e) if (v && _.length === 0 && E.substring(k, k + H) === v) {
          if (J === -1) return de();
          k = J + ae, J = E.indexOf(m, k), K = E.indexOf(o, k);
        } else if (K !== -1 && (K < J || J === -1)) _.push(E.substring(k, K)), k = K + P, K = E.indexOf(o, k);
        else {
          if (J === -1) break;
          if (_.push(E.substring(k, J)), xe(J + ae), re && (Ee(), W)) return de();
          if (C && X.length >= C) return de(!0);
        }
        else for (z = k, k++; ; ) {
          if ((z = E.indexOf(e, z + 1)) === -1) return se || Z.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: X.length, index: k }), ge();
          if (z === y - 1) return ge(E.substring(k, z).replace(ve, e));
          if (e !== L || E[z + 1] !== L) {
            if (e === L || z === 0 || E[z - 1] !== L) {
              K !== -1 && K < z + 1 && (K = E.indexOf(o, z + 1)), J !== -1 && J < z + 1 && (J = E.indexOf(m, z + 1));
              var we = me(J === -1 ? K : Math.min(K, J));
              if (E.substr(z + 1 + we, P) === o) {
                _.push(E.substring(k, z).replace(ve, e)), E[k = z + 1 + we + P] !== e && (z = E.indexOf(e, k)), K = E.indexOf(o, k), J = E.indexOf(m, k);
                break;
              }
              var fe = me(J);
              if (E.substring(z + 1 + fe, z + 1 + fe + ae) === m) {
                if (_.push(E.substring(k, z).replace(ve, e)), xe(z + 1 + fe + ae), K = E.indexOf(o, k), z = E.indexOf(e, k), re && (Ee(), W)) return de();
                if (C && X.length >= C) return de(!0);
                break;
              }
              Z.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: X.length, index: k }), z++;
            }
          } else z++;
        }
        return ge();
        function ye(ue) {
          X.push(ue), r = k;
        }
        function me(ue) {
          var Le = 0;
          if (ue !== -1) {
            var Se = E.substring(z + 1, ue);
            Se && Se.trim() === "" && (Le = Se.length);
          }
          return Le;
        }
        function ge(ue) {
          return se || (ue === void 0 && (ue = E.substring(k)), _.push(ue), k = y, ye(_), re && Ee()), de();
        }
        function xe(ue) {
          k = ue, ye(_), _ = [], J = E.indexOf(m, k);
        }
        function de(ue) {
          return { data: X, errors: Z, meta: { delimiter: o, linebreak: m, aborted: W, truncated: !!ue, cursor: r + (oe || 0) } };
        }
        function Ee() {
          T(de()), X = [], Z = [];
        }
      }, this.abort = function() {
        W = !0;
      }, this.getCharIndex = function() {
        return k;
      };
    }
    function B(t) {
      var e = t.data, o = g[e.workerId], m = !1;
      if (e.error) o.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var v = { abort: function() {
          m = !0, $(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: Q, resume: Q };
        if (I(o.userStep)) {
          for (var T = 0; T < e.results.data.length && (o.userStep({ data: e.results.data[T], errors: e.results.errors, meta: e.results.meta }, v), !m); T++) ;
          delete e.results;
        } else I(o.userChunk) && (o.userChunk(e.results, v, e.file), delete e.results);
      }
      e.finished && !m && $(e.workerId, e.results);
    }
    function $(t, e) {
      var o = g[t];
      I(o.userComplete) && o.userComplete(e), o.terminate(), delete g[t];
    }
    function Q() {
      throw new Error("Not implemented.");
    }
    function ne(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var o in t) e[o] = ne(t[o]);
      return e;
    }
    function Y(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function I(t) {
      return typeof t == "function";
    }
    return p && (s.onmessage = function(t) {
      var e = t.data;
      if (d.WORKER_ID === void 0 && e && (d.WORKER_ID = e.workerId), typeof e.input == "string") s.postMessage({ workerId: d.WORKER_ID, results: d.parse(e.input, e.config), finished: !0 });
      else if (s.File && e.input instanceof File || e.input instanceof Object) {
        var o = d.parse(e.input, e.config);
        o && s.postMessage({ workerId: d.WORKER_ID, results: o, finished: !0 });
      }
    }), (O.prototype = Object.create(S.prototype)).constructor = O, (V.prototype = Object.create(S.prototype)).constructor = V, (ee.prototype = Object.create(ee.prototype)).constructor = ee, (G.prototype = Object.create(S.prototype)).constructor = G, d;
  });
})(Xe);
var nn = Xe.exports;
const sn = /* @__PURE__ */ Ct(nn);
function an({
  onSent: i
}) {
  const { address: a } = ut.all(), { t: c } = Qe(), { data: s, isFetched: l } = ht(), { data: p } = ft(), { data: g } = pt(), [x, d] = A.useState(null), [w, S] = A.useState([]), [O, V] = A.useState([]), [ee, G] = A.useState([]), [ie, M] = A.useState(!1), [te, B] = A.useState(!1), [$, Q] = A.useState({
    ...D.createTokenMap(() => "0"),
    usdValue: "0"
  }), [ne, Y] = A.useState(null), I = ze(w, 800), t = ze(O, 800), { signTransaction: e } = Dt();
  A.useEffect(() => {
    l && L();
  }, [l]), A.useEffect(() => {
    tn(), W();
  }, []), A.useEffect(() => {
    const r = D.createTokenMap(() => 0);
    w.forEach((h) => {
      h.amount && !isNaN(parseFloat(h.amount)) && (r[h.token] += parseFloat(h.amount));
    });
    let f = 0;
    p && (f = Object.values(pe).reduce((h, b) => h + r[b] * parseFloat(p[b] || "0"), 0));
    const u = D.getAllTokens().reduce((h, b) => ({
      ...h,
      [b.tokenType]: r[b.tokenType].toString()
    }), {});
    Q({
      ...u,
      usdValue: be(f.toString(), 2)
    });
  }, [w, p]);
  const o = A.useMemo(
    () => Object.entries($).filter(([r]) => r !== "usdValue").some(([r, f]) => {
      const u = r, h = parseFloat((s == null ? void 0 : s[u]) || "0"), b = parseFloat(f), j = ne && ne[u] ? parseFloat(ne[u]) : 0;
      return b + j > h;
    }),
    [$, s, ne]
  ), m = ({
    transfer: r,
    validation: f
  }) => De.test(r.to) && (f == null ? void 0 : f.error) === c("/dashboard.[token].sendModal.unregisteredEmailNotice"), v = A.useMemo(() => !x || !g || !$ ? [] : D.getAllTokens().map((f) => f.tokenType).filter((f) => {
    const u = BigInt(x[f]), h = BigInt(Ne($[f])), b = BigInt(Ne(g[f]));
    return u + h > b;
  }), [x, g, $]), T = A.useMemo(() => w.some((r, f) => {
    if (!r.to || !r.amount || !r.token)
      return !0;
    const u = O[f];
    if (u != null && u.error && !m({ transfer: r, validation: u }) || u != null && u.isValidating)
      return !0;
    const h = parseFloat(r.amount);
    return !!(isNaN(h) || h <= 0 || o || v.length > 0);
  }), [w, O, o, v]), C = A.useMemo(() => w.some((r) => r.to || r.note || r.amount), [w]);
  A.useEffect(() => {
    I.forEach((r, f) => {
      r.to && k(r.to, f);
    });
  }, [I]), A.useEffect(() => {
    R();
  }, [t, I]);
  const R = A.useCallback(async () => {
    if (T) {
      Y(null);
      return;
    }
    B(!0);
    try {
      const r = D.getAllTokens().map((b) => b.tokenType), f = {}, u = (b) => I.filter((j, N) => {
        var q;
        return j.token === b && j.amount && (Te(j.to) || ((q = t[N]) == null ? void 0 : q.fullAddress));
      }).map((j, N) => {
        var U;
        return {
          to: Te(j.to) ? j.to : (U = t[N]) == null ? void 0 : U.fullAddress,
          amount: Ne(j.amount)
        };
      });
      for (const b of r) {
        const j = u(b);
        if (j.length > 0) {
          const U = (await Promise.all(
            j.map(
              (q) => Jt({
                tokenType: b,
                transferParams: q,
                fromAddress: a
              })
            )
          )).reduce(
            (q, le) => le ? q + parseFloat(le.feeInTokens) : q,
            0
          );
          if (U > 0) {
            const q = je(U.toFixed(18), 18);
            f[b] = Ce(q);
          }
        }
      }
      const h = D.getAllTokens().reduce((b, j) => {
        const N = f[j.tokenType], U = p == null ? void 0 : p[j.tokenType];
        return b + (N && U ? parseFloat(N) * parseFloat(U) : 0);
      }, 0);
      f.usdValue = be(h.toString(), 2), Y(f);
    } catch (r) {
      console.error("Failed to calculate gas fee:", r), Y(null);
    } finally {
      B(!1);
    }
  }, [t, I, T, a, p]), L = () => {
    S([{
      to: "",
      note: "",
      amount: "",
      token: pe.VAST,
      balance: (s == null ? void 0 : s[pe.VAST]) || "0"
    }]), V([{
      isValidating: !1,
      isValidEmail: !1,
      fullAddress: "",
      error: ""
    }]), G([!1]);
  }, k = async (r, f) => {
    if (!r) {
      V((u) => {
        const h = [...u];
        return h[f] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "Address or email is required"
        }, h;
      });
      return;
    }
    V((u) => {
      const h = [...u];
      return h[f] = {
        ...u[f],
        isValidating: !0
      }, h;
    });
    try {
      if (Te(r)) {
        V((h) => {
          const b = [...h];
          return b[f] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }, b;
        });
        return;
      }
      if (!De.test(r)) {
        V((h) => {
          const b = [...h];
          return b[f] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: c("/dashboard.[token].sendModal.invalidEmailFormat")
          }, b;
        });
        return;
      }
      const u = await en(r);
      V((h) => {
        const b = [...h];
        return b[f] = {
          isValidating: !1,
          isValidEmail: !0,
          fullAddress: u.data.success ? u.data.address : "",
          error: u.data.success ? "" : c("/dashboard.[token].sendModal.unregisteredEmailNotice")
        }, b;
      });
    } catch {
      V((h) => {
        const b = [...h];
        return b[f] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "error"
        }, b;
      });
    }
  }, W = async () => {
    try {
      const { data: r } = await Re.post("/transaction/outbound-amount", {
        tokens: D.getAllTokens().map((f) => f.tokenType)
      });
      d(r);
    } catch (r) {
      console.error("Failed to fetch token transferred:", r);
    }
  }, E = async (r, f) => {
    const u = r.target.value.trim(), h = [...w];
    h[f].to = u, S(h);
  }, oe = (r) => {
    k(w[r].to, r);
  }, se = (r) => {
    const f = w[r].amount;
    G((u) => {
      const h = [...u];
      return h[r] = f === "", h;
    });
  }, y = (r, f) => {
    const u = [...w];
    u[f].note = r.target.value, S(u);
  }, P = (r, f) => {
    const u = r.target.value.trim(), h = [...w];
    h[f].amount = u, S(h), G((b) => {
      const j = [...b];
      return j[f] = !1, j;
    });
  }, ae = async (r, f) => {
    B(!1);
    try {
      const u = (s == null ? void 0 : s[r]) || "0";
      S((h) => {
        const b = [...h];
        return b[f] = {
          ...h[f],
          token: r,
          amount: "",
          balance: u
        }, b;
      });
    } catch (u) {
      console.error("Failed to fetch balance:", u);
    }
  }, H = async (r, f) => {
    const u = O[f], h = r.amount;
    let b, j;
    if (Te(r.to))
      b = r.to;
    else if (m({ transfer: r, validation: u })) {
      j = r.to, await Re.post("/invite/invite-register", {
        toEmail: j,
        from: a,
        amount: Ne(h).toString(),
        token: r.token,
        note: r.note
      });
      return;
    } else
      b = u == null ? void 0 : u.fullAddress;
    const N = await e({
      to: b,
      amount: h,
      data: "",
      token: r.token,
      transactionType: gt.TRANSFER,
      note: r.note,
      isNotifySubmit: !1,
      isNotifyOtp: !1,
      isNotifyError: !1
    }), U = D.getToken(r.token);
    if (N != null && N.hash && (U != null && U.gasless)) {
      const q = await xt(N.hash, r.token);
      if (!q || q.status !== "success")
        throw new Error("Transfer failed. Please try again.");
    }
    return N;
  };
  return {
    transfers: w,
    toValidations: O,
    sending: ie,
    isDisabled: T,
    hasContent: C,
    isEstimatingFee: te,
    tokenBalances: s,
    tokenPrices: p,
    hasInsufficientBalance: o,
    handleToChange: E,
    handleToBlur: oe,
    handleNoteChange: y,
    handleAmountChange: P,
    handleTokenTypeChange: ae,
    handleSend: async () => {
      M(!0);
      try {
        const r = [];
        for (let f = 0; f < w.length; f++) {
          const u = w[f];
          try {
            const h = await H(u, f);
            m({ transfer: u, validation: O[f] }) ? r.push({
              to: u.to,
              type: "invitation",
              status: "sent",
              statusMessage: "Invitation email sent. The recipient will receive an invitation email to sign up their account.",
              amount: u.amount,
              token: u.token
            }) : r.push({
              to: u.to,
              type: "transaction",
              status: h != null && h.hash ? "sent" : "failed",
              statusMessage: h != null && h.needOtp ? "Daily transaction limit exceeded. Please check your email and verify by the OTP." : "Sent and received",
              amount: u.amount,
              token: u.token
            });
          } catch (h) {
            const b = m({ transfer: u, validation: O[f] }) ? "invitation" : "transaction", j = mt(h);
            $e("handleSend", { errorInfo: j }), r.push({
              to: u.to,
              type: b,
              status: "failed",
              statusMessage: b === "transaction" ? j.message : "Not sent. Please try transferring again.",
              amount: u.amount,
              token: u.token
            });
          }
        }
        i(r, ne, $);
      } catch (r) {
        console.error("Failed to send transfers:", r);
      } finally {
        M(!1);
      }
    },
    handleAddTransfer: () => {
      const r = {
        to: "",
        note: "",
        amount: "",
        token: pe.VAST,
        balance: (s == null ? void 0 : s[pe.VAST]) || "0"
      };
      S([...w, r]), V([...O, {
        isValidating: !1,
        isValidEmail: !1,
        fullAddress: "",
        error: ""
      }]), G([...ee, !1]);
    },
    handleDeleteTransfer: (r) => {
      S(w.filter((f, u) => u !== r)), V(O.filter((f, u) => u !== r)), G(ee.filter((f, u) => u !== r));
    },
    handleFileChange: (r) => {
      var u;
      const f = (u = r.target.files) == null ? void 0 : u[0];
      f && sn.parse(f, {
        header: !1,
        complete: (h) => {
          const b = Xt(h.data);
          if (!b.isValid) {
            Ie.error(b.error), S([]), r.target.value = "";
            return;
          }
          const j = h.data.slice(1).filter((N) => N[0] && N[0].trim() !== "").map((N) => ({
            to: N[0],
            note: N[1],
            token: N[2],
            amount: N[3],
            balance: (s == null ? void 0 : s[N[2]]) || "0"
          }));
          S(j), V(j.map(() => ({
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }))), G(j.map(() => !1)), Ie.success("CSV file uploaded successfully");
        },
        error: (h) => {
          Ie.error(`Error parsing CSV: ${h.message}`);
        }
      });
    },
    totalAmount: $,
    todayTokenTransferred: x,
    defaultLimits: g,
    gasFees: ne,
    handleAmountBlur: se,
    amountRequiredValidations: ee,
    exceededTokens: v
  };
}
function rn({
  todayTokenTransferred: i,
  defaultLimits: a,
  totalAmount: c,
  exceededTokens: s
}) {
  const [l, p] = A.useState(!1);
  return s.length === 0 ? null : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        s.map((g) => /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black font-normal leading-snug", children: [
          D.getToken(g).symbol,
          " daily transaction limit exceeded. Current ",
          D.getToken(g).symbol,
          " limit: ",
          je(a[g] || "0"),
          " ",
          D.getToken(g).symbol
        ] }, g)),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-xs text-black font-bold leading-none mt-[12px] cursor-pointer w-fit",
            onClick: () => p(!0),
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
        isOpen: l,
        onClose: () => p(!1),
        defaultLimits: a
      }
    )
  ] });
}
function on({
  tokenBalances: i,
  tokenPrices: a,
  totalAmount: c,
  hasInsufficientBalance: s,
  gasFees: l
}) {
  if (!s) return null;
  const p = (g, x) => a != null && a[x] ? be((parseFloat(g) * parseFloat(a[x])).toString(), 2) : "0";
  return /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
    /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-black font-bold leading-none mb-[8px]", children: "Insufficient balance:" }),
      Object.keys(i).map((g) => {
        const x = g, d = parseFloat(i[x] || "0"), w = parseFloat(c[x] || "0"), S = l && l[x] ? parseFloat(l[x]) : 0, O = w + S;
        return O > d && /* @__PURE__ */ n.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            D.getToken(x).symbol,
            " balance: ",
            be(d.toString(), 6),
            " ",
            D.getToken(x).symbol,
            " ~",
            p(d.toString(), x),
            " USDT"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            "Required: ",
            be(O.toString(), 6),
            " ",
            D.getToken(x).symbol,
            " (Transfer: ",
            be(w.toString(), 6),
            " + Gas: ",
            be(S.toString(), 6),
            ")"
          ] })
        ] }, g);
      })
    ] })
  ] }) });
}
function Ze({
  totalAmount: i,
  gasFees: a
}) {
  const c = Je(a), s = (x) => {
    const d = D.getNativeTokenTypeByGasSymbol(x);
    let w = 0;
    return d ? w = parseFloat(i[d] || "0") + parseFloat((c == null ? void 0 : c[x]) || "0") : w = parseFloat((c == null ? void 0 : c[x]) || "0"), w ? {
      amount: Ce(je(w.toString(), 18)),
      symbol: x
    } : null;
  }, l = (x) => {
    const d = x, w = parseFloat(i[d] || "0");
    return w ? {
      amount: Ce(je(w.toString())),
      symbol: d
    } : null;
  }, p = () => {
    const x = [];
    return Object.values(vt).forEach((d) => {
      x.push(s(d));
    }), D.getAllTokens().filter((d) => D.isERC20Token(d.tokenType)).forEach((d) => {
      x.push(l(d.tokenType));
    }), x.filter((d) => d !== null);
  }, g = () => {
    const x = parseFloat(i.usdValue), d = parseFloat((a == null ? void 0 : a.usdValue) || "0"), w = x + d;
    return be(w.toString());
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Total amount:" }) }),
    /* @__PURE__ */ n.jsxs("p", { className: "text-black text-xl font-medium leading-none text-right mt-0.5", children: [
      p().map((x, d, w) => /* @__PURE__ */ n.jsxs("span", { children: [
        x.amount,
        " ",
        x.symbol,
        d < w.length - 1 && " & "
      ] }, d)),
      parseFloat(g()) !== 0 && ` (~$${g()} USD)`
    ] })
  ] });
}
const ln = D.getAllTokens().map((i) => i.tokenType);
function cn({
  handleTokenTypeChange: i,
  index: a,
  transfer: c,
  sending: s
}) {
  return /* @__PURE__ */ n.jsxs(yt, { children: [
    /* @__PURE__ */ n.jsxs(kt, { disabled: s, className: "flex items-center gap-[6px] px-0 py-1 focus:outline-none", children: [
      /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: D.getToken(c.token).logo, alt: "" }),
      /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: D.getToken(c.token).symbol }),
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/down_caret.svg", alt: "" })
    ] }),
    /* @__PURE__ */ n.jsx(wt, { align: "start", className: "bg-white", children: ln.map((l) => /* @__PURE__ */ n.jsxs(
      _t,
      {
        disabled: s,
        onClick: () => i(l, a),
        className: "flex items-center gap-[6px]",
        children: [
          /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: D.getToken(l).logo, alt: "" }),
          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: D.getToken(l).symbol })
        ]
      },
      l
    )) })
  ] });
}
function dn({
  transfer: i,
  sending: a,
  handleAmountChange: c,
  handleTokenTypeChange: s,
  index: l,
  handleAmountBlur: p,
  isEmpty: g
}) {
  const x = A.useRef(null), [d, w] = A.useState(0);
  return A.useEffect(() => {
    x.current && setTimeout(() => {
      var O;
      const S = (O = x.current) == null ? void 0 : O.getBoundingClientRect().width;
      S && w(S + 12);
    }, 0);
  }, [i.token]), /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ n.jsx(
      qe,
      {
        disabled: a,
        value: i.amount,
        type: "number",
        inputMode: "decimal",
        onChange: (S) => c(S, l),
        onBlur: () => p(l),
        className: F(
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          "desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]"
        ),
        placeholder: "Amount",
        style: {
          paddingLeft: `${d}px`
        }
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { ref: x, className: "absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center", children: [
      /* @__PURE__ */ n.jsx(
        cn,
        {
          index: l,
          transfer: i,
          handleTokenTypeChange: s,
          sending: a
        }
      ),
      /* @__PURE__ */ n.jsx(Ye, { type: "vertical", className: "h-[16px]" })
    ] }),
    g && /* @__PURE__ */ n.jsx("p", { className: F(
      "absolute -bottom-[20px] left-[0] text-xs text-destructive"
    ), children: "Amount is required" })
  ] });
}
function un({
  onSent: i
}) {
  const {
    transfers: a,
    toValidations: c,
    sending: s,
    isDisabled: l,
    hasContent: p,
    handleToChange: g,
    handleToBlur: x,
    handleNoteChange: d,
    handleAmountChange: w,
    handleTokenTypeChange: S,
    handleSend: O,
    handleAddTransfer: V,
    handleDeleteTransfer: ee,
    totalAmount: G,
    tokenBalances: ie,
    tokenPrices: M,
    todayTokenTransferred: te,
    defaultLimits: B,
    gasFees: $,
    isEstimatingFee: Q,
    hasInsufficientBalance: ne,
    handleFileChange: Y,
    handleAmountBlur: I,
    amountRequiredValidations: t,
    exceededTokens: e
  } = an({
    onSent: i
  }), { showExitPrompt: o, handleExitPrompt: m } = Ht({
    shouldBlock: p
  }), v = Ge(), T = () => {
    v(-1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: F(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Multisender" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: "You can add multiple recipients in custom settings" })
    ] }),
    te && /* @__PURE__ */ n.jsx(
      rn,
      {
        todayTokenTransferred: te,
        defaultLimits: B,
        totalAmount: G,
        exceededTokens: e
      }
    ),
    M && ie && /* @__PURE__ */ n.jsx(
      on,
      {
        tokenBalances: ie,
        tokenPrices: M,
        totalAmount: G,
        hasInsufficientBalance: ne,
        gasFees: $
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: F(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug",
        "desktop:gap-[28px] laptop:gap-[23px]"
      ), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "desktop:w-[382px] laptop:w-[318px]", children: [
          "To",
          a.length > 1 && `(${a.length})`
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] hidden laptop:block", children: "Notes" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: a.map((C, R) => /* @__PURE__ */ n.jsxs("div", { className: "border-b border-[#ebebeb]", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: F(
              "flex items-center flex-wrap py-[25px]",
              "desktop:gap-[28px] laptop:gap-[23px] tablet:gap-[7px] gap-0"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { children: /* @__PURE__ */ n.jsx(
                qt,
                {
                  index: R,
                  transfer: C,
                  validation: c[R] || {
                    isValidating: !1,
                    isValidEmail: !1,
                    fullAddress: "",
                    error: ""
                  },
                  handleToChange: g,
                  handleToBlur: x,
                  sending: s
                }
              ) }),
              /* @__PURE__ */ n.jsx("section", { className: F(
                "block tablet:hidden laptop:block",
                "pl-[22px] tablet:pl-0",
                "py-[12px] tablet:py-0"
              ), children: /* @__PURE__ */ n.jsx(
                Be,
                {
                  index: R,
                  transfer: C,
                  handleNoteChange: d,
                  sending: s
                }
              ) }),
              /* @__PURE__ */ n.jsxs("section", { className: F(
                "relative",
                "ml-[22px] tablet:ml-0"
              ), children: [
                /* @__PURE__ */ n.jsx(
                  dn,
                  {
                    index: R,
                    transfer: C,
                    handleAmountChange: w,
                    handleTokenTypeChange: S,
                    sending: s,
                    handleAmountBlur: I,
                    isEmpty: t[R]
                  }
                ),
                /* @__PURE__ */ n.jsx("div", { className: F(
                  "absolute top-1/2 -translate-y-1/2",
                  "laptop:-right-[33px] -right-[102px]",
                  "block tablet:hidden laptop:block",
                  a.length === 1 && "hidden laptop:hidden"
                ), children: /* @__PURE__ */ n.jsx(
                  We,
                  {
                    index: R,
                    handleDeleteTransfer: ee,
                    sending: s
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: F(
              "items-center justify-between gap-[22px]",
              "hidden tablet:flex laptop:hidden",
              "pb-[25px]"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { className: "pl-[22px] flex-1", children: /* @__PURE__ */ n.jsx(
                Be,
                {
                  index: R,
                  transfer: C,
                  handleNoteChange: d,
                  sending: s
                }
              ) }),
              /* @__PURE__ */ n.jsx("div", { className: F(
                a.length === 1 && "hidden"
              ), children: /* @__PURE__ */ n.jsx(
                We,
                {
                  index: R,
                  handleDeleteTransfer: ee,
                  sending: s
                }
              ) })
            ]
          }
        )
      ] }, R)) })
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
            disabled: s,
            onClick: () => {
              const C = document.querySelector('input[type="file"]');
              C && C.click();
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
            onChange: Y
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        _e,
        {
          variant: "outline",
          className: "h-[24px] text-xs px-[26px]",
          onClick: V,
          disabled: s,
          children: /* @__PURE__ */ n.jsx(Ot, { className: "w-[12px] h-[12px]", strokeWidth: 3 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[120px]", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: [
        /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }),
        /* @__PURE__ */ n.jsx(Lt, { title: "Estimated fees may vary and will be recalculated during backend checks.", overlayStyle: { maxWidth: "none" }, children: /* @__PURE__ */ n.jsx(Rt, { className: "w-[16px] h-[16px]" }) })
      ] }),
      Q ? /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-end mt-0.5", children: /* @__PURE__ */ n.jsx(He, { className: "animate-spin", size: 14 }) }) : $ ? /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        (() => {
          const C = Je($);
          return Object.entries(C || {}).filter(([R, L]) => L !== "0").map(([R, L], k, W) => /* @__PURE__ */ n.jsxs("span", { children: [
            L,
            " ",
            R,
            k < W.length - 1 && " & "
          ] }, R));
        })(),
        Object.values($).some((C) => C !== "0") && ` (~$${$.usdValue} USD)`
      ] }) : /* @__PURE__ */ n.jsx("p", { className: "text-black text-right", children: "-" }),
      /* @__PURE__ */ n.jsx(
        Ze,
        {
          totalAmount: G,
          gasFees: $
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "mt-[104px]", children: [
        /* @__PURE__ */ n.jsx(
          Ut,
          {
            onSuccess: O,
            loading: s,
            disabled: l || Q,
            className: "mx-auto"
          }
        ),
        !s && /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-center mt-[26px]", children: /* @__PURE__ */ n.jsx(
          "p",
          {
            className: "w-auto cursor-pointer text-black text-base font-bold leading-tight",
            onClick: T,
            children: "Cancel"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      Gt,
      {
        isOpen: o,
        onClose: m
      }
    )
  ] });
}
function hn({
  transferResults: i,
  onTransferAgain: a,
  gasFees: c,
  totalAmount: s
}) {
  return Ge(), /* @__PURE__ */ n.jsxs("div", { className: F(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Token sent" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: 'You can find the transactions under the "History" tab in the Dashboard page.' })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: F(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug"
      ), children: [
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[397px] laptop:w-[397px] tablet:w-[319px]", children: "To" }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] tablet:w-[252px] hidden tablet:block", children: "Status" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: i.map((l, p) => /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: F(
            "border-b border-[#ebebeb]",
            "flex items-center flex-wrap py-[25px]"
          ),
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: F(
              "flex items-center justify-between px-0 text-xs"
            ), children: [
              /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
                p + 1,
                "."
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: F(
                "flex items-center",
                "desktop:w-[297px] laptop:w-[297px] tablet:w-[297px] w-[302px]",
                "desktop:mr-[100px] laptop:mr-[100px] tablet:mr-[20px]",
                "py-[8px] tablet:py-0"
              ), children: [
                /* @__PURE__ */ n.jsx("p", { className: F(
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
            /* @__PURE__ */ n.jsx("p", { className: F(
              "text-xs text-black font-normal leading-tight break-words",
              "desktop:w-[362px] laptop:w-[348px] tablet:w-[252px] w-full",
              "mb-1 tablet:mb-0",
              l.status === "failed" && "text-destructive"
            ), children: l.statusMessage }),
            /* @__PURE__ */ n.jsxs("div", { className: F(
              "flex-1 text-sm text-black font-normal leading-none text-right",
              "pr-0 tablet:pr-[8px]"
            ), children: [
              /* @__PURE__ */ n.jsxs("p", { children: [
                l.amount,
                " ",
                D.getToken(l.token).symbol
              ] }),
              l.type === "transaction" && l.status === "failed" && /* @__PURE__ */ n.jsx("p", { children: "(Not Sent)" })
            ] })
          ]
        },
        p
      )) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[30px]", children: [
      /* @__PURE__ */ n.jsx("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }) }),
      /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        c && Object.entries(c).filter(([l]) => l !== "usdValue" && c[l] !== "0").map(([l, p], g, x) => /* @__PURE__ */ n.jsxs("span", { children: [
          p,
          " ",
          D.getToken(l).symbol,
          g < x.length - 1 && " & "
        ] }, l)),
        c && Object.values(c).some((l) => l !== "0") && ` (~$${c.usdValue} USD)`
      ] }),
      /* @__PURE__ */ n.jsx(
        Ze,
        {
          totalAmount: s,
          gasFees: c
        }
      ),
      /* @__PURE__ */ n.jsx("div", { className: "mt-[104px]", children: /* @__PURE__ */ n.jsx("div", { className: "flex justify-center flex-wrap gap-4 mt-6 w-full", children: /* @__PURE__ */ n.jsx(_e, { className: "w-[343px] tablet:w-[242px]", onClick: () => {
        a();
      }, children: "OK" }) }) })
    ] })
  ] });
}
pe.ETH, pe.ETH, pe.ETH, pe.ETH;
function wn() {
  const [i, a] = A.useState(!1), [c, s] = A.useState([]), [l, p] = A.useState(null), [g, x] = A.useState({
    ...D.createTokenMap(() => "0"),
    usdValue: "0"
  }), d = (w, S, O) => {
    s(w), p(S), x(O), a(!0);
  };
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: i ? /* @__PURE__ */ n.jsx(
    hn,
    {
      transferResults: c,
      onTransferAgain: () => {
        a(!1);
      },
      gasFees: l,
      totalAmount: g
    }
  ) : /* @__PURE__ */ n.jsx(
    un,
    {
      onSent: d
    }
  ) });
}
export {
  wn as default
};
