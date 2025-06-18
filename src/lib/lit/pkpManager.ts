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
import { getProviderByAuthMethodType } from './providers';
import { getPersonalTransactionIpfsId, getUpgradeIpfsId } from './ipfs-id-env';
import { getPersonalSignIpfsId } from './ipfs-id-env';
/**
 * Get all PKPs for the user
 * @param authMethod Authentication method
 */
export async function getPKPs({
  authMethod,
}: {
  authMethod: AuthMethod,
}): Promise<IRelayPKP[]> {
  const provider = getProviderByAuthMethodType(authMethod.authMethodType)

  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }
  
  const allPKPs = await provider.fetchPKPsThroughRelayer(authMethod);
  log('all pkps', authMethod, allPKPs);
  return allPKPs;
}

/**
 * Mint a PKP permanently bound to a specific Lit Action
 * This PKP will only be able to execute the specified Lit Action and cannot be modified
 */
export async function mintPersonalPKP({
  authMethod,
}: {
  authMethod: AuthMethod,
}
): Promise<IRelayPKP> {
  const provider = getProviderByAuthMethodType(authMethod.authMethodType)
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }
  
  const personalSignIpfsIdHex = await getPersonalSignIpfsId('hex')
  const personalTransactionIpfsIdHex = await getPersonalTransactionIpfsId('hex')

  const authMethodId = await provider.getAuthMethodId(authMethod);

  // Set permissions for Lit Action bound PKP
  const options: MintRequestBody = {
    permittedAuthMethodTypes: [
      AUTH_METHOD_TYPE.LitAction,
      AUTH_METHOD_TYPE.LitAction,
      authMethod.authMethodType,
    ],
    permittedAuthMethodIds: [
      personalSignIpfsIdHex,
      personalTransactionIpfsIdHex,
      authMethodId
    ],
    permittedAuthMethodPubkeys: ['0x', '0x', '0x'],
    permittedAuthMethodScopes: [
      [AUTH_METHOD_SCOPE.SignAnything],
      [AUTH_METHOD_SCOPE.SignAnything],
      [AUTH_METHOD_SCOPE.PersonalSign]
    ],
    addPkpEthAddressAsPermittedAddress: false,
    sendPkpToItself: true,
    keyType: 2 // Standard PKP type
  };
  
  // Use the generic mintPKP function
  const newPKP = await mintPKP({ authMethod, options });

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
  const provider = getProviderByAuthMethodType(authMethod.authMethodType)

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