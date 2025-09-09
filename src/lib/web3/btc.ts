import { TransactionItem } from "@/types/transaction-item";
import * as bitcoinjs from "bitcoinjs-lib";
import { ec as EC } from 'elliptic';
import * as scure from '@scure/btc-signer';
import BN from 'bn.js';
import * as bip66 from 'bip66';
import { log } from '@/lib/utils';

const isProduction = process.env.NEXT_PUBLIC_ENV?.toLowerCase() === 'production';

export const btcConfig = {
  network: isProduction ? bitcoinjs.networks.bitcoin : bitcoinjs.networks.testnet,
  
  // API endpoints
  mempoolBaseUrl: isProduction ? 'https://mempool.space' : 'https://mempool.space/testnet',
  blockstreamBaseUrl: isProduction ? 'https://blockstream.info' : 'https://blockstream.info/testnet',
} as const;

const scureNetwork = isProduction ? scure.NETWORK : scure.TEST_NETWORK;

const BROADCAST_URL = `${btcConfig.blockstreamBaseUrl}/api/tx`;

/**
 * Derive a P2WPKH (bech32) BTC address from an ECDSA public key hex.
 * Accepts 0x-prefixed or plain hex; compressed (33-byte) or uncompressed (65-byte) keys.
 */
export const getBtcAddressByPublicKey = (publicKey: string): string => {
  try {
    if (!publicKey) return '';
    const hex = publicKey.startsWith('0x') ? publicKey.slice(2) : publicKey;
    if (hex.length !== 66 && hex.length !== 130) {
      // Unknown length; try to treat as uncompressed missing 0x04 prefix
      // If 64 bytes (128 hex), prefix with '04'
      if (hex.length === 128) {
        return getBtcAddressByPublicKey('0x04' + hex);
      }
      return '';
    }

    // Ensure compressed public key for P2WPKH
    let compressedHex = hex;
    if (hex.length === 130) {
      // Uncompressed (65 bytes, 0x04...)
      const ec = new EC('secp256k1');
      const key = ec.keyFromPublic(hex, 'hex');
      compressedHex = key.getPublic(true, 'hex');
    }

    // Validate compressed prefix (02/03)
    if (!(compressedHex.startsWith('02') || compressedHex.startsWith('03'))) {
      return '';
    }

    const pubkeyBuffer = Buffer.from(compressedHex, 'hex');
    const payment = bitcoinjs.payments.p2wpkh({ pubkey: pubkeyBuffer, network: btcConfig.network });
    return payment.address ?? '';
  } catch (error) {
    console.error('Error getting BTC SegWit address:', error);
    return '';
  }
}

// ------------------------
// BTC transaction building
// ------------------------

export interface BtcSelectedInput {
  txid: string;
  vout: number;
  value: number;
}

export interface BtcToSignResult {
  toSign: string[]; // 0x-prefixed 32-byte hex preimages, one per input
  tx: scure.Transaction;
  selectedInputs: BtcSelectedInput[];
  fee: number;
  efficiency: number;
}

function ensureCompressedPubkey(pubkeyHex: string): Buffer {
  const hex = pubkeyHex.startsWith('0x') ? pubkeyHex.slice(2) : pubkeyHex;
  if (hex.length === 66 && (hex.startsWith('02') || hex.startsWith('03'))) {
    return Buffer.from(hex, 'hex');
  }
  const ec = new EC('secp256k1');
  const uncompressed = hex.length === 130 ? hex : (hex.length === 128 ? '04' + hex : hex);
  const key = ec.keyFromPublic(uncompressed, 'hex');
  const compressedHex = key.getPublic(true, 'hex');
  return Buffer.from(compressedHex, 'hex');
}

export async function getBtcToSignTransaction({
  sendAddress,
  recipientAddress,
  amount,
  publicKey,
}: {
  sendAddress: string;
  recipientAddress: string;
  amount: string; // BTC amount in decimal string
  publicKey: string;
}): Promise<BtcToSignResult> {
  // Fetch confirmed UTXOs
  const response = await fetch(`${btcConfig.blockstreamBaseUrl}/api/address/${sendAddress}/utxo`);
  if (!response.ok) throw new Error(`Blockstream UTXO API failed: ${response.status}`);
  let utxos: any[] = await response.json();
  utxos = utxos.filter((u: any) => u.status?.confirmed);
  log('filtered utxos from Blockstream', utxos);

  if (!utxos || utxos.length === 0) {
    throw new Error('No UTXOs found for this address');
  }

  const amountSats = Math.floor(Number(amount) * 100000000);
  const DUST_LIMIT = 546;
  if (amountSats < DUST_LIMIT) {
    throw new Error(`Amount too small. Minimum amount is ${DUST_LIMIT} satoshis (0.00000546 BTC)`);
  }

  // Fee estimate
  let feeRate = 10; // sat/vB fallback
  try {
    const feeResponse = await fetch(`${btcConfig.blockstreamBaseUrl}/api/fee-estimates`);
    if (feeResponse.ok) {
      const feeRates = await feeResponse.json();
      const est = feeRates['3'] || feeRates['6'] || feeRates['10'] || 10;
      feeRate = Math.ceil(Number(est));
    }
  } catch (e) {
    console.warn('Failed to fetch dynamic fee, using fallback:', e);
  }

  const publicKeyBuffer = ensureCompressedPubkey(publicKey);
  const spend = scure.p2wpkh(publicKeyBuffer, scureNetwork);

  // Normalize UTXOs for scure.selectUTXO
  const utxoInputs = utxos.map((u: any) => ({
    txid: Buffer.from(u.txid, 'hex'),
    index: u.vout,
    witnessUtxo: {
      script: spend.script,
      amount: BigInt(u.value),
    },
  }));

  const outputs = [{ address: recipientAddress, amount: BigInt(amountSats) }];

  const selectionResult = scure.selectUTXO(utxoInputs, outputs, 'default', {
    changeAddress: sendAddress,
    feePerByte: BigInt(Math.ceil(Number(feeRate))),
    bip69: true,
    createTx: true,
    network: scureNetwork,
  });
  if (!selectionResult || !selectionResult.tx) {
    throw new Error('Insufficient funds: unable to find suitable UTXO combination');
  }

  const tx: scure.Transaction = selectionResult.tx;

  // Build scriptCode for preimages
  const scriptCode = scure.OutScript.encode({ type: 'pkh', hash: spend.hash! });
  const toSignArray: Uint8Array[] = [];
  for (let i = 0; i < tx.inputsLength; i++) {
    const input = tx.getInput(i);
    if (!input.witnessUtxo) throw new Error('Missing witnessUtxo for input');
    const preimage = tx.preimageWitnessV0(i, scriptCode, scure.SigHash.ALL, input.witnessUtxo.amount);
    toSignArray.push(preimage);
  }

  const selectedInputs: BtcSelectedInput[] = Array.from({ length: tx.inputsLength }).map((_, i) => {
    const inp = tx.getInput(i);
    if (inp.index === undefined) throw new Error('Missing input index');
    return {
      txid: Buffer.from(inp.txid as Uint8Array).toString('hex'),
      vout: inp.index as number,
      value: Number(inp.witnessUtxo!.amount),
    };
  });

  const totalInputValue = selectedInputs.reduce((acc, i) => acc + i.value, 0);
  const fee = Number(tx.fee);
  const estWeight = selectionResult?.weight || 0;
  const vsizeEst = estWeight ? Math.ceil(estWeight / 4) : 0;
  const approxRate = vsizeEst ? Math.ceil(fee / vsizeEst) : 0;
  log(`Transaction fee: ${fee} sats, est vsize: ${vsizeEst} vB, ~rate: ${approxRate} sat/vB, Efficiency: ${(totalInputValue / (amountSats + fee)).toFixed(2)}x`);

  const toSignHexArray = toSignArray.map((u8) => '0x' + Buffer.from(u8).toString('hex'));
  return {
    toSign: toSignHexArray,
    tx,
    selectedInputs,
    fee,
    efficiency: totalInputValue / (amountSats + fee),
  };
}

// ------------------------
// BTC transaction broadcast
// ------------------------

// Normalize r/s into 32-byte hex (strip 0x, trim/pad to 64 chars)
function normalizeScalarHex(hex: string): string {
  if (!hex) return ''.padStart(64, '0');
  let h = hex.toString().toLowerCase();
  if (h.startsWith('0x')) h = h.slice(2);
  h = h.replace(/[^0-9a-f]/g, '');
  if (h.length > 64) h = h.slice(h.length - 64);
  if (h.length < 64) h = h.padStart(64, '0');
  return h;
}

// Ensure DER-encoded integers are positive (prepend 0x00 if highest bit is set)
function ensurePositive(buffer: Buffer): Buffer {
  if (buffer[0] & 0x80) {
    const newBuffer = Buffer.alloc(buffer.length + 1);
    newBuffer[0] = 0x00;
    buffer.copy(newBuffer, 1);
    return newBuffer;
  }
  return buffer;
}

export async function broadcastBtcTransaction({
  sig,
  publicKey,
  tx,
}: {
  sig: Array<{ r: string; s: string; v?: number }>;
  publicKey: string;
  tx: scure.Transaction;
}): Promise<string> {
  const signatures = sig;
  const inputCount = tx.inputsLength;
  if (signatures.length !== inputCount) {
    throw new Error(`Signature count mismatch: expected ${inputCount}, got ${signatures.length}`);
  }

  const publicKeyBuffer = ensureCompressedPubkey(publicKey);

  for (let i = 0; i < signatures.length; i++) {
    const currentSig = signatures[i];
    const rHex = normalizeScalarHex(currentSig.r);
    const sHex = normalizeScalarHex(currentSig.s);
    const r = Buffer.from(rHex, 'hex');

    // low-S normalization for s
    let sBN = new BN(Buffer.from(sHex, 'hex'));
    const ec = new EC('secp256k1');
    const n = ec.curve.n;
    if (sBN.cmp(n.divn(2)) === 1) sBN = n.sub(sBN);
    let sHexNorm = sBN.toString(16);
    if (sHexNorm.length > 64) sHexNorm = sHexNorm.slice(sHexNorm.length - 64);
    if (sHexNorm.length < 64) sHexNorm = sHexNorm.padStart(64, '0');
    const s = Buffer.from(sHexNorm, 'hex');

    const positiveR = ensurePositive(r);
    const positiveS = ensurePositive(s);

    const derSignature = bip66.encode(positiveR, positiveS);
    const signatureWithHashType = Buffer.concat([derSignature, Buffer.from([0x01])]); // SIGHASH_ALL

    const inp = tx.getInput(i);
    const amount = inp.witnessUtxo?.amount;
    tx.updateInput(i, {
      witnessUtxo: {
        script: scure.p2wpkh(publicKeyBuffer, scureNetwork).script,
        amount: amount !== undefined ? amount : 0n,
      },
      partialSig: [[publicKeyBuffer, signatureWithHashType]],
    });
  }

  tx.finalize();
  const txHex = tx.hex;

  const broadcastResponse = await fetch(BROADCAST_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: txHex,
  });
  if (!broadcastResponse.ok) {
    const errorText = await broadcastResponse.text();
    throw new Error(`Error broadcasting transaction: ${errorText}`);
  }
  const txid = await broadcastResponse.text();
  return txid;
}

export async function estimateBtcFeeAccurate({
  sendAddress,
  recipientAddress,
  amount,
  balance,
}: {
  sendAddress: string;
  recipientAddress: string;
  amount: string; // BTC amount in decimal string
  balance: string; // BTC balance in decimal string
}) {
  try {
    // Fetch confirmed UTXOs
    const response = await fetch(`${btcConfig.blockstreamBaseUrl}/api/address/${sendAddress}/utxo`);
    if (!response.ok) throw new Error(`Blockstream UTXO API failed: ${response.status}`);
    let utxos: any[] = await response.json();
    utxos = utxos.filter((u: any) => u.status?.confirmed);
    if (!utxos || utxos.length === 0) throw new Error('No UTXOs found for this address');

    // Fee rate (same approach as build path: prefer 3/6/10)
    let feeRate = 10; // sat/vB fallback
    try {
      const feeResponse = await fetch(`${btcConfig.blockstreamBaseUrl}/api/fee-estimates`);
      if (feeResponse.ok) {
        const feeRates = await feeResponse.json();
        const est = feeRates['3'] || feeRates['6'] || feeRates['10'] || 10;
        feeRate = Math.ceil(Number(est));
      }
    } catch (_) {}

    const amountSats = Math.floor(Number(amount) * 100000000);
    const DUST_LIMIT = 546;
    if (amountSats < DUST_LIMIT) {
      return {
        estimatedFee: '0',
        isSufficientForFee: true,
        remainingBalance: balance,
        warning: `Amount below dust limit (${DUST_LIMIT} sats)`
      };
    }

    // Build script for this address (prevout script)
    const outType = scure.Address(scureNetwork).decode(sendAddress);
    const prevoutScript = scure.OutScript.encode(outType);

    const utxoInputs = utxos.map((u: any) => ({
      txid: Buffer.from(u.txid, 'hex'),
      index: u.vout,
      witnessUtxo: {
        script: prevoutScript,
        amount: BigInt(u.value),
      },
    }));

    const outputs = [{ address: recipientAddress, amount: BigInt(amountSats) }];

    const selectionResult = scure.selectUTXO(utxoInputs, outputs, 'default', {
      changeAddress: sendAddress,
      feePerByte: BigInt(Math.ceil(Number(feeRate))),
      bip69: true,
      createTx: true,
      network: scureNetwork,
    });
    if (!selectionResult || !selectionResult.tx) throw new Error('Insufficient funds');

    const tx: scure.Transaction = selectionResult.tx;
    const feeSats = Number(tx.fee);
    const estimatedFee = parseFloat((feeSats / 100000000).toFixed(8)).toString();

    const numBalance = parseFloat(balance);
    const numFee = parseFloat(estimatedFee);
    const isSufficientForFee = numBalance >= numFee;

    return {
      estimatedFee,
      isSufficientForFee,
      remainingBalance: isSufficientForFee ? (numBalance - numFee).toString() : '0'
    };
  } catch (error) {
    // Do not fallback to simple estimation; propagate error to caller
    throw error instanceof Error ? error : new Error(String(error));
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
