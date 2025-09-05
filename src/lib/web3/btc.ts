import { TransactionItem } from "@/types/transaction-item";
import * as bitcoinjs from "bitcoinjs-lib";

const isProduction = process.env.NEXT_PUBLIC_ENV?.toLowerCase() === 'production';

export const btcConfig = {
  network: isProduction ? bitcoinjs.networks.bitcoin : bitcoinjs.networks.testnet,
  
  // API endpoints
  mempoolBaseUrl: isProduction ? 'https://mempool.space' : 'https://mempool.space/testnet',
  blockstreamBaseUrl: isProduction ? 'https://blockstream.info' : 'https://blockstream.info/testnet',
} as const;

export const getBtcAddressByPublicKey = (publicKey: string) => {
  try {
    const pubkeyBuffer = Buffer.from(publicKey.slice(2), "hex")
    const pkpBTCAddress = bitcoinjs.payments.p2pkh({
      pubkey: pubkeyBuffer,
      network: btcConfig.network,
    }).address

    if (pkpBTCAddress) {
      return pkpBTCAddress
    }
  } catch (error) {
    console.error("Error getting BTC address:", error)
  }
}

export const fetchBtcBalance = async (btcAddress: string): Promise<number> => {
  try {
    // First try to get balance from UTXO endpoint (more accurate for spendable balance)
    const utxoResponse = await fetch(`${btcConfig.blockstreamBaseUrl}/api/address/${btcAddress}/utxo`);
    if (utxoResponse.ok) {
      const utxos = await utxoResponse.json();
      if (Array.isArray(utxos)) {
        // Sum all UTXO values to get spendable balance
        const totalSatoshis = utxos.reduce((sum: number, utxo: any) => sum + utxo.value, 0);
        const balanceInBTC = totalSatoshis / 100000000;
        // Return with max 8 decimal places, removing trailing zeros
        return parseFloat(balanceInBTC.toFixed(8));
      }
    }

    // Fallback to address stats if UTXO endpoint fails
    const response = await fetch(`${btcConfig.blockstreamBaseUrl}/api/address/${btcAddress}`);
    if (!response.ok) {
      if (response.status === 404) {
        console.log(`Address ${btcAddress} not found on Blockstream or has no transactions.`);
        return 0;
      }
      throw new Error(`Blockstream API returned ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    const balanceSatoshis = data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
    const balanceInBTC = balanceSatoshis / 100000000;
    // Return with max 8 decimal places, removing trailing zeros
    return parseFloat(balanceInBTC.toFixed(8));
  } catch (error) {
    console.error("Error fetching BTC balance:", error);
    return 0;
  }
};

export const fetchBtc24HourOutflow = async (btcAddress: string) => {
  try {
    // Fetch transactions for the address using Blockstream API via our proxy
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
      // In Blockstream API, vin contains inputs and vout contains outputs
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

    // Convert from satoshis to BTC with proper precision
    const outflowInBTC = totalOutflow / 100000000;
    return parseFloat(outflowInBTC.toFixed(8));
  } catch (error) {
    console.error("Error calculating BTC 24-hour outflow:", error);
    return 0;
  }
};

export const fetchBtcTodayOutflow = async (btcAddress: string) => {
  try {
    // Fetch transactions for the address using Blockstream API via our proxy
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/btc/mempool?address=${btcAddress}&endpoint=txs`);

    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }

    const transactions = await response.json();

    if (!Array.isArray(transactions)) {
      return 0;
    }

    // Get today's start time in UTC (00:00:00 UTC)
    const todayStartTimestamp = new Date().setUTCHours(0, 0, 0, 0);
    const todayStart = new Date(todayStartTimestamp);

    // Filter transactions from today (UTC 0:00 to now) and sum outgoing amounts
    let totalOutflow = 0;

    for (const tx of transactions) {
      // Check if transaction has a timestamp
      if (!tx.status || !tx.status.block_time) {
        // Skip transactions without timestamps (pending transactions)
        continue;
      }

      // Convert block_time (Unix timestamp) to Date
      const txTime = new Date(tx.status.block_time * 1000);

      // Skip transactions older than today's start
      if (txTime < todayStart) {
        continue;
      }

      // Check if this is an outgoing transaction
      // In Blockstream API, vin contains inputs and vout contains outputs
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

    // Convert from satoshis to BTC with proper precision
    const outflowInBTC = totalOutflow / 100000000;
    return parseFloat(outflowInBTC.toFixed(8));
  } catch (error) {
    console.error("Error calculating BTC today outflow:", error);
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
export const fetchBtcTransactionHistory = async ({
  btcAddress,
  lastTxid,
}: {
  btcAddress: string
  lastTxid?: string
}) => {
  const limit = 50;

  // Try Blockstream API through our proxy
  try {
    // Build URL with pagination parameters if provided
    let apiUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/btc/mempool?address=${btcAddress}&endpoint=txs`;
    if (lastTxid) {
      apiUrl += `&lastId=${lastTxid}`;
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }
    const transactions = await response.json();

    // Transform Blockstream transactions to our app's format
    const formattedTransactions: TransactionItem[] = transactions.map((tx: any) => {
      // Check if this address is in inputs (sending) or outputs (receiving)
      const isInputter = tx.vin.some((input: any) => 
        input.prevout && input.prevout.scriptpubkey_address === btcAddress
      );
      
      // Calculate transaction value
      let value = 0;
      let otherAddress = '';
      
      if (isInputter) {
        // This is a sent transaction - sum outputs not going back to our address
        for (const output of tx.vout) {
          if (output.scriptpubkey_address && output.scriptpubkey_address !== btcAddress) {
            value += output.value;
            // Use first non-self address as the recipient
            if (!otherAddress) {
              otherAddress = output.scriptpubkey_address;
            }
          }
        }
      } else {
        // This is a received transaction - sum outputs coming to our address
        for (const output of tx.vout) {
          if (output.scriptpubkey_address === btcAddress) {
            value += output.value;
          }
        }
        
        // Try to find the sender
        if (tx.vin[0] && tx.vin[0].prevout && tx.vin[0].prevout.scriptpubkey_address) {
          otherAddress = tx.vin[0].prevout.scriptpubkey_address;
        }
      }
      
      // Format timestamp from unix time
      const timestamp = tx.status && tx.status.block_time 
        ? new Date(tx.status.block_time * 1000).toISOString() 
        : new Date().toISOString(); // Use current time for unconfirmed transactions
      
      // Determine transaction status
      let status: "confirmed" | "pending" | "failed" = "pending";
      if (tx.status) {
        if (tx.status.confirmed) {
          status = "confirmed";
        }
      }
      
      // Format value from satoshis to BTC with proper precision (max 8 decimals)
      const valueInBTC = (value / 100000000).toFixed(8).replace(/\.?0+$/, '');
      
      return {
        txid: tx.txid,
        value: valueInBTC,
        from: isInputter ? btcAddress : otherAddress,
        to: isInputter ? otherAddress : btcAddress,
        timestamp,
        status,
        type: isInputter ? "send" : "receive"
      };
    });
    
    // Return transactions and info needed for pagination
    const lastId = transactions.length >= limit ? transactions[transactions.length - 1].txid : null;
    return {
      transactions: formattedTransactions,
      lastId,
    };
  } catch (blockstreamError) {
    console.log("Blockstream API failed for transaction history", blockstreamError);

    return {
      transactions: [],
      lastId: null
    };
  }
};