import { BASE_URL } from '@/constants';

import { getUser } from '@/services/userManagementService';

export const updatePersonalWalletSettings = async (settings: any, user: any) => {
    const response = await fetch(`${BASE_URL}/api/user/settings`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.sessionJwt}`,
        },
        body: JSON.stringify({
            authMethodId: user.authMethodId,
            walletSettings: settings,
        }),
    });

    return await response.json();
};

export const getPersonalWalletSettings = async (user: any) => {
    const userRecord = await getUser(user.authMethodId);
    
    return userRecord.user.walletSettings;
};