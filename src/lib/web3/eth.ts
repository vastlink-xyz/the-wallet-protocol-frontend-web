import { TransactionItem } from "@/components/Transaction/TransactionHistory/TransactionHistoryTables";
import { ERC20_ABI } from "@/constants/abis/erc20";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { ethers } from "ethers";
import Moralis from "moralis";
import { initializeMoralis } from "../moralis";

/**
 * Fetch ETH balance for an address
 * @param address Ethereum address to check balance for
 * @param chainName Chain name from LIT_CHAINS (defaults to 'sepolia')
 * @returns Formatted balance in ETH as string, or '0' if error occurs
 */
export async function fetchEthBalance(address: string, chainName: string = 'sepolia'): Promise<string> {
  if (!address) return '0';
  
  try {
    // Get RPC URL from LIT_CHAINS
    const rpcUrl = LIT_CHAINS[chainName as keyof typeof LIT_CHAINS]?.rpcUrls[0];
    if (!rpcUrl) {
      console.error(`Chain ${chainName} not found in LIT_CHAINS`);
      return '0';
    }
    
    // Create provider
    const provider = new ethers.providers.JsonRpcProvider({
      skipFetchSetup: true, // fix the could not detect network issue for ethers.js 5.X and api router
      url: rpcUrl,
    });
    
    // Get balance in Wei
    const balanceWei = await provider.getBalance(address);
    
    // Convert to ETH
    return ethers.utils.formatEther(balanceWei);
  } catch (error) {
    console.error(`Failed to fetch balance for ${address}:`, error);
    return '0';
  }
}

export const fetchEthTransactionHistory = async ({
  address,
  chain,
  cursor,
  contractAddress,
}: {
  address: string
  chain: string
  cursor?: string
  contractAddress?: string
}) => {
  await initializeMoralis()

  const limit = 25;

  try {
    let response;
    if (contractAddress) {
      response = await Moralis.EvmApi.token.getWalletTokenTransfers({
        chain,
        order: "DESC",
        address,
        limit,
        cursor,
        contractAddresses: [contractAddress || ''],
      });
      
      // Map ERC-20 token transfers to our app format
      const tokenTransfers = response.raw.result || [];
      const formattedTransactions: TransactionItem[] = tokenTransfers.map((tx: any) => {
        const isSender = tx.from_address.toLowerCase() === address.toLowerCase();
        const value = tx.value_decimal || ethers.utils.formatUnits(tx.value, tx.token_decimals || 18);
        
        return {
          txid: tx.transaction_hash,
          value: value,
          from: tx.from_address,
          to: tx.to_address,
          timestamp: tx.block_timestamp,
          status: "confirmed", // Moralis typically returns confirmed transactions
          type: isSender ? "send" : "receive"
        };
      });
      
      return {
        transactions: formattedTransactions,
        cursor: response.raw.cursor
      };
    } else {
      response = await Moralis.EvmApi.transaction.getWalletTransactions({
        chain,
        order: "DESC",
        address,
        limit,
        cursor,
      });
      
      // Map native ETH transactions to our app format
      const ethTransactions = response.raw.result || [];
      const formattedTransactions: TransactionItem[] = ethTransactions
        .filter((tx: any) => tx.input === '0x')
        .map((tx: any) => {
        const isSender = tx.from_address.toLowerCase() === address.toLowerCase();
        let value = "0";
        
        if (tx.value) {
          value = ethers.utils.formatEther(tx.value);
        }
        
        return {
          txid: tx.hash,
          value: value,
          from: tx.from_address,
          to: tx.to_address,
          timestamp: tx.block_timestamp,
          status: "confirmed", // Moralis typically returns confirmed transactions
          type: isSender ? "send" : "receive"
        };
      });
      
      return {
        transactions: formattedTransactions,
        cursor: response.raw.cursor
      };
    }
  } catch (error) {
    console.log("Error fetching ETH transaction history:", error);
    return {
      transactions: [],
      cursor: null
    };
  }
}

export const fetchERC20TokenBalance = async ({
  address,
  tokenAddress,
  chainName = 'sepolia',
  decimals,
}: {
  address: string
  tokenAddress: string
  chainName?: string
  decimals?: number
}) => {
  const rpcUrl = LIT_CHAINS[chainName as keyof typeof LIT_CHAINS]?.rpcUrls[0];
  if (!rpcUrl) {
    throw new Error(`Chain ${chainName} not found in LIT_CHAINS`);
  }
  const provider = new ethers.providers.JsonRpcProvider({
    skipFetchSetup: true, // fix the could not detect network issue for ethers.js 5.X and api router
    url: rpcUrl,
  });
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
  const balance = await tokenContract.balanceOf(address)
  return ethers.utils.formatUnits(balance, decimals)
}
