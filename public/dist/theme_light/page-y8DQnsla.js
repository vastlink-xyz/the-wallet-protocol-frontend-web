import { j as e } from "./vendor-radix-DUwj-Z7L.js";
import { j as n, c as t, a as l } from "./main-DvSwU80m.js";
import { j as p } from "./vendor-react-DV6Kf_ot.js";
const i = () => {
  const { loginWithRedirect: s } = n(), a = async () => {
    await s({
      appState: {
        returnTo: "/fireblocks_demo"
      },
      authorizationParams: {
        // screen_hint: "signup",
        // connection: 'email',
      }
    });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: t(
          "h-12 px-6 py-3.5 bg-white rounded-[60px] justify-center items-center gap-2 cursor-pointer",
          "hidden laptop:inline-flex"
        ),
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "text-center text-black text-base font-medium leading-tight",
            onClick: a,
            children: "Get started for free"
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: t(
          "w-[254px] h-10 px-4 py-3 bg-white rounded-[60px] justify-center items-center gap-2 mx-auto",
          "mb-4",
          "inline-flex laptop:hidden",
          "mt-[40px] tablet:mt-[56px]",
          "w-[254px] tablet:w-[232px]"
        ),
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "text-center text-black text-sm font-medium leading-none cursor-pointer",
            onClick: a,
            children: "Get started for free"
          }
        )
      }
    )
  ] });
}, x = () => {
  const { logout: s } = n(), a = () => {
    s({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  };
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: t(
        "h-12 px-6 py-3.5 bg-white rounded-[60px] justify-center items-center gap-2 cursor-pointer",
        "hidden laptop:inline-flex"
      ),
      children: /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "text-center text-black text-base font-medium leading-tight",
          onClick: a,
          children: "Logout"
        }
      )
    }
  );
}, o = () => {
  const { isAuthenticated: s, user: a } = n();
  return /* @__PURE__ */ e.jsxs("div", { className: "nav-bar__buttons", children: [
    !s && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(i, {}) }),
    s && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: a == null ? void 0 : a.picture,
            alt: "Profile",
            className: "rounded-full w-12 h-12"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e.jsx("h2", { className: "text-[#f2f2f2]", children: a == null ? void 0 : a.nickname }) })
      ] }),
      /* @__PURE__ */ e.jsx(x, {})
    ] })
  ] });
};
function m() {
  return p(), l.isAuthenticated(), /* @__PURE__ */ e.jsxs("div", { className: t(
    "flex flex-col relative",
    "bg-black border-none shadow-none outline-none"
  ), children: [
    /* @__PURE__ */ e.jsx("div", { className: "h-full w-full absolute bg-[linear-gradient(318deg,#000_53.13%,#0b3003_93.1%)] z-1" }),
    /* @__PURE__ */ e.jsx("div", { className: t(
      "relative text-center"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: t(
      "text-left mx-auto",
      "w-[343px] tablet:w-[506px] laptop:w-[936px] desktop:w-[1200px]",
      "pt-[60px] tablet:pt-[120px] laptop:pt-[160px]",
      "pb-[80px] tablet:pb-[80px] laptop:pb-[160px]",
      "flex flex-wrap justify-between"
    ), children: [
      /* @__PURE__ */ e.jsxs("div", { className: t(
        "w-[343px] tablet:w-[680px] laptop:w-[506px] desktop:w-[624px]"
      ), children: [
        /* @__PURE__ */ e.jsxs("div", { className: t(
          "text-white font-bold",
          "text-2xl tablet:text-[32px] laptop:text-[40px] desktop:text-6xl",
          "leading-7 tablet:leading-[37px] laptop:leading-[52px] desktop:leading-[73px]",
          "pb-[20px] laptop:pb-[40px]"
        ), children: [
          "The global ",
          /* @__PURE__ */ e.jsx("span", { className: "text-[#52c41a]", children: "PayFi ecosystem" }),
          " made for mass adoption"
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: t(
          "text-[#f2f2f2] font-normal",
          "text-[10px] tablet:text-sm laptop:text-base desktop:text-xl",
          "leading-3 tablet:leading-tight desktop:leading-normal",
          "pb-[24px] tablet:pb-[40px] laptop:pb-[56px]"
        ), children: "Designed for the community, driven by its demand, and powered by innovative tokenomics." }),
        /* @__PURE__ */ e.jsx(o, {})
      ] }),
      /* @__PURE__ */ e.jsx(
        "img",
        {
          className: t(
            "w-[343px] tablet:w-[488px] laptop:w-[324px] desktop:w-[488px]",
            "object-contain"
          ),
          src: "/imgs/banners/landing_1.png",
          alt: "banner"
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: t(
      "relative",
      'bg-[url("/imgs/banners/landing_2.png")]',
      "bg-cover bg-center bg-no-repeat",
      "-mt-[1px]"
    ), children: [
      /* @__PURE__ */ e.jsxs("div", { className: t(
        "flex flex-wrap justify-between items-center mx-auto",
        "w-[343px] tablet:w-[506px] laptop:w-[936px] desktop:w-[1200px]",
        "pt-[60px] tablet:pt-[120px] laptop:pt-[160px]",
        "pb-[80px] tablet:pb-[80px] laptop:pb-[160px]",
        "hidden laptop:flex"
      ), children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            className: t(
              "laptop:w-[403px] desktop:w-[530px]"
            ),
            src: "/imgs/banners/landing_2_1_large.png",
            alt: "banner"
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("div", { className: t(
            "text-white font-bold leading-[73px]",
            "laptop:w-[403px] desktop:w-[572px]",
            "laptop:mb-[20px] desktop:mb-[40px]",
            "laptop:text-[28px] desktop:text-5xl"
          ), children: "Open and scalable" }),
          /* @__PURE__ */ e.jsx("div", { className: t(
            "text-[#e8ffdc] font-normal leading-7",
            "laptop:w-[403px] desktop:w-[572px]",
            "laptop:text-base desktop:text-xl"
          ), children: "Open integration with all kinds of products and services via the scalable marketplace." })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: t(
        "block laptop:hidden"
      ), children: [
        /* @__PURE__ */ e.jsxs("div", { className: "text-center mb-[20px]", children: [
          /* @__PURE__ */ e.jsx("div", { className: t(
            "text-white text-[28px] font-bold leading-[73px]"
          ), children: "Open and scalable" }),
          /* @__PURE__ */ e.jsx("div", { className: t(
            "text-[#e8ffdc] font-normal leading-7",
            "text-[10px] tablet:text-sm"
          ), children: "Open integration with all kinds of products and services." })
        ] }),
        /* @__PURE__ */ e.jsx(
          "img",
          {
            className: t(
              "block tablet:hidden",
              "w-[343px] mx-auto"
            ),
            src: "/imgs/banners/landing_2_1_mobile.png",
            alt: "banner"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "img",
          {
            className: t(
              "hidden tablet:block",
              "w-[608px] mx-auto"
            ),
            src: "/imgs/banners/landing_2_1_large.png",
            alt: "banner"
          }
        )
      ] })
    ] })
  ] });
}
export {
  m as default
};
