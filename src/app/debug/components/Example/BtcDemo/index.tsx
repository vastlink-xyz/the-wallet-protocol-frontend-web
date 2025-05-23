import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { useEffect, useState } from "react";
import * as bitcoinjs from "bitcoinjs-lib";
import { log } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { litNodeClient } from "@/lib/lit";
import { btcDemoLitActionCode } from "./litAction";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import elliptic from "elliptic";
import * as bip66 from "bip66";
import BN from "bn.js";
// btc dependencies

// Testnet transaction broadcast URL
const BROADCAST_URL = "https://mempool.space/testnet/api/tx";
const EC = elliptic.ec;
bitcoinjs.initEccLib(ecc);

interface BtcDemoProps {
  authMethod: AuthMethod;
  sessionPkp: IRelayPKP | null;
  litactionPkp: IRelayPKP | null;
  sessionSigs: SessionSigs | null;
}

export function BtcDemo({ authMethod, sessionPkp, litactionPkp, sessionSigs }: BtcDemoProps) {
  const [btcAddress, setBtcAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toAddress, setToAddress] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [txResult, setTxResult] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (!sessionPkp) {
      return;
    }

    // get the btc address from the public key
    const publicKey = sessionPkp.publicKey.slice(2);
    const pubkeyBuffer = Buffer.from(publicKey, "hex");
    const pkpBTCAddress = bitcoinjs.payments.p2pkh({
      pubkey: pubkeyBuffer,
      network: bitcoinjs.networks.testnet,
    }).address;

    if (pkpBTCAddress) {
      setBtcAddress(pkpBTCAddress);
      // setToAddress('tb1qn85hsmq7td49n8h62st4epcel4806um928spxw');
      setToAddress('mrLsGGKoanYPxoVYPQxwFDF68tgzhfNnPs');
    }
  }, [sessionPkp]);

  const fetchBalance = async () => {
    if (!btcAddress) return;
    
    try {
      setIsLoading(true);
      // Using BlockCypher API for testnet
      const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/balance`);
      const data = await response.json();
      
      // BlockCypher returns balance in satoshis, converting to BTC (1 BTC = 100,000,000 satoshis)
      const balanceInBtc = data.final_balance / 100000000;
      setBalance(balanceInBtc);
      log('BTC Balance', balanceInBtc);
    } catch (error) {
      console.error("Error fetching BTC balance:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (btcAddress) {
      fetchBalance();
    }
  }, [btcAddress]);

  const handleSend = async () => {
    if (!btcAddress || !sessionSigs || !sessionPkp) {
      console.error("Missing required parameters");
      return;
    }
    
    try {
      setIsSending(true);
      setTxResult(null);
      setStatus("Fetching UTXO information...");
      
      // 1. Get UTXO information
      const response = await fetch(`https://mempool.space/testnet/api/address/${btcAddress}/utxo`);
      const utxos = await response.json();
      
      if (!utxos || utxos.length === 0) {
        throw new Error("No UTXOs found for this address");
      }
      
      const utxo = utxos[0];
      // const amountToSend = BigInt(utxo.value - 500); // Subtract miner fee
      const amountToSend = 1000;
      
      const utxoTxResponse = await fetch(`https://mempool.space/testnet/api/tx/${utxo.txid}`);
      const utxoTxDetails = await utxoTxResponse.json();
      const scriptPubKey = utxoTxDetails.vout[utxo.vout].scriptpubkey;
      
      setStatus("Creating transaction...");
      // 2. Create transaction
      const tx = new bitcoinjs.Transaction();
      tx.version = 2;
      
      tx.addInput(Buffer.from(utxo.txid, "hex").reverse(), utxo.vout);
      const network = bitcoinjs.networks.testnet;
      tx.addOutput(
        bitcoinjs.address.toOutputScript(toAddress!, network),
        Number(amountToSend)
      );
      
      const scriptPubKeyBuffer = Buffer.from(scriptPubKey, "hex");
      const sighash = tx.hashForSignature(
        0,
        bitcoinjs.script.compile(scriptPubKeyBuffer),
        bitcoinjs.Transaction.SIGHASH_ALL
      );
      
      setStatus("Executing Lit Action to sign transaction...");
      // 3. Sign with Lit Protocol
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }
      
      const litActionResponse = await litNodeClient.executeJs({
        code: btcDemoLitActionCode,
        sessionSigs,
        jsParams: {
          toSign: sighash,
          publicKey: sessionPkp.publicKey,
        },
      }) as any;

      const sig = litActionResponse.signatures.btcSignature

      // log('litActionResponse', litActionResponse)
      // const sig = JSON.parse(litActionResponse.response)
      log('sig', sig)

      // return
      
      setStatus("Converting signature...");
      // 4. Convert signature format
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
      
      setStatus("Setting input script...");
      // 5. Set input script
      const signatureWithHashType = Buffer.concat([
        derSignature,
        Buffer.from([bitcoinjs.Transaction.SIGHASH_ALL]),
      ]);
      
      const scriptSig = bitcoinjs.script.compile([
        signatureWithHashType,
        Buffer.from(sessionPkp.publicKey.slice(2), "hex"),
      ]);
      
      tx.setInputScript(0, scriptSig);
      const txHex = tx.toHex();
      
      setStatus("Broadcasting transaction...");
      // 6. Broadcast transaction
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
      setStatus("");
      setTxResult(`Transaction sent successfully! TXID: ${txid}`);
      
      // 7. Refresh balance
      setTimeout(() => fetchBalance(), 3000);
      
    } catch (error) {
      console.error("Error sending BTC transaction:", error);
      setTxResult(`Error sending transaction: ${error instanceof Error ? error.message : "Unknown error"}`);
      setStatus("");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <h3>BTC Demo</h3>
      {btcAddress && (
        <div>
          <p>Address: {btcAddress}</p>
          <p>Balance: {isLoading ? "Loading..." : balance !== null ? `${balance} BTC` : "Unknown"}</p>
          <Button onClick={fetchBalance} disabled={isLoading}>
            Refresh Balance
          </Button>
        </div>
      )}
      <Button
        onClick={handleSend}
        disabled={isSending || !btcAddress}
      >
        {isSending ? "Sending..." : "Send Transaction"}
      </Button>
      {status && <p className="mt-2">{status}</p>}
      {txResult && <p className="mt-2">{txResult}</p>}
    </div>
  );
}
