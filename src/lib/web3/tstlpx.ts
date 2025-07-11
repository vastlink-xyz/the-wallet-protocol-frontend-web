import { TransactionItem } from "@/types/transaction-item";
import { ethers } from "ethers";

export const fetchYellowstoneTransactionHistory = async ({
  address,
  cursor,
  contractAddress,
}: {
  address: string
  cursor?: string
  contractAddress?: string
}) => {
  const limit = 25;
  
  try {
    // Chronicle Explorer API URL
    const BASE_URL = 'https://explorer-chronicle-yellowstone-testnet-9qgmzfcohk.t.conduit.xyz/api/v2';
    let apiUrl = `${BASE_URL}/addresses/${address}/transactions`;
    
    // Parse cursor if provided to get pagination parameters
    let pageParams = {};
    if (cursor) {
      try {
        pageParams = JSON.parse(Buffer.from(cursor, 'base64').toString());
      } catch (error) {
        console.error("Failed to parse cursor:", error);
      }
    }
    
    // Add pagination parameters to URL if cursor exists
    if (Object.keys(pageParams).length > 0) {
      const searchParams = new URLSearchParams();
      for (const [key, value] of Object.entries(pageParams)) {
        searchParams.append(key, String(value));
      }
      apiUrl += `?${searchParams.toString()}`;
    }
    
    // Fetch transactions from Chronicle Explorer API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    let transactions: TransactionItem[] = [];
    let newCursor = null;
    
    // Process transactions from the API response
    if (data.items && Array.isArray(data.items)) {
      transactions = data.items.map((tx: any) => {
        // Determine transaction type based on addresses
        const isSender = tx.from && tx.from.hash && tx.from.hash.toLowerCase() === address.toLowerCase();
        const value = tx.value ? ethers.utils.formatEther(tx.value) : '0';
        
        // Handle contract creation transactions
        const toAddress = tx.to ? tx.to.hash : tx.created_contract ? tx.created_contract.hash : '';
        
        return {
          txid: tx.hash,
          value,
          from: tx.from ? tx.from.hash : '',
          to: toAddress,
          timestamp: tx.timestamp,
          status: tx.status === 'ok' ? 'confirmed' as const : 'failed' as const,
          type: isSender ? 'send' as const : 'receive' as const
        };
      });
      
      // Filter by token contract if specified
      if (contractAddress) {
        transactions = transactions.filter(tx => 
          (tx.to.toLowerCase() === contractAddress.toLowerCase()) || 
          (tx.from.toLowerCase() === contractAddress.toLowerCase())
        );
      }
      
      // Limit transactions to requested amount
      transactions = transactions.slice(0, limit);
      
      // Set cursor for pagination from next_page_params
      if (data.next_page_params) {
        newCursor = Buffer.from(JSON.stringify(data.next_page_params)).toString('base64');
      }
    }
    
    return {
      transactions,
      cursor: newCursor
    };
  } catch (error) {
    console.error("Error fetching Yellowstone transaction history:", error);
    return {
      transactions: [],
      cursor: null
    };
  }
}