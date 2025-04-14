import {
  AUTH_METHOD_SCOPE,
  AUTH_METHOD_TYPE,
} from '@lit-protocol/constants';
import {
  AuthMethod,
  IRelayPKP,
  SessionSigs,
} from '@lit-protocol/types';
import { ORIGIN, litNodeClient, getGoogleProvider } from '.';
import { Buffer } from 'buffer';
import { utils } from 'ethers';

/**
 * Mint a PKP permanently bound to a specific Lit Action
 * This PKP will only be able to execute the specified Lit Action and cannot be modified
 */
export async function mintPKPWithPermanentLitAction({
  authMethod,
  litActionIpfsId,
  redirectUri,
}: {
  authMethod: AuthMethod,
  litActionIpfsId: string,
  redirectUri: string,
}
): Promise<IRelayPKP> {
  const provider = authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt 
    ? getGoogleProvider(redirectUri)
    : null;
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }

  // Convert IPFS CID to bytes32 format
  const bytes = Buffer.from(utils.base58.decode(litActionIpfsId));
  const authMethodId = `0x${bytes.toString('hex')}`;

  // 2. Set permissions - Key: only allow specific Lit Action
  const options = {
    permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction],
    permittedAuthMethodIds: [authMethodId],
    permittedAuthMethodPubkeys: ['0x'],
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything]],
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

/**
 * Execute permanently bound Lit Action
 * This function ensures operations can only be executed with the specified IPFS ID
 */
export async function executeSecuredLitAction({
  pkpPublicKey,
  litActionIpfsId,
  authMethod,
  sessionSigs,
  jsParams
}: {
  pkpPublicKey: string;
  litActionIpfsId: string;
  authMethod: AuthMethod;
  sessionSigs: SessionSigs;
  jsParams: any;
}): Promise<any> {
  // Connect to Lit network (if not already connected)
  await litNodeClient.connect();
  
  console.log(`Executing secured Lit Action: ${litActionIpfsId}`);
  
  // Execute Lit Action using only its IPFS ID
  // Note: No code string option provided, only using IPFS ID
  const response = await litNodeClient.executeJs({
    ipfsId: litActionIpfsId, // Use IPFS ID to ensure immutability
    sessionSigs,
    authMethods: [authMethod],
    jsParams: {
      ...jsParams,
      publicKey: pkpPublicKey
    }
  });
  
  return response;
}

/**
 * Create a hook for executing permanently bound Lit Action
 * Can be used in React components
 */
export function createPermanentLitActionExecutor({
  pkp,
  litActionIpfsId,
  authMethod,
  sessionSigs,
}: {
  pkp: IRelayPKP;
  litActionIpfsId: string;
  authMethod: AuthMethod;
  sessionSigs: SessionSigs;
}) {
  return async (params: any) => {
    return executeSecuredLitAction({
      pkpPublicKey: pkp.publicKey,
      litActionIpfsId,
      authMethod,
      sessionSigs,
      jsParams: params
    });
  };
} 