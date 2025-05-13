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
export const CURRENT_AUTH_PROVIDER_KEY = 'current-auth-provider';
export const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method'

// used for multisig
export const SIGN_PROPOSAL_LIT_ACTION_IPFS_ID = 'QmUUR1QK2DVS9CfD6b5ggBtvH9UTJuirmCBcMAXkrj2P8p'
export const MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID = 'QmWukQ1Rd6odJywQ2PYq8WmU8pepqDjYx4gb9kWTopDpak'
