import { KeyManagementPlatform } from '@/constants'
import { createOrGetPersonalWallet as createOrGetPersonalWalletForLitProtocol } from '@/services/peronsalWalletServiceForLitProtocol';

export const createOrGetPersonalWallet = async (input: any, user: any, keyManagementPlatform: KeyManagementPlatform) => {
    if (keyManagementPlatform === KeyManagementPlatform.LitProtocol) return await createOrGetPersonalWalletForLitProtocol(input, user);

    throw Error(`Key management platform ${keyManagementPlatform} not implemented.`);
};