var Kc = Object.defineProperty;
var $c = (A, i, u) => i in A ? Kc(A, i, { enumerable: !0, configurable: !0, writable: !0, value: u }) : A[i] = u;
var ot = (A, i, u) => $c(A, typeof i != "symbol" ? i + "" : i, u);
import { j as f, S as GA, d as YA, P as qc, C as XA, I as VA, g as JA, i as KA, k as $A, L as qA, l as ec, m as eu, T as tu, n as nu, O as tc, o as nc, p as ru, q as rc, D as oc, r as ou, t as au, v as iu } from "./vendor-radix-B8_5rGTC.js";
import { p as Wi, a as AA, r as x, u as ac, f as su, L as DA, O as lu, h as Au, i as cu, N as uu, R as du } from "./vendor-react-X5c0QESR.js";
import { t as fu, c as pu, C as hu, a as vu, b as gu, d as mu, X as ic, e as tA, M as yu, L as bu, f as wu } from "./vendor-ui-utils-5hin2QBi.js";
import { a as _i, u as Zi, B as Xt, Q as xu, X as Su, i as sc, b as Cu, I as Eu } from "./vendor-utils-avI_LICu.js";
import { d as lc, C as TA, c as Ys, f as Xs, h as cA, E as Du, m as Tu, a as Pu, b as PA, p as nA, e as ku, W as Bu, i as Iu, j as Ru, U as Mu, k as kA } from "./vendor-web3-A0hL30sH.js";
var rA, Ms = AA;
if (Wi.env.NODE_ENV === "production")
  rA = Ms.createRoot, Ms.hydrateRoot;
else {
  var BA = Ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  rA = function(A, i) {
    BA.usingClientEntryPoint = !0;
    try {
      return Ms.createRoot(A, i);
    } finally {
      BA.usingClientEntryPoint = !1;
    }
  };
}
const ju = x.lazy(() => import("./page-Dj6NjhuC.js")), Qu = x.lazy(() => import("./page-XQHutUzY.js")), Ou = x.lazy(() => import("./page-DK6vvwLm.js")), Fu = x.lazy(() => import("./page-BbjagUfv.js")), Nu = x.lazy(() => import("./page-Chz5uN0V.js")), Lu = x.lazy(() => import("./page-xWMmK1D3.js")), Hu = x.lazy(() => import("./page-D8lFWGMN.js")), Uu = x.lazy(() => import("./page-D3CSgcbP.js")), zu = x.lazy(() => import("./page-CRrROR3U.js")), Wu = x.lazy(() => import("./page-Bgk1qNF8.js")), _u = x.lazy(() => import("./page-w88CBxY-.js")), Zu = x.lazy(() => import("./index-DEQgbrEz.js")), Gu = x.lazy(() => import("./index-BisBUXIc.js")), Yu = x.lazy(() => import("./page-C7YUfctJ.js")), Xu = x.lazy(() => import("./page-zaXKuFZY.js")), We = console.log.bind(console, "🚀");
function Ee(...A) {
  return fu(pu(A));
}
class to {
  constructor(i) {
    ot(this, "isClient");
    ot(this, "key");
    this.isClient = typeof window < "u", this.key = i;
  }
  set(i) {
    this.isClient && localStorage.setItem(this.key, i);
  }
  get() {
    return this.isClient ? localStorage.getItem(this.key) : null;
  }
  remove() {
    this.isClient && localStorage.removeItem(this.key);
  }
  setData(i) {
    if (this.isClient)
      try {
        const u = JSON.stringify(i);
        return localStorage.setItem(this.key, u), !0;
      } catch (u) {
        return console.error("Failed to stringify object", u), !1;
      }
    return !1;
  }
  getData() {
    if (this.isClient) {
      const i = localStorage.getItem(this.key);
      if (i)
        try {
          return JSON.parse(i);
        } catch (u) {
          return console.error("Failed to parse JSON", u), null;
        }
    }
    return null;
  }
  // clear(): void {
  //   if (this.isClient) {
  //     localStorage.clear();
  //   }
  // }
}
const Ls = new to("language");
class Vu {
  constructor() {
    ot(this, "storages");
    this.storages = {
      idToken: new to("idToken"),
      username: new to("username"),
      address: new to("address"),
      authenticatedHeader: new to("authenticatedHeader"),
      authenticated: new to("authenticated"),
      desUsername: new to("desUsername"),
      aeskey: new to("aeskey")
    };
  }
  saveAuthDataByKey(i, u) {
    return this.storages[i].setData(u);
  }
  getAuthDataByKey(i) {
    return this.storages[i].getData();
  }
  removeAuthDataByKey(i) {
    this.storages[i].remove();
  }
  clearAllAuthData() {
    for (const i in this.storages)
      this.storages.hasOwnProperty(i) && this.storages[i].remove();
  }
  all() {
    const i = {};
    for (const u in this.storages)
      this.storages.hasOwnProperty(u) && (i[u] = this.storages[u].getData());
    return i;
  }
}
const gn = new Vu(), uA = /* @__PURE__ */ lc({
  id: 80002,
  name: "Polygon Amoy",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://amoy.polygonscan.com",
      apiUrl: "https://api-amoy.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3127388
    }
  },
  testnet: !0
}), dA = /* @__PURE__ */ lc({
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc2.sepolia.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
      apiUrl: "https://api-sepolia.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
      blockCreated: 5317080
    }
  },
  testnet: !0
}), Ac = (A, i = 6) => parseFloat(A).toFixed(i), Ju = (A) => {
  if (A === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: TA.EIP155,
      tickerName: "Sepolia Testnet ETH",
      ticker: "ETH",
      decimals: 18,
      rpcTarget: "https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://sepolia.etherscan.io"
    };
  if (A === "MATIC" || A === "TVWT")
    return {
      chainId: "0x13882",
      displayName: "Polygon Amoy Testnet",
      chainNamespace: TA.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function IA(A) {
  if (A === "ETH")
    return dA;
  if (A === "MATIC" || A === "TVWT")
    return uA;
}
const RA = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, cc = Wi.env.NODE_ENV === "development";
function oA(A) {
  var i;
  if (_i.isAxiosError(A)) {
    const u = A;
    return u.response ? { message: `${((i = u.response.data) == null ? void 0 : i.message) || u.message}` } : u.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${u.message}` };
  } else return A instanceof Error ? { message: A.message } : { message: "An unknown error occurred" };
}
const uc = eu, dc = tu, Ku = x.forwardRef(({ className: A, inset: i, children: u, ...v }, a) => /* @__PURE__ */ f.jsxs(
  GA,
  {
    ref: a,
    className: Ee(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      i && "pl-8",
      A
    ),
    ...v,
    children: [
      u,
      /* @__PURE__ */ f.jsx(hu, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Ku.displayName = GA.displayName;
const $u = x.forwardRef(({ className: A, ...i }, u) => /* @__PURE__ */ f.jsx(
  YA,
  {
    ref: u,
    className: Ee(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      A
    ),
    ...i
  }
));
$u.displayName = YA.displayName;
const fA = x.forwardRef(({ className: A, sideOffset: i = 4, ...u }, v) => /* @__PURE__ */ f.jsx(qc, { children: /* @__PURE__ */ f.jsx(
  XA,
  {
    ref: v,
    sideOffset: i,
    className: Ee(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      A
    ),
    ...u
  }
) }));
fA.displayName = XA.displayName;
const Za = x.forwardRef(({ className: A, inset: i, ...u }, v) => /* @__PURE__ */ f.jsx(
  VA,
  {
    ref: v,
    className: Ee(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      i && "pl-8",
      A
    ),
    ...u
  }
));
Za.displayName = VA.displayName;
const qu = x.forwardRef(({ className: A, children: i, checked: u, ...v }, a) => /* @__PURE__ */ f.jsxs(
  JA,
  {
    ref: a,
    className: Ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      A
    ),
    checked: u,
    ...v,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(KA, { children: /* @__PURE__ */ f.jsx(vu, { className: "h-4 w-4" }) }) }),
      i
    ]
  }
));
qu.displayName = JA.displayName;
const ed = x.forwardRef(({ className: A, children: i, ...u }, v) => /* @__PURE__ */ f.jsxs(
  $A,
  {
    ref: v,
    className: Ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      A
    ),
    ...u,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(KA, { children: /* @__PURE__ */ f.jsx(gu, { className: "h-2 w-2 fill-current" }) }) }),
      i
    ]
  }
));
ed.displayName = $A.displayName;
const td = x.forwardRef(({ className: A, inset: i, ...u }, v) => /* @__PURE__ */ f.jsx(
  qA,
  {
    ref: v,
    className: Ee(
      "px-2 py-1.5 text-sm font-semibold",
      i && "pl-8",
      A
    ),
    ...u
  }
));
td.displayName = qA.displayName;
const nd = x.forwardRef(({ className: A, ...i }, u) => /* @__PURE__ */ f.jsx(
  ec,
  {
    ref: u,
    className: Ee("-mx-1 my-1 h-px bg-muted", A),
    ...i
  }
));
nd.displayName = ec.displayName;
function rd({ routes: A, currentRouteName: i }) {
  const { pathname: u } = ac(), v = su();
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("div", { className: Ee(
      "hidden tablet:flex",
      "justify-start items-center gap-6"
    ), children: A.map((a) => {
      const g = u.startsWith(a.href);
      return /* @__PURE__ */ f.jsxs(
        "div",
        {
          className: Ee(
            "py-2 justify-start items-center gap-2 flex relative",
            g && "text-white"
          ),
          children: [
            /* @__PURE__ */ f.jsx(DA, { className: Ee(
              "text-[#a1a1a1] text-sm font-medium leading-none cursor-pointer",
              g && "text-white"
            ), to: a.href, children: a.name }),
            g && /* @__PURE__ */ f.jsx("div", { className: "absolute -bottom-2 left-0 w-full h-0.5 bg-white" })
          ]
        },
        a.name
      );
    }) }),
    /* @__PURE__ */ f.jsx("div", { className: Ee("flex tablet:hidden"), children: /* @__PURE__ */ f.jsxs(uc, { children: [
      /* @__PURE__ */ f.jsx(dc, { asChild: !0, children: /* @__PURE__ */ f.jsxs("div", { className: "h-7 justify-start items-center gap-1 inline-flex", children: [
        /* @__PURE__ */ f.jsx("div", { className: "text-neutral-50 text-sm font-medium leading-none", children: i }),
        /* @__PURE__ */ f.jsx("img", { src: "/imgs/icons/center_down.svg" })
      ] }) }),
      /* @__PURE__ */ f.jsx(fA, { className: "bg-white", children: A.map((a) => {
        const g = u.startsWith(a.href);
        return /* @__PURE__ */ f.jsx(
          Za,
          {
            onClick: (E) => {
              We("click", a.href), v(a.href);
            },
            children: g ? /* @__PURE__ */ f.jsxs(DA, { to: a.href, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ f.jsx("div", { className: "text-brand-foreground", children: a.name }),
              /* @__PURE__ */ f.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ] }) : /* @__PURE__ */ f.jsx("div", { className: "", children: a.name })
          },
          a.name
        );
      }) })
    ] }) })
  ] });
}
const od = mu(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-3 rounded-full disabled:bg-[#f5f5f5] disabled:text-[#bdbdbd] disabled:border disabled:border-[#d7d7d7] disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground disabled:bg-transparent disabled:text-[#bdbdbd] disabled:cursor-not-allowed",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Yn = x.forwardRef(
  ({ className: A, variant: i, size: u, asChild: v = !1, ...a }, g) => {
    const E = v ? nu : "button";
    return /* @__PURE__ */ f.jsx(
      E,
      {
        className: Ee(od({ variant: i, size: u, className: A })),
        ref: g,
        ...a
      }
    );
  }
);
Yn.displayName = "Button";
function MA({
  onLanguageChange: A
}) {
  const { i18n: i } = Zi(), [u, v] = x.useState(!1);
  x.useEffect(() => {
    const E = Ls.getData();
    E && i.changeLanguage(E);
  }, [i]);
  const a = (E) => {
    i.changeLanguage(E), Ls.setData(E), v(!1), A == null || A();
  }, g = /* @__PURE__ */ f.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ f.jsx("div", { className: Ee(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ f.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ f.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ f.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Choose your language" }),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => v(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ f.jsx(ic, {})
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "p-6 border-b border-[#EBEBEB] flex justify-center gap-[82px]", children: [
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            onClick: () => a("en"),
            className: Ee(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              i.language === "en" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "English",
              i.language === "en" && /* @__PURE__ */ f.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        ),
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            onClick: () => a("zh"),
            className: Ee(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              i.language === "zh" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "简体中文",
              i.language === "zh" && /* @__PURE__ */ f.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ f.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[30px]" })
    ] }) }),
    /* @__PURE__ */ f.jsx("div", { className: Ee(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ f.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ f.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Choose your language" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              onClick: () => a("en"),
              className: Ee(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                i.language === "en" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "English",
                i.language === "en" && /* @__PURE__ */ f.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          ),
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              onClick: () => a("zh"),
              className: Ee(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                i.language === "zh" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "简体中文",
                i.language === "zh" && /* @__PURE__ */ f.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("footer", { className: "", children: /* @__PURE__ */ f.jsx(
        Yn,
        {
          variant: "ghost",
          className: Ee(
            "w-full text-[15px] rounded-none",
            "hover:bg-black/5"
          ),
          onClick: () => v(!1),
          children: "Cancel"
        }
      ) })
    ] }) })
  ] });
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ f.jsx(
        "img",
        {
          className: Ee(
            "w-[20px] h-[20px] cursor-pointer",
            "hidden laptop:flex"
          ),
          src: "/imgs/icons/language.svg",
          onClick: () => v(!0)
        }
      ),
      /* @__PURE__ */ f.jsx(
        "div",
        {
          className: "flex laptop:hidden cursor-pointer",
          onClick: () => v(!0),
          children: "Language"
        }
      )
    ] }),
    u && AA.createPortal(
      /* @__PURE__ */ f.jsx(
        "div",
        {
          className: "fixed inset-0 z-[100] flex items-center justify-center font-['Roboto']",
          style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0 },
          children: g
        }
      ),
      document.body
      // 将 modal 直接挂载到 body 上
    )
  ] });
}
const Hs = au, Dh = iu, ad = ou, fc = x.forwardRef(({ className: A, ...i }, u) => /* @__PURE__ */ f.jsx(
  tc,
  {
    ref: u,
    className: Ee(
      "fixed inset-0 z-[10000] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      A
    ),
    ...i
  }
));
fc.displayName = tc.displayName;
const Hi = x.forwardRef(({ className: A, children: i, ...u }, v) => /* @__PURE__ */ f.jsxs(ad, { children: [
  /* @__PURE__ */ f.jsx(fc, {}),
  /* @__PURE__ */ f.jsxs(
    nc,
    {
      ref: v,
      className: Ee(
        "fixed left-[50%] top-[50%] z-[10001] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        A
      ),
      ...u,
      children: [
        i,
        /* @__PURE__ */ f.jsxs(ru, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-primary", children: [
          /* @__PURE__ */ f.jsx(ic, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Hi.displayName = nc.displayName;
const Us = ({
  className: A,
  ...i
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: Ee(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      A
    ),
    ...i
  }
);
Us.displayName = "DialogHeader";
const aA = ({
  className: A,
  ...i
}) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: Ee(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      A
    ),
    ...i
  }
);
aA.displayName = "DialogFooter";
const Ui = x.forwardRef(({ className: A, ...i }, u) => /* @__PURE__ */ f.jsx(
  rc,
  {
    ref: u,
    className: Ee(
      "text-lg font-semibold leading-none tracking-tight",
      A
    ),
    ...i
  }
));
Ui.displayName = rc.displayName;
const zs = x.forwardRef(({ className: A, ...i }, u) => /* @__PURE__ */ f.jsx(
  oc,
  {
    ref: u,
    className: Ee("text-sm text-muted-foreground", A),
    ...i
  }
));
zs.displayName = oc.displayName;
const id = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class pA {
  constructor(i, u, v) {
    ot(this, "name");
    ot(this, "symbol");
    ot(this, "decimals");
    this.name = i, this.symbol = u, this.decimals = v;
  }
}
class sd extends pA {
  constructor() {
    super("Ethereum", "ETH", 18);
    ot(this, "publicClient");
    ot(this, "openUrl");
    this.publicClient = Ys({
      chain: dA,
      transport: cA("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(u) {
    const v = await this.publicClient.getBalance({
      address: u
    });
    return Xs(v);
  }
  async getRecentTransactions(u) {
    const v = "https://api-sepolia.etherscan.io/api", g = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await _i.get(v, {
      params: {
        ...g,
        action: "txlist",
        address: u,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class ld extends pA {
  constructor() {
    super("Polygon", "MATIC", 18);
    ot(this, "publicClient");
    ot(this, "openUrl");
    this.publicClient = Ys({
      chain: uA,
      transport: cA("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(u) {
    const v = await this.publicClient.getBalance({
      address: u
    });
    return Xs(v);
  }
  async getRecentTransactions(u) {
    const v = "https://api-amoy.polygonscan.com/api", g = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await _i.get(v, {
      params: {
        ...g,
        action: "txlist",
        address: u,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Ad extends pA {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    ot(this, "publicClient");
    ot(this, "contractAddress");
    ot(this, "contractAbi");
    ot(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = id, this.publicClient = Ys({
      chain: uA,
      transport: cA("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(u) {
    const v = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [u]
    });
    return Xs(v);
  }
  async getRecentTransactions(u) {
    const v = "https://api-amoy.polygonscan.com/api", g = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await _i.get(v, {
      params: {
        ...g,
        action: "tokentx",
        address: u,
        contractaddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
const zo = class zo {
  constructor() {
    ot(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", sd],
      ["MATIC", ld],
      ["TVWT", Ad]
    ]);
  }
  static getInstance() {
    return zo.instance || (zo.instance = new zo()), zo.instance;
  }
  createToken(i) {
    const u = this.tokenMap.get(i);
    if (!u)
      throw new Error(`Unsupported token type: ${i}`);
    return new u();
  }
};
ot(zo, "instance");
let zi = zo;
const kn = _i.create({
  baseURL: "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com"
});
kn.interceptors.request.use(
  (A) => {
    const i = gn.all().idToken;
    return i && (A.headers.Authorization = `Bearer ${i}`), A;
  },
  (A) => Promise.reject(A)
);
kn.interceptors.response.use(
  (A) => A,
  async (A) => {
    var i, u;
    if (((i = A.response) == null ? void 0 : i.status) === 401 || ((u = A.response) == null ? void 0 : u.status) === 403) {
      const v = A.response.data.message || "Authentication error";
      console.log(`${v}, redirecting to login...`), gn.clearAllAuthData(), typeof window < "u" && (Xt.error(v), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(A);
  }
);
var Vs = /* @__PURE__ */ ((A) => (A.PASSPORT = "PASSPORT", A.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", A))(Vs || {});
class hA {
  constructor(i) {
    ot(this, "config");
    if (this.constructor === hA)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = i;
  }
}
class cd extends hA {
  constructor() {
    super({
      serviceType: Vs.WEB3AUTH_WITH_MPC
    });
    ot(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({ username: u, idToken: v }) {
    const { data: a } = await kn.post("/keymanagement/signup", {
      username: u,
      idToken: v
    }), { address: g } = a;
    gn.saveAuthDataByKey("idToken", v), gn.saveAuthDataByKey("address", g), gn.saveAuthDataByKey("username", u);
  }
  async signIn({ authUsername: u, idToken: v }) {
    const { data: a } = await kn.post("/keymanagement/signin", {
      username: u,
      idToken: v
    }), { address: g } = a;
    gn.saveAuthDataByKey("idToken", v), gn.saveAuthDataByKey("address", g), gn.saveAuthDataByKey("username", u);
  }
  async signTransaction({
    toAddress: u,
    amount: v,
    token: a,
    note: g,
    transactionType: E
  }) {
    const { data: {
      success: C,
      needOtp: m,
      hash: S,
      message: R,
      transactionId: k,
      // not used
      transactionPayload: I,
      userEmail: O,
      toEmail: N
    } } = await kn.post("/transaction/sign", {
      from: gn.all().address,
      to: u,
      amount: v,
      token: a,
      note: g,
      transactionType: E
    });
    return {
      success: C,
      needOtp: m,
      hash: S,
      message: R,
      transactionId: k
    };
  }
  async signTransactionWithOTP({
    transactionId: u,
    otp: v
  }) {
    const { data: {
      token: a,
      hash: g,
      // not used
      transactionPayload: E,
      userEmail: C,
      toEmail: m,
      note: S,
      transactionType: R
    } } = await kn.post("/transaction/verify-to-sign", {
      transactionId: u,
      OTP: v
    });
    return {
      success: !0,
      hash: g,
      token: a
    };
  }
  createClientByToken(u) {
    const v = this.coreKitInstance, a = Ju(u), g = new Du({ config: { chainConfig: a } });
    g.setupProvider(Tu(v));
    const E = Pu({
      chain: IA(u),
      transport: PA(g)
    }), C = Ys({
      chain: IA(u),
      transport: PA(g)
    });
    return {
      walletClient: E,
      publicClient: C
    };
  }
  async waitForTransactionReceipt(u, v) {
    const { publicClient: a } = this.createClientByToken(v);
    return await a.waitForTransactionReceipt({
      hash: u
    });
  }
  async test() {
    await kn.post("/keymanagement/test-mpc");
  }
}
class ud {
  static getService(i) {
    switch (i) {
      case Vs.WEB3AUTH_WITH_MPC:
        return new cd();
      default:
        throw new Error(`Unsupported service type: ${i}`);
    }
  }
}
const dd = Vs.WEB3AUTH_WITH_MPC, pc = ud.getService(dd), fd = () => {
  const [A, i] = x.useState(!1), u = x.useRef(), v = async ({
    to: m,
    amount: S,
    data: R,
    token: k = "ETH",
    transactionType: I
  }) => {
    u.current = zi.getInstance().createToken(k);
    try {
      const O = nA(S).toString();
      We("amt", O), i(!0);
      const N = await pc.signTransaction({
        toAddress: m,
        amount: O,
        token: k,
        transactionType: I
      }), {
        needOtp: z,
        hash: M,
        message: B
      } = N;
      return M ? E(M) : z && Xt.error(B), N;
    } catch (O) {
      const N = oA(O);
      Xt.error(N.message);
    } finally {
      i(!1);
    }
  }, a = async (m) => {
    const S = "/transaction/execution-status";
    let R;
    for (; ; ) {
      const k = await kn.post(S, {
        transactionId: m
      });
      if (We("data", k.data), R = k.data, R.hash)
        break;
      await new Promise((I) => setTimeout(I, 5e3));
    }
    return R.hash;
  }, g = (m) => {
    var R;
    const S = `${(R = u.current) == null ? void 0 : R.openUrl}/${m}`;
    window.open(S, "_blank");
  }, E = (m) => {
    Xt(
      /* @__PURE__ */ f.jsx("div", { className: "w-full", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ f.jsx(tA, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ f.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ f.jsx(
            Yn,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => g(m),
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  };
  return { signTransaction: v, sending: A, waitForTransactionExection: a, tokenTypeByChainId: (m) => "ETH" };
}, Ws = x.forwardRef(
  ({ className: A, type: i, ...u }, v) => /* @__PURE__ */ f.jsx(
    "input",
    {
      type: i,
      className: Ee(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:ring-brand-foreground focus-visible:ring-0 focus-visible:text-primary text-primary",
        A
      ),
      ref: v,
      ...u
    }
  )
);
Ws.displayName = "Input";
const hc = x.createContext(void 0), pd = ({ children: A }) => {
  const [i, u] = x.useState(!1), [v, a] = x.useState(!1), [g, E] = x.useState({ name: "", url: "" }), [C, m] = x.useState(!1), [S, R] = x.useState(), k = x.useRef(), I = (O) => {
    R(O), k.current = O;
  };
  return /* @__PURE__ */ f.jsx(hc.Provider, { value: {
    isModalOpen: i,
    setIsModalOpen: u,
    displayUriInput: v,
    setDisplayUriInput: a,
    dappInfo: g,
    setDappInfo: E,
    isConnected: C,
    setIsConnected: m,
    web3wallet: S,
    setWeb3Wallet: I,
    web3walletRef: k
  }, children: A });
}, vc = () => x.useContext(hc);
function hd({
  onPair: A
}) {
  const { t: i } = Zi(), [u, v] = x.useState(""), [a, g] = x.useState(""), {
    isModalOpen: E,
    dappInfo: C,
    setIsModalOpen: m,
    displayUriInput: S
  } = vc(), R = x.useRef(null);
  x.useEffect(() => () => {
    R.current && clearInterval(R.current);
  }, []);
  const k = () => {
    R.current && clearInterval(R.current), R.current = setInterval(async () => {
      try {
        const O = await navigator.clipboard.readText();
        We("clipboard", O), O.startsWith("wc:") && (R.current && clearInterval(R.current), We("exec on pair"), A(O));
      } catch (O) {
        console.error("Failed to read clipboard:", O);
      }
    }, 1e3);
  }, I = async () => {
    try {
      const O = await navigator.clipboard.readText();
      We("read", O), setTimeout(async () => {
        await navigator.clipboard.writeText(""), We("Clipboard cleared"), k(), window.open(C.url, "_blank");
      }, 500);
    } catch (O) {
      We("err", O), g(i("vastWalletConnect.pairModal.clipboardError"));
    }
  };
  return /* @__PURE__ */ f.jsx(
    Hs,
    {
      open: E,
      onOpenChange: (O) => m(O),
      children: /* @__PURE__ */ f.jsxs(
        Hi,
        {
          className: "sm:max-w-[500px] text-primary",
          onInteractOutside: (O) => {
            O.preventDefault();
          },
          children: [
            /* @__PURE__ */ f.jsxs(Us, { children: [
              /* @__PURE__ */ f.jsx(Ui, { children: i("vastWalletConnect.pairModal.title") }),
              /* @__PURE__ */ f.jsx(zs, {})
            ] }),
            /* @__PURE__ */ f.jsx("p", { className: "mb-4", children: i("vastWalletConnect.pairModal.instructions") }),
            /* @__PURE__ */ f.jsxs("ol", { className: "list-decimal list-inside mb-4", children: [
              /* @__PURE__ */ f.jsx("li", { children: i("vastWalletConnect.pairModal.steps.1") }),
              /* @__PURE__ */ f.jsx("li", { children: i("vastWalletConnect.pairModal.steps.2") }),
              /* @__PURE__ */ f.jsx("li", { children: i("vastWalletConnect.pairModal.steps.3") }),
              /* @__PURE__ */ f.jsx("li", { children: i("vastWalletConnect.pairModal.steps.4") }),
              S ? /* @__PURE__ */ f.jsx("li", { children: i("vastWalletConnect.pairModal.steps.5a") }) : /* @__PURE__ */ f.jsx("li", { children: i("vastWalletConnect.pairModal.steps.5b") })
            ] }),
            a ? /* @__PURE__ */ f.jsx("div", { className: "text-destructive-foreground bg-destructive p-2 rounded", children: a }) : null,
            !S && /* @__PURE__ */ f.jsx(
              "span",
              {
                className: Ee(
                  "text-blue-600 hover:text-blue-800 mb-4 cursor-pointer inline-block",
                  a && "cursor-not-allowed"
                ),
                onClick: () => I(),
                children: i("vastWalletConnect.pairModal.goToDapp")
              }
            ),
            S && /* @__PURE__ */ f.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ f.jsx(
                Ws,
                {
                  type: "text",
                  onChange: (O) => v(O.target.value),
                  placeholder: i("vastWalletConnect.pairModal.enterUri"),
                  className: "focus-visible:ring-black"
                }
              ),
              /* @__PURE__ */ f.jsx(
                Yn,
                {
                  type: "button",
                  onClick: () => A(u),
                  children: i("vastWalletConnect.pairModal.pair")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function vd() {
  const [A, i] = x.useState("/imgs/logos/logo.svg");
  return {
    logoPath: A
  };
}
function gd({
  size: A = 32,
  className: i = ""
}) {
  const [u, v] = x.useState("");
  return x.useEffect(() => {
    const {
      username: a
    } = gn.all();
    if (a) {
      const g = a.length > 0 ? a[0] : "";
      v(g);
    }
  }, []), /* @__PURE__ */ f.jsx(
    "div",
    {
      className: Ee(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${A}px] h-[${A}px]`,
        i
      ),
      children: /* @__PURE__ */ f.jsx("div", { className: Ee(
        // 'flex items-center justify-center',
      ), children: u })
    }
  );
}
function iA({
  size: A = 32,
  className: i,
  type: u = "spin",
  fullscreen: v = !1
}) {
  vd();
  const [a, g] = x.useState(!1);
  x.useEffect(() => (g(!0), () => g(!1)), []);
  const m = u === "breathe" ? /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ f.jsx(gd, { className: Ee(
      "animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    ) }),
    /* @__PURE__ */ f.jsx("style", { children: `
          @keyframes breathe {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.9);
            }
            20% {
              opacity: 1;
              transform: scale(1.1);
            }
            30% {
              opacity: 0.9;
              transform: scale(1.05);
            }
            50% {
              opacity: 0.5;
              transform: scale(0.95);
            }
            70% {
              opacity: 0.8;
              transform: scale(1.03);
            }
          }
        ` })
  ] }) : /* @__PURE__ */ f.jsx("div", { className: Ee(
    "text-brand-foreground",
    i
  ), children: /* @__PURE__ */ f.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      width: A,
      height: A,
      className: "shape-rendering-auto block",
      children: /* @__PURE__ */ f.jsx("g", { children: /* @__PURE__ */ f.jsx(
        "circle",
        {
          strokeLinecap: "round",
          fill: "none",
          strokeDasharray: "50.26548245743669 50.26548245743669",
          stroke: "currentColor",
          strokeWidth: "8",
          r: "32",
          cy: "50",
          cx: "50",
          children: /* @__PURE__ */ f.jsx(
            "animateTransform",
            {
              values: "0 50 50;360 50 50",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              type: "rotate",
              attributeName: "transform"
            }
          )
        }
      ) })
    }
  ) });
  return v && a ? AA.createPortal(
    /* @__PURE__ */ f.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: m }),
    document.body
  ) : m;
}
var vA = /* @__PURE__ */ ((A) => (A.PURCHASE = "PURCHASE", A.SELL = "SELL", A.TRANSFER = "TRANSFER", A.SWAP = "SWAP", A.INVITE_TRANSFER = "INVITE_TRANSFER", A))(vA || {});
function jA({ className: A }) {
  const { t: i } = Zi(), [u, v] = x.useState(""), [a, g] = x.useState(), [E, C] = x.useState(), [m] = x.useState(dA), [S, R] = x.useState(!1), [k, I] = x.useState(!1), [O, N] = x.useState({ method: "", message: "", topic: "", response: {} }), [z, M] = x.useState(null), B = x.useRef(null), [K, ne] = x.useState(!1), [G, _] = x.useState(null), { signTransaction: V, waitForTransactionExection: W, tokenTypeByChainId: re } = fd(), {
    setIsModalOpen: te,
    isConnected: se,
    setIsConnected: le,
    web3wallet: X,
    setWeb3Wallet: fe,
    web3walletRef: ue,
    setDisplayUriInput: Be
  } = vc(), Se = x.useCallback(() => {
    var pe;
    const me = (pe = ue.current) == null ? void 0 : pe.getActiveSessions();
    if (me && Object.keys(me).length > 0) {
      const je = Object.values(me)[0];
      C(je), le(!0);
    } else
      le(!1), C(void 0);
  }, []), ee = x.useCallback(async (me) => {
    We("event", me);
    const { topic: pe, params: je, id: ke } = me, { request: Te, chainId: Ge } = je, Ue = Te.params[0];
    Te.method === "eth_sendTransaction" ? (_({
      from: Ue.from,
      to: Ue.to,
      value: Xs(ku(Ue.value || "")),
      data: Ue.data,
      token: re(Ge)
    }), ne(!0), N({
      message: JSON.stringify(Ue, null, 2),
      method: Te.method,
      topic: pe,
      response: { id: ke, jsonrpc: "2.0", result: "" }
    })) : Te.method === "eth_signTypedData_v4" ? We("transferrequest", Ue) : We("else");
  }, [a]), ce = x.useCallback(async (me) => {
    We("proposal received", me), M(me), B.current = me, R(!0);
  }, []), de = (me) => {
    We("proposal_expire", me), At();
  }, xe = x.useCallback(() => {
    We("on session delete"), Se();
  }, [Se]), oe = async () => {
    v(u);
  }, ie = async () => {
    const me = new Iu({ projectId: "b3feb6b7c0ea5530a6eaa11d45fb4293" }), pe = await Ru.init({
      core: me,
      metadata: { name: "Vastlink", description: "Vastlink", url: "www.walletconnect.com", icons: [] }
    });
    fe(pe), Se();
  };
  x.useEffect(() => (oe(), ie(), () => {
    X && (X.off("session_proposal", ce), X.off("proposal_expire", de), X.off("session_request", ee), X.off("session_delete", xe));
  }), []), x.useEffect(() => {
    X && (X.on("session_proposal", ce), X.on("proposal_expire", de), X.on("session_request", ee), X.on("session_delete", xe), Se());
  }, [X, ee, xe, Se]);
  const we = async (me) => {
    if (We("pairing with uri", me), me)
      try {
        await (X == null ? void 0 : X.pair({ uri: me })), R(!0);
      } catch (pe) {
        console.error("Error pairing with uri", pe), Xt.error(pe.message);
      }
  }, ve = x.useCallback(async () => {
    var ke;
    const { address: me } = gn.all();
    if (!B.current || !me)
      return;
    const { id: pe, params: je } = B.current;
    try {
      const Te = {
        proposal: je,
        supportedNamespaces: {
          eip155: {
            chains: [`eip155:${m.id}`],
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            accounts: [`eip155:${m.id}:${me}`]
          }
        }
      }, Ge = Bu(Te);
      I(!0);
      const Ue = await ((ke = ue.current) == null ? void 0 : ke.approveSession({ id: pe, namespaces: Ge }));
      C(Ue), le(!0), R(!1), te(!1), M(null), Xt.success(i("toastSuccess.connectSuccess"));
    } catch (Te) {
      console.error("Error approving session:", Te);
    } finally {
      I(!1);
    }
  }, [X]), Ae = async () => {
    if (z)
      try {
        await (X == null ? void 0 : X.rejectSession({
          id: z.id,
          reason: Mu("USER_REJECTED")
        })), R(!1), M(null);
      } catch (me) {
        console.error("Error rejecting session:", me);
      }
  }, Me = async () => {
    if (G)
      try {
        I(!0);
        let me = "";
        const pe = await V({
          to: G == null ? void 0 : G.to,
          amount: G.value,
          data: G.data,
          token: G.token,
          transactionType: vA.SWAP
        });
        pe != null && pe.needOtp ? me = await W(pe.transactionId) : me = pe == null ? void 0 : pe.hash, We("hash is", me);
        const { topic: je, response: ke } = O, Te = {
          ...ke,
          result: me
        };
        await (X == null ? void 0 : X.respondSessionRequest({
          topic: je,
          response: Te
        })), We("successful"), ne(!1);
      } catch (me) {
        console.error("Error confirming transfer:", me), Xt.error("Transfer failed");
      } finally {
        I(!1);
      }
  }, it = async () => {
    const { topic: me, response: pe } = O, { id: je } = pe;
    await (X == null ? void 0 : X.respondSessionRequest({
      topic: me,
      response: {
        id: je,
        jsonrpc: "2.0",
        error: {
          code: 5e3,
          message: "User rejected."
        }
      }
    })), ne(!1), Xt.info("Transfer rejected");
  }, At = async () => {
    E != null && E.topic && (await (X == null ? void 0 : X.disconnectSession({
      topic: E.topic,
      reason: {
        code: 5e3,
        message: "User disconnected"
      }
    })), Se(), Xt.info("Disconnected"));
  }, nt = () => {
    We("open"), Be(!0), te(!0);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: "", children: [
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: Ee([
          "h-7 px-4 py-2.5 bg-white rounded-[60px]",
          "justify-center items-center gap-2 flex cursor-pointer",
          A
        ]),
        onClick: () => {
          se ? At() : nt();
        },
        children: /* @__PURE__ */ f.jsx("div", { className: "text-center text-[#111111] text-sm font-medium  leading-none select-none", children: i(se ? "vastWalletConnect.disconnectSession" : "vastWalletConnect.connectDApps") })
      }
    ),
    /* @__PURE__ */ f.jsx(
      Hs,
      {
        open: S,
        onOpenChange: (me) => R(me),
        children: /* @__PURE__ */ f.jsxs(Hi, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ f.jsxs(Us, { children: [
            /* @__PURE__ */ f.jsx(Ui, { children: i("vastWalletConnect.connectAccount") }),
            /* @__PURE__ */ f.jsx(zs, { children: z == null ? void 0 : z.params.proposer.metadata.name })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "border mx-auto flex items-center justify-between space-x-4 rounded-full px-4 py-2", children: [
            /* @__PURE__ */ f.jsx("img", { className: "w-[14px]", src: z == null ? void 0 : z.params.proposer.metadata.icons[0], alt: "" }),
            /* @__PURE__ */ f.jsx("p", { children: z == null ? void 0 : z.params.proposer.metadata.url })
          ] }),
          /* @__PURE__ */ f.jsxs(aA, { children: [
            /* @__PURE__ */ f.jsx(Yn, { onClick: Ae, variant: "outline", children: i("vastWalletConnect.reject") }),
            /* @__PURE__ */ f.jsx(Yn, { onClick: ve, children: k ? /* @__PURE__ */ f.jsx(iA, {}) : i("vastWalletConnect.approve") })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ f.jsx(
      Hs,
      {
        open: K,
        onOpenChange: (me) => ne(me),
        children: /* @__PURE__ */ f.jsxs(Hi, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ f.jsxs(Us, { children: [
            /* @__PURE__ */ f.jsx(Ui, { children: "Confirm Transfer" }),
            /* @__PURE__ */ f.jsx(zs, { children: "Please review the transfer details below" })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ f.jsxs("div", { children: [
              /* @__PURE__ */ f.jsx("label", { className: "font-medium", children: "From:" }),
              /* @__PURE__ */ f.jsx("p", { className: "text-sm", children: G == null ? void 0 : G.from })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { children: [
              /* @__PURE__ */ f.jsx("label", { className: "font-medium", children: "To:" }),
              /* @__PURE__ */ f.jsx("p", { className: "text-sm", children: G == null ? void 0 : G.to })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { children: [
              /* @__PURE__ */ f.jsx("label", { className: "font-medium", children: "Amount:" }),
              /* @__PURE__ */ f.jsxs("p", { className: "text-sm", children: [
                G == null ? void 0 : G.value,
                " ETH"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs(aA, { children: [
            /* @__PURE__ */ f.jsx(Yn, { onClick: it, variant: "outline", children: "Reject" }),
            /* @__PURE__ */ f.jsx(Yn, { onClick: Me, disabled: k, children: k ? /* @__PURE__ */ f.jsx(iA, {}) : "Confirm" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ f.jsx(hd, { onPair: we })
  ] });
}
function md() {
  const [A, i] = x.useState(!1);
  return /* @__PURE__ */ f.jsxs("div", { className: "justify-start items-center gap-[21px] flex", children: [
    /* @__PURE__ */ f.jsx("div", { className: "hidden tablet:flex", children: /* @__PURE__ */ f.jsx(jA, {}) }),
    /* @__PURE__ */ f.jsxs("div", { className: "justify-start items-center gap-7 flex", children: [
      /* @__PURE__ */ f.jsx("div", { className: Ee(
        "hidden tablet:flex",
        "justify-start items-center gap-6"
      ), children: /* @__PURE__ */ f.jsx("div", { className: "py-2 justify-start items-center gap-2 flex", children: /* @__PURE__ */ f.jsx("div", { className: "text-[#a1a1a1] text-sm font-medium leading-none", children: "Learn" }) }) }),
      /* @__PURE__ */ f.jsx("div", { className: "laptop:hidden", children: /* @__PURE__ */ f.jsxs(
        uc,
        {
          modal: !1,
          open: A,
          onOpenChange: i,
          children: [
            /* @__PURE__ */ f.jsx(dc, { asChild: !0, children: /* @__PURE__ */ f.jsx("button", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ f.jsx("img", { src: "/imgs/icons/menu.svg", className: "w-5 h-5" }) }) }),
            /* @__PURE__ */ f.jsxs(fA, { className: "bg-white border-none", children: [
              /* @__PURE__ */ f.jsx(
                Za,
                {
                  className: Ee("flex tablet:hidden"),
                  onSelect: (u) => u.preventDefault(),
                  children: /* @__PURE__ */ f.jsx(jA, { className: "p-0" })
                }
              ),
              /* @__PURE__ */ f.jsx(
                Za,
                {
                  className: Ee("hidden tablet:flex"),
                  onSelect: (u) => u.preventDefault(),
                  children: /* @__PURE__ */ f.jsx("div", { children: "Profile" })
                }
              ),
              /* @__PURE__ */ f.jsx(
                Za,
                {
                  onSelect: (u) => u.preventDefault(),
                  children: /* @__PURE__ */ f.jsx("div", { children: "Notification" })
                }
              ),
              /* @__PURE__ */ f.jsx(
                Za,
                {
                  onSelect: (u) => u.preventDefault(),
                  children: /* @__PURE__ */ f.jsx(MA, { onLanguageChange: () => i(!1) })
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ f.jsx("div", { className: Ee(
        "flex tablet:hidden laptop:flex",
        "justify-start items-center gap-6 flex-shrink-0"
      ), children: /* @__PURE__ */ f.jsx("img", { className: "w-[20px] h-[20px] flex-shrink-0", src: "/imgs/icons/profile.png" }) }),
      /* @__PURE__ */ f.jsx("div", { className: Ee(
        "hidden laptop:block",
        "w-[2px] h-[20px] bg-[#404040]"
      ) }),
      /* @__PURE__ */ f.jsx("div", { className: Ee(
        "hidden laptop:flex",
        "justify-start items-start gap-6 flex-shrink-0"
      ), children: /* @__PURE__ */ f.jsx("img", { className: "w-[20px] h-[20px] flex-shrink-0", src: "/imgs/icons/message.svg" }) }),
      /* @__PURE__ */ f.jsx("div", { className: Ee(
        "hidden laptop:flex",
        "justify-start items-start gap-6 flex-shrink-0 cursor-pointer"
      ), children: /* @__PURE__ */ f.jsx(MA, {}) })
    ] })
  ] });
}
function yd() {
  const { pathname: A } = ac(), { t: i } = Zi(), u = [
    {
      name: i("header.dashboard"),
      href: "/dashboard"
    },
    {
      name: i("header.marketplace"),
      href: "/marketplace"
    },
    {
      name: i("header.community"),
      href: "/community"
    }
  ], v = u.find((g) => A.startsWith(g.href)), a = (v == null ? void 0 : v.name) || u[0].name;
  return /* @__PURE__ */ f.jsxs("div", { className: Ee(
    "w-full h-[52px] bg-[#111111] shadow justify-between items-center inline-flex",
    "tablet:px-10 px-4"
  ), children: [
    /* @__PURE__ */ f.jsxs("div", { className: "items-center flex", children: [
      /* @__PURE__ */ f.jsxs("div", { className: Ee(
        "items-center gap-2 flex mr-[46px]",
        "mr-[20px] tablet:mr-[46px]"
      ), children: [
        /* @__PURE__ */ f.jsx("img", { src: "/imgs/logos/logo.svg" }),
        /* @__PURE__ */ f.jsx("div", { className: Ee(
          'text-white text-xl font-bold font-["Roboto Mono"] leading-none',
          "hidden tablet:block"
        ), children: "Vastlink" })
      ] }),
      /* @__PURE__ */ f.jsx(
        rd,
        {
          routes: u,
          currentRouteName: a
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(md, {})
  ] });
}
var Zo = {}, Ho = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QA;
function bd() {
  if (QA) return Ho;
  QA = 1;
  var A = x;
  function i(s) {
    for (var p = "https://reactjs.org/docs/error-decoder.html?invariant=" + s, w = 1; w < arguments.length; w++) p += "&args[]=" + encodeURIComponent(arguments[w]);
    return "Minified React error #" + s + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, g = {};
  function E(s) {
    return u.call(g, s) ? !0 : u.call(a, s) ? !1 : v.test(s) ? g[s] = !0 : (a[s] = !0, !1);
  }
  function C(s, p, w, T, L, j, U) {
    this.acceptsBooleans = p === 2 || p === 3 || p === 4, this.attributeName = T, this.attributeNamespace = L, this.mustUseProperty = w, this.propertyName = s, this.type = p, this.sanitizeURL = j, this.removeEmptyString = U;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s) {
    m[s] = new C(s, 0, !1, s, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
    var p = s[0];
    m[p] = new C(p, 1, !1, s[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(s) {
    m[s] = new C(s, 2, !1, s.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(s) {
    m[s] = new C(s, 2, !1, s, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s) {
    m[s] = new C(s, 3, !1, s.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(s) {
    m[s] = new C(s, 3, !0, s, null, !1, !1);
  }), ["capture", "download"].forEach(function(s) {
    m[s] = new C(s, 4, !1, s, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(s) {
    m[s] = new C(s, 6, !1, s, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(s) {
    m[s] = new C(s, 5, !1, s.toLowerCase(), null, !1, !1);
  });
  var S = /[\-:]([a-z])/g;
  function R(s) {
    return s[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s) {
    var p = s.replace(
      S,
      R
    );
    m[p] = new C(p, 1, !1, s, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s) {
    var p = s.replace(S, R);
    m[p] = new C(p, 1, !1, s, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(s) {
    var p = s.replace(S, R);
    m[p] = new C(p, 1, !1, s, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(s) {
    m[s] = new C(s, 1, !1, s.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new C("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(s) {
    m[s] = new C(s, 1, !1, s.toLowerCase(), null, !0, !0);
  });
  var k = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, I = ["Webkit", "ms", "Moz", "O"];
  Object.keys(k).forEach(function(s) {
    I.forEach(function(p) {
      p = p + s.charAt(0).toUpperCase() + s.substring(1), k[p] = k[s];
    });
  });
  var O = /["'&<>]/;
  function N(s) {
    if (typeof s == "boolean" || typeof s == "number") return "" + s;
    s = "" + s;
    var p = O.exec(s);
    if (p) {
      var w = "", T, L = 0;
      for (T = p.index; T < s.length; T++) {
        switch (s.charCodeAt(T)) {
          case 34:
            p = "&quot;";
            break;
          case 38:
            p = "&amp;";
            break;
          case 39:
            p = "&#x27;";
            break;
          case 60:
            p = "&lt;";
            break;
          case 62:
            p = "&gt;";
            break;
          default:
            continue;
        }
        L !== T && (w += s.substring(L, T)), L = T + 1, w += p;
      }
      s = L !== T ? w + s.substring(L, T) : w;
    }
    return s;
  }
  var z = /([A-Z])/g, M = /^ms-/, B = Array.isArray;
  function K(s, p) {
    return { insertionMode: s, selectedValue: p };
  }
  function ne(s, p, w) {
    switch (p) {
      case "select":
        return K(1, w.value != null ? w.value : w.defaultValue);
      case "svg":
        return K(2, null);
      case "math":
        return K(3, null);
      case "foreignObject":
        return K(1, null);
      case "table":
        return K(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return K(5, null);
      case "colgroup":
        return K(7, null);
      case "tr":
        return K(6, null);
    }
    return 4 <= s.insertionMode || s.insertionMode === 0 ? K(1, null) : s;
  }
  var G = /* @__PURE__ */ new Map();
  function _(s, p, w) {
    if (typeof w != "object") throw Error(i(62));
    p = !0;
    for (var T in w) if (u.call(w, T)) {
      var L = w[T];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (T.indexOf("--") === 0) {
          var j = N(T);
          L = N(("" + L).trim());
        } else {
          j = T;
          var U = G.get(j);
          U !== void 0 || (U = N(j.replace(z, "-$1").toLowerCase().replace(M, "-ms-")), G.set(j, U)), j = U, L = typeof L == "number" ? L === 0 || u.call(k, T) ? "" + L : L + "px" : N(("" + L).trim());
        }
        p ? (p = !1, s.push(' style="', j, ":", L)) : s.push(";", j, ":", L);
      }
    }
    p || s.push('"');
  }
  function V(s, p, w, T) {
    switch (w) {
      case "style":
        _(s, p, T);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < w.length) || w[0] !== "o" && w[0] !== "O" || w[1] !== "n" && w[1] !== "N") {
      if (p = m.hasOwnProperty(w) ? m[w] : null, p !== null) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!p.acceptsBooleans) return;
        }
        switch (w = p.attributeName, p.type) {
          case 3:
            T && s.push(" ", w, '=""');
            break;
          case 4:
            T === !0 ? s.push(" ", w, '=""') : T !== !1 && s.push(" ", w, '="', N(T), '"');
            break;
          case 5:
            isNaN(T) || s.push(" ", w, '="', N(T), '"');
            break;
          case 6:
            !isNaN(T) && 1 <= T && s.push(" ", w, '="', N(T), '"');
            break;
          default:
            p.sanitizeURL && (T = "" + T), s.push(" ", w, '="', N(T), '"');
        }
      } else if (E(w)) {
        switch (typeof T) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (p = w.toLowerCase().slice(0, 5), p !== "data-" && p !== "aria-") return;
        }
        s.push(" ", w, '="', N(T), '"');
      }
    }
  }
  function W(s, p, w) {
    if (p != null) {
      if (w != null) throw Error(i(60));
      if (typeof p != "object" || !("__html" in p)) throw Error(i(61));
      p = p.__html, p != null && s.push("" + p);
    }
  }
  function re(s) {
    var p = "";
    return A.Children.forEach(s, function(w) {
      w != null && (p += w);
    }), p;
  }
  function te(s, p, w, T) {
    s.push(X(w));
    var L = w = null, j;
    for (j in p) if (u.call(p, j)) {
      var U = p[j];
      if (U != null) switch (j) {
        case "children":
          w = U;
          break;
        case "dangerouslySetInnerHTML":
          L = U;
          break;
        default:
          V(s, T, j, U);
      }
    }
    return s.push(">"), W(s, L, w), typeof w == "string" ? (s.push(N(w)), null) : w;
  }
  var se = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, le = /* @__PURE__ */ new Map();
  function X(s) {
    var p = le.get(s);
    if (p === void 0) {
      if (!se.test(s)) throw Error(i(65, s));
      p = "<" + s, le.set(s, p);
    }
    return p;
  }
  function fe(s, p, w, T, L) {
    switch (p) {
      case "select":
        s.push(X("select"));
        var j = null, U = null;
        for (ge in w) if (u.call(w, ge)) {
          var $ = w[ge];
          if ($ != null) switch (ge) {
            case "children":
              j = $;
              break;
            case "dangerouslySetInnerHTML":
              U = $;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              V(s, T, ge, $);
          }
        }
        return s.push(">"), W(s, U, j), j;
      case "option":
        U = L.selectedValue, s.push(X("option"));
        var he = $ = null, ye = null, ge = null;
        for (j in w) if (u.call(w, j)) {
          var Qe = w[j];
          if (Qe != null) switch (j) {
            case "children":
              $ = Qe;
              break;
            case "selected":
              ye = Qe;
              break;
            case "dangerouslySetInnerHTML":
              ge = Qe;
              break;
            case "value":
              he = Qe;
            default:
              V(s, T, j, Qe);
          }
        }
        if (U != null) if (w = he !== null ? "" + he : re($), B(U)) {
          for (T = 0; T < U.length; T++)
            if ("" + U[T] === w) {
              s.push(' selected=""');
              break;
            }
        } else "" + U === w && s.push(' selected=""');
        else ye && s.push(' selected=""');
        return s.push(">"), W(s, ge, $), $;
      case "textarea":
        s.push(X("textarea")), ge = U = j = null;
        for ($ in w) if (u.call(w, $) && (he = w[$], he != null)) switch ($) {
          case "children":
            ge = he;
            break;
          case "value":
            j = he;
            break;
          case "defaultValue":
            U = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(i(91));
          default:
            V(
              s,
              T,
              $,
              he
            );
        }
        if (j === null && U !== null && (j = U), s.push(">"), ge != null) {
          if (j != null) throw Error(i(92));
          if (B(ge) && 1 < ge.length) throw Error(i(93));
          j = "" + ge;
        }
        return typeof j == "string" && j[0] === `
` && s.push(`
`), j !== null && s.push(N("" + j)), null;
      case "input":
        s.push(X("input")), he = ge = $ = j = null;
        for (U in w) if (u.call(w, U) && (ye = w[U], ye != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(399, "input"));
          case "defaultChecked":
            he = ye;
            break;
          case "defaultValue":
            $ = ye;
            break;
          case "checked":
            ge = ye;
            break;
          case "value":
            j = ye;
            break;
          default:
            V(s, T, U, ye);
        }
        return ge !== null ? V(s, T, "checked", ge) : he !== null && V(s, T, "checked", he), j !== null ? V(s, T, "value", j) : $ !== null && V(s, T, "value", $), s.push("/>"), null;
      case "menuitem":
        s.push(X("menuitem"));
        for (var ft in w) if (u.call(w, ft) && (j = w[ft], j != null)) switch (ft) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(400));
          default:
            V(s, T, ft, j);
        }
        return s.push(">"), null;
      case "title":
        s.push(X("title")), j = null;
        for (Qe in w) if (u.call(w, Qe) && (U = w[Qe], U != null)) switch (Qe) {
          case "children":
            j = U;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(i(434));
          default:
            V(s, T, Qe, U);
        }
        return s.push(">"), j;
      case "listing":
      case "pre":
        s.push(X(p)), U = j = null;
        for (he in w) if (u.call(w, he) && ($ = w[he], $ != null)) switch (he) {
          case "children":
            j = $;
            break;
          case "dangerouslySetInnerHTML":
            U = $;
            break;
          default:
            V(s, T, he, $);
        }
        if (s.push(">"), U != null) {
          if (j != null) throw Error(i(60));
          if (typeof U != "object" || !("__html" in U)) throw Error(i(61));
          w = U.__html, w != null && (typeof w == "string" && 0 < w.length && w[0] === `
` ? s.push(`
`, w) : s.push("" + w));
        }
        return typeof j == "string" && j[0] === `
` && s.push(`
`), j;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        s.push(X(p));
        for (var pt in w) if (u.call(w, pt) && (j = w[pt], j != null)) switch (pt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(399, p));
          default:
            V(s, T, pt, j);
        }
        return s.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return te(
          s,
          w,
          p,
          T
        );
      case "html":
        return L.insertionMode === 0 && s.push("<!DOCTYPE html>"), te(s, w, p, T);
      default:
        if (p.indexOf("-") === -1 && typeof w.is != "string") return te(s, w, p, T);
        s.push(X(p)), U = j = null;
        for (ye in w) if (u.call(w, ye) && ($ = w[ye], $ != null)) switch (ye) {
          case "children":
            j = $;
            break;
          case "dangerouslySetInnerHTML":
            U = $;
            break;
          case "style":
            _(s, T, $);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            E(ye) && typeof $ != "function" && typeof $ != "symbol" && s.push(" ", ye, '="', N($), '"');
        }
        return s.push(">"), W(s, U, j), j;
    }
  }
  function ue(s, p, w) {
    if (s.push('<!--$?--><template id="'), w === null) throw Error(i(395));
    return s.push(w), s.push('"></template>');
  }
  function Be(s, p, w, T) {
    switch (w.insertionMode) {
      case 0:
      case 1:
        return s.push('<div hidden id="'), s.push(p.segmentPrefix), p = T.toString(16), s.push(p), s.push('">');
      case 2:
        return s.push('<svg aria-hidden="true" style="display:none" id="'), s.push(p.segmentPrefix), p = T.toString(16), s.push(p), s.push('">');
      case 3:
        return s.push('<math aria-hidden="true" style="display:none" id="'), s.push(p.segmentPrefix), p = T.toString(16), s.push(p), s.push('">');
      case 4:
        return s.push('<table hidden id="'), s.push(p.segmentPrefix), p = T.toString(16), s.push(p), s.push('">');
      case 5:
        return s.push('<table hidden><tbody id="'), s.push(p.segmentPrefix), p = T.toString(16), s.push(p), s.push('">');
      case 6:
        return s.push('<table hidden><tr id="'), s.push(p.segmentPrefix), p = T.toString(16), s.push(p), s.push('">');
      case 7:
        return s.push('<table hidden><colgroup id="'), s.push(p.segmentPrefix), p = T.toString(16), s.push(p), s.push('">');
      default:
        throw Error(i(397));
    }
  }
  function Se(s, p) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return s.push("</div>");
      case 2:
        return s.push("</svg>");
      case 3:
        return s.push("</math>");
      case 4:
        return s.push("</table>");
      case 5:
        return s.push("</tbody></table>");
      case 6:
        return s.push("</tr></table>");
      case 7:
        return s.push("</colgroup></table>");
      default:
        throw Error(i(397));
    }
  }
  var ee = /[<\u2028\u2029]/g;
  function ce(s) {
    return JSON.stringify(s).replace(ee, function(p) {
      switch (p) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function de(s, p) {
    return p = p === void 0 ? "" : p, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: p + "P:", segmentPrefix: p + "S:", boundaryPrefix: p + "B:", idPrefix: p, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: s };
  }
  function xe(s, p, w, T) {
    return w.generateStaticMarkup ? (s.push(N(p)), !1) : (p === "" ? s = T : (T && s.push("<!-- -->"), s.push(N(p)), s = !0), s);
  }
  var oe = Object.assign, ie = Symbol.for("react.element"), we = Symbol.for("react.portal"), ve = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), Me = Symbol.for("react.profiler"), it = Symbol.for("react.provider"), At = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Te = Symbol.for("react.scope"), Ge = Symbol.for("react.debug_trace_mode"), Ue = Symbol.for("react.legacy_hidden"), Ye = Symbol.for("react.default_value"), et = Symbol.iterator;
  function gt(s) {
    if (s == null) return null;
    if (typeof s == "function") return s.displayName || s.name || null;
    if (typeof s == "string") return s;
    switch (s) {
      case ve:
        return "Fragment";
      case we:
        return "Portal";
      case Me:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case me:
        return "Suspense";
      case pe:
        return "SuspenseList";
    }
    if (typeof s == "object") switch (s.$$typeof) {
      case At:
        return (s.displayName || "Context") + ".Consumer";
      case it:
        return (s._context.displayName || "Context") + ".Provider";
      case nt:
        var p = s.render;
        return s = s.displayName, s || (s = p.displayName || p.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
      case je:
        return p = s.displayName || null, p !== null ? p : gt(s.type) || "Memo";
      case ke:
        p = s._payload, s = s._init;
        try {
          return gt(s(p));
        } catch {
        }
    }
    return null;
  }
  var Ot = {};
  function Sr(s, p) {
    if (s = s.contextTypes, !s) return Ot;
    var w = {}, T;
    for (T in s) w[T] = p[T];
    return w;
  }
  var Dt = null;
  function at(s, p) {
    if (s !== p) {
      s.context._currentValue2 = s.parentValue, s = s.parent;
      var w = p.parent;
      if (s === null) {
        if (w !== null) throw Error(i(401));
      } else {
        if (w === null) throw Error(i(401));
        at(s, w);
      }
      p.context._currentValue2 = p.value;
    }
  }
  function $e(s) {
    s.context._currentValue2 = s.parentValue, s = s.parent, s !== null && $e(s);
  }
  function Kn(s) {
    var p = s.parent;
    p !== null && Kn(p), s.context._currentValue2 = s.value;
  }
  function $n(s, p) {
    if (s.context._currentValue2 = s.parentValue, s = s.parent, s === null) throw Error(i(402));
    s.depth === p.depth ? at(s, p) : $n(s, p);
  }
  function qn(s, p) {
    var w = p.parent;
    if (w === null) throw Error(i(402));
    s.depth === w.depth ? at(s, w) : qn(s, w), p.context._currentValue2 = p.value;
  }
  function Xe(s) {
    var p = Dt;
    p !== s && (p === null ? Kn(s) : s === null ? $e(p) : p.depth === s.depth ? at(p, s) : p.depth > s.depth ? $n(p, s) : qn(p, s), Dt = s);
  }
  var er = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(s, p) {
    s = s._reactInternals, s.queue !== null && s.queue.push(p);
  }, enqueueReplaceState: function(s, p) {
    s = s._reactInternals, s.replace = !0, s.queue = [p];
  }, enqueueForceUpdate: function() {
  } };
  function Cr(s, p, w, T) {
    var L = s.state !== void 0 ? s.state : null;
    s.updater = er, s.props = w, s.state = L;
    var j = { queue: [], replace: !1 };
    s._reactInternals = j;
    var U = p.contextType;
    if (s.context = typeof U == "object" && U !== null ? U._currentValue2 : T, U = p.getDerivedStateFromProps, typeof U == "function" && (U = U(w, L), L = U == null ? L : oe({}, L, U), s.state = L), typeof p.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function")) if (p = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), p !== s.state && er.enqueueReplaceState(s, s.state, null), j.queue !== null && 0 < j.queue.length) if (p = j.queue, U = j.replace, j.queue = null, j.replace = !1, U && p.length === 1) s.state = p[0];
    else {
      for (j = U ? p[0] : s.state, L = !0, U = U ? 1 : 0; U < p.length; U++) {
        var $ = p[U];
        $ = typeof $ == "function" ? $.call(s, j, w, T) : $, $ != null && (L ? (L = !1, j = oe({}, j, $)) : oe(j, $));
      }
      s.state = j;
    }
    else j.queue = null;
  }
  var Er = { id: 1, overflow: "" };
  function tr(s, p, w) {
    var T = s.id;
    s = s.overflow;
    var L = 32 - Bn(T) - 1;
    T &= ~(1 << L), w += 1;
    var j = 32 - Bn(p) + L;
    if (30 < j) {
      var U = L - L % 5;
      return j = (T & (1 << U) - 1).toString(32), T >>= U, L -= U, { id: 1 << 32 - Bn(p) + L | w << L | T, overflow: j + s };
    }
    return { id: 1 << j | w << L | T, overflow: s };
  }
  var Bn = Math.clz32 ? Math.clz32 : tn, oo = Math.log, nr = Math.LN2;
  function tn(s) {
    return s >>>= 0, s === 0 ? 32 : 31 - (oo(s) / nr | 0) | 0;
  }
  function rr(s, p) {
    return s === p && (s !== 0 || 1 / s === 1 / p) || s !== s && p !== p;
  }
  var Dr = typeof Object.is == "function" ? Object.is : rr, ct = null, Ft = null, nn = null, Ne = null, rn = !1, In = !1, mn = 0, Nt = null, Rn = 0;
  function Vt() {
    if (ct === null) throw Error(i(321));
    return ct;
  }
  function tt() {
    if (0 < Rn) throw Error(i(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function or() {
    return Ne === null ? nn === null ? (rn = !1, nn = Ne = tt()) : (rn = !0, Ne = nn) : Ne.next === null ? (rn = !1, Ne = Ne.next = tt()) : (rn = !0, Ne = Ne.next), Ne;
  }
  function ar() {
    Ft = ct = null, In = !1, nn = null, Rn = 0, Ne = Nt = null;
  }
  function Tr(s, p) {
    return typeof p == "function" ? p(s) : p;
  }
  function Ve(s, p, w) {
    if (ct = Vt(), Ne = or(), rn) {
      var T = Ne.queue;
      if (p = T.dispatch, Nt !== null && (w = Nt.get(T), w !== void 0)) {
        Nt.delete(T), T = Ne.memoizedState;
        do
          T = s(T, w.action), w = w.next;
        while (w !== null);
        return Ne.memoizedState = T, [T, p];
      }
      return [Ne.memoizedState, p];
    }
    return s = s === Tr ? typeof p == "function" ? p() : p : w !== void 0 ? w(p) : p, Ne.memoizedState = s, s = Ne.queue = { last: null, dispatch: null }, s = s.dispatch = ao.bind(null, ct, s), [Ne.memoizedState, s];
  }
  function ir(s, p) {
    if (ct = Vt(), Ne = or(), p = p === void 0 ? null : p, Ne !== null) {
      var w = Ne.memoizedState;
      if (w !== null && p !== null) {
        var T = w[1];
        e: if (T === null) T = !1;
        else {
          for (var L = 0; L < T.length && L < p.length; L++) if (!Dr(p[L], T[L])) {
            T = !1;
            break e;
          }
          T = !0;
        }
        if (T) return w[0];
      }
    }
    return s = s(), Ne.memoizedState = [s, p], s;
  }
  function ao(s, p, w) {
    if (25 <= Rn) throw Error(i(301));
    if (s === ct) if (In = !0, s = { action: w, next: null }, Nt === null && (Nt = /* @__PURE__ */ new Map()), w = Nt.get(p), w === void 0) Nt.set(p, s);
    else {
      for (p = w; p.next !== null; ) p = p.next;
      p.next = s;
    }
  }
  function io() {
    throw Error(i(394));
  }
  function Lt() {
  }
  var sr = { readContext: function(s) {
    return s._currentValue2;
  }, useContext: function(s) {
    return Vt(), s._currentValue2;
  }, useMemo: ir, useReducer: Ve, useRef: function(s) {
    ct = Vt(), Ne = or();
    var p = Ne.memoizedState;
    return p === null ? (s = { current: s }, Ne.memoizedState = s) : p;
  }, useState: function(s) {
    return Ve(Tr, s);
  }, useInsertionEffect: Lt, useLayoutEffect: function() {
  }, useCallback: function(s, p) {
    return ir(function() {
      return s;
    }, p);
  }, useImperativeHandle: Lt, useEffect: Lt, useDebugValue: Lt, useDeferredValue: function(s) {
    return Vt(), s;
  }, useTransition: function() {
    return Vt(), [
      !1,
      io
    ];
  }, useId: function() {
    var s = Ft.treeContext, p = s.overflow;
    s = s.id, s = (s & ~(1 << 32 - Bn(s) - 1)).toString(32) + p;
    var w = Mn;
    if (w === null) throw Error(i(404));
    return p = mn++, s = ":" + w.idPrefix + "R" + s, 0 < p && (s += "H" + p.toString(32)), s + ":";
  }, useMutableSource: function(s, p) {
    return Vt(), p(s._source);
  }, useSyncExternalStore: function(s, p, w) {
    if (w === void 0) throw Error(i(407));
    return w();
  } }, Mn = null, on = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function mt(s) {
    return console.error(s), null;
  }
  function Ht() {
  }
  function jn(s, p, w, T, L, j, U, $, he) {
    var ye = [], ge = /* @__PURE__ */ new Set();
    return p = { destination: null, responseState: p, progressiveChunkSize: T === void 0 ? 12800 : T, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ge, pingedTasks: ye, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? mt : L, onAllReady: Ht, onShellReady: U === void 0 ? Ht : U, onShellError: Ht, onFatalError: Ht }, w = sn(p, 0, null, w, !1, !1), w.parentFlushed = !0, s = an(p, s, null, w, ge, Ot, null, Er), ye.push(s), p;
  }
  function an(s, p, w, T, L, j, U, $) {
    s.allPendingTasks++, w === null ? s.pendingRootTasks++ : w.pendingTasks++;
    var he = { node: p, ping: function() {
      var ye = s.pingedTasks;
      ye.push(he), ye.length === 1 && ut(s);
    }, blockedBoundary: w, blockedSegment: T, abortSet: L, legacyContext: j, context: U, treeContext: $ };
    return L.add(he), he;
  }
  function sn(s, p, w, T, L, j) {
    return { status: 0, id: -1, index: p, parentFlushed: !1, chunks: [], children: [], formatContext: T, boundary: w, lastPushedText: L, textEmbedded: j };
  }
  function Ut(s, p) {
    if (s = s.onError(p), s != null && typeof s != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof s + '" instead');
    return s;
  }
  function ln(s, p) {
    var w = s.onShellError;
    w(p), w = s.onFatalError, w(p), s.destination !== null ? (s.status = 2, s.destination.destroy(p)) : (s.status = 1, s.fatalError = p);
  }
  function yt(s, p, w, T, L) {
    for (ct = {}, Ft = p, mn = 0, s = w(T, L); In; ) In = !1, mn = 0, Rn += 1, Ne = null, s = w(T, L);
    return ar(), s;
  }
  function Pr(s, p, w, T) {
    var L = w.render(), j = T.childContextTypes;
    if (j != null) {
      var U = p.legacyContext;
      if (typeof w.getChildContext != "function") T = U;
      else {
        w = w.getChildContext();
        for (var $ in w) if (!($ in j)) throw Error(i(108, gt(T) || "Unknown", $));
        T = oe({}, U, w);
      }
      p.legacyContext = T, Je(s, p, L), p.legacyContext = U;
    } else Je(s, p, L);
  }
  function kr(s, p) {
    if (s && s.defaultProps) {
      p = oe({}, p), s = s.defaultProps;
      for (var w in s) p[w] === void 0 && (p[w] = s[w]);
      return p;
    }
    return p;
  }
  function Jt(s, p, w, T, L) {
    if (typeof w == "function") if (w.prototype && w.prototype.isReactComponent) {
      L = Sr(w, p.legacyContext);
      var j = w.contextType;
      j = new w(T, typeof j == "object" && j !== null ? j._currentValue2 : L), Cr(j, w, T, L), Pr(s, p, j, w);
    } else {
      j = Sr(w, p.legacyContext), L = yt(s, p, w, T, j);
      var U = mn !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Cr(L, w, T, j), Pr(s, p, L, w);
      else if (U) {
        T = p.treeContext, p.treeContext = tr(T, 1, 0);
        try {
          Je(s, p, L);
        } finally {
          p.treeContext = T;
        }
      } else Je(s, p, L);
    }
    else if (typeof w == "string") {
      switch (L = p.blockedSegment, j = fe(L.chunks, w, T, s.responseState, L.formatContext), L.lastPushedText = !1, U = L.formatContext, L.formatContext = ne(U, w, T), Wt(s, p, j), L.formatContext = U, w) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          L.chunks.push("</", w, ">");
      }
      L.lastPushedText = !1;
    } else {
      switch (w) {
        case Ue:
        case Ge:
        case Ae:
        case Me:
        case ve:
          Je(s, p, T.children);
          return;
        case pe:
          Je(s, p, T.children);
          return;
        case Te:
          throw Error(i(343));
        case me:
          e: {
            w = p.blockedBoundary, L = p.blockedSegment, j = T.fallback, T = T.children, U = /* @__PURE__ */ new Set();
            var $ = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, he = sn(s, L.chunks.length, $, L.formatContext, !1, !1);
            L.children.push(he), L.lastPushedText = !1;
            var ye = sn(s, 0, null, L.formatContext, !1, !1);
            ye.parentFlushed = !0, p.blockedBoundary = $, p.blockedSegment = ye;
            try {
              if (Wt(
                s,
                p,
                T
              ), s.responseState.generateStaticMarkup || ye.lastPushedText && ye.textEmbedded && ye.chunks.push("<!-- -->"), ye.status = 1, Tt($, ye), $.pendingTasks === 0) break e;
            } catch (ge) {
              ye.status = 4, $.forceClientRender = !0, $.errorDigest = Ut(s, ge);
            } finally {
              p.blockedBoundary = w, p.blockedSegment = L;
            }
            p = an(s, j, w, he, U, p.legacyContext, p.context, p.treeContext), s.pingedTasks.push(p);
          }
          return;
      }
      if (typeof w == "object" && w !== null) switch (w.$$typeof) {
        case nt:
          if (T = yt(s, p, w.render, T, L), mn !== 0) {
            w = p.treeContext, p.treeContext = tr(w, 1, 0);
            try {
              Je(s, p, T);
            } finally {
              p.treeContext = w;
            }
          } else Je(s, p, T);
          return;
        case je:
          w = w.type, T = kr(w, T), Jt(s, p, w, T, L);
          return;
        case it:
          if (L = T.children, w = w._context, T = T.value, j = w._currentValue2, w._currentValue2 = T, U = Dt, Dt = T = { parent: U, depth: U === null ? 0 : U.depth + 1, context: w, parentValue: j, value: T }, p.context = T, Je(s, p, L), s = Dt, s === null) throw Error(i(403));
          T = s.parentValue, s.context._currentValue2 = T === Ye ? s.context._defaultValue : T, s = Dt = s.parent, p.context = s;
          return;
        case At:
          T = T.children, T = T(w._currentValue2), Je(s, p, T);
          return;
        case ke:
          L = w._init, w = L(w._payload), T = kr(w, T), Jt(
            s,
            p,
            w,
            T,
            void 0
          );
          return;
      }
      throw Error(i(130, w == null ? w : typeof w, ""));
    }
  }
  function Je(s, p, w) {
    if (p.node = w, typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ie:
          Jt(s, p, w.type, w.props, w.ref);
          return;
        case we:
          throw Error(i(257));
        case ke:
          var T = w._init;
          w = T(w._payload), Je(s, p, w);
          return;
      }
      if (B(w)) {
        zt(s, p, w);
        return;
      }
      if (w === null || typeof w != "object" ? T = null : (T = et && w[et] || w["@@iterator"], T = typeof T == "function" ? T : null), T && (T = T.call(w))) {
        if (w = T.next(), !w.done) {
          var L = [];
          do
            L.push(w.value), w = T.next();
          while (!w.done);
          zt(s, p, L);
        }
        return;
      }
      throw s = Object.prototype.toString.call(w), Error(i(31, s === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : s));
    }
    typeof w == "string" ? (T = p.blockedSegment, T.lastPushedText = xe(p.blockedSegment.chunks, w, s.responseState, T.lastPushedText)) : typeof w == "number" && (T = p.blockedSegment, T.lastPushedText = xe(p.blockedSegment.chunks, "" + w, s.responseState, T.lastPushedText));
  }
  function zt(s, p, w) {
    for (var T = w.length, L = 0; L < T; L++) {
      var j = p.treeContext;
      p.treeContext = tr(j, T, L);
      try {
        Wt(s, p, w[L]);
      } finally {
        p.treeContext = j;
      }
    }
  }
  function Wt(s, p, w) {
    var T = p.blockedSegment.formatContext, L = p.legacyContext, j = p.context;
    try {
      return Je(s, p, w);
    } catch (he) {
      if (ar(), typeof he == "object" && he !== null && typeof he.then == "function") {
        w = he;
        var U = p.blockedSegment, $ = sn(s, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push($), U.lastPushedText = !1, s = an(s, p.node, p.blockedBoundary, $, p.abortSet, p.legacyContext, p.context, p.treeContext).ping, w.then(s, s), p.blockedSegment.formatContext = T, p.legacyContext = L, p.context = j, Xe(j);
      } else throw p.blockedSegment.formatContext = T, p.legacyContext = L, p.context = j, Xe(j), he;
    }
  }
  function An(s) {
    var p = s.blockedBoundary;
    s = s.blockedSegment, s.status = 3, _t(this, p, s);
  }
  function Qn(s, p, w) {
    var T = s.blockedBoundary;
    s.blockedSegment.status = 3, T === null ? (p.allPendingTasks--, p.status !== 2 && (p.status = 2, p.destination !== null && p.destination.push(null))) : (T.pendingTasks--, T.forceClientRender || (T.forceClientRender = !0, s = w === void 0 ? Error(i(432)) : w, T.errorDigest = p.onError(s), T.parentFlushed && p.clientRenderedBoundaries.push(T)), T.fallbackAbortableTasks.forEach(function(L) {
      return Qn(L, p, w);
    }), T.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0 && (T = p.onAllReady, T()));
  }
  function Tt(s, p) {
    if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
      var w = p.children[0];
      w.id = p.id, w.parentFlushed = !0, w.status === 1 && Tt(s, w);
    } else s.completedSegments.push(p);
  }
  function _t(s, p, w) {
    if (p === null) {
      if (w.parentFlushed) {
        if (s.completedRootSegment !== null) throw Error(i(389));
        s.completedRootSegment = w;
      }
      s.pendingRootTasks--, s.pendingRootTasks === 0 && (s.onShellError = Ht, p = s.onShellReady, p());
    } else p.pendingTasks--, p.forceClientRender || (p.pendingTasks === 0 ? (w.parentFlushed && w.status === 1 && Tt(p, w), p.parentFlushed && s.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(An, s), p.fallbackAbortableTasks.clear()) : w.parentFlushed && w.status === 1 && (Tt(p, w), p.completedSegments.length === 1 && p.parentFlushed && s.partialBoundaries.push(p)));
    s.allPendingTasks--, s.allPendingTasks === 0 && (s = s.onAllReady, s());
  }
  function ut(s) {
    if (s.status !== 2) {
      var p = Dt, w = on.current;
      on.current = sr;
      var T = Mn;
      Mn = s.responseState;
      try {
        var L = s.pingedTasks, j;
        for (j = 0; j < L.length; j++) {
          var U = L[j], $ = s, he = U.blockedSegment;
          if (he.status === 0) {
            Xe(U.context);
            try {
              Je($, U, U.node), $.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), U.abortSet.delete(U), he.status = 1, _t($, U.blockedBoundary, he);
            } catch (ht) {
              if (ar(), typeof ht == "object" && ht !== null && typeof ht.then == "function") {
                var ye = U.ping;
                ht.then(ye, ye);
              } else {
                U.abortSet.delete(U), he.status = 4;
                var ge = U.blockedBoundary, Qe = ht, ft = Ut($, Qe);
                if (ge === null ? ln($, Qe) : (ge.pendingTasks--, ge.forceClientRender || (ge.forceClientRender = !0, ge.errorDigest = ft, ge.parentFlushed && $.clientRenderedBoundaries.push(ge))), $.allPendingTasks--, $.allPendingTasks === 0) {
                  var pt = $.onAllReady;
                  pt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, j), s.destination !== null && dt(s, s.destination);
      } catch (ht) {
        Ut(s, ht), ln(s, ht);
      } finally {
        Mn = T, on.current = w, w === sr && Xe(p);
      }
    }
  }
  function cn(s, p, w) {
    switch (w.parentFlushed = !0, w.status) {
      case 0:
        var T = w.id = s.nextSegmentId++;
        return w.lastPushedText = !1, w.textEmbedded = !1, s = s.responseState, p.push('<template id="'), p.push(s.placeholderPrefix), s = T.toString(16), p.push(s), p.push('"></template>');
      case 1:
        w.status = 2;
        var L = !0;
        T = w.chunks;
        var j = 0;
        w = w.children;
        for (var U = 0; U < w.length; U++) {
          for (L = w[U]; j < L.index; j++) p.push(T[j]);
          L = yn(s, p, L);
        }
        for (; j < T.length - 1; j++) p.push(T[j]);
        return j < T.length && (L = p.push(T[j])), L;
      default:
        throw Error(i(390));
    }
  }
  function yn(s, p, w) {
    var T = w.boundary;
    if (T === null) return cn(s, p, w);
    if (T.parentFlushed = !0, T.forceClientRender) return s.responseState.generateStaticMarkup || (T = T.errorDigest, p.push("<!--$!-->"), p.push("<template"), T && (p.push(' data-dgst="'), T = N(T), p.push(T), p.push('"')), p.push("></template>")), cn(s, p, w), s = s.responseState.generateStaticMarkup ? !0 : p.push("<!--/$-->"), s;
    if (0 < T.pendingTasks) {
      T.rootSegmentID = s.nextSegmentId++, 0 < T.completedSegments.length && s.partialBoundaries.push(T);
      var L = s.responseState, j = L.nextSuspenseID++;
      return L = L.boundaryPrefix + j.toString(16), T = T.id = L, ue(p, s.responseState, T), cn(s, p, w), p.push("<!--/$-->");
    }
    if (T.byteSize > s.progressiveChunkSize) return T.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(T), ue(p, s.responseState, T.id), cn(s, p, w), p.push("<!--/$-->");
    if (s.responseState.generateStaticMarkup || p.push("<!--$-->"), w = T.completedSegments, w.length !== 1) throw Error(i(391));
    return yn(s, p, w[0]), s = s.responseState.generateStaticMarkup ? !0 : p.push("<!--/$-->"), s;
  }
  function On(s, p, w) {
    return Be(p, s.responseState, w.formatContext, w.id), yn(s, p, w), Se(p, w.formatContext);
  }
  function Ct(s, p, w) {
    for (var T = w.completedSegments, L = 0; L < T.length; L++) Zt(s, p, w, T[L]);
    if (T.length = 0, s = s.responseState, T = w.id, w = w.rootSegmentID, p.push(s.startInlineScript), s.sentCompleteBoundaryFunction ? p.push('$RC("') : (s.sentCompleteBoundaryFunction = !0, p.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), T === null) throw Error(i(395));
    return w = w.toString(16), p.push(T), p.push('","'), p.push(s.segmentPrefix), p.push(w), p.push('")<\/script>');
  }
  function Zt(s, p, w, T) {
    if (T.status === 2) return !0;
    var L = T.id;
    if (L === -1) {
      if ((T.id = w.rootSegmentID) === -1) throw Error(i(392));
      return On(s, p, T);
    }
    return On(s, p, T), s = s.responseState, p.push(s.startInlineScript), s.sentCompleteSegmentFunction ? p.push('$RS("') : (s.sentCompleteSegmentFunction = !0, p.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), p.push(s.segmentPrefix), L = L.toString(16), p.push(L), p.push('","'), p.push(s.placeholderPrefix), p.push(L), p.push('")<\/script>');
  }
  function dt(s, p) {
    try {
      var w = s.completedRootSegment;
      if (w !== null && s.pendingRootTasks === 0) {
        yn(s, p, w), s.completedRootSegment = null;
        var T = s.responseState.bootstrapChunks;
        for (w = 0; w < T.length - 1; w++) p.push(T[w]);
        w < T.length && p.push(T[w]);
      }
      var L = s.clientRenderedBoundaries, j;
      for (j = 0; j < L.length; j++) {
        var U = L[j];
        T = p;
        var $ = s.responseState, he = U.id, ye = U.errorDigest, ge = U.errorMessage, Qe = U.errorComponentStack;
        if (T.push($.startInlineScript), $.sentClientRenderFunction ? T.push('$RX("') : ($.sentClientRenderFunction = !0, T.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null) throw Error(i(395));
        if (T.push(he), T.push('"'), ye || ge || Qe) {
          T.push(",");
          var ft = ce(ye || "");
          T.push(ft);
        }
        if (ge || Qe) {
          T.push(",");
          var pt = ce(ge || "");
          T.push(pt);
        }
        if (Qe) {
          T.push(",");
          var ht = ce(Qe);
          T.push(ht);
        }
        if (!T.push(")<\/script>")) {
          s.destination = null, j++, L.splice(0, j);
          return;
        }
      }
      L.splice(0, j);
      var un = s.completedBoundaries;
      for (j = 0; j < un.length; j++) if (!Ct(s, p, un[j])) {
        s.destination = null, j++, un.splice(0, j);
        return;
      }
      un.splice(0, j);
      var Gt = s.partialBoundaries;
      for (j = 0; j < Gt.length; j++) {
        var Nn = Gt[j];
        e: {
          L = s, U = p;
          var dn = Nn.completedSegments;
          for ($ = 0; $ < dn.length; $++) if (!Zt(L, U, Nn, dn[$])) {
            $++, dn.splice(0, $);
            var bn = !1;
            break e;
          }
          dn.splice(0, $), bn = !0;
        }
        if (!bn) {
          s.destination = null, j++, Gt.splice(0, j);
          return;
        }
      }
      Gt.splice(0, j);
      var Kt = s.completedBoundaries;
      for (j = 0; j < Kt.length; j++) if (!Ct(s, p, Kt[j])) {
        s.destination = null, j++, Kt.splice(0, j);
        return;
      }
      Kt.splice(0, j);
    } finally {
      s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && p.push(null);
    }
  }
  function Fn(s, p) {
    try {
      var w = s.abortableTasks;
      w.forEach(function(T) {
        return Qn(T, s, p);
      }), w.clear(), s.destination !== null && dt(s, s.destination);
    } catch (T) {
      Ut(s, T), ln(s, T);
    }
  }
  function rt() {
  }
  function bt(s, p, w, T) {
    var L = !1, j = null, U = "", $ = { push: function(ye) {
      return ye !== null && (U += ye), !0;
    }, destroy: function(ye) {
      L = !0, j = ye;
    } }, he = !1;
    if (s = jn(s, de(w, p ? p.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, rt, void 0, function() {
      he = !0;
    }), ut(s), Fn(s, T), s.status === 1) s.status = 2, $.destroy(s.fatalError);
    else if (s.status !== 2 && s.destination === null) {
      s.destination = $;
      try {
        dt(s, $);
      } catch (ye) {
        Ut(s, ye), ln(s, ye);
      }
    }
    if (L) throw j;
    if (!he) throw Error(i(426));
    return U;
  }
  return Ho.renderToNodeStream = function() {
    throw Error(i(207));
  }, Ho.renderToStaticMarkup = function(s, p) {
    return bt(s, p, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ho.renderToStaticNodeStream = function() {
    throw Error(i(208));
  }, Ho.renderToString = function(s, p) {
    return bt(s, p, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ho.version = "18.3.1", Ho;
}
var js = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OA;
function wd() {
  if (OA) return js;
  OA = 1;
  var A = x;
  function i(l) {
    for (var d = "https://reactjs.org/docs/error-decoder.html?invariant=" + l, y = 1; y < arguments.length; y++) d += "&args[]=" + encodeURIComponent(arguments[y]);
    return "Minified React error #" + l + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = null, v = 0;
  function a(l, d) {
    if (d.length !== 0) if (512 < d.length) 0 < v && (l.enqueue(new Uint8Array(u.buffer, 0, v)), u = new Uint8Array(512), v = 0), l.enqueue(d);
    else {
      var y = u.length - v;
      y < d.length && (y === 0 ? l.enqueue(u) : (u.set(d.subarray(0, y), v), l.enqueue(u), d = d.subarray(y)), u = new Uint8Array(512), v = 0), u.set(d, v), v += d.length;
    }
  }
  function g(l, d) {
    return a(l, d), !0;
  }
  function E(l) {
    u && 0 < v && (l.enqueue(new Uint8Array(u.buffer, 0, v)), u = null, v = 0);
  }
  var C = new TextEncoder();
  function m(l) {
    return C.encode(l);
  }
  function S(l) {
    return C.encode(l);
  }
  function R(l, d) {
    typeof l.error == "function" ? l.error(d) : l.close();
  }
  var k = Object.prototype.hasOwnProperty, I = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, O = {}, N = {};
  function z(l) {
    return k.call(N, l) ? !0 : k.call(O, l) ? !1 : I.test(l) ? N[l] = !0 : (O[l] = !0, !1);
  }
  function M(l, d, y, D, H, F, Z) {
    this.acceptsBooleans = d === 2 || d === 3 || d === 4, this.attributeName = D, this.attributeNamespace = H, this.mustUseProperty = y, this.propertyName = l, this.type = d, this.sanitizeURL = F, this.removeEmptyString = Z;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(l) {
    B[l] = new M(l, 0, !1, l, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(l) {
    var d = l[0];
    B[d] = new M(d, 1, !1, l[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(l) {
    B[l] = new M(l, 2, !1, l.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(l) {
    B[l] = new M(l, 2, !1, l, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(l) {
    B[l] = new M(l, 3, !1, l.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(l) {
    B[l] = new M(l, 3, !0, l, null, !1, !1);
  }), ["capture", "download"].forEach(function(l) {
    B[l] = new M(l, 4, !1, l, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(l) {
    B[l] = new M(l, 6, !1, l, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(l) {
    B[l] = new M(l, 5, !1, l.toLowerCase(), null, !1, !1);
  });
  var K = /[\-:]([a-z])/g;
  function ne(l) {
    return l[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(l) {
    var d = l.replace(
      K,
      ne
    );
    B[d] = new M(d, 1, !1, l, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(l) {
    var d = l.replace(K, ne);
    B[d] = new M(d, 1, !1, l, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(l) {
    var d = l.replace(K, ne);
    B[d] = new M(d, 1, !1, l, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(l) {
    B[l] = new M(l, 1, !1, l.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new M("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(l) {
    B[l] = new M(l, 1, !1, l.toLowerCase(), null, !0, !0);
  });
  var G = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(G).forEach(function(l) {
    _.forEach(function(d) {
      d = d + l.charAt(0).toUpperCase() + l.substring(1), G[d] = G[l];
    });
  });
  var V = /["'&<>]/;
  function W(l) {
    if (typeof l == "boolean" || typeof l == "number") return "" + l;
    l = "" + l;
    var d = V.exec(l);
    if (d) {
      var y = "", D, H = 0;
      for (D = d.index; D < l.length; D++) {
        switch (l.charCodeAt(D)) {
          case 34:
            d = "&quot;";
            break;
          case 38:
            d = "&amp;";
            break;
          case 39:
            d = "&#x27;";
            break;
          case 60:
            d = "&lt;";
            break;
          case 62:
            d = "&gt;";
            break;
          default:
            continue;
        }
        H !== D && (y += l.substring(H, D)), H = D + 1, y += d;
      }
      l = H !== D ? y + l.substring(H, D) : y;
    }
    return l;
  }
  var re = /([A-Z])/g, te = /^ms-/, se = Array.isArray, le = S("<script>"), X = S("<\/script>"), fe = S('<script src="'), ue = S('<script type="module" src="'), Be = S('" async=""><\/script>'), Se = /(<\/|<)(s)(cript)/gi;
  function ee(l, d, y, D) {
    return "" + d + (y === "s" ? "\\u0073" : "\\u0053") + D;
  }
  function ce(l, d, y, D, H) {
    l = l === void 0 ? "" : l, d = d === void 0 ? le : S('<script nonce="' + W(d) + '">');
    var F = [];
    if (y !== void 0 && F.push(d, m(("" + y).replace(Se, ee)), X), D !== void 0) for (y = 0; y < D.length; y++) F.push(fe, m(W(D[y])), Be);
    if (H !== void 0) for (D = 0; D < H.length; D++) F.push(ue, m(W(H[D])), Be);
    return { bootstrapChunks: F, startInlineScript: d, placeholderPrefix: S(l + "P:"), segmentPrefix: S(l + "S:"), boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function de(l, d) {
    return { insertionMode: l, selectedValue: d };
  }
  function xe(l) {
    return de(l === "http://www.w3.org/2000/svg" ? 2 : l === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(l, d, y) {
    switch (d) {
      case "select":
        return de(1, y.value != null ? y.value : y.defaultValue);
      case "svg":
        return de(2, null);
      case "math":
        return de(3, null);
      case "foreignObject":
        return de(1, null);
      case "table":
        return de(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return de(5, null);
      case "colgroup":
        return de(7, null);
      case "tr":
        return de(6, null);
    }
    return 4 <= l.insertionMode || l.insertionMode === 0 ? de(1, null) : l;
  }
  var ie = S("<!-- -->");
  function we(l, d, y, D) {
    return d === "" ? D : (D && l.push(ie), l.push(m(W(d))), !0);
  }
  var ve = /* @__PURE__ */ new Map(), Ae = S(' style="'), Me = S(":"), it = S(";");
  function At(l, d, y) {
    if (typeof y != "object") throw Error(i(62));
    d = !0;
    for (var D in y) if (k.call(y, D)) {
      var H = y[D];
      if (H != null && typeof H != "boolean" && H !== "") {
        if (D.indexOf("--") === 0) {
          var F = m(W(D));
          H = m(W(("" + H).trim()));
        } else {
          F = D;
          var Z = ve.get(F);
          Z !== void 0 || (Z = S(W(F.replace(re, "-$1").toLowerCase().replace(te, "-ms-"))), ve.set(F, Z)), F = Z, H = typeof H == "number" ? H === 0 || k.call(G, D) ? m("" + H) : m(H + "px") : m(W(("" + H).trim()));
        }
        d ? (d = !1, l.push(Ae, F, Me, H)) : l.push(it, F, Me, H);
      }
    }
    d || l.push(pe);
  }
  var nt = S(" "), me = S('="'), pe = S('"'), je = S('=""');
  function ke(l, d, y, D) {
    switch (y) {
      case "style":
        At(l, d, D);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < y.length) || y[0] !== "o" && y[0] !== "O" || y[1] !== "n" && y[1] !== "N") {
      if (d = B.hasOwnProperty(y) ? B[y] : null, d !== null) {
        switch (typeof D) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!d.acceptsBooleans) return;
        }
        switch (y = m(d.attributeName), d.type) {
          case 3:
            D && l.push(nt, y, je);
            break;
          case 4:
            D === !0 ? l.push(nt, y, je) : D !== !1 && l.push(nt, y, me, m(W(D)), pe);
            break;
          case 5:
            isNaN(D) || l.push(nt, y, me, m(W(D)), pe);
            break;
          case 6:
            !isNaN(D) && 1 <= D && l.push(nt, y, me, m(W(D)), pe);
            break;
          default:
            d.sanitizeURL && (D = "" + D), l.push(nt, y, me, m(W(D)), pe);
        }
      } else if (z(y)) {
        switch (typeof D) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (d = y.toLowerCase().slice(0, 5), d !== "data-" && d !== "aria-") return;
        }
        l.push(nt, m(y), me, m(W(D)), pe);
      }
    }
  }
  var Te = S(">"), Ge = S("/>");
  function Ue(l, d, y) {
    if (d != null) {
      if (y != null) throw Error(i(60));
      if (typeof d != "object" || !("__html" in d)) throw Error(i(61));
      d = d.__html, d != null && l.push(m("" + d));
    }
  }
  function Ye(l) {
    var d = "";
    return A.Children.forEach(l, function(y) {
      y != null && (d += y);
    }), d;
  }
  var et = S(' selected=""');
  function gt(l, d, y, D) {
    l.push(at(y));
    var H = y = null, F;
    for (F in d) if (k.call(d, F)) {
      var Z = d[F];
      if (Z != null) switch (F) {
        case "children":
          y = Z;
          break;
        case "dangerouslySetInnerHTML":
          H = Z;
          break;
        default:
          ke(l, D, F, Z);
      }
    }
    return l.push(Te), Ue(l, H, y), typeof y == "string" ? (l.push(m(W(y))), null) : y;
  }
  var Ot = S(`
`), Sr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Dt = /* @__PURE__ */ new Map();
  function at(l) {
    var d = Dt.get(l);
    if (d === void 0) {
      if (!Sr.test(l)) throw Error(i(65, l));
      d = S("<" + l), Dt.set(l, d);
    }
    return d;
  }
  var $e = S("<!DOCTYPE html>");
  function Kn(l, d, y, D, H) {
    switch (d) {
      case "select":
        l.push(at("select"));
        var F = null, Z = null;
        for (De in y) if (k.call(y, De)) {
          var q = y[De];
          if (q != null) switch (De) {
            case "children":
              F = q;
              break;
            case "dangerouslySetInnerHTML":
              Z = q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ke(l, D, De, q);
          }
        }
        return l.push(Te), Ue(l, Z, F), F;
      case "option":
        Z = H.selectedValue, l.push(at("option"));
        var be = q = null, Pe = null, De = null;
        for (F in y) if (k.call(y, F)) {
          var He = y[F];
          if (He != null) switch (F) {
            case "children":
              q = He;
              break;
            case "selected":
              Pe = He;
              break;
            case "dangerouslySetInnerHTML":
              De = He;
              break;
            case "value":
              be = He;
            default:
              ke(l, D, F, He);
          }
        }
        if (Z != null) if (y = be !== null ? "" + be : Ye(q), se(Z)) {
          for (D = 0; D < Z.length; D++)
            if ("" + Z[D] === y) {
              l.push(et);
              break;
            }
        } else "" + Z === y && l.push(et);
        else Pe && l.push(et);
        return l.push(Te), Ue(l, De, q), q;
      case "textarea":
        l.push(at("textarea")), De = Z = F = null;
        for (q in y) if (k.call(y, q) && (be = y[q], be != null)) switch (q) {
          case "children":
            De = be;
            break;
          case "value":
            F = be;
            break;
          case "defaultValue":
            Z = be;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(i(91));
          default:
            ke(l, D, q, be);
        }
        if (F === null && Z !== null && (F = Z), l.push(Te), De != null) {
          if (F != null) throw Error(i(92));
          if (se(De) && 1 < De.length) throw Error(i(93));
          F = "" + De;
        }
        return typeof F == "string" && F[0] === `
` && l.push(Ot), F !== null && l.push(m(W("" + F))), null;
      case "input":
        l.push(at("input")), be = De = q = F = null;
        for (Z in y) if (k.call(y, Z) && (Pe = y[Z], Pe != null)) switch (Z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(399, "input"));
          case "defaultChecked":
            be = Pe;
            break;
          case "defaultValue":
            q = Pe;
            break;
          case "checked":
            De = Pe;
            break;
          case "value":
            F = Pe;
            break;
          default:
            ke(l, D, Z, Pe);
        }
        return De !== null ? ke(
          l,
          D,
          "checked",
          De
        ) : be !== null && ke(l, D, "checked", be), F !== null ? ke(l, D, "value", F) : q !== null && ke(l, D, "value", q), l.push(Ge), null;
      case "menuitem":
        l.push(at("menuitem"));
        for (var xt in y) if (k.call(y, xt) && (F = y[xt], F != null)) switch (xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(400));
          default:
            ke(l, D, xt, F);
        }
        return l.push(Te), null;
      case "title":
        l.push(at("title")), F = null;
        for (He in y) if (k.call(y, He) && (Z = y[He], Z != null)) switch (He) {
          case "children":
            F = Z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(i(434));
          default:
            ke(l, D, He, Z);
        }
        return l.push(Te), F;
      case "listing":
      case "pre":
        l.push(at(d)), Z = F = null;
        for (be in y) if (k.call(y, be) && (q = y[be], q != null)) switch (be) {
          case "children":
            F = q;
            break;
          case "dangerouslySetInnerHTML":
            Z = q;
            break;
          default:
            ke(l, D, be, q);
        }
        if (l.push(Te), Z != null) {
          if (F != null) throw Error(i(60));
          if (typeof Z != "object" || !("__html" in Z)) throw Error(i(61));
          y = Z.__html, y != null && (typeof y == "string" && 0 < y.length && y[0] === `
` ? l.push(Ot, m(y)) : l.push(m("" + y)));
        }
        return typeof F == "string" && F[0] === `
` && l.push(Ot), F;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        l.push(at(d));
        for (var kt in y) if (k.call(y, kt) && (F = y[kt], F != null)) switch (kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(399, d));
          default:
            ke(l, D, kt, F);
        }
        return l.push(Ge), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return gt(l, y, d, D);
      case "html":
        return H.insertionMode === 0 && l.push($e), gt(l, y, d, D);
      default:
        if (d.indexOf("-") === -1 && typeof y.is != "string") return gt(l, y, d, D);
        l.push(at(d)), Z = F = null;
        for (Pe in y) if (k.call(y, Pe) && (q = y[Pe], q != null)) switch (Pe) {
          case "children":
            F = q;
            break;
          case "dangerouslySetInnerHTML":
            Z = q;
            break;
          case "style":
            At(l, D, q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            z(Pe) && typeof q != "function" && typeof q != "symbol" && l.push(nt, m(Pe), me, m(W(q)), pe);
        }
        return l.push(Te), Ue(l, Z, F), F;
    }
  }
  var $n = S("</"), qn = S(">"), Xe = S('<template id="'), er = S('"></template>'), Cr = S("<!--$-->"), Er = S('<!--$?--><template id="'), tr = S('"></template>'), Bn = S("<!--$!-->"), oo = S("<!--/$-->"), nr = S("<template"), tn = S('"'), rr = S(' data-dgst="');
  S(' data-msg="'), S(' data-stck="');
  var Dr = S("></template>");
  function ct(l, d, y) {
    if (a(l, Er), y === null) throw Error(i(395));
    return a(l, y), g(l, tr);
  }
  var Ft = S('<div hidden id="'), nn = S('">'), Ne = S("</div>"), rn = S('<svg aria-hidden="true" style="display:none" id="'), In = S('">'), mn = S("</svg>"), Nt = S('<math aria-hidden="true" style="display:none" id="'), Rn = S('">'), Vt = S("</math>"), tt = S('<table hidden id="'), or = S('">'), ar = S("</table>"), Tr = S('<table hidden><tbody id="'), Ve = S('">'), ir = S("</tbody></table>"), ao = S('<table hidden><tr id="'), io = S('">'), Lt = S("</tr></table>"), sr = S('<table hidden><colgroup id="'), Mn = S('">'), on = S("</colgroup></table>");
  function mt(l, d, y, D) {
    switch (y.insertionMode) {
      case 0:
      case 1:
        return a(l, Ft), a(l, d.segmentPrefix), a(l, m(D.toString(16))), g(l, nn);
      case 2:
        return a(l, rn), a(l, d.segmentPrefix), a(l, m(D.toString(16))), g(l, In);
      case 3:
        return a(l, Nt), a(l, d.segmentPrefix), a(l, m(D.toString(16))), g(l, Rn);
      case 4:
        return a(l, tt), a(l, d.segmentPrefix), a(l, m(D.toString(16))), g(l, or);
      case 5:
        return a(l, Tr), a(l, d.segmentPrefix), a(l, m(D.toString(16))), g(l, Ve);
      case 6:
        return a(l, ao), a(l, d.segmentPrefix), a(l, m(D.toString(16))), g(l, io);
      case 7:
        return a(
          l,
          sr
        ), a(l, d.segmentPrefix), a(l, m(D.toString(16))), g(l, Mn);
      default:
        throw Error(i(397));
    }
  }
  function Ht(l, d) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return g(l, Ne);
      case 2:
        return g(l, mn);
      case 3:
        return g(l, Vt);
      case 4:
        return g(l, ar);
      case 5:
        return g(l, ir);
      case 6:
        return g(l, Lt);
      case 7:
        return g(l, on);
      default:
        throw Error(i(397));
    }
  }
  var jn = S('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), an = S('$RS("'), sn = S('","'), Ut = S('")<\/script>'), ln = S('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), yt = S('$RC("'), Pr = S('","'), kr = S('")<\/script>'), Jt = S('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Je = S('$RX("'), zt = S('"'), Wt = S(")<\/script>"), An = S(","), Qn = /[<\u2028\u2029]/g;
  function Tt(l) {
    return JSON.stringify(l).replace(Qn, function(d) {
      switch (d) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var _t = Object.assign, ut = Symbol.for("react.element"), cn = Symbol.for("react.portal"), yn = Symbol.for("react.fragment"), On = Symbol.for("react.strict_mode"), Ct = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), dt = Symbol.for("react.context"), Fn = Symbol.for("react.forward_ref"), rt = Symbol.for("react.suspense"), bt = Symbol.for("react.suspense_list"), s = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.scope"), T = Symbol.for("react.debug_trace_mode"), L = Symbol.for("react.legacy_hidden"), j = Symbol.for("react.default_value"), U = Symbol.iterator;
  function $(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case yn:
        return "Fragment";
      case cn:
        return "Portal";
      case Ct:
        return "Profiler";
      case On:
        return "StrictMode";
      case rt:
        return "Suspense";
      case bt:
        return "SuspenseList";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case dt:
        return (l.displayName || "Context") + ".Consumer";
      case Zt:
        return (l._context.displayName || "Context") + ".Provider";
      case Fn:
        var d = l.render;
        return l = l.displayName, l || (l = d.displayName || d.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case s:
        return d = l.displayName || null, d !== null ? d : $(l.type) || "Memo";
      case p:
        d = l._payload, l = l._init;
        try {
          return $(l(d));
        } catch {
        }
    }
    return null;
  }
  var he = {};
  function ye(l, d) {
    if (l = l.contextTypes, !l) return he;
    var y = {}, D;
    for (D in l) y[D] = d[D];
    return y;
  }
  var ge = null;
  function Qe(l, d) {
    if (l !== d) {
      l.context._currentValue = l.parentValue, l = l.parent;
      var y = d.parent;
      if (l === null) {
        if (y !== null) throw Error(i(401));
      } else {
        if (y === null) throw Error(i(401));
        Qe(l, y);
      }
      d.context._currentValue = d.value;
    }
  }
  function ft(l) {
    l.context._currentValue = l.parentValue, l = l.parent, l !== null && ft(l);
  }
  function pt(l) {
    var d = l.parent;
    d !== null && pt(d), l.context._currentValue = l.value;
  }
  function ht(l, d) {
    if (l.context._currentValue = l.parentValue, l = l.parent, l === null) throw Error(i(402));
    l.depth === d.depth ? Qe(l, d) : ht(l, d);
  }
  function un(l, d) {
    var y = d.parent;
    if (y === null) throw Error(i(402));
    l.depth === y.depth ? Qe(l, y) : un(l, y), d.context._currentValue = d.value;
  }
  function Gt(l) {
    var d = ge;
    d !== l && (d === null ? pt(l) : l === null ? ft(d) : d.depth === l.depth ? Qe(d, l) : d.depth > l.depth ? ht(d, l) : un(d, l), ge = l);
  }
  var Nn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(l, d) {
    l = l._reactInternals, l.queue !== null && l.queue.push(d);
  }, enqueueReplaceState: function(l, d) {
    l = l._reactInternals, l.replace = !0, l.queue = [d];
  }, enqueueForceUpdate: function() {
  } };
  function dn(l, d, y, D) {
    var H = l.state !== void 0 ? l.state : null;
    l.updater = Nn, l.props = y, l.state = H;
    var F = { queue: [], replace: !1 };
    l._reactInternals = F;
    var Z = d.contextType;
    if (l.context = typeof Z == "object" && Z !== null ? Z._currentValue : D, Z = d.getDerivedStateFromProps, typeof Z == "function" && (Z = Z(y, H), H = Z == null ? H : _t({}, H, Z), l.state = H), typeof d.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function")) if (d = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), d !== l.state && Nn.enqueueReplaceState(l, l.state, null), F.queue !== null && 0 < F.queue.length) if (d = F.queue, Z = F.replace, F.queue = null, F.replace = !1, Z && d.length === 1) l.state = d[0];
    else {
      for (F = Z ? d[0] : l.state, H = !0, Z = Z ? 1 : 0; Z < d.length; Z++) {
        var q = d[Z];
        q = typeof q == "function" ? q.call(l, F, y, D) : q, q != null && (H ? (H = !1, F = _t({}, F, q)) : _t(F, q));
      }
      l.state = F;
    }
    else F.queue = null;
  }
  var bn = { id: 1, overflow: "" };
  function Kt(l, d, y) {
    var D = l.id;
    l = l.overflow;
    var H = 32 - wn(D) - 1;
    D &= ~(1 << H), y += 1;
    var F = 32 - wn(d) + H;
    if (30 < F) {
      var Z = H - H % 5;
      return F = (D & (1 << Z) - 1).toString(32), D >>= Z, H -= Z, { id: 1 << 32 - wn(d) + H | y << H | D, overflow: F + l };
    }
    return { id: 1 << F | y << H | D, overflow: l };
  }
  var wn = Math.clz32 ? Math.clz32 : Br, Va = Math.log, Ja = Math.LN2;
  function Br(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Va(l) / Ja | 0) | 0;
  }
  function Yt(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var Ka = typeof Object.is == "function" ? Object.is : Yt, $t = null, so = null, Ir = null, Le = null, xn = !1, Rr = !1, Sn = 0, fn = null, Mr = 0;
  function pn() {
    if ($t === null) throw Error(i(321));
    return $t;
  }
  function Pt() {
    if (0 < Mr) throw Error(i(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function lo() {
    return Le === null ? Ir === null ? (xn = !1, Ir = Le = Pt()) : (xn = !0, Le = Ir) : Le.next === null ? (xn = !1, Le = Le.next = Pt()) : (xn = !0, Le = Le.next), Le;
  }
  function lr() {
    so = $t = null, Rr = !1, Ir = null, Mr = 0, Le = fn = null;
  }
  function Yo(l, d) {
    return typeof d == "function" ? d(l) : d;
  }
  function jr(l, d, y) {
    if ($t = pn(), Le = lo(), xn) {
      var D = Le.queue;
      if (d = D.dispatch, fn !== null && (y = fn.get(D), y !== void 0)) {
        fn.delete(D), D = Le.memoizedState;
        do
          D = l(D, y.action), y = y.next;
        while (y !== null);
        return Le.memoizedState = D, [D, d];
      }
      return [Le.memoizedState, d];
    }
    return l = l === Yo ? typeof d == "function" ? d() : d : y !== void 0 ? y(d) : d, Le.memoizedState = l, l = Le.queue = { last: null, dispatch: null }, l = l.dispatch = $a.bind(null, $t, l), [Le.memoizedState, l];
  }
  function Xo(l, d) {
    if ($t = pn(), Le = lo(), d = d === void 0 ? null : d, Le !== null) {
      var y = Le.memoizedState;
      if (y !== null && d !== null) {
        var D = y[1];
        e: if (D === null) D = !1;
        else {
          for (var H = 0; H < D.length && H < d.length; H++) if (!Ka(d[H], D[H])) {
            D = !1;
            break e;
          }
          D = !0;
        }
        if (D) return y[0];
      }
    }
    return l = l(), Le.memoizedState = [l, d], l;
  }
  function $a(l, d, y) {
    if (25 <= Mr) throw Error(i(301));
    if (l === $t) if (Rr = !0, l = { action: y, next: null }, fn === null && (fn = /* @__PURE__ */ new Map()), y = fn.get(d), y === void 0) fn.set(d, l);
    else {
      for (d = y; d.next !== null; ) d = d.next;
      d.next = l;
    }
  }
  function qa() {
    throw Error(i(394));
  }
  function Qr() {
  }
  var Vo = { readContext: function(l) {
    return l._currentValue;
  }, useContext: function(l) {
    return pn(), l._currentValue;
  }, useMemo: Xo, useReducer: jr, useRef: function(l) {
    $t = pn(), Le = lo();
    var d = Le.memoizedState;
    return d === null ? (l = { current: l }, Le.memoizedState = l) : d;
  }, useState: function(l) {
    return jr(Yo, l);
  }, useInsertionEffect: Qr, useLayoutEffect: function() {
  }, useCallback: function(l, d) {
    return Xo(function() {
      return l;
    }, d);
  }, useImperativeHandle: Qr, useEffect: Qr, useDebugValue: Qr, useDeferredValue: function(l) {
    return pn(), l;
  }, useTransition: function() {
    return pn(), [!1, qa];
  }, useId: function() {
    var l = so.treeContext, d = l.overflow;
    l = l.id, l = (l & ~(1 << 32 - wn(l) - 1)).toString(32) + d;
    var y = Ar;
    if (y === null) throw Error(i(404));
    return d = Sn++, l = ":" + y.idPrefix + "R" + l, 0 < d && (l += "H" + d.toString(32)), l + ":";
  }, useMutableSource: function(l, d) {
    return pn(), d(l._source);
  }, useSyncExternalStore: function(l, d, y) {
    if (y === void 0) throw Error(i(407));
    return y();
  } }, Ar = null, Ao = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ei(l) {
    return console.error(l), null;
  }
  function Ln() {
  }
  function co(l, d, y, D, H, F, Z, q, be) {
    var Pe = [], De = /* @__PURE__ */ new Set();
    return d = { destination: null, responseState: d, progressiveChunkSize: D === void 0 ? 12800 : D, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: De, pingedTasks: Pe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: H === void 0 ? ei : H, onAllReady: F === void 0 ? Ln : F, onShellReady: Z === void 0 ? Ln : Z, onShellError: q === void 0 ? Ln : q, onFatalError: be === void 0 ? Ln : be }, y = Hn(d, 0, null, y, !1, !1), y.parentFlushed = !0, l = uo(d, l, null, y, De, he, null, bn), Pe.push(l), d;
  }
  function uo(l, d, y, D, H, F, Z, q) {
    l.allPendingTasks++, y === null ? l.pendingRootTasks++ : y.pendingTasks++;
    var be = { node: d, ping: function() {
      var Pe = l.pingedTasks;
      Pe.push(be), Pe.length === 1 && na(l);
    }, blockedBoundary: y, blockedSegment: D, abortSet: H, legacyContext: F, context: Z, treeContext: q };
    return H.add(be), be;
  }
  function Hn(l, d, y, D, H, F) {
    return { status: 0, id: -1, index: d, parentFlushed: !1, chunks: [], children: [], formatContext: D, boundary: y, lastPushedText: H, textEmbedded: F };
  }
  function cr(l, d) {
    if (l = l.onError(d), l != null && typeof l != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof l + '" instead');
    return l;
  }
  function Or(l, d) {
    var y = l.onShellError;
    y(d), y = l.onFatalError, y(d), l.destination !== null ? (l.status = 2, R(l.destination, d)) : (l.status = 1, l.fatalError = d);
  }
  function Jo(l, d, y, D, H) {
    for ($t = {}, so = d, Sn = 0, l = y(D, H); Rr; ) Rr = !1, Sn = 0, Mr += 1, Le = null, l = y(D, H);
    return lr(), l;
  }
  function Ko(l, d, y, D) {
    var H = y.render(), F = D.childContextTypes;
    if (F != null) {
      var Z = d.legacyContext;
      if (typeof y.getChildContext != "function") D = Z;
      else {
        y = y.getChildContext();
        for (var q in y) if (!(q in F)) throw Error(i(108, $(D) || "Unknown", q));
        D = _t({}, Z, y);
      }
      d.legacyContext = D, wt(l, d, H), d.legacyContext = Z;
    } else wt(l, d, H);
  }
  function $o(l, d) {
    if (l && l.defaultProps) {
      d = _t({}, d), l = l.defaultProps;
      for (var y in l) d[y] === void 0 && (d[y] = l[y]);
      return d;
    }
    return d;
  }
  function Fr(l, d, y, D, H) {
    if (typeof y == "function") if (y.prototype && y.prototype.isReactComponent) {
      H = ye(y, d.legacyContext);
      var F = y.contextType;
      F = new y(D, typeof F == "object" && F !== null ? F._currentValue : H), dn(F, y, D, H), Ko(l, d, F, y);
    } else {
      F = ye(y, d.legacyContext), H = Jo(l, d, y, D, F);
      var Z = Sn !== 0;
      if (typeof H == "object" && H !== null && typeof H.render == "function" && H.$$typeof === void 0) dn(H, y, D, F), Ko(l, d, H, y);
      else if (Z) {
        D = d.treeContext, d.treeContext = Kt(D, 1, 0);
        try {
          wt(l, d, H);
        } finally {
          d.treeContext = D;
        }
      } else wt(l, d, H);
    }
    else if (typeof y == "string") {
      switch (H = d.blockedSegment, F = Kn(H.chunks, y, D, l.responseState, H.formatContext), H.lastPushedText = !1, Z = H.formatContext, H.formatContext = oe(Z, y, D), Nr(l, d, F), H.formatContext = Z, y) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          H.chunks.push($n, m(y), qn);
      }
      H.lastPushedText = !1;
    } else {
      switch (y) {
        case L:
        case T:
        case On:
        case Ct:
        case yn:
          wt(l, d, D.children);
          return;
        case bt:
          wt(l, d, D.children);
          return;
        case w:
          throw Error(i(343));
        case rt:
          e: {
            y = d.blockedBoundary, H = d.blockedSegment, F = D.fallback, D = D.children, Z = /* @__PURE__ */ new Set();
            var q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Z, errorDigest: null }, be = Hn(l, H.chunks.length, q, H.formatContext, !1, !1);
            H.children.push(be), H.lastPushedText = !1;
            var Pe = Hn(l, 0, null, H.formatContext, !1, !1);
            Pe.parentFlushed = !0, d.blockedBoundary = q, d.blockedSegment = Pe;
            try {
              if (Nr(
                l,
                d,
                D
              ), Pe.lastPushedText && Pe.textEmbedded && Pe.chunks.push(ie), Pe.status = 1, Lr(q, Pe), q.pendingTasks === 0) break e;
            } catch (De) {
              Pe.status = 4, q.forceClientRender = !0, q.errorDigest = cr(l, De);
            } finally {
              d.blockedBoundary = y, d.blockedSegment = H;
            }
            d = uo(l, F, y, be, Z, d.legacyContext, d.context, d.treeContext), l.pingedTasks.push(d);
          }
          return;
      }
      if (typeof y == "object" && y !== null) switch (y.$$typeof) {
        case Fn:
          if (D = Jo(l, d, y.render, D, H), Sn !== 0) {
            y = d.treeContext, d.treeContext = Kt(y, 1, 0);
            try {
              wt(l, d, D);
            } finally {
              d.treeContext = y;
            }
          } else wt(l, d, D);
          return;
        case s:
          y = y.type, D = $o(y, D), Fr(l, d, y, D, H);
          return;
        case Zt:
          if (H = D.children, y = y._context, D = D.value, F = y._currentValue, y._currentValue = D, Z = ge, ge = D = { parent: Z, depth: Z === null ? 0 : Z.depth + 1, context: y, parentValue: F, value: D }, d.context = D, wt(l, d, H), l = ge, l === null) throw Error(i(403));
          D = l.parentValue, l.context._currentValue = D === j ? l.context._defaultValue : D, l = ge = l.parent, d.context = l;
          return;
        case dt:
          D = D.children, D = D(y._currentValue), wt(l, d, D);
          return;
        case p:
          H = y._init, y = H(y._payload), D = $o(y, D), Fr(l, d, y, D, void 0);
          return;
      }
      throw Error(i(
        130,
        y == null ? y : typeof y,
        ""
      ));
    }
  }
  function wt(l, d, y) {
    if (d.node = y, typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ut:
          Fr(l, d, y.type, y.props, y.ref);
          return;
        case cn:
          throw Error(i(257));
        case p:
          var D = y._init;
          y = D(y._payload), wt(l, d, y);
          return;
      }
      if (se(y)) {
        qo(l, d, y);
        return;
      }
      if (y === null || typeof y != "object" ? D = null : (D = U && y[U] || y["@@iterator"], D = typeof D == "function" ? D : null), D && (D = D.call(y))) {
        if (y = D.next(), !y.done) {
          var H = [];
          do
            H.push(y.value), y = D.next();
          while (!y.done);
          qo(l, d, H);
        }
        return;
      }
      throw l = Object.prototype.toString.call(y), Error(i(31, l === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : l));
    }
    typeof y == "string" ? (D = d.blockedSegment, D.lastPushedText = we(d.blockedSegment.chunks, y, l.responseState, D.lastPushedText)) : typeof y == "number" && (D = d.blockedSegment, D.lastPushedText = we(d.blockedSegment.chunks, "" + y, l.responseState, D.lastPushedText));
  }
  function qo(l, d, y) {
    for (var D = y.length, H = 0; H < D; H++) {
      var F = d.treeContext;
      d.treeContext = Kt(F, D, H);
      try {
        Nr(l, d, y[H]);
      } finally {
        d.treeContext = F;
      }
    }
  }
  function Nr(l, d, y) {
    var D = d.blockedSegment.formatContext, H = d.legacyContext, F = d.context;
    try {
      return wt(l, d, y);
    } catch (be) {
      if (lr(), typeof be == "object" && be !== null && typeof be.then == "function") {
        y = be;
        var Z = d.blockedSegment, q = Hn(l, Z.chunks.length, null, Z.formatContext, Z.lastPushedText, !0);
        Z.children.push(q), Z.lastPushedText = !1, l = uo(l, d.node, d.blockedBoundary, q, d.abortSet, d.legacyContext, d.context, d.treeContext).ping, y.then(l, l), d.blockedSegment.formatContext = D, d.legacyContext = H, d.context = F, Gt(F);
      } else throw d.blockedSegment.formatContext = D, d.legacyContext = H, d.context = F, Gt(F), be;
    }
  }
  function ti(l) {
    var d = l.blockedBoundary;
    l = l.blockedSegment, l.status = 3, ta(this, d, l);
  }
  function ea(l, d, y) {
    var D = l.blockedBoundary;
    l.blockedSegment.status = 3, D === null ? (d.allPendingTasks--, d.status !== 2 && (d.status = 2, d.destination !== null && d.destination.close())) : (D.pendingTasks--, D.forceClientRender || (D.forceClientRender = !0, l = y === void 0 ? Error(i(432)) : y, D.errorDigest = d.onError(l), D.parentFlushed && d.clientRenderedBoundaries.push(D)), D.fallbackAbortableTasks.forEach(function(H) {
      return ea(H, d, y);
    }), D.fallbackAbortableTasks.clear(), d.allPendingTasks--, d.allPendingTasks === 0 && (D = d.onAllReady, D()));
  }
  function Lr(l, d) {
    if (d.chunks.length === 0 && d.children.length === 1 && d.children[0].boundary === null) {
      var y = d.children[0];
      y.id = d.id, y.parentFlushed = !0, y.status === 1 && Lr(l, y);
    } else l.completedSegments.push(d);
  }
  function ta(l, d, y) {
    if (d === null) {
      if (y.parentFlushed) {
        if (l.completedRootSegment !== null) throw Error(i(389));
        l.completedRootSegment = y;
      }
      l.pendingRootTasks--, l.pendingRootTasks === 0 && (l.onShellError = Ln, d = l.onShellReady, d());
    } else d.pendingTasks--, d.forceClientRender || (d.pendingTasks === 0 ? (y.parentFlushed && y.status === 1 && Lr(d, y), d.parentFlushed && l.completedBoundaries.push(d), d.fallbackAbortableTasks.forEach(ti, l), d.fallbackAbortableTasks.clear()) : y.parentFlushed && y.status === 1 && (Lr(d, y), d.completedSegments.length === 1 && d.parentFlushed && l.partialBoundaries.push(d)));
    l.allPendingTasks--, l.allPendingTasks === 0 && (l = l.onAllReady, l());
  }
  function na(l) {
    if (l.status !== 2) {
      var d = ge, y = Ao.current;
      Ao.current = Vo;
      var D = Ar;
      Ar = l.responseState;
      try {
        var H = l.pingedTasks, F;
        for (F = 0; F < H.length; F++) {
          var Z = H[F], q = l, be = Z.blockedSegment;
          if (be.status === 0) {
            Gt(Z.context);
            try {
              wt(q, Z, Z.node), be.lastPushedText && be.textEmbedded && be.chunks.push(ie), Z.abortSet.delete(Z), be.status = 1, ta(q, Z.blockedBoundary, be);
            } catch (Bt) {
              if (lr(), typeof Bt == "object" && Bt !== null && typeof Bt.then == "function") {
                var Pe = Z.ping;
                Bt.then(Pe, Pe);
              } else {
                Z.abortSet.delete(Z), be.status = 4;
                var De = Z.blockedBoundary, He = Bt, xt = cr(q, He);
                if (De === null ? Or(q, He) : (De.pendingTasks--, De.forceClientRender || (De.forceClientRender = !0, De.errorDigest = xt, De.parentFlushed && q.clientRenderedBoundaries.push(De))), q.allPendingTasks--, q.allPendingTasks === 0) {
                  var kt = q.onAllReady;
                  kt();
                }
              }
            } finally {
            }
          }
        }
        H.splice(0, F), l.destination !== null && fo(l, l.destination);
      } catch (Bt) {
        cr(l, Bt), Or(l, Bt);
      } finally {
        Ar = D, Ao.current = y, y === Vo && Gt(d);
      }
    }
  }
  function Hr(l, d, y) {
    switch (y.parentFlushed = !0, y.status) {
      case 0:
        var D = y.id = l.nextSegmentId++;
        return y.lastPushedText = !1, y.textEmbedded = !1, l = l.responseState, a(d, Xe), a(d, l.placeholderPrefix), l = m(D.toString(16)), a(d, l), g(d, er);
      case 1:
        y.status = 2;
        var H = !0;
        D = y.chunks;
        var F = 0;
        y = y.children;
        for (var Z = 0; Z < y.length; Z++) {
          for (H = y[Z]; F < H.index; F++) a(d, D[F]);
          H = Ur(l, d, H);
        }
        for (; F < D.length - 1; F++) a(d, D[F]);
        return F < D.length && (H = g(d, D[F])), H;
      default:
        throw Error(i(390));
    }
  }
  function Ur(l, d, y) {
    var D = y.boundary;
    if (D === null) return Hr(l, d, y);
    if (D.parentFlushed = !0, D.forceClientRender) D = D.errorDigest, g(d, Bn), a(d, nr), D && (a(d, rr), a(d, m(W(D))), a(d, tn)), g(d, Dr), Hr(l, d, y);
    else if (0 < D.pendingTasks) {
      D.rootSegmentID = l.nextSegmentId++, 0 < D.completedSegments.length && l.partialBoundaries.push(D);
      var H = l.responseState, F = H.nextSuspenseID++;
      H = S(H.boundaryPrefix + F.toString(16)), D = D.id = H, ct(d, l.responseState, D), Hr(l, d, y);
    } else if (D.byteSize > l.progressiveChunkSize) D.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(D), ct(d, l.responseState, D.id), Hr(l, d, y);
    else {
      if (g(d, Cr), y = D.completedSegments, y.length !== 1) throw Error(i(391));
      Ur(l, d, y[0]);
    }
    return g(d, oo);
  }
  function ra(l, d, y) {
    return mt(d, l.responseState, y.formatContext, y.id), Ur(l, d, y), Ht(d, y.formatContext);
  }
  function oa(l, d, y) {
    for (var D = y.completedSegments, H = 0; H < D.length; H++) aa(l, d, y, D[H]);
    if (D.length = 0, l = l.responseState, D = y.id, y = y.rootSegmentID, a(d, l.startInlineScript), l.sentCompleteBoundaryFunction ? a(d, yt) : (l.sentCompleteBoundaryFunction = !0, a(d, ln)), D === null) throw Error(i(395));
    return y = m(y.toString(16)), a(d, D), a(d, Pr), a(d, l.segmentPrefix), a(d, y), g(d, kr);
  }
  function aa(l, d, y, D) {
    if (D.status === 2) return !0;
    var H = D.id;
    if (H === -1) {
      if ((D.id = y.rootSegmentID) === -1) throw Error(i(392));
      return ra(l, d, D);
    }
    return ra(l, d, D), l = l.responseState, a(d, l.startInlineScript), l.sentCompleteSegmentFunction ? a(d, an) : (l.sentCompleteSegmentFunction = !0, a(d, jn)), a(d, l.segmentPrefix), H = m(H.toString(16)), a(d, H), a(d, sn), a(d, l.placeholderPrefix), a(d, H), g(d, Ut);
  }
  function fo(l, d) {
    u = new Uint8Array(512), v = 0;
    try {
      var y = l.completedRootSegment;
      if (y !== null && l.pendingRootTasks === 0) {
        Ur(l, d, y), l.completedRootSegment = null;
        var D = l.responseState.bootstrapChunks;
        for (y = 0; y < D.length - 1; y++) a(d, D[y]);
        y < D.length && g(d, D[y]);
      }
      var H = l.clientRenderedBoundaries, F;
      for (F = 0; F < H.length; F++) {
        var Z = H[F];
        D = d;
        var q = l.responseState, be = Z.id, Pe = Z.errorDigest, De = Z.errorMessage, He = Z.errorComponentStack;
        if (a(D, q.startInlineScript), q.sentClientRenderFunction ? a(D, Je) : (q.sentClientRenderFunction = !0, a(
          D,
          Jt
        )), be === null) throw Error(i(395));
        a(D, be), a(D, zt), (Pe || De || He) && (a(D, An), a(D, m(Tt(Pe || "")))), (De || He) && (a(D, An), a(D, m(Tt(De || "")))), He && (a(D, An), a(D, m(Tt(He)))), g(D, Wt);
      }
      H.splice(0, F);
      var xt = l.completedBoundaries;
      for (F = 0; F < xt.length; F++) oa(l, d, xt[F]);
      xt.splice(0, F), E(d), u = new Uint8Array(512), v = 0;
      var kt = l.partialBoundaries;
      for (F = 0; F < kt.length; F++) {
        var Bt = kt[F];
        e: {
          H = l, Z = d;
          var zr = Bt.completedSegments;
          for (q = 0; q < zr.length; q++) if (!aa(
            H,
            Z,
            Bt,
            zr[q]
          )) {
            q++, zr.splice(0, q);
            var sa = !1;
            break e;
          }
          zr.splice(0, q), sa = !0;
        }
        if (!sa) {
          l.destination = null, F++, kt.splice(0, F);
          return;
        }
      }
      kt.splice(0, F);
      var ur = l.completedBoundaries;
      for (F = 0; F < ur.length; F++) oa(l, d, ur[F]);
      ur.splice(0, F);
    } finally {
      E(d), l.allPendingTasks === 0 && l.pingedTasks.length === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 && d.close();
    }
  }
  function ia(l, d) {
    try {
      var y = l.abortableTasks;
      y.forEach(function(D) {
        return ea(D, l, d);
      }), y.clear(), l.destination !== null && fo(l, l.destination);
    } catch (D) {
      cr(l, D), Or(l, D);
    }
  }
  return js.renderToReadableStream = function(l, d) {
    return new Promise(function(y, D) {
      var H, F, Z = new Promise(function(De, He) {
        F = De, H = He;
      }), q = co(l, ce(d ? d.identifierPrefix : void 0, d ? d.nonce : void 0, d ? d.bootstrapScriptContent : void 0, d ? d.bootstrapScripts : void 0, d ? d.bootstrapModules : void 0), xe(d ? d.namespaceURI : void 0), d ? d.progressiveChunkSize : void 0, d ? d.onError : void 0, F, function() {
        var De = new ReadableStream({ type: "bytes", pull: function(He) {
          if (q.status === 1) q.status = 2, R(He, q.fatalError);
          else if (q.status !== 2 && q.destination === null) {
            q.destination = He;
            try {
              fo(q, He);
            } catch (xt) {
              cr(q, xt), Or(q, xt);
            }
          }
        }, cancel: function() {
          ia(q);
        } }, { highWaterMark: 0 });
        De.allReady = Z, y(De);
      }, function(De) {
        Z.catch(function() {
        }), D(De);
      }, H);
      if (d && d.signal) {
        var be = d.signal, Pe = function() {
          ia(q, be.reason), be.removeEventListener("abort", Pe);
        };
        be.addEventListener("abort", Pe);
      }
      na(q);
    });
  }, js.version = "18.3.1", js;
}
var Uo = {}, FA;
function xd() {
  return FA || (FA = 1, Wi.env.NODE_ENV !== "production" && function() {
    var A = x, i = "18.3.1", u = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        g("warn", e, n);
      }
    }
    function a(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        g("error", e, n);
      }
    }
    function g(e, t, n) {
      {
        var o = u.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (t += "%s", n = n.concat([c]));
        var h = n.map(function(b) {
          return String(b);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    function E(e) {
      e();
    }
    function C(e) {
    }
    function m(e, t) {
      S(e, t);
    }
    function S(e, t) {
      return e.push(t);
    }
    function R(e) {
    }
    function k(e) {
      e.push(null);
    }
    function I(e) {
      return e;
    }
    function O(e) {
      return e;
    }
    function N(e, t) {
      e.destroy(t);
    }
    function z(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function M(e) {
      try {
        return B(e), !1;
      } catch {
        return !0;
      }
    }
    function B(e) {
      return "" + e;
    }
    function K(e, t) {
      if (M(e))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, z(e)), B(e);
    }
    function ne(e, t) {
      if (M(e))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, z(e)), B(e);
    }
    function G(e) {
      if (M(e))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", z(e)), B(e);
    }
    var _ = Object.prototype.hasOwnProperty, V = 0, W = 1, re = 2, te = 3, se = 4, le = 5, X = 6, fe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ue = fe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Be = new RegExp("^[" + fe + "][" + ue + "]*$"), Se = {}, ee = {};
    function ce(e) {
      return _.call(ee, e) ? !0 : _.call(Se, e) ? !1 : Be.test(e) ? (ee[e] = !0, !0) : (Se[e] = !0, a("Invalid attribute name: `%s`", e), !1);
    }
    function de(e, t, n, o) {
      if (n !== null && n.type === V)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (n !== null)
            return !n.acceptsBooleans;
          var c = e.toLowerCase().slice(0, 5);
          return c !== "data-" && c !== "aria-";
        }
        default:
          return !1;
      }
    }
    function xe(e) {
      return ie.hasOwnProperty(e) ? ie[e] : null;
    }
    function oe(e, t, n, o, c, h, b) {
      this.acceptsBooleans = t === re || t === te || t === se, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = b;
    }
    var ie = {}, we = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    we.forEach(function(e) {
      ie[e] = new oe(
        e,
        V,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      ie[t] = new oe(
        t,
        W,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      ie[e] = new oe(
        e,
        re,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      ie[e] = new oe(
        e,
        re,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      ie[e] = new oe(
        e,
        te,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ie[e] = new oe(
        e,
        te,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ie[e] = new oe(
        e,
        se,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ie[e] = new oe(
        e,
        X,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      ie[e] = new oe(
        e,
        le,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ve = /[\-\:]([a-z])/g, Ae = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ve, Ae);
      ie[t] = new oe(
        t,
        W,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ve, Ae);
      ie[t] = new oe(
        t,
        W,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ve, Ae);
      ie[t] = new oe(
        t,
        W,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ie[e] = new oe(
        e,
        W,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Me = "xlinkHref";
    ie[Me] = new oe(
      "xlinkHref",
      W,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ie[e] = new oe(
        e,
        W,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var it = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function At(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nt = ["Webkit", "ms", "Moz", "O"];
    Object.keys(it).forEach(function(e) {
      nt.forEach(function(t) {
        it[At(t, e)] = it[e];
      });
    });
    var me = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function pe(e, t) {
      me[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function je(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ke = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Te = {}, Ge = new RegExp("^(aria)-[" + ue + "]*$"), Ue = new RegExp("^(aria)[A-Z][" + ue + "]*$");
    function Ye(e, t) {
      {
        if (_.call(Te, t) && Te[t])
          return !0;
        if (Ue.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = ke.hasOwnProperty(n) ? n : null;
          if (o == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Te[t] = !0, !0;
          if (t !== o)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Te[t] = !0, !0;
        }
        if (Ge.test(t)) {
          var c = t.toLowerCase(), h = ke.hasOwnProperty(c) ? c : null;
          if (h == null)
            return Te[t] = !0, !1;
          if (t !== h)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, h), Te[t] = !0, !0;
        }
      }
      return !0;
    }
    function et(e, t) {
      {
        var n = [];
        for (var o in t) {
          var c = Ye(e, o);
          c || n.push(o);
        }
        var h = n.map(function(b) {
          return "`" + b + "`";
        }).join(", ");
        n.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e) : n.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", h, e);
      }
    }
    function gt(e, t) {
      je(e, t) || et(e, t);
    }
    var Ot = !1;
    function Sr(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ot && (Ot = !0, e === "select" && t.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Dt = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, at = function() {
    };
    {
      var $e = {}, Kn = /^on./, $n = /^on[^A-Z]/, qn = new RegExp("^(aria)-[" + ue + "]*$"), Xe = new RegExp("^(aria)[A-Z][" + ue + "]*$");
      at = function(e, t, n, o) {
        if (_.call($e, t) && $e[t])
          return !0;
        var c = t.toLowerCase();
        if (c === "onfocusin" || c === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), $e[t] = !0, !0;
        if (o != null) {
          var h = o.registrationNameDependencies, b = o.possibleRegistrationNames;
          if (h.hasOwnProperty(t))
            return !0;
          var P = b.hasOwnProperty(c) ? b[c] : null;
          if (P != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", t, P), $e[t] = !0, !0;
          if (Kn.test(t))
            return a("Unknown event handler property `%s`. It will be ignored.", t), $e[t] = !0, !0;
        } else if (Kn.test(t))
          return $n.test(t) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), $e[t] = !0, !0;
        if (qn.test(t) || Xe.test(t))
          return !0;
        if (c === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), $e[t] = !0, !0;
        if (c === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), $e[t] = !0, !0;
        if (c === "is" && n !== null && n !== void 0 && typeof n != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), $e[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), $e[t] = !0, !0;
        var Q = xe(t), Y = Q !== null && Q.type === V;
        if (Dt.hasOwnProperty(c)) {
          var J = Dt[c];
          if (J !== t)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", t, J), $e[t] = !0, !0;
        } else if (!Y && t !== c)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, c), $e[t] = !0, !0;
        return typeof n == "boolean" && de(t, n, Q) ? (n ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), $e[t] = !0, !0) : Y ? !0 : de(t, n, Q) ? ($e[t] = !0, !1) : ((n === "false" || n === "true") && Q !== null && Q.type === te && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), $e[t] = !0), !0);
      };
    }
    var er = function(e, t, n) {
      {
        var o = [];
        for (var c in t) {
          var h = at(e, c, t[c], n);
          h || o.push(c);
        }
        var b = o.map(function(P) {
          return "`" + P + "`";
        }).join(", ");
        o.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", b, e) : o.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", b, e);
      }
    };
    function Cr(e, t, n) {
      je(e, t) || er(e, t, n);
    }
    var Er = function() {
    };
    {
      var tr = /^(?:webkit|moz|o)[A-Z]/, Bn = /^-ms-/, oo = /-(.)/g, nr = /;\s*$/, tn = {}, rr = {}, Dr = !1, ct = !1, Ft = function(e) {
        return e.replace(oo, function(t, n) {
          return n.toUpperCase();
        });
      }, nn = function(e) {
        tn.hasOwnProperty(e) && tn[e] || (tn[e] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ft(e.replace(Bn, "ms-"))
        ));
      }, Ne = function(e) {
        tn.hasOwnProperty(e) && tn[e] || (tn[e] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, rn = function(e, t) {
        rr.hasOwnProperty(t) && rr[t] || (rr[t] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(nr, "")));
      }, In = function(e, t) {
        Dr || (Dr = !0, a("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mn = function(e, t) {
        ct || (ct = !0, a("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Er = function(e, t) {
        e.indexOf("-") > -1 ? nn(e) : tr.test(e) ? Ne(e) : nr.test(t) && rn(e, t), typeof t == "number" && (isNaN(t) ? In(e, t) : isFinite(t) || mn(e, t));
      };
    }
    var Nt = Er, Rn = /["'&<>]/;
    function Vt(e) {
      G(e);
      var t = "" + e, n = Rn.exec(t);
      if (!n)
        return t;
      var o, c = "", h, b = 0;
      for (h = n.index; h < t.length; h++) {
        switch (t.charCodeAt(h)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        b !== h && (c += t.substring(b, h)), b = h + 1, c += o;
      }
      return b !== h ? c + t.substring(b, h) : c;
    }
    function tt(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Vt(e);
    }
    var or = /([A-Z])/g, ar = /^ms-/;
    function Tr(e) {
      return e.replace(or, "-$1").toLowerCase().replace(ar, "-ms-");
    }
    var Ve = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ir = !1;
    function ao(e) {
      !ir && Ve.test(e) && (ir = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var io = Array.isArray;
    function Lt(e) {
      return io(e);
    }
    var sr = "<script>";
    function Mn(e, t, n, o, c) {
      var h = e === void 0 ? "" : e, b = sr, P = [];
      return {
        bootstrapChunks: P,
        startInlineScript: b,
        placeholderPrefix: h + "P:",
        segmentPrefix: h + "S:",
        boundaryPrefix: h + "B:",
        idPrefix: h,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var on = 0, mt = 1, Ht = 2, jn = 3, an = 4, sn = 5, Ut = 6, ln = 7;
    function yt(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function Pr(e, t, n) {
      switch (t) {
        case "select":
          return yt(mt, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return yt(Ht, null);
        case "math":
          return yt(jn, null);
        case "foreignObject":
          return yt(mt, null);
        case "table":
          return yt(an, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return yt(sn, null);
        case "colgroup":
          return yt(ln, null);
        case "tr":
          return yt(Ut, null);
      }
      return e.insertionMode >= an || e.insertionMode === on ? yt(mt, null) : e;
    }
    var kr = null;
    function Jt(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function Je(e, t, n) {
      var o = e.idPrefix, c = ":" + o + "R" + t;
      return n > 0 && (c += "H" + n.toString(32)), c + ":";
    }
    function zt(e) {
      return tt(e);
    }
    var Wt = "<!-- -->";
    function An(e, t, n, o) {
      return t === "" ? o : (o && e.push(Wt), e.push(zt(t)), !0);
    }
    function Qn(e, t, n, o) {
      n && o && e.push(Wt);
    }
    var Tt = /* @__PURE__ */ new Map();
    function _t(e) {
      var t = Tt.get(e);
      if (t !== void 0)
        return t;
      var n = tt(Tr(e));
      return Tt.set(e, n), n;
    }
    var ut = ' style="', cn = ":", yn = ";";
    function On(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var c in n)
        if (_.call(n, c)) {
          var h = n[c];
          if (!(h == null || typeof h == "boolean" || h === "")) {
            var b = void 0, P = void 0, Q = c.indexOf("--") === 0;
            Q ? (b = tt(c), ne(h, c), P = tt(("" + h).trim())) : (Nt(c, h), b = _t(c), typeof h == "number" ? h !== 0 && !_.call(it, c) ? P = h + "px" : P = "" + h : (ne(h, c), P = tt(("" + h).trim()))), o ? (o = !1, e.push(ut, b, cn, P)) : e.push(yn, b, cn, P);
          }
        }
      o || e.push(dt);
    }
    var Ct = " ", Zt = '="', dt = '"', Fn = '=""';
    function rt(e, t, n, o) {
      switch (n) {
        case "style": {
          On(e, t, o);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(n.length > 2 && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N"))
      ) {
        var c = xe(n);
        if (c !== null) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!c.acceptsBooleans)
                return;
          }
          var h = c.attributeName, b = h;
          switch (c.type) {
            case te:
              o && e.push(Ct, b, Fn);
              return;
            case se:
              o === !0 ? e.push(Ct, b, Fn) : o === !1 || e.push(Ct, b, Zt, tt(o), dt);
              return;
            case le:
              isNaN(o) || e.push(Ct, b, Zt, tt(o), dt);
              break;
            case X:
              !isNaN(o) && o >= 1 && e.push(Ct, b, Zt, tt(o), dt);
              break;
            default:
              c.sanitizeURL && (K(o, h), o = "" + o, ao(o)), e.push(Ct, b, Zt, tt(o), dt);
          }
        } else if (ce(n)) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var P = n.toLowerCase().slice(0, 5);
              if (P !== "data-" && P !== "aria-")
                return;
            }
          }
          e.push(Ct, n, Zt, tt(o), dt);
        }
      }
    }
    var bt = ">", s = "/>";
    function p(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (G(o), e.push("" + o));
      }
    }
    var w = !1, T = !1, L = !1, j = !1, U = !1, $ = !1, he = !1;
    function ye(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = Lt(n);
          e.multiple && !o ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function ge(e, t, n) {
      pe("select", t), ye(t, "value"), ye(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !L && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), L = !0), e.push(Yt("select"));
      var o = null, c = null;
      for (var h in t)
        if (_.call(t, h)) {
          var b = t[h];
          if (b == null)
            continue;
          switch (h) {
            case "children":
              o = b;
              break;
            case "dangerouslySetInnerHTML":
              c = b;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              rt(e, n, h, b);
              break;
          }
        }
      return e.push(bt), p(e, c, o), o;
    }
    function Qe(e) {
      var t = "";
      return A.Children.forEach(e, function(n) {
        n != null && (t += n, !U && typeof n != "string" && typeof n != "number" && (U = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var ft = ' selected=""';
    function pt(e, t, n, o) {
      var c = o.selectedValue;
      e.push(Yt("option"));
      var h = null, b = null, P = null, Q = null;
      for (var Y in t)
        if (_.call(t, Y)) {
          var J = t[Y];
          if (J == null)
            continue;
          switch (Y) {
            case "children":
              h = J;
              break;
            case "selected":
              P = J, he || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), he = !0);
              break;
            case "dangerouslySetInnerHTML":
              Q = J;
              break;
            case "value":
              b = J;
            default:
              rt(e, n, Y, J);
              break;
          }
        }
      if (c != null) {
        var ae;
        if (b !== null ? (K(b, "value"), ae = "" + b) : (Q !== null && ($ || ($ = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), ae = Qe(h)), Lt(c))
          for (var Ce = 0; Ce < c.length; Ce++) {
            K(c[Ce], "value");
            var Fe = "" + c[Ce];
            if (Fe === ae) {
              e.push(ft);
              break;
            }
          }
        else
          K(c, "select.value"), "" + c === ae && e.push(ft);
      } else P && e.push(ft);
      return e.push(bt), p(e, Q, h), h;
    }
    function ht(e, t, n) {
      pe("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !T && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), T = !0), t.value !== void 0 && t.defaultValue !== void 0 && !w && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), w = !0), e.push(Yt("input"));
      var o = null, c = null, h = null, b = null;
      for (var P in t)
        if (_.call(t, P)) {
          var Q = t[P];
          if (Q == null)
            continue;
          switch (P) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              b = Q;
              break;
            case "defaultValue":
              c = Q;
              break;
            case "checked":
              h = Q;
              break;
            case "value":
              o = Q;
              break;
            default:
              rt(e, n, P, Q);
              break;
          }
        }
      return h !== null ? rt(e, n, "checked", h) : b !== null && rt(e, n, "checked", b), o !== null ? rt(e, n, "value", o) : c !== null && rt(e, n, "value", c), e.push(s), null;
    }
    function un(e, t, n) {
      pe("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !j && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), j = !0), e.push(Yt("textarea"));
      var o = null, c = null, h = null;
      for (var b in t)
        if (_.call(t, b)) {
          var P = t[b];
          if (P == null)
            continue;
          switch (b) {
            case "children":
              h = P;
              break;
            case "value":
              o = P;
              break;
            case "defaultValue":
              c = P;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              rt(e, n, b, P);
              break;
          }
        }
      if (o === null && c !== null && (o = c), e.push(bt), h != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Lt(h)) {
          if (h.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          G(h[0]), o = "" + h[0];
        }
        G(h), o = "" + h;
      }
      return typeof o == "string" && o[0] === `
` && e.push(wn), o !== null && (K(o, "value"), e.push(zt("" + o))), null;
    }
    function Gt(e, t, n, o) {
      e.push(Yt(n));
      for (var c in t)
        if (_.call(t, c)) {
          var h = t[c];
          if (h == null)
            continue;
          switch (c) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              rt(e, o, c, h);
              break;
          }
        }
      return e.push(s), null;
    }
    function Nn(e, t, n) {
      e.push(Yt("menuitem"));
      for (var o in t)
        if (_.call(t, o)) {
          var c = t[o];
          if (c == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              rt(e, n, o, c);
              break;
          }
        }
      return e.push(bt), null;
    }
    function dn(e, t, n) {
      e.push(Yt("title"));
      var o = null;
      for (var c in t)
        if (_.call(t, c)) {
          var h = t[c];
          if (h == null)
            continue;
          switch (c) {
            case "children":
              o = h;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              rt(e, n, c, h);
              break;
          }
        }
      e.push(bt);
      {
        var b = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : b != null && b.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : b != null && typeof b != "string" && typeof b != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function bn(e, t, n, o) {
      e.push(Yt(n));
      var c = null, h = null;
      for (var b in t)
        if (_.call(t, b)) {
          var P = t[b];
          if (P == null)
            continue;
          switch (b) {
            case "children":
              c = P;
              break;
            case "dangerouslySetInnerHTML":
              h = P;
              break;
            default:
              rt(e, o, b, P);
              break;
          }
        }
      return e.push(bt), p(e, h, c), typeof c == "string" ? (e.push(zt(c)), null) : c;
    }
    function Kt(e, t, n, o) {
      e.push(Yt(n));
      var c = null, h = null;
      for (var b in t)
        if (_.call(t, b)) {
          var P = t[b];
          if (P == null)
            continue;
          switch (b) {
            case "children":
              c = P;
              break;
            case "dangerouslySetInnerHTML":
              h = P;
              break;
            case "style":
              On(e, o, P);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ce(b) && typeof P != "function" && typeof P != "symbol" && e.push(Ct, b, Zt, tt(P), dt);
              break;
          }
        }
      return e.push(bt), p(e, h, c), c;
    }
    var wn = `
`;
    function Va(e, t, n, o) {
      e.push(Yt(n));
      var c = null, h = null;
      for (var b in t)
        if (_.call(t, b)) {
          var P = t[b];
          if (P == null)
            continue;
          switch (b) {
            case "children":
              c = P;
              break;
            case "dangerouslySetInnerHTML":
              h = P;
              break;
            default:
              rt(e, o, b, P);
              break;
          }
        }
      if (e.push(bt), h != null) {
        if (c != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var Q = h.__html;
        Q != null && (typeof Q == "string" && Q.length > 0 && Q[0] === `
` ? e.push(wn, Q) : (G(Q), e.push("" + Q)));
      }
      return typeof c == "string" && c[0] === `
` && e.push(wn), c;
    }
    var Ja = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Br = /* @__PURE__ */ new Map();
    function Yt(e) {
      var t = Br.get(e);
      if (t === void 0) {
        if (!Ja.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, Br.set(e, t);
      }
      return t;
    }
    var Ka = "<!DOCTYPE html>";
    function $t(e, t, n, o, c) {
      switch (gt(t, n), Sr(t, n), Cr(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), c.insertionMode !== Ht && c.insertionMode !== jn && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        case "select":
          return ge(e, n, o);
        case "option":
          return pt(e, n, o, c);
        case "textarea":
          return un(e, n, o);
        case "input":
          return ht(e, n, o);
        case "menuitem":
          return Nn(e, n, o);
        case "title":
          return dn(e, n, o);
        case "listing":
        case "pre":
          return Va(e, n, t, o);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Gt(e, n, t, o);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return bn(e, n, t, o);
        case "html":
          return c.insertionMode === on && e.push(Ka), bn(e, n, t, o);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? bn(e, n, t, o) : Kt(e, n, t, o);
      }
    }
    var so = "</", Ir = ">";
    function Le(e, t, n) {
      switch (t) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(so, t, Ir);
      }
    }
    function xn(e, t) {
      for (var n = t.bootstrapChunks, o = 0; o < n.length - 1; o++)
        m(e, n[o]);
      return o < n.length ? S(e, n[o]) : !0;
    }
    var Rr = '<template id="', Sn = '"></template>';
    function fn(e, t, n) {
      m(e, Rr), m(e, t.placeholderPrefix);
      var o = n.toString(16);
      return m(e, o), S(e, Sn);
    }
    var Mr = "<!--$-->", pn = '<!--$?--><template id="', Pt = '"></template>', lo = "<!--$!-->", lr = "<!--/$-->", Yo = "<template", jr = '"', Xo = ' data-dgst="', $a = ' data-msg="', qa = ' data-stck="', Qr = "></template>";
    function Vo(e, t) {
      return S(e, Mr);
    }
    function Ar(e, t, n) {
      if (m(e, pn), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return m(e, n), S(e, Pt);
    }
    function Ao(e, t, n, o, c) {
      var h;
      return h = S(e, lo), m(e, Yo), n && (m(e, Xo), m(e, tt(n)), m(e, jr)), o && (m(e, $a), m(e, tt(o)), m(e, jr)), c && (m(e, qa), m(e, tt(c)), m(e, jr)), h = S(e, Qr), h;
    }
    function ei(e, t) {
      return S(e, lr);
    }
    function Ln(e, t) {
      return S(e, lr);
    }
    function co(e, t) {
      return S(e, lr);
    }
    var uo = '<div hidden id="', Hn = '">', cr = "</div>", Or = '<svg aria-hidden="true" style="display:none" id="', Jo = '">', Ko = "</svg>", $o = '<math aria-hidden="true" style="display:none" id="', Fr = '">', wt = "</math>", qo = '<table hidden id="', Nr = '">', ti = "</table>", ea = '<table hidden><tbody id="', Lr = '">', ta = "</tbody></table>", na = '<table hidden><tr id="', Hr = '">', Ur = "</tr></table>", ra = '<table hidden><colgroup id="', oa = '">', aa = "</colgroup></table>";
    function fo(e, t, n, o) {
      switch (n.insertionMode) {
        case on:
        case mt:
          return m(e, uo), m(e, t.segmentPrefix), m(e, o.toString(16)), S(e, Hn);
        case Ht:
          return m(e, Or), m(e, t.segmentPrefix), m(e, o.toString(16)), S(e, Jo);
        case jn:
          return m(e, $o), m(e, t.segmentPrefix), m(e, o.toString(16)), S(e, Fr);
        case an:
          return m(e, qo), m(e, t.segmentPrefix), m(e, o.toString(16)), S(e, Nr);
        case sn:
          return m(e, ea), m(e, t.segmentPrefix), m(e, o.toString(16)), S(e, Lr);
        case Ut:
          return m(e, na), m(e, t.segmentPrefix), m(e, o.toString(16)), S(e, Hr);
        case ln:
          return m(e, ra), m(e, t.segmentPrefix), m(e, o.toString(16)), S(e, oa);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function ia(e, t) {
      switch (t.insertionMode) {
        case on:
        case mt:
          return S(e, cr);
        case Ht:
          return S(e, Ko);
        case jn:
          return S(e, wt);
        case an:
          return S(e, ti);
        case sn:
          return S(e, ta);
        case Ut:
          return S(e, Ur);
        case ln:
          return S(e, aa);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var l = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", d = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', y = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', D = l + ';$RS("', H = '$RS("', F = '","', Z = '")<\/script>';
    function q(e, t, n) {
      m(e, t.startInlineScript), t.sentCompleteSegmentFunction ? m(e, H) : (t.sentCompleteSegmentFunction = !0, m(e, D)), m(e, t.segmentPrefix);
      var o = n.toString(16);
      return m(e, o), m(e, F), m(e, t.placeholderPrefix), m(e, o), S(e, Z);
    }
    var be = d + ';$RC("', Pe = '$RC("', De = '","', He = '")<\/script>';
    function xt(e, t, n, o) {
      if (m(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? m(e, Pe) : (t.sentCompleteBoundaryFunction = !0, m(e, be)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var c = o.toString(16);
      return m(e, n), m(e, De), m(e, t.segmentPrefix), m(e, c), S(e, He);
    }
    var kt = y + ';$RX("', Bt = '$RX("', zr = '"', sa = ")<\/script>", ur = ",";
    function el(e, t, n, o, c, h) {
      if (m(e, t.startInlineScript), t.sentClientRenderFunction ? m(e, Bt) : (t.sentClientRenderFunction = !0, m(e, kt)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return m(e, n), m(e, zr), (o || c || h) && (m(e, ur), m(e, ni(o || ""))), (c || h) && (m(e, ur), m(e, ni(c || ""))), h && (m(e, ur), m(e, ni(h))), S(e, sa);
    }
    var tl = /[<\u2028\u2029]/g;
    function ni(e) {
      var t = JSON.stringify(e);
      return t.replace(tl, function(n) {
        switch (n) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function nl(e, t) {
      var n = Mn(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: n.bootstrapChunks,
        startInlineScript: n.startInlineScript,
        placeholderPrefix: n.placeholderPrefix,
        segmentPrefix: n.segmentPrefix,
        boundaryPrefix: n.boundaryPrefix,
        idPrefix: n.idPrefix,
        nextSuspenseID: n.nextSuspenseID,
        sentCompleteSegmentFunction: n.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: n.sentCompleteBoundaryFunction,
        sentClientRenderFunction: n.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function rl() {
      return {
        insertionMode: mt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Yi(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(tt(t)), !1) : An(e, t, n, o);
    }
    function Xi(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return Qn(e, t, n, o);
    }
    function ol(e, t) {
      return t.generateStaticMarkup ? !0 : Vo(e);
    }
    function al(e, t, n, o, c) {
      return t.generateStaticMarkup ? !0 : Ao(e, t, n, o, c);
    }
    function il(e, t) {
      return t.generateStaticMarkup ? !0 : ei(e);
    }
    function sl(e, t) {
      return t.generateStaticMarkup ? !0 : co(e);
    }
    var Et = Object.assign, ll = Symbol.for("react.element"), Vi = Symbol.for("react.portal"), la = Symbol.for("react.fragment"), It = Symbol.for("react.strict_mode"), Ji = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), ca = Symbol.for("react.context"), ua = Symbol.for("react.forward_ref"), da = Symbol.for("react.suspense"), po = Symbol.for("react.suspense_list"), ho = Symbol.for("react.memo"), Wr = Symbol.for("react.lazy"), ri = Symbol.for("react.scope"), oi = Symbol.for("react.debug_trace_mode"), ai = Symbol.for("react.legacy_hidden"), fa = Symbol.for("react.default_value"), Ki = Symbol.iterator, Al = "@@iterator";
    function cl(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ki && e[Ki] || e[Al];
      return typeof t == "function" ? t : null;
    }
    function ul(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var c = t.displayName || t.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function ii(e) {
      return e.displayName || "Context";
    }
    function Ze(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case la:
          return "Fragment";
        case Vi:
          return "Portal";
        case Ji:
          return "Profiler";
        case It:
          return "StrictMode";
        case da:
          return "Suspense";
        case po:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ca:
            var t = e;
            return ii(t) + ".Consumer";
          case Aa:
            var n = e;
            return ii(n._context) + ".Provider";
          case ua:
            return ul(e, e.render, "ForwardRef");
          case ho:
            var o = e.displayName || null;
            return o !== null ? o : Ze(e.type) || "Memo";
          case Wr: {
            var c = e, h = c._payload, b = c._init;
            try {
              return Ze(b(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var vo = 0, $i, si, _e, _r, li, Ai, ci;
    function ui() {
    }
    ui.__reactDisabledLog = !0;
    function qi() {
      {
        if (vo === 0) {
          $i = console.log, si = console.info, _e = console.warn, _r = console.error, li = console.group, Ai = console.groupCollapsed, ci = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ui,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        vo++;
      }
    }
    function es() {
      {
        if (vo--, vo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, e, {
              value: $i
            }),
            info: Et({}, e, {
              value: si
            }),
            warn: Et({}, e, {
              value: _e
            }),
            error: Et({}, e, {
              value: _r
            }),
            group: Et({}, e, {
              value: li
            }),
            groupCollapsed: Et({}, e, {
              value: Ai
            }),
            groupEnd: Et({}, e, {
              value: ci
            })
          });
        }
        vo < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pa = u.ReactCurrentDispatcher, ha;
    function go(e, t, n) {
      {
        if (ha === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            ha = o && o[1] || "";
          }
        return `
` + ha + e;
      }
    }
    var di = !1, Zr;
    {
      var fi = typeof WeakMap == "function" ? WeakMap : Map;
      Zr = new fi();
    }
    function dr(e, t) {
      if (!e || di)
        return "";
      {
        var n = Zr.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      di = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = pa.current, pa.current = null, qi();
      try {
        if (t) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (st) {
              o = st;
            }
            Reflect.construct(e, [], b);
          } else {
            try {
              b.call();
            } catch (st) {
              o = st;
            }
            e.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (st) {
            o = st;
          }
          e();
        }
      } catch (st) {
        if (st && o && typeof st.stack == "string") {
          for (var P = st.stack.split(`
`), Q = o.stack.split(`
`), Y = P.length - 1, J = Q.length - 1; Y >= 1 && J >= 0 && P[Y] !== Q[J]; )
            J--;
          for (; Y >= 1 && J >= 0; Y--, J--)
            if (P[Y] !== Q[J]) {
              if (Y !== 1 || J !== 1)
                do
                  if (Y--, J--, J < 0 || P[Y] !== Q[J]) {
                    var ae = `
` + P[Y].replace(" at new ", " at ");
                    return e.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", e.displayName)), typeof e == "function" && Zr.set(e, ae), ae;
                  }
                while (Y >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        di = !1, pa.current = h, es(), Error.prepareStackTrace = c;
      }
      var Ce = e ? e.displayName || e.name : "", Fe = Ce ? go(Ce) : "";
      return typeof e == "function" && Zr.set(e, Fe), Fe;
    }
    function pi(e, t, n) {
      return dr(e, !0);
    }
    function mo(e, t, n) {
      return dr(e, !1);
    }
    function dl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yo(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return dr(e, dl(e));
      if (typeof e == "string")
        return go(e);
      switch (e) {
        case da:
          return go("Suspense");
        case po:
          return go("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ua:
            return mo(e.render);
          case ho:
            return yo(e.type, t, n);
          case Wr: {
            var o = e, c = o._payload, h = o._init;
            try {
              return yo(h(c), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var ts = {}, hi = u.ReactDebugCurrentFrame;
    function va(e) {
      if (e) {
        var t = e._owner, n = yo(e.type, e._source, t ? t.type : null);
        hi.setExtraStackFrame(n);
      } else
        hi.setExtraStackFrame(null);
    }
    function ga(e, t, n, o, c) {
      {
        var h = Function.call.bind(_);
        for (var b in e)
          if (h(e, b)) {
            var P = void 0;
            try {
              if (typeof e[b] != "function") {
                var Q = Error((o || "React class") + ": " + n + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              P = e[b](t, b, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              P = Y;
            }
            P && !(P instanceof Error) && (va(c), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, b, typeof P), va(null)), P instanceof Error && !(P.message in ts) && (ts[P.message] = !0, va(c), a("Failed %s type: %s", n, P.message), va(null));
          }
      }
    }
    var ma;
    ma = {};
    var bo = {};
    Object.freeze(bo);
    function wo(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return bo;
        var o = {};
        for (var c in n)
          o[c] = t[c];
        {
          var h = Ze(e) || "Unknown";
          ga(n, o, "context", h);
        }
        return o;
      }
    }
    function ns(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var c = Ze(t) || "Unknown";
            ma[c] || (ma[c] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return n;
        }
        var h = e.getChildContext();
        for (var b in h)
          if (!(b in o))
            throw new Error((Ze(t) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
        {
          var P = Ze(t) || "Unknown";
          ga(o, h, "child context", P);
        }
        return Et({}, n, h);
      }
    }
    var fr;
    fr = {};
    var ya = null, Un = null;
    function vi(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function pr(e) {
      e.context._currentValue2 = e.value;
    }
    function ba(e, t) {
      if (e !== t) {
        vi(e);
        var n = e.parent, o = t.parent;
        if (n === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ba(n, o);
        }
        pr(t);
      }
    }
    function zn(e) {
      vi(e);
      var t = e.parent;
      t !== null && zn(t);
    }
    function wa(e) {
      var t = e.parent;
      t !== null && wa(t), pr(e);
    }
    function xa(e, t) {
      vi(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? ba(n, t) : xa(n, t);
    }
    function xo(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? ba(e, n) : xo(e, n), pr(t);
    }
    function So(e) {
      var t = Un, n = e;
      t !== n && (t === null ? wa(n) : n === null ? zn(t) : t.depth === n.depth ? ba(t, n) : t.depth > n.depth ? xa(t, n) : xo(t, n), Un = n);
    }
    function rs(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== fr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = fr;
      var o = Un, c = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return Un = c, c;
    }
    function os(e) {
      var t = Un;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === fa ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== fr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = fr;
      }
      return Un = t.parent;
    }
    function as() {
      return Un;
    }
    function Wn(e) {
      var t = e._currentValue2;
      return t;
    }
    function gi(e) {
      return e._reactInternals;
    }
    function fl(e, t) {
      e._reactInternals = t;
    }
    var is = {}, Gr = {}, Co, mi, Sa, Ca, Ea, Yr, Eo, Do, Da;
    {
      Co = /* @__PURE__ */ new Set(), mi = /* @__PURE__ */ new Set(), Sa = /* @__PURE__ */ new Set(), Eo = /* @__PURE__ */ new Set(), Ca = /* @__PURE__ */ new Set(), Do = /* @__PURE__ */ new Set(), Da = /* @__PURE__ */ new Set();
      var To = /* @__PURE__ */ new Set();
      Yr = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          To.has(n) || (To.add(n), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Ea = function(e, t) {
        if (t === void 0) {
          var n = Ze(e) || "Component";
          Ca.has(n) || (Ca.add(n), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function Ta(e, t) {
      {
        var n = e.constructor, o = n && Ze(n) || "ReactClass", c = o + "." + t;
        if (is[c])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), is[c] = !0;
      }
    }
    var Pa = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = gi(e);
        o.queue === null ? Ta(e, "setState") : (o.queue.push(t), n != null && Yr(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = gi(e);
        o.replace = !0, o.queue = [t], n != null && Yr(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = gi(e);
        n.queue === null ? Ta(e, "forceUpdate") : t != null && Yr(t, "setState");
      }
    };
    function yi(e, t, n, o, c) {
      var h = n(c, o);
      Ea(t, h);
      var b = h == null ? o : Et({}, o, h);
      return b;
    }
    function ss(e, t, n) {
      var o = bo, c = e.contextType;
      if ("contextType" in e) {
        var h = (
          // Allow null for conditional declaration
          c === null || c !== void 0 && c.$$typeof === ca && c._context === void 0
        );
        if (!h && !Da.has(e)) {
          Da.add(e);
          var b = "";
          c === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof c != "object" ? b = " However, it is set to a " + typeof c + "." : c.$$typeof === Aa ? b = " Did you accidentally pass the Context.Provider instead?" : c._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(c).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ze(e) || "Component", b);
        }
      }
      typeof c == "object" && c !== null ? o = Wn(c) : o = n;
      var P = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (P.state === null || P.state === void 0)) {
          var Q = Ze(e) || "Component";
          Co.has(Q) || (Co.add(Q), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Q, P.state === null ? "null" : "undefined", Q));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof P.getSnapshotBeforeUpdate == "function") {
          var Y = null, J = null, ae = null;
          if (typeof P.componentWillMount == "function" && P.componentWillMount.__suppressDeprecationWarning !== !0 ? Y = "componentWillMount" : typeof P.UNSAFE_componentWillMount == "function" && (Y = "UNSAFE_componentWillMount"), typeof P.componentWillReceiveProps == "function" && P.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof P.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof P.componentWillUpdate == "function" && P.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ae = "componentWillUpdate" : typeof P.UNSAFE_componentWillUpdate == "function" && (ae = "UNSAFE_componentWillUpdate"), Y !== null || J !== null || ae !== null) {
            var Ce = Ze(e) || "Component", Fe = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Sa.has(Ce) || (Sa.add(Ce), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ce, Fe, Y !== null ? `
  ` + Y : "", J !== null ? `
  ` + J : "", ae !== null ? `
  ` + ae : ""));
          }
        }
      }
      return P;
    }
    function ls(e, t, n) {
      {
        var o = Ze(t) || "Component", c = e.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !Do.has(t) && (Do.add(t), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ze(t) || "A pure component"), typeof e.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var h = e.props !== n;
        e.props !== void 0 && h && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !mi.has(t) && (mi.add(t), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ze(t))), typeof e.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var b = e.state;
        b && (typeof b != "object" || Lt(b)) && a("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function As(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = Ze(e) || "Unknown";
          Gr[o] || (v(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), Gr[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ze(e) || "Component"), Pa.enqueueReplaceState(t, t.state, null));
    }
    function pl(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var c = e.queue, h = e.replace;
        if (e.queue = null, e.replace = !1, h && c.length === 1)
          t.state = c[0];
        else {
          for (var b = h ? c[0] : t.state, P = !0, Q = h ? 1 : 0; Q < c.length; Q++) {
            var Y = c[Q], J = typeof Y == "function" ? Y.call(t, b, n, o) : Y;
            J != null && (P ? (P = !1, b = Et({}, b, J)) : Et(b, J));
          }
          t.state = b;
        }
      } else
        e.queue = null;
    }
    function cs(e, t, n, o) {
      ls(e, t, n);
      var c = e.state !== void 0 ? e.state : null;
      e.updater = Pa, e.props = n, e.state = c;
      var h = {
        queue: [],
        replace: !1
      };
      fl(e, h);
      var b = t.contextType;
      if (typeof b == "object" && b !== null ? e.context = Wn(b) : e.context = o, e.state === n) {
        var P = Ze(t) || "Component";
        Eo.has(P) || (Eo.add(P), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", P));
      }
      var Q = t.getDerivedStateFromProps;
      typeof Q == "function" && (e.state = yi(e, t, Q, c, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (As(t, e), pl(h, e, n, o));
    }
    var hl = {
      id: 1,
      overflow: ""
    };
    function vl(e) {
      var t = e.overflow, n = e.id, o = n & ~gl(n);
      return o.toString(32) + t;
    }
    function bi(e, t, n) {
      var o = e.id, c = e.overflow, h = Po(o) - 1, b = o & ~(1 << h), P = n + 1, Q = Po(t) + h;
      if (Q > 30) {
        var Y = h - h % 5, J = (1 << Y) - 1, ae = (b & J).toString(32), Ce = b >> Y, Fe = h - Y, st = Po(t) + Fe, wr = P << Fe, xr = wr | Ce, Pn = ae + c;
        return {
          id: 1 << st | xr,
          overflow: Pn
        };
      } else {
        var eo = P << h, Vl = eo | b, Jc = c;
        return {
          id: 1 << Q | Vl,
          overflow: Jc
        };
      }
    }
    function Po(e) {
      return 32 - ml(e);
    }
    function gl(e) {
      return 1 << Po(e) - 1;
    }
    var ml = Math.clz32 ? Math.clz32 : yl, wi = Math.log, ka = Math.LN2;
    function yl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (wi(t) / ka | 0) | 0;
    }
    function bl(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var wl = typeof Object.is == "function" ? Object.is : bl, Cn = null, xi = null, Ba = null, ze = null, Rt = !1, Xr = !1, hr = 0, Oe = null, _n = 0, Ia = 25, Mt = !1, jt;
    function hn() {
      if (Cn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Mt && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Cn;
    }
    function xl(e, t) {
      if (t === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", jt), !1;
      e.length !== t.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, jt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!wl(e[n], t[n]))
          return !1;
      return !0;
    }
    function qt() {
      if (_n > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Zn() {
      return ze === null ? Ba === null ? (Rt = !1, Ba = ze = qt()) : (Rt = !0, ze = Ba) : ze.next === null ? (Rt = !1, ze = ze.next = qt()) : (Rt = !0, ze = ze.next), ze;
    }
    function vr(e, t) {
      Cn = t, xi = e, Mt = !1, hr = 0;
    }
    function Sl(e, t, n, o) {
      for (; Xr; )
        Xr = !1, hr = 0, _n += 1, ze = null, n = e(t, o);
      return ko(), n;
    }
    function Si() {
      var e = hr !== 0;
      return e;
    }
    function ko() {
      Mt = !1, Cn = null, xi = null, Xr = !1, Ba = null, _n = 0, Oe = null, ze = null;
    }
    function Cl(e) {
      return Mt && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Wn(e);
    }
    function El(e) {
      return jt = "useContext", hn(), Wn(e);
    }
    function Ra(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ci(e) {
      return jt = "useState", us(
        Ra,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function us(e, t, n) {
      if (e !== Ra && (jt = "useReducer"), Cn = hn(), ze = Zn(), Rt) {
        var o = ze.queue, c = o.dispatch;
        if (Oe !== null) {
          var h = Oe.get(o);
          if (h !== void 0) {
            Oe.delete(o);
            var b = ze.memoizedState, P = h;
            do {
              var Q = P.action;
              Mt = !0, b = e(b, Q), Mt = !1, P = P.next;
            } while (P !== null);
            return ze.memoizedState = b, [b, c];
          }
        }
        return [ze.memoizedState, c];
      } else {
        Mt = !0;
        var Y;
        e === Ra ? Y = typeof t == "function" ? t() : t : Y = n !== void 0 ? n(t) : t, Mt = !1, ze.memoizedState = Y;
        var J = ze.queue = {
          last: null,
          dispatch: null
        }, ae = J.dispatch = fs.bind(null, Cn, J);
        return [ze.memoizedState, ae];
      }
    }
    function ds(e, t) {
      Cn = hn(), ze = Zn();
      var n = t === void 0 ? null : t;
      if (ze !== null) {
        var o = ze.memoizedState;
        if (o !== null && n !== null) {
          var c = o[1];
          if (xl(n, c))
            return o[0];
        }
      }
      Mt = !0;
      var h = e();
      return Mt = !1, ze.memoizedState = [h, n], h;
    }
    function Ei(e) {
      Cn = hn(), ze = Zn();
      var t = ze.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), ze.memoizedState = n, n;
      } else
        return t;
    }
    function Dl(e, t) {
      jt = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function fs(e, t, n) {
      if (_n >= Ia)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === Cn) {
        Xr = !0;
        var o = {
          action: n,
          next: null
        };
        Oe === null && (Oe = /* @__PURE__ */ new Map());
        var c = Oe.get(t);
        if (c === void 0)
          Oe.set(t, o);
        else {
          for (var h = c; h.next !== null; )
            h = h.next;
          h.next = o;
        }
      }
    }
    function ps(e, t) {
      return ds(function() {
        return e;
      }, t);
    }
    function Tl(e, t, n) {
      return hn(), t(e._source);
    }
    function Pl(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function kl(e) {
      return hn(), e;
    }
    function Bl() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Il() {
      return hn(), [!1, Bl];
    }
    function Rl() {
      var e = xi, t = vl(e.treeContext), n = Di;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = hr++;
      return Je(n, t, o);
    }
    function Ma() {
    }
    var hs = {
      readContext: Cl,
      useContext: El,
      useMemo: ds,
      useReducer: us,
      useRef: Ei,
      useState: Ci,
      useInsertionEffect: Ma,
      useLayoutEffect: Dl,
      useCallback: ps,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ma,
      // Effects are not run in the server environment.
      useEffect: Ma,
      // Debugging effect
      useDebugValue: Ma,
      useDeferredValue: kl,
      useTransition: Il,
      useId: Rl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Tl,
      useSyncExternalStore: Pl
    }, Di = null;
    function vs(e) {
      Di = e;
    }
    function ja(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += go(n.type, null, null);
              break;
            case 1:
              t += mo(n.type, null, null);
              break;
            case 2:
              t += pi(n.type, null, null);
              break;
          }
          n = n.parent;
        } while (n);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var Qa = u.ReactCurrentDispatcher, Bo = u.ReactDebugCurrentFrame, Oa = 0, Vr = 1, Fa = 2, Na = 3, La = 4, Jr = 0, Ti = 1, gr = 2, gs = 12800;
    function Ml(e) {
      return console.error(e), null;
    }
    function Kr() {
    }
    function $r(e, t, n, o, c, h, b, P, Q) {
      var Y = [], J = /* @__PURE__ */ new Set(), ae = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? gs : o,
        status: Jr,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: J,
        pingedTasks: Y,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: c === void 0 ? Ml : c,
        onAllReady: Kr,
        onShellReady: b === void 0 ? Kr : b,
        onShellError: Kr,
        onFatalError: Kr
      }, Ce = Ha(
        ae,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      Ce.parentFlushed = !0;
      var Fe = mr(ae, e, null, Ce, J, bo, ya, hl);
      return Y.push(Fe), ae;
    }
    function jl(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && E(function() {
        return Fi(e);
      });
    }
    function Ql(e, t) {
      return {
        id: kr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function mr(e, t, n, o, c, h, b, P) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var Q = {
        node: t,
        ping: function() {
          return jl(e, Q);
        },
        blockedBoundary: n,
        blockedSegment: o,
        abortSet: c,
        legacyContext: h,
        context: b,
        treeContext: P
      };
      return Q.componentStack = null, c.add(Q), Q;
    }
    function Ha(e, t, n, o, c, h) {
      return {
        status: Oa,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: n,
        lastPushedText: c,
        textEmbedded: h
      };
    }
    var En = null;
    function Pi() {
      return En === null || En.componentStack === null ? "" : ja(En.componentStack);
    }
    function yr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function Io(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function Dn(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function vn(e) {
      e.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var Tn = null;
    function Ua(e, t) {
      {
        var n;
        typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : n = String(t);
        var o = Tn || Pi();
        Tn = null, e.errorMessage = n, e.errorComponentStack = o;
      }
    }
    function Ro(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function en(e, t) {
      var n = e.onShellError;
      n(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = gr, N(e.destination, t)) : (e.status = Ti, e.fatalError = t);
    }
    function Mo(e, t, n) {
      yr(t, "Suspense");
      var o = t.blockedBoundary, c = t.blockedSegment, h = n.fallback, b = n.children, P = /* @__PURE__ */ new Set(), Q = Ql(e, P), Y = c.chunks.length, J = Ha(
        e,
        Y,
        Q,
        c.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      c.children.push(J), c.lastPushedText = !1;
      var ae = Ha(
        e,
        0,
        null,
        c.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      ae.parentFlushed = !0, t.blockedBoundary = Q, t.blockedSegment = ae;
      try {
        if (St(e, t, b), Xi(ae.chunks, e.responseState, ae.lastPushedText, ae.textEmbedded), ae.status = Vr, qr(Q, ae), Q.pendingTasks === 0) {
          vn(t);
          return;
        }
      } catch (Fe) {
        ae.status = La, Q.forceClientRender = !0, Q.errorDigest = Ro(e, Fe), Ua(Q, Fe);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = c;
      }
      var Ce = mr(e, h, o, J, P, t.legacyContext, t.context, t.treeContext);
      Ce.componentStack = t.componentStack, e.pingedTasks.push(Ce), vn(t);
    }
    function ki(e, t, n, o) {
      yr(t, n);
      var c = t.blockedSegment, h = $t(c.chunks, n, o, e.responseState, c.formatContext);
      c.lastPushedText = !1;
      var b = c.formatContext;
      c.formatContext = Pr(b, n, o), St(e, t, h), c.formatContext = b, Le(c.chunks, n), c.lastPushedText = !1, vn(t);
    }
    function jo(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Qo(e, t, n, o, c) {
      var h = {};
      vr(t, h);
      var b = n(o, c);
      return Sl(n, o, b, c);
    }
    function ms(e, t, n, o, c) {
      var h = n.render();
      n.props !== c && (Ii || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ze(o) || "a component"), Ii = !0);
      {
        var b = o.childContextTypes;
        if (b != null) {
          var P = t.legacyContext, Q = ns(n, o, P, b);
          t.legacyContext = Q, Qt(e, t, h), t.legacyContext = P;
          return;
        }
      }
      Qt(e, t, h);
    }
    function Ol(e, t, n, o) {
      Dn(t, n);
      var c = wo(n, t.legacyContext), h = ss(n, o, c);
      cs(h, n, o, c), ms(e, t, h, n, o), vn(t);
    }
    var ys = {}, Oo = {}, Bi = {}, bs = {}, Ii = !1, Fo = {}, Ri = !1, Mi = !1, ji = !1;
    function ws(e, t, n, o) {
      var c;
      if (c = wo(n, t.legacyContext), Io(t, n), n.prototype && typeof n.prototype.render == "function") {
        var h = Ze(n) || "Unknown";
        ys[h] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", h, h), ys[h] = !0);
      }
      var b = Qo(e, t, n, o, c), P = Si();
      if (typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
        var Q = Ze(n) || "Unknown";
        Oo[Q] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Q, Q, Q), Oo[Q] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0
      ) {
        {
          var Y = Ze(n) || "Unknown";
          Oo[Y] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Y, Y, Y), Oo[Y] = !0);
        }
        cs(b, n, o, c), ms(e, t, b, n, o);
      } else if (xs(n), P) {
        var J = t.treeContext, ae = 1, Ce = 0;
        t.treeContext = bi(J, ae, Ce);
        try {
          Qt(e, t, b);
        } finally {
          t.treeContext = J;
        }
      } else
        Qt(e, t, b);
      vn(t);
    }
    function xs(e) {
      {
        if (e && e.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = Ze(e) || "Unknown";
          Fo[t] || (a("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), Fo[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = Ze(e) || "Unknown";
          bs[n] || (a("%s: Function components do not support getDerivedStateFromProps.", n), bs[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = Ze(e) || "Unknown";
          Bi[o] || (a("%s: Function components do not support contextType.", o), Bi[o] = !0);
        }
      }
    }
    function Qi(e, t) {
      if (e && e.defaultProps) {
        var n = Et({}, t), o = e.defaultProps;
        for (var c in o)
          n[c] === void 0 && (n[c] = o[c]);
        return n;
      }
      return t;
    }
    function Ss(e, t, n, o, c) {
      Io(t, n.render);
      var h = Qo(e, t, n.render, o, c), b = Si();
      if (b) {
        var P = t.treeContext, Q = 1, Y = 0;
        t.treeContext = bi(P, Q, Y);
        try {
          Qt(e, t, h);
        } finally {
          t.treeContext = P;
        }
      } else
        Qt(e, t, h);
      vn(t);
    }
    function Fl(e, t, n, o, c) {
      var h = n.type, b = Qi(h, o);
      Oi(e, t, h, b, c);
    }
    function Nl(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (ji || (ji = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var c = o.children;
      typeof c != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var h = Wn(n), b = c(h);
      Qt(e, t, b);
    }
    function Cs(e, t, n, o) {
      var c = n._context, h = o.value, b = o.children, P;
      P = t.context, t.context = rs(c, h), Qt(e, t, b), t.context = os(c), P !== t.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Ll(e, t, n, o, c) {
      yr(t, "Lazy");
      var h = n._payload, b = n._init, P = b(h), Q = Qi(P, o);
      Oi(e, t, P, Q, c), vn(t);
    }
    function Oi(e, t, n, o, c) {
      if (typeof n == "function")
        if (jo(n)) {
          Ol(e, t, n, o);
          return;
        } else {
          ws(e, t, n, o);
          return;
        }
      if (typeof n == "string") {
        ki(e, t, n, o);
        return;
      }
      switch (n) {
        case ai:
        case oi:
        case It:
        case Ji:
        case la: {
          Qt(e, t, o.children);
          return;
        }
        case po: {
          yr(t, "SuspenseList"), Qt(e, t, o.children), vn(t);
          return;
        }
        case ri:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case da: {
          Mo(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case ua: {
            Ss(e, t, n, o, c);
            return;
          }
          case ho: {
            Fl(e, t, n, o, c);
            return;
          }
          case Aa: {
            Cs(e, t, n, o);
            return;
          }
          case ca: {
            Nl(e, t, n, o);
            return;
          }
          case Wr: {
            Ll(e, t, n, o);
            return;
          }
        }
      var h = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + h));
    }
    function Hl(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (Ri || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ri = !0), e.entries === t && (Mi || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Mi = !0);
    }
    function Qt(e, t, n) {
      try {
        return Ul(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (Tn = Tn !== null ? Tn : Pi()), o;
      }
    }
    function Ul(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case ll: {
            var o = n, c = o.type, h = o.props, b = o.ref;
            Oi(e, t, c, h, b);
            return;
          }
          case Vi:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Wr: {
            var P = n, Q = P._payload, Y = P._init, J;
            try {
              J = Y(Q);
            } catch (eo) {
              throw typeof eo == "object" && eo !== null && typeof eo.then == "function" && yr(t, "Lazy"), eo;
            }
            Qt(e, t, J);
            return;
          }
        }
        if (Lt(n)) {
          za(e, t, n);
          return;
        }
        var ae = cl(n);
        if (ae) {
          Hl(n, ae);
          var Ce = ae.call(n);
          if (Ce) {
            var Fe = Ce.next();
            if (!Fe.done) {
              var st = [];
              do
                st.push(Fe.value), Fe = Ce.next();
              while (!Fe.done);
              za(e, t, st);
              return;
            }
            return;
          }
        }
        var wr = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (wr === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : wr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var xr = t.blockedSegment;
        xr.lastPushedText = Yi(t.blockedSegment.chunks, n, e.responseState, xr.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var Pn = t.blockedSegment;
        Pn.lastPushedText = Yi(t.blockedSegment.chunks, "" + n, e.responseState, Pn.lastPushedText);
        return;
      }
      typeof n == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function za(e, t, n) {
      for (var o = n.length, c = 0; c < o; c++) {
        var h = t.treeContext;
        t.treeContext = bi(h, o, c);
        try {
          St(e, t, n[c]);
        } finally {
          t.treeContext = h;
        }
      }
    }
    function zl(e, t, n) {
      var o = t.blockedSegment, c = o.chunks.length, h = Ha(
        e,
        c,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(h), o.lastPushedText = !1;
      var b = mr(e, t.node, t.blockedBoundary, h, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (b.componentStack = t.componentStack.parent);
      var P = b.ping;
      n.then(P, P);
    }
    function St(e, t, n) {
      var o = t.blockedSegment.formatContext, c = t.legacyContext, h = t.context, b = null;
      b = t.componentStack;
      try {
        return Qt(e, t, n);
      } catch (P) {
        if (ko(), typeof P == "object" && P !== null && typeof P.then == "function") {
          zl(e, t, P), t.blockedSegment.formatContext = o, t.legacyContext = c, t.context = h, So(h), t.componentStack = b;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = c, t.context = h, So(h), t.componentStack = b, P;
      }
    }
    function Wl(e, t, n, o) {
      var c = Ro(e, o);
      if (t === null ? en(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = c, Ua(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var h = e.onAllReady;
        h();
      }
    }
    function Es(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = Na, Ts(t, n, o);
    }
    function Ds(e, t, n) {
      var o = e.blockedBoundary, c = e.blockedSegment;
      if (c.status = Na, o === null)
        t.allPendingTasks--, t.status !== gr && (t.status = gr, t.destination !== null && k(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var h = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          o.errorDigest = t.onError(h);
          {
            var b = "The server did not finish this Suspense boundary: ";
            h && typeof h.message == "string" ? h = b + h.message : h = b + String(h);
            var P = En;
            En = e;
            try {
              Ua(o, h);
            } finally {
              En = P;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(Y) {
          return Ds(Y, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var Q = t.onAllReady;
          Q();
        }
      }
    }
    function qr(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Vr && qr(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function Ts(e, t, n) {
      if (t === null) {
        if (n.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = n;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Kr;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          n.parentFlushed && n.status === Vr && qr(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Es, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Vr) {
          qr(t, n);
          var c = t.completedSegments;
          c.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var h = e.onAllReady;
        h();
      }
    }
    function _l(e, t) {
      var n = t.blockedSegment;
      if (n.status === Oa) {
        So(t.context);
        var o = null;
        o = En, En = t;
        try {
          Qt(e, t, t.node), Xi(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Vr, Ts(e, t.blockedBoundary, n);
        } catch (h) {
          if (ko(), typeof h == "object" && h !== null && typeof h.then == "function") {
            var c = t.ping;
            h.then(c, c);
          } else
            t.abortSet.delete(t), n.status = La, Wl(e, t.blockedBoundary, n, h);
        } finally {
          En = o;
        }
      }
    }
    function Fi(e) {
      if (e.status !== gr) {
        var t = as(), n = Qa.current;
        Qa.current = hs;
        var o;
        o = Bo.getCurrentStack, Bo.getCurrentStack = Pi;
        var c = Di;
        vs(e.responseState);
        try {
          var h = e.pingedTasks, b;
          for (b = 0; b < h.length; b++) {
            var P = h[b];
            _l(e, P);
          }
          h.splice(0, b), e.destination !== null && _a(e, e.destination);
        } catch (Q) {
          Ro(e, Q), en(e, Q);
        } finally {
          vs(c), Qa.current = n, Bo.getCurrentStack = o, n === hs && So(t);
        }
      }
    }
    function br(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case Oa: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, fn(t, e.responseState, o);
        }
        case Vr: {
          n.status = Fa;
          for (var c = !0, h = n.chunks, b = 0, P = n.children, Q = 0; Q < P.length; Q++) {
            for (var Y = P[Q]; b < Y.index; b++)
              m(t, h[b]);
            c = No(e, t, Y);
          }
          for (; b < h.length - 1; b++)
            m(t, h[b]);
          return b < h.length && (c = S(t, h[b])), c;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function No(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return br(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return al(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), br(e, t, n), sl(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var c = o.id = Jt(e.responseState);
        return Ar(t, e.responseState, c), br(e, t, n), Ln(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), Ar(t, e.responseState, o.id), br(e, t, n), Ln(t, e.responseState);
        ol(t, e.responseState);
        var h = o.completedSegments;
        if (h.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var b = h[0];
        return No(e, t, b), il(t, e.responseState);
      }
    }
    function Zl(e, t, n) {
      return el(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function Ni(e, t, n) {
      return fo(t, e.responseState, n.formatContext, n.id), No(e, t, n), ia(t, n.formatContext);
    }
    function Lo(e, t, n) {
      for (var o = n.completedSegments, c = 0; c < o.length; c++) {
        var h = o[c];
        Ps(e, t, n, h);
      }
      return o.length = 0, xt(t, e.responseState, n.id, n.rootSegmentID);
    }
    function Wa(e, t, n) {
      for (var o = n.completedSegments, c = 0; c < o.length; c++) {
        var h = o[c];
        if (!Ps(e, t, n, h))
          return c++, o.splice(0, c), !1;
      }
      return o.splice(0, c), !0;
    }
    function Ps(e, t, n, o) {
      if (o.status === Fa)
        return !0;
      var c = o.id;
      if (c === -1) {
        var h = o.id = n.rootSegmentID;
        if (h === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ni(e, t, o);
      } else
        return Ni(e, t, o), q(t, e.responseState, c);
    }
    function _a(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (No(e, t, n), e.completedRootSegment = null, xn(t, e.responseState));
        var o = e.clientRenderedBoundaries, c;
        for (c = 0; c < o.length; c++) {
          var h = o[c];
          if (!Zl(e, t, h)) {
            e.destination = null, c++, o.splice(0, c);
            return;
          }
        }
        o.splice(0, c);
        var b = e.completedBoundaries;
        for (c = 0; c < b.length; c++) {
          var P = b[c];
          if (!Lo(e, t, P)) {
            e.destination = null, c++, b.splice(0, c);
            return;
          }
        }
        b.splice(0, c);
        var Q = e.partialBoundaries;
        for (c = 0; c < Q.length; c++) {
          var Y = Q[c];
          if (!Wa(e, t, Y)) {
            e.destination = null, c++, Q.splice(0, c);
            return;
          }
        }
        Q.splice(0, c);
        var J = e.completedBoundaries;
        for (c = 0; c < J.length; c++) {
          var ae = J[c];
          if (!Lo(e, t, ae)) {
            e.destination = null, c++, J.splice(0, c);
            return;
          }
        }
        J.splice(0, c);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), k(t));
      }
    }
    function ks(e) {
      E(function() {
        return Fi(e);
      });
    }
    function Gl(e, t) {
      if (e.status === Ti) {
        e.status = gr, N(t, e.fatalError);
        return;
      }
      if (e.status !== gr && e.destination === null) {
        e.destination = t;
        try {
          _a(e, t);
        } catch (n) {
          Ro(e, n), en(e, n);
        }
      }
    }
    function Bs(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return Ds(o, e, t);
        }), n.clear(), e.destination !== null && _a(e, e.destination);
      } catch (o) {
        Ro(e, o), en(e, o);
      }
    }
    function Li() {
    }
    function Is(e, t, n, o) {
      var c = !1, h = null, b = "", P = {
        push: function(ae) {
          return ae !== null && (b += ae), !0;
        },
        destroy: function(ae) {
          c = !0, h = ae;
        }
      }, Q = !1;
      function Y() {
        Q = !0;
      }
      var J = $r(e, nl(n, t ? t.identifierPrefix : void 0), rl(), 1 / 0, Li, void 0, Y);
      if (ks(J), Bs(J, o), Gl(J, P), c)
        throw h;
      if (!Q)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return b;
    }
    function Yl(e, t) {
      return Is(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Rs(e, t) {
      return Is(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Xl() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Uo.renderToNodeStream = Xl, Uo.renderToStaticMarkup = Rs, Uo.renderToStaticNodeStream = r, Uo.renderToString = Yl, Uo.version = i;
  }()), Uo;
}
var Qs = {}, NA;
function Sd() {
  return NA || (NA = 1, Wi.env.NODE_ENV !== "production" && function() {
    var A = x, i = "18.3.1", u = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        g("warn", r, t);
      }
    }
    function a(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        g("error", r, t);
      }
    }
    function g(r, e, t) {
      {
        var n = u.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var c = t.map(function(h) {
          return String(h);
        });
        c.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, c);
      }
    }
    function E(r) {
      r();
    }
    var C = 512, m = null, S = 0;
    function R(r) {
      m = new Uint8Array(C), S = 0;
    }
    function k(r, e) {
      if (e.length !== 0) {
        if (e.length > C) {
          S > 0 && (r.enqueue(new Uint8Array(m.buffer, 0, S)), m = new Uint8Array(C), S = 0), r.enqueue(e);
          return;
        }
        var t = e, n = m.length - S;
        n < t.length && (n === 0 ? r.enqueue(m) : (m.set(t.subarray(0, n), S), r.enqueue(m), t = t.subarray(n)), m = new Uint8Array(C), S = 0), m.set(t, S), S += t.length;
      }
    }
    function I(r, e) {
      return k(r, e), !0;
    }
    function O(r) {
      m && S > 0 && (r.enqueue(new Uint8Array(m.buffer, 0, S)), m = null, S = 0);
    }
    function N(r) {
      r.close();
    }
    var z = new TextEncoder();
    function M(r) {
      return z.encode(r);
    }
    function B(r) {
      return z.encode(r);
    }
    function K(r, e) {
      typeof r.error == "function" ? r.error(e) : r.close();
    }
    function ne(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function G(r) {
      try {
        return _(r), !1;
      } catch {
        return !0;
      }
    }
    function _(r) {
      return "" + r;
    }
    function V(r, e) {
      if (G(r))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, ne(r)), _(r);
    }
    function W(r, e) {
      if (G(r))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, ne(r)), _(r);
    }
    function re(r) {
      if (G(r))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ne(r)), _(r);
    }
    var te = Object.prototype.hasOwnProperty, se = 0, le = 1, X = 2, fe = 3, ue = 4, Be = 5, Se = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ce = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", de = new RegExp("^[" + ee + "][" + ce + "]*$"), xe = {}, oe = {};
    function ie(r) {
      return te.call(oe, r) ? !0 : te.call(xe, r) ? !1 : de.test(r) ? (oe[r] = !0, !0) : (xe[r] = !0, a("Invalid attribute name: `%s`", r), !1);
    }
    function we(r, e, t, n) {
      if (t !== null && t.type === se)
        return !1;
      switch (typeof e) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = r.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ve(r) {
      return Me.hasOwnProperty(r) ? Me[r] : null;
    }
    function Ae(r, e, t, n, o, c, h) {
      this.acceptsBooleans = e === X || e === fe || e === ue, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = c, this.removeEmptyString = h;
    }
    var Me = {}, it = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    it.forEach(function(r) {
      Me[r] = new Ae(
        r,
        se,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
      var e = r[0], t = r[1];
      Me[e] = new Ae(
        e,
        le,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
      Me[r] = new Ae(
        r,
        X,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
      Me[r] = new Ae(
        r,
        X,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(r) {
      Me[r] = new Ae(
        r,
        fe,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Me[r] = new Ae(
        r,
        fe,
        !0,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Me[r] = new Ae(
        r,
        ue,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Me[r] = new Ae(
        r,
        Se,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(r) {
      Me[r] = new Ae(
        r,
        Be,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var At = /[\-\:]([a-z])/g, nt = function(r) {
      return r[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(At, nt);
      Me[e] = new Ae(
        e,
        le,
        !1,
        // mustUseProperty
        r,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(At, nt);
      Me[e] = new Ae(
        e,
        le,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(At, nt);
      Me[e] = new Ae(
        e,
        le,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
      Me[r] = new Ae(
        r,
        le,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var me = "xlinkHref";
    Me[me] = new Ae(
      "xlinkHref",
      le,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(r) {
      Me[r] = new Ae(
        r,
        le,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var pe = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function je(r, e) {
      return r + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var ke = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pe).forEach(function(r) {
      ke.forEach(function(e) {
        pe[je(e, r)] = pe[r];
      });
    });
    var Te = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ge(r, e) {
      Te[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ue(r, e) {
      if (r.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ye = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, et = {}, gt = new RegExp("^(aria)-[" + ce + "]*$"), Ot = new RegExp("^(aria)[A-Z][" + ce + "]*$");
    function Sr(r, e) {
      {
        if (te.call(et, e) && et[e])
          return !0;
        if (Ot.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = Ye.hasOwnProperty(t) ? t : null;
          if (n == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), et[e] = !0, !0;
          if (e !== n)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), et[e] = !0, !0;
        }
        if (gt.test(e)) {
          var o = e.toLowerCase(), c = Ye.hasOwnProperty(o) ? o : null;
          if (c == null)
            return et[e] = !0, !1;
          if (e !== c)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, c), et[e] = !0, !0;
        }
      }
      return !0;
    }
    function Dt(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = Sr(r, n);
          o || t.push(n);
        }
        var c = t.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        t.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, r) : t.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, r);
      }
    }
    function at(r, e) {
      Ue(r, e) || Dt(r, e);
    }
    var $e = !1;
    function Kn(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !$e && ($e = !0, r === "select" && e.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
      }
    }
    var $n = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, qn = function() {
    };
    {
      var Xe = {}, er = /^on./, Cr = /^on[^A-Z]/, Er = new RegExp("^(aria)-[" + ce + "]*$"), tr = new RegExp("^(aria)[A-Z][" + ce + "]*$");
      qn = function(r, e, t, n) {
        if (te.call(Xe, e) && Xe[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xe[e] = !0, !0;
        if (n != null) {
          var c = n.registrationNameDependencies, h = n.possibleRegistrationNames;
          if (c.hasOwnProperty(e))
            return !0;
          var b = h.hasOwnProperty(o) ? h[o] : null;
          if (b != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", e, b), Xe[e] = !0, !0;
          if (er.test(e))
            return a("Unknown event handler property `%s`. It will be ignored.", e), Xe[e] = !0, !0;
        } else if (er.test(e))
          return Cr.test(e) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), Xe[e] = !0, !0;
        if (Er.test(e) || tr.test(e))
          return !0;
        if (o === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xe[e] = !0, !0;
        if (o === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xe[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), Xe[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), Xe[e] = !0, !0;
        var P = ve(e), Q = P !== null && P.type === se;
        if ($n.hasOwnProperty(o)) {
          var Y = $n[o];
          if (Y !== e)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", e, Y), Xe[e] = !0, !0;
        } else if (!Q && e !== o)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), Xe[e] = !0, !0;
        return typeof t == "boolean" && we(e, t, P) ? (t ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), Xe[e] = !0, !0) : Q ? !0 : we(e, t, P) ? (Xe[e] = !0, !1) : ((t === "false" || t === "true") && P !== null && P.type === fe && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), Xe[e] = !0), !0);
      };
    }
    var Bn = function(r, e, t) {
      {
        var n = [];
        for (var o in e) {
          var c = qn(r, o, e[o], t);
          c || n.push(o);
        }
        var h = n.map(function(b) {
          return "`" + b + "`";
        }).join(", ");
        n.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, r) : n.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, r);
      }
    };
    function oo(r, e, t) {
      Ue(r, e) || Bn(r, e, t);
    }
    var nr = function() {
    };
    {
      var tn = /^(?:webkit|moz|o)[A-Z]/, rr = /^-ms-/, Dr = /-(.)/g, ct = /;\s*$/, Ft = {}, nn = {}, Ne = !1, rn = !1, In = function(r) {
        return r.replace(Dr, function(e, t) {
          return t.toUpperCase();
        });
      }, mn = function(r) {
        Ft.hasOwnProperty(r) && Ft[r] || (Ft[r] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          In(r.replace(rr, "ms-"))
        ));
      }, Nt = function(r) {
        Ft.hasOwnProperty(r) && Ft[r] || (Ft[r] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, Rn = function(r, e) {
        nn.hasOwnProperty(e) && nn[e] || (nn[e] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(ct, "")));
      }, Vt = function(r, e) {
        Ne || (Ne = !0, a("`NaN` is an invalid value for the `%s` css style property.", r));
      }, tt = function(r, e) {
        rn || (rn = !0, a("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      nr = function(r, e) {
        r.indexOf("-") > -1 ? mn(r) : tn.test(r) ? Nt(r) : ct.test(e) && Rn(r, e), typeof e == "number" && (isNaN(e) ? Vt(r, e) : isFinite(e) || tt(r, e));
      };
    }
    var or = nr, ar = /["'&<>]/;
    function Tr(r) {
      re(r);
      var e = "" + r, t = ar.exec(e);
      if (!t)
        return e;
      var n, o = "", c, h = 0;
      for (c = t.index; c < e.length; c++) {
        switch (e.charCodeAt(c)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        h !== c && (o += e.substring(h, c)), h = c + 1, o += n;
      }
      return h !== c ? o + e.substring(h, c) : o;
    }
    function Ve(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : Tr(r);
    }
    var ir = /([A-Z])/g, ao = /^ms-/;
    function io(r) {
      return r.replace(ir, "-$1").toLowerCase().replace(ao, "-ms-");
    }
    var Lt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, sr = !1;
    function Mn(r) {
      !sr && Lt.test(r) && (sr = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var on = Array.isArray;
    function mt(r) {
      return on(r);
    }
    var Ht = B("<script>"), jn = B("<\/script>"), an = B('<script src="'), sn = B('<script type="module" src="'), Ut = B('" async=""><\/script>');
    function ln(r) {
      return re(r), ("" + r).replace(yt, Pr);
    }
    var yt = /(<\/|<)(s)(cript)/gi, Pr = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function kr(r, e, t, n, o) {
      var c = r === void 0 ? "" : r, h = e === void 0 ? Ht : B('<script nonce="' + Ve(e) + '">'), b = [];
      if (t !== void 0 && b.push(h, M(ln(t)), jn), n !== void 0)
        for (var P = 0; P < n.length; P++)
          b.push(an, M(Ve(n[P])), Ut);
      if (o !== void 0)
        for (var Q = 0; Q < o.length; Q++)
          b.push(sn, M(Ve(o[Q])), Ut);
      return {
        bootstrapChunks: b,
        startInlineScript: h,
        placeholderPrefix: B(c + "P:"),
        segmentPrefix: B(c + "S:"),
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Jt = 0, Je = 1, zt = 2, Wt = 3, An = 4, Qn = 5, Tt = 6, _t = 7;
    function ut(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function cn(r) {
      var e = r === "http://www.w3.org/2000/svg" ? zt : r === "http://www.w3.org/1998/Math/MathML" ? Wt : Jt;
      return ut(e, null);
    }
    function yn(r, e, t) {
      switch (e) {
        case "select":
          return ut(Je, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return ut(zt, null);
        case "math":
          return ut(Wt, null);
        case "foreignObject":
          return ut(Je, null);
        case "table":
          return ut(An, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return ut(Qn, null);
        case "colgroup":
          return ut(_t, null);
        case "tr":
          return ut(Tt, null);
      }
      return r.insertionMode >= An || r.insertionMode === Jt ? ut(Je, null) : r;
    }
    var On = null;
    function Ct(r) {
      var e = r.nextSuspenseID++;
      return B(r.boundaryPrefix + e.toString(16));
    }
    function Zt(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function dt(r) {
      return Ve(r);
    }
    var Fn = B("<!-- -->");
    function rt(r, e, t, n) {
      return e === "" ? n : (n && r.push(Fn), r.push(M(dt(e))), !0);
    }
    function bt(r, e, t, n) {
      t && n && r.push(Fn);
    }
    var s = /* @__PURE__ */ new Map();
    function p(r) {
      var e = s.get(r);
      if (e !== void 0)
        return e;
      var t = B(Ve(io(r)));
      return s.set(r, t), t;
    }
    var w = B(' style="'), T = B(":"), L = B(";");
    function j(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (te.call(t, o)) {
          var c = t[o];
          if (!(c == null || typeof c == "boolean" || c === "")) {
            var h = void 0, b = void 0, P = o.indexOf("--") === 0;
            P ? (h = M(Ve(o)), W(c, o), b = M(Ve(("" + c).trim()))) : (or(o, c), h = p(o), typeof c == "number" ? c !== 0 && !te.call(pe, o) ? b = M(c + "px") : b = M("" + c) : (W(c, o), b = M(Ve(("" + c).trim())))), n ? (n = !1, r.push(w, h, T, b)) : r.push(L, h, T, b);
          }
        }
      n || r.push(he);
    }
    var U = B(" "), $ = B('="'), he = B('"'), ye = B('=""');
    function ge(r, e, t, n) {
      switch (t) {
        case "style": {
          j(r, e, n);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var o = ve(t);
        if (o !== null) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var c = o.attributeName, h = M(c);
          switch (o.type) {
            case fe:
              n && r.push(U, h, ye);
              return;
            case ue:
              n === !0 ? r.push(U, h, ye) : n === !1 || r.push(U, h, $, M(Ve(n)), he);
              return;
            case Be:
              isNaN(n) || r.push(U, h, $, M(Ve(n)), he);
              break;
            case Se:
              !isNaN(n) && n >= 1 && r.push(U, h, $, M(Ve(n)), he);
              break;
            default:
              o.sanitizeURL && (V(n, c), n = "" + n, Mn(n)), r.push(U, h, $, M(Ve(n)), he);
          }
        } else if (ie(t)) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var b = t.toLowerCase().slice(0, 5);
              if (b !== "data-" && b !== "aria-")
                return;
            }
          }
          r.push(U, M(t), $, M(Ve(n)), he);
        }
      }
    }
    var Qe = B(">"), ft = B("/>");
    function pt(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (re(n), r.push(M("" + n)));
      }
    }
    var ht = !1, un = !1, Gt = !1, Nn = !1, dn = !1, bn = !1, Kt = !1;
    function wn(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = mt(t);
          r.multiple && !n ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Va(r, e, t) {
      Ge("select", e), wn(e, "value"), wn(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !Gt && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Gt = !0), r.push(Pt("select"));
      var n = null, o = null;
      for (var c in e)
        if (te.call(e, c)) {
          var h = e[c];
          if (h == null)
            continue;
          switch (c) {
            case "children":
              n = h;
              break;
            case "dangerouslySetInnerHTML":
              o = h;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ge(r, t, c, h);
              break;
          }
        }
      return r.push(Qe), pt(r, o, n), n;
    }
    function Ja(r) {
      var e = "";
      return A.Children.forEach(r, function(t) {
        t != null && (e += t, !dn && typeof t != "string" && typeof t != "number" && (dn = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var Br = B(' selected=""');
    function Yt(r, e, t, n) {
      var o = n.selectedValue;
      r.push(Pt("option"));
      var c = null, h = null, b = null, P = null;
      for (var Q in e)
        if (te.call(e, Q)) {
          var Y = e[Q];
          if (Y == null)
            continue;
          switch (Q) {
            case "children":
              c = Y;
              break;
            case "selected":
              b = Y, Kt || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Kt = !0);
              break;
            case "dangerouslySetInnerHTML":
              P = Y;
              break;
            case "value":
              h = Y;
            default:
              ge(r, t, Q, Y);
              break;
          }
        }
      if (o != null) {
        var J;
        if (h !== null ? (V(h, "value"), J = "" + h) : (P !== null && (bn || (bn = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), J = Ja(c)), mt(o))
          for (var ae = 0; ae < o.length; ae++) {
            V(o[ae], "value");
            var Ce = "" + o[ae];
            if (Ce === J) {
              r.push(Br);
              break;
            }
          }
        else
          V(o, "select.value"), "" + o === J && r.push(Br);
      } else b && r.push(Br);
      return r.push(Qe), pt(r, P, c), c;
    }
    function Ka(r, e, t) {
      Ge("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !un && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), un = !0), e.value !== void 0 && e.defaultValue !== void 0 && !ht && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), ht = !0), r.push(Pt("input"));
      var n = null, o = null, c = null, h = null;
      for (var b in e)
        if (te.call(e, b)) {
          var P = e[b];
          if (P == null)
            continue;
          switch (b) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              h = P;
              break;
            case "defaultValue":
              o = P;
              break;
            case "checked":
              c = P;
              break;
            case "value":
              n = P;
              break;
            default:
              ge(r, t, b, P);
              break;
          }
        }
      return c !== null ? ge(r, t, "checked", c) : h !== null && ge(r, t, "checked", h), n !== null ? ge(r, t, "value", n) : o !== null && ge(r, t, "value", o), r.push(ft), null;
    }
    function $t(r, e, t) {
      Ge("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Nn && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Nn = !0), r.push(Pt("textarea"));
      var n = null, o = null, c = null;
      for (var h in e)
        if (te.call(e, h)) {
          var b = e[h];
          if (b == null)
            continue;
          switch (h) {
            case "children":
              c = b;
              break;
            case "value":
              n = b;
              break;
            case "defaultValue":
              o = b;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ge(r, t, h, b);
              break;
          }
        }
      if (n === null && o !== null && (n = o), r.push(Qe), c != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (mt(c)) {
          if (c.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          re(c[0]), n = "" + c[0];
        }
        re(c), n = "" + c;
      }
      return typeof n == "string" && n[0] === `
` && r.push(Sn), n !== null && (V(n, "value"), r.push(M(dt("" + n)))), null;
    }
    function so(r, e, t, n) {
      r.push(Pt(t));
      for (var o in e)
        if (te.call(e, o)) {
          var c = e[o];
          if (c == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ge(r, n, o, c);
              break;
          }
        }
      return r.push(ft), null;
    }
    function Ir(r, e, t) {
      r.push(Pt("menuitem"));
      for (var n in e)
        if (te.call(e, n)) {
          var o = e[n];
          if (o == null)
            continue;
          switch (n) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ge(r, t, n, o);
              break;
          }
        }
      return r.push(Qe), null;
    }
    function Le(r, e, t) {
      r.push(Pt("title"));
      var n = null;
      for (var o in e)
        if (te.call(e, o)) {
          var c = e[o];
          if (c == null)
            continue;
          switch (o) {
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ge(r, t, o, c);
              break;
          }
        }
      r.push(Qe);
      {
        var h = Array.isArray(n) && n.length < 2 ? n[0] || null : n;
        Array.isArray(n) && n.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && h.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : h != null && typeof h != "string" && typeof h != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return n;
    }
    function xn(r, e, t, n) {
      r.push(Pt(t));
      var o = null, c = null;
      for (var h in e)
        if (te.call(e, h)) {
          var b = e[h];
          if (b == null)
            continue;
          switch (h) {
            case "children":
              o = b;
              break;
            case "dangerouslySetInnerHTML":
              c = b;
              break;
            default:
              ge(r, n, h, b);
              break;
          }
        }
      return r.push(Qe), pt(r, c, o), typeof o == "string" ? (r.push(M(dt(o))), null) : o;
    }
    function Rr(r, e, t, n) {
      r.push(Pt(t));
      var o = null, c = null;
      for (var h in e)
        if (te.call(e, h)) {
          var b = e[h];
          if (b == null)
            continue;
          switch (h) {
            case "children":
              o = b;
              break;
            case "dangerouslySetInnerHTML":
              c = b;
              break;
            case "style":
              j(r, n, b);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ie(h) && typeof b != "function" && typeof b != "symbol" && r.push(U, M(h), $, M(Ve(b)), he);
              break;
          }
        }
      return r.push(Qe), pt(r, c, o), o;
    }
    var Sn = B(`
`);
    function fn(r, e, t, n) {
      r.push(Pt(t));
      var o = null, c = null;
      for (var h in e)
        if (te.call(e, h)) {
          var b = e[h];
          if (b == null)
            continue;
          switch (h) {
            case "children":
              o = b;
              break;
            case "dangerouslySetInnerHTML":
              c = b;
              break;
            default:
              ge(r, n, h, b);
              break;
          }
        }
      if (r.push(Qe), c != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var P = c.__html;
        P != null && (typeof P == "string" && P.length > 0 && P[0] === `
` ? r.push(Sn, M(P)) : (re(P), r.push(M("" + P))));
      }
      return typeof o == "string" && o[0] === `
` && r.push(Sn), o;
    }
    var Mr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, pn = /* @__PURE__ */ new Map();
    function Pt(r) {
      var e = pn.get(r);
      if (e === void 0) {
        if (!Mr.test(r))
          throw new Error("Invalid tag: " + r);
        e = B("<" + r), pn.set(r, e);
      }
      return e;
    }
    var lo = B("<!DOCTYPE html>");
    function lr(r, e, t, n, o) {
      switch (at(e, t), Kn(e, t), oo(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== zt && o.insertionMode !== Wt && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        case "select":
          return Va(r, t, n);
        case "option":
          return Yt(r, t, n, o);
        case "textarea":
          return $t(r, t, n);
        case "input":
          return Ka(r, t, n);
        case "menuitem":
          return Ir(r, t, n);
        case "title":
          return Le(r, t, n);
        case "listing":
        case "pre":
          return fn(r, t, e, n);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return so(r, t, e, n);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return xn(r, t, e, n);
        case "html":
          return o.insertionMode === Jt && r.push(lo), xn(r, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? xn(r, t, e, n) : Rr(r, t, e, n);
      }
    }
    var Yo = B("</"), jr = B(">");
    function Xo(r, e, t) {
      switch (e) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          r.push(Yo, M(e), jr);
      }
    }
    function $a(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        k(r, t[n]);
      return n < t.length ? I(r, t[n]) : !0;
    }
    var qa = B('<template id="'), Qr = B('"></template>');
    function Vo(r, e, t) {
      k(r, qa), k(r, e.placeholderPrefix);
      var n = M(t.toString(16));
      return k(r, n), I(r, Qr);
    }
    var Ar = B("<!--$-->"), Ao = B('<!--$?--><template id="'), ei = B('"></template>'), Ln = B("<!--$!-->"), co = B("<!--/$-->"), uo = B("<template"), Hn = B('"'), cr = B(' data-dgst="'), Or = B(' data-msg="'), Jo = B(' data-stck="'), Ko = B("></template>");
    function $o(r, e) {
      return I(r, Ar);
    }
    function Fr(r, e, t) {
      if (k(r, Ao), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(r, t), I(r, ei);
    }
    function wt(r, e, t, n, o) {
      var c;
      return c = I(r, Ln), k(r, uo), t && (k(r, cr), k(r, M(Ve(t))), k(r, Hn)), n && (k(r, Or), k(r, M(Ve(n))), k(r, Hn)), o && (k(r, Jo), k(r, M(Ve(o))), k(r, Hn)), c = I(r, Ko), c;
    }
    function qo(r, e) {
      return I(r, co);
    }
    function Nr(r, e) {
      return I(r, co);
    }
    function ti(r, e) {
      return I(r, co);
    }
    var ea = B('<div hidden id="'), Lr = B('">'), ta = B("</div>"), na = B('<svg aria-hidden="true" style="display:none" id="'), Hr = B('">'), Ur = B("</svg>"), ra = B('<math aria-hidden="true" style="display:none" id="'), oa = B('">'), aa = B("</math>"), fo = B('<table hidden id="'), ia = B('">'), l = B("</table>"), d = B('<table hidden><tbody id="'), y = B('">'), D = B("</tbody></table>"), H = B('<table hidden><tr id="'), F = B('">'), Z = B("</tr></table>"), q = B('<table hidden><colgroup id="'), be = B('">'), Pe = B("</colgroup></table>");
    function De(r, e, t, n) {
      switch (t.insertionMode) {
        case Jt:
        case Je:
          return k(r, ea), k(r, e.segmentPrefix), k(r, M(n.toString(16))), I(r, Lr);
        case zt:
          return k(r, na), k(r, e.segmentPrefix), k(r, M(n.toString(16))), I(r, Hr);
        case Wt:
          return k(r, ra), k(r, e.segmentPrefix), k(r, M(n.toString(16))), I(r, oa);
        case An:
          return k(r, fo), k(r, e.segmentPrefix), k(r, M(n.toString(16))), I(r, ia);
        case Qn:
          return k(r, d), k(r, e.segmentPrefix), k(r, M(n.toString(16))), I(r, y);
        case Tt:
          return k(r, H), k(r, e.segmentPrefix), k(r, M(n.toString(16))), I(r, F);
        case _t:
          return k(r, q), k(r, e.segmentPrefix), k(r, M(n.toString(16))), I(r, be);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function He(r, e) {
      switch (e.insertionMode) {
        case Jt:
        case Je:
          return I(r, ta);
        case zt:
          return I(r, Ur);
        case Wt:
          return I(r, aa);
        case An:
          return I(r, l);
        case Qn:
          return I(r, D);
        case Tt:
          return I(r, Z);
        case _t:
          return I(r, Pe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var xt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", kt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Bt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', zr = B(xt + ';$RS("'), sa = B('$RS("'), ur = B('","'), el = B('")<\/script>');
    function tl(r, e, t) {
      k(r, e.startInlineScript), e.sentCompleteSegmentFunction ? k(r, sa) : (e.sentCompleteSegmentFunction = !0, k(r, zr)), k(r, e.segmentPrefix);
      var n = M(t.toString(16));
      return k(r, n), k(r, ur), k(r, e.placeholderPrefix), k(r, n), I(r, el);
    }
    var ni = B(kt + ';$RC("'), nl = B('$RC("'), rl = B('","'), Yi = B('")<\/script>');
    function Xi(r, e, t, n) {
      if (k(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? k(r, nl) : (e.sentCompleteBoundaryFunction = !0, k(r, ni)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = M(n.toString(16));
      return k(r, t), k(r, rl), k(r, e.segmentPrefix), k(r, o), I(r, Yi);
    }
    var ol = B(Bt + ';$RX("'), al = B('$RX("'), il = B('"'), sl = B(")<\/script>"), Et = B(",");
    function ll(r, e, t, n, o, c) {
      if (k(r, e.startInlineScript), e.sentClientRenderFunction ? k(r, al) : (e.sentClientRenderFunction = !0, k(r, ol)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(r, t), k(r, il), (n || o || c) && (k(r, Et), k(r, M(la(n || "")))), (o || c) && (k(r, Et), k(r, M(la(o || "")))), c && (k(r, Et), k(r, M(la(c)))), I(r, sl);
    }
    var Vi = /[<\u2028\u2029]/g;
    function la(r) {
      var e = JSON.stringify(r);
      return e.replace(Vi, function(t) {
        switch (t) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var It = Object.assign, Ji = Symbol.for("react.element"), Aa = Symbol.for("react.portal"), ca = Symbol.for("react.fragment"), ua = Symbol.for("react.strict_mode"), da = Symbol.for("react.profiler"), po = Symbol.for("react.provider"), ho = Symbol.for("react.context"), Wr = Symbol.for("react.forward_ref"), ri = Symbol.for("react.suspense"), oi = Symbol.for("react.suspense_list"), ai = Symbol.for("react.memo"), fa = Symbol.for("react.lazy"), Ki = Symbol.for("react.scope"), Al = Symbol.for("react.debug_trace_mode"), cl = Symbol.for("react.legacy_hidden"), ul = Symbol.for("react.default_value"), ii = Symbol.iterator, Ze = "@@iterator";
    function vo(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = ii && r[ii] || r[Ze];
      return typeof e == "function" ? e : null;
    }
    function $i(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function si(r) {
      return r.displayName || "Context";
    }
    function _e(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case ca:
          return "Fragment";
        case Aa:
          return "Portal";
        case da:
          return "Profiler";
        case ua:
          return "StrictMode";
        case ri:
          return "Suspense";
        case oi:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case ho:
            var e = r;
            return si(e) + ".Consumer";
          case po:
            var t = r;
            return si(t._context) + ".Provider";
          case Wr:
            return $i(r, r.render, "ForwardRef");
          case ai:
            var n = r.displayName || null;
            return n !== null ? n : _e(r.type) || "Memo";
          case fa: {
            var o = r, c = o._payload, h = o._init;
            try {
              return _e(h(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _r = 0, li, Ai, ci, ui, qi, es, pa;
    function ha() {
    }
    ha.__reactDisabledLog = !0;
    function go() {
      {
        if (_r === 0) {
          li = console.log, Ai = console.info, ci = console.warn, ui = console.error, qi = console.group, es = console.groupCollapsed, pa = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: ha,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        _r++;
      }
    }
    function di() {
      {
        if (_r--, _r === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: It({}, r, {
              value: li
            }),
            info: It({}, r, {
              value: Ai
            }),
            warn: It({}, r, {
              value: ci
            }),
            error: It({}, r, {
              value: ui
            }),
            group: It({}, r, {
              value: qi
            }),
            groupCollapsed: It({}, r, {
              value: es
            }),
            groupEnd: It({}, r, {
              value: pa
            })
          });
        }
        _r < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Zr = u.ReactCurrentDispatcher, fi;
    function dr(r, e, t) {
      {
        if (fi === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            fi = n && n[1] || "";
          }
        return `
` + fi + r;
      }
    }
    var pi = !1, mo;
    {
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      mo = new dl();
    }
    function yo(r, e) {
      if (!r || pi)
        return "";
      {
        var t = mo.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      pi = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Zr.current, Zr.current = null, go();
      try {
        if (e) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (Fe) {
              n = Fe;
            }
            Reflect.construct(r, [], h);
          } else {
            try {
              h.call();
            } catch (Fe) {
              n = Fe;
            }
            r.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Fe) {
            n = Fe;
          }
          r();
        }
      } catch (Fe) {
        if (Fe && n && typeof Fe.stack == "string") {
          for (var b = Fe.stack.split(`
`), P = n.stack.split(`
`), Q = b.length - 1, Y = P.length - 1; Q >= 1 && Y >= 0 && b[Q] !== P[Y]; )
            Y--;
          for (; Q >= 1 && Y >= 0; Q--, Y--)
            if (b[Q] !== P[Y]) {
              if (Q !== 1 || Y !== 1)
                do
                  if (Q--, Y--, Y < 0 || b[Q] !== P[Y]) {
                    var J = `
` + b[Q].replace(" at new ", " at ");
                    return r.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", r.displayName)), typeof r == "function" && mo.set(r, J), J;
                  }
                while (Q >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        pi = !1, Zr.current = c, di(), Error.prepareStackTrace = o;
      }
      var ae = r ? r.displayName || r.name : "", Ce = ae ? dr(ae) : "";
      return typeof r == "function" && mo.set(r, Ce), Ce;
    }
    function ts(r, e, t) {
      return yo(r, !0);
    }
    function hi(r, e, t) {
      return yo(r, !1);
    }
    function va(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function ga(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return yo(r, va(r));
      if (typeof r == "string")
        return dr(r);
      switch (r) {
        case ri:
          return dr("Suspense");
        case oi:
          return dr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Wr:
            return hi(r.render);
          case ai:
            return ga(r.type, e, t);
          case fa: {
            var n = r, o = n._payload, c = n._init;
            try {
              return ga(c(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ma = {}, bo = u.ReactDebugCurrentFrame;
    function wo(r) {
      if (r) {
        var e = r._owner, t = ga(r.type, r._source, e ? e.type : null);
        bo.setExtraStackFrame(t);
      } else
        bo.setExtraStackFrame(null);
    }
    function ns(r, e, t, n, o) {
      {
        var c = Function.call.bind(te);
        for (var h in r)
          if (c(r, h)) {
            var b = void 0;
            try {
              if (typeof r[h] != "function") {
                var P = Error((n || "React class") + ": " + t + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              b = r[h](e, h, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              b = Q;
            }
            b && !(b instanceof Error) && (wo(o), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, h, typeof b), wo(null)), b instanceof Error && !(b.message in ma) && (ma[b.message] = !0, wo(o), a("Failed %s type: %s", t, b.message), wo(null));
          }
      }
    }
    var fr;
    fr = {};
    var ya = {};
    Object.freeze(ya);
    function Un(r, e) {
      {
        var t = r.contextTypes;
        if (!t)
          return ya;
        var n = {};
        for (var o in t)
          n[o] = e[o];
        {
          var c = _e(r) || "Unknown";
          ns(t, n, "context", c);
        }
        return n;
      }
    }
    function vi(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = _e(e) || "Unknown";
            fr[o] || (fr[o] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var c = r.getChildContext();
        for (var h in c)
          if (!(h in n))
            throw new Error((_e(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var b = _e(e) || "Unknown";
          ns(n, c, "child context", b);
        }
        return It({}, t, c);
      }
    }
    var pr;
    pr = {};
    var ba = null, zn = null;
    function wa(r) {
      r.context._currentValue = r.parentValue;
    }
    function xa(r) {
      r.context._currentValue = r.value;
    }
    function xo(r, e) {
      if (r !== e) {
        wa(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          xo(t, n);
        }
        xa(e);
      }
    }
    function So(r) {
      wa(r);
      var e = r.parent;
      e !== null && So(e);
    }
    function rs(r) {
      var e = r.parent;
      e !== null && rs(e), xa(r);
    }
    function os(r, e) {
      wa(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? xo(t, e) : os(t, e);
    }
    function as(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? xo(r, t) : as(r, t), xa(e);
    }
    function Wn(r) {
      var e = zn, t = r;
      e !== t && (e === null ? rs(t) : t === null ? So(e) : e.depth === t.depth ? xo(e, t) : e.depth > t.depth ? os(e, t) : as(e, t), zn = t);
    }
    function gi(r, e) {
      var t;
      t = r._currentValue, r._currentValue = e, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== pr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = pr;
      var n = zn, o = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: r,
        parentValue: t,
        value: e
      };
      return zn = o, o;
    }
    function fl(r) {
      var e = zn;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === ul ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== pr && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = pr;
      }
      return zn = e.parent;
    }
    function is() {
      return zn;
    }
    function Gr(r) {
      var e = r._currentValue;
      return e;
    }
    function Co(r) {
      return r._reactInternals;
    }
    function mi(r, e) {
      r._reactInternals = e;
    }
    var Sa = {}, Ca = {}, Ea, Yr, Eo, Do, Da, To, Ta, Pa, yi;
    {
      Ea = /* @__PURE__ */ new Set(), Yr = /* @__PURE__ */ new Set(), Eo = /* @__PURE__ */ new Set(), Ta = /* @__PURE__ */ new Set(), Do = /* @__PURE__ */ new Set(), Pa = /* @__PURE__ */ new Set(), yi = /* @__PURE__ */ new Set();
      var ss = /* @__PURE__ */ new Set();
      To = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          ss.has(t) || (ss.add(t), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, Da = function(r, e) {
        if (e === void 0) {
          var t = _e(r) || "Component";
          Do.has(t) || (Do.add(t), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function ls(r, e) {
      {
        var t = r.constructor, n = t && _e(t) || "ReactClass", o = n + "." + e;
        if (Sa[o])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), Sa[o] = !0;
      }
    }
    var As = {
      isMounted: function(r) {
        return !1;
      },
      enqueueSetState: function(r, e, t) {
        var n = Co(r);
        n.queue === null ? ls(r, "setState") : (n.queue.push(e), t != null && To(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = Co(r);
        n.replace = !0, n.queue = [e], t != null && To(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = Co(r);
        t.queue === null ? ls(r, "forceUpdate") : e != null && To(e, "setState");
      }
    };
    function pl(r, e, t, n, o) {
      var c = t(o, n);
      Da(e, c);
      var h = c == null ? n : It({}, n, c);
      return h;
    }
    function cs(r, e, t) {
      var n = ya, o = r.contextType;
      if ("contextType" in r) {
        var c = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === ho && o._context === void 0
        );
        if (!c && !yi.has(r)) {
          yi.add(r);
          var h = "";
          o === void 0 ? h = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? h = " However, it is set to a " + typeof o + "." : o.$$typeof === po ? h = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? h = " Did you accidentally pass the Context.Consumer instead?" : h = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _e(r) || "Component", h);
        }
      }
      typeof o == "object" && o !== null ? n = Gr(o) : n = t;
      var b = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (b.state === null || b.state === void 0)) {
          var P = _e(r) || "Component";
          Ea.has(P) || (Ea.add(P), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", P, b.state === null ? "null" : "undefined", P));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof b.getSnapshotBeforeUpdate == "function") {
          var Q = null, Y = null, J = null;
          if (typeof b.componentWillMount == "function" && b.componentWillMount.__suppressDeprecationWarning !== !0 ? Q = "componentWillMount" : typeof b.UNSAFE_componentWillMount == "function" && (Q = "UNSAFE_componentWillMount"), typeof b.componentWillReceiveProps == "function" && b.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof b.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof b.componentWillUpdate == "function" && b.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof b.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), Q !== null || Y !== null || J !== null) {
            var ae = _e(r) || "Component", Ce = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Eo.has(ae) || (Eo.add(ae), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Ce, Q !== null ? `
  ` + Q : "", Y !== null ? `
  ` + Y : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return b;
    }
    function hl(r, e, t) {
      {
        var n = _e(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !Pa.has(e) && (Pa.add(e), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _e(e) || "A pure component"), typeof r.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var c = r.props !== t;
        r.props !== void 0 && c && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Yr.has(e) && (Yr.add(e), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _e(e))), typeof r.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var h = r.state;
        h && (typeof h != "object" || mt(h)) && a("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function vl(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = _e(r) || "Unknown";
          Ca[n] || (v(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), Ca[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", _e(r) || "Component"), As.enqueueReplaceState(e, e.state, null));
    }
    function bi(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, c = r.replace;
        if (r.queue = null, r.replace = !1, c && o.length === 1)
          e.state = o[0];
        else {
          for (var h = c ? o[0] : e.state, b = !0, P = c ? 1 : 0; P < o.length; P++) {
            var Q = o[P], Y = typeof Q == "function" ? Q.call(e, h, t, n) : Q;
            Y != null && (b ? (b = !1, h = It({}, h, Y)) : It(h, Y));
          }
          e.state = h;
        }
      } else
        r.queue = null;
    }
    function Po(r, e, t, n) {
      hl(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = As, r.props = t, r.state = o;
      var c = {
        queue: [],
        replace: !1
      };
      mi(r, c);
      var h = e.contextType;
      if (typeof h == "object" && h !== null ? r.context = Gr(h) : r.context = n, r.state === t) {
        var b = _e(e) || "Component";
        Ta.has(b) || (Ta.add(b), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
      }
      var P = e.getDerivedStateFromProps;
      typeof P == "function" && (r.state = pl(r, e, P, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (vl(e, r), bi(c, r, t, n));
    }
    var gl = {
      id: 1,
      overflow: ""
    };
    function ml(r) {
      var e = r.overflow, t = r.id, n = t & ~yl(t);
      return n.toString(32) + e;
    }
    function wi(r, e, t) {
      var n = r.id, o = r.overflow, c = ka(n) - 1, h = n & ~(1 << c), b = t + 1, P = ka(e) + c;
      if (P > 30) {
        var Q = c - c % 5, Y = (1 << Q) - 1, J = (h & Y).toString(32), ae = h >> Q, Ce = c - Q, Fe = ka(e) + Ce, st = b << Ce, wr = st | ae, xr = J + o;
        return {
          id: 1 << Fe | wr,
          overflow: xr
        };
      } else {
        var Pn = b << c, eo = Pn | h, Vl = o;
        return {
          id: 1 << P | eo,
          overflow: Vl
        };
      }
    }
    function ka(r) {
      return 32 - bl(r);
    }
    function yl(r) {
      return 1 << ka(r) - 1;
    }
    var bl = Math.clz32 ? Math.clz32 : xi, wl = Math.log, Cn = Math.LN2;
    function xi(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - (wl(e) / Cn | 0) | 0;
    }
    function Ba(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var ze = typeof Object.is == "function" ? Object.is : Ba, Rt = null, Xr = null, hr = null, Oe = null, _n = !1, Ia = !1, Mt = 0, jt = null, hn = 0, xl = 25, qt = !1, Zn;
    function vr() {
      if (Rt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return qt && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Rt;
    }
    function Sl(r, e) {
      if (e === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Zn), !1;
      r.length !== e.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Zn, "[" + r.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < r.length; t++)
        if (!ze(r[t], e[t]))
          return !1;
      return !0;
    }
    function Si() {
      if (hn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function ko() {
      return Oe === null ? hr === null ? (_n = !1, hr = Oe = Si()) : (_n = !0, Oe = hr) : Oe.next === null ? (_n = !1, Oe = Oe.next = Si()) : (_n = !0, Oe = Oe.next), Oe;
    }
    function Cl(r, e) {
      Rt = e, Xr = r, qt = !1, Mt = 0;
    }
    function El(r, e, t, n) {
      for (; Ia; )
        Ia = !1, Mt = 0, hn += 1, Oe = null, t = r(e, n);
      return Ci(), t;
    }
    function Ra() {
      var r = Mt !== 0;
      return r;
    }
    function Ci() {
      qt = !1, Rt = null, Xr = null, Ia = !1, hr = null, hn = 0, jt = null, Oe = null;
    }
    function us(r) {
      return qt && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Gr(r);
    }
    function ds(r) {
      return Zn = "useContext", vr(), Gr(r);
    }
    function Ei(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function Dl(r) {
      return Zn = "useState", fs(
        Ei,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function fs(r, e, t) {
      if (r !== Ei && (Zn = "useReducer"), Rt = vr(), Oe = ko(), _n) {
        var n = Oe.queue, o = n.dispatch;
        if (jt !== null) {
          var c = jt.get(n);
          if (c !== void 0) {
            jt.delete(n);
            var h = Oe.memoizedState, b = c;
            do {
              var P = b.action;
              qt = !0, h = r(h, P), qt = !1, b = b.next;
            } while (b !== null);
            return Oe.memoizedState = h, [h, o];
          }
        }
        return [Oe.memoizedState, o];
      } else {
        qt = !0;
        var Q;
        r === Ei ? Q = typeof e == "function" ? e() : e : Q = t !== void 0 ? t(e) : e, qt = !1, Oe.memoizedState = Q;
        var Y = Oe.queue = {
          last: null,
          dispatch: null
        }, J = Y.dispatch = kl.bind(null, Rt, Y);
        return [Oe.memoizedState, J];
      }
    }
    function ps(r, e) {
      Rt = vr(), Oe = ko();
      var t = e === void 0 ? null : e;
      if (Oe !== null) {
        var n = Oe.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (Sl(t, o))
            return n[0];
        }
      }
      qt = !0;
      var c = r();
      return qt = !1, Oe.memoizedState = [c, t], c;
    }
    function Tl(r) {
      Rt = vr(), Oe = ko();
      var e = Oe.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), Oe.memoizedState = t, t;
      } else
        return e;
    }
    function Pl(r, e) {
      Zn = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function kl(r, e, t) {
      if (hn >= xl)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === Rt) {
        Ia = !0;
        var n = {
          action: t,
          next: null
        };
        jt === null && (jt = /* @__PURE__ */ new Map());
        var o = jt.get(e);
        if (o === void 0)
          jt.set(e, n);
        else {
          for (var c = o; c.next !== null; )
            c = c.next;
          c.next = n;
        }
      }
    }
    function Bl(r, e) {
      return ps(function() {
        return r;
      }, e);
    }
    function Il(r, e, t) {
      return vr(), e(r._source);
    }
    function Rl(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function Ma(r) {
      return vr(), r;
    }
    function hs() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Di() {
      return vr(), [!1, hs];
    }
    function vs() {
      var r = Xr, e = ml(r.treeContext), t = Bo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = Mt++;
      return Zt(t, e, n);
    }
    function ja() {
    }
    var Qa = {
      readContext: us,
      useContext: ds,
      useMemo: ps,
      useReducer: fs,
      useRef: Tl,
      useState: Dl,
      useInsertionEffect: ja,
      useLayoutEffect: Pl,
      useCallback: Bl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: ja,
      // Effects are not run in the server environment.
      useEffect: ja,
      // Debugging effect
      useDebugValue: ja,
      useDeferredValue: Ma,
      useTransition: Di,
      useId: vs,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Il,
      useSyncExternalStore: Rl
    }, Bo = null;
    function Oa(r) {
      Bo = r;
    }
    function Vr(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += dr(t.type, null, null);
              break;
            case 1:
              e += hi(t.type, null, null);
              break;
            case 2:
              e += ts(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var Fa = u.ReactCurrentDispatcher, Na = u.ReactDebugCurrentFrame, La = 0, Jr = 1, Ti = 2, gr = 3, gs = 4, Ml = 0, Kr = 1, $r = 2, jl = 12800;
    function Ql(r) {
      return console.error(r), null;
    }
    function mr() {
    }
    function Ha(r, e, t, n, o, c, h, b, P) {
      var Q = [], Y = /* @__PURE__ */ new Set(), J = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? jl : n,
        status: Ml,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: Y,
        pingedTasks: Q,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? Ql : o,
        onAllReady: c === void 0 ? mr : c,
        onShellReady: h === void 0 ? mr : h,
        onShellError: b === void 0 ? mr : b,
        onFatalError: P === void 0 ? mr : P
      }, ae = Io(
        J,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ae.parentFlushed = !0;
      var Ce = yr(J, r, null, ae, Y, ya, ba, gl);
      return Q.push(Ce), J;
    }
    function En(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && E(function() {
        return Ni(r);
      });
    }
    function Pi(r, e) {
      return {
        id: On,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function yr(r, e, t, n, o, c, h, b) {
      r.allPendingTasks++, t === null ? r.pendingRootTasks++ : t.pendingTasks++;
      var P = {
        node: e,
        ping: function() {
          return En(r, P);
        },
        blockedBoundary: t,
        blockedSegment: n,
        abortSet: o,
        legacyContext: c,
        context: h,
        treeContext: b
      };
      return P.componentStack = null, o.add(P), P;
    }
    function Io(r, e, t, n, o, c) {
      return {
        status: La,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: n,
        boundary: t,
        lastPushedText: o,
        textEmbedded: c
      };
    }
    var Dn = null;
    function vn() {
      return Dn === null || Dn.componentStack === null ? "" : Vr(Dn.componentStack);
    }
    function Tn(r, e) {
      r.componentStack = {
        tag: 0,
        parent: r.componentStack,
        type: e
      };
    }
    function Ua(r, e) {
      r.componentStack = {
        tag: 1,
        parent: r.componentStack,
        type: e
      };
    }
    function Ro(r, e) {
      r.componentStack = {
        tag: 2,
        parent: r.componentStack,
        type: e
      };
    }
    function en(r) {
      r.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
    }
    var Mo = null;
    function ki(r, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = Mo || vn();
        Mo = null, r.errorMessage = t, r.errorComponentStack = n;
      }
    }
    function jo(r, e) {
      var t = r.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function Qo(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = $r, K(r.destination, e)) : (r.status = Kr, r.fatalError = e);
    }
    function ms(r, e, t) {
      Tn(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, c = t.fallback, h = t.children, b = /* @__PURE__ */ new Set(), P = Pi(r, b), Q = o.chunks.length, Y = Io(
        r,
        Q,
        P,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(Y), o.lastPushedText = !1;
      var J = Io(
        r,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      J.parentFlushed = !0, e.blockedBoundary = P, e.blockedSegment = J;
      try {
        if (qr(r, e, h), bt(J.chunks, r.responseState, J.lastPushedText, J.textEmbedded), J.status = Jr, br(P, J), P.pendingTasks === 0) {
          en(e);
          return;
        }
      } catch (Ce) {
        J.status = gs, P.forceClientRender = !0, P.errorDigest = jo(r, Ce), ki(P, Ce);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var ae = yr(r, c, n, Y, b, e.legacyContext, e.context, e.treeContext);
      ae.componentStack = e.componentStack, r.pingedTasks.push(ae), en(e);
    }
    function Ol(r, e, t, n) {
      Tn(e, t);
      var o = e.blockedSegment, c = lr(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var h = o.formatContext;
      o.formatContext = yn(h, t, n), qr(r, e, c), o.formatContext = h, Xo(o.chunks, t), o.lastPushedText = !1, en(e);
    }
    function ys(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function Oo(r, e, t, n, o) {
      var c = {};
      Cl(e, c);
      var h = t(n, o);
      return El(t, n, h, o);
    }
    function Bi(r, e, t, n, o) {
      var c = t.render();
      t.props !== o && (ji || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", _e(n) || "a component"), ji = !0);
      {
        var h = n.childContextTypes;
        if (h != null) {
          var b = e.legacyContext, P = vi(t, n, b, h);
          e.legacyContext = P, St(r, e, c), e.legacyContext = b;
          return;
        }
      }
      St(r, e, c);
    }
    function bs(r, e, t, n) {
      Ro(e, t);
      var o = Un(t, e.legacyContext), c = cs(t, n, o);
      Po(c, t, n, o), Bi(r, e, c, t, n), en(e);
    }
    var Ii = {}, Fo = {}, Ri = {}, Mi = {}, ji = !1, ws = {}, xs = !1, Qi = !1, Ss = !1;
    function Fl(r, e, t, n) {
      var o;
      if (o = Un(t, e.legacyContext), Ua(e, t), t.prototype && typeof t.prototype.render == "function") {
        var c = _e(t) || "Unknown";
        Ii[c] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), Ii[c] = !0);
      }
      var h = Oo(r, e, t, n, o), b = Ra();
      if (typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var P = _e(t) || "Unknown";
        Fo[P] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), Fo[P] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var Q = _e(t) || "Unknown";
          Fo[Q] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Q, Q, Q), Fo[Q] = !0);
        }
        Po(h, t, n, o), Bi(r, e, h, t, n);
      } else if (Nl(t), b) {
        var Y = e.treeContext, J = 1, ae = 0;
        e.treeContext = wi(Y, J, ae);
        try {
          St(r, e, h);
        } finally {
          e.treeContext = Y;
        }
      } else
        St(r, e, h);
      en(e);
    }
    function Nl(r) {
      {
        if (r && r.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = _e(r) || "Unknown";
          ws[e] || (a("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), ws[e] = !0);
        }
        if (typeof r.getDerivedStateFromProps == "function") {
          var t = _e(r) || "Unknown";
          Mi[t] || (a("%s: Function components do not support getDerivedStateFromProps.", t), Mi[t] = !0);
        }
        if (typeof r.contextType == "object" && r.contextType !== null) {
          var n = _e(r) || "Unknown";
          Ri[n] || (a("%s: Function components do not support contextType.", n), Ri[n] = !0);
        }
      }
    }
    function Cs(r, e) {
      if (r && r.defaultProps) {
        var t = It({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function Ll(r, e, t, n, o) {
      Ua(e, t.render);
      var c = Oo(r, e, t.render, n, o), h = Ra();
      if (h) {
        var b = e.treeContext, P = 1, Q = 0;
        e.treeContext = wi(b, P, Q);
        try {
          St(r, e, c);
        } finally {
          e.treeContext = b;
        }
      } else
        St(r, e, c);
      en(e);
    }
    function Oi(r, e, t, n, o) {
      var c = t.type, h = Cs(c, n);
      za(r, e, c, h, o);
    }
    function Hl(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (Ss || (Ss = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var c = Gr(t), h = o(c);
      St(r, e, h);
    }
    function Qt(r, e, t, n) {
      var o = t._context, c = n.value, h = n.children, b;
      b = e.context, e.context = gi(o, c), St(r, e, h), e.context = fl(o), b !== e.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Ul(r, e, t, n, o) {
      Tn(e, "Lazy");
      var c = t._payload, h = t._init, b = h(c), P = Cs(b, n);
      za(r, e, b, P, o), en(e);
    }
    function za(r, e, t, n, o) {
      if (typeof t == "function")
        if (ys(t)) {
          bs(r, e, t, n);
          return;
        } else {
          Fl(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        Ol(r, e, t, n);
        return;
      }
      switch (t) {
        case cl:
        case Al:
        case ua:
        case da:
        case ca: {
          St(r, e, n.children);
          return;
        }
        case oi: {
          Tn(e, "SuspenseList"), St(r, e, n.children), en(e);
          return;
        }
        case Ki:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ri: {
          ms(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Wr: {
            Ll(r, e, t, n, o);
            return;
          }
          case ai: {
            Oi(r, e, t, n, o);
            return;
          }
          case po: {
            Qt(r, e, t, n);
            return;
          }
          case ho: {
            Hl(r, e, t, n);
            return;
          }
          case fa: {
            Ul(r, e, t, n);
            return;
          }
        }
      var c = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + c));
    }
    function zl(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (xs || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), xs = !0), r.entries === e && (Qi || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qi = !0);
    }
    function St(r, e, t) {
      try {
        return Wl(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (Mo = Mo !== null ? Mo : vn()), n;
      }
    }
    function Wl(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Ji: {
            var n = t, o = n.type, c = n.props, h = n.ref;
            za(r, e, o, c, h);
            return;
          }
          case Aa:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case fa: {
            var b = t, P = b._payload, Q = b._init, Y;
            try {
              Y = Q(P);
            } catch (Pn) {
              throw typeof Pn == "object" && Pn !== null && typeof Pn.then == "function" && Tn(e, "Lazy"), Pn;
            }
            St(r, e, Y);
            return;
          }
        }
        if (mt(t)) {
          Es(r, e, t);
          return;
        }
        var J = vo(t);
        if (J) {
          zl(t, J);
          var ae = J.call(t);
          if (ae) {
            var Ce = ae.next();
            if (!Ce.done) {
              var Fe = [];
              do
                Fe.push(Ce.value), Ce = ae.next();
              while (!Ce.done);
              Es(r, e, Fe);
              return;
            }
            return;
          }
        }
        var st = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var wr = e.blockedSegment;
        wr.lastPushedText = rt(e.blockedSegment.chunks, t, r.responseState, wr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var xr = e.blockedSegment;
        xr.lastPushedText = rt(e.blockedSegment.chunks, "" + t, r.responseState, xr.lastPushedText);
        return;
      }
      typeof t == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Es(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var c = e.treeContext;
        e.treeContext = wi(c, n, o);
        try {
          qr(r, e, t[o]);
        } finally {
          e.treeContext = c;
        }
      }
    }
    function Ds(r, e, t) {
      var n = e.blockedSegment, o = n.chunks.length, c = Io(
        r,
        o,
        null,
        n.formatContext,
        // Adopt the parent segment's leading text embed
        n.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      n.children.push(c), n.lastPushedText = !1;
      var h = yr(r, e.node, e.blockedBoundary, c, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (h.componentStack = e.componentStack.parent);
      var b = h.ping;
      t.then(b, b);
    }
    function qr(r, e, t) {
      var n = e.blockedSegment.formatContext, o = e.legacyContext, c = e.context, h = null;
      h = e.componentStack;
      try {
        return St(r, e, t);
      } catch (b) {
        if (Ci(), typeof b == "object" && b !== null && typeof b.then == "function") {
          Ds(r, e, b), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = c, Wn(c), e.componentStack = h;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = c, Wn(c), e.componentStack = h, b;
      }
    }
    function Ts(r, e, t, n) {
      var o = jo(r, n);
      if (e === null ? Qo(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, ki(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var c = r.onAllReady;
        c();
      }
    }
    function _l(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = gr, No(e, t, n);
    }
    function Fi(r, e, t) {
      var n = r.blockedBoundary, o = r.blockedSegment;
      if (o.status = gr, n === null)
        e.allPendingTasks--, e.status !== $r && (e.status = $r, e.destination !== null && N(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var c = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(c);
          {
            var h = "The server did not finish this Suspense boundary: ";
            c && typeof c.message == "string" ? c = h + c.message : c = h + String(c);
            var b = Dn;
            Dn = r;
            try {
              ki(n, c);
            } finally {
              Dn = b;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(Q) {
          return Fi(Q, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var P = e.onAllReady;
          P();
        }
      }
    }
    function br(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Jr && br(r, t);
      } else {
        var n = r.completedSegments;
        n.push(e);
      }
    }
    function No(r, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (r.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          r.completedRootSegment = t;
        }
        if (r.pendingRootTasks--, r.pendingRootTasks === 0) {
          r.onShellError = mr;
          var n = r.onShellReady;
          n();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Jr && br(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(_l, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Jr) {
          br(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && r.partialBoundaries.push(e);
        }
      }
      if (r.allPendingTasks--, r.allPendingTasks === 0) {
        var c = r.onAllReady;
        c();
      }
    }
    function Zl(r, e) {
      var t = e.blockedSegment;
      if (t.status === La) {
        Wn(e.context);
        var n = null;
        n = Dn, Dn = e;
        try {
          St(r, e, e.node), bt(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Jr, No(r, e.blockedBoundary, t);
        } catch (c) {
          if (Ci(), typeof c == "object" && c !== null && typeof c.then == "function") {
            var o = e.ping;
            c.then(o, o);
          } else
            e.abortSet.delete(e), t.status = gs, Ts(r, e.blockedBoundary, t, c);
        } finally {
          Dn = n;
        }
      }
    }
    function Ni(r) {
      if (r.status !== $r) {
        var e = is(), t = Fa.current;
        Fa.current = Qa;
        var n;
        n = Na.getCurrentStack, Na.getCurrentStack = vn;
        var o = Bo;
        Oa(r.responseState);
        try {
          var c = r.pingedTasks, h;
          for (h = 0; h < c.length; h++) {
            var b = c[h];
            Zl(r, b);
          }
          c.splice(0, h), r.destination !== null && Li(r, r.destination);
        } catch (P) {
          jo(r, P), Qo(r, P);
        } finally {
          Oa(o), Fa.current = t, Na.getCurrentStack = n, t === Qa && Wn(e);
        }
      }
    }
    function Lo(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case La: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, Vo(e, r.responseState, n);
        }
        case Jr: {
          t.status = Ti;
          for (var o = !0, c = t.chunks, h = 0, b = t.children, P = 0; P < b.length; P++) {
            for (var Q = b[P]; h < Q.index; h++)
              k(e, c[h]);
            o = Wa(r, e, Q);
          }
          for (; h < c.length - 1; h++)
            k(e, c[h]);
          return h < c.length && (o = I(e, c[h])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Wa(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return Lo(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return wt(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), Lo(r, e, t), ti(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = Ct(r.responseState);
        return Fr(e, r.responseState, o), Lo(r, e, t), Nr(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Fr(e, r.responseState, n.id), Lo(r, e, t), Nr(e, r.responseState);
        $o(e, r.responseState);
        var c = n.completedSegments;
        if (c.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var h = c[0];
        return Wa(r, e, h), qo(e, r.responseState);
      }
    }
    function Ps(r, e, t) {
      return ll(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function _a(r, e, t) {
      return De(e, r.responseState, t.formatContext, t.id), Wa(r, e, t), He(e, t.formatContext);
    }
    function ks(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var c = n[o];
        Bs(r, e, t, c);
      }
      return n.length = 0, Xi(e, r.responseState, t.id, t.rootSegmentID);
    }
    function Gl(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var c = n[o];
        if (!Bs(r, e, t, c))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function Bs(r, e, t, n) {
      if (n.status === Ti)
        return !0;
      var o = n.id;
      if (o === -1) {
        var c = n.id = t.rootSegmentID;
        if (c === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return _a(r, e, n);
      } else
        return _a(r, e, n), tl(e, r.responseState, o);
    }
    function Li(r, e) {
      R();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (Wa(r, e, t), r.completedRootSegment = null, $a(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var c = n[o];
          Ps(r, e, c);
        }
        n.splice(0, o);
        var h = r.completedBoundaries;
        for (o = 0; o < h.length; o++) {
          var b = h[o];
          ks(r, e, b);
        }
        h.splice(0, o), O(e), R(e);
        var P = r.partialBoundaries;
        for (o = 0; o < P.length; o++) {
          var Q = P[o];
          if (!Gl(r, e, Q)) {
            r.destination = null, o++, P.splice(0, o);
            return;
          }
        }
        P.splice(0, o);
        var Y = r.completedBoundaries;
        for (o = 0; o < Y.length; o++) {
          var J = Y[o];
          ks(r, e, J);
        }
        Y.splice(0, o);
      } finally {
        O(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), N(e));
      }
    }
    function Is(r) {
      E(function() {
        return Ni(r);
      });
    }
    function Yl(r, e) {
      if (r.status === Kr) {
        r.status = $r, K(e, r.fatalError);
        return;
      }
      if (r.status !== $r && r.destination === null) {
        r.destination = e;
        try {
          Li(r, e);
        } catch (t) {
          jo(r, t), Qo(r, t);
        }
      }
    }
    function Rs(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return Fi(n, r, e);
        }), t.clear(), r.destination !== null && Li(r, r.destination);
      } catch (n) {
        jo(r, n), Qo(r, n);
      }
    }
    function Xl(r, e) {
      return new Promise(function(t, n) {
        var o, c, h = new Promise(function(ae, Ce) {
          c = ae, o = Ce;
        });
        function b() {
          var ae = new ReadableStream(
            {
              type: "bytes",
              pull: function(Ce) {
                Yl(Q, Ce);
              },
              cancel: function(Ce) {
                Rs(Q);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          ae.allReady = h, t(ae);
        }
        function P(ae) {
          h.catch(function() {
          }), n(ae);
        }
        var Q = Ha(r, kr(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), cn(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, c, b, P, o);
        if (e && e.signal) {
          var Y = e.signal, J = function() {
            Rs(Q, Y.reason), Y.removeEventListener("abort", J);
          };
          Y.addEventListener("abort", J);
        }
        Is(Q);
      });
    }
    Qs.renderToReadableStream = Xl, Qs.version = i;
  }()), Qs;
}
var _o, sA;
Wi.env.NODE_ENV === "production" ? (_o = bd(), sA = wd()) : (_o = xd(), sA = Sd());
Zo.version = _o.version;
Zo.renderToString = _o.renderToString;
Zo.renderToStaticMarkup = _o.renderToStaticMarkup;
Zo.renderToNodeStream = _o.renderToNodeStream;
Zo.renderToStaticNodeStream = _o.renderToStaticNodeStream;
Zo.renderToReadableStream = sA.renderToReadableStream;
const qe = {
  AUDIO_BUTTON: "audio-button",
  NOTIFICATION_BUTTON: "notification-button",
  CLOSE_CHAT_BUTTON: "close-chat-button",
  SEND_MESSAGE_BUTTON: "send-button",
  VOICE_MESSAGE_BUTTON: "voice-button",
  FILE_ATTACHMENT_BUTTON: "file-attachment-button",
  EMOJI_PICKER_BUTTON: "emoji-button"
}, Cd = (A, i) => /* @__PURE__ */ x.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, viewBox: "0 0 42 42", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M17 9a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8Zm0 0", transform: "rotate(.086) scale(1.77778)" }), /* @__PURE__ */ x.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 10
}, d: "M14.66 14.66 3.34 3.34", transform: "rotate(.086) scale(1.77778)" }));
x.forwardRef(Cd);
const Ed = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTojYjAwMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NCIgZD0iTTE3IDlhOCA4IDAgMCAxLTggOCA4IDggMCAwIDEtOC04IDggOCAwIDAgMSA4LTggOCA4IDAgMCAxIDggOFptMCAwIiB0cmFuc2Zvcm09InJvdGF0ZSguMDg2KSBzY2FsZSgxLjc3Nzc4KSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOiNiMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTE0LjY2IDE0LjY2IDMuMzQgMy4zNCIgdHJhbnNmb3JtPSJyb3RhdGUoLjA4Nikgc2NhbGUoMS43Nzc3OCkiLz48L3N2Zz4=", Dd = (A, i) => /* @__PURE__ */ x.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 1000 1000", ref: i, ...A }, /* @__PURE__ */ x.createElement("rect", { width: "100%", height: "100%", fill: "#fff" }), /* @__PURE__ */ x.createElement("g", null, /* @__PURE__ */ x.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -99 362) scale(3.4003)" }), /* @__PURE__ */ x.createElement("path", { d: "M0 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(180 106 386) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -46 282) scale(3.4003)" }), /* @__PURE__ */ x.createElement("path", { d: "M19 65h4l5 4v1H14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -3 240) scale(3.4003)" }), /* @__PURE__ */ x.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(236 175) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 139 600) scale(3.4003)" }), /* @__PURE__ */ x.createElement("path", { d: "M184 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 219 548) scale(3.4003)" }), /* @__PURE__ */ x.createElement("path", { d: "M175 65h4l5 4v1h-14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 262 505) scale(3.4003)" }), /* @__PURE__ */ x.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(767 175) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 116.7, height: 70, x: -58.4, y: -35, rx: 31.5, ry: 31.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 877) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 60, height: 20, x: -30, y: -10, rx: 3, ry: 3, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 728) scale(3.4003)" }), /* @__PURE__ */ x.createElement("circle", { r: 75, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 473) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 129.4, height: 82.3, x: -64.7, y: -41.1, rx: 37, ry: 37, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#fff",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 108, height: 68.6, x: -54, y: -34.3, rx: 30.9, ry: 30.9, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ x.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(415 464) scale(3.4003)" }), /* @__PURE__ */ x.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(591 464) scale(3.4003)" }), /* @__PURE__ */ x.createElement("rect", { width: 96, height: 53.2, x: -48, y: -26.6, rx: 23.9, ry: 23.9, style: {
  stroke: "#162334",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(503 875) scale(3.4003)" }), /* @__PURE__ */ x.createElement("path", { strokeLinecap: "round", d: "m68 215 7-15M81 222l-7-22M81 222l7-14M101 208H87M114 219l-7-24M113 219l13-22M131 214l-5-17M148 214h-18M69 214H51M100 209l7-15", style: {
  stroke: "#a478fc",
  strokeWidth: 3,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 10,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "none",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" })));
x.forwardRef(Dd);
const LA = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiLz48Zz48cmVjdCB3aWR0aD0iNDUiIGhlaWdodD0iMzAiIHg9Ii0yMi41IiB5PSItMTUiIHJ4PSIxLjUiIHJ5PSIxLjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzM3NTQ3YTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC05OSAzNjIpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTA2IDM4Nikgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSI0IiB4PSItMTIuNSIgeT0iLTIiIHJ4PSIuMiIgcnk9Ii4yIiBzdHlsZT0ic3Ryb2tlOiM0NjY0OGM7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAtNDYgMjgyKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE5IDY1aDRsNSA0djFIMTR2LTFaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjIiIHg9Ii0xMi41IiB5PSItMSIgcng9Ii4xIiByeT0iLjEiIHN0eWxlPSJzdHJva2U6Izk4YjBjYTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6Izk4YjBjYTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC0zIDI0MCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNy41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzYgMTc1KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjQ1IiBoZWlnaHQ9IjMwIiB4PSItMjIuNSIgeT0iLTE1IiByeD0iMS41IiByeT0iMS41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMzNzU0N2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxMzkgNjAwKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE4NCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjQiIHg9Ii0xMi41IiB5PSItMiIgcng9Ii4yIiByeT0iLjIiIHN0eWxlPSJzdHJva2U6IzQ2NjQ4YztzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzQ2NjQ4YztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDIxOSA1NDgpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMTc1IDY1aDRsNSA0djFoLTE0di0xWiIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNDY2NDhjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1IDE1MCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyIiB4PSItMTIuNSIgeT0iLTEiIHJ4PSIuMSIgcnk9Ii4xIiBzdHlsZT0ic3Ryb2tlOiM5OGIwY2E7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyNjIgNTA1KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSI3LjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6I2E0NzhmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2NyAxNzUpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTE2LjciIGhlaWdodD0iNzAiIHg9Ii01OC40IiB5PSItMzUiIHJ4PSIzMS41IiByeT0iMzEuNSIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNzFjOWZjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDg3Nykgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgeD0iLTMwIiB5PSItMTAiIHJ4PSIzIiByeT0iMyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMzc1NDdhO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDcyOCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNzUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzcxYzlmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMiA0NzMpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTI5LjQiIGhlaWdodD0iODIuMyIgeD0iLTY0LjciIHk9Ii00MS4xIiByeD0iMzciIHJ5PSIzNyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDQ2NCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iNjguNiIgeD0iLTU0IiB5PSItMzQuMyIgcng9IjMwLjkiIHJ5PSIzMC45IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMxNjIzMzQ7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDIgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTEgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9IjUzLjIiIHg9Ii00OCIgeT0iLTI2LjYiIHJ4PSIyMy45IiByeT0iMjMuOSIgc3R5bGU9InN0cm9rZTojMTYyMzM0O3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMTYyMzM0O2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAzIDg3NSkgc2NhbGUoMy40MDAzKSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0ibTY4IDIxNSA3LTE1TTgxIDIyMmwtNy0yMk04MSAyMjJsNy0xNE0xMDEgMjA4SDg3TTExNCAyMTlsLTctMjRNMTEzIDIxOWwxMy0yMk0xMzEgMjE0bC01LTE3TTE0OCAyMTRoLTE4TTY5IDIxNEg1MU0xMDAgMjA5bDctMTUiIHN0eWxlPSJzdHJva2U6I2E0NzhmYztzdHJva2Utd2lkdGg6MztzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PC9nPjwvc3ZnPg==", Td = (A, i) => /* @__PURE__ */ x.createElement("svg", { width: 140, height: 140, xmlns: "http://www.w3.org/2000/svg", ref: i, ...A }, /* @__PURE__ */ x.createElement("circle", { cy: 60.044, cx: 70, fill: "#5c5c5c", r: 29 }), /* @__PURE__ */ x.createElement("path", { d: "m16.36 156.186-.01-30.5c-.005-16.844 24.168-30.507 53.991-30.516 29.823-.009 54.004 13.64 54.01 30.484l.008 30.5-108 .032z", fill: "#5c5c5c" }));
x.forwardRef(Td);
const Pd = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN5PSI2MC4wNDQiIGN4PSI3MCIgZmlsbD0iIzVjNWM1YyIgcj0iMjkiLz48cGF0aCBkPSJtMTYuMzYgMTU2LjE4Ni0uMDEtMzAuNWMtLjAwNS0xNi44NDQgMjQuMTY4LTMwLjUwNyA1My45OTEtMzAuNTE2IDI5LjgyMy0uMDA5IDU0LjAwNCAxMy42NCA1NC4wMSAzMC40ODRsLjAwOCAzMC41LTEwOCAuMDMyeiIgZmlsbD0iIzVjNWM1YyIvPjwvc3ZnPg==", kd = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 0 637 637", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "m478 113-13 2-4 1h4l14-2c10-2 35-2 42-1l6 3 3 1c3 0-4-3-8-5-7-1-34-1-44 1m56 6 8 6c7 5 20 17 20 19s7 12 8 12l-3-6-4-6c0-3-15-17-25-24-5-3-8-4-4-1m-198 16-9 1a512 512 0 0 1 9-1m-180 30a412 412 0 0 0-23 4 167 167 0 0 0-32 8 439 439 0 0 1 46-9 304 304 0 0 1 11-2l6-1h-8m369 8 4 3-7-6c-1 0 0 2 3 3m-439 9c-7 3-18 13-18 15l6-5c5-5 9-8 14-10l6-4-8 4m442 12-10 11-7 6 7-6c7-5 14-14 13-16l-3 5M65 205l-1 11c0 9 0 10 4 17 5 10 7 12 22 11 10 0 15 0 38-5l5-1-6 1-16 2-21 2c-13 1-16-1-21-10-3-5-4-6-4-15l1-12c1-4 1-5-1-1m335 1c3 0 3 1 3 3l-2 6c-2 5-35 39-76 80-53 51-120 117-138 137-21 24-22 25-22 27 0 3 6 9 9 9 4 0 14-8 38-27a5073 5073 0 0 1 15-16 1421 1421 0 0 0-17 15l-31 25-6 2-4-3c-3-3-3-4-2-6 3-8 79-85 160-163 57-57 79-80 79-86 0-2-3-4-7-4-2 0-2 0 1 1m165 18c-9 17-25 32-57 53l-10 8 16-11 12-8c15-10 27-22 39-39 5-7 6-8 4-8l-4 5m-221 2a199 199 0 0 0-19 10 183 183 0 0 1 27-12c0-1-1-1-8 2m-34 16c-3 3-2 3 2 0l1-2-3 2m151 3-1 2 2-2c3-3 2-3-1 0m-16 12-11 10a281 281 0 0 0 11-10m-24 18-7 5-7 5-42 31c-10 7-24 19-22 19l7-6 16-12a343 343 0 0 0 35-25 573 573 0 0 0 20-17m-187 0-2 2 4-2 3-2-5 2m-14 6-3 2 4-1 4-3-5 2m-7 3-8 4-18 8 18-7 7-3 3-1c1-2 0-2-2-1m254 24a2672 2672 0 0 1-71 54 601 601 0 0 0 39-29 1352 1352 0 0 1 32-25m-291-8-2 2 4-2 3-2-5 2m-13 5-2 2h3c5-3 4-4-1-2m-19 9-7 3-13 6c-10 5-13 7-14 10-3 4-2 5 1 0 2-3 5-5 14-9l13-6 12-6-6 2m178 36c-17 12-21 16-21 17a390 390 0 0 1 20-17m-206 34 1 4 1 3 1 5 2 8 1 5v-6l-1-8-2-5-1-4-1-2c-1-2-1-2-1 0m222 23-9 7a683 683 0 0 0-56 44 261 261 0 0 0-26 20 1345 1345 0 0 0-46 34c-6 3-7 3-19 3-11 0-12 0-18-3-8-4-10-8-17-20l-5-10 4 10c5 10 12 18 19 22 4 2 6 2 17 2 13 0 14 0 21-3l26-19 42-33a2183 2183 0 0 0 43-34 643 643 0 0 1 24-20", fill: "#fff", fillRule: "evenodd" }), /* @__PURE__ */ x.createElement("path", { d: "M478 114a620 620 0 0 1-39 6l-21 3a5481 5481 0 0 0-19 3 870 870 0 0 1-54 8l-1 1-6 1-12 2-13 2a992 992 0 0 0-76 12 400 400 0 0 1-45 8l-6 1-5 1h-3l-3 1-2 1-26 4-13 2-17 3c-23 5-33 9-43 19-7 8-9 13-9 27 0 8 1 9 4 14 5 9 8 11 21 10l21-2a1133 1133 0 0 1 23-4 659 659 0 0 0 74-14l3-1h3l3-1h3l2-1 2-1h3l2-1h2l24-5 38-7a2100 2100 0 0 1 93-18l3-1 10-1a2082 2082 0 0 1 120-17l2 1c2 0 8 5 8 7l1 2 1 6c0 4 0 6-3 10-2 4-16 16-18 16l-7 5-10 8a1070 1070 0 0 0-11 7 113 113 0 0 1-20 14l-2 2-3 2-2 2h-1a154 154 0 0 1-28 21l-5 4-5 4a573 573 0 0 1-50 37 175 175 0 0 0-24 18l-1 2-2 1-2 1-2 1-1 1-12 10a396 396 0 0 0-32 25l-8 6-6 5-9 7a326 326 0 0 1-25 20l-13 12a5073 5073 0 0 0-17 15c-24 20-34 27-39 27-2 0-8-6-8-9 0-2 1-3 22-27 18-20 85-86 138-137 41-41 74-75 76-80l2-6c0-2 0-3-2-3l-7 1a233 233 0 0 1-26 9l-1 1-1 1h-1l-1 1h-2l-3 2-1 1h-2l-3 2h-1l-5 2-22 10-9 4-4 2-5 2-10 4-2 1-2 1-2 1-13 6a334 334 0 0 1-38 17 75 75 0 0 0-14 6l-5 2-4 1-2 1-3 2-7 3-16 6a247 247 0 0 0-32 14l-1 1h-2l-1 1h-2l-1 1-12 6a103 103 0 0 0-27 15l-2 5-1 1v11l1 5 1 5 1 4c0 3 0 4 2 4v3l1 3 1 2 2 10 1 4 1 5 2 10 2 8 1 4 1 4c3 3 9 25 11 38l1 7v2l1 4v1l1 1v2l1 2 1 3v1l5 10c7 13 9 16 17 20 6 3 7 3 18 3 12 0 13 0 19-3 8-4 11-6 26-18a1345 1345 0 0 1 85-67 683 683 0 0 1 50-39l12-9a513 513 0 0 1 44-33 201 201 0 0 0 22-17 2270 2270 0 0 0 73-54 158 158 0 0 0 58-59c2 0 3-9 4-27l-1-19-1-4-1-6-1-3-4-6-4-6c0-2-6-8-13-14a77 77 0 0 0-28-18c-6-1-34-1-43 1" })), HA = x.forwardRef(kd), Bd = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M765-321q0 117-84 196-83 80-200 80-118 0-200-80t-83-196v-392q0-85 61-144 61-58 146-58 86 0 147 58 61 59 61 144v374q0 54-39 92-39 37-93 37-55 0-93-37-38-38-38-92v-372h110v372q0 9 6 14t15 5q8 0 15-5t7-14v-374q0-39-29-66t-68-27q-40 0-69 27t-29 66v392q0 71 51 119t122 48q71 0 122-48t51-119v-426h111v426Z" })), UA = x.forwardRef(Bd), Id = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M125-165v-113h77v-273q0-93 55-167 56-75 146-100v-19q0-32 22-55 23-23 55-23t55 23q22 23 22 55v19q90 25 146 99 56 73 56 168v273h77v113H125ZM480-32q-38 0-66-27-27-27-27-66h186q0 39-27 66t-66 27Z" })), Rd = x.forwardRef(Id), Md = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M137-190v-113h78v-253q0-41 11-79 11-39 35-71l-9 150h10L17-802l74-74L873-92l-74 74-175-172H137Zm609-149L319-769q20-15 41-25t44-16v-28q0-32 22-54t54-22q32 0 55 22t22 54v28q85 23 137 94t52 160v217ZM481-47q-38 0-65-27t-27-65h184q0 38-27 65t-65 27Z" })), jd = x.forwardRef(Md), Qd = (A, i) => /* @__PURE__ */ x.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", ref: i, ...A }, /* @__PURE__ */ x.createElement("g", { strokeLinecap: "round", strokeWidth: 10 }, /* @__PURE__ */ x.createElement("path", { d: "m19 19 61 61M80 19 19 80" }))), Od = x.forwardRef(Qd), Fd = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M94-136v-255l351-93-351-92v-253l816 346L94-136Z" })), Nd = x.forwardRef(Fd), Ld = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M480-372q-61 0-105-43-43-43-43-105v-240q0-61 43-105 43-43 105-43 61 0 105 43 43 44 43 105v240q0 62-43 105t-105 43ZM425-76v-122q-121-16-197-108t-76-214h109q0 91 64 154t155 63q91 0 155-63t64-154h109q0 122-77 214T534-198v122H425Z" })), Hd = x.forwardRef(Ld), Ud = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "m763-343-80-79q8-20 13-44 5-23 5-54h109q0 49-11 95t-36 82ZM625-482 336-770v-2q3-56 45-96t101-40q62 0 105 43t43 105v249l-1 17q-1 7-4 12ZM427-76v-122q-120-16-196-108-77-92-77-214h109q0 91 64 154t155 63q43 0 80-14 37-15 67-41l78 79q-35 32-78 53t-93 28v122H427Zm362 27L41-796l75-75 748 748-75 74Z" })), zd = x.forwardRef(Ud), Wd = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M625-511q29 0 50-21t20-50q0-29-20-50-21-20-50-20t-50 20-20 50q0 29 20 50 21 21 50 21Zm-290 0q29 0 50-21t20-49q0-30-20-50t-50-21q-29 0-50 20-20 21-20 50 0 30 20 50 21 21 50 21Zm145 268q75 0 137-43t85-115H258q24 72 85 115 62 43 137 43Zm0 198q-90 0-170-34-79-34-138-93T79-310q-34-80-34-170t34-170q34-79 93-138t138-93q80-34 170-34t170 34q79 34 138 93t93 138q34 80 34 170t-34 170q-34 79-93 138T650-79q-80 34-170 34Zm0-435Zm0 322q134 0 228-94t94-228q0-134-94-228t-228-94q-134 0-228 94t-94 228q0 134 94 228t228 94Z" })), zA = x.forwardRef(Wd), _d = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M553-64v-108q107-27 173-113 67-87 67-197 0-109-67-195T553-789v-108q152 26 249 144 97 117 97 271 0 155-97 273T553-64ZM61-335v-290h176l236-237v764L237-335H61Zm492 28v-346q51 23 82 70t31 103-31 103q-31 47-82 70Z" })), Zd = x.forwardRef(_d), Gd = (A, i) => /* @__PURE__ */ x.createElement("svg", { viewBox: "0 -960 960 960", ref: i, ...A }, /* @__PURE__ */ x.createElement("path", { d: "M807-15 700-123q-33 21-71 37-38 15-80 22v-108q20-4 38-12l35-17-153-154v257L234-335H57v-290h144L10-818l74-75L882-90l-75 75Zm37-264-80-79q13-30 19-60 7-31 7-64 0-109-68-195-67-86-173-112v-108q152 26 249 144 98 117 98 271 0 55-14 107-13 51-38 96ZM661-462 549-575v-78q51 23 83 70 31 47 31 103l-1 9-1 9ZM469-655 366-759l103-103v207Z" })), Yd = x.forwardRef(Gd), Xd = "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//", gc = {
  general: {
    primaryColor: "#42b0c5",
    secondaryColor: "#491d8d",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    showHeader: !0,
    showFooter: !0,
    showInputRow: !0,
    actionDisabledIcon: Ed,
    embedded: !1,
    flowStartTrigger: "ON_LOAD"
  },
  tooltip: {
    mode: "CLOSE",
    text: "Talk to me! 😊"
  },
  chatButton: {
    icon: HA
  },
  header: {
    title: /* @__PURE__ */ f.jsx("div", { style: { cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }, onClick: () => window.open("https://github.com/tjtanjin/"), children: "Tan Jin" }),
    showAvatar: !0,
    avatar: LA,
    buttons: [qe.NOTIFICATION_BUTTON, qe.AUDIO_BUTTON, qe.CLOSE_CHAT_BUTTON],
    closeChatIcon: Od
  },
  notification: {
    disabled: !1,
    defaultToggledOn: !0,
    volume: 0.2,
    icon: Rd,
    iconDisabled: jd,
    sound: Xd,
    showCount: !0
  },
  audio: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
    rate: 1,
    volume: 1,
    icon: Zd,
    iconDisabled: Yd
  },
  chatHistory: {
    disabled: !1,
    maxEntries: 30,
    storageKey: "rcb-history",
    viewChatHistoryButtonText: "Load Chat History ⟳",
    chatHistoryLineBreakText: "----- Previous Chat History -----",
    autoLoad: !1
  },
  chatInput: {
    disabled: !1,
    allowNewline: !1,
    enabledPlaceholderText: "Type your message...",
    disabledPlaceholderText: "",
    showCharacterCount: !1,
    characterLimit: -1,
    botDelay: 1e3,
    sendButtonIcon: Nd,
    blockSpam: !0,
    sendOptionOutput: !0,
    sendCheckboxOutput: !0,
    buttons: [qe.VOICE_MESSAGE_BUTTON, qe.SEND_MESSAGE_BUTTON]
  },
  chatWindow: {
    showScrollbar: !1,
    autoJumpToBottom: !1,
    showMessagePrompt: !0,
    messagePromptText: "New Messages ↓",
    messagePromptOffset: 30,
    defaultOpen: !1
  },
  sensitiveInput: {
    maskInTextArea: !0,
    maskInUserBubble: !0,
    asterisksCount: 10,
    hideInUserBubble: !1
  },
  userBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Pd,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  botBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: LA,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  voice: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    timeoutPeriod: 1e4,
    autoSendDisabled: !1,
    autoSendPeriod: 1e3,
    sendAsAudio: !1,
    icon: Hd,
    iconDisabled: zd
  },
  footer: {
    text: /* @__PURE__ */ f.jsxs(
      "div",
      {
        style: { cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3 },
        onClick: () => window.open("https://react-chatbotify.com"),
        children: [
          /* @__PURE__ */ f.jsx("span", { children: "Powered By " }, 0),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              style: {
                borderRadius: "50%",
                width: 14,
                height: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #42b0c5, #491d8d)"
              },
              children: /* @__PURE__ */ f.jsx(HA, { style: { width: "80%", height: "80%", fill: "#fff" } })
            },
            1
          ),
          /* @__PURE__ */ f.jsx("span", { style: { fontWeight: "bold" }, children: " React ChatBotify" }, 2)
        ]
      }
    ),
    buttons: [qe.FILE_ATTACHMENT_BUTTON, qe.EMOJI_PICKER_BUTTON]
  },
  fileAttachment: {
    disabled: !1,
    multiple: !0,
    accept: ".png",
    icon: UA,
    iconDisabled: UA,
    sendFileName: !0,
    showMediaDisplay: !1
  },
  emoji: {
    disabled: !1,
    icon: zA,
    iconDisabled: zA,
    list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
  },
  toast: {
    maxCount: 3,
    forbidOnMax: !1,
    dismissOnClick: !0
  },
  event: {
    rcbPreInjectMessage: !1,
    rcbPostInjectMessage: !1,
    rcbStartStreamMessage: !1,
    rcbChunkStreamMessage: !1,
    rcbStopStreamMessage: !1,
    rcbRemoveMessage: !1,
    rcbLoadChatHistory: !1,
    rcbToggleChatWindow: !1,
    rcbToggleAudio: !1,
    rcbToggleNotifications: !1,
    rcbToggleVoice: !1,
    rcbChangePath: !1,
    rcbShowToast: !1,
    rcbDismissToast: !1,
    rcbUserSubmitText: !1,
    rcbUserUploadFile: !1,
    rcbTextAreaChangeValue: !1,
    rcbPreLoadChatBot: !1,
    rcbPostLoadChatBot: !1
  },
  ariaLabel: {
    chatButton: "open chat",
    audioButton: "toggle audio",
    closeChatButton: "close chat",
    emojiButton: "emoji picker",
    fileAttachmentButton: "upload file",
    notificationButton: "toggle notifications",
    sendButton: "send message",
    voiceButton: "toggle voice",
    inputTextArea: "input text area"
  },
  device: {
    desktopEnabled: !0,
    mobileEnabled: !0,
    applyMobileOptimizations: !0
  }
}, mc = x.createContext({ settings: {}, setSettings: () => null }), Re = () => x.useContext(mc), Vd = ({
  children: A,
  settings: i = gc,
  setSettings: u
}) => /* @__PURE__ */ f.jsx(mc.Provider, { value: { settings: i, setSettings: u }, children: A }), yc = {
  tooltipStyle: {},
  notificationBadgeStyle: {},
  chatWindowStyle: {},
  headerStyle: {},
  bodyStyle: {},
  chatInputContainerStyle: {},
  chatInputAreaStyle: {},
  chatInputAreaFocusedStyle: {},
  chatInputAreaDisabledStyle: {},
  userBubbleStyle: {},
  botBubbleStyle: {},
  botOptionStyle: {},
  botOptionHoveredStyle: {},
  botCheckboxRowStyle: {},
  botCheckboxNextStyle: {},
  botCheckMarkStyle: {},
  botCheckMarkSelectedStyle: {},
  characterLimitStyle: {},
  characterLimitReachedStyle: {},
  chatHistoryLineBreakStyle: {},
  chatMessagePromptStyle: {},
  chatMessagePromptHoveredStyle: {},
  footerStyle: {},
  loadingSpinnerStyle: {},
  mediaDisplayContainerStyle: {},
  chatButtonStyle: {},
  chatHistoryButtonStyle: {},
  chatHistoryButtonHoveredStyle: {},
  sendButtonStyle: {},
  sendButtonHoveredStyle: {},
  sendButtonDisabledStyle: {},
  audioButtonStyle: {},
  audioButtonDisabledStyle: {},
  closeChatButtonStyle: {},
  emojiButtonStyle: {},
  emojiButtonDisabledStyle: {},
  fileAttachmentButtonStyle: {},
  fileAttachmentButtonDisabledStyle: {},
  notificationButtonStyle: {},
  notificationButtonDisabledStyle: {},
  voiceButtonStyle: {},
  voiceButtonDisabledStyle: {},
  chatIconStyle: {},
  audioIconStyle: {},
  audioIconDisabledStyle: {},
  closeChatIconStyle: {},
  emojiIconStyle: {},
  emojiIconDisabledStyle: {},
  fileAttachmentIconStyle: {},
  fileAttachmentIconDisabledStyle: {},
  notificationIconStyle: {},
  notificationIconDisabledStyle: {},
  voiceIconStyle: {},
  voiceIconDisabledStyle: {},
  sendIconStyle: {},
  sendIconDisabledStyle: {},
  sendIconHoveredStyle: {},
  rcbTypingIndicatorContainerStyle: {},
  rcbTypingIndicatorDotStyle: {},
  toastPromptContainerStyle: {},
  toastPromptStyle: {},
  toastPromptHoveredStyle: {}
}, bc = x.createContext({ styles: {}, setStyles: () => null }), Ke = () => x.useContext(bc), Jd = ({
  children: A,
  styles: i = yc,
  setStyles: u
}) => /* @__PURE__ */ f.jsx(bc.Provider, { value: { styles: i, setStyles: u }, children: A }), Kd = ({ buttons: A }) => {
  var i, u, v, a, g;
  const { settings: E } = Re(), { styles: C } = Ke(), m = {
    backgroundImage: `linear-gradient(to right, ${(i = E.general) == null ? void 0 : i.secondaryColor},
			${(u = E.general) == null ? void 0 : u.primaryColor})`,
    ...C.headerStyle
  };
  return /* @__PURE__ */ f.jsxs("div", { style: m, className: "rcb-chat-header-container", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "rcb-chat-header", children: [
      ((v = E.header) == null ? void 0 : v.showAvatar) && /* @__PURE__ */ f.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(a = E.header) == null ? void 0 : a.avatar})` },
          className: "rcb-bot-avatar"
        }
      ),
      (g = E.header) == null ? void 0 : g.title
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "rcb-chat-header", children: A == null ? void 0 : A.map(
      (S, R) => /* @__PURE__ */ f.jsx(x.Fragment, { children: S }, R)
    ) })
  ] });
}, wc = x.createContext({}), lt = () => x.useContext(wc), $d = ({
  children: A,
  botIdRef: i,
  flowRef: u
}) => {
  const v = x.useRef(null), a = x.useRef(""), g = x.useRef(/* @__PURE__ */ new Map()), E = x.useRef(null), C = x.useRef(""), m = x.useRef(!1), S = x.useRef(null), R = x.useRef(null), k = x.useRef(null);
  return /* @__PURE__ */ f.jsx(wc.Provider, { value: {
    botIdRef: i,
    flowRef: u,
    inputRef: v,
    streamMessageMap: g,
    chatBodyRef: E,
    paramsInputRef: C,
    keepVoiceOnRef: m,
    audioContextRef: S,
    audioBufferRef: R,
    gainNodeRef: k,
    prevInputRef: a
  }, children: A });
}, xc = x.createContext({}), vt = () => x.useContext(xc), qd = ({
  children: A,
  settings: i
}) => {
  var u, v, a, g, E, C;
  const [m, S] = x.useState(!1), [R, k] = x.useState(((u = i == null ? void 0 : i.chatWindow) == null ? void 0 : u.defaultOpen) ?? !1), [I, O] = x.useState(((v = i == null ? void 0 : i.audio) == null ? void 0 : v.defaultToggledOn) ?? !1), [N, z] = x.useState(((a = i == null ? void 0 : i.voice) == null ? void 0 : a.defaultToggledOn) ?? !1), [M, B] = x.useState(
    ((g = i == null ? void 0 : i.notification) == null ? void 0 : g.defaultToggledOn) ?? !0
  ), [K, ne] = x.useState(!1), [G, _] = x.useState(!1), [V, W] = x.useState(!0), [re, te] = x.useState(!1), [se, le] = x.useState(!1), [X, fe] = x.useState(!1), [ue, Be] = x.useState(0), [Se, ee] = x.useState(0), [ce, de] = x.useState(!1), [xe, oe] = x.useState(null), [ie, we] = x.useState(((E = window.visualViewport) == null ? void 0 : E.height) ?? window.innerHeight), [ve, Ae] = x.useState(((C = window.visualViewport) == null ? void 0 : C.width) ?? window.innerWidth);
  return /* @__PURE__ */ f.jsx(xc.Provider, { value: {
    isBotTyping: m,
    setIsBotTyping: S,
    isChatWindowOpen: R,
    setIsChatWindowOpen: k,
    audioToggledOn: I,
    setAudioToggledOn: O,
    voiceToggledOn: N,
    setVoiceToggledOn: z,
    notificationsToggledOn: M,
    setNotificationsToggledOn: B,
    isLoadingChatHistory: K,
    setIsLoadingChatHistory: ne,
    isScrolling: G,
    setIsScrolling: _,
    textAreaDisabled: V,
    setTextAreaDisabled: W,
    textAreaSensitiveMode: re,
    setTextAreaSensitiveMode: te,
    hasInteractedPage: se,
    setHasInteractedPage: le,
    hasFlowStarted: X,
    setHasFlowStarted: fe,
    unreadCount: ue,
    setUnreadCount: Be,
    inputLength: Se,
    setInputLength: ee,
    blockAllowsAttachment: ce,
    setBlockAllowsAttachment: de,
    timeoutId: xe,
    setTimeoutId: oe,
    viewportHeight: ie,
    setViewportHeight: we,
    viewportWidth: ve,
    setViewportWidth: Ae
  }, children: A });
}, ef = () => {
  var A, i, u;
  const { settings: v } = Re(), { styles: a } = Ke(), { unreadCount: g, isScrolling: E, setIsScrolling: C } = vt(), { chatBodyRef: m } = lt(), [S, R] = x.useState(!1), k = {
    color: (A = v.general) == null ? void 0 : A.primaryColor,
    borderColor: (i = v.general) == null ? void 0 : i.primaryColor,
    ...a.chatMessagePromptHoveredStyle
  }, I = () => {
    R(!0);
  }, O = () => {
    R(!1);
  };
  function N(M) {
    if (!m.current)
      return;
    const B = m.current.scrollTop, K = m.current.scrollHeight - m.current.clientHeight - B, ne = 20;
    let G = 0;
    function _() {
      if (!m.current)
        return;
      G += ne;
      const V = z(G, B, K, M);
      m.current.scrollTop = V, G < M ? requestAnimationFrame(_) : C(!1);
    }
    _();
  }
  const z = (M, B, K, ne) => (M /= ne / 2, M < 1 ? K / 2 * M * M + B : (M--, -K / 2 * (M * (M - 2) - 1) + B));
  return /* @__PURE__ */ f.jsx("div", { className: `rcb-message-prompt-container ${(() => {
    var M;
    return m.current && ((M = v.chatWindow) != null && M.showMessagePrompt) && E && g > 0 ? "visible" : "hidden";
  })()}`, children: /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: I,
      onMouseLeave: O,
      style: S ? k : a.chatMessagePromptStyle,
      onMouseDown: (M) => {
        M.preventDefault(), N(600);
      },
      className: "rcb-message-prompt-text",
      children: (u = v.chatWindow) == null ? void 0 : u.messagePromptText
    }
  ) });
}, _s = () => {
  try {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return crypto.randomUUID();
    throw new Error("crypto.randomUUID not available");
  } catch {
    if (typeof crypto < "u" && typeof crypto.getRandomValues == "function")
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(A) {
        const i = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
        return (A === "x" ? i : i & 3 | 8).toString(16);
      });
    throw new Error("crypto.getRandomValues is also not available");
  }
}, Ie = {
  // audio
  TOGGLE_AUDIO: "rcb-toggle-audio",
  // notifications:
  TOGGLE_NOTIFICATIONS: "rcb-toggle-notifications",
  // voice
  TOGGLE_VOICE: "rcb-toggle-voice",
  // chat window
  TOGGLE_CHAT_WINDOW: "rcb-toggle-chat-window",
  // messages:
  PRE_INJECT_MESSAGE: "rcb-pre-inject-message",
  POST_INJECT_MESSAGE: "rcb-post-inject-message",
  START_STREAM_MESSAGE: "rcb-start-stream-message",
  CHUNK_STREAM_MESSAGE: "rcb-chunk-stream-message",
  STOP_STREAM_MESSAGE: "rcb-stop-stream-message",
  REMOVE_MESSAGE: "rcb-remove-message",
  // chat history
  LOAD_CHAT_HISTORY: "rcb-load-chat-history",
  // path
  CHANGE_PATH: "rcb-change-path",
  // toast
  SHOW_TOAST: "rcb-show-toast",
  DISMISS_TOAST: "rcb-dismiss-toast",
  // user input submission
  USER_SUBMIT_TEXT: "rcb-user-submit-text",
  USER_UPLOAD_FILE: "rcb-user-upload-file",
  // text area value change
  TEXT_AREA_CHANGE_VALUE: "rcb-text-area-change-value",
  // chatbot loading
  PRE_LOAD_CHATBOT: "rcb-pre-load-chatbot",
  POST_LOAD_CHATBOT: "rcb-post-load-chatbot"
}, tf = {
  [Ie.TOGGLE_AUDIO]: !0,
  [Ie.TOGGLE_VOICE]: !0,
  [Ie.TOGGLE_NOTIFICATIONS]: !0,
  [Ie.TOGGLE_CHAT_WINDOW]: !0,
  [Ie.PRE_INJECT_MESSAGE]: !0,
  [Ie.POST_INJECT_MESSAGE]: !1,
  [Ie.PRE_LOAD_CHATBOT]: !0,
  [Ie.POST_LOAD_CHATBOT]: !1,
  [Ie.START_STREAM_MESSAGE]: !0,
  [Ie.CHUNK_STREAM_MESSAGE]: !0,
  [Ie.STOP_STREAM_MESSAGE]: !0,
  [Ie.LOAD_CHAT_HISTORY]: !0,
  [Ie.CHANGE_PATH]: !0,
  [Ie.SHOW_TOAST]: !0,
  [Ie.DISMISS_TOAST]: !0,
  [Ie.USER_SUBMIT_TEXT]: !0,
  [Ie.USER_UPLOAD_FILE]: !0,
  [Ie.TEXT_AREA_CHANGE_VALUE]: !0
}, Zs = (A, i, u) => {
  const v = new CustomEvent(A, {
    detail: i,
    cancelable: tf[A]
  });
  return v.data = u, window.dispatchEvent(v), v;
}, Sc = x.createContext({ paths: [], setPaths: () => null }), gA = () => x.useContext(Sc), nf = ({ children: A }) => {
  const [i, u] = x.useState([]);
  return /* @__PURE__ */ f.jsx(Sc.Provider, { value: { paths: i, setPaths: u }, children: A });
}, Gi = () => {
  const { settings: A } = Re(), { paths: i, setPaths: u } = gA(), {
    setIsBotTyping: v,
    setTextAreaDisabled: a,
    setTextAreaSensitiveMode: g,
    blockAllowsAttachment: E,
    setBlockAllowsAttachment: C
  } = vt(), { botIdRef: m } = lt(), S = x.useCallback(() => i.length > 0 ? i[i.length - 1] : null, [i]), R = x.useCallback(() => i.length > 1 ? i[i.length - 2] : null, [i]), k = x.useCallback((I) => {
    var O, N;
    if ((O = A.event) != null && O.rcbChangePath) {
      const z = S(), M = R(), B = { botId: m.current, currPath: z, prevPath: M };
      if (event = Zs(Ie.CHANGE_PATH, B, { currPath: z, prevPath: M, nextPath: I }), event.defaultPrevented)
        return !1;
    }
    return v(!0), (N = A.chatInput) != null && N.blockSpam && a(!0), g(!1), u((z) => [...z, I]), !0;
  }, [i, u, A]);
  return {
    getCurrPath: S,
    getPrevPath: R,
    goToPath: k,
    blockAllowsAttachment: E,
    setBlockAllowsAttachment: C,
    paths: i,
    replacePaths: (I) => {
      u(I);
    }
  };
}, Cc = () => {
  const {
    getCurrPath: A,
    getPrevPath: i,
    goToPath: u,
    paths: v,
    replacePaths: a
  } = Gi();
  return {
    getCurrPath: A,
    getPrevPath: i,
    goToPath: u,
    paths: v,
    replacePaths: a
  };
}, Vn = () => {
  const { getCurrPath: A, getPrevPath: i, paths: u } = Cc(), { botIdRef: v } = lt();
  return { callRcbEvent: x.useCallback((a, g) => {
    const E = { botId: v.current, currPath: A(), prevPath: i() };
    return Zs(a, E, g);
  }, [u]) };
}, Ec = x.createContext({ toasts: [], setToasts: () => null }), Dc = () => x.useContext(Ec), rf = ({ children: A }) => {
  const [i, u] = x.useState([]);
  return /* @__PURE__ */ f.jsx(Ec.Provider, { value: { toasts: i, setToasts: u }, children: A });
}, Ga = () => {
  const { settings: A } = Re(), { toasts: i, setToasts: u } = Dc(), { callRcbEvent: v } = Vn(), a = x.useRef(i);
  x.useEffect(() => {
    a.current = i;
  }, [i]);
  const g = x.useCallback((C, m) => {
    var S, R, k, I;
    let O = null;
    if (a.current.length >= (((S = A.toast) == null ? void 0 : S.maxCount) ?? 3)) {
      if ((R = A.toast) != null && R.forbidOnMax)
        return null;
      O = _s();
      let z = { id: O, content: C, timeout: m };
      if ((k = A.event) != null && k.rcbShowToast) {
        const M = v(Ie.SHOW_TOAST, { toast: z });
        if (M.defaultPrevented)
          return null;
        z = M.data.toast;
      }
      return u((M) => [...M.slice(1), z]), O;
    }
    O = _s();
    let N = { id: O, content: C, timeout: m };
    if ((I = A.event) != null && I.rcbShowToast) {
      const z = v(Ie.SHOW_TOAST, { toast: N });
      if (z.defaultPrevented)
        return null;
      N = z.data.toast;
    }
    return u((z) => [...z, N]), O;
  }, [A, v, u]), E = x.useCallback((C) => {
    var m;
    const S = i.find((R) => R.id === C);
    return !S || (m = A.event) != null && m.rcbDismissToast && v(Ie.DISMISS_TOAST, { toast: S }).defaultPrevented ? null : (u((R) => R.filter((k) => k.id !== C)), C);
  }, [v, u]);
  return {
    showToast: g,
    dismissToast: E,
    toasts: i,
    replaceToasts: (C) => {
      u(C);
    }
  };
}, of = ({
  id: A,
  content: i,
  timeout: u
}) => {
  var v, a;
  const { settings: g } = Re(), { styles: E } = Ke(), { dismissToast: C } = Ga(), [m, S] = x.useState(!1), R = {
    color: (v = g.general) == null ? void 0 : v.primaryColor,
    borderColor: (a = g.general) == null ? void 0 : a.primaryColor,
    ...E.toastPromptHoveredStyle
  };
  return x.useEffect(() => {
    if (u) {
      const k = setTimeout(() => {
        C(A);
      }, u);
      return () => clearTimeout(k);
    }
  }, [A, C, u]), typeof i == "string" ? /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: () => {
        S(!0);
      },
      onMouseLeave: () => {
        S(!1);
      },
      style: m ? R : E.toastPromptStyle,
      onMouseDown: (k) => {
        var I;
        (I = g.toast) != null && I.dismissOnClick && (k.preventDefault(), C(A));
      },
      className: "rcb-toast-prompt",
      children: i
    }
  ) : /* @__PURE__ */ f.jsx(f.Fragment, { children: i });
}, Jn = () => {
  const { settings: A } = Re(), {
    isChatWindowOpen: i,
    setIsChatWindowOpen: u,
    viewportHeight: v,
    setViewportHeight: a,
    viewportWidth: g,
    setViewportWidth: E,
    setUnreadCount: C
  } = vt(), { callRcbEvent: m } = Vn(), [S, R] = x.useState(0), k = x.useCallback(() => {
    var O;
    (O = A.event) != null && O.rcbToggleChatWindow && m(
      Ie.TOGGLE_CHAT_WINDOW,
      { currState: i, newState: !i }
    ).defaultPrevented || u((N) => (N || C(0), !N));
  }, []), I = x.useCallback((O) => {
    i !== O && k();
  }, [i]);
  return {
    isChatWindowOpen: i,
    setIsChatWindowOpen: u,
    toggleChatWindow: k,
    openChat: I,
    chatScrollHeight: S,
    setChatScrollHeight: R,
    viewportHeight: v,
    setViewportHeight: a,
    viewportWidth: g,
    setViewportWidth: E
  };
}, Tc = x.createContext({ messages: [], setMessages: () => null }), mA = () => x.useContext(Tc), af = ({ children: A }) => {
  const [i, u] = x.useState([]);
  return /* @__PURE__ */ f.jsx(Tc.Provider, { value: { messages: i, setMessages: u }, children: A });
}, sf = ({
  setChatScrollHeight: A
}) => {
  var i, u, v, a, g, E, C, m, S, R, k, I;
  const { settings: O } = Re(), { styles: N } = Ke(), { messages: z } = mA(), { toasts: M } = Dc(), { isChatWindowOpen: B } = Jn(), {
    isBotTyping: K,
    isScrolling: ne,
    setIsScrolling: G,
    setUnreadCount: _
  } = vt(), { chatBodyRef: V } = lt(), W = {
    ...N == null ? void 0 : N.bodyStyle,
    scrollbarWidth: (i = O.chatWindow) != null && i.showScrollbar ? "auto" : "none"
  }, re = {
    backgroundColor: (u = O.general) == null ? void 0 : u.primaryColor,
    color: "#fff",
    maxWidth: (v = O.userBubble) != null && v.showAvatar ? "65%" : "70%",
    ...N.userBubbleStyle
  }, te = (a = O.userBubble) != null && a.animate ? "rcb-user-message-entry" : "", se = {
    backgroundColor: (g = O.general) == null ? void 0 : g.secondaryColor,
    color: "#fff",
    maxWidth: (E = O.botBubble) != null && E.showAvatar ? "65%" : "70%",
    ...N.botBubbleStyle
  }, le = (C = O.botBubble) != null && C.animate ? "rcb-bot-message-entry" : "", X = {
    bottom: 20,
    width: 300,
    minWidth: (((m = N.chatWindowStyle) == null ? void 0 : m.width) ?? 375) / 2,
    maxWidth: (((S = N.chatWindowStyle) == null ? void 0 : S.width) ?? 375) - 50,
    ...N.toastPromptContainerStyle
  };
  x.useEffect(() => {
    V.current && (A(V.current.scrollHeight), ne || (V.current.scrollTop = V.current.scrollHeight));
  }, [(R = V.current) == null ? void 0 : R.scrollHeight]);
  const fe = () => {
    var ee;
    if (!V.current)
      return;
    A(V.current.scrollHeight);
    const { scrollTop: ce, clientHeight: de, scrollHeight: xe } = V.current, oe = ce + de < xe - (((ee = O.chatWindow) == null ? void 0 : ee.messagePromptOffset) ?? 30);
    G(oe), oe || (ce + de >= xe - 1 && (V.current.scrollTop = xe - de - 1), B && _(0));
  }, ue = (ee) => ee === 0 ? !0 : z[ee].sender !== z[ee - 1].sender, Be = (ee, ce) => {
    var de, xe, oe, ie;
    const we = ue(ce), ve = ((de = O.userBubble) == null ? void 0 : de.showAvatar) && we;
    let Ae = "rcb-user-message";
    return !we && (xe = O.userBubble) != null && xe.showAvatar && (Ae += " rcb-user-message-offset"), /* @__PURE__ */ f.jsxs("div", { className: "rcb-user-message-container", children: [
      typeof ee.content == "string" ? (oe = O == null ? void 0 : O.userBubble) != null && oe.dangerouslySetInnerHtml ? /* @__PURE__ */ f.jsx(
        "div",
        {
          style: { ...re, display: "inline" },
          className: `${Ae} ${te}`,
          dangerouslySetInnerHTML: { __html: ee.content }
        }
      ) : /* @__PURE__ */ f.jsx(
        "div",
        {
          style: re,
          className: `${Ae} ${te}`,
          children: ee.content
        }
      ) : ee.content,
      ve && /* @__PURE__ */ f.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(ie = O.userBubble) == null ? void 0 : ie.avatar})` },
          className: "rcb-message-user-avatar"
        }
      )
    ] });
  }, Se = (ee, ce) => {
    var de, xe, oe, ie;
    const we = ue(ce), ve = ((de = O.botBubble) == null ? void 0 : de.showAvatar) && we;
    let Ae = "rcb-bot-message";
    return !we && (xe = O.botBubble) != null && xe.showAvatar && (Ae += " rcb-bot-message-offset"), /* @__PURE__ */ f.jsxs("div", { className: "rcb-bot-message-container", children: [
      ve && /* @__PURE__ */ f.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(oe = O.botBubble) == null ? void 0 : oe.avatar})` },
          className: "rcb-message-bot-avatar"
        }
      ),
      typeof ee.content == "string" ? (ie = O == null ? void 0 : O.botBubble) != null && ie.dangerouslySetInnerHtml ? /* @__PURE__ */ f.jsx(
        "div",
        {
          style: { ...se, display: "inline" },
          className: `${Ae} ${le}`,
          dangerouslySetInnerHTML: { __html: ee.content }
        }
      ) : /* @__PURE__ */ f.jsx(
        "div",
        {
          style: se,
          className: `${Ae} ${le}`,
          children: ee.content
        }
      ) : ee.content
    ] });
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      style: W,
      className: "rcb-chat-body-container",
      ref: V,
      onScroll: fe,
      children: [
        z.map((ee, ce) => ee.sender === "system" ? /* @__PURE__ */ f.jsx("div", { children: ee.content }, ce) : /* @__PURE__ */ f.jsx("div", { children: ee.sender === "user" ? Be(ee, ce) : Se(ee, ce) }, ce)),
        K && /* @__PURE__ */ f.jsxs("div", { className: "rcb-bot-message-container", children: [
          ((k = O.botBubble) == null ? void 0 : k.showAvatar) && /* @__PURE__ */ f.jsx(
            "div",
            {
              style: { backgroundImage: `url(${(I = O.botBubble) == null ? void 0 : I.avatar})` },
              className: "rcb-message-bot-avatar"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              onMouseDown: (ee) => {
                ee.preventDefault();
              },
              className: `rcb-bot-message ${le}`,
              children: /* @__PURE__ */ f.jsxs("div", { className: "rcb-typing-indicator", style: { ...N == null ? void 0 : N.rcbTypingIndicatorContainerStyle }, children: [
                /* @__PURE__ */ f.jsx("span", { className: "rcb-dot", style: { ...N == null ? void 0 : N.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ f.jsx("span", { className: "rcb-dot", style: { ...N == null ? void 0 : N.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ f.jsx("span", { className: "rcb-dot", style: { ...N == null ? void 0 : N.rcbTypingIndicatorDotStyle } })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx(ef, {}),
        /* @__PURE__ */ f.jsx("div", { className: "rcb-toast-prompt-container", style: X, children: M.map((ee) => /* @__PURE__ */ f.jsx(
          of,
          {
            id: ee.id,
            content: ee.content,
            timeout: ee.timeout
          },
          ee.id
        )) })
      ]
    }
  );
}, lf = ({
  checkboxes: A,
  checkedItems: i,
  path: u
}) => {
  var v, a, g, E, C, m, S, R, k, I, O;
  const { settings: N } = Re(), { styles: z } = Ke(), { paths: M } = gA(), { handleSubmitText: B } = Xa(), [K, ne] = x.useState(/* @__PURE__ */ new Set()), [G, _] = x.useState(!1), V = {
    cursor: G ? `url(${(v = N.general) == null ? void 0 : v.actionDisabledIcon}), auto` : "pointer",
    color: (a = N.general) == null ? void 0 : a.primaryColor,
    borderColor: (g = N.general) == null ? void 0 : g.primaryColor,
    ...z.botCheckboxRowStyle
  }, W = {
    cursor: G || K.size < A.min ? `url(${(E = N.general) == null ? void 0 : E.actionDisabledIcon}), auto` : "pointer",
    color: (C = N.general) == null ? void 0 : C.primaryColor,
    borderColor: (m = N.general) == null ? void 0 : m.primaryColor,
    ...z.botCheckboxNextStyle
  }, re = {
    cursor: G ? `url(${(S = N.general) == null ? void 0 : S.actionDisabledIcon}), auto` : "pointer",
    color: "transparent",
    ...z.botCheckMarkStyle
  }, te = {
    cursor: G ? `url(${(R = N.general) == null ? void 0 : R.actionDisabledIcon}), auto` : "pointer",
    color: "#fff",
    borderColor: (k = N.general) == null ? void 0 : k.primaryColor,
    backgroundColor: (I = N.general) == null ? void 0 : I.primaryColor,
    ...z.botCheckMarkSelectedStyle
  };
  x.useEffect(() => {
    M.length > 0 && M[M.length - 1] !== u && _(!A.reusable);
  }, [M]);
  const se = (le) => {
    G || ne((X) => {
      const fe = new Set(X);
      if (fe.has(le))
        i.delete(le), fe.delete(le);
      else {
        if (K.size == A.max)
          return X;
        i.add(le), fe.add(le);
      }
      return fe;
    });
  };
  return /* @__PURE__ */ f.jsxs("div", { className: `rcb-checkbox-container ${(O = N.botBubble) != null && O.showAvatar ? "rcb-checkbox-offset" : ""}`, children: [
    A.items.map((le) => /* @__PURE__ */ f.jsx(
      "div",
      {
        onMouseDown: (X) => {
          X.preventDefault(), se(le);
        },
        style: V,
        className: "rcb-checkbox-row-container",
        children: /* @__PURE__ */ f.jsxs("div", { className: "rcb-checkbox-row", children: [
          /* @__PURE__ */ f.jsx(
            "div",
            {
              style: K.has(le) ? te : re,
              className: "rcb-checkbox-mark"
            }
          ),
          /* @__PURE__ */ f.jsx("div", { className: "rcb-checkbox-label", children: le })
        ] })
      },
      le
    )),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        style: W,
        className: "rcb-checkbox-next-button",
        onMouseDown: (le) => {
          var X;
          if (le.preventDefault(), G || K.size < A.min)
            return;
          const fe = Array.from(i).join(", ");
          _(!A.reusable);
          let ue;
          A.sendOutput != null ? ue = A.sendOutput : ue = ((X = N.chatInput) == null ? void 0 : X.sendCheckboxOutput) ?? !0, B(fe, ue);
        }
      }
    )
  ] });
}, Af = async (A, i, u, v) => {
  const a = i.checkboxes;
  if (!a)
    return;
  let g;
  if (typeof a == "function" ? (g = a(v), g instanceof Promise && (g = await g)) : g = a, Array.isArray(g) && (g = { items: g }), !("items" in g) || g.items.length == 0)
    return;
  g.min == null && (g.min = 1), g.max == null && (g.max = g.items.length), g.min > g.max && (g.min = g.max), g.reusable == null && (g.reusable = !1);
  const E = /* @__PURE__ */ f.jsx(lf, { checkboxes: g, checkedItems: /* @__PURE__ */ new Set(), path: u });
  await v.injectMessage(E);
}, cf = async (A, i) => {
  const u = A.function;
  if (!u)
    return;
  const v = u(i);
  return v instanceof Promise ? await v : v;
}, uf = async (A, i) => {
  const u = A.message;
  if (!u)
    return;
  if (typeof u == "string") {
    u.trim() !== "" && await i.injectMessage(u);
    return;
  }
  let v = u(i);
  v instanceof Promise && (v = await v), v && v.trim() !== "" && await i.injectMessage(v);
}, df = ({
  options: A,
  path: i
}) => {
  var u, v, a, g, E, C;
  const { settings: m } = Re(), { styles: S } = Ke(), { paths: R } = gA(), { handleSubmitText: k } = Xa(), [I, O] = x.useState([]), [N, z] = x.useState(!1), M = {
    cursor: N ? `url(${(u = m.general) == null ? void 0 : u.actionDisabledIcon}), auto` : "pointer",
    color: (v = m.general) == null ? void 0 : v.primaryColor,
    borderColor: (a = m.general) == null ? void 0 : a.primaryColor,
    backgroundColor: "#fff",
    ...S.botOptionStyle
  }, B = {
    color: "#fff",
    borderColor: (g = m.general) == null ? void 0 : g.primaryColor,
    backgroundColor: (E = m.general) == null ? void 0 : E.primaryColor,
    ...S.botOptionHoveredStyle
  };
  x.useEffect(() => {
    R.length > 0 && R[R.length - 1] !== i && z(!A.reusable);
  }, [R]);
  const K = (G) => {
    O((_) => {
      const V = [..._];
      return V[G] = !0, V;
    });
  }, ne = (G) => {
    O((_) => {
      const V = [..._];
      return V[G] = !1, V;
    });
  };
  return /* @__PURE__ */ f.jsx("div", { className: `rcb-options-container ${(C = m.botBubble) != null && C.showAvatar ? "rcb-options-offset" : ""}`, children: A.items.map((G, _) => {
    const V = I[_] && !N;
    return /* @__PURE__ */ f.jsx(
      "div",
      {
        className: "rcb-options",
        style: V ? B : M,
        onMouseEnter: () => K(_),
        onMouseLeave: () => ne(_),
        onMouseDown: (W) => {
          var re;
          if (W.preventDefault(), N)
            return;
          z(!A.reusable);
          let te;
          A.sendOutput != null ? te = A.sendOutput : te = ((re = m.chatInput) == null ? void 0 : re.sendOptionOutput) ?? !0, k(G, te);
        },
        children: G
      },
      G
    );
  }) });
}, ff = async (A, i, u, v) => {
  const a = i.options;
  if (!a)
    return;
  let g;
  if (typeof a == "function" ? (g = a(v), g instanceof Promise && (g = await g)) : g = a, Array.isArray(g) && (g = { items: g }), !("items" in g) || g.items.length == 0)
    return;
  g.reusable == null && (g.reusable = !1);
  const E = /* @__PURE__ */ f.jsx(df, { options: g, path: u });
  await v.injectMessage(E);
}, pf = async (A, i, u) => {
  const v = A.path;
  if (!v)
    return !1;
  if (typeof v == "string")
    return u(v);
  let a = v(i);
  return a instanceof Promise && (a = await a), a ? u(a) : !1;
}, hf = async (A, i) => {
  const u = A.component;
  if (u) {
    if (typeof u == "function") {
      let v = u(i);
      if (v instanceof Promise && (v = await v), !v)
        return;
      await i.injectMessage(v);
      return;
    }
    await i.injectMessage(u);
  }
}, vf = async (A, i, u, v, a) => {
  const g = A[i];
  if (!g)
    throw new Error("block is not valid.");
  const E = g.transition;
  let C;
  if (typeof E == "function" ? (C = E(u), C instanceof Promise && (C = await C)) : C = E, typeof C == "number" && (C = { duration: C }), !C || C instanceof Promise || C.duration == null || typeof C.duration != "number")
    return;
  C.interruptable == null && (C.interruptable = !1);
  const m = setTimeout(async () => {
    await kc(A, i, u, v);
  }, C.duration);
  C.interruptable && a(m);
}, gf = async (A, i, u) => {
  const v = A.chatDisabled;
  if (v == null)
    return;
  let a;
  typeof v == "function" ? (a = v(u), a instanceof Promise && (a = await a)) : a = v, i(a);
}, Pc = async (A, i, u) => {
  const v = A.isSensitive;
  if (!v) {
    i(!1);
    return;
  }
  let a;
  typeof v == "function" ? (a = v(u), a instanceof Promise && (a = await a)) : a = v, i(a);
}, mf = async (A, i, u, v, a, g, E) => {
  const C = A[i];
  if (!C)
    throw new Error("Block is not valid.");
  for (const m of Object.keys(C))
    switch (m) {
      case "message":
        await uf(C, u);
        break;
      case "options":
        await ff(A, C, i, u);
        break;
      case "checkboxes":
        await Af(A, C, i, u);
        break;
      case "component":
        await hf(C, u);
        break;
      case "chatDisabled":
        await gf(C, v, u);
        break;
      case "isSensitive":
        await Pc(C, a, u);
        break;
      case "transition":
        await vf(A, i, u, g, E);
    }
}, kc = async (A, i, u, v) => {
  const a = A[i];
  if (!a)
    throw new Error("Block is not valid.");
  const g = Object.keys(a);
  for (const E of g)
    E === "function" && await cf(a, u);
  return g.includes("path") ? await pf(a, u, v) : !1;
}, yf = (A) => {
  const i = [];
  let u = "", v = !1;
  for (let a = 0; a < A.length; a++) {
    const g = A[a];
    g === "<" ? v ? (i.push(u), u = g) : (v = !0, u = g) : g === ">" ? (u += g, i.push(u), u = "", v = !1) : v ? u += g : i.push(g);
  }
  return u !== "" && i.push(u), i;
}, bf = (A) => typeof window.DOMParser < "u" ? new DOMParser().parseFromString(A, "text/html").body.textContent || "" : A.replace(/<\/?[^>]+(>|$)/g, ""), wf = (A, i, u, v, a) => {
  const g = new SpeechSynthesisUtterance();
  g.text = A, g.lang = i, g.rate = v, g.volume = a;
  let E = !1;
  for (const C of u)
    if (window.speechSynthesis.getVoices().find((m) => {
      if (m.name === C) {
        g.voice = m, window.speechSynthesis.speak(g), E = !0;
        return;
      }
    }), E)
      break;
  E || window.speechSynthesis.speak(g);
}, xf = (A, i, u, v, a) => {
  var g, E, C, m, S, R;
  if ((g = A.audio) != null && g.disabled || v.sender === "user" || typeof v.content != "string" || !u && !((E = A.general) != null && E.embedded) || !i || v.content.trim() === "")
    return;
  let k = v.content;
  a && (k = bf(v.content)), wf(
    k,
    (C = A.audio) == null ? void 0 : C.language,
    (m = A.audio) == null ? void 0 : m.voiceNames,
    (S = A.audio) == null ? void 0 : S.rate,
    (R = A.audio) == null ? void 0 : R.volume
  );
}, Sf = () => {
  var A;
  const { settings: i } = Re(), { styles: u } = Ke();
  return /* @__PURE__ */ f.jsx("div", { className: "rcb-line-break-container", children: /* @__PURE__ */ f.jsx(
    "div",
    {
      style: u.chatHistoryLineBreakStyle,
      className: "rcb-line-break-text",
      "data-testid": "chat-history-line-break-text",
      children: (A = i.chatHistory) == null ? void 0 : A.chatHistoryLineBreakText
    }
  ) });
}, Cf = () => {
  var A;
  const { settings: i } = Re(), { styles: u } = Ke(), v = {
    borderTop: `4px solid ${(A = i.general) == null ? void 0 : A.primaryColor}`,
    ...u.loadingSpinnerStyle
  };
  return /* @__PURE__ */ f.jsx("div", { className: "rcb-spinner-container", children: /* @__PURE__ */ f.jsx("div", { style: v, className: "rcb-spinner" }) });
}, Wo = (A, i) => ({
  id: _s(),
  content: A,
  sender: i,
  type: typeof A == "string" ? "string" : "object",
  timestamp: (/* @__PURE__ */ new Date()).toUTCString()
});
let Bc = !1, lA = "rcb-history", Os = 30, Ic = !1, Gs = [];
const Fs = async (A) => {
  if (Ic)
    return;
  const i = [], u = Bc ? Gs.length : 0;
  for (let a = A.length - 1; a >= u; a--) {
    const g = A[a];
    if (g.sender === "system" || (g.content !== "" && i.unshift(g), i.length === Os))
      break;
  }
  let v = i.map(Tf);
  if (v.length < Os) {
    const a = Os - v.length;
    v = [...Gs.slice(-a), ...v];
  }
  Mc(v);
}, Ef = (A) => {
  if (A != null)
    try {
      return JSON.parse(A);
    } catch {
      return [];
    }
  return [];
}, Rc = () => Gs, Mc = (A) => {
  localStorage.setItem(lA, JSON.stringify(A));
}, Df = (A) => {
  var i, u, v;
  lA = (i = A.chatHistory) == null ? void 0 : i.storageKey, Os = (u = A.chatHistory) == null ? void 0 : u.maxEntries, Ic = (v = A.chatHistory) == null ? void 0 : v.disabled, Gs = Ef(localStorage.getItem(lA));
}, Tf = (A) => x.isValidElement(A.content) ? structuredClone({
  id: A.id,
  content: Zo.renderToString(A.content),
  type: A.type,
  sender: A.sender,
  timestamp: A.timestamp
}) : A, Pf = (A, i, u, v, a, g, E) => {
  var C;
  if (Bc = !0, u != null)
    try {
      v((S) => {
        const R = Wo(/* @__PURE__ */ f.jsx(Cf, {}), "system");
        return S.shift(), [R, ...S];
      });
      const m = u.map((S) => {
        if (S.type === "object") {
          const R = jc(S.content, A, i);
          return { ...S, content: R };
        }
        return S;
      });
      setTimeout(() => {
        v((S) => {
          var R;
          S.shift();
          let k;
          return (R = A.chatHistory) != null && R.autoLoad ? k = Wo(/* @__PURE__ */ f.jsx(f.Fragment, {}), "system") : k = Wo(/* @__PURE__ */ f.jsx(Sf, {}), "system"), [...m, k, ...S];
        });
      }, 500), setTimeout(() => {
        if (!a.current)
          return;
        const { scrollHeight: S } = a.current, R = S - g;
        a.current.scrollTop = a.current.scrollTop + R, E(!1);
      }, 510);
    } catch {
      localStorage.removeItem((C = A.chatHistory) == null ? void 0 : C.storageKey);
    }
}, jc = (A, i, u) => {
  const v = new DOMParser().parseFromString(A, "text/html");
  return Array.from(v.body.childNodes).map((a, g) => {
    var E;
    if (a.nodeType === Node.TEXT_NODE)
      return a.textContent;
    {
      const C = a.tagName.toLowerCase();
      let m = Array.from(a.attributes).reduce((R, k) => {
        const I = k.name.toLowerCase();
        if (I === "style") {
          const O = k.value.split(";").filter((z) => z.trim() !== ""), N = {};
          O.forEach((z) => {
            const [M, B] = z.split(":").map((ne) => ne.trim()), K = M.replace(/-([a-z])/g, (ne, G) => G.toUpperCase());
            N[K] = B;
          }), R[I] = N;
        } else
          (C === "audio" || C === "video") && I === "controls" && k.value === "" ? R[I] = "true" : R[I] = k.value;
        return R;
      }, {});
      const S = a.classList;
      if ((E = i.botBubble) != null && E.showAvatar && (m = kf(S, m)), m = Bf(S, m, i, u), m = If(S, m, i, u), m = Rf(S, m, i, u), m = Mf(S, m, i, u), [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "source",
        "track",
        "wbr"
      ].includes(C))
        return x.createElement(C, { key: g, ...m });
      {
        const R = jc(a.innerHTML, i, u);
        return x.createElement(C, { key: g, ...m }, ...R);
      }
    }
  });
}, kf = (A, i) => ((A.contains("rcb-options-container") || A.contains("rcb-checkbox-container")) && (Object.prototype.hasOwnProperty.call(i, "class") ? i.class = `${A.toString()} rcb-options-offset` : i.class = "rcb-options-offset"), i), Bf = (A, i, u, v) => {
  var a, g, E, C, m;
  return A.contains("rcb-options") && (i.style = {
    ...i.style,
    color: ((a = v.botOptionStyle) == null ? void 0 : a.color) ?? ((g = u.general) == null ? void 0 : g.primaryColor),
    borderColor: ((E = v.botOptionStyle) == null ? void 0 : E.color) ?? ((C = u.general) == null ? void 0 : C.primaryColor),
    cursor: `url(${(m = u.general) == null ? void 0 : m.actionDisabledIcon}), auto`,
    ...v.botOptionStyle
  }), i;
}, If = (A, i, u, v) => {
  var a, g, E, C, m;
  return A.contains("rcb-checkbox-row-container") && (i.style = {
    ...i.style,
    color: ((a = v.botCheckboxRowStyle) == null ? void 0 : a.color) ?? ((g = u.general) == null ? void 0 : g.primaryColor),
    borderColor: ((E = v.botCheckboxRowStyle) == null ? void 0 : E.color) ?? ((C = u.general) == null ? void 0 : C.primaryColor),
    cursor: `url(${(m = u.general) == null ? void 0 : m.actionDisabledIcon}), auto`,
    ...v.botCheckboxRowStyle
  }), i;
}, Rf = (A, i, u, v) => {
  var a, g, E, C, m;
  return A.contains("rcb-checkbox-next-button") && (i.style = {
    ...i.style,
    color: ((a = v.botCheckboxNextStyle) == null ? void 0 : a.color) ?? ((g = u.general) == null ? void 0 : g.primaryColor),
    borderColor: ((E = v.botCheckboxNextStyle) == null ? void 0 : E.color) ?? ((C = u.general) == null ? void 0 : C.primaryColor),
    cursor: `url(${(m = u.general) == null ? void 0 : m.actionDisabledIcon}), auto`,
    ...v.botCheckboxNextStyle
  }), i;
}, Mf = (A, i, u, v) => {
  var a, g;
  return (A.contains("rcb-media-display-image-container") || A.contains("rcb-media-display-video-container")) && (i.style = {
    ...i.style,
    backgroundColor: (a = u.general) == null ? void 0 : a.primaryColor,
    maxWidth: (g = u.userBubble) != null && g.showAvatar ? "65%" : "70%",
    ...v.mediaDisplayContainerStyle
  }), i;
}, Qc = (A) => {
  if (!A)
    return !1;
  const i = A.getBoundingClientRect(), u = window.innerHeight ?? document.documentElement.clientHeight, v = window.innerWidth ?? document.documentElement.clientWidth;
  return i.top >= 0 && i.left >= 0 && i.bottom <= u && i.right <= v;
}, yA = () => {
  const { settings: A } = Re(), {
    notificationsToggledOn: i,
    setNotificationsToggledOn: u,
    hasInteractedPage: v,
    unreadCount: a,
    setUnreadCount: g
  } = vt(), { audioBufferRef: E, audioContextRef: C, gainNodeRef: m } = lt(), { callRcbEvent: S } = Vn(), R = x.useCallback(async () => {
    var O, N;
    const z = (O = A.notification) == null ? void 0 : O.sound;
    C.current = new AudioContext();
    const M = C.current.createGain();
    M.gain.value = ((N = A.notification) == null ? void 0 : N.volume) ?? 0.2, m.current = M;
    let B;
    if (z != null && z.startsWith("data:audio")) {
      const K = atob(z.split(",")[1]), ne = new ArrayBuffer(K.length), G = new Uint8Array(ne);
      for (let _ = 0; _ < K.length; _++)
        G[_] = K.charCodeAt(_);
      B = ne;
    } else
      B = await (await fetch(z)).arrayBuffer();
    E.current = await C.current.decodeAudioData(B);
  }, [A.notification]), k = x.useCallback(() => {
    var O;
    if ((O = A.notification) != null && O.disabled || !i || !v || !C.current || !E.current)
      return;
    const N = C.current.createBufferSource();
    N.buffer = E.current, N.connect(m.current).connect(C.current.destination), N.start();
  }, [
    A.notification,
    i,
    v,
    C,
    E,
    m
  ]), I = x.useCallback(() => {
    var O;
    (O = A.event) != null && O.rcbToggleNotifications && S(
      Ie.TOGGLE_NOTIFICATIONS,
      { currState: i, newState: !i }
    ).defaultPrevented || u((N) => !N);
  }, []);
  return {
    unreadCount: a,
    setUnreadCount: g,
    notificationsToggledOn: i,
    toggleNotifications: I,
    playNotificationSound: k,
    setUpNotifications: R
  };
}, Ya = () => {
  var A, i, u, v;
  const { settings: a } = Re(), { messages: g, setMessages: E } = mA(), {
    audioToggledOn: C,
    isChatWindowOpen: m,
    isScrolling: S,
    setIsBotTyping: R,
    setUnreadCount: k
  } = vt(), { streamMessageMap: I, chatBodyRef: O } = lt(), { callRcbEvent: N } = Vn(), { playNotificationSound: z } = yA(), M = x.useCallback(async (W, re, te) => {
    R(!1), E((fe) => {
      const ue = [...fe, W];
      return V(ue), ue;
    }), I.current.set("bot", W.id);
    let se = W.content;
    te && (se = yf(se));
    let le = 0;
    const X = se.length;
    W.content = "", await new Promise((fe) => {
      const ue = setInterval(() => {
        if (le >= X) {
          clearInterval(ue), fe();
          return;
        }
        E((Be) => {
          const Se = [...Be];
          for (let ee = Se.length - 1; ee >= 0; ee--)
            if (Se[ee].sender === W.sender && typeof Se[ee].content == "string") {
              const ce = se[le];
              ce && (W.content += ce, Se[ee] = W), le++;
              break;
            }
          return Se;
        });
      }, re);
    }), I.current.delete("bot"), Fs(g);
  }, [g, I]), B = x.useCallback(async (W, re = "bot") => {
    var te, se, le, X, fe, ue, Be, Se;
    let ee = Wo(W, re);
    if ((te = a.event) != null && te.rcbPreInjectMessage) {
      const oe = N(Ie.PRE_INJECT_MESSAGE, { message: ee });
      if (oe.defaultPrevented)
        return null;
      ee = oe.data.message;
    }
    let ce = !1;
    re === "bot" ? ce = (se = a.botBubble) == null ? void 0 : se.dangerouslySetInnerHtml : re === "user" && (ce = (le = a.userBubble) == null ? void 0 : le.dangerouslySetInnerHtml), xf(a, C, m, ee, ce);
    const de = typeof ee.content == "string" && ee.sender === "bot" && ((X = a == null ? void 0 : a.botBubble) == null ? void 0 : X.simStream), xe = typeof ee.content == "string" && ee.sender === "user" && ((fe = a == null ? void 0 : a.userBubble) == null ? void 0 : fe.simStream);
    if (k((oe) => oe + 1), (ue = a.event) != null && ue.rcbPostInjectMessage && N(Ie.POST_INJECT_MESSAGE, { message: ee }), de) {
      const oe = (Be = a.botBubble) == null ? void 0 : Be.streamSpeed;
      await M(ee, oe, ce);
    } else if (xe) {
      const oe = (Se = a.userBubble) == null ? void 0 : Se.streamSpeed;
      await M(ee, oe, ce);
    } else
      E((oe) => {
        const ie = [...oe, ee];
        return V(ie), ie;
      });
    return ee.id;
  }, [a, C, m, N, M]), K = x.useCallback(async (W) => {
    var re;
    const te = g.find((se) => se.id === W);
    return !te || (re = a.event) != null && re.rcbRemoveMessage && N(Ie.REMOVE_MESSAGE, { message: te }).defaultPrevented ? null : (E((se) => {
      const le = se.filter((X) => X.id !== W);
      return V(le), le;
    }), k((se) => Math.max(se - 1, 0)), W);
  }, [N, g, (A = a.event) == null ? void 0 : A.rcbRemoveMessage]), ne = x.useCallback(async (W, re = "bot") => {
    var te, se;
    if (!I.current.has(re)) {
      const X = Wo(W, re);
      return (te = a.event) != null && te.rcbStartStreamMessage && N(Ie.START_STREAM_MESSAGE, { message: X }).defaultPrevented ? null : (R(!1), E((fe) => {
        const ue = [...fe, X];
        return V(ue), [...fe, X];
      }), k((fe) => fe + 1), I.current.set(re, X.id), X.id);
    }
    const le = { ...Wo(W, re), id: I.current.get(re) };
    return (se = a.event) != null && se.rcbChunkStreamMessage && N(
      Ie.CHUNK_STREAM_MESSAGE,
      { ...le, id: I.current.get(re) }
    ).defaultPrevented ? null : (E((X) => {
      const fe = [...X];
      for (let ue = fe.length - 1; ue >= 0; ue--)
        if (fe[ue].sender === re && typeof fe[ue].content == typeof W) {
          fe[ue] = le;
          break;
        }
      return V(fe), fe;
    }), I.current.get(re) ?? null);
  }, [N, (i = a.event) == null ? void 0 : i.rcbChunkStreamMessage, (u = a.event) == null ? void 0 : u.rcbStartStreamMessage, I]), G = x.useCallback(async (W = "bot") => {
    var re;
    if (!I.current.has(W))
      return !0;
    const te = I.current.get(W), se = g.find((le) => le.id === te);
    return (re = a.event) != null && re.rcbStopStreamMessage && N(Ie.STOP_STREAM_MESSAGE, { messageToEndStreamFor: se }).defaultPrevented ? !1 : (I.current.delete(W), Fs(g), !0);
  }, [N, g, (v = a.event) == null ? void 0 : v.rcbStopStreamMessage, I]), _ = (W) => {
    V(W), E(W);
  }, V = (W) => {
    var re, te;
    Fs(W);
    let se = !0;
    (W.length === 0 || m && !S) && (se = !1), (re = a.general) != null && re.embedded && Qc(O.current) && (se = !1);
    const le = W[W.length - 1];
    (!le || le.sender === "user") && (se = !1), se && z(), ((te = a.chatWindow) != null && te.autoJumpToBottom || !S) && setTimeout(() => {
      O.current && (O.current.scrollTop = O.current.scrollHeight);
    }, 1);
  };
  return {
    endStreamMessage: G,
    injectMessage: B,
    removeMessage: K,
    streamMessage: ne,
    messages: g,
    replaceMessages: _
  };
};
let Jl, Gn, Ns, ro = !1, Xn = null;
const bA = () => {
  if (!Jl) {
    const A = window.SpeechRecognition || window.webkitSpeechRecognition;
    Jl = A != null ? new A() : null;
  }
  return Jl;
}, jf = (A, i, u, v, a, g, E) => {
  var C;
  (C = A.voice) != null && C.sendAsAudio ? Of(u, g) : Qf(
    A,
    i,
    u,
    v,
    a,
    E
  );
}, Qf = (A, i, u, v, a, g) => {
  var E, C, m;
  const S = bA();
  if (!S)
    return;
  if (!ro)
    try {
      ro = !0, S.lang = (E = A.voice) == null ? void 0 : E.language, S.start();
    } catch {
    }
  const R = (C = A.voice) == null ? void 0 : C.timeoutPeriod, k = (m = A.voice) == null ? void 0 : m.autoSendPeriod;
  S.onresult = (I) => {
    var O, N;
    clearTimeout(Gn), Gn = null, clearTimeout(Ns);
    const z = I.results[I.results.length - 1][0].transcript;
    if (g.current) {
      const M = (O = A.chatInput) == null ? void 0 : O.characterLimit, B = g.current.value + z;
      M != null && M >= 0 && B.length > M ? v(B.slice(0, M)) : v(B), a(g.current.value.length);
    }
    Gn = setTimeout(() => Kl(i, g), R), (N = A.voice) != null && N.autoSendDisabled || (Ns = setTimeout(u, k));
  }, S.onend = () => {
    ro ? (S.start(), Gn || (Gn = setTimeout(() => Kl(i, g), R))) : (clearTimeout(Gn), Gn = null, clearTimeout(Ns));
  }, Gn = setTimeout(() => Kl(i, g), R);
}, Of = (A, i) => {
  navigator.mediaDevices.getUserMedia({ audio: !0 }).then((u) => {
    if (Xn = new MediaRecorder(u), !ro)
      try {
        ro = !0, Xn.start();
      } catch {
      }
    Xn.ondataavailable = (v) => {
      i.current && i.current.push(v.data);
    }, Xn.onstop = () => {
      A(), u.getTracks().forEach((v) => v.stop());
    };
  }).catch((u) => {
    console.error("Unable to use microphone:", u);
  });
}, wA = () => {
  const A = bA();
  A && (ro = !1, A && A.stop(), Xn && Xn.state !== "inactive" && (Xn.stop(), Xn = null), clearTimeout(Gn), Gn = null, clearTimeout(Ns));
}, Ff = (A, i) => {
  var u, v, a;
  const g = bA();
  (u = i.voice) != null && u.disabled || !((v = i.chatInput) != null && v.blockSpam) || !g || (A && !ro ? (ro = !0, (a = i.voice) != null && a.sendAsAudio ? Xn == null || Xn.start() : g.start()) : A || wA());
}, Kl = (A, i) => {
  var u;
  (u = i.current) != null && u.disabled || A(), wA();
}, Js = () => {
  const { settings: A } = Re(), { voiceToggledOn: i, setVoiceToggledOn: u } = vt(), { callRcbEvent: v } = Vn(), a = x.useCallback(() => {
    var E;
    (E = A.event) != null && E.rcbToggleVoice && v(Ie.TOGGLE_VOICE, { currState: i, newState: !i }).defaultPrevented || u((C) => !C);
  }, []), g = x.useCallback((E) => {
    Ff(E, A);
  }, [A]);
  return {
    voiceToggledOn: i,
    toggleVoice: a,
    syncVoice: g
  };
}, Go = () => {
  const { settings: A } = Re(), {
    inputLength: i,
    setInputLength: u,
    textAreaDisabled: v,
    setTextAreaDisabled: a,
    textAreaSensitiveMode: g,
    setTextAreaSensitiveMode: E
  } = vt(), { inputRef: C, chatBodyRef: m, prevInputRef: S } = lt(), { callRcbEvent: R } = Vn(), k = (z) => {
    var M, B, K;
    if (v && C.current) {
      C.current.value = "";
      return;
    }
    if (C.current && S.current !== null) {
      const ne = (M = A.chatInput) == null ? void 0 : M.characterLimit, G = (B = A.chatInput) != null && B.allowNewline ? z : z.replace(/\n/g, " ");
      if (ne != null && ne >= 0 && G.length > ne ? C.current.value = G.slice(0, ne) : C.current.value = G, (K = A.event) != null && K.rcbTextAreaChangeValue && R(
        Ie.TEXT_AREA_CHANGE_VALUE,
        { currValue: C.current.value, prevValue: S.current }
      ).defaultPrevented) {
        C.current.value = S.current;
        return;
      }
      S.current = C.current.value;
    }
  }, I = x.useCallback((z) => {
    var M;
    (M = C.current) != null && M.disabled || setTimeout(() => {
      var B, K, ne;
      (B = A.general) != null && B.embedded ? Qc(m == null ? void 0 : m.current) && ((K = C.current) == null || K.focus()) : z !== "start" && ((ne = C.current) == null || ne.focus());
    }, 100);
  }, []), O = x.useCallback(() => {
    !v && C.current && C.current.focus();
  }, [v]), N = x.useCallback(() => C && C.current ? C.current.value : "", []);
  return {
    textAreaDisabled: v,
    setTextAreaDisabled: a,
    textAreaSensitiveMode: g,
    setTextAreaSensitiveMode: E,
    inputLength: i,
    setInputLength: u,
    getTextAreaValue: N,
    setTextAreaValue: k,
    updateTextAreaFocus: I,
    focusTextArea: O,
    toggleTextAreaDisabled: () => {
      a((z) => !z);
    },
    toggleTextAreaSensitiveMode: () => {
      E((z) => !z);
    }
  };
}, Xa = () => {
  var A, i, u, v;
  const { settings: a } = Re(), { endStreamMessage: g, injectMessage: E, removeMessage: C, streamMessage: m } = Ya(), { getCurrPath: S, getPrevPath: R, goToPath: k } = Gi(), {
    timeoutId: I,
    voiceToggledOn: O,
    setTextAreaSensitiveMode: N,
    textAreaSensitiveMode: z,
    setTextAreaDisabled: M,
    setIsBotTyping: B,
    setBlockAllowsAttachment: K,
    setInputLength: ne
  } = vt(), { flowRef: G, chatBodyRef: _, inputRef: V, keepVoiceOnRef: W, paramsInputRef: re } = lt(), { showToast: te, dismissToast: se } = Ga(), { callRcbEvent: le } = Vn(), { syncVoice: X } = Js(), { setTextAreaValue: fe } = Go(), { openChat: ue } = Jn(), Be = x.useCallback(async (ee) => {
    var ce, de, xe;
    const oe = S();
    if (!(!oe || !G.current[oe])) {
      if (z) {
        if ((ce = a == null ? void 0 : a.sensitiveInput) != null && ce.hideInUserBubble)
          return;
        if ((de = a == null ? void 0 : a.sensitiveInput) != null && de.maskInUserBubble) {
          await E("*".repeat(((xe = a.sensitiveInput) == null ? void 0 : xe.asterisksCount) ?? 10), "user");
          return;
        }
      }
      await E(ee, "user");
    }
  }, [G, S, a, E, z]), Se = x.useCallback(async (ee, ce, de = !0) => {
    var xe, oe;
    ce = ce.trim(), ce !== "" && (de && await Be(ce), I && clearTimeout(I), re.current = ce, _.current && (_.current.scrollTop = _.current.scrollHeight), V.current && (fe(""), ne(0)), (xe = a.chatInput) != null && xe.blockSpam && M(!0), W.current = O, X(!1), setTimeout(() => {
      B(!0);
    }, 400), N(!1), setTimeout(async () => {
      var ie;
      const we = {
        prevPath: R(),
        currPath: S(),
        goToPath: k,
        setTextAreaValue: fe,
        userInput: ce,
        injectMessage: E,
        streamMessage: m,
        removeMessage: C,
        endStreamMessage: g,
        openChat: ue,
        showToast: te,
        dismissToast: se
      };
      if (!await kc(G.current, ee, we, k)) {
        const ve = S();
        if (!ve)
          return;
        const Ae = G.current[ve];
        if (!Ae)
          return;
        Ae.chatDisabled || M((ie = a.chatInput) == null ? void 0 : ie.disabled), Pc(Ae, N, we), K(typeof Ae.file == "function"), X(W.current), B(!1);
      }
    }, (oe = a.chatInput) == null ? void 0 : oe.botDelay));
  }, [
    I,
    (A = a.chatInput) == null ? void 0 : A.blockSpam,
    (i = a.chatInput) == null ? void 0 : i.botDelay,
    (u = a.chatInput) == null ? void 0 : u.disabled,
    W,
    O,
    X,
    Be,
    R,
    S,
    k,
    E,
    m,
    C,
    g,
    ue,
    te,
    se,
    G
  ]);
  return { handleSubmitText: x.useCallback(async (ee, ce = !0) => {
    var de, xe;
    if (ee = ee ?? ((de = V.current) == null ? void 0 : de.value), (xe = a.event) != null && xe.rcbUserSubmitText && le(Ie.USER_SUBMIT_TEXT, { inputText: ee, sendInChat: ce }).defaultPrevented)
      return;
    const oe = S();
    oe && Se(oe, ee, ce);
  }, [le, S, Se, V, (v = a.event) == null ? void 0 : v.rcbUserSubmitText]) };
}, Ks = () => {
  var A;
  const { settings: i } = Re();
  return x.useMemo(() => {
    var u;
    if (typeof window > "u" || !window.navigator)
      return !1;
    if (!((u = i.device) != null && u.applyMobileOptimizations))
      return !0;
    const v = navigator.userAgent, a = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(v), g = window.innerWidth >= 768;
    return a && g;
  }, [(A = i.device) == null ? void 0 : A.applyMobileOptimizations]);
}, Nf = ({ buttons: A }) => {
  var i, u, v, a, g, E, C, m, S, R, k;
  const I = Ks(), { settings: O } = Re(), { styles: N } = Ke(), {
    textAreaDisabled: z,
    textAreaSensitiveMode: M,
    inputLength: B,
    hasFlowStarted: K,
    setHasFlowStarted: ne,
    setInputLength: G
  } = vt(), { inputRef: _ } = lt(), [V, W] = x.useState(!1), [re, te] = x.useState(!1), { handleSubmitText: se } = Xa(), { setTextAreaValue: le } = Go(), X = {
    boxSizing: I ? "content-box" : "border-box",
    ...N.chatInputAreaStyle
  }, fe = {
    outline: z ? "" : "none",
    boxShadow: z ? "" : `0 0 5px ${(i = O.general) == null ? void 0 : i.primaryColor}`,
    boxSizing: I ? "content-box" : "border-box",
    ...N.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...N.chatInputAreaFocusedStyle
  }, ue = {
    cursor: `url(${(u = O.general) == null ? void 0 : u.actionDisabledIcon}), auto`,
    caretColor: "transparent",
    boxSizing: I ? "content-box" : "border-box",
    ...N.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...N.chatInputAreaDisabledStyle
  }, Be = {
    color: "#989898",
    ...N.characterLimitStyle
  }, Se = {
    color: "#ff0000",
    ...N.characterLimitReachedStyle
  }, ee = z ? (v = O.chatInput) == null ? void 0 : v.disabledPlaceholderText : (a = O.chatInput) == null ? void 0 : a.enabledPlaceholderText, ce = () => {
    z || W(!0);
  }, de = () => {
    W(!1);
  }, xe = () => {
    te(!0);
  }, oe = () => {
    te(!1);
  }, ie = async (ve) => {
    var Ae;
    if (!re && ve.key === "Enter") {
      if (ve.shiftKey) {
        (Ae = O.chatInput) != null && Ae.allowNewline || ve.preventDefault();
        return;
      }
      ve.preventDefault(), await se();
    }
  }, we = (ve) => {
    _.current && (le(ve.target.value), G(_.current.value.length));
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      "aria-label": ((g = O.ariaLabel) == null ? void 0 : g.inputTextArea) ?? "input text area",
      role: "textbox",
      onMouseDown: (ve) => {
        var Ae;
        ve.stopPropagation(), !K && ((Ae = O.general) == null ? void 0 : Ae.flowStartTrigger) === "ON_CHATBOT_INTERACT" && ne(!0);
      },
      style: N.chatInputContainerStyle,
      className: "rcb-chat-input",
      children: [
        M && (E = O.sensitiveInput) != null && E.maskInTextArea ? /* @__PURE__ */ f.jsx(
          "input",
          {
            ref: _,
            type: "password",
            className: "rcb-chat-input-textarea",
            style: z ? ue : V ? fe : X,
            placeholder: ee,
            onChange: we,
            onKeyDown: ie,
            onFocus: ce,
            onBlur: de,
            onCompositionStart: xe,
            onCompositionEnd: oe
          }
        ) : /* @__PURE__ */ f.jsx(
          "textarea",
          {
            ref: _,
            style: z ? ue : V ? fe : X,
            rows: 1,
            className: "rcb-chat-input-textarea",
            placeholder: ee,
            onChange: we,
            onKeyDown: ie,
            onFocus: ce,
            onBlur: de,
            onCompositionStart: xe,
            onCompositionEnd: oe
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: "rcb-chat-input-button-container", children: [
          A == null ? void 0 : A.map(
            (ve, Ae) => /* @__PURE__ */ f.jsx(x.Fragment, { children: ve }, Ae)
          ),
          ((C = O.chatInput) == null ? void 0 : C.showCharacterCount) && ((m = O.chatInput) == null ? void 0 : m.characterLimit) != null && ((S = O.chatInput) == null ? void 0 : S.characterLimit) > 0 && /* @__PURE__ */ f.jsxs(
            "div",
            {
              className: "rcb-chat-input-char-counter",
              style: B >= ((R = O.chatInput) == null ? void 0 : R.characterLimit) ? Se : Be,
              children: [
                B,
                "/",
                (k = O.chatInput) == null ? void 0 : k.characterLimit
              ]
            }
          )
        ] })
      ]
    }
  );
}, Lf = ({ buttons: A }) => {
  var i;
  const { settings: u } = Re(), { styles: v } = Ke();
  return /* @__PURE__ */ f.jsxs("div", { "data-testid": "chatbot-footer-container", style: v.footerStyle, className: "rcb-chat-footer-container", children: [
    /* @__PURE__ */ f.jsx("div", { className: "rcb-chat-footer", children: A == null ? void 0 : A.map(
      (a, g) => /* @__PURE__ */ f.jsx(x.Fragment, { children: a }, g)
    ) }),
    /* @__PURE__ */ f.jsx("span", { children: (i = u.footer) == null ? void 0 : i.text })
  ] });
}, Hf = () => {
  var A, i, u, v, a, g, E;
  const { settings: C } = Re(), { styles: m } = Ke(), { unreadCount: S } = vt(), { isChatWindowOpen: R, toggleChatWindow: k } = Jn(), I = {
    backgroundImage: `linear-gradient(to right, ${(A = C.general) == null ? void 0 : A.secondaryColor},
			${(i = C.general) == null ? void 0 : i.primaryColor})`,
    ...m.chatButtonStyle
  }, O = {
    backgroundImage: `url(${(u = C.chatButton) == null ? void 0 : u.icon})`,
    fill: "#fff",
    width: 75,
    height: 75,
    ...m.chatIconStyle
  }, N = () => {
    var z;
    const M = (z = C.chatButton) == null ? void 0 : z.icon;
    return !M || typeof M == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: "rcb-toggle-icon",
        style: O
      }
    ) : M && /* @__PURE__ */ f.jsx("span", { className: "rcb-toggle-icon", children: /* @__PURE__ */ f.jsx(M, { style: O }) });
  };
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: !((v = C.general) != null && v.embedded) && /* @__PURE__ */ f.jsxs(
    "div",
    {
      "aria-label": ((a = C.ariaLabel) == null ? void 0 : a.chatButton) ?? "open chat",
      role: "button",
      style: I,
      className: `rcb-toggle-button ${R ? "rcb-button-hide" : "rcb-button-show"}`,
      onClick: k,
      children: [
        N(),
        !((g = C.notification) != null && g.disabled) && ((E = C.notification) == null ? void 0 : E.showCount) && /* @__PURE__ */ f.jsx("span", { style: m.notificationBadgeStyle, className: "rcb-badge", children: S })
      ]
    }
  ) });
}, Uf = () => {
  var A, i, u, v;
  const a = Ks(), { settings: g } = Re(), { styles: E } = Ke(), { isChatWindowOpen: C, openChat: m } = Jn(), [S, R] = x.useState(!1), [k, I] = x.useState(!1), [O, N] = x.useState(0);
  x.useEffect(() => {
    var B, K, ne;
    const G = (B = g.tooltip) == null ? void 0 : B.mode;
    if (G === "ALWAYS")
      if (a) {
        let _;
        C ? _ = (((K = E.chatWindowStyle) == null ? void 0 : K.width) ?? 375) - (((ne = E.chatButtonStyle) == null ? void 0 : ne.width) ?? 75) : _ = 0, N(_), R(!0);
      } else
        R(!C);
    else
      G === "NEVER" ? R(!1) : G === "START" ? k ? R(!1) : (I(!0), R(!0)) : G === "CLOSE" && R(!C);
  }, [C]);
  const z = {
    transform: `translateX(-${O}px)`,
    right: (((A = E.chatButtonStyle) == null ? void 0 : A.width) ?? 75) + 40,
    bottom: 30,
    backgroundColor: (i = g.general) == null ? void 0 : i.secondaryColor,
    color: "#fff",
    ...E.tooltipStyle
  }, M = {
    borderColor: `transparent transparent transparent ${z.backgroundColor}`
  };
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: !((u = g.general) != null && u.embedded) && /* @__PURE__ */ f.jsxs(
    "div",
    {
      "data-testid": "chat-tooltip",
      style: z,
      className: `rcb-chat-tooltip ${S ? "rcb-tooltip-show" : "rcb-tooltip-hide"}`,
      onClick: () => m(!0),
      children: [
        /* @__PURE__ */ f.jsx("span", { children: (v = g.tooltip) == null ? void 0 : v.text }),
        /* @__PURE__ */ f.jsx("span", { className: "rcb-chat-tooltip-tail", style: M })
      ]
    }
  ) });
}, Oc = ({
  file: A,
  fileType: i,
  fileUrl: u
}) => {
  var v, a, g;
  const { settings: E } = Re(), { styles: C } = Ke(), m = {
    backgroundColor: (v = E.general) == null ? void 0 : v.primaryColor,
    maxWidth: (a = E.userBubble) != null && a.showAvatar ? "65%" : "70%",
    ...C.mediaDisplayContainerStyle
  };
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: u ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    i === "image" && u && /* @__PURE__ */ f.jsx(
      "div",
      {
        style: m,
        className: "rcb-media-display-image-container rcb-media-entry",
        "data-testid": "media-display-image-container",
        children: /* @__PURE__ */ f.jsx("img", { src: u, alt: "Image Display", className: "rcb-media-display-image" })
      }
    ),
    i === "video" && u && /* @__PURE__ */ f.jsx(
      "div",
      {
        style: m,
        className: "rcb-media-display-video-container rcb-media-entry",
        "data-testid": "media-display-video-container",
        children: /* @__PURE__ */ f.jsxs("video", { controls: !0, className: "rcb-media-display-video", children: [
          /* @__PURE__ */ f.jsx("source", { src: u, type: A.type }),
          "Your browser does not support the video tag."
        ] })
      }
    ),
    i === "audio" && u && /* @__PURE__ */ f.jsxs(
      "audio",
      {
        "data-testid": "media-display-audio-container",
        style: {
          maxWidth: (g = E.userBubble) != null && g.showAvatar ? "65%" : "70%"
        },
        controls: !0,
        className: "rcb-media-display-audio rcb-media-entry",
        children: [
          /* @__PURE__ */ f.jsx("source", { src: u, type: A.type }),
          "Your browser does not support the audio tag."
        ]
      }
    )
  ] }) : /* @__PURE__ */ f.jsx(f.Fragment, {}) });
}, Fc = async (A) => {
  if (!A)
    return { fileType: null, fileUrl: null };
  const i = A.type.split("/")[0];
  if (!["image", "video", "audio"].includes(i))
    return { fileType: null, fileUrl: null };
  try {
    const u = await new Promise((v, a) => {
      const g = new FileReader();
      g.onload = () => v(g.result), g.onerror = () => a(new Error("File reading failed")), g.readAsDataURL(A);
    });
    return { fileType: i, fileUrl: u };
  } catch {
    return { fileType: null, fileUrl: null };
  }
}, zf = () => {
  var A, i, u, v, a, g;
  const { settings: E } = Re(), { styles: C } = Ke(), { injectMessage: m, streamMessage: S, removeMessage: R, endStreamMessage: k } = Ya(), { getCurrPath: I, getPrevPath: O, goToPath: N, blockAllowsAttachment: z } = Gi(), { flowRef: M, inputRef: B } = lt(), K = M.current, { showToast: ne, dismissToast: G } = Ga(), { callRcbEvent: _ } = Vn(), { openChat: V } = Jn(), { setTextAreaValue: W } = Go(), { handleSubmitText: re } = Xa(), te = {
    cursor: `url(${(A = E.general) == null ? void 0 : A.actionDisabledIcon}), auto`,
    ...C.fileAttachmentButtonStyle,
    // by default inherit the base style
    ...C.fileAttachmentButtonDisabledStyle
  }, se = {
    backgroundImage: `url(${(i = E.fileAttachment) == null ? void 0 : i.icon})`,
    fill: "#a6a6a6",
    ...C.fileAttachmentIconStyle
  }, le = {
    backgroundImage: `url(${(u = E.fileAttachment) == null ? void 0 : u.icon})`,
    fill: "#a6a6a6",
    ...C.fileAttachmentIconStyle,
    // by default inherit the base style
    ...C.fileAttachmentIconDisabledStyle
  }, X = async (ue) => {
    var Be, Se, ee, ce;
    const de = ue.target.files;
    if (!de || (Be = E.event) != null && Be.rcbUserUploadFile && _(Ie.USER_UPLOAD_FILE, { files: de }).defaultPrevented)
      return;
    const xe = I();
    if (!xe)
      return;
    const oe = K[xe];
    if (!oe)
      return;
    const ie = oe.file;
    if (ie != null) {
      const we = [];
      for (let ve = 0; ve < de.length; ve++) {
        if (we.push(de[ve].name), !((Se = E.fileAttachment) != null && Se.showMediaDisplay))
          continue;
        const Ae = await Fc(de[ve]);
        !Ae.fileType || !Ae.fileUrl || await m(/* @__PURE__ */ f.jsx(
          Oc,
          {
            file: de[ve],
            fileType: Ae.fileType,
            fileUrl: Ae.fileUrl
          }
        ), "user");
      }
      await re("📄 " + we.join(", "), (ee = E.fileAttachment) == null ? void 0 : ee.sendFileName), await ie({
        userInput: (ce = B.current) == null ? void 0 : ce.value,
        prevPath: O(),
        currPath: I(),
        goToPath: N,
        setTextAreaValue: W,
        injectMessage: m,
        streamMessage: S,
        removeMessage: R,
        endStreamMessage: k,
        openChat: V,
        showToast: ne,
        dismissToast: G,
        files: de
      });
    }
  }, fe = () => {
    var ue, Be;
    const Se = z ? (ue = E.fileAttachment) == null ? void 0 : ue.icon : (Be = E.fileAttachment) == null ? void 0 : Be.iconDisabled;
    return !Se || typeof Se == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: z ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled",
        style: z ? se : le
      }
    ) : Se && /* @__PURE__ */ f.jsx("span", { className: z ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled", children: /* @__PURE__ */ f.jsx(
      Se,
      {
        style: z ? se : le
      }
    ) });
  };
  return /* @__PURE__ */ f.jsxs(
    "label",
    {
      "aria-label": ((v = E.ariaLabel) == null ? void 0 : v.fileAttachmentButton) ?? "upload file",
      role: "button",
      className: z ? "rcb-attach-button-enabled" : "rcb-attach-button-disabled",
      style: z ? C.fileAttachmentButtonStyle : te,
      children: [
        /* @__PURE__ */ f.jsx(
          "input",
          {
            className: "rcb-attach-input",
            type: "file",
            onChange: X,
            multiple: (a = E.fileAttachment) == null ? void 0 : a.multiple,
            accept: (g = E.fileAttachment) == null ? void 0 : g.accept,
            disabled: !z
          }
        ),
        fe()
      ]
    }
  );
}, Wf = () => {
  var A, i, u, v, a, g;
  const { settings: E } = Re(), { styles: C } = Ke(), { inputRef: m } = lt(), { textAreaDisabled: S, setTextAreaValue: R } = Go(), k = x.useRef(null), I = x.useRef(null), [O, N] = x.useState(!1), z = {
    cursor: `url(${(A = E.general) == null ? void 0 : A.actionDisabledIcon}), auto`,
    ...C.emojiButtonStyle,
    // by default inherit the base style
    ...C.emojiButtonDisabledStyle
  }, M = {
    backgroundImage: `url(${(i = E.emoji) == null ? void 0 : i.icon})`,
    fill: "#a6a6a6",
    ...C.emojiIconStyle
  }, B = {
    backgroundImage: `url(${(u = E.emoji) == null ? void 0 : u.icon})`,
    fill: "#a6a6a6",
    ...C.emojiIconStyle,
    // by default inherit the base style
    ...C.emojiIconDisabledStyle
  };
  x.useEffect(() => {
    const _ = (re) => {
      const te = re.composedPath();
      k.current && !te.includes(k.current) && I.current && !te.includes(I.current) && N(!1);
    }, V = () => {
      if (k.current && I.current) {
        const re = I.current.getBoundingClientRect(), te = k.current.offsetHeight, se = re.top - te - 8;
        k.current.style.left = `${re.left}px`, k.current.style.top = `${se}px`;
      }
    }, W = () => {
      V();
    };
    return document.addEventListener("mousedown", _), window.addEventListener("resize", W), () => {
      document.removeEventListener("mousedown", _), window.removeEventListener("resize", W);
    };
  }, []);
  const K = (_, V) => {
    _.preventDefault(), m.current && (R(m.current.value + V), setTimeout(() => {
      const W = m.current;
      if (W) {
        W.focus();
        const re = W.value.length;
        W.setSelectionRange(re, re);
      }
    }, 50)), N(!1);
  }, ne = (_) => {
    _.preventDefault(), N(S ? !1 : !O);
  }, G = () => {
    var _, V;
    const W = S ? (_ = E.emoji) == null ? void 0 : _.iconDisabled : (V = E.emoji) == null ? void 0 : V.icon;
    return !W || typeof W == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: `${S ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`,
        style: S ? B : M
      }
    ) : W && /* @__PURE__ */ f.jsx("span", { className: `${S ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`, children: /* @__PURE__ */ f.jsx(W, { style: S ? B : M }) });
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      "div",
      {
        "aria-label": ((v = E.ariaLabel) == null ? void 0 : v.emojiButton) ?? "emoji picker",
        role: "button",
        ref: I,
        className: `${S ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"}`,
        style: S ? z : C.emojiButtonStyle,
        onMouseDown: ne,
        children: G()
      }
    ),
    O && /* @__PURE__ */ f.jsx("div", { className: "rcb-emoji-button-popup", ref: k, children: (g = (a = E.emoji) == null ? void 0 : a.list) == null ? void 0 : g.map((_, V) => /* @__PURE__ */ f.jsx(
      "span",
      {
        className: "rcb-emoji",
        onMouseDown: (W) => K(W, _),
        children: _
      },
      V
    )) })
  ] });
}, Nc = () => {
  const { settings: A } = Re(), { audioToggledOn: i, setAudioToggledOn: u } = vt(), { callRcbEvent: v } = Vn(), a = x.useCallback(() => {
    var g;
    (g = A.event) != null && g.rcbToggleAudio && v(Ie.TOGGLE_AUDIO, { currState: i, newState: !i }).defaultPrevented || u((E) => !E);
  }, []);
  return {
    audioToggledOn: i,
    toggleAudio: a
  };
}, _f = () => {
  var A, i, u;
  const { settings: v } = Re(), { styles: a } = Ke(), { audioToggledOn: g, toggleAudio: E } = Nc(), C = {
    backgroundImage: `url(${(A = v.audio) == null ? void 0 : A.icon})`,
    fill: "#fcec3d",
    ...a.audioIconStyle
  }, m = {
    backgroundImage: `url(${(i = v.audio) == null ? void 0 : i.iconDisabled})`,
    fill: "#e8eaed",
    ...a.audioIconStyle,
    // by default inherit the base style
    ...a.audioIconDisabledStyle
  }, S = () => {
    var R, k;
    const I = g ? (R = v.audio) == null ? void 0 : R.icon : (k = v.audio) == null ? void 0 : k.iconDisabled;
    return !I || typeof I == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: "rcb-audio-icon",
        "data-testid": "rcb-audio-icon",
        style: g ? C : m
      }
    ) : I && /* @__PURE__ */ f.jsx("span", { className: "rcb-audio-icon", "data-testid": "rcb-audio-icon", children: /* @__PURE__ */ f.jsx(
      I,
      {
        style: g ? C : m,
        "data-testid": "rcb-audio-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      "aria-label": ((u = v.ariaLabel) == null ? void 0 : u.audioButton) ?? "toggle audio",
      role: "button",
      onMouseDown: (R) => {
        R.preventDefault(), E();
      },
      style: g ? a.audioButtonStyle : { ...a.audioButtonStyle, ...a.audioButtonDisabledStyle },
      children: S()
    }
  );
}, Zf = () => {
  var A, i;
  const { settings: u } = Re(), { styles: v } = Ke(), { openChat: a } = Jn(), g = {
    backgroundImage: `url(${(A = u.header) == null ? void 0 : A.closeChatIcon})`,
    fill: "#e8eaed",
    stroke: "#e8eaed",
    ...v.closeChatIconStyle
  }, E = () => {
    var C;
    const m = (C = u.header) == null ? void 0 : C.closeChatIcon;
    return !m || typeof m == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: "rcb-close-chat-icon",
        "data-testid": "rcb-close-chat-icon",
        style: g
      }
    ) : m && /* @__PURE__ */ f.jsx("span", { className: "rcb-close-chat-icon", "data-testid": "rcb-close-chat-icon", children: /* @__PURE__ */ f.jsx(m, { style: g }) });
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      "aria-label": ((i = u.ariaLabel) == null ? void 0 : i.closeChatButton) ?? "close chat",
      role: "button",
      onMouseDown: (C) => {
        C.stopPropagation(), a(!1);
      },
      style: v.closeChatButtonStyle,
      children: E()
    }
  );
}, Lc = () => {
  const { notificationsToggledOn: A, toggleNotifications: i, playNotificationSound: u } = yA();
  return {
    notificationsToggledOn: A,
    toggleNotifications: i,
    playNotificationSound: u
  };
}, Gf = () => {
  var A, i, u;
  const { settings: v } = Re(), { styles: a } = Ke(), { notificationsToggledOn: g, toggleNotifications: E } = Lc(), C = {
    backgroundImage: `url(${(A = v.notification) == null ? void 0 : A.icon})`,
    fill: "#fcec3d",
    ...a.notificationIconStyle
  }, m = {
    backgroundImage: `url(${(i = v.notification) == null ? void 0 : i.iconDisabled})`,
    fill: "#e8eaed",
    ...a.notificationIconStyle,
    // by default inherit the base style
    ...a.notificationIconDisabledStyle
  }, S = () => {
    var R, k;
    const I = g ? (R = v.notification) == null ? void 0 : R.icon : (k = v.notification) == null ? void 0 : k.iconDisabled;
    return !I || typeof I == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: "rcb-notification-icon",
        "data-testid": "rcb-notification-icon",
        style: g ? C : m
      }
    ) : I && /* @__PURE__ */ f.jsx("span", { className: "rcb-notification-icon", "data-testid": "rcb-notification-icon", children: /* @__PURE__ */ f.jsx(
      I,
      {
        style: g ? C : m,
        "data-testid": "rcb-notification-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      "aria-label": ((u = v.ariaLabel) == null ? void 0 : u.notificationButton) ?? "toggle notifications",
      role: "button",
      onMouseDown: (R) => {
        R.preventDefault(), E();
      },
      style: g ? a.notificationButtonStyle : { ...a.notificationButtonStyle, ...a.notificationButtonDisabledStyle },
      children: S()
    }
  );
}, Yf = () => {
  var A, i, u;
  const { settings: v } = Re(), { styles: a } = Ke(), { injectMessage: g } = Ya(), { inputRef: E } = lt(), { voiceToggledOn: C, toggleVoice: m } = Js(), { setInputLength: S, setTextAreaValue: R, textAreaDisabled: k } = Go(), { handleSubmitText: I } = Xa(), O = x.useRef([]), [N, z] = x.useState(!1);
  x.useEffect(() => {
    var _;
    (_ = v.voice) != null && _.sendAsAudio ? (ne(), O.current = []) : I();
  }, [N]), x.useEffect(() => {
    C ? jf(
      v,
      m,
      K,
      R,
      S,
      O,
      E
    ) : wA();
  }, [C]);
  const M = {
    backgroundImage: `url(${(A = v.voice) == null ? void 0 : A.icon})`,
    fill: "#9aa0a6",
    ...a.voiceIconStyle
  }, B = {
    backgroundImage: `url(${(i = v.voice) == null ? void 0 : i.iconDisabled})`,
    fill: "#9aa0a6",
    ...a.voiceIconStyle,
    // by default inherit the base style
    ...a.voiceIconDisabledStyle
  }, K = () => {
    z((_) => !_);
  }, ne = async () => {
    const _ = new Blob(O.current, { type: "audio/wav" }), V = new File([_], "voice-input.wav", { type: "audio/wav" }), W = await Fc(V);
    !W.fileType || !W.fileUrl || await g(/* @__PURE__ */ f.jsx(
      Oc,
      {
        file: V,
        fileType: W.fileType,
        fileUrl: W.fileUrl
      }
    ), "user");
  }, G = () => {
    var _, V;
    const W = C ? (_ = v.voice) == null ? void 0 : _.icon : (V = v.voice) == null ? void 0 : V.iconDisabled;
    return !W || typeof W == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: `rcb-voice-icon${C && !k ? "-on" : ""}`,
        style: C && !k ? M : B
      }
    ) : W && /* @__PURE__ */ f.jsx("span", { className: `rcb-voice-icon ${C && !k ? "on" : ""}`, children: /* @__PURE__ */ f.jsx(W, { style: C && !k ? M : B }) });
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      "aria-label": ((u = v.ariaLabel) == null ? void 0 : u.voiceButton) ?? "toggle voice",
      role: "button",
      onMouseDown: (_) => {
        _.preventDefault(), !k && m();
      },
      style: C && !k ? a.voiceButtonStyle : { ...a.voiceButtonStyle, ...a.voiceButtonDisabledStyle },
      className: C && !k ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
      children: G()
    }
  );
}, Xf = () => {
  var A, i, u, v, a, g, E, C;
  const { settings: m } = Re(), { styles: S } = Ke(), { textAreaDisabled: R } = vt(), [k, I] = x.useState(!1), { handleSubmitText: O } = Xa(), N = {
    backgroundColor: (A = m.general) == null ? void 0 : A.primaryColor,
    ...S.sendButtonStyle
  }, z = {
    cursor: `url(${(i = m.general) == null ? void 0 : i.actionDisabledIcon}), auto`,
    backgroundColor: (u = m.general) == null ? void 0 : u.primaryColor,
    ...S.sendButtonStyle,
    // by default inherit the base style
    ...S.sendButtonDisabledStyle
  }, M = {
    backgroundColor: (v = m.general) == null ? void 0 : v.secondaryColor,
    ...S.sendButtonStyle,
    // by default inherit the base style
    ...S.sendButtonHoveredStyle
  }, B = {
    backgroundImage: `url(${(a = m.chatInput) == null ? void 0 : a.sendButtonIcon})`,
    fill: "#fff",
    ...S.sendIconStyle
  }, K = {
    backgroundImage: `url(${(g = m.chatInput) == null ? void 0 : g.sendButtonIcon})`,
    fill: "#fff",
    ...S.sendIconStyle,
    // by default inherit the base style
    ...S.sendIconDisabledStyle
  }, ne = {
    backgroundImage: `url(${(E = m.chatInput) == null ? void 0 : E.sendButtonIcon})`,
    fill: "#fff",
    ...S.sendIconStyle,
    // by default inherit the base style
    ...S.sendIconHoveredStyle
  }, G = () => {
    I(!0);
  }, _ = () => {
    I(!1);
  }, V = () => {
    var W;
    const re = (W = m.chatInput) == null ? void 0 : W.sendButtonIcon;
    return !re || typeof re == "string" ? /* @__PURE__ */ f.jsx(
      "span",
      {
        className: "rcb-send-icon",
        "data-testid": "rcb-send-icon",
        style: R ? K : k ? ne : B
      }
    ) : re && /* @__PURE__ */ f.jsx("span", { className: "rcb-send-icon", "data-testid": "rcb-send-icon", children: /* @__PURE__ */ f.jsx(
      re,
      {
        style: R ? K : k ? ne : B
      }
    ) });
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      "aria-label": ((C = m.ariaLabel) == null ? void 0 : C.sendButton) ?? "send message",
      role: "button",
      onMouseEnter: G,
      onMouseLeave: _,
      onMouseDown: async (W) => {
        W == null || W.preventDefault(), !R && await O();
      },
      style: R ? z : k ? M : N,
      className: "rcb-send-button",
      children: V()
    }
  );
}, Vf = (A) => Object.values(qe).includes(A), Jf = (A, i) => {
  var u, v, a, g, E, C, m, S, R;
  const k = {
    [qe.AUDIO_BUTTON]: (u = A.audio) == null ? void 0 : u.disabled,
    [qe.CLOSE_CHAT_BUTTON]: (v = A.general) == null ? void 0 : v.embedded,
    [qe.EMOJI_PICKER_BUTTON]: (a = A.emoji) == null ? void 0 : a.disabled,
    [qe.FILE_ATTACHMENT_BUTTON]: (g = A.fileAttachment) == null ? void 0 : g.disabled,
    [qe.NOTIFICATION_BUTTON]: (E = A.notification) == null ? void 0 : E.disabled,
    [qe.SEND_MESSAGE_BUTTON]: !1,
    [qe.VOICE_MESSAGE_BUTTON]: (C = A.voice) == null ? void 0 : C.disabled
  }, I = {}, O = (B) => B ? B.map((K) => {
    if (typeof K == "string") {
      if (Vf(K) && !k[K]) {
        if (I[K])
          return I[K];
        const ne = i[K];
        if (typeof ne == "function") {
          const G = ne();
          return I[K] = G, G;
        }
        return null;
      }
      return null;
    }
    return K;
  }).filter((K) => K !== null) : [], N = O((m = A.header) == null ? void 0 : m.buttons), z = O((S = A.chatInput) == null ? void 0 : S.buttons), M = O((R = A.footer) == null ? void 0 : R.buttons);
  return { header: N, chatInput: z, footer: M };
}, Kf = () => /* @__PURE__ */ f.jsx(_f, {}), $f = () => /* @__PURE__ */ f.jsx(Gf, {}), qf = () => /* @__PURE__ */ f.jsx(Zf, {}), ep = () => /* @__PURE__ */ f.jsx(Yf, {}), tp = () => /* @__PURE__ */ f.jsx(Xf, {}), np = () => /* @__PURE__ */ f.jsx(zf, {}), rp = () => /* @__PURE__ */ f.jsx(Wf, {}), op = () => {
  const { settings: A } = Re(), i = x.useMemo(() => ({
    [qe.CLOSE_CHAT_BUTTON]: () => qf(),
    [qe.AUDIO_BUTTON]: () => Kf(),
    [qe.NOTIFICATION_BUTTON]: () => $f(),
    [qe.EMOJI_PICKER_BUTTON]: () => rp(),
    [qe.FILE_ATTACHMENT_BUTTON]: () => np(),
    [qe.SEND_MESSAGE_BUTTON]: () => tp(),
    [qe.VOICE_MESSAGE_BUTTON]: () => ep()
  }), []), { header: u, chatInput: v, footer: a } = x.useMemo(() => Jf(A, i), [A, i]), g = x.useMemo(() => u, [u]), E = x.useMemo(() => v, [v]), C = x.useMemo(() => a, [a]);
  return { headerButtons: g, chatInputButtons: E, footerButtons: C };
}, xA = () => {
  const { settings: A } = Re(), { styles: i } = Ke(), { setMessages: u } = mA(), {
    isLoadingChatHistory: v,
    setIsLoadingChatHistory: a
  } = vt(), { chatBodyRef: g } = lt(), { callRcbEvent: E } = Vn(), { chatScrollHeight: C } = Jn(), m = x.useCallback(() => {
    var S;
    const R = Rc();
    R && ((S = A.event) != null && S.rcbLoadChatHistory && E(Ie.LOAD_CHAT_HISTORY, {}).defaultPrevented || (a(!0), Pf(
      A,
      i,
      R,
      u,
      g,
      C,
      a
    )));
  }, [A, i, u]);
  return { isLoadingChatHistory: v, setIsLoadingChatHistory: a, showChatHistory: m };
}, ap = () => {
  var A, i, u;
  const { settings: v } = Re(), { styles: a } = Ke(), { showChatHistory: g } = xA(), [E, C] = x.useState(!1), m = {
    color: (A = v.general) == null ? void 0 : A.primaryColor,
    borderColor: (i = v.general) == null ? void 0 : i.primaryColor,
    ...a.chatHistoryButtonStyle,
    // by default inherit the base style
    ...a.chatHistoryButtonHoveredStyle
  };
  return /* @__PURE__ */ f.jsx("div", { className: "rcb-view-history-container", children: /* @__PURE__ */ f.jsx(
    "div",
    {
      onMouseEnter: () => {
        C(!0);
      },
      onMouseLeave: () => {
        C(!1);
      },
      style: E ? m : a.chatHistoryButtonStyle,
      onMouseDown: (S) => {
        S.preventDefault(), g();
      },
      className: "rcb-view-history-button",
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ f.jsx("p", { children: (u = v.chatHistory) == null ? void 0 : u.viewChatHistoryButtonText })
    }
  ) });
}, Hc = () => {
  var A;
  const { settings: i } = Re(), { hasInteractedPage: u, setHasInteractedPage: v, hasFlowStarted: a, setHasFlowStarted: g } = vt(), E = x.useCallback(() => {
    var C;
    v(!0), !a && ((C = i.general) == null ? void 0 : C.flowStartTrigger) === "ON_PAGE_INTERACT" && g(!0);
    const m = new SpeechSynthesisUtterance();
    m.text = "", m.onend = () => {
      window.removeEventListener("click", E), window.removeEventListener("keydown", E), window.removeEventListener("touchstart", E);
    }, window.speechSynthesis.speak(m);
  }, [a, (A = i.general) == null ? void 0 : A.flowStartTrigger]);
  return {
    hasInteractedPage: u,
    handleFirstInteraction: E
  };
}, ip = () => {
  var A, i, u, v;
  const a = Ks(), { settings: g } = Re(), {
    endStreamMessage: E,
    injectMessage: C,
    removeMessage: m,
    streamMessage: S,
    messages: R,
    replaceMessages: k
  } = Ya(), { getCurrPath: I, getPrevPath: O, goToPath: N, paths: z } = Gi(), { showToast: M, dismissToast: B } = Ga(), {
    isBotTyping: K,
    isChatWindowOpen: ne,
    isScrolling: G,
    hasFlowStarted: _,
    setIsChatWindowOpen: V,
    setTextAreaDisabled: W,
    setAudioToggledOn: re,
    setVoiceToggledOn: te,
    setIsBotTyping: se,
    setTextAreaSensitiveMode: le,
    setBlockAllowsAttachment: X,
    setTimeoutId: fe
  } = vt(), { chatBodyRef: ue, flowRef: Be, streamMessageMap: Se, paramsInputRef: ee, keepVoiceOnRef: ce } = lt(), de = Be.current, { viewportHeight: xe, setViewportHeight: oe, setViewportWidth: ie, openChat: we } = Jn(), { setUpNotifications: ve } = yA(), { handleFirstInteraction: Ae } = Hc(), { showChatHistory: Me } = xA(), { updateTextAreaFocus: it, setTextAreaValue: At } = Go(), { syncVoice: nt } = Js(), me = x.useRef(0);
  x.useEffect(() => (window.addEventListener("click", Ae), window.addEventListener("keydown", Ae), window.addEventListener("touchstart", Ae), () => {
    window.removeEventListener("click", Ae), window.removeEventListener("keydown", Ae), window.removeEventListener("touchstart", Ae);
  }), []), x.useEffect(() => {
    var pe, je, ke;
    ve(), W((pe = g.chatInput) == null ? void 0 : pe.disabled), V((je = g.chatWindow) == null ? void 0 : je.defaultOpen), re((ke = g.audio) == null ? void 0 : ke.defaultToggledOn), setTimeout(() => {
      var Te;
      te((Te = g.voice) == null ? void 0 : Te.defaultToggledOn);
    }, 1);
  }, []), x.useEffect(() => {
    !G && ue != null && ue.current && (ue.current.scrollTop = ue.current.scrollHeight);
  }, [K]), x.useEffect(() => {
    var pe, je, ke, Te;
    if ((pe = g.chatHistory) != null && pe.disabled)
      localStorage.removeItem((je = g.chatHistory) == null ? void 0 : je.storageKey);
    else if (Df(g), localStorage.getItem((ke = g.chatHistory) == null ? void 0 : ke.storageKey) != null) {
      const Ge = Wo(/* @__PURE__ */ f.jsx(ap, {}), "system");
      k([Ge]), (Te = g.chatHistory) != null && Te.autoLoad && Me();
    }
  }, [(A = g.chatHistory) == null ? void 0 : A.storageKey, (i = g.chatHistory) == null ? void 0 : i.maxEntries, (u = g.chatHistory) == null ? void 0 : u.disabled]), x.useEffect(() => {
    var pe;
    a || (pe = g.general) != null && pe.embedded || !navigator.virtualKeyboard || (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (je) => {
      if (!je.target)
        return;
      const { x: ke, y: Te, width: Ge, height: Ue } = je.target.boundingRect;
      ke == 0 && Te == 0 && Ge == 0 && Ue == 0 ? (setTimeout(() => {
        var Ye;
        oe((Ye = window.visualViewport) == null ? void 0 : Ye.height);
      }, 101), setTimeout(() => {
        var Ye, et;
        xe != ((Ye = window.visualViewport) == null ? void 0 : Ye.height) && oe((et = window.visualViewport) == null ? void 0 : et.height);
      }, 1001)) : setTimeout(() => {
        var Ye;
        oe(((Ye = window.visualViewport) == null ? void 0 : Ye.height) - Ue);
      }, 101);
    }));
  }, [a]), x.useEffect(() => {
    var pe, je, ke, Te;
    if (a)
      return;
    ne && (oe((pe = window.visualViewport) == null ? void 0 : pe.height), ie((je = window.visualViewport) == null ? void 0 : je.width));
    const Ge = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), Ue = () => me.current = window.scrollY, Ye = () => {
      var gt, Ot;
      oe((gt = window.visualViewport) == null ? void 0 : gt.height), ie((Ot = window.visualViewport) == null ? void 0 : Ot.width);
    }, et = () => {
      var gt;
      window.removeEventListener("scroll", Ge), window.removeEventListener("scroll", Ue), (gt = window.visualViewport) == null || gt.removeEventListener("resize", Ye);
    };
    return ne ? (et(), document.body.style.position = "fixed", window.addEventListener("scroll", Ge), (ke = window.visualViewport) == null || ke.addEventListener("resize", Ye)) : (document.body.style.position = "static", et(), window.scrollTo({ top: me.current, left: 0, behavior: "auto" }), window.addEventListener("scroll", Ue), (Te = window.visualViewport) == null || Te.removeEventListener("resize", Ye)), et;
  }, [ne, a]), x.useEffect(() => {
    const pe = I();
    if (!pe)
      return;
    const je = de[pe];
    if (!je) {
      se(!1);
      return;
    }
    const ke = {
      prevPath: O(),
      currPath: I(),
      goToPath: N,
      setTextAreaValue: At,
      userInput: ee.current,
      endStreamMessage: E,
      injectMessage: C,
      removeMessage: m,
      streamMessage: S,
      openChat: we,
      showToast: M,
      dismissToast: B
    };
    (async (Te, Ge, Ue) => {
      var Ye;
      await mf(
        de,
        Te,
        Ue,
        W,
        le,
        N,
        fe
      ), se(!1), "chatDisabled" in Ge || W((Ye = g.chatInput) == null ? void 0 : Ye.disabled), X(typeof Ge.file == "function"), it(Te), nt(ce.current && !Ge.chatDisabled), Se.current.clear(), Fs(R);
    })(pe, je, ke);
  }, [z]), x.useEffect(() => {
    var pe;
    (_ || ((pe = g.general) == null ? void 0 : pe.flowStartTrigger) === "ON_LOAD") && N("start");
  }, [_, (v = g.general) == null ? void 0 : v.flowStartTrigger]);
}, sp = ({
  plugins: A
}) => {
  var i, u, v, a;
  A == null || A.map((G) => G());
  const g = Ks(), { settings: E } = Re(), { styles: C } = Ke(), { hasFlowStarted: m, setHasFlowStarted: S } = vt(), { inputRef: R } = lt(), {
    setChatScrollHeight: k,
    viewportHeight: I,
    viewportWidth: O,
    isChatWindowOpen: N
  } = Jn(), { headerButtons: z, chatInputButtons: M, footerButtons: B } = op();
  ip();
  const K = x.useMemo(() => {
    var G;
    const _ = "rcb-chatbot-global ";
    return (G = E.general) != null && G.embedded ? _ + "rcb-window-embedded" : N ? _ + "rcb-window-open" : _ + "rcb-window-close";
  }, [E, N]), ne = () => {
    var G;
    return !g && !((G = E.general) != null && G.embedded) ? {
      ...C.chatWindowStyle,
      borderRadius: "0px",
      left: "0px",
      right: "auto",
      top: "0px",
      bottom: "auto",
      width: `${O}px`,
      height: `${I}px`
    } : C.chatWindowStyle;
  };
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: (() => {
    var G, _;
    return g && ((G = E.device) == null ? void 0 : G.desktopEnabled) || !g && ((_ = E.device) == null ? void 0 : _.mobileEnabled);
  })() && /* @__PURE__ */ f.jsxs(
    "div",
    {
      onMouseDown: (G) => {
        var _, V;
        !m && ((_ = E.general) == null ? void 0 : _.flowStartTrigger) === "ON_CHATBOT_INTERACT" && S(!0), g ? (V = R.current) == null || V.blur() : G == null || G.preventDefault();
      },
      className: K,
      children: [
        /* @__PURE__ */ f.jsx(Uf, {}),
        /* @__PURE__ */ f.jsx(Hf, {}),
        N && !g && !((i = E.general) != null && i.embedded) && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx("style", { children: `
									html {
										overflow: hidden !important;
										touch-action: none !important;
										scroll-behavior: auto !important;
									}
								` }),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                zIndex: 9999
              }
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("div", { style: ne(), className: "rcb-chat-window", children: [
          ((u = E.general) == null ? void 0 : u.showHeader) && /* @__PURE__ */ f.jsx(Kd, { buttons: z }),
          /* @__PURE__ */ f.jsx(sf, { setChatScrollHeight: k }),
          ((v = E.general) == null ? void 0 : v.showInputRow) && /* @__PURE__ */ f.jsx(Nf, { buttons: M }),
          ((a = E.general) == null ? void 0 : a.showFooter) && /* @__PURE__ */ f.jsx(Lf, { buttons: B })
        ] })
      ]
    }
  ) });
}, SA = {
  DEFAULT_URL: "https://cdn.jsdelivr.net/gh/tjtanjin/react-chatbotify-themes/themes",
  DEFAULT_EXPIRATION: "2592000",
  CACHE_KEY_PREFIX: "RCB_THEME_CACHE_DATA"
}, lp = SA.DEFAULT_URL, Ap = SA.DEFAULT_EXPIRATION, Uc = SA.CACHE_KEY_PREFIX, cp = (A, i, u) => {
  const v = localStorage.getItem(`${Uc}_${A}_${i}`);
  if (!v)
    return null;
  try {
    const a = JSON.parse(v), g = (/* @__PURE__ */ new Date()).getTime(), E = Math.floor(g / 1e3);
    return a.cacheDate + u >= E ? a : null;
  } catch (a) {
    return console.error(`Unable to fetch cache for ${A}`, a), null;
  }
}, up = (A, i, u, v, a) => {
  const g = (/* @__PURE__ */ new Date()).getTime(), E = Math.floor(g / 1e3), C = {
    settings: u,
    inlineStyles: v,
    cssStylesText: a,
    cacheDate: E
  };
  localStorage.setItem(`${Uc}_${A}_${i}`, JSON.stringify(C));
}, dp = async (A, i) => {
  const u = `${i}/${A}/meta.json`;
  try {
    const v = await fetch(u);
    return v.ok ? (await v.json()).version : (console.error(`Failed to fetch meta.json from ${u}`), null);
  } catch (v) {
    return console.error(`Failed to fetch meta.json from ${u}`, v), null;
  }
}, WA = async (A, i) => {
  const { id: u, version: v, baseUrl: a = lp, cacheDuration: g = Ap } = i, E = v || await dp(u, a);
  if (!E)
    return console.error(`Unable to find version for theme: ${u}`), { settings: {}, inlineStyles: {}, cssStylesText: "" };
  const C = cp(u, E, g);
  if (C) {
    const K = _A(A, C.cssStylesText);
    return { settings: C.settings, inlineStyles: C.inlineStyles, cssStylesText: K };
  }
  const m = `${a}/${u}/${E}/styles.css`, S = `${a}/${u}/${E}/settings.json`, R = `${a}/${u}/${E}/styles.json`;
  let k = "";
  const I = await fetch(m);
  I.ok ? k = await I.text() : console.info(`Could not fetch styles.css from ${m}`);
  const O = await fetch(S);
  let N = {};
  O.ok ? N = await O.json() : console.info(`Could not fetch settings.json from ${S}`);
  const z = await fetch(R);
  let M = {};
  z.ok ? M = await z.json() : console.info(`Could not fetch styles.json from ${R}`), up(u, E, N, M, k);
  const B = _A(A, k);
  return { settings: N, inlineStyles: M, cssStylesText: B };
}, _A = (A, i) => i.split(new RegExp("(?<=})")).map((u) => {
  const v = u.trim();
  return v.startsWith("@import") || v.startsWith("@keyframes") || v.startsWith("@media") ? v : v ? `#${A} ${v}` : "";
}).join(`
`), CA = () => $s(gc), zc = () => $s(yc), fp = async (A, i, u, v) => {
  var a, g;
  let E = CA(), C = zc(), m = "";
  if (v != null)
    if (Array.isArray(v))
      for (const S of v) {
        const R = await WA(A, S);
        E = no(R.settings, E), C = no(R.inlineStyles, C), m += R.cssStylesText;
      }
    else {
      const S = await WA(A, v);
      E = no(S.settings, E), C = no(S.inlineStyles, C), m += S.cssStylesText;
    }
  return i != null && (E = no(i, E)), u != null && (C = no(u, C)), ((a = E.chatInput) == null ? void 0 : a.botDelay) != null && ((g = E.chatInput) == null ? void 0 : g.botDelay) < 500 && (E.chatInput.botDelay = 500), { settings: E, inlineStyles: C, cssStylesText: m };
}, no = (A, i) => {
  const u = [{ source: A, target: i }];
  for (; u.length; ) {
    const v = u.pop();
    if (v == null)
      continue;
    const { source: a, target: g } = v;
    for (const E of Object.keys(a)) {
      const C = E;
      if (x.isValidElement(a[C]))
        g[C] = a[C];
      else if (typeof a[C] == "object" && a[C] !== null && !Array.isArray(a[C]))
        u.push({ source: a[C], target: g[C] });
      else
        try {
          g[C] = a[C];
        } catch {
        }
    }
  }
  return i;
}, $s = (A) => {
  if (A === null || typeof A != "object")
    return A;
  const i = Array.isArray(A) ? [] : {}, u = [{ source: A, target: i }], v = /* @__PURE__ */ new WeakMap();
  for (v.set(A, i); u.length; ) {
    const a = u.pop();
    if (a == null)
      continue;
    const { source: g, target: E } = a;
    for (const C in g)
      if (Object.prototype.hasOwnProperty.call(g, C)) {
        const m = g[C];
        if (m && typeof m == "object")
          if (v.has(m))
            E[C] = v.get(m);
          else {
            const S = Array.isArray(m) ? [] : {};
            v.set(m, S), E[C] = S, u.push({ source: m, target: S });
          }
        else
          E[C] = m;
      }
  }
  return i;
}, Wc = x.createContext(void 0), _c = () => x.useContext(Wc), Zc = ({
  children: A
}) => {
  var i;
  const u = x.useRef(""), v = x.useRef({}), [a, g] = x.useState({}), [E, C] = x.useState({}), [m, S] = x.useState(!1);
  x.useEffect(() => {
    S(!0);
  }, []);
  const R = async (k, I, O, N, z, M) => {
    u.current = k, v.current = I;
    const B = await fp(k, O, N, z);
    M.current && (M.current.textContent = B.cssStylesText), g(B.settings), C(B.inlineStyles);
  };
  return m ? /* @__PURE__ */ f.jsx("div", { style: { fontFamily: (i = a.general) == null ? void 0 : i.fontFamily }, children: /* @__PURE__ */ f.jsx(Wc.Provider, { value: { loadConfig: R }, children: /* @__PURE__ */ f.jsx(Vd, { settings: a, setSettings: g, children: /* @__PURE__ */ f.jsx(Jd, { styles: E, setStyles: C, children: /* @__PURE__ */ f.jsx(rf, { children: /* @__PURE__ */ f.jsx($d, { botIdRef: u, flowRef: v, children: /* @__PURE__ */ f.jsx(nf, { children: /* @__PURE__ */ f.jsx(qd, { settings: a, children: /* @__PURE__ */ f.jsx(af, { children: A }) }) }) }) }) }) }) }) }) : null;
}, pp = ({
  id: A,
  flow: i,
  settings: u,
  styles: v,
  themes: a,
  plugins: g,
  setConfigLoaded: E,
  styleRootRef: C
}) => {
  const m = x.useMemo(() => A, []), S = _c(), { flowRef: R } = lt();
  R && R.current !== i && (R.current = i);
  const k = async () => {
    var I, O;
    (I = u.event) != null && I.rcbPreLoadChatBot && Zs(
      Ie.PRE_LOAD_CHATBOT,
      { botId: m, currPath: null, prevPath: null },
      {
        flow: i,
        settings: u,
        styles: v,
        themes: a,
        plugins: g
      }
    ).defaultPrevented || (S != null && S.loadConfig && (await S.loadConfig(m, i, u, v, a, C), E(!0)), (O = u.event) != null && O.rcbPostLoadChatBot && Zs(
      Ie.POST_LOAD_CHATBOT,
      { botId: m, currPath: null, prevPath: null },
      {
        flow: i,
        settings: u,
        styles: v,
        themes: a,
        plugins: g
      }
    ));
  };
  return x.useEffect(() => {
    k();
  }, [a]), null;
}, $l = ["Quickstart", "API Docs", "Examples", "Github", "Discord"], hp = {
  start: {
    message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
    transition: { duration: 1e3 },
    chatDisabled: !0,
    path: "show_options"
  },
  show_options: {
    message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
    options: $l,
    path: "process_options"
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: $l,
    path: "process_options"
  },
  unknown_input: {
    message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
    options: $l,
    path: "process_options"
  },
  process_options: {
    transition: { duration: 0 },
    path: (A) => {
      let i = "";
      switch (A.userInput) {
        case "Quickstart":
          i = "https://react-chatbotify.com/docs/introduction/quickstart/";
          break;
        case "API Docs":
          i = "https://react-chatbotify.com/docs/api/bot_options";
          break;
        case "Examples":
          i = "https://react-chatbotify.com/docs/examples/basic_form";
          break;
        case "Github":
          i = "https://github.com/tjtanjin/react-chatbotify/";
          break;
        case "Discord":
          i = "https://discord.gg/6R4DK4G5Zh";
          break;
        default:
          return "unknown_input";
      }
      return A.injectMessage("Sit tight! I'll send you right there!"), setTimeout(() => {
        window.open(i);
      }, 1e3), "repeat";
    }
  },
  repeat: {
    transition: { duration: 3e3 },
    path: "prompt_again"
  }
}, vp = ({
  id: A,
  flow: i,
  settings: u,
  styles: v,
  themes: a,
  plugins: g
}) => {
  const E = x.useMemo(() => A || "rcb-" + _s(), []), C = !i || Object.keys(i).length === 0 ? hp : i, m = u || {}, S = v || {}, R = g || [], [k, I] = x.useState(!1), O = _c(), N = x.useRef(null), [z, M] = x.useState(a || []);
  x.useEffect(() => {
    a && M(a);
  }, [a]);
  const B = () => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(
      pp,
      {
        styleRootRef: N,
        id: E,
        flow: C,
        settings: m,
        styles: S,
        themes: z,
        plugins: R,
        setConfigLoaded: I
      }
    ),
    k && /* @__PURE__ */ f.jsx(sp, { plugins: g })
  ] });
  return O == null ? /* @__PURE__ */ f.jsxs(Zc, { children: [
    /* @__PURE__ */ f.jsx("style", { ref: N }),
    /* @__PURE__ */ f.jsx("div", { id: E, children: B() })
  ] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("style", { ref: N }),
    /* @__PURE__ */ f.jsx("div", { id: E, children: B() })
  ] });
}, gp = () => {
  const { audioToggledOn: A, toggleAudio: i } = Nc();
  return {
    audioToggledOn: A,
    toggleAudio: i
  };
}, mp = () => {
  const { botIdRef: A } = lt();
  return {
    getBotId: () => A.current
  };
}, yp = () => {
  const { getBotId: A } = mp();
  return {
    getBotId: A
  };
}, bp = () => {
  const { isChatWindowOpen: A, toggleChatWindow: i } = Jn();
  return {
    isChatWindowOpen: A,
    toggleChatWindow: i
  };
}, wp = () => {
  const { hasInteractedPage: A } = Hc();
  return {
    hasInteractedPage: A
  };
}, xp = () => {
  const { replaceMessages: A } = Ya(), { replacePaths: i } = Gi(), { replaceToasts: u } = Ga(), { hasFlowStarted: v } = vt(), { flowRef: a } = lt();
  return {
    hasFlowStarted: v,
    restartFlow: () => {
      A([]), u([]), i(["start"]);
    },
    getFlow: () => a.current ?? {}
  };
}, Sp = () => {
  const { hasFlowStarted: A, restartFlow: i, getFlow: u } = xp();
  return {
    hasFlowStarted: A,
    restartFlow: i,
    getFlow: u
  };
}, Cp = () => {
  const {
    endStreamMessage: A,
    injectMessage: i,
    removeMessage: u,
    streamMessage: v,
    messages: a,
    replaceMessages: g
  } = Ya();
  return {
    endStreamMessage: A,
    injectMessage: i,
    removeMessage: u,
    streamMessage: v,
    messages: a,
    replaceMessages: g
  };
}, Ep = () => {
  const { settings: A, setSettings: i } = Re();
  return {
    settings: A,
    replaceSettings: (u) => {
      i(u);
    },
    updateSettings: (u) => {
      i($s(no(u, A)));
    }
  };
}, Dp = () => {
  const { settings: A, replaceSettings: i, updateSettings: u } = Ep();
  return {
    settings: A,
    replaceSettings: i,
    updateSettings: u
  };
}, Tp = () => {
  const { styles: A, setStyles: i } = Ke();
  return {
    styles: A,
    replaceStyles: (u) => {
      i(u);
    },
    updateStyles: (u) => {
      i($s(no(u, A)));
    }
  };
}, Pp = () => {
  const { styles: A, replaceStyles: i, updateStyles: u } = Tp();
  return {
    styles: A,
    replaceStyles: i,
    updateStyles: u
  };
}, kp = () => {
  lt();
  const {
    textAreaDisabled: A,
    toggleTextAreaDisabled: i,
    textAreaSensitiveMode: u,
    toggleTextAreaSensitiveMode: v,
    getTextAreaValue: a,
    setTextAreaValue: g,
    focusTextArea: E
  } = Go();
  return {
    textAreaDisabled: A,
    toggleTextAreaDisabled: i,
    textAreaSensitiveMode: u,
    toggleTextAreaSensitiveMode: v,
    getTextAreaValue: a,
    setTextAreaValue: g,
    focusTextArea: E
  };
}, Bp = () => {
  const { showToast: A, dismissToast: i, toasts: u, replaceToasts: v } = Ga();
  return {
    showToast: A,
    dismissToast: i,
    toasts: u,
    replaceToasts: v
  };
}, Ip = () => {
  const { voiceToggledOn: A, toggleVoice: i } = Js();
  return {
    voiceToggledOn: A,
    toggleVoice: i
  };
}, Rp = () => {
  const { showChatHistory: A } = xA();
  return {
    showChatHistory: A,
    getHistoryMessages: Rc,
    setHistoryMessages: Mc
  };
}, Mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: qe,
  ChatBotProvider: Zc,
  default: vp,
  getDefaultSettings: CA,
  getDefaultStyles: zc,
  useAudio: gp,
  useBotId: yp,
  useChatHistory: Rp,
  useChatWindow: bp,
  useFirstInteraction: wp,
  useFlow: Sp,
  useMessages: Cp,
  useNotifications: Lc,
  usePaths: Cc,
  useSettings: Dp,
  useStyles: Pp,
  useTextArea: kp,
  useToasts: Bp,
  useVoice: Ip
}, Symbol.toStringTag, { value: "Module" }));
function jp({ onClick: A }) {
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      title: "Send",
      className: "bg-foreground hover:bg-foreground/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer text-primary-foreground",
      onClick: A,
      children: /* @__PURE__ */ f.jsx(yu, {})
    }
  );
}
const Gc = x.forwardRef(
  ({ className: A, ...i }, u) => /* @__PURE__ */ f.jsx(
    "textarea",
    {
      className: Ee(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        A
      ),
      ref: u,
      ...i
    }
  )
);
Gc.displayName = "Textarea";
function Qp({
  open: A,
  setOpen: i,
  balance: u,
  address: v,
  tokenType: a,
  defaultTo: g,
  defaultAmount: E,
  defaultNote: C,
  onClose: m
}) {
  const [S, R] = x.useState(""), [k, I] = x.useState(""), [O, N] = x.useState(""), [z, M] = x.useState(!1), [B, K] = x.useState(""), ne = x.useRef(), [G, _] = x.useState(!1), [V, W] = x.useState(!1), [re, te] = x.useState(""), [se, le] = x.useState(""), { t: X } = Zi();
  x.useEffect(() => {
    if (A) {
      const ie = zi.getInstance().createToken(a);
      ne.current = ie, K(ne.current.symbol);
    }
  }, [A]), x.useEffect(() => {
    A && (g && R(g), E && I(E), C && N(C));
  }, [g, E, C, A]), x.useEffect(() => {
    !A && m && m();
  }, [A]);
  const fe = x.useMemo(() => !S || !k || z || !V || G || !!se && se !== X("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(k) > parseFloat(u), [S, k, z, V, G, se, u]), ue = async (ie) => {
    if (kA(S))
      W(!0), te(""), le("");
    else {
      _(!0), le("");
      try {
        const we = await kn.get("/address/", {
          params: { email: ie }
        });
        we.data.success ? (W(!0), te(we.data.address)) : RA.test(ie) ? (W(!0), te(""), le(X("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (W(!1), te(""), le(X("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        _(!1);
      }
    }
  }, Be = () => {
    We("to", S), S ? ue(S) : (W(!1), te(""), le(""));
  };
  async function Se(ie) {
    try {
      const we = nA(k).toString();
      We("amt", we), M(!0);
      const {
        needOtp: ve,
        hash: Ae,
        message: Me
      } = await pc.signTransaction({
        toAddress: ie,
        amount: we,
        token: a,
        note: O,
        transactionType: vA.TRANSFER
      });
      Ae ? (i(!1), ce(Ae)) : ve && (Xt.error(Me), i(!1));
    } catch (we) {
      const ve = oA(we);
      We("errorInfo", ve), Xt.error(ve.message);
    } finally {
      M(!1);
    }
  }
  const ee = (ie) => {
    var ve;
    const we = `${(ve = ne.current) == null ? void 0 : ve.openUrl}/${ie}`;
    window.open(we, "_blank");
  }, ce = (ie) => {
    Xt(
      /* @__PURE__ */ f.jsx("div", { className: "w-full", children: /* @__PURE__ */ f.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ f.jsx(tA, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ f.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ f.jsx(
            Yn,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                ee(ie);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, de = async (ie) => {
    if (ie.preventDefault(), !fe)
      try {
        M(!0);
        let we, ve;
        if (kA(S))
          we = S;
        else if (RA.test(S) && se === X("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          ve = S;
          const Ae = await kn.post("/invite/invite-register", {
            toEmail: ve,
            from: v,
            amount: nA(k).toString(),
            token: a,
            note: O
          });
          We("res", Ae), Xt.success(X("/dashboard.[token].sendModal.emailSentToUnregistered")), oe(), i(!1);
          return;
        } else
          we = re;
        await Se(we), oe(), i(!1);
      } catch (we) {
        const ve = oA(we);
        We("errorInfo", ve), Xt.error(X("/dashboard.[token].sendModal.sendError"));
      } finally {
        M(!1);
      }
  }, xe = async () => {
    I(u);
  }, oe = () => {
    I(""), R(""), N(""), te(""), le(""), W(!1), _(!1);
  };
  return /* @__PURE__ */ f.jsx(Hs, { open: A, onOpenChange: (ie) => {
    i(ie), oe();
  }, children: /* @__PURE__ */ f.jsxs(Hi, { className: "w-[360px] text-primary", children: [
    /* @__PURE__ */ f.jsx(Ui, { className: "mb-4", children: X("/dashboard.[token].sendModal.title") }),
    /* @__PURE__ */ f.jsxs(
      "form",
      {
        onSubmit: (ie) => de(ie),
        children: [
          /* @__PURE__ */ f.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ f.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: X("/dashboard.[token].sendModal.to") }),
            /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ f.jsx(
                Ws,
                {
                  value: S,
                  onChange: (ie) => R(ie.target.value.trim()),
                  onBlur: Be,
                  id: "to",
                  required: !0,
                  placeholder: X("/dashboard.[token].sendModal.toPlaceholder"),
                  className: Ee(
                    V && "border-green-500",
                    se && "border-destructive",
                    se === X("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                    "pr-10"
                  )
                }
              ),
              G && /* @__PURE__ */ f.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ f.jsx(bu, { className: "animate-spin", size: 16 }) }),
              V && !G && !se && /* @__PURE__ */ f.jsx(tA, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
              se && !G && /* @__PURE__ */ f.jsx(wu, { className: Ee(
                "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
                se === X("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
              ), size: 16 })
            ] }),
            V && re && /* @__PURE__ */ f.jsx("p", { className: "mt-1 text-xs text-primary/60", children: re }),
            se && /* @__PURE__ */ f.jsx("p", { className: Ee(
              "mt-1 text-xs text-destructive",
              se === X("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
            ), children: se })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ f.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: X("/dashboard.[token].sendModal.amount") }),
              /* @__PURE__ */ f.jsxs("p", { className: "text-xs mb-2 text-primary/60", children: [
                X("/dashboard.[token].sendModal.balance"),
                ": ",
                Ac(u),
                " ",
                B
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ f.jsx(
                Ws,
                {
                  value: k,
                  onChange: (ie) => I(ie.target.value.trim()),
                  type: "number",
                  id: "amount",
                  className: "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                  required: !0
                }
              ),
              /* @__PURE__ */ f.jsx(
                "p",
                {
                  className: "absolute end-2.5 bottom-2.5 cursor-pointer text-brand-foreground",
                  onClick: () => xe(),
                  children: "Max"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ f.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: X("/dashboard.[token].sendModal.note") }),
            /* @__PURE__ */ f.jsx("div", { className: "relative", children: /* @__PURE__ */ f.jsx(
              Gc,
              {
                className: " focus-visible:ring-0",
                id: "note",
                value: O,
                onChange: (ie) => N(ie.target.value)
              }
            ) })
          ] }),
          /* @__PURE__ */ f.jsx(
            Yn,
            {
              className: Ee(
                "w-full"
              ),
              disabled: fe,
              children: z ? /* @__PURE__ */ f.jsx("div", { className: "", children: /* @__PURE__ */ f.jsx(iA, {}) }) : /* @__PURE__ */ f.jsx("span", { children: X("/dashboard.[token].sendModal.title") })
            }
          )
        ]
      }
    )
  ] }) });
}
const Op = x.lazy(() => Promise.resolve().then(() => Mp)), Yc = CA(), Fp = x.createContext({
  settings: Yc,
  setSettings: () => {
  }
});
function Np() {
  const [A, i] = x.useState(""), [u, v] = x.useState(""), [a, g] = x.useState(!1), [E, C] = x.useState(!1), [m, S] = x.useState({
    ...Yc,
    voice: {
      disabled: !0
    },
    fileAttachment: {
      disabled: !0
    },
    emoji: {
      disabled: !0
    },
    chatHistory: {
      disabled: !0
    },
    header: {
      title: "Vastlink Bot",
      avatar: "/imgs/logos/logo.svg"
    },
    notification: {
      disabled: !0
    },
    tooltip: {
      mode: "NEVER",
      text: "Talk to me 🚀"
    },
    general: {
      showFooter: !1
    },
    chatButton: {
      icon: "/imgs/logos/chatbot.svg"
    }
  }), [R, k] = x.useState(!1), [I, O] = x.useState({});
  x.useEffect(() => {
    k(!0);
  }, []);
  const N = async (K) => {
    const { address: ne } = gn.all();
    i(ne);
    let _ = await zi.getInstance().createToken(K).getBalance(ne);
    _ = Ac(_), v(_);
  }, z = async (K) => {
    We("handleQuestion params", K);
    const ne = await kn.post("/ai/chat", {
      question: K.userInput
    }), {
      action: G,
      coin: _,
      amount: V,
      to: W
    } = ne.data;
    G ? (O({
      action: G,
      toEmail: W,
      token: _,
      amount: V
    }), await N(_), C(!0)) : O({
      action: "other",
      answer: ne.data
    });
  }, M = {
    start: {
      message: "Welcome! I can help you transfer cryptocurrencies. You can send ETH, MATIC, or TVWT to any email address. For example, you can say: 'Send 0.01 ETH to example@gmail.com'. How can I assist you today?",
      function: z,
      path: "transfer"
    },
    transfer: {
      message: (K) => {
        if (We("end", I), I.action === "transfer")
          return "Your transfer request has been processed. Click the button below to open the transfer confirmation dialog.";
        if (I.action === "other")
          return I.answer;
      },
      function: z,
      component: (K) => {
        if (I.action === "transfer")
          return We(E, A, u, I.token, I.toEmail, I.amount), /* @__PURE__ */ f.jsx("div", { className: "pl-4 pt-2", children: E && A && u && I.token && I.toEmail && I.amount && /* @__PURE__ */ f.jsx(jp, { onClick: () => g(!0) }) });
      },
      // chatDisabled: true,
      path: "transfer"
    }
  }, B = {
    botBubbleStyle: {
      backgroundColor: "#333"
    },
    headerStyle: {
      backgroundImage: "linear-gradient(to right, #333, rgb(66, 176, 197))"
    },
    chatButtonStyle: {
      background: "#fff",
      borderRadius: "50%",
      width: "44px",
      height: "44px"
    },
    chatIconStyle: {
      // backgroundImage: `url('/imgs/logos/chatbot.png')`,
      width: "44px",
      height: "44px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain"
    },
    tooltipStyle: {
      background: "rgb(66, 176, 197)"
    },
    sendButtonHoveredStyle: {
      background: "rgba(66, 176, 197, 0.8)"
    }
  };
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: R && /* @__PURE__ */ f.jsx(x.Suspense, { fallback: null, children: /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(Fp.Provider, { value: { settings: m, setSettings: S }, children: /* @__PURE__ */ f.jsx(Op, { settings: m, flow: M, styles: B }) }),
    /* @__PURE__ */ f.jsx(
      Qp,
      {
        open: a,
        setOpen: g,
        balance: u,
        address: A,
        tokenType: I.token,
        defaultTo: I.toEmail,
        defaultAmount: I.amount,
        defaultNote: "",
        onClose: () => {
          i(""), v("");
        }
      }
    )
  ] }) }) });
}
function Lp() {
  return /* @__PURE__ */ f.jsxs("section", { className: "bg-background w-full flex flex-col min-h-screen", children: [
    /* @__PURE__ */ f.jsx(yd, {}),
    /* @__PURE__ */ f.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ f.jsx(lu, {}) }),
    /* @__PURE__ */ f.jsx(Np, {})
  ] });
}
function ql() {
  const A = Au();
  return console.error(A), /* @__PURE__ */ f.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ f.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ f.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ f.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ f.jsx("p", { className: "text-lg text-gray-600 italic", children: A.statusText || A.message })
  ] }) });
}
const Hp = cu([
  {
    path: "/",
    element: /* @__PURE__ */ f.jsx(uu, { to: "/auth", replace: !0 }),
    errorElement: /* @__PURE__ */ f.jsx(ql, {})
  },
  {
    path: "/auth",
    element: /* @__PURE__ */ f.jsx(ju, {}),
    errorElement: /* @__PURE__ */ f.jsx(ql, {})
  },
  {
    path: "/verify-transaction",
    element: /* @__PURE__ */ f.jsx(Yu, {})
  },
  {
    path: "/verify-registration",
    element: /* @__PURE__ */ f.jsx(Xu, {})
  },
  {
    path: "/",
    element: /* @__PURE__ */ f.jsx(Lp, {}),
    errorElement: /* @__PURE__ */ f.jsx(ql, {}),
    children: [
      {
        path: "/dashboard",
        children: [
          {
            index: !0,
            element: /* @__PURE__ */ f.jsx(Qu, {})
          },
          {
            path: ":token",
            element: /* @__PURE__ */ f.jsx(Ou, {})
          }
        ]
      },
      {
        path: "/marketplace",
        children: [
          {
            index: !0,
            element: /* @__PURE__ */ f.jsx(Fu, {})
          },
          {
            path: "search-result",
            element: /* @__PURE__ */ f.jsx(Lu, {})
          },
          {
            path: "feature-detail/:productId",
            element: /* @__PURE__ */ f.jsx(Hu, {})
          },
          {
            path: "multisig-setting",
            element: /* @__PURE__ */ f.jsx(Nu, {})
          },
          {
            path: "kyb-proxy",
            element: /* @__PURE__ */ f.jsx(Uu, {})
          },
          {
            path: "kyb-self",
            element: /* @__PURE__ */ f.jsx(zu, {})
          },
          {
            path: "product-flow",
            children: [
              {
                path: "kyb",
                children: [
                  {
                    path: "starting",
                    element: /* @__PURE__ */ f.jsx(Wu, {})
                  },
                  {
                    path: "ending",
                    element: /* @__PURE__ */ f.jsx(_u, {})
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "/invite",
    children: [
      {
        path: "transfer",
        element: /* @__PURE__ */ f.jsx(Zu, {})
      },
      {
        path: "register",
        element: /* @__PURE__ */ f.jsx(Gu, {})
      }
    ]
  }
]);
function Up() {
  const [A, i] = x.useState(!1);
  return x.useEffect(() => {
    const u = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    i(u);
  }, []), /* @__PURE__ */ f.jsx(
    xu,
    {
      position: "top-center",
      autoClose: 5e3,
      hideProgressBar: !0,
      newestOnTop: !1,
      closeOnClick: !1,
      rtl: !1,
      pauseOnFocusLoss: !0,
      draggable: !1,
      pauseOnHover: !0,
      closeButton: !1,
      transition: Su,
      style: A ? void 0 : {
        width: "auto",
        maxWidth: "400px"
      }
    }
  );
}
var EA = "moonpay-react-sdk-embedded-frame", zp = ({
  props: A,
  apiKey: i,
  debug: u,
  environment: v,
  signature: a
}) => {
  const {
    // params
    currencyCode: g,
    defaultCurrencyCode: E,
    walletAddress: C,
    walletAddressTag: m,
    walletAddresses: S,
    walletAddressTags: R,
    colorCode: k,
    theme: I,
    themeId: O,
    language: N,
    baseCurrencyCode: z,
    baseCurrencyAmount: M,
    quoteCurrencyAmount: B,
    lockAmount: K,
    email: ne,
    externalTransactionId: G,
    externalCustomerId: _,
    paymentMethod: V,
    redirectURL: W,
    showAllCurrencies: re,
    showOnlyCurrencies: te,
    showWalletAddressForm: se,
    unsupportedRegionRedirectUrl: le,
    skipUnsupportedRegionScreen: X,
    baseOrigin: fe,
    // handlers
    onAuthToken: ue,
    onInitiateDeposit: Be,
    onKmsWalletsCreated: Se,
    onLogin: ee,
    onTransactionCompleted: ce,
    onUnsupportedRegion: de,
    onSwapsCustomerSetupComplete: xe,
    onCloseOverlay: oe,
    onTransactionCreated: ie,
    // auth
    auth: we,
    useWarnBeforeRefresh: ve,
    // other
    overlayNode: Ae
  } = A, Me = {
    apiKey: i,
    signature: a,
    currencyCode: g,
    defaultCurrencyCode: E,
    walletAddress: C,
    walletAddressTag: m,
    walletAddresses: S,
    walletAddressTags: R,
    colorCode: k,
    theme: I,
    themeId: O,
    language: N,
    baseCurrencyCode: z,
    baseCurrencyAmount: M,
    quoteCurrencyAmount: B,
    lockAmount: K,
    email: ne,
    externalTransactionId: G,
    externalCustomerId: _,
    paymentMethod: V,
    redirectURL: W,
    showAllCurrencies: re,
    showOnlyCurrencies: te,
    showWalletAddressForm: se,
    unsupportedRegionRedirectUrl: le,
    skipUnsupportedRegionScreen: X,
    baseOrigin: fe
  }, it = {
    onAuthToken: ue,
    onInitiateDeposit: Be,
    onKmsWalletsCreated: Se,
    onLogin: ee,
    onTransactionCompleted: ce,
    onUnsupportedRegion: de,
    onSwapsCustomerSetupComplete: xe,
    onCloseOverlay: oe,
    onTransactionCreated: ie
  };
  return {
    flow: "buy",
    variant: A.variant,
    environment: v,
    params: Me,
    debug: u,
    handlers: it,
    auth: we,
    useWarnBeforeRefresh: ve,
    containerNodeSelector: `#${EA}`,
    overlayNode: Ae
  };
}, Wp = ({
  props: A,
  apiKey: i,
  debug: u,
  environment: v,
  signature: a
}) => {
  const {
    // params
    quoteCurrencyCode: g,
    defaultCurrencyCode: E,
    defaultBaseCurrencyCode: C,
    walletAddress: m,
    walletAddressTag: S,
    walletAddresses: R,
    walletAddressTags: k,
    colorCode: I,
    theme: O,
    themeId: N,
    language: z,
    baseCurrencyCode: M,
    baseCurrencyAmount: B,
    quoteCurrencyAmount: K,
    lockAmount: ne,
    email: G,
    externalTransactionId: _,
    externalCustomerId: V,
    paymentMethod: W,
    redirectURL: re,
    showAllCurrencies: te,
    showOnlyCurrencies: se,
    showWalletAddressForm: le,
    unsupportedRegionRedirectUrl: X,
    skipUnsupportedRegionScreen: fe,
    mpWalletId: ue,
    baseOrigin: Be,
    // handlers
    onAuthToken: Se,
    onInitiateDeposit: ee,
    onKmsWalletsCreated: ce,
    onLogin: de,
    onTransactionCompleted: xe,
    onUnsupportedRegion: oe,
    onSwapsCustomerSetupComplete: ie,
    onCloseOverlay: we,
    onTransactionCreated: ve,
    // auth
    auth: Ae,
    useWarnBeforeRefresh: Me
  } = A, it = {
    apiKey: i,
    signature: a,
    quoteCurrencyCode: g,
    defaultCurrencyCode: E,
    defaultBaseCurrencyCode: C,
    walletAddress: m,
    walletAddressTag: S,
    walletAddresses: R,
    walletAddressTags: k,
    colorCode: I,
    theme: O,
    themeId: N,
    language: z,
    baseCurrencyCode: M,
    baseCurrencyAmount: B,
    quoteCurrencyAmount: K,
    lockAmount: ne,
    email: G,
    externalTransactionId: _,
    externalCustomerId: V,
    paymentMethod: W,
    redirectURL: re,
    showAllCurrencies: te,
    showOnlyCurrencies: se,
    showWalletAddressForm: le,
    unsupportedRegionRedirectUrl: X,
    skipUnsupportedRegionScreen: fe,
    mpWalletId: ue,
    baseOrigin: Be
  }, At = {
    onAuthToken: Se,
    onInitiateDeposit: ee,
    onKmsWalletsCreated: ce,
    onLogin: de,
    onTransactionCompleted: xe,
    onUnsupportedRegion: oe,
    onSwapsCustomerSetupComplete: ie,
    onCloseOverlay: we,
    onTransactionCreated: ve
  };
  return {
    flow: "sell",
    variant: A.variant,
    environment: v,
    params: it,
    debug: u,
    handlers: At,
    auth: Ae,
    useWarnBeforeRefresh: Me,
    containerNodeSelector: `#${EA}`
  };
};
async function _p(A = "v1") {
  return new Promise((i, u) => {
    const v = `https://static.moonpay.com/web-sdk/${A}/moonpay-web-sdk.min.js`, a = document.querySelector(`script[src="${v}"]`), g = (E = 0) => {
      if (window.MoonPayWebSdk) {
        i(window.MoonPayWebSdk.init);
        return;
      }
      if (E > 100) {
        u(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => g(E + 1), 100);
    };
    if (a)
      g();
    else {
      const E = document.createElement("script");
      E.async = !0, E.src = v, E.addEventListener("load", () => {
        var C;
        i((C = window.MoonPayWebSdk) == null ? void 0 : C.init);
      }), E.addEventListener("error", () => {
        u(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(E);
    }
  });
}
function Zp(A) {
  return A.startsWith("pk_live") || A.startsWith("sk_live") ? "production" : "sandbox";
}
var eA = () => {
}, Gp = {
  info: eA,
  warn: eA,
  error: eA
}, Yp = class Xc {
  constructor({
    logger: i,
    prefix: u
  }) {
    ot(this, "prefix");
    ot(this, "logger");
    this.logger = i, this.prefix = u ?? ["Logger"];
  }
  if(i) {
    return i ? this : new Xc({ logger: Gp });
  }
  info(...i) {
    this.logger.info(`[${this.prefix}]`, ...i);
  }
  warn(...i) {
    this.logger.warn(`[${this.prefix}]`, ...i);
  }
  error(...i) {
    this.logger.error(`[${this.prefix}]`, ...i);
  }
}, qs = x.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), Xp = ({
  children: A,
  apiKey: i,
  debug: u = !1
}) => {
  const v = Zp(i), [a, g] = x.useState({
    apiKey: i,
    environment: v,
    debug: u
  }), E = x.useCallback(async () => {
    const C = await _p();
    g((m) => ({ ...m, init: C }));
  }, []);
  return x.useEffect(() => {
    a.init || E();
  }, [E, a.init]), /* @__PURE__ */ f.jsx(qs.Provider, { value: a, children: A });
}, Vp = class extends Yp {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, Jp = (A, i, u) => {
  const v = x.useRef(null), { init: a, debug: g } = x.useContext(qs), E = x.useRef(new Vp().if(g || !1)), C = x.useCallback(async () => {
    var m, S;
    if (v.current) {
      if (!u && ("walletAddress" in A || "walletAddresses" in A) && E.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), u) {
        const R = v.current.generateUrlForSigning();
        try {
          const k = await (u == null ? void 0 : u(R));
          if (!k)
            return;
          (m = v.current) == null || m.updateSignature(k);
        } catch (k) {
          E.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            k
          );
        }
      }
      i && ((S = v.current) == null || S.show());
    }
  }, [u, i, A]);
  x.useEffect(() => {
    v.current && v.current.close();
    const m = (a == null ? void 0 : a(A)) || null;
    v.current = m, C();
  }, [a, A, C]);
}, Kp = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function Vc({
  config: A,
  onUrlSignatureRequested: i,
  visible: u = !0,
  className: v,
  style: a
}) {
  return Jp(A, u, i), u ? /* @__PURE__ */ f.jsx(
    "div",
    {
      id: EA,
      className: v,
      style: A.variant === "embedded" ? {
        ...Kp,
        ...a
      } : void 0
    }
  ) : null;
}
function Th(A) {
  const { apiKey: i, environment: u } = x.useContext(qs), v = x.useMemo(
    () => zp({
      props: A,
      apiKey: i,
      environment: u,
      debug: !1,
      signature: A.signature || ""
    }),
    [A, i, u]
  );
  return /* @__PURE__ */ f.jsx(
    Vc,
    {
      config: v,
      visible: A.visible,
      onUrlSignatureRequested: A.onUrlSignatureRequested,
      className: A.className,
      style: A.style
    }
  );
}
function Ph(A) {
  const { apiKey: i, environment: u } = x.useContext(qs), v = x.useMemo(
    () => Wp({
      props: A,
      apiKey: i,
      environment: u,
      debug: !1,
      signature: A.signature || ""
    }),
    [A, i, u]
  );
  return /* @__PURE__ */ f.jsx(
    Vc,
    {
      config: v,
      visible: A.visible,
      onUrlSignatureRequested: A.onUrlSignatureRequested,
      className: A.className,
      style: A.style
    }
  );
}
const $p = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function qp({ children: A }) {
  return /* @__PURE__ */ f.jsx(
    Xp,
    {
      apiKey: $p,
      debug: !0,
      children: A
    }
  );
}
const eh = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, th = {
  pairModal: {
    title: "Connect Account",
    instructions: "To pair your wallet with the DApp using WalletConnect, please follow these steps:",
    steps: {
      1: "Visit the Dapp website",
      2: 'Look for a "Connect Wallet" or similar option',
      3: 'Choose "WalletConnect" as the connection method',
      4: "Copy the provided WalletConnect URI",
      "5a": "Paste the URI in the input field below",
      "5b": "Return to this page - the URI will be automatically detected and processed"
    },
    clipboardError: "Clipboard access denied. To use this feature, please click the lock icon to the left of the address bar, find the 'Clipboard' option, set it to 'Allow', then refresh the page.",
    goToDapp: "Go to the Dapp",
    enterUri: "Enter URI",
    pair: "Pair"
  },
  connectDApps: "Connect dApps",
  disconnectSession: "Disconnect Session",
  connectAccount: "Connect Account",
  reject: "Reject",
  approve: "Approve",
  confirmTransfer: "Confirm Transfer",
  reviewTransferDetails: "Please review the transfer details below",
  from: "From:",
  to: "To:",
  amount: "Amount:",
  data: "Data:",
  confirm: "Confirm",
  connectionSuccess: "Connected successfully.",
  transferFailed: "Transfer failed",
  transferRejected: "Transfer rejected",
  disconnected: "Disconnected"
}, nh = {
  copySuccess: "Copy success!",
  connectSuccess: "Connected successfully!"
}, rh = {
  authenticationError: "Authentication Error. Please sign in again."
}, oh = {
  "/": {
    signinTitle: "Sign In",
    signupTitle: "Sign Up",
    emailLabel: "Email",
    emailPlaceholder: "Email Address",
    emailValidationError: "Please enter a valid email address",
    signUpButton: "Sign Up",
    signInButton: "Sign In",
    authenticating: "Authenticating...",
    registering: "Registering...",
    alreadyHaveAccount: "Already have an account?",
    signUp: "Don't have an account yet?",
    otpSentMessage: "Please check your email inbox. We've sent you a confirmation email. Click the link in the email to complete your registration.",
    otpLoginSentMessage: "A login link has been sent to your email. Please check your inbox and click the link to sign in.",
    emailAlreadySignedUp: "This email address is already signed up. Please use a different email to sign up."
  },
  "/dashboard": {
    userWallet: {
      syncTitle: "Sync"
    },
    "[token]": {
      balance: "Balance",
      recentTransactions: {
        title: "Recent Transactions",
        seeAll: "See all",
        table: {
          transactionHash: "Transaction Hash",
          time: "Time",
          from: "From",
          to: "To",
          amount: "Amount"
        },
        noTransactions: "No transactions to display"
      },
      sendModal: {
        title: "Send",
        to: "To",
        toPlaceholder: "Address or Email",
        amount: "Amount",
        note: "Note",
        balance: "Balance",
        unregisteredEmailNotice: "The recipient will receive an invitation email.",
        invalidEmailFormat: "Invalid email format",
        emailSentToUnregistered: "An invitation email has been sent",
        sendError: "An error occurred while sending. Please try again."
      },
      receiveModal: {
        title: "Receive",
        Crypto: "Crypto Address",
        Email: "Email Address"
      }
    }
  },
  header: eh,
  "/marketplace": {
    tabs: {
      all: "All Products",
      purchased: "Added Products"
    },
    productCard: {
      status: {
        active: "Active",
        deleted: "Deleted"
      },
      price: "Price",
      currency: "TVWT",
      discount: "Discount",
      purchased: "Added",
      deleted: "Uninstalled",
      buttons: {
        purchase: "Install",
        purchased: "Added",
        delete: "Uninstall",
        deleted: "Uninstalled"
      },
      deleteConfirmation: {
        title: "Confirmation",
        message: "Are you sure you want to uninstall this item?",
        cancel: "Cancel",
        confirm: "Uninstall"
      },
      purchaseSuccess: "Product purchased successfully",
      insufficientBalance: "Insufficient balance",
      dailyLimitExceededOtpRequired: "Daily limit exceeded. Check your email for OTP. DO NOT close this dialog to complete your purchase."
    },
    moonpayRamp: {
      modalTitle: "MoonPay on-ramp / off-ramp",
      buyButton: "Buy Crypto with Fiat",
      sellButton: "Sell Crypto for Fiat",
      buy: "Buy",
      sell: "Sell",
      openCryptoExchange: "Open MoonPay",
      depositConfirmation: {
        title: "Confirm Deposit",
        message: "Are you sure you want to initiate this deposit?",
        confirmButton: "Confirm",
        cancelButton: "Cancel"
      }
    }
  },
  vastWalletConnect: th,
  toastSuccess: nh,
  toastError: rh
}, ah = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, ih = {
  pairModal: {
    title: "连接账户",
    instructions: "要使用 WalletConnect 将您的钱包与 DApp 配对，请按照以下步骤操作：",
    steps: {
      1: "访问 Dapp 网站",
      2: '寻找"连接钱包"或类似选项',
      3: '选择"WalletConnect"作为连接方式',
      4: "复制提供的 WalletConnect URI",
      "5a": "将 URI 粘贴到下面的输入框中",
      "5b": "返回此页面 - URI 将被自动检测和处理"
    },
    clipboardError: '剪贴板访问被拒绝。要使用此功能，请点击地址栏左侧的锁定图标，找到"剪贴板"选项，将其设置为"允许"，然后刷新页面。',
    goToDapp: "前往 Dapp",
    enterUri: "输入 URI",
    pair: "配对"
  },
  connectDApps: "连接 dApps",
  disconnectSession: "断开会话",
  connectAccount: "连接账户",
  reject: "拒绝",
  approve: "批准",
  confirmTransfer: "确认转账",
  reviewTransferDetails: "请检查以下转账详情",
  from: "从：",
  to: "到：",
  amount: "金额：",
  data: "数据：",
  confirm: "确认",
  connectionSuccess: "连接成功。",
  transferFailed: "转账失败",
  transferRejected: "转账被拒绝",
  disconnected: "已断开连接"
}, sh = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, lh = {
  authenticationError: "认证错误，请重新登录。"
}, Ah = {
  "/": {
    signinTitle: "登录",
    signupTitle: "注册",
    emailLabel: "电子邮箱",
    emailPlaceholder: "请输入电子邮箱地址",
    emailValidationError: "请输入有效的电子邮箱地址",
    signUpButton: "注册",
    signInButton: "登录",
    authenticating: "正在认证...",
    registering: "正在注册...",
    alreadyHaveAccount: "已有账户？",
    signUp: "还没有账户吗？",
    otpSentMessage: "请检查您的电子邮箱。我们已发送确认邮件。点击邮件中的链接完成注册。",
    otpLoginSentMessage: "登录链接已发送至您的邮箱。请查收并点击链接以完成登录。",
    emailAlreadySignedUp: "该电子邮箱已注册。请使用其他邮箱进行注册。"
  },
  "/dashboard": {
    userWallet: {
      syncTitle: "同步"
    },
    "[token]": {
      balance: "余额",
      recentTransactions: {
        title: "最近交易",
        seeAll: "查看全部",
        table: {
          transactionHash: "交易哈希",
          time: "时间",
          from: "发送方",
          to: "接收方",
          amount: "金额"
        },
        noTransactions: "暂无交易记录"
      },
      sendModal: {
        title: "发送",
        to: "接收方",
        toPlaceholder: "地址或邮箱",
        amount: "金额",
        note: "备注",
        balance: "余额",
        invalidEmailOrAddress: "无效的邮箱或地址格式",
        invalidAddress: "无效地址。请检查后重试",
        unregisteredEmailNotice: "收件人将收到一封邀请邮件。",
        invalidEmailFormat: "邮箱格式不正确",
        emailSentToUnregistered: "已发送邀请邮件",
        sendError: "发送时出错。请重试"
      },
      receiveModal: {
        title: "接收",
        Crypto: "加密货币地址",
        Email: "电子邮件地址"
      }
    }
  },
  header: ah,
  "/marketplace": {
    tabs: {
      all: "所有产品",
      purchased: "已安装产品"
    },
    productCard: {
      status: {
        active: "已激活",
        deleted: "已卸载"
      },
      price: "价格",
      currency: "TVWT",
      discount: "折扣",
      purchased: "安装时间",
      deleted: "卸载时间",
      buttons: {
        purchase: "安装",
        purchased: "已安装",
        delete: "卸载",
        deleted: "已卸载"
      },
      deleteConfirmation: {
        title: "确认卸载",
        message: "您确定要卸载此项目吗？",
        cancel: "取消",
        confirm: "卸载"
      },
      purchaseSuccess: "购买成功",
      insufficientBalance: "余额不足",
      dailyLimitExceededOtpRequired: "已超出每日限额。请查看邮箱获取验证码。请勿关闭此窗口，以完成购买。"
    },
    moonpayRamp: {
      modalTitle: "加密货币交易",
      buyButton: "用法币购买加密货币",
      sellButton: "出售加密货币换取法币",
      buy: "购买",
      sell: "出售",
      openCryptoExchange: "打开加密货币交易",
      depositConfirmation: {
        title: "确认存款",
        message: "您确定要开始这笔存款吗？",
        confirmButton: "确认",
        cancelButton: "取消"
      }
    }
  },
  vastWalletConnect: ih,
  toastSuccess: sh,
  toastError: lh
}, ch = {
  en: {
    translation: oh
  },
  zh: {
    translation: Ah
  }
};
We("savedLng", Ls);
const uh = Ls.getData();
sc.use(Cu).init({
  resources: ch,
  lng: uh || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function dh() {
  return /* @__PURE__ */ f.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ f.jsx(x.Suspense, { children: /* @__PURE__ */ f.jsx(Eu, { i18n: sc, children: /* @__PURE__ */ f.jsxs(pd, { children: [
    /* @__PURE__ */ f.jsx(qp, { children: /* @__PURE__ */ f.jsx(du, { router: Hp }) }),
    /* @__PURE__ */ f.jsx(Up, {})
  ] }) }) }) });
}
const fh = "theme_light", ph = "0.0.0", hh = "module", vh = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, gh = {
  "@fontsource/roboto": "^5.1.0",
  "@moonpay/moonpay-react": "^1.8.2",
  "@radix-ui/react-checkbox": "^1.1.2",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-dropdown-menu": "^2.1.2",
  "@radix-ui/react-label": "^2.1.0",
  "@radix-ui/react-popover": "^1.1.2",
  "@radix-ui/react-select": "^2.1.2",
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-tabs": "^1.1.1",
  "@radix-ui/react-tooltip": "^1.1.3",
  "@walletconnect/core": "^2.17.1",
  "@walletconnect/types": "^2.17.1",
  "@walletconnect/utils": "^2.17.1",
  "@walletconnect/web3wallet": "^1.16.1",
  "@web3auth/base": "^9.3.0",
  "@web3auth/ethereum-mpc-provider": "^9.3.0",
  "@web3auth/mpc-core-kit": "^3.2.4",
  axios: "^1.7.7",
  "class-variance-authority": "^0.7.0",
  clsx: "^2.1.1",
  cmdk: "1.0.0",
  "date-fns": "^4.1.0",
  i18next: "^23.16.2",
  "lucide-react": "^0.453.0",
  react: "^18.3.1",
  "react-chatbotify": "2.0.0-beta.21",
  "react-copy-to-clipboard": "^5.1.0",
  "react-dom": "^18.3.1",
  "react-i18next": "^15.1.0",
  "react-qr-code": "^2.0.15",
  "react-router-dom": "^6.27.0",
  "react-toastify": "^10.0.6",
  "tailwind-merge": "^2.5.4",
  "tailwind-scrollbar-hide": "^1.1.7",
  "tailwindcss-animate": "^1.0.7",
  uuid: "^10.0.0",
  viem: "^2.21.32"
}, mh = {
  "@eslint/js": "^9.11.1",
  "@types/react": "^18.3.10",
  "@types/react-copy-to-clipboard": "^5.0.7",
  "@types/react-dom": "^18.3.0",
  "@types/uuid": "^10.0.0",
  "@vitejs/plugin-react": "^4.3.2",
  autoprefixer: "^10.4.20",
  eslint: "^9.11.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.12",
  globals: "^15.9.0",
  postcss: "^8.4.47",
  "rollup-plugin-visualizer": "^5.12.0",
  tailwindcss: "^3.4.14",
  typescript: "^5.5.3",
  "typescript-eslint": "^8.7.0",
  vite: "^5.4.8",
  "vite-plugin-node-polyfills": "^0.22.0"
}, yh = {
  name: fh,
  private: !0,
  version: ph,
  type: hh,
  scripts: vh,
  dependencies: gh,
  devDependencies: mh
};
We("isDev", cc);
function ZA(A) {
  const i = rA(document.getElementById(A));
  return i.render(
    /* @__PURE__ */ f.jsx(dh, {})
    // <StrictMode>
    // </StrictMode>
  ), () => i.unmount();
}
cc ? ZA("root") : typeof window < "u" && (window[`mount_${yh.name}`] = ZA);
export {
  Yn as B,
  Hs as D,
  Ws as I,
  iA as L,
  Th as M,
  jp as S,
  zi as T,
  gn as a,
  Qp as b,
  Ee as c,
  Dh as d,
  Hi as e,
  Ac as f,
  Ui as g,
  oA as h,
  kn as i,
  vc as j,
  fd as k,
  We as l,
  Ph as m,
  vA as n,
  pc as o,
  RA as p,
  ZA as q,
  vd as u
};
