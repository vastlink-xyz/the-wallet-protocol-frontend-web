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

// Manage Google provider instances
const providers = new Map<string, GoogleProvider>();

/**
 * Get Google Provider instance
 * @param redirectUri Redirect URI
 */
export function getGoogleProvider(redirectUri: string) {
  if (!providers.has(redirectUri)) {
    providers.set(redirectUri, new GoogleProvider({
      relay: litRelay,
      litNodeClient,
      redirectUri,
    }));
  }
  return providers.get(redirectUri)!;
}

/**
 * Sign in with Google
 * @param redirectUri Redirect URI
 */
export async function signInWithGoogle(redirectUri: string): Promise<void> {
  const googleProvider = getGoogleProvider(redirectUri);
  await googleProvider.signIn();
}

/**
 * Get Google authentication method
 * @param redirectUri Redirect URI
 */
export async function authenticateWithGoogle(
  redirectUri: string
): Promise<AuthMethod> {
  const googleProvider = getGoogleProvider(redirectUri);
  const authMethod = await googleProvider.authenticate();
  return authMethod;
} 