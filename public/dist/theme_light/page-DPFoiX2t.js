var et = Object.defineProperty;
var tt = (r, s, d) => s in r ? et(r, s, { enumerable: !0, configurable: !0, writable: !0, value: d }) : r[s] = d;
var Ce = (r, s, d) => tt(r, typeof s != "symbol" ? s + "" : s, d);
import { j as n } from "./vendor-radix-CPmBDWYo.js";
import { J as nt, H as st, M as at, q as ve, m as rt, n as it, t as ot, c as D, g as De, I as He, aG as lt, T as ct, D as dt, b as ut, $ as he, d as ht, e as ft, a9 as pt, B as Te, aH as mt, aI as gt, i as Re, f as Ae, j as Oe, a as xt, aJ as Ne, af as Ue, ap as bt, aK as Le, Z as ye, h as vt, ac as yt, aq as wt } from "./main-D2V_1zST.js";
import { r as N, p as Ve, o as Tt, q as kt, c as _t, d as jt, k as qe } from "./vendor-react-BA5A8Axg.js";
import { u as Et, i as Ge, L as Ct, f as Ke, g as Me, T as Nt, P as St, I as It } from "./vendor-ui-utils-BWSrTfCS.js";
import { u as Je, B as Se } from "./vendor-utils-nZmF9_dO.js";
import { u as At } from "./useTransaction-omfPVEY-.js";
import { c as Ot, h as Vt, e as Mt, k as ke, p as je } from "./vendor-web3-CqtRdeC5.js";
import { d as Ft } from "./index-BGtujyiy.js";
const Dt = (r) => {
  const {
    componentCls: s,
    sizePaddingEdgeHorizontal: d,
    colorSplit: a,
    lineWidth: x,
    textPaddingInline: o,
    orientationMargin: f,
    verticalMarginInline: p
  } = r;
  return {
    [s]: Object.assign(Object.assign({}, at(r)), {
      borderBlockStart: `${ve(x)} solid ${a}`,
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
        borderInlineStart: `${ve(x)} solid ${a}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${ve(r.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${s}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${ve(r.dividerHorizontalWithTextGutterMargin)} 0`,
        color: r.colorTextHeading,
        fontWeight: 500,
        fontSize: r.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${a}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${ve(x)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${s}-with-text-left`]: {
        "&::before": {
          width: `calc(${f} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${f} * 100%)`
        }
      },
      [`&-horizontal${s}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${f} * 100%)`
        },
        "&::after": {
          width: `calc(${f} * 100%)`
        }
      },
      [`${s}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: o
      },
      "&-dashed": {
        background: "none",
        borderColor: a,
        borderStyle: "dashed",
        borderWidth: `${ve(x)} 0 0`
      },
      [`&-horizontal${s}-with-text${s}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${s}-dashed`]: {
        borderInlineStartWidth: x,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-dotted": {
        background: "none",
        borderColor: a,
        borderStyle: "dotted",
        borderWidth: `${ve(x)} 0 0`
      },
      [`&-horizontal${s}-with-text${s}-dotted`]: {
        "&::before, &::after": {
          borderStyle: "dotted none none"
        }
      },
      [`&-vertical${s}-dotted`]: {
        borderInlineStartWidth: x,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${s}-with-text`]: {
        color: r.colorText,
        fontWeight: "normal",
        fontSize: r.fontSize
      },
      [`&-horizontal${s}-with-text-left${s}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${s}-inner-text`]: {
          paddingInlineStart: d
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
          paddingInlineEnd: d
        }
      }
    })
  };
}, Rt = (r) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: r.marginXS
}), $t = nt("Divider", (r) => {
  const s = st(r, {
    dividerHorizontalWithTextGutterMargin: r.margin,
    dividerHorizontalGutterMargin: r.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [Dt(s)];
}, Rt, {
  unitless: {
    orientationMargin: !0
  }
});
var Lt = function(r, s) {
  var d = {};
  for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && s.indexOf(a) < 0 && (d[a] = r[a]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var x = 0, a = Object.getOwnPropertySymbols(r); x < a.length; x++)
    s.indexOf(a[x]) < 0 && Object.prototype.propertyIsEnumerable.call(r, a[x]) && (d[a[x]] = r[a[x]]);
  return d;
};
const Qe = (r) => {
  const {
    getPrefixCls: s,
    direction: d,
    divider: a
  } = N.useContext(rt), {
    prefixCls: x,
    type: o = "horizontal",
    orientation: f = "center",
    orientationMargin: p,
    className: u,
    rootClassName: E,
    children: S,
    dashed: H,
    variant: ae = "solid",
    plain: A,
    style: $
  } = r, J = Lt(r, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), C = s("divider", x), [X, R, Q] = $t(C), G = !!S, le = f === "left" && p != null, Y = f === "right" && p != null, I = it(C, a == null ? void 0 : a.className, R, Q, `${C}-${o}`, {
    [`${C}-with-text`]: G,
    [`${C}-with-text-${f}`]: G,
    [`${C}-dashed`]: !!H,
    [`${C}-${ae}`]: ae !== "solid",
    [`${C}-plain`]: !!A,
    [`${C}-rtl`]: d === "rtl",
    [`${C}-no-default-orientation-margin-left`]: le,
    [`${C}-no-default-orientation-margin-right`]: Y
  }, u, E), t = N.useMemo(() => typeof p == "number" ? p : /^\d+$/.test(p) ? Number(p) : p, [p]), e = Object.assign(Object.assign({}, le && {
    marginLeft: t
  }), Y && {
    marginRight: t
  });
  if (Ve.env.NODE_ENV !== "production") {
    const l = ot("Divider");
    Ve.env.NODE_ENV !== "production" && l(!S || o !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return X(/* @__PURE__ */ N.createElement("div", Object.assign({
    className: I,
    style: Object.assign(Object.assign({}, a == null ? void 0 : a.style), $)
  }, J, {
    role: "separator"
  }), S && o !== "vertical" && /* @__PURE__ */ N.createElement("span", {
    className: `${C}-inner-text`,
    style: e
  }, S)));
};
Ve.env.NODE_ENV !== "production" && (Qe.displayName = "Divider");
const Ie = 337;
function Wt({
  className: r,
  onSuccess: s,
  disabled: d = !1,
  loading: a = !1,
  ...x
}) {
  const [o, f] = N.useState(!1), [p, u] = N.useState(0), [E, S] = N.useState(!1), H = N.useRef(null), ae = N.useRef(null), A = N.useRef(0), $ = () => {
    const R = Date.now();
    R - A.current >= 1e3 ? (A.current = R, S(!0), f(!1), De("onSuccess"), s == null || s()) : (u(0), f(!1));
  }, J = (R, Q) => {
    d || a || f(!0);
  }, C = (R) => {
    if (!o || !H.current || !ae.current) return;
    const Q = H.current, G = ae.current, le = Q.getBoundingClientRect();
    let Y = R - le.left - G.offsetWidth / 2;
    if (R - le.left < G.offsetWidth / 2) {
      u(0);
      return;
    }
    Y + G.offsetWidth >= Ie && (Y = Ie - G.offsetWidth, $()), u(Y);
  }, X = () => {
    E || u(0), f(!1);
  };
  return N.useEffect(() => {
    const R = (G) => C(G.clientX), Q = (G) => {
      G.preventDefault(), C(G.touches[0].clientX);
    };
    return o && (window.addEventListener("mousemove", R), window.addEventListener("mouseup", X), window.addEventListener("touchmove", Q, { passive: !1 }), window.addEventListener("touchend", X)), () => {
      window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", X), window.removeEventListener("touchmove", Q), window.removeEventListener("touchend", X);
    };
  }, [o]), N.useEffect(() => {
    !d && !a && (u(0), S(!1));
  }, [d, a]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: H,
      className: D(
        "relative h-[42px] rounded-full ring-1 ring-[#e0e0e0] ring-offset-[3px] cursor-pointer select-none touch-none",
        d && "cursor-not-allowed",
        r
      ),
      style: { width: `${Ie}px` },
      ...x,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: D(
              "absolute left-0 h-[42px] bg-black rounded-full",
              d && "bg-[#f2f2f2]"
            ),
            style: { width: `${p + 42}px` }
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: ae,
            className: D(
              "absolute z-10 left-0 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center cursor-grab",
              o && "cursor-grabbing",
              d && "bg-[#f2f2f2]"
            ),
            style: { transform: `translate(${p}px, -50%)` },
            onMouseDown: (R) => J(R.clientX),
            onTouchStart: (R) => J(R.touches[0].clientX),
            children: /* @__PURE__ */ n.jsx(Et, { className: D("w-[20px] h-[20px] text-white") })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "absolute text-white inset-0 flex items-center justify-center pointer-events-none", children: a ? /* @__PURE__ */ n.jsx(Ge, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ n.jsx("span", { className: D(
          "text-black text-base font-bold leading-tight",
          d && "text-[#e0e0e0]"
        ), children: "Scroll to send" }) })
      ]
    }
  );
}
function zt({
  index: r,
  transfer: s,
  validation: {
    isValidating: d,
    isValidEmail: a,
    fullAddress: x,
    error: o
  },
  handleToChange: f,
  handleToBlur: p,
  sending: u
}) {
  const { t: E } = Je(), S = E("/dashboard.[token].sendModal.unregisteredEmailNotice");
  return /* @__PURE__ */ n.jsxs("div", { className: D(
    "flex items-center px-0 relative",
    (a && x || o) && "mb-[16px] tablet:mb-0"
  ), children: [
    /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
      r + 1,
      "."
    ] }),
    /* @__PURE__ */ n.jsx(
      He,
      {
        disabled: u,
        value: s.to,
        onChange: (H) => f(H, r),
        onBlur: () => p(r),
        placeholder: "Enter email or crypto address",
        className: D(
          "desktop:w-[380px] laptop:w-[318px] tablet:w-[426px] w-[322px]",
          a && "border-green-500 focus-visible:border-green-500",
          o && "border-destructive focus-visible:border-destructive",
          o === S && "border-blue-500 focus-visible:border-blue-500",
          "pr-10"
        )
      }
    ),
    d && /* @__PURE__ */ n.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ n.jsx(Ct, { className: "animate-spin", size: 16 }) }),
    a && !d && !o && /* @__PURE__ */ n.jsx(Ke, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
    o && !d && /* @__PURE__ */ n.jsx(Me, { className: D(
      "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
      o === S && "text-blue-500"
    ), size: 16 }),
    a && x && /* @__PURE__ */ n.jsx("p", { className: "absolute -bottom-[20px] left-[22px] mt-1 text-xs text-primary/60", children: x }),
    o && /* @__PURE__ */ n.jsx("p", { className: D(
      "absolute -bottom-[20px] left-[22px] text-xs text-destructive",
      o === S && "text-blue-400"
    ), children: o })
  ] });
}
function We({
  index: r,
  transfer: s,
  handleNoteChange: d,
  sending: a
}) {
  return /* @__PURE__ */ n.jsx(
    lt,
    {
      disabled: a,
      rows: 1,
      value: s.note,
      onChange: (x) => d(x, r),
      className: D(
        "min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border focus-visible:border-black placeholder:text-black/25",
        "desktop:w-[308px] laptop:w-[299px] tablet:w-[658px] w-[322px]"
      ),
      placeholder: "Write a note to the recipient"
    }
  );
}
function ze({
  index: r,
  handleDeleteTransfer: s,
  sending: d
}) {
  return /* @__PURE__ */ n.jsx(
    Nt,
    {
      className: D(
        "w-[20px] h-[20px] text-[#979797] cursor-pointer",
        d && "hidden"
      ),
      onClick: () => s(r)
    }
  );
}
const Pe = (r) => {
  if (r === "TVWT")
    return "/imgs/logos/tvwt.png";
  if (r === "ETH")
    return "/imgs/logos/eth.png";
  if (r === "MATIC")
    return "/imgs/logos/matic.png";
}, Pt = ct.getInstance().getAllTokenTypes();
function Bt({
  handleTokenTypeChange: r,
  index: s,
  transfer: d,
  sending: a
}) {
  return /* @__PURE__ */ n.jsxs(dt, { children: [
    /* @__PURE__ */ n.jsxs(ut, { disabled: a, className: "flex items-center gap-[6px] px-0 py-1 focus:outline-none", children: [
      /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: Pe(d.token), alt: "" }),
      /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: he(d.token) }),
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/down_caret.svg", alt: "" })
    ] }),
    /* @__PURE__ */ n.jsx(ht, { align: "start", className: "bg-white", children: Pt.map((x) => /* @__PURE__ */ n.jsxs(
      ft,
      {
        disabled: a,
        onClick: () => r(x, s),
        className: "flex items-center gap-[6px]",
        children: [
          /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: Pe(x), alt: "" }),
          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: he(x) })
        ]
      },
      x
    )) })
  ] });
}
function Ht({
  isOpen: r,
  onClose: s
}) {
  const d = /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ n.jsx(Te, { className: "", variant: "outline", onClick: () => s(!0), children: "Quit" }),
    /* @__PURE__ */ n.jsx(Te, { className: "", onClick: () => s(!1), children: "Stay" })
  ] });
  return /* @__PURE__ */ n.jsx(
    pt,
    {
      isOpen: r,
      onClose: () => s(!1),
      title: "Are you sure you want to quit?",
      footer: d,
      children: /* @__PURE__ */ n.jsx("p", { className: "text-sm leading-none my-3", children: "Your progress may not be saved." })
    }
  );
}
function Ut({ shouldBlock: r }) {
  const [s, d] = N.useState(!1);
  Tt(
    N.useCallback((o) => {
      if (r)
        return o.preventDefault(), o.returnValue = "You have unsaved changes, are you sure you want to leave?";
    }, [r])
  );
  const a = kt(
    N.useCallback(() => r ? (d(!0), !0) : !1, [r])
  );
  return {
    showExitPrompt: s,
    handleExitPrompt: (o) => {
      var f;
      d(!1), o && ((f = a == null ? void 0 : a.proceed) == null || f.call(a));
    }
  };
}
class qt {
  constructor(s = 800) {
    Ce(this, "cache", /* @__PURE__ */ new Map());
    Ce(this, "expiryTime");
    this.expiryTime = s;
  }
  async getOrCreate(s, d) {
    const a = Date.now(), x = this.cache.get(s);
    if (x && a - x.timestamp < this.expiryTime)
      return x.promise;
    const o = d();
    this.cache.set(s, {
      promise: o,
      timestamp: a
    });
    try {
      return await o;
    } finally {
      setTimeout(() => {
        var f;
        ((f = this.cache.get(s)) == null ? void 0 : f.timestamp) === a && this.cache.delete(s);
      }, this.expiryTime);
    }
  }
  clear() {
    this.cache.clear();
  }
}
const Be = /* @__PURE__ */ new Map(), Gt = ({
  tokenType: r,
  transferParams: s,
  fromAddress: d
}) => JSON.stringify({
  tokenType: r,
  to: s.to.toLowerCase(),
  amount: s.amount.toString(),
  from: d.toLowerCase()
}), Kt = new qt(5e3);
async function Jt({
  tokenType: r,
  transferParams: s,
  fromAddress: d,
  defaultGasPrice: a,
  defaultBlock: x
}) {
  const o = Gt({ tokenType: r, transferParams: s, fromAddress: d });
  return Kt.getOrCreate(o, async () => {
    const f = Be.get(o);
    if (f)
      return f.result;
    try {
      const p = mt(r);
      if (!p) return null;
      const u = Ot({
        chain: p,
        transport: Vt()
      });
      let E;
      if (r === "TVWT" && (E = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", !E))
        throw new Error("Invalid token contract address");
      let S;
      if (r === "TVWT") {
        const G = Mt({
          abi: gt,
          functionName: "transfer",
          args: [s.to, s.amount]
        });
        S = {
          to: E,
          data: G,
          value: BigInt(0)
        };
      } else
        S = {
          to: s.to,
          value: s.amount
        };
      De("start to call getEstimatedGasFeeByToken", { tokenType: r, transferParams: s, fromAddress: d });
      const H = await u.estimateGas({
        ...S,
        account: d
      }), ae = a || await u.getGasPrice(), $ = (x || await u.getBlock()).baseFeePerGas || BigInt(0), J = ae > $ ? ae - $ : BigInt(1e9), C = $ + J * BigInt(2), X = H * C, R = Re(
        (Number(X) / Math.pow(10, 18)).toString()
      ), Q = {
        estimatedGas: H,
        maxFeePerGas: C,
        maxPriorityFeePerGas: J,
        estimatedTotalFee: X,
        baseFee: $,
        gasPrice: ae,
        feeInTokens: R
      };
      return Be.set(o, {
        result: Q,
        params: {
          tokenType: r,
          transferParams: s,
          fromAddress: d
        }
      }), console.log("Cache updated:", o), Q;
    } catch (p) {
      throw console.error("Gas estimation error:", p), p;
    }
  });
}
const Qt = (r) => {
  if (!r.length)
    return { isValid: !1, error: "CSV file is empty" };
  const s = r[0];
  if (!Array.isArray(s) || s.length < 4)
    return {
      isValid: !1,
      error: "Invalid CSV format: missing required columns"
    };
  const d = ["To", "Note", "Token", "Amount"], a = s.map((o) => o.trim());
  for (let o = 0; o < d.length; o++)
    if (a[o] !== d[o])
      return {
        isValid: !1,
        error: `Invalid header format. Expected: ${d.join(", ")}`
      };
  const x = ["TVWT", "ETH", "MATIC"];
  for (let o = 1; o < r.length; o++) {
    const f = r[o];
    if (!(!f[0] || f[0].trim() === "")) {
      if (!(ke(f[0]) || Oe.test(f[0])))
        return {
          isValid: !1,
          error: `Invalid to format at row ${o + 1}`
        };
      if (!f[2] || !x.includes(f[2].toUpperCase()))
        return {
          isValid: !1,
          error: `Invalid token type at row ${o + 1}. Allowed tokens: ${x.join(", ")}`
        };
      if (!f[3] || isNaN(Number(f[3])) || Number(f[3]) <= 0)
        return {
          isValid: !1,
          error: `Invalid amount at row ${o + 1}`
        };
    }
  }
  return { isValid: !0 };
}, Fe = /* @__PURE__ */ new Map(), Yt = 5 * 60 * 1e3;
async function Xt(r) {
  const s = Fe.get(r), d = Date.now();
  if (s && d - s.timestamp < Yt)
    return {
      data: s.data
    };
  const a = await Ae.get("/address/", {
    params: { email: r }
  });
  return Fe.set(r, {
    data: a.data,
    timestamp: d
  }), a;
}
function Zt() {
  Fe.clear();
}
const Ye = (r) => r ? Object.entries(r).reduce((s, [d, a]) => (d === "usdValue" || (d === "MATIC" || d === "TVWT" ? s.POL = (parseFloat(s.POL || "0") + parseFloat(a)).toString() : d === "ETH" && (s.ETH = a)), s), {}) : null;
var Xe = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(r, s) {
  (function(d, a) {
    r.exports = a();
  })(_t, function d() {
    var a = typeof self < "u" ? self : typeof window < "u" ? window : a !== void 0 ? a : {}, x = !a.document && !!a.postMessage, o = a.IS_PAPA_WORKER || !1, f = {}, p = 0, u = { parse: function(t, e) {
      var l = (e = e || {}).dynamicTyping || !1;
      if (I(l) && (e.dynamicTypingFunction = l, l = {}), e.dynamicTyping = l, e.transform = !!I(e.transform) && e.transform, e.worker && u.WORKERS_SUPPORTED) {
        var m = function() {
          if (!u.WORKERS_SUPPORTED) return !1;
          var w = (B = a.URL || a.webkitURL || null, M = d.toString(), u.BLOB_URL || (u.BLOB_URL = B.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", M, ")();"], { type: "text/javascript" })))), T = new a.Worker(w), B, M;
          return T.onmessage = R, T.id = p++, f[T.id] = T;
        }();
        return m.userStep = e.step, m.userChunk = e.chunk, m.userComplete = e.complete, m.userError = e.error, e.step = I(e.step), e.chunk = I(e.chunk), e.complete = I(e.complete), e.error = I(e.error), delete e.worker, void m.postMessage({ input: t, config: e, workerId: m.id });
      }
      var b = null;
      return u.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(w) {
        return w.charCodeAt(0) === 65279 ? w.slice(1) : w;
      }(t), b = e.download ? new H(e) : new A(e)) : t.readable === !0 && I(t.read) && I(t.on) ? b = new $(e) : (a.File && t instanceof File || t instanceof Object) && (b = new ae(e)), b.stream(t);
    }, unparse: function(t, e) {
      var l = !1, m = !0, b = ",", w = `\r
`, T = '"', B = T + T, M = !1, v = null, K = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || u.BAD_DELIMITERS.filter(function(y) {
            return e.delimiter.indexOf(y) !== -1;
          }).length || (b = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (l = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (M = e.skipEmptyLines), typeof e.newline == "string" && (w = e.newline), typeof e.quoteChar == "string" && (T = e.quoteChar), typeof e.header == "boolean" && (m = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            v = e.columns;
          }
          e.escapeChar !== void 0 && (B = e.escapeChar + T), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (K = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var j = new RegExp(C(T), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return ce(null, t, M);
        if (typeof t[0] == "object") return ce(v || Object.keys(t[0]), t, M);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || v), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), ce(t.fields || [], t.data || [], M);
      throw new Error("Unable to serialize unrecognized input");
      function ce(y, z, oe) {
        var U = "";
        typeof y == "string" && (y = JSON.parse(y)), typeof z == "string" && (z = JSON.parse(z));
        var ie = Array.isArray(y) && 0 < y.length, Z = !Array.isArray(z[0]);
        if (ie && m) {
          for (var ee = 0; ee < y.length; ee++) 0 < ee && (U += b), U += re(y[ee], ee);
          0 < z.length && (U += w);
        }
        for (var _ = 0; _ < z.length; _++) {
          var V = ie ? y.length : z[_].length, q = !1, te = ie ? Object.keys(z[_]).length === 0 : z[_].length === 0;
          if (oe && !ie && (q = oe === "greedy" ? z[_].join("").trim() === "" : z[_].length === 1 && z[_][0].length === 0), oe === "greedy" && ie) {
            for (var L = [], i = 0; i < V; i++) {
              var h = Z ? y[i] : i;
              L.push(z[_][h]);
            }
            q = L.join("").trim() === "";
          }
          if (!q) {
            for (var c = 0; c < V; c++) {
              0 < c && !te && (U += b);
              var g = ie && Z ? y[c] : c;
              U += re(z[_][g], c);
            }
            _ < z.length - 1 && (!oe || 0 < V && !te) && (U += w);
          }
        }
        return U;
      }
      function re(y, z) {
        if (y == null) return "";
        if (y.constructor === Date) return JSON.stringify(y).slice(1, 25);
        var oe = !1;
        K && typeof y == "string" && K.test(y) && (y = "'" + y, oe = !0);
        var U = y.toString().replace(j, B);
        return (oe = oe || l === !0 || typeof l == "function" && l(y, z) || Array.isArray(l) && l[z] || function(ie, Z) {
          for (var ee = 0; ee < Z.length; ee++) if (-1 < ie.indexOf(Z[ee])) return !0;
          return !1;
        }(U, u.BAD_DELIMITERS) || -1 < U.indexOf(b) || U.charAt(0) === " " || U.charAt(U.length - 1) === " ") ? T + U + T : U;
      }
    } };
    if (u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !x && !!a.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = X, u.ParserHandle = J, u.NetworkStreamer = H, u.FileStreamer = ae, u.StringStreamer = A, u.ReadableStreamStreamer = $, a.jQuery) {
      var E = a.jQuery;
      E.fn.parse = function(t) {
        var e = t.config || {}, l = [];
        return this.each(function(w) {
          if (!(E(this).prop("tagName").toUpperCase() === "INPUT" && E(this).attr("type").toLowerCase() === "file" && a.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var T = 0; T < this.files.length; T++) l.push({ file: this.files[T], inputElem: this, instanceConfig: E.extend({}, e) });
        }), m(), this;
        function m() {
          if (l.length !== 0) {
            var w, T, B, M, v = l[0];
            if (I(t.before)) {
              var K = t.before(v.file, v.inputElem);
              if (typeof K == "object") {
                if (K.action === "abort") return w = "AbortError", T = v.file, B = v.inputElem, M = K.reason, void (I(t.error) && t.error({ name: w }, T, B, M));
                if (K.action === "skip") return void b();
                typeof K.config == "object" && (v.instanceConfig = E.extend(v.instanceConfig, K.config));
              } else if (K === "skip") return void b();
            }
            var j = v.instanceConfig.complete;
            v.instanceConfig.complete = function(ce) {
              I(j) && j(ce, v.file, v.inputElem), b();
            }, u.parse(v.file, v.instanceConfig);
          } else I(t.complete) && t.complete();
        }
        function b() {
          l.splice(0, 1), m();
        }
      };
    }
    function S(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var l = le(e);
        l.chunkSize = parseInt(l.chunkSize), e.step || e.chunk || (l.chunkSize = null), this._handle = new J(l), (this._handle.streamer = this)._config = l;
      }).call(this, t), this.parseChunk = function(e, l) {
        if (this.isFirstChunk && I(this._config.beforeFirstChunk)) {
          var m = this._config.beforeFirstChunk(e);
          m !== void 0 && (e = m);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var b = this._partialLine + e;
        this._partialLine = "";
        var w = this._handle.parse(b, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var T = w.meta.cursor;
          this._finished || (this._partialLine = b.substring(T - this._baseIndex), this._baseIndex = T), w && w.data && (this._rowCount += w.data.length);
          var B = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (o) a.postMessage({ results: w, workerId: u.WORKER_ID, finished: B });
          else if (I(this._config.chunk) && !l) {
            if (this._config.chunk(w, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            w = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(w.data), this._completeResults.errors = this._completeResults.errors.concat(w.errors), this._completeResults.meta = w.meta), this._completed || !B || !I(this._config.complete) || w && w.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), B || w && w.meta.paused || this._nextChunk(), w;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        I(this._config.error) ? this._config.error(e) : o && this._config.error && a.postMessage({ workerId: u.WORKER_ID, error: e, finished: !1 });
      };
    }
    function H(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = u.RemoteChunkSize), S.call(this, t), this._nextChunk = x ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(l) {
        this._input = l, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), x || (e.onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !x), this._config.downloadRequestHeaders) {
            var l = this._config.downloadRequestHeaders;
            for (var m in l) e.setRequestHeader(m, l[m]);
          }
          if (this._config.chunkSize) {
            var b = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + b);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (w) {
            this._chunkError(w.message);
          }
          x && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(l) {
          var m = l.getResponseHeader("Content-Range");
          return m === null ? -1 : parseInt(m.substring(m.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(l) {
        var m = e.statusText || l;
        this._sendError(new Error(m));
      };
    }
    function ae(t) {
      var e, l;
      (t = t || {}).chunkSize || (t.chunkSize = u.LocalChunkSize), S.call(this, t);
      var m = typeof FileReader < "u";
      this.stream = function(b) {
        this._input = b, l = b.slice || b.webkitSlice || b.mozSlice, m ? ((e = new FileReader()).onload = Y(this._chunkLoaded, this), e.onerror = Y(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var b = this._input;
        if (this._config.chunkSize) {
          var w = Math.min(this._start + this._config.chunkSize, this._input.size);
          b = l.call(b, this._start, w);
        }
        var T = e.readAsText(b, this._config.encoding);
        m || this._chunkLoaded({ target: { result: T } });
      }, this._chunkLoaded = function(b) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(b.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function A(t) {
      var e;
      S.call(this, t = t || {}), this.stream = function(l) {
        return e = l, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var l, m = this._config.chunkSize;
          return m ? (l = e.substring(0, m), e = e.substring(m)) : (l = e, e = ""), this._finished = !e, this.parseChunk(l);
        }
      };
    }
    function $(t) {
      S.call(this, t = t || {});
      var e = [], l = !0, m = !1;
      this.pause = function() {
        S.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        S.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(b) {
        this._input = b, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        m && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : l = !0;
      }, this._streamData = Y(function(b) {
        try {
          e.push(typeof b == "string" ? b : b.toString(this._config.encoding)), l && (l = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (w) {
          this._streamError(w);
        }
      }, this), this._streamError = Y(function(b) {
        this._streamCleanUp(), this._sendError(b);
      }, this), this._streamEnd = Y(function() {
        this._streamCleanUp(), m = !0, this._streamData("");
      }, this), this._streamCleanUp = Y(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function J(t) {
      var e, l, m, b = Math.pow(2, 53), w = -b, T = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, B = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, M = this, v = 0, K = 0, j = !1, ce = !1, re = [], y = { data: [], errors: [], meta: {} };
      if (I(t.step)) {
        var z = t.step;
        t.step = function(_) {
          if (y = _, ie()) U();
          else {
            if (U(), y.data.length === 0) return;
            v += _.data.length, t.preview && v > t.preview ? l.abort() : (y.data = y.data[0], z(y, M));
          }
        };
      }
      function oe(_) {
        return t.skipEmptyLines === "greedy" ? _.join("").trim() === "" : _.length === 1 && _[0].length === 0;
      }
      function U() {
        return y && m && (ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), m = !1), t.skipEmptyLines && (y.data = y.data.filter(function(_) {
          return !oe(_);
        })), ie() && function() {
          if (!y) return;
          function _(q, te) {
            I(t.transformHeader) && (q = t.transformHeader(q, te)), re.push(q);
          }
          if (Array.isArray(y.data[0])) {
            for (var V = 0; ie() && V < y.data.length; V++) y.data[V].forEach(_);
            y.data.splice(0, 1);
          } else y.data.forEach(_);
        }(), function() {
          if (!y || !t.header && !t.dynamicTyping && !t.transform) return y;
          function _(q, te) {
            var L, i = t.header ? {} : [];
            for (L = 0; L < q.length; L++) {
              var h = L, c = q[L];
              t.header && (h = L >= re.length ? "__parsed_extra" : re[L]), t.transform && (c = t.transform(c, h)), c = Z(h, c), h === "__parsed_extra" ? (i[h] = i[h] || [], i[h].push(c)) : i[h] = c;
            }
            return t.header && (L > re.length ? ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + re.length + " fields but parsed " + L, K + te) : L < re.length && ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + re.length + " fields but parsed " + L, K + te)), i;
          }
          var V = 1;
          return !y.data.length || Array.isArray(y.data[0]) ? (y.data = y.data.map(_), V = y.data.length) : y.data = _(y.data, 0), t.header && y.meta && (y.meta.fields = re), K += V, y;
        }();
      }
      function ie() {
        return t.header && re.length === 0;
      }
      function Z(_, V) {
        return q = _, t.dynamicTypingFunction && t.dynamicTyping[q] === void 0 && (t.dynamicTyping[q] = t.dynamicTypingFunction(q)), (t.dynamicTyping[q] || t.dynamicTyping) === !0 ? V === "true" || V === "TRUE" || V !== "false" && V !== "FALSE" && (function(te) {
          if (T.test(te)) {
            var L = parseFloat(te);
            if (w < L && L < b) return !0;
          }
          return !1;
        }(V) ? parseFloat(V) : B.test(V) ? new Date(V) : V === "" ? null : V) : V;
        var q;
      }
      function ee(_, V, q, te) {
        var L = { type: _, code: V, message: q };
        te !== void 0 && (L.row = te), y.errors.push(L);
      }
      this.parse = function(_, V, q) {
        var te = t.quoteChar || '"';
        if (t.newline || (t.newline = function(h, c) {
          h = h.substring(0, 1048576);
          var g = new RegExp(C(c) + "([^]*?)" + C(c), "gm"), k = (h = h.replace(g, "")).split("\r"), O = h.split(`
`), F = 1 < O.length && O[0].length < k[0].length;
          if (k.length === 1 || F) return `
`;
          for (var ne = 0, P = 0; P < k.length; P++) k[P][0] === `
` && ne++;
          return ne >= k.length / 2 ? `\r
` : "\r";
        }(_, te)), m = !1, t.delimiter) I(t.delimiter) && (t.delimiter = t.delimiter(_), y.meta.delimiter = t.delimiter);
        else {
          var L = function(h, c, g, k, O) {
            var F, ne, P, se;
            O = O || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
            for (var xe = 0; xe < O.length; xe++) {
              var W = O[xe], we = 0, fe = 0, be = 0;
              P = void 0;
              for (var pe = new X({ comments: k, delimiter: W, newline: c, preview: 10 }).parse(h), me = 0; me < pe.data.length; me++) if (g && oe(pe.data[me])) be++;
              else {
                var ge = pe.data[me].length;
                fe += ge, P !== void 0 ? 0 < ge && (we += Math.abs(ge - P), P = ge) : P = ge;
              }
              0 < pe.data.length && (fe /= pe.data.length - be), (ne === void 0 || we <= ne) && (se === void 0 || se < fe) && 1.99 < fe && (ne = we, F = W, se = fe);
            }
            return { successful: !!(t.delimiter = F), bestDelimiter: F };
          }(_, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          L.successful ? t.delimiter = L.bestDelimiter : (m = !0, t.delimiter = u.DefaultDelimiter), y.meta.delimiter = t.delimiter;
        }
        var i = le(t);
        return t.preview && t.header && i.preview++, e = _, l = new X(i), y = l.parse(e, V, q), U(), j ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } };
      }, this.paused = function() {
        return j;
      }, this.pause = function() {
        j = !0, l.abort(), e = I(t.chunk) ? "" : e.substring(l.getCharIndex());
      }, this.resume = function() {
        M.streamer._halted ? (j = !1, M.streamer.parseChunk(e, !0)) : setTimeout(M.resume, 3);
      }, this.aborted = function() {
        return ce;
      }, this.abort = function() {
        ce = !0, l.abort(), y.meta.aborted = !0, I(t.complete) && t.complete(y), e = "";
      };
    }
    function C(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function X(t) {
      var e, l = (t = t || {}).delimiter, m = t.newline, b = t.comments, w = t.step, T = t.preview, B = t.fastMode, M = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (M = t.escapeChar), (typeof l != "string" || -1 < u.BAD_DELIMITERS.indexOf(l)) && (l = ","), b === l) throw new Error("Comment character same as delimiter");
      b === !0 ? b = "#" : (typeof b != "string" || -1 < u.BAD_DELIMITERS.indexOf(b)) && (b = !1), m !== `
` && m !== "\r" && m !== `\r
` && (m = `
`);
      var v = 0, K = !1;
      this.parse = function(j, ce, re) {
        if (typeof j != "string") throw new Error("Input must be a string");
        var y = j.length, z = l.length, oe = m.length, U = b.length, ie = I(w), Z = [], ee = [], _ = [], V = v = 0;
        if (!j) return de();
        if (t.header && !ce) {
          var q = j.split(m)[0].split(l), te = [], L = {}, i = !1;
          for (var h in q) {
            var c = q[h];
            I(t.transformHeader) && (c = t.transformHeader(c, h));
            var g = c, k = L[c] || 0;
            for (0 < k && (i = !0, g = c + "_" + k), L[c] = k + 1; te.includes(g); ) g = g + "_" + k;
            te.push(g);
          }
          if (i) {
            var O = j.split(m);
            O[0] = te.join(l), j = O.join(m);
          }
        }
        if (B || B !== !1 && j.indexOf(e) === -1) {
          for (var F = j.split(m), ne = 0; ne < F.length; ne++) {
            if (_ = F[ne], v += _.length, ne !== F.length - 1) v += m.length;
            else if (re) return de();
            if (!b || _.substring(0, U) !== b) {
              if (ie) {
                if (Z = [], be(_.split(l)), _e(), K) return de();
              } else be(_.split(l));
              if (T && T <= ne) return Z = Z.slice(0, T), de(!0);
            }
          }
          return de();
        }
        for (var P = j.indexOf(l, v), se = j.indexOf(m, v), xe = new RegExp(C(M) + C(e), "g"), W = j.indexOf(e, v); ; ) if (j[v] !== e) if (b && _.length === 0 && j.substring(v, v + U) === b) {
          if (se === -1) return de();
          v = se + oe, se = j.indexOf(m, v), P = j.indexOf(l, v);
        } else if (P !== -1 && (P < se || se === -1)) _.push(j.substring(v, P)), v = P + z, P = j.indexOf(l, v);
        else {
          if (se === -1) break;
          if (_.push(j.substring(v, se)), ge(se + oe), ie && (_e(), K)) return de();
          if (T && Z.length >= T) return de(!0);
        }
        else for (W = v, v++; ; ) {
          if ((W = j.indexOf(e, W + 1)) === -1) return re || ee.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: Z.length, index: v }), me();
          if (W === y - 1) return me(j.substring(v, W).replace(xe, e));
          if (e !== M || j[W + 1] !== M) {
            if (e === M || W === 0 || j[W - 1] !== M) {
              P !== -1 && P < W + 1 && (P = j.indexOf(l, W + 1)), se !== -1 && se < W + 1 && (se = j.indexOf(m, W + 1));
              var we = pe(se === -1 ? P : Math.min(P, se));
              if (j.substr(W + 1 + we, z) === l) {
                _.push(j.substring(v, W).replace(xe, e)), j[v = W + 1 + we + z] !== e && (W = j.indexOf(e, v)), P = j.indexOf(l, v), se = j.indexOf(m, v);
                break;
              }
              var fe = pe(se);
              if (j.substring(W + 1 + fe, W + 1 + fe + oe) === m) {
                if (_.push(j.substring(v, W).replace(xe, e)), ge(W + 1 + fe + oe), P = j.indexOf(l, v), W = j.indexOf(e, v), ie && (_e(), K)) return de();
                if (T && Z.length >= T) return de(!0);
                break;
              }
              ee.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: Z.length, index: v }), W++;
            }
          } else W++;
        }
        return me();
        function be(ue) {
          Z.push(ue), V = v;
        }
        function pe(ue) {
          var $e = 0;
          if (ue !== -1) {
            var Ee = j.substring(W + 1, ue);
            Ee && Ee.trim() === "" && ($e = Ee.length);
          }
          return $e;
        }
        function me(ue) {
          return re || (ue === void 0 && (ue = j.substring(v)), _.push(ue), v = y, be(_), ie && _e()), de();
        }
        function ge(ue) {
          v = ue, be(_), _ = [], se = j.indexOf(m, v);
        }
        function de(ue) {
          return { data: Z, errors: ee, meta: { delimiter: l, linebreak: m, aborted: K, truncated: !!ue, cursor: V + (ce || 0) } };
        }
        function _e() {
          w(de()), Z = [], ee = [];
        }
      }, this.abort = function() {
        K = !0;
      }, this.getCharIndex = function() {
        return v;
      };
    }
    function R(t) {
      var e = t.data, l = f[e.workerId], m = !1;
      if (e.error) l.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var b = { abort: function() {
          m = !0, Q(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: G, resume: G };
        if (I(l.userStep)) {
          for (var w = 0; w < e.results.data.length && (l.userStep({ data: e.results.data[w], errors: e.results.errors, meta: e.results.meta }, b), !m); w++) ;
          delete e.results;
        } else I(l.userChunk) && (l.userChunk(e.results, b, e.file), delete e.results);
      }
      e.finished && !m && Q(e.workerId, e.results);
    }
    function Q(t, e) {
      var l = f[t];
      I(l.userComplete) && l.userComplete(e), l.terminate(), delete f[t];
    }
    function G() {
      throw new Error("Not implemented.");
    }
    function le(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var l in t) e[l] = le(t[l]);
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
    return o && (a.onmessage = function(t) {
      var e = t.data;
      if (u.WORKER_ID === void 0 && e && (u.WORKER_ID = e.workerId), typeof e.input == "string") a.postMessage({ workerId: u.WORKER_ID, results: u.parse(e.input, e.config), finished: !0 });
      else if (a.File && e.input instanceof File || e.input instanceof Object) {
        var l = u.parse(e.input, e.config);
        l && a.postMessage({ workerId: u.WORKER_ID, results: l, finished: !0 });
      }
    }), (H.prototype = Object.create(S.prototype)).constructor = H, (ae.prototype = Object.create(S.prototype)).constructor = ae, (A.prototype = Object.create(A.prototype)).constructor = A, ($.prototype = Object.create(S.prototype)).constructor = $, u;
  });
})(Xe);
var en = Xe.exports;
const tn = /* @__PURE__ */ jt(en);
function nn({
  onSent: r
}) {
  const { address: s } = xt.all(), { t: d } = Je(), { data: a, isFetched: x } = Ne("ETH"), { data: o, isFetched: f } = Ne("MATIC"), { data: p, isFetched: u } = Ne("TVWT"), { data: E } = Ue(), { data: S } = bt(), [H, ae] = N.useState(null), [A, $] = N.useState([]), [J, C] = N.useState([]), [X, R] = N.useState([]), [Q, G] = N.useState(!1), [le, Y] = N.useState(!1), [I, t] = N.useState({
    ETH: "0",
    MATIC: "0",
    TVWT: "0",
    usdValue: "0"
  }), [e, l] = N.useState(null), m = Le(A, 800), b = Le(J, 800), { signTransaction: w } = At();
  N.useEffect(() => {
    x && f && u && ce();
  }, [x, f, u]), N.useEffect(() => {
    Zt(), y();
  }, []), N.useEffect(() => {
    const i = {
      ETH: 0,
      MATIC: 0,
      TVWT: 0
    };
    A.forEach((c) => {
      c.amount && !isNaN(parseFloat(c.amount)) && (i[c.token] += parseFloat(c.amount));
    });
    const h = E ? i.ETH * parseFloat(E.ETH) + i.MATIC * parseFloat(E.MATIC) + i.TVWT * parseFloat(E.TVWT) : 0;
    t({
      ETH: i.ETH.toString(),
      MATIC: i.MATIC.toString(),
      TVWT: i.TVWT.toString(),
      usdValue: ye(h.toString(), 2)
    });
  }, [A, E]);
  const T = N.useMemo(() => ({
    ETH: (a == null ? void 0 : a.balance) || "0",
    MATIC: (o == null ? void 0 : o.balance) || "0",
    TVWT: (p == null ? void 0 : p.balance) || "0"
  }), [a, o, p]), B = N.useMemo(
    () => Object.entries(I).filter(([i]) => i !== "usdValue").some(([i, h]) => {
      const c = i, g = parseFloat(T[c] || "0"), k = parseFloat(h), O = e && e[c] ? parseFloat(e[c]) : 0;
      return k + O > g;
    }),
    [I, T, e]
  ), M = ({
    transfer: i,
    validation: h
  }) => Oe.test(i.to) && (h == null ? void 0 : h.error) === d("/dashboard.[token].sendModal.unregisteredEmailNotice"), v = N.useMemo(() => A.some((i, h) => {
    if (!i.to || !i.amount || !i.token)
      return !0;
    const c = J[h];
    if (c != null && c.error && !M({ transfer: i, validation: c }) || c != null && c.isValidating)
      return !0;
    const g = parseFloat(i.amount);
    return !!(isNaN(g) || g <= 0 || B);
  }), [A, J, B]), K = N.useMemo(() => A.some((i) => i.to || i.note || i.amount), [A]);
  N.useEffect(() => {
    m.forEach((i, h) => {
      i.to && re(i.to, h);
    });
  }, [m]), N.useEffect(() => {
    j();
  }, [b, m]);
  const j = N.useCallback(async () => {
    if (v) {
      l(null);
      return;
    }
    Y(!0);
    try {
      const i = ["ETH", "MATIC", "TVWT"], h = {}, c = (g) => m.filter((k, O) => {
        var ne;
        return k.token === g && k.amount && (ke(k.to) || ((ne = b[O]) == null ? void 0 : ne.fullAddress));
      }).map((k, O) => {
        var F;
        return {
          to: ke(k.to) ? k.to : (F = b[O]) == null ? void 0 : F.fullAddress,
          amount: je(k.amount)
        };
      });
      for (const g of i) {
        const k = c(g);
        if (k.length > 0) {
          const F = (await Promise.all(
            k.map(
              (ne) => Jt({
                tokenType: g,
                transferParams: ne,
                fromAddress: s
              })
            )
          )).reduce(
            (ne, P) => P ? ne + parseFloat(P.feeInTokens) : ne,
            0
          );
          F > 0 && (h[g] = Re(F.toString()));
        }
      }
      if (E) {
        const g = h.ETH ? parseFloat(h.ETH) * parseFloat(E.ETH) : 0, k = h.MATIC ? parseFloat(h.MATIC) * parseFloat(E.MATIC) : 0, O = h.TVWT ? parseFloat(h.TVWT) * parseFloat(E.TVWT) : 0, F = g + k + O;
        h.usdValue = ye(F.toString(), 2);
      }
      l(h);
    } catch (i) {
      console.error("Failed to calculate gas fee:", i), l(null);
    } finally {
      Y(!1);
    }
  }, [b, m, v, s, E]), ce = () => {
    $([{
      to: "",
      note: "",
      amount: "",
      token: "TVWT",
      balance: T.TVWT || "0"
    }]), C([{
      isValidating: !1,
      isValidEmail: !1,
      fullAddress: "",
      error: ""
    }]), R([!1]);
  }, re = async (i, h) => {
    if (!i) {
      C((c) => {
        const g = [...c];
        return g[h] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "Address or email is required"
        }, g;
      });
      return;
    }
    C((c) => {
      const g = [...c];
      return g[h] = {
        ...c[h],
        isValidating: !0
      }, g;
    });
    try {
      if (ke(i)) {
        C((g) => {
          const k = [...g];
          return k[h] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }, k;
        });
        return;
      }
      if (!Oe.test(i)) {
        C((g) => {
          const k = [...g];
          return k[h] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: d("/dashboard.[token].sendModal.invalidEmailFormat")
          }, k;
        });
        return;
      }
      const c = await Xt(i);
      C((g) => {
        const k = [...g];
        return k[h] = {
          isValidating: !1,
          isValidEmail: !0,
          fullAddress: c.data.success ? c.data.address : "",
          error: c.data.success ? "" : d("/dashboard.[token].sendModal.unregisteredEmailNotice")
        }, k;
      });
    } catch {
      C((g) => {
        const k = [...g];
        return k[h] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "error"
        }, k;
      });
    }
  }, y = async () => {
    try {
      const { data: i } = await Ae.post("/transaction/outbound-amount", {
        tokens: ["ETH", "MATIC", "TVWT"]
      });
      ae(i);
    } catch (i) {
      console.error("Failed to fetch token transferred:", i);
    }
  }, z = async (i, h) => {
    const c = i.target.value.trim(), g = [...A];
    g[h].to = c, $(g);
  }, oe = (i) => {
    re(A[i].to, i);
  }, U = (i) => {
    const h = A[i].amount;
    R((c) => {
      const g = [...c];
      return g[i] = h === "", g;
    });
  }, ie = (i, h) => {
    const c = [...A];
    c[h].note = i.target.value, $(c);
  }, Z = (i, h) => {
    const c = i.target.value.trim(), g = [...A];
    g[h].amount = c, $(g), R((k) => {
      const O = [...k];
      return O[h] = !1, O;
    });
  }, ee = async (i, h) => {
    Y(!1);
    try {
      const c = T[i] || "0";
      $((g) => {
        const k = [...g];
        return k[h] = {
          ...g[h],
          token: i,
          amount: "",
          balance: c
        }, k;
      });
    } catch (c) {
      console.error("Failed to fetch balance:", c);
    }
  }, _ = async (i, h) => {
    const c = J[h], g = i.amount;
    let k, O;
    if (ke(i.to))
      k = i.to;
    else if (M({ transfer: i, validation: c })) {
      O = i.to, await Ae.post("/invite/invite-register", {
        toEmail: O,
        from: s,
        amount: je(g).toString(),
        token: i.token,
        note: i.note
      });
      return;
    } else
      k = c == null ? void 0 : c.fullAddress;
    return await w({
      to: k,
      amount: g,
      data: "",
      token: i.token,
      transactionType: yt.TRANSFER,
      note: i.note,
      isNotifySubmit: !1,
      isNotifyOtp: !1,
      isNotifyError: !1
    });
  };
  return {
    transfers: A,
    toValidations: J,
    sending: Q,
    isDisabled: v,
    hasContent: K,
    isEstimatingFee: le,
    tokenBalances: T,
    tokenPrices: E,
    hasInsufficientBalance: B,
    handleToChange: z,
    handleToBlur: oe,
    handleNoteChange: ie,
    handleAmountChange: Z,
    handleTokenTypeChange: ee,
    handleSend: async () => {
      G(!0);
      try {
        const i = [];
        for (let h = 0; h < A.length; h++) {
          const c = A[h];
          try {
            const g = await _(c, h);
            M({ transfer: c, validation: J[h] }) ? i.push({
              to: c.to,
              type: "invitation",
              status: "sent",
              statusMessage: "Invitation email sent. The recipient will receive an invitation email to sign up their account.",
              amount: c.amount,
              token: c.token
            }) : i.push({
              to: c.to,
              type: "transaction",
              status: g != null && g.hash ? "sent" : "failed",
              statusMessage: g != null && g.needOtp ? "Daily transaction limit exceeded. Please check your email and verify by the OTP." : "Sent and received",
              amount: c.amount,
              token: c.token
            });
          } catch (g) {
            const k = M({ transfer: c, validation: J[h] }) ? "invitation" : "transaction", O = vt(g);
            De("handleSend", { errorInfo: O }), i.push({
              to: c.to,
              type: k,
              status: "failed",
              statusMessage: k === "transaction" ? O.message : "Not sent. Please try transferring again.",
              amount: c.amount,
              token: c.token
            });
          }
        }
        r(i, e, I);
      } catch (i) {
        console.error("Failed to send transfers:", i);
      } finally {
        G(!1);
      }
    },
    handleAddTransfer: () => {
      const i = {
        to: "",
        note: "",
        amount: "",
        token: "TVWT",
        balance: T.TVWT || "0"
      };
      $([...A, i]), C([...J, {
        isValidating: !1,
        isValidEmail: !1,
        fullAddress: "",
        error: ""
      }]), R([...X, !1]);
    },
    handleDeleteTransfer: (i) => {
      $(A.filter((h, c) => c !== i)), C(J.filter((h, c) => c !== i)), R(X.filter((h, c) => c !== i));
    },
    handleFileChange: (i) => {
      var c;
      const h = (c = i.target.files) == null ? void 0 : c[0];
      h && tn.parse(h, {
        header: !1,
        complete: (g) => {
          const k = Qt(g.data);
          if (!k.isValid) {
            Se.error(k.error), $([]), i.target.value = "";
            return;
          }
          const O = g.data.slice(1).filter((F) => F[0] && F[0].trim() !== "").map((F) => ({
            to: F[0],
            note: F[1],
            token: F[2],
            amount: F[3],
            balance: T[F[2]] || "0"
          }));
          $(O), C(O.map(() => ({
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }))), R(O.map(() => !1)), Se.success("CSV file uploaded successfully");
        },
        error: (g) => {
          Se.error(`Error parsing CSV: ${g.message}`);
        }
      });
    },
    totalAmount: I,
    todayTokenTransferred: H,
    defaultLimits: S,
    gasFees: e,
    handleAmountBlur: U,
    amountRequiredValidations: X
  };
}
function sn({
  transfer: r,
  sending: s,
  handleAmountChange: d,
  index: a,
  handleAmountBlur: x,
  isEmpty: o
}) {
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(
      He,
      {
        disabled: s,
        value: r.amount,
        type: "number",
        inputMode: "decimal",
        onChange: (f) => d(f, a),
        onBlur: () => x(a),
        className: D(
          "pl-[110px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          r.token === "ETH" && "pl-[144px]",
          r.token === "MATIC" && "pl-[100px]",
          "desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]"
        ),
        placeholder: "Amount"
      }
    ),
    o && /* @__PURE__ */ n.jsx("p", { className: D(
      "absolute -bottom-[20px] left-[0] text-xs text-destructive"
    ), children: "Amount is required" })
  ] });
}
function an({
  todayTokenTransferred: r,
  defaultLimits: s,
  totalAmount: d
}) {
  const [a, x] = N.useState(!1), f = ["ETH", "MATIC", "TVWT"].filter((p) => {
    const u = BigInt(r[p]), E = BigInt(je(d[p])), S = BigInt(je(s[p]));
    return u + E > S;
  });
  return f.length === 0 ? null : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        f.map((p) => /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black font-normal leading-snug", children: [
          he(p),
          " daily transaction limit exceeded. Current ",
          he(p),
          " limit: ",
          Re(s[p] || "0"),
          " ",
          he(p)
        ] }, p)),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-xs text-black font-bold leading-none mt-[12px] cursor-pointer w-fit",
            onClick: () => x(!0),
            children: [
              /* @__PURE__ */ n.jsx("span", { children: "Change limit" }),
              /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/arrow_right.svg", className: "w-[12px]" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsx(
      wt,
      {
        isOpen: a,
        onClose: () => x(!1),
        defaultLimits: s
      }
    )
  ] });
}
function rn({
  tokenBalances: r,
  tokenPrices: s,
  totalAmount: d,
  hasInsufficientBalance: a,
  gasFees: x
}) {
  if (!a) return null;
  const o = (f, p) => s != null && s[p] ? ye((parseFloat(f) * parseFloat(s[p])).toString(), 2) : "0";
  return /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
    /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-black font-bold leading-none mb-[8px]", children: "Insufficient balance:" }),
      Object.keys(r).map((f) => {
        const p = f, u = parseFloat(r[p] || "0"), E = parseFloat(d[p] || "0"), S = x && x[p] ? parseFloat(x[p]) : 0, H = E + S;
        return H > u && /* @__PURE__ */ n.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            he(p),
            " balance: ",
            ye(u.toString(), 6),
            " ",
            he(p),
            " ~",
            o(u.toString(), p),
            " USDT"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            "Required: ",
            ye(H.toString(), 6),
            " ",
            he(p),
            " (Transfer: ",
            ye(E.toString(), 6),
            " + Gas: ",
            ye(S.toString(), 6),
            ")"
          ] })
        ] }, f);
      })
    ] })
  ] }) });
}
function Ze({
  totalAmount: r,
  gasFees: s
}) {
  const d = Ye(s), a = (f) => {
    let p = 0;
    try {
      if (f === "POL") {
        const u = parseFloat(r.MATIC || "0"), E = parseFloat((d == null ? void 0 : d.POL) || "0");
        p = u + E;
      } else if (f === "ETH") {
        const u = parseFloat(r.ETH || "0"), E = parseFloat((d == null ? void 0 : d.ETH) || "0");
        p = u + E;
      } else f === "TVWT" && (p = parseFloat(r.TVWT || "0"));
      return p === 0 ? null : {
        amount: p,
        symbol: f
      };
    } catch (u) {
      return console.error("Error calculating total amount:", u), null;
    }
  }, x = () => {
    const f = [];
    return f.push(a("ETH")), f.push(a("TVWT")), f.push(a("POL")), f.filter((p) => p !== null);
  }, o = () => {
    const f = parseFloat(r.usdValue), p = parseFloat((s == null ? void 0 : s.usdValue) || "0");
    return f + p;
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Total amount:" }) }),
    /* @__PURE__ */ n.jsxs("p", { className: "text-black text-xl font-medium leading-none text-right mt-0.5", children: [
      x().map((f, p, u) => /* @__PURE__ */ n.jsxs("span", { children: [
        f.amount,
        " ",
        f.symbol,
        p < u.length - 1 && " & "
      ] }, p)),
      o() !== 0 && ` (~$${o()} USD)`
    ] })
  ] });
}
function on({
  onSent: r
}) {
  const {
    transfers: s,
    toValidations: d,
    sending: a,
    isDisabled: x,
    hasContent: o,
    handleToChange: f,
    handleToBlur: p,
    handleNoteChange: u,
    handleAmountChange: E,
    handleTokenTypeChange: S,
    handleSend: H,
    handleAddTransfer: ae,
    handleDeleteTransfer: A,
    totalAmount: $,
    tokenBalances: J,
    tokenPrices: C,
    todayTokenTransferred: X,
    defaultLimits: R,
    gasFees: Q,
    isEstimatingFee: G,
    hasInsufficientBalance: le,
    handleFileChange: Y,
    handleAmountBlur: I,
    amountRequiredValidations: t
  } = nn({
    onSent: r
  }), { showExitPrompt: e, handleExitPrompt: l } = Ut({
    shouldBlock: o
  }), m = qe(), b = () => {
    m(-1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: D(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Multisender" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: "You can add multiple recipients in custom settings" })
    ] }),
    X && /* @__PURE__ */ n.jsx(
      an,
      {
        todayTokenTransferred: X,
        defaultLimits: R,
        totalAmount: $
      }
    ),
    C && /* @__PURE__ */ n.jsx(
      rn,
      {
        tokenBalances: J,
        tokenPrices: C,
        totalAmount: $,
        hasInsufficientBalance: le,
        gasFees: Q
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
      /* @__PURE__ */ n.jsx("div", { className: "", children: s.map((w, T) => /* @__PURE__ */ n.jsxs("div", { className: "border-b border-[#ebebeb]", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: D(
              "flex items-center flex-wrap py-[25px]",
              "desktop:gap-[28px] laptop:gap-[23px] tablet:gap-[7px] gap-0"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { children: /* @__PURE__ */ n.jsx(
                zt,
                {
                  index: T,
                  transfer: w,
                  validation: d[T] || {
                    isValidating: !1,
                    isValidEmail: !1,
                    fullAddress: "",
                    error: ""
                  },
                  handleToChange: f,
                  handleToBlur: p,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("section", { className: D(
                "block tablet:hidden laptop:block",
                "pl-[22px] tablet:pl-0",
                "py-[12px] tablet:py-0"
              ), children: /* @__PURE__ */ n.jsx(
                We,
                {
                  index: T,
                  transfer: w,
                  handleNoteChange: u,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsxs("section", { className: D(
                "relative",
                "ml-[22px] tablet:ml-0"
              ), children: [
                /* @__PURE__ */ n.jsx(
                  sn,
                  {
                    index: T,
                    transfer: w,
                    handleAmountChange: E,
                    sending: a,
                    handleAmountBlur: I,
                    isEmpty: t[T]
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center", children: [
                  /* @__PURE__ */ n.jsx(
                    Bt,
                    {
                      index: T,
                      transfer: w,
                      handleTokenTypeChange: S,
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
                  ze,
                  {
                    index: T,
                    handleDeleteTransfer: A,
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
                We,
                {
                  index: T,
                  transfer: w,
                  handleNoteChange: u,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("div", { className: D(
                s.length === 1 && "hidden"
              ), children: /* @__PURE__ */ n.jsx(
                ze,
                {
                  index: T,
                  handleDeleteTransfer: A,
                  sending: a
                }
              ) })
            ]
          }
        )
      ] }, T)) })
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
            onChange: Y
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        Te,
        {
          variant: "outline",
          className: "h-[24px] text-xs px-[26px]",
          onClick: ae,
          disabled: a,
          children: /* @__PURE__ */ n.jsx(St, { className: "w-[12px] h-[12px]", strokeWidth: 3 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[120px]", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: [
        /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }),
        /* @__PURE__ */ n.jsx(Ft, { title: "Estimated fees may vary and will be recalculated during backend checks.", overlayStyle: { maxWidth: "none" }, children: /* @__PURE__ */ n.jsx(It, { className: "w-[16px] h-[16px]" }) })
      ] }),
      G ? /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-end mt-0.5", children: /* @__PURE__ */ n.jsx(Ge, { className: "animate-spin", size: 14 }) }) : Q ? /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        (() => {
          const w = Ye(Q);
          return Object.entries(w || {}).filter(([T, B]) => B !== "0").map(([T, B], M, v) => /* @__PURE__ */ n.jsxs("span", { children: [
            B,
            " ",
            T,
            M < v.length - 1 && " & "
          ] }, T));
        })(),
        Object.values(Q).some((w) => w !== "0") && ` (~$${Q.usdValue} USD)`
      ] }) : /* @__PURE__ */ n.jsx("p", { className: "text-black text-right", children: "-" }),
      /* @__PURE__ */ n.jsx(
        Ze,
        {
          totalAmount: $,
          gasFees: Q
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "mt-[104px]", children: [
        /* @__PURE__ */ n.jsx(
          Wt,
          {
            onSuccess: H,
            loading: a,
            disabled: x || G,
            className: "mx-auto"
          }
        ),
        !a && /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-center mt-[26px]", children: /* @__PURE__ */ n.jsx(
          "p",
          {
            className: "w-auto cursor-pointer text-black text-base font-bold leading-tight",
            onClick: b,
            children: "Cancel"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      Ht,
      {
        isOpen: e,
        onClose: l
      }
    )
  ] });
}
function ln({
  transferResults: r,
  onTransferAgain: s,
  gasFees: d,
  totalAmount: a
}) {
  const x = qe();
  return Ue(), /* @__PURE__ */ n.jsxs("div", { className: D(
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
      /* @__PURE__ */ n.jsx("div", { className: "", children: r.map((o, f) => /* @__PURE__ */ n.jsxs(
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
                f + 1,
                "."
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: D(
                "flex items-center",
                "desktop:w-[297px] laptop:w-[297px] tablet:w-[297px] w-[302px]",
                "desktop:mr-[100px] laptop:mr-[100px] tablet:mr-[20px]",
                "py-[8px] tablet:py-0"
              ), children: [
                /* @__PURE__ */ n.jsx("p", { className: D(
                  "mr-1",
                  "[text-decoration:none]",
                  o.type === "transaction" && o.status === "sent" && "text-green-500",
                  o.type === "invitation" && o.status === "sent" && "text-blue-500",
                  o.status === "failed" && "text-destructive"
                ), children: o.to }),
                o.type === "transaction" && o.status === "sent" && /* @__PURE__ */ n.jsx(Ke, { className: "text-green-500", size: 12 }),
                o.type === "invitation" && o.status === "sent" && /* @__PURE__ */ n.jsx(Me, { className: "text-blue-500", size: 12 }),
                o.status === "failed" && /* @__PURE__ */ n.jsx(Me, { className: "text-destructive", size: 12 })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("p", { className: D(
              "text-xs text-black font-normal leading-tight break-words",
              "desktop:w-[362px] laptop:w-[348px] tablet:w-[252px] w-full",
              "mb-1 tablet:mb-0",
              o.status === "failed" && "text-destructive"
            ), children: o.statusMessage }),
            /* @__PURE__ */ n.jsxs("div", { className: D(
              "flex-1 text-sm text-black font-normal leading-none text-right",
              "pr-0 tablet:pr-[8px]"
            ), children: [
              /* @__PURE__ */ n.jsxs("p", { children: [
                o.amount,
                " ",
                he(o.token)
              ] }),
              o.type === "transaction" && o.status === "failed" && /* @__PURE__ */ n.jsx("p", { children: "(Not Sent)" })
            ] })
          ]
        },
        f
      )) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[30px]", children: [
      /* @__PURE__ */ n.jsx("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }) }),
      /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        d && Object.entries(d).filter(([o]) => o !== "usdValue" && d[o] !== "0").map(([o, f], p, u) => /* @__PURE__ */ n.jsxs("span", { children: [
          f,
          " ",
          o === "TVWT" ? "POL" : he(o),
          p < u.length - 1 && " & "
        ] }, o)),
        d && Object.values(d).some((o) => o !== "0") && ` (~$${d.usdValue} USD)`
      ] }),
      /* @__PURE__ */ n.jsx(
        Ze,
        {
          totalAmount: a,
          gasFees: d
        }
      ),
      /* @__PURE__ */ n.jsx("div", { className: "mt-[104px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex justify-center flex-wrap gap-4 mt-6 w-full", children: [
        /* @__PURE__ */ n.jsx(Te, { className: "w-[343px] tablet:w-[242px]", variant: "outline", onClick: s, children: "Transfer again" }),
        /* @__PURE__ */ n.jsx(Te, { className: "w-[343px] tablet:w-[242px]", onClick: () => {
          x(-1);
        }, children: "OK" })
      ] }) })
    ] })
  ] });
}
function bn() {
  const [r, s] = N.useState(!1), [d, a] = N.useState([]), [x, o] = N.useState(null), [f, p] = N.useState({
    ETH: "0",
    MATIC: "0",
    TVWT: "0",
    usdValue: "0"
  }), u = (E, S, H) => {
    a(E), o(S), p(H), s(!0);
  };
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: r ? /* @__PURE__ */ n.jsx(
    ln,
    {
      transferResults: d,
      onTransferAgain: () => {
        s(!1);
      },
      gasFees: x,
      totalAmount: f
    }
  ) : /* @__PURE__ */ n.jsx(
    on,
    {
      onSent: u
    }
  ) });
}
export {
  bn as default
};
