import { CURRENT_AUTH_PROVIDER_KEY, getAuthMethodTypeByProviderName, getProviderByAuthMethodType, litNodeClient } from "@/lib/lit";
import { log } from "@/lib/utils";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from "@lit-protocol/constants";
import { AuthMethod, IRelayPKP, MintRequestBody, SessionSigs } from "@lit-protocol/types";
import { utils } from "ethers";
import { mintPKP } from "@/lib/lit/pkpManager";
import { getMultisigTransactionIpfsId } from "@/lib/lit/ipfs-id-env";


export async function mintMultisigPKP({
  authMethod,
  authMethodIds,
}: {
  authMethod: AuthMethod,
  authMethodIds: string[],
}
): Promise<IRelayPKP> {
  const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
  if (!currentAuthProvider) {
    throw new Error('No current auth provider found')
  }
  const provider = getProviderByAuthMethodType(currentAuthProvider)
  const authMethodType = getAuthMethodTypeByProviderName(currentAuthProvider)
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }

  const litActionIpfsId = await getMultisigTransactionIpfsId('base58')
  // Convert IPFS CID to bytes32 format
  const bytes = Buffer.from(utils.base58.decode(litActionIpfsId));
  const litActioinAuthMethodId = `0x${bytes.toString('hex')}`;

  // 2. Set permissions - Key: only allow specific Lit Action
  const options: MintRequestBody = {
    permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction, authMethodType, authMethodType],
    permittedAuthMethodIds: [litActioinAuthMethodId, ...authMethodIds],
    permittedAuthMethodPubkeys: ['0x', '0x', '0x'],
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.NoPermissions], [AUTH_METHOD_SCOPE.NoPermissions]],
    addPkpEthAddressAsPermittedAddress: false,
    sendPkpToItself: true,
    keyType: 2 // Standard PKP type
  };

  // 3. Mint PKP using mintPKP function
  console.log(`Starting to mint PKP bound to IPFS ID ${litActionIpfsId}...`);
  
  const newPKP = await mintPKP({
    authMethod,
    options,
  });

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