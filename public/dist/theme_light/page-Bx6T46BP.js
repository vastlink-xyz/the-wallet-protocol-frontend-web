import { j as e, n as C, o as S, p as R, q as U } from "./vendor-radix-CjL5_ZCn.js";
import { a as l, m as _ } from "./vendor-react-D6ZgZFQ5.js";
import { a as q, S as F } from "./SendModal-Xs8A6GFY.js";
import { D as $, f as V, a as G, c as J } from "./dialog-CZtxwvHq.js";
import { l as K } from "./main-DrvVrxeO.js";
import { c as v } from "./style-CX3mXOu3.js";
import { u as y, _ as k, B as Q } from "./vendor-utils-RvkaSVWD.js";
import { C as h } from "./index-76Gp6gS8.js";
import { a as D } from "./auth-D53HHgot.js";
import { M as E, d as W, R as X } from "./vendor-ui-utils-CwlQOkPE.js";
import { f as L } from "./transaction-CgKZQG0q.js";
import { T as Y, a as Z, b as p, c as x, d as ee, e as f } from "./table-DVaL1o8u.js";
import { T as b } from "./TokenService-CBSYqvR8.js";
import { C as z } from "./card-CbHBAfSW.js";
import { L as M } from "./index-BO59AZ-D.js";
import { a as se, f as ae } from "./vendor-web3-B_6NVwwj.js";
function te({
  balance: s,
  address: t,
  tokenType: n,
  defaultTo: i,
  defaultAmount: c,
  defaultNote: r,
  onClose: d
}) {
  const [a, m] = l.useState(!1);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(q, { onClick: () => m(!0) }),
    /* @__PURE__ */ e.jsx(
      F,
      {
        open: a,
        setOpen: m,
        balance: s,
        address: t,
        tokenType: n,
        defaultTo: i,
        defaultAmount: c,
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
  const [t, n] = l.useState(!1), [i, c] = l.useState(""), { t: r } = y();
  return l.useEffect(() => {
    if (t) {
      const { username: d } = D.all();
      c(d);
    }
  }, [t]), /* @__PURE__ */ e.jsxs($, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsx(
      "div",
      {
        title: "Receive",
        className: "bg-brand-foreground hover:bg-brand-foreground/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer",
        children: /* @__PURE__ */ e.jsx(E, { color: "#fff", onClick: () => n(!0) })
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
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between w-full my-6", children: /* @__PURE__ */ e.jsx(h, { address: i }) }),
          /* @__PURE__ */ e.jsx("div", { className: "w-full", children: /* @__PURE__ */ e.jsx(
            k,
            {
              fgColor: "#7bcdc6",
              bgColor: "transparent",
              value: i,
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
  loading: i
}) {
  const c = l.useRef(), { t: r } = y();
  l.useEffect(() => {
    const a = b.getInstance().createToken(t);
    c.current = a;
  }, [t]);
  const d = (a) => {
    var j;
    K("tx open", a);
    const m = `${(j = c.current) == null ? void 0 : j.openUrl}/${a.hash}`;
    window.open(m, "_blank");
  };
  return /* @__PURE__ */ e.jsxs(z, { className: "text-primary", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-between items-center mt-4 mb-4", children: /* @__PURE__ */ e.jsx("span", { className: "text-xl", children: r("/dashboard.[token].recentTransactions.title") }) }),
    /* @__PURE__ */ e.jsxs(Y, { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(Z, { children: /* @__PURE__ */ e.jsxs(p, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(x, { className: "" }),
        /* @__PURE__ */ e.jsx(x, { className: "max-w-[300px]", children: r("/dashboard.[token].recentTransactions.table.transactionHash") }),
        /* @__PURE__ */ e.jsx(x, { className: "", children: r("/dashboard.[token].recentTransactions.table.time") }),
        /* @__PURE__ */ e.jsx(x, { className: "max-w-[180px]", children: r("/dashboard.[token].recentTransactions.table.from") }),
        /* @__PURE__ */ e.jsx(x, { className: "max-w-[180px]", children: r("/dashboard.[token].recentTransactions.table.to") }),
        /* @__PURE__ */ e.jsx(x, { className: "text-right", children: r("/dashboard.[token].recentTransactions.table.amount") })
      ] }) }),
      /* @__PURE__ */ e.jsx(ee, { children: i ? /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsx(f, { colSpan: 6, className: "h-[200px]", children: /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx(M, { type: "breathe" }) }) }) }) : n.map((a) => /* @__PURE__ */ e.jsxs(p, { children: [
        /* @__PURE__ */ e.jsx(f, { className: "font-medium", children: se(a.from, s) ? /* @__PURE__ */ e.jsx("div", { className: "border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx(W, { size: 14 }) }) : /* @__PURE__ */ e.jsx("div", { className: "bg-brand-foreground rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx(E, { size: 14, color: "#fff" }) }) }),
        /* @__PURE__ */ e.jsx(f, { className: "max-w-[300px]", children: /* @__PURE__ */ e.jsx("p", { onClick: () => d(a), className: "cursor-pointer underline", children: /* @__PURE__ */ e.jsx(h, { address: a.hash, iconSize: 28 }) }) }),
        /* @__PURE__ */ e.jsx(f, { className: "font-medium", children: new Date(Number(a.timeStamp) * 1e3).toLocaleString() }),
        /* @__PURE__ */ e.jsx(f, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: a.from,
            children: /* @__PURE__ */ e.jsx(h, { address: a.from, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(f, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: a.to,
            children: /* @__PURE__ */ e.jsx(h, { address: a.to, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(f, { className: "text-right", children: L(ae(a.value)) })
      ] }, a.hash)) })
    ] }),
    n.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("p", { className: "text-gray-400", children: r("/dashboard.[token].recentTransactions.noTransactions") }) })
  ] });
}
function ie({
  tokenType: s
}) {
  const [t, n] = l.useState(""), [i, c] = l.useState(""), [r, d] = l.useState(!1), [a, m] = l.useState(!1), [j, A] = l.useState([]), { t: H } = y();
  l.useEffect(() => {
    I();
  }, []);
  const I = async () => {
    const o = D.all().address;
    c(o), w(o);
  }, O = async (o) => {
    d(!0);
    let u = await b.getInstance().createToken(s).getBalance(o);
    u = L(u), n(u), d(!1);
  }, P = async (o) => {
    try {
      m(!0);
      const u = await b.getInstance().createToken(s).getRecentTransactions(o);
      A(u);
    } catch {
      Q.error("Transactions load failed");
    } finally {
      m(!1);
    }
  }, w = (o) => {
    O(o), P(o);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(z, { className: "mb-4 p-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-primary", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-lg font-semibold flex items-center", children: [
          H("/dashboard.[token].balance"),
          ":",
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center", children: r ? /* @__PURE__ */ e.jsx(M, { className: "ml-6" }) : /* @__PURE__ */ e.jsx("span", { className: "block ml-2", children: t }) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { title: "sync", className: "text-brand-foreground", children: /* @__PURE__ */ e.jsx(
          X,
          {
            size: 16,
            className: "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
            onClick: () => w(i)
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex mt-4", children: [
        /* @__PURE__ */ e.jsx(re, { address: i }),
        /* @__PURE__ */ e.jsx(te, { balance: t, address: i, tokenType: s })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      le,
      {
        address: i,
        tokenType: s,
        transactions: j,
        loading: a
      }
    )
  ] }) });
}
function Te() {
  const { token: s } = _(), t = s == null ? void 0 : s.toUpperCase();
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ie, { tokenType: t }) });
}
export {
  Te as default
};
