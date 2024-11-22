import { r as o, $ as Vt, a as ft, b as Bt } from "./vendor-react-CwfAKKXk.js";
import { c as Wt, _ as Gt, u as Kt, a as le, f as Ht, z as qt, s as Xt, b as Yt, R as Zt, e as Jt, h as Qt } from "./vendor-radix-nT--cb5B.js";
function pt(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (r = 0; r < a; r++) e[r] && (t = pt(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function io() {
  for (var e, r, t = 0, n = "", a = arguments.length; t < a; t++) (e = arguments[t]) && (r = pt(e)) && (n && (n += " "), n += r);
  return n;
}
const Ge = "-", er = (e) => {
  const r = rr(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (c) => {
      const l = c.split(Ge);
      return l[0] === "" && l.length !== 1 && l.shift(), mt(l, r) || tr(c);
    },
    getConflictingClassGroupIds: (c, l) => {
      const d = t[c] || [];
      return l && n[c] ? [...d, ...n[c]] : d;
    }
  };
}, mt = (e, r) => {
  var c;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], n = r.nextPart.get(t), a = n ? mt(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (r.validators.length === 0)
    return;
  const s = e.join(Ge);
  return (c = r.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : c.classGroupId;
}, Xe = /^\[(.+)\]$/, tr = (e) => {
  if (Xe.test(e)) {
    const r = Xe.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, rr = (e) => {
  const {
    theme: r,
    prefix: t
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return or(Object.entries(e.classGroups), t).forEach(([s, c]) => {
    _e(c, n, s, r);
  }), n;
}, _e = (e, r, t, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? r : Ye(r, a);
      s.classGroupId = t;
      return;
    }
    if (typeof a == "function") {
      if (nr(a)) {
        _e(a(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: a,
        classGroupId: t
      });
      return;
    }
    Object.entries(a).forEach(([s, c]) => {
      _e(c, Ye(r, s), t, n);
    });
  });
}, Ye = (e, r) => {
  let t = e;
  return r.split(Ge).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}, nr = (e) => e.isThemeGetter, or = (e, r) => r ? e.map(([t, n]) => {
  const a = n.map((s) => typeof s == "string" ? r + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([c, l]) => [r + c, l])) : s);
  return [t, a];
}) : e, ar = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (s, c) => {
    t.set(s, c), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let c = t.get(s);
      if (c !== void 0)
        return c;
      if ((c = n.get(s)) !== void 0)
        return a(s, c), c;
    },
    set(s, c) {
      t.has(s) ? t.set(s, c) : a(s, c);
    }
  };
}, vt = "!", sr = (e) => {
  const {
    separator: r,
    experimentalParseClassName: t
  } = e, n = r.length === 1, a = r[0], s = r.length, c = (l) => {
    const d = [];
    let i = 0, u = 0, m;
    for (let v = 0; v < l.length; v++) {
      let y = l[v];
      if (i === 0) {
        if (y === a && (n || l.slice(v, v + s) === r)) {
          d.push(l.slice(u, v)), u = v + s;
          continue;
        }
        if (y === "/") {
          m = v;
          continue;
        }
      }
      y === "[" ? i++ : y === "]" && i--;
    }
    const h = d.length === 0 ? l : l.substring(u), b = h.startsWith(vt), x = b ? h.substring(1) : h, f = m && m > u ? m - u : void 0;
    return {
      modifiers: d,
      hasImportantModifier: b,
      baseClassName: x,
      maybePostfixModifierPosition: f
    };
  };
  return t ? (l) => t({
    className: l,
    parseClassName: c
  }) : c;
}, lr = (e) => {
  if (e.length <= 1)
    return e;
  const r = [];
  let t = [];
  return e.forEach((n) => {
    n[0] === "[" ? (r.push(...t.sort(), n), t = []) : t.push(n);
  }), r.push(...t.sort()), r;
}, cr = (e) => ({
  cache: ar(e.cacheSize),
  parseClassName: sr(e),
  ...er(e)
}), ir = /\s+/, ur = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = r, s = [], c = e.trim().split(ir);
  let l = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const i = c[d], {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: b
    } = t(i);
    let x = !!b, f = n(x ? h.substring(0, b) : h);
    if (!f) {
      if (!x) {
        l = i + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (f = n(h), !f) {
        l = i + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = !1;
    }
    const v = lr(u).join(":"), y = m ? v + vt : v, E = y + f;
    if (s.includes(E))
      continue;
    s.push(E);
    const k = a(f, x);
    for (let C = 0; C < k.length; ++C) {
      const S = k[C];
      s.push(y + S);
    }
    l = i + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function dr() {
  let e = 0, r, t, n = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = bt(r)) && (n && (n += " "), n += t);
  return n;
}
const bt = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (r = bt(e[n])) && (t && (t += " "), t += r);
  return t;
};
function fr(e, ...r) {
  let t, n, a, s = c;
  function c(d) {
    const i = r.reduce((u, m) => m(u), e());
    return t = cr(i), n = t.cache.get, a = t.cache.set, s = l, l(d);
  }
  function l(d) {
    const i = n(d);
    if (i)
      return i;
    const u = ur(d, t);
    return a(d, u), u;
  }
  return function() {
    return s(dr.apply(null, arguments));
  };
}
const I = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, ht = /^\[(?:([a-z-]+):)?(.+)\]$/i, pr = /^\d+\/\d+$/, mr = /* @__PURE__ */ new Set(["px", "full", "screen"]), vr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, br = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, gr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (e) => ie(e) || mr.has(e) || pr.test(e), q = (e) => de(e, "length", Rr), ie = (e) => !!e && !Number.isNaN(Number(e)), Pe = (e) => de(e, "number", ie), me = (e) => !!e && Number.isInteger(Number(e)), $r = (e) => e.endsWith("%") && ie(e.slice(0, -1)), w = (e) => ht.test(e), X = (e) => vr.test(e), wr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xr = (e) => de(e, wr, gt), Er = (e) => de(e, "position", gt), Cr = /* @__PURE__ */ new Set(["image", "url"]), kr = (e) => de(e, Cr, Mr), Sr = (e) => de(e, "", Pr), ve = () => !0, de = (e, r, t) => {
  const n = ht.exec(e);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : t(n[2]) : !1;
}, Rr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  br.test(e) && !hr.test(e)
), gt = () => !1, Pr = (e) => gr.test(e), Mr = (e) => yr.test(e), Ar = () => {
  const e = I("colors"), r = I("spacing"), t = I("blur"), n = I("brightness"), a = I("borderColor"), s = I("borderRadius"), c = I("borderSpacing"), l = I("borderWidth"), d = I("contrast"), i = I("grayscale"), u = I("hueRotate"), m = I("invert"), h = I("gap"), b = I("gradientColorStops"), x = I("gradientColorStopPositions"), f = I("inset"), v = I("margin"), y = I("opacity"), E = I("padding"), k = I("saturate"), C = I("scale"), S = I("sepia"), M = I("skew"), N = I("space"), P = I("translate"), _ = () => ["auto", "contain", "none"], V = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", w, r], A = () => [w, r], fe = () => ["", W, q], B = () => ["auto", ie, w], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], H = () => ["", "0", w], pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [ie, w];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ve],
      spacing: [W, q],
      blur: ["none", "", X, w],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", X, w],
      borderSpacing: A(),
      borderWidth: fe(),
      contrast: F(),
      grayscale: H(),
      hueRotate: F(),
      invert: H(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$r, q],
      inset: U(),
      margin: U(),
      opacity: F(),
      padding: A(),
      saturate: F(),
      scale: F(),
      sepia: H(),
      skew: F(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", w]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [X]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...G(), w]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: V()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": V()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": V()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [f]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [f]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [f]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [f]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [f]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [f]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [f]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [f]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [f]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", me, w]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", w]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", me, w]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ve]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", me, w]
        }, w]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ve]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [me, w]
        }, w]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", w]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", w]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...oe()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...oe(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...oe(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [N]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", w, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [w, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [w, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [X]
        }, X]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [w, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [w, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [w, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [w, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", X, q]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ve]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", w]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ie, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W, w]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", w]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", w]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", W, q]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", W, w]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", w]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...G(), Er]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", xr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: K()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [W, w]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [W, q]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: fe()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [W, q]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", X, Sr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ve]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", X, w]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [i]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [i]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [c]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [c]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [c]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", w]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", w]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", w]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [me, w]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", w]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", w]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [W, q, Pe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, uo = /* @__PURE__ */ fr(Ar);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yt = (...e) => e.filter((r, t, n) => !!r && n.indexOf(r) === t).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = o.forwardRef(
  ({
    color: e = "currentColor",
    size: r = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: s,
    iconNode: c,
    ...l
  }, d) => o.createElement(
    "svg",
    {
      ref: d,
      ...Nr,
      width: r,
      height: r,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(r) : t,
      className: yt("lucide", a),
      ...l
    },
    [
      ...c.map(([i, u]) => o.createElement(i, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = (e, r) => {
  const t = o.forwardRef(
    ({ className: n, ...a }, s) => o.createElement(Ir, {
      ref: s,
      iconNode: r,
      className: yt(`lucide-${Or(e)}`, n),
      ...a
    })
  );
  return t.displayName = `${e}`, t;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = T("ArrowLeftRight", [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = T("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = T("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = T("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = T("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = T("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = T("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = T("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = T("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = T("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = T("CirclePlus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = T("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = T("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = T("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = T("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = T("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = T("MoveDownLeft", [
  ["path", { d: "M11 19H5V13", key: "1akmht" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = T("MoveUpRight", [
  ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = T("RefreshCcw", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = T("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = T("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = T("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = T("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = T("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function $t(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (r = 0; r < e.length; r++) e[r] && (t = $t(e[r])) && (n && (n += " "), n += t);
  else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Tr() {
  for (var e, r, t = 0, n = ""; t < arguments.length; ) (e = arguments[t++]) && (r = $t(e)) && (n && (n += " "), n += r);
  return n;
}
const Ze = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Je = Tr, Lo = (e, r) => (t) => {
  var n;
  if ((r == null ? void 0 : r.variants) == null) return Je(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: a, defaultVariants: s } = r, c = Object.keys(a).map((i) => {
    const u = t == null ? void 0 : t[i], m = s == null ? void 0 : s[i];
    if (u === null) return null;
    const h = Ze(u) || Ze(m);
    return a[i][h];
  }), l = t && Object.entries(t).reduce((i, u) => {
    let [m, h] = u;
    return h === void 0 || (i[m] = h), i;
  }, {}), d = r == null || (n = r.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((i, u) => {
    let { class: m, className: h, ...b } = u;
    return Object.entries(b).every((x) => {
      let [f, v] = x;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...l
      }[f]) : {
        ...s,
        ...l
      }[f] === v;
    }) ? [
      ...i,
      m,
      h
    ] : i;
  }, []);
  return Je(e, c, d, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
function L() {
  return L = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, L.apply(null, arguments);
}
var Qe = 1, Dr = 0.9, Lr = 0.8, _r = 0.17, Me = 0.1, Ae = 0.999, Fr = 0.9999, zr = 0.99, jr = /[\\\/_+.#"@\[\(\{&]/, Ur = /[\\\/_+.#"@\[\(\{&]/g, Vr = /[\s-]/, wt = /[\s-]/g;
function Fe(e, r, t, n, a, s, c) {
  if (s === r.length) return a === e.length ? Qe : zr;
  var l = `${a},${s}`;
  if (c[l] !== void 0) return c[l];
  for (var d = n.charAt(s), i = t.indexOf(d, a), u = 0, m, h, b, x; i >= 0; ) m = Fe(e, r, t, n, i + 1, s + 1, c), m > u && (i === a ? m *= Qe : jr.test(e.charAt(i - 1)) ? (m *= Lr, b = e.slice(a, i - 1).match(Ur), b && a > 0 && (m *= Math.pow(Ae, b.length))) : Vr.test(e.charAt(i - 1)) ? (m *= Dr, x = e.slice(a, i - 1).match(wt), x && a > 0 && (m *= Math.pow(Ae, x.length))) : (m *= _r, a > 0 && (m *= Math.pow(Ae, i - a))), e.charAt(i) !== r.charAt(s) && (m *= Fr)), (m < Me && t.charAt(i - 1) === n.charAt(s + 1) || n.charAt(s + 1) === n.charAt(s) && t.charAt(i - 1) !== n.charAt(s)) && (h = Fe(e, r, t, n, i + 1, s + 2, c), h * Me > m && (m = h * Me)), m > u && (u = m), i = t.indexOf(d, i + 1);
  return c[l] = u, u;
}
function et(e) {
  return e.toLowerCase().replace(wt, " ");
}
function Br(e, r, t) {
  return e = t && t.length > 0 ? `${e + " " + t.join(" ")}` : e, Fe(e, r, et(e), et(r), 0, 0, {});
}
function ue(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), t === !1 || !a.defaultPrevented) return r == null ? void 0 : r(a);
  };
}
function Wr(e, r) {
  typeof e == "function" ? e(r) : e != null && (e.current = r);
}
function xt(...e) {
  return (r) => e.forEach(
    (t) => Wr(t, r)
  );
}
function ye(...e) {
  return o.useCallback(xt(...e), e);
}
function Gr(e, r = []) {
  let t = [];
  function n(s, c) {
    const l = /* @__PURE__ */ o.createContext(c), d = t.length;
    t = [
      ...t,
      c
    ];
    function i(m) {
      const { scope: h, children: b, ...x } = m, f = (h == null ? void 0 : h[e][d]) || l, v = o.useMemo(
        () => x,
        Object.values(x)
      );
      return /* @__PURE__ */ o.createElement(f.Provider, {
        value: v
      }, b);
    }
    function u(m, h) {
      const b = (h == null ? void 0 : h[e][d]) || l, x = o.useContext(b);
      if (x) return x;
      if (c !== void 0) return c;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return i.displayName = s + "Provider", [
      i,
      u
    ];
  }
  const a = () => {
    const s = t.map((c) => /* @__PURE__ */ o.createContext(c));
    return function(l) {
      const d = (l == null ? void 0 : l[e]) || s;
      return o.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...l,
            [e]: d
          }
        }),
        [
          l,
          d
        ]
      );
    };
  };
  return a.scopeName = e, [
    n,
    Kr(a, ...r)
  ];
}
function Kr(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const t = () => {
    const n = e.map(
      (a) => ({
        useScope: a(),
        scopeName: a.scopeName
      })
    );
    return function(s) {
      const c = n.reduce((l, { useScope: d, scopeName: i }) => {
        const m = d(s)[`__scope${i}`];
        return {
          ...l,
          ...m
        };
      }, {});
      return o.useMemo(
        () => ({
          [`__scope${r.scopeName}`]: c
        }),
        [
          c
        ]
      );
    };
  };
  return t.scopeName = r.scopeName, t;
}
const ze = globalThis != null && globalThis.document ? o.useLayoutEffect : () => {
}, Hr = Vt.useId || (() => {
});
let qr = 0;
function Oe(e) {
  const [r, t] = o.useState(Hr());
  return ze(() => {
    e || t(
      (n) => n ?? String(qr++)
    );
  }, [
    e
  ]), e || (r ? `radix-${r}` : "");
}
function Q(e) {
  const r = o.useRef(e);
  return o.useEffect(() => {
    r.current = e;
  }), o.useMemo(
    () => (...t) => {
      var n;
      return (n = r.current) === null || n === void 0 ? void 0 : n.call(r, ...t);
    },
    []
  );
}
function Xr({ prop: e, defaultProp: r, onChange: t = () => {
} }) {
  const [n, a] = Yr({
    defaultProp: r,
    onChange: t
  }), s = e !== void 0, c = s ? e : n, l = Q(t), d = o.useCallback((i) => {
    if (s) {
      const m = typeof i == "function" ? i(e) : i;
      m !== e && l(m);
    } else a(i);
  }, [
    s,
    e,
    a,
    l
  ]);
  return [
    c,
    d
  ];
}
function Yr({ defaultProp: e, onChange: r }) {
  const t = o.useState(e), [n] = t, a = o.useRef(n), s = Q(r);
  return o.useEffect(() => {
    a.current !== n && (s(n), a.current = n);
  }, [
    n,
    a,
    s
  ]), t;
}
const Ke = /* @__PURE__ */ o.forwardRef((e, r) => {
  const { children: t, ...n } = e, a = o.Children.toArray(t), s = a.find(Jr);
  if (s) {
    const c = s.props.children, l = a.map((d) => d === s ? o.Children.count(c) > 1 ? o.Children.only(null) : /* @__PURE__ */ o.isValidElement(c) ? c.props.children : null : d);
    return /* @__PURE__ */ o.createElement(je, L({}, n, {
      ref: r
    }), /* @__PURE__ */ o.isValidElement(c) ? /* @__PURE__ */ o.cloneElement(c, void 0, l) : null);
  }
  return /* @__PURE__ */ o.createElement(je, L({}, n, {
    ref: r
  }), t);
});
Ke.displayName = "Slot";
const je = /* @__PURE__ */ o.forwardRef((e, r) => {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ o.isValidElement(t) ? /* @__PURE__ */ o.cloneElement(t, {
    ...Qr(n, t.props),
    ref: r ? xt(r, t.ref) : t.ref
  }) : o.Children.count(t) > 1 ? o.Children.only(null) : null;
});
je.displayName = "SlotClone";
const Zr = ({ children: e }) => /* @__PURE__ */ o.createElement(o.Fragment, null, e);
function Jr(e) {
  return /* @__PURE__ */ o.isValidElement(e) && e.type === Zr;
}
function Qr(e, r) {
  const t = {
    ...r
  };
  for (const n in r) {
    const a = e[n], s = r[n];
    /^on[A-Z]/.test(n) ? a && s ? t[n] = (...l) => {
      s(...l), a(...l);
    } : a && (t[n] = a) : n === "style" ? t[n] = {
      ...a,
      ...s
    } : n === "className" && (t[n] = [
      a,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...t
  };
}
const en = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], j = en.reduce((e, r) => {
  const t = /* @__PURE__ */ o.forwardRef((n, a) => {
    const { asChild: s, ...c } = n, l = s ? Ke : r;
    return o.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ o.createElement(l, L({}, c, {
      ref: a
    }));
  });
  return t.displayName = `Primitive.${r}`, {
    ...e,
    [r]: t
  };
}, {});
function tn(e, r) {
  e && ft.flushSync(
    () => e.dispatchEvent(r)
  );
}
function rn(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = Q(e);
  o.useEffect(() => {
    const n = (a) => {
      a.key === "Escape" && t(a);
    };
    return r.addEventListener("keydown", n), () => r.removeEventListener("keydown", n);
  }, [
    t,
    r
  ]);
}
const Ue = "dismissableLayer.update", nn = "dismissableLayer.pointerDownOutside", on = "dismissableLayer.focusOutside";
let tt;
const an = /* @__PURE__ */ o.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), sn = /* @__PURE__ */ o.forwardRef((e, r) => {
  var t;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: a, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: l, onDismiss: d, ...i } = e, u = o.useContext(an), [m, h] = o.useState(null), b = (t = m == null ? void 0 : m.ownerDocument) !== null && t !== void 0 ? t : globalThis == null ? void 0 : globalThis.document, [, x] = o.useState({}), f = ye(
    r,
    (P) => h(P)
  ), v = Array.from(u.layers), [y] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), E = v.indexOf(y), k = m ? v.indexOf(m) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, S = k >= E, M = ln((P) => {
    const _ = P.target, V = [
      ...u.branches
    ].some(
      (U) => U.contains(_)
    );
    !S || V || (s == null || s(P), l == null || l(P), P.defaultPrevented || d == null || d());
  }, b), N = cn((P) => {
    const _ = P.target;
    [
      ...u.branches
    ].some(
      (U) => U.contains(_)
    ) || (c == null || c(P), l == null || l(P), P.defaultPrevented || d == null || d());
  }, b);
  return rn((P) => {
    k === u.layers.size - 1 && (a == null || a(P), !P.defaultPrevented && d && (P.preventDefault(), d()));
  }, b), o.useEffect(() => {
    if (m)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (tt = b.body.style.pointerEvents, b.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(m)), u.layers.add(m), rt(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = tt);
      };
  }, [
    m,
    b,
    n,
    u
  ]), o.useEffect(() => () => {
    m && (u.layers.delete(m), u.layersWithOutsidePointerEventsDisabled.delete(m), rt());
  }, [
    m,
    u
  ]), o.useEffect(() => {
    const P = () => x({});
    return document.addEventListener(Ue, P), () => document.removeEventListener(Ue, P);
  }, []), /* @__PURE__ */ o.createElement(j.div, L({}, i, {
    ref: f,
    style: {
      pointerEvents: C ? S ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ue(e.onFocusCapture, N.onFocusCapture),
    onBlurCapture: ue(e.onBlurCapture, N.onBlurCapture),
    onPointerDownCapture: ue(e.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function ln(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = Q(e), n = o.useRef(!1), a = o.useRef(() => {
  });
  return o.useEffect(() => {
    const s = (l) => {
      if (l.target && !n.current) {
        let i = function() {
          Et(nn, t, d, {
            discrete: !0
          });
        };
        const d = {
          originalEvent: l
        };
        l.pointerType === "touch" ? (r.removeEventListener("click", a.current), a.current = i, r.addEventListener("click", a.current, {
          once: !0
        })) : i();
      } else
        r.removeEventListener("click", a.current);
      n.current = !1;
    }, c = window.setTimeout(() => {
      r.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(c), r.removeEventListener("pointerdown", s), r.removeEventListener("click", a.current);
    };
  }, [
    r,
    t
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function cn(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = Q(e), n = o.useRef(!1);
  return o.useEffect(() => {
    const a = (s) => {
      s.target && !n.current && Et(on, t, {
        originalEvent: s
      }, {
        discrete: !1
      });
    };
    return r.addEventListener("focusin", a), () => r.removeEventListener("focusin", a);
  }, [
    r,
    t
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function rt() {
  const e = new CustomEvent(Ue);
  document.dispatchEvent(e);
}
function Et(e, r, t, { discrete: n }) {
  const a = t.originalEvent.target, s = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: t
  });
  r && a.addEventListener(e, r, {
    once: !0
  }), n ? tn(a, s) : a.dispatchEvent(s);
}
const Ne = "focusScope.autoFocusOnMount", Ie = "focusScope.autoFocusOnUnmount", nt = {
  bubbles: !1,
  cancelable: !0
}, un = /* @__PURE__ */ o.forwardRef((e, r) => {
  const { loop: t = !1, trapped: n = !1, onMountAutoFocus: a, onUnmountAutoFocus: s, ...c } = e, [l, d] = o.useState(null), i = Q(a), u = Q(s), m = o.useRef(null), h = ye(
    r,
    (f) => d(f)
  ), b = o.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  o.useEffect(() => {
    if (n) {
      let f = function(k) {
        if (b.paused || !l) return;
        const C = k.target;
        l.contains(C) ? m.current = C : Y(m.current, {
          select: !0
        });
      }, v = function(k) {
        if (b.paused || !l) return;
        const C = k.relatedTarget;
        C !== null && (l.contains(C) || Y(m.current, {
          select: !0
        }));
      }, y = function(k) {
        if (document.activeElement === document.body)
          for (const S of k) S.removedNodes.length > 0 && Y(l);
      };
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const E = new MutationObserver(y);
      return l && E.observe(l, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), E.disconnect();
      };
    }
  }, [
    n,
    l,
    b.paused
  ]), o.useEffect(() => {
    if (l) {
      at.add(b);
      const f = document.activeElement;
      if (!l.contains(f)) {
        const y = new CustomEvent(Ne, nt);
        l.addEventListener(Ne, i), l.dispatchEvent(y), y.defaultPrevented || (dn(bn(Ct(l)), {
          select: !0
        }), document.activeElement === f && Y(l));
      }
      return () => {
        l.removeEventListener(Ne, i), setTimeout(() => {
          const y = new CustomEvent(Ie, nt);
          l.addEventListener(Ie, u), l.dispatchEvent(y), y.defaultPrevented || Y(f ?? document.body, {
            select: !0
          }), l.removeEventListener(Ie, u), at.remove(b);
        }, 0);
      };
    }
  }, [
    l,
    i,
    u,
    b
  ]);
  const x = o.useCallback((f) => {
    if (!t && !n || b.paused) return;
    const v = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, y = document.activeElement;
    if (v && y) {
      const E = f.currentTarget, [k, C] = fn(E);
      k && C ? !f.shiftKey && y === C ? (f.preventDefault(), t && Y(k, {
        select: !0
      })) : f.shiftKey && y === k && (f.preventDefault(), t && Y(C, {
        select: !0
      })) : y === E && f.preventDefault();
    }
  }, [
    t,
    n,
    b.paused
  ]);
  return /* @__PURE__ */ o.createElement(j.div, L({
    tabIndex: -1
  }, c, {
    ref: h,
    onKeyDown: x
  }));
});
function dn(e, { select: r = !1 } = {}) {
  const t = document.activeElement;
  for (const n of e)
    if (Y(n, {
      select: r
    }), document.activeElement !== t) return;
}
function fn(e) {
  const r = Ct(e), t = ot(r, e), n = ot(r.reverse(), e);
  return [
    t,
    n
  ];
}
function Ct(e) {
  const r = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) r.push(t.currentNode);
  return r;
}
function ot(e, r) {
  for (const t of e)
    if (!pn(t, {
      upTo: r
    })) return t;
}
function pn(e, { upTo: r }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (r !== void 0 && e === r) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function mn(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Y(e, { select: r = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== t && mn(e) && r && e.select();
  }
}
const at = vn();
function vn() {
  let e = [];
  return {
    add(r) {
      const t = e[0];
      r !== t && (t == null || t.pause()), e = st(e, r), e.unshift(r);
    },
    remove(r) {
      var t;
      e = st(e, r), (t = e[0]) === null || t === void 0 || t.resume();
    }
  };
}
function st(e, r) {
  const t = [
    ...e
  ], n = t.indexOf(r);
  return n !== -1 && t.splice(n, 1), t;
}
function bn(e) {
  return e.filter(
    (r) => r.tagName !== "A"
  );
}
const hn = /* @__PURE__ */ o.forwardRef((e, r) => {
  var t;
  const { container: n = globalThis == null || (t = globalThis.document) === null || t === void 0 ? void 0 : t.body, ...a } = e;
  return n ? /* @__PURE__ */ Bt.createPortal(/* @__PURE__ */ o.createElement(j.div, L({}, a, {
    ref: r
  })), n) : null;
});
function gn(e, r) {
  return o.useReducer((t, n) => {
    const a = r[t][n];
    return a ?? t;
  }, e);
}
const ke = (e) => {
  const { present: r, children: t } = e, n = yn(r), a = typeof t == "function" ? t({
    present: n.isPresent
  }) : o.Children.only(t), s = ye(n.ref, a.ref);
  return typeof t == "function" || n.isPresent ? /* @__PURE__ */ o.cloneElement(a, {
    ref: s
  }) : null;
};
ke.displayName = "Presence";
function yn(e) {
  const [r, t] = o.useState(), n = o.useRef({}), a = o.useRef(e), s = o.useRef("none"), c = e ? "mounted" : "unmounted", [l, d] = gn(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return o.useEffect(() => {
    const i = xe(n.current);
    s.current = l === "mounted" ? i : "none";
  }, [
    l
  ]), ze(() => {
    const i = n.current, u = a.current;
    if (u !== e) {
      const h = s.current, b = xe(i);
      e ? d("MOUNT") : b === "none" || (i == null ? void 0 : i.display) === "none" ? d("UNMOUNT") : d(u && h !== b ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    d
  ]), ze(() => {
    if (r) {
      const i = (m) => {
        const b = xe(n.current).includes(m.animationName);
        m.target === r && b && ft.flushSync(
          () => d("ANIMATION_END")
        );
      }, u = (m) => {
        m.target === r && (s.current = xe(n.current));
      };
      return r.addEventListener("animationstart", u), r.addEventListener("animationcancel", i), r.addEventListener("animationend", i), () => {
        r.removeEventListener("animationstart", u), r.removeEventListener("animationcancel", i), r.removeEventListener("animationend", i);
      };
    } else
      d("ANIMATION_END");
  }, [
    r,
    d
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(l),
    ref: o.useCallback((i) => {
      i && (n.current = getComputedStyle(i)), t(i);
    }, [])
  };
}
function xe(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Te = 0;
function $n() {
  o.useEffect(() => {
    var e, r;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = t[0]) !== null && e !== void 0 ? e : lt()), document.body.insertAdjacentElement("beforeend", (r = t[1]) !== null && r !== void 0 ? r : lt()), Te++, () => {
      Te === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), Te--;
    };
  }, []);
}
function lt() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var kt = Wt(), De = function() {
}, Se = o.forwardRef(function(e, r) {
  var t = o.useRef(null), n = o.useState({
    onScrollCapture: De,
    onWheelCapture: De,
    onTouchMoveCapture: De
  }), a = n[0], s = n[1], c = e.forwardProps, l = e.children, d = e.className, i = e.removeScrollBar, u = e.enabled, m = e.shards, h = e.sideCar, b = e.noIsolation, x = e.inert, f = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, E = Gt(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), k = h, C = Kt([t, r]), S = le(le({}, E), a);
  return o.createElement(
    o.Fragment,
    null,
    u && o.createElement(k, { sideCar: kt, removeScrollBar: i, shards: m, noIsolation: b, inert: x, setCallbacks: s, allowPinchZoom: !!f, lockRef: t }),
    c ? o.cloneElement(o.Children.only(l), le(le({}, S), { ref: C })) : o.createElement(y, le({}, S, { className: d, ref: C }), l)
  );
});
Se.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Se.classNames = {
  fullWidth: Ht,
  zeroRight: qt
};
var Ve = !1;
if (typeof window < "u")
  try {
    var Ee = Object.defineProperty({}, "passive", {
      get: function() {
        return Ve = !0, !0;
      }
    });
    window.addEventListener("test", Ee, Ee), window.removeEventListener("test", Ee, Ee);
  } catch {
    Ve = !1;
  }
var ae = Ve ? { passive: !1 } : !1, wn = function(e) {
  return e.tagName === "TEXTAREA";
}, St = function(e, r) {
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[r] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !wn(e) && t[r] === "visible")
  );
}, xn = function(e) {
  return St(e, "overflowY");
}, En = function(e) {
  return St(e, "overflowX");
}, ct = function(e, r) {
  var t = r;
  do {
    typeof ShadowRoot < "u" && t instanceof ShadowRoot && (t = t.host);
    var n = Rt(e, t);
    if (n) {
      var a = Pt(e, t), s = a[1], c = a[2];
      if (s > c)
        return !0;
    }
    t = t.parentNode;
  } while (t && t !== document.body);
  return !1;
}, Cn = function(e) {
  var r = e.scrollTop, t = e.scrollHeight, n = e.clientHeight;
  return [
    r,
    t,
    n
  ];
}, kn = function(e) {
  var r = e.scrollLeft, t = e.scrollWidth, n = e.clientWidth;
  return [
    r,
    t,
    n
  ];
}, Rt = function(e, r) {
  return e === "v" ? xn(r) : En(r);
}, Pt = function(e, r) {
  return e === "v" ? Cn(r) : kn(r);
}, Sn = function(e, r) {
  return e === "h" && r === "rtl" ? -1 : 1;
}, Rn = function(e, r, t, n, a) {
  var s = Sn(e, window.getComputedStyle(r).direction), c = s * n, l = t.target, d = r.contains(l), i = !1, u = c > 0, m = 0, h = 0;
  do {
    var b = Pt(e, l), x = b[0], f = b[1], v = b[2], y = f - v - s * x;
    (x || y) && Rt(e, l) && (m += y, h += x), l = l.parentNode;
  } while (
    // portaled content
    !d && l !== document.body || // self content
    d && (r.contains(l) || r === l)
  );
  return (u && (m === 0 || !a) || !u && (h === 0 || !a)) && (i = !0), i;
}, Ce = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, it = function(e) {
  return [e.deltaX, e.deltaY];
}, ut = function(e) {
  return e && "current" in e ? e.current : e;
}, Pn = function(e, r) {
  return e[0] === r[0] && e[1] === r[1];
}, Mn = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, An = 0, se = [];
function On(e) {
  var r = o.useRef([]), t = o.useRef([0, 0]), n = o.useRef(), a = o.useState(An++)[0], s = o.useState(function() {
    return Xt();
  })[0], c = o.useRef(e);
  o.useEffect(function() {
    c.current = e;
  }, [e]), o.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var f = Yt([e.lockRef.current], (e.shards || []).map(ut), !0).filter(Boolean);
      return f.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), f.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = o.useCallback(function(f, v) {
    if ("touches" in f && f.touches.length === 2)
      return !c.current.allowPinchZoom;
    var y = Ce(f), E = t.current, k = "deltaX" in f ? f.deltaX : E[0] - y[0], C = "deltaY" in f ? f.deltaY : E[1] - y[1], S, M = f.target, N = Math.abs(k) > Math.abs(C) ? "h" : "v";
    if ("touches" in f && N === "h" && M.type === "range")
      return !1;
    var P = ct(N, M);
    if (!P)
      return !0;
    if (P ? S = N : (S = N === "v" ? "h" : "v", P = ct(N, M)), !P)
      return !1;
    if (!n.current && "changedTouches" in f && (k || C) && (n.current = S), !S)
      return !0;
    var _ = n.current || S;
    return Rn(_, v, f, _ === "h" ? k : C, !0);
  }, []), d = o.useCallback(function(f) {
    var v = f;
    if (!(!se.length || se[se.length - 1] !== s)) {
      var y = "deltaY" in v ? it(v) : Ce(v), E = r.current.filter(function(S) {
        return S.name === v.type && S.target === v.target && Pn(S.delta, y);
      })[0];
      if (E && E.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!E) {
        var k = (c.current.shards || []).map(ut).filter(Boolean).filter(function(S) {
          return S.contains(v.target);
        }), C = k.length > 0 ? l(v, k[0]) : !c.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), i = o.useCallback(function(f, v, y, E) {
    var k = { name: f, delta: v, target: y, should: E };
    r.current.push(k), setTimeout(function() {
      r.current = r.current.filter(function(C) {
        return C !== k;
      });
    }, 1);
  }, []), u = o.useCallback(function(f) {
    t.current = Ce(f), n.current = void 0;
  }, []), m = o.useCallback(function(f) {
    i(f.type, it(f), f.target, l(f, e.lockRef.current));
  }, []), h = o.useCallback(function(f) {
    i(f.type, Ce(f), f.target, l(f, e.lockRef.current));
  }, []);
  o.useEffect(function() {
    return se.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", d, ae), document.addEventListener("touchmove", d, ae), document.addEventListener("touchstart", u, ae), function() {
      se = se.filter(function(f) {
        return f !== s;
      }), document.removeEventListener("wheel", d, ae), document.removeEventListener("touchmove", d, ae), document.removeEventListener("touchstart", u, ae);
    };
  }, []);
  var b = e.removeScrollBar, x = e.inert;
  return o.createElement(
    o.Fragment,
    null,
    x ? o.createElement(s, { styles: Mn(a) }) : null,
    b ? o.createElement(Zt, { gapMode: "margin" }) : null
  );
}
const Nn = Jt(kt, On);
var Mt = o.forwardRef(function(e, r) {
  return o.createElement(Se, le({}, e, { ref: r, sideCar: Nn }));
});
Mt.classNames = Se.classNames;
const At = "Dialog", [Ot, _o] = Gr(At), [In, re] = Ot(At), Tn = (e) => {
  const { __scopeDialog: r, children: t, open: n, defaultOpen: a, onOpenChange: s, modal: c = !0 } = e, l = o.useRef(null), d = o.useRef(null), [i = !1, u] = Xr({
    prop: n,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ o.createElement(In, {
    scope: r,
    triggerRef: l,
    contentRef: d,
    contentId: Oe(),
    titleId: Oe(),
    descriptionId: Oe(),
    open: i,
    onOpenChange: u,
    onOpenToggle: o.useCallback(
      () => u(
        (m) => !m
      ),
      [
        u
      ]
    ),
    modal: c
  }, t);
}, Nt = "DialogPortal", [Dn, It] = Ot(Nt, {
  forceMount: void 0
}), Ln = (e) => {
  const { __scopeDialog: r, forceMount: t, children: n, container: a } = e, s = re(Nt, r);
  return /* @__PURE__ */ o.createElement(Dn, {
    scope: r,
    forceMount: t
  }, o.Children.map(
    n,
    (c) => /* @__PURE__ */ o.createElement(ke, {
      present: t || s.open
    }, /* @__PURE__ */ o.createElement(hn, {
      asChild: !0,
      container: a
    }, c))
  ));
}, Be = "DialogOverlay", _n = /* @__PURE__ */ o.forwardRef((e, r) => {
  const t = It(Be, e.__scopeDialog), { forceMount: n = t.forceMount, ...a } = e, s = re(Be, e.__scopeDialog);
  return s.modal ? /* @__PURE__ */ o.createElement(ke, {
    present: n || s.open
  }, /* @__PURE__ */ o.createElement(Fn, L({}, a, {
    ref: r
  }))) : null;
}), Fn = /* @__PURE__ */ o.forwardRef((e, r) => {
  const { __scopeDialog: t, ...n } = e, a = re(Be, t);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ o.createElement(Mt, {
      as: Ke,
      allowPinchZoom: !0,
      shards: [
        a.contentRef
      ]
    }, /* @__PURE__ */ o.createElement(j.div, L({
      "data-state": Dt(a.open)
    }, n, {
      ref: r,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
}), he = "DialogContent", zn = /* @__PURE__ */ o.forwardRef((e, r) => {
  const t = It(he, e.__scopeDialog), { forceMount: n = t.forceMount, ...a } = e, s = re(he, e.__scopeDialog);
  return /* @__PURE__ */ o.createElement(ke, {
    present: n || s.open
  }, s.modal ? /* @__PURE__ */ o.createElement(jn, L({}, a, {
    ref: r
  })) : /* @__PURE__ */ o.createElement(Un, L({}, a, {
    ref: r
  })));
}), jn = /* @__PURE__ */ o.forwardRef((e, r) => {
  const t = re(he, e.__scopeDialog), n = o.useRef(null), a = ye(r, t.contentRef, n);
  return o.useEffect(() => {
    const s = n.current;
    if (s) return Qt(s);
  }, []), /* @__PURE__ */ o.createElement(Tt, L({}, e, {
    ref: a,
    trapFocus: t.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ue(e.onCloseAutoFocus, (s) => {
      var c;
      s.preventDefault(), (c = t.triggerRef.current) === null || c === void 0 || c.focus();
    }),
    onPointerDownOutside: ue(e.onPointerDownOutside, (s) => {
      const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
      (c.button === 2 || l) && s.preventDefault();
    }),
    onFocusOutside: ue(
      e.onFocusOutside,
      (s) => s.preventDefault()
    )
  }));
}), Un = /* @__PURE__ */ o.forwardRef((e, r) => {
  const t = re(he, e.__scopeDialog), n = o.useRef(!1), a = o.useRef(!1);
  return /* @__PURE__ */ o.createElement(Tt, L({}, e, {
    ref: r,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (s) => {
      var c;
      if ((c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, s), !s.defaultPrevented) {
        var l;
        n.current || (l = t.triggerRef.current) === null || l === void 0 || l.focus(), s.preventDefault();
      }
      n.current = !1, a.current = !1;
    },
    onInteractOutside: (s) => {
      var c, l;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (a.current = !0));
      const d = s.target;
      ((l = t.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(d)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && a.current && s.preventDefault();
    }
  }));
}), Tt = /* @__PURE__ */ o.forwardRef((e, r) => {
  const { __scopeDialog: t, trapFocus: n, onOpenAutoFocus: a, onCloseAutoFocus: s, ...c } = e, l = re(he, t), d = o.useRef(null), i = ye(r, d);
  return $n(), /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(un, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: a,
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ o.createElement(sn, L({
    role: "dialog",
    id: l.contentId,
    "aria-describedby": l.descriptionId,
    "aria-labelledby": l.titleId,
    "data-state": Dt(l.open)
  }, c, {
    ref: i,
    onDismiss: () => l.onOpenChange(!1)
  }))), !1);
});
function Dt(e) {
  return e ? "open" : "closed";
}
const Vn = Tn, Bn = Ln, Wn = _n, Gn = zn;
var be = '[cmdk-group=""]', Le = '[cmdk-group-items=""]', Kn = '[cmdk-group-heading=""]', He = '[cmdk-item=""]', dt = `${He}:not([aria-disabled="true"])`, We = "cmdk-item-select", J = "data-value", Hn = (e, r, t) => Br(e, r, t), Lt = o.createContext(void 0), $e = () => o.useContext(Lt), _t = o.createContext(void 0), qe = () => o.useContext(_t), Ft = o.createContext(void 0), zt = o.forwardRef((e, r) => {
  let t = ce(() => {
    var p, $;
    return { search: "", value: ($ = (p = e.value) != null ? p : e.defaultValue) != null ? $ : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = ce(() => /* @__PURE__ */ new Set()), a = ce(() => /* @__PURE__ */ new Map()), s = ce(() => /* @__PURE__ */ new Map()), c = ce(() => /* @__PURE__ */ new Set()), l = jt(e), { label: d, children: i, value: u, onValueChange: m, filter: h, shouldFilter: b, loop: x, disablePointerSelection: f = !1, vimBindings: v = !0, ...y } = e, E = o.useId(), k = o.useId(), C = o.useId(), S = o.useRef(null), M = oo();
  ee(() => {
    if (u !== void 0) {
      let p = u.trim();
      t.current.value = p, N.emit();
    }
  }, [u]), ee(() => {
    M(6, fe);
  }, []);
  let N = o.useMemo(() => ({ subscribe: (p) => (c.current.add(p), () => c.current.delete(p)), snapshot: () => t.current, setState: (p, $, R) => {
    var g, O, D;
    if (!Object.is(t.current[p], $)) {
      if (t.current[p] = $, p === "search") A(), V(), M(1, U);
      else if (p === "value" && (R || M(5, fe), ((g = l.current) == null ? void 0 : g.value) !== void 0)) {
        let z = $ ?? "";
        (D = (O = l.current).onValueChange) == null || D.call(O, z);
        return;
      }
      N.emit();
    }
  }, emit: () => {
    c.current.forEach((p) => p());
  } }), []), P = o.useMemo(() => ({ value: (p, $, R) => {
    var g;
    $ !== ((g = s.current.get(p)) == null ? void 0 : g.value) && (s.current.set(p, { value: $, keywords: R }), t.current.filtered.items.set(p, _($, R)), M(2, () => {
      V(), N.emit();
    }));
  }, item: (p, $) => (n.current.add(p), $ && (a.current.has($) ? a.current.get($).add(p) : a.current.set($, /* @__PURE__ */ new Set([p]))), M(3, () => {
    A(), V(), t.current.value || U(), N.emit();
  }), () => {
    s.current.delete(p), n.current.delete(p), t.current.filtered.items.delete(p);
    let R = B();
    M(4, () => {
      A(), (R == null ? void 0 : R.getAttribute("id")) === p && U(), N.emit();
    });
  }), group: (p) => (a.current.has(p) || a.current.set(p, /* @__PURE__ */ new Set()), () => {
    s.current.delete(p), a.current.delete(p);
  }), filter: () => l.current.shouldFilter, label: d || e["aria-label"], disablePointerSelection: f, listId: E, inputId: C, labelId: k, listInnerRef: S }), []);
  function _(p, $) {
    var R, g;
    let O = (g = (R = l.current) == null ? void 0 : R.filter) != null ? g : Hn;
    return p ? O(p, t.current.search, $) : 0;
  }
  function V() {
    if (!t.current.search || l.current.shouldFilter === !1) return;
    let p = t.current.filtered.items, $ = [];
    t.current.filtered.groups.forEach((g) => {
      let O = a.current.get(g), D = 0;
      O.forEach((z) => {
        let Z = p.get(z);
        D = Math.max(Z, D);
      }), $.push([g, D]);
    });
    let R = S.current;
    G().sort((g, O) => {
      var D, z;
      let Z = g.getAttribute("id"), we = O.getAttribute("id");
      return ((D = p.get(we)) != null ? D : 0) - ((z = p.get(Z)) != null ? z : 0);
    }).forEach((g) => {
      let O = g.closest(Le);
      O ? O.appendChild(g.parentElement === O ? g : g.closest(`${Le} > *`)) : R.appendChild(g.parentElement === R ? g : g.closest(`${Le} > *`));
    }), $.sort((g, O) => O[1] - g[1]).forEach((g) => {
      let O = S.current.querySelector(`${be}[${J}="${encodeURIComponent(g[0])}"]`);
      O == null || O.parentElement.appendChild(O);
    });
  }
  function U() {
    let p = G().find((R) => R.getAttribute("aria-disabled") !== "true"), $ = p == null ? void 0 : p.getAttribute(J);
    N.setState("value", $ || void 0);
  }
  function A() {
    var p, $, R, g;
    if (!t.current.search || l.current.shouldFilter === !1) {
      t.current.filtered.count = n.current.size;
      return;
    }
    t.current.filtered.groups = /* @__PURE__ */ new Set();
    let O = 0;
    for (let D of n.current) {
      let z = ($ = (p = s.current.get(D)) == null ? void 0 : p.value) != null ? $ : "", Z = (g = (R = s.current.get(D)) == null ? void 0 : R.keywords) != null ? g : [], we = _(z, Z);
      t.current.filtered.items.set(D, we), we > 0 && O++;
    }
    for (let [D, z] of a.current) for (let Z of z) if (t.current.filtered.items.get(Z) > 0) {
      t.current.filtered.groups.add(D);
      break;
    }
    t.current.filtered.count = O;
  }
  function fe() {
    var p, $, R;
    let g = B();
    g && (((p = g.parentElement) == null ? void 0 : p.firstChild) === g && ((R = ($ = g.closest(be)) == null ? void 0 : $.querySelector(Kn)) == null || R.scrollIntoView({ block: "nearest" })), g.scrollIntoView({ block: "nearest" }));
  }
  function B() {
    var p;
    return (p = S.current) == null ? void 0 : p.querySelector(`${He}[aria-selected="true"]`);
  }
  function G() {
    var p;
    return Array.from((p = S.current) == null ? void 0 : p.querySelectorAll(dt));
  }
  function K(p) {
    let $ = G()[p];
    $ && N.setState("value", $.getAttribute(J));
  }
  function ne(p) {
    var $;
    let R = B(), g = G(), O = g.findIndex((z) => z === R), D = g[O + p];
    ($ = l.current) != null && $.loop && (D = O + p < 0 ? g[g.length - 1] : O + p === g.length ? g[0] : g[O + p]), D && N.setState("value", D.getAttribute(J));
  }
  function oe(p) {
    let $ = B(), R = $ == null ? void 0 : $.closest(be), g;
    for (; R && !g; ) R = p > 0 ? ro(R, be) : no(R, be), g = R == null ? void 0 : R.querySelector(dt);
    g ? N.setState("value", g.getAttribute(J)) : ne(p);
  }
  let H = () => K(G().length - 1), pe = (p) => {
    p.preventDefault(), p.metaKey ? H() : p.altKey ? oe(1) : ne(1);
  }, F = (p) => {
    p.preventDefault(), p.metaKey ? K(0) : p.altKey ? oe(-1) : ne(-1);
  };
  return o.createElement(j.div, { ref: r, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (p) => {
    var $;
    if (($ = y.onKeyDown) == null || $.call(y, p), !p.defaultPrevented) switch (p.key) {
      case "n":
      case "j": {
        v && p.ctrlKey && pe(p);
        break;
      }
      case "ArrowDown": {
        pe(p);
        break;
      }
      case "p":
      case "k": {
        v && p.ctrlKey && F(p);
        break;
      }
      case "ArrowUp": {
        F(p);
        break;
      }
      case "Home": {
        p.preventDefault(), K(0);
        break;
      }
      case "End": {
        p.preventDefault(), H();
        break;
      }
      case "Enter":
        if (!p.nativeEvent.isComposing && p.keyCode !== 229) {
          p.preventDefault();
          let R = B();
          if (R) {
            let g = new Event(We);
            R.dispatchEvent(g);
          }
        }
    }
  } }, o.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: so }, d), Re(e, (p) => o.createElement(_t.Provider, { value: N }, o.createElement(Lt.Provider, { value: P }, p))));
}), qn = o.forwardRef((e, r) => {
  var t, n;
  let a = o.useId(), s = o.useRef(null), c = o.useContext(Ft), l = $e(), d = jt(e), i = (n = (t = d.current) == null ? void 0 : t.forceMount) != null ? n : c == null ? void 0 : c.forceMount;
  ee(() => {
    if (!i) return l.item(a, c == null ? void 0 : c.id);
  }, [i]);
  let u = Ut(a, s, [e.value, e.children, s], e.keywords), m = qe(), h = te((M) => M.value && M.value === u.current), b = te((M) => i || l.filter() === !1 ? !0 : M.search ? M.filtered.items.get(a) > 0 : !0);
  o.useEffect(() => {
    let M = s.current;
    if (!(!M || e.disabled)) return M.addEventListener(We, x), () => M.removeEventListener(We, x);
  }, [b, e.onSelect, e.disabled]);
  function x() {
    var M, N;
    f(), (N = (M = d.current).onSelect) == null || N.call(M, u.current);
  }
  function f() {
    m.setState("value", u.current, !0);
  }
  if (!b) return null;
  let { disabled: v, value: y, onSelect: E, forceMount: k, keywords: C, ...S } = e;
  return o.createElement(j.div, { ref: ge([s, r]), ...S, id: a, "cmdk-item": "", role: "option", "aria-disabled": !!v, "aria-selected": !!h, "data-disabled": !!v, "data-selected": !!h, onPointerMove: v || l.disablePointerSelection ? void 0 : f, onClick: v ? void 0 : x }, e.children);
}), Xn = o.forwardRef((e, r) => {
  let { heading: t, children: n, forceMount: a, ...s } = e, c = o.useId(), l = o.useRef(null), d = o.useRef(null), i = o.useId(), u = $e(), m = te((b) => a || u.filter() === !1 ? !0 : b.search ? b.filtered.groups.has(c) : !0);
  ee(() => u.group(c), []), Ut(c, l, [e.value, e.heading, d]);
  let h = o.useMemo(() => ({ id: c, forceMount: a }), [a]);
  return o.createElement(j.div, { ref: ge([l, r]), ...s, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, t && o.createElement("div", { ref: d, "cmdk-group-heading": "", "aria-hidden": !0, id: i }, t), Re(e, (b) => o.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": t ? i : void 0 }, o.createElement(Ft.Provider, { value: h }, b))));
}), Yn = o.forwardRef((e, r) => {
  let { alwaysRender: t, ...n } = e, a = o.useRef(null), s = te((c) => !c.search);
  return !t && !s ? null : o.createElement(j.div, { ref: ge([a, r]), ...n, "cmdk-separator": "", role: "separator" });
}), Zn = o.forwardRef((e, r) => {
  let { onValueChange: t, ...n } = e, a = e.value != null, s = qe(), c = te((u) => u.search), l = te((u) => u.value), d = $e(), i = o.useMemo(() => {
    var u;
    let m = (u = d.listInnerRef.current) == null ? void 0 : u.querySelector(`${He}[${J}="${encodeURIComponent(l)}"]`);
    return m == null ? void 0 : m.getAttribute("id");
  }, []);
  return o.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), o.createElement(j.input, { ref: r, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": d.listId, "aria-labelledby": d.labelId, "aria-activedescendant": i, id: d.inputId, type: "text", value: a ? e.value : c, onChange: (u) => {
    a || s.setState("search", u.target.value), t == null || t(u.target.value);
  } });
}), Jn = o.forwardRef((e, r) => {
  let { children: t, label: n = "Suggestions", ...a } = e, s = o.useRef(null), c = o.useRef(null), l = $e();
  return o.useEffect(() => {
    if (c.current && s.current) {
      let d = c.current, i = s.current, u, m = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let h = d.offsetHeight;
          i.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return m.observe(d), () => {
        cancelAnimationFrame(u), m.unobserve(d);
      };
    }
  }, []), o.createElement(j.div, { ref: ge([s, r]), ...a, "cmdk-list": "", role: "listbox", "aria-label": n, id: l.listId }, Re(e, (d) => o.createElement("div", { ref: ge([c, l.listInnerRef]), "cmdk-list-sizer": "" }, d)));
}), Qn = o.forwardRef((e, r) => {
  let { open: t, onOpenChange: n, overlayClassName: a, contentClassName: s, container: c, ...l } = e;
  return o.createElement(Vn, { open: t, onOpenChange: n }, o.createElement(Bn, { container: c }, o.createElement(Wn, { "cmdk-overlay": "", className: a }), o.createElement(Gn, { "aria-label": e.label, "cmdk-dialog": "", className: s }, o.createElement(zt, { ref: r, ...l }))));
}), eo = o.forwardRef((e, r) => te((t) => t.filtered.count === 0) ? o.createElement(j.div, { ref: r, ...e, "cmdk-empty": "", role: "presentation" }) : null), to = o.forwardRef((e, r) => {
  let { progress: t, children: n, label: a = "Loading...", ...s } = e;
  return o.createElement(j.div, { ref: r, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": t, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": a }, Re(e, (c) => o.createElement("div", { "aria-hidden": !0 }, c)));
}), Fo = Object.assign(zt, { List: Jn, Item: qn, Input: Zn, Group: Xn, Separator: Yn, Dialog: Qn, Empty: eo, Loading: to });
function ro(e, r) {
  let t = e.nextElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.nextElementSibling;
  }
}
function no(e, r) {
  let t = e.previousElementSibling;
  for (; t; ) {
    if (t.matches(r)) return t;
    t = t.previousElementSibling;
  }
}
function jt(e) {
  let r = o.useRef(e);
  return ee(() => {
    r.current = e;
  }), r;
}
var ee = typeof window > "u" ? o.useEffect : o.useLayoutEffect;
function ce(e) {
  let r = o.useRef();
  return r.current === void 0 && (r.current = e()), r;
}
function ge(e) {
  return (r) => {
    e.forEach((t) => {
      typeof t == "function" ? t(r) : t != null && (t.current = r);
    });
  };
}
function te(e) {
  let r = qe(), t = () => e(r.snapshot());
  return o.useSyncExternalStore(r.subscribe, t, t);
}
function Ut(e, r, t, n = []) {
  let a = o.useRef(), s = $e();
  return ee(() => {
    var c;
    let l = (() => {
      var i;
      for (let u of t) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (i = u.current.textContent) == null ? void 0 : i.trim() : a.current;
      }
    })(), d = n.map((i) => i.trim());
    s.value(e, l, d), (c = r.current) == null || c.setAttribute(J, l), a.current = l;
  }), a;
}
var oo = () => {
  let [e, r] = o.useState(), t = ce(() => /* @__PURE__ */ new Map());
  return ee(() => {
    t.current.forEach((n) => n()), t.current = /* @__PURE__ */ new Map();
  }, [e]), (n, a) => {
    t.current.set(n, a), r({});
  };
};
function ao(e) {
  let r = e.type;
  return typeof r == "function" ? r(e.props) : "render" in r ? r.render(e.props) : e;
}
function Re({ asChild: e, children: r }, t) {
  return e && o.isValidElement(r) ? o.cloneElement(ao(r), { ref: r.ref }, t(r.props.children)) : t(r);
}
var so = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
export {
  fo as A,
  Co as C,
  ko as E,
  Fo as H,
  So as I,
  Ro as L,
  Mo as M,
  Ao as R,
  Io as S,
  To as T,
  Do as X,
  L as _,
  Lo as a,
  bo as b,
  io as c,
  po as d,
  Eo as e,
  wo as f,
  yo as g,
  mo as h,
  Po as i,
  vo as j,
  ho as k,
  xo as l,
  Oo as m,
  No as n,
  go as o,
  $o as p,
  uo as t
};
