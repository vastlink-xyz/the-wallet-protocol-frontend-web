import {
  AUTH_METHOD_SCOPE,
  AUTH_METHOD_TYPE,
} from '@lit-protocol/constants';
import {
  AuthMethod,
  IRelayPKP,
} from '@lit-protocol/types';
import { log } from '@/lib/utils';
import { ORIGIN } from './config';
import { getGoogleProvider } from './googleProvider';

/**
 * Get all PKPs for the user
 * @param authMethod Authentication method
 */
export async function getPKPs({
  authMethod,
  redirectUri,
}: {
  authMethod: AuthMethod,
  redirectUri: string,
}): Promise<IRelayPKP[]> {
  const provider = authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt 
    ? getGoogleProvider(redirectUri) 
    : null;
    
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
export async function mintPKP(authMethod: AuthMethod): Promise<IRelayPKP> {
  const provider = authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt 
    ? getGoogleProvider(ORIGIN + '/login') 
    : null;
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }

  // Set permission scope
  const options = {
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything]],
  };

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