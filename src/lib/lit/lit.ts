import {
  GoogleProvider,
  LitRelay,
} from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import {
  AUTH_METHOD_SCOPE,
  AUTH_METHOD_TYPE,
  LIT_ABILITY,
  LIT_NETWORK,
} from '@lit-protocol/constants';
import {
  AuthMethod,
  GetSessionSigsProps,
  IRelayPKP,
  SessionSigs,
  LIT_NETWORKS_KEYS,
} from '@lit-protocol/types';
import { LitPKPResource } from '@lit-protocol/auth-helpers';
import { log } from '@/lib/utils';

// Configure environment variables
export const DOMAIN = 'localhost';
export const ORIGIN = `http://${DOMAIN}:3000`;
// export const SELECTED_LIT_NETWORK = ((import.meta.env
//   .VITE_LIT_NETWORK as string) ||
//   LIT_NETWORK.DatilDev) as LIT_NETWORKS_KEYS;
export const SELECTED_LIT_NETWORK = LIT_NETWORK.DatilDev

export const litNodeClient: LitNodeClient = new LitNodeClient({
  alertWhenUnauthorized: false,
  litNetwork: SELECTED_LIT_NETWORK,
  debug: true,
});

// Connect to Lit node
litNodeClient.connect();

const litRelay = new LitRelay({
  relayUrl: LitRelay.getRelayUrl(SELECTED_LIT_NETWORK),
  relayApiKey: 'test-api-key',
});

// Set up Google provider
let googleProvider: GoogleProvider;

export function getGoogleProvider(redirectUri: string) {
  if (!googleProvider) {
    googleProvider = new GoogleProvider({
      relay: litRelay,
      litNodeClient,
      redirectUri,
    });
  }
  return googleProvider;
}

// Google sign in
export async function signInWithGoogle(redirectUri: string): Promise<void> {
  const googleProvider = getGoogleProvider(redirectUri);
  await googleProvider.signIn();
}

// Get Google authentication method
export async function authenticateWithGoogle(
  redirectUri: string
): Promise<AuthMethod> {
  const googleProvider = getGoogleProvider(redirectUri);
  const authMethod = await googleProvider.authenticate();
  return authMethod;
}

// Get PKPs
export async function getPKPs(authMethod: AuthMethod): Promise<IRelayPKP[]> {
  const provider = authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt 
    ? getGoogleProvider(ORIGIN + '/login') 
    : null;
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }
  
  const allPKPs = await provider.fetchPKPsThroughRelayer(authMethod);
  log('all pkps', authMethod, allPKPs)
  return allPKPs;
}

// Generate session signatures
export async function getSessionSigs({
  pkpPublicKey,
  authMethod,
  sessionSigsParams,
}: {
  pkpPublicKey: string;
  authMethod: AuthMethod;
  sessionSigsParams: GetSessionSigsProps;
}): Promise<SessionSigs> {
  await litNodeClient.connect();
  const sessionSigs = await litNodeClient.getPkpSessionSigs({
    ...sessionSigsParams,
    pkpPublicKey,
    authMethods: [authMethod],
    resourceAbilityRequests: [
      {
        resource: new LitPKPResource('*'),
        ability: LIT_ABILITY.PKPSigning,
      },
    ],
  });

  return sessionSigs;
}

// Mint new PKP
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
