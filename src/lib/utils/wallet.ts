import { TokenType } from "@/types/tokens";
import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";
import { Chain, http } from "viem"
import {hardhat, sepolia, polygonAmoy} from "viem/chains"

export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export function truncateMiddle(str: string, startChars = 8, endChars = 10, ellipsis = '...') {
  if (str.length <= startChars + endChars) {
    return str;
  }

  const start = str.slice(0, startChars);
  const end = str.slice(-endChars);

  return `${start}${ellipsis}${end}`;
}

export const chainConfigByToken = (tokenType: TokenType): CustomChainConfig | undefined => {
  if (tokenType === 'ETH') {
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      tickerName: "Sepolia Testnet ETH",
      ticker: "ETH",
      decimals: 18,
      rpcTarget: "https://rpc.ankr.com/eth_sepolia",
      blockExplorerUrl: "https://sepolia.etherscan.io",
    };
  } else if (tokenType === 'MATIC' || tokenType === 'TVWT') {
    return {
      chainId: '0x13882',
      displayName: 'Polygon Amoy Testnet',
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      tickerName: 'Amoy MATIC',
      ticker: 'MATIC',
      decimals: 18,
      rpcTarget: 'https://rpc.ankr.com/polygon_amoy',
      blockExplorerUrl: "https://amoy.polygonscan.com",
    }
  }
}
