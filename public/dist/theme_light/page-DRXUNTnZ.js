import { j as e } from "./vendor-radix-AvjOLIap.js";
import { a8 as T, f as A, g as v, h as b, c as y, a1 as R, a2 as E, a3 as f, b2 as S } from "./main-kXKSh1Wy.js";
import { T as w, a as C, b as d, c as i, d as z, e as n } from "./table-D6TqyQAB.js";
import { P } from "./index-BsO4qvOH.js";
import { a as r } from "./vendor-react-DSEtE0wE.js";
import { B as L } from "./vendor-utils-BPVAmMsZ.js";
function D() {
  const {
    pagination: t,
    handlePageChange: o,
    updateTotal: h,
    updatePageSize: N
  } = T(), [x, j] = r.useState([]), [g, c] = r.useState(!1);
  r.useEffect(() => {
    l({
      page: t.current,
      pageSize: t.pageSize
    });
  }, []);
  const l = async ({
    page: a,
    pageSize: m
  }) => {
    try {
      c(!0);
      const s = await A.get("/reward/reward-list", {
        params: {
          page: a,
          pageSize: m
        }
      });
      v("res", s), j(s.data.items), h(s.data.total);
    } catch (s) {
      const p = b(s);
      L.error(p.message);
    } finally {
      c(!1);
    }
  }, u = (a) => {
    o(a), l({
      page: a,
      pageSize: t.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(w, { className: y(g && "opacity-50"), children: [
      /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(i, { children: "Action" }),
        /* @__PURE__ */ e.jsx(i, { className: "text-right", children: "Amount" }),
        /* @__PURE__ */ e.jsx(i, { children: "Status" }),
        /* @__PURE__ */ e.jsx(i, { children: "Created At" }),
        /* @__PURE__ */ e.jsx(i, { children: "Fulfilled At" }),
        /* @__PURE__ */ e.jsx(i, { children: "Claimed At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(z, { children: x.map((a) => /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(n, { children: a.action }),
        /* @__PURE__ */ e.jsxs(n, { className: "text-right", children: [
          a.amount,
          " VAST"
        ] }),
        /* @__PURE__ */ e.jsx(n, { children: a.status }),
        /* @__PURE__ */ e.jsx(n, { children: new Date(a.createdAt).toLocaleString() }),
        /* @__PURE__ */ e.jsx(n, { children: a.fulfilledAt ? new Date(a.fulfilledAt).toLocaleString() : "-" }),
        /* @__PURE__ */ e.jsx(n, { children: a.claimedAt ? new Date(a.claimedAt).toLocaleString() : "-" })
      ] }, a._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      P,
      {
        ...t,
        onChange: u
      }
    ) })
  ] });
}
function B() {
  const {
    pagination: t,
    handlePageChange: o,
    updateTotal: h,
    updatePageSize: N
  } = T(), [x, j] = r.useState([]), [g, c] = r.useState(!1);
  r.useEffect(() => {
    l({
      page: t.current,
      pageSize: t.pageSize
    });
  }, []);
  const l = async ({
    page: a,
    pageSize: m
  }) => {
    try {
      c(!0);
      const s = await A.get("/reward/activity-list", {
        params: {
          page: a,
          pageSize: m
        }
      });
      v("res", s), j(s.data.items), h(s.data.total);
    } catch (s) {
      const p = b(s);
      L.error(p.message);
    } finally {
      c(!1);
    }
  }, u = (a) => {
    o(a), l({
      page: a,
      pageSize: t.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(w, { className: y(g && "opacity-50"), children: [
      /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(i, { children: "Type" }),
        /* @__PURE__ */ e.jsx(i, { children: "Status" }),
        /* @__PURE__ */ e.jsx(i, { children: "Created At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(z, { children: x.map((a) => /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(n, { children: a.activityType }),
        /* @__PURE__ */ e.jsx(n, { children: a.status }),
        /* @__PURE__ */ e.jsx(n, { children: new Date(a.createdAt).toLocaleString() })
      ] }, a._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      P,
      {
        ...t,
        onChange: u
      }
    ) })
  ] });
}
function k() {
  return /* @__PURE__ */ e.jsx("div", { className: "container py-6", children: /* @__PURE__ */ e.jsxs(R, { defaultValue: "rewards", children: [
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx(f, { value: "rewards", children: "Rewards" }),
      /* @__PURE__ */ e.jsx(f, { value: "activities", children: "Activities" })
    ] }),
    /* @__PURE__ */ e.jsx(S, { value: "rewards", children: /* @__PURE__ */ e.jsx(D, {}) }),
    /* @__PURE__ */ e.jsx(S, { value: "activities", children: /* @__PURE__ */ e.jsx(B, {}) })
  ] }) });
}
export {
  k as default
};
