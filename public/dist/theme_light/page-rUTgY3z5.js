var Xe = Object.defineProperty;
var Ze = (o, s, f) => s in o ? Xe(o, s, { enumerable: !0, configurable: !0, writable: !0, value: f }) : o[s] = f;
var Ce = (o, s, f) => Ze(o, typeof s != "symbol" ? s + "" : s, f);
import { j as n } from "./vendor-radix-BMBq7gbN.js";
import { J as et, H as tt, M as nt, q as ye, m as st, n as at, t as rt, c as D, g as De, I as He, aF as it, T as ot, D as lt, b as ct, $ as ue, d as dt, e as ut, a9 as ht, B as Te, aG as ft, aH as pt, i as Re, f as Ae, j as Oe, a as mt, aI as Ne, aJ as Ue, ao as gt, aK as We, Z as xe, h as xt, ac as bt, ap as vt } from "./main-D5sRvz5I.js";
import { r as I, p as Me, o as yt, q as wt, c as Tt, d as kt, k as qe } from "./vendor-react-BA5A8Axg.js";
import { u as _t, i as Ge, L as jt, f as Ke, g as Fe, T as Et, P as Ct, I as Nt } from "./vendor-ui-utils-CNDLbdLA.js";
import { u as Je, B as Se } from "./vendor-utils-7AahqLO2.js";
import { u as St } from "./useTransaction-Bnh4SJ28.js";
import { c as It, h as At, e as Ot, k as ke, p as je } from "./vendor-web3-CqtRdeC5.js";
import { d as Mt } from "./index-B22Nvn56.js";
const Ft = (o) => {
  const {
    componentCls: s,
    sizePaddingEdgeHorizontal: f,
    colorSplit: a,
    lineWidth: m,
    textPaddingInline: g,
    orientationMargin: l,
    verticalMarginInline: p
  } = o;
  return {
    [s]: Object.assign(Object.assign({}, nt(o)), {
      borderBlockStart: `${ye(m)} solid ${a}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        marginInline: p,
        marginBlock: 0,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${ye(m)} solid ${a}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${ye(o.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${s}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${ye(o.dividerHorizontalWithTextGutterMargin)} 0`,
        color: o.colorTextHeading,
        fontWeight: 500,
        fontSize: o.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${a}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${ye(m)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${s}-with-text-left`]: {
        "&::before": {
          width: `calc(${l} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${l} * 100%)`
        }
      },
      [`&-horizontal${s}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${l} * 100%)`
        },
        "&::after": {
          width: `calc(${l} * 100%)`
        }
      },
      [`${s}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: g
      },
      "&-dashed": {
        background: "none",
        borderColor: a,
        borderStyle: "dashed",
        borderWidth: `${ye(m)} 0 0`
      },
      [`&-horizontal${s}-with-text${s}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${s}-dashed`]: {
        borderInlineStartWidth: m,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-dotted": {
        background: "none",
        borderColor: a,
        borderStyle: "dotted",
        borderWidth: `${ye(m)} 0 0`
      },
      [`&-horizontal${s}-with-text${s}-dotted`]: {
        "&::before, &::after": {
          borderStyle: "dotted none none"
        }
      },
      [`&-vertical${s}-dotted`]: {
        borderInlineStartWidth: m,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${s}-with-text`]: {
        color: o.colorText,
        fontWeight: "normal",
        fontSize: o.fontSize
      },
      [`&-horizontal${s}-with-text-left${s}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${s}-inner-text`]: {
          paddingInlineStart: f
        }
      },
      [`&-horizontal${s}-with-text-right${s}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${s}-inner-text`]: {
          paddingInlineEnd: f
        }
      }
    })
  };
}, Vt = (o) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: o.marginXS
}), Dt = et("Divider", (o) => {
  const s = tt(o, {
    dividerHorizontalWithTextGutterMargin: o.margin,
    dividerHorizontalGutterMargin: o.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [Ft(s)];
}, Vt, {
  unitless: {
    orientationMargin: !0
  }
});
var Rt = function(o, s) {
  var f = {};
  for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && s.indexOf(a) < 0 && (f[a] = o[a]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function") for (var m = 0, a = Object.getOwnPropertySymbols(o); m < a.length; m++)
    s.indexOf(a[m]) < 0 && Object.prototype.propertyIsEnumerable.call(o, a[m]) && (f[a[m]] = o[a[m]]);
  return f;
};
const Qe = (o) => {
  const {
    getPrefixCls: s,
    direction: f,
    divider: a
  } = I.useContext(st), {
    prefixCls: m,
    type: g = "horizontal",
    orientation: l = "center",
    orientationMargin: p,
    className: d,
    rootClassName: C,
    children: A,
    dashed: q,
    variant: Y = "solid",
    plain: M,
    style: F
  } = o, G = Rt(o, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), N = s("divider", m), [ne, W, K] = Dt(N), L = !!A, re = l === "left" && p != null, X = l === "right" && p != null, S = at(N, a == null ? void 0 : a.className, W, K, `${N}-${g}`, {
    [`${N}-with-text`]: L,
    [`${N}-with-text-${l}`]: L,
    [`${N}-dashed`]: !!q,
    [`${N}-${Y}`]: Y !== "solid",
    [`${N}-plain`]: !!M,
    [`${N}-rtl`]: f === "rtl",
    [`${N}-no-default-orientation-margin-left`]: re,
    [`${N}-no-default-orientation-margin-right`]: X
  }, d, C), t = I.useMemo(() => typeof p == "number" ? p : /^\d+$/.test(p) ? Number(p) : p, [p]), e = Object.assign(Object.assign({}, re && {
    marginLeft: t
  }), X && {
    marginRight: t
  });
  if (Me.env.NODE_ENV !== "production") {
    const i = rt("Divider");
    Me.env.NODE_ENV !== "production" && i(!A || g !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return ne(/* @__PURE__ */ I.createElement("div", Object.assign({
    className: S,
    style: Object.assign(Object.assign({}, a == null ? void 0 : a.style), F)
  }, G, {
    role: "separator"
  }), A && g !== "vertical" && /* @__PURE__ */ I.createElement("span", {
    className: `${N}-inner-text`,
    style: e
  }, A)));
};
Me.env.NODE_ENV !== "production" && (Qe.displayName = "Divider");
const Ie = 337;
function $t({
  className: o,
  onSuccess: s,
  disabled: f = !1,
  loading: a = !1,
  ...m
}) {
  const [g, l] = I.useState(!1), [p, d] = I.useState(0), [C, A] = I.useState(!1), q = I.useRef(null), Y = I.useRef(null), M = I.useRef(0), F = () => {
    const W = Date.now();
    W - M.current >= 1e3 ? (M.current = W, A(!0), l(!1), De("onSuccess"), s == null || s()) : (d(0), l(!1));
  }, G = (W, K) => {
    f || a || l(!0);
  }, N = (W) => {
    if (!g || !q.current || !Y.current) return;
    const K = q.current, L = Y.current, re = K.getBoundingClientRect();
    let X = W - re.left - L.offsetWidth / 2;
    if (W - re.left < L.offsetWidth / 2) {
      d(0);
      return;
    }
    X + L.offsetWidth >= Ie && (X = Ie - L.offsetWidth, F()), d(X);
  }, ne = () => {
    C || d(0), l(!1);
  };
  return I.useEffect(() => {
    const W = (L) => N(L.clientX), K = (L) => {
      L.preventDefault(), N(L.touches[0].clientX);
    };
    return g && (window.addEventListener("mousemove", W), window.addEventListener("mouseup", ne), window.addEventListener("touchmove", K, { passive: !1 }), window.addEventListener("touchend", ne)), () => {
      window.removeEventListener("mousemove", W), window.removeEventListener("mouseup", ne), window.removeEventListener("touchmove", K), window.removeEventListener("touchend", ne);
    };
  }, [g]), I.useEffect(() => {
    !f && !a && (d(0), A(!1));
  }, [f, a]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: q,
      className: D(
        "relative h-[42px] rounded-full ring-1 ring-[#e0e0e0] ring-offset-[3px] cursor-pointer select-none touch-none",
        f && "cursor-not-allowed",
        o
      ),
      style: { width: `${Ie}px` },
      ...m,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: D(
              "absolute left-0 h-[42px] bg-black rounded-full",
              f && "bg-[#f2f2f2]"
            ),
            style: { width: `${p + 42}px` }
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: Y,
            className: D(
              "absolute z-10 left-0 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center cursor-grab",
              g && "cursor-grabbing",
              f && "bg-[#f2f2f2]"
            ),
            style: { transform: `translate(${p}px, -50%)` },
            onMouseDown: (W) => G(W.clientX),
            onTouchStart: (W) => G(W.touches[0].clientX),
            children: /* @__PURE__ */ n.jsx(_t, { className: D("w-[20px] h-[20px] text-white") })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "absolute text-white inset-0 flex items-center justify-center pointer-events-none", children: a ? /* @__PURE__ */ n.jsx(Ge, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ n.jsx("span", { className: D(
          "text-black text-base font-bold leading-tight",
          f && "text-[#e0e0e0]"
        ), children: "Scroll to send" }) })
      ]
    }
  );
}
function Wt({
  index: o,
  transfer: s,
  validation: {
    isValidating: f,
    isValidEmail: a,
    fullAddress: m,
    error: g
  },
  handleToChange: l,
  handleToBlur: p,
  sending: d
}) {
  const { t: C } = Je(), A = C("/dashboard.[token].sendModal.unregisteredEmailNotice");
  return /* @__PURE__ */ n.jsxs("div", { className: D(
    "flex items-center px-0 relative",
    (a && m || g) && "mb-[16px] tablet:mb-0"
  ), children: [
    /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
      o + 1,
      "."
    ] }),
    /* @__PURE__ */ n.jsx(
      He,
      {
        disabled: d,
        value: s.to,
        onChange: (q) => l(q, o),
        onBlur: () => p(o),
        placeholder: "Enter email or crypto address",
        className: D(
          "desktop:w-[380px] laptop:w-[318px] tablet:w-[426px] w-[322px]",
          a && "border-green-500 focus-visible:border-green-500",
          g && "border-destructive focus-visible:border-destructive",
          g === A && "border-blue-500 focus-visible:border-blue-500",
          "pr-10"
        )
      }
    ),
    f && /* @__PURE__ */ n.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ n.jsx(jt, { className: "animate-spin", size: 16 }) }),
    a && !f && !g && /* @__PURE__ */ n.jsx(Ke, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
    g && !f && /* @__PURE__ */ n.jsx(Fe, { className: D(
      "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
      g === A && "text-blue-500"
    ), size: 16 }),
    a && m && /* @__PURE__ */ n.jsx("p", { className: "absolute -bottom-[20px] left-[22px] mt-1 text-xs text-primary/60", children: m }),
    g && /* @__PURE__ */ n.jsx("p", { className: D(
      "absolute -bottom-[20px] left-[22px] text-xs text-destructive",
      g === A && "text-blue-400"
    ), children: g })
  ] });
}
function Le({
  index: o,
  transfer: s,
  handleNoteChange: f,
  sending: a
}) {
  return /* @__PURE__ */ n.jsx(
    it,
    {
      disabled: a,
      rows: 1,
      value: s.note,
      onChange: (m) => f(m, o),
      className: D(
        "min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border focus-visible:border-black placeholder:text-black/25",
        "desktop:w-[308px] laptop:w-[299px] tablet:w-[658px] w-[322px]"
      ),
      placeholder: "Write a note to the recipient"
    }
  );
}
function Pe({
  index: o,
  handleDeleteTransfer: s,
  sending: f
}) {
  return /* @__PURE__ */ n.jsx(
    Et,
    {
      className: D(
        "w-[20px] h-[20px] text-[#979797] cursor-pointer",
        f && "hidden"
      ),
      onClick: () => s(o)
    }
  );
}
const ze = (o) => {
  if (o === "TVWT")
    return "/imgs/logos/tvwt.png";
  if (o === "ETH")
    return "/imgs/logos/eth.png";
  if (o === "MATIC")
    return "/imgs/logos/matic.png";
}, Lt = ot.getInstance().getAllTokenTypes();
function Pt({
  handleTokenTypeChange: o,
  index: s,
  transfer: f,
  sending: a
}) {
  return /* @__PURE__ */ n.jsxs(lt, { children: [
    /* @__PURE__ */ n.jsxs(ct, { disabled: a, className: "flex items-center gap-[6px] px-0 py-1 focus:outline-none", children: [
      /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: ze(f.token), alt: "" }),
      /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: ue(f.token) }),
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/down_caret.svg", alt: "" })
    ] }),
    /* @__PURE__ */ n.jsx(dt, { align: "start", className: "bg-white", children: Lt.map((m) => /* @__PURE__ */ n.jsxs(
      ut,
      {
        disabled: a,
        onClick: () => o(m, s),
        className: "flex items-center gap-[6px]",
        children: [
          /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: ze(m), alt: "" }),
          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: ue(m) })
        ]
      },
      m
    )) })
  ] });
}
function zt({
  isOpen: o,
  onClose: s
}) {
  const f = /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ n.jsx(Te, { className: "", variant: "outline", onClick: () => s(!0), children: "Quit" }),
    /* @__PURE__ */ n.jsx(Te, { className: "", onClick: () => s(!1), children: "Stay" })
  ] });
  return /* @__PURE__ */ n.jsx(
    ht,
    {
      isOpen: o,
      onClose: () => s(!1),
      title: "Are you sure you want to quit?",
      footer: f,
      children: /* @__PURE__ */ n.jsx("p", { className: "text-sm leading-none my-3", children: "Your progress may not be saved." })
    }
  );
}
function Bt({ shouldBlock: o }) {
  const [s, f] = I.useState(!1);
  yt(
    I.useCallback((g) => {
      if (o)
        return g.preventDefault(), g.returnValue = "You have unsaved changes, are you sure you want to leave?";
    }, [o])
  );
  const a = wt(
    I.useCallback(() => o ? (f(!0), !0) : !1, [o])
  );
  return {
    showExitPrompt: s,
    handleExitPrompt: (g) => {
      var l;
      f(!1), g && ((l = a == null ? void 0 : a.proceed) == null || l.call(a));
    }
  };
}
class Ht {
  constructor(s = 800) {
    Ce(this, "cache", /* @__PURE__ */ new Map());
    Ce(this, "expiryTime");
    this.expiryTime = s;
  }
  async getOrCreate(s, f) {
    const a = Date.now(), m = this.cache.get(s);
    if (m && a - m.timestamp < this.expiryTime)
      return m.promise;
    const g = f();
    this.cache.set(s, {
      promise: g,
      timestamp: a
    });
    try {
      return await g;
    } finally {
      setTimeout(() => {
        var l;
        ((l = this.cache.get(s)) == null ? void 0 : l.timestamp) === a && this.cache.delete(s);
      }, this.expiryTime);
    }
  }
  clear() {
    this.cache.clear();
  }
}
const Be = /* @__PURE__ */ new Map(), Ut = ({
  tokenType: o,
  transferParams: s,
  fromAddress: f
}) => JSON.stringify({
  tokenType: o,
  to: s.to.toLowerCase(),
  amount: s.amount.toString(),
  from: f.toLowerCase()
}), qt = new Ht(5e3);
async function Gt({
  tokenType: o,
  transferParams: s,
  fromAddress: f,
  defaultGasPrice: a,
  defaultBlock: m
}) {
  const g = Ut({ tokenType: o, transferParams: s, fromAddress: f });
  return qt.getOrCreate(g, async () => {
    const l = Be.get(g);
    if (l)
      return l.result;
    try {
      const p = ft(o);
      if (!p) return null;
      const d = It({
        chain: p,
        transport: At()
      });
      let C;
      if (o === "TVWT" && (C = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", !C))
        throw new Error("Invalid token contract address");
      let A;
      if (o === "TVWT") {
        const L = Ot({
          abi: pt,
          functionName: "transfer",
          args: [s.to, s.amount]
        });
        A = {
          to: C,
          data: L,
          value: BigInt(0)
        };
      } else
        A = {
          to: s.to,
          value: s.amount
        };
      De("start to call getEstimatedGasFeeByToken", { tokenType: o, transferParams: s, fromAddress: f });
      const q = await d.estimateGas({
        ...A,
        account: f
      }), Y = a || await d.getGasPrice(), F = (m || await d.getBlock()).baseFeePerGas || BigInt(0), G = Y > F ? Y - F : BigInt(1e9), N = F + G * BigInt(2), ne = q * N, W = Re(
        (Number(ne) / Math.pow(10, 18)).toString()
      ), K = {
        estimatedGas: q,
        maxFeePerGas: N,
        maxPriorityFeePerGas: G,
        estimatedTotalFee: ne,
        baseFee: F,
        gasPrice: Y,
        feeInTokens: W
      };
      return Be.set(g, {
        result: K,
        params: {
          tokenType: o,
          transferParams: s,
          fromAddress: f
        }
      }), console.log("Cache updated:", g), K;
    } catch (p) {
      throw console.error("Gas estimation error:", p), p;
    }
  });
}
const Kt = (o) => {
  if (!o.length)
    return { isValid: !1, error: "CSV file is empty" };
  const s = o[0];
  if (!Array.isArray(s) || s.length < 4)
    return {
      isValid: !1,
      error: "Invalid CSV format: missing required columns"
    };
  const f = ["To", "Note", "Token", "Amount"], a = s.map((g) => g.trim());
  for (let g = 0; g < f.length; g++)
    if (a[g] !== f[g])
      return {
        isValid: !1,
        error: `Invalid header format. Expected: ${f.join(", ")}`
      };
  const m = ["TVWT", "ETH", "MATIC"];
  for (let g = 1; g < o.length; g++) {
    const l = o[g];
    if (!(!l[0] || l[0].trim() === "")) {
      if (!(ke(l[0]) || Oe.test(l[0])))
        return {
          isValid: !1,
          error: `Invalid to format at row ${g + 1}`
        };
      if (!l[2] || !m.includes(l[2].toUpperCase()))
        return {
          isValid: !1,
          error: `Invalid token type at row ${g + 1}. Allowed tokens: ${m.join(", ")}`
        };
      if (!l[3] || isNaN(Number(l[3])) || Number(l[3]) <= 0)
        return {
          isValid: !1,
          error: `Invalid amount at row ${g + 1}`
        };
    }
  }
  return { isValid: !0 };
}, Ve = /* @__PURE__ */ new Map(), Jt = 5 * 60 * 1e3;
async function Qt(o) {
  const s = Ve.get(o), f = Date.now();
  if (s && f - s.timestamp < Jt)
    return {
      data: s.data
    };
  const a = await Ae.get("/address/", {
    params: { email: o }
  });
  return Ve.set(o, {
    data: a.data,
    timestamp: f
  }), a;
}
function Yt() {
  Ve.clear();
}
var Ye = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(o, s) {
  (function(f, a) {
    o.exports = a();
  })(Tt, function f() {
    var a = typeof self < "u" ? self : typeof window < "u" ? window : a !== void 0 ? a : {}, m = !a.document && !!a.postMessage, g = a.IS_PAPA_WORKER || !1, l = {}, p = 0, d = { parse: function(t, e) {
      var i = (e = e || {}).dynamicTyping || !1;
      if (S(i) && (e.dynamicTypingFunction = i, i = {}), e.dynamicTyping = i, e.transform = !!S(e.transform) && e.transform, e.worker && d.WORKERS_SUPPORTED) {
        var h = function() {
          if (!d.WORKERS_SUPPORTED) return !1;
          var w = (B = a.URL || a.webkitURL || null, P = f.toString(), d.BLOB_URL || (d.BLOB_URL = B.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", P, ")();"], { type: "text/javascript" })))), j = new a.Worker(w), B, P;
          return j.onmessage = W, j.id = p++, l[j.id] = j;
        }();
        return h.userStep = e.step, h.userChunk = e.chunk, h.userComplete = e.complete, h.userError = e.error, e.step = S(e.step), e.chunk = S(e.chunk), e.complete = S(e.complete), e.error = S(e.error), delete e.worker, void h.postMessage({ input: t, config: e, workerId: h.id });
      }
      var u = null;
      return d.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(w) {
        return w.charCodeAt(0) === 65279 ? w.slice(1) : w;
      }(t), u = e.download ? new q(e) : new M(e)) : t.readable === !0 && S(t.read) && S(t.on) ? u = new F(e) : (a.File && t instanceof File || t instanceof Object) && (u = new Y(e)), u.stream(t);
    }, unparse: function(t, e) {
      var i = !1, h = !0, u = ",", w = `\r
`, j = '"', B = j + j, P = !1, T = null, H = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || d.BAD_DELIMITERS.filter(function(y) {
            return e.delimiter.indexOf(y) !== -1;
          }).length || (u = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (i = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (P = e.skipEmptyLines), typeof e.newline == "string" && (w = e.newline), typeof e.quoteChar == "string" && (j = e.quoteChar), typeof e.header == "boolean" && (h = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            T = e.columns;
          }
          e.escapeChar !== void 0 && (B = e.escapeChar + j), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (H = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var _ = new RegExp(N(j), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return ie(null, t, P);
        if (typeof t[0] == "object") return ie(T || Object.keys(t[0]), t, P);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || T), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), ie(t.fields || [], t.data || [], P);
      throw new Error("Unable to serialize unrecognized input");
      function ie(y, $, ae) {
        var z = "";
        typeof y == "string" && (y = JSON.parse(y)), typeof $ == "string" && ($ = JSON.parse($));
        var Z = Array.isArray(y) && 0 < y.length, ee = !Array.isArray($[0]);
        if (Z && h) {
          for (var te = 0; te < y.length; te++) 0 < te && (z += u), z += se(y[te], te);
          0 < $.length && (z += w);
        }
        for (var k = 0; k < $.length; k++) {
          var V = Z ? y.length : $[k].length, r = !1, x = Z ? Object.keys($[k]).length === 0 : $[k].length === 0;
          if (ae && !Z && (r = ae === "greedy" ? $[k].join("").trim() === "" : $[k].length === 1 && $[k][0].length === 0), ae === "greedy" && Z) {
            for (var c = [], v = 0; v < V; v++) {
              var b = ee ? y[v] : v;
              c.push($[k][b]);
            }
            r = c.join("").trim() === "";
          }
          if (!r) {
            for (var E = 0; E < V; E++) {
              0 < E && !x && (z += u);
              var O = Z && ee ? y[E] : E;
              z += se($[k][O], E);
            }
            k < $.length - 1 && (!ae || 0 < V && !x) && (z += w);
          }
        }
        return z;
      }
      function se(y, $) {
        if (y == null) return "";
        if (y.constructor === Date) return JSON.stringify(y).slice(1, 25);
        var ae = !1;
        H && typeof y == "string" && H.test(y) && (y = "'" + y, ae = !0);
        var z = y.toString().replace(_, B);
        return (ae = ae || i === !0 || typeof i == "function" && i(y, $) || Array.isArray(i) && i[$] || function(Z, ee) {
          for (var te = 0; te < ee.length; te++) if (-1 < Z.indexOf(ee[te])) return !0;
          return !1;
        }(z, d.BAD_DELIMITERS) || -1 < z.indexOf(u) || z.charAt(0) === " " || z.charAt(z.length - 1) === " ") ? j + z + j : z;
      }
    } };
    if (d.RECORD_SEP = "", d.UNIT_SEP = "", d.BYTE_ORDER_MARK = "\uFEFF", d.BAD_DELIMITERS = ["\r", `
`, '"', d.BYTE_ORDER_MARK], d.WORKERS_SUPPORTED = !m && !!a.Worker, d.NODE_STREAM_INPUT = 1, d.LocalChunkSize = 10485760, d.RemoteChunkSize = 5242880, d.DefaultDelimiter = ",", d.Parser = ne, d.ParserHandle = G, d.NetworkStreamer = q, d.FileStreamer = Y, d.StringStreamer = M, d.ReadableStreamStreamer = F, a.jQuery) {
      var C = a.jQuery;
      C.fn.parse = function(t) {
        var e = t.config || {}, i = [];
        return this.each(function(w) {
          if (!(C(this).prop("tagName").toUpperCase() === "INPUT" && C(this).attr("type").toLowerCase() === "file" && a.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var j = 0; j < this.files.length; j++) i.push({ file: this.files[j], inputElem: this, instanceConfig: C.extend({}, e) });
        }), h(), this;
        function h() {
          if (i.length !== 0) {
            var w, j, B, P, T = i[0];
            if (S(t.before)) {
              var H = t.before(T.file, T.inputElem);
              if (typeof H == "object") {
                if (H.action === "abort") return w = "AbortError", j = T.file, B = T.inputElem, P = H.reason, void (S(t.error) && t.error({ name: w }, j, B, P));
                if (H.action === "skip") return void u();
                typeof H.config == "object" && (T.instanceConfig = C.extend(T.instanceConfig, H.config));
              } else if (H === "skip") return void u();
            }
            var _ = T.instanceConfig.complete;
            T.instanceConfig.complete = function(ie) {
              S(_) && _(ie, T.file, T.inputElem), u();
            }, d.parse(T.file, T.instanceConfig);
          } else S(t.complete) && t.complete();
        }
        function u() {
          i.splice(0, 1), h();
        }
      };
    }
    function A(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var i = re(e);
        i.chunkSize = parseInt(i.chunkSize), e.step || e.chunk || (i.chunkSize = null), this._handle = new G(i), (this._handle.streamer = this)._config = i;
      }).call(this, t), this.parseChunk = function(e, i) {
        if (this.isFirstChunk && S(this._config.beforeFirstChunk)) {
          var h = this._config.beforeFirstChunk(e);
          h !== void 0 && (e = h);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var u = this._partialLine + e;
        this._partialLine = "";
        var w = this._handle.parse(u, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var j = w.meta.cursor;
          this._finished || (this._partialLine = u.substring(j - this._baseIndex), this._baseIndex = j), w && w.data && (this._rowCount += w.data.length);
          var B = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (g) a.postMessage({ results: w, workerId: d.WORKER_ID, finished: B });
          else if (S(this._config.chunk) && !i) {
            if (this._config.chunk(w, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            w = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(w.data), this._completeResults.errors = this._completeResults.errors.concat(w.errors), this._completeResults.meta = w.meta), this._completed || !B || !S(this._config.complete) || w && w.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), B || w && w.meta.paused || this._nextChunk(), w;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        S(this._config.error) ? this._config.error(e) : g && this._config.error && a.postMessage({ workerId: d.WORKER_ID, error: e, finished: !1 });
      };
    }
    function q(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = d.RemoteChunkSize), A.call(this, t), this._nextChunk = m ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(i) {
        this._input = i, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), m || (e.onload = X(this._chunkLoaded, this), e.onerror = X(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !m), this._config.downloadRequestHeaders) {
            var i = this._config.downloadRequestHeaders;
            for (var h in i) e.setRequestHeader(h, i[h]);
          }
          if (this._config.chunkSize) {
            var u = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + u);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (w) {
            this._chunkError(w.message);
          }
          m && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(i) {
          var h = i.getResponseHeader("Content-Range");
          return h === null ? -1 : parseInt(h.substring(h.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(i) {
        var h = e.statusText || i;
        this._sendError(new Error(h));
      };
    }
    function Y(t) {
      var e, i;
      (t = t || {}).chunkSize || (t.chunkSize = d.LocalChunkSize), A.call(this, t);
      var h = typeof FileReader < "u";
      this.stream = function(u) {
        this._input = u, i = u.slice || u.webkitSlice || u.mozSlice, h ? ((e = new FileReader()).onload = X(this._chunkLoaded, this), e.onerror = X(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var u = this._input;
        if (this._config.chunkSize) {
          var w = Math.min(this._start + this._config.chunkSize, this._input.size);
          u = i.call(u, this._start, w);
        }
        var j = e.readAsText(u, this._config.encoding);
        h || this._chunkLoaded({ target: { result: j } });
      }, this._chunkLoaded = function(u) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(u.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function M(t) {
      var e;
      A.call(this, t = t || {}), this.stream = function(i) {
        return e = i, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var i, h = this._config.chunkSize;
          return h ? (i = e.substring(0, h), e = e.substring(h)) : (i = e, e = ""), this._finished = !e, this.parseChunk(i);
        }
      };
    }
    function F(t) {
      A.call(this, t = t || {});
      var e = [], i = !0, h = !1;
      this.pause = function() {
        A.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        A.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(u) {
        this._input = u, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        h && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : i = !0;
      }, this._streamData = X(function(u) {
        try {
          e.push(typeof u == "string" ? u : u.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (w) {
          this._streamError(w);
        }
      }, this), this._streamError = X(function(u) {
        this._streamCleanUp(), this._sendError(u);
      }, this), this._streamEnd = X(function() {
        this._streamCleanUp(), h = !0, this._streamData("");
      }, this), this._streamCleanUp = X(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function G(t) {
      var e, i, h, u = Math.pow(2, 53), w = -u, j = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, B = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, P = this, T = 0, H = 0, _ = !1, ie = !1, se = [], y = { data: [], errors: [], meta: {} };
      if (S(t.step)) {
        var $ = t.step;
        t.step = function(k) {
          if (y = k, Z()) z();
          else {
            if (z(), y.data.length === 0) return;
            T += k.data.length, t.preview && T > t.preview ? i.abort() : (y.data = y.data[0], $(y, P));
          }
        };
      }
      function ae(k) {
        return t.skipEmptyLines === "greedy" ? k.join("").trim() === "" : k.length === 1 && k[0].length === 0;
      }
      function z() {
        return y && h && (te("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + d.DefaultDelimiter + "'"), h = !1), t.skipEmptyLines && (y.data = y.data.filter(function(k) {
          return !ae(k);
        })), Z() && function() {
          if (!y) return;
          function k(r, x) {
            S(t.transformHeader) && (r = t.transformHeader(r, x)), se.push(r);
          }
          if (Array.isArray(y.data[0])) {
            for (var V = 0; Z() && V < y.data.length; V++) y.data[V].forEach(k);
            y.data.splice(0, 1);
          } else y.data.forEach(k);
        }(), function() {
          if (!y || !t.header && !t.dynamicTyping && !t.transform) return y;
          function k(r, x) {
            var c, v = t.header ? {} : [];
            for (c = 0; c < r.length; c++) {
              var b = c, E = r[c];
              t.header && (b = c >= se.length ? "__parsed_extra" : se[c]), t.transform && (E = t.transform(E, b)), E = ee(b, E), b === "__parsed_extra" ? (v[b] = v[b] || [], v[b].push(E)) : v[b] = E;
            }
            return t.header && (c > se.length ? te("FieldMismatch", "TooManyFields", "Too many fields: expected " + se.length + " fields but parsed " + c, H + x) : c < se.length && te("FieldMismatch", "TooFewFields", "Too few fields: expected " + se.length + " fields but parsed " + c, H + x)), v;
          }
          var V = 1;
          return !y.data.length || Array.isArray(y.data[0]) ? (y.data = y.data.map(k), V = y.data.length) : y.data = k(y.data, 0), t.header && y.meta && (y.meta.fields = se), H += V, y;
        }();
      }
      function Z() {
        return t.header && se.length === 0;
      }
      function ee(k, V) {
        return r = k, t.dynamicTypingFunction && t.dynamicTyping[r] === void 0 && (t.dynamicTyping[r] = t.dynamicTypingFunction(r)), (t.dynamicTyping[r] || t.dynamicTyping) === !0 ? V === "true" || V === "TRUE" || V !== "false" && V !== "FALSE" && (function(x) {
          if (j.test(x)) {
            var c = parseFloat(x);
            if (w < c && c < u) return !0;
          }
          return !1;
        }(V) ? parseFloat(V) : B.test(V) ? new Date(V) : V === "" ? null : V) : V;
        var r;
      }
      function te(k, V, r, x) {
        var c = { type: k, code: V, message: r };
        x !== void 0 && (c.row = x), y.errors.push(c);
      }
      this.parse = function(k, V, r) {
        var x = t.quoteChar || '"';
        if (t.newline || (t.newline = function(b, E) {
          b = b.substring(0, 1048576);
          var O = new RegExp(N(E) + "([^]*?)" + N(E), "gm"), J = (b = b.replace(O, "")).split("\r"), oe = b.split(`
`), he = 1 < oe.length && oe[0].length < J[0].length;
          if (J.length === 1 || he) return `
`;
          for (var le = 0, U = 0; U < J.length; U++) J[U][0] === `
` && le++;
          return le >= J.length / 2 ? `\r
` : "\r";
        }(k, x)), h = !1, t.delimiter) S(t.delimiter) && (t.delimiter = t.delimiter(k), y.meta.delimiter = t.delimiter);
        else {
          var c = function(b, E, O, J, oe) {
            var he, le, U, Q;
            oe = oe || [",", "	", "|", ";", d.RECORD_SEP, d.UNIT_SEP];
            for (var be = 0; be < oe.length; be++) {
              var R = oe[be], we = 0, fe = 0, ve = 0;
              U = void 0;
              for (var pe = new ne({ comments: J, delimiter: R, newline: E, preview: 10 }).parse(b), me = 0; me < pe.data.length; me++) if (O && ae(pe.data[me])) ve++;
              else {
                var ge = pe.data[me].length;
                fe += ge, U !== void 0 ? 0 < ge && (we += Math.abs(ge - U), U = ge) : U = ge;
              }
              0 < pe.data.length && (fe /= pe.data.length - ve), (le === void 0 || we <= le) && (Q === void 0 || Q < fe) && 1.99 < fe && (le = we, he = R, Q = fe);
            }
            return { successful: !!(t.delimiter = he), bestDelimiter: he };
          }(k, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          c.successful ? t.delimiter = c.bestDelimiter : (h = !0, t.delimiter = d.DefaultDelimiter), y.meta.delimiter = t.delimiter;
        }
        var v = re(t);
        return t.preview && t.header && v.preview++, e = k, i = new ne(v), y = i.parse(e, V, r), z(), _ ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } };
      }, this.paused = function() {
        return _;
      }, this.pause = function() {
        _ = !0, i.abort(), e = S(t.chunk) ? "" : e.substring(i.getCharIndex());
      }, this.resume = function() {
        P.streamer._halted ? (_ = !1, P.streamer.parseChunk(e, !0)) : setTimeout(P.resume, 3);
      }, this.aborted = function() {
        return ie;
      }, this.abort = function() {
        ie = !0, i.abort(), y.meta.aborted = !0, S(t.complete) && t.complete(y), e = "";
      };
    }
    function N(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ne(t) {
      var e, i = (t = t || {}).delimiter, h = t.newline, u = t.comments, w = t.step, j = t.preview, B = t.fastMode, P = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (P = t.escapeChar), (typeof i != "string" || -1 < d.BAD_DELIMITERS.indexOf(i)) && (i = ","), u === i) throw new Error("Comment character same as delimiter");
      u === !0 ? u = "#" : (typeof u != "string" || -1 < d.BAD_DELIMITERS.indexOf(u)) && (u = !1), h !== `
` && h !== "\r" && h !== `\r
` && (h = `
`);
      var T = 0, H = !1;
      this.parse = function(_, ie, se) {
        if (typeof _ != "string") throw new Error("Input must be a string");
        var y = _.length, $ = i.length, ae = h.length, z = u.length, Z = S(w), ee = [], te = [], k = [], V = T = 0;
        if (!_) return ce();
        if (t.header && !ie) {
          var r = _.split(h)[0].split(i), x = [], c = {}, v = !1;
          for (var b in r) {
            var E = r[b];
            S(t.transformHeader) && (E = t.transformHeader(E, b));
            var O = E, J = c[E] || 0;
            for (0 < J && (v = !0, O = E + "_" + J), c[E] = J + 1; x.includes(O); ) O = O + "_" + J;
            x.push(O);
          }
          if (v) {
            var oe = _.split(h);
            oe[0] = x.join(i), _ = oe.join(h);
          }
        }
        if (B || B !== !1 && _.indexOf(e) === -1) {
          for (var he = _.split(h), le = 0; le < he.length; le++) {
            if (k = he[le], T += k.length, le !== he.length - 1) T += h.length;
            else if (se) return ce();
            if (!u || k.substring(0, z) !== u) {
              if (Z) {
                if (ee = [], ve(k.split(i)), _e(), H) return ce();
              } else ve(k.split(i));
              if (j && j <= le) return ee = ee.slice(0, j), ce(!0);
            }
          }
          return ce();
        }
        for (var U = _.indexOf(i, T), Q = _.indexOf(h, T), be = new RegExp(N(P) + N(e), "g"), R = _.indexOf(e, T); ; ) if (_[T] !== e) if (u && k.length === 0 && _.substring(T, T + z) === u) {
          if (Q === -1) return ce();
          T = Q + ae, Q = _.indexOf(h, T), U = _.indexOf(i, T);
        } else if (U !== -1 && (U < Q || Q === -1)) k.push(_.substring(T, U)), T = U + $, U = _.indexOf(i, T);
        else {
          if (Q === -1) break;
          if (k.push(_.substring(T, Q)), ge(Q + ae), Z && (_e(), H)) return ce();
          if (j && ee.length >= j) return ce(!0);
        }
        else for (R = T, T++; ; ) {
          if ((R = _.indexOf(e, R + 1)) === -1) return se || te.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: ee.length, index: T }), me();
          if (R === y - 1) return me(_.substring(T, R).replace(be, e));
          if (e !== P || _[R + 1] !== P) {
            if (e === P || R === 0 || _[R - 1] !== P) {
              U !== -1 && U < R + 1 && (U = _.indexOf(i, R + 1)), Q !== -1 && Q < R + 1 && (Q = _.indexOf(h, R + 1));
              var we = pe(Q === -1 ? U : Math.min(U, Q));
              if (_.substr(R + 1 + we, $) === i) {
                k.push(_.substring(T, R).replace(be, e)), _[T = R + 1 + we + $] !== e && (R = _.indexOf(e, T)), U = _.indexOf(i, T), Q = _.indexOf(h, T);
                break;
              }
              var fe = pe(Q);
              if (_.substring(R + 1 + fe, R + 1 + fe + ae) === h) {
                if (k.push(_.substring(T, R).replace(be, e)), ge(R + 1 + fe + ae), U = _.indexOf(i, T), R = _.indexOf(e, T), Z && (_e(), H)) return ce();
                if (j && ee.length >= j) return ce(!0);
                break;
              }
              te.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: ee.length, index: T }), R++;
            }
          } else R++;
        }
        return me();
        function ve(de) {
          ee.push(de), V = T;
        }
        function pe(de) {
          var $e = 0;
          if (de !== -1) {
            var Ee = _.substring(R + 1, de);
            Ee && Ee.trim() === "" && ($e = Ee.length);
          }
          return $e;
        }
        function me(de) {
          return se || (de === void 0 && (de = _.substring(T)), k.push(de), T = y, ve(k), Z && _e()), ce();
        }
        function ge(de) {
          T = de, ve(k), k = [], Q = _.indexOf(h, T);
        }
        function ce(de) {
          return { data: ee, errors: te, meta: { delimiter: i, linebreak: h, aborted: H, truncated: !!de, cursor: V + (ie || 0) } };
        }
        function _e() {
          w(ce()), ee = [], te = [];
        }
      }, this.abort = function() {
        H = !0;
      }, this.getCharIndex = function() {
        return T;
      };
    }
    function W(t) {
      var e = t.data, i = l[e.workerId], h = !1;
      if (e.error) i.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var u = { abort: function() {
          h = !0, K(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: L, resume: L };
        if (S(i.userStep)) {
          for (var w = 0; w < e.results.data.length && (i.userStep({ data: e.results.data[w], errors: e.results.errors, meta: e.results.meta }, u), !h); w++) ;
          delete e.results;
        } else S(i.userChunk) && (i.userChunk(e.results, u, e.file), delete e.results);
      }
      e.finished && !h && K(e.workerId, e.results);
    }
    function K(t, e) {
      var i = l[t];
      S(i.userComplete) && i.userComplete(e), i.terminate(), delete l[t];
    }
    function L() {
      throw new Error("Not implemented.");
    }
    function re(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var i in t) e[i] = re(t[i]);
      return e;
    }
    function X(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function S(t) {
      return typeof t == "function";
    }
    return g && (a.onmessage = function(t) {
      var e = t.data;
      if (d.WORKER_ID === void 0 && e && (d.WORKER_ID = e.workerId), typeof e.input == "string") a.postMessage({ workerId: d.WORKER_ID, results: d.parse(e.input, e.config), finished: !0 });
      else if (a.File && e.input instanceof File || e.input instanceof Object) {
        var i = d.parse(e.input, e.config);
        i && a.postMessage({ workerId: d.WORKER_ID, results: i, finished: !0 });
      }
    }), (q.prototype = Object.create(A.prototype)).constructor = q, (Y.prototype = Object.create(A.prototype)).constructor = Y, (M.prototype = Object.create(M.prototype)).constructor = M, (F.prototype = Object.create(A.prototype)).constructor = F, d;
  });
})(Ye);
var Xt = Ye.exports;
const Zt = /* @__PURE__ */ kt(Xt);
function en({
  onSent: o
}) {
  const { address: s } = mt.all(), { t: f } = Je(), { data: a, isFetched: m } = Ne("ETH"), { data: g, isFetched: l } = Ne("MATIC"), { data: p, isFetched: d } = Ne("TVWT"), { data: C } = Ue(), { data: A } = gt(), [q, Y] = I.useState(null), [M, F] = I.useState([]), [G, N] = I.useState([]), [ne, W] = I.useState(!1), [K, L] = I.useState(!1), [re, X] = I.useState({
    ETH: "0",
    MATIC: "0",
    TVWT: "0",
    usdValue: "0"
  }), [S, t] = I.useState(null), e = We(M, 800), i = We(G, 800), { signTransaction: h } = St();
  I.useEffect(() => {
    m && l && d && H();
  }, [m, l, d]), I.useEffect(() => {
    Yt(), ie();
  }, []), I.useEffect(() => {
    const r = {
      ETH: 0,
      MATIC: 0,
      TVWT: 0
    };
    M.forEach((c) => {
      c.amount && !isNaN(parseFloat(c.amount)) && (r[c.token] += parseFloat(c.amount));
    });
    const x = C ? r.ETH * parseFloat(C.ETH) + r.MATIC * parseFloat(C.MATIC) + r.TVWT * parseFloat(C.TVWT) : 0;
    X({
      ETH: r.ETH.toString(),
      MATIC: r.MATIC.toString(),
      TVWT: r.TVWT.toString(),
      usdValue: xe(x.toString(), 2)
    });
  }, [M, C]);
  const u = I.useMemo(() => ({
    ETH: (a == null ? void 0 : a.balance) || "0",
    MATIC: (g == null ? void 0 : g.balance) || "0",
    TVWT: (p == null ? void 0 : p.balance) || "0"
  }), [a, g, p]), w = I.useMemo(
    () => Object.entries(re).filter(([r]) => r !== "usdValue").some(([r, x]) => {
      const c = r, v = parseFloat(u[c] || "0"), b = parseFloat(x), E = S && S[c] ? parseFloat(S[c]) : 0;
      return b + E > v;
    }),
    [re, u, S]
  ), j = ({
    transfer: r,
    validation: x
  }) => Oe.test(r.to) && (x == null ? void 0 : x.error) === f("/dashboard.[token].sendModal.unregisteredEmailNotice"), B = I.useMemo(() => M.some((r, x) => {
    if (!r.to || !r.amount || !r.token)
      return !0;
    const c = G[x];
    if (c != null && c.error && !j({ transfer: r, validation: c }) || c != null && c.isValidating)
      return !0;
    const v = parseFloat(r.amount);
    return !!(isNaN(v) || v <= 0 || w);
  }), [M, G, w]), P = I.useMemo(() => M.some((r) => r.to || r.note || r.amount), [M]);
  I.useEffect(() => {
    e.forEach((r, x) => {
      r.to && _(r.to, x);
    });
  }, [e]), I.useEffect(() => {
    T();
  }, [i, e]);
  const T = I.useCallback(async () => {
    if (!B) {
      L(!0);
      try {
        const r = ["ETH", "MATIC", "TVWT"], x = {}, c = (v) => e.filter((b, E) => {
          var J;
          return b.token === v && b.amount && (ke(b.to) || ((J = i[E]) == null ? void 0 : J.fullAddress));
        }).map((b, E) => {
          var O;
          return {
            to: ke(b.to) ? b.to : (O = i[E]) == null ? void 0 : O.fullAddress,
            amount: je(b.amount)
          };
        });
        for (const v of r) {
          const b = c(v);
          if (b.length > 0) {
            const O = (await Promise.all(
              b.map(
                (J) => Gt({
                  tokenType: v,
                  transferParams: J,
                  fromAddress: s
                })
              )
            )).reduce(
              (J, oe) => oe ? J + parseFloat(oe.feeInTokens) : J,
              0
            );
            O > 0 && (x[v] = Re(O.toString()));
          }
        }
        if (C) {
          const v = x.ETH ? parseFloat(x.ETH) * parseFloat(C.ETH) : 0, b = x.MATIC ? parseFloat(x.MATIC) * parseFloat(C.MATIC) : 0, E = x.TVWT ? parseFloat(x.TVWT) * parseFloat(C.TVWT) : 0, O = v + b + E;
          x.usdValue = xe(O.toString(), 2);
        }
        t(x);
      } catch (r) {
        console.error("Failed to calculate gas fee:", r), t(null);
      } finally {
        L(!1);
      }
    }
  }, [i, e, B, s, C]), H = () => {
    F([{
      to: "",
      note: "",
      amount: "",
      token: "TVWT",
      balance: u.TVWT || "0"
    }]), N([{
      isValidating: !1,
      isValidEmail: !1,
      fullAddress: "",
      error: ""
    }]);
  }, _ = async (r, x) => {
    if (!r) {
      N((c) => {
        const v = [...c];
        return v[x] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "Address or email is required"
        }, v;
      });
      return;
    }
    N((c) => {
      const v = [...c];
      return v[x] = {
        ...c[x],
        isValidating: !0
      }, v;
    });
    try {
      if (ke(r)) {
        N((v) => {
          const b = [...v];
          return b[x] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }, b;
        });
        return;
      }
      if (!Oe.test(r)) {
        N((v) => {
          const b = [...v];
          return b[x] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: f("/dashboard.[token].sendModal.invalidEmailFormat")
          }, b;
        });
        return;
      }
      const c = await Qt(r);
      N((v) => {
        const b = [...v];
        return b[x] = {
          isValidating: !1,
          isValidEmail: !0,
          fullAddress: c.data.success ? c.data.address : "",
          error: c.data.success ? "" : f("/dashboard.[token].sendModal.unregisteredEmailNotice")
        }, b;
      });
    } catch {
      N((v) => {
        const b = [...v];
        return b[x] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "error"
        }, b;
      });
    }
  }, ie = async () => {
    try {
      const { data: r } = await Ae.post("/transaction/outbound-amount", {
        tokens: ["ETH", "MATIC", "TVWT"]
      });
      Y(r);
    } catch (r) {
      console.error("Failed to fetch token transferred:", r);
    }
  }, se = async (r, x) => {
    const c = r.target.value.trim(), v = [...M];
    v[x].to = c, F(v);
  }, y = (r) => {
    _(M[r].to, r);
  }, $ = (r, x) => {
    const c = [...M];
    c[x].note = r.target.value, F(c);
  }, ae = (r, x) => {
    const c = r.target.value.trim(), v = [...M];
    v[x].amount = c, F(v);
  }, z = async (r, x) => {
    L(!1);
    try {
      const c = u[r] || "0";
      F((v) => {
        const b = [...v];
        return b[x] = {
          ...v[x],
          token: r,
          amount: "",
          balance: c
        }, b;
      });
    } catch (c) {
      console.error("Failed to fetch balance:", c);
    }
  }, Z = async (r, x) => {
    const c = G[x], v = r.amount;
    let b, E;
    if (ke(r.to))
      b = r.to;
    else if (j({ transfer: r, validation: c })) {
      E = r.to, await Ae.post("/invite/invite-register", {
        toEmail: E,
        from: s,
        amount: je(v).toString(),
        token: r.token,
        note: r.note
      });
      return;
    } else
      b = c == null ? void 0 : c.fullAddress;
    return await h({
      to: b,
      amount: v,
      data: "",
      token: r.token,
      transactionType: bt.TRANSFER,
      note: r.note,
      isNotifySubmit: !1,
      isNotifyOtp: !1,
      isNotifyError: !1
    });
  };
  return {
    transfers: M,
    toValidations: G,
    sending: ne,
    isDisabled: B,
    hasContent: P,
    isEstimatingFee: K,
    tokenBalances: u,
    tokenPrices: C,
    hasInsufficientBalance: w,
    handleToChange: se,
    handleToBlur: y,
    handleNoteChange: $,
    handleAmountChange: ae,
    handleTokenTypeChange: z,
    handleSend: async () => {
      W(!0);
      try {
        const r = M.map(
          (c, v) => Z(c, v).then((b) => j({ transfer: c, validation: G[v] }) ? {
            to: c.to,
            type: "invitation",
            status: "sent",
            statusMessage: "Invitation email sent. The recipient will receive an invitation email to sign up their account.",
            amount: c.amount,
            token: c.token
          } : {
            to: c.to,
            type: "transaction",
            status: b != null && b.hash ? "sent" : "failed",
            statusMessage: b != null && b.needOtp ? "Daily transaction limit exceeded. Please check your email and verify by the OTP." : "Sent and received",
            amount: c.amount,
            token: c.token
          }).catch((b) => {
            const E = j({ transfer: c, validation: G[v] }) ? "invitation" : "transaction", O = xt(b);
            return De("handleSend", { errorInfo: O }), {
              to: c.to,
              type: E,
              status: "failed",
              statusMessage: E === "transaction" ? O.message : "Not sent. Please try transferring again.",
              amount: c.amount,
              token: c.token
            };
          })
        ), x = await Promise.all(r);
        o(x, S);
      } catch (r) {
        console.error("Failed to send transfers:", r);
      } finally {
        W(!1);
      }
    },
    handleAddTransfer: () => {
      const r = {
        to: "",
        note: "",
        amount: "",
        token: "TVWT",
        balance: u.TVWT || "0"
      };
      F([...M, r]), N([...G, {
        isValidating: !1,
        isValidEmail: !1,
        fullAddress: "",
        error: ""
      }]);
    },
    handleDeleteTransfer: (r) => {
      F(M.filter((x, c) => c !== r)), N(G.filter((x, c) => c !== r));
    },
    handleFileChange: (r) => {
      var c;
      const x = (c = r.target.files) == null ? void 0 : c[0];
      x && Zt.parse(x, {
        header: !1,
        complete: (v) => {
          const b = Kt(v.data);
          if (!b.isValid) {
            Se.error(b.error), F([]), r.target.value = "";
            return;
          }
          const E = v.data.slice(1).filter((O) => O[0] && O[0].trim() !== "").map((O) => ({
            to: O[0],
            note: O[1],
            token: O[2],
            amount: O[3],
            balance: u[O[2]] || "0"
          }));
          F(E), N(E.map(() => ({
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }))), Se.success("CSV file uploaded successfully");
        },
        error: (v) => {
          Se.error(`Error parsing CSV: ${v.message}`);
        }
      });
    },
    totalAmount: re,
    todayTokenTransferred: q,
    defaultLimits: A,
    gasFees: S
  };
}
function tn({
  transfer: o,
  sending: s,
  handleAmountChange: f,
  index: a
}) {
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsx(
    He,
    {
      disabled: s,
      value: o.amount,
      type: "number",
      inputMode: "decimal",
      onChange: (m) => f(m, a),
      className: D(
        "pl-[110px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        o.token === "ETH" && "pl-[144px]",
        o.token === "MATIC" && "pl-[100px]",
        "desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]"
      ),
      placeholder: "Amount"
    }
  ) });
}
function nn({
  todayTokenTransferred: o,
  defaultLimits: s,
  totalAmount: f
}) {
  const [a, m] = I.useState(!1), l = ["ETH", "MATIC", "TVWT"].filter((p) => {
    const d = BigInt(o[p]), C = BigInt(je(f[p])), A = BigInt(je(s[p]));
    return d + C > A;
  });
  return l.length === 0 ? null : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        l.map((p) => /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black font-normal leading-snug", children: [
          ue(p),
          " daily transaction limit exceeded. Current ",
          ue(p),
          " limit: ",
          Re(s[p] || "0"),
          " ",
          ue(p)
        ] }, p)),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-xs text-black font-bold leading-none mt-[12px] cursor-pointer w-fit",
            onClick: () => m(!0),
            children: [
              /* @__PURE__ */ n.jsx("span", { children: "Change limit" }),
              /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/arrow_right.svg", className: "w-[12px]" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsx(
      vt,
      {
        isOpen: a,
        onClose: () => m(!1),
        defaultLimits: s
      }
    )
  ] });
}
function sn({
  tokenBalances: o,
  tokenPrices: s,
  totalAmount: f,
  hasInsufficientBalance: a,
  gasFees: m
}) {
  if (!a) return null;
  const g = (l, p) => s != null && s[p] ? xe((parseFloat(l) * parseFloat(s[p])).toString(), 2) : "0";
  return /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
    /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-black font-bold leading-none mb-[8px]", children: "Insufficient balance:" }),
      Object.keys(o).map((l) => {
        const p = l, d = parseFloat(o[p] || "0"), C = parseFloat(f[p] || "0"), A = m && m[p] ? parseFloat(m[p]) : 0, q = C + A;
        return q > d && /* @__PURE__ */ n.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            ue(p),
            " balance: ",
            xe(d.toString(), 6),
            " ",
            ue(p),
            " ~",
            g(d.toString(), p),
            " USDT"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            "Required: ",
            xe(q.toString(), 6),
            " ",
            ue(p),
            " (Transfer: ",
            xe(C.toString(), 6),
            " + Gas: ",
            xe(A.toString(), 6),
            ")"
          ] })
        ] }, l);
      })
    ] })
  ] }) });
}
function an({
  onSent: o
}) {
  const {
    transfers: s,
    toValidations: f,
    sending: a,
    isDisabled: m,
    hasContent: g,
    handleToChange: l,
    handleToBlur: p,
    handleNoteChange: d,
    handleAmountChange: C,
    handleTokenTypeChange: A,
    handleSend: q,
    handleAddTransfer: Y,
    handleDeleteTransfer: M,
    totalAmount: F,
    tokenBalances: G,
    tokenPrices: N,
    todayTokenTransferred: ne,
    defaultLimits: W,
    gasFees: K,
    isEstimatingFee: L,
    hasInsufficientBalance: re,
    handleFileChange: X
  } = en({
    onSent: o
  }), { showExitPrompt: S, handleExitPrompt: t } = Bt({
    shouldBlock: g
  }), e = qe(), i = () => {
    e(-1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: D(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Multisender" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: "You can add multiple recipients in custom settings" })
    ] }),
    ne && /* @__PURE__ */ n.jsx(
      nn,
      {
        todayTokenTransferred: ne,
        defaultLimits: W,
        totalAmount: F
      }
    ),
    N && /* @__PURE__ */ n.jsx(
      sn,
      {
        tokenBalances: G,
        tokenPrices: N,
        totalAmount: F,
        hasInsufficientBalance: re,
        gasFees: K
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: D(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug",
        "desktop:gap-[28px] laptop:gap-[23px]"
      ), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "desktop:w-[382px] laptop:w-[318px]", children: [
          "To",
          s.length > 1 && `(${s.length})`
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] hidden laptop:block", children: "Notes" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: s.map((h, u) => /* @__PURE__ */ n.jsxs("div", { className: "border-b border-[#ebebeb]", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: D(
              "flex items-center flex-wrap py-[25px]",
              "desktop:gap-[28px] laptop:gap-[23px] tablet:gap-[7px] gap-0"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { children: /* @__PURE__ */ n.jsx(
                Wt,
                {
                  index: u,
                  transfer: h,
                  validation: f[u] || {
                    isValidating: !1,
                    isValidEmail: !1,
                    fullAddress: "",
                    error: ""
                  },
                  handleToChange: l,
                  handleToBlur: p,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("section", { className: D(
                "block tablet:hidden laptop:block",
                "pl-[22px] tablet:pl-0",
                "py-[12px] tablet:py-0"
              ), children: /* @__PURE__ */ n.jsx(
                Le,
                {
                  index: u,
                  transfer: h,
                  handleNoteChange: d,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsxs("section", { className: D(
                "relative",
                "ml-[22px] tablet:ml-0"
              ), children: [
                /* @__PURE__ */ n.jsx(
                  tn,
                  {
                    index: u,
                    transfer: h,
                    handleAmountChange: C,
                    sending: a
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center", children: [
                  /* @__PURE__ */ n.jsx(
                    Pt,
                    {
                      index: u,
                      transfer: h,
                      handleTokenTypeChange: A,
                      sending: a
                    }
                  ),
                  /* @__PURE__ */ n.jsx(Qe, { type: "vertical", className: "h-[16px]" })
                ] }),
                /* @__PURE__ */ n.jsx("div", { className: D(
                  "absolute top-1/2 -translate-y-1/2",
                  "laptop:-right-[33px] -right-[102px]",
                  "block tablet:hidden laptop:block",
                  s.length === 1 && "hidden laptop:hidden"
                ), children: /* @__PURE__ */ n.jsx(
                  Pe,
                  {
                    index: u,
                    handleDeleteTransfer: M,
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
            className: D(
              "items-center justify-between gap-[22px]",
              "hidden tablet:flex laptop:hidden",
              "pb-[25px]"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { className: "pl-[22px] flex-1", children: /* @__PURE__ */ n.jsx(
                Le,
                {
                  index: u,
                  transfer: h,
                  handleNoteChange: d,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("div", { className: D(
                s.length === 1 && "hidden"
              ), children: /* @__PURE__ */ n.jsx(
                Pe,
                {
                  index: u,
                  handleDeleteTransfer: M,
                  sending: a
                }
              ) })
            ]
          }
        )
      ] }, u)) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-end gap-[12px] mt-[24px]", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx(
          Te,
          {
            variant: "outline",
            className: "h-[24px] text-xs",
            disabled: a,
            onClick: () => {
              const h = document.querySelector('input[type="file"]');
              h && h.click();
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
            onChange: X
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        Te,
        {
          variant: "outline",
          className: "h-[24px] text-xs px-[26px]",
          onClick: Y,
          disabled: a,
          children: /* @__PURE__ */ n.jsx(Ct, { className: "w-[12px] h-[12px]", strokeWidth: 3 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[120px]", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: [
        /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }),
        /* @__PURE__ */ n.jsx(Mt, { title: "Estimated fees may vary and will be recalculated during backend checks.", overlayStyle: { maxWidth: "none" }, children: /* @__PURE__ */ n.jsx(Nt, { className: "w-[16px] h-[16px]" }) })
      ] }),
      L ? /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-end mt-0.5", children: /* @__PURE__ */ n.jsx(Ge, { className: "animate-spin", size: 14 }) }) : K ? /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        (() => {
          const h = Object.entries(K).reduce((u, [w, j]) => (w === "usdValue" || (w === "MATIC" || w === "TVWT" ? u.POL = (parseFloat(u.POL || "0") + parseFloat(j)).toString() : u[w] = j), u), {});
          return Object.entries(h).filter(([u, w]) => w !== "0").map(([u, w], j, B) => /* @__PURE__ */ n.jsxs("span", { children: [
            w,
            " ",
            u,
            j < B.length - 1 && " & "
          ] }, u));
        })(),
        Object.values(K).some((h) => h !== "0") && ` (~$${K.usdValue} USD)`
      ] }) : /* @__PURE__ */ n.jsx("p", { className: "text-black text-right", children: "-" }),
      /* @__PURE__ */ n.jsx("div", { className: "mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Total amount:" }) }),
      /* @__PURE__ */ n.jsxs("p", { className: "text-black text-xl font-medium leading-none text-right mt-0.5", children: [
        Object.entries(F).filter(([h]) => h !== "usdValue" && F[h] !== "0").map(([h, u], w, j) => /* @__PURE__ */ n.jsxs("span", { children: [
          u,
          " ",
          ue(h),
          w < j.length - 1 && " & "
        ] }, h)),
        Object.values(F).some((h) => h !== "0") && ` (~$${F.usdValue} USD)`
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "mt-[104px]", children: [
        /* @__PURE__ */ n.jsx(
          $t,
          {
            onSuccess: q,
            loading: a,
            disabled: m || L,
            className: "mx-auto"
          }
        ),
        !a && /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-center mt-[26px]", children: /* @__PURE__ */ n.jsx(
          "p",
          {
            className: "w-auto cursor-pointer text-black text-base font-bold leading-tight",
            onClick: i,
            children: "Cancel"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      zt,
      {
        isOpen: S,
        onClose: t
      }
    )
  ] });
}
function rn({
  transferResults: o,
  onTransferAgain: s,
  gasFees: f
}) {
  const a = qe(), { data: m } = Ue(), g = I.useMemo(() => {
    const l = {
      ETH: 0,
      MATIC: 0,
      TVWT: 0
    };
    o.forEach((d) => {
      d.amount && !isNaN(parseFloat(d.amount)) && d.status === "sent" && (l[d.token] += parseFloat(d.amount));
    });
    const p = m ? l.ETH * parseFloat(m.ETH || "0") + l.MATIC * parseFloat(m.MATIC || "0") + l.TVWT * parseFloat(m.TVWT || "0") : 0;
    return {
      ETH: l.ETH.toString(),
      MATIC: l.MATIC.toString(),
      TVWT: l.TVWT.toString(),
      usdValue: xe(p.toString(), 2)
    };
  }, [o, m]);
  return /* @__PURE__ */ n.jsxs("div", { className: D(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Token sent" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: 'You can find the transactions under the "History" tab in the Dashboard page.' })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: D(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug"
      ), children: [
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[397px] laptop:w-[397px] tablet:w-[319px]", children: "To" }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] tablet:w-[252px] hidden tablet:block", children: "Status" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: o.map((l, p) => /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: D(
            "border-b border-[#ebebeb]",
            "flex items-center flex-wrap py-[25px]"
          ),
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: D(
              "flex items-center justify-between px-0 text-xs"
            ), children: [
              /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
                p + 1,
                "."
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: D(
                "flex items-center justify-between",
                "desktop:w-[297px] laptop:w-[297px] tablet:w-[297px] w-[302px]",
                "desktop:mr-[100px] laptop:mr-[100px] tablet:mr-[20px]",
                "py-[8px] tablet:py-0"
              ), children: [
                /* @__PURE__ */ n.jsx("p", { className: D(
                  l.type === "transaction" && l.status === "sent" && "text-green-500",
                  l.type === "invitation" && l.status === "sent" && "text-blue-500",
                  l.status === "failed" && "text-destructive"
                ), children: l.to }),
                l.type === "transaction" && l.status === "sent" && /* @__PURE__ */ n.jsx(Ke, { className: "text-green-500", size: 12 }),
                l.type === "invitation" && l.status === "sent" && /* @__PURE__ */ n.jsx(Fe, { className: "text-blue-500", size: 12 }),
                l.status === "failed" && /* @__PURE__ */ n.jsx(Fe, { className: "text-destructive", size: 12 })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("p", { className: D(
              "text-xs text-black font-normal leading-tight break-all",
              "desktop:w-[362px] laptop:w-[348px] tablet:w-[252px] w-full",
              "text-right tablet:text-left",
              "mb-1 tablet:mb-0",
              l.status === "failed" && "text-destructive"
            ), children: l.statusMessage }),
            /* @__PURE__ */ n.jsxs("div", { className: D(
              "flex-1 text-sm text-black font-normal leading-none text-right",
              "pr-0 tablet:pr-[8px]"
            ), children: [
              /* @__PURE__ */ n.jsxs("p", { children: [
                l.amount,
                " ",
                ue(l.token)
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
        f && Object.entries(f).filter(([l]) => l !== "usdValue" && f[l] !== "0").map(([l, p], d, C) => /* @__PURE__ */ n.jsxs("span", { children: [
          p,
          " ",
          l === "TVWT" ? "POL" : ue(l),
          d < C.length - 1 && " & "
        ] }, l)),
        f && Object.values(f).some((l) => l !== "0") && ` (~$${f.usdValue} USD)`
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Total amount:" }) }),
      /* @__PURE__ */ n.jsxs("p", { className: "text-black text-xl font-medium leading-none text-right mt-0.5", children: [
        (() => {
          const l = Object.entries(g).reduce((p, [d, C]) => (d === "usdValue" || (d === "MATIC" || d === "TVWT" ? p.POL = (parseFloat(p.POL || "0") + parseFloat(C)).toString() : p[d] = C), p), {});
          return Object.entries(l).filter(([p, d]) => d !== "0").map(([p, d], C, A) => /* @__PURE__ */ n.jsxs("span", { children: [
            d,
            " ",
            p,
            C < A.length - 1 && " & "
          ] }, p));
        })(),
        Object.values(g).some((l) => l !== "0") && ` (~$${g.usdValue} USD)`
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "mt-[104px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex justify-center flex-wrap gap-4 mt-6 w-full", children: [
        /* @__PURE__ */ n.jsx(Te, { className: "w-[343px] tablet:w-[242px]", variant: "outline", onClick: s, children: "Transfer again" }),
        /* @__PURE__ */ n.jsx(Te, { className: "w-[343px] tablet:w-[242px]", onClick: () => {
          a(-1);
        }, children: "OK" })
      ] }) })
    ] })
  ] });
}
function gn() {
  const [o, s] = I.useState(!1), [f, a] = I.useState([]), [m, g] = I.useState(null), l = (p, d) => {
    a(p), g(d), s(!0);
  };
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? /* @__PURE__ */ n.jsx(
    rn,
    {
      transferResults: f,
      onTransferAgain: () => {
        s(!1);
      },
      gasFees: m
    }
  ) : /* @__PURE__ */ n.jsx(
    an,
    {
      onSent: l
    }
  ) });
}
export {
  gn as default
};
