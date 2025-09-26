import { KeyManagementPlatform } from '@/constants'
import { createOrGetPersonalWallet as createOrGetPersonalWalletByLitProtocol } from '@/services/peronsalWalletServiceByLitProtocol';

export const createOrGetPersonalWallet = async (input: any, user: any, keyManagementPlatform: KeyManagementPlatform) => {
    if (keyManagementPlatform === KeyManagementPlatform.LitProtocol) return await createOrGetPersonalWalletByLitProtocol(input, user);

    throw Error(`Key management platform ${keyManagementPlatform} not implemented.`);
};