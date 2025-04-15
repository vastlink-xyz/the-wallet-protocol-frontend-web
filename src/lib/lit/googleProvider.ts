import {
  GoogleProvider,
  LitRelay,
} from '@lit-protocol/lit-auth-client';
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
