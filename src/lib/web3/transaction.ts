import { ethers } from "ethers";
import { SUPPORTED_TOKENS_INFO, TokenType } from "./token";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { btcConfig } from '@/lib/web3/btc';
import * as btc from '@scure/btc-signer';
import BN from "bn.js";
import elliptic from "elliptic";
import * as bip66 from "bip66";
import { log } from "../utils";
import { ERC20_ABI } from "@/constants/abis/erc20";
import { broadcastTransactionForVAST, getToSignTransactionForVAST } from "./vast";
// Note: use @scure/btc-signer preimage helpers instead of manual hashing

// Type definitions for transaction data
interface BaseTransactionData {
  toSign: Uint8Array | Uint8Array[] | Buffer | Buffer[];
}

interface EVMTransactionData extends BaseTransactionData {
  toSign: Uint8Array;
  unsignedTransaction: {
    to: string;
    value: string;
    gasPrice?: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
    nonce: number;
    chainId: number;
    data?: string;
    gasLimit: number;
    type?: number;
  };
}

interface BTCTransactionData extends BaseTransactionData {
  toSign: Uint8Array[]; // BTC uses one preimage per input (SegWit)
  tx: btc.Transaction;
  selectedInputs: Array<{
    txid: string;
    vout: number;
    value: number;
  }>;
  fee: number;
  efficiency: number;
}

interface VASTTransactionData extends BaseTransactionData {
  toSign: Uint8Array;
  request: any; // VAST has its own specific structure
}

export type TransactionData = EVMTransactionData | BTCTransactionData | VASTTransactionData;
export type { BTCTransactionData, EVMTransactionData, VASTTransactionData };

const BROADCAST_URL = `${btcConfig.blockstreamBaseUrl}/api/tx`;
const isProd = process.env.NEXT_PUBLIC_ENV?.toLowerCase() === 'production';
const scureNetwork = isProd ? btc.NETWORK : btc.TEST_NETWORK;
const EC = elliptic.ec;

// We use btc.selectUTXO from @scure/btc-signer for accurate SegWit size/fee

export const getToSignTransactionByTokenType = async ({
  tokenType,
  options,
}: {
  tokenType: TokenType;
  options: any;
}): Promise<TransactionData> => {
  const { sendAddress, recipientAddress, amount, data, publicKey } = options
  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]

  if (tokenType === 'VAST') {
    return getToSignTransactionForVAST({
      options,
    })
  } else if (tokenInfo.chainType === 'EVM' && !tokenInfo.contractAddress) {
    const rpcUrl = LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]?.rpcUrls[0];
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const chainName = tokenInfo.chainName
    // Get nonce with latest state
    const nonce = await provider.getTransactionCount(sendAddress)
        
    // Get gas price
    const gasPrice = await provider.getGasPrice()
  
    // Create the transaction object
    const txData: {
      to: string;
      value: string;
      gasPrice: string;
      nonce: number;
      chainId: number;
      data?: string;
      gasLimit: number;
    } = {
      to: recipientAddress,
      value: ethers.utils.parseEther(amount).toHexString(),
      gasPrice: gasPrice.toHexString(),
      nonce,
      chainId: LIT_CHAINS[chainName]?.chainId,
      gasLimit: 21000, // Default gasLimit
    }
    if (data) { 
      txData.data = data; // Include data if provided
      const estimatedGas = await provider.estimateGas(txData);
      txData.gasLimit = estimatedGas.toNumber();
    } else {
      txData.gasLimit = 21000;
    }

    const toSign = ethers.utils.arrayify(
      ethers.utils.keccak256(ethers.utils.serializeTransaction(txData))
    )
    
    return {
      toSign,
      unsignedTransaction: txData,
    }
  } else if (tokenType === 'BTC') {
    // Use Blockstream API with @scure/btc-signer UTXO selection
    let utxos, selectionResult: any;

    try {
      const response = await fetch(`${btcConfig.blockstreamBaseUrl}/api/address/${sendAddress}/utxo`);
      if (!response.ok) throw new Error(`Blockstream UTXO API failed: ${response.status}`);
      utxos = await response.json();
      utxos = utxos.filter((utxo: any) => utxo.status.confirmed);
      log('filtered utxos from Blockstream', utxos);

      if (!utxos || utxos.length === 0) {
        throw new Error('No UTXOs found for this address');
      }

      const amountSats = Math.floor(Number(amount) * 100000000);
      
      // Dust limit constant
      const DUST_LIMIT = 546;

      // Check if the amount to send is dust
      if (amountSats < DUST_LIMIT) {
        throw new Error(`Amount too small. Minimum amount is ${DUST_LIMIT} satoshis (0.00000546 BTC)`);
      }

      // Get dynamic fee rate
      let feeRate = 10; // sat/vByte, default fallback
      try {
        const feeResponse = await fetch(`${btcConfig.blockstreamBaseUrl}/api/fee-estimates`);
        if (feeResponse.ok) {
          const feeRates = await feeResponse.json();
          // Some explorers return decimal sat/vB; ensure integer for BigInt conversion
          const est = feeRates['3'] || feeRates['6'] || feeRates['10'] || 10;
          feeRate = Math.ceil(Number(est));
        }
      } catch (error) {
        console.warn('Failed to fetch dynamic fee, using fallback:', error);
      }

      const publicKeyBuffer = Buffer.from(publicKey.slice(2), 'hex');
      const spend = btc.p2wpkh(publicKeyBuffer, scureNetwork);

      // Normalize UTXOs for btc.selectUTXO
      const utxoInputs = utxos.map((u: any) => ({
        txid: Buffer.from(u.txid, 'hex'),
        index: u.vout,
        witnessUtxo: {
          script: spend.script,
          amount: BigInt(u.value),
        },
      }));

      // Desired outputs (recipient only; change handled by selector)
      const outputs = [{ address: recipientAddress!, amount: BigInt(amountSats) }];

      // Select inputs + build tx
      selectionResult = btc.selectUTXO(utxoInputs, outputs, 'default', {
        changeAddress: sendAddress,
        feePerByte: BigInt(Math.ceil(Number(feeRate))),
        bip69: true,
        createTx: true,
        network: scureNetwork,
      });

      if (!selectionResult || !selectionResult.tx) {
        throw new Error('Insufficient funds: unable to find suitable UTXO combination');
      }

      log('UTXO selection completed:', {
        fee: selectionResult.fee?.toString(),
        weight: selectionResult.weight,
        changeUsed: selectionResult.change,
        inputs: selectionResult.inputs?.length,
        outputs: selectionResult.outputs?.length,
      });
    } catch (blockstreamError) {
      console.error('Blockstream API failed:', blockstreamError);
      throw blockstreamError;
    }

    // Use tx created by selector
    const tx: btc.Transaction = selectionResult.tx;
    const amountSats = Math.floor(Number(amount) * 100000000);

    // Build scriptCode for P2WPKH (BIP-143) from pubkey hash
    const publicKeyBuffer = Buffer.from(publicKey.slice(2), 'hex');
    const spend = btc.p2wpkh(publicKeyBuffer, scureNetwork);
    const scriptCode = btc.OutScript.encode({ type: 'pkh', hash: spend.hash! });

    // Create signature preimages (one per input) using library helper
    const toSignArray: Uint8Array[] = [];
    for (let i = 0; i < tx.inputsLength; i++) {
      const input = tx.getInput(i);
      if (!input.witnessUtxo) throw new Error('Missing witnessUtxo for input');
      const preimage = tx.preimageWitnessV0(i, scriptCode, btc.SigHash.ALL, input.witnessUtxo.amount);
      toSignArray.push(preimage);
    }

    // Build selected inputs summary for downstream usage (amounts for finalize)
    const selectedInputs = Array.from({ length: tx.inputsLength }).map((_, i) => {
      const inp = tx.getInput(i);
      if (inp.index === undefined) throw new Error('Missing input index');
      return {
        txid: Buffer.from(inp.txid as Uint8Array).toString('hex'),
        vout: inp.index as number,
        value: Number(inp.witnessUtxo!.amount),
      };
    });

    const totalInputValue = selectedInputs.reduce((acc, i) => acc + i.value, 0);
    const fee = Number(tx.fee); // prefer tx.fee over estimator

    // Optional: log fee, vsize and approx rate
    // tx.vsize requires finalized tx (with signatures). Use estimator weight -> vsize instead.
    const estWeight = selectionResult?.weight || 0;
    const vsizeEst = estWeight ? Math.ceil(estWeight / 4) : 0;
    const approxRate = vsizeEst ? Math.ceil(fee / vsizeEst) : 0;
    log(`Transaction fee: ${fee} sats, est vsize: ${vsizeEst} vB, ~rate: ${approxRate} sat/vB, Efficiency: ${(totalInputValue / (amountSats + fee)).toFixed(2)}x`);

    return {
      toSign: toSignArray, // One hash per input
      tx,
      selectedInputs,
      fee,
      efficiency: totalInputValue / (amountSats + fee)
    }
  } else if (tokenInfo.chainType === 'EVM' && tokenInfo.contractAddress) {
    const rpcUrl = LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]?.rpcUrls[0];
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const tokenContract = new ethers.Contract(tokenInfo.contractAddress, ERC20_ABI, provider);
    
    const decimals = await tokenContract.decimals();
    const amountInWei = ethers.utils.parseUnits(amount, decimals);
    
    const iface = new ethers.utils.Interface(ERC20_ABI);
    const data = iface.encodeFunctionData("transfer", [recipientAddress, amountInWei]);
    
    // Get fee data required for EIP-1559
    const feeData = await provider.getFeeData();
    const nonce = await provider.getTransactionCount(sendAddress);
    
    // Use standard buffer multiplier
    const maxPriorityFeePerGasValue = feeData.maxPriorityFeePerGas || ethers.utils.parseUnits("1", "gwei");
    let maxFeePerGasValue = feeData.maxFeePerGas || maxPriorityFeePerGasValue.mul(2);
    
    // Use same 2x buffer for all networks
    maxFeePerGasValue = maxFeePerGasValue.mul(2);
    
    // Transaction data for gas estimation (includes from field)
    const txDataForEstimate = {
      from: sendAddress,
      to: tokenInfo.contractAddress,
      value: "0x0",
      data,
      type: 2, // EIP-1559
      maxFeePerGas: maxFeePerGasValue.toHexString(),
      maxPriorityFeePerGas: maxPriorityFeePerGasValue.toHexString(),
      chainId: LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]?.chainId,
      nonce,
    };

    // Estimate gas
    const estimatedGas = await provider.estimateGas(txDataForEstimate);
    
    // Create final transaction object (without from field)
    const txData = {
      to: tokenInfo.contractAddress,
      value: "0x0",
      data,
      type: 2, // EIP-1559
      maxFeePerGas: maxFeePerGasValue.toHexString(),
      maxPriorityFeePerGas: maxPriorityFeePerGasValue.toHexString(),
      chainId: LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]?.chainId,
      nonce,
      gasLimit: estimatedGas.toNumber(),
    };

    const toSign = ethers.utils.arrayify(
      ethers.utils.keccak256(ethers.utils.serializeTransaction(txData))
    )
    
    return {
      toSign,
      unsignedTransaction: txData,
    }
  }

  // This should never be reached, but TypeScript requires a return statement
  throw new Error(`Unsupported token type: ${tokenType}`)
}

export const broadcastTransactionByTokenType = async ({
  tokenType,
  options,
}: {
  tokenType: TokenType;
  options: any;
}) => {
  if (tokenType === 'VAST') {
    const data = await broadcastTransactionForVAST({
      options,
    })
    return data?.hash
  } else if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
    const { unsignedTransaction, sig } = options
    const signedAndSerializedTx = ethers.utils.serializeTransaction(
      unsignedTransaction,
      ethers.utils.joinSignature({
          r: '0x' + sig.r.substring(2),
          s: '0x' + sig.s,
          v: sig.v,
      })
    );

    const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]
    const provider = new ethers.providers.JsonRpcProvider(LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]?.rpcUrls[0]);

    const txReceipt = await provider.sendTransaction(signedAndSerializedTx);
    return txReceipt.hash
  } else if (tokenType === 'BTC') {
    const { sig, publicKey, tx } = options
    
    const signatures = sig;
    const inputCount = tx.inputsLength;
    
    // Ensure we have the right number of signatures
    if (signatures.length !== inputCount) {
      throw new Error(`Signature count mismatch: expected ${inputCount}, got ${signatures.length}`);
    }
    
    // Create public key buffer
    const publicKeyBuffer = Buffer.from(publicKey.slice(2), "hex");
    
    // Process each signature and add to transaction inputs for SegWit
    for (let i = 0; i < signatures.length; i++) {
      const currentSig = signatures[i];
      let r = Buffer.from(currentSig.r, "hex");
      let s = Buffer.from(currentSig.s, "hex");
      const rBN = new BN(r);
      let sBN = new BN(s);
      
      const secp256k1 = new EC("secp256k1");
      const n = secp256k1.curve.n;
      
      if (sBN.cmp(n.divn(2)) === 1) {
        sBN = n.sub(sBN);
      }
      
      // @ts-ignore
      r = rBN.toArrayLike(Buffer, "be", 32);
      // @ts-ignore
      s = sBN.toArrayLike(Buffer, "be", 32);
      
      function ensurePositive(buffer: Buffer): Buffer {
        if (buffer[0] & 0x80) {
          const newBuffer = Buffer.alloc(buffer.length + 1);
          newBuffer[0] = 0x00;
          buffer.copy(newBuffer, 1);
          return newBuffer;
        }
        return buffer;
      }
      
      // @ts-ignore
      const positiveR = ensurePositive(r);
      // @ts-ignore
      const positiveS = ensurePositive(s);
      
      let derSignature;
      try {
        derSignature = bip66.encode(positiveR, positiveS);
      } catch (error) {
        console.error(`Error during DER encoding for input ${i}:`, error);
        throw error;
      }

      const signatureWithHashType = Buffer.concat([
        derSignature,
        Buffer.from([0x01]), // SIGHASH_ALL
      ]);
      
      // For SegWit P2WPKH, ensure witnessUtxo is present and set partial signature
      const inp = tx.getInput(i);
      const amount = inp.witnessUtxo?.amount;
      tx.updateInput(i, {
        witnessUtxo: {
          script: btc.p2wpkh(publicKeyBuffer, scureNetwork).script,
          amount: amount !== undefined ? amount : 0n,
        },
        // PSBT partialSig format: [[pubkey, signature]]
        partialSig: [[publicKeyBuffer, signatureWithHashType]],
      });
    }
    
    // Finalize the transaction
    tx.finalize();
    const txHex = tx.hex;
    
    const broadcastResponse = await fetch(BROADCAST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: txHex,
    });
    
    if (!broadcastResponse.ok) {
      const errorText = await broadcastResponse.text();
      throw new Error(`Error broadcasting transaction: ${errorText}`);
    }
    
    const txid = await broadcastResponse.text();
    return txid
  }
}

export const estimateGasFee = async ({
  tokenType,
  balance
}: {
  tokenType: TokenType;
  balance: string;
}) => {
  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType];
  
  try {
    if (tokenType === 'VAST') {
      return {
        estimatedFee: "0",
        isSufficientForFee: true,
        remainingBalance: balance
      };
    } else if (tokenInfo.chainType === 'EVM') {
      const rpcUrl = LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]?.rpcUrls[0];
      if (!rpcUrl) {
        throw new Error(`Chain ${tokenInfo.chainName} not found in LIT_CHAINS`);
      }
      const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
      
      const feeData = await provider.getFeeData();
      let estimatedGasLimit: number;
      
      if (tokenInfo.contractAddress) {
        // ERC20 token transfers (estimate higher gas usage)
        estimatedGasLimit = 65000; // Common gas limit for ERC20 transfers
      } else {
        // Native token transfers (ETH)
        estimatedGasLimit = 21000; // Standard gas for ETH transfers
      }
      
      // Calculate fee based on transaction type
      let estimatedFee: string;
      
      if (feeData.maxFeePerGas) {
        // EIP-1559 transaction
        const priorityFee = feeData.maxPriorityFeePerGas || ethers.utils.parseUnits("1", "gwei");
        const maxFeePerGas = feeData.maxFeePerGas;
        
        // Calculate with some buffer for price fluctuations
        const bufferedMaxFee = maxFeePerGas.mul(12).div(10); // Add 20% buffer
        const estimatedWei = bufferedMaxFee.mul(estimatedGasLimit);
        estimatedFee = ethers.utils.formatEther(estimatedWei);
      } else {
        // Legacy transaction
        const gasPrice = feeData.gasPrice || ethers.utils.parseUnits("20", "gwei");
        const bufferedGasPrice = gasPrice.mul(12).div(10); // Add 20% buffer
        const estimatedWei = bufferedGasPrice.mul(estimatedGasLimit);
        estimatedFee = ethers.utils.formatEther(estimatedWei);
      }
      
      // Check if sufficient balance
      const numBalance = parseFloat(balance);
      const numFee = parseFloat(estimatedFee);
      const isSufficientForFee = numBalance >= numFee;
      
      return {
        estimatedFee,
        isSufficientForFee,
        remainingBalance: isSufficientForFee ? (numBalance - numFee).toString() : "0"
      };
    } else if (tokenInfo.chainType === 'UTXO') {
      // SegWit fee calculation for Bitcoin
      try {
        // Directly call Blockstream API for fee rates
        const response = await fetch(`${btcConfig.blockstreamBaseUrl}/api/fee-estimates`);
        if (!response.ok) throw new Error('Fee API failed');

        const feeRates = await response.json();

        // Use a simple fee rate (sat/vByte) - prefer faster confirmation
        const feeRate = feeRates['1'] || feeRates['2'] || feeRates['3'] || 10; // fallback to 10 sat/vB

        // SegWit transaction size estimate: base(10.5) + inputs(68 each) + outputs(31 each)
        // For P2WPKH: input size is ~68 vBytes (41 base + 27 witness), output size is ~31 vBytes
        const estimatedInputs = 2; // Average case assumption
        const estimatedOutputs = 2; // One for recipient, one for change
        const txSize = 10.5 + (estimatedInputs * 68) + (estimatedOutputs * 31);
        const feeSats = Math.ceil(feeRate * txSize);
        const estimatedFee = parseFloat((feeSats / 100000000).toFixed(8)).toString(); // Convert to BTC with proper precision

        const numBalance = parseFloat(balance);
        const numFee = parseFloat(estimatedFee);
        const isSufficientForFee = numBalance >= numFee;

        return {
          estimatedFee,
          isSufficientForFee,
          remainingBalance: isSufficientForFee ? (numBalance - numFee).toString() : "0"
        };
      } catch (error) {
        // Simple fallback if API fails
        const estimatedFee = "0.0001"; // 0.0001 BTC fallback
        const numBalance = parseFloat(balance);
        const numFee = parseFloat(estimatedFee);
        const isSufficientForFee = numBalance >= numFee;

        return {
          estimatedFee,
          isSufficientForFee,
          remainingBalance: isSufficientForFee ? (numBalance - numFee).toString() : "0"
        };
      }
    }
    
    // Default response for unsupported chains
    return {
      estimatedFee: "0",
      isSufficientForFee: true,
      remainingBalance: balance
    };
  } catch (error) {
    console.error("Error estimating gas fee:", error);
    return {
      estimatedFee: "0",
      error: `Failed to estimate gas fee: ${error instanceof Error ? error.message : String(error)}`,
      isSufficientForFee: false,
      remainingBalance: balance
    };
  }
}
