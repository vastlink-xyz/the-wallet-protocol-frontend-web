import { IRelayPKP, SessionSigs } from "@lit-protocol/types";
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
import { fetchBtcTodayOutflow } from "@/lib/web3/btc";
// btc dependencies

// Testnet transaction broadcast URL
const BROADCAST_URL = "https://blockstream.info/testnet/api/tx";
const EC = elliptic.ec;
bitcoinjs.initEccLib(ecc);

interface BtcDemoProps {
  litactionPkp: IRelayPKP | null;
  sessionSigs: SessionSigs | null;
}

export function BtcDemo({ litactionPkp, sessionSigs }: BtcDemoProps) {
  const [btcAddress, setBtcAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toAddress, setToAddress] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [txResult, setTxResult] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (!litactionPkp) {
      return;
    }

    // get the btc address from the public key
    const publicKey = litactionPkp.publicKey.slice(2);
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
  }, [litactionPkp]);

  const fetchBalance = async () => {
    if (!btcAddress) return;

    try {
      setIsLoading(true);
      // Using BlockCypher API for testnet
      const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/balance`);
      const data = await response.json();

      // BlockCypher returns balance in satoshis, converting to BTC with proper precision
      const balanceInBtc = parseFloat((data.final_balance / 100000000).toFixed(8));
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
      // fetchBalance();
    }
  }, [btcAddress]);

  const handleSend = async () => {
    if (!btcAddress || !sessionSigs || !litactionPkp) {
      console.error("Missing required parameters");
      return;
    }
    
    try {
      setIsSending(true);
      setTxResult(null);
      setStatus("Fetching UTXO information...");
      
      // 1. Get UTXO information
      const response = await fetch(`https://blockstream.info/testnet/api/address/${btcAddress}/utxo`);
      const utxos = await response.json();
      
      if (!utxos || utxos.length === 0) {
        throw new Error("No UTXOs found for this address");
      }
      
      const utxo = utxos[0];
      
      // Use the actual UTXO value
      const utxoValue = utxo.value;
      // Amount to send (in satoshis)
      const amountToSend = 10000; // 0.0001 BTC = 10000 satoshis
      // Set a reasonable miner fee
      const minimumFee = 1000; // 0.00001 BTC = 1000 satoshis

      // Dust limit constant
      const DUST_LIMIT = 546;

      // Check if the amount to send is dust
      if (amountToSend < DUST_LIMIT) {
        throw new Error(`Amount too small. Minimum amount is ${DUST_LIMIT} satoshis (0.00000546 BTC)`);
      }

      // Calculate change amount
      const changeAmount = utxoValue - amountToSend - minimumFee;

      // Check if balance is sufficient
      if (changeAmount < 0) {
        throw new Error(`Insufficient funds. UTXO value: ${utxoValue / 100000000} BTC, trying to send: ${amountToSend / 100000000} BTC plus fees`);
      }
      
      const utxoTxResponse = await fetch(`https://blockstream.info/testnet/api/tx/${utxo.txid}`);
      const utxoTxDetails = await utxoTxResponse.json();
      const scriptPubKey = utxoTxDetails.vout[utxo.vout].scriptpubkey;
      
      setStatus("Creating transaction...");
      // 2. Create transaction
      const tx = new bitcoinjs.Transaction();
      tx.version = 2;
      
      tx.addInput(Buffer.from(utxo.txid, "hex").reverse(), utxo.vout);
      const network = bitcoinjs.networks.testnet;
      
      // add output for the amount to be sent
      tx.addOutput(
        bitcoinjs.address.toOutputScript(toAddress!, network),
        amountToSend
      );

      // if there's change and it's not dust, add it back to the sender
      if (changeAmount > DUST_LIMIT) {
        tx.addOutput(
          bitcoinjs.address.toOutputScript(btcAddress, network),
          changeAmount
        );
      } else if (changeAmount > 0) {
        // If change is dust, add it to the fee instead
        console.log(`Change amount ${changeAmount} sats is dust, adding to fee. New fee: ${minimumFee + changeAmount} sats`);
      }
      
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
          publicKey: litactionPkp.publicKey,
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
      
      setStatus("Setting input script...");
      // 5. Set input script
      const signatureWithHashType = Buffer.concat([
        derSignature,
        Buffer.from([bitcoinjs.Transaction.SIGHASH_ALL]),
      ]);
      
      const scriptSig = bitcoinjs.script.compile([
        signatureWithHashType,
        Buffer.from(litactionPkp.publicKey.slice(2), "hex"),
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

  const handleFetchTodayOutflow = async () => {
    if (!btcAddress) return;
    const outflow = await fetchBtcTodayOutflow(btcAddress);
    log('Today Outflow', outflow);
  }

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

      <Button
        onClick={handleFetchTodayOutflow}
      >
        Today Outflow
      </Button>

      {status && <p className="mt-2">{status}</p>}
      {txResult && <p className="mt-2">{txResult}</p>}
    </div>
  );
}
