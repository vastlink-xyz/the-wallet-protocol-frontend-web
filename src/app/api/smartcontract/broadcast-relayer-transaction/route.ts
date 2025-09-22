import { NextRequest, NextResponse } from "next/server";
import { Defender } from "@openzeppelin/defender-sdk";
import { ethers } from "ethers";
import { VAST_FORWARDER_ABI } from "@/constants/abis/vast-forwarder";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { SUPPORTED_TOKENS_INFO } from "@/lib/web3/token";
import { log } from "@/lib/utils";

export const runtime = 'nodejs';

// Encode and estimate gas for Forwarder.execute using ethers (1.5x buffer)
function encodeForwarderExecuteData(requestData: any) {
  const iface = new ethers.utils.Interface(VAST_FORWARDER_ABI as any);
  return iface.encodeFunctionData('execute', [requestData]);
}

async function estimateForwarderExecuteGas(
  provider: ethers.providers.JsonRpcProvider,
  gasPayer: string,
  forwarderAddress: string,
  requestData: any,
  bufferMultiplier = 1.5,
) {
  const data = encodeForwarderExecuteData(requestData);
  const estimate = await provider.estimateGas({ from: gasPayer, to: forwarderAddress, data });
  const numerator = Math.round(bufferMultiplier * 10);
  const buffered = estimate.mul(numerator).div(10);
  return { data, gasLimit: buffered.toString() };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { serializedRequest, signature } = body || {};

    if (!serializedRequest || !signature) {
      return NextResponse.json({ error: "serializedRequest and signature are required" }, { status: 400 });
    }

    const forwarderAddress = process.env.NEXT_PUBLIC_VAST_FORWARDER_CONTRACT_ADDRESS;
    const gasPayer = process.env.VAST_GAS_PAYER_ADDRESS;
    const relayerApiKey = process.env.DEFENDER_RELAYER_API_KEY;
    const relayerApiSecret = process.env.DEFENDER_RELAYER_API_SECRET;

    if (!forwarderAddress) {
      return NextResponse.json({ error: "Missing VAST forwarder address (VAST_FORWARDER_ADDRESS or NEXT_PUBLIC_VAST_FORWARDER_CONTRACT_ADDRESS)" }, { status: 500 });
    }
    if (!gasPayer) {
      return NextResponse.json({ error: "Missing VAST_GAS_PAYER_ADDRESS" }, { status: 500 });
    }
    if (!relayerApiKey || !relayerApiSecret) {
      return NextResponse.json({ error: "Missing Defender credentials (DEFENDER_RELAYER_API_KEY / DEFENDER_RELAYER_API_SECRET)" }, { status: 500 });
    }

    // Prefer env overrides; fall back to LIT default for the configured chain
    const chainName = SUPPORTED_TOKENS_INFO.VAST.chainName as keyof typeof LIT_CHAINS;
    const rpcUrl = LIT_CHAINS[chainName]?.rpcUrls?.[0];
    log({ chainName, rpcUrl}, 'rpc selection');
    if (!rpcUrl) {
      return NextResponse.json({ error: "Missing RPC URL (derive from LIT_CHAINS or set BASE_RPC_URL/VAST_FORWARDER_CHAIN_RPC)" }, { status: 500 });
    }
    const provider = new ethers.providers.JsonRpcProvider({
      skipFetchSetup: true, // fix the could not detect network issue for ethers.js 5.X and api router
      url: rpcUrl,
    });

    // Build the execute payload for the Forwarder.
    // Contract expects ForwardRequestData: { from, to, value, gas, deadline, data, signature }
    const requestForContract = {
      from: serializedRequest.from,
      to: serializedRequest.to,
      value: ethers.BigNumber.from(serializedRequest.value),
      gas: ethers.BigNumber.from(serializedRequest.gas),
      deadline: serializedRequest.deadline,
      data: serializedRequest.data,
      signature,
    };

    const { data, gasLimit } = await estimateForwarderExecuteGas(
      provider,
      gasPayer,
      forwarderAddress,
      requestForContract,
      1.5,
    );
    log({ gasLimit }, 'forwarder gas estimate');

    const defender = new Defender({ relayerApiKey, relayerApiSecret });
    const payload: any = {
      to: forwarderAddress,
      data,
      value: 0,
      speed: "fast",
    };
    payload.gasLimit = Number(gasLimit);
    const tx = await defender.relaySigner.sendTransaction(payload);

    return NextResponse.json({ hash: tx.hash, transactionId: tx.transactionId });
  } catch (err: any) {
    log('error', err)
    const message = err?.message || "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
