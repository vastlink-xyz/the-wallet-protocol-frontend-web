var f = Object.defineProperty;
var h = (s, t, e) => t in s ? f(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var n = (s, t, e) => h(s, typeof t != "symbol" ? t + "" : t, e);
import { b as o } from "./vendor-utils-RvkaSVWD.js";
import { d as c, f as l, e as d } from "./vendor-web3-B_6NVwwj.js";
import { s as g, p as T } from "./transaction-CgKZQG0q.js";
const v = [
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
class u {
  constructor(t, e, a) {
    n(this, "name");
    n(this, "symbol");
    n(this, "decimals");
    this.name = t, this.symbol = e, this.decimals = a;
  }
}
class x extends u {
  constructor() {
    super("Ethereum", "ETH", 18);
    n(this, "publicClient");
    n(this, "openUrl");
    this.publicClient = c({
      chain: g,
      transport: d("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(e) {
    const a = await this.publicClient.getBalance({
      address: e
    });
    return l(a);
  }
  async getRecentTransactions(e) {
    const a = "https://api-sepolia.etherscan.io/api", p = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await o.get(a, {
      params: {
        ...p,
        action: "txlist",
        address: e,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class C extends u {
  constructor() {
    super("Polygon", "MATIC", 18);
    n(this, "publicClient");
    n(this, "openUrl");
    this.publicClient = c({
      chain: T,
      transport: d("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(e) {
    const a = await this.publicClient.getBalance({
      address: e
    });
    return l(a);
  }
  async getRecentTransactions(e) {
    const a = "https://api-amoy.polygonscan.com/api", p = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await o.get(a, {
      params: {
        ...p,
        action: "txlist",
        address: e,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class w extends u {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    n(this, "publicClient");
    n(this, "contractAddress");
    n(this, "contractAbi");
    n(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = v, this.publicClient = c({
      chain: T,
      transport: d("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(e) {
    const a = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [e]
    });
    return l(a);
  }
  async getRecentTransactions(e) {
    const a = "https://api-amoy.polygonscan.com/api", p = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await o.get(a, {
      params: {
        ...p,
        action: "tokentx",
        address: e,
        contractaddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
const i = class i {
  constructor() {
    n(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", x],
      ["MATIC", C],
      ["TVWT", w]
    ]);
  }
  static getInstance() {
    return i.instance || (i.instance = new i()), i.instance;
  }
  createToken(t) {
    const e = this.tokenMap.get(t);
    if (!e)
      throw new Error(`Unsupported token type: ${t}`);
    return new e();
  }
};
n(i, "instance");
let b = i;
export {
  b as T
};
