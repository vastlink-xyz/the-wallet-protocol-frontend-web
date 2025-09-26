import { User } from '@/app/api/user/storage';
import { AuthProviderType, generateUnifiedAuthMethodId, getVastbaseAuthMethodType } from '@/lib/lit/custom-auth';
import { log } from '@/lib/utils';
import { BASE_URL } from '@/constants'

export interface CallbackParams {
    providerType: AuthProviderType;
    accessToken: string;
    userEmail: string;
}

/**
   * Create or get user based on provider type
   * - EMAIL_OTP: Can register (create) or login (get existing)
   * - Others: Must login (get existing), cannot register
   */
export const createOrGetUser = async (callbackParams: CallbackParams) => {
    try {
        if (callbackParams.providerType === AuthProviderType.EMAIL_OTP) {
        // Email OTP: Can be registration or login
        return await handleEmailOTPUser(callbackParams);
        } else {
        // Other providers: Login only, must exist
        return await handleSecondaryProviderUser(callbackParams);
        }
    } catch (error) {
        console.error('Error in createOrGetUser:', error);
        throw error;
    }
};

export const getUser = async (authMethodId: string): Promise<{ user: User; authMethodId: string }> => {
    const userResponse = await fetch(`${BASE_URL}/api/user?authMethodId=${authMethodId}`)
    
    if (!userResponse.ok) {
      throw new Error('Failed to fetch user information')
    }
    
    return {
        user: await userResponse.json(),
        authMethodId,
    };
};

/**
 * Handle Email OTP user (registration or login)
 */
const handleEmailOTPUser = async (callbackParams: CallbackParams) => {
    const unifiedAuthMethodId = generateUnifiedAuthMethodId(callbackParams.userEmail);

    // Try to get existing user by authMethodId
    const userResponse = await fetch(`${BASE_URL}/api/user?authMethodId=${unifiedAuthMethodId}`);

    if (userResponse.ok) {
        // User exists, normal login
        const userData = await userResponse.json();
        log('Found existing user via authMethodId:', userData);
        return userData as User;
    } else if (userResponse.status === 404) {
        // User doesn't exist, create new user with PKP
        log('Creating new user with email:', callbackParams.userEmail);
        
        const createUserResponse = await fetch(`${BASE_URL}/api/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${callbackParams.accessToken}`,
        },
        body: JSON.stringify({
            authMethodId: unifiedAuthMethodId,
            email: callbackParams.userEmail,
            authProviders: [{
            providerType: callbackParams.providerType,
            sub: callbackParams.userEmail, // For email type, use email as sub
            email: callbackParams.userEmail,
            isEnabled: true,
            isPrimary: true,
            metadata: {},
            createdAt: new Date()
            }]
        }),
        });
        
        if (!createUserResponse.ok) {
        const errorData = await createUserResponse.json();
        throw new Error(`Failed to create user: ${errorData.error || createUserResponse.status}`);
        }
        
        const newUser = await createUserResponse.json();
        log('User created successfully:', newUser);
        return newUser;
    } else {
        throw new Error(`Failed to check user: ${userResponse.status}`);
    }
};

/**
 * Handle secondary provider user (login only)
 */
const handleSecondaryProviderUser = async (callbackParams: CallbackParams) => {
    // Find user by authProvider (not by authMethodId)
    const userResponse = await fetch(`${BASE_URL}/api/user/by-provider`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        providerType: callbackParams.providerType,
        userEmail: callbackParams.userEmail,
        accessToken: callbackParams.accessToken, // Add accessToken for verification
        })
    });

    if (userResponse.ok) {
        // User found, normal login
        const userData = await userResponse.json();
        log('Found existing user via authProvider:', userData);
        return userData;
    } else if (userResponse.status === 404) {
        // User not found - must register with email first
        throw new Error(`Account not found. Please register with email first, then add ${callbackParams.providerType} login in wallet settings.`);
    } else {
        const errorData = await userResponse.json();
        throw new Error(`Failed to find user: ${errorData.error || userResponse.status}`);
    }
};