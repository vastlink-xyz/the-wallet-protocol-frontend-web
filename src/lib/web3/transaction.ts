import { ethers } from "ethers";
import { SUPPORTED_TOKENS_INFO, TokenType } from "./token";
import { LIT_CHAINS } from "@lit-protocol/constants";
import * as bitcoinjs from "bitcoinjs-lib";
import BN from "bn.js";
import elliptic from "elliptic";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import * as bip66 from "bip66";
import { log } from "../utils";
import { ERC20_ABI } from "@/constants/abis/erc20";
import { broadcastTransactionForVAST, getToSignTransactionForVAST } from "./vast";

const BROADCAST_URL = "https://mempool.space/testnet/api/tx";
const EC = elliptic.ec;
bitcoinjs.initEccLib(ecc);

export const getToSignTransactionByTokenType = async ({
  tokenType,
  options,
}: {
  tokenType: TokenType;
  options: any;
}) => {
  const { sendAddress, recipientAddress, amount, data } = options
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
      to: any;
      value: string;
      gasPrice: string;
      nonce: number;
      chainId: number;
      data?: string;
      gasLimit?: number;
    } = {
      to: recipientAddress,
      value: ethers.utils.parseEther(amount).toHexString(),
      gasPrice: gasPrice.toHexString(),
      nonce,
      chainId: LIT_CHAINS[chainName]?.chainId,
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
    const response = await fetch(`https://mempool.space/testnet/api/address/${sendAddress}/utxo`);
    const utxos = await response.json();
    log('utxos', utxos)
    // Sort utxos by value in descending order and pick the first one
    const utxo = utxos.sort((a: any, b: any) => b.value - a.value)[0];

    const utxoTxResponse = await fetch(`https://mempool.space/testnet/api/tx/${utxo.txid}`);
    const utxoTxDetails = await utxoTxResponse.json();
    const scriptPubKey = utxoTxDetails.vout[utxo.vout].scriptpubkey;

    const tx = new bitcoinjs.Transaction();
      tx.version = 2;
      
      tx.addInput(Buffer.from(utxo.txid, "hex").reverse(), utxo.vout);
      const network = bitcoinjs.networks.testnet;
      
      const utxoValue = utxo.value;
      const amountSats = Math.floor(Number(amount) * 100000000);
      const minimumFee = 1000; // Assuming a minimum fee of 0.0001 BTC
      
      // Calculate change amount
      const changeAmount = utxoValue - amountSats - minimumFee;
      
      // Add output for the amount to be sent
      tx.addOutput(
        bitcoinjs.address.toOutputScript(recipientAddress!, network),
        amountSats
      );
      
      // If there's change, add it back to the sender
      if (changeAmount > 546) { // 546 sats is the "dust limit" in Bitcoin
        tx.addOutput(
          bitcoinjs.address.toOutputScript(sendAddress, network),
          changeAmount
        );
      }
      
      const scriptPubKeyBuffer = Buffer.from(scriptPubKey, "hex");
      const sighash = tx.hashForSignature(
        0,
        bitcoinjs.script.compile(scriptPubKeyBuffer),
        bitcoinjs.Transaction.SIGHASH_ALL
      );
      
      return {
        toSign: sighash,
        tx,
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
}

export const broadcastTransactionByTokenType = async ({
  tokenType,
  options,
}: {
  tokenType: TokenType;
  options: any;
}) => {
  if (tokenType === 'VAST') {
    return broadcastTransactionForVAST({
      options,
    })
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
    let r = Buffer.from(sig.r, "hex");
    let s = Buffer.from(sig.s, "hex");
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
      console.error("Error during DER encoding:", error);
      throw error;
    }

    const signatureWithHashType = Buffer.concat([
      derSignature,
      Buffer.from([bitcoinjs.Transaction.SIGHASH_ALL]),
    ]);
    
    const scriptSig = bitcoinjs.script.compile([
      signatureWithHashType,
      Buffer.from(publicKey.slice(2), "hex"),
    ]);
    
    tx.setInputScript(0, scriptSig);
    const txHex = tx.toHex();
    
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
      // Dynamic fee calculation based on network congestion for UTXO chains
      try {
        // Use our dedicated API endpoint for Bitcoin fee recommendations
        const feeRatesResponse = await fetch(`/api/btc/mempool/fees`);
        
        if (!feeRatesResponse.ok) {
          throw new Error(`Failed to fetch fee rates: ${feeRatesResponse.status}`);
        }
        
        const feeRates = await feeRatesResponse.json();
        
        // Use fastestFee for higher priority or economyFee for lower cost
        // Rates are in sat/vByte
        const feeRate = feeRates.fastestFee || feeRates.halfHourFee || feeRates.hourFee || 10; // Fallback to 10 sat/vByte
        
        // Estimate transaction size - P2PKH transaction with 1 input and 2 outputs
        // (One for recipient, one for change)
        const estimatedTxSize = 225; // bytes
        
        // Calculate fee in satoshis
        const feeSats = feeRate * estimatedTxSize;
        
        // Convert to BTC (1 BTC = 100,000,000 satoshis)
        const estimatedFee = (feeSats / 100000000).toFixed(8);
        
        // Check if sufficient balance
        const numBalance = parseFloat(balance);
        const numFee = parseFloat(estimatedFee);
        const isSufficientForFee = numBalance >= numFee;
        
        return {
          estimatedFee,
          feeRate: `${feeRate} sat/vB`,
          transactionPriority: feeRate >= feeRates.halfHourFee ? 'high' : 'medium',
          isSufficientForFee,
          remainingBalance: isSufficientForFee ? (numBalance - numFee).toString() : "0"
        };
      } catch (error) {
        console.error("Error fetching dynamic fee rates:", error);
        // Fallback to fixed fee if API call fails
        const estimatedFee = "0.0001"; // Fallback fixed fee
        const numBalance = parseFloat(balance);
        const numFee = parseFloat(estimatedFee);
        const isSufficientForFee = numBalance >= numFee;
        
        return {
          estimatedFee,
          isSufficientForFee,
          remainingBalance: isSufficientForFee ? (numBalance - numFee).toString() : "0",
          note: "Using fallback fixed fee due to error fetching current rates"
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
