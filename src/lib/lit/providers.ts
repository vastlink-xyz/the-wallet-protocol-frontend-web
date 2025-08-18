import {
  LitRelay,
} from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import { SELECTED_LIT_NETWORK } from './config';

// Initialize Lit Node Client
export const litNodeClient: LitNodeClient = new LitNodeClient({
  alertWhenUnauthorized: false,
  litNetwork: SELECTED_LIT_NETWORK,
  debug: true,
});

// Initialize LitRelay
export const litRelay = new LitRelay({
  relayUrl: LitRelay.getRelayUrl(SELECTED_LIT_NETWORK),
  relayApiKey: process.env.NEXT_PUBLIC_LIT_RELAYER_API_KEY!,
});
