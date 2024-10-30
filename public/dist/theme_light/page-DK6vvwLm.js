import { j as e, w as C, x as S, y as R, A as U } from "./vendor-radix-B8_5rGTC.js";
import { r as l, j as _ } from "./vendor-react-X5c0QESR.js";
import { S as F, b as $, c as v, a as D, D as q, d as V, e as G, g as J, T as b, L as E, f as L, l as K } from "./main-BVot_80u.js";
import { u as y, _ as k, B as Q } from "./vendor-utils-avI_LICu.js";
import { C as h } from "./index-QNPP8G0u.js";
import { g as z, M as W, R as X } from "./vendor-ui-utils-5hin2QBi.js";
import { T as Y, a as Z, b as p, c as f, d as ee, e as x } from "./table-Bv4uJmBG.js";
import { C as M } from "./card-fI06gMpa.js";
import { l as se, f as ae } from "./vendor-web3-A0hL30sH.js";
function te({
  balance: s,
  address: t,
  tokenType: n,
  defaultTo: c,
  defaultAmount: o,
  defaultNote: r,
  onClose: d
}) {
  const [a, m] = l.useState(!1);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(F, { onClick: () => m(!0) }),
    /* @__PURE__ */ e.jsx(
      $,
      {
        open: a,
        setOpen: m,
        balance: s,
        address: t,
        tokenType: n,
        defaultTo: c,
        defaultAmount: o,
        defaultNote: r,
        onClose: d
      }
    )
  ] });
}
const ne = U, B = l.forwardRef(({ className: s, ...t }, n) => /* @__PURE__ */ e.jsx(
  C,
  {
    ref: n,
    className: v(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      s
    ),
    ...t
  }
));
B.displayName = C.displayName;
const g = l.forwardRef(({ className: s, ...t }, n) => /* @__PURE__ */ e.jsx(
  S,
  {
    ref: n,
    className: v(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      s
    ),
    ...t
  }
));
g.displayName = S.displayName;
const N = l.forwardRef(({ className: s, ...t }, n) => /* @__PURE__ */ e.jsx(
  R,
  {
    ref: n,
    className: v(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      s
    ),
    ...t
  }
));
N.displayName = R.displayName;
function re({
  address: s
}) {
  const [t, n] = l.useState(!1), [c, o] = l.useState(""), { t: r } = y();
  return l.useEffect(() => {
    if (t) {
      const { username: d } = D.all();
      o(d);
    }
  }, [t]), /* @__PURE__ */ e.jsxs(q, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        title: "Receive",
        className: "bg-brand-foreground hover:bg-brand-foreground/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer",
        children: /* @__PURE__ */ e.jsx(z, { color: "#fff", onClick: () => n(!0) })
      }
    ) }),
    /* @__PURE__ */ e.jsxs(G, { className: "w-[360px] text-primary", children: [
      /* @__PURE__ */ e.jsx(J, { children: r("/dashboard.[token].receiveModal.title") }),
      /* @__PURE__ */ e.jsxs(ne, { defaultValue: "crypto", className: "w-full", children: [
        /* @__PURE__ */ e.jsxs(B, { className: "w-full", children: [
          /* @__PURE__ */ e.jsx(g, { value: "crypto", className: "w-full", children: r("/dashboard.[token].receiveModal.Crypto") }),
          /* @__PURE__ */ e.jsx(g, { value: "email", className: "w-full", children: r("/dashboard.[token].receiveModal.Email") })
        ] }),
        /* @__PURE__ */ e.jsxs(N, { value: "crypto", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between w-full mt-6 mb-2", children: /* @__PURE__ */ e.jsx(h, { address: s }) }),
          /* @__PURE__ */ e.jsx("div", { className: "w-full", children: /* @__PURE__ */ e.jsx(
            k,
            {
              fgColor: "#7bcdc6",
              bgColor: "transparent",
              value: s,
              style: { width: "100%" },
              size: 320
            }
          ) })
        ] }),
        /* @__PURE__ */ e.jsxs(N, { value: "email", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between w-full my-6", children: /* @__PURE__ */ e.jsx(h, { address: c }) }),
          /* @__PURE__ */ e.jsx("div", { className: "w-full", children: /* @__PURE__ */ e.jsx(
            k,
            {
              fgColor: "#7bcdc6",
              bgColor: "transparent",
              value: c,
              style: { width: "100%" },
              size: 320
            }
          ) })
        ] })
      ] })
    ] })
  ] });
}
function le({
  address: s,
  tokenType: t,
  transactions: n,
  loading: c
}) {
  const o = l.useRef(), { t: r } = y();
  l.useEffect(() => {
    const a = b.getInstance().createToken(t);
    o.current = a;
  }, [t]);
  const d = (a) => {
    var j;
    K("tx open", a);
    const m = `${(j = o.current) == null ? void 0 : j.openUrl}/${a.hash}`;
    window.open(m, "_blank");
  };
  return /* @__PURE__ */ e.jsxs(M, { className: "text-primary", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-between items-center mt-4 mb-4", children: /* @__PURE__ */ e.jsx("span", { className: "text-xl", children: r("/dashboard.[token].recentTransactions.title") }) }),
    /* @__PURE__ */ e.jsxs(Y, { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(Z, { children: /* @__PURE__ */ e.jsxs(p, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(f, { className: "" }),
        /* @__PURE__ */ e.jsx(f, { className: "max-w-[300px]", children: r("/dashboard.[token].recentTransactions.table.transactionHash") }),
        /* @__PURE__ */ e.jsx(f, { className: "", children: r("/dashboard.[token].recentTransactions.table.time") }),
        /* @__PURE__ */ e.jsx(f, { className: "max-w-[180px]", children: r("/dashboard.[token].recentTransactions.table.from") }),
        /* @__PURE__ */ e.jsx(f, { className: "max-w-[180px]", children: r("/dashboard.[token].recentTransactions.table.to") }),
        /* @__PURE__ */ e.jsx(f, { className: "text-right", children: r("/dashboard.[token].recentTransactions.table.amount") })
      ] }) }),
      /* @__PURE__ */ e.jsx(ee, { children: c ? /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsx(x, { colSpan: 6, className: "h-[200px]", children: /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx(E, { type: "breathe" }) }) }) }) : n.map((a) => /* @__PURE__ */ e.jsxs(p, { children: [
        /* @__PURE__ */ e.jsx(x, { className: "font-medium", children: se(a.from, s) ? /* @__PURE__ */ e.jsx("div", { className: "border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx(W, { size: 14 }) }) : /* @__PURE__ */ e.jsx("div", { className: "bg-brand-foreground rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx(z, { size: 14, color: "#fff" }) }) }),
        /* @__PURE__ */ e.jsx(x, { className: "max-w-[300px]", children: /* @__PURE__ */ e.jsx("p", { onClick: () => d(a), className: "cursor-pointer underline", children: /* @__PURE__ */ e.jsx(h, { address: a.hash, iconSize: 28 }) }) }),
        /* @__PURE__ */ e.jsx(x, { className: "font-medium", children: new Date(Number(a.timeStamp) * 1e3).toLocaleString() }),
        /* @__PURE__ */ e.jsx(x, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: a.from,
            children: /* @__PURE__ */ e.jsx(h, { address: a.from, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(x, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: a.to,
            children: /* @__PURE__ */ e.jsx(h, { address: a.to, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(x, { className: "text-right", children: L(ae(a.value)) })
      ] }, a.hash)) })
    ] }),
    n.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("p", { className: "text-gray-400", children: r("/dashboard.[token].recentTransactions.noTransactions") }) })
  ] });
}
function ce({
  tokenType: s
}) {
  const [t, n] = l.useState(""), [c, o] = l.useState(""), [r, d] = l.useState(!1), [a, m] = l.useState(!1), [j, A] = l.useState([]), { t: H } = y();
  l.useEffect(() => {
    I();
  }, []);
  const I = async () => {
    const i = D.all().address;
    o(i), w(i);
  }, O = async (i) => {
    d(!0);
    let u = await b.getInstance().createToken(s).getBalance(i);
    u = L(u), n(u), d(!1);
  }, P = async (i) => {
    try {
      m(!0);
      const u = await b.getInstance().createToken(s).getRecentTransactions(i);
      A(u);
    } catch {
      Q.error("Transactions load failed");
    } finally {
      m(!1);
    }
  }, w = (i) => {
    O(i), P(i);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(M, { className: "mb-4 p-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-primary", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-lg font-semibold flex items-center", children: [
          H("/dashboard.[token].balance"),
          ":",
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center", children: r ? /* @__PURE__ */ e.jsx(E, { className: "ml-6" }) : /* @__PURE__ */ e.jsx("span", { className: "block ml-2", children: t }) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { title: "sync", className: "text-brand-foreground", children: /* @__PURE__ */ e.jsx(
          X,
          {
            size: 16,
            className: "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
            onClick: () => w(c)
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex mt-4", children: [
        /* @__PURE__ */ e.jsx(re, { address: c }),
        /* @__PURE__ */ e.jsx(te, { balance: t, address: c, tokenType: s })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      le,
      {
        address: c,
        tokenType: s,
        transactions: j,
        loading: a
      }
    )
  ] }) });
}
function pe() {
  const { token: s } = _(), t = s == null ? void 0 : s.toUpperCase();
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ce, { tokenType: t }) });
}
export {
  pe as default
};
