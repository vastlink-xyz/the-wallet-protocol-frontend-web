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
const litRelay = new LitRelay({
  relayUrl: LitRelay.getRelayUrl(SELECTED_LIT_NETWORK),
  relayApiKey: 'test-api-key',
});

const googleProvider = new GoogleProvider({
  relay: litRelay,
  litNodeClient,
  redirectUri: GOOGLE_SIGNIN_REDIRECT,
});

const stytchEmailOtpProvider = new StytchAuthFactorOtpProvider<'email'>(
  {
    relay: litRelay,
    litNodeClient,
  },
  { appId: process.env.NEXT_PUBLIC_STYTCH_PROJECT_ID! },
  'email',
);

// const appleProvider = new AppleProvider({
//   relay: litRelay,
//   litNodeClient,
// });

/**
 * Get the appropriate authentication provider based on the auth method type
 * @param authMethodType Authentication method type ('google', 'stytch', 'apple')
 * @returns The corresponding authentication provider
 */
export function getProviderByAuthMethodType(authMethodType: number) {
  switch (authMethodType) {
    case AUTH_METHOD_TYPE.GoogleJwt:
      return googleProvider;
    case AUTH_METHOD_TYPE.StytchEmailFactorOtp:
      return stytchEmailOtpProvider;
    default:
      throw new Error(`Unsupported auth method type: ${authMethodType}`);
  }
}

