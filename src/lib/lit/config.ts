import { LIT_NETWORK } from '@lit-protocol/constants';

// Basic configuration
export const DOMAIN = 'localhost';
export const ORIGIN = `http://${DOMAIN}:3000`;
export const SELECTED_LIT_NETWORK = LIT_NETWORK.DatilDev;

// Path configuration
export const DEFAULT_SIGNIN_REDIRECT = ORIGIN + '/dashboard';

export const MAGIC_NUMBER_LIT_ACTION_IPFS_ID = 'QmZJX4QCMd4YVR4CnGYdQMKPRaf1kWDRj7ZFtQaeSEPfdP';
export const SIGN_MESSAGE_LIT_ACTION_IPFS_ID = 'QmT5Vi5byp1vcjE9gkxdWYz3zmScg3BBoM5wnWcUEqXiF7';
export const SIGN_AND_COMBINE_ECDSA_LIT_ACTION_IPFS_ID = 'QmRHgdJa6BmkUfRD6mFpS4yteRPfFK98nq1bYgaMuZhyCw';
export const SIGN_EIP_191_LIT_ACTION_IPFS_ID = 'QmcBdSBjRCX9rtZwEJuiSh7W4oujGueuU95czgoShb4zwz'
export const SIGN_EIP_191_LIT_ACTION_IPFS_ID_2 = 'QmNbv45FsFi5Acxb4CoVXukpchBX7XVn3oqXhrSyesygdQ'
export const SIGN_EIP_191_LIT_ACTION_IPFS_ID_3 = 'QmNxfM9MkN4UQbLhrxz5G3N8jd1L4VzLMevVmxLqFGrauY'