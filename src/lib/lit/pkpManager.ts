import {
  AUTH_METHOD_SCOPE,
  AUTH_METHOD_TYPE,
  LIT_ABILITY,
} from '@lit-protocol/constants';
import {
  AuthMethod,
  IRelayPKP,
  MintRequestBody,
  SessionSigs,
} from '@lit-protocol/types';
import { LitRelay } from '@lit-protocol/lit-auth-client';
import { LitActionResource, LitPKPResource } from '@lit-protocol/auth-helpers';
import { log } from '@/lib/utils';
import { getMultiProviderAuthIpfsId, getPersonalTransactionIpfsId, getUpgradeIpfsId } from './ipfs-id-env';
import { getPersonalSignIpfsId } from './ipfs-id-env';
import { generateUnifiedAuthMethodId, getVastbaseAuthMethodType } from './custom-auth';
import { SELECTED_LIT_NETWORK } from './config';
import { litNodeClient, litRelay } from './providers';
/**
 * Get all PKPs for the user
 * @param authMethod Authentication method
 */
export async function getPKPs({
  authMethod,
}: {
  authMethod: AuthMethod,
}): Promise<IRelayPKP[]> {
  return [];
}

export async function mintPKP({
  authMethod,
  options,
}: {
  authMethod: AuthMethod,
  options: MintRequestBody,
}
): Promise<IRelayPKP> {
  // Call relay to mint PKP
  const mintResponse = await litRelay.mintPKP(JSON.stringify(options));
    
  if (!mintResponse || !mintResponse.requestId) {
    throw new Error('Missing mint response or request ID from relay server');
  }
  
  log('PKP mint request submitted:', mintResponse.requestId);

  let attempts = 3;
  let response = null;

  while (attempts > 0) {
    try {
      response = await litRelay.pollRequestUntilTerminalState(mintResponse.requestId);
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

/**
 * Mint PKP using LitRelay directly for custom auth methods
 * This function bypasses the provider system for custom authentication
 */
export async function mintPersonalPKP({
  userEmail,
  providerType,
}: {
  userEmail: string;
  providerType: string;
}): Promise<IRelayPKP> {
  try {
    log('Starting custom auth PKP minting for:', { userEmail, providerType });

    const personalSignIpfsIdHex = await getPersonalSignIpfsId('hex')
    const personalTransactionIpfsIdHex = await getPersonalTransactionIpfsId('hex')
    const multiProviderAuthIpfsIdHex = await getMultiProviderAuthIpfsId('hex')
    const upgradeIpfsIdHex = await getUpgradeIpfsId('hex')
    
    // Generate custom auth method details
    const customAuthMethodType = getVastbaseAuthMethodType();
    const customAuthMethodId = generateUnifiedAuthMethodId(userEmail);

    const permittedAuthMethodTypes = [
      AUTH_METHOD_TYPE.LitAction,
      AUTH_METHOD_TYPE.LitAction,
      AUTH_METHOD_TYPE.LitAction,
      customAuthMethodType,
    ]

    const permittedAuthMethodIds = [
      personalSignIpfsIdHex,
      personalTransactionIpfsIdHex,
      multiProviderAuthIpfsIdHex, // for multi provider auth
      customAuthMethodId,
    ]

    const permittedAuthMethodPubkeys = ['0x', '0x', '0x', '0x']

    const permittedAuthMethodScopes = [
      [AUTH_METHOD_SCOPE.SignAnything],
      [AUTH_METHOD_SCOPE.SignAnything],
      [AUTH_METHOD_SCOPE.PersonalSign],
      [AUTH_METHOD_SCOPE.PersonalSign], // for get pkp signature
    ]

    if (process.env.NEXT_PUBLIC_ENV === 'dev') {
      // upgrade
      permittedAuthMethodTypes.push(AUTH_METHOD_TYPE.LitAction);
      permittedAuthMethodIds.push(upgradeIpfsIdHex)
      permittedAuthMethodPubkeys.push('0x')
      permittedAuthMethodScopes.push([AUTH_METHOD_SCOPE.SignAnything])
    }
    
    // Prepare mint body for relay
    const mintBody = {
      keyType: 2, // Standard PKP type
      permittedAuthMethodTypes,
      permittedAuthMethodIds,
      permittedAuthMethodPubkeys,
      permittedAuthMethodScopes,
      addPkpEthAddressAsPermittedAddress: true,
      sendPkpToItself: true,
    };
    
    log('Minting PKP with custom auth method:', {
      authMethodType: customAuthMethodType,
      authMethodId: customAuthMethodId,
      mintBody
    });
    
    // Call relay to mint PKP
    const mintResponse = await litRelay.mintPKP(JSON.stringify(mintBody));
    
    if (!mintResponse || !mintResponse.requestId) {
      throw new Error('Missing mint response or request ID from relay server');
    }
    
    log('PKP mint request submitted:', mintResponse.requestId);
    
    // Poll for completion
    let attempts = 3;
    let pollResponse = null;
    
    while (attempts > 0) {
      try {
        pollResponse = await litRelay.pollRequestUntilTerminalState(mintResponse.requestId);
        break;
      } catch (err) {
        console.warn('Minting poll failed, retrying...', err);
        await new Promise(resolve => setTimeout(resolve, 1000));
        attempts--;
      }
    }
    
    if (!pollResponse || pollResponse.status !== 'Succeeded') {
      throw new Error(`PKP minting failed: ${pollResponse?.status || 'Unknown error'}`);
    }
    
    if (!pollResponse.pkpEthAddress || !pollResponse.pkpTokenId || !pollResponse.pkpPublicKey) {
      throw new Error('Invalid PKP response: missing required fields');
    }
    
    const newPKP: IRelayPKP = {
      tokenId: pollResponse.pkpTokenId,
      publicKey: pollResponse.pkpPublicKey,
      ethAddress: pollResponse.pkpEthAddress,
    };
    
    log('Custom auth PKP minted successfully:', {
      ethAddress: newPKP.ethAddress,
      tokenId: newPKP.tokenId,
      publicKeyLength: newPKP.publicKey?.length
    });
    
    return newPKP;
    
  } catch (error) {
    console.error('Error minting custom auth PKP:', error);
    throw error;
  }
}

/**
 * Get session signatures for multi-provider custom authentication
 * This function is designed for our custom auth system using Lit Actions for verification
 */
export async function getMultiProviderSessionSigs({
  authMethod,
  pkp,
}: {
  authMethod: {
    authMethodType: string;
    authMethodId: string;
    accessToken: string;
  };
  pkp: IRelayPKP;
}): Promise<SessionSigs> {
  try {
    if (!litNodeClient.ready) {
      await litNodeClient.connect();
    }

    log('Getting session sigs for multi-provider auth:', {
      authMethodType: authMethod.authMethodType,
      authMethodId: authMethod.authMethodId,
      pkpEthAddress: pkp.ethAddress,
    });

    // Parse the accessToken to get provider details
    let authTokenData;
    try {
      authTokenData = JSON.parse(authMethod.accessToken);
    } catch (error) {
      throw new Error('Invalid accessToken format in authMethod');
    }

    // Get the multi-provider auth Lit Action IPFS ID
    const multiProviderAuthIpfsId = await getMultiProviderAuthIpfsId('base58');
    
    log('Using multi-provider auth Lit Action:', multiProviderAuthIpfsId);

    const sessionSigs = await litNodeClient.getPkpSessionSigs({
      pkpPublicKey: pkp.publicKey,
      // Use Lit Action for custom authentication verification
      litActionIpfsId: multiProviderAuthIpfsId,
      jsParams: {
        providerType: authTokenData.providerType,
        accessToken: authTokenData.accessToken,
        userEmail: authTokenData.userEmail,
        pkpTokenId: pkp.tokenId,
        authMethodType: authMethod.authMethodType,
        env: process.env.NEXT_PUBLIC_ENV || 'dev',
        devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION || '',
      },
      resourceAbilityRequests: [
        {
          resource: new LitPKPResource('*'),
          ability: LIT_ABILITY.PKPSigning,
        },
        {
          resource: new LitActionResource('*'),
          ability: LIT_ABILITY.LitActionExecution,
        }
      ],
      // Set expiration time (10 minutes like the example)
      expiration: new Date(Date.now() + 1000 * 60 * 10).toISOString(),
    });

    log('Session signatures generated successfully');
    return sessionSigs;

  } catch (error) {
    console.error('Error getting multi-provider session sigs:', error);
    throw error;
  }
}