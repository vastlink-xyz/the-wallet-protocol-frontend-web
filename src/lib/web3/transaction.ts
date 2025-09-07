import { ethers } from "ethers";
import { SUPPORTED_TOKENS_INFO, TokenType } from "./token";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { btcConfig } from '@/lib/web3/btc';
import * as bitcoinjs from "bitcoinjs-lib";
import BN from "bn.js";
import elliptic from "elliptic";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import * as bip66 from "bip66";
import { log } from "../utils";
import { ERC20_ABI } from "@/constants/abis/erc20";
import { broadcastTransactionForVAST, getToSignTransactionForVAST } from "./vast";
import { BitcoinBoxSelection } from "@rosen-bridge/bitcoin-utxo-selection";
import { DummyLogger } from "@rosen-bridge/abstract-logger";

const BROADCAST_URL = `${btcConfig.blockstreamBaseUrl}/api/tx`;
const EC = elliptic.ec;
bitcoinjs.initEccLib(ecc);

// Smart UTXO selection using rosen-bridge library
const selectOptimalUTXOsWithRosenBridge = async (
  utxos: any[], 
  targetAmount: number, 
  feeRate: number
) => {
  // Convert UTXOs to the format expected by rosen-bridge
  const bitcoinUtxos = utxos.map(utxo => ({
    txId: utxo.txid,
    index: utxo.vout,
    value: BigInt(utxo.value)
  }));

  // Create fee estimator function
  const feeEstimator = (selectedBoxes: any[], changeBoxesCount: number) => {
    // Calculate transaction size: base(10) + inputs(148 each) + outputs(34 each)
    const inputs = selectedBoxes.length;
    const outputs = 1 + changeBoxesCount; // 1 for recipient + change outputs
    const txSize = 10 + (inputs * 148) + (outputs * 34);
    return BigInt(Math.ceil(feeRate * txSize));
  };

  // Create selector instance
  const selector = new BitcoinBoxSelection(new DummyLogger());

  // Define required assets (amount in satoshis as BigInt)
  const requiredAssets = {
    nativeToken: BigInt(targetAmount),
    tokens: [],
  };

  try {
    // Get covering UTXOs
    const result = await selector.getCoveringBoxes(
      requiredAssets,
      [], // Forbidden box IDs
      new Map(), // Tracking map
      bitcoinUtxos.values(), // Convert array to iterator
      546n, // Minimum box value (dust limit)
      undefined, // Max tokens count (irrelevant for Bitcoin)
      feeEstimator
    );
    log('Rosen-bridge UTXO selection result:', result);

    if (!result.covered) {
      throw new Error('Unable to find suitable UTXO combination for this transaction');
    }

    // Convert back to original format
    const selectedInputs = result.boxes.map(box => ({
      txid: box.txId,
      vout: box.index,
      value: Number(box.value)
    }));

    // Calculate total input value and precise fee
    const totalInputValue = selectedInputs.reduce((sum, input) => sum + input.value, 0);
    const txSize = 10 + (selectedInputs.length * 148) + (2 * 34); // Base + inputs + outputs
    const estimatedFee = Math.ceil(feeRate * txSize);
    const change = totalInputValue - targetAmount - estimatedFee;

    return {
      inputs: selectedInputs,
      fee: estimatedFee,
      change: Math.max(0, change),
      totalInputValue
    };
  } catch (error) {
    console.error('Rosen-bridge UTXO selection failed:', error);
    throw new Error(`UTXO selection failed: ${error instanceof Error ? error.message : String(error)}`);
  }
};

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
    // Use Blockstream API with rosen-bridge UTXO selection
    let utxos, selectedInputs, scriptPubKeys: { [key: string]: string } = {};
    let selectionResult: any;

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
          feeRate = feeRates['3'] || feeRates['6'] || feeRates['10'] || 10; // Use medium priority
        }
      } catch (error) {
        console.warn('Failed to fetch dynamic fee, using fallback:', error);
      }

      // Use rosen-bridge for optimal UTXO selection
      selectionResult = await selectOptimalUTXOsWithRosenBridge(utxos, amountSats, feeRate);
      
      log('Optimal UTXO selection completed:', selectionResult);

      // Fetch scriptPubKey for each selected input
      for (const input of selectionResult.inputs) {
        const utxoTxResponse = await fetch(`${btcConfig.blockstreamBaseUrl}/api/tx/${input.txid}`);
        if (!utxoTxResponse.ok) throw new Error(`Blockstream TX API failed: ${utxoTxResponse.status}`);
        const utxoTxDetails = await utxoTxResponse.json();
        scriptPubKeys[`${input.txid}:${input.vout}`] = utxoTxDetails.vout[input.vout].scriptpubkey;
      }

      selectedInputs = selectionResult.inputs;
    } catch (blockstreamError) {
      console.error('Blockstream API failed:', blockstreamError);
      throw blockstreamError;
    }

    const tx = new bitcoinjs.Transaction();
    tx.version = 2;
    const network = btcConfig.network;
    const amountSats = Math.floor(Number(amount) * 100000000);
    const DUST_LIMIT = 546;

    // Add all selected inputs
    for (const input of selectedInputs) {
      tx.addInput(Buffer.from(input.txid, "hex").reverse(), input.vout);
    }

    // Add output for the amount to be sent
    tx.addOutput(
      bitcoinjs.address.toOutputScript(recipientAddress!, network),
      amountSats
    );

    // Add change output if needed
    if (selectionResult.change > DUST_LIMIT) {
      tx.addOutput(
        bitcoinjs.address.toOutputScript(sendAddress, network),
        selectionResult.change
      );
      log(`Added change output: ${selectionResult.change} sats`);
    } else if (selectionResult.change > 0) {
      log(`Change amount ${selectionResult.change} sats is dust, adding to fee`);
    }

    log(`Transaction fee: ${selectionResult.fee} sats, Efficiency: ${(selectionResult.totalInputValue / (amountSats + selectionResult.fee)).toFixed(2)}x`);

    // Create signature hash for the first input (we'll handle multi-input later if needed)
    const firstInput = selectedInputs[0];
    const scriptPubKey = scriptPubKeys[`${firstInput.txid}:${firstInput.vout}`];
    const scriptPubKeyBuffer = Buffer.from(scriptPubKey, "hex");
    const sighash = tx.hashForSignature(
      0,
      bitcoinjs.script.compile(scriptPubKeyBuffer),
      bitcoinjs.Transaction.SIGHASH_ALL
    );
    
    return {
      toSign: sighash,
      tx,
      selectedInputs,
      scriptPubKeys,
      fee: selectionResult.fee,
      efficiency: selectionResult.totalInputValue / (amountSats + selectionResult.fee)
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
      // Simple dynamic fee calculation for Bitcoin
      try {
        // Directly call Blockstream API for fee rates
        const response = await fetch(`${btcConfig.blockstreamBaseUrl}/api/fee-estimates`);
        if (!response.ok) throw new Error('Fee API failed');

        const feeRates = await response.json();

        // Use a simple fee rate (sat/vByte) - prefer faster confirmation
        const feeRate = feeRates['1'] || feeRates['2'] || feeRates['3'] || 10; // fallback to 10 sat/vB

        // Simple transaction size estimate: 250 bytes (covers most P2PKH transactions)
        const txSize = 250;
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
