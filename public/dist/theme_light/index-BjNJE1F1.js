import { j as t } from "./vendor-radix-AvjOLIap.js";
import { c } from "./main-CXGbnggO.js";
import { l as f, b as h } from "./vendor-ui-utils-CGOon9_P.js";
function b({
  current: i,
  total: d,
  pageSize: a = 30,
  onChange: r
}) {
  if (d === 0) return null;
  const l = Math.ceil(d / a), m = () => {
    const e = [];
    if (l <= 5)
      for (let s = 1; s <= l; s++)
        e.push(s);
    else if (e.push(1), i <= 3) {
      for (let s = 2; s <= 4; s++)
        e.push(s);
      e.push("ellipsis"), e.push(l);
    } else if (i >= l - 2) {
      e.push("ellipsis");
      for (let s = l - 3; s <= l; s++)
        e.push(s);
    } else
      e.push("ellipsis"), e.push(i - 1), e.push(i), e.push(i + 1), e.push("ellipsis"), e.push(l);
    return e.map((s, x) => {
      if (s === "ellipsis")
        return /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ t.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${x}`);
      const o = s === i;
      return /* @__PURE__ */ t.jsx(
        "div",
        {
          onClick: () => !o && (r == null ? void 0 : r(s)),
          className: c(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            o ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ t.jsx("div", { className: c(
            "text-center text-sm",
            o ? "text-white font-medium" : "text-black/90 font-normal"
          ), children: s })
        },
        s
      );
    });
  };
  return /* @__PURE__ */ t.jsx("div", { className: "h-8 justify-start items-center gap-4 inline-flex", children: /* @__PURE__ */ t.jsxs("div", { className: "justify-start items-center gap-2 flex", children: [
    /* @__PURE__ */ t.jsx("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ t.jsxs("div", { className: "text-black/90 text-sm font-normal", children: [
      "Total ",
      d,
      " items"
    ] }) }),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => i > 1 && (r == null ? void 0 : r(i - 1)),
        className: c(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          i > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ t.jsx(f, { className: "w-4 h-4" })
      }
    ),
    m(),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => i < l && (r == null ? void 0 : r(i + 1)),
        className: c(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          i < l ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ t.jsx(h, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
export {
  b as P
};
