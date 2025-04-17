import { googleProvider } from "@/lib/lit";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from "@lit-protocol/constants";
import { AuthMethod, IRelayPKP, MintRequestBody } from "@lit-protocol/types";
import { utils } from "ethers";
import { log } from "@/lib/utils";

export async function mintPKPWithPermanentLitAction({
  authMethod,
  litActionIpfsId,
}: {
  authMethod: AuthMethod,
  litActionIpfsId: string,
}
): Promise<IRelayPKP> {
  const provider = authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt 
    ? googleProvider
    : null;
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }

  // Convert IPFS CID to bytes32 format
  const bytes = Buffer.from(utils.base58.decode(litActionIpfsId));
  const litActioinAuthMethodId = `0x${bytes.toString('hex')}`;

  const googleAuthMethodId = await provider.getAuthMethodId(authMethod);

  // 2. Set permissions - Key: only allow specific Lit Action
  // const options: MintRequestBody = {
  //   // permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction],
  //   // permittedAuthMethodIds: [litActioinAuthMethodId],
  //   // permittedAuthMethodPubkeys: ['0x'],
  //   permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything]],
  //   // addPkpEthAddressAsPermittedAddress: true,
  //   // sendPkpToItself: true,
  //   // keyType: 2 // Standard PKP type
  // };
  const options: MintRequestBody = {
    permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction, AUTH_METHOD_TYPE.GoogleJwt],
    permittedAuthMethodIds: [litActioinAuthMethodId, googleAuthMethodId],
    permittedAuthMethodPubkeys: ['0x', '0x'],
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.NoPermissions]],
    addPkpEthAddressAsPermittedAddress: true,
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