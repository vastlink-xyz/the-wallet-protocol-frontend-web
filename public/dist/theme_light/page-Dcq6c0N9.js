import { j as e } from "./vendor-radix-BYJ0AyiX.js";
import { ac as A, f as T, h as S, c as C, g as D, a5 as z, a6 as H, a7 as v, b7 as y } from "./main-DVFfqeHd.js";
import { T as _, a as w, b as j, c as o, d as I, e as h } from "./table-Bg0KKSKr.js";
import { P as L } from "./index-DIkPSD7U.js";
import { r as i, k as P } from "./vendor-react-CuOkI7kW.js";
import { B as k } from "./vendor-utils-BfzDPiRN.js";
import { d as R } from "./vendor-ui-utils-2_WY-nJY.js";
function E() {
  const {
    pagination: a,
    handlePageChange: c,
    updateTotal: x,
    updatePageSize: p
  } = A(), [m, u] = i.useState([]), [g, l] = i.useState(!1);
  i.useEffect(() => {
    t({
      page: a.current,
      pageSize: a.pageSize
    });
  }, []);
  const t = async ({
    page: s,
    pageSize: f
  }) => {
    try {
      l(!0);
      const r = await T.get("/reward/activity-list", {
        params: {
          page: s,
          pageSize: f
        }
      });
      u(r.data.items), x(r.data.total);
    } catch (r) {
      const b = S(r);
      k.error(b.message);
    } finally {
      l(!1);
    }
  }, n = (s) => {
    c(s), t({
      page: s,
      pageSize: a.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(_, { className: C(g && "opacity-50"), children: [
      /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsxs(j, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(o, { children: "Type" }),
        /* @__PURE__ */ e.jsx(o, { children: "Status" }),
        /* @__PURE__ */ e.jsx(o, { children: "Created At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(I, { children: m.map((s) => /* @__PURE__ */ e.jsxs(j, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(h, { children: s.activityType }),
        /* @__PURE__ */ e.jsx(h, { children: s.status }),
        /* @__PURE__ */ e.jsx(h, { children: new Date(s.createdAt).toLocaleString() })
      ] }, s._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      L,
      {
        ...a,
        onChange: n
      }
    ) })
  ] });
}
function O() {
  const {
    pagination: a,
    handlePageChange: c,
    updateTotal: x,
    updatePageSize: p
  } = A(), [m, u] = i.useState([]), [g, l] = i.useState(!1);
  i.useEffect(() => {
    t({
      page: a.current,
      pageSize: a.pageSize
    });
  }, []);
  const t = async ({
    page: s,
    pageSize: f
  }) => {
    try {
      l(!0);
      const r = await T.get("/reward/reward-list", {
        params: {
          status: "FULFILLED",
          page: s,
          pageSize: f
        }
      });
      D("res", r), u(r.data.items), x(r.data.total);
    } catch (r) {
      const b = S(r);
      k.error(b.message);
    } finally {
      l(!1);
    }
  }, n = (s) => {
    c(s), t({
      page: s,
      pageSize: a.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold mt-12 mb-2", children: "Reward History" }),
    /* @__PURE__ */ e.jsxs(_, { className: C(
      g && "opacity-50"
    ), children: [
      /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsxs(j, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(o, { children: "Name" }),
        /* @__PURE__ */ e.jsx(o, { className: "text-right", children: "Amount" }),
        /* @__PURE__ */ e.jsx(o, { children: "Created At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(I, { children: m.map((s) => /* @__PURE__ */ e.jsxs(j, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(h, { children: s.displayName }),
        /* @__PURE__ */ e.jsxs(h, { className: "text-right text-green-500", children: [
          "+ ",
          s.amount,
          " VAST"
        ] }),
        /* @__PURE__ */ e.jsx(h, { children: new Date(s.createdAt).toLocaleString() })
      ] }, s._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      L,
      {
        ...a,
        onChange: n
      }
    ) })
  ] });
}
var d = /* @__PURE__ */ ((a) => (a.DAILY_LOGIN = "daily_login", a.DAILY_AI_CHAT = "daily_ai_chat", a.FIRST_AI_CHAT = "first_ai_chat", a))(d || {});
const N = () => {
  const a = document.querySelector("#vastlink-chatbot"), c = a == null ? void 0 : a.querySelector(".rcb-toggle-button");
  c && c.dispatchEvent(new MouseEvent("click", { bubbles: !0 }));
}, Y = {
  [d.DAILY_AI_CHAT]: {
    type: d.DAILY_AI_CHAT,
    handler: N
  },
  [d.DAILY_LOGIN]: {
    type: d.DAILY_LOGIN,
    path: "/auth"
  },
  [d.FIRST_AI_CHAT]: {
    type: d.FIRST_AI_CHAT,
    handler: N
  }
};
function F() {
  const [a, c] = i.useState([]), [x, p] = i.useState([]), m = P();
  i.useEffect(() => {
    u();
  }, []);
  const u = async () => {
    const t = await T.get("/reward/user-completed-tasks");
    c(t.data.dailyTasks), p(t.data.oneTimeTasks);
  }, g = (t) => {
    var s;
    const n = Y[t];
    n && (n.path ? m(n.path) : (s = n.handler) == null || s.call(n));
  }, l = ({ task: t }) => /* @__PURE__ */ e.jsx("div", { className: "bg-gray-100 rounded-lg p-4 mb-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900 mb-2", children: t.displayName }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600 mb-2", children: t.description })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center gap-2", children: [
      /* @__PURE__ */ e.jsxs("span", { className: "text-green-500 font-medium", children: [
        "+",
        t.reward,
        " VAST"
      ] }),
      t.isCompleted ? /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 rounded-full bg-green-100 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(R, { className: "w-5 h-5 text-green-500" }) }) : /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => g(t.id),
          className: "px-4 py-1 rounded-full bg-blue-100 text-blue-500 text-sm font-medium hover:bg-blue-200",
          children: "GO"
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold mb-4", children: "Daily Tasks" }),
      /* @__PURE__ */ e.jsx("div", { children: a.map((t, n) => /* @__PURE__ */ e.jsx(l, { task: t }, n)) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-bold mb-4", children: "One-time Tasks" }),
      /* @__PURE__ */ e.jsx("div", { children: x.map((t, n) => /* @__PURE__ */ e.jsx(l, { task: t }, n)) })
    ] })
  ] });
}
function G() {
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(F, {}),
    /* @__PURE__ */ e.jsx(O, {})
  ] });
}
function Q() {
  return /* @__PURE__ */ e.jsx("div", { className: "container py-6", children: /* @__PURE__ */ e.jsxs(z, { defaultValue: "rewards", children: [
    /* @__PURE__ */ e.jsxs(H, { children: [
      /* @__PURE__ */ e.jsx(v, { value: "rewards", children: "Rewards" }),
      /* @__PURE__ */ e.jsx(v, { value: "activities", children: "Activities" })
    ] }),
    /* @__PURE__ */ e.jsx(y, { value: "rewards", children: /* @__PURE__ */ e.jsx(G, {}) }),
    /* @__PURE__ */ e.jsx(y, { value: "activities", children: /* @__PURE__ */ e.jsx(E, {}) })
  ] }) });
}
export {
  Q as default
};
