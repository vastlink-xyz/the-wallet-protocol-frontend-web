import { LIT_NETWORK } from '@lit-protocol/constants';

// Basic configuration
export const DOMAIN = 'localhost';
export const ORIGIN = `http://${DOMAIN}:3000`;
export const SELECTED_LIT_NETWORK = LIT_NETWORK.DatilDev;

// Path configuration
export const DEFAULT_SIGNIN_REDIRECT = ORIGIN + '/dashboard';
export const DEFAULT_SIGNUP_REDIRECT = ORIGIN + '/register'; 