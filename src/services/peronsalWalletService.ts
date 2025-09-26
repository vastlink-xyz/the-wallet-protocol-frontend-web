import { KeyManagementPlatform } from '@/constants'
import { 
    createOrGetPersonalWallet as createOrGetPersonalWalletByLitProtocol,
    getAssetPortfolio as getAssetPortfolioByLitProtocol,
} from '@/services/peronsalWalletServiceByLitProtocol';

export const createOrGetPersonalWallet = async (input: any, user: any, keyManagementPlatform: KeyManagementPlatform) => {
    if (keyManagementPlatform === KeyManagementPlatform.LitProtocol) return await createOrGetPersonalWalletByLitProtocol(input, user);

    throw Error(`Key management platform ${keyManagementPlatform} not implemented.`);
};

export const getAssetPortfolio = async (user: any, keyManagementPlatform: KeyManagementPlatform) => {
    if (keyManagementPlatform === KeyManagementPlatform.LitProtocol) return await getAssetPortfolioByLitProtocol(user);

    throw Error(`Key management platform ${keyManagementPlatform} not implemented.`);
};