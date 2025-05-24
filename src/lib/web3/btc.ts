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

export const fetchBtcBalance = async (btcAddress: string) => {
  try {
    // Using BlockCypher API for testnet
    const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/balance`);
    const data = await response.json();
    
    // BlockCypher returns balance in satoshis, converting to BTC (1 BTC = 100,000,000 satoshis)
    const balanceInBtc = data.final_balance / 100000000;
    return balanceInBtc;
  } catch (error) {
    console.error("Error fetching BTC balance:", error);
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