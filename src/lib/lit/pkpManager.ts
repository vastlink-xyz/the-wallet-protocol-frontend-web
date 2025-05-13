import {
  AUTH_METHOD_SCOPE,
  AUTH_METHOD_TYPE,
} from '@lit-protocol/constants';
import {
  AuthMethod,
  IRelayPKP,
  MintRequestBody,
} from '@lit-protocol/types';
import { log } from '@/lib/utils';
import { utils } from 'ethers';
import { getAuthMethodTypeByProviderName, getProviderByAuthMethodType } from './providers';
import { CURRENT_AUTH_PROVIDER_KEY } from './config';
/**
 * Get all PKPs for the user
 * @param authMethod Authentication method
 */
export async function getPKPs({
  authMethod,
}: {
  authMethod: AuthMethod,
}): Promise<IRelayPKP[]> {
  const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
  if (!currentAuthProvider) {
    throw new Error('No current auth provider found')
  }
  const provider = getProviderByAuthMethodType(currentAuthProvider)

  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }
  
  const allPKPs = await provider.fetchPKPsThroughRelayer(authMethod);
  log('all pkps', authMethod, allPKPs);
  return allPKPs;
}

/**
 * Create a new PKP
 * @param authMethod Authentication method
 */
export async function mintPKPNormally(authMethod: AuthMethod): Promise<IRelayPKP> {
  const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
  if (!currentAuthProvider) {
    throw new Error('No current auth provider found')
  }
  const provider = getProviderByAuthMethodType(currentAuthProvider)
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }

  // Set permission scope
  const options = {
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything]],
  };
  // default payload
  // {
  //   "keyType": 2,
  //   "permittedAuthMethodTypes": [
  //       6
  //   ],
  //   "permittedAuthMethodIds": [
  //       "0xe948f294fa97170e5abf6b7f001d5c130e2950baed4384994f78e860d40dccab"
  //   ],
  //   "permittedAuthMethodPubkeys": [
  //       "0x"
  //   ],
  //   "permittedAuthMethodScopes": [
  //       [
  //           1
  //       ]
  //   ],
  //   "addPkpEthAddressAsPermittedAddress": true,
  //   "sendPkpToItself": true
  // }

  // Create PKP through relay server
  const txHash = await provider.mintPKPThroughRelayer(authMethod, options);

  let attempts = 3;
  let response = null;

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
    throw new Error('Minting failed');
  }

  if (!response.pkpEthAddress || !response.pkpTokenId || !response.pkpPublicKey) {
    throw new Error('response props is undefined')
  }

  const newPKP: IRelayPKP = {
    tokenId: response.pkpTokenId,
    publicKey: response.pkpPublicKey,
    ethAddress: response.pkpEthAddress,
  };

  return newPKP;
} 

// QmT5Vi5byp1vcjE9gkxdWYz3zmScg3BBoM5wnWcUEqXiF7
/**
 * Mint a PKP permanently bound to a specific Lit Action
 * This PKP will only be able to execute the specified Lit Action and cannot be modified
 */
export async function mintPKPWithPermanentLitAction({
  authMethod,
  litActionIpfsId,
}: {
  authMethod: AuthMethod,
  litActionIpfsId: string,
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

  // Convert IPFS CID to bytes32 format
  const bytes = Buffer.from(utils.base58.decode(litActionIpfsId));
  const litActioinAuthMethodId = `0x${bytes.toString('hex')}`;

  const authMethodId = await provider.getAuthMethodId(authMethod);

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
    permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction, authMethodType],
    permittedAuthMethodIds: [litActioinAuthMethodId, authMethodId],
    permittedAuthMethodPubkeys: ['0x', '0x'],
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.NoPermissions]],
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

export async function mintPKP({
  authMethod,
  options,
}: {
  authMethod: AuthMethod,
  options: MintRequestBody,
}
): Promise<IRelayPKP> {
  const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
  if (!currentAuthProvider) {
    throw new Error('No current auth provider found')
  }
  const provider = getProviderByAuthMethodType(currentAuthProvider)

  // Mint PKP through relay server
  const txHash = await provider.mintPKPThroughRelayer(authMethod, options);

  let attempts = 3;
  let response = null;

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

  console.log('new pkp', newPKP);

  return newPKP;
}