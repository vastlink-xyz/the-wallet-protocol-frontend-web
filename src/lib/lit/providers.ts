import {
  GoogleProvider,
  AppleProvider,
  LitRelay,
  StytchAuthFactorOtpProvider,
} from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import {
  SELECTED_LIT_NETWORK,
  GOOGLE_SIGNIN_REDIRECT,
} from './config';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';

// Initialize Lit Node Client
export const litNodeClient: LitNodeClient = new LitNodeClient({
  alertWhenUnauthorized: false,
  litNetwork: SELECTED_LIT_NETWORK,
  debug: true,
});

// Initialize LitRelay
export const litRelay = new LitRelay({
  relayUrl: LitRelay.getRelayUrl(SELECTED_LIT_NETWORK),
  relayApiKey: 'test-api-key',
});
