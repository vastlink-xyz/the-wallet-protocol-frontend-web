import { LIT_NETWORK } from '@lit-protocol/constants';

// Basic configuration
// export const DOMAIN = 'localhost';
// export const ORIGIN = `http://${DOMAIN}:3000`;
const ORIGIN = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const SELECTED_LIT_NETWORK = LIT_NETWORK.DatilDev;

// Path configuration
export const DEFAULT_SIGNIN_REDIRECT = ORIGIN + '/dashboard';

export const MAGIC_NUMBER_LIT_ACTION_IPFS_ID = 'QmZJX4QCMd4YVR4CnGYdQMKPRaf1kWDRj7ZFtQaeSEPfdP';
export const SIGN_MESSAGE_LIT_ACTION_IPFS_ID = 'QmT5Vi5byp1vcjE9gkxdWYz3zmScg3BBoM5wnWcUEqXiF7';
export const SIGN_AND_COMBINE_ECDSA_LIT_ACTION_IPFS_ID = 'QmRHgdJa6BmkUfRD6mFpS4yteRPfFK98nq1bYgaMuZhyCw';
export const SIGN_EIP_191_LIT_ACTION_IPFS_ID = 'QmcBdSBjRCX9rtZwEJuiSh7W4oujGueuU95czgoShb4zwz'
export const SIGN_EIP_191_LIT_ACTION_IPFS_ID_2 = 'QmNbv45FsFi5Acxb4CoVXukpchBX7XVn3oqXhrSyesygdQ'
export const SIGN_EIP_191_LIT_ACTION_IPFS_ID_3 = 'QmNxfM9MkN4UQbLhrxz5G3N8jd1L4VzLMevVmxLqFGrauY'

// used for multisig
export const SIGN_PROPOSAL_LIT_ACTION_IPFS_ID = 'QmUUR1QK2DVS9CfD6b5ggBtvH9UTJuirmCBcMAXkrj2P8p'
export const MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID = 'QmauBMD1cogofyoSaBoCNxDXDAnvqth8jMvYLRvDvtAVLc'


export const signer1PKPIndex = 29
export const signer2PKPIndex = 2
export const user1GoogleAuthMethodId = '0xe948f294fa97170e5abf6b7f001d5c130e2950baed4384994f78e860d40dccab'
export const user2GoogleAuthMethodId = '0x92ae1dbc4ec9fe1eb01549bbaa858e58b8e6ccb69a59ceeca67971ddacaec925'
