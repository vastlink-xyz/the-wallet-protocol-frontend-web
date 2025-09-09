import { ethers } from "ethers";
import { SUPPORTED_TOKENS_INFO, TokenType } from "./token";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { getBtcToSignTransaction, broadcastBtcTransaction, estimateBtcFeeAccurate } from '@/lib/web3/btc';
import type * as btc from '@scure/btc-signer';
import { log } from "../utils";
import { ERC20_ABI } from "@/constants/abis/erc20";
import { broadcastTransactionForVAST, getToSignTransactionForVAST } from "./vast";
// Note: use @scure/btc-signer preimage helpers instead of manual hashing

// Type definitions for transaction data
interface BaseTransactionData {
  // NOTE: For BTC, this will be string[] (0x-prefixed 32-byte hex preimages).
  // For EVM & VAST, this remains Uint8Array.
  toSign: Uint8Array | Uint8Array[] | Buffer | Buffer[] | string | string[];
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
  toSign: string[]; // BTC uses one preimage per input (SegWit) - hex strings for Lit
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

// BTC-specific build/broadcast logic lives in src/lib/web3/btc.ts

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
    return getToSignTransactionForVAST({ options });
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
    const res = await getBtcToSignTransaction({
      sendAddress,
      recipientAddress,
      amount,
      publicKey,
    });
    return res as unknown as BTCTransactionData;
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
    return await broadcastBtcTransaction(options);
  }
}

export const estimateGasFee = async ({
  tokenType,
  balance,
  // BTC accurate estimation params (optional; if provided, use accurate path)
  sendAddress,
  recipientAddress,
  amount,
}: {
  tokenType: TokenType;
  balance: string;
  sendAddress?: string;
  recipientAddress?: string;
  amount?: string;
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
      if (!sendAddress || !amount) {
        throw new Error('BTC fee estimation requires sendAddress and amount');
      }
      return await estimateBtcFeeAccurate({
        sendAddress,
        recipientAddress: recipientAddress || sendAddress,
        amount,
        balance,
      });
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
