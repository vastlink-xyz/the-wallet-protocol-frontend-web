import { LIT_NETWORK } from '@lit-protocol/constants';

// Basic configuration
// export const DOMAIN = 'localhost';
// export const ORIGIN = `http://${DOMAIN}:3000`;
const ORIGIN = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const SELECTED_LIT_NETWORK = LIT_NETWORK.DatilDev;

// Auth redirect URLs
export const GOOGLE_SIGNIN_REDIRECT = ORIGIN + '/auth/google-callback';
export const STYTCH_SIGNIN_REDIRECT = ORIGIN + '/auth/stytch-callback';

// Auth storage keys - each provider has its own storage key
export const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method'
