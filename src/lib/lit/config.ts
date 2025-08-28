import { LIT_NETWORK } from '@lit-protocol/constants';
import { LIT_NETWORKS_KEYS } from '@lit-protocol/types';
import { decryptAndCombineIpfsId, multiProviderAuthIpfsId, securityVerificationIpfsId } from './ipfs-id-env';

// Basic configuration
// export const DOMAIN = 'localhost';
// export const ORIGIN = `http://${DOMAIN}:3000`;
const ORIGIN = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const SELECTED_LIT_NETWORK = process.env.NEXT_PUBLIC_LIT_NETWORK as LIT_NETWORKS_KEYS;

// Auth redirect URLs
export const GOOGLE_SIGNIN_REDIRECT = ORIGIN + '/auth/google-callback';
export const STYTCH_SIGNIN_REDIRECT = ORIGIN + '/auth/stytch-callback';

// Auth storage keys - each provider has its own storage key
export const AUTH_METHOD_STORAGE_KEY = 'vastbase-auth'

export const litActionContext = {
  apiBaseUrl: process.env.NEXT_PUBLIC_BASE_URL_FOR_LIT_ACTION,
  litNetwork: SELECTED_LIT_NETWORK,
  // IPFS IDs
  multiProviderAuthIpfsId,
  securityVerificationIpfsId,
  decryptAndCombineIpfsId,
}
