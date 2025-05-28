import * as bitcoinjs from "bitcoinjs-lib";

export const getBtcAddressByPublicKey = (publicKey: string) => {
  try {
    const pubkeyBuffer = Buffer.from(publicKey.slice(2), "hex")
    const pkpBTCAddress = bitcoinjs.payments.p2pkh({
      pubkey: pubkeyBuffer,
      network: bitcoinjs.networks.testnet,
    }).address

    if (pkpBTCAddress) {
      return pkpBTCAddress
    }
  } catch (error) {
    console.error("Error getting BTC address:", error)
  }
}

export const fetchBtcBalance = async (btcAddress: string): Promise<number> => {
  // Try Mempool.space API first
  try {
    const response = await fetch(`https://mempool.space/testnet/api/address/${btcAddress}`);
    if (!response.ok) {
      if (response.status === 404) {
        console.log(`Address ${btcAddress} not found on Mempool.space or has no transactions.`);
        return 0; 
      }
      throw new Error(`Mempool.space API returned ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    const balance = data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
    return balance / 100000000; // Convert satoshis to BTC
  } catch (mempoolError) {
    console.warn("Mempool.space API failed, falling back to BlockCypher:", mempoolError);

    // If Mempool.space fails, fallback to BlockCypher API (only try once)
    try {
      const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/balance`);
      
      if (response.status === 404) {
          console.log(`Address ${btcAddress} not found on BlockCypher or has no transactions.`);
          return 0; 
      }
      if (!response.ok) {
        // For BlockCypher's 429 error, we don't handle retry here, just treat it as a failure
        throw new Error(`BlockCypher API returned ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.final_balance / 100000000; // Convert satoshis to BTC
    } catch (blockCypherError) {
      console.error("BlockCypher API also failed:", blockCypherError);
      return 0; // If BlockCypher also fails, return 0
    }
  }
};

export const fetchBtc24HourOutflow = async (btcAddress: string) => {
  try {
    // Fetch transactions for the address using mempool.space API via our proxy
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/btc/mempool?address=${btcAddress}&endpoint=txs`);
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }
    
    const transactions = await response.json();
    
    if (!Array.isArray(transactions)) {
      return 0;
    }
    
    // Calculate time 24 hours ago
    const oneDayAgo = new Date();
    oneDayAgo.setHours(oneDayAgo.getHours() - 24);
    
    // Filter transactions from last 24 hours and sum outgoing amounts
    let totalOutflow = 0;
    
    for (const tx of transactions) {
      // Check if transaction has a timestamp
      if (!tx.status || !tx.status.block_time) {
        // Skip transactions without timestamps (pending transactions)
        continue;
      }
      
      // Convert block_time (Unix timestamp) to Date
      const txTime = new Date(tx.status.block_time * 1000);
      
      // Skip transactions older than 24 hours
      if (txTime < oneDayAgo) {
        continue;
      }
      
      // Check if this is an outgoing transaction
      // In mempool.space API, vin contains inputs and vout contains outputs
      const isOutgoing = tx.vin.some((input: any) => 
        input.prevout && input.prevout.scriptpubkey_address === btcAddress
      );
      
      if (isOutgoing) {
        // Calculate the amount sent out
        // We need to find outputs that are not back to our address (change outputs)
        for (const output of tx.vout) {
          if (output.scriptpubkey_address && output.scriptpubkey_address !== btcAddress) {
            // Add the value (in satoshis) to our total
            totalOutflow += output.value;
          }
        }
      }
    }
    
    // Convert from satoshis to BTC
    return totalOutflow / 100000000;
  } catch (error) {
    console.error("Error calculating BTC 24-hour outflow:", error);
    return 0;
  }
};

/**
 * Fetch BTC transaction history with pagination support
 * @param btcAddress - The BTC address to fetch transaction history for
 * @param limit - Number of transactions to return (default: 25)
 * @param lastTxid - Last transaction ID for pagination (get transactions after this ID)
 * @returns Transaction array and pagination information
 */
export const fetchBtcTransactionHistory = async (
  btcAddress: string, 
  limit: number = 25, 
  lastTxid?: string
) => {
  // Try Mempool.space API first through our proxy
  try {
    // Build URL with pagination parameters if provided
    let apiUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/btc/mempool?address=${btcAddress}&endpoint=txs`;
    if (lastTxid) {
      apiUrl += `&last_seen=${lastTxid}`;
    }
    if (limit) {
      apiUrl += `&limit=${limit}`;
    }
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }
    const transactions = await response.json();
    
    // Return transactions and info needed for pagination
    const lastTx = transactions.length > 0 ? transactions[transactions.length - 1].txid : null;
    return {
      transactions,
      hasMore: transactions.length === limit,
      lastTxid: lastTx
    };
  } catch (mempoolError) {
    console.warn("Mempool.space API failed for transaction history, falling back to BlockCypher:", mempoolError);

    // If Mempool.space fails, fallback to BlockCypher API
    try {
      // Build URL with pagination parameters
      let apiUrl = `https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/full?limit=${limit}`;
      if (lastTxid) {
        apiUrl += `&after=${lastTxid}`;
      }
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`BlockCypher API returned ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      const txs = data.txs || [];
      
      return {
        transactions: txs,
        hasMore: txs.length === limit && txs.length > 0,
        lastTxid: txs.length > 0 ? txs[txs.length - 1].hash : null
      };
    } catch (blockCypherError) {
      console.error("BlockCypher API also failed for transaction history:", blockCypherError);
      return {
        transactions: [],
        hasMore: false,
        lastTxid: null
      };
    }
  }
};