import "./vendor-walletconnect-CNbnIvIA.js";
import "./vendor-react-DG1r0zWq.js";
const ga = "1.0.6";
let se = class rr extends Error {
  constructor(e, n = {}) {
    var i;
    const r = n.cause instanceof rr ? n.cause.details : (i = n.cause) != null && i.message ? n.cause.message : n.details, s = n.cause instanceof rr && n.cause.docsPath || n.docsPath, o = [
      e || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [`Docs: https://abitype.dev${s}`] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: abitype@${ga}`
    ].join(`
`);
    super(o), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiTypeError"
    }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = e;
  }
};
function Le(t, e) {
  const n = t.exec(e);
  return n == null ? void 0 : n.groups;
}
const bo = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, mo = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, go = /^\(.+?\).*?$/, As = /^tuple(?<array>(\[(\d*)\])*)$/;
function sr(t) {
  let e = t.type;
  if (As.test(t.type) && "components" in t) {
    e = "(";
    const n = t.components.length;
    for (let s = 0; s < n; s++) {
      const o = t.components[s];
      e += sr(o), s < n - 1 && (e += ", ");
    }
    const r = Le(As, t.type);
    return e += `)${(r == null ? void 0 : r.array) ?? ""}`, sr({
      ...t,
      type: e
    });
  }
  return "indexed" in t && t.indexed && (e = `${e} indexed`), t.name ? `${e} ${t.name}` : e;
}
function xt(t) {
  let e = "";
  const n = t.length;
  for (let r = 0; r < n; r++) {
    const s = t[r];
    e += sr(s), r !== n - 1 && (e += ", ");
  }
  return e;
}
function wa(t) {
  return t.type === "function" ? `function ${t.name}(${xt(t.inputs)})${t.stateMutability && t.stateMutability !== "nonpayable" ? ` ${t.stateMutability}` : ""}${t.outputs.length ? ` returns (${xt(t.outputs)})` : ""}` : t.type === "event" ? `event ${t.name}(${xt(t.inputs)})` : t.type === "error" ? `error ${t.name}(${xt(t.inputs)})` : t.type === "constructor" ? `constructor(${xt(t.inputs)})${t.stateMutability === "payable" ? " payable" : ""}` : t.type === "fallback" ? "fallback()" : "receive() external payable";
}
const wo = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function va(t) {
  return wo.test(t);
}
function xa(t) {
  return Le(wo, t);
}
const vo = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function Ea(t) {
  return vo.test(t);
}
function Pa(t) {
  return Le(vo, t);
}
const xo = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function Ba(t) {
  return xo.test(t);
}
function Aa(t) {
  return Le(xo, t);
}
const Eo = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function Po(t) {
  return Eo.test(t);
}
function Ta(t) {
  return Le(Eo, t);
}
const Bo = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function _a(t) {
  return Bo.test(t);
}
function Ia(t) {
  return Le(Bo, t);
}
const Sa = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function $a(t) {
  return Sa.test(t);
}
const ka = /^receive\(\) external payable$/;
function Oa(t) {
  return ka.test(t);
}
const Ca = /* @__PURE__ */ new Set(["indexed"]), or = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
class Na extends se {
  constructor({ type: e }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownTypeError"
    });
  }
}
class Ra extends se {
  constructor({ type: e }) {
    super("Unknown type.", {
      metaMessages: [`Type "${e}" is not a valid ABI type.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSolidityTypeError"
    });
  }
}
class Fa extends se {
  constructor({ param: e }) {
    super("Invalid ABI parameter.", {
      details: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParameterError"
    });
  }
}
class La extends se {
  constructor({ param: e, name: n }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SolidityProtectedKeywordError"
    });
  }
}
class Ma extends se {
  constructor({ param: e, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidModifierError"
    });
  }
}
class za extends se {
  constructor({ param: e, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`,
        `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidFunctionModifierError"
    });
  }
}
class Ua extends se {
  constructor({ abiParameter: e }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(e, null, 2),
      metaMessages: ["ABI parameter type is invalid."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiTypeParameterError"
    });
  }
}
class Tt extends se {
  constructor({ signature: e, type: n }) {
    super(`Invalid ${n} signature.`, {
      details: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSignatureError"
    });
  }
}
class ja extends se {
  constructor({ signature: e }) {
    super("Unknown signature.", {
      details: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSignatureError"
    });
  }
}
class qa extends se {
  constructor({ signature: e }) {
    super("Invalid struct signature.", {
      details: e,
      metaMessages: ["No properties exist."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStructSignatureError"
    });
  }
}
class Da extends se {
  constructor({ type: e }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${e}" is a circular reference.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CircularReferenceError"
    });
  }
}
class Ga extends se {
  constructor({ current: e, depth: n }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${e.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`
      ],
      details: `Depth "${n}"`
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParenthesisError"
    });
  }
}
function Ha(t, e) {
  return e ? `${e}:${t}` : t;
}
const jn = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ]
]);
function Va(t, e = {}) {
  if (Ba(t)) {
    const n = Aa(t);
    if (!n)
      throw new Tt({ signature: t, type: "function" });
    const r = ue(n.parameters), s = [], o = r.length;
    for (let a = 0; a < o; a++)
      s.push(je(r[a], {
        modifiers: or,
        structs: e,
        type: "function"
      }));
    const i = [];
    if (n.returns) {
      const a = ue(n.returns), c = a.length;
      for (let u = 0; u < c; u++)
        i.push(je(a[u], {
          modifiers: or,
          structs: e,
          type: "function"
        }));
    }
    return {
      name: n.name,
      type: "function",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s,
      outputs: i
    };
  }
  if (Ea(t)) {
    const n = Pa(t);
    if (!n)
      throw new Tt({ signature: t, type: "event" });
    const r = ue(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(je(r[i], {
        modifiers: Ca,
        structs: e,
        type: "event"
      }));
    return { name: n.name, type: "event", inputs: s };
  }
  if (va(t)) {
    const n = xa(t);
    if (!n)
      throw new Tt({ signature: t, type: "error" });
    const r = ue(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(je(r[i], { structs: e, type: "error" }));
    return { name: n.name, type: "error", inputs: s };
  }
  if (_a(t)) {
    const n = Ia(t);
    if (!n)
      throw new Tt({ signature: t, type: "constructor" });
    const r = ue(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(je(r[i], { structs: e, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s
    };
  }
  if ($a(t))
    return { type: "fallback" };
  if (Oa(t))
    return {
      type: "receive",
      stateMutability: "payable"
    };
  throw new ja({ signature: t });
}
const Za = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Wa = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Ka = /^u?int$/;
function je(t, e) {
  var d, l;
  const n = Ha(t, e == null ? void 0 : e.type);
  if (jn.has(n))
    return jn.get(n);
  const r = go.test(t), s = Le(r ? Wa : Za, t);
  if (!s)
    throw new Fa({ param: t });
  if (s.name && Ja(s.name))
    throw new La({ param: t, name: s.name });
  const o = s.name ? { name: s.name } : {}, i = s.modifier === "indexed" ? { indexed: !0 } : {}, a = (e == null ? void 0 : e.structs) ?? {};
  let c, u = {};
  if (r) {
    c = "tuple";
    const p = ue(s.type), m = [], y = p.length;
    for (let h = 0; h < y; h++)
      m.push(je(p[h], { structs: a }));
    u = { components: m };
  } else if (s.type in a)
    c = "tuple", u = { components: a[s.type] };
  else if (Ka.test(s.type))
    c = `${s.type}256`;
  else if (c = s.type, (e == null ? void 0 : e.type) !== "struct" && !Ao(c))
    throw new Ra({ type: c });
  if (s.modifier) {
    if (!((l = (d = e == null ? void 0 : e.modifiers) == null ? void 0 : d.has) != null && l.call(d, s.modifier)))
      throw new Ma({
        param: t,
        type: e == null ? void 0 : e.type,
        modifier: s.modifier
      });
    if (or.has(s.modifier) && !Xa(c, !!s.array))
      throw new za({
        param: t,
        type: e == null ? void 0 : e.type,
        modifier: s.modifier
      });
  }
  const f = {
    type: `${c}${s.array ?? ""}`,
    ...o,
    ...i,
    ...u
  };
  return jn.set(n, f), f;
}
function ue(t, e = [], n = "", r = 0) {
  const s = t.trim().length;
  for (let o = 0; o < s; o++) {
    const i = t[o], a = t.slice(o + 1);
    switch (i) {
      case ",":
        return r === 0 ? ue(a, [...e, n.trim()]) : ue(a, e, `${n}${i}`, r);
      case "(":
        return ue(a, e, `${n}${i}`, r + 1);
      case ")":
        return ue(a, e, `${n}${i}`, r - 1);
      default:
        return ue(a, e, `${n}${i}`, r);
    }
  }
  if (n === "")
    return e;
  if (r !== 0)
    throw new Ga({ current: n, depth: r });
  return e.push(n.trim()), e;
}
function Ao(t) {
  return t === "address" || t === "bool" || t === "function" || t === "string" || bo.test(t) || mo.test(t);
}
const Ya = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function Ja(t) {
  return t === "address" || t === "bool" || t === "function" || t === "string" || t === "tuple" || bo.test(t) || mo.test(t) || Ya.test(t);
}
function Xa(t, e) {
  return e || t === "bytes" || t === "string" || t === "tuple";
}
function Qa(t) {
  const e = {}, n = t.length;
  for (let i = 0; i < n; i++) {
    const a = t[i];
    if (!Po(a))
      continue;
    const c = Ta(a);
    if (!c)
      throw new Tt({ signature: a, type: "struct" });
    const u = c.properties.split(";"), f = [], d = u.length;
    for (let l = 0; l < d; l++) {
      const m = u[l].trim();
      if (!m)
        continue;
      const y = je(m, {
        type: "struct"
      });
      f.push(y);
    }
    if (!f.length)
      throw new qa({ signature: a });
    e[c.name] = f;
  }
  const r = {}, s = Object.entries(e), o = s.length;
  for (let i = 0; i < o; i++) {
    const [a, c] = s[i];
    r[a] = To(c, e);
  }
  return r;
}
const ec = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function To(t, e, n = /* @__PURE__ */ new Set()) {
  const r = [], s = t.length;
  for (let o = 0; o < s; o++) {
    const i = t[o];
    if (go.test(i.type))
      r.push(i);
    else {
      const c = Le(ec, i.type);
      if (!(c != null && c.type))
        throw new Ua({ abiParameter: i });
      const { array: u, type: f } = c;
      if (f in e) {
        if (n.has(f))
          throw new Da({ type: f });
        r.push({
          ...i,
          type: `tuple${u ?? ""}`,
          components: To(e[f] ?? [], e, /* @__PURE__ */ new Set([...n, f]))
        });
      } else if (Ao(f))
        r.push(i);
      else
        throw new Na({ type: f });
    }
  }
  return r;
}
function _o(t) {
  const e = Qa(t), n = [], r = t.length;
  for (let s = 0; s < r; s++) {
    const o = t[s];
    Po(o) || n.push(Va(o, e));
  }
  return n;
}
function C(t, e, n) {
  const r = t[e.name];
  if (typeof r == "function")
    return r;
  const s = t[n];
  return typeof s == "function" ? s : (o) => e(t, o);
}
function Ae(t, { includeName: e = !1 } = {}) {
  if (t.type !== "function" && t.type !== "event" && t.type !== "error")
    throw new hc(t.type);
  return `${t.name}(${vn(t.inputs, { includeName: e })})`;
}
function vn(t, { includeName: e = !1 } = {}) {
  return t ? t.map((n) => tc(n, { includeName: e })).join(e ? ", " : ",") : "";
}
function tc(t, { includeName: e }) {
  return t.type.startsWith("tuple") ? `(${vn(t.components, { includeName: e })})${t.type.slice(5)}` : t.type + (e && t.name ? ` ${t.name}` : "");
}
function le(t, { strict: e = !0 } = {}) {
  return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function j(t) {
  return le(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
const Io = "2.21.32";
let Et = {
  getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: n }) => e ? `${t ?? "https://viem.sh"}${e}${n ? `#${n}` : ""}` : void 0,
  version: `viem@${Io}`
};
class v extends Error {
  constructor(e, n = {}) {
    var a;
    const r = (() => {
      var c;
      return n.cause instanceof v ? n.cause.details : (c = n.cause) != null && c.message ? n.cause.message : n.details;
    })(), s = n.cause instanceof v && n.cause.docsPath || n.docsPath, o = (a = Et.getDocsUrl) == null ? void 0 : a.call(Et, { ...n, docsPath: s }), i = [
      e || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...o ? [`Docs: ${o}`] : [],
      ...r ? [`Details: ${r}`] : [],
      ...Et.version ? [`Version: ${Et.version}`] : []
    ].join(`
`);
    super(i, n.cause ? { cause: n.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.name = n.name ?? this.name, this.shortMessage = e, this.version = Io;
  }
  walk(e) {
    return So(this, e);
  }
}
function So(t, e) {
  return e != null && e(t) ? t : t && typeof t == "object" && "cause" in t ? So(t.cause, e) : e ? null : t;
}
class nc extends v {
  constructor({ docsPath: e }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: e,
      name: "AbiConstructorNotFoundError"
    });
  }
}
class Ts extends v {
  constructor({ docsPath: e }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: e,
      name: "AbiConstructorParamsNotFoundError"
    });
  }
}
class $o extends v {
  constructor({ data: e, params: n, size: r }) {
    super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${vn(n, { includeName: !0 })})`,
        `Data:   ${e} (${r} bytes)`
      ],
      name: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = e, this.params = n, this.size = r;
  }
}
class xn extends v {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.', {
      name: "AbiDecodingZeroDataError"
    });
  }
}
class rc extends v {
  constructor({ expectedLength: e, givenLength: n, type: r }) {
    super([
      `ABI encoding array length mismatch for type ${r}.`,
      `Expected length: ${e}`,
      `Given length: ${n}`
    ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
  }
}
class sc extends v {
  constructor({ expectedSize: e, value: n }) {
    super(`Size of bytes "${n}" (bytes${j(n)}) does not match expected size (bytes${e}).`, { name: "AbiEncodingBytesSizeMismatchError" });
  }
}
class oc extends v {
  constructor({ expectedLength: e, givenLength: n }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${e}`,
      `Given length (values): ${n}`
    ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
  }
}
class ko extends v {
  constructor(e, { docsPath: n }) {
    super([
      `Encoded error signature "${e}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = e;
  }
}
class ic extends v {
  constructor({ docsPath: e }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: e,
      name: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class Oo extends v {
  constructor(e, { docsPath: n }) {
    super([
      `Encoded event signature "${e}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventSignatureNotFoundError"
    });
  }
}
class _s extends v {
  constructor(e, { docsPath: n } = {}) {
    super([
      `Event ${e ? `"${e}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventNotFoundError"
    });
  }
}
class gn extends v {
  constructor(e, { docsPath: n } = {}) {
    super([
      `Function ${e ? `"${e}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionNotFoundError"
    });
  }
}
class ac extends v {
  constructor(e, { docsPath: n }) {
    super([
      `Function "${e}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class cc extends v {
  constructor(e, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${e.type}\` in \`${Ae(e.abiItem)}\`, and`,
        `\`${n.type}\` in \`${Ae(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ],
      name: "AbiItemAmbiguityError"
    });
  }
}
class uc extends v {
  constructor({ expectedSize: e, givenSize: n }) {
    super(`Expected bytes${e}, got bytes${n}.`, {
      name: "BytesSizeMismatchError"
    });
  }
}
class It extends v {
  constructor({ abiItem: e, data: n, params: r, size: s }) {
    super([
      `Data size of ${s} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${vn(r, { includeName: !0 })})`,
        `Data:   ${n} (${s} bytes)`
      ],
      name: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = e, this.data = n, this.params = r, this.size = s;
  }
}
class En extends v {
  constructor({ abiItem: e, param: n }) {
    super([
      `Expected a topic for indexed event parameter${n.name ? ` "${n.name}"` : ""} on event "${Ae(e, { includeName: !0 })}".`
    ].join(`
`), { name: "DecodeLogTopicsMismatch" }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = e;
  }
}
class fc extends v {
  constructor(e, { docsPath: n }) {
    super([
      `Type "${e}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiEncodingType" });
  }
}
class dc extends v {
  constructor(e, { docsPath: n }) {
    super([
      `Type "${e}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiDecodingType" });
  }
}
class lc extends v {
  constructor(e) {
    super([`Value "${e}" is not a valid array.`].join(`
`), {
      name: "InvalidArrayError"
    });
  }
}
class hc extends v {
  constructor(e) {
    super([
      `"${e}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`), { name: "InvalidDefinitionTypeError" });
  }
}
class pc extends v {
  constructor(e) {
    super(`Filter type "${e}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
}
class Co extends v {
  constructor({ offset: e, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${e}" is out-of-bounds (size: ${r}).`, { name: "SliceOffsetOutOfBoundsError" });
  }
}
class No extends v {
  constructor({ size: e, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
class Is extends v {
  constructor({ size: e, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${e} ${r} long.`, { name: "InvalidBytesLengthError" });
  }
}
function pt(t, { dir: e, size: n = 32 } = {}) {
  return typeof t == "string" ? Oe(t, { dir: e, size: n }) : yc(t, { dir: e, size: n });
}
function Oe(t, { dir: e, size: n = 32 } = {}) {
  if (n === null)
    return t;
  const r = t.replace("0x", "");
  if (r.length > n * 2)
    throw new No({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[e === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function yc(t, { dir: e, size: n = 32 } = {}) {
  if (n === null)
    return t;
  if (t.length > n)
    throw new No({
      size: t.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = e === "right";
    r[o ? s : n - s - 1] = t[o ? s : t.length - s - 1];
  }
  return r;
}
class bc extends v {
  constructor({ max: e, min: n, signed: r, size: s, value: o }) {
    super(`Number "${o}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${n} to ${e})` : `(above ${n})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class mc extends v {
  constructor(e) {
    super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
      name: "InvalidBytesBooleanError"
    });
  }
}
class gc extends v {
  constructor(e) {
    super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: "InvalidHexBooleanError" });
  }
}
class wc extends v {
  constructor({ givenSize: e, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`, { name: "SizeOverflowError" });
  }
}
function fe(t, { dir: e = "left" } = {}) {
  let n = typeof t == "string" ? t.replace("0x", "") : t, r = 0;
  for (let s = 0; s < n.length - 1 && n[e === "left" ? s : n.length - s - 1].toString() === "0"; s++)
    r++;
  return n = e === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof t == "string" ? (n.length === 1 && e === "right" && (n = `${n}0`), `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n;
}
function pe(t, { size: e }) {
  if (j(t) > e)
    throw new wc({
      givenSize: j(t),
      maxSize: e
    });
}
function Ne(t, e = {}) {
  const { signed: n } = e;
  e.size && pe(t, { size: e.size });
  const r = BigInt(t);
  if (!n)
    return r;
  const s = (t.length - 2) / 2, o = (1n << BigInt(s) * 8n - 1n) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function vc(t, e = {}) {
  let n = t;
  if (e.size && (pe(n, { size: e.size }), n = fe(n)), fe(n) === "0x00")
    return !1;
  if (fe(n) === "0x01")
    return !0;
  throw new gc(n);
}
function be(t, e = {}) {
  return Number(Ne(t, e));
}
const xc = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function R(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? O(t, e) : typeof t == "string" ? St(t, e) : typeof t == "boolean" ? Ro(t, e) : H(t, e);
}
function Ro(t, e = {}) {
  const n = `0x${Number(t)}`;
  return typeof e.size == "number" ? (pe(n, { size: e.size }), pt(n, { size: e.size })) : n;
}
function H(t, e = {}) {
  let n = "";
  for (let s = 0; s < t.length; s++)
    n += xc[t[s]];
  const r = `0x${n}`;
  return typeof e.size == "number" ? (pe(r, { size: e.size }), pt(r, { dir: "right", size: e.size })) : r;
}
function O(t, e = {}) {
  const { signed: n, size: r } = e, s = BigInt(t);
  let o;
  r ? n ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof t == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if (o && s > o || s < i) {
    const c = typeof t == "bigint" ? "n" : "";
    throw new bc({
      max: o ? `${o}${c}` : void 0,
      min: `${i}${c}`,
      signed: n,
      size: r,
      value: `${t}${c}`
    });
  }
  const a = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? pt(a, { size: r }) : a;
}
const Ec = /* @__PURE__ */ new TextEncoder();
function St(t, e = {}) {
  const n = Ec.encode(t);
  return H(n, e);
}
const Pc = /* @__PURE__ */ new TextEncoder();
function yt(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? Ac(t, e) : typeof t == "boolean" ? Bc(t, e) : le(t) ? he(t, e) : De(t, e);
}
function Bc(t, e = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(t), typeof e.size == "number" ? (pe(n, { size: e.size }), pt(n, { size: e.size })) : n;
}
const we = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Ss(t) {
  if (t >= we.zero && t <= we.nine)
    return t - we.zero;
  if (t >= we.A && t <= we.F)
    return t - (we.A - 10);
  if (t >= we.a && t <= we.f)
    return t - (we.a - 10);
}
function he(t, e = {}) {
  let n = t;
  e.size && (pe(n, { size: e.size }), n = pt(n, { dir: "right", size: e.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, o = new Uint8Array(s);
  for (let i = 0, a = 0; i < s; i++) {
    const c = Ss(r.charCodeAt(a++)), u = Ss(r.charCodeAt(a++));
    if (c === void 0 || u === void 0)
      throw new v(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    o[i] = c * 16 + u;
  }
  return o;
}
function Ac(t, e) {
  const n = O(t, e);
  return he(n);
}
function De(t, e = {}) {
  const n = Pc.encode(t);
  return typeof e.size == "number" ? (pe(n, { size: e.size }), pt(n, { dir: "right", size: e.size })) : n;
}
function wn(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
function Tc(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Yt(t, ...e) {
  if (!Tc(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function _c(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  wn(t.outputLen), wn(t.blockLen);
}
function ct(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function Fo(t, e) {
  Yt(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const an = /* @__PURE__ */ BigInt(2 ** 32 - 1), $s = /* @__PURE__ */ BigInt(32);
function Ic(t, e = !1) {
  return e ? { h: Number(t & an), l: Number(t >> $s & an) } : { h: Number(t >> $s & an) | 0, l: Number(t & an) | 0 };
}
function Sc(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let s = 0; s < t.length; s++) {
    const { h: o, l: i } = Ic(t[s], e);
    [n[s], r[s]] = [o, i];
  }
  return [n, r];
}
const $c = (t, e, n) => t << n | e >>> 32 - n, kc = (t, e, n) => e << n | t >>> 32 - n, Oc = (t, e, n) => e << n - 32 | t >>> 64 - n, Cc = (t, e, n) => t << n - 32 | e >>> 64 - n, nt = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Nc = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), qn = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), ye = (t, e) => t << 32 - e | t >>> e, ks = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, Rc = (t) => t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
function Os(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = Rc(t[e]);
}
function Fc(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Pn(t) {
  return typeof t == "string" && (t = Fc(t)), Yt(t), t;
}
function Lc(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    Yt(s), e += s.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, s = 0; r < t.length; r++) {
    const o = t[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
class Rr {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Lo(t) {
  const e = (r) => t().update(Pn(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Mc(t = 32) {
  if (nt && typeof nt.getRandomValues == "function")
    return nt.getRandomValues(new Uint8Array(t));
  if (nt && typeof nt.randomBytes == "function")
    return nt.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
const Mo = [], zo = [], Uo = [], zc = /* @__PURE__ */ BigInt(0), Pt = /* @__PURE__ */ BigInt(1), Uc = /* @__PURE__ */ BigInt(2), jc = /* @__PURE__ */ BigInt(7), qc = /* @__PURE__ */ BigInt(256), Dc = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = Pt, n = 1, r = 0; t < 24; t++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Mo.push(2 * (5 * r + n)), zo.push((t + 1) * (t + 2) / 2 % 64);
  let s = zc;
  for (let o = 0; o < 7; o++)
    e = (e << Pt ^ (e >> jc) * Dc) % qc, e & Uc && (s ^= Pt << (Pt << /* @__PURE__ */ BigInt(o)) - Pt);
  Uo.push(s);
}
const [Gc, Hc] = /* @__PURE__ */ Sc(Uo, !0), Cs = (t, e, n) => n > 32 ? Oc(t, e, n) : $c(t, e, n), Ns = (t, e, n) => n > 32 ? Cc(t, e, n) : kc(t, e, n);
function Vc(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = t[i] ^ t[i + 10] ^ t[i + 20] ^ t[i + 30] ^ t[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const a = (i + 8) % 10, c = (i + 2) % 10, u = n[c], f = n[c + 1], d = Cs(u, f, 1) ^ n[a], l = Ns(u, f, 1) ^ n[a + 1];
      for (let p = 0; p < 50; p += 10)
        t[i + p] ^= d, t[i + p + 1] ^= l;
    }
    let s = t[2], o = t[3];
    for (let i = 0; i < 24; i++) {
      const a = zo[i], c = Cs(s, o, a), u = Ns(s, o, a), f = Mo[i];
      s = t[f], o = t[f + 1], t[f] = c, t[f + 1] = u;
    }
    for (let i = 0; i < 50; i += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = t[i + a];
      for (let a = 0; a < 10; a++)
        t[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    t[0] ^= Gc[r], t[1] ^= Hc[r];
  }
  n.fill(0);
}
class Fr extends Rr {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, n, r, s = !1, o = 24) {
    if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, wn(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Nc(this.state);
  }
  keccak() {
    ks || Os(this.state32), Vc(this.state32, this.rounds), ks || Os(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    ct(this);
    const { blockLen: n, state: r } = this;
    e = Pn(e);
    const s = e.length;
    for (let o = 0; o < s; ) {
      const i = Math.min(n - this.pos, s - o);
      for (let a = 0; a < i; a++)
        r[this.pos++] ^= e[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: n, pos: r, blockLen: s } = this;
    e[r] ^= n, n & 128 && r === s - 1 && this.keccak(), e[s - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    ct(this, !1), Yt(e), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let s = 0, o = e.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, o - s);
      e.set(n.subarray(this.posOut, this.posOut + i), s), this.posOut += i, s += i;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return wn(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Fo(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: n, suffix: r, outputLen: s, rounds: o, enableXOF: i } = this;
    return e || (e = new Fr(n, r, s, i, o)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = o, e.suffix = r, e.outputLen = s, e.enableXOF = i, e.destroyed = this.destroyed, e;
  }
}
const Zc = (t, e, n) => Lo(() => new Fr(e, t, n)), Wc = /* @__PURE__ */ Zc(1, 136, 256 / 8);
function Z(t, e) {
  const n = e || "hex", r = Wc(le(t, { strict: !1 }) ? yt(t) : t);
  return n === "bytes" ? r : R(r);
}
const Kc = (t) => Z(yt(t));
function Yc(t) {
  return Kc(t);
}
function Jc(t) {
  let e = !0, n = "", r = 0, s = "", o = !1;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (["(", ")", ","].includes(a) && (e = !0), a === "(" && r++, a === ")" && r--, !!e) {
      if (r === 0) {
        if (a === " " && ["event", "function", ""].includes(s))
          s = "";
        else if (s += a, a === ")") {
          o = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        t[i - 1] !== "," && n !== "," && n !== ",(" && (n = "", e = !1);
        continue;
      }
      s += a, n += a;
    }
  }
  if (!o)
    throw new v("Unable to normalize signature.");
  return s;
}
const Xc = (t) => {
  const e = typeof t == "string" ? t : wa(t);
  return Jc(e);
};
function jo(t) {
  return Yc(Xc(t));
}
const Bn = jo;
class ee extends v {
  constructor({ address: e }) {
    super(`Address "${e}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ],
      name: "InvalidAddressError"
    });
  }
}
class Lr extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = e;
  }
  get(e) {
    const n = super.get(e);
    return super.has(e) && n !== void 0 && (this.delete(e), super.set(e, n)), n;
  }
  set(e, n) {
    if (super.set(e, n), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
const Dn = /* @__PURE__ */ new Lr(8192);
function An(t, e) {
  if (Dn.has(`${t}.${e}`))
    return Dn.get(`${t}.${e}`);
  const n = t.substring(2).toLowerCase(), r = Z(De(n), "bytes"), s = n.split("");
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
  const o = `0x${s.join("")}`;
  return Dn.set(`${t}.${e}`, o), o;
}
function Qc(t, e) {
  if (!J(t, { strict: !1 }))
    throw new ee({ address: t });
  return An(t, e);
}
const eu = /^0x[a-fA-F0-9]{40}$/, Gn = /* @__PURE__ */ new Lr(8192);
function J(t, e) {
  const { strict: n = !0 } = e ?? {}, r = `${t}.${n}`;
  if (Gn.has(r))
    return Gn.get(r);
  const s = eu.test(t) ? t.toLowerCase() === t ? !0 : n ? An(t) === t : !0 : !1;
  return Gn.set(r, s), s;
}
function me(t) {
  return typeof t[0] == "string" ? _e(t) : tu(t);
}
function tu(t) {
  let e = 0;
  for (const s of t)
    e += s.length;
  const n = new Uint8Array(e);
  let r = 0;
  for (const s of t)
    n.set(s, r), r += s.length;
  return n;
}
function _e(t) {
  return `0x${t.reduce((e, n) => e + n.replace("0x", ""), "")}`;
}
function $t(t, e, n, { strict: r } = {}) {
  return le(t, { strict: !1 }) ? Ho(t, e, n, {
    strict: r
  }) : Go(t, e, n, {
    strict: r
  });
}
function qo(t, e) {
  if (typeof e == "number" && e > 0 && e > j(t) - 1)
    throw new Co({
      offset: e,
      position: "start",
      size: j(t)
    });
}
function Do(t, e, n) {
  if (typeof e == "number" && typeof n == "number" && j(t) !== n - e)
    throw new Co({
      offset: n,
      position: "end",
      size: j(t)
    });
}
function Go(t, e, n, { strict: r } = {}) {
  qo(t, e);
  const s = t.slice(e, n);
  return r && Do(s, e, n), s;
}
function Ho(t, e, n, { strict: r } = {}) {
  qo(t, e);
  const s = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (n ?? t.length) * 2)}`;
  return r && Do(s, e, n), s;
}
function Xe(t, e) {
  if (t.length !== e.length)
    throw new oc({
      expectedLength: t.length,
      givenLength: e.length
    });
  const n = nu({
    params: t,
    values: e
  }), r = zr(n);
  return r.length === 0 ? "0x" : r;
}
function nu({ params: t, values: e }) {
  const n = [];
  for (let r = 0; r < t.length; r++)
    n.push(Mr({ param: t[r], value: e[r] }));
  return n;
}
function Mr({ param: t, value: e }) {
  const n = Ur(t.type);
  if (n) {
    const [r, s] = n;
    return su(e, { length: r, param: { ...t, type: s } });
  }
  if (t.type === "tuple")
    return uu(e, {
      param: t
    });
  if (t.type === "address")
    return ru(e);
  if (t.type === "bool")
    return iu(e);
  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
    const r = t.type.startsWith("int");
    return au(e, { signed: r });
  }
  if (t.type.startsWith("bytes"))
    return ou(e, { param: t });
  if (t.type === "string")
    return cu(e);
  throw new fc(t.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function zr(t) {
  let e = 0;
  for (let o = 0; o < t.length; o++) {
    const { dynamic: i, encoded: a } = t[o];
    i ? e += 32 : e += j(a);
  }
  const n = [], r = [];
  let s = 0;
  for (let o = 0; o < t.length; o++) {
    const { dynamic: i, encoded: a } = t[o];
    i ? (n.push(O(e + s, { size: 32 })), r.push(a), s += j(a)) : n.push(a);
  }
  return me([...n, ...r]);
}
function ru(t) {
  if (!J(t))
    throw new ee({ address: t });
  return { dynamic: !1, encoded: Oe(t.toLowerCase()) };
}
function su(t, { length: e, param: n }) {
  const r = e === null;
  if (!Array.isArray(t))
    throw new lc(t);
  if (!r && t.length !== e)
    throw new rc({
      expectedLength: e,
      givenLength: t.length,
      type: `${n.type}[${e}]`
    });
  let s = !1;
  const o = [];
  for (let i = 0; i < t.length; i++) {
    const a = Mr({ param: n, value: t[i] });
    a.dynamic && (s = !0), o.push(a);
  }
  if (r || s) {
    const i = zr(o);
    if (r) {
      const a = O(o.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: o.length > 0 ? me([a, i]) : a
      };
    }
    if (s)
      return { dynamic: !0, encoded: i };
  }
  return {
    dynamic: !1,
    encoded: me(o.map(({ encoded: i }) => i))
  };
}
function ou(t, { param: e }) {
  const [, n] = e.type.split("bytes"), r = j(t);
  if (!n) {
    let s = t;
    return r % 32 !== 0 && (s = Oe(s, {
      dir: "right",
      size: Math.ceil((t.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: me([Oe(O(r, { size: 32 })), s])
    };
  }
  if (r !== Number.parseInt(n))
    throw new sc({
      expectedSize: Number.parseInt(n),
      value: t
    });
  return { dynamic: !1, encoded: Oe(t, { dir: "right" }) };
}
function iu(t) {
  if (typeof t != "boolean")
    throw new v(`Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: Oe(Ro(t)) };
}
function au(t, { signed: e }) {
  return {
    dynamic: !1,
    encoded: O(t, {
      size: 32,
      signed: e
    })
  };
}
function cu(t) {
  const e = St(t), n = Math.ceil(j(e) / 32), r = [];
  for (let s = 0; s < n; s++)
    r.push(Oe($t(e, s * 32, (s + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: me([
      Oe(O(j(e), { size: 32 })),
      ...r
    ])
  };
}
function uu(t, { param: e }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < e.components.length; s++) {
    const o = e.components[s], i = Array.isArray(t) ? s : o.name, a = Mr({
      param: o,
      value: t[i]
    });
    r.push(a), a.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? zr(r) : me(r.map(({ encoded: s }) => s))
  };
}
function Ur(t) {
  const e = t.match(/^(.*)\[(\d+)?\]$/);
  return e ? (
    // Return `null` if the array is dynamic.
    [e[2] ? Number(e[2]) : null, e[1]]
  ) : void 0;
}
const jr = (t) => $t(jo(t), 0, 4);
function Jt(t) {
  const { abi: e, args: n = [], name: r } = t, s = le(r, { strict: !1 }), o = e.filter((a) => s ? a.type === "function" ? jr(a) === r : a.type === "event" ? Bn(a) === r : !1 : "name" in a && a.name === r);
  if (o.length === 0)
    return;
  if (o.length === 1)
    return o[0];
  let i;
  for (const a of o) {
    if (!("inputs" in a))
      continue;
    if (!n || n.length === 0) {
      if (!a.inputs || a.inputs.length === 0)
        return a;
      continue;
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length)
      continue;
    if (n.every((u, f) => {
      const d = "inputs" in a && a.inputs[f];
      return d ? ir(u, d) : !1;
    })) {
      if (i && "inputs" in i && i.inputs) {
        const u = Vo(a.inputs, i.inputs, n);
        if (u)
          throw new cc({
            abiItem: a,
            type: u[0]
          }, {
            abiItem: i,
            type: u[1]
          });
      }
      i = a;
    }
  }
  return i || o[0];
}
function ir(t, e) {
  const n = typeof t, r = e.type;
  switch (r) {
    case "address":
      return J(t, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in e ? Object.values(e.components).every((s, o) => ir(Object.values(t)[o], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || t instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(t) && t.every((s) => ir(s, {
        ...e,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function Vo(t, e, n) {
  for (const r in t) {
    const s = t[r], o = e[r];
    if (s.type === "tuple" && o.type === "tuple" && "components" in s && "components" in o)
      return Vo(s.components, o.components, n[r]);
    const i = [s.type, o.type];
    if (i.includes("address") && i.includes("bytes20") ? !0 : i.includes("address") && i.includes("string") ? J(n[r], { strict: !1 }) : i.includes("address") && i.includes("bytes") ? J(n[r], { strict: !1 }) : !1)
      return i;
  }
}
const Rs = "/docs/contract/encodeEventTopics";
function Xt(t) {
  var c;
  const { abi: e, eventName: n, args: r } = t;
  let s = e[0];
  if (n) {
    const u = Jt({ abi: e, name: n });
    if (!u)
      throw new _s(n, { docsPath: Rs });
    s = u;
  }
  if (s.type !== "event")
    throw new _s(void 0, { docsPath: Rs });
  const o = Ae(s), i = Bn(o);
  let a = [];
  if (r && "inputs" in s) {
    const u = (c = s.inputs) == null ? void 0 : c.filter((d) => "indexed" in d && d.indexed), f = Array.isArray(r) ? r : Object.values(r).length > 0 ? (u == null ? void 0 : u.map((d) => r[d.name])) ?? [] : [];
    f.length > 0 && (a = (u == null ? void 0 : u.map((d, l) => Array.isArray(f[l]) ? f[l].map((p, m) => Fs({ param: d, value: f[l][m] })) : f[l] ? Fs({ param: d, value: f[l] }) : null)) ?? []);
  }
  return [i, ...a];
}
function Fs({ param: t, value: e }) {
  if (t.type === "string" || t.type === "bytes")
    return Z(yt(e));
  if (t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/))
    throw new pc(t.type);
  return Xe([t], [e]);
}
function Tn(t, { method: e }) {
  var r, s;
  const n = {};
  return t.transport.type === "fallback" && ((s = (r = t.transport).onResponse) == null || s.call(r, ({ method: o, response: i, status: a, transport: c }) => {
    a === "success" && e === o && (n[i] = c.request);
  })), (o) => n[o] || t.request;
}
async function Zo(t, e) {
  const { address: n, abi: r, args: s, eventName: o, fromBlock: i, strict: a, toBlock: c } = e, u = Tn(t, {
    method: "eth_newFilter"
  }), f = o ? Xt({
    abi: r,
    args: s,
    eventName: o
  }) : void 0, d = await t.request({
    method: "eth_newFilter",
    params: [
      {
        address: n,
        fromBlock: typeof i == "bigint" ? O(i) : i,
        toBlock: typeof c == "bigint" ? O(c) : c,
        topics: f
      }
    ]
  });
  return {
    abi: r,
    args: s,
    eventName: o,
    id: d,
    request: u(d),
    strict: !!a,
    type: "event"
  };
}
function Me(t) {
  return typeof t == "string" ? { address: t, type: "json-rpc" } : t;
}
const Ls = "/docs/contract/encodeFunctionData";
function fu(t) {
  const { abi: e, args: n, functionName: r } = t;
  let s = e[0];
  if (r) {
    const o = Jt({
      abi: e,
      args: n,
      name: r
    });
    if (!o)
      throw new gn(r, { docsPath: Ls });
    s = o;
  }
  if (s.type !== "function")
    throw new gn(void 0, { docsPath: Ls });
  return {
    abi: [s],
    functionName: jr(Ae(s))
  };
}
function ze(t) {
  const { args: e } = t, { abi: n, functionName: r } = (() => {
    var a;
    return t.abi.length === 1 && ((a = t.functionName) != null && a.startsWith("0x")) ? t : fu(t);
  })(), s = n[0], o = r, i = "inputs" in s && s.inputs ? Xe(s.inputs, e ?? []) : void 0;
  return _e([o, i ?? "0x"]);
}
const Wo = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, du = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, lu = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
class Ms extends v {
  constructor({ offset: e }) {
    super(`Offset \`${e}\` cannot be negative.`, {
      name: "NegativeOffsetError"
    });
  }
}
class Ko extends v {
  constructor({ length: e, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${e}\`).`, { name: "PositionOutOfBoundsError" });
  }
}
class hu extends v {
  constructor({ count: e, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${e}\`).`, { name: "RecursiveReadLimitExceededError" });
  }
}
const pu = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new hu({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(t) {
    if (t < 0 || t > this.bytes.length - 1)
      throw new Ko({
        length: this.bytes.length,
        position: t
      });
  },
  decrementPosition(t) {
    if (t < 0)
      throw new Ms({ offset: t });
    const e = this.position - t;
    this.assertPosition(e), this.position = e;
  },
  getReadCount(t) {
    return this.positionReadCount.get(t || this.position) || 0;
  },
  incrementPosition(t) {
    if (t < 0)
      throw new Ms({ offset: t });
    const e = this.position + t;
    this.assertPosition(e), this.position = e;
  },
  inspectByte(t) {
    const e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectBytes(t, e) {
    const n = e ?? this.position;
    return this.assertPosition(n + t - 1), this.bytes.subarray(n, n + t);
  },
  inspectUint8(t) {
    const e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectUint16(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 1), this.dataView.getUint16(e);
  },
  inspectUint24(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 2), (this.dataView.getUint16(e) << 8) + this.dataView.getUint8(e + 2);
  },
  inspectUint32(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 3), this.dataView.getUint32(e);
  },
  pushByte(t) {
    this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
  },
  pushBytes(t) {
    this.assertPosition(this.position + t.length - 1), this.bytes.set(t, this.position), this.position += t.length;
  },
  pushUint8(t) {
    this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
  },
  pushUint16(t) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, t), this.position += 2;
  },
  pushUint24(t) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, t >> 8), this.dataView.setUint8(this.position + 2, t & 255), this.position += 3;
  },
  pushUint32(t) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, t), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectByte();
    return this.position++, t;
  },
  readBytes(t, e) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(t);
    return this.position += e ?? t, n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint8();
    return this.position += 1, t;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint16();
    return this.position += 2, t;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint24();
    return this.position += 3, t;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint32();
    return this.position += 4, t;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(t) {
    const e = this.position;
    return this.assertPosition(t), this.position = t, () => this.position = e;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const t = this.getReadCount();
    this.positionReadCount.set(this.position, t + 1), t > 0 && this.recursiveReadCount++;
  }
};
function qr(t, { recursiveReadLimit: e = 8192 } = {}) {
  const n = Object.create(pu);
  return n.bytes = t, n.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = e, n;
}
function yu(t, e = {}) {
  typeof e.size < "u" && pe(t, { size: e.size });
  const n = H(t, e);
  return Ne(n, e);
}
function bu(t, e = {}) {
  let n = t;
  if (typeof e.size < "u" && (pe(n, { size: e.size }), n = fe(n)), n.length > 1 || n[0] > 1)
    throw new mc(n);
  return !!n[0];
}
function Pe(t, e = {}) {
  typeof e.size < "u" && pe(t, { size: e.size });
  const n = H(t, e);
  return be(n, e);
}
function mu(t, e = {}) {
  let n = t;
  return typeof e.size < "u" && (pe(n, { size: e.size }), n = fe(n, { dir: "right" })), new TextDecoder().decode(n);
}
function _n(t, e) {
  const n = typeof e == "string" ? he(e) : e, r = qr(n);
  if (j(n) === 0 && t.length > 0)
    throw new xn();
  if (j(e) && j(e) < 32)
    throw new $o({
      data: typeof e == "string" ? e : H(e),
      params: t,
      size: j(e)
    });
  let s = 0;
  const o = [];
  for (let i = 0; i < t.length; ++i) {
    const a = t[i];
    r.setPosition(s);
    const [c, u] = ot(r, a, {
      staticPosition: 0
    });
    s += u, o.push(c);
  }
  return o;
}
function ot(t, e, { staticPosition: n }) {
  const r = Ur(e.type);
  if (r) {
    const [s, o] = r;
    return wu(t, { ...e, type: o }, { length: s, staticPosition: n });
  }
  if (e.type === "tuple")
    return Pu(t, e, { staticPosition: n });
  if (e.type === "address")
    return gu(t);
  if (e.type === "bool")
    return vu(t);
  if (e.type.startsWith("bytes"))
    return xu(t, e, { staticPosition: n });
  if (e.type.startsWith("uint") || e.type.startsWith("int"))
    return Eu(t, e);
  if (e.type === "string")
    return Bu(t, { staticPosition: n });
  throw new dc(e.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
const zs = 32, ar = 32;
function gu(t) {
  const e = t.readBytes(32);
  return [An(H(Go(e, -20))), 32];
}
function wu(t, e, { length: n, staticPosition: r }) {
  if (!n) {
    const i = Pe(t.readBytes(ar)), a = r + i, c = a + zs;
    t.setPosition(a);
    const u = Pe(t.readBytes(zs)), f = kt(e);
    let d = 0;
    const l = [];
    for (let p = 0; p < u; ++p) {
      t.setPosition(c + (f ? p * 32 : d));
      const [m, y] = ot(t, e, {
        staticPosition: c
      });
      d += y, l.push(m);
    }
    return t.setPosition(r + 32), [l, 32];
  }
  if (kt(e)) {
    const i = Pe(t.readBytes(ar)), a = r + i, c = [];
    for (let u = 0; u < n; ++u) {
      t.setPosition(a + u * 32);
      const [f] = ot(t, e, {
        staticPosition: a
      });
      c.push(f);
    }
    return t.setPosition(r + 32), [c, 32];
  }
  let s = 0;
  const o = [];
  for (let i = 0; i < n; ++i) {
    const [a, c] = ot(t, e, {
      staticPosition: r + s
    });
    s += c, o.push(a);
  }
  return [o, s];
}
function vu(t) {
  return [bu(t.readBytes(32), { size: 32 }), 32];
}
function xu(t, e, { staticPosition: n }) {
  const [r, s] = e.type.split("bytes");
  if (!s) {
    const i = Pe(t.readBytes(32));
    t.setPosition(n + i);
    const a = Pe(t.readBytes(32));
    if (a === 0)
      return t.setPosition(n + 32), ["0x", 32];
    const c = t.readBytes(a);
    return t.setPosition(n + 32), [H(c), 32];
  }
  return [H(t.readBytes(Number.parseInt(s), 32)), 32];
}
function Eu(t, e) {
  const n = e.type.startsWith("int"), r = Number.parseInt(e.type.split("int")[1] || "256"), s = t.readBytes(32);
  return [
    r > 48 ? yu(s, { signed: n }) : Pe(s, { signed: n }),
    32
  ];
}
function Pu(t, e, { staticPosition: n }) {
  const r = e.components.length === 0 || e.components.some(({ name: i }) => !i), s = r ? [] : {};
  let o = 0;
  if (kt(e)) {
    const i = Pe(t.readBytes(ar)), a = n + i;
    for (let c = 0; c < e.components.length; ++c) {
      const u = e.components[c];
      t.setPosition(a + o);
      const [f, d] = ot(t, u, {
        staticPosition: a
      });
      o += d, s[r ? c : u == null ? void 0 : u.name] = f;
    }
    return t.setPosition(n + 32), [s, 32];
  }
  for (let i = 0; i < e.components.length; ++i) {
    const a = e.components[i], [c, u] = ot(t, a, {
      staticPosition: n
    });
    s[r ? i : a == null ? void 0 : a.name] = c, o += u;
  }
  return [s, o];
}
function Bu(t, { staticPosition: e }) {
  const n = Pe(t.readBytes(32)), r = e + n;
  t.setPosition(r);
  const s = Pe(t.readBytes(32));
  if (s === 0)
    return t.setPosition(e + 32), ["", 32];
  const o = t.readBytes(s, 32), i = mu(fe(o));
  return t.setPosition(e + 32), [i, 32];
}
function kt(t) {
  var r;
  const { type: e } = t;
  if (e === "string" || e === "bytes" || e.endsWith("[]"))
    return !0;
  if (e === "tuple")
    return (r = t.components) == null ? void 0 : r.some(kt);
  const n = Ur(t.type);
  return !!(n && kt({ ...t, type: n[1] }));
}
function Yo(t) {
  const { abi: e, data: n } = t, r = $t(n, 0, 4);
  if (r === "0x")
    throw new xn();
  const o = [...e || [], du, lu].find((i) => i.type === "error" && r === jr(Ae(i)));
  if (!o)
    throw new ko(r, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: o,
    args: "inputs" in o && o.inputs && o.inputs.length > 0 ? _n(o.inputs, $t(n, 4)) : void 0,
    errorName: o.name
  };
}
const K = (t, e, n) => JSON.stringify(t, (r, s) => typeof s == "bigint" ? s.toString() : s, n);
function Jo({ abiItem: t, args: e, includeFunctionName: n = !0, includeName: r = !1 }) {
  if ("name" in t && "inputs" in t && t.inputs)
    return `${n ? t.name : ""}(${t.inputs.map((s, o) => `${r && s.name ? `${s.name}: ` : ""}${typeof e[o] == "object" ? K(e[o]) : e[o]}`).join(", ")})`;
}
const Xo = {
  gwei: 9,
  wei: 18
}, Au = {
  ether: -9,
  wei: 9
};
function Qo(t, e) {
  let n = t.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), n = n.padStart(e, "0");
  let [s, o] = [
    n.slice(0, n.length - e),
    n.slice(n.length - e)
  ];
  return o = o.replace(/(0+)$/, ""), `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`;
}
function ei(t, e = "wei") {
  return Qo(t, Xo[e]);
}
function de(t, e = "wei") {
  return Qo(t, Au[e]);
}
class Tu extends v {
  constructor({ address: e }) {
    super(`State for account "${e}" is set multiple times.`, {
      name: "AccountStateConflictError"
    });
  }
}
class _u extends v {
  constructor() {
    super("state and stateDiff are set on the same account.", {
      name: "StateAssignmentConflictError"
    });
  }
}
function Us(t) {
  return t.reduce((e, { slot: n, value: r }) => `${e}        ${n}: ${r}
`, "");
}
function Iu(t) {
  return t.reduce((e, { address: n, ...r }) => {
    let s = `${e}    ${n}:
`;
    return r.nonce && (s += `      nonce: ${r.nonce}
`), r.balance && (s += `      balance: ${r.balance}
`), r.code && (s += `      code: ${r.code}
`), r.state && (s += `      state:
`, s += Us(r.state)), r.stateDiff && (s += `      stateDiff:
`, s += Us(r.stateDiff)), s;
  }, `  State Override:
`).slice(0, -1);
}
function In(t) {
  const e = Object.entries(t).map(([r, s]) => s === void 0 || s === !1 ? null : [r, s]).filter(Boolean), n = e.reduce((r, [s]) => Math.max(r, s.length), 0);
  return e.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class Su extends v {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`), { name: "FeeConflictError" });
  }
}
class $u extends v {
  constructor({ v: e }) {
    super(`Invalid \`v\` value "${e}". Expected 27 or 28.`, {
      name: "InvalidLegacyVError"
    });
  }
}
class ku extends v {
  constructor({ transaction: e }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        In(e),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- an EIP-7702 Transaction with `authorizationList`, or",
        "- a Legacy Transaction with `gasPrice`"
      ],
      name: "InvalidSerializableTransactionError"
    });
  }
}
class Ou extends v {
  constructor({ storageKey: e }) {
    super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
  }
}
class ti extends v {
  constructor({ blockHash: e, blockNumber: n, blockTag: r, hash: s, index: o }) {
    let i = "Transaction";
    r && o !== void 0 && (i = `Transaction at block time "${r}" at index "${o}"`), e && o !== void 0 && (i = `Transaction at block hash "${e}" at index "${o}"`), n && o !== void 0 && (i = `Transaction at block number "${n}" at index "${o}"`), s && (i = `Transaction with hash "${s}"`), super(`${i} could not be found.`, {
      name: "TransactionNotFoundError"
    });
  }
}
class ni extends v {
  constructor({ hash: e }) {
    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`, {
      name: "TransactionReceiptNotFoundError"
    });
  }
}
class Cu extends v {
  constructor({ hash: e }) {
    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`, { name: "WaitForTransactionReceiptTimeoutError" });
  }
}
const Nu = (t) => t, Qt = (t) => t;
class ri extends v {
  constructor(e, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: d, value: l, stateOverride: p }) {
    var h;
    const m = n ? Me(n) : void 0;
    let y = In({
      from: m == null ? void 0 : m.address,
      to: d,
      value: typeof l < "u" && `${ei(l)} ${((h = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : h.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${de(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${de(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${de(u)} gwei`,
      nonce: f
    });
    p && (y += `
${Iu(p)}`), super(e.shortMessage, {
      cause: e,
      docsPath: r,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Raw Call Arguments:",
        y
      ].filter(Boolean),
      name: "CallExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = e;
  }
}
class Ru extends v {
  constructor(e, { abi: n, args: r, contractAddress: s, docsPath: o, functionName: i, sender: a }) {
    const c = Jt({ abi: n, args: r, name: i }), u = c ? Jo({
      abiItem: c,
      args: r,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, f = c ? Ae(c, { includeName: !0 }) : void 0, d = In({
      address: s && Nu(s),
      function: f,
      args: u && u !== "()" && `${[...Array((i == null ? void 0 : i.length) ?? 0).keys()].map(() => " ").join("")}${u}`,
      sender: a
    });
    super(e.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
      cause: e,
      docsPath: o,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        d && "Contract Call:",
        d
      ].filter(Boolean),
      name: "ContractFunctionExecutionError"
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abi = n, this.args = r, this.cause = e, this.contractAddress = s, this.functionName = i, this.sender = a;
  }
}
class cr extends v {
  constructor({ abi: e, data: n, functionName: r, message: s }) {
    let o, i, a, c;
    if (n && n !== "0x")
      try {
        i = Yo({ abi: e, data: n });
        const { abiItem: f, errorName: d, args: l } = i;
        if (d === "Error")
          c = l[0];
        else if (d === "Panic") {
          const [p] = l;
          c = Wo[p];
        } else {
          const p = f ? Ae(f, { includeName: !0 }) : void 0, m = f && l ? Jo({
            abiItem: f,
            args: l,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          a = [
            p ? `Error: ${p}` : "",
            m && m !== "()" ? `       ${[...Array((d == null ? void 0 : d.length) ?? 0).keys()].map(() => " ").join("")}${m}` : ""
          ];
        }
      } catch (f) {
        o = f;
      }
    else s && (c = s);
    let u;
    o instanceof ko && (u = o.signature, a = [
      `Unable to decode signature "${u}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`
    ]), super(c && c !== "execution reverted" || u ? [
      `The contract function "${r}" reverted with the following ${u ? "signature" : "reason"}:`,
      c || u
    ].join(`
`) : `The contract function "${r}" reverted.`, {
      cause: o,
      metaMessages: a,
      name: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = i, this.reason = c, this.signature = u;
  }
}
class Fu extends v {
  constructor({ functionName: e }) {
    super(`The contract function "${e}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${e}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ],
      name: "ContractFunctionZeroDataError"
    });
  }
}
class Lu extends v {
  constructor({ factory: e }) {
    super(`Deployment for counterfactual contract call failed${e ? ` for factory "${e}".` : ""}`, {
      metaMessages: [
        "Please ensure:",
        "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
        "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
      ],
      name: "CounterfactualDeploymentFailedError"
    });
  }
}
class Dr extends v {
  constructor({ data: e, message: n }) {
    super(n || "", { name: "RawContractError" }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = e;
  }
}
class Ge extends v {
  constructor({ body: e, cause: n, details: r, headers: s, status: o, url: i }) {
    super("HTTP request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${Qt(i)}`,
        e && `Request body: ${K(e)}`
      ].filter(Boolean),
      name: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = e, this.headers = s, this.status = o, this.url = i;
  }
}
class si extends v {
  constructor({ body: e, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${Qt(r)}`, `Request body: ${K(e)}`],
      name: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = n.code;
  }
}
class js extends v {
  constructor({ body: e, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${Qt(n)}`, `Request body: ${K(e)}`],
      name: "TimeoutError"
    });
  }
}
const Mu = -1;
class Q extends v {
  constructor(e, { code: n, docsPath: r, metaMessages: s, name: o, shortMessage: i }) {
    super(i, {
      cause: e,
      docsPath: r,
      metaMessages: s || (e == null ? void 0 : e.metaMessages),
      name: o || "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = o || e.name, this.code = e instanceof si ? e.code : n ?? Mu;
  }
}
class bt extends Q {
  constructor(e, n) {
    super(e, n), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = n.data;
  }
}
class Ot extends Q {
  constructor(e) {
    super(e, {
      code: Ot.code,
      name: "ParseRpcError",
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    });
  }
}
Object.defineProperty(Ot, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class Ct extends Q {
  constructor(e) {
    super(e, {
      code: Ct.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object."
    });
  }
}
Object.defineProperty(Ct, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class Nt extends Q {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: Nt.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${n ? ` "${n}"` : ""} does not exist / is not available.`
    });
  }
}
Object.defineProperty(Nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class Rt extends Q {
  constructor(e) {
    super(e, {
      code: Rt.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(Rt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class Ze extends Q {
  constructor(e) {
    super(e, {
      code: Ze.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received."
    });
  }
}
Object.defineProperty(Ze, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class We extends Q {
  constructor(e) {
    super(e, {
      code: We.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(We, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class Ft extends Q {
  constructor(e) {
    super(e, {
      code: Ft.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(Ft, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class Lt extends Q {
  constructor(e) {
    super(e, {
      code: Lt.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available."
    });
  }
}
Object.defineProperty(Lt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class Mt extends Q {
  constructor(e) {
    super(e, {
      code: Mt.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed."
    });
  }
}
Object.defineProperty(Mt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class zt extends Q {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: zt.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${n ? ` "${n}"` : ""} is not implemented.`
    });
  }
}
Object.defineProperty(zt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class ut extends Q {
  constructor(e) {
    super(e, {
      code: ut.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit."
    });
  }
}
Object.defineProperty(ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class Ut extends Q {
  constructor(e) {
    super(e, {
      code: Ut.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported."
    });
  }
}
Object.defineProperty(Ut, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class it extends bt {
  constructor(e) {
    super(e, {
      code: it.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request."
    });
  }
}
Object.defineProperty(it, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class jt extends bt {
  constructor(e) {
    super(e, {
      code: jt.code,
      name: "UnauthorizedProviderError",
      shortMessage: "The requested method and/or account has not been authorized by the user."
    });
  }
}
Object.defineProperty(jt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class qt extends bt {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: qt.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${n ? ` " ${n}"` : ""}.`
    });
  }
}
Object.defineProperty(qt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class Dt extends bt {
  constructor(e) {
    super(e, {
      code: Dt.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains."
    });
  }
}
Object.defineProperty(Dt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Gt extends bt {
  constructor(e) {
    super(e, {
      code: Gt.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain."
    });
  }
}
Object.defineProperty(Gt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class Ht extends bt {
  constructor(e) {
    super(e, {
      code: Ht.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain."
    });
  }
}
Object.defineProperty(Ht, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class zu extends Q {
  constructor(e) {
    super(e, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred."
    });
  }
}
const Uu = 3;
function Vt(t, { abi: e, address: n, args: r, docsPath: s, functionName: o, sender: i }) {
  const { code: a, data: c, message: u, shortMessage: f } = t instanceof Dr ? t : t instanceof v ? t.walk((l) => "data" in l) || t.walk() : {}, d = t instanceof xn ? new Fu({ functionName: o }) : [Uu, Ze.code].includes(a) && (c || u || f) ? new cr({
    abi: e,
    data: typeof c == "object" ? c.data : c,
    functionName: o,
    message: f ?? u
  }) : t;
  return new Ru(d, {
    abi: e,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: o,
    sender: i
  });
}
function ju(t) {
  const e = Z(`0x${t.substring(4)}`).substring(26);
  return An(`0x${e}`);
}
async function qu({ hash: t, signature: e }) {
  const n = le(t) ? t : R(t), { secp256k1: r } = await Promise.resolve().then(() => zl);
  return `0x${(() => {
    if (typeof e == "object" && "r" in e && "s" in e) {
      const { r: u, s: f, v: d, yParity: l } = e, p = Number(l ?? d), m = qs(p);
      return new r.Signature(Ne(u), Ne(f)).addRecoveryBit(m);
    }
    const i = le(e) ? e : R(e), a = be(`0x${i.slice(130)}`), c = qs(a);
    return r.Signature.fromCompact(i.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(n.substring(2)).toHex(!1)}`;
}
function qs(t) {
  if (t === 0 || t === 1)
    return t;
  if (t === 27)
    return 0;
  if (t === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function oi({ hash: t, signature: e }) {
  return ju(await qu({ hash: t, signature: e }));
}
function Ke(t, e = "hex") {
  const n = ii(t), r = qr(new Uint8Array(n.length));
  return n.encode(r), e === "hex" ? H(r.bytes) : r.bytes;
}
function ii(t) {
  return Array.isArray(t) ? Du(t.map((e) => ii(e))) : Gu(t);
}
function Du(t) {
  const e = t.reduce((s, o) => s + o.length, 0), n = ai(e);
  return {
    length: e <= 55 ? 1 + e : 1 + n + e,
    encode(s) {
      e <= 55 ? s.pushByte(192 + e) : (s.pushByte(247 + n), n === 1 ? s.pushUint8(e) : n === 2 ? s.pushUint16(e) : n === 3 ? s.pushUint24(e) : s.pushUint32(e));
      for (const { encode: o } of t)
        o(s);
    }
  };
}
function Gu(t) {
  const e = typeof t == "string" ? he(t) : t, n = ai(e.length);
  return {
    length: e.length === 1 && e[0] < 128 ? 1 : e.length <= 55 ? 1 + e.length : 1 + n + e.length,
    encode(s) {
      e.length === 1 && e[0] < 128 ? s.pushBytes(e) : e.length <= 55 ? (s.pushByte(128 + e.length), s.pushBytes(e)) : (s.pushByte(183 + n), n === 1 ? s.pushUint8(e.length) : n === 2 ? s.pushUint16(e.length) : n === 3 ? s.pushUint24(e.length) : s.pushUint32(e.length), s.pushBytes(e));
    }
  };
}
function ai(t) {
  if (t < 2 ** 8)
    return 1;
  if (t < 2 ** 16)
    return 2;
  if (t < 2 ** 24)
    return 3;
  if (t < 2 ** 32)
    return 4;
  throw new v("Length is too large.");
}
function Hu(t) {
  const { chainId: e, contractAddress: n, nonce: r, to: s } = t, o = Z(_e([
    "0x05",
    Ke([
      e ? O(e) : "0x",
      n,
      r ? O(r) : "0x"
    ])
  ]));
  return s === "bytes" ? he(o) : o;
}
async function Vu(t) {
  const { authorization: e, signature: n } = t;
  return oi({
    hash: Hu(e),
    signature: n ?? e
  });
}
class Zu extends v {
  constructor(e, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: d, value: l }) {
    var m;
    const p = In({
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof l < "u" && `${ei(l)} ${((m = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${de(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${de(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${de(u)} gwei`,
      nonce: f
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: r,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        p
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = e;
  }
}
class rt extends v {
  constructor({ cause: e, message: n } = {}) {
    var s;
    const r = (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : s.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: e,
      name: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(rt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(rt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class Ye extends v {
  constructor({ cause: e, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${de(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: e,
      name: "FeeCapTooHighError"
    });
  }
}
Object.defineProperty(Ye, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class ur extends v {
  constructor({ cause: e, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${de(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: e,
      name: "FeeCapTooLowError"
    });
  }
}
Object.defineProperty(ur, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class fr extends v {
  constructor({ cause: e, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: e, name: "NonceTooHighError" });
  }
}
Object.defineProperty(fr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class dr extends v {
  constructor({ cause: e, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: e, name: "NonceTooLowError" });
  }
}
Object.defineProperty(dr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class lr extends v {
  constructor({ cause: e, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: e, name: "NonceMaxValueError" });
  }
}
Object.defineProperty(lr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class hr extends v {
  constructor({ cause: e } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: e,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ],
      name: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(hr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/
});
class pr extends v {
  constructor({ cause: e, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: e,
      name: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(pr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class yr extends v {
  constructor({ cause: e, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: e,
      name: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(yr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class br extends v {
  constructor({ cause: e }) {
    super("The transaction type is not supported for this chain.", {
      cause: e,
      name: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(br, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class Zt extends v {
  constructor({ cause: e, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${de(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${de(r)} gwei` : ""}).`
    ].join(`
`), {
      cause: e,
      name: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(Zt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class Gr extends v {
  constructor({ cause: e }) {
    super(`An error occurred while executing: ${e == null ? void 0 : e.shortMessage}`, {
      cause: e,
      name: "UnknownNodeError"
    });
  }
}
function ci(t, e) {
  const n = (t.details || "").toLowerCase(), r = t instanceof v ? t.walk((s) => (s == null ? void 0 : s.code) === rt.code) : t;
  return r instanceof v ? new rt({
    cause: t,
    message: r.details
  }) : rt.nodeMessage.test(n) ? new rt({
    cause: t,
    message: t.details
  }) : Ye.nodeMessage.test(n) ? new Ye({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
  }) : ur.nodeMessage.test(n) ? new ur({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
  }) : fr.nodeMessage.test(n) ? new fr({ cause: t, nonce: e == null ? void 0 : e.nonce }) : dr.nodeMessage.test(n) ? new dr({ cause: t, nonce: e == null ? void 0 : e.nonce }) : lr.nodeMessage.test(n) ? new lr({ cause: t, nonce: e == null ? void 0 : e.nonce }) : hr.nodeMessage.test(n) ? new hr({ cause: t }) : pr.nodeMessage.test(n) ? new pr({ cause: t, gas: e == null ? void 0 : e.gas }) : yr.nodeMessage.test(n) ? new yr({ cause: t, gas: e == null ? void 0 : e.gas }) : br.nodeMessage.test(n) ? new br({ cause: t }) : Zt.nodeMessage.test(n) ? new Zt({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas,
    maxPriorityFeePerGas: e == null ? void 0 : e.maxPriorityFeePerGas
  }) : new Gr({
    cause: t
  });
}
function Wu(t, { docsPath: e, ...n }) {
  const r = (() => {
    const s = ci(t, n);
    return s instanceof Gr ? t : s;
  })();
  return new Zu(r, {
    docsPath: e,
    ...n
  });
}
function ui(t, { format: e }) {
  if (!e)
    return {};
  const n = {};
  function r(o) {
    const i = Object.keys(o);
    for (const a of i)
      a in t && (n[a] = t[a]), o[a] && typeof o[a] == "object" && !Array.isArray(o[a]) && r(o[a]);
  }
  const s = e(t || {});
  return r(s), n;
}
function Hr(t, e) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (s) => {
      const o = e(s);
      if (n)
        for (const i of n)
          delete o[i];
      return {
        ...o,
        ...r(s)
      };
    },
    type: t
  });
}
const Ku = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function fi(t) {
  const e = {};
  return typeof t.authorizationList < "u" && (e.authorizationList = Yu(t.authorizationList)), typeof t.accessList < "u" && (e.accessList = t.accessList), typeof t.blobVersionedHashes < "u" && (e.blobVersionedHashes = t.blobVersionedHashes), typeof t.blobs < "u" && (typeof t.blobs[0] != "string" ? e.blobs = t.blobs.map((n) => H(n)) : e.blobs = t.blobs), typeof t.data < "u" && (e.data = t.data), typeof t.from < "u" && (e.from = t.from), typeof t.gas < "u" && (e.gas = O(t.gas)), typeof t.gasPrice < "u" && (e.gasPrice = O(t.gasPrice)), typeof t.maxFeePerBlobGas < "u" && (e.maxFeePerBlobGas = O(t.maxFeePerBlobGas)), typeof t.maxFeePerGas < "u" && (e.maxFeePerGas = O(t.maxFeePerGas)), typeof t.maxPriorityFeePerGas < "u" && (e.maxPriorityFeePerGas = O(t.maxPriorityFeePerGas)), typeof t.nonce < "u" && (e.nonce = O(t.nonce)), typeof t.to < "u" && (e.to = t.to), typeof t.type < "u" && (e.type = Ku[t.type]), typeof t.value < "u" && (e.value = O(t.value)), e;
}
function Yu(t) {
  return t.map((e) => ({
    address: e.contractAddress,
    r: e.r,
    s: e.s,
    chainId: O(e.chainId),
    nonce: O(e.nonce),
    ...typeof e.yParity < "u" ? { yParity: O(e.yParity) } : {},
    ...typeof e.v < "u" && typeof e.yParity > "u" ? { v: O(e.v) } : {}
  }));
}
function Ds(t) {
  if (!(!t || t.length === 0))
    return t.reduce((e, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new Is({
          size: n.length,
          targetSize: 66,
          type: "hex"
        });
      if (r.length !== 66)
        throw new Is({
          size: r.length,
          targetSize: 66,
          type: "hex"
        });
      return e[n] = r, e;
    }, {});
}
function Ju(t) {
  const { balance: e, nonce: n, state: r, stateDiff: s, code: o } = t, i = {};
  if (o !== void 0 && (i.code = o), e !== void 0 && (i.balance = O(e)), n !== void 0 && (i.nonce = O(n)), r !== void 0 && (i.state = Ds(r)), s !== void 0) {
    if (i.state)
      throw new _u();
    i.stateDiff = Ds(s);
  }
  return i;
}
function di(t) {
  if (!t)
    return;
  const e = {};
  for (const { address: n, ...r } of t) {
    if (!J(n, { strict: !1 }))
      throw new ee({ address: n });
    if (e[n])
      throw new Tu({ address: n });
    e[n] = Ju(r);
  }
  return e;
}
const Sn = 2n ** 256n - 1n;
function Vr(t) {
  const { account: e, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: s, to: o } = t, i = e ? Me(e) : void 0;
  if (i && !J(i.address))
    throw new ee({ address: i.address });
  if (o && !J(o))
    throw new ee({ address: o });
  if (typeof n < "u" && (typeof r < "u" || typeof s < "u"))
    throw new Su();
  if (r && r > Sn)
    throw new Ye({ maxFeePerGas: r });
  if (s && r && s > r)
    throw new Zt({ maxFeePerGas: r, maxPriorityFeePerGas: s });
}
class Xu extends v {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
}
class Zr extends v {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
}
class Qu extends v {
  constructor({ maxPriorityFeePerGas: e }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${de(e)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
}
class li extends v {
  constructor({ blockHash: e, blockNumber: n }) {
    let r = "Block";
    e && (r = `Block at hash "${e}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`, { name: "BlockNotFoundError" });
  }
}
const hi = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function Wr(t) {
  const e = {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    chainId: t.chainId ? be(t.chainId) : void 0,
    gas: t.gas ? BigInt(t.gas) : void 0,
    gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
    maxFeePerBlobGas: t.maxFeePerBlobGas ? BigInt(t.maxFeePerBlobGas) : void 0,
    maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: t.maxPriorityFeePerGas ? BigInt(t.maxPriorityFeePerGas) : void 0,
    nonce: t.nonce ? be(t.nonce) : void 0,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    type: t.type ? hi[t.type] : void 0,
    typeHex: t.type ? t.type : void 0,
    value: t.value ? BigInt(t.value) : void 0,
    v: t.v ? BigInt(t.v) : void 0
  };
  return t.authorizationList && (e.authorizationList = ef(t.authorizationList)), e.yParity = (() => {
    if (t.yParity)
      return Number(t.yParity);
    if (typeof e.v == "bigint") {
      if (e.v === 0n || e.v === 27n)
        return 0;
      if (e.v === 1n || e.v === 28n)
        return 1;
      if (e.v >= 35n)
        return e.v % 2n === 0n ? 1 : 0;
    }
  })(), e.type === "legacy" && (delete e.accessList, delete e.maxFeePerBlobGas, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas, delete e.yParity), e.type === "eip2930" && (delete e.maxFeePerBlobGas, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas), e.type === "eip1559" && delete e.maxFeePerBlobGas, e;
}
const Xh = /* @__PURE__ */ Hr("transaction", Wr);
function ef(t) {
  return t.map((e) => ({
    contractAddress: e.address,
    chainId: Number(e.chainId),
    nonce: Number(e.nonce),
    r: e.r,
    s: e.s,
    yParity: Number(e.yParity)
  }));
}
function Kr(t) {
  var n;
  const e = (n = t.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : Wr(r));
  return {
    ...t,
    baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
    blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0,
    difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
    excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0,
    gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
    hash: t.hash ? t.hash : null,
    logsBloom: t.logsBloom ? t.logsBloom : null,
    nonce: t.nonce ? t.nonce : null,
    number: t.number ? BigInt(t.number) : null,
    size: t.size ? BigInt(t.size) : void 0,
    timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
    transactions: e,
    totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null
  };
}
const Qh = /* @__PURE__ */ Hr("block", Kr);
async function Be(t, { blockHash: e, blockNumber: n, blockTag: r, includeTransactions: s } = {}) {
  var f, d, l;
  const o = r ?? "latest", i = s ?? !1, a = n !== void 0 ? O(n) : void 0;
  let c = null;
  if (e ? c = await t.request({
    method: "eth_getBlockByHash",
    params: [e, i]
  }, { dedupe: !0 }) : c = await t.request({
    method: "eth_getBlockByNumber",
    params: [a || o, i]
  }, { dedupe: !!a }), !c)
    throw new li({ blockHash: e, blockNumber: n });
  return (((l = (d = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : d.block) == null ? void 0 : l.format) || Kr)(c);
}
async function Yr(t) {
  const e = await t.request({
    method: "eth_gasPrice"
  });
  return BigInt(e);
}
async function tf(t, e) {
  return pi(t, e);
}
async function pi(t, e) {
  var o, i;
  const { block: n, chain: r = t.chain, request: s } = e || {};
  try {
    const a = ((o = r == null ? void 0 : r.fees) == null ? void 0 : o.maxPriorityFeePerGas) ?? ((i = r == null ? void 0 : r.fees) == null ? void 0 : i.defaultPriorityFee);
    if (typeof a == "function") {
      const u = n || await C(t, Be, "getBlock")({}), f = await a({
        block: u,
        client: t,
        request: s
      });
      if (f === null)
        throw new Error();
      return f;
    }
    if (typeof a < "u")
      return a;
    const c = await t.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return Ne(c);
  } catch {
    const [a, c] = await Promise.all([
      n ? Promise.resolve(n) : C(t, Be, "getBlock")({}),
      C(t, Yr, "getGasPrice")({})
    ]);
    if (typeof a.baseFeePerGas != "bigint")
      throw new Zr();
    const u = c - a.baseFeePerGas;
    return u < 0n ? 0n : u;
  }
}
async function nf(t, e) {
  return mr(t, e);
}
async function mr(t, e) {
  var l, p;
  const { block: n, chain: r = t.chain, request: s, type: o = "eip1559" } = e || {}, i = await (async () => {
    var m, y;
    return typeof ((m = r == null ? void 0 : r.fees) == null ? void 0 : m.baseFeeMultiplier) == "function" ? r.fees.baseFeeMultiplier({
      block: n,
      client: t,
      request: s
    }) : ((y = r == null ? void 0 : r.fees) == null ? void 0 : y.baseFeeMultiplier) ?? 1.2;
  })();
  if (i < 1)
    throw new Xu();
  const c = 10 ** (((l = i.toString().split(".")[1]) == null ? void 0 : l.length) ?? 0), u = (m) => m * BigInt(Math.ceil(i * c)) / BigInt(c), f = n || await C(t, Be, "getBlock")({});
  if (typeof ((p = r == null ? void 0 : r.fees) == null ? void 0 : p.estimateFeesPerGas) == "function") {
    const m = await r.fees.estimateFeesPerGas({
      block: n,
      client: t,
      multiply: u,
      request: s,
      type: o
    });
    if (m !== null)
      return m;
  }
  if (o === "eip1559") {
    if (typeof f.baseFeePerGas != "bigint")
      throw new Zr();
    const m = typeof (s == null ? void 0 : s.maxPriorityFeePerGas) == "bigint" ? s.maxPriorityFeePerGas : await pi(t, {
      block: f,
      chain: r,
      request: s
    }), y = u(f.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? y + m,
      maxPriorityFeePerGas: m
    };
  }
  return {
    gasPrice: (s == null ? void 0 : s.gasPrice) ?? u(await C(t, Yr, "getGasPrice")({}))
  };
}
async function yi(t, { address: e, blockTag: n = "latest", blockNumber: r }) {
  const s = await t.request({
    method: "eth_getTransactionCount",
    params: [e, r ? O(r) : n]
  }, { dedupe: !!r });
  return be(s);
}
function Jr(t) {
  const { kzg: e } = t, n = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"), r = typeof t.blobs[0] == "string" ? t.blobs.map((o) => he(o)) : t.blobs, s = [];
  for (const o of r)
    s.push(Uint8Array.from(e.blobToKzgCommitment(o)));
  return n === "bytes" ? s : s.map((o) => H(o));
}
function Xr(t) {
  const { kzg: e } = t, n = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"), r = typeof t.blobs[0] == "string" ? t.blobs.map((i) => he(i)) : t.blobs, s = typeof t.commitments[0] == "string" ? t.commitments.map((i) => he(i)) : t.commitments, o = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i], c = s[i];
    o.push(Uint8Array.from(e.computeBlobKzgProof(a, c)));
  }
  return n === "bytes" ? o : o.map((i) => H(i));
}
function rf(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const s = BigInt(32), o = BigInt(4294967295), i = Number(n >> s & o), a = Number(n & o), c = r ? 4 : 0, u = r ? 0 : 4;
  t.setUint32(e + c, i, r), t.setUint32(e + u, a, r);
}
const sf = (t, e, n) => t & e ^ ~t & n, of = (t, e, n) => t & e ^ t & n ^ e & n;
class af extends Rr {
  constructor(e, n, r, s) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = qn(this.buffer);
  }
  update(e) {
    ct(this);
    const { view: n, buffer: r, blockLen: s } = this;
    e = Pn(e);
    const o = e.length;
    for (let i = 0; i < o; ) {
      const a = Math.min(s - this.pos, o - i);
      if (a === s) {
        const c = qn(e);
        for (; s <= o - i; i += s)
          this.process(c, i);
        continue;
      }
      r.set(e.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === s && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    ct(this), Fo(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: s, isLE: o } = this;
    let { pos: i } = this;
    n[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > s - i && (this.process(r, 0), i = 0);
    for (let d = i; d < s; d++)
      n[d] = 0;
    rf(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const a = qn(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < u; d++)
      a.setUint32(4 * d, f[d], o);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: s, finished: o, destroyed: i, pos: a } = this;
    return e.length = s, e.pos = a, e.finished = o, e.destroyed = i, s % n && e.buffer.set(r), e;
  }
}
const cf = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), $e = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ke = /* @__PURE__ */ new Uint32Array(64);
class uf extends af {
  constructor() {
    super(64, 32, 8, !1), this.A = $e[0] | 0, this.B = $e[1] | 0, this.C = $e[2] | 0, this.D = $e[3] | 0, this.E = $e[4] | 0, this.F = $e[5] | 0, this.G = $e[6] | 0, this.H = $e[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: s, E: o, F: i, G: a, H: c } = this;
    return [e, n, r, s, o, i, a, c];
  }
  // prettier-ignore
  set(e, n, r, s, o, i, a, c) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = i | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, n) {
    for (let d = 0; d < 16; d++, n += 4)
      ke[d] = e.getUint32(n, !1);
    for (let d = 16; d < 64; d++) {
      const l = ke[d - 15], p = ke[d - 2], m = ye(l, 7) ^ ye(l, 18) ^ l >>> 3, y = ye(p, 17) ^ ye(p, 19) ^ p >>> 10;
      ke[d] = y + ke[d - 7] + m + ke[d - 16] | 0;
    }
    let { A: r, B: s, C: o, D: i, E: a, F: c, G: u, H: f } = this;
    for (let d = 0; d < 64; d++) {
      const l = ye(a, 6) ^ ye(a, 11) ^ ye(a, 25), p = f + l + sf(a, c, u) + cf[d] + ke[d] | 0, y = (ye(r, 2) ^ ye(r, 13) ^ ye(r, 22)) + of(r, s, o) | 0;
      f = u, u = c, c = a, a = i + p | 0, i = o, o = s, s = r, r = p + y | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(r, s, o, i, a, c, u, f);
  }
  roundClean() {
    ke.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const bi = /* @__PURE__ */ Lo(() => new uf());
function ff(t, e) {
  return bi(le(t, { strict: !1 }) ? yt(t) : t);
}
function df(t) {
  const { commitment: e, version: n = 1 } = t, r = t.to ?? (typeof e == "string" ? "hex" : "bytes"), s = ff(e);
  return s.set([n], 0), r === "bytes" ? s : H(s);
}
function mi(t) {
  const { commitments: e, version: n } = t, r = t.to ?? (typeof e[0] == "string" ? "hex" : "bytes"), s = [];
  for (const o of e)
    s.push(df({
      commitment: o,
      to: r,
      version: n
    }));
  return s;
}
const Gs = 6, gi = 32, Qr = 4096, wi = gi * Qr, Hs = wi * Gs - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * Qr * Gs, vi = 1;
class lf extends v {
  constructor({ maxSize: e, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${e} bytes`, `Given: ${n} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}
class xi extends v {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}
class hf extends v {
  constructor({ hash: e, size: n }) {
    super(`Versioned hash "${e}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${n}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
}
class pf extends v {
  constructor({ hash: e, version: n }) {
    super(`Versioned hash "${e}" version is invalid.`, {
      metaMessages: [
        `Expected: ${vi}`,
        `Received: ${n}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
}
function yf(t) {
  const e = t.to ?? (typeof t.data == "string" ? "hex" : "bytes"), n = typeof t.data == "string" ? he(t.data) : t.data, r = j(n);
  if (!r)
    throw new xi();
  if (r > Hs)
    throw new lf({
      maxSize: Hs,
      size: r
    });
  const s = [];
  let o = !0, i = 0;
  for (; o; ) {
    const a = qr(new Uint8Array(wi));
    let c = 0;
    for (; c < Qr; ) {
      const u = n.slice(i, i + (gi - 1));
      if (a.pushByte(0), a.pushBytes(u), u.length < 31) {
        a.pushByte(128), o = !1;
        break;
      }
      c++, i += 31;
    }
    s.push(a);
  }
  return e === "bytes" ? s.map((a) => a.bytes) : s.map((a) => H(a.bytes));
}
function Ei(t) {
  const { data: e, kzg: n, to: r } = t, s = t.blobs ?? yf({ data: e, to: r }), o = t.commitments ?? Jr({ blobs: s, kzg: n, to: r }), i = t.proofs ?? Xr({ blobs: s, commitments: o, kzg: n, to: r }), a = [];
  for (let c = 0; c < s.length; c++)
    a.push({
      blob: s[c],
      commitment: o[c],
      proof: i[c]
    });
  return a;
}
function Pi(t) {
  if (t.type)
    return t.type;
  if (typeof t.authorizationList < "u")
    return "eip7702";
  if (typeof t.blobs < "u" || typeof t.blobVersionedHashes < "u" || typeof t.maxFeePerBlobGas < "u" || typeof t.sidecars < "u")
    return "eip4844";
  if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof t.gasPrice < "u")
    return typeof t.accessList < "u" ? "eip2930" : "legacy";
  throw new ku({ transaction: t });
}
async function Bi(t) {
  const e = await t.request({
    method: "eth_chainId"
  }, { dedupe: !0 });
  return be(e);
}
const bf = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function Ai(t, e) {
  const { account: n = t.account, blobs: r, chain: s, gas: o, kzg: i, nonce: a, nonceManager: c, parameters: u = bf, type: f } = e, d = n ? Me(n) : void 0, l = { ...e, ...d ? { from: d == null ? void 0 : d.address } : {} };
  let p;
  async function m() {
    return p || (p = await C(t, Be, "getBlock")({ blockTag: "latest" }), p);
  }
  let y;
  async function h() {
    return y || (s ? s.id : typeof e.chainId < "u" ? e.chainId : (y = await C(t, Bi, "getChainId")({}), y));
  }
  if ((u.includes("blobVersionedHashes") || u.includes("sidecars")) && r && i) {
    const b = Jr({ blobs: r, kzg: i });
    if (u.includes("blobVersionedHashes")) {
      const g = mi({
        commitments: b,
        to: "hex"
      });
      l.blobVersionedHashes = g;
    }
    if (u.includes("sidecars")) {
      const g = Xr({ blobs: r, commitments: b, kzg: i }), w = Ei({
        blobs: r,
        commitments: b,
        proofs: g,
        to: "hex"
      });
      l.sidecars = w;
    }
  }
  if (u.includes("chainId") && (l.chainId = await h()), u.includes("nonce") && typeof a > "u" && d)
    if (c) {
      const b = await h();
      l.nonce = await c.consume({
        address: d.address,
        chainId: b,
        client: t
      });
    } else
      l.nonce = await C(t, yi, "getTransactionCount")({
        address: d.address,
        blockTag: "pending"
      });
  if ((u.includes("fees") || u.includes("type")) && typeof f > "u")
    try {
      l.type = Pi(l);
    } catch {
      const b = await m();
      l.type = typeof (b == null ? void 0 : b.baseFeePerGas) == "bigint" ? "eip1559" : "legacy";
    }
  if (u.includes("fees"))
    if (l.type !== "legacy" && l.type !== "eip2930") {
      if (typeof l.maxFeePerGas > "u" || typeof l.maxPriorityFeePerGas > "u") {
        const b = await m(), { maxFeePerGas: g, maxPriorityFeePerGas: w } = await mr(t, {
          block: b,
          chain: s,
          request: l
        });
        if (typeof e.maxPriorityFeePerGas > "u" && e.maxFeePerGas && e.maxFeePerGas < w)
          throw new Qu({
            maxPriorityFeePerGas: w
          });
        l.maxPriorityFeePerGas = w, l.maxFeePerGas = g;
      }
    } else {
      if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
        throw new Zr();
      const b = await m(), { gasPrice: g } = await mr(t, {
        block: b,
        chain: s,
        request: l,
        type: "legacy"
      });
      l.gasPrice = g;
    }
  return u.includes("gas") && typeof o > "u" && (l.gas = await C(t, es, "estimateGas")({
    ...l,
    account: d ? { address: d.address, type: "json-rpc" } : void 0
  })), Vr(l), delete l.parameters, l;
}
async function Ti(t, { address: e, blockNumber: n, blockTag: r = "latest" }) {
  const s = n ? O(n) : void 0, o = await t.request({
    method: "eth_getBalance",
    params: [e, s || r]
  });
  return BigInt(o);
}
async function es(t, e) {
  var s, o, i;
  const n = e.account ?? t.account, r = n ? Me(n) : void 0;
  try {
    let T = function(_) {
      const { block: $, request: F, rpcStateOverride: U } = _;
      return t.request({
        method: "eth_estimateGas",
        params: U ? [F, $ ?? "latest", U] : $ ? [F, $] : [F]
      });
    };
    const { accessList: a, authorizationList: c, blobs: u, blobVersionedHashes: f, blockNumber: d, blockTag: l, data: p, gas: m, gasPrice: y, maxFeePerBlobGas: h, maxFeePerGas: b, maxPriorityFeePerGas: g, nonce: w, value: x, stateOverride: I, ...P } = await Ai(t, {
      ...e,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        (r == null ? void 0 : r.type) === "local" ? void 0 : ["blobVersionedHashes"]
      )
    }), B = (d ? O(d) : void 0) || l, A = di(I), M = await (async () => {
      if (P.to)
        return P.to;
      if (c && c.length > 0)
        return await Vu({
          authorization: c[0]
        }).catch(() => {
          throw new v("`to` is required. Could not infer from `authorizationList`");
        });
    })();
    Vr(e);
    const k = (i = (o = (s = t.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionRequest) == null ? void 0 : i.format, z = (k || fi)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...ui(P, { format: k }),
      from: r == null ? void 0 : r.address,
      accessList: a,
      authorizationList: c,
      blobs: u,
      blobVersionedHashes: f,
      data: p,
      gas: m,
      gasPrice: y,
      maxFeePerBlobGas: h,
      maxFeePerGas: b,
      maxPriorityFeePerGas: g,
      nonce: w,
      to: M,
      value: x
    });
    let S = BigInt(await T({ block: B, request: z, rpcStateOverride: A }));
    if (c) {
      const _ = await Ti(t, { address: z.from }), $ = await Promise.all(c.map(async (F) => {
        const { contractAddress: U } = F, q = await T({
          block: B,
          request: {
            authorizationList: void 0,
            data: p,
            from: r == null ? void 0 : r.address,
            to: U,
            value: O(_)
          },
          rpcStateOverride: A
        }).catch(() => 100000n);
        return 2n * BigInt(q);
      }));
      S += $.reduce((F, U) => F + U, 0n);
    }
    return S;
  } catch (a) {
    throw Wu(a, {
      ...e,
      account: r,
      chain: t.chain
    });
  }
}
async function mf(t, e) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = e, a = ze({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    return await C(t, es, "estimateGas")({
      data: a,
      to: r,
      ...i
    });
  } catch (c) {
    const u = i.account ? Me(i.account) : void 0;
    throw Vt(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: o,
      sender: u == null ? void 0 : u.address
    });
  }
}
function $n(t, e) {
  if (!J(t, { strict: !1 }))
    throw new ee({ address: t });
  if (!J(e, { strict: !1 }))
    throw new ee({ address: e });
  return t.toLowerCase() === e.toLowerCase();
}
const Vs = "/docs/contract/decodeEventLog";
function ts(t) {
  const { abi: e, data: n, strict: r, topics: s } = t, o = r ?? !0, [i, ...a] = s;
  if (!i)
    throw new ic({ docsPath: Vs });
  const c = e.length === 1 ? e[0] : e.find((y) => y.type === "event" && i === Bn(Ae(y)));
  if (!(c && "name" in c) || c.type !== "event")
    throw new Oo(i, { docsPath: Vs });
  const { name: u, inputs: f } = c, d = f == null ? void 0 : f.some((y) => !("name" in y && y.name));
  let l = d ? [] : {};
  const p = f.filter((y) => "indexed" in y && y.indexed);
  for (let y = 0; y < p.length; y++) {
    const h = p[y], b = a[y];
    if (!b)
      throw new En({
        abiItem: c,
        param: h
      });
    l[d ? y : h.name || y] = gf({ param: h, value: b });
  }
  const m = f.filter((y) => !("indexed" in y && y.indexed));
  if (m.length > 0) {
    if (n && n !== "0x")
      try {
        const y = _n(m, n);
        if (y)
          if (d)
            l = [...l, ...y];
          else
            for (let h = 0; h < m.length; h++)
              l[m[h].name] = y[h];
      } catch (y) {
        if (o)
          throw y instanceof $o || y instanceof Ko ? new It({
            abiItem: c,
            data: n,
            params: m,
            size: j(n)
          }) : y;
      }
    else if (o)
      throw new It({
        abiItem: c,
        data: "0x",
        params: m,
        size: 0
      });
  }
  return {
    eventName: u,
    args: Object.values(l).length > 0 ? l : void 0
  };
}
function gf({ param: t, value: e }) {
  return t.type === "string" || t.type === "bytes" || t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/) ? e : (_n([t], e) || [])[0];
}
function ns(t) {
  const { abi: e, args: n, logs: r, strict: s = !0 } = t, o = (() => {
    if (t.eventName)
      return Array.isArray(t.eventName) ? t.eventName : [t.eventName];
  })();
  return r.map((i) => {
    var a;
    try {
      const c = e.find((f) => f.type === "event" && i.topics[0] === Bn(f));
      if (!c)
        return null;
      const u = ts({
        ...i,
        abi: [c],
        strict: s
      });
      return o && !o.includes(u.eventName) || !wf({
        args: u.args,
        inputs: c.inputs,
        matchArgs: n
      }) ? null : { ...u, ...i };
    } catch (c) {
      let u, f;
      if (c instanceof Oo)
        return null;
      if (c instanceof It || c instanceof En) {
        if (s)
          return null;
        u = c.abiItem.name, f = (a = c.abiItem.inputs) == null ? void 0 : a.some((d) => !("name" in d && d.name));
      }
      return { ...i, args: f ? [] : {}, eventName: u };
    }
  }).filter(Boolean);
}
function wf(t) {
  const { args: e, inputs: n, matchArgs: r } = t;
  if (!r)
    return !0;
  if (!e)
    return !1;
  function s(o, i, a) {
    try {
      return o.type === "address" ? $n(i, a) : o.type === "string" || o.type === "bytes" ? Z(yt(i)) === a : i === a;
    } catch {
      return !1;
    }
  }
  return Array.isArray(e) && Array.isArray(r) ? r.every((o, i) => {
    if (o == null)
      return !0;
    const a = n[i];
    return a ? (Array.isArray(o) ? o : [o]).some((u) => s(a, u, e[i])) : !1;
  }) : typeof e == "object" && !Array.isArray(e) && typeof r == "object" && !Array.isArray(r) ? Object.entries(r).every(([o, i]) => {
    if (i == null)
      return !0;
    const a = n.find((u) => u.name === o);
    return a ? (Array.isArray(i) ? i : [i]).some((u) => s(a, u, e[o])) : !1;
  }) : !1;
}
function Re(t, { args: e, eventName: n } = {}) {
  return {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    logIndex: t.logIndex ? Number(t.logIndex) : null,
    transactionHash: t.transactionHash ? t.transactionHash : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    ...n ? { args: e, eventName: n } : {}
  };
}
async function rs(t, { address: e, blockHash: n, fromBlock: r, toBlock: s, event: o, events: i, args: a, strict: c } = {}) {
  const u = c ?? !1, f = i ?? (o ? [o] : void 0);
  let d = [];
  f && (d = [f.flatMap((y) => Xt({
    abi: [y],
    eventName: y.name,
    args: i ? void 0 : a
  }))], o && (d = d[0]));
  let l;
  n ? l = await t.request({
    method: "eth_getLogs",
    params: [{ address: e, topics: d, blockHash: n }]
  }) : l = await t.request({
    method: "eth_getLogs",
    params: [
      {
        address: e,
        topics: d,
        fromBlock: typeof r == "bigint" ? O(r) : r,
        toBlock: typeof s == "bigint" ? O(s) : s
      }
    ]
  });
  const p = l.map((m) => Re(m));
  return f ? ns({
    abi: f,
    args: a,
    logs: p,
    strict: u
  }) : p;
}
async function _i(t, e) {
  const { abi: n, address: r, args: s, blockHash: o, eventName: i, fromBlock: a, toBlock: c, strict: u } = e, f = i ? Jt({ abi: n, name: i }) : void 0, d = f ? void 0 : n.filter((l) => l.type === "event");
  return C(t, rs, "getLogs")({
    address: r,
    args: s,
    blockHash: o,
    event: f,
    events: d,
    fromBlock: a,
    toBlock: c,
    strict: u
  });
}
const Hn = "/docs/contract/decodeFunctionResult";
function mt(t) {
  const { abi: e, args: n, functionName: r, data: s } = t;
  let o = e[0];
  if (r) {
    const a = Jt({ abi: e, args: n, name: r });
    if (!a)
      throw new gn(r, { docsPath: Hn });
    o = a;
  }
  if (o.type !== "function")
    throw new gn(void 0, { docsPath: Hn });
  if (!o.outputs)
    throw new ac(o.name, { docsPath: Hn });
  const i = _n(o.outputs, s);
  if (i && i.length > 1)
    return i;
  if (i && i.length === 1)
    return i[0];
}
const gr = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], Ii = [
  {
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverNotContract",
    type: "error"
  },
  {
    inputs: [
      {
        name: "returnData",
        type: "bytes"
      }
    ],
    name: "ResolverError",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          {
            name: "status",
            type: "uint16"
          },
          {
            name: "message",
            type: "string"
          }
        ],
        name: "errors",
        type: "tuple[]"
      }
    ],
    name: "HttpError",
    type: "error"
  }
], Si = [
  ...Ii,
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  },
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" },
      { name: "gateways", type: "string[]" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], vf = [
  ...Ii,
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{ type: "bytes", name: "reverseName" }],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  },
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [
      { type: "bytes", name: "reverseName" },
      { type: "string[]", name: "gateways" }
    ],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  }
], Zs = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], Ws = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], Ks = [
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "isValidSig"
  }
], ep = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: !0,
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: !0,
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint8"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ]
  }
], xf = "0x82ad56cb", Ef = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe", Pf = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe", Bf = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
class wr extends v {
  constructor({ blockNumber: e, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...e && r.blockCreated && r.blockCreated > e ? [
          `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`
        ] : [
          `- The chain does not have the contract "${r.name}" configured.`
        ]
      ],
      name: "ChainDoesNotSupportContract"
    });
  }
}
class $i extends v {
  constructor() {
    super("No chain was provided to the Client.", {
      name: "ClientChainNotConfiguredError"
    });
  }
}
class kn extends v {
  constructor({ chainId: e }) {
    super(typeof e == "number" ? `Chain ID "${e}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
  }
}
const Vn = "/docs/contract/encodeDeployData";
function ss(t) {
  const { abi: e, args: n, bytecode: r } = t;
  if (!n || n.length === 0)
    return r;
  const s = e.find((i) => "type" in i && i.type === "constructor");
  if (!s)
    throw new nc({ docsPath: Vn });
  if (!("inputs" in s))
    throw new Ts({ docsPath: Vn });
  if (!s.inputs || s.inputs.length === 0)
    throw new Ts({ docsPath: Vn });
  const o = Xe(s.inputs, n);
  return _e([r, o]);
}
function gt({ blockNumber: t, chain: e, contract: n }) {
  var s;
  const r = (s = e == null ? void 0 : e.contracts) == null ? void 0 : s[n];
  if (!r)
    throw new wr({
      chain: e,
      contract: { name: n }
    });
  if (t && r.blockCreated && r.blockCreated > t)
    throw new wr({
      blockNumber: t,
      chain: e,
      contract: {
        name: n,
        blockCreated: r.blockCreated
      }
    });
  return r.address;
}
function Af(t, { docsPath: e, ...n }) {
  const r = (() => {
    const s = ci(t, n);
    return s instanceof Gr ? t : s;
  })();
  return new ri(r, {
    docsPath: e,
    ...n
  });
}
const Zn = /* @__PURE__ */ new Map();
function ki({ fn: t, id: e, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const o = async () => {
    const f = c();
    i();
    const d = f.map(({ args: l }) => l);
    d.length !== 0 && t(d).then((l) => {
      var p;
      s && Array.isArray(l) && l.sort(s);
      for (let m = 0; m < f.length; m++) {
        const { pendingPromise: y } = f[m];
        (p = y.resolve) == null || p.call(y, [l[m], l]);
      }
    }).catch((l) => {
      var p;
      for (let m = 0; m < f.length; m++) {
        const { pendingPromise: y } = f[m];
        (p = y.reject) == null || p.call(y, l);
      }
    });
  }, i = () => Zn.delete(e), a = () => c().map(({ args: f }) => f), c = () => Zn.get(e) || [], u = (f) => Zn.set(e, [...c(), f]);
  return {
    flush: i,
    async schedule(f) {
      const d = {}, l = new Promise((y, h) => {
        d.resolve = y, d.reject = h;
      });
      return (n == null ? void 0 : n([...a(), f])) && o(), c().length > 0 ? (u({ args: f, pendingPromise: d }), l) : (u({ args: f, pendingPromise: d }), setTimeout(o, r), l);
    }
  };
}
async function en(t, e) {
  var k, N, z, T;
  const { account: n = t.account, batch: r = !!((k = t.batch) != null && k.multicall), blockNumber: s, blockTag: o = "latest", accessList: i, blobs: a, code: c, data: u, factory: f, factoryData: d, gas: l, gasPrice: p, maxFeePerBlobGas: m, maxFeePerGas: y, maxPriorityFeePerGas: h, nonce: b, to: g, value: w, stateOverride: x, ...I } = e, P = n ? Me(n) : void 0;
  if (c && (f || d))
    throw new v("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
  if (c && g)
    throw new v("Cannot provide both `code` & `to` as parameters.");
  const E = c && u, B = f && d && g && u, A = E || B, M = E ? If({
    code: c,
    data: u
  }) : B ? Sf({
    data: u,
    factory: f,
    factoryData: d,
    to: g
  }) : u;
  try {
    Vr(e);
    const _ = (s ? O(s) : void 0) || o, $ = di(x), F = (T = (z = (N = t.chain) == null ? void 0 : N.formatters) == null ? void 0 : z.transactionRequest) == null ? void 0 : T.format, q = (F || fi)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...ui(I, { format: F }),
      from: P == null ? void 0 : P.address,
      accessList: i,
      blobs: a,
      data: M,
      gas: l,
      gasPrice: p,
      maxFeePerBlobGas: m,
      maxFeePerGas: y,
      maxPriorityFeePerGas: h,
      nonce: b,
      to: A ? void 0 : g,
      value: w
    });
    if (r && Tf({ request: q }) && !$)
      try {
        return await _f(t, {
          ...q,
          blockNumber: s,
          blockTag: o
        });
      } catch (te) {
        if (!(te instanceof $i) && !(te instanceof wr))
          throw te;
      }
    const Y = await t.request({
      method: "eth_call",
      params: $ ? [
        q,
        _,
        $
      ] : [q, _]
    });
    return Y === "0x" ? { data: void 0 } : { data: Y };
  } catch (S) {
    const _ = $f(S), { offchainLookup: $, offchainLookupSignature: F } = await Promise.resolve().then(() => _d);
    if (t.ccipRead !== !1 && (_ == null ? void 0 : _.slice(0, 10)) === F && g)
      return { data: await $(t, { data: _, to: g }) };
    throw A && (_ == null ? void 0 : _.slice(0, 10)) === "0x101bb98d" ? new Lu({ factory: f }) : Af(S, {
      ...e,
      account: P,
      chain: t.chain
    });
  }
}
function Tf({ request: t }) {
  const { data: e, to: n, ...r } = t;
  return !(!e || e.startsWith(xf) || !n || Object.values(r).filter((s) => typeof s < "u").length > 0);
}
async function _f(t, e) {
  var y;
  const { batchSize: n = 1024, wait: r = 0 } = typeof ((y = t.batch) == null ? void 0 : y.multicall) == "object" ? t.batch.multicall : {}, { blockNumber: s, blockTag: o = "latest", data: i, multicallAddress: a, to: c } = e;
  let u = a;
  if (!u) {
    if (!t.chain)
      throw new $i();
    u = gt({
      blockNumber: s,
      chain: t.chain,
      contract: "multicall3"
    });
  }
  const d = (s ? O(s) : void 0) || o, { schedule: l } = ki({
    id: `${t.uid}.${d}`,
    wait: r,
    shouldSplitBatch(h) {
      return h.reduce((g, { data: w }) => g + (w.length - 2), 0) > n * 2;
    },
    fn: async (h) => {
      const b = h.map((x) => ({
        allowFailure: !0,
        callData: x.data,
        target: x.to
      })), g = ze({
        abi: gr,
        args: [b],
        functionName: "aggregate3"
      }), w = await t.request({
        method: "eth_call",
        params: [
          {
            data: g,
            to: u
          },
          d
        ]
      });
      return mt({
        abi: gr,
        args: [b],
        functionName: "aggregate3",
        data: w || "0x"
      });
    }
  }), [{ returnData: p, success: m }] = await l({ data: i, to: c });
  if (!m)
    throw new Dr({ data: p });
  return p === "0x" ? { data: void 0 } : { data: p };
}
function If(t) {
  const { code: e, data: n } = t;
  return ss({
    abi: _o(["constructor(bytes, bytes)"]),
    bytecode: Ef,
    args: [e, n]
  });
}
function Sf(t) {
  const { data: e, factory: n, factoryData: r, to: s } = t;
  return ss({
    abi: _o(["constructor(address, bytes, address, bytes)"]),
    bytecode: Pf,
    args: [s, e, n, r]
  });
}
function $f(t) {
  var n;
  if (!(t instanceof v))
    return;
  const e = t.walk();
  return typeof (e == null ? void 0 : e.data) == "object" ? (n = e.data) == null ? void 0 : n.data : e.data;
}
async function Te(t, e) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = e, a = ze({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    const { data: c } = await C(t, en, "call")({
      ...i,
      data: a,
      to: r
    });
    return mt({
      abi: n,
      args: s,
      functionName: o,
      data: c || "0x"
    });
  } catch (c) {
    throw Vt(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/readContract",
      functionName: o
    });
  }
}
async function kf(t, e) {
  const { abi: n, address: r, args: s, dataSuffix: o, functionName: i, ...a } = e, c = a.account ? Me(a.account) : t.account, u = ze({ abi: n, args: s, functionName: i });
  try {
    const { data: f } = await C(t, en, "call")({
      batch: !1,
      data: `${u}${o ? o.replace("0x", "") : ""}`,
      to: r,
      ...a,
      account: c
    }), d = mt({
      abi: n,
      args: s,
      functionName: i,
      data: f || "0x"
    }), l = n.filter((p) => "name" in p && p.name === e.functionName);
    return {
      result: d,
      request: {
        abi: l,
        address: r,
        args: s,
        dataSuffix: o,
        functionName: i,
        ...a,
        account: c
      }
    };
  } catch (f) {
    throw Vt(f, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/simulateContract",
      functionName: i,
      sender: c == null ? void 0 : c.address
    });
  }
}
const Wn = /* @__PURE__ */ new Map(), Ys = /* @__PURE__ */ new Map();
let Of = 0;
function Fe(t, e, n) {
  const r = ++Of, s = () => Wn.get(t) || [], o = () => {
    const f = s();
    Wn.set(t, f.filter((d) => d.id !== r));
  }, i = () => {
    const f = Ys.get(t);
    s().length === 1 && f && f(), o();
  }, a = s();
  if (Wn.set(t, [
    ...a,
    { id: r, fns: e }
  ]), a && a.length > 0)
    return i;
  const c = {};
  for (const f in e)
    c[f] = (...d) => {
      var p, m;
      const l = s();
      if (l.length !== 0)
        for (const y of l)
          (m = (p = y.fns)[f]) == null || m.call(p, ...d);
    };
  const u = n(c);
  return typeof u == "function" && Ys.set(t, u), i;
}
async function vr(t) {
  return new Promise((e) => setTimeout(e, t));
}
function tn(t, { emitOnBegin: e, initialWaitTime: n, interval: r }) {
  let s = !0;
  const o = () => s = !1;
  return (async () => {
    let a;
    e && (a = await t({ unpoll: o }));
    const c = await (n == null ? void 0 : n(a)) ?? r;
    await vr(c);
    const u = async () => {
      s && (await t({ unpoll: o }), await vr(r), u());
    };
    u();
  })(), o;
}
const Cf = /* @__PURE__ */ new Map(), Nf = /* @__PURE__ */ new Map();
function Rf(t) {
  const e = (s, o) => ({
    clear: () => o.delete(s),
    get: () => o.get(s),
    set: (i) => o.set(s, i)
  }), n = e(t, Cf), r = e(t, Nf);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r
  };
}
async function Ff(t, { cacheKey: e, cacheTime: n = Number.POSITIVE_INFINITY }) {
  const r = Rf(e), s = r.response.get();
  if (s && n > 0 && (/* @__PURE__ */ new Date()).getTime() - s.created.getTime() < n)
    return s.data;
  let o = r.promise.get();
  o || (o = t(), r.promise.set(o));
  try {
    const i = await o;
    return r.response.set({ created: /* @__PURE__ */ new Date(), data: i }), i;
  } finally {
    r.promise.clear();
  }
}
const Lf = (t) => `blockNumber.${t}`;
async function nn(t, { cacheTime: e = t.cacheTime } = {}) {
  const n = await Ff(() => t.request({
    method: "eth_blockNumber"
  }), { cacheKey: Lf(t.uid), cacheTime: e });
  return BigInt(n);
}
async function On(t, { filter: e }) {
  const n = "strict" in e && e.strict, r = await e.request({
    method: "eth_getFilterChanges",
    params: [e.id]
  });
  if (typeof r[0] == "string")
    return r;
  const s = r.map((o) => Re(o));
  return !("abi" in e) || !e.abi ? s : ns({
    abi: e.abi,
    logs: s,
    strict: n
  });
}
async function Cn(t, { filter: e }) {
  return e.request({
    method: "eth_uninstallFilter",
    params: [e.id]
  });
}
function Mf(t, e) {
  const { abi: n, address: r, args: s, batch: o = !0, eventName: i, fromBlock: a, onError: c, onLogs: u, poll: f, pollingInterval: d = t.pollingInterval, strict: l } = e;
  return (typeof f < "u" ? f : typeof a == "bigint" ? !0 : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket")) ? (() => {
    const h = l ?? !1, b = K([
      "watchContractEvent",
      r,
      s,
      o,
      t.uid,
      i,
      d,
      h,
      a
    ]);
    return Fe(b, { onLogs: u, onError: c }, (g) => {
      let w;
      a !== void 0 && (w = a - 1n);
      let x, I = !1;
      const P = tn(async () => {
        var E;
        if (!I) {
          try {
            x = await C(t, Zo, "createContractEventFilter")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              strict: h,
              fromBlock: a
            });
          } catch {
          }
          I = !0;
          return;
        }
        try {
          let B;
          if (x)
            B = await C(t, On, "getFilterChanges")({ filter: x });
          else {
            const A = await C(t, nn, "getBlockNumber")({});
            w && w < A ? B = await C(t, _i, "getContractEvents")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              fromBlock: w + 1n,
              toBlock: A,
              strict: h
            }) : B = [], w = A;
          }
          if (B.length === 0)
            return;
          if (o)
            g.onLogs(B);
          else
            for (const A of B)
              g.onLogs([A]);
        } catch (B) {
          x && B instanceof We && (I = !1), (E = g.onError) == null || E.call(g, B);
        }
      }, {
        emitOnBegin: !0,
        interval: d
      });
      return async () => {
        x && await C(t, Cn, "uninstallFilter")({ filter: x }), P();
      };
    });
  })() : (() => {
    const h = l ?? !1, b = K([
      "watchContractEvent",
      r,
      s,
      o,
      t.uid,
      i,
      d,
      h
    ]);
    let g = !0, w = () => g = !1;
    return Fe(b, { onLogs: u, onError: c }, (x) => ((async () => {
      try {
        const I = (() => {
          if (t.transport.type === "fallback") {
            const B = t.transport.transports.find((A) => A.config.type === "webSocket");
            return B ? B.value : t.transport;
          }
          return t.transport;
        })(), P = i ? Xt({
          abi: n,
          eventName: i,
          args: s
        }) : [], { unsubscribe: E } = await I.subscribe({
          params: ["logs", { address: r, topics: P }],
          onData(B) {
            var M;
            if (!g)
              return;
            const A = B.result;
            try {
              const { eventName: k, args: N } = ts({
                abi: n,
                data: A.data,
                topics: A.topics,
                strict: l
              }), z = Re(A, {
                args: N,
                eventName: k
              });
              x.onLogs([z]);
            } catch (k) {
              let N, z;
              if (k instanceof It || k instanceof En) {
                if (l)
                  return;
                N = k.abiItem.name, z = (M = k.abiItem.inputs) == null ? void 0 : M.some((S) => !("name" in S && S.name));
              }
              const T = Re(A, {
                args: z ? [] : {},
                eventName: N
              });
              x.onLogs([T]);
            }
          },
          onError(B) {
            var A;
            (A = x.onError) == null || A.call(x, B);
          }
        });
        w = E, g || w();
      } catch (I) {
        c == null || c(I);
      }
    })(), () => w()));
  })();
}
async function zf(t, { serializedTransaction: e }) {
  return t.request({
    method: "eth_sendRawTransaction",
    params: [e]
  }, { retryCount: 0 });
}
class Uf extends v {
  constructor({ address: e }) {
    super(`No EIP-712 domain found on contract "${e}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${e}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
}
async function jf(t, e) {
  const { address: n, factory: r, factoryData: s } = e;
  try {
    const [o, i, a, c, u, f, d] = await C(t, Te, "readContract")({
      abi: qf,
      address: n,
      functionName: "eip712Domain",
      factory: r,
      factoryData: s
    });
    return {
      domain: {
        name: i,
        version: a,
        chainId: Number(c),
        verifyingContract: u,
        salt: f
      },
      extensions: d,
      fields: o
    };
  } catch (o) {
    const i = o;
    throw i.name === "ContractFunctionExecutionError" && i.cause.name === "ContractFunctionZeroDataError" ? new Uf({ address: n }) : i;
  }
}
const qf = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
], xr = 256;
let cn = xr, un;
function Oi(t = 11) {
  if (!un || cn + t > xr * 2) {
    un = "", cn = 0;
    for (let e = 0; e < xr; e++)
      un += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return un.substring(cn, cn++ + t);
}
function Df(t) {
  const { batch: e, cacheTime: n = t.pollingInterval ?? 4e3, ccipRead: r, key: s = "base", name: o = "Base Client", pollingInterval: i = 4e3, type: a = "base" } = t, c = t.chain, u = t.account ? Me(t.account) : void 0, { config: f, request: d, value: l } = t.transport({
    chain: c,
    pollingInterval: i
  }), p = { ...f, ...l }, m = {
    account: u,
    batch: e,
    cacheTime: n,
    ccipRead: r,
    chain: c,
    key: s,
    name: o,
    pollingInterval: i,
    request: d,
    transport: p,
    type: a,
    uid: Oi()
  };
  function y(h) {
    return (b) => {
      const g = b(h);
      for (const x in m)
        delete g[x];
      const w = { ...h, ...g };
      return Object.assign(w, { extend: y(w) });
    };
  }
  return Object.assign(m, { extend: y(m) });
}
const fn = /* @__PURE__ */ new Lr(8192);
function Gf(t, { enabled: e = !0, id: n }) {
  if (!e || !n)
    return t();
  if (fn.get(n))
    return fn.get(n);
  const r = t().finally(() => fn.delete(n));
  return fn.set(n, r), r;
}
function Er(t, { delay: e = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((s, o) => {
    const i = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: u }) => {
        const f = typeof e == "function" ? e({ count: a, error: u }) : e;
        f && await vr(f), i({ count: a + 1 });
      };
      try {
        const u = await t();
        s(u);
      } catch (u) {
        if (a < n && await r({ count: a, error: u }))
          return c({ error: u });
        o(u);
      }
    };
    i();
  });
}
function Hf(t, e = {}) {
  return async (n, r = {}) => {
    const { dedupe: s = !1, retryDelay: o = 150, retryCount: i = 3, uid: a } = {
      ...e,
      ...r
    }, c = s ? Z(St(`${a}.${K(n)}`)) : void 0;
    return Gf(() => Er(async () => {
      try {
        return await t(n);
      } catch (u) {
        const f = u;
        switch (f.code) {
          case Ot.code:
            throw new Ot(f);
          case Ct.code:
            throw new Ct(f);
          case Nt.code:
            throw new Nt(f, { method: n.method });
          case Rt.code:
            throw new Rt(f);
          case Ze.code:
            throw new Ze(f);
          case We.code:
            throw new We(f);
          case Ft.code:
            throw new Ft(f);
          case Lt.code:
            throw new Lt(f);
          case Mt.code:
            throw new Mt(f);
          case zt.code:
            throw new zt(f, {
              method: n.method
            });
          case ut.code:
            throw new ut(f);
          case Ut.code:
            throw new Ut(f);
          case it.code:
            throw new it(f);
          case jt.code:
            throw new jt(f);
          case qt.code:
            throw new qt(f);
          case Dt.code:
            throw new Dt(f);
          case Gt.code:
            throw new Gt(f);
          case Ht.code:
            throw new Ht(f);
          case 5e3:
            throw new it(f);
          default:
            throw u instanceof v ? u : new zu(f);
        }
      }
    }, {
      delay: ({ count: u, error: f }) => {
        var d;
        if (f && f instanceof Ge) {
          const l = (d = f == null ? void 0 : f.headers) == null ? void 0 : d.get("Retry-After");
          if (l != null && l.match(/\d/))
            return Number.parseInt(l) * 1e3;
        }
        return ~~(1 << u) * o;
      },
      retryCount: i,
      shouldRetry: ({ error: u }) => Vf(u)
    }), { enabled: s, id: c });
  };
}
function Vf(t) {
  return "code" in t && typeof t.code == "number" ? t.code === -1 || t.code === ut.code || t.code === Ze.code : t instanceof Ge && t.status ? t.status === 403 || t.status === 408 || t.status === 413 || t.status === 429 || t.status === 500 || t.status === 502 || t.status === 503 || t.status === 504 : !0;
}
function Zf({ key: t, name: e, request: n, retryCount: r = 3, retryDelay: s = 150, timeout: o, type: i }, a) {
  const c = Oi();
  return {
    config: {
      key: t,
      name: e,
      request: n,
      retryCount: r,
      retryDelay: s,
      timeout: o,
      type: i
    },
    request: Hf(n, { retryCount: r, retryDelay: s, uid: c }),
    value: a
  };
}
class Wf extends v {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
}
function Kf(t, { errorInstance: e = new Error("timed out"), timeout: n, signal: r }) {
  return new Promise((s, o) => {
    (async () => {
      let i;
      try {
        const a = new AbortController();
        n > 0 && (i = setTimeout(() => {
          r ? a.abort() : o(e);
        }, n)), s(await t({ signal: (a == null ? void 0 : a.signal) || null }));
      } catch (a) {
        (a == null ? void 0 : a.name) === "AbortError" && o(e), o(a);
      } finally {
        clearTimeout(i);
      }
    })();
  });
}
function Yf() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
const Js = /* @__PURE__ */ Yf();
function Jf(t, e = {}) {
  return {
    async request(n) {
      var d;
      const { body: r, onRequest: s = e.onRequest, onResponse: o = e.onResponse, timeout: i = e.timeout ?? 1e4 } = n, a = {
        ...e.fetchOptions ?? {},
        ...n.fetchOptions ?? {}
      }, { headers: c, method: u, signal: f } = a;
      try {
        const l = await Kf(async ({ signal: m }) => {
          const y = {
            ...a,
            body: Array.isArray(r) ? K(r.map((w) => ({
              jsonrpc: "2.0",
              id: w.id ?? Js.take(),
              ...w
            }))) : K({
              jsonrpc: "2.0",
              id: r.id ?? Js.take(),
              ...r
            }),
            headers: {
              "Content-Type": "application/json",
              ...c
            },
            method: u || "POST",
            signal: f || (i > 0 ? m : null)
          }, h = new Request(t, y), b = await (s == null ? void 0 : s(h, y)) ?? { ...y, url: t };
          return await fetch(b.url ?? t, b);
        }, {
          errorInstance: new js({ body: r, url: t }),
          timeout: i,
          signal: !0
        });
        o && await o(l);
        let p;
        if ((d = l.headers.get("Content-Type")) != null && d.startsWith("application/json"))
          p = await l.json();
        else {
          p = await l.text();
          try {
            p = JSON.parse(p || "{}");
          } catch (m) {
            if (l.ok)
              throw m;
            p = { error: p };
          }
        }
        if (!l.ok)
          throw new Ge({
            body: r,
            details: K(p.error) || l.statusText,
            headers: l.headers,
            status: l.status,
            url: t
          });
        return p;
      } catch (l) {
        throw l instanceof Ge || l instanceof js ? l : new Ge({
          body: r,
          cause: l,
          url: t
        });
      }
    }
  };
}
function tp(t, e = {}) {
  const { batch: n, fetchOptions: r, key: s = "http", name: o = "HTTP JSON-RPC", onFetchRequest: i, onFetchResponse: a, retryDelay: c } = e;
  return ({ chain: u, retryCount: f, timeout: d }) => {
    const { batchSize: l = 1e3, wait: p = 0 } = typeof n == "object" ? n : {}, m = e.retryCount ?? f, y = d ?? e.timeout ?? 1e4, h = t || (u == null ? void 0 : u.rpcUrls.default.http[0]);
    if (!h)
      throw new Wf();
    const b = Jf(h, {
      fetchOptions: r,
      onRequest: i,
      onResponse: a,
      timeout: y
    });
    return Zf({
      key: s,
      name: o,
      async request({ method: g, params: w }) {
        const x = { method: g, params: w }, { schedule: I } = ki({
          id: h,
          wait: p,
          shouldSplitBatch(A) {
            return A.length > l;
          },
          fn: (A) => b.request({
            body: A
          }),
          sort: (A, M) => A.id - M.id
        }), P = async (A) => n ? I(A) : [
          await b.request({
            body: A
          })
        ], [{ error: E, result: B }] = await P(x);
        if (E)
          throw new si({
            body: x,
            error: E,
            url: h
          });
        return B;
      },
      retryCount: m,
      retryDelay: c,
      timeout: y,
      type: "http"
    }, {
      fetchOptions: r,
      url: h
    });
  };
}
function os(t, e) {
  var r, s, o, i, a, c;
  if (!(t instanceof v))
    return !1;
  const n = t.walk((u) => u instanceof cr);
  return n instanceof cr ? !!(((r = n.data) == null ? void 0 : r.errorName) === "ResolverNotFound" || ((s = n.data) == null ? void 0 : s.errorName) === "ResolverWildcardNotSupported" || ((o = n.data) == null ? void 0 : o.errorName) === "ResolverNotContract" || ((i = n.data) == null ? void 0 : i.errorName) === "ResolverError" || ((a = n.data) == null ? void 0 : a.errorName) === "HttpError" || (c = n.reason) != null && c.includes("Wildcard on non-extended resolvers is not supported") || e === "reverse" && n.reason === Wo[50]) : !1;
}
function Ci(t) {
  if (t.length !== 66 || t.indexOf("[") !== 0 || t.indexOf("]") !== 65)
    return null;
  const e = `0x${t.slice(1, 65)}`;
  return le(e) ? e : null;
}
function hn(t) {
  let e = new Uint8Array(32).fill(0);
  if (!t)
    return H(e);
  const n = t.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = Ci(n[r]), o = s ? yt(s) : Z(De(n[r]), "bytes");
    e = Z(me([e, o]), "bytes");
  }
  return H(e);
}
function Xf(t) {
  return `[${t.slice(2)}]`;
}
function Qf(t) {
  const e = new Uint8Array(32).fill(0);
  return t ? Ci(t) || Z(De(t)) : H(e);
}
function Nn(t) {
  const e = t.replace(/^\.|\.$/gm, "");
  if (e.length === 0)
    return new Uint8Array(1);
  const n = new Uint8Array(De(e).byteLength + 2);
  let r = 0;
  const s = e.split(".");
  for (let o = 0; o < s.length; o++) {
    let i = De(s[o]);
    i.byteLength > 255 && (i = De(Xf(Qf(s[o])))), n[r] = i.length, n.set(i, r + 1), r += i.length + 1;
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
async function ed(t, { blockNumber: e, blockTag: n, coinType: r, name: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = gt({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = ze({
      abi: Ws,
      functionName: "addr",
      ...r != null ? { args: [hn(s), BigInt(r)] } : { args: [hn(s)] }
    }), f = {
      address: c,
      abi: Si,
      functionName: "resolve",
      args: [R(Nn(s)), u],
      blockNumber: e,
      blockTag: n
    }, d = C(t, Te, "readContract"), l = o ? await d({
      ...f,
      args: [...f.args, o]
    }) : await d(f);
    if (l[0] === "0x")
      return null;
    const p = mt({
      abi: Ws,
      args: r != null ? [hn(s), BigInt(r)] : void 0,
      functionName: "addr",
      data: l[0]
    });
    return p === "0x" || fe(p) === "0x00" ? null : p;
  } catch (u) {
    if (i)
      throw u;
    if (os(u, "resolve"))
      return null;
    throw u;
  }
}
class td extends v {
  constructor({ data: e }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(e)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
}
class Bt extends v {
  constructor({ reason: e }) {
    super(`ENS NFT avatar URI is invalid. ${e}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
}
class is extends v {
  constructor({ uri: e }) {
    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
}
class nd extends v {
  constructor({ namespace: e }) {
    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
}
const rd = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, sd = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, od = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, id = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function ad(t) {
  try {
    const e = await fetch(t, { method: "HEAD" });
    if (e.status === 200) {
      const n = e.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (e) {
    return typeof e == "object" && typeof e.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((n) => {
      const r = new Image();
      r.onload = () => {
        n(!0);
      }, r.onerror = () => {
        n(!1);
      }, r.src = t;
    });
  }
}
function Xs(t, e) {
  return t ? t.endsWith("/") ? t.slice(0, -1) : t : e;
}
function Ni({ uri: t, gatewayUrls: e }) {
  const n = od.test(t);
  if (n)
    return { uri: t, isOnChain: !0, isEncoded: n };
  const r = Xs(e == null ? void 0 : e.ipfs, "https://ipfs.io"), s = Xs(e == null ? void 0 : e.arweave, "https://arweave.net"), o = t.match(rd), { protocol: i, subpath: a, target: c, subtarget: u = "" } = (o == null ? void 0 : o.groups) || {}, f = i === "ipns:/" || a === "ipns/", d = i === "ipfs:/" || a === "ipfs/" || sd.test(t);
  if (t.startsWith("http") && !f && !d) {
    let p = t;
    return e != null && e.arweave && (p = t.replace(/https:\/\/arweave.net/g, e == null ? void 0 : e.arweave)), { uri: p, isOnChain: !1, isEncoded: !1 };
  }
  if ((f || d) && c)
    return {
      uri: `${r}/${f ? "ipns" : "ipfs"}/${c}${u}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (i === "ar:/" && c)
    return {
      uri: `${s}/${c}${u || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let l = t.replace(id, "");
  if (l.startsWith("<svg") && (l = `data:image/svg+xml;base64,${btoa(l)}`), l.startsWith("data:") || l.startsWith("{"))
    return {
      uri: l,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new is({ uri: t });
}
function Ri(t) {
  if (typeof t != "object" || !("image" in t) && !("image_url" in t) && !("image_data" in t))
    throw new td({ data: t });
  return t.image || t.image_url || t.image_data;
}
async function cd({ gatewayUrls: t, uri: e }) {
  try {
    const n = await fetch(e).then((s) => s.json());
    return await as({
      gatewayUrls: t,
      uri: Ri(n)
    });
  } catch {
    throw new is({ uri: e });
  }
}
async function as({ gatewayUrls: t, uri: e }) {
  const { uri: n, isOnChain: r } = Ni({ uri: e, gatewayUrls: t });
  if (r || await ad(n))
    return n;
  throw new is({ uri: e });
}
function ud(t) {
  let e = t;
  e.startsWith("did:nft:") && (e = e.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, s] = e.split("/"), [o, i] = n.split(":"), [a, c] = r.split(":");
  if (!o || o.toLowerCase() !== "eip155")
    throw new Bt({ reason: "Only EIP-155 supported" });
  if (!i)
    throw new Bt({ reason: "Chain ID not found" });
  if (!c)
    throw new Bt({
      reason: "Contract address not found"
    });
  if (!s)
    throw new Bt({ reason: "Token ID not found" });
  if (!a)
    throw new Bt({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(i),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: s
  };
}
async function fd(t, { nft: e }) {
  if (e.namespace === "erc721")
    return Te(t, {
      address: e.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(e.tokenID)]
    });
  if (e.namespace === "erc1155")
    return Te(t, {
      address: e.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(e.tokenID)]
    });
  throw new nd({ namespace: e.namespace });
}
async function dd(t, { gatewayUrls: e, record: n }) {
  return /eip155:/i.test(n) ? ld(t, { gatewayUrls: e, record: n }) : as({ uri: n, gatewayUrls: e });
}
async function ld(t, { gatewayUrls: e, record: n }) {
  const r = ud(n), s = await fd(t, { nft: r }), { uri: o, isOnChain: i, isEncoded: a } = Ni({ uri: s, gatewayUrls: e });
  if (i && (o.includes("data:application/json;base64,") || o.startsWith("{"))) {
    const u = a ? (
      // if it is encoded, decode it
      atob(o.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      o
    ), f = JSON.parse(u);
    return as({ uri: Ri(f), gatewayUrls: e });
  }
  let c = r.tokenID;
  return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), cd({
    gatewayUrls: e,
    uri: o.replace(/(?:0x)?{id}/, c)
  });
}
async function Fi(t, { blockNumber: e, blockTag: n, name: r, key: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = gt({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = {
      address: c,
      abi: Si,
      functionName: "resolve",
      args: [
        R(Nn(r)),
        ze({
          abi: Zs,
          functionName: "text",
          args: [hn(r), s]
        })
      ],
      blockNumber: e,
      blockTag: n
    }, f = C(t, Te, "readContract"), d = o ? await f({
      ...u,
      args: [...u.args, o]
    }) : await f(u);
    if (d[0] === "0x")
      return null;
    const l = mt({
      abi: Zs,
      functionName: "text",
      data: d[0]
    });
    return l === "" ? null : l;
  } catch (u) {
    if (i)
      throw u;
    if (os(u, "resolve"))
      return null;
    throw u;
  }
}
async function hd(t, { blockNumber: e, blockTag: n, assetGatewayUrls: r, name: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  const c = await C(t, Fi, "getEnsText")({
    blockNumber: e,
    blockTag: n,
    key: "avatar",
    name: s,
    universalResolverAddress: a,
    gatewayUrls: o,
    strict: i
  });
  if (!c)
    return null;
  try {
    return await dd(t, {
      record: c,
      gatewayUrls: r
    });
  } catch {
    return null;
  }
}
async function pd(t, { address: e, blockNumber: n, blockTag: r, gatewayUrls: s, strict: o, universalResolverAddress: i }) {
  let a = i;
  if (!a) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    a = gt({
      blockNumber: n,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  const c = `${e.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const u = {
      address: a,
      abi: vf,
      functionName: "reverse",
      args: [R(Nn(c))],
      blockNumber: n,
      blockTag: r
    }, f = C(t, Te, "readContract"), [d, l] = s ? await f({
      ...u,
      args: [...u.args, s]
    }) : await f(u);
    return e.toLowerCase() !== l.toLowerCase() ? null : d;
  } catch (u) {
    if (o)
      throw u;
    if (os(u, "reverse"))
      return null;
    throw u;
  }
}
async function yd(t, { blockNumber: e, blockTag: n, name: r, universalResolverAddress: s }) {
  let o = s;
  if (!o) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    o = gt({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [i] = await C(t, Te, "readContract")({
    address: o,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [R(Nn(r))],
    blockNumber: e,
    blockTag: n
  });
  return i;
}
async function bd(t) {
  const e = Tn(t, {
    method: "eth_newBlockFilter"
  }), n = await t.request({
    method: "eth_newBlockFilter"
  });
  return { id: n, request: e(n), type: "block" };
}
async function Li(t, { address: e, args: n, event: r, events: s, fromBlock: o, strict: i, toBlock: a } = {}) {
  const c = s ?? (r ? [r] : void 0), u = Tn(t, {
    method: "eth_newFilter"
  });
  let f = [];
  c && (f = [c.flatMap((p) => Xt({
    abi: [p],
    eventName: p.name,
    args: n
  }))], r && (f = f[0]));
  const d = await t.request({
    method: "eth_newFilter",
    params: [
      {
        address: e,
        fromBlock: typeof o == "bigint" ? O(o) : o,
        toBlock: typeof a == "bigint" ? O(a) : a,
        ...f.length ? { topics: f } : {}
      }
    ]
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: o,
    id: d,
    request: u(d),
    strict: !!i,
    toBlock: a,
    type: "event"
  };
}
async function Mi(t) {
  const e = Tn(t, {
    method: "eth_newPendingTransactionFilter"
  }), n = await t.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: n, request: e(n), type: "transaction" };
}
async function md(t) {
  const e = await t.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(e);
}
async function gd(t, { blockHash: e, blockNumber: n, blockTag: r = "latest" } = {}) {
  const s = n !== void 0 ? O(n) : void 0;
  let o;
  return e ? o = await t.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [e]
  }, { dedupe: !0 }) : o = await t.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [s || r]
  }, { dedupe: !!s }), be(o);
}
async function Qs(t, { address: e, blockNumber: n, blockTag: r = "latest" }) {
  const s = n !== void 0 ? O(n) : void 0, o = await t.request({
    method: "eth_getCode",
    params: [e, s || r]
  }, { dedupe: !!s });
  if (o !== "0x")
    return o;
}
function wd(t) {
  var e;
  return {
    baseFeePerGas: t.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: t.gasUsedRatio,
    oldestBlock: BigInt(t.oldestBlock),
    reward: (e = t.reward) == null ? void 0 : e.map((n) => n.map((r) => BigInt(r)))
  };
}
async function vd(t, { blockCount: e, blockNumber: n, blockTag: r = "latest", rewardPercentiles: s }) {
  const o = n ? O(n) : void 0, i = await t.request({
    method: "eth_feeHistory",
    params: [
      O(e),
      o || r,
      s
    ]
  }, { dedupe: !!o });
  return wd(i);
}
async function xd(t, { filter: e }) {
  const n = e.strict ?? !1, s = (await e.request({
    method: "eth_getFilterLogs",
    params: [e.id]
  })).map((o) => Re(o));
  return e.abi ? ns({
    abi: e.abi,
    logs: s,
    strict: n
  }) : s;
}
class Ed extends v {
  constructor({ callbackSelector: e, cause: n, data: r, extraData: s, sender: o, urls: i }) {
    var a;
    super(n.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: n,
      metaMessages: [
        ...n.metaMessages || [],
        (a = n.metaMessages) != null && a.length ? "" : [],
        "Offchain Gateway Call:",
        i && [
          "  Gateway URL(s):",
          ...i.map((c) => `    ${Qt(c)}`)
        ],
        `  Sender: ${o}`,
        `  Data: ${r}`,
        `  Callback selector: ${e}`,
        `  Extra data: ${s}`
      ].flat(),
      name: "OffchainLookupError"
    });
  }
}
class Pd extends v {
  constructor({ result: e, url: n }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${Qt(n)}`,
        `Response: ${K(e)}`
      ],
      name: "OffchainLookupResponseMalformedError"
    });
  }
}
class Bd extends v {
  constructor({ sender: e, to: n }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${n}`,
        `OffchainLookup sender address: ${e}`
      ],
      name: "OffchainLookupSenderMismatchError"
    });
  }
}
const Ad = "0x556f1830", zi = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function Td(t, { blockNumber: e, blockTag: n, data: r, to: s }) {
  const { args: o } = Yo({
    data: r,
    abi: [zi]
  }), [i, a, c, u, f] = o, { ccipRead: d } = t, l = d && typeof (d == null ? void 0 : d.request) == "function" ? d.request : Ui;
  try {
    if (!$n(s, i))
      throw new Bd({ sender: i, to: s });
    const p = await l({ data: c, sender: i, urls: a }), { data: m } = await en(t, {
      blockNumber: e,
      blockTag: n,
      data: me([
        u,
        Xe([{ type: "bytes" }, { type: "bytes" }], [p, f])
      ]),
      to: s
    });
    return m;
  } catch (p) {
    throw new Ed({
      callbackSelector: u,
      cause: p,
      data: r,
      extraData: f,
      sender: i,
      urls: a
    });
  }
}
async function Ui({ data: t, sender: e, urls: n }) {
  var s;
  let r = new Error("An unknown error occurred.");
  for (let o = 0; o < n.length; o++) {
    const i = n[o], a = i.includes("{data}") ? "GET" : "POST", c = a === "POST" ? { data: t, sender: e } : void 0, u = a === "POST" ? { "Content-Type": "application/json" } : {};
    try {
      const f = await fetch(i.replace("{sender}", e).replace("{data}", t), {
        body: JSON.stringify(c),
        headers: u,
        method: a
      });
      let d;
      if ((s = f.headers.get("Content-Type")) != null && s.startsWith("application/json") ? d = (await f.json()).data : d = await f.text(), !f.ok) {
        r = new Ge({
          body: c,
          details: d != null && d.error ? K(d.error) : f.statusText,
          headers: f.headers,
          status: f.status,
          url: i
        });
        continue;
      }
      if (!le(d)) {
        r = new Pd({
          result: d,
          url: i
        });
        continue;
      }
      return d;
    } catch (f) {
      r = new Ge({
        body: c,
        details: f.message,
        url: i
      });
    }
  }
  throw r;
}
const _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ccipRequest: Ui,
  offchainLookup: Td,
  offchainLookupAbiItem: zi,
  offchainLookupSignature: Ad
}, Symbol.toStringTag, { value: "Module" }));
function np(t) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...t
  };
}
const Id = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Sd = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
class $d extends v {
  constructor({ type: e }) {
    super(`Struct type "${e}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
}
function kd(t) {
  const { domain: e = {}, message: n, primaryType: r } = t, s = {
    EIP712Domain: Fd({ domain: e }),
    ...t.types
  };
  Rd({
    domain: e,
    message: n,
    primaryType: r,
    types: s
  });
  const o = ["0x1901"];
  return e && o.push(Od({
    domain: e,
    types: s
  })), r !== "EIP712Domain" && o.push(ji({
    data: n,
    primaryType: r,
    types: s
  })), Z(me(o));
}
function Od({ domain: t, types: e }) {
  return ji({
    data: t,
    primaryType: "EIP712Domain",
    types: e
  });
}
function ji({ data: t, primaryType: e, types: n }) {
  const r = qi({
    data: t,
    primaryType: e,
    types: n
  });
  return Z(r);
}
function qi({ data: t, primaryType: e, types: n }) {
  const r = [{ type: "bytes32" }], s = [Cd({ primaryType: e, types: n })];
  for (const o of n[e]) {
    const [i, a] = Gi({
      types: n,
      name: o.name,
      type: o.type,
      value: t[o.name]
    });
    r.push(i), s.push(a);
  }
  return Xe(r, s);
}
function Cd({ primaryType: t, types: e }) {
  const n = R(Nd({ primaryType: t, types: e }));
  return Z(n);
}
function Nd({ primaryType: t, types: e }) {
  let n = "";
  const r = Di({ primaryType: t, types: e });
  r.delete(t);
  const s = [t, ...Array.from(r).sort()];
  for (const o of s)
    n += `${o}(${e[o].map(({ name: i, type: a }) => `${a} ${i}`).join(",")})`;
  return n;
}
function Di({ primaryType: t, types: e }, n = /* @__PURE__ */ new Set()) {
  const r = t.match(/^\w*/u), s = r == null ? void 0 : r[0];
  if (n.has(s) || e[s] === void 0)
    return n;
  n.add(s);
  for (const o of e[s])
    Di({ primaryType: o.type, types: e }, n);
  return n;
}
function Gi({ types: t, name: e, type: n, value: r }) {
  if (t[n] !== void 0)
    return [
      { type: "bytes32" },
      Z(qi({ data: r, primaryType: n, types: t }))
    ];
  if (n === "bytes")
    return r = `0x${(r.length % 2 ? "0" : "") + r.slice(2)}`, [{ type: "bytes32" }, Z(r)];
  if (n === "string")
    return [{ type: "bytes32" }, Z(R(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const s = n.slice(0, n.lastIndexOf("[")), o = r.map((i) => Gi({
      name: e,
      type: s,
      types: t,
      value: i
    }));
    return [
      { type: "bytes32" },
      Z(Xe(o.map(([i]) => i), o.map(([, i]) => i)))
    ];
  }
  return [{ type: n }, r];
}
function Rd(t) {
  const { domain: e, message: n, primaryType: r, types: s } = t, o = (i, a) => {
    for (const c of i) {
      const { name: u, type: f } = c, d = a[u], l = f.match(Sd);
      if (l && (typeof d == "number" || typeof d == "bigint")) {
        const [y, h, b] = l;
        O(d, {
          signed: h === "int",
          size: Number.parseInt(b) / 8
        });
      }
      if (f === "address" && typeof d == "string" && !J(d))
        throw new ee({ address: d });
      const p = f.match(Id);
      if (p) {
        const [y, h] = p;
        if (h && j(d) !== Number.parseInt(h))
          throw new uc({
            expectedSize: Number.parseInt(h),
            givenSize: j(d)
          });
      }
      const m = s[f];
      m && (Ld(f), o(m, d));
    }
  };
  s.EIP712Domain && e && o(s.EIP712Domain, e), r !== "EIP712Domain" && o(s[r], n);
}
function Fd({ domain: t }) {
  return [
    typeof (t == null ? void 0 : t.name) == "string" && { name: "name", type: "string" },
    (t == null ? void 0 : t.version) && { name: "version", type: "string" },
    typeof (t == null ? void 0 : t.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (t == null ? void 0 : t.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (t == null ? void 0 : t.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function Ld(t) {
  if (t === "address" || t === "bool" || t === "string" || t.startsWith("bytes") || t.startsWith("uint") || t.startsWith("int"))
    throw new $d({ type: t });
}
const Md = {
  "0x0": "reverted",
  "0x1": "success"
};
function Hi(t) {
  const e = {
    ...t,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    contractAddress: t.contractAddress ? t.contractAddress : null,
    cumulativeGasUsed: t.cumulativeGasUsed ? BigInt(t.cumulativeGasUsed) : null,
    effectiveGasPrice: t.effectiveGasPrice ? BigInt(t.effectiveGasPrice) : null,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
    logs: t.logs ? t.logs.map((n) => Re(n)) : null,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? be(t.transactionIndex) : null,
    status: t.status ? Md[t.status] : null,
    type: t.type ? hi[t.type] || t.type : null
  };
  return t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)), t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)), e;
}
const rp = /* @__PURE__ */ Hr("transactionReceipt", Hi), zd = `Ethereum Signed Message:
`;
function Ud(t) {
  const e = typeof t == "string" ? St(t) : typeof t.raw == "string" ? t.raw : H(t.raw), n = St(`${zd}${j(e)}`);
  return me([n, e]);
}
function Vi(t, e) {
  return Z(Ud(t), e);
}
const Zi = "0x6492649264926492649264926492649264926492649264926492649264926492";
function jd(t) {
  return Ho(t, -32) === Zi;
}
function qd(t) {
  const { address: e, data: n, signature: r, to: s = "hex" } = t, o = _e([
    Xe([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [e, n, r]),
    Zi
  ]);
  return s === "hex" ? o : he(o);
}
function Dd(t) {
  const { authorizationList: e } = t;
  if (e)
    for (const n of e) {
      const { contractAddress: r, chainId: s } = n;
      if (!J(r))
        throw new ee({ address: r });
      if (s < 0)
        throw new kn({ chainId: s });
    }
  cs(t);
}
function Gd(t) {
  const { blobVersionedHashes: e } = t;
  if (e) {
    if (e.length === 0)
      throw new xi();
    for (const n of e) {
      const r = j(n), s = be($t(n, 0, 1));
      if (r !== 32)
        throw new hf({ hash: n, size: r });
      if (s !== vi)
        throw new pf({
          hash: n,
          version: s
        });
    }
  }
  cs(t);
}
function cs(t) {
  const { chainId: e, maxPriorityFeePerGas: n, maxFeePerGas: r, to: s } = t;
  if (e <= 0)
    throw new kn({ chainId: e });
  if (s && !J(s))
    throw new ee({ address: s });
  if (r && r > Sn)
    throw new Ye({ maxFeePerGas: r });
  if (n && r && n > r)
    throw new Zt({ maxFeePerGas: r, maxPriorityFeePerGas: n });
}
function Hd(t) {
  const { chainId: e, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = t;
  if (e <= 0)
    throw new kn({ chainId: e });
  if (o && !J(o))
    throw new ee({ address: o });
  if (n || s)
    throw new v("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (r && r > Sn)
    throw new Ye({ maxFeePerGas: r });
}
function Vd(t) {
  const { chainId: e, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = t;
  if (o && !J(o))
    throw new ee({ address: o });
  if (typeof e < "u" && e <= 0)
    throw new kn({ chainId: e });
  if (n || s)
    throw new v("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (r && r > Sn)
    throw new Ye({ maxFeePerGas: r });
}
function Zd(t) {
  if (!t || t.length === 0)
    return [];
  const e = [];
  for (const n of t) {
    const { contractAddress: r, chainId: s, nonce: o, ...i } = n;
    e.push([
      s ? R(s) : "0x",
      r,
      o ? R(o) : "0x",
      ...rn({}, i)
    ]);
  }
  return e;
}
function Rn(t) {
  if (!t || t.length === 0)
    return [];
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const { address: r, storageKeys: s } = t[n];
    for (let o = 0; o < s.length; o++)
      if (s[o].length - 2 !== 64)
        throw new Ou({ storageKey: s[o] });
    if (!J(r, { strict: !1 }))
      throw new ee({ address: r });
    e.push([r, s]);
  }
  return e;
}
function sp(t, e) {
  const n = Pi(t);
  return n === "eip1559" ? Yd(t, e) : n === "eip2930" ? Jd(t, e) : n === "eip4844" ? Kd(t, e) : n === "eip7702" ? Wd(t, e) : Xd(t, e);
}
function Wd(t, e) {
  const { authorizationList: n, chainId: r, gas: s, nonce: o, to: i, value: a, maxFeePerGas: c, maxPriorityFeePerGas: u, accessList: f, data: d } = t;
  Dd(t);
  const l = Rn(f), p = Zd(n);
  return _e([
    "0x04",
    Ke([
      R(r),
      o ? R(o) : "0x",
      u ? R(u) : "0x",
      c ? R(c) : "0x",
      s ? R(s) : "0x",
      i ?? "0x",
      a ? R(a) : "0x",
      d ?? "0x",
      l,
      p,
      ...rn(t, e)
    ])
  ]);
}
function Kd(t, e) {
  const { chainId: n, gas: r, nonce: s, to: o, value: i, maxFeePerBlobGas: a, maxFeePerGas: c, maxPriorityFeePerGas: u, accessList: f, data: d } = t;
  Gd(t);
  let l = t.blobVersionedHashes, p = t.sidecars;
  if (t.blobs && (typeof l > "u" || typeof p > "u")) {
    const w = typeof t.blobs[0] == "string" ? t.blobs : t.blobs.map((P) => H(P)), x = t.kzg, I = Jr({
      blobs: w,
      kzg: x
    });
    if (typeof l > "u" && (l = mi({
      commitments: I
    })), typeof p > "u") {
      const P = Xr({ blobs: w, commitments: I, kzg: x });
      p = Ei({ blobs: w, commitments: I, proofs: P });
    }
  }
  const m = Rn(f), y = [
    R(n),
    s ? R(s) : "0x",
    u ? R(u) : "0x",
    c ? R(c) : "0x",
    r ? R(r) : "0x",
    o ?? "0x",
    i ? R(i) : "0x",
    d ?? "0x",
    m,
    a ? R(a) : "0x",
    l ?? [],
    ...rn(t, e)
  ], h = [], b = [], g = [];
  if (p)
    for (let w = 0; w < p.length; w++) {
      const { blob: x, commitment: I, proof: P } = p[w];
      h.push(x), b.push(I), g.push(P);
    }
  return _e([
    "0x03",
    // If sidecars are enabled, envelope turns into a "wrapper":
    Ke(p ? [y, h, b, g] : y)
  ]);
}
function Yd(t, e) {
  const { chainId: n, gas: r, nonce: s, to: o, value: i, maxFeePerGas: a, maxPriorityFeePerGas: c, accessList: u, data: f } = t;
  cs(t);
  const d = Rn(u), l = [
    R(n),
    s ? R(s) : "0x",
    c ? R(c) : "0x",
    a ? R(a) : "0x",
    r ? R(r) : "0x",
    o ?? "0x",
    i ? R(i) : "0x",
    f ?? "0x",
    d,
    ...rn(t, e)
  ];
  return _e([
    "0x02",
    Ke(l)
  ]);
}
function Jd(t, e) {
  const { chainId: n, gas: r, data: s, nonce: o, to: i, value: a, accessList: c, gasPrice: u } = t;
  Hd(t);
  const f = Rn(c), d = [
    R(n),
    o ? R(o) : "0x",
    u ? R(u) : "0x",
    r ? R(r) : "0x",
    i ?? "0x",
    a ? R(a) : "0x",
    s ?? "0x",
    f,
    ...rn(t, e)
  ];
  return _e([
    "0x01",
    Ke(d)
  ]);
}
function Xd(t, e) {
  const { chainId: n = 0, gas: r, data: s, nonce: o, to: i, value: a, gasPrice: c } = t;
  Vd(t);
  let u = [
    o ? R(o) : "0x",
    c ? R(c) : "0x",
    r ? R(r) : "0x",
    i ?? "0x",
    a ? R(a) : "0x",
    s ?? "0x"
  ];
  if (e) {
    const f = (() => {
      if (e.v >= 35n)
        return (e.v - 35n) / 2n > 0 ? e.v : 27n + (e.v === 35n ? 0n : 1n);
      if (n > 0)
        return BigInt(n * 2) + BigInt(35n + e.v - 27n);
      const p = 27n + (e.v === 27n ? 0n : 1n);
      if (e.v !== p)
        throw new $u({ v: e.v });
      return p;
    })(), d = fe(e.r), l = fe(e.s);
    u = [
      ...u,
      R(f),
      d === "0x00" ? "0x" : d,
      l === "0x00" ? "0x" : l
    ];
  } else n > 0 && (u = [
    ...u,
    R(n),
    "0x",
    "0x"
  ]);
  return Ke(u);
}
function rn(t, e) {
  const n = e ?? t, { v: r, yParity: s } = n;
  if (typeof n.r > "u")
    return [];
  if (typeof n.s > "u")
    return [];
  if (typeof r > "u" && typeof s > "u")
    return [];
  const o = fe(n.r), i = fe(n.s);
  return [typeof s == "number" ? s ? R(1) : "0x" : r === 0n ? "0x" : r === 1n ? R(1) : r === 27n ? "0x" : R(1), o === "0x00" ? "0x" : o, i === "0x00" ? "0x" : i];
}
class Qd extends v {
  constructor({ value: e }) {
    super(`Number \`${e}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError"
    });
  }
}
function el(t, e) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(t))
    throw new Qd({ value: t });
  let [n, r = "0"] = t.split(".");
  const s = n.startsWith("-");
  if (s && (n = n.slice(1)), r = r.replace(/(0+)$/, ""), e === 0)
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), r = "";
  else if (r.length > e) {
    const [o, i, a] = [
      r.slice(0, e - 1),
      r.slice(e - 1, e),
      r.slice(e)
    ], c = Math.round(+`${i}.${a}`);
    c > 9 ? r = `${BigInt(o) + BigInt(1)}0`.padStart(o.length + 1, "0") : r = `${o}${c}`, r.length > e && (r = r.slice(1), n = `${BigInt(n) + 1n}`), r = r.slice(0, e);
  } else
    r = r.padEnd(e, "0");
  return BigInt(`${s ? "-" : ""}${n}${r}`);
}
function op(t, e = "wei") {
  return el(t, Xo[e]);
}
function tl(t) {
  return t.map((e) => ({
    ...e,
    value: BigInt(e.value)
  }));
}
function nl(t) {
  return {
    ...t,
    balance: t.balance ? BigInt(t.balance) : void 0,
    nonce: t.nonce ? be(t.nonce) : void 0,
    storageProof: t.storageProof ? tl(t.storageProof) : void 0
  };
}
async function rl(t, { address: e, blockNumber: n, blockTag: r, storageKeys: s }) {
  const o = r ?? "latest", i = n !== void 0 ? O(n) : void 0, a = await t.request({
    method: "eth_getProof",
    params: [e, s, i || o]
  });
  return nl(a);
}
async function sl(t, { address: e, blockNumber: n, blockTag: r = "latest", slot: s }) {
  const o = n !== void 0 ? O(n) : void 0;
  return await t.request({
    method: "eth_getStorageAt",
    params: [e, s, o || r]
  });
}
async function us(t, { blockHash: e, blockNumber: n, blockTag: r, hash: s, index: o }) {
  var f, d, l;
  const i = r || "latest", a = n !== void 0 ? O(n) : void 0;
  let c = null;
  if (s ? c = await t.request({
    method: "eth_getTransactionByHash",
    params: [s]
  }, { dedupe: !0 }) : e ? c = await t.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [e, O(o)]
  }, { dedupe: !0 }) : (a || i) && (c = await t.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [a || i, O(o)]
  }, { dedupe: !!a })), !c)
    throw new ti({
      blockHash: e,
      blockNumber: n,
      blockTag: i,
      hash: s,
      index: o
    });
  return (((l = (d = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : d.transaction) == null ? void 0 : l.format) || Wr)(c);
}
async function ol(t, { hash: e, transactionReceipt: n }) {
  const [r, s] = await Promise.all([
    C(t, nn, "getBlockNumber")({}),
    e ? C(t, us, "getTransaction")({ hash: e }) : void 0
  ]), o = (n == null ? void 0 : n.blockNumber) || (s == null ? void 0 : s.blockNumber);
  return o ? r - o + 1n : 0n;
}
async function Pr(t, { hash: e }) {
  var s, o, i;
  const n = await t.request({
    method: "eth_getTransactionReceipt",
    params: [e]
  }, { dedupe: !0 });
  if (!n)
    throw new ni({ hash: e });
  return (((i = (o = (s = t.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionReceipt) == null ? void 0 : i.format) || Hi)(n);
}
async function il(t, e) {
  var h;
  const { allowFailure: n = !0, batchSize: r, blockNumber: s, blockTag: o, multicallAddress: i, stateOverride: a } = e, c = e.contracts, u = r ?? (typeof ((h = t.batch) == null ? void 0 : h.multicall) == "object" && t.batch.multicall.batchSize || 1024);
  let f = i;
  if (!f) {
    if (!t.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    f = gt({
      blockNumber: s,
      chain: t.chain,
      contract: "multicall3"
    });
  }
  const d = [[]];
  let l = 0, p = 0;
  for (let b = 0; b < c.length; b++) {
    const { abi: g, address: w, args: x, functionName: I } = c[b];
    try {
      const P = ze({ abi: g, args: x, functionName: I });
      p += (P.length - 2) / 2, // Check if batching is enabled.
      u > 0 && // Check if the current size of the batch exceeds the size limit.
      p > u && // Check if the current chunk is not already empty.
      d[l].length > 0 && (l++, p = (P.length - 2) / 2, d[l] = []), d[l] = [
        ...d[l],
        {
          allowFailure: !0,
          callData: P,
          target: w
        }
      ];
    } catch (P) {
      const E = Vt(P, {
        abi: g,
        address: w,
        args: x,
        docsPath: "/docs/contract/multicall",
        functionName: I
      });
      if (!n)
        throw E;
      d[l] = [
        ...d[l],
        {
          allowFailure: !0,
          callData: "0x",
          target: w
        }
      ];
    }
  }
  const m = await Promise.allSettled(d.map((b) => C(t, Te, "readContract")({
    abi: gr,
    address: f,
    args: [b],
    blockNumber: s,
    blockTag: o,
    functionName: "aggregate3",
    stateOverride: a
  }))), y = [];
  for (let b = 0; b < m.length; b++) {
    const g = m[b];
    if (g.status === "rejected") {
      if (!n)
        throw g.reason;
      for (let x = 0; x < d[b].length; x++)
        y.push({
          status: "failure",
          error: g.reason,
          result: void 0
        });
      continue;
    }
    const w = g.value;
    for (let x = 0; x < w.length; x++) {
      const { returnData: I, success: P } = w[x], { callData: E } = d[b][x], { abi: B, address: A, functionName: M, args: k } = c[y.length];
      try {
        if (E === "0x")
          throw new xn();
        if (!P)
          throw new Dr({ data: I });
        const N = mt({
          abi: B,
          args: k,
          data: I,
          functionName: M
        });
        y.push(n ? { result: N, status: "success" } : N);
      } catch (N) {
        const z = Vt(N, {
          abi: B,
          address: A,
          args: k,
          docsPath: "/docs/contract/multicall",
          functionName: M
        });
        if (!n)
          throw z;
        y.push({ error: z, result: void 0, status: "failure" });
      }
    }
  }
  if (y.length !== c.length)
    throw new v("multicall results mismatch");
  return y;
}
class Wi extends Rr {
  constructor(e, n) {
    super(), this.finished = !1, this.destroyed = !1, _c(e);
    const r = Pn(n);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, o = new Uint8Array(s);
    o.set(r.length > s ? e.create().update(r).digest() : r);
    for (let i = 0; i < o.length; i++)
      o[i] ^= 54;
    this.iHash.update(o), this.oHash = e.create();
    for (let i = 0; i < o.length; i++)
      o[i] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(e) {
    return ct(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    ct(this), Yt(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: s, destroyed: o, blockLen: i, outputLen: a } = this;
    return e = e, e.finished = s, e.destroyed = o, e.blockLen = i, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const Ki = (t, e, n) => new Wi(t, e).update(n).digest();
Ki.create = (t, e) => new Wi(t, e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const fs = /* @__PURE__ */ BigInt(0), Fn = /* @__PURE__ */ BigInt(1), al = /* @__PURE__ */ BigInt(2);
function Je(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function sn(t) {
  if (!Je(t))
    throw new Error("Uint8Array expected");
}
function ft(t, e) {
  if (typeof e != "boolean")
    throw new Error(`${t} must be valid boolean, got "${e}".`);
}
const cl = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function dt(t) {
  sn(t);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += cl[t[n]];
  return e;
}
function st(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function ds(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const ve = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function eo(t) {
  if (t >= ve._0 && t <= ve._9)
    return t - ve._0;
  if (t >= ve._A && t <= ve._F)
    return t - (ve._A - 10);
  if (t >= ve._a && t <= ve._f)
    return t - (ve._a - 10);
}
function lt(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length, n = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(n);
  for (let s = 0, o = 0; s < n; s++, o += 2) {
    const i = eo(t.charCodeAt(o)), a = eo(t.charCodeAt(o + 1));
    if (i === void 0 || a === void 0) {
      const c = t[o] + t[o + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + o);
    }
    r[s] = i * 16 + a;
  }
  return r;
}
function He(t) {
  return ds(dt(t));
}
function ls(t) {
  return sn(t), ds(dt(Uint8Array.from(t).reverse()));
}
function ht(t, e) {
  return lt(t.toString(16).padStart(e * 2, "0"));
}
function hs(t, e) {
  return ht(t, e).reverse();
}
function ul(t) {
  return lt(st(t));
}
function ae(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = lt(e);
    } catch (o) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${o}`);
    }
  else if (Je(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const s = r.length;
  if (typeof n == "number" && s !== n)
    throw new Error(`${t} expected ${n} bytes, got ${s}`);
  return r;
}
function Wt(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const s = t[r];
    sn(s), e += s.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, s = 0; r < t.length; r++) {
    const o = t[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
function fl(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = 0;
  for (let r = 0; r < t.length; r++)
    n |= t[r] ^ e[r];
  return n === 0;
}
function dl(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
const Kn = (t) => typeof t == "bigint" && fs <= t;
function Ln(t, e, n) {
  return Kn(t) && Kn(e) && Kn(n) && e <= t && t < n;
}
function Ve(t, e, n, r) {
  if (!Ln(e, n, r))
    throw new Error(`expected valid ${t}: ${n} <= n < ${r}, got ${typeof e} ${e}`);
}
function Yi(t) {
  let e;
  for (e = 0; t > fs; t >>= Fn, e += 1)
    ;
  return e;
}
function ll(t, e) {
  return t >> BigInt(e) & Fn;
}
function hl(t, e, n) {
  return t | (n ? Fn : fs) << BigInt(e);
}
const ps = (t) => (al << BigInt(t - 1)) - Fn, Yn = (t) => new Uint8Array(t), to = (t) => Uint8Array.from(t);
function Ji(t, e, n) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Yn(t), s = Yn(t), o = 0;
  const i = () => {
    r.fill(1), s.fill(0), o = 0;
  }, a = (...d) => n(s, r, ...d), c = (d = Yn()) => {
    s = a(to([0]), d), r = a(), d.length !== 0 && (s = a(to([1]), d), r = a());
  }, u = () => {
    if (o++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const l = [];
    for (; d < e; ) {
      r = a();
      const p = r.slice();
      l.push(p), d += r.length;
    }
    return Wt(...l);
  };
  return (d, l) => {
    i(), c(d);
    let p;
    for (; !(p = l(u())); )
      c();
    return i(), p;
  };
}
const pl = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || Je(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function on(t, e, n = {}) {
  const r = (s, o, i) => {
    const a = pl[o];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${o}", expected function`);
    const c = t[s];
    if (!(i && c === void 0) && !a(c, t))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${o}`);
  };
  for (const [s, o] of Object.entries(e))
    r(s, o, !1);
  for (const [s, o] of Object.entries(n))
    r(s, o, !0);
  return t;
}
const yl = () => {
  throw new Error("not implemented");
};
function Br(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (n, ...r) => {
    const s = e.get(n);
    if (s !== void 0)
      return s;
    const o = t(n, ...r);
    return e.set(n, o), o;
  };
}
const bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aInRange: Ve,
  abool: ft,
  abytes: sn,
  bitGet: ll,
  bitLen: Yi,
  bitMask: ps,
  bitSet: hl,
  bytesToHex: dt,
  bytesToNumberBE: He,
  bytesToNumberLE: ls,
  concatBytes: Wt,
  createHmacDrbg: Ji,
  ensureBytes: ae,
  equalBytes: fl,
  hexToBytes: lt,
  hexToNumber: ds,
  inRange: Ln,
  isBytes: Je,
  memoized: Br,
  notImplemented: yl,
  numberToBytesBE: ht,
  numberToBytesLE: hs,
  numberToHexUnpadded: st,
  numberToVarBytesBE: ul,
  utf8ToBytes: dl,
  validateObject: on
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const W = BigInt(0), D = BigInt(1), qe = BigInt(2), ml = BigInt(3), Ar = BigInt(4), no = BigInt(5), ro = BigInt(8);
BigInt(9);
BigInt(16);
function X(t, e) {
  const n = t % e;
  return n >= W ? n : e + n;
}
function gl(t, e, n) {
  if (n <= W || e < W)
    throw new Error("Expected power/modulo > 0");
  if (n === D)
    return W;
  let r = D;
  for (; e > W; )
    e & D && (r = r * t % n), t = t * t % n, e >>= D;
  return r;
}
function ne(t, e, n) {
  let r = t;
  for (; e-- > W; )
    r *= r, r %= n;
  return r;
}
function Tr(t, e) {
  if (t === W || e <= W)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = X(t, e), r = e, s = W, o = D;
  for (; n !== W; ) {
    const a = r / n, c = r % n, u = s - o * a;
    r = n, n = c, s = o, o = u;
  }
  if (r !== D)
    throw new Error("invert: does not exist");
  return X(s, e);
}
function wl(t) {
  const e = (t - D) / qe;
  let n, r, s;
  for (n = t - D, r = 0; n % qe === W; n /= qe, r++)
    ;
  for (s = qe; s < t && gl(s, e, t) !== t - D; s++)
    ;
  if (r === 1) {
    const i = (t + D) / Ar;
    return function(c, u) {
      const f = c.pow(u, i);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const o = (n + D) / qe;
  return function(a, c) {
    if (a.pow(c, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = r, f = a.pow(a.mul(a.ONE, s), n), d = a.pow(c, o), l = a.pow(c, n);
    for (; !a.eql(l, a.ONE); ) {
      if (a.eql(l, a.ZERO))
        return a.ZERO;
      let p = 1;
      for (let y = a.sqr(l); p < u && !a.eql(y, a.ONE); p++)
        y = a.sqr(y);
      const m = a.pow(f, D << BigInt(u - p - 1));
      f = a.sqr(m), d = a.mul(d, m), l = a.mul(l, f), u = p;
    }
    return d;
  };
}
function vl(t) {
  if (t % Ar === ml) {
    const e = (t + D) / Ar;
    return function(r, s) {
      const o = r.pow(s, e);
      if (!r.eql(r.sqr(o), s))
        throw new Error("Cannot find square root");
      return o;
    };
  }
  if (t % ro === no) {
    const e = (t - no) / ro;
    return function(r, s) {
      const o = r.mul(s, qe), i = r.pow(o, e), a = r.mul(s, i), c = r.mul(r.mul(a, qe), i), u = r.mul(a, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(u), s))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return wl(t);
}
const xl = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function El(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = xl.reduce((r, s) => (r[s] = "function", r), e);
  return on(t, n);
}
function Pl(t, e, n) {
  if (n < W)
    throw new Error("Expected power > 0");
  if (n === W)
    return t.ONE;
  if (n === D)
    return e;
  let r = t.ONE, s = e;
  for (; n > W; )
    n & D && (r = t.mul(r, s)), s = t.sqr(s), n >>= D;
  return r;
}
function Bl(t, e) {
  const n = new Array(e.length), r = e.reduce((o, i, a) => t.is0(i) ? o : (n[a] = o, t.mul(o, i)), t.ONE), s = t.inv(r);
  return e.reduceRight((o, i, a) => t.is0(i) ? o : (n[a] = t.mul(o, n[a]), t.mul(o, i)), s), n;
}
function Xi(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Qi(t, e, n = !1, r = {}) {
  if (t <= W)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: s, nByteLength: o } = Xi(t, e);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const i = vl(t), a = Object.freeze({
    ORDER: t,
    BITS: s,
    BYTES: o,
    MASK: ps(s),
    ZERO: W,
    ONE: D,
    create: (c) => X(c, t),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return W <= c && c < t;
    },
    is0: (c) => c === W,
    isOdd: (c) => (c & D) === D,
    neg: (c) => X(-c, t),
    eql: (c, u) => c === u,
    sqr: (c) => X(c * c, t),
    add: (c, u) => X(c + u, t),
    sub: (c, u) => X(c - u, t),
    mul: (c, u) => X(c * u, t),
    pow: (c, u) => Pl(a, c, u),
    div: (c, u) => X(c * Tr(u, t), t),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => Tr(c, t),
    sqrt: r.sqrt || ((c) => i(a, c)),
    invertBatch: (c) => Bl(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => n ? hs(c, o) : ht(c, o),
    fromBytes: (c) => {
      if (c.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${c.length}`);
      return n ? ls(c) : He(c);
    }
  });
  return Object.freeze(a);
}
function ea(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function ta(t) {
  const e = ea(t);
  return e + Math.ceil(e / 2);
}
function Al(t, e, n = !1) {
  const r = t.length, s = ea(e), o = ta(e);
  if (r < 16 || r < o || r > 1024)
    throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
  const i = n ? He(t) : ls(t), a = X(i, e - D) + D;
  return n ? hs(a, s) : ht(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Tl = BigInt(0), Jn = BigInt(1), Xn = /* @__PURE__ */ new WeakMap(), so = /* @__PURE__ */ new WeakMap();
function _l(t, e) {
  const n = (o, i) => {
    const a = i.negate();
    return o ? a : i;
  }, r = (o) => {
    if (!Number.isSafeInteger(o) || o <= 0 || o > e)
      throw new Error(`Wrong window size=${o}, should be [1..${e}]`);
  }, s = (o) => {
    r(o);
    const i = Math.ceil(e / o) + 1, a = 2 ** (o - 1);
    return { windows: i, windowSize: a };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(o, i) {
      let a = t.ZERO, c = o;
      for (; i > Tl; )
        i & Jn && (a = a.add(c)), c = c.double(), i >>= Jn;
      return a;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(o, i) {
      const { windows: a, windowSize: c } = s(i), u = [];
      let f = o, d = f;
      for (let l = 0; l < a; l++) {
        d = f, u.push(d);
        for (let p = 1; p < c; p++)
          d = d.add(f), u.push(d);
        f = d.double();
      }
      return u;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(o, i, a) {
      const { windows: c, windowSize: u } = s(o);
      let f = t.ZERO, d = t.BASE;
      const l = BigInt(2 ** o - 1), p = 2 ** o, m = BigInt(o);
      for (let y = 0; y < c; y++) {
        const h = y * u;
        let b = Number(a & l);
        a >>= m, b > u && (b -= p, a += Jn);
        const g = h, w = h + Math.abs(b) - 1, x = y % 2 !== 0, I = b < 0;
        b === 0 ? d = d.add(n(x, i[g])) : f = f.add(n(I, i[w]));
      }
      return { p: f, f: d };
    },
    wNAFCached(o, i, a) {
      const c = so.get(o) || 1;
      let u = Xn.get(o);
      return u || (u = this.precomputeWindow(o, c), c !== 1 && Xn.set(o, a(u))), this.wNAF(c, u, i);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(o, i) {
      r(i), so.set(o, i), Xn.delete(o);
    }
  };
}
function Il(t, e, n, r) {
  if (!Array.isArray(n) || !Array.isArray(r) || r.length !== n.length)
    throw new Error("arrays of points and scalars must have equal length");
  r.forEach((f, d) => {
    if (!e.isValid(f))
      throw new Error(`wrong scalar at index ${d}`);
  }), n.forEach((f, d) => {
    if (!(f instanceof t))
      throw new Error(`wrong point at index ${d}`);
  });
  const s = Yi(BigInt(n.length)), o = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1, i = (1 << o) - 1, a = new Array(i + 1).fill(t.ZERO), c = Math.floor((e.BITS - 1) / o) * o;
  let u = t.ZERO;
  for (let f = c; f >= 0; f -= o) {
    a.fill(t.ZERO);
    for (let l = 0; l < r.length; l++) {
      const p = r[l], m = Number(p >> BigInt(f) & BigInt(i));
      a[m] = a[m].add(n[l]);
    }
    let d = t.ZERO;
    for (let l = a.length - 1, p = t.ZERO; l > 0; l--)
      p = p.add(a[l]), d = d.add(p);
    if (u = u.add(d), f !== 0)
      for (let l = 0; l < o; l++)
        u = u.double();
  }
  return u;
}
function na(t) {
  return El(t.Fp), on(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Xi(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function oo(t) {
  t.lowS !== void 0 && ft("lowS", t.lowS), t.prehash !== void 0 && ft("prehash", t.prehash);
}
function Sl(t) {
  const e = na(t);
  on(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a: s } = e;
  if (n) {
    if (!r.eql(s, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: $l, hexToBytes: kl } = bl, xe = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (t, e) => {
      const { Err: n } = xe;
      if (t < 0 || t > 256)
        throw new n("tlv.encode: wrong tag");
      if (e.length & 1)
        throw new n("tlv.encode: unpadded data");
      const r = e.length / 2, s = st(r);
      if (s.length / 2 & 128)
        throw new n("tlv.encode: long form length too big");
      const o = r > 127 ? st(s.length / 2 | 128) : "";
      return `${st(t)}${o}${s}${e}`;
    },
    // v - value, l - left bytes (unparsed)
    decode(t, e) {
      const { Err: n } = xe;
      let r = 0;
      if (t < 0 || t > 256)
        throw new n("tlv.encode: wrong tag");
      if (e.length < 2 || e[r++] !== t)
        throw new n("tlv.decode: wrong tlv");
      const s = e[r++], o = !!(s & 128);
      let i = 0;
      if (!o)
        i = s;
      else {
        const c = s & 127;
        if (!c)
          throw new n("tlv.decode(long): indefinite length not supported");
        if (c > 4)
          throw new n("tlv.decode(long): byte length is too big");
        const u = e.subarray(r, r + c);
        if (u.length !== c)
          throw new n("tlv.decode: length bytes not complete");
        if (u[0] === 0)
          throw new n("tlv.decode(long): zero leftmost byte");
        for (const f of u)
          i = i << 8 | f;
        if (r += c, i < 128)
          throw new n("tlv.decode(long): not minimal encoding");
      }
      const a = e.subarray(r, r + i);
      if (a.length !== i)
        throw new n("tlv.decode: wrong value length");
      return { v: a, l: e.subarray(r + i) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(t) {
      const { Err: e } = xe;
      if (t < Ee)
        throw new e("integer: negative integers are not allowed");
      let n = st(t);
      if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1)
        throw new e("unexpected assertion");
      return n;
    },
    decode(t) {
      const { Err: e } = xe;
      if (t[0] & 128)
        throw new e("Invalid signature integer: negative");
      if (t[0] === 0 && !(t[1] & 128))
        throw new e("Invalid signature integer: unnecessary leading zero");
      return $l(t);
    }
  },
  toSig(t) {
    const { Err: e, _int: n, _tlv: r } = xe, s = typeof t == "string" ? kl(t) : t;
    sn(s);
    const { v: o, l: i } = r.decode(48, s);
    if (i.length)
      throw new e("Invalid signature: left bytes after parsing");
    const { v: a, l: c } = r.decode(2, o), { v: u, l: f } = r.decode(2, c);
    if (f.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: n.decode(a), s: n.decode(u) };
  },
  hexFromSig(t) {
    const { _tlv: e, _int: n } = xe, r = `${e.encode(2, n.encode(t.r))}${e.encode(2, n.encode(t.s))}`;
    return e.encode(48, r);
  }
}, Ee = BigInt(0), V = BigInt(1);
BigInt(2);
const io = BigInt(3);
BigInt(4);
function Ol(t) {
  const e = Sl(t), { Fp: n } = e, r = Qi(e.n, e.nBitLength), s = e.toBytes || ((y, h, b) => {
    const g = h.toAffine();
    return Wt(Uint8Array.from([4]), n.toBytes(g.x), n.toBytes(g.y));
  }), o = e.fromBytes || ((y) => {
    const h = y.subarray(1), b = n.fromBytes(h.subarray(0, n.BYTES)), g = n.fromBytes(h.subarray(n.BYTES, 2 * n.BYTES));
    return { x: b, y: g };
  });
  function i(y) {
    const { a: h, b } = e, g = n.sqr(y), w = n.mul(g, y);
    return n.add(n.add(w, n.mul(y, h)), b);
  }
  if (!n.eql(n.sqr(e.Gy), i(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(y) {
    return Ln(y, V, e.n);
  }
  function c(y) {
    const { allowedPrivateKeyLengths: h, nByteLength: b, wrapPrivateKey: g, n: w } = e;
    if (h && typeof y != "bigint") {
      if (Je(y) && (y = dt(y)), typeof y != "string" || !h.includes(y.length))
        throw new Error("Invalid key");
      y = y.padStart(b * 2, "0");
    }
    let x;
    try {
      x = typeof y == "bigint" ? y : He(ae("private key", y, b));
    } catch {
      throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof y}`);
    }
    return g && (x = X(x, w)), Ve("private key", x, V, w), x;
  }
  function u(y) {
    if (!(y instanceof l))
      throw new Error("ProjectivePoint expected");
  }
  const f = Br((y, h) => {
    const { px: b, py: g, pz: w } = y;
    if (n.eql(w, n.ONE))
      return { x: b, y: g };
    const x = y.is0();
    h == null && (h = x ? n.ONE : n.inv(w));
    const I = n.mul(b, h), P = n.mul(g, h), E = n.mul(w, h);
    if (x)
      return { x: n.ZERO, y: n.ZERO };
    if (!n.eql(E, n.ONE))
      throw new Error("invZ was invalid");
    return { x: I, y: P };
  }), d = Br((y) => {
    if (y.is0()) {
      if (e.allowInfinityPoint && !n.is0(y.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: h, y: b } = y.toAffine();
    if (!n.isValid(h) || !n.isValid(b))
      throw new Error("bad point: x or y not FE");
    const g = n.sqr(b), w = i(h);
    if (!n.eql(g, w))
      throw new Error("bad point: equation left != right");
    if (!y.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class l {
    constructor(h, b, g) {
      if (this.px = h, this.py = b, this.pz = g, h == null || !n.isValid(h))
        throw new Error("x required");
      if (b == null || !n.isValid(b))
        throw new Error("y required");
      if (g == null || !n.isValid(g))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(h) {
      const { x: b, y: g } = h || {};
      if (!h || !n.isValid(b) || !n.isValid(g))
        throw new Error("invalid affine point");
      if (h instanceof l)
        throw new Error("projective point not allowed");
      const w = (x) => n.eql(x, n.ZERO);
      return w(b) && w(g) ? l.ZERO : new l(b, g, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(h) {
      const b = n.invertBatch(h.map((g) => g.pz));
      return h.map((g, w) => g.toAffine(b[w])).map(l.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(h) {
      const b = l.fromAffine(o(ae("pointHex", h)));
      return b.assertValidity(), b;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(h) {
      return l.BASE.multiply(c(h));
    }
    // Multiscalar Multiplication
    static msm(h, b) {
      return Il(l, r, h, b);
    }
    // "Private method", don't use it directly
    _setWindowSize(h) {
      m.setWindowSize(this, h);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      d(this);
    }
    hasEvenY() {
      const { y: h } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(h);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(h) {
      u(h);
      const { px: b, py: g, pz: w } = this, { px: x, py: I, pz: P } = h, E = n.eql(n.mul(b, P), n.mul(x, w)), B = n.eql(n.mul(g, P), n.mul(I, w));
      return E && B;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new l(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: h, b } = e, g = n.mul(b, io), { px: w, py: x, pz: I } = this;
      let P = n.ZERO, E = n.ZERO, B = n.ZERO, A = n.mul(w, w), M = n.mul(x, x), k = n.mul(I, I), N = n.mul(w, x);
      return N = n.add(N, N), B = n.mul(w, I), B = n.add(B, B), P = n.mul(h, B), E = n.mul(g, k), E = n.add(P, E), P = n.sub(M, E), E = n.add(M, E), E = n.mul(P, E), P = n.mul(N, P), B = n.mul(g, B), k = n.mul(h, k), N = n.sub(A, k), N = n.mul(h, N), N = n.add(N, B), B = n.add(A, A), A = n.add(B, A), A = n.add(A, k), A = n.mul(A, N), E = n.add(E, A), k = n.mul(x, I), k = n.add(k, k), A = n.mul(k, N), P = n.sub(P, A), B = n.mul(k, M), B = n.add(B, B), B = n.add(B, B), new l(P, E, B);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(h) {
      u(h);
      const { px: b, py: g, pz: w } = this, { px: x, py: I, pz: P } = h;
      let E = n.ZERO, B = n.ZERO, A = n.ZERO;
      const M = e.a, k = n.mul(e.b, io);
      let N = n.mul(b, x), z = n.mul(g, I), T = n.mul(w, P), S = n.add(b, g), _ = n.add(x, I);
      S = n.mul(S, _), _ = n.add(N, z), S = n.sub(S, _), _ = n.add(b, w);
      let $ = n.add(x, P);
      return _ = n.mul(_, $), $ = n.add(N, T), _ = n.sub(_, $), $ = n.add(g, w), E = n.add(I, P), $ = n.mul($, E), E = n.add(z, T), $ = n.sub($, E), A = n.mul(M, _), E = n.mul(k, T), A = n.add(E, A), E = n.sub(z, A), A = n.add(z, A), B = n.mul(E, A), z = n.add(N, N), z = n.add(z, N), T = n.mul(M, T), _ = n.mul(k, _), z = n.add(z, T), T = n.sub(N, T), T = n.mul(M, T), _ = n.add(_, T), N = n.mul(z, _), B = n.add(B, N), N = n.mul($, _), E = n.mul(S, E), E = n.sub(E, N), N = n.mul(S, z), A = n.mul($, A), A = n.add(A, N), new l(E, B, A);
    }
    subtract(h) {
      return this.add(h.negate());
    }
    is0() {
      return this.equals(l.ZERO);
    }
    wNAF(h) {
      return m.wNAFCached(this, h, l.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(h) {
      Ve("scalar", h, Ee, e.n);
      const b = l.ZERO;
      if (h === Ee)
        return b;
      if (h === V)
        return this;
      const { endo: g } = e;
      if (!g)
        return m.unsafeLadder(this, h);
      let { k1neg: w, k1: x, k2neg: I, k2: P } = g.splitScalar(h), E = b, B = b, A = this;
      for (; x > Ee || P > Ee; )
        x & V && (E = E.add(A)), P & V && (B = B.add(A)), A = A.double(), x >>= V, P >>= V;
      return w && (E = E.negate()), I && (B = B.negate()), B = new l(n.mul(B.px, g.beta), B.py, B.pz), E.add(B);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(h) {
      const { endo: b, n: g } = e;
      Ve("scalar", h, V, g);
      let w, x;
      if (b) {
        const { k1neg: I, k1: P, k2neg: E, k2: B } = b.splitScalar(h);
        let { p: A, f: M } = this.wNAF(P), { p: k, f: N } = this.wNAF(B);
        A = m.constTimeNegate(I, A), k = m.constTimeNegate(E, k), k = new l(n.mul(k.px, b.beta), k.py, k.pz), w = A.add(k), x = M.add(N);
      } else {
        const { p: I, f: P } = this.wNAF(h);
        w = I, x = P;
      }
      return l.normalizeZ([w, x])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(h, b, g) {
      const w = l.BASE, x = (P, E) => E === Ee || E === V || !P.equals(w) ? P.multiplyUnsafe(E) : P.multiply(E), I = x(this, b).add(x(h, g));
      return I.is0() ? void 0 : I;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(h) {
      return f(this, h);
    }
    isTorsionFree() {
      const { h, isTorsionFree: b } = e;
      if (h === V)
        return !0;
      if (b)
        return b(l, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h, clearCofactor: b } = e;
      return h === V ? this : b ? b(l, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(h = !0) {
      return ft("isCompressed", h), this.assertValidity(), s(l, this, h);
    }
    toHex(h = !0) {
      return ft("isCompressed", h), dt(this.toRawBytes(h));
    }
  }
  l.BASE = new l(e.Gx, e.Gy, n.ONE), l.ZERO = new l(n.ZERO, n.ONE, n.ZERO);
  const p = e.nBitLength, m = _l(l, e.endo ? Math.ceil(p / 2) : p);
  return {
    CURVE: e,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: a
  };
}
function Cl(t) {
  const e = na(t);
  return on(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function Nl(t) {
  const e = Cl(t), { Fp: n, n: r } = e, s = n.BYTES + 1, o = 2 * n.BYTES + 1;
  function i(T) {
    return X(T, r);
  }
  function a(T) {
    return Tr(T, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: u, weierstrassEquation: f, isWithinCurveOrder: d } = Ol({
    ...e,
    toBytes(T, S, _) {
      const $ = S.toAffine(), F = n.toBytes($.x), U = Wt;
      return ft("isCompressed", _), _ ? U(Uint8Array.from([S.hasEvenY() ? 2 : 3]), F) : U(Uint8Array.from([4]), F, n.toBytes($.y));
    },
    fromBytes(T) {
      const S = T.length, _ = T[0], $ = T.subarray(1);
      if (S === s && (_ === 2 || _ === 3)) {
        const F = He($);
        if (!Ln(F, V, n.ORDER))
          throw new Error("Point is not on curve");
        const U = f(F);
        let q;
        try {
          q = n.sqrt(U);
        } catch (oe) {
          const Ie = oe instanceof Error ? ": " + oe.message : "";
          throw new Error("Point is not on curve" + Ie);
        }
        const Y = (q & V) === V;
        return (_ & 1) === 1 !== Y && (q = n.neg(q)), { x: F, y: q };
      } else if (S === o && _ === 4) {
        const F = n.fromBytes($.subarray(0, n.BYTES)), U = n.fromBytes($.subarray(n.BYTES, 2 * n.BYTES));
        return { x: F, y: U };
      } else
        throw new Error(`Point of length ${S} was invalid. Expected ${s} compressed bytes or ${o} uncompressed bytes`);
    }
  }), l = (T) => dt(ht(T, e.nByteLength));
  function p(T) {
    const S = r >> V;
    return T > S;
  }
  function m(T) {
    return p(T) ? i(-T) : T;
  }
  const y = (T, S, _) => He(T.slice(S, _));
  class h {
    constructor(S, _, $) {
      this.r = S, this.s = _, this.recovery = $, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(S) {
      const _ = e.nByteLength;
      return S = ae("compactSignature", S, _ * 2), new h(y(S, 0, _), y(S, _, 2 * _));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(S) {
      const { r: _, s: $ } = xe.toSig(ae("DER", S));
      return new h(_, $);
    }
    assertValidity() {
      Ve("r", this.r, V, r), Ve("s", this.s, V, r);
    }
    addRecoveryBit(S) {
      return new h(this.r, this.s, S);
    }
    recoverPublicKey(S) {
      const { r: _, s: $, recovery: F } = this, U = P(ae("msgHash", S));
      if (F == null || ![0, 1, 2, 3].includes(F))
        throw new Error("recovery id invalid");
      const q = F === 2 || F === 3 ? _ + e.n : _;
      if (q >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const Y = F & 1 ? "03" : "02", te = c.fromHex(Y + l(q)), oe = a(q), Ie = i(-U * oe), vt = i($ * oe), Se = c.BASE.multiplyAndAddUnsafe(te, Ie, vt);
      if (!Se)
        throw new Error("point at infinify");
      return Se.assertValidity(), Se;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return p(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new h(this.r, i(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return lt(this.toDERHex());
    }
    toDERHex() {
      return xe.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return lt(this.toCompactHex());
    }
    toCompactHex() {
      return l(this.r) + l(this.s);
    }
  }
  const b = {
    isValidPrivateKey(T) {
      try {
        return u(T), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const T = ta(e.n);
      return Al(e.randomBytes(T), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(T = 8, S = c.BASE) {
      return S._setWindowSize(T), S.multiply(BigInt(3)), S;
    }
  };
  function g(T, S = !0) {
    return c.fromPrivateKey(T).toRawBytes(S);
  }
  function w(T) {
    const S = Je(T), _ = typeof T == "string", $ = (S || _) && T.length;
    return S ? $ === s || $ === o : _ ? $ === 2 * s || $ === 2 * o : T instanceof c;
  }
  function x(T, S, _ = !0) {
    if (w(T))
      throw new Error("first arg must be private key");
    if (!w(S))
      throw new Error("second arg must be public key");
    return c.fromHex(S).multiply(u(T)).toRawBytes(_);
  }
  const I = e.bits2int || function(T) {
    const S = He(T), _ = T.length * 8 - e.nBitLength;
    return _ > 0 ? S >> BigInt(_) : S;
  }, P = e.bits2int_modN || function(T) {
    return i(I(T));
  }, E = ps(e.nBitLength);
  function B(T) {
    return Ve(`num < 2^${e.nBitLength}`, T, Ee, E), ht(T, e.nByteLength);
  }
  function A(T, S, _ = M) {
    if (["recovered", "canonical"].some((Ue) => Ue in _))
      throw new Error("sign() legacy options not supported");
    const { hash: $, randomBytes: F } = e;
    let { lowS: U, prehash: q, extraEntropy: Y } = _;
    U == null && (U = !0), T = ae("msgHash", T), oo(_), q && (T = ae("prehashed msgHash", $(T)));
    const te = P(T), oe = u(S), Ie = [B(oe), B(te)];
    if (Y != null && Y !== !1) {
      const Ue = Y === !0 ? F(n.BYTES) : Y;
      Ie.push(ae("extraEntropy", Ue));
    }
    const vt = Wt(...Ie), Se = te;
    function Un(Ue) {
      const Qe = I(Ue);
      if (!d(Qe))
        return;
      const Es = a(Qe), et = c.BASE.multiply(Qe).toAffine(), ie = i(et.x);
      if (ie === Ee)
        return;
      const tt = i(Es * i(Se + ie * oe));
      if (tt === Ee)
        return;
      let Ps = (et.x === ie ? 0 : 2) | Number(et.y & V), Bs = tt;
      return U && p(tt) && (Bs = m(tt), Ps ^= 1), new h(ie, Bs, Ps);
    }
    return { seed: vt, k2sig: Un };
  }
  const M = { lowS: e.lowS, prehash: !1 }, k = { lowS: e.lowS, prehash: !1 };
  function N(T, S, _ = M) {
    const { seed: $, k2sig: F } = A(T, S, _), U = e;
    return Ji(U.hash.outputLen, U.nByteLength, U.hmac)($, F);
  }
  c.BASE._setWindowSize(8);
  function z(T, S, _, $ = k) {
    var et;
    const F = T;
    if (S = ae("msgHash", S), _ = ae("publicKey", _), "strict" in $)
      throw new Error("options.strict was renamed to lowS");
    oo($);
    const { lowS: U, prehash: q } = $;
    let Y, te;
    try {
      if (typeof F == "string" || Je(F))
        try {
          Y = h.fromDER(F);
        } catch (ie) {
          if (!(ie instanceof xe.Err))
            throw ie;
          Y = h.fromCompact(F);
        }
      else if (typeof F == "object" && typeof F.r == "bigint" && typeof F.s == "bigint") {
        const { r: ie, s: tt } = F;
        Y = new h(ie, tt);
      } else
        throw new Error("PARSE");
      te = c.fromHex(_);
    } catch (ie) {
      if (ie.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (U && Y.hasHighS())
      return !1;
    q && (S = e.hash(S));
    const { r: oe, s: Ie } = Y, vt = P(S), Se = a(Ie), Un = i(vt * Se), Ue = i(oe * Se), Qe = (et = c.BASE.multiplyAndAddUnsafe(te, Un, Ue)) == null ? void 0 : et.toAffine();
    return Qe ? i(Qe.x) === oe : !1;
  }
  return {
    CURVE: e,
    getPublicKey: g,
    getSharedSecret: x,
    sign: N,
    verify: z,
    ProjectivePoint: c,
    Signature: h,
    utils: b
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Rl(t) {
  return {
    hash: t,
    hmac: (e, ...n) => Ki(t, e, Lc(...n)),
    randomBytes: Mc
  };
}
function Fl(t, e) {
  const n = (r) => Nl({ ...t, ...Rl(r) });
  return Object.freeze({ ...n(e), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ra = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), ao = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Ll = BigInt(1), _r = BigInt(2), co = (t, e) => (t + e / _r) / e;
function Ml(t) {
  const e = ra, n = BigInt(3), r = BigInt(6), s = BigInt(11), o = BigInt(22), i = BigInt(23), a = BigInt(44), c = BigInt(88), u = t * t * t % e, f = u * u * t % e, d = ne(f, n, e) * f % e, l = ne(d, n, e) * f % e, p = ne(l, _r, e) * u % e, m = ne(p, s, e) * p % e, y = ne(m, o, e) * m % e, h = ne(y, a, e) * y % e, b = ne(h, c, e) * h % e, g = ne(b, a, e) * y % e, w = ne(g, n, e) * f % e, x = ne(w, i, e) * m % e, I = ne(x, r, e) * u % e, P = ne(I, _r, e);
  if (!Ir.eql(Ir.sqr(P), t))
    throw new Error("Cannot find square root");
  return P;
}
const Ir = Qi(ra, void 0, void 0, { sqrt: Ml }), ys = Fl({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Ir,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: ao,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (t) => {
      const e = ao, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -Ll * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o = n, i = BigInt("0x100000000000000000000000000000000"), a = co(o * t, e), c = co(-r * t, e);
      let u = X(t - a * n - c * s, e), f = X(-a * r - c * o, e);
      const d = u > i, l = f > i;
      if (d && (u = e - u), l && (f = e - f), u > i || f > i)
        throw new Error("splitScalar: Endomorphism failed, k=" + t);
      return { k1neg: d, k1: u, k2neg: l, k2: f };
    }
  }
}, bi);
BigInt(0);
ys.ProjectivePoint;
const zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  secp256k1: ys
}, Symbol.toStringTag, { value: "Module" }));
function Ul({ r: t, s: e, to: n = "hex", v: r, yParity: s }) {
  const o = (() => {
    if (s === 0 || s === 1)
      return s;
    if (r && (r === 27n || r === 28n || r >= 35n))
      return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })(), i = `0x${new ys.Signature(Ne(t), Ne(e)).toCompactHex()}${o === 0 ? "1b" : "1c"}`;
  return n === "hex" ? i : he(i);
}
async function bs(t, e) {
  var d, l, p;
  const { address: n, factory: r, factoryData: s, hash: o, signature: i, universalSignatureVerifierAddress: a = (p = (l = (d = t.chain) == null ? void 0 : d.contracts) == null ? void 0 : l.universalSignatureVerifier) == null ? void 0 : p.address, ...c } = e, u = le(i) ? i : typeof i == "object" && "r" in i && "s" in i ? Ul(i) : H(i), f = await (async () => !r && !s || jd(u) ? u : qd({
    address: r,
    data: s,
    signature: u
  }))();
  try {
    const m = a ? {
      to: a,
      data: ze({
        abi: Ks,
        functionName: "isValidSig",
        args: [n, o, f]
      }),
      ...c
    } : {
      data: ss({
        abi: Ks,
        args: [n, o, f],
        bytecode: Bf
      }),
      ...c
    }, { data: y } = await C(t, en, "call")(m);
    return vc(y ?? "0x0");
  } catch (m) {
    try {
      if ($n(Qc(n), await oi({ hash: o, signature: i })))
        return !0;
    } catch {
    }
    if (m instanceof ri)
      return !1;
    throw m;
  }
}
async function jl(t, { address: e, message: n, factory: r, factoryData: s, signature: o, ...i }) {
  const a = Vi(n);
  return bs(t, {
    address: e,
    factory: r,
    factoryData: s,
    hash: a,
    signature: o,
    ...i
  });
}
async function ql(t, e) {
  const { address: n, factory: r, factoryData: s, signature: o, message: i, primaryType: a, types: c, domain: u, ...f } = e, d = kd({ message: i, primaryType: a, types: c, domain: u });
  return bs(t, {
    address: n,
    factory: r,
    factoryData: s,
    hash: d,
    signature: o,
    ...f
  });
}
function sa(t, { emitOnBegin: e = !1, emitMissed: n = !1, onBlockNumber: r, onError: s, poll: o, pollingInterval: i = t.pollingInterval }) {
  const a = typeof o < "u" ? o : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket");
  let c;
  return a ? (() => {
    const d = K([
      "watchBlockNumber",
      t.uid,
      e,
      n,
      i
    ]);
    return Fe(d, { onBlockNumber: r, onError: s }, (l) => tn(async () => {
      var p;
      try {
        const m = await C(t, nn, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (m === c)
            return;
          if (m - c > 1 && n)
            for (let y = c + 1n; y < m; y++)
              l.onBlockNumber(y, c), c = y;
        }
        (!c || m > c) && (l.onBlockNumber(m, c), c = m);
      } catch (m) {
        (p = l.onError) == null || p.call(l, m);
      }
    }, {
      emitOnBegin: e,
      interval: i
    }));
  })() : (() => {
    const d = K([
      "watchBlockNumber",
      t.uid,
      e,
      n
    ]);
    return Fe(d, { onBlockNumber: r, onError: s }, (l) => {
      let p = !0, m = () => p = !1;
      return (async () => {
        try {
          const y = (() => {
            if (t.transport.type === "fallback") {
              const b = t.transport.transports.find((g) => g.config.type === "webSocket");
              return b ? b.value : t.transport;
            }
            return t.transport;
          })(), { unsubscribe: h } = await y.subscribe({
            params: ["newHeads"],
            onData(b) {
              var w;
              if (!p)
                return;
              const g = Ne((w = b.result) == null ? void 0 : w.number);
              l.onBlockNumber(g, c), c = g;
            },
            onError(b) {
              var g;
              (g = l.onError) == null || g.call(l, b);
            }
          });
          m = h, p || m();
        } catch (y) {
          s == null || s(y);
        }
      })(), () => m();
    });
  })();
}
async function Dl(t, {
  confirmations: e = 1,
  hash: n,
  onReplaced: r,
  pollingInterval: s = t.pollingInterval,
  retryCount: o = 6,
  retryDelay: i = ({ count: c }) => ~~(1 << c) * 200,
  // exponential backoff
  timeout: a = 18e4
}) {
  const c = K(["waitForTransactionReceipt", t.uid, n]);
  let u, f, d, l = !1;
  return new Promise((p, m) => {
    a && setTimeout(() => m(new Cu({ hash: n })), a);
    const y = Fe(c, { onReplaced: r, resolve: p, reject: m }, (h) => {
      const b = C(t, sa, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(g) {
          const w = (I) => {
            b(), I(), y();
          };
          let x = g;
          if (!l)
            try {
              if (d) {
                if (e > 1 && (!d.blockNumber || x - d.blockNumber + 1n < e))
                  return;
                w(() => h.resolve(d));
                return;
              }
              if (u || (l = !0, await Er(async () => {
                u = await C(t, us, "getTransaction")({ hash: n }), u.blockNumber && (x = u.blockNumber);
              }, {
                delay: i,
                retryCount: o
              }), l = !1), d = await C(t, Pr, "getTransactionReceipt")({ hash: n }), e > 1 && (!d.blockNumber || x - d.blockNumber + 1n < e))
                return;
              w(() => h.resolve(d));
            } catch (I) {
              if (I instanceof ti || I instanceof ni) {
                if (!u) {
                  l = !1;
                  return;
                }
                try {
                  f = u, l = !0;
                  const P = await Er(() => C(t, Be, "getBlock")({
                    blockNumber: x,
                    includeTransactions: !0
                  }), {
                    delay: i,
                    retryCount: o,
                    shouldRetry: ({ error: A }) => A instanceof li
                  });
                  l = !1;
                  const E = P.transactions.find(({ from: A, nonce: M }) => A === f.from && M === f.nonce);
                  if (!E || (d = await C(t, Pr, "getTransactionReceipt")({
                    hash: E.hash
                  }), e > 1 && (!d.blockNumber || x - d.blockNumber + 1n < e)))
                    return;
                  let B = "replaced";
                  E.to === f.to && E.value === f.value ? B = "repriced" : E.from === E.to && E.value === 0n && (B = "cancelled"), w(() => {
                    var A;
                    (A = h.onReplaced) == null || A.call(h, {
                      reason: B,
                      replacedTransaction: f,
                      transaction: E,
                      transactionReceipt: d
                    }), h.resolve(d);
                  });
                } catch (P) {
                  w(() => h.reject(P));
                }
              } else
                w(() => h.reject(I));
            }
        }
      });
    });
  });
}
function Gl(t, { blockTag: e = "latest", emitMissed: n = !1, emitOnBegin: r = !1, onBlock: s, onError: o, includeTransactions: i, poll: a, pollingInterval: c = t.pollingInterval }) {
  const u = typeof a < "u" ? a : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket"), f = i ?? !1;
  let d;
  return u ? (() => {
    const m = K([
      "watchBlocks",
      t.uid,
      e,
      n,
      r,
      f,
      c
    ]);
    return Fe(m, { onBlock: s, onError: o }, (y) => tn(async () => {
      var h;
      try {
        const b = await C(t, Be, "getBlock")({
          blockTag: e,
          includeTransactions: f
        });
        if (b.number && (d != null && d.number)) {
          if (b.number === d.number)
            return;
          if (b.number - d.number > 1 && n)
            for (let g = (d == null ? void 0 : d.number) + 1n; g < b.number; g++) {
              const w = await C(t, Be, "getBlock")({
                blockNumber: g,
                includeTransactions: f
              });
              y.onBlock(w, d), d = w;
            }
        }
        // If no previous block exists, emit.
        (!(d != null && d.number) || // If the block tag is "pending" with no block number, emit.
        e === "pending" && !(b != null && b.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        b.number && b.number > d.number) && (y.onBlock(b, d), d = b);
      } catch (b) {
        (h = y.onError) == null || h.call(y, b);
      }
    }, {
      emitOnBegin: r,
      interval: c
    }));
  })() : (() => {
    let m = !0, y = !0, h = () => m = !1;
    return (async () => {
      try {
        r && C(t, Be, "getBlock")({
          blockTag: e,
          includeTransactions: f
        }).then((w) => {
          m && y && (s(w, void 0), y = !1);
        });
        const b = (() => {
          if (t.transport.type === "fallback") {
            const w = t.transport.transports.find((x) => x.config.type === "webSocket");
            return w ? w.value : t.transport;
          }
          return t.transport;
        })(), { unsubscribe: g } = await b.subscribe({
          params: ["newHeads"],
          onData(w) {
            var P, E, B;
            if (!m)
              return;
            const I = (((B = (E = (P = t.chain) == null ? void 0 : P.formatters) == null ? void 0 : E.block) == null ? void 0 : B.format) || Kr)(w.result);
            s(I, d), y = !1, d = I;
          },
          onError(w) {
            o == null || o(w);
          }
        });
        h = g, m || h();
      } catch (b) {
        o == null || o(b);
      }
    })(), () => h();
  })();
}
function Hl(t, { address: e, args: n, batch: r = !0, event: s, events: o, fromBlock: i, onError: a, onLogs: c, poll: u, pollingInterval: f = t.pollingInterval, strict: d }) {
  const l = typeof u < "u" ? u : typeof i == "bigint" ? !0 : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket"), p = d ?? !1;
  return l ? (() => {
    const h = K([
      "watchEvent",
      e,
      n,
      r,
      t.uid,
      s,
      f,
      i
    ]);
    return Fe(h, { onLogs: c, onError: a }, (b) => {
      let g;
      i !== void 0 && (g = i - 1n);
      let w, x = !1;
      const I = tn(async () => {
        var P;
        if (!x) {
          try {
            w = await C(t, Li, "createEventFilter")({
              address: e,
              args: n,
              event: s,
              events: o,
              strict: p,
              fromBlock: i
            });
          } catch {
          }
          x = !0;
          return;
        }
        try {
          let E;
          if (w)
            E = await C(t, On, "getFilterChanges")({ filter: w });
          else {
            const B = await C(t, nn, "getBlockNumber")({});
            g && g !== B ? E = await C(t, rs, "getLogs")({
              address: e,
              args: n,
              event: s,
              events: o,
              fromBlock: g + 1n,
              toBlock: B
            }) : E = [], g = B;
          }
          if (E.length === 0)
            return;
          if (r)
            b.onLogs(E);
          else
            for (const B of E)
              b.onLogs([B]);
        } catch (E) {
          w && E instanceof We && (x = !1), (P = b.onError) == null || P.call(b, E);
        }
      }, {
        emitOnBegin: !0,
        interval: f
      });
      return async () => {
        w && await C(t, Cn, "uninstallFilter")({ filter: w }), I();
      };
    });
  })() : (() => {
    let h = !0, b = () => h = !1;
    return (async () => {
      try {
        const g = (() => {
          if (t.transport.type === "fallback") {
            const P = t.transport.transports.find((E) => E.config.type === "webSocket");
            return P ? P.value : t.transport;
          }
          return t.transport;
        })(), w = o ?? (s ? [s] : void 0);
        let x = [];
        w && (x = [w.flatMap((E) => Xt({
          abi: [E],
          eventName: E.name,
          args: n
        }))], s && (x = x[0]));
        const { unsubscribe: I } = await g.subscribe({
          params: ["logs", { address: e, topics: x }],
          onData(P) {
            var B;
            if (!h)
              return;
            const E = P.result;
            try {
              const { eventName: A, args: M } = ts({
                abi: w ?? [],
                data: E.data,
                topics: E.topics,
                strict: p
              }), k = Re(E, { args: M, eventName: A });
              c([k]);
            } catch (A) {
              let M, k;
              if (A instanceof It || A instanceof En) {
                if (d)
                  return;
                M = A.abiItem.name, k = (B = A.abiItem.inputs) == null ? void 0 : B.some((z) => !("name" in z && z.name));
              }
              const N = Re(E, {
                args: k ? [] : {},
                eventName: M
              });
              c([N]);
            }
          },
          onError(P) {
            a == null || a(P);
          }
        });
        b = I, h || b();
      } catch (g) {
        a == null || a(g);
      }
    })(), () => b();
  })();
}
function Vl(t, { batch: e = !0, onError: n, onTransactions: r, poll: s, pollingInterval: o = t.pollingInterval }) {
  return (typeof s < "u" ? s : t.transport.type !== "webSocket") ? (() => {
    const u = K([
      "watchPendingTransactions",
      t.uid,
      e,
      o
    ]);
    return Fe(u, { onTransactions: r, onError: n }, (f) => {
      let d;
      const l = tn(async () => {
        var p;
        try {
          if (!d)
            try {
              d = await C(t, Mi, "createPendingTransactionFilter")({});
              return;
            } catch (y) {
              throw l(), y;
            }
          const m = await C(t, On, "getFilterChanges")({ filter: d });
          if (m.length === 0)
            return;
          if (e)
            f.onTransactions(m);
          else
            for (const y of m)
              f.onTransactions([y]);
        } catch (m) {
          (p = f.onError) == null || p.call(f, m);
        }
      }, {
        emitOnBegin: !0,
        interval: o
      });
      return async () => {
        d && await C(t, Cn, "uninstallFilter")({ filter: d }), l();
      };
    });
  })() : (() => {
    let u = !0, f = () => u = !1;
    return (async () => {
      try {
        const { unsubscribe: d } = await t.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(l) {
            if (!u)
              return;
            const p = l.result;
            r([p]);
          },
          onError(l) {
            n == null || n(l);
          }
        });
        f = d, u || f();
      } catch (d) {
        n == null || n(d);
      }
    })(), () => f();
  })();
}
function Zl(t) {
  var d, l, p;
  const { scheme: e, statement: n, ...r } = ((d = t.match(Wl)) == null ? void 0 : d.groups) ?? {}, { chainId: s, expirationTime: o, issuedAt: i, notBefore: a, requestId: c, ...u } = ((l = t.match(Kl)) == null ? void 0 : l.groups) ?? {}, f = (p = t.split("Resources:")[1]) == null ? void 0 : p.split(`
- `).slice(1);
  return {
    ...r,
    ...u,
    ...s ? { chainId: Number(s) } : {},
    ...o ? { expirationTime: new Date(o) } : {},
    ...i ? { issuedAt: new Date(i) } : {},
    ...a ? { notBefore: new Date(a) } : {},
    ...c ? { requestId: c } : {},
    ...f ? { resources: f } : {},
    ...e ? { scheme: e } : {},
    ...n ? { statement: n } : {}
  };
}
const Wl = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, Kl = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function Yl(t) {
  const { address: e, domain: n, message: r, nonce: s, scheme: o, time: i = /* @__PURE__ */ new Date() } = t;
  if (n && r.domain !== n || s && r.nonce !== s || o && r.scheme !== o || r.expirationTime && i >= r.expirationTime || r.notBefore && i < r.notBefore)
    return !1;
  try {
    if (!r.address || e && !$n(r.address, e))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function Jl(t, e) {
  const { address: n, domain: r, message: s, nonce: o, scheme: i, signature: a, time: c = /* @__PURE__ */ new Date(), ...u } = e, f = Zl(s);
  if (!f.address || !Yl({
    address: n,
    domain: r,
    message: f,
    nonce: o,
    scheme: i,
    time: c
  }))
    return !1;
  const l = Vi(s);
  return bs(t, {
    address: f.address,
    hash: l,
    signature: a,
    ...u
  });
}
function Xl(t) {
  return {
    call: (e) => en(t, e),
    createBlockFilter: () => bd(t),
    createContractEventFilter: (e) => Zo(t, e),
    createEventFilter: (e) => Li(t, e),
    createPendingTransactionFilter: () => Mi(t),
    estimateContractGas: (e) => mf(t, e),
    estimateGas: (e) => es(t, e),
    getBalance: (e) => Ti(t, e),
    getBlobBaseFee: () => md(t),
    getBlock: (e) => Be(t, e),
    getBlockNumber: (e) => nn(t, e),
    getBlockTransactionCount: (e) => gd(t, e),
    getBytecode: (e) => Qs(t, e),
    getChainId: () => Bi(t),
    getCode: (e) => Qs(t, e),
    getContractEvents: (e) => _i(t, e),
    getEip712Domain: (e) => jf(t, e),
    getEnsAddress: (e) => ed(t, e),
    getEnsAvatar: (e) => hd(t, e),
    getEnsName: (e) => pd(t, e),
    getEnsResolver: (e) => yd(t, e),
    getEnsText: (e) => Fi(t, e),
    getFeeHistory: (e) => vd(t, e),
    estimateFeesPerGas: (e) => nf(t, e),
    getFilterChanges: (e) => On(t, e),
    getFilterLogs: (e) => xd(t, e),
    getGasPrice: () => Yr(t),
    getLogs: (e) => rs(t, e),
    getProof: (e) => rl(t, e),
    estimateMaxPriorityFeePerGas: (e) => tf(t, e),
    getStorageAt: (e) => sl(t, e),
    getTransaction: (e) => us(t, e),
    getTransactionConfirmations: (e) => ol(t, e),
    getTransactionCount: (e) => yi(t, e),
    getTransactionReceipt: (e) => Pr(t, e),
    multicall: (e) => il(t, e),
    prepareTransactionRequest: (e) => Ai(t, e),
    readContract: (e) => Te(t, e),
    sendRawTransaction: (e) => zf(t, e),
    simulateContract: (e) => kf(t, e),
    verifyMessage: (e) => jl(t, e),
    verifySiweMessage: (e) => Jl(t, e),
    verifyTypedData: (e) => ql(t, e),
    uninstallFilter: (e) => Cn(t, e),
    waitForTransactionReceipt: (e) => Dl(t, e),
    watchBlocks: (e) => Gl(t, e),
    watchBlockNumber: (e) => sa(t, e),
    watchContractEvent: (e) => Mf(t, e),
    watchEvent: (e) => Hl(t, e),
    watchPendingTransactions: (e) => Vl(t, e)
  };
}
function ap(t) {
  const { key: e = "public", name: n = "Public Client" } = t;
  return Df({
    ...t,
    key: e,
    name: n,
    type: "publicClient"
  }).extend(Xl);
}
const ge = /* @__PURE__ */ Object.create(null);
ge.open = "0";
ge.close = "1";
ge.ping = "2";
ge.pong = "3";
ge.message = "4";
ge.upgrade = "5";
ge.noop = "6";
const pn = /* @__PURE__ */ Object.create(null);
Object.keys(ge).forEach((t) => {
  pn[ge[t]] = t;
});
const Sr = { type: "error", data: "parser error" }, oa = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", ia = typeof ArrayBuffer == "function", aa = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, ms = ({ type: t, data: e }, n, r) => oa && e instanceof Blob ? n ? r(e) : uo(e, r) : ia && (e instanceof ArrayBuffer || aa(e)) ? n ? r(e) : uo(new Blob([e]), r) : r(ge[t] + (e || "")), uo = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
};
function fo(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Qn;
function Ql(t, e) {
  if (oa && t.data instanceof Blob)
    return t.data.arrayBuffer().then(fo).then(e);
  if (ia && (t.data instanceof ArrayBuffer || aa(t.data)))
    return e(fo(t.data));
  ms(t, !1, (n) => {
    Qn || (Qn = new TextEncoder()), e(Qn.encode(n));
  });
}
const lo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _t = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < lo.length; t++)
  _t[lo.charCodeAt(t)] = t;
const eh = (t) => {
  let e = t.length * 0.75, n = t.length, r, s = 0, o, i, a, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), f = new Uint8Array(u);
  for (r = 0; r < n; r += 4)
    o = _t[t.charCodeAt(r)], i = _t[t.charCodeAt(r + 1)], a = _t[t.charCodeAt(r + 2)], c = _t[t.charCodeAt(r + 3)], f[s++] = o << 2 | i >> 4, f[s++] = (i & 15) << 4 | a >> 2, f[s++] = (a & 3) << 6 | c & 63;
  return u;
}, th = typeof ArrayBuffer == "function", gs = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: ca(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: nh(t.substring(1), e)
  } : pn[n] ? t.length > 1 ? {
    type: pn[n],
    data: t.substring(1)
  } : {
    type: pn[n]
  } : Sr;
}, nh = (t, e) => {
  if (th) {
    const n = eh(t);
    return ca(n, e);
  } else
    return { base64: !0, data: t };
}, ca = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, ua = "", rh = (t, e) => {
  const n = t.length, r = new Array(n);
  let s = 0;
  t.forEach((o, i) => {
    ms(o, !1, (a) => {
      r[i] = a, ++s === n && e(r.join(ua));
    });
  });
}, sh = (t, e) => {
  const n = t.split(ua), r = [];
  for (let s = 0; s < n.length; s++) {
    const o = gs(n[s], e);
    if (r.push(o), o.type === "error")
      break;
  }
  return r;
};
function oh() {
  return new TransformStream({
    transform(t, e) {
      Ql(t, (n) => {
        const r = n.length;
        let s;
        if (r < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, r);
        else if (r < 65536) {
          s = new Uint8Array(3);
          const o = new DataView(s.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          s = new Uint8Array(9);
          const o = new DataView(s.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        t.data && typeof t.data != "string" && (s[0] |= 128), e.enqueue(s), e.enqueue(n);
      });
    }
  });
}
let er;
function dn(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function ln(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let r = 0;
  for (let s = 0; s < e; s++)
    n[s] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
}
function ih(t, e) {
  er || (er = new TextDecoder());
  const n = [];
  let r = 0, s = -1, o = !1;
  return new TransformStream({
    transform(i, a) {
      for (n.push(i); ; ) {
        if (r === 0) {
          if (dn(n) < 1)
            break;
          const c = ln(n, 1);
          o = (c[0] & 128) === 128, s = c[0] & 127, s < 126 ? r = 3 : s === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (dn(n) < 2)
            break;
          const c = ln(n, 2);
          s = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (dn(n) < 8)
            break;
          const c = ln(n, 8), u = new DataView(c.buffer, c.byteOffset, c.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Sr);
            break;
          }
          s = f * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (dn(n) < s)
            break;
          const c = ln(n, s);
          a.enqueue(gs(o ? c : er.decode(c), e)), r = 0;
        }
        if (s === 0 || s > t) {
          a.enqueue(Sr);
          break;
        }
      }
    }
  });
}
const fa = 4;
function G(t) {
  if (t) return ah(t);
}
function ah(t) {
  for (var e in G.prototype)
    t[e] = G.prototype[e];
  return t;
}
G.prototype.on = G.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
G.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
G.prototype.off = G.prototype.removeListener = G.prototype.removeAllListeners = G.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var r, s = 0; s < n.length; s++)
    if (r = n[s], r === e || r.fn === e) {
      n.splice(s, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
G.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, s = n.length; r < s; ++r)
      n[r].apply(this, e);
  }
  return this;
};
G.prototype.emitReserved = G.prototype.emit;
G.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
G.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Mn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), re = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), ch = "arraybuffer";
function da(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const uh = re.setTimeout, fh = re.clearTimeout;
function zn(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = uh.bind(re), t.clearTimeoutFn = fh.bind(re)) : (t.setTimeoutFn = re.setTimeout.bind(re), t.clearTimeoutFn = re.clearTimeout.bind(re));
}
const dh = 1.33;
function lh(t) {
  return typeof t == "string" ? hh(t) : Math.ceil((t.byteLength || t.size) * dh);
}
function hh(t) {
  let e = 0, n = 0;
  for (let r = 0, s = t.length; r < s; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function la() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function ph(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function yh(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, s = n.length; r < s; r++) {
    let o = n[r].split("=");
    e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return e;
}
class bh extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class ws extends G {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, zn(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, n, r) {
    return super.emitReserved("error", new bh(e, n, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const n = gs(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, n = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const n = ph(e);
    return n.length ? "?" + n : "";
  }
}
class mh extends ws {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    sh(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, rh(e, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = la()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
}
let ha = !1;
try {
  ha = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const gh = ha;
function wh() {
}
class vh extends mh {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const r = this.request({
      method: "POST",
      data: e
    });
    r.on("success", n), r.on("error", (s, o) => {
      this.onError("xhr post error", s, o);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = e;
  }
}
let at = class yn extends G {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n, r) {
    super(), this.createRequest = e, zn(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const n = da(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && r.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var s;
        r.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = yn.requestsCount++, yn.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = wh, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete yn.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
at.requestsCount = 0;
at.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", ho);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in re ? "pagehide" : "unload";
    addEventListener(t, ho, !1);
  }
}
function ho() {
  for (let t in at.requests)
    at.requests.hasOwnProperty(t) && at.requests[t].abort();
}
const xh = function() {
  const t = pa({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class Eh extends vh {
  constructor(e) {
    super(e);
    const n = e && e.forceBase64;
    this.supportsBinary = xh && !n;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new at(pa, this.uri(), e);
  }
}
function pa(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || gh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new re[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const ya = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Ph extends ws {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), n = this.opts.protocols, r = ya ? {} : da(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, n, r);
    } catch (s) {
      return this.emitReserved("error", s);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = n === e.length - 1;
      ms(r, this.supportsBinary, (o) => {
        try {
          this.doWrite(r, o);
        } catch {
        }
        s && Mn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = la()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
}
const tr = re.WebSocket || re.MozWebSocket;
class Bh extends Ph {
  createSocket(e, n, r) {
    return ya ? new tr(e, n, r) : n ? new tr(e, n) : new tr(e);
  }
  doWrite(e, n) {
    this.ws.send(n);
  }
}
class Ah extends ws {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const n = ih(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(n).getReader(), s = oh();
        s.readable.pipeTo(e.writable), this._writer = s.writable.getWriter();
        const o = () => {
          r.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), o());
          }).catch((a) => {
          });
        };
        o();
        const i = { type: "open" };
        this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this._writer.write(i).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = n === e.length - 1;
      this._writer.write(r).then(() => {
        s && Mn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const Th = {
  websocket: Bh,
  webtransport: Ah,
  polling: Eh
}, _h = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Ih = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function $r(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let s = _h.exec(t || ""), o = {}, i = 14;
  for (; i--; )
    o[Ih[i]] = s[i] || "";
  return n != -1 && r != -1 && (o.source = e, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = Sh(o, o.path), o.queryKey = $h(o, o.query), o;
}
function Sh(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function $h(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, s, o) {
    s && (n[s] = o);
  }), n;
}
const kr = typeof addEventListener == "function" && typeof removeEventListener == "function", bn = [];
kr && addEventListener("offline", () => {
  bn.forEach((t) => t());
}, !1);
class Ce extends G {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n) {
    if (super(), this.binaryType = ch, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (n = e, e = null), e) {
      const r = $r(e);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = $r(n.host).host);
    zn(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
      const s = r.prototype.name;
      this.transports.push(s), this._transportsByName[s] = r;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = yh(this.opts.query)), kr && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, bn.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = fa, n.transport = e, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e = this.opts.rememberUpgrade && Ce.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(e);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Ce.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const s = this.writeBuffer[r].data;
      if (s && (n += lh(s)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, Mn(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(e, n, r, s) {
    if (typeof n == "function" && (s = n, n = void 0), typeof r == "function" && (s = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const o = {
      type: e,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", o), this.writeBuffer.push(o), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (Ce.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), kr && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = bn.indexOf(this._offlineEventListener);
        r !== -1 && bn.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Ce.protocol = fa;
class kh extends Ce {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let n = this.createTransport(e), r = !1;
    Ce.priorWebsocketSuccess = !1;
    const s = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Ce.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const l = new Error("probe error");
            l.transport = n.name, this.emitReserved("upgradeError", l);
          }
      }));
    };
    function o() {
      r || (r = !0, f(), n.close(), n = null);
    }
    const i = (d) => {
      const l = new Error("probe error: " + d);
      l.transport = n.name, o(), this.emitReserved("upgradeError", l);
    };
    function a() {
      i("transport closed");
    }
    function c() {
      i("socket closed");
    }
    function u(d) {
      n && d.name !== n.name && o();
    }
    const f = () => {
      n.removeListener("open", s), n.removeListener("error", i), n.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    n.once("open", s), n.once("error", i), n.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      ~this.transports.indexOf(e[r]) && n.push(e[r]);
    return n;
  }
}
let Oh = class extends kh {
  constructor(e, n = {}) {
    const r = typeof e == "object" ? e : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((s) => Th[s]).filter((s) => !!s)), super(e, r);
  }
};
function Ch(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = $r(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + o + ":" + r.port + e, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Nh = typeof ArrayBuffer == "function", Rh = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, ba = Object.prototype.toString, Fh = typeof Blob == "function" || typeof Blob < "u" && ba.call(Blob) === "[object BlobConstructor]", Lh = typeof File == "function" || typeof File < "u" && ba.call(File) === "[object FileConstructor]";
function vs(t) {
  return Nh && (t instanceof ArrayBuffer || Rh(t)) || Fh && t instanceof Blob || Lh && t instanceof File;
}
function mn(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if (mn(t[n]))
        return !0;
    return !1;
  }
  if (vs(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return mn(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && mn(t[n]))
      return !0;
  return !1;
}
function Mh(t) {
  const e = [], n = t.data, r = t;
  return r.data = Or(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function Or(t, e) {
  if (!t)
    return t;
  if (vs(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = Or(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = Or(t[r], e));
    return n;
  }
  return t;
}
function zh(t, e) {
  return t.data = Cr(t.data, e), delete t.attachments, t;
}
function Cr(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = Cr(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = Cr(t[n], e));
  return t;
}
const Uh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], jh = 5;
var L;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(L || (L = {}));
class qh {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === L.EVENT || e.type === L.ACK) && mn(e) ? this.encodeAsBinary({
      type: e.type === L.EVENT ? L.BINARY_EVENT : L.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === L.BINARY_EVENT || e.type === L.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = Mh(e), r = this.encodeAsString(n.packet), s = n.buffers;
    return s.unshift(r), s;
  }
}
function po(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class xs extends G {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const r = n.type === L.BINARY_EVENT;
      r || n.type === L.BINARY_ACK ? (n.type = r ? L.EVENT : L.ACK, this.reconstructor = new Dh(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (vs(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const r = {
      type: Number(e.charAt(0))
    };
    if (L[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === L.BINARY_EVENT || r.type === L.BINARY_ACK) {
      const o = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const i = e.substring(o, n);
      if (i != Number(i) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(i);
    }
    if (e.charAt(n + 1) === "/") {
      const o = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      r.nsp = e.substring(o, n);
    } else
      r.nsp = "/";
    const s = e.charAt(n + 1);
    if (s !== "" && Number(s) == s) {
      const o = n + 1;
      for (; ++n; ) {
        const i = e.charAt(n);
        if (i == null || Number(i) != i) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      r.id = Number(e.substring(o, n + 1));
    }
    if (e.charAt(++n)) {
      const o = this.tryParse(e.substr(n));
      if (xs.isPayloadValid(r.type, o))
        r.data = o;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case L.CONNECT:
        return po(n);
      case L.DISCONNECT:
        return n === void 0;
      case L.CONNECT_ERROR:
        return typeof n == "string" || po(n);
      case L.EVENT:
      case L.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Uh.indexOf(n[0]) === -1);
      case L.ACK:
      case L.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Dh {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = zh(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: xs,
  Encoder: qh,
  get PacketType() {
    return L;
  },
  protocol: jh
}, Symbol.toStringTag, { value: "Module" }));
function ce(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const Hh = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class ma extends G {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      ce(e, "open", this.onopen.bind(this)),
      ce(e, "packet", this.onpacket.bind(this)),
      ce(e, "error", this.onerror.bind(this)),
      ce(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...n) {
    var r, s, o;
    if (Hh.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const i = {
      type: L.EVENT,
      data: n
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const f = this.ids++, d = n.pop();
      this._registerAckCallback(f, d), i.id = f;
    }
    const a = (s = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || s === void 0 ? void 0 : s.writable, c = this.connected && !(!((o = this.io.engine) === null || o === void 0) && o._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var r;
    const s = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[e] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, s), i = (...a) => {
      this.io.clearTimeoutFn(o), n.apply(this, a);
    };
    i.withError = !0, this.acks[e] = i;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...n) {
    return new Promise((r, s) => {
      const o = (i, a) => i ? s(i) : r(a);
      o.withError = !0, n.push(o), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((s, ...o) => r !== this._queue[0] ? void 0 : (s !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(s)) : (this._queue.shift(), n && n(null, ...o)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: L.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((r) => String(r.id) === e)) {
        const r = this.acks[e];
        delete this.acks[e], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case L.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case L.EVENT:
        case L.BINARY_EVENT:
          this.onevent(e);
          break;
        case L.ACK:
        case L.BINARY_ACK:
          this.onack(e);
          break;
        case L.DISCONNECT:
          this.ondisconnect();
          break;
        case L.CONNECT_ERROR:
          this.destroy();
          const r = new Error(e.data.message);
          r.data = e.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let r = !1;
    return function(...s) {
      r || (r = !0, n.packet({
        type: L.ACK,
        id: e,
        data: s
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (delete this.acks[e.id], n.withError && e.data.unshift(null), n.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: L.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, e.data);
    }
  }
}
function wt(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
wt.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
wt.prototype.reset = function() {
  this.attempts = 0;
};
wt.prototype.setMin = function(t) {
  this.ms = t;
};
wt.prototype.setMax = function(t) {
  this.max = t;
};
wt.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Nr extends G {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, zn(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new wt({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const s = n.parser || Gh;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Oh(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = ce(n, "open", function() {
      r.onopen(), e && e();
    }), o = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, i = ce(n, "error", o);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        s(), o(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(s), this.subs.push(i), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      ce(e, "ping", this.onping.bind(this)),
      ce(e, "data", this.ondata.bind(this)),
      ce(e, "error", this.onerror.bind(this)),
      ce(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      ce(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    Mn(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new ma(this, e, n), this.nsps[e] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(e, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((s) => {
          s ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", s)) : e.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const At = {};
function nr(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = Ch(t, e.path || "/socket.io"), r = n.source, s = n.id, o = n.path, i = At[s] && o in At[s].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || i;
  let c;
  return a ? c = new Nr(r, e) : (At[s] || (At[s] = new Nr(r, e)), c = At[s]), n.query && !e.query && (e.query = n.queryKey), c.socket(n.path, e);
}
Object.assign(nr, {
  Manager: Nr,
  Socket: ma,
  io: nr,
  connect: nr
});
function Kt(t) {
  "@babel/helpers - typeof";
  return Kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Kt(t);
}
function Vh(t, e) {
  if (Kt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (Kt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Zh(t) {
  var e = Vh(t, "string");
  return Kt(e) == "symbol" ? e : e + "";
}
function Wh(t, e, n) {
  return (e = Zh(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function yo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function up(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yo(Object(n), !0).forEach(function(r) {
      Wh(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yo(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Kh(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.includes(r)) continue;
    n[r] = t[r];
  }
  return n;
}
function fp(t, e) {
  if (t == null) return {};
  var n, r, s = Kh(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (r = 0; r < o.length; r++) n = o[r], e.includes(n) || {}.propertyIsEnumerable.call(t, n) && (s[n] = t[n]);
  }
  return s;
}
export {
  ee as I,
  Nr as M,
  Kt as _,
  Xh as a,
  rp as b,
  _e as c,
  Qh as d,
  Ke as e,
  Wr as f,
  np as g,
  Ne as h,
  J as i,
  ap as j,
  ei as k,
  tp as l,
  ep as m,
  ze as n,
  Zh as o,
  up as p,
  Wh as q,
  fp as r,
  sp as s,
  R as t,
  op as u,
  $n as v,
  el as w,
  Qo as x
};
