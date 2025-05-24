import { ethers } from "ethers";
import { TokenType } from "./token";
import { LIT_CHAINS } from "@lit-protocol/constants";
import * as bitcoinjs from "bitcoinjs-lib";
import { log } from "@lit-protocol/lit-auth-client/src/lib/utils";
import BN from "bn.js";
import elliptic from "elliptic";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import * as bip66 from "bip66";

const rpcUrl = LIT_CHAINS['sepolia']?.rpcUrls[0];
const rpcProvider = new ethers.providers.JsonRpcProvider(rpcUrl);

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
  if (tokenType === 'ETH') {
    const { sendAddress, recipientAddress, amount } = options
    // Get nonce
    const nonce = await rpcProvider.getTransactionCount(sendAddress)
        
    // Get gas price
    const gasPrice = await rpcProvider.getGasPrice()
  
    // Create the transaction object
    const txData = {
      to: recipientAddress,
      value: ethers.utils.parseEther(amount).toHexString(),
      gasPrice: gasPrice.toHexString(),
      gasLimit: 21000, // Standard gas limit for ETH transfer
      nonce,
      chainId: LIT_CHAINS['sepolia'].chainId,
    }

    const toSign = ethers.utils.arrayify(
      ethers.utils.keccak256(ethers.utils.serializeTransaction(txData))
    )
    
    return {
      toSign,
      unsignedTransaction: txData,
    }
  } else if (tokenType === 'BTC') {
    const { sendAddress, recipientAddress, amount } = options
    console.log('sendAddress', sendAddress)
    console.log('recipientAddress', recipientAddress)
    console.log('amount', amount)
    const response = await fetch(`https://mempool.space/testnet/api/address/${sendAddress}/utxo`);
    const utxos = await response.json();
    log('utxos', utxos)
    const utxo = utxos[0];

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
  }
}

export const broadcastTransactionByTokenType = async ({
  tokenType,
  options,
}: {
  tokenType: TokenType;
  options: any;
}) => {
  if (tokenType === 'ETH') {
    const { unsignedTransaction, sig } = options
    const signedAndSerializedTx = ethers.utils.serializeTransaction(
      unsignedTransaction,
      ethers.utils.joinSignature({
          r: '0x' + sig.r.substring(2),
          s: '0x' + sig.s,
          v: sig.v,
      })
    );

    const txReceipt = await rpcProvider.sendTransaction(signedAndSerializedTx);
    return txReceipt
  } else if (tokenType === 'BTC') {
    const { sig, publicKey, tx } = options
    let r = Buffer.from(sig.r, "hex");
    let s = Buffer.from(sig.s, "hex");
    let rBN = new BN(r);
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
