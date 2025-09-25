import { 
    litActionContext,
    litNodeClient, 
    mintPKP
} from '@/lib/lit'
import { encryptString } from '@lit-protocol/encryption'
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from '@lit-protocol/constants'
import axios from 'axios'
import { TokenType } from '@/lib/web3/token'

import { mintPersonalPKP } from '@/lib/lit';
import { IS_PRODUCTION } from '@/constants';
import { IRelayPKP } from '@lit-protocol/types';

import { log } from '@/lib/utils'
import { getCreateWalletIpfsId, getMultisigTransactionIpfsId, getUpdateWalletIpfsId, getAPIKeyManagementIpfsId, getUpgradeIpfsId } from '@/lib/lit/ipfs-id-env'
import { MFASettings, MultisigWallet, MultisigWalletMetadata } from '@/app/api/multisig/storage'
import { getVastbaseAuthMethodType, VastbaseAuthMethod, AuthProviderType, generateUnifiedAuthMethodId } from '@/lib/lit/custom-auth'
import { BASE_URL } from '@/constants'
import { SessionSigsMap } from '@lit-protocol/types'

import { KeyManagementPlatform } from '@/constants'
import { createOrGetPersonalWallet as createOrGetPersonalWalletForLitProtocol } from '@/services/peronsalWalletServiceForLitProtocol';

export const createOrGetPersonalWallet = async (input: any, user: any, keyManagementPlatform: KeyManagementPlatform) => {
    if (keyManagementPlatform === KeyManagementPlatform.LitProtocol) return await createOrGetPersonalWalletForLitProtocol(input, user);

    throw Error(`Key management platform ${keyManagementPlatform} not implemented.`);
};