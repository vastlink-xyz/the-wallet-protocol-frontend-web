import { LIT_CHAINS } from "@lit-protocol/constants";
import { SUPPORTED_TOKENS_INFO } from "./token";
import { ethers } from "ethers";
import { ERC20_ABI } from "@/constants/abis/erc20";
import { VAST_FORWARDER_ABI } from "@/constants/abis/vast-forwarder";
import axios from "axios";
import { log } from "../utils";
import { BASE_URL } from "@/constants";

export const getToSignTransactionForVAST = async ({
  options,
}: {
  options: any;
}) => {
  const { sendAddress, recipientAddress, amount } = options
  const tokenType = 'VAST'
  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]
  const chainId = LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]?.chainId
  
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

  console.log("txDataForEstimate before estimateGas", txDataForEstimate);
  
  // Estimate gas
  let estimatedGas;
  try {
    estimatedGas = await provider.estimateGas(txDataForEstimate);
    console.log("estimatedGas after estimateGas", estimatedGas);
  } catch (error) {
    console.log("Gas estimation failed, using default gas limit");
    estimatedGas = ethers.BigNumber.from(100000); // set a default gas limit
  }
  log("estimatedGas", estimatedGas)
  
  // Create final transaction object (without from field)
  const txData = {
    to: tokenInfo.contractAddress,
    value: "0x0",
    data,
    type: 2, // EIP-1559
    maxFeePerGas: maxFeePerGasValue.toHexString(),
    maxPriorityFeePerGas: maxPriorityFeePerGasValue.toHexString(),
    chainId,
    nonce,
    gasLimit: estimatedGas.toNumber(),
  };

  const forwarderAddress = process.env.NEXT_PUBLIC_VAST_FORWARDER_CONTRACT_ADDRESS!;
  const forwarderContract = new ethers.Contract(
    forwarderAddress,
    VAST_FORWARDER_ABI,
    provider
  );
  const forwarderNonce = await forwarderContract.nonces(sendAddress);

  const domain = {
    name: "VastForwarder",
    version: "1",
    chainId,
    verifyingContract: forwarderAddress,
  }

  const request = {
    from: sendAddress,
    to: tokenInfo.contractAddress!,
    value: BigInt(0),
    gas: estimatedGas.mul(150).div(100),
    nonce: forwarderNonce,
    deadline: Math.floor(Date.now() / 1000) + 3600,
    data: data,
  };
  log("request", request)

  const types = {
    ForwardRequest:  [
      { name: "from", type: "address" },
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
      { name: "gas", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint48" },
      { name: "data", type: "bytes" }
    ],
  }

  const messageHash = ethers.utils._TypedDataEncoder.hash(
    domain,
    types,
    request,
  );

  const toSign = ethers.utils.arrayify(messageHash);
  
  return {
    toSign,
    unsignedTransaction: txData,
    request,
  }
}

export const broadcastTransactionForVAST = async ({
  options,
}: {
  options: any;
}) => {
  const { request, sig } = options
  console.log("request", request)
  console.log("sig", sig)
  
  // Convert BigInt values to strings for JSON serialization
  const serializedRequest = {
    ...request,
    value: request.value.toString(),
    gas: request.gas.toString(),
    nonce: request.nonce.toString(),
  };
  
  console.log("serializedRequest", serializedRequest)

  // Manually construct the signature from r, s, v components
  let { r, s, v } = sig;

  // Remove '0x' prefix for uniform processing
  if (r.startsWith('0x')) r = r.substring(2);
  if (s.startsWith('0x')) s = s.substring(2);

  // Handle non-standard 66-character 'r' value by stripping the leading '02'
  if (r.length === 66) {
    r = r.substring(2);
  }

  // Normalize v for ecrecover; it expects 27 or 28
  if (v < 27) {
    v += 27;
  }
  
  // Convert v to a hex string and pad to 2 characters
  const vHex = v.toString(16).padStart(2, '0');

  // Concatenate to form the final signature
  const signature = `0x${r}${s}${vHex}`;
  
  console.log("Manually constructed signature:", signature);
  
  const response = await axios.post(
    `${BASE_URL}/api/smartcontract/broadcast-relayer-transaction`,
    {
      serializedRequest,
      signature,
    }
  )
  return response.data
}
