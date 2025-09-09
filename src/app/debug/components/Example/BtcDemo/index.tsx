"use client";
import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as btc from "@scure/btc-signer";
import elliptic from "elliptic";
import { getToSignTransactionByTokenType, broadcastTransactionByTokenType } from "@/lib/web3/transaction";
import { log } from "@/lib/utils";

const EC = elliptic.ec;

export function BtcDemo() {
  const [privKeyHex, setPrivKeyHex] = useState<string>("eb3c7c16a41ddeeb6177ced920c2b77bcbf1035c0b25fb353096d3aee6070668");
  const [pubKeyHex, setPubKeyHex] = useState<string>("037992bb575630b81e454550ce4c24f2d775505ef3555fb637b99274de1610a936"); // compressed
  const [address, setAddress] = useState<string>("tb1quk50fftahzaz56ceut9djhmz9w28t3llsrd8nj");
  const [to, setTo] = useState<string>("tb1qk3tmmpryp2pgl7sm88tkqc28knxwgsesu7twwl");
  const [amount, setAmount] = useState<string>("0.00021"); // BTC
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string>("");

  const networkLabel = useMemo(() => {
    const isProd = process.env.NEXT_PUBLIC_ENV?.toLowerCase() === 'production';
    return isProd ? 'mainnet' : 'testnet';
  }, []);

  const handleGenerate = useCallback(() => {
    // Generate random private key
    const priv = btc.utils.randomPrivateKeyBytes();
    const privHex = Buffer.from(priv).toString('hex');
    const ec = new EC('secp256k1');
    const kp = ec.keyFromPrivate(privHex, 'hex');
    const pubCompressedHex = kp.getPublic(true, 'hex');

    // Derive SegWit P2WPKH address via scure
    const addr = btc.p2wpkh(Buffer.from(pubCompressedHex, 'hex'), (process.env.NEXT_PUBLIC_ENV?.toLowerCase() === 'production') ? btc.NETWORK : btc.TEST_NETWORK).address!;

    setPrivKeyHex(privHex);
    setPubKeyHex(pubCompressedHex);
    setAddress(addr);
    setResult("");
  }, []);

  const handleSend = useCallback(async () => {
    try {
      if (!privKeyHex || !pubKeyHex || !address || !to) {
        setResult('Please generate keys and fill all fields.');
        return;
      }
      setSending(true);
      setResult('Preparing transaction...');

      // 1) Build tx + preimages using our transaction.ts
      const txData = await getToSignTransactionByTokenType({
        tokenType: 'BTC' as any,
        options: {
          sendAddress: address,
          recipientAddress: to,
          amount, // BTC string
          publicKey: '0x' + pubKeyHex,
        },
      });

      if (!('tx' in txData)) {
        throw new Error('Unexpected tx data for BTC');
      }

      // txData.toSign is string[] (0x-prefixed 32-byte hashes) for BTC
      const toSignHex = txData.toSign as string[];
      const toSignArray: Uint8Array[] = toSignHex.map((h) => {
        const hex = typeof h === 'string' && h.startsWith('0x') ? h.slice(2) : (h as string);
        return new Uint8Array(Buffer.from(hex, 'hex'));
      });
      setResult(`Signing ${toSignArray.length} input(s)...`);

      // 2) Locally ECDSA-sign each preimage using the provided private key
      const ec = new EC('secp256k1');
      const key = ec.keyFromPrivate(privKeyHex, 'hex');
      const signatures = toSignArray.map((msg) => {
        const sig = key.sign(Buffer.from(msg), { canonical: true });
        return {
          r: sig.r.toString(16),
          s: sig.s.toString(16),
        };
      });

      // 3) Broadcast using our transaction.ts helper
      setResult('Broadcasting...');
      const txid = await broadcastTransactionByTokenType({
        tokenType: 'BTC' as any,
        options: {
          tx: txData.tx,
          sig: signatures,
          publicKey: '0x' + pubKeyHex,
        },
      });

      setResult(`Sent! txid: ${txid}`);
      log('Broadcasted BTC txid', txid);
    } catch (e: any) {
      console.error(e);
      setResult(`Error: ${e?.message || String(e)}`);
    } finally {
      setSending(false);
    }
  }, [privKeyHex, pubKeyHex, address, to, amount]);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">BTC P2WPKH Demo ({networkLabel})</h3>

      <div className="flex gap-2 flex-wrap items-center">
        <Button onClick={handleGenerate}>Generate Keys & Address</Button>
        <div className="text-sm opacity-70">Generates random secp256k1 keypair</div>
      </div>

      <div className="space-y-2">
        <div className="break-all text-sm"><b>PrivKey:</b> {privKeyHex || '-'}</div>
        <div className="break-all text-sm"><b>PubKey (compressed):</b> {pubKeyHex || '-'}</div>
        <div className="break-all text-sm"><b>Address:</b> {address || '-'}</div>
      </div>

      <div className="grid gap-2 max-w-xl">
        <label className="text-sm">Recipient (bech32 or compatible)</label>
        <Input value={to} onChange={(e) => setTo(e.target.value)} placeholder="tb1..." />
        <label className="text-sm">Amount (BTC)</label>
        <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      <div className="flex gap-2 items-center">
        <Button disabled={sending || !address || !to} onClick={handleSend}>
          {sending ? 'Sending...' : 'Send (sign locally)'}
        </Button>
        <div className="text-xs opacity-60">Uses getToSignTransactionByTokenType + broadcastTransactionByTokenType</div>
      </div>

      {result && <div className="text-sm mt-2 break-all">{result}</div>}
    </div>
  );
}
