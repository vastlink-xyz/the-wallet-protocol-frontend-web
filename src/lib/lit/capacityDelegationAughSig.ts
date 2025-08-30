import { LIT_RPC } from "@lit-protocol/constants";
import { litNodeClient } from "./providers";
import { ethers } from "ethers";

// https://developer.litprotocol.com/connecting-to-a-lit-network/lit-blockchains/chronicle#connecting-to-chronicle
const litRpcForDatil = 'https://chain-rpc.litprotocol.com/replica-http'
const litRpc = process.env.NEXT_PUBLIC_ENV?.toLowerCase() === 'production' ? litRpcForDatil : LIT_RPC.CHRONICLE_YELLOWSTONE;

const ethersSigner = new ethers.Wallet(
  process.env.NEXT_PUBLIC_ETHEREUM_PRIVATE_KEY_FOR_LIT_DAPP_OWNER_WALLET || '',
  new ethers.providers.JsonRpcProvider(litRpc)
);

export const getCapacityDelegationAuthSig = async () => {
  console.log("🔄 Creating capacityDelegationAuthSig...");
  const { capacityDelegationAuthSig } =
    await litNodeClient.createCapacityDelegationAuthSig({
      dAppOwnerWallet: ethersSigner,
      capacityTokenId: process.env.NEXT_PUBLIC_LIT_CAPACITY_CREDIT_TOKEN_ID || '',
    });
  console.log(`✅ Created the capacityDelegationAuthSig`);
  return capacityDelegationAuthSig;
};
