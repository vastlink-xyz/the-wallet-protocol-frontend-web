import "./vendor-walletconnect-D5sGEk4j.js";
import "./vendor-react-CuOkI7kW.js";
const vi = "1.0.6";
let te = class Rn extends Error {
  constructor(t, n = {}) {
    var i;
    const r = n.cause instanceof Rn ? n.cause.details : (i = n.cause) != null && i.message ? n.cause.message : n.details, s = n.cause instanceof Rn && n.cause.docsPath || n.docsPath, o = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [`Docs: https://abitype.dev${s}`] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: abitype@${vi}`
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
    }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.shortMessage = t;
  }
};
function Ne(e, t) {
  const n = e.exec(t);
  return n == null ? void 0 : n.groups;
}
const Ns = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Cs = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, Fs = /^\(.+?\).*?$/, Vr = /^tuple(?<array>(\[(\d*)\])*)$/;
function Mn(e) {
  let t = e.type;
  if (Vr.test(e.type) && "components" in e) {
    t = "(";
    const n = e.components.length;
    for (let s = 0; s < n; s++) {
      const o = e.components[s];
      t += Mn(o), s < n - 1 && (t += ", ");
    }
    const r = Ne(Vr, e.type);
    return t += `)${(r == null ? void 0 : r.array) ?? ""}`, Mn({
      ...e,
      type: t
    });
  }
  return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t;
}
function ht(e) {
  let t = "";
  const n = e.length;
  for (let r = 0; r < n; r++) {
    const s = e[r];
    t += Mn(s), r !== n - 1 && (t += ", ");
  }
  return t;
}
function Ei(e) {
  return e.type === "function" ? `function ${e.name}(${ht(e.inputs)})${e.stateMutability && e.stateMutability !== "nonpayable" ? ` ${e.stateMutability}` : ""}${e.outputs.length ? ` returns (${ht(e.outputs)})` : ""}` : e.type === "event" ? `event ${e.name}(${ht(e.inputs)})` : e.type === "error" ? `error ${e.name}(${ht(e.inputs)})` : e.type === "constructor" ? `constructor(${ht(e.inputs)})${e.stateMutability === "payable" ? " payable" : ""}` : e.type === "fallback" ? "fallback()" : "receive() external payable";
}
const Os = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function Pi(e) {
  return Os.test(e);
}
function Bi(e) {
  return Ne(Os, e);
}
const Rs = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function $i(e) {
  return Rs.test(e);
}
function Ai(e) {
  return Ne(Rs, e);
}
const Ms = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function Ii(e) {
  return Ms.test(e);
}
function Si(e) {
  return Ne(Ms, e);
}
const zs = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function Ls(e) {
  return zs.test(e);
}
function Ti(e) {
  return Ne(zs, e);
}
const js = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function ki(e) {
  return js.test(e);
}
function Ni(e) {
  return Ne(js, e);
}
const Ci = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function Fi(e) {
  return Ci.test(e);
}
const Oi = /^receive\(\) external payable$/;
function Ri(e) {
  return Oi.test(e);
}
const Mi = /* @__PURE__ */ new Set(["indexed"]), zn = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
class zi extends te {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownTypeError"
    });
  }
}
class Li extends te {
  constructor({ type: t }) {
    super("Unknown type.", {
      metaMessages: [`Type "${t}" is not a valid ABI type.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSolidityTypeError"
    });
  }
}
class ji extends te {
  constructor({ param: t }) {
    super("Invalid ABI parameter.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParameterError"
    });
  }
}
class _i extends te {
  constructor({ param: t, name: n }) {
    super("Invalid ABI parameter.", {
      details: t,
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
class Ui extends te {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
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
class Gi extends te {
  constructor({ param: t, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: t,
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
class Di extends te {
  constructor({ abiParameter: t }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(t, null, 2),
      metaMessages: ["ABI parameter type is invalid."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiTypeParameterError"
    });
  }
}
class mt extends te {
  constructor({ signature: t, type: n }) {
    super(`Invalid ${n} signature.`, {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSignatureError"
    });
  }
}
class Hi extends te {
  constructor({ signature: t }) {
    super("Unknown signature.", {
      details: t
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSignatureError"
    });
  }
}
class qi extends te {
  constructor({ signature: t }) {
    super("Invalid struct signature.", {
      details: t,
      metaMessages: ["No properties exist."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStructSignatureError"
    });
  }
}
class Vi extends te {
  constructor({ type: t }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${t}" is a circular reference.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CircularReferenceError"
    });
  }
}
class Zi extends te {
  constructor({ current: t, depth: n }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${t.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`
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
function Wi(e, t) {
  return t ? `${t}:${e}` : e;
}
const Pn = /* @__PURE__ */ new Map([
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
function Ki(e, t = {}) {
  if (Ii(e)) {
    const n = Si(e);
    if (!n)
      throw new mt({ signature: e, type: "function" });
    const r = oe(n.parameters), s = [], o = r.length;
    for (let a = 0; a < o; a++)
      s.push(Re(r[a], {
        modifiers: zn,
        structs: t,
        type: "function"
      }));
    const i = [];
    if (n.returns) {
      const a = oe(n.returns), c = a.length;
      for (let u = 0; u < c; u++)
        i.push(Re(a[u], {
          modifiers: zn,
          structs: t,
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
  if ($i(e)) {
    const n = Ai(e);
    if (!n)
      throw new mt({ signature: e, type: "event" });
    const r = oe(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(Re(r[i], {
        modifiers: Mi,
        structs: t,
        type: "event"
      }));
    return { name: n.name, type: "event", inputs: s };
  }
  if (Pi(e)) {
    const n = Bi(e);
    if (!n)
      throw new mt({ signature: e, type: "error" });
    const r = oe(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(Re(r[i], { structs: t, type: "error" }));
    return { name: n.name, type: "error", inputs: s };
  }
  if (ki(e)) {
    const n = Ni(e);
    if (!n)
      throw new mt({ signature: e, type: "constructor" });
    const r = oe(n.parameters), s = [], o = r.length;
    for (let i = 0; i < o; i++)
      s.push(Re(r[i], { structs: t, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: s
    };
  }
  if (Fi(e))
    return { type: "fallback" };
  if (Ri(e))
    return {
      type: "receive",
      stateMutability: "payable"
    };
  throw new Hi({ signature: e });
}
const Yi = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Ji = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, Xi = /^u?int$/;
function Re(e, t) {
  var d, l;
  const n = Wi(e, t == null ? void 0 : t.type);
  if (Pn.has(n))
    return Pn.get(n);
  const r = Fs.test(e), s = Ne(r ? Ji : Yi, e);
  if (!s)
    throw new ji({ param: e });
  if (s.name && ea(s.name))
    throw new _i({ param: e, name: s.name });
  const o = s.name ? { name: s.name } : {}, i = s.modifier === "indexed" ? { indexed: !0 } : {}, a = (t == null ? void 0 : t.structs) ?? {};
  let c, u = {};
  if (r) {
    c = "tuple";
    const p = oe(s.type), m = [], b = p.length;
    for (let h = 0; h < b; h++)
      m.push(Re(p[h], { structs: a }));
    u = { components: m };
  } else if (s.type in a)
    c = "tuple", u = { components: a[s.type] };
  else if (Xi.test(s.type))
    c = `${s.type}256`;
  else if (c = s.type, (t == null ? void 0 : t.type) !== "struct" && !_s(c))
    throw new Li({ type: c });
  if (s.modifier) {
    if (!((l = (d = t == null ? void 0 : t.modifiers) == null ? void 0 : d.has) != null && l.call(d, s.modifier)))
      throw new Ui({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
    if (zn.has(s.modifier) && !ta(c, !!s.array))
      throw new Gi({
        param: e,
        type: t == null ? void 0 : t.type,
        modifier: s.modifier
      });
  }
  const f = {
    type: `${c}${s.array ?? ""}`,
    ...o,
    ...i,
    ...u
  };
  return Pn.set(n, f), f;
}
function oe(e, t = [], n = "", r = 0) {
  const s = e.trim().length;
  for (let o = 0; o < s; o++) {
    const i = e[o], a = e.slice(o + 1);
    switch (i) {
      case ",":
        return r === 0 ? oe(a, [...t, n.trim()]) : oe(a, t, `${n}${i}`, r);
      case "(":
        return oe(a, t, `${n}${i}`, r + 1);
      case ")":
        return oe(a, t, `${n}${i}`, r - 1);
      default:
        return oe(a, t, `${n}${i}`, r);
    }
  }
  if (n === "")
    return t;
  if (r !== 0)
    throw new Zi({ current: n, depth: r });
  return t.push(n.trim()), t;
}
function _s(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || Ns.test(e) || Cs.test(e);
}
const Qi = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function ea(e) {
  return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || Ns.test(e) || Cs.test(e) || Qi.test(e);
}
function ta(e, t) {
  return t || e === "bytes" || e === "string" || e === "tuple";
}
function na(e) {
  const t = {}, n = e.length;
  for (let i = 0; i < n; i++) {
    const a = e[i];
    if (!Ls(a))
      continue;
    const c = Ti(a);
    if (!c)
      throw new mt({ signature: a, type: "struct" });
    const u = c.properties.split(";"), f = [], d = u.length;
    for (let l = 0; l < d; l++) {
      const m = u[l].trim();
      if (!m)
        continue;
      const b = Re(m, {
        type: "struct"
      });
      f.push(b);
    }
    if (!f.length)
      throw new qi({ signature: a });
    t[c.name] = f;
  }
  const r = {}, s = Object.entries(t), o = s.length;
  for (let i = 0; i < o; i++) {
    const [a, c] = s[i];
    r[a] = Us(c, t);
  }
  return r;
}
const ra = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function Us(e, t, n = /* @__PURE__ */ new Set()) {
  const r = [], s = e.length;
  for (let o = 0; o < s; o++) {
    const i = e[o];
    if (Fs.test(i.type))
      r.push(i);
    else {
      const c = Ne(ra, i.type);
      if (!(c != null && c.type))
        throw new Di({ abiParameter: i });
      const { array: u, type: f } = c;
      if (f in t) {
        if (n.has(f))
          throw new Vi({ type: f });
        r.push({
          ...i,
          type: `tuple${u ?? ""}`,
          components: Us(t[f] ?? [], t, /* @__PURE__ */ new Set([...n, f]))
        });
      } else if (_s(f))
        r.push(i);
      else
        throw new zi({ type: f });
    }
  }
  return r;
}
function Gs(e) {
  const t = na(e), n = [], r = e.length;
  for (let s = 0; s < r; s++) {
    const o = e[s];
    Ls(o) || n.push(Ki(o, t));
  }
  return n;
}
function F(e, t, n) {
  const r = e[t.name];
  if (typeof r == "function")
    return r;
  const s = e[n];
  return typeof s == "function" ? s : (o) => t(e, o);
}
function xe(e, { includeName: t = !1 } = {}) {
  if (e.type !== "function" && e.type !== "event" && e.type !== "error")
    throw new ya(e.type);
  return `${e.name}(${rn(e.inputs, { includeName: t })})`;
}
function rn(e, { includeName: t = !1 } = {}) {
  return e ? e.map((n) => sa(n, { includeName: t })).join(t ? ", " : ",") : "";
}
function sa(e, { includeName: t }) {
  return e.type.startsWith("tuple") ? `(${rn(e.components, { includeName: t })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "");
}
function ce(e, { strict: t = !0 } = {}) {
  return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x");
}
function _(e) {
  return ce(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
}
const Ds = "2.21.32";
let pt = {
  getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) => t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
  version: `viem@${Ds}`
};
class x extends Error {
  constructor(t, n = {}) {
    var a;
    const r = (() => {
      var c;
      return n.cause instanceof x ? n.cause.details : (c = n.cause) != null && c.message ? n.cause.message : n.details;
    })(), s = n.cause instanceof x && n.cause.docsPath || n.docsPath, o = (a = pt.getDocsUrl) == null ? void 0 : a.call(pt, { ...n, docsPath: s }), i = [
      t || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...o ? [`Docs: ${o}`] : [],
      ...r ? [`Details: ${r}`] : [],
      ...pt.version ? [`Version: ${pt.version}`] : []
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
    }), this.details = r, this.docsPath = s, this.metaMessages = n.metaMessages, this.name = n.name ?? this.name, this.shortMessage = t, this.version = Ds;
  }
  walk(t) {
    return Hs(this, t);
  }
}
function Hs(e, t) {
  return t != null && t(e) ? e : e && typeof e == "object" && "cause" in e ? Hs(e.cause, t) : t ? null : e;
}
class oa extends x {
  constructor({ docsPath: t }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorNotFoundError"
    });
  }
}
class Zr extends x {
  constructor({ docsPath: t }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: t,
      name: "AbiConstructorParamsNotFoundError"
    });
  }
}
class qs extends x {
  constructor({ data: t, params: n, size: r }) {
    super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${rn(n, { includeName: !0 })})`,
        `Data:   ${t} (${r} bytes)`
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
    }), this.data = t, this.params = n, this.size = r;
  }
}
class sn extends x {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.', {
      name: "AbiDecodingZeroDataError"
    });
  }
}
class ia extends x {
  constructor({ expectedLength: t, givenLength: n, type: r }) {
    super([
      `ABI encoding array length mismatch for type ${r}.`,
      `Expected length: ${t}`,
      `Given length: ${n}`
    ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
  }
}
class aa extends x {
  constructor({ expectedSize: t, value: n }) {
    super(`Size of bytes "${n}" (bytes${_(n)}) does not match expected size (bytes${t}).`, { name: "AbiEncodingBytesSizeMismatchError" });
  }
}
class ca extends x {
  constructor({ expectedLength: t, givenLength: n }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${t}`,
      `Given length (values): ${n}`
    ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
  }
}
class Vs extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded error signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = t;
  }
}
class ua extends x {
  constructor({ docsPath: t }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: t,
      name: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class Zs extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Encoded event signature "${t}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventSignatureNotFoundError"
    });
  }
}
class Wr extends x {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Event ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventNotFoundError"
    });
  }
}
class tn extends x {
  constructor(t, { docsPath: n } = {}) {
    super([
      `Function ${t ? `"${t}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionNotFoundError"
    });
  }
}
class fa extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Function "${t}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class da extends x {
  constructor(t, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${t.type}\` in \`${xe(t.abiItem)}\`, and`,
        `\`${n.type}\` in \`${xe(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ],
      name: "AbiItemAmbiguityError"
    });
  }
}
class la extends x {
  constructor({ expectedSize: t, givenSize: n }) {
    super(`Expected bytes${t}, got bytes${n}.`, {
      name: "BytesSizeMismatchError"
    });
  }
}
class gt extends x {
  constructor({ abiItem: t, data: n, params: r, size: s }) {
    super([
      `Data size of ${s} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${rn(r, { includeName: !0 })})`,
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
    }), this.abiItem = t, this.data = n, this.params = r, this.size = s;
  }
}
class on extends x {
  constructor({ abiItem: t, param: n }) {
    super([
      `Expected a topic for indexed event parameter${n.name ? ` "${n.name}"` : ""} on event "${xe(t, { includeName: !0 })}".`
    ].join(`
`), { name: "DecodeLogTopicsMismatch" }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = t;
  }
}
class ha extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiEncodingType" });
  }
}
class pa extends x {
  constructor(t, { docsPath: n }) {
    super([
      `Type "${t}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiDecodingType" });
  }
}
class ba extends x {
  constructor(t) {
    super([`Value "${t}" is not a valid array.`].join(`
`), {
      name: "InvalidArrayError"
    });
  }
}
class ya extends x {
  constructor(t) {
    super([
      `"${t}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`), { name: "InvalidDefinitionTypeError" });
  }
}
class ma extends x {
  constructor(t) {
    super(`Filter type "${t}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
}
class Ws extends x {
  constructor({ offset: t, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${r}).`, { name: "SliceOffsetOutOfBoundsError" });
  }
}
class Ks extends x {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
class Kr extends x {
  constructor({ size: t, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`, { name: "InvalidBytesLengthError" });
  }
}
function at(e, { dir: t, size: n = 32 } = {}) {
  return typeof e == "string" ? Ie(e, { dir: t, size: n }) : ga(e, { dir: t, size: n });
}
function Ie(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  const r = e.replace("0x", "");
  if (r.length > n * 2)
    throw new Ks({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function ga(e, { dir: t, size: n = 32 } = {}) {
  if (n === null)
    return e;
  if (e.length > n)
    throw new Ks({
      size: e.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let s = 0; s < n; s++) {
    const o = t === "right";
    r[o ? s : n - s - 1] = e[o ? s : e.length - s - 1];
  }
  return r;
}
class wa extends x {
  constructor({ max: t, min: n, signed: r, size: s, value: o }) {
    super(`Number "${o}" is not in safe ${s ? `${s * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class xa extends x {
  constructor(t) {
    super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
      name: "InvalidBytesBooleanError"
    });
  }
}
class va extends x {
  constructor(t) {
    super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: "InvalidHexBooleanError" });
  }
}
class Ea extends x {
  constructor({ givenSize: t, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, { name: "SizeOverflowError" });
  }
}
function ie(e, { dir: t = "left" } = {}) {
  let n = typeof e == "string" ? e.replace("0x", "") : e, r = 0;
  for (let s = 0; s < n.length - 1 && n[t === "left" ? s : n.length - s - 1].toString() === "0"; s++)
    r++;
  return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`), `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n;
}
function fe(e, { size: t }) {
  if (_(e) > t)
    throw new Ea({
      givenSize: _(e),
      maxSize: t
    });
}
function Se(e, t = {}) {
  const { signed: n } = t;
  t.size && fe(e, { size: t.size });
  const r = BigInt(e);
  if (!n)
    return r;
  const s = (e.length - 2) / 2, o = (1n << BigInt(s) * 8n - 1n) - 1n;
  return r <= o ? r : r - BigInt(`0x${"f".padStart(s * 2, "f")}`) - 1n;
}
function Pa(e, t = {}) {
  let n = e;
  if (t.size && (fe(n, { size: t.size }), n = ie(n)), ie(n) === "0x00")
    return !1;
  if (ie(n) === "0x01")
    return !0;
  throw new va(n);
}
function le(e, t = {}) {
  return Number(Se(e, t));
}
const Ba = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function R(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? C(e, t) : typeof e == "string" ? wt(e, t) : typeof e == "boolean" ? Ys(e, t) : D(e, t);
}
function Ys(e, t = {}) {
  const n = `0x${Number(e)}`;
  return typeof t.size == "number" ? (fe(n, { size: t.size }), at(n, { size: t.size })) : n;
}
function D(e, t = {}) {
  let n = "";
  for (let s = 0; s < e.length; s++)
    n += Ba[e[s]];
  const r = `0x${n}`;
  return typeof t.size == "number" ? (fe(r, { size: t.size }), at(r, { dir: "right", size: t.size })) : r;
}
function C(e, t = {}) {
  const { signed: n, size: r } = t, s = BigInt(e);
  let o;
  r ? n ? o = (1n << BigInt(r) * 8n - 1n) - 1n : o = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (o = BigInt(Number.MAX_SAFE_INTEGER));
  const i = typeof o == "bigint" && n ? -o - 1n : 0;
  if (o && s > o || s < i) {
    const c = typeof e == "bigint" ? "n" : "";
    throw new wa({
      max: o ? `${o}${c}` : void 0,
      min: `${i}${c}`,
      signed: n,
      size: r,
      value: `${e}${c}`
    });
  }
  const a = `0x${(n && s < 0 ? (1n << BigInt(r * 8)) + BigInt(s) : s).toString(16)}`;
  return r ? at(a, { size: r }) : a;
}
const $a = /* @__PURE__ */ new TextEncoder();
function wt(e, t = {}) {
  const n = $a.encode(e);
  return D(n, t);
}
const Aa = /* @__PURE__ */ new TextEncoder();
function ct(e, t = {}) {
  return typeof e == "number" || typeof e == "bigint" ? Sa(e, t) : typeof e == "boolean" ? Ia(e, t) : ce(e) ? ue(e, t) : ze(e, t);
}
function Ia(e, t = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(e), typeof t.size == "number" ? (fe(n, { size: t.size }), at(n, { size: t.size })) : n;
}
const pe = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Yr(e) {
  if (e >= pe.zero && e <= pe.nine)
    return e - pe.zero;
  if (e >= pe.A && e <= pe.F)
    return e - (pe.A - 10);
  if (e >= pe.a && e <= pe.f)
    return e - (pe.a - 10);
}
function ue(e, t = {}) {
  let n = e;
  t.size && (fe(n, { size: t.size }), n = at(n, { dir: "right", size: t.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const s = r.length / 2, o = new Uint8Array(s);
  for (let i = 0, a = 0; i < s; i++) {
    const c = Yr(r.charCodeAt(a++)), u = Yr(r.charCodeAt(a++));
    if (c === void 0 || u === void 0)
      throw new x(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    o[i] = c * 16 + u;
  }
  return o;
}
function Sa(e, t) {
  const n = C(e, t);
  return ue(n);
}
function ze(e, t = {}) {
  const n = Aa.encode(e);
  return typeof t.size == "number" ? (fe(n, { size: t.size }), at(n, { dir: "right", size: t.size })) : n;
}
function nn(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function Ta(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function _t(e, ...t) {
  if (!Ta(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function ka(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  nn(e.outputLen), nn(e.blockLen);
}
function tt(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Js(e, t) {
  _t(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Yt = /* @__PURE__ */ BigInt(2 ** 32 - 1), Jr = /* @__PURE__ */ BigInt(32);
function Na(e, t = !1) {
  return t ? { h: Number(e & Yt), l: Number(e >> Jr & Yt) } : { h: Number(e >> Jr & Yt) | 0, l: Number(e & Yt) | 0 };
}
function Ca(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let s = 0; s < e.length; s++) {
    const { h: o, l: i } = Na(e[s], t);
    [n[s], r[s]] = [o, i];
  }
  return [n, r];
}
const Fa = (e, t, n) => e << n | t >>> 32 - n, Oa = (e, t, n) => t << n | e >>> 32 - n, Ra = (e, t, n) => t << n - 32 | e >>> 64 - n, Ma = (e, t, n) => e << n - 32 | t >>> 64 - n, Ye = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const za = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), Bn = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), de = (e, t) => e << 32 - t | e >>> t, Xr = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, La = (e) => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
function Qr(e) {
  for (let t = 0; t < e.length; t++)
    e[t] = La(e[t]);
}
function ja(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function an(e) {
  return typeof e == "string" && (e = ja(e)), _t(e), e;
}
function _a(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    _t(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
class ar {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Xs(e) {
  const t = (r) => e().update(an(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Ua(e = 32) {
  if (Ye && typeof Ye.getRandomValues == "function")
    return Ye.getRandomValues(new Uint8Array(e));
  if (Ye && typeof Ye.randomBytes == "function")
    return Ye.randomBytes(e);
  throw new Error("crypto.getRandomValues must be defined");
}
const Qs = [], eo = [], to = [], Ga = /* @__PURE__ */ BigInt(0), bt = /* @__PURE__ */ BigInt(1), Da = /* @__PURE__ */ BigInt(2), Ha = /* @__PURE__ */ BigInt(7), qa = /* @__PURE__ */ BigInt(256), Va = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = bt, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Qs.push(2 * (5 * r + n)), eo.push((e + 1) * (e + 2) / 2 % 64);
  let s = Ga;
  for (let o = 0; o < 7; o++)
    t = (t << bt ^ (t >> Ha) * Va) % qa, t & Da && (s ^= bt << (bt << /* @__PURE__ */ BigInt(o)) - bt);
  to.push(s);
}
const [Za, Wa] = /* @__PURE__ */ Ca(to, !0), es = (e, t, n) => n > 32 ? Ra(e, t, n) : Fa(e, t, n), ts = (e, t, n) => n > 32 ? Ma(e, t, n) : Oa(e, t, n);
function Ka(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let i = 0; i < 10; i++)
      n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
    for (let i = 0; i < 10; i += 2) {
      const a = (i + 8) % 10, c = (i + 2) % 10, u = n[c], f = n[c + 1], d = es(u, f, 1) ^ n[a], l = ts(u, f, 1) ^ n[a + 1];
      for (let p = 0; p < 50; p += 10)
        e[i + p] ^= d, e[i + p + 1] ^= l;
    }
    let s = e[2], o = e[3];
    for (let i = 0; i < 24; i++) {
      const a = eo[i], c = es(s, o, a), u = ts(s, o, a), f = Qs[i];
      s = e[f], o = e[f + 1], e[f] = c, e[f + 1] = u;
    }
    for (let i = 0; i < 50; i += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = e[i + a];
      for (let a = 0; a < 10; a++)
        e[i + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    e[0] ^= Za[r], e[1] ^= Wa[r];
  }
  n.fill(0);
}
class cr extends ar {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, s = !1, o = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = s, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, nn(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = za(this.state);
  }
  keccak() {
    Xr || Qr(this.state32), Ka(this.state32, this.rounds), Xr || Qr(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    tt(this);
    const { blockLen: n, state: r } = this;
    t = an(t);
    const s = t.length;
    for (let o = 0; o < s; ) {
      const i = Math.min(n - this.pos, s - o);
      for (let a = 0; a < i; a++)
        r[this.pos++] ^= t[o++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: s } = this;
    t[r] ^= n, n & 128 && r === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    tt(this, !1), _t(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let s = 0, o = t.length; s < o; ) {
      this.posOut >= r && this.keccak();
      const i = Math.min(r - this.posOut, o - s);
      t.set(n.subarray(this.posOut, this.posOut + i), s), this.posOut += i, s += i;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return nn(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (Js(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: s, rounds: o, enableXOF: i } = this;
    return t || (t = new cr(n, r, s, i, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = r, t.outputLen = s, t.enableXOF = i, t.destroyed = this.destroyed, t;
  }
}
const Ya = (e, t, n) => Xs(() => new cr(t, e, n)), Ja = /* @__PURE__ */ Ya(1, 136, 256 / 8);
function q(e, t) {
  const n = t || "hex", r = Ja(ce(e, { strict: !1 }) ? ct(e) : e);
  return n === "bytes" ? r : R(r);
}
const Xa = (e) => q(ct(e));
function Qa(e) {
  return Xa(e);
}
function ec(e) {
  let t = !0, n = "", r = 0, s = "", o = !1;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (["(", ")", ","].includes(a) && (t = !0), a === "(" && r++, a === ")" && r--, !!t) {
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
        e[i - 1] !== "," && n !== "," && n !== ",(" && (n = "", t = !1);
        continue;
      }
      s += a, n += a;
    }
  }
  if (!o)
    throw new x("Unable to normalize signature.");
  return s;
}
const tc = (e) => {
  const t = typeof e == "string" ? e : Ei(e);
  return ec(t);
};
function no(e) {
  return Qa(tc(e));
}
const cn = no;
class X extends x {
  constructor({ address: t }) {
    super(`Address "${t}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ],
      name: "InvalidAddressError"
    });
  }
}
class ur extends Map {
  constructor(t) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = t;
  }
  get(t) {
    const n = super.get(t);
    return super.has(t) && n !== void 0 && (this.delete(t), super.set(t, n)), n;
  }
  set(t, n) {
    if (super.set(t, n), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
const $n = /* @__PURE__ */ new ur(8192);
function un(e, t) {
  if ($n.has(`${e}.${t}`))
    return $n.get(`${e}.${t}`);
  const n = e.substring(2).toLowerCase(), r = q(ze(n), "bytes"), s = n.split("");
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && s[i] && (s[i] = s[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && s[i + 1] && (s[i + 1] = s[i + 1].toUpperCase());
  const o = `0x${s.join("")}`;
  return $n.set(`${e}.${t}`, o), o;
}
function nc(e, t) {
  if (!K(e, { strict: !1 }))
    throw new X({ address: e });
  return un(e, t);
}
const rc = /^0x[a-fA-F0-9]{40}$/, An = /* @__PURE__ */ new ur(8192);
function K(e, t) {
  const { strict: n = !0 } = t ?? {}, r = `${e}.${n}`;
  if (An.has(r))
    return An.get(r);
  const s = rc.test(e) ? e.toLowerCase() === e ? !0 : n ? un(e) === e : !0 : !1;
  return An.set(r, s), s;
}
function he(e) {
  return typeof e[0] == "string" ? Ee(e) : sc(e);
}
function sc(e) {
  let t = 0;
  for (const s of e)
    t += s.length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e)
    n.set(s, r), r += s.length;
  return n;
}
function Ee(e) {
  return `0x${e.reduce((t, n) => t + n.replace("0x", ""), "")}`;
}
function xt(e, t, n, { strict: r } = {}) {
  return ce(e, { strict: !1 }) ? io(e, t, n, {
    strict: r
  }) : oo(e, t, n, {
    strict: r
  });
}
function ro(e, t) {
  if (typeof t == "number" && t > 0 && t > _(e) - 1)
    throw new Ws({
      offset: t,
      position: "start",
      size: _(e)
    });
}
function so(e, t, n) {
  if (typeof t == "number" && typeof n == "number" && _(e) !== n - t)
    throw new Ws({
      offset: n,
      position: "end",
      size: _(e)
    });
}
function oo(e, t, n, { strict: r } = {}) {
  ro(e, t);
  const s = e.slice(t, n);
  return r && so(s, t, n), s;
}
function io(e, t, n, { strict: r } = {}) {
  ro(e, t);
  const s = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
  return r && so(s, t, n), s;
}
function Ve(e, t) {
  if (e.length !== t.length)
    throw new ca({
      expectedLength: e.length,
      givenLength: t.length
    });
  const n = oc({
    params: e,
    values: t
  }), r = dr(n);
  return r.length === 0 ? "0x" : r;
}
function oc({ params: e, values: t }) {
  const n = [];
  for (let r = 0; r < e.length; r++)
    n.push(fr({ param: e[r], value: t[r] }));
  return n;
}
function fr({ param: e, value: t }) {
  const n = lr(e.type);
  if (n) {
    const [r, s] = n;
    return ac(t, { length: r, param: { ...e, type: s } });
  }
  if (e.type === "tuple")
    return lc(t, {
      param: e
    });
  if (e.type === "address")
    return ic(t);
  if (e.type === "bool")
    return uc(t);
  if (e.type.startsWith("uint") || e.type.startsWith("int")) {
    const r = e.type.startsWith("int");
    return fc(t, { signed: r });
  }
  if (e.type.startsWith("bytes"))
    return cc(t, { param: e });
  if (e.type === "string")
    return dc(t);
  throw new ha(e.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function dr(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? t += 32 : t += _(a);
  }
  const n = [], r = [];
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const { dynamic: i, encoded: a } = e[o];
    i ? (n.push(C(t + s, { size: 32 })), r.push(a), s += _(a)) : n.push(a);
  }
  return he([...n, ...r]);
}
function ic(e) {
  if (!K(e))
    throw new X({ address: e });
  return { dynamic: !1, encoded: Ie(e.toLowerCase()) };
}
function ac(e, { length: t, param: n }) {
  const r = t === null;
  if (!Array.isArray(e))
    throw new ba(e);
  if (!r && e.length !== t)
    throw new ia({
      expectedLength: t,
      givenLength: e.length,
      type: `${n.type}[${t}]`
    });
  let s = !1;
  const o = [];
  for (let i = 0; i < e.length; i++) {
    const a = fr({ param: n, value: e[i] });
    a.dynamic && (s = !0), o.push(a);
  }
  if (r || s) {
    const i = dr(o);
    if (r) {
      const a = C(o.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: o.length > 0 ? he([a, i]) : a
      };
    }
    if (s)
      return { dynamic: !0, encoded: i };
  }
  return {
    dynamic: !1,
    encoded: he(o.map(({ encoded: i }) => i))
  };
}
function cc(e, { param: t }) {
  const [, n] = t.type.split("bytes"), r = _(e);
  if (!n) {
    let s = e;
    return r % 32 !== 0 && (s = Ie(s, {
      dir: "right",
      size: Math.ceil((e.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: he([Ie(C(r, { size: 32 })), s])
    };
  }
  if (r !== Number.parseInt(n))
    throw new aa({
      expectedSize: Number.parseInt(n),
      value: e
    });
  return { dynamic: !1, encoded: Ie(e, { dir: "right" }) };
}
function uc(e) {
  if (typeof e != "boolean")
    throw new x(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: Ie(Ys(e)) };
}
function fc(e, { signed: t }) {
  return {
    dynamic: !1,
    encoded: C(e, {
      size: 32,
      signed: t
    })
  };
}
function dc(e) {
  const t = wt(e), n = Math.ceil(_(t) / 32), r = [];
  for (let s = 0; s < n; s++)
    r.push(Ie(xt(t, s * 32, (s + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: he([
      Ie(C(_(t), { size: 32 })),
      ...r
    ])
  };
}
function lc(e, { param: t }) {
  let n = !1;
  const r = [];
  for (let s = 0; s < t.components.length; s++) {
    const o = t.components[s], i = Array.isArray(e) ? s : o.name, a = fr({
      param: o,
      value: e[i]
    });
    r.push(a), a.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? dr(r) : he(r.map(({ encoded: s }) => s))
  };
}
function lr(e) {
  const t = e.match(/^(.*)\[(\d+)?\]$/);
  return t ? (
    // Return `null` if the array is dynamic.
    [t[2] ? Number(t[2]) : null, t[1]]
  ) : void 0;
}
const hr = (e) => xt(no(e), 0, 4);
function Ut(e) {
  const { abi: t, args: n = [], name: r } = e, s = ce(r, { strict: !1 }), o = t.filter((a) => s ? a.type === "function" ? hr(a) === r : a.type === "event" ? cn(a) === r : !1 : "name" in a && a.name === r);
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
      return d ? Ln(u, d) : !1;
    })) {
      if (i && "inputs" in i && i.inputs) {
        const u = ao(a.inputs, i.inputs, n);
        if (u)
          throw new da({
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
function Ln(e, t) {
  const n = typeof e, r = t.type;
  switch (r) {
    case "address":
      return K(e, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in t ? Object.values(t.components).every((s, o) => Ln(Object.values(e)[o], s)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every((s) => Ln(s, {
        ...t,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function ao(e, t, n) {
  for (const r in e) {
    const s = e[r], o = t[r];
    if (s.type === "tuple" && o.type === "tuple" && "components" in s && "components" in o)
      return ao(s.components, o.components, n[r]);
    const i = [s.type, o.type];
    if (i.includes("address") && i.includes("bytes20") ? !0 : i.includes("address") && i.includes("string") ? K(n[r], { strict: !1 }) : i.includes("address") && i.includes("bytes") ? K(n[r], { strict: !1 }) : !1)
      return i;
  }
}
const ns = "/docs/contract/encodeEventTopics";
function Gt(e) {
  var c;
  const { abi: t, eventName: n, args: r } = e;
  let s = t[0];
  if (n) {
    const u = Ut({ abi: t, name: n });
    if (!u)
      throw new Wr(n, { docsPath: ns });
    s = u;
  }
  if (s.type !== "event")
    throw new Wr(void 0, { docsPath: ns });
  const o = xe(s), i = cn(o);
  let a = [];
  if (r && "inputs" in s) {
    const u = (c = s.inputs) == null ? void 0 : c.filter((d) => "indexed" in d && d.indexed), f = Array.isArray(r) ? r : Object.values(r).length > 0 ? (u == null ? void 0 : u.map((d) => r[d.name])) ?? [] : [];
    f.length > 0 && (a = (u == null ? void 0 : u.map((d, l) => Array.isArray(f[l]) ? f[l].map((p, m) => rs({ param: d, value: f[l][m] })) : f[l] ? rs({ param: d, value: f[l] }) : null)) ?? []);
  }
  return [i, ...a];
}
function rs({ param: e, value: t }) {
  if (e.type === "string" || e.type === "bytes")
    return q(ct(t));
  if (e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/))
    throw new ma(e.type);
  return Ve([e], [t]);
}
function fn(e, { method: t }) {
  var r, s;
  const n = {};
  return e.transport.type === "fallback" && ((s = (r = e.transport).onResponse) == null || s.call(r, ({ method: o, response: i, status: a, transport: c }) => {
    a === "success" && t === o && (n[i] = c.request);
  })), (o) => n[o] || e.request;
}
async function co(e, t) {
  const { address: n, abi: r, args: s, eventName: o, fromBlock: i, strict: a, toBlock: c } = t, u = fn(e, {
    method: "eth_newFilter"
  }), f = o ? Gt({
    abi: r,
    args: s,
    eventName: o
  }) : void 0, d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: n,
        fromBlock: typeof i == "bigint" ? C(i) : i,
        toBlock: typeof c == "bigint" ? C(c) : c,
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
function Ce(e) {
  return typeof e == "string" ? { address: e, type: "json-rpc" } : e;
}
const ss = "/docs/contract/encodeFunctionData";
function hc(e) {
  const { abi: t, args: n, functionName: r } = e;
  let s = t[0];
  if (r) {
    const o = Ut({
      abi: t,
      args: n,
      name: r
    });
    if (!o)
      throw new tn(r, { docsPath: ss });
    s = o;
  }
  if (s.type !== "function")
    throw new tn(void 0, { docsPath: ss });
  return {
    abi: [s],
    functionName: hr(xe(s))
  };
}
function Fe(e) {
  const { args: t } = e, { abi: n, functionName: r } = (() => {
    var a;
    return e.abi.length === 1 && ((a = e.functionName) != null && a.startsWith("0x")) ? e : hc(e);
  })(), s = n[0], o = r, i = "inputs" in s && s.inputs ? Ve(s.inputs, t ?? []) : void 0;
  return Ee([o, i ?? "0x"]);
}
const uo = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, pc = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, bc = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
class os extends x {
  constructor({ offset: t }) {
    super(`Offset \`${t}\` cannot be negative.`, {
      name: "NegativeOffsetError"
    });
  }
}
class fo extends x {
  constructor({ length: t, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, { name: "PositionOutOfBoundsError" });
  }
}
class yc extends x {
  constructor({ count: t, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, { name: "RecursiveReadLimitExceededError" });
  }
}
const mc = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new yc({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(e) {
    if (e < 0 || e > this.bytes.length - 1)
      throw new fo({
        length: this.bytes.length,
        position: e
      });
  },
  decrementPosition(e) {
    if (e < 0)
      throw new os({ offset: e });
    const t = this.position - e;
    this.assertPosition(t), this.position = t;
  },
  getReadCount(e) {
    return this.positionReadCount.get(e || this.position) || 0;
  },
  incrementPosition(e) {
    if (e < 0)
      throw new os({ offset: e });
    const t = this.position + e;
    this.assertPosition(t), this.position = t;
  },
  inspectByte(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectBytes(e, t) {
    const n = t ?? this.position;
    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
  },
  inspectUint8(e) {
    const t = e ?? this.position;
    return this.assertPosition(t), this.bytes[t];
  },
  inspectUint16(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 1), this.dataView.getUint16(t);
  },
  inspectUint24(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2);
  },
  inspectUint32(e) {
    const t = e ?? this.position;
    return this.assertPosition(t + 3), this.dataView.getUint32(t);
  },
  pushByte(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushBytes(e) {
    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length;
  },
  pushUint8(e) {
    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++;
  },
  pushUint16(e) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2;
  },
  pushUint24(e) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, e & 255), this.position += 3;
  },
  pushUint32(e) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectByte();
    return this.position++, e;
  },
  readBytes(e, t) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(e);
    return this.position += t ?? e, n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint8();
    return this.position += 1, e;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint16();
    return this.position += 2, e;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint24();
    return this.position += 3, e;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const e = this.inspectUint32();
    return this.position += 4, e;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(e) {
    const t = this.position;
    return this.assertPosition(e), this.position = e, () => this.position = t;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const e = this.getReadCount();
    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++;
  }
};
function pr(e, { recursiveReadLimit: t = 8192 } = {}) {
  const n = Object.create(mc);
  return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = t, n;
}
function gc(e, t = {}) {
  typeof t.size < "u" && fe(e, { size: t.size });
  const n = D(e, t);
  return Se(n, t);
}
function wc(e, t = {}) {
  let n = e;
  if (typeof t.size < "u" && (fe(n, { size: t.size }), n = ie(n)), n.length > 1 || n[0] > 1)
    throw new xa(n);
  return !!n[0];
}
function ge(e, t = {}) {
  typeof t.size < "u" && fe(e, { size: t.size });
  const n = D(e, t);
  return le(n, t);
}
function xc(e, t = {}) {
  let n = e;
  return typeof t.size < "u" && (fe(n, { size: t.size }), n = ie(n, { dir: "right" })), new TextDecoder().decode(n);
}
function dn(e, t) {
  const n = typeof t == "string" ? ue(t) : t, r = pr(n);
  if (_(n) === 0 && e.length > 0)
    throw new sn();
  if (_(t) && _(t) < 32)
    throw new qs({
      data: typeof t == "string" ? t : D(t),
      params: e,
      size: _(t)
    });
  let s = 0;
  const o = [];
  for (let i = 0; i < e.length; ++i) {
    const a = e[i];
    r.setPosition(s);
    const [c, u] = Qe(r, a, {
      staticPosition: 0
    });
    s += u, o.push(c);
  }
  return o;
}
function Qe(e, t, { staticPosition: n }) {
  const r = lr(t.type);
  if (r) {
    const [s, o] = r;
    return Ec(e, { ...t, type: o }, { length: s, staticPosition: n });
  }
  if (t.type === "tuple")
    return Ac(e, t, { staticPosition: n });
  if (t.type === "address")
    return vc(e);
  if (t.type === "bool")
    return Pc(e);
  if (t.type.startsWith("bytes"))
    return Bc(e, t, { staticPosition: n });
  if (t.type.startsWith("uint") || t.type.startsWith("int"))
    return $c(e, t);
  if (t.type === "string")
    return Ic(e, { staticPosition: n });
  throw new pa(t.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
const is = 32, jn = 32;
function vc(e) {
  const t = e.readBytes(32);
  return [un(D(oo(t, -20))), 32];
}
function Ec(e, t, { length: n, staticPosition: r }) {
  if (!n) {
    const i = ge(e.readBytes(jn)), a = r + i, c = a + is;
    e.setPosition(a);
    const u = ge(e.readBytes(is)), f = vt(t);
    let d = 0;
    const l = [];
    for (let p = 0; p < u; ++p) {
      e.setPosition(c + (f ? p * 32 : d));
      const [m, b] = Qe(e, t, {
        staticPosition: c
      });
      d += b, l.push(m);
    }
    return e.setPosition(r + 32), [l, 32];
  }
  if (vt(t)) {
    const i = ge(e.readBytes(jn)), a = r + i, c = [];
    for (let u = 0; u < n; ++u) {
      e.setPosition(a + u * 32);
      const [f] = Qe(e, t, {
        staticPosition: a
      });
      c.push(f);
    }
    return e.setPosition(r + 32), [c, 32];
  }
  let s = 0;
  const o = [];
  for (let i = 0; i < n; ++i) {
    const [a, c] = Qe(e, t, {
      staticPosition: r + s
    });
    s += c, o.push(a);
  }
  return [o, s];
}
function Pc(e) {
  return [wc(e.readBytes(32), { size: 32 }), 32];
}
function Bc(e, t, { staticPosition: n }) {
  const [r, s] = t.type.split("bytes");
  if (!s) {
    const i = ge(e.readBytes(32));
    e.setPosition(n + i);
    const a = ge(e.readBytes(32));
    if (a === 0)
      return e.setPosition(n + 32), ["0x", 32];
    const c = e.readBytes(a);
    return e.setPosition(n + 32), [D(c), 32];
  }
  return [D(e.readBytes(Number.parseInt(s), 32)), 32];
}
function $c(e, t) {
  const n = t.type.startsWith("int"), r = Number.parseInt(t.type.split("int")[1] || "256"), s = e.readBytes(32);
  return [
    r > 48 ? gc(s, { signed: n }) : ge(s, { signed: n }),
    32
  ];
}
function Ac(e, t, { staticPosition: n }) {
  const r = t.components.length === 0 || t.components.some(({ name: i }) => !i), s = r ? [] : {};
  let o = 0;
  if (vt(t)) {
    const i = ge(e.readBytes(jn)), a = n + i;
    for (let c = 0; c < t.components.length; ++c) {
      const u = t.components[c];
      e.setPosition(a + o);
      const [f, d] = Qe(e, u, {
        staticPosition: a
      });
      o += d, s[r ? c : u == null ? void 0 : u.name] = f;
    }
    return e.setPosition(n + 32), [s, 32];
  }
  for (let i = 0; i < t.components.length; ++i) {
    const a = t.components[i], [c, u] = Qe(e, a, {
      staticPosition: n
    });
    s[r ? i : a == null ? void 0 : a.name] = c, o += u;
  }
  return [s, o];
}
function Ic(e, { staticPosition: t }) {
  const n = ge(e.readBytes(32)), r = t + n;
  e.setPosition(r);
  const s = ge(e.readBytes(32));
  if (s === 0)
    return e.setPosition(t + 32), ["", 32];
  const o = e.readBytes(s, 32), i = xc(ie(o));
  return e.setPosition(t + 32), [i, 32];
}
function vt(e) {
  var r;
  const { type: t } = e;
  if (t === "string" || t === "bytes" || t.endsWith("[]"))
    return !0;
  if (t === "tuple")
    return (r = e.components) == null ? void 0 : r.some(vt);
  const n = lr(e.type);
  return !!(n && vt({ ...e, type: n[1] }));
}
function lo(e) {
  const { abi: t, data: n } = e, r = xt(n, 0, 4);
  if (r === "0x")
    throw new sn();
  const o = [...t || [], pc, bc].find((i) => i.type === "error" && r === hr(xe(i)));
  if (!o)
    throw new Vs(r, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: o,
    args: "inputs" in o && o.inputs && o.inputs.length > 0 ? dn(o.inputs, xt(n, 4)) : void 0,
    errorName: o.name
  };
}
const Z = (e, t, n) => JSON.stringify(e, (r, s) => typeof s == "bigint" ? s.toString() : s, n);
function ho({ abiItem: e, args: t, includeFunctionName: n = !0, includeName: r = !1 }) {
  if ("name" in e && "inputs" in e && e.inputs)
    return `${n ? e.name : ""}(${e.inputs.map((s, o) => `${r && s.name ? `${s.name}: ` : ""}${typeof t[o] == "object" ? Z(t[o]) : t[o]}`).join(", ")})`;
}
const po = {
  gwei: 9,
  wei: 18
}, Sc = {
  ether: -9,
  wei: 9
};
function bo(e, t) {
  let n = e.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), n = n.padStart(t, "0");
  let [s, o] = [
    n.slice(0, n.length - t),
    n.slice(n.length - t)
  ];
  return o = o.replace(/(0+)$/, ""), `${r ? "-" : ""}${s || "0"}${o ? `.${o}` : ""}`;
}
function yo(e, t = "wei") {
  return bo(e, po[t]);
}
function ae(e, t = "wei") {
  return bo(e, Sc[t]);
}
class Tc extends x {
  constructor({ address: t }) {
    super(`State for account "${t}" is set multiple times.`, {
      name: "AccountStateConflictError"
    });
  }
}
class kc extends x {
  constructor() {
    super("state and stateDiff are set on the same account.", {
      name: "StateAssignmentConflictError"
    });
  }
}
function as(e) {
  return e.reduce((t, { slot: n, value: r }) => `${t}        ${n}: ${r}
`, "");
}
function Nc(e) {
  return e.reduce((t, { address: n, ...r }) => {
    let s = `${t}    ${n}:
`;
    return r.nonce && (s += `      nonce: ${r.nonce}
`), r.balance && (s += `      balance: ${r.balance}
`), r.code && (s += `      code: ${r.code}
`), r.state && (s += `      state:
`, s += as(r.state)), r.stateDiff && (s += `      stateDiff:
`, s += as(r.stateDiff)), s;
  }, `  State Override:
`).slice(0, -1);
}
function ln(e) {
  const t = Object.entries(e).map(([r, s]) => s === void 0 || s === !1 ? null : [r, s]).filter(Boolean), n = t.reduce((r, [s]) => Math.max(r, s.length), 0);
  return t.map(([r, s]) => `  ${`${r}:`.padEnd(n + 1)}  ${s}`).join(`
`);
}
class Cc extends x {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`), { name: "FeeConflictError" });
  }
}
class Fc extends x {
  constructor({ v: t }) {
    super(`Invalid \`v\` value "${t}". Expected 27 or 28.`, {
      name: "InvalidLegacyVError"
    });
  }
}
class Oc extends x {
  constructor({ transaction: t }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        ln(t),
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
class Rc extends x {
  constructor({ storageKey: t }) {
    super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
  }
}
class mo extends x {
  constructor({ blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }) {
    let i = "Transaction";
    r && o !== void 0 && (i = `Transaction at block time "${r}" at index "${o}"`), t && o !== void 0 && (i = `Transaction at block hash "${t}" at index "${o}"`), n && o !== void 0 && (i = `Transaction at block number "${n}" at index "${o}"`), s && (i = `Transaction with hash "${s}"`), super(`${i} could not be found.`, {
      name: "TransactionNotFoundError"
    });
  }
}
class go extends x {
  constructor({ hash: t }) {
    super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
      name: "TransactionReceiptNotFoundError"
    });
  }
}
class Mc extends x {
  constructor({ hash: t }) {
    super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, { name: "WaitForTransactionReceiptTimeoutError" });
  }
}
const zc = (e) => e, Dt = (e) => e;
class wo extends x {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: d, value: l, stateOverride: p }) {
    var h;
    const m = n ? Ce(n) : void 0;
    let b = ln({
      from: m == null ? void 0 : m.address,
      to: d,
      value: typeof l < "u" && `${yo(l)} ${((h = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : h.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${ae(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ae(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ae(u)} gwei`,
      nonce: f
    });
    p && (b += `
${Nc(p)}`), super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Raw Call Arguments:",
        b
      ].filter(Boolean),
      name: "CallExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class Lc extends x {
  constructor(t, { abi: n, args: r, contractAddress: s, docsPath: o, functionName: i, sender: a }) {
    const c = Ut({ abi: n, args: r, name: i }), u = c ? ho({
      abiItem: c,
      args: r,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, f = c ? xe(c, { includeName: !0 }) : void 0, d = ln({
      address: s && zc(s),
      function: f,
      args: u && u !== "()" && `${[...Array((i == null ? void 0 : i.length) ?? 0).keys()].map(() => " ").join("")}${u}`,
      sender: a
    });
    super(t.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
      cause: t,
      docsPath: o,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
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
    }), this.abi = n, this.args = r, this.cause = t, this.contractAddress = s, this.functionName = i, this.sender = a;
  }
}
class _n extends x {
  constructor({ abi: t, data: n, functionName: r, message: s }) {
    let o, i, a, c;
    if (n && n !== "0x")
      try {
        i = lo({ abi: t, data: n });
        const { abiItem: f, errorName: d, args: l } = i;
        if (d === "Error")
          c = l[0];
        else if (d === "Panic") {
          const [p] = l;
          c = uo[p];
        } else {
          const p = f ? xe(f, { includeName: !0 }) : void 0, m = f && l ? ho({
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
    o instanceof Vs && (u = o.signature, a = [
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
class jc extends x {
  constructor({ functionName: t }) {
    super(`The contract function "${t}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${t}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ],
      name: "ContractFunctionZeroDataError"
    });
  }
}
class _c extends x {
  constructor({ factory: t }) {
    super(`Deployment for counterfactual contract call failed${t ? ` for factory "${t}".` : ""}`, {
      metaMessages: [
        "Please ensure:",
        "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
        "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
      ],
      name: "CounterfactualDeploymentFailedError"
    });
  }
}
class br extends x {
  constructor({ data: t, message: n }) {
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
    }), this.data = t;
  }
}
class Le extends x {
  constructor({ body: t, cause: n, details: r, headers: s, status: o, url: i }) {
    super("HTTP request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        o && `Status: ${o}`,
        `URL: ${Dt(i)}`,
        t && `Request body: ${Z(t)}`
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
    }), this.body = t, this.headers = s, this.status = o, this.url = i;
  }
}
class xo extends x {
  constructor({ body: t, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${Dt(r)}`, `Request body: ${Z(t)}`],
      name: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = n.code;
  }
}
class cs extends x {
  constructor({ body: t, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${Dt(n)}`, `Request body: ${Z(t)}`],
      name: "TimeoutError"
    });
  }
}
const Uc = -1;
class J extends x {
  constructor(t, { code: n, docsPath: r, metaMessages: s, name: o, shortMessage: i }) {
    super(i, {
      cause: t,
      docsPath: r,
      metaMessages: s || (t == null ? void 0 : t.metaMessages),
      name: o || "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = o || t.name, this.code = t instanceof xo ? t.code : n ?? Uc;
  }
}
class ut extends J {
  constructor(t, n) {
    super(t, n), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = n.data;
  }
}
class Et extends J {
  constructor(t) {
    super(t, {
      code: Et.code,
      name: "ParseRpcError",
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    });
  }
}
Object.defineProperty(Et, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class Pt extends J {
  constructor(t) {
    super(t, {
      code: Pt.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object."
    });
  }
}
Object.defineProperty(Pt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class Bt extends J {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: Bt.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${n ? ` "${n}"` : ""} does not exist / is not available.`
    });
  }
}
Object.defineProperty(Bt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class $t extends J {
  constructor(t) {
    super(t, {
      code: $t.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty($t, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class Ue extends J {
  constructor(t) {
    super(t, {
      code: Ue.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received."
    });
  }
}
Object.defineProperty(Ue, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class Ge extends J {
  constructor(t) {
    super(t, {
      code: Ge.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(Ge, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class At extends J {
  constructor(t) {
    super(t, {
      code: At.code,
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
Object.defineProperty(At, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class It extends J {
  constructor(t) {
    super(t, {
      code: It.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available."
    });
  }
}
Object.defineProperty(It, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class St extends J {
  constructor(t) {
    super(t, {
      code: St.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed."
    });
  }
}
Object.defineProperty(St, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class Tt extends J {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: Tt.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${n ? ` "${n}"` : ""} is not implemented.`
    });
  }
}
Object.defineProperty(Tt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class nt extends J {
  constructor(t) {
    super(t, {
      code: nt.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit."
    });
  }
}
Object.defineProperty(nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class kt extends J {
  constructor(t) {
    super(t, {
      code: kt.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported."
    });
  }
}
Object.defineProperty(kt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class et extends ut {
  constructor(t) {
    super(t, {
      code: et.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request."
    });
  }
}
Object.defineProperty(et, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class Nt extends ut {
  constructor(t) {
    super(t, {
      code: Nt.code,
      name: "UnauthorizedProviderError",
      shortMessage: "The requested method and/or account has not been authorized by the user."
    });
  }
}
Object.defineProperty(Nt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class Ct extends ut {
  constructor(t, { method: n } = {}) {
    super(t, {
      code: Ct.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${n ? ` " ${n}"` : ""}.`
    });
  }
}
Object.defineProperty(Ct, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class Ft extends ut {
  constructor(t) {
    super(t, {
      code: Ft.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains."
    });
  }
}
Object.defineProperty(Ft, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Ot extends ut {
  constructor(t) {
    super(t, {
      code: Ot.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain."
    });
  }
}
Object.defineProperty(Ot, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class Rt extends ut {
  constructor(t) {
    super(t, {
      code: Rt.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain."
    });
  }
}
Object.defineProperty(Rt, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class Gc extends J {
  constructor(t) {
    super(t, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred."
    });
  }
}
const Dc = 3;
function Mt(e, { abi: t, address: n, args: r, docsPath: s, functionName: o, sender: i }) {
  const { code: a, data: c, message: u, shortMessage: f } = e instanceof br ? e : e instanceof x ? e.walk((l) => "data" in l) || e.walk() : {}, d = e instanceof sn ? new jc({ functionName: o }) : [Dc, Ue.code].includes(a) && (c || u || f) ? new _n({
    abi: t,
    data: typeof c == "object" ? c.data : c,
    functionName: o,
    message: f ?? u
  }) : e;
  return new Lc(d, {
    abi: t,
    args: r,
    contractAddress: n,
    docsPath: s,
    functionName: o,
    sender: i
  });
}
function Hc(e) {
  const t = q(`0x${e.substring(4)}`).substring(26);
  return un(`0x${t}`);
}
async function qc({ hash: e, signature: t }) {
  const n = ce(e) ? e : R(e), { secp256k1: r } = await Promise.resolve().then(() => Gd);
  return `0x${(() => {
    if (typeof t == "object" && "r" in t && "s" in t) {
      const { r: u, s: f, v: d, yParity: l } = t, p = Number(l ?? d), m = us(p);
      return new r.Signature(Se(u), Se(f)).addRecoveryBit(m);
    }
    const i = ce(t) ? t : R(t), a = le(`0x${i.slice(130)}`), c = us(a);
    return r.Signature.fromCompact(i.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(n.substring(2)).toHex(!1)}`;
}
function us(e) {
  if (e === 0 || e === 1)
    return e;
  if (e === 27)
    return 0;
  if (e === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function vo({ hash: e, signature: t }) {
  return Hc(await qc({ hash: e, signature: t }));
}
function De(e, t = "hex") {
  const n = Eo(e), r = pr(new Uint8Array(n.length));
  return n.encode(r), t === "hex" ? D(r.bytes) : r.bytes;
}
function Eo(e) {
  return Array.isArray(e) ? Vc(e.map((t) => Eo(t))) : Zc(e);
}
function Vc(e) {
  const t = e.reduce((s, o) => s + o.length, 0), n = Po(t);
  return {
    length: t <= 55 ? 1 + t : 1 + n + t,
    encode(s) {
      t <= 55 ? s.pushByte(192 + t) : (s.pushByte(247 + n), n === 1 ? s.pushUint8(t) : n === 2 ? s.pushUint16(t) : n === 3 ? s.pushUint24(t) : s.pushUint32(t));
      for (const { encode: o } of e)
        o(s);
    }
  };
}
function Zc(e) {
  const t = typeof e == "string" ? ue(e) : e, n = Po(t.length);
  return {
    length: t.length === 1 && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + n + t.length,
    encode(s) {
      t.length === 1 && t[0] < 128 ? s.pushBytes(t) : t.length <= 55 ? (s.pushByte(128 + t.length), s.pushBytes(t)) : (s.pushByte(183 + n), n === 1 ? s.pushUint8(t.length) : n === 2 ? s.pushUint16(t.length) : n === 3 ? s.pushUint24(t.length) : s.pushUint32(t.length), s.pushBytes(t));
    }
  };
}
function Po(e) {
  if (e < 2 ** 8)
    return 1;
  if (e < 2 ** 16)
    return 2;
  if (e < 2 ** 24)
    return 3;
  if (e < 2 ** 32)
    return 4;
  throw new x("Length is too large.");
}
function Wc(e) {
  const { chainId: t, contractAddress: n, nonce: r, to: s } = e, o = q(Ee([
    "0x05",
    De([
      t ? C(t) : "0x",
      n,
      r ? C(r) : "0x"
    ])
  ]));
  return s === "bytes" ? ue(o) : o;
}
async function Kc(e) {
  const { authorization: t, signature: n } = e;
  return vo({
    hash: Wc(t),
    signature: n ?? t
  });
}
class Yc extends x {
  constructor(t, { account: n, docsPath: r, chain: s, data: o, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: d, value: l }) {
    var m;
    const p = ln({
      from: n == null ? void 0 : n.address,
      to: d,
      value: typeof l < "u" && `${yo(l)} ${((m = s == null ? void 0 : s.nativeCurrency) == null ? void 0 : m.symbol) || "ETH"}`,
      data: o,
      gas: i,
      gasPrice: typeof a < "u" && `${ae(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ae(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ae(u)} gwei`,
      nonce: f
    });
    super(t.shortMessage, {
      cause: t,
      docsPath: r,
      metaMessages: [
        ...t.metaMessages ? [...t.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        p
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = t;
  }
}
class Je extends x {
  constructor({ cause: t, message: n } = {}) {
    var s;
    const r = (s = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : s.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: t,
      name: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(Je, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(Je, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class He extends x {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${ae(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: t,
      name: "FeeCapTooHighError"
    });
  }
}
Object.defineProperty(He, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class Un extends x {
  constructor({ cause: t, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${ae(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: t,
      name: "FeeCapTooLowError"
    });
  }
}
Object.defineProperty(Un, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class Gn extends x {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: t, name: "NonceTooHighError" });
  }
}
Object.defineProperty(Gn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class Dn extends x {
  constructor({ cause: t, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: t, name: "NonceTooLowError" });
  }
}
Object.defineProperty(Dn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class Hn extends x {
  constructor({ cause: t, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: t, name: "NonceMaxValueError" });
  }
}
Object.defineProperty(Hn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class qn extends x {
  constructor({ cause: t } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: t,
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
Object.defineProperty(qn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/
});
class Vn extends x {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: t,
      name: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(Vn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class Zn extends x {
  constructor({ cause: t, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: t,
      name: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty(Zn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class Wn extends x {
  constructor({ cause: t }) {
    super("The transaction type is not supported for this chain.", {
      cause: t,
      name: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(Wn, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class zt extends x {
  constructor({ cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${ae(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${ae(r)} gwei` : ""}).`
    ].join(`
`), {
      cause: t,
      name: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(zt, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class yr extends x {
  constructor({ cause: t }) {
    super(`An error occurred while executing: ${t == null ? void 0 : t.shortMessage}`, {
      cause: t,
      name: "UnknownNodeError"
    });
  }
}
function Bo(e, t) {
  const n = (e.details || "").toLowerCase(), r = e instanceof x ? e.walk((s) => (s == null ? void 0 : s.code) === Je.code) : e;
  return r instanceof x ? new Je({
    cause: e,
    message: r.details
  }) : Je.nodeMessage.test(n) ? new Je({
    cause: e,
    message: e.details
  }) : He.nodeMessage.test(n) ? new He({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : Un.nodeMessage.test(n) ? new Un({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas
  }) : Gn.nodeMessage.test(n) ? new Gn({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Dn.nodeMessage.test(n) ? new Dn({ cause: e, nonce: t == null ? void 0 : t.nonce }) : Hn.nodeMessage.test(n) ? new Hn({ cause: e, nonce: t == null ? void 0 : t.nonce }) : qn.nodeMessage.test(n) ? new qn({ cause: e }) : Vn.nodeMessage.test(n) ? new Vn({ cause: e, gas: t == null ? void 0 : t.gas }) : Zn.nodeMessage.test(n) ? new Zn({ cause: e, gas: t == null ? void 0 : t.gas }) : Wn.nodeMessage.test(n) ? new Wn({ cause: e }) : zt.nodeMessage.test(n) ? new zt({
    cause: e,
    maxFeePerGas: t == null ? void 0 : t.maxFeePerGas,
    maxPriorityFeePerGas: t == null ? void 0 : t.maxPriorityFeePerGas
  }) : new yr({
    cause: e
  });
}
function Jc(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = Bo(e, n);
    return s instanceof yr ? e : s;
  })();
  return new Yc(r, {
    docsPath: t,
    ...n
  });
}
function $o(e, { format: t }) {
  if (!t)
    return {};
  const n = {};
  function r(o) {
    const i = Object.keys(o);
    for (const a of i)
      a in e && (n[a] = e[a]), o[a] && typeof o[a] == "object" && !Array.isArray(o[a]) && r(o[a]);
  }
  const s = t(e || {});
  return r(s), n;
}
function mr(e, t) {
  return ({ exclude: n, format: r }) => ({
    exclude: n,
    format: (s) => {
      const o = t(s);
      if (n)
        for (const i of n)
          delete o[i];
      return {
        ...o,
        ...r(s)
      };
    },
    type: e
  });
}
const Xc = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function Ao(e) {
  const t = {};
  return typeof e.authorizationList < "u" && (t.authorizationList = Qc(e.authorizationList)), typeof e.accessList < "u" && (t.accessList = e.accessList), typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes), typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map((n) => D(n)) : t.blobs = e.blobs), typeof e.data < "u" && (t.data = e.data), typeof e.from < "u" && (t.from = e.from), typeof e.gas < "u" && (t.gas = C(e.gas)), typeof e.gasPrice < "u" && (t.gasPrice = C(e.gasPrice)), typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = C(e.maxFeePerBlobGas)), typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = C(e.maxFeePerGas)), typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = C(e.maxPriorityFeePerGas)), typeof e.nonce < "u" && (t.nonce = C(e.nonce)), typeof e.to < "u" && (t.to = e.to), typeof e.type < "u" && (t.type = Xc[e.type]), typeof e.value < "u" && (t.value = C(e.value)), t;
}
function Qc(e) {
  return e.map((t) => ({
    address: t.contractAddress,
    r: t.r,
    s: t.s,
    chainId: C(t.chainId),
    nonce: C(t.nonce),
    ...typeof t.yParity < "u" ? { yParity: C(t.yParity) } : {},
    ...typeof t.v < "u" && typeof t.yParity > "u" ? { v: C(t.v) } : {}
  }));
}
function fs(e) {
  if (!(!e || e.length === 0))
    return e.reduce((t, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new Kr({
          size: n.length,
          targetSize: 66,
          type: "hex"
        });
      if (r.length !== 66)
        throw new Kr({
          size: r.length,
          targetSize: 66,
          type: "hex"
        });
      return t[n] = r, t;
    }, {});
}
function eu(e) {
  const { balance: t, nonce: n, state: r, stateDiff: s, code: o } = e, i = {};
  if (o !== void 0 && (i.code = o), t !== void 0 && (i.balance = C(t)), n !== void 0 && (i.nonce = C(n)), r !== void 0 && (i.state = fs(r)), s !== void 0) {
    if (i.state)
      throw new kc();
    i.stateDiff = fs(s);
  }
  return i;
}
function Io(e) {
  if (!e)
    return;
  const t = {};
  for (const { address: n, ...r } of e) {
    if (!K(n, { strict: !1 }))
      throw new X({ address: n });
    if (t[n])
      throw new Tc({ address: n });
    t[n] = eu(r);
  }
  return t;
}
const hn = 2n ** 256n - 1n;
function gr(e) {
  const { account: t, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: s, to: o } = e, i = t ? Ce(t) : void 0;
  if (i && !K(i.address))
    throw new X({ address: i.address });
  if (o && !K(o))
    throw new X({ address: o });
  if (typeof n < "u" && (typeof r < "u" || typeof s < "u"))
    throw new Cc();
  if (r && r > hn)
    throw new He({ maxFeePerGas: r });
  if (s && r && s > r)
    throw new zt({ maxFeePerGas: r, maxPriorityFeePerGas: s });
}
class tu extends x {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
}
class wr extends x {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
}
class nu extends x {
  constructor({ maxPriorityFeePerGas: t }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${ae(t)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
}
class So extends x {
  constructor({ blockHash: t, blockNumber: n }) {
    let r = "Block";
    t && (r = `Block at hash "${t}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`, { name: "BlockNotFoundError" });
  }
}
const To = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function xr(e) {
  const t = {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? le(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
    nonce: e.nonce ? le(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? To[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0
  };
  return e.authorizationList && (t.authorizationList = ru(e.authorizationList)), t.yParity = (() => {
    if (e.yParity)
      return Number(e.yParity);
    if (typeof t.v == "bigint") {
      if (t.v === 0n || t.v === 27n)
        return 0;
      if (t.v === 1n || t.v === 28n)
        return 1;
      if (t.v >= 35n)
        return t.v % 2n === 0n ? 1 : 0;
    }
  })(), t.type === "legacy" && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), t.type === "eip2930" && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t.type === "eip1559" && delete t.maxFeePerBlobGas, t;
}
const cl = /* @__PURE__ */ mr("transaction", xr);
function ru(e) {
  return e.map((t) => ({
    contractAddress: t.address,
    chainId: Number(t.chainId),
    nonce: Number(t.nonce),
    r: t.r,
    s: t.s,
    yParity: Number(t.yParity)
  }));
}
function vr(e) {
  var n;
  const t = (n = e.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : xr(r));
  return {
    ...e,
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: t,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
  };
}
const ul = /* @__PURE__ */ mr("block", vr);
async function we(e, { blockHash: t, blockNumber: n, blockTag: r, includeTransactions: s } = {}) {
  var f, d, l;
  const o = r ?? "latest", i = s ?? !1, a = n !== void 0 ? C(n) : void 0;
  let c = null;
  if (t ? c = await e.request({
    method: "eth_getBlockByHash",
    params: [t, i]
  }, { dedupe: !0 }) : c = await e.request({
    method: "eth_getBlockByNumber",
    params: [a || o, i]
  }, { dedupe: !!a }), !c)
    throw new So({ blockHash: t, blockNumber: n });
  return (((l = (d = (f = e.chain) == null ? void 0 : f.formatters) == null ? void 0 : d.block) == null ? void 0 : l.format) || vr)(c);
}
async function Er(e) {
  const t = await e.request({
    method: "eth_gasPrice"
  });
  return BigInt(t);
}
async function su(e, t) {
  return ko(e, t);
}
async function ko(e, t) {
  var o, i;
  const { block: n, chain: r = e.chain, request: s } = t || {};
  try {
    const a = ((o = r == null ? void 0 : r.fees) == null ? void 0 : o.maxPriorityFeePerGas) ?? ((i = r == null ? void 0 : r.fees) == null ? void 0 : i.defaultPriorityFee);
    if (typeof a == "function") {
      const u = n || await F(e, we, "getBlock")({}), f = await a({
        block: u,
        client: e,
        request: s
      });
      if (f === null)
        throw new Error();
      return f;
    }
    if (typeof a < "u")
      return a;
    const c = await e.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return Se(c);
  } catch {
    const [a, c] = await Promise.all([
      n ? Promise.resolve(n) : F(e, we, "getBlock")({}),
      F(e, Er, "getGasPrice")({})
    ]);
    if (typeof a.baseFeePerGas != "bigint")
      throw new wr();
    const u = c - a.baseFeePerGas;
    return u < 0n ? 0n : u;
  }
}
async function ou(e, t) {
  return Kn(e, t);
}
async function Kn(e, t) {
  var l, p;
  const { block: n, chain: r = e.chain, request: s, type: o = "eip1559" } = t || {}, i = await (async () => {
    var m, b;
    return typeof ((m = r == null ? void 0 : r.fees) == null ? void 0 : m.baseFeeMultiplier) == "function" ? r.fees.baseFeeMultiplier({
      block: n,
      client: e,
      request: s
    }) : ((b = r == null ? void 0 : r.fees) == null ? void 0 : b.baseFeeMultiplier) ?? 1.2;
  })();
  if (i < 1)
    throw new tu();
  const c = 10 ** (((l = i.toString().split(".")[1]) == null ? void 0 : l.length) ?? 0), u = (m) => m * BigInt(Math.ceil(i * c)) / BigInt(c), f = n || await F(e, we, "getBlock")({});
  if (typeof ((p = r == null ? void 0 : r.fees) == null ? void 0 : p.estimateFeesPerGas) == "function") {
    const m = await r.fees.estimateFeesPerGas({
      block: n,
      client: e,
      multiply: u,
      request: s,
      type: o
    });
    if (m !== null)
      return m;
  }
  if (o === "eip1559") {
    if (typeof f.baseFeePerGas != "bigint")
      throw new wr();
    const m = typeof (s == null ? void 0 : s.maxPriorityFeePerGas) == "bigint" ? s.maxPriorityFeePerGas : await ko(e, {
      block: f,
      chain: r,
      request: s
    }), b = u(f.baseFeePerGas);
    return {
      maxFeePerGas: (s == null ? void 0 : s.maxFeePerGas) ?? b + m,
      maxPriorityFeePerGas: m
    };
  }
  return {
    gasPrice: (s == null ? void 0 : s.gasPrice) ?? u(await F(e, Er, "getGasPrice")({}))
  };
}
async function No(e, { address: t, blockTag: n = "latest", blockNumber: r }) {
  const s = await e.request({
    method: "eth_getTransactionCount",
    params: [t, r ? C(r) : n]
  }, { dedupe: !!r });
  return le(s);
}
function Pr(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((o) => ue(o)) : e.blobs, s = [];
  for (const o of r)
    s.push(Uint8Array.from(t.blobToKzgCommitment(o)));
  return n === "bytes" ? s : s.map((o) => D(o));
}
function Br(e) {
  const { kzg: t } = e, n = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"), r = typeof e.blobs[0] == "string" ? e.blobs.map((i) => ue(i)) : e.blobs, s = typeof e.commitments[0] == "string" ? e.commitments.map((i) => ue(i)) : e.commitments, o = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i], c = s[i];
    o.push(Uint8Array.from(t.computeBlobKzgProof(a, c)));
  }
  return n === "bytes" ? o : o.map((i) => D(i));
}
function iu(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const s = BigInt(32), o = BigInt(4294967295), i = Number(n >> s & o), a = Number(n & o), c = r ? 4 : 0, u = r ? 0 : 4;
  e.setUint32(t + c, i, r), e.setUint32(t + u, a, r);
}
const au = (e, t, n) => e & t ^ ~e & n, cu = (e, t, n) => e & t ^ e & n ^ t & n;
class uu extends ar {
  constructor(t, n, r, s) {
    super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Bn(this.buffer);
  }
  update(t) {
    tt(this);
    const { view: n, buffer: r, blockLen: s } = this;
    t = an(t);
    const o = t.length;
    for (let i = 0; i < o; ) {
      const a = Math.min(s - this.pos, o - i);
      if (a === s) {
        const c = Bn(t);
        for (; s <= o - i; i += s)
          this.process(c, i);
        continue;
      }
      r.set(t.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === s && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    tt(this), Js(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: s, isLE: o } = this;
    let { pos: i } = this;
    n[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > s - i && (this.process(r, 0), i = 0);
    for (let d = i; d < s; d++)
      n[d] = 0;
    iu(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const a = Bn(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < u; d++)
      a.setUint32(4 * d, f[d], o);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: s, finished: o, destroyed: i, pos: a } = this;
    return t.length = s, t.pos = a, t.finished = o, t.destroyed = i, s % n && t.buffer.set(r), t;
  }
}
const fu = /* @__PURE__ */ new Uint32Array([
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
]), Ae = /* @__PURE__ */ new Uint32Array(64);
class du extends uu {
  constructor() {
    super(64, 32, 8, !1), this.A = $e[0] | 0, this.B = $e[1] | 0, this.C = $e[2] | 0, this.D = $e[3] | 0, this.E = $e[4] | 0, this.F = $e[5] | 0, this.G = $e[6] | 0, this.H = $e[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: s, E: o, F: i, G: a, H: c } = this;
    return [t, n, r, s, o, i, a, c];
  }
  // prettier-ignore
  set(t, n, r, s, o, i, a, c) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = i | 0, this.G = a | 0, this.H = c | 0;
  }
  process(t, n) {
    for (let d = 0; d < 16; d++, n += 4)
      Ae[d] = t.getUint32(n, !1);
    for (let d = 16; d < 64; d++) {
      const l = Ae[d - 15], p = Ae[d - 2], m = de(l, 7) ^ de(l, 18) ^ l >>> 3, b = de(p, 17) ^ de(p, 19) ^ p >>> 10;
      Ae[d] = b + Ae[d - 7] + m + Ae[d - 16] | 0;
    }
    let { A: r, B: s, C: o, D: i, E: a, F: c, G: u, H: f } = this;
    for (let d = 0; d < 64; d++) {
      const l = de(a, 6) ^ de(a, 11) ^ de(a, 25), p = f + l + au(a, c, u) + fu[d] + Ae[d] | 0, b = (de(r, 2) ^ de(r, 13) ^ de(r, 22)) + cu(r, s, o) | 0;
      f = u, u = c, c = a, a = i + p | 0, i = o, o = s, s = r, r = p + b | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(r, s, o, i, a, c, u, f);
  }
  roundClean() {
    Ae.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Co = /* @__PURE__ */ Xs(() => new du());
function lu(e, t) {
  return Co(ce(e, { strict: !1 }) ? ct(e) : e);
}
function hu(e) {
  const { commitment: t, version: n = 1 } = e, r = e.to ?? (typeof t == "string" ? "hex" : "bytes"), s = lu(t);
  return s.set([n], 0), r === "bytes" ? s : D(s);
}
function Fo(e) {
  const { commitments: t, version: n } = e, r = e.to ?? (typeof t[0] == "string" ? "hex" : "bytes"), s = [];
  for (const o of t)
    s.push(hu({
      commitment: o,
      to: r,
      version: n
    }));
  return s;
}
const ds = 6, Oo = 32, $r = 4096, Ro = Oo * $r, ls = Ro * ds - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * $r * ds, Mo = 1;
class pu extends x {
  constructor({ maxSize: t, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${t} bytes`, `Given: ${n} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}
class zo extends x {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}
class bu extends x {
  constructor({ hash: t, size: n }) {
    super(`Versioned hash "${t}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${n}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
}
class yu extends x {
  constructor({ hash: t, version: n }) {
    super(`Versioned hash "${t}" version is invalid.`, {
      metaMessages: [
        `Expected: ${Mo}`,
        `Received: ${n}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
}
function mu(e) {
  const t = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"), n = typeof e.data == "string" ? ue(e.data) : e.data, r = _(n);
  if (!r)
    throw new zo();
  if (r > ls)
    throw new pu({
      maxSize: ls,
      size: r
    });
  const s = [];
  let o = !0, i = 0;
  for (; o; ) {
    const a = pr(new Uint8Array(Ro));
    let c = 0;
    for (; c < $r; ) {
      const u = n.slice(i, i + (Oo - 1));
      if (a.pushByte(0), a.pushBytes(u), u.length < 31) {
        a.pushByte(128), o = !1;
        break;
      }
      c++, i += 31;
    }
    s.push(a);
  }
  return t === "bytes" ? s.map((a) => a.bytes) : s.map((a) => D(a.bytes));
}
function Lo(e) {
  const { data: t, kzg: n, to: r } = e, s = e.blobs ?? mu({ data: t, to: r }), o = e.commitments ?? Pr({ blobs: s, kzg: n, to: r }), i = e.proofs ?? Br({ blobs: s, commitments: o, kzg: n, to: r }), a = [];
  for (let c = 0; c < s.length; c++)
    a.push({
      blob: s[c],
      commitment: o[c],
      proof: i[c]
    });
  return a;
}
function jo(e) {
  if (e.type)
    return e.type;
  if (typeof e.authorizationList < "u")
    return "eip7702";
  if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
    return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new Oc({ transaction: e });
}
async function _o(e) {
  const t = await e.request({
    method: "eth_chainId"
  }, { dedupe: !0 });
  return le(t);
}
const gu = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function Uo(e, t) {
  const { account: n = e.account, blobs: r, chain: s, gas: o, kzg: i, nonce: a, nonceManager: c, parameters: u = gu, type: f } = t, d = n ? Ce(n) : void 0, l = { ...t, ...d ? { from: d == null ? void 0 : d.address } : {} };
  let p;
  async function m() {
    return p || (p = await F(e, we, "getBlock")({ blockTag: "latest" }), p);
  }
  let b;
  async function h() {
    return b || (s ? s.id : typeof t.chainId < "u" ? t.chainId : (b = await F(e, _o, "getChainId")({}), b));
  }
  if ((u.includes("blobVersionedHashes") || u.includes("sidecars")) && r && i) {
    const y = Pr({ blobs: r, kzg: i });
    if (u.includes("blobVersionedHashes")) {
      const g = Fo({
        commitments: y,
        to: "hex"
      });
      l.blobVersionedHashes = g;
    }
    if (u.includes("sidecars")) {
      const g = Br({ blobs: r, commitments: y, kzg: i }), w = Lo({
        blobs: r,
        commitments: y,
        proofs: g,
        to: "hex"
      });
      l.sidecars = w;
    }
  }
  if (u.includes("chainId") && (l.chainId = await h()), u.includes("nonce") && typeof a > "u" && d)
    if (c) {
      const y = await h();
      l.nonce = await c.consume({
        address: d.address,
        chainId: y,
        client: e
      });
    } else
      l.nonce = await F(e, No, "getTransactionCount")({
        address: d.address,
        blockTag: "pending"
      });
  if ((u.includes("fees") || u.includes("type")) && typeof f > "u")
    try {
      l.type = jo(l);
    } catch {
      const y = await m();
      l.type = typeof (y == null ? void 0 : y.baseFeePerGas) == "bigint" ? "eip1559" : "legacy";
    }
  if (u.includes("fees"))
    if (l.type !== "legacy" && l.type !== "eip2930") {
      if (typeof l.maxFeePerGas > "u" || typeof l.maxPriorityFeePerGas > "u") {
        const y = await m(), { maxFeePerGas: g, maxPriorityFeePerGas: w } = await Kn(e, {
          block: y,
          chain: s,
          request: l
        });
        if (typeof t.maxPriorityFeePerGas > "u" && t.maxFeePerGas && t.maxFeePerGas < w)
          throw new nu({
            maxPriorityFeePerGas: w
          });
        l.maxPriorityFeePerGas = w, l.maxFeePerGas = g;
      }
    } else {
      if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
        throw new wr();
      const y = await m(), { gasPrice: g } = await Kn(e, {
        block: y,
        chain: s,
        request: l,
        type: "legacy"
      });
      l.gasPrice = g;
    }
  return u.includes("gas") && typeof o > "u" && (l.gas = await F(e, Ar, "estimateGas")({
    ...l,
    account: d ? { address: d.address, type: "json-rpc" } : void 0
  })), gr(l), delete l.parameters, l;
}
async function Go(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n ? C(n) : void 0, o = await e.request({
    method: "eth_getBalance",
    params: [t, s || r]
  });
  return BigInt(o);
}
async function Ar(e, t) {
  var s, o, i;
  const n = t.account ?? e.account, r = n ? Ce(n) : void 0;
  try {
    let A = function(I) {
      const { block: k, request: M, rpcStateOverride: j } = I;
      return e.request({
        method: "eth_estimateGas",
        params: j ? [M, k ?? "latest", j] : k ? [M, k] : [M]
      });
    };
    const { accessList: a, authorizationList: c, blobs: u, blobVersionedHashes: f, blockNumber: d, blockTag: l, data: p, gas: m, gasPrice: b, maxFeePerBlobGas: h, maxFeePerGas: y, maxPriorityFeePerGas: g, nonce: w, value: v, stateOverride: S, ...P } = await Uo(e, {
      ...t,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        (r == null ? void 0 : r.type) === "local" ? void 0 : ["blobVersionedHashes"]
      )
    }), B = (d ? C(d) : void 0) || l, $ = Io(S), z = await (async () => {
      if (P.to)
        return P.to;
      if (c && c.length > 0)
        return await Kc({
          authorization: c[0]
        }).catch(() => {
          throw new x("`to` is required. Could not infer from `authorizationList`");
        });
    })();
    gr(t);
    const N = (i = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionRequest) == null ? void 0 : i.format, L = (N || Ao)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...$o(P, { format: N }),
      from: r == null ? void 0 : r.address,
      accessList: a,
      authorizationList: c,
      blobs: u,
      blobVersionedHashes: f,
      data: p,
      gas: m,
      gasPrice: b,
      maxFeePerBlobGas: h,
      maxFeePerGas: y,
      maxPriorityFeePerGas: g,
      nonce: w,
      to: z,
      value: v
    });
    let T = BigInt(await A({ block: B, request: L, rpcStateOverride: $ }));
    if (c) {
      const I = await Go(e, { address: L.from }), k = await Promise.all(c.map(async (M) => {
        const { contractAddress: j } = M, U = await A({
          block: B,
          request: {
            authorizationList: void 0,
            data: p,
            from: r == null ? void 0 : r.address,
            to: j,
            value: C(I)
          },
          rpcStateOverride: $
        }).catch(() => 100000n);
        return 2n * BigInt(U);
      }));
      T += k.reduce((M, j) => M + j, 0n);
    }
    return T;
  } catch (a) {
    throw Jc(a, {
      ...t,
      account: r,
      chain: e.chain
    });
  }
}
async function wu(e, t) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = t, a = Fe({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    return await F(e, Ar, "estimateGas")({
      data: a,
      to: r,
      ...i
    });
  } catch (c) {
    const u = i.account ? Ce(i.account) : void 0;
    throw Mt(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: o,
      sender: u == null ? void 0 : u.address
    });
  }
}
function pn(e, t) {
  if (!K(e, { strict: !1 }))
    throw new X({ address: e });
  if (!K(t, { strict: !1 }))
    throw new X({ address: t });
  return e.toLowerCase() === t.toLowerCase();
}
const hs = "/docs/contract/decodeEventLog";
function Ir(e) {
  const { abi: t, data: n, strict: r, topics: s } = e, o = r ?? !0, [i, ...a] = s;
  if (!i)
    throw new ua({ docsPath: hs });
  const c = t.length === 1 ? t[0] : t.find((b) => b.type === "event" && i === cn(xe(b)));
  if (!(c && "name" in c) || c.type !== "event")
    throw new Zs(i, { docsPath: hs });
  const { name: u, inputs: f } = c, d = f == null ? void 0 : f.some((b) => !("name" in b && b.name));
  let l = d ? [] : {};
  const p = f.filter((b) => "indexed" in b && b.indexed);
  for (let b = 0; b < p.length; b++) {
    const h = p[b], y = a[b];
    if (!y)
      throw new on({
        abiItem: c,
        param: h
      });
    l[d ? b : h.name || b] = xu({ param: h, value: y });
  }
  const m = f.filter((b) => !("indexed" in b && b.indexed));
  if (m.length > 0) {
    if (n && n !== "0x")
      try {
        const b = dn(m, n);
        if (b)
          if (d)
            l = [...l, ...b];
          else
            for (let h = 0; h < m.length; h++)
              l[m[h].name] = b[h];
      } catch (b) {
        if (o)
          throw b instanceof qs || b instanceof fo ? new gt({
            abiItem: c,
            data: n,
            params: m,
            size: _(n)
          }) : b;
      }
    else if (o)
      throw new gt({
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
function xu({ param: e, value: t }) {
  return e.type === "string" || e.type === "bytes" || e.type === "tuple" || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : (dn([e], t) || [])[0];
}
function Sr(e) {
  const { abi: t, args: n, logs: r, strict: s = !0 } = e, o = (() => {
    if (e.eventName)
      return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
  })();
  return r.map((i) => {
    var a;
    try {
      const c = t.find((f) => f.type === "event" && i.topics[0] === cn(f));
      if (!c)
        return null;
      const u = Ir({
        ...i,
        abi: [c],
        strict: s
      });
      return o && !o.includes(u.eventName) || !vu({
        args: u.args,
        inputs: c.inputs,
        matchArgs: n
      }) ? null : { ...u, ...i };
    } catch (c) {
      let u, f;
      if (c instanceof Zs)
        return null;
      if (c instanceof gt || c instanceof on) {
        if (s)
          return null;
        u = c.abiItem.name, f = (a = c.abiItem.inputs) == null ? void 0 : a.some((d) => !("name" in d && d.name));
      }
      return { ...i, args: f ? [] : {}, eventName: u };
    }
  }).filter(Boolean);
}
function vu(e) {
  const { args: t, inputs: n, matchArgs: r } = e;
  if (!r)
    return !0;
  if (!t)
    return !1;
  function s(o, i, a) {
    try {
      return o.type === "address" ? pn(i, a) : o.type === "string" || o.type === "bytes" ? q(ct(i)) === a : i === a;
    } catch {
      return !1;
    }
  }
  return Array.isArray(t) && Array.isArray(r) ? r.every((o, i) => {
    if (o == null)
      return !0;
    const a = n[i];
    return a ? (Array.isArray(o) ? o : [o]).some((u) => s(a, u, t[i])) : !1;
  }) : typeof t == "object" && !Array.isArray(t) && typeof r == "object" && !Array.isArray(r) ? Object.entries(r).every(([o, i]) => {
    if (i == null)
      return !0;
    const a = n.find((u) => u.name === o);
    return a ? (Array.isArray(i) ? i : [i]).some((u) => s(a, u, t[o])) : !1;
  }) : !1;
}
function Te(e, { args: t, eventName: n } = {}) {
  return {
    ...e,
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    logIndex: e.logIndex ? Number(e.logIndex) : null,
    transactionHash: e.transactionHash ? e.transactionHash : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    ...n ? { args: t, eventName: n } : {}
  };
}
async function Tr(e, { address: t, blockHash: n, fromBlock: r, toBlock: s, event: o, events: i, args: a, strict: c } = {}) {
  const u = c ?? !1, f = i ?? (o ? [o] : void 0);
  let d = [];
  f && (d = [f.flatMap((b) => Gt({
    abi: [b],
    eventName: b.name,
    args: i ? void 0 : a
  }))], o && (d = d[0]));
  let l;
  n ? l = await e.request({
    method: "eth_getLogs",
    params: [{ address: t, topics: d, blockHash: n }]
  }) : l = await e.request({
    method: "eth_getLogs",
    params: [
      {
        address: t,
        topics: d,
        fromBlock: typeof r == "bigint" ? C(r) : r,
        toBlock: typeof s == "bigint" ? C(s) : s
      }
    ]
  });
  const p = l.map((m) => Te(m));
  return f ? Sr({
    abi: f,
    args: a,
    logs: p,
    strict: u
  }) : p;
}
async function Do(e, t) {
  const { abi: n, address: r, args: s, blockHash: o, eventName: i, fromBlock: a, toBlock: c, strict: u } = t, f = i ? Ut({ abi: n, name: i }) : void 0, d = f ? void 0 : n.filter((l) => l.type === "event");
  return F(e, Tr, "getLogs")({
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
const In = "/docs/contract/decodeFunctionResult";
function ft(e) {
  const { abi: t, args: n, functionName: r, data: s } = e;
  let o = t[0];
  if (r) {
    const a = Ut({ abi: t, args: n, name: r });
    if (!a)
      throw new tn(r, { docsPath: In });
    o = a;
  }
  if (o.type !== "function")
    throw new tn(void 0, { docsPath: In });
  if (!o.outputs)
    throw new fa(o.name, { docsPath: In });
  const i = dn(o.outputs, s);
  if (i && i.length > 1)
    return i;
  if (i && i.length === 1)
    return i[0];
}
const Yn = [
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
], Ho = [
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
], qo = [
  ...Ho,
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
], Eu = [
  ...Ho,
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
], ps = [
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
], bs = [
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
], ys = [
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
], fl = [
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
], Pu = "0x82ad56cb", Bu = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe", $u = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe", Au = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
class Jn extends x {
  constructor({ blockNumber: t, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...t && r.blockCreated && r.blockCreated > t ? [
          `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`
        ] : [
          `- The chain does not have the contract "${r.name}" configured.`
        ]
      ],
      name: "ChainDoesNotSupportContract"
    });
  }
}
class Vo extends x {
  constructor() {
    super("No chain was provided to the Client.", {
      name: "ClientChainNotConfiguredError"
    });
  }
}
class bn extends x {
  constructor({ chainId: t }) {
    super(typeof t == "number" ? `Chain ID "${t}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
  }
}
const Sn = "/docs/contract/encodeDeployData";
function kr(e) {
  const { abi: t, args: n, bytecode: r } = e;
  if (!n || n.length === 0)
    return r;
  const s = t.find((i) => "type" in i && i.type === "constructor");
  if (!s)
    throw new oa({ docsPath: Sn });
  if (!("inputs" in s))
    throw new Zr({ docsPath: Sn });
  if (!s.inputs || s.inputs.length === 0)
    throw new Zr({ docsPath: Sn });
  const o = Ve(s.inputs, n);
  return Ee([r, o]);
}
function dt({ blockNumber: e, chain: t, contract: n }) {
  var s;
  const r = (s = t == null ? void 0 : t.contracts) == null ? void 0 : s[n];
  if (!r)
    throw new Jn({
      chain: t,
      contract: { name: n }
    });
  if (e && r.blockCreated && r.blockCreated > e)
    throw new Jn({
      blockNumber: e,
      chain: t,
      contract: {
        name: n,
        blockCreated: r.blockCreated
      }
    });
  return r.address;
}
function Iu(e, { docsPath: t, ...n }) {
  const r = (() => {
    const s = Bo(e, n);
    return s instanceof yr ? e : s;
  })();
  return new wo(r, {
    docsPath: t,
    ...n
  });
}
const Tn = /* @__PURE__ */ new Map();
function Zo({ fn: e, id: t, shouldSplitBatch: n, wait: r = 0, sort: s }) {
  const o = async () => {
    const f = c();
    i();
    const d = f.map(({ args: l }) => l);
    d.length !== 0 && e(d).then((l) => {
      var p;
      s && Array.isArray(l) && l.sort(s);
      for (let m = 0; m < f.length; m++) {
        const { pendingPromise: b } = f[m];
        (p = b.resolve) == null || p.call(b, [l[m], l]);
      }
    }).catch((l) => {
      var p;
      for (let m = 0; m < f.length; m++) {
        const { pendingPromise: b } = f[m];
        (p = b.reject) == null || p.call(b, l);
      }
    });
  }, i = () => Tn.delete(t), a = () => c().map(({ args: f }) => f), c = () => Tn.get(t) || [], u = (f) => Tn.set(t, [...c(), f]);
  return {
    flush: i,
    async schedule(f) {
      const d = {}, l = new Promise((b, h) => {
        d.resolve = b, d.reject = h;
      });
      return (n == null ? void 0 : n([...a(), f])) && o(), c().length > 0 ? (u({ args: f, pendingPromise: d }), l) : (u({ args: f, pendingPromise: d }), setTimeout(o, r), l);
    }
  };
}
async function Ht(e, t) {
  var N, O, L, A;
  const { account: n = e.account, batch: r = !!((N = e.batch) != null && N.multicall), blockNumber: s, blockTag: o = "latest", accessList: i, blobs: a, code: c, data: u, factory: f, factoryData: d, gas: l, gasPrice: p, maxFeePerBlobGas: m, maxFeePerGas: b, maxPriorityFeePerGas: h, nonce: y, to: g, value: w, stateOverride: v, ...S } = t, P = n ? Ce(n) : void 0;
  if (c && (f || d))
    throw new x("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
  if (c && g)
    throw new x("Cannot provide both `code` & `to` as parameters.");
  const E = c && u, B = f && d && g && u, $ = E || B, z = E ? ku({
    code: c,
    data: u
  }) : B ? Nu({
    data: u,
    factory: f,
    factoryData: d,
    to: g
  }) : u;
  try {
    gr(t);
    const I = (s ? C(s) : void 0) || o, k = Io(v), M = (A = (L = (O = e.chain) == null ? void 0 : O.formatters) == null ? void 0 : L.transactionRequest) == null ? void 0 : A.format, U = (M || Ao)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...$o(S, { format: M }),
      from: P == null ? void 0 : P.address,
      accessList: i,
      blobs: a,
      data: z,
      gas: l,
      gasPrice: p,
      maxFeePerBlobGas: m,
      maxFeePerGas: b,
      maxPriorityFeePerGas: h,
      nonce: y,
      to: $ ? void 0 : g,
      value: w
    });
    if (r && Su({ request: U }) && !k)
      try {
        return await Tu(e, {
          ...U,
          blockNumber: s,
          blockTag: o
        });
      } catch (Q) {
        if (!(Q instanceof Vo) && !(Q instanceof Jn))
          throw Q;
      }
    const W = await e.request({
      method: "eth_call",
      params: k ? [
        U,
        I,
        k
      ] : [U, I]
    });
    return W === "0x" ? { data: void 0 } : { data: W };
  } catch (T) {
    const I = Cu(T), { offchainLookup: k, offchainLookupSignature: M } = await Promise.resolve().then(() => kf);
    if (e.ccipRead !== !1 && (I == null ? void 0 : I.slice(0, 10)) === M && g)
      return { data: await k(e, { data: I, to: g }) };
    throw $ && (I == null ? void 0 : I.slice(0, 10)) === "0x101bb98d" ? new _c({ factory: f }) : Iu(T, {
      ...t,
      account: P,
      chain: e.chain
    });
  }
}
function Su({ request: e }) {
  const { data: t, to: n, ...r } = e;
  return !(!t || t.startsWith(Pu) || !n || Object.values(r).filter((s) => typeof s < "u").length > 0);
}
async function Tu(e, t) {
  var b;
  const { batchSize: n = 1024, wait: r = 0 } = typeof ((b = e.batch) == null ? void 0 : b.multicall) == "object" ? e.batch.multicall : {}, { blockNumber: s, blockTag: o = "latest", data: i, multicallAddress: a, to: c } = t;
  let u = a;
  if (!u) {
    if (!e.chain)
      throw new Vo();
    u = dt({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const d = (s ? C(s) : void 0) || o, { schedule: l } = Zo({
    id: `${e.uid}.${d}`,
    wait: r,
    shouldSplitBatch(h) {
      return h.reduce((g, { data: w }) => g + (w.length - 2), 0) > n * 2;
    },
    fn: async (h) => {
      const y = h.map((v) => ({
        allowFailure: !0,
        callData: v.data,
        target: v.to
      })), g = Fe({
        abi: Yn,
        args: [y],
        functionName: "aggregate3"
      }), w = await e.request({
        method: "eth_call",
        params: [
          {
            data: g,
            to: u
          },
          d
        ]
      });
      return ft({
        abi: Yn,
        args: [y],
        functionName: "aggregate3",
        data: w || "0x"
      });
    }
  }), [{ returnData: p, success: m }] = await l({ data: i, to: c });
  if (!m)
    throw new br({ data: p });
  return p === "0x" ? { data: void 0 } : { data: p };
}
function ku(e) {
  const { code: t, data: n } = e;
  return kr({
    abi: Gs(["constructor(bytes, bytes)"]),
    bytecode: Bu,
    args: [t, n]
  });
}
function Nu(e) {
  const { data: t, factory: n, factoryData: r, to: s } = e;
  return kr({
    abi: Gs(["constructor(address, bytes, address, bytes)"]),
    bytecode: $u,
    args: [s, t, n, r]
  });
}
function Cu(e) {
  var n;
  if (!(e instanceof x))
    return;
  const t = e.walk();
  return typeof (t == null ? void 0 : t.data) == "object" ? (n = t.data) == null ? void 0 : n.data : t.data;
}
async function ve(e, t) {
  const { abi: n, address: r, args: s, functionName: o, ...i } = t, a = Fe({
    abi: n,
    args: s,
    functionName: o
  });
  try {
    const { data: c } = await F(e, Ht, "call")({
      ...i,
      data: a,
      to: r
    });
    return ft({
      abi: n,
      args: s,
      functionName: o,
      data: c || "0x"
    });
  } catch (c) {
    throw Mt(c, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/readContract",
      functionName: o
    });
  }
}
async function Fu(e, t) {
  const { abi: n, address: r, args: s, dataSuffix: o, functionName: i, ...a } = t, c = a.account ? Ce(a.account) : e.account, u = Fe({ abi: n, args: s, functionName: i });
  try {
    const { data: f } = await F(e, Ht, "call")({
      batch: !1,
      data: `${u}${o ? o.replace("0x", "") : ""}`,
      to: r,
      ...a,
      account: c
    }), d = ft({
      abi: n,
      args: s,
      functionName: i,
      data: f || "0x"
    }), l = n.filter((p) => "name" in p && p.name === t.functionName);
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
    throw Mt(f, {
      abi: n,
      address: r,
      args: s,
      docsPath: "/docs/contract/simulateContract",
      functionName: i,
      sender: c == null ? void 0 : c.address
    });
  }
}
const kn = /* @__PURE__ */ new Map(), ms = /* @__PURE__ */ new Map();
let Ou = 0;
function ke(e, t, n) {
  const r = ++Ou, s = () => kn.get(e) || [], o = () => {
    const f = s();
    kn.set(e, f.filter((d) => d.id !== r));
  }, i = () => {
    const f = ms.get(e);
    s().length === 1 && f && f(), o();
  }, a = s();
  if (kn.set(e, [
    ...a,
    { id: r, fns: t }
  ]), a && a.length > 0)
    return i;
  const c = {};
  for (const f in t)
    c[f] = (...d) => {
      var p, m;
      const l = s();
      if (l.length !== 0)
        for (const b of l)
          (m = (p = b.fns)[f]) == null || m.call(p, ...d);
    };
  const u = n(c);
  return typeof u == "function" && ms.set(e, u), i;
}
async function Xn(e) {
  return new Promise((t) => setTimeout(t, e));
}
function qt(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
  let s = !0;
  const o = () => s = !1;
  return (async () => {
    let a;
    t && (a = await e({ unpoll: o }));
    const c = await (n == null ? void 0 : n(a)) ?? r;
    await Xn(c);
    const u = async () => {
      s && (await e({ unpoll: o }), await Xn(r), u());
    };
    u();
  })(), o;
}
const Ru = /* @__PURE__ */ new Map(), Mu = /* @__PURE__ */ new Map();
function zu(e) {
  const t = (s, o) => ({
    clear: () => o.delete(s),
    get: () => o.get(s),
    set: (i) => o.set(s, i)
  }), n = t(e, Ru), r = t(e, Mu);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r
  };
}
async function Lu(e, { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }) {
  const r = zu(t), s = r.response.get();
  if (s && n > 0 && (/* @__PURE__ */ new Date()).getTime() - s.created.getTime() < n)
    return s.data;
  let o = r.promise.get();
  o || (o = e(), r.promise.set(o));
  try {
    const i = await o;
    return r.response.set({ created: /* @__PURE__ */ new Date(), data: i }), i;
  } finally {
    r.promise.clear();
  }
}
const ju = (e) => `blockNumber.${e}`;
async function Vt(e, { cacheTime: t = e.cacheTime } = {}) {
  const n = await Lu(() => e.request({
    method: "eth_blockNumber"
  }), { cacheKey: ju(e.uid), cacheTime: t });
  return BigInt(n);
}
async function yn(e, { filter: t }) {
  const n = "strict" in t && t.strict, r = await t.request({
    method: "eth_getFilterChanges",
    params: [t.id]
  });
  if (typeof r[0] == "string")
    return r;
  const s = r.map((o) => Te(o));
  return !("abi" in t) || !t.abi ? s : Sr({
    abi: t.abi,
    logs: s,
    strict: n
  });
}
async function mn(e, { filter: t }) {
  return t.request({
    method: "eth_uninstallFilter",
    params: [t.id]
  });
}
function _u(e, t) {
  const { abi: n, address: r, args: s, batch: o = !0, eventName: i, fromBlock: a, onError: c, onLogs: u, poll: f, pollingInterval: d = e.pollingInterval, strict: l } = t;
  return (typeof f < "u" ? f : typeof a == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket")) ? (() => {
    const h = l ?? !1, y = Z([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      i,
      d,
      h,
      a
    ]);
    return ke(y, { onLogs: u, onError: c }, (g) => {
      let w;
      a !== void 0 && (w = a - 1n);
      let v, S = !1;
      const P = qt(async () => {
        var E;
        if (!S) {
          try {
            v = await F(e, co, "createContractEventFilter")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              strict: h,
              fromBlock: a
            });
          } catch {
          }
          S = !0;
          return;
        }
        try {
          let B;
          if (v)
            B = await F(e, yn, "getFilterChanges")({ filter: v });
          else {
            const $ = await F(e, Vt, "getBlockNumber")({});
            w && w < $ ? B = await F(e, Do, "getContractEvents")({
              abi: n,
              address: r,
              args: s,
              eventName: i,
              fromBlock: w + 1n,
              toBlock: $,
              strict: h
            }) : B = [], w = $;
          }
          if (B.length === 0)
            return;
          if (o)
            g.onLogs(B);
          else
            for (const $ of B)
              g.onLogs([$]);
        } catch (B) {
          v && B instanceof Ge && (S = !1), (E = g.onError) == null || E.call(g, B);
        }
      }, {
        emitOnBegin: !0,
        interval: d
      });
      return async () => {
        v && await F(e, mn, "uninstallFilter")({ filter: v }), P();
      };
    });
  })() : (() => {
    const h = l ?? !1, y = Z([
      "watchContractEvent",
      r,
      s,
      o,
      e.uid,
      i,
      d,
      h
    ]);
    let g = !0, w = () => g = !1;
    return ke(y, { onLogs: u, onError: c }, (v) => ((async () => {
      try {
        const S = (() => {
          if (e.transport.type === "fallback") {
            const B = e.transport.transports.find(($) => $.config.type === "webSocket");
            return B ? B.value : e.transport;
          }
          return e.transport;
        })(), P = i ? Gt({
          abi: n,
          eventName: i,
          args: s
        }) : [], { unsubscribe: E } = await S.subscribe({
          params: ["logs", { address: r, topics: P }],
          onData(B) {
            var z;
            if (!g)
              return;
            const $ = B.result;
            try {
              const { eventName: N, args: O } = Ir({
                abi: n,
                data: $.data,
                topics: $.topics,
                strict: l
              }), L = Te($, {
                args: O,
                eventName: N
              });
              v.onLogs([L]);
            } catch (N) {
              let O, L;
              if (N instanceof gt || N instanceof on) {
                if (l)
                  return;
                O = N.abiItem.name, L = (z = N.abiItem.inputs) == null ? void 0 : z.some((T) => !("name" in T && T.name));
              }
              const A = Te($, {
                args: L ? [] : {},
                eventName: O
              });
              v.onLogs([A]);
            }
          },
          onError(B) {
            var $;
            ($ = v.onError) == null || $.call(v, B);
          }
        });
        w = E, g || w();
      } catch (S) {
        c == null || c(S);
      }
    })(), () => w()));
  })();
}
async function Uu(e, { serializedTransaction: t }) {
  return e.request({
    method: "eth_sendRawTransaction",
    params: [t]
  }, { retryCount: 0 });
}
class Gu extends x {
  constructor({ address: t }) {
    super(`No EIP-712 domain found on contract "${t}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${t}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
}
async function Du(e, t) {
  const { address: n, factory: r, factoryData: s } = t;
  try {
    const [o, i, a, c, u, f, d] = await F(e, ve, "readContract")({
      abi: Hu,
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
    throw i.name === "ContractFunctionExecutionError" && i.cause.name === "ContractFunctionZeroDataError" ? new Gu({ address: n }) : i;
  }
}
const Hu = [
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
], Qn = 256;
let Jt = Qn, Xt;
function Wo(e = 11) {
  if (!Xt || Jt + e > Qn * 2) {
    Xt = "", Jt = 0;
    for (let t = 0; t < Qn; t++)
      Xt += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return Xt.substring(Jt, Jt++ + e);
}
function qu(e) {
  const { batch: t, cacheTime: n = e.pollingInterval ?? 4e3, ccipRead: r, key: s = "base", name: o = "Base Client", pollingInterval: i = 4e3, type: a = "base" } = e, c = e.chain, u = e.account ? Ce(e.account) : void 0, { config: f, request: d, value: l } = e.transport({
    chain: c,
    pollingInterval: i
  }), p = { ...f, ...l }, m = {
    account: u,
    batch: t,
    cacheTime: n,
    ccipRead: r,
    chain: c,
    key: s,
    name: o,
    pollingInterval: i,
    request: d,
    transport: p,
    type: a,
    uid: Wo()
  };
  function b(h) {
    return (y) => {
      const g = y(h);
      for (const v in m)
        delete g[v];
      const w = { ...h, ...g };
      return Object.assign(w, { extend: b(w) });
    };
  }
  return Object.assign(m, { extend: b(m) });
}
const Qt = /* @__PURE__ */ new ur(8192);
function Vu(e, { enabled: t = !0, id: n }) {
  if (!t || !n)
    return e();
  if (Qt.get(n))
    return Qt.get(n);
  const r = e().finally(() => Qt.delete(n));
  return Qt.set(n, r), r;
}
function er(e, { delay: t = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((s, o) => {
    const i = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: u }) => {
        const f = typeof t == "function" ? t({ count: a, error: u }) : t;
        f && await Xn(f), i({ count: a + 1 });
      };
      try {
        const u = await e();
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
function Zu(e, t = {}) {
  return async (n, r = {}) => {
    const { dedupe: s = !1, retryDelay: o = 150, retryCount: i = 3, uid: a } = {
      ...t,
      ...r
    }, c = s ? q(wt(`${a}.${Z(n)}`)) : void 0;
    return Vu(() => er(async () => {
      try {
        return await e(n);
      } catch (u) {
        const f = u;
        switch (f.code) {
          case Et.code:
            throw new Et(f);
          case Pt.code:
            throw new Pt(f);
          case Bt.code:
            throw new Bt(f, { method: n.method });
          case $t.code:
            throw new $t(f);
          case Ue.code:
            throw new Ue(f);
          case Ge.code:
            throw new Ge(f);
          case At.code:
            throw new At(f);
          case It.code:
            throw new It(f);
          case St.code:
            throw new St(f);
          case Tt.code:
            throw new Tt(f, {
              method: n.method
            });
          case nt.code:
            throw new nt(f);
          case kt.code:
            throw new kt(f);
          case et.code:
            throw new et(f);
          case Nt.code:
            throw new Nt(f);
          case Ct.code:
            throw new Ct(f);
          case Ft.code:
            throw new Ft(f);
          case Ot.code:
            throw new Ot(f);
          case Rt.code:
            throw new Rt(f);
          case 5e3:
            throw new et(f);
          default:
            throw u instanceof x ? u : new Gc(f);
        }
      }
    }, {
      delay: ({ count: u, error: f }) => {
        var d;
        if (f && f instanceof Le) {
          const l = (d = f == null ? void 0 : f.headers) == null ? void 0 : d.get("Retry-After");
          if (l != null && l.match(/\d/))
            return Number.parseInt(l) * 1e3;
        }
        return ~~(1 << u) * o;
      },
      retryCount: i,
      shouldRetry: ({ error: u }) => Wu(u)
    }), { enabled: s, id: c });
  };
}
function Wu(e) {
  return "code" in e && typeof e.code == "number" ? e.code === -1 || e.code === nt.code || e.code === Ue.code : e instanceof Le && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0;
}
function Ku({ key: e, name: t, request: n, retryCount: r = 3, retryDelay: s = 150, timeout: o, type: i }, a) {
  const c = Wo();
  return {
    config: {
      key: e,
      name: t,
      request: n,
      retryCount: r,
      retryDelay: s,
      timeout: o,
      type: i
    },
    request: Zu(n, { retryCount: r, retryDelay: s, uid: c }),
    value: a
  };
}
class Yu extends x {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
}
function Ju(e, { errorInstance: t = new Error("timed out"), timeout: n, signal: r }) {
  return new Promise((s, o) => {
    (async () => {
      let i;
      try {
        const a = new AbortController();
        n > 0 && (i = setTimeout(() => {
          r ? a.abort() : o(t);
        }, n)), s(await e({ signal: (a == null ? void 0 : a.signal) || null }));
      } catch (a) {
        (a == null ? void 0 : a.name) === "AbortError" && o(t), o(a);
      } finally {
        clearTimeout(i);
      }
    })();
  });
}
function Xu() {
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
const gs = /* @__PURE__ */ Xu();
function Qu(e, t = {}) {
  return {
    async request(n) {
      var d;
      const { body: r, onRequest: s = t.onRequest, onResponse: o = t.onResponse, timeout: i = t.timeout ?? 1e4 } = n, a = {
        ...t.fetchOptions ?? {},
        ...n.fetchOptions ?? {}
      }, { headers: c, method: u, signal: f } = a;
      try {
        const l = await Ju(async ({ signal: m }) => {
          const b = {
            ...a,
            body: Array.isArray(r) ? Z(r.map((w) => ({
              jsonrpc: "2.0",
              id: w.id ?? gs.take(),
              ...w
            }))) : Z({
              jsonrpc: "2.0",
              id: r.id ?? gs.take(),
              ...r
            }),
            headers: {
              "Content-Type": "application/json",
              ...c
            },
            method: u || "POST",
            signal: f || (i > 0 ? m : null)
          }, h = new Request(e, b), y = await (s == null ? void 0 : s(h, b)) ?? { ...b, url: e };
          return await fetch(y.url ?? e, y);
        }, {
          errorInstance: new cs({ body: r, url: e }),
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
          throw new Le({
            body: r,
            details: Z(p.error) || l.statusText,
            headers: l.headers,
            status: l.status,
            url: e
          });
        return p;
      } catch (l) {
        throw l instanceof Le || l instanceof cs ? l : new Le({
          body: r,
          cause: l,
          url: e
        });
      }
    }
  };
}
function dl(e, t = {}) {
  const { batch: n, fetchOptions: r, key: s = "http", name: o = "HTTP JSON-RPC", onFetchRequest: i, onFetchResponse: a, retryDelay: c } = t;
  return ({ chain: u, retryCount: f, timeout: d }) => {
    const { batchSize: l = 1e3, wait: p = 0 } = typeof n == "object" ? n : {}, m = t.retryCount ?? f, b = d ?? t.timeout ?? 1e4, h = e || (u == null ? void 0 : u.rpcUrls.default.http[0]);
    if (!h)
      throw new Yu();
    const y = Qu(h, {
      fetchOptions: r,
      onRequest: i,
      onResponse: a,
      timeout: b
    });
    return Ku({
      key: s,
      name: o,
      async request({ method: g, params: w }) {
        const v = { method: g, params: w }, { schedule: S } = Zo({
          id: h,
          wait: p,
          shouldSplitBatch($) {
            return $.length > l;
          },
          fn: ($) => y.request({
            body: $
          }),
          sort: ($, z) => $.id - z.id
        }), P = async ($) => n ? S($) : [
          await y.request({
            body: $
          })
        ], [{ error: E, result: B }] = await P(v);
        if (E)
          throw new xo({
            body: v,
            error: E,
            url: h
          });
        return B;
      },
      retryCount: m,
      retryDelay: c,
      timeout: b,
      type: "http"
    }, {
      fetchOptions: r,
      url: h
    });
  };
}
function Nr(e, t) {
  var r, s, o, i, a, c;
  if (!(e instanceof x))
    return !1;
  const n = e.walk((u) => u instanceof _n);
  return n instanceof _n ? !!(((r = n.data) == null ? void 0 : r.errorName) === "ResolverNotFound" || ((s = n.data) == null ? void 0 : s.errorName) === "ResolverWildcardNotSupported" || ((o = n.data) == null ? void 0 : o.errorName) === "ResolverNotContract" || ((i = n.data) == null ? void 0 : i.errorName) === "ResolverError" || ((a = n.data) == null ? void 0 : a.errorName) === "HttpError" || (c = n.reason) != null && c.includes("Wildcard on non-extended resolvers is not supported") || t === "reverse" && n.reason === uo[50]) : !1;
}
function Ko(e) {
  if (e.length !== 66 || e.indexOf("[") !== 0 || e.indexOf("]") !== 65)
    return null;
  const t = `0x${e.slice(1, 65)}`;
  return ce(t) ? t : null;
}
function en(e) {
  let t = new Uint8Array(32).fill(0);
  if (!e)
    return D(t);
  const n = e.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = Ko(n[r]), o = s ? ct(s) : q(ze(n[r]), "bytes");
    t = q(he([t, o]), "bytes");
  }
  return D(t);
}
function ef(e) {
  return `[${e.slice(2)}]`;
}
function tf(e) {
  const t = new Uint8Array(32).fill(0);
  return e ? Ko(e) || q(ze(e)) : D(t);
}
function gn(e) {
  const t = e.replace(/^\.|\.$/gm, "");
  if (t.length === 0)
    return new Uint8Array(1);
  const n = new Uint8Array(ze(t).byteLength + 2);
  let r = 0;
  const s = t.split(".");
  for (let o = 0; o < s.length; o++) {
    let i = ze(s[o]);
    i.byteLength > 255 && (i = ze(ef(tf(s[o])))), n[r] = i.length, n.set(i, r + 1), r += i.length + 1;
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
async function nf(e, { blockNumber: t, blockTag: n, coinType: r, name: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = dt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = Fe({
      abi: bs,
      functionName: "addr",
      ...r != null ? { args: [en(s), BigInt(r)] } : { args: [en(s)] }
    }), f = {
      address: c,
      abi: qo,
      functionName: "resolve",
      args: [R(gn(s)), u],
      blockNumber: t,
      blockTag: n
    }, d = F(e, ve, "readContract"), l = o ? await d({
      ...f,
      args: [...f.args, o]
    }) : await d(f);
    if (l[0] === "0x")
      return null;
    const p = ft({
      abi: bs,
      args: r != null ? [en(s), BigInt(r)] : void 0,
      functionName: "addr",
      data: l[0]
    });
    return p === "0x" || ie(p) === "0x00" ? null : p;
  } catch (u) {
    if (i)
      throw u;
    if (Nr(u, "resolve"))
      return null;
    throw u;
  }
}
class rf extends x {
  constructor({ data: t }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(t)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
}
class yt extends x {
  constructor({ reason: t }) {
    super(`ENS NFT avatar URI is invalid. ${t}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
}
class Cr extends x {
  constructor({ uri: t }) {
    super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
}
class sf extends x {
  constructor({ namespace: t }) {
    super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
}
const of = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, af = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, cf = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, uf = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function ff(e) {
  try {
    const t = await fetch(e, { method: "HEAD" });
    if (t.status === 200) {
      const n = t.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (t) {
    return typeof t == "object" && typeof t.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((n) => {
      const r = new Image();
      r.onload = () => {
        n(!0);
      }, r.onerror = () => {
        n(!1);
      }, r.src = e;
    });
  }
}
function ws(e, t) {
  return e ? e.endsWith("/") ? e.slice(0, -1) : e : t;
}
function Yo({ uri: e, gatewayUrls: t }) {
  const n = cf.test(e);
  if (n)
    return { uri: e, isOnChain: !0, isEncoded: n };
  const r = ws(t == null ? void 0 : t.ipfs, "https://ipfs.io"), s = ws(t == null ? void 0 : t.arweave, "https://arweave.net"), o = e.match(of), { protocol: i, subpath: a, target: c, subtarget: u = "" } = (o == null ? void 0 : o.groups) || {}, f = i === "ipns:/" || a === "ipns/", d = i === "ipfs:/" || a === "ipfs/" || af.test(e);
  if (e.startsWith("http") && !f && !d) {
    let p = e;
    return t != null && t.arweave && (p = e.replace(/https:\/\/arweave.net/g, t == null ? void 0 : t.arweave)), { uri: p, isOnChain: !1, isEncoded: !1 };
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
  let l = e.replace(uf, "");
  if (l.startsWith("<svg") && (l = `data:image/svg+xml;base64,${btoa(l)}`), l.startsWith("data:") || l.startsWith("{"))
    return {
      uri: l,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new Cr({ uri: e });
}
function Jo(e) {
  if (typeof e != "object" || !("image" in e) && !("image_url" in e) && !("image_data" in e))
    throw new rf({ data: e });
  return e.image || e.image_url || e.image_data;
}
async function df({ gatewayUrls: e, uri: t }) {
  try {
    const n = await fetch(t).then((s) => s.json());
    return await Fr({
      gatewayUrls: e,
      uri: Jo(n)
    });
  } catch {
    throw new Cr({ uri: t });
  }
}
async function Fr({ gatewayUrls: e, uri: t }) {
  const { uri: n, isOnChain: r } = Yo({ uri: t, gatewayUrls: e });
  if (r || await ff(n))
    return n;
  throw new Cr({ uri: t });
}
function lf(e) {
  let t = e;
  t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, s] = t.split("/"), [o, i] = n.split(":"), [a, c] = r.split(":");
  if (!o || o.toLowerCase() !== "eip155")
    throw new yt({ reason: "Only EIP-155 supported" });
  if (!i)
    throw new yt({ reason: "Chain ID not found" });
  if (!c)
    throw new yt({
      reason: "Contract address not found"
    });
  if (!s)
    throw new yt({ reason: "Token ID not found" });
  if (!a)
    throw new yt({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(i),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: s
  };
}
async function hf(e, { nft: t }) {
  if (t.namespace === "erc721")
    return ve(e, {
      address: t.contractAddress,
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
      args: [BigInt(t.tokenID)]
    });
  if (t.namespace === "erc1155")
    return ve(e, {
      address: t.contractAddress,
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
      args: [BigInt(t.tokenID)]
    });
  throw new sf({ namespace: t.namespace });
}
async function pf(e, { gatewayUrls: t, record: n }) {
  return /eip155:/i.test(n) ? bf(e, { gatewayUrls: t, record: n }) : Fr({ uri: n, gatewayUrls: t });
}
async function bf(e, { gatewayUrls: t, record: n }) {
  const r = lf(n), s = await hf(e, { nft: r }), { uri: o, isOnChain: i, isEncoded: a } = Yo({ uri: s, gatewayUrls: t });
  if (i && (o.includes("data:application/json;base64,") || o.startsWith("{"))) {
    const u = a ? (
      // if it is encoded, decode it
      atob(o.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      o
    ), f = JSON.parse(u);
    return Fr({ uri: Jo(f), gatewayUrls: t });
  }
  let c = r.tokenID;
  return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), df({
    gatewayUrls: t,
    uri: o.replace(/(?:0x)?{id}/, c)
  });
}
async function Xo(e, { blockNumber: t, blockTag: n, name: r, key: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = dt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = {
      address: c,
      abi: qo,
      functionName: "resolve",
      args: [
        R(gn(r)),
        Fe({
          abi: ps,
          functionName: "text",
          args: [en(r), s]
        })
      ],
      blockNumber: t,
      blockTag: n
    }, f = F(e, ve, "readContract"), d = o ? await f({
      ...u,
      args: [...u.args, o]
    }) : await f(u);
    if (d[0] === "0x")
      return null;
    const l = ft({
      abi: ps,
      functionName: "text",
      data: d[0]
    });
    return l === "" ? null : l;
  } catch (u) {
    if (i)
      throw u;
    if (Nr(u, "resolve"))
      return null;
    throw u;
  }
}
async function yf(e, { blockNumber: t, blockTag: n, assetGatewayUrls: r, name: s, gatewayUrls: o, strict: i, universalResolverAddress: a }) {
  const c = await F(e, Xo, "getEnsText")({
    blockNumber: t,
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
    return await pf(e, {
      record: c,
      gatewayUrls: r
    });
  } catch {
    return null;
  }
}
async function mf(e, { address: t, blockNumber: n, blockTag: r, gatewayUrls: s, strict: o, universalResolverAddress: i }) {
  let a = i;
  if (!a) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    a = dt({
      blockNumber: n,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const c = `${t.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const u = {
      address: a,
      abi: Eu,
      functionName: "reverse",
      args: [R(gn(c))],
      blockNumber: n,
      blockTag: r
    }, f = F(e, ve, "readContract"), [d, l] = s ? await f({
      ...u,
      args: [...u.args, s]
    }) : await f(u);
    return t.toLowerCase() !== l.toLowerCase() ? null : d;
  } catch (u) {
    if (o)
      throw u;
    if (Nr(u, "reverse"))
      return null;
    throw u;
  }
}
async function gf(e, { blockNumber: t, blockTag: n, name: r, universalResolverAddress: s }) {
  let o = s;
  if (!o) {
    if (!e.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    o = dt({
      blockNumber: t,
      chain: e.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [i] = await F(e, ve, "readContract")({
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
    args: [R(gn(r))],
    blockNumber: t,
    blockTag: n
  });
  return i;
}
async function wf(e) {
  const t = fn(e, {
    method: "eth_newBlockFilter"
  }), n = await e.request({
    method: "eth_newBlockFilter"
  });
  return { id: n, request: t(n), type: "block" };
}
async function Qo(e, { address: t, args: n, event: r, events: s, fromBlock: o, strict: i, toBlock: a } = {}) {
  const c = s ?? (r ? [r] : void 0), u = fn(e, {
    method: "eth_newFilter"
  });
  let f = [];
  c && (f = [c.flatMap((p) => Gt({
    abi: [p],
    eventName: p.name,
    args: n
  }))], r && (f = f[0]));
  const d = await e.request({
    method: "eth_newFilter",
    params: [
      {
        address: t,
        fromBlock: typeof o == "bigint" ? C(o) : o,
        toBlock: typeof a == "bigint" ? C(a) : a,
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
async function ei(e) {
  const t = fn(e, {
    method: "eth_newPendingTransactionFilter"
  }), n = await e.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: n, request: t(n), type: "transaction" };
}
async function xf(e) {
  const t = await e.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(t);
}
async function vf(e, { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}) {
  const s = n !== void 0 ? C(n) : void 0;
  let o;
  return t ? o = await e.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [t]
  }, { dedupe: !0 }) : o = await e.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [s || r]
  }, { dedupe: !!s }), le(o);
}
async function xs(e, { address: t, blockNumber: n, blockTag: r = "latest" }) {
  const s = n !== void 0 ? C(n) : void 0, o = await e.request({
    method: "eth_getCode",
    params: [t, s || r]
  }, { dedupe: !!s });
  if (o !== "0x")
    return o;
}
function Ef(e) {
  var t;
  return {
    baseFeePerGas: e.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: e.gasUsedRatio,
    oldestBlock: BigInt(e.oldestBlock),
    reward: (t = e.reward) == null ? void 0 : t.map((n) => n.map((r) => BigInt(r)))
  };
}
async function Pf(e, { blockCount: t, blockNumber: n, blockTag: r = "latest", rewardPercentiles: s }) {
  const o = n ? C(n) : void 0, i = await e.request({
    method: "eth_feeHistory",
    params: [
      C(t),
      o || r,
      s
    ]
  }, { dedupe: !!o });
  return Ef(i);
}
async function Bf(e, { filter: t }) {
  const n = t.strict ?? !1, s = (await t.request({
    method: "eth_getFilterLogs",
    params: [t.id]
  })).map((o) => Te(o));
  return t.abi ? Sr({
    abi: t.abi,
    logs: s,
    strict: n
  }) : s;
}
class $f extends x {
  constructor({ callbackSelector: t, cause: n, data: r, extraData: s, sender: o, urls: i }) {
    var a;
    super(n.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: n,
      metaMessages: [
        ...n.metaMessages || [],
        (a = n.metaMessages) != null && a.length ? "" : [],
        "Offchain Gateway Call:",
        i && [
          "  Gateway URL(s):",
          ...i.map((c) => `    ${Dt(c)}`)
        ],
        `  Sender: ${o}`,
        `  Data: ${r}`,
        `  Callback selector: ${t}`,
        `  Extra data: ${s}`
      ].flat(),
      name: "OffchainLookupError"
    });
  }
}
class Af extends x {
  constructor({ result: t, url: n }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${Dt(n)}`,
        `Response: ${Z(t)}`
      ],
      name: "OffchainLookupResponseMalformedError"
    });
  }
}
class If extends x {
  constructor({ sender: t, to: n }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${n}`,
        `OffchainLookup sender address: ${t}`
      ],
      name: "OffchainLookupSenderMismatchError"
    });
  }
}
const Sf = "0x556f1830", ti = {
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
async function Tf(e, { blockNumber: t, blockTag: n, data: r, to: s }) {
  const { args: o } = lo({
    data: r,
    abi: [ti]
  }), [i, a, c, u, f] = o, { ccipRead: d } = e, l = d && typeof (d == null ? void 0 : d.request) == "function" ? d.request : ni;
  try {
    if (!pn(s, i))
      throw new If({ sender: i, to: s });
    const p = await l({ data: c, sender: i, urls: a }), { data: m } = await Ht(e, {
      blockNumber: t,
      blockTag: n,
      data: he([
        u,
        Ve([{ type: "bytes" }, { type: "bytes" }], [p, f])
      ]),
      to: s
    });
    return m;
  } catch (p) {
    throw new $f({
      callbackSelector: u,
      cause: p,
      data: r,
      extraData: f,
      sender: i,
      urls: a
    });
  }
}
async function ni({ data: e, sender: t, urls: n }) {
  var s;
  let r = new Error("An unknown error occurred.");
  for (let o = 0; o < n.length; o++) {
    const i = n[o], a = i.includes("{data}") ? "GET" : "POST", c = a === "POST" ? { data: e, sender: t } : void 0, u = a === "POST" ? { "Content-Type": "application/json" } : {};
    try {
      const f = await fetch(i.replace("{sender}", t).replace("{data}", e), {
        body: JSON.stringify(c),
        headers: u,
        method: a
      });
      let d;
      if ((s = f.headers.get("Content-Type")) != null && s.startsWith("application/json") ? d = (await f.json()).data : d = await f.text(), !f.ok) {
        r = new Le({
          body: c,
          details: d != null && d.error ? Z(d.error) : f.statusText,
          headers: f.headers,
          status: f.status,
          url: i
        });
        continue;
      }
      if (!ce(d)) {
        r = new Af({
          result: d,
          url: i
        });
        continue;
      }
      return d;
    } catch (f) {
      r = new Le({
        body: c,
        details: f.message,
        url: i
      });
    }
  }
  throw r;
}
const kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ccipRequest: ni,
  offchainLookup: Tf,
  offchainLookupAbiItem: ti,
  offchainLookupSignature: Sf
}, Symbol.toStringTag, { value: "Module" }));
function ll(e) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...e
  };
}
const Nf = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, Cf = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
class Ff extends x {
  constructor({ type: t }) {
    super(`Struct type "${t}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
}
function Of(e) {
  const { domain: t = {}, message: n, primaryType: r } = e, s = {
    EIP712Domain: jf({ domain: t }),
    ...e.types
  };
  Lf({
    domain: t,
    message: n,
    primaryType: r,
    types: s
  });
  const o = ["0x1901"];
  return t && o.push(Rf({
    domain: t,
    types: s
  })), r !== "EIP712Domain" && o.push(ri({
    data: n,
    primaryType: r,
    types: s
  })), q(he(o));
}
function Rf({ domain: e, types: t }) {
  return ri({
    data: e,
    primaryType: "EIP712Domain",
    types: t
  });
}
function ri({ data: e, primaryType: t, types: n }) {
  const r = si({
    data: e,
    primaryType: t,
    types: n
  });
  return q(r);
}
function si({ data: e, primaryType: t, types: n }) {
  const r = [{ type: "bytes32" }], s = [Mf({ primaryType: t, types: n })];
  for (const o of n[t]) {
    const [i, a] = ii({
      types: n,
      name: o.name,
      type: o.type,
      value: e[o.name]
    });
    r.push(i), s.push(a);
  }
  return Ve(r, s);
}
function Mf({ primaryType: e, types: t }) {
  const n = R(zf({ primaryType: e, types: t }));
  return q(n);
}
function zf({ primaryType: e, types: t }) {
  let n = "";
  const r = oi({ primaryType: e, types: t });
  r.delete(e);
  const s = [e, ...Array.from(r).sort()];
  for (const o of s)
    n += `${o}(${t[o].map(({ name: i, type: a }) => `${a} ${i}`).join(",")})`;
  return n;
}
function oi({ primaryType: e, types: t }, n = /* @__PURE__ */ new Set()) {
  const r = e.match(/^\w*/u), s = r == null ? void 0 : r[0];
  if (n.has(s) || t[s] === void 0)
    return n;
  n.add(s);
  for (const o of t[s])
    oi({ primaryType: o.type, types: t }, n);
  return n;
}
function ii({ types: e, name: t, type: n, value: r }) {
  if (e[n] !== void 0)
    return [
      { type: "bytes32" },
      q(si({ data: r, primaryType: n, types: e }))
    ];
  if (n === "bytes")
    return r = `0x${(r.length % 2 ? "0" : "") + r.slice(2)}`, [{ type: "bytes32" }, q(r)];
  if (n === "string")
    return [{ type: "bytes32" }, q(R(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const s = n.slice(0, n.lastIndexOf("[")), o = r.map((i) => ii({
      name: t,
      type: s,
      types: e,
      value: i
    }));
    return [
      { type: "bytes32" },
      q(Ve(o.map(([i]) => i), o.map(([, i]) => i)))
    ];
  }
  return [{ type: n }, r];
}
function Lf(e) {
  const { domain: t, message: n, primaryType: r, types: s } = e, o = (i, a) => {
    for (const c of i) {
      const { name: u, type: f } = c, d = a[u], l = f.match(Cf);
      if (l && (typeof d == "number" || typeof d == "bigint")) {
        const [b, h, y] = l;
        C(d, {
          signed: h === "int",
          size: Number.parseInt(y) / 8
        });
      }
      if (f === "address" && typeof d == "string" && !K(d))
        throw new X({ address: d });
      const p = f.match(Nf);
      if (p) {
        const [b, h] = p;
        if (h && _(d) !== Number.parseInt(h))
          throw new la({
            expectedSize: Number.parseInt(h),
            givenSize: _(d)
          });
      }
      const m = s[f];
      m && (_f(f), o(m, d));
    }
  };
  s.EIP712Domain && t && o(s.EIP712Domain, t), r !== "EIP712Domain" && o(s[r], n);
}
function jf({ domain: e }) {
  return [
    typeof (e == null ? void 0 : e.name) == "string" && { name: "name", type: "string" },
    (e == null ? void 0 : e.version) && { name: "version", type: "string" },
    typeof (e == null ? void 0 : e.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (e == null ? void 0 : e.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (e == null ? void 0 : e.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function _f(e) {
  if (e === "address" || e === "bool" || e === "string" || e.startsWith("bytes") || e.startsWith("uint") || e.startsWith("int"))
    throw new Ff({ type: e });
}
const Uf = {
  "0x0": "reverted",
  "0x1": "success"
};
function ai(e) {
  const t = {
    ...e,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((n) => Te(n)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? le(e.transactionIndex) : null,
    status: e.status ? Uf[e.status] : null,
    type: e.type ? To[e.type] || e.type : null
  };
  return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t;
}
const hl = /* @__PURE__ */ mr("transactionReceipt", ai), Gf = `Ethereum Signed Message:
`;
function Df(e) {
  const t = typeof e == "string" ? wt(e) : typeof e.raw == "string" ? e.raw : D(e.raw), n = wt(`${Gf}${_(t)}`);
  return he([n, t]);
}
function ci(e, t) {
  return q(Df(e), t);
}
const ui = "0x6492649264926492649264926492649264926492649264926492649264926492";
function Hf(e) {
  return io(e, -32) === ui;
}
function qf(e) {
  const { address: t, data: n, signature: r, to: s = "hex" } = e, o = Ee([
    Ve([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [t, n, r]),
    ui
  ]);
  return s === "hex" ? o : ue(o);
}
function Vf(e) {
  const { authorizationList: t } = e;
  if (t)
    for (const n of t) {
      const { contractAddress: r, chainId: s } = n;
      if (!K(r))
        throw new X({ address: r });
      if (s < 0)
        throw new bn({ chainId: s });
    }
  Or(e);
}
function Zf(e) {
  const { blobVersionedHashes: t } = e;
  if (t) {
    if (t.length === 0)
      throw new zo();
    for (const n of t) {
      const r = _(n), s = le(xt(n, 0, 1));
      if (r !== 32)
        throw new bu({ hash: n, size: r });
      if (s !== Mo)
        throw new yu({
          hash: n,
          version: s
        });
    }
  }
  Or(e);
}
function Or(e) {
  const { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: r, to: s } = e;
  if (t <= 0)
    throw new bn({ chainId: t });
  if (s && !K(s))
    throw new X({ address: s });
  if (r && r > hn)
    throw new He({ maxFeePerGas: r });
  if (n && r && n > r)
    throw new zt({ maxFeePerGas: r, maxPriorityFeePerGas: n });
}
function Wf(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = e;
  if (t <= 0)
    throw new bn({ chainId: t });
  if (o && !K(o))
    throw new X({ address: o });
  if (n || s)
    throw new x("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (r && r > hn)
    throw new He({ maxFeePerGas: r });
}
function Kf(e) {
  const { chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: s, to: o } = e;
  if (o && !K(o))
    throw new X({ address: o });
  if (typeof t < "u" && t <= 0)
    throw new bn({ chainId: t });
  if (n || s)
    throw new x("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (r && r > hn)
    throw new He({ maxFeePerGas: r });
}
function Yf(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (const n of e) {
    const { contractAddress: r, chainId: s, nonce: o, ...i } = n;
    t.push([
      s ? R(s) : "0x",
      r,
      o ? R(o) : "0x",
      ...Zt({}, i)
    ]);
  }
  return t;
}
function wn(e) {
  if (!e || e.length === 0)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const { address: r, storageKeys: s } = e[n];
    for (let o = 0; o < s.length; o++)
      if (s[o].length - 2 !== 64)
        throw new Rc({ storageKey: s[o] });
    if (!K(r, { strict: !1 }))
      throw new X({ address: r });
    t.push([r, s]);
  }
  return t;
}
function pl(e, t) {
  const n = jo(e);
  return n === "eip1559" ? Qf(e, t) : n === "eip2930" ? ed(e, t) : n === "eip4844" ? Xf(e, t) : n === "eip7702" ? Jf(e, t) : td(e, t);
}
function Jf(e, t) {
  const { authorizationList: n, chainId: r, gas: s, nonce: o, to: i, value: a, maxFeePerGas: c, maxPriorityFeePerGas: u, accessList: f, data: d } = e;
  Vf(e);
  const l = wn(f), p = Yf(n);
  return Ee([
    "0x04",
    De([
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
      ...Zt(e, t)
    ])
  ]);
}
function Xf(e, t) {
  const { chainId: n, gas: r, nonce: s, to: o, value: i, maxFeePerBlobGas: a, maxFeePerGas: c, maxPriorityFeePerGas: u, accessList: f, data: d } = e;
  Zf(e);
  let l = e.blobVersionedHashes, p = e.sidecars;
  if (e.blobs && (typeof l > "u" || typeof p > "u")) {
    const w = typeof e.blobs[0] == "string" ? e.blobs : e.blobs.map((P) => D(P)), v = e.kzg, S = Pr({
      blobs: w,
      kzg: v
    });
    if (typeof l > "u" && (l = Fo({
      commitments: S
    })), typeof p > "u") {
      const P = Br({ blobs: w, commitments: S, kzg: v });
      p = Lo({ blobs: w, commitments: S, proofs: P });
    }
  }
  const m = wn(f), b = [
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
    ...Zt(e, t)
  ], h = [], y = [], g = [];
  if (p)
    for (let w = 0; w < p.length; w++) {
      const { blob: v, commitment: S, proof: P } = p[w];
      h.push(v), y.push(S), g.push(P);
    }
  return Ee([
    "0x03",
    // If sidecars are enabled, envelope turns into a "wrapper":
    De(p ? [b, h, y, g] : b)
  ]);
}
function Qf(e, t) {
  const { chainId: n, gas: r, nonce: s, to: o, value: i, maxFeePerGas: a, maxPriorityFeePerGas: c, accessList: u, data: f } = e;
  Or(e);
  const d = wn(u), l = [
    R(n),
    s ? R(s) : "0x",
    c ? R(c) : "0x",
    a ? R(a) : "0x",
    r ? R(r) : "0x",
    o ?? "0x",
    i ? R(i) : "0x",
    f ?? "0x",
    d,
    ...Zt(e, t)
  ];
  return Ee([
    "0x02",
    De(l)
  ]);
}
function ed(e, t) {
  const { chainId: n, gas: r, data: s, nonce: o, to: i, value: a, accessList: c, gasPrice: u } = e;
  Wf(e);
  const f = wn(c), d = [
    R(n),
    o ? R(o) : "0x",
    u ? R(u) : "0x",
    r ? R(r) : "0x",
    i ?? "0x",
    a ? R(a) : "0x",
    s ?? "0x",
    f,
    ...Zt(e, t)
  ];
  return Ee([
    "0x01",
    De(d)
  ]);
}
function td(e, t) {
  const { chainId: n = 0, gas: r, data: s, nonce: o, to: i, value: a, gasPrice: c } = e;
  Kf(e);
  let u = [
    o ? R(o) : "0x",
    c ? R(c) : "0x",
    r ? R(r) : "0x",
    i ?? "0x",
    a ? R(a) : "0x",
    s ?? "0x"
  ];
  if (t) {
    const f = (() => {
      if (t.v >= 35n)
        return (t.v - 35n) / 2n > 0 ? t.v : 27n + (t.v === 35n ? 0n : 1n);
      if (n > 0)
        return BigInt(n * 2) + BigInt(35n + t.v - 27n);
      const p = 27n + (t.v === 27n ? 0n : 1n);
      if (t.v !== p)
        throw new Fc({ v: t.v });
      return p;
    })(), d = ie(t.r), l = ie(t.s);
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
  return De(u);
}
function Zt(e, t) {
  const n = t ?? e, { v: r, yParity: s } = n;
  if (typeof n.r > "u")
    return [];
  if (typeof n.s > "u")
    return [];
  if (typeof r > "u" && typeof s > "u")
    return [];
  const o = ie(n.r), i = ie(n.s);
  return [typeof s == "number" ? s ? R(1) : "0x" : r === 0n ? "0x" : r === 1n ? R(1) : r === 27n ? "0x" : R(1), o === "0x00" ? "0x" : o, i === "0x00" ? "0x" : i];
}
class nd extends x {
  constructor({ value: t }) {
    super(`Number \`${t}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError"
    });
  }
}
function rd(e, t) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))
    throw new nd({ value: e });
  let [n, r = "0"] = e.split(".");
  const s = n.startsWith("-");
  if (s && (n = n.slice(1)), r = r.replace(/(0+)$/, ""), t === 0)
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), r = "";
  else if (r.length > t) {
    const [o, i, a] = [
      r.slice(0, t - 1),
      r.slice(t - 1, t),
      r.slice(t)
    ], c = Math.round(+`${i}.${a}`);
    c > 9 ? r = `${BigInt(o) + BigInt(1)}0`.padStart(o.length + 1, "0") : r = `${o}${c}`, r.length > t && (r = r.slice(1), n = `${BigInt(n) + 1n}`), r = r.slice(0, t);
  } else
    r = r.padEnd(t, "0");
  return BigInt(`${s ? "-" : ""}${n}${r}`);
}
function bl(e, t = "wei") {
  return rd(e, po[t]);
}
function sd(e) {
  return e.map((t) => ({
    ...t,
    value: BigInt(t.value)
  }));
}
function od(e) {
  return {
    ...e,
    balance: e.balance ? BigInt(e.balance) : void 0,
    nonce: e.nonce ? le(e.nonce) : void 0,
    storageProof: e.storageProof ? sd(e.storageProof) : void 0
  };
}
async function id(e, { address: t, blockNumber: n, blockTag: r, storageKeys: s }) {
  const o = r ?? "latest", i = n !== void 0 ? C(n) : void 0, a = await e.request({
    method: "eth_getProof",
    params: [t, s, i || o]
  });
  return od(a);
}
async function ad(e, { address: t, blockNumber: n, blockTag: r = "latest", slot: s }) {
  const o = n !== void 0 ? C(n) : void 0;
  return await e.request({
    method: "eth_getStorageAt",
    params: [t, s, o || r]
  });
}
async function Rr(e, { blockHash: t, blockNumber: n, blockTag: r, hash: s, index: o }) {
  var f, d, l;
  const i = r || "latest", a = n !== void 0 ? C(n) : void 0;
  let c = null;
  if (s ? c = await e.request({
    method: "eth_getTransactionByHash",
    params: [s]
  }, { dedupe: !0 }) : t ? c = await e.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [t, C(o)]
  }, { dedupe: !0 }) : (a || i) && (c = await e.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [a || i, C(o)]
  }, { dedupe: !!a })), !c)
    throw new mo({
      blockHash: t,
      blockNumber: n,
      blockTag: i,
      hash: s,
      index: o
    });
  return (((l = (d = (f = e.chain) == null ? void 0 : f.formatters) == null ? void 0 : d.transaction) == null ? void 0 : l.format) || xr)(c);
}
async function cd(e, { hash: t, transactionReceipt: n }) {
  const [r, s] = await Promise.all([
    F(e, Vt, "getBlockNumber")({}),
    t ? F(e, Rr, "getTransaction")({ hash: t }) : void 0
  ]), o = (n == null ? void 0 : n.blockNumber) || (s == null ? void 0 : s.blockNumber);
  return o ? r - o + 1n : 0n;
}
async function tr(e, { hash: t }) {
  var s, o, i;
  const n = await e.request({
    method: "eth_getTransactionReceipt",
    params: [t]
  }, { dedupe: !0 });
  if (!n)
    throw new go({ hash: t });
  return (((i = (o = (s = e.chain) == null ? void 0 : s.formatters) == null ? void 0 : o.transactionReceipt) == null ? void 0 : i.format) || ai)(n);
}
async function ud(e, t) {
  var h;
  const { allowFailure: n = !0, batchSize: r, blockNumber: s, blockTag: o, multicallAddress: i, stateOverride: a } = t, c = t.contracts, u = r ?? (typeof ((h = e.batch) == null ? void 0 : h.multicall) == "object" && e.batch.multicall.batchSize || 1024);
  let f = i;
  if (!f) {
    if (!e.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    f = dt({
      blockNumber: s,
      chain: e.chain,
      contract: "multicall3"
    });
  }
  const d = [[]];
  let l = 0, p = 0;
  for (let y = 0; y < c.length; y++) {
    const { abi: g, address: w, args: v, functionName: S } = c[y];
    try {
      const P = Fe({ abi: g, args: v, functionName: S });
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
      const E = Mt(P, {
        abi: g,
        address: w,
        args: v,
        docsPath: "/docs/contract/multicall",
        functionName: S
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
  const m = await Promise.allSettled(d.map((y) => F(e, ve, "readContract")({
    abi: Yn,
    address: f,
    args: [y],
    blockNumber: s,
    blockTag: o,
    functionName: "aggregate3",
    stateOverride: a
  }))), b = [];
  for (let y = 0; y < m.length; y++) {
    const g = m[y];
    if (g.status === "rejected") {
      if (!n)
        throw g.reason;
      for (let v = 0; v < d[y].length; v++)
        b.push({
          status: "failure",
          error: g.reason,
          result: void 0
        });
      continue;
    }
    const w = g.value;
    for (let v = 0; v < w.length; v++) {
      const { returnData: S, success: P } = w[v], { callData: E } = d[y][v], { abi: B, address: $, functionName: z, args: N } = c[b.length];
      try {
        if (E === "0x")
          throw new sn();
        if (!P)
          throw new br({ data: S });
        const O = ft({
          abi: B,
          args: N,
          data: S,
          functionName: z
        });
        b.push(n ? { result: O, status: "success" } : O);
      } catch (O) {
        const L = Mt(O, {
          abi: B,
          address: $,
          args: N,
          docsPath: "/docs/contract/multicall",
          functionName: z
        });
        if (!n)
          throw L;
        b.push({ error: L, result: void 0, status: "failure" });
      }
    }
  }
  if (b.length !== c.length)
    throw new x("multicall results mismatch");
  return b;
}
class fi extends ar {
  constructor(t, n) {
    super(), this.finished = !1, this.destroyed = !1, ka(t);
    const r = an(n);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const s = this.blockLen, o = new Uint8Array(s);
    o.set(r.length > s ? t.create().update(r).digest() : r);
    for (let i = 0; i < o.length; i++)
      o[i] ^= 54;
    this.iHash.update(o), this.oHash = t.create();
    for (let i = 0; i < o.length; i++)
      o[i] ^= 106;
    this.oHash.update(o), o.fill(0);
  }
  update(t) {
    return tt(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    tt(this), _t(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: s, destroyed: o, blockLen: i, outputLen: a } = this;
    return t = t, t.finished = s, t.destroyed = o, t.blockLen = i, t.outputLen = a, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const di = (e, t, n) => new fi(e, t).update(n).digest();
di.create = (e, t) => new fi(e, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Mr = /* @__PURE__ */ BigInt(0), xn = /* @__PURE__ */ BigInt(1), fd = /* @__PURE__ */ BigInt(2);
function qe(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Wt(e) {
  if (!qe(e))
    throw new Error("Uint8Array expected");
}
function rt(e, t) {
  if (typeof t != "boolean")
    throw new Error(`${e} must be valid boolean, got "${t}".`);
}
const dd = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function st(e) {
  Wt(e);
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += dd[e[n]];
  return t;
}
function Xe(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function zr(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
const be = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function vs(e) {
  if (e >= be._0 && e <= be._9)
    return e - be._0;
  if (e >= be._A && e <= be._F)
    return e - (be._A - 10);
  if (e >= be._a && e <= be._f)
    return e - (be._a - 10);
}
function ot(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  const t = e.length, n = t / 2;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(n);
  for (let s = 0, o = 0; s < n; s++, o += 2) {
    const i = vs(e.charCodeAt(o)), a = vs(e.charCodeAt(o + 1));
    if (i === void 0 || a === void 0) {
      const c = e[o] + e[o + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + o);
    }
    r[s] = i * 16 + a;
  }
  return r;
}
function je(e) {
  return zr(st(e));
}
function Lr(e) {
  return Wt(e), zr(st(Uint8Array.from(e).reverse()));
}
function it(e, t) {
  return ot(e.toString(16).padStart(t * 2, "0"));
}
function jr(e, t) {
  return it(e, t).reverse();
}
function ld(e) {
  return ot(Xe(e));
}
function se(e, t, n) {
  let r;
  if (typeof t == "string")
    try {
      r = ot(t);
    } catch (o) {
      throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${o}`);
    }
  else if (qe(t))
    r = Uint8Array.from(t);
  else
    throw new Error(`${e} must be hex string or Uint8Array`);
  const s = r.length;
  if (typeof n == "number" && s !== n)
    throw new Error(`${e} expected ${n} bytes, got ${s}`);
  return r;
}
function Lt(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    Wt(s), t += s.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, s = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, s), s += o.length;
  }
  return n;
}
function hd(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    n |= e[r] ^ t[r];
  return n === 0;
}
function pd(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
const Nn = (e) => typeof e == "bigint" && Mr <= e;
function vn(e, t, n) {
  return Nn(e) && Nn(t) && Nn(n) && t <= e && e < n;
}
function _e(e, t, n, r) {
  if (!vn(t, n, r))
    throw new Error(`expected valid ${e}: ${n} <= n < ${r}, got ${typeof t} ${t}`);
}
function li(e) {
  let t;
  for (t = 0; e > Mr; e >>= xn, t += 1)
    ;
  return t;
}
function bd(e, t) {
  return e >> BigInt(t) & xn;
}
function yd(e, t, n) {
  return e | (n ? xn : Mr) << BigInt(t);
}
const _r = (e) => (fd << BigInt(e - 1)) - xn, Cn = (e) => new Uint8Array(e), Es = (e) => Uint8Array.from(e);
function hi(e, t, n) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Cn(e), s = Cn(e), o = 0;
  const i = () => {
    r.fill(1), s.fill(0), o = 0;
  }, a = (...d) => n(s, r, ...d), c = (d = Cn()) => {
    s = a(Es([0]), d), r = a(), d.length !== 0 && (s = a(Es([1]), d), r = a());
  }, u = () => {
    if (o++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const l = [];
    for (; d < t; ) {
      r = a();
      const p = r.slice();
      l.push(p), d += r.length;
    }
    return Lt(...l);
  };
  return (d, l) => {
    i(), c(d);
    let p;
    for (; !(p = l(u())); )
      c();
    return i(), p;
  };
}
const md = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  stringOrUint8Array: (e) => typeof e == "string" || qe(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function Kt(e, t, n = {}) {
  const r = (s, o, i) => {
    const a = md[o];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${o}", expected function`);
    const c = e[s];
    if (!(i && c === void 0) && !a(c, e))
      throw new Error(`Invalid param ${String(s)}=${c} (${typeof c}), expected ${o}`);
  };
  for (const [s, o] of Object.entries(t))
    r(s, o, !1);
  for (const [s, o] of Object.entries(n))
    r(s, o, !0);
  return e;
}
const gd = () => {
  throw new Error("not implemented");
};
function nr(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, ...r) => {
    const s = t.get(n);
    if (s !== void 0)
      return s;
    const o = e(n, ...r);
    return t.set(n, o), o;
  };
}
const wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aInRange: _e,
  abool: rt,
  abytes: Wt,
  bitGet: bd,
  bitLen: li,
  bitMask: _r,
  bitSet: yd,
  bytesToHex: st,
  bytesToNumberBE: je,
  bytesToNumberLE: Lr,
  concatBytes: Lt,
  createHmacDrbg: hi,
  ensureBytes: se,
  equalBytes: hd,
  hexToBytes: ot,
  hexToNumber: zr,
  inRange: vn,
  isBytes: qe,
  memoized: nr,
  notImplemented: gd,
  numberToBytesBE: it,
  numberToBytesLE: jr,
  numberToHexUnpadded: Xe,
  numberToVarBytesBE: ld,
  utf8ToBytes: pd,
  validateObject: Kt
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const V = BigInt(0), G = BigInt(1), Me = BigInt(2), xd = BigInt(3), rr = BigInt(4), Ps = BigInt(5), Bs = BigInt(8);
BigInt(9);
BigInt(16);
function Y(e, t) {
  const n = e % t;
  return n >= V ? n : t + n;
}
function vd(e, t, n) {
  if (n <= V || t < V)
    throw new Error("Expected power/modulo > 0");
  if (n === G)
    return V;
  let r = G;
  for (; t > V; )
    t & G && (r = r * e % n), e = e * e % n, t >>= G;
  return r;
}
function ee(e, t, n) {
  let r = e;
  for (; t-- > V; )
    r *= r, r %= n;
  return r;
}
function sr(e, t) {
  if (e === V || t <= V)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let n = Y(e, t), r = t, s = V, o = G;
  for (; n !== V; ) {
    const a = r / n, c = r % n, u = s - o * a;
    r = n, n = c, s = o, o = u;
  }
  if (r !== G)
    throw new Error("invert: does not exist");
  return Y(s, t);
}
function Ed(e) {
  const t = (e - G) / Me;
  let n, r, s;
  for (n = e - G, r = 0; n % Me === V; n /= Me, r++)
    ;
  for (s = Me; s < e && vd(s, t, e) !== e - G; s++)
    ;
  if (r === 1) {
    const i = (e + G) / rr;
    return function(c, u) {
      const f = c.pow(u, i);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const o = (n + G) / Me;
  return function(a, c) {
    if (a.pow(c, t) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = r, f = a.pow(a.mul(a.ONE, s), n), d = a.pow(c, o), l = a.pow(c, n);
    for (; !a.eql(l, a.ONE); ) {
      if (a.eql(l, a.ZERO))
        return a.ZERO;
      let p = 1;
      for (let b = a.sqr(l); p < u && !a.eql(b, a.ONE); p++)
        b = a.sqr(b);
      const m = a.pow(f, G << BigInt(u - p - 1));
      f = a.sqr(m), d = a.mul(d, m), l = a.mul(l, f), u = p;
    }
    return d;
  };
}
function Pd(e) {
  if (e % rr === xd) {
    const t = (e + G) / rr;
    return function(r, s) {
      const o = r.pow(s, t);
      if (!r.eql(r.sqr(o), s))
        throw new Error("Cannot find square root");
      return o;
    };
  }
  if (e % Bs === Ps) {
    const t = (e - Ps) / Bs;
    return function(r, s) {
      const o = r.mul(s, Me), i = r.pow(o, t), a = r.mul(s, i), c = r.mul(r.mul(a, Me), i), u = r.mul(a, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(u), s))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return Ed(e);
}
const Bd = [
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
function $d(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = Bd.reduce((r, s) => (r[s] = "function", r), t);
  return Kt(e, n);
}
function Ad(e, t, n) {
  if (n < V)
    throw new Error("Expected power > 0");
  if (n === V)
    return e.ONE;
  if (n === G)
    return t;
  let r = e.ONE, s = t;
  for (; n > V; )
    n & G && (r = e.mul(r, s)), s = e.sqr(s), n >>= G;
  return r;
}
function Id(e, t) {
  const n = new Array(t.length), r = t.reduce((o, i, a) => e.is0(i) ? o : (n[a] = o, e.mul(o, i)), e.ONE), s = e.inv(r);
  return t.reduceRight((o, i, a) => e.is0(i) ? o : (n[a] = e.mul(o, n[a]), e.mul(o, i)), s), n;
}
function pi(e, t) {
  const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function bi(e, t, n = !1, r = {}) {
  if (e <= V)
    throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: s, nByteLength: o } = pi(e, t);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const i = Pd(e), a = Object.freeze({
    ORDER: e,
    BITS: s,
    BYTES: o,
    MASK: _r(s),
    ZERO: V,
    ONE: G,
    create: (c) => Y(c, e),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return V <= c && c < e;
    },
    is0: (c) => c === V,
    isOdd: (c) => (c & G) === G,
    neg: (c) => Y(-c, e),
    eql: (c, u) => c === u,
    sqr: (c) => Y(c * c, e),
    add: (c, u) => Y(c + u, e),
    sub: (c, u) => Y(c - u, e),
    mul: (c, u) => Y(c * u, e),
    pow: (c, u) => Ad(a, c, u),
    div: (c, u) => Y(c * sr(u, e), e),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => sr(c, e),
    sqrt: r.sqrt || ((c) => i(a, c)),
    invertBatch: (c) => Id(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => n ? jr(c, o) : it(c, o),
    fromBytes: (c) => {
      if (c.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${c.length}`);
      return n ? Lr(c) : je(c);
    }
  });
  return Object.freeze(a);
}
function yi(e) {
  if (typeof e != "bigint")
    throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function mi(e) {
  const t = yi(e);
  return t + Math.ceil(t / 2);
}
function Sd(e, t, n = !1) {
  const r = e.length, s = yi(t), o = mi(t);
  if (r < 16 || r < o || r > 1024)
    throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
  const i = n ? je(e) : Lr(e), a = Y(i, t - G) + G;
  return n ? jr(a, s) : it(a, s);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Td = BigInt(0), Fn = BigInt(1), On = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap();
function kd(e, t) {
  const n = (o, i) => {
    const a = i.negate();
    return o ? a : i;
  }, r = (o) => {
    if (!Number.isSafeInteger(o) || o <= 0 || o > t)
      throw new Error(`Wrong window size=${o}, should be [1..${t}]`);
  }, s = (o) => {
    r(o);
    const i = Math.ceil(t / o) + 1, a = 2 ** (o - 1);
    return { windows: i, windowSize: a };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(o, i) {
      let a = e.ZERO, c = o;
      for (; i > Td; )
        i & Fn && (a = a.add(c)), c = c.double(), i >>= Fn;
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
      let f = e.ZERO, d = e.BASE;
      const l = BigInt(2 ** o - 1), p = 2 ** o, m = BigInt(o);
      for (let b = 0; b < c; b++) {
        const h = b * u;
        let y = Number(a & l);
        a >>= m, y > u && (y -= p, a += Fn);
        const g = h, w = h + Math.abs(y) - 1, v = b % 2 !== 0, S = y < 0;
        y === 0 ? d = d.add(n(v, i[g])) : f = f.add(n(S, i[w]));
      }
      return { p: f, f: d };
    },
    wNAFCached(o, i, a) {
      const c = $s.get(o) || 1;
      let u = On.get(o);
      return u || (u = this.precomputeWindow(o, c), c !== 1 && On.set(o, a(u))), this.wNAF(c, u, i);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(o, i) {
      r(i), $s.set(o, i), On.delete(o);
    }
  };
}
function Nd(e, t, n, r) {
  if (!Array.isArray(n) || !Array.isArray(r) || r.length !== n.length)
    throw new Error("arrays of points and scalars must have equal length");
  r.forEach((f, d) => {
    if (!t.isValid(f))
      throw new Error(`wrong scalar at index ${d}`);
  }), n.forEach((f, d) => {
    if (!(f instanceof e))
      throw new Error(`wrong point at index ${d}`);
  });
  const s = li(BigInt(n.length)), o = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1, i = (1 << o) - 1, a = new Array(i + 1).fill(e.ZERO), c = Math.floor((t.BITS - 1) / o) * o;
  let u = e.ZERO;
  for (let f = c; f >= 0; f -= o) {
    a.fill(e.ZERO);
    for (let l = 0; l < r.length; l++) {
      const p = r[l], m = Number(p >> BigInt(f) & BigInt(i));
      a[m] = a[m].add(n[l]);
    }
    let d = e.ZERO;
    for (let l = a.length - 1, p = e.ZERO; l > 0; l--)
      p = p.add(a[l]), d = d.add(p);
    if (u = u.add(d), f !== 0)
      for (let l = 0; l < o; l++)
        u = u.double();
  }
  return u;
}
function gi(e) {
  return $d(e.Fp), Kt(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...pi(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function As(e) {
  e.lowS !== void 0 && rt("lowS", e.lowS), e.prehash !== void 0 && rt("prehash", e.prehash);
}
function Cd(e) {
  const t = gi(e);
  Kt(t, {
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
  const { endo: n, Fp: r, a: s } = t;
  if (n) {
    if (!r.eql(s, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: Fd, hexToBytes: Od } = wd, ye = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (e, t) => {
      const { Err: n } = ye;
      if (e < 0 || e > 256)
        throw new n("tlv.encode: wrong tag");
      if (t.length & 1)
        throw new n("tlv.encode: unpadded data");
      const r = t.length / 2, s = Xe(r);
      if (s.length / 2 & 128)
        throw new n("tlv.encode: long form length too big");
      const o = r > 127 ? Xe(s.length / 2 | 128) : "";
      return `${Xe(e)}${o}${s}${t}`;
    },
    // v - value, l - left bytes (unparsed)
    decode(e, t) {
      const { Err: n } = ye;
      let r = 0;
      if (e < 0 || e > 256)
        throw new n("tlv.encode: wrong tag");
      if (t.length < 2 || t[r++] !== e)
        throw new n("tlv.decode: wrong tlv");
      const s = t[r++], o = !!(s & 128);
      let i = 0;
      if (!o)
        i = s;
      else {
        const c = s & 127;
        if (!c)
          throw new n("tlv.decode(long): indefinite length not supported");
        if (c > 4)
          throw new n("tlv.decode(long): byte length is too big");
        const u = t.subarray(r, r + c);
        if (u.length !== c)
          throw new n("tlv.decode: length bytes not complete");
        if (u[0] === 0)
          throw new n("tlv.decode(long): zero leftmost byte");
        for (const f of u)
          i = i << 8 | f;
        if (r += c, i < 128)
          throw new n("tlv.decode(long): not minimal encoding");
      }
      const a = t.subarray(r, r + i);
      if (a.length !== i)
        throw new n("tlv.decode: wrong value length");
      return { v: a, l: t.subarray(r + i) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(e) {
      const { Err: t } = ye;
      if (e < me)
        throw new t("integer: negative integers are not allowed");
      let n = Xe(e);
      if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1)
        throw new t("unexpected assertion");
      return n;
    },
    decode(e) {
      const { Err: t } = ye;
      if (e[0] & 128)
        throw new t("Invalid signature integer: negative");
      if (e[0] === 0 && !(e[1] & 128))
        throw new t("Invalid signature integer: unnecessary leading zero");
      return Fd(e);
    }
  },
  toSig(e) {
    const { Err: t, _int: n, _tlv: r } = ye, s = typeof e == "string" ? Od(e) : e;
    Wt(s);
    const { v: o, l: i } = r.decode(48, s);
    if (i.length)
      throw new t("Invalid signature: left bytes after parsing");
    const { v: a, l: c } = r.decode(2, o), { v: u, l: f } = r.decode(2, c);
    if (f.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: n.decode(a), s: n.decode(u) };
  },
  hexFromSig(e) {
    const { _tlv: t, _int: n } = ye, r = `${t.encode(2, n.encode(e.r))}${t.encode(2, n.encode(e.s))}`;
    return t.encode(48, r);
  }
}, me = BigInt(0), H = BigInt(1);
BigInt(2);
const Is = BigInt(3);
BigInt(4);
function Rd(e) {
  const t = Cd(e), { Fp: n } = t, r = bi(t.n, t.nBitLength), s = t.toBytes || ((b, h, y) => {
    const g = h.toAffine();
    return Lt(Uint8Array.from([4]), n.toBytes(g.x), n.toBytes(g.y));
  }), o = t.fromBytes || ((b) => {
    const h = b.subarray(1), y = n.fromBytes(h.subarray(0, n.BYTES)), g = n.fromBytes(h.subarray(n.BYTES, 2 * n.BYTES));
    return { x: y, y: g };
  });
  function i(b) {
    const { a: h, b: y } = t, g = n.sqr(b), w = n.mul(g, b);
    return n.add(n.add(w, n.mul(b, h)), y);
  }
  if (!n.eql(n.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(b) {
    return vn(b, H, t.n);
  }
  function c(b) {
    const { allowedPrivateKeyLengths: h, nByteLength: y, wrapPrivateKey: g, n: w } = t;
    if (h && typeof b != "bigint") {
      if (qe(b) && (b = st(b)), typeof b != "string" || !h.includes(b.length))
        throw new Error("Invalid key");
      b = b.padStart(y * 2, "0");
    }
    let v;
    try {
      v = typeof b == "bigint" ? b : je(se("private key", b, y));
    } catch {
      throw new Error(`private key must be ${y} bytes, hex or bigint, not ${typeof b}`);
    }
    return g && (v = Y(v, w)), _e("private key", v, H, w), v;
  }
  function u(b) {
    if (!(b instanceof l))
      throw new Error("ProjectivePoint expected");
  }
  const f = nr((b, h) => {
    const { px: y, py: g, pz: w } = b;
    if (n.eql(w, n.ONE))
      return { x: y, y: g };
    const v = b.is0();
    h == null && (h = v ? n.ONE : n.inv(w));
    const S = n.mul(y, h), P = n.mul(g, h), E = n.mul(w, h);
    if (v)
      return { x: n.ZERO, y: n.ZERO };
    if (!n.eql(E, n.ONE))
      throw new Error("invZ was invalid");
    return { x: S, y: P };
  }), d = nr((b) => {
    if (b.is0()) {
      if (t.allowInfinityPoint && !n.is0(b.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: h, y } = b.toAffine();
    if (!n.isValid(h) || !n.isValid(y))
      throw new Error("bad point: x or y not FE");
    const g = n.sqr(y), w = i(h);
    if (!n.eql(g, w))
      throw new Error("bad point: equation left != right");
    if (!b.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class l {
    constructor(h, y, g) {
      if (this.px = h, this.py = y, this.pz = g, h == null || !n.isValid(h))
        throw new Error("x required");
      if (y == null || !n.isValid(y))
        throw new Error("y required");
      if (g == null || !n.isValid(g))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(h) {
      const { x: y, y: g } = h || {};
      if (!h || !n.isValid(y) || !n.isValid(g))
        throw new Error("invalid affine point");
      if (h instanceof l)
        throw new Error("projective point not allowed");
      const w = (v) => n.eql(v, n.ZERO);
      return w(y) && w(g) ? l.ZERO : new l(y, g, n.ONE);
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
      const y = n.invertBatch(h.map((g) => g.pz));
      return h.map((g, w) => g.toAffine(y[w])).map(l.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(h) {
      const y = l.fromAffine(o(se("pointHex", h)));
      return y.assertValidity(), y;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(h) {
      return l.BASE.multiply(c(h));
    }
    // Multiscalar Multiplication
    static msm(h, y) {
      return Nd(l, r, h, y);
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
      const { px: y, py: g, pz: w } = this, { px: v, py: S, pz: P } = h, E = n.eql(n.mul(y, P), n.mul(v, w)), B = n.eql(n.mul(g, P), n.mul(S, w));
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
      const { a: h, b: y } = t, g = n.mul(y, Is), { px: w, py: v, pz: S } = this;
      let P = n.ZERO, E = n.ZERO, B = n.ZERO, $ = n.mul(w, w), z = n.mul(v, v), N = n.mul(S, S), O = n.mul(w, v);
      return O = n.add(O, O), B = n.mul(w, S), B = n.add(B, B), P = n.mul(h, B), E = n.mul(g, N), E = n.add(P, E), P = n.sub(z, E), E = n.add(z, E), E = n.mul(P, E), P = n.mul(O, P), B = n.mul(g, B), N = n.mul(h, N), O = n.sub($, N), O = n.mul(h, O), O = n.add(O, B), B = n.add($, $), $ = n.add(B, $), $ = n.add($, N), $ = n.mul($, O), E = n.add(E, $), N = n.mul(v, S), N = n.add(N, N), $ = n.mul(N, O), P = n.sub(P, $), B = n.mul(N, z), B = n.add(B, B), B = n.add(B, B), new l(P, E, B);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(h) {
      u(h);
      const { px: y, py: g, pz: w } = this, { px: v, py: S, pz: P } = h;
      let E = n.ZERO, B = n.ZERO, $ = n.ZERO;
      const z = t.a, N = n.mul(t.b, Is);
      let O = n.mul(y, v), L = n.mul(g, S), A = n.mul(w, P), T = n.add(y, g), I = n.add(v, S);
      T = n.mul(T, I), I = n.add(O, L), T = n.sub(T, I), I = n.add(y, w);
      let k = n.add(v, P);
      return I = n.mul(I, k), k = n.add(O, A), I = n.sub(I, k), k = n.add(g, w), E = n.add(S, P), k = n.mul(k, E), E = n.add(L, A), k = n.sub(k, E), $ = n.mul(z, I), E = n.mul(N, A), $ = n.add(E, $), E = n.sub(L, $), $ = n.add(L, $), B = n.mul(E, $), L = n.add(O, O), L = n.add(L, O), A = n.mul(z, A), I = n.mul(N, I), L = n.add(L, A), A = n.sub(O, A), A = n.mul(z, A), I = n.add(I, A), O = n.mul(L, I), B = n.add(B, O), O = n.mul(k, I), E = n.mul(T, E), E = n.sub(E, O), O = n.mul(T, L), $ = n.mul(k, $), $ = n.add($, O), new l(E, B, $);
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
      _e("scalar", h, me, t.n);
      const y = l.ZERO;
      if (h === me)
        return y;
      if (h === H)
        return this;
      const { endo: g } = t;
      if (!g)
        return m.unsafeLadder(this, h);
      let { k1neg: w, k1: v, k2neg: S, k2: P } = g.splitScalar(h), E = y, B = y, $ = this;
      for (; v > me || P > me; )
        v & H && (E = E.add($)), P & H && (B = B.add($)), $ = $.double(), v >>= H, P >>= H;
      return w && (E = E.negate()), S && (B = B.negate()), B = new l(n.mul(B.px, g.beta), B.py, B.pz), E.add(B);
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
      const { endo: y, n: g } = t;
      _e("scalar", h, H, g);
      let w, v;
      if (y) {
        const { k1neg: S, k1: P, k2neg: E, k2: B } = y.splitScalar(h);
        let { p: $, f: z } = this.wNAF(P), { p: N, f: O } = this.wNAF(B);
        $ = m.constTimeNegate(S, $), N = m.constTimeNegate(E, N), N = new l(n.mul(N.px, y.beta), N.py, N.pz), w = $.add(N), v = z.add(O);
      } else {
        const { p: S, f: P } = this.wNAF(h);
        w = S, v = P;
      }
      return l.normalizeZ([w, v])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(h, y, g) {
      const w = l.BASE, v = (P, E) => E === me || E === H || !P.equals(w) ? P.multiplyUnsafe(E) : P.multiply(E), S = v(this, y).add(v(h, g));
      return S.is0() ? void 0 : S;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(h) {
      return f(this, h);
    }
    isTorsionFree() {
      const { h, isTorsionFree: y } = t;
      if (h === H)
        return !0;
      if (y)
        return y(l, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h, clearCofactor: y } = t;
      return h === H ? this : y ? y(l, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(h = !0) {
      return rt("isCompressed", h), this.assertValidity(), s(l, this, h);
    }
    toHex(h = !0) {
      return rt("isCompressed", h), st(this.toRawBytes(h));
    }
  }
  l.BASE = new l(t.Gx, t.Gy, n.ONE), l.ZERO = new l(n.ZERO, n.ONE, n.ZERO);
  const p = t.nBitLength, m = kd(l, t.endo ? Math.ceil(p / 2) : p);
  return {
    CURVE: t,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: i,
    isWithinCurveOrder: a
  };
}
function Md(e) {
  const t = gi(e);
  return Kt(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function zd(e) {
  const t = Md(e), { Fp: n, n: r } = t, s = n.BYTES + 1, o = 2 * n.BYTES + 1;
  function i(A) {
    return Y(A, r);
  }
  function a(A) {
    return sr(A, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: u, weierstrassEquation: f, isWithinCurveOrder: d } = Rd({
    ...t,
    toBytes(A, T, I) {
      const k = T.toAffine(), M = n.toBytes(k.x), j = Lt;
      return rt("isCompressed", I), I ? j(Uint8Array.from([T.hasEvenY() ? 2 : 3]), M) : j(Uint8Array.from([4]), M, n.toBytes(k.y));
    },
    fromBytes(A) {
      const T = A.length, I = A[0], k = A.subarray(1);
      if (T === s && (I === 2 || I === 3)) {
        const M = je(k);
        if (!vn(M, H, n.ORDER))
          throw new Error("Point is not on curve");
        const j = f(M);
        let U;
        try {
          U = n.sqrt(j);
        } catch (ne) {
          const Pe = ne instanceof Error ? ": " + ne.message : "";
          throw new Error("Point is not on curve" + Pe);
        }
        const W = (U & H) === H;
        return (I & 1) === 1 !== W && (U = n.neg(U)), { x: M, y: U };
      } else if (T === o && I === 4) {
        const M = n.fromBytes(k.subarray(0, n.BYTES)), j = n.fromBytes(k.subarray(n.BYTES, 2 * n.BYTES));
        return { x: M, y: j };
      } else
        throw new Error(`Point of length ${T} was invalid. Expected ${s} compressed bytes or ${o} uncompressed bytes`);
    }
  }), l = (A) => st(it(A, t.nByteLength));
  function p(A) {
    const T = r >> H;
    return A > T;
  }
  function m(A) {
    return p(A) ? i(-A) : A;
  }
  const b = (A, T, I) => je(A.slice(T, I));
  class h {
    constructor(T, I, k) {
      this.r = T, this.s = I, this.recovery = k, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(T) {
      const I = t.nByteLength;
      return T = se("compactSignature", T, I * 2), new h(b(T, 0, I), b(T, I, 2 * I));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(T) {
      const { r: I, s: k } = ye.toSig(se("DER", T));
      return new h(I, k);
    }
    assertValidity() {
      _e("r", this.r, H, r), _e("s", this.s, H, r);
    }
    addRecoveryBit(T) {
      return new h(this.r, this.s, T);
    }
    recoverPublicKey(T) {
      const { r: I, s: k, recovery: M } = this, j = P(se("msgHash", T));
      if (M == null || ![0, 1, 2, 3].includes(M))
        throw new Error("recovery id invalid");
      const U = M === 2 || M === 3 ? I + t.n : I;
      if (U >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const W = M & 1 ? "03" : "02", Q = c.fromHex(W + l(U)), ne = a(U), Pe = i(-j * ne), lt = i(k * ne), Be = c.BASE.multiplyAndAddUnsafe(Q, Pe, lt);
      if (!Be)
        throw new Error("point at infinify");
      return Be.assertValidity(), Be;
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
      return ot(this.toDERHex());
    }
    toDERHex() {
      return ye.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return ot(this.toCompactHex());
    }
    toCompactHex() {
      return l(this.r) + l(this.s);
    }
  }
  const y = {
    isValidPrivateKey(A) {
      try {
        return u(A), !0;
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
      const A = mi(t.n);
      return Sd(t.randomBytes(A), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(A = 8, T = c.BASE) {
      return T._setWindowSize(A), T.multiply(BigInt(3)), T;
    }
  };
  function g(A, T = !0) {
    return c.fromPrivateKey(A).toRawBytes(T);
  }
  function w(A) {
    const T = qe(A), I = typeof A == "string", k = (T || I) && A.length;
    return T ? k === s || k === o : I ? k === 2 * s || k === 2 * o : A instanceof c;
  }
  function v(A, T, I = !0) {
    if (w(A))
      throw new Error("first arg must be private key");
    if (!w(T))
      throw new Error("second arg must be public key");
    return c.fromHex(T).multiply(u(A)).toRawBytes(I);
  }
  const S = t.bits2int || function(A) {
    const T = je(A), I = A.length * 8 - t.nBitLength;
    return I > 0 ? T >> BigInt(I) : T;
  }, P = t.bits2int_modN || function(A) {
    return i(S(A));
  }, E = _r(t.nBitLength);
  function B(A) {
    return _e(`num < 2^${t.nBitLength}`, A, me, E), it(A, t.nByteLength);
  }
  function $(A, T, I = z) {
    if (["recovered", "canonical"].some((Oe) => Oe in I))
      throw new Error("sign() legacy options not supported");
    const { hash: k, randomBytes: M } = t;
    let { lowS: j, prehash: U, extraEntropy: W } = I;
    j == null && (j = !0), A = se("msgHash", A), As(I), U && (A = se("prehashed msgHash", k(A)));
    const Q = P(A), ne = u(T), Pe = [B(ne), B(Q)];
    if (W != null && W !== !1) {
      const Oe = W === !0 ? M(n.BYTES) : W;
      Pe.push(se("extraEntropy", Oe));
    }
    const lt = Lt(...Pe), Be = Q;
    function En(Oe) {
      const Ze = S(Oe);
      if (!d(Ze))
        return;
      const Dr = a(Ze), We = c.BASE.multiply(Ze).toAffine(), re = i(We.x);
      if (re === me)
        return;
      const Ke = i(Dr * i(Be + re * ne));
      if (Ke === me)
        return;
      let Hr = (We.x === re ? 0 : 2) | Number(We.y & H), qr = Ke;
      return j && p(Ke) && (qr = m(Ke), Hr ^= 1), new h(re, qr, Hr);
    }
    return { seed: lt, k2sig: En };
  }
  const z = { lowS: t.lowS, prehash: !1 }, N = { lowS: t.lowS, prehash: !1 };
  function O(A, T, I = z) {
    const { seed: k, k2sig: M } = $(A, T, I), j = t;
    return hi(j.hash.outputLen, j.nByteLength, j.hmac)(k, M);
  }
  c.BASE._setWindowSize(8);
  function L(A, T, I, k = N) {
    var We;
    const M = A;
    if (T = se("msgHash", T), I = se("publicKey", I), "strict" in k)
      throw new Error("options.strict was renamed to lowS");
    As(k);
    const { lowS: j, prehash: U } = k;
    let W, Q;
    try {
      if (typeof M == "string" || qe(M))
        try {
          W = h.fromDER(M);
        } catch (re) {
          if (!(re instanceof ye.Err))
            throw re;
          W = h.fromCompact(M);
        }
      else if (typeof M == "object" && typeof M.r == "bigint" && typeof M.s == "bigint") {
        const { r: re, s: Ke } = M;
        W = new h(re, Ke);
      } else
        throw new Error("PARSE");
      Q = c.fromHex(I);
    } catch (re) {
      if (re.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (j && W.hasHighS())
      return !1;
    U && (T = t.hash(T));
    const { r: ne, s: Pe } = W, lt = P(T), Be = a(Pe), En = i(lt * Be), Oe = i(ne * Be), Ze = (We = c.BASE.multiplyAndAddUnsafe(Q, En, Oe)) == null ? void 0 : We.toAffine();
    return Ze ? i(Ze.x) === ne : !1;
  }
  return {
    CURVE: t,
    getPublicKey: g,
    getSharedSecret: v,
    sign: O,
    verify: L,
    ProjectivePoint: c,
    Signature: h,
    utils: y
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ld(e) {
  return {
    hash: e,
    hmac: (t, ...n) => di(e, t, _a(...n)),
    randomBytes: Ua
  };
}
function jd(e, t) {
  const n = (r) => zd({ ...e, ...Ld(r) });
  return Object.freeze({ ...n(t), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const wi = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Ss = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), _d = BigInt(1), or = BigInt(2), Ts = (e, t) => (e + t / or) / t;
function Ud(e) {
  const t = wi, n = BigInt(3), r = BigInt(6), s = BigInt(11), o = BigInt(22), i = BigInt(23), a = BigInt(44), c = BigInt(88), u = e * e * e % t, f = u * u * e % t, d = ee(f, n, t) * f % t, l = ee(d, n, t) * f % t, p = ee(l, or, t) * u % t, m = ee(p, s, t) * p % t, b = ee(m, o, t) * m % t, h = ee(b, a, t) * b % t, y = ee(h, c, t) * h % t, g = ee(y, a, t) * b % t, w = ee(g, n, t) * f % t, v = ee(w, i, t) * m % t, S = ee(v, r, t) * u % t, P = ee(S, or, t);
  if (!ir.eql(ir.sqr(P), e))
    throw new Error("Cannot find square root");
  return P;
}
const ir = bi(wi, void 0, void 0, { sqrt: Ud }), Ur = jd({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: ir,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: Ss,
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
    splitScalar: (e) => {
      const t = Ss, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -_d * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), o = n, i = BigInt("0x100000000000000000000000000000000"), a = Ts(o * e, t), c = Ts(-r * e, t);
      let u = Y(e - a * n - c * s, t), f = Y(-a * r - c * o, t);
      const d = u > i, l = f > i;
      if (d && (u = t - u), l && (f = t - f), u > i || f > i)
        throw new Error("splitScalar: Endomorphism failed, k=" + e);
      return { k1neg: d, k1: u, k2neg: l, k2: f };
    }
  }
}, Co);
BigInt(0);
Ur.ProjectivePoint;
const Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  secp256k1: Ur
}, Symbol.toStringTag, { value: "Module" }));
function Dd({ r: e, s: t, to: n = "hex", v: r, yParity: s }) {
  const o = (() => {
    if (s === 0 || s === 1)
      return s;
    if (r && (r === 27n || r === 28n || r >= 35n))
      return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })(), i = `0x${new Ur.Signature(Se(e), Se(t)).toCompactHex()}${o === 0 ? "1b" : "1c"}`;
  return n === "hex" ? i : ue(i);
}
async function Gr(e, t) {
  var d, l, p;
  const { address: n, factory: r, factoryData: s, hash: o, signature: i, universalSignatureVerifierAddress: a = (p = (l = (d = e.chain) == null ? void 0 : d.contracts) == null ? void 0 : l.universalSignatureVerifier) == null ? void 0 : p.address, ...c } = t, u = ce(i) ? i : typeof i == "object" && "r" in i && "s" in i ? Dd(i) : D(i), f = await (async () => !r && !s || Hf(u) ? u : qf({
    address: r,
    data: s,
    signature: u
  }))();
  try {
    const m = a ? {
      to: a,
      data: Fe({
        abi: ys,
        functionName: "isValidSig",
        args: [n, o, f]
      }),
      ...c
    } : {
      data: kr({
        abi: ys,
        args: [n, o, f],
        bytecode: Au
      }),
      ...c
    }, { data: b } = await F(e, Ht, "call")(m);
    return Pa(b ?? "0x0");
  } catch (m) {
    try {
      if (pn(nc(n), await vo({ hash: o, signature: i })))
        return !0;
    } catch {
    }
    if (m instanceof wo)
      return !1;
    throw m;
  }
}
async function Hd(e, { address: t, message: n, factory: r, factoryData: s, signature: o, ...i }) {
  const a = ci(n);
  return Gr(e, {
    address: t,
    factory: r,
    factoryData: s,
    hash: a,
    signature: o,
    ...i
  });
}
async function qd(e, t) {
  const { address: n, factory: r, factoryData: s, signature: o, message: i, primaryType: a, types: c, domain: u, ...f } = t, d = Of({ message: i, primaryType: a, types: c, domain: u });
  return Gr(e, {
    address: n,
    factory: r,
    factoryData: s,
    hash: d,
    signature: o,
    ...f
  });
}
function xi(e, { emitOnBegin: t = !1, emitMissed: n = !1, onBlockNumber: r, onError: s, poll: o, pollingInterval: i = e.pollingInterval }) {
  const a = typeof o < "u" ? o : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket");
  let c;
  return a ? (() => {
    const d = Z([
      "watchBlockNumber",
      e.uid,
      t,
      n,
      i
    ]);
    return ke(d, { onBlockNumber: r, onError: s }, (l) => qt(async () => {
      var p;
      try {
        const m = await F(e, Vt, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (m === c)
            return;
          if (m - c > 1 && n)
            for (let b = c + 1n; b < m; b++)
              l.onBlockNumber(b, c), c = b;
        }
        (!c || m > c) && (l.onBlockNumber(m, c), c = m);
      } catch (m) {
        (p = l.onError) == null || p.call(l, m);
      }
    }, {
      emitOnBegin: t,
      interval: i
    }));
  })() : (() => {
    const d = Z([
      "watchBlockNumber",
      e.uid,
      t,
      n
    ]);
    return ke(d, { onBlockNumber: r, onError: s }, (l) => {
      let p = !0, m = () => p = !1;
      return (async () => {
        try {
          const b = (() => {
            if (e.transport.type === "fallback") {
              const y = e.transport.transports.find((g) => g.config.type === "webSocket");
              return y ? y.value : e.transport;
            }
            return e.transport;
          })(), { unsubscribe: h } = await b.subscribe({
            params: ["newHeads"],
            onData(y) {
              var w;
              if (!p)
                return;
              const g = Se((w = y.result) == null ? void 0 : w.number);
              l.onBlockNumber(g, c), c = g;
            },
            onError(y) {
              var g;
              (g = l.onError) == null || g.call(l, y);
            }
          });
          m = h, p || m();
        } catch (b) {
          s == null || s(b);
        }
      })(), () => m();
    });
  })();
}
async function Vd(e, {
  confirmations: t = 1,
  hash: n,
  onReplaced: r,
  pollingInterval: s = e.pollingInterval,
  retryCount: o = 6,
  retryDelay: i = ({ count: c }) => ~~(1 << c) * 200,
  // exponential backoff
  timeout: a = 18e4
}) {
  const c = Z(["waitForTransactionReceipt", e.uid, n]);
  let u, f, d, l = !1;
  return new Promise((p, m) => {
    a && setTimeout(() => m(new Mc({ hash: n })), a);
    const b = ke(c, { onReplaced: r, resolve: p, reject: m }, (h) => {
      const y = F(e, xi, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: s,
        async onBlockNumber(g) {
          const w = (S) => {
            y(), S(), b();
          };
          let v = g;
          if (!l)
            try {
              if (d) {
                if (t > 1 && (!d.blockNumber || v - d.blockNumber + 1n < t))
                  return;
                w(() => h.resolve(d));
                return;
              }
              if (u || (l = !0, await er(async () => {
                u = await F(e, Rr, "getTransaction")({ hash: n }), u.blockNumber && (v = u.blockNumber);
              }, {
                delay: i,
                retryCount: o
              }), l = !1), d = await F(e, tr, "getTransactionReceipt")({ hash: n }), t > 1 && (!d.blockNumber || v - d.blockNumber + 1n < t))
                return;
              w(() => h.resolve(d));
            } catch (S) {
              if (S instanceof mo || S instanceof go) {
                if (!u) {
                  l = !1;
                  return;
                }
                try {
                  f = u, l = !0;
                  const P = await er(() => F(e, we, "getBlock")({
                    blockNumber: v,
                    includeTransactions: !0
                  }), {
                    delay: i,
                    retryCount: o,
                    shouldRetry: ({ error: $ }) => $ instanceof So
                  });
                  l = !1;
                  const E = P.transactions.find(({ from: $, nonce: z }) => $ === f.from && z === f.nonce);
                  if (!E || (d = await F(e, tr, "getTransactionReceipt")({
                    hash: E.hash
                  }), t > 1 && (!d.blockNumber || v - d.blockNumber + 1n < t)))
                    return;
                  let B = "replaced";
                  E.to === f.to && E.value === f.value ? B = "repriced" : E.from === E.to && E.value === 0n && (B = "cancelled"), w(() => {
                    var $;
                    ($ = h.onReplaced) == null || $.call(h, {
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
                w(() => h.reject(S));
            }
        }
      });
    });
  });
}
function Zd(e, { blockTag: t = "latest", emitMissed: n = !1, emitOnBegin: r = !1, onBlock: s, onError: o, includeTransactions: i, poll: a, pollingInterval: c = e.pollingInterval }) {
  const u = typeof a < "u" ? a : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"), f = i ?? !1;
  let d;
  return u ? (() => {
    const m = Z([
      "watchBlocks",
      e.uid,
      t,
      n,
      r,
      f,
      c
    ]);
    return ke(m, { onBlock: s, onError: o }, (b) => qt(async () => {
      var h;
      try {
        const y = await F(e, we, "getBlock")({
          blockTag: t,
          includeTransactions: f
        });
        if (y.number && (d != null && d.number)) {
          if (y.number === d.number)
            return;
          if (y.number - d.number > 1 && n)
            for (let g = (d == null ? void 0 : d.number) + 1n; g < y.number; g++) {
              const w = await F(e, we, "getBlock")({
                blockNumber: g,
                includeTransactions: f
              });
              b.onBlock(w, d), d = w;
            }
        }
        // If no previous block exists, emit.
        (!(d != null && d.number) || // If the block tag is "pending" with no block number, emit.
        t === "pending" && !(y != null && y.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        y.number && y.number > d.number) && (b.onBlock(y, d), d = y);
      } catch (y) {
        (h = b.onError) == null || h.call(b, y);
      }
    }, {
      emitOnBegin: r,
      interval: c
    }));
  })() : (() => {
    let m = !0, b = !0, h = () => m = !1;
    return (async () => {
      try {
        r && F(e, we, "getBlock")({
          blockTag: t,
          includeTransactions: f
        }).then((w) => {
          m && b && (s(w, void 0), b = !1);
        });
        const y = (() => {
          if (e.transport.type === "fallback") {
            const w = e.transport.transports.find((v) => v.config.type === "webSocket");
            return w ? w.value : e.transport;
          }
          return e.transport;
        })(), { unsubscribe: g } = await y.subscribe({
          params: ["newHeads"],
          onData(w) {
            var P, E, B;
            if (!m)
              return;
            const S = (((B = (E = (P = e.chain) == null ? void 0 : P.formatters) == null ? void 0 : E.block) == null ? void 0 : B.format) || vr)(w.result);
            s(S, d), b = !1, d = S;
          },
          onError(w) {
            o == null || o(w);
          }
        });
        h = g, m || h();
      } catch (y) {
        o == null || o(y);
      }
    })(), () => h();
  })();
}
function Wd(e, { address: t, args: n, batch: r = !0, event: s, events: o, fromBlock: i, onError: a, onLogs: c, poll: u, pollingInterval: f = e.pollingInterval, strict: d }) {
  const l = typeof u < "u" ? u : typeof i == "bigint" ? !0 : !(e.transport.type === "webSocket" || e.transport.type === "fallback" && e.transport.transports[0].config.type === "webSocket"), p = d ?? !1;
  return l ? (() => {
    const h = Z([
      "watchEvent",
      t,
      n,
      r,
      e.uid,
      s,
      f,
      i
    ]);
    return ke(h, { onLogs: c, onError: a }, (y) => {
      let g;
      i !== void 0 && (g = i - 1n);
      let w, v = !1;
      const S = qt(async () => {
        var P;
        if (!v) {
          try {
            w = await F(e, Qo, "createEventFilter")({
              address: t,
              args: n,
              event: s,
              events: o,
              strict: p,
              fromBlock: i
            });
          } catch {
          }
          v = !0;
          return;
        }
        try {
          let E;
          if (w)
            E = await F(e, yn, "getFilterChanges")({ filter: w });
          else {
            const B = await F(e, Vt, "getBlockNumber")({});
            g && g !== B ? E = await F(e, Tr, "getLogs")({
              address: t,
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
            y.onLogs(E);
          else
            for (const B of E)
              y.onLogs([B]);
        } catch (E) {
          w && E instanceof Ge && (v = !1), (P = y.onError) == null || P.call(y, E);
        }
      }, {
        emitOnBegin: !0,
        interval: f
      });
      return async () => {
        w && await F(e, mn, "uninstallFilter")({ filter: w }), S();
      };
    });
  })() : (() => {
    let h = !0, y = () => h = !1;
    return (async () => {
      try {
        const g = (() => {
          if (e.transport.type === "fallback") {
            const P = e.transport.transports.find((E) => E.config.type === "webSocket");
            return P ? P.value : e.transport;
          }
          return e.transport;
        })(), w = o ?? (s ? [s] : void 0);
        let v = [];
        w && (v = [w.flatMap((E) => Gt({
          abi: [E],
          eventName: E.name,
          args: n
        }))], s && (v = v[0]));
        const { unsubscribe: S } = await g.subscribe({
          params: ["logs", { address: t, topics: v }],
          onData(P) {
            var B;
            if (!h)
              return;
            const E = P.result;
            try {
              const { eventName: $, args: z } = Ir({
                abi: w ?? [],
                data: E.data,
                topics: E.topics,
                strict: p
              }), N = Te(E, { args: z, eventName: $ });
              c([N]);
            } catch ($) {
              let z, N;
              if ($ instanceof gt || $ instanceof on) {
                if (d)
                  return;
                z = $.abiItem.name, N = (B = $.abiItem.inputs) == null ? void 0 : B.some((L) => !("name" in L && L.name));
              }
              const O = Te(E, {
                args: N ? [] : {},
                eventName: z
              });
              c([O]);
            }
          },
          onError(P) {
            a == null || a(P);
          }
        });
        y = S, h || y();
      } catch (g) {
        a == null || a(g);
      }
    })(), () => y();
  })();
}
function Kd(e, { batch: t = !0, onError: n, onTransactions: r, poll: s, pollingInterval: o = e.pollingInterval }) {
  return (typeof s < "u" ? s : e.transport.type !== "webSocket") ? (() => {
    const u = Z([
      "watchPendingTransactions",
      e.uid,
      t,
      o
    ]);
    return ke(u, { onTransactions: r, onError: n }, (f) => {
      let d;
      const l = qt(async () => {
        var p;
        try {
          if (!d)
            try {
              d = await F(e, ei, "createPendingTransactionFilter")({});
              return;
            } catch (b) {
              throw l(), b;
            }
          const m = await F(e, yn, "getFilterChanges")({ filter: d });
          if (m.length === 0)
            return;
          if (t)
            f.onTransactions(m);
          else
            for (const b of m)
              f.onTransactions([b]);
        } catch (m) {
          (p = f.onError) == null || p.call(f, m);
        }
      }, {
        emitOnBegin: !0,
        interval: o
      });
      return async () => {
        d && await F(e, mn, "uninstallFilter")({ filter: d }), l();
      };
    });
  })() : (() => {
    let u = !0, f = () => u = !1;
    return (async () => {
      try {
        const { unsubscribe: d } = await e.transport.subscribe({
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
function Yd(e) {
  var d, l, p;
  const { scheme: t, statement: n, ...r } = ((d = e.match(Jd)) == null ? void 0 : d.groups) ?? {}, { chainId: s, expirationTime: o, issuedAt: i, notBefore: a, requestId: c, ...u } = ((l = e.match(Xd)) == null ? void 0 : l.groups) ?? {}, f = (p = e.split("Resources:")[1]) == null ? void 0 : p.split(`
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
    ...t ? { scheme: t } : {},
    ...n ? { statement: n } : {}
  };
}
const Jd = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, Xd = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function Qd(e) {
  const { address: t, domain: n, message: r, nonce: s, scheme: o, time: i = /* @__PURE__ */ new Date() } = e;
  if (n && r.domain !== n || s && r.nonce !== s || o && r.scheme !== o || r.expirationTime && i >= r.expirationTime || r.notBefore && i < r.notBefore)
    return !1;
  try {
    if (!r.address || t && !pn(r.address, t))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function el(e, t) {
  const { address: n, domain: r, message: s, nonce: o, scheme: i, signature: a, time: c = /* @__PURE__ */ new Date(), ...u } = t, f = Yd(s);
  if (!f.address || !Qd({
    address: n,
    domain: r,
    message: f,
    nonce: o,
    scheme: i,
    time: c
  }))
    return !1;
  const l = ci(s);
  return Gr(e, {
    address: f.address,
    hash: l,
    signature: a,
    ...u
  });
}
function tl(e) {
  return {
    call: (t) => Ht(e, t),
    createBlockFilter: () => wf(e),
    createContractEventFilter: (t) => co(e, t),
    createEventFilter: (t) => Qo(e, t),
    createPendingTransactionFilter: () => ei(e),
    estimateContractGas: (t) => wu(e, t),
    estimateGas: (t) => Ar(e, t),
    getBalance: (t) => Go(e, t),
    getBlobBaseFee: () => xf(e),
    getBlock: (t) => we(e, t),
    getBlockNumber: (t) => Vt(e, t),
    getBlockTransactionCount: (t) => vf(e, t),
    getBytecode: (t) => xs(e, t),
    getChainId: () => _o(e),
    getCode: (t) => xs(e, t),
    getContractEvents: (t) => Do(e, t),
    getEip712Domain: (t) => Du(e, t),
    getEnsAddress: (t) => nf(e, t),
    getEnsAvatar: (t) => yf(e, t),
    getEnsName: (t) => mf(e, t),
    getEnsResolver: (t) => gf(e, t),
    getEnsText: (t) => Xo(e, t),
    getFeeHistory: (t) => Pf(e, t),
    estimateFeesPerGas: (t) => ou(e, t),
    getFilterChanges: (t) => yn(e, t),
    getFilterLogs: (t) => Bf(e, t),
    getGasPrice: () => Er(e),
    getLogs: (t) => Tr(e, t),
    getProof: (t) => id(e, t),
    estimateMaxPriorityFeePerGas: (t) => su(e, t),
    getStorageAt: (t) => ad(e, t),
    getTransaction: (t) => Rr(e, t),
    getTransactionConfirmations: (t) => cd(e, t),
    getTransactionCount: (t) => No(e, t),
    getTransactionReceipt: (t) => tr(e, t),
    multicall: (t) => ud(e, t),
    prepareTransactionRequest: (t) => Uo(e, t),
    readContract: (t) => ve(e, t),
    sendRawTransaction: (t) => Uu(e, t),
    simulateContract: (t) => Fu(e, t),
    verifyMessage: (t) => Hd(e, t),
    verifySiweMessage: (t) => el(e, t),
    verifyTypedData: (t) => qd(e, t),
    uninstallFilter: (t) => mn(e, t),
    waitForTransactionReceipt: (t) => Vd(e, t),
    watchBlocks: (t) => Zd(e, t),
    watchBlockNumber: (t) => xi(e, t),
    watchContractEvent: (t) => _u(e, t),
    watchEvent: (t) => Wd(e, t),
    watchPendingTransactions: (t) => Kd(e, t)
  };
}
function ml(e) {
  const { key: t = "public", name: n = "Public Client" } = e;
  return qu({
    ...e,
    key: t,
    name: n,
    type: "publicClient"
  }).extend(tl);
}
function jt(e) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jt(e);
}
function nl(e, t) {
  if (jt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (jt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function rl(e) {
  var t = nl(e, "string");
  return jt(t) == "symbol" ? t : t + "";
}
function sl(e, t, n) {
  return (t = rl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ks(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ks(Object(n), !0).forEach(function(r) {
      sl(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ks(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ol(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function wl(e, t) {
  if (e == null) return {};
  var n, r, s = ol(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
  }
  return s;
}
export {
  X as I,
  jt as _,
  cl as a,
  hl as b,
  Ee as c,
  ul as d,
  De as e,
  xr as f,
  ll as g,
  Se as h,
  K as i,
  ml as j,
  yo as k,
  dl as l,
  fl as m,
  Fe as n,
  rl as o,
  gl as p,
  sl as q,
  wl as r,
  pl as s,
  R as t,
  bl as u,
  pn as v,
  rd as w,
  bo as x
};
