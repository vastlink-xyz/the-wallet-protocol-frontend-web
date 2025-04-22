import { googleProvider, litNodeClient } from "@/lib/lit";
import { log } from "@/lib/utils";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from "@lit-protocol/constants";
import { AuthMethod, IRelayPKP, MintRequestBody, SessionSigs } from "@lit-protocol/types";
import { utils } from "ethers";

export async function mintMultisigPKP({
  authMethod,
  litActionIpfsId,
  googleAuthMethodIds,
}: {
  authMethod: AuthMethod,
  litActionIpfsId: string,
  googleAuthMethodIds: string[],
}
): Promise<IRelayPKP> {
  const provider = googleProvider
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }

  // Convert IPFS CID to bytes32 format
  const bytes = Buffer.from(utils.base58.decode(litActionIpfsId));
  const litActioinAuthMethodId = `0x${bytes.toString('hex')}`;

  // 2. Set permissions - Key: only allow specific Lit Action
  const options: MintRequestBody = {
    permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction, AUTH_METHOD_TYPE.GoogleJwt, AUTH_METHOD_TYPE.GoogleJwt],
    permittedAuthMethodIds: [litActioinAuthMethodId, ...googleAuthMethodIds],
    permittedAuthMethodPubkeys: ['0x', '0x', '0x'],
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.NoPermissions], [AUTH_METHOD_SCOPE.NoPermissions]],
    addPkpEthAddressAsPermittedAddress: false,
    sendPkpToItself: true,
    keyType: 2 // Standard PKP type
  };

  // 3. Mint PKP through relay server
  console.log(`Starting to mint PKP bound to IPFS ID ${litActionIpfsId}...`);
  const txHash = await provider.mintPKPThroughRelayer(authMethod, options);

  let attempts = 3;
  let response = null;

  // 4. Poll until result is received
  while (attempts > 0) {
    try {
      log('attmpts', attempts)
      response = await provider.relay.pollRequestUntilTerminalState(txHash);
      break;
    } catch (err) {
      console.warn('Minting failed, retrying...', err);
      await new Promise(resolve => setTimeout(resolve, 1000));
      attempts--;
    }
  }

  if (!response || response.status !== 'Succeeded') {
    throw new Error('PKP minting failed');
  }

  if (!response.pkpEthAddress || !response.pkpTokenId || !response.pkpPublicKey) {
    throw new Error('Response properties are undefined');
  }

  const newPKP: IRelayPKP = {
    tokenId: response.pkpTokenId,
    publicKey: response.pkpPublicKey,
    ethAddress: response.pkpEthAddress,
  };

  console.log(`PKP has been minted and permanently bound to Lit Action: ${litActionIpfsId}`);
  console.log(`Send PKP to itself option enabled, no additional burn step needed`);

  return newPKP;
}

export async function executeSignLitAction({
  ipfsId,
  sessionSigs,
  publicKey,
  message,
}: {
  ipfsId: string
  sessionSigs: SessionSigs
  publicKey: string
  message: string
}) {
  await litNodeClient.connect();
  const response = await litNodeClient.executeJs({
    ipfsId,
    sessionSigs,
    jsParams: {
      message,
      publicKey,
      sigName: 'sig',
    }
  });

  const signature = response.signatures.sig.signature;
  return signature
}