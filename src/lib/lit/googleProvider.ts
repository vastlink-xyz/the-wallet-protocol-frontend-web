import {
  GoogleProvider,
  LitRelay,
} from '@lit-protocol/lit-auth-client';
import {
  AuthMethod,
} from '@lit-protocol/types';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import {
  SELECTED_LIT_NETWORK,
  DEFAULT_SIGNIN_REDIRECT,
} from './config';

// Initialize Lit Node Client
export const litNodeClient: LitNodeClient = new LitNodeClient({
  alertWhenUnauthorized: false,
  litNetwork: SELECTED_LIT_NETWORK,
  debug: true,
});

// Initialize LitRelay
const litRelay = new LitRelay({
  relayUrl: LitRelay.getRelayUrl(SELECTED_LIT_NETWORK),
  relayApiKey: 'test-api-key',
});

export const googleProvider = new GoogleProvider({
  relay: litRelay,
  litNodeClient,
  redirectUri: DEFAULT_SIGNIN_REDIRECT,
});

/**
 * Sign in with Google
 * @param redirectUri Redirect URI
 */
export async function signInWithGoogle(redirectUri: string): Promise<void> {
  await googleProvider.signIn();
}

/**
 * Get Google authentication method
 * @param redirectUri Redirect URI
 */
export async function authenticateWithGoogle(
  redirectUri: string
): Promise<AuthMethod> {
  const authMethod = await googleProvider.authenticate();
  return authMethod;
} 