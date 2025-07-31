'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { log } from '@/lib/utils';
import { LogoLoading } from '@/components/LogoLoading';
import { toast } from 'react-toastify';
import { parseError } from '@/lib/error';
import { AuthProviderType, generateUnifiedAuthMethodId, getVastbaseAuthMethodType } from '@/lib/lit/custom-auth';
import { useAuthContext } from '@/hooks/useAuthContext';
import { IRelayPKP } from '@lit-protocol/types';
import { User } from '@/app/api/user/storage';
import { mintPersonalPKP } from '@/lib/lit';

interface CallbackParams {
  providerType: AuthProviderType;
  accessToken: string;
  userEmail: string;
}

/**
 * Unified authentication callback page - handles post-authentication logic for all auth methods
 * Supports Email OTP, Google OAuth, Passkey and other authentication methods
 */
export default function UnifiedAuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { updateAuthMethod } = useAuthContext();

  useEffect(() => {
    log('Unified auth callback page loaded');
    processAuthentication();
  }, []);

  const processAuthentication = async () => {
    try {
      // Step 1: Get authentication params
      const callbackParams = await getCallbackParams();
      
      if (!callbackParams) {
        throw new Error('Authentication params not found');
      }

      // Step 2: Verify user authentication
      const isAuthValid = await verifyAuthentication(callbackParams);
      
      if (!isAuthValid) {
        throw new Error('Authentication verification failed');
      }

      // Step 3: Create or get user
      const user = await createOrGetUser(callbackParams);

      // Step 4: Handle PKP
      const pkp = await createOrGetPKP(callbackParams, user);

      // Step 5: Store authentication info
      await storeAuthenticationData(callbackParams, pkp, user);

      // Step 6: Handle invitation logic (if exists)
      const invitationId = searchParams.get('invitationId');
      if (invitationId) {
        await handleInvitation(invitationId, callbackParams.userEmail, user.authMethodId);
      }

      // Step 7: Redirect to debug page for testing
      router.push('/debug');

    } catch (error) {
      console.error('Authentication process failed:', error);
      const errorMessage = parseError(error);
      toast.error(`Authentication failed: ${errorMessage}`);
      setError(errorMessage);
      setLoading(false);
    }
  };

  /**
   * Get callback params based on different authentication methods
   */
  const getCallbackParams = async (): Promise<CallbackParams | null> => {
    // Priority 1: Check for URL authParams parameter (from MultiProviderLogin)
    const authParamsParam = searchParams.get('authParams');
    if (authParamsParam) {
      try {
        const authParams = JSON.parse(decodeURIComponent(authParamsParam));
        log('Got auth params from URL parameter:', authParams);
        
        // Validate the auth params structure
        if (authParams.providerType && authParams.accessToken && authParams.userEmail) {
          return {
            providerType: authParams.providerType,
            accessToken: authParams.accessToken,
            userEmail: authParams.userEmail
          };
        } else {
          log('Invalid auth params structure:', authParams);
        }
      } catch (error) {
        console.error('Error parsing authParams parameter:', error);
      }
    }

    // Priority 2: Check for Google OAuth callback data
    const googleCode = searchParams.get('code');
    if (googleCode) {
      // Google OAuth method
      // Need to exchange code for access_token
      // Return null for now, implement later
      throw new Error('Google OAuth authentication not implemented yet');
    }

    // Priority 3: Handle Passkey authentication data
    // TODO: Implement Passkey method data retrieval logic

    log('No auth params found in any source');
    return null;
  };

  /**
   * Verify authentication by calling backend API directly
   */
  const verifyAuthentication = async (callbackParams: CallbackParams): Promise<boolean> => {
    try {
      // Call backend API directly to verify token
      const response = await fetch('/api/auth/verify-provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          providerType: callbackParams.providerType,
          accessToken: callbackParams.accessToken,
          userEmail: callbackParams.userEmail,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        console.error('API verification failed:', response.status);
        return false;
      }

      const result = await response.json();
      log('Authentication verification result:', result);
      
      return result.success;

    } catch (error) {
      console.error('Error verifying authentication:', error);
      return false;
    }
  };

  /**
   * Create or get user based on provider type
   * - EMAIL_OTP: Can register (create) or login (get existing)
   * - Others: Must login (get existing), cannot register
   */
  const createOrGetUser = async (callbackParams: CallbackParams) => {
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

  /**
   * Handle Email OTP user (registration or login)
   */
  const handleEmailOTPUser = async (callbackParams: CallbackParams) => {
    const unifiedAuthMethodId = generateUnifiedAuthMethodId(callbackParams.userEmail);

    // Try to get existing user by authMethodId
    const userResponse = await fetch(`/api/user?authMethodId=${unifiedAuthMethodId}`);
    
    if (userResponse.ok) {
      // User exists, normal login
      const userData = await userResponse.json();
      log('Found existing user via authMethodId:', userData);
      return userData as User;
    } else if (userResponse.status === 404) {
      // User doesn't exist, create new user with PKP
      log('Creating new user with email:', callbackParams.userEmail);
      
      const createUserResponse = await fetch('/api/user', {
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
    const userResponse = await fetch(`/api/user/by-provider`, {
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

  /**
   * Create or get PKP
   */
  const createOrGetPKP = async (callbackParams: CallbackParams, user: any): Promise<IRelayPKP> => {
    try {
      // Check if user already has PKP
      const pkpResponse = await fetch(`/api/user/pkp?authMethodId=${user.authMethodId}`);
      
      if (pkpResponse.ok) {
        const pkps = await pkpResponse.json();
        
        if (pkps?.litActionPkp?.ethAddress && pkps?.litActionPkp?.publicKey && pkps?.litActionPkp?.tokenId) {
          log('Found existing PKP:', pkps.litActionPkp);
          return pkps.litActionPkp;
        }
      }

      // User doesn't have valid PKP, need to create new one
      log('Creating new PKP for user:', user.email);
      
      // Save PKP to database
      const newPkp = await mintCustomAuthPKP(callbackParams, user);
      await savePKPToDatabase(user.authMethodId, callbackParams.accessToken, newPkp);
      
      return newPkp;
    } catch (error) {
      console.error('Error in createOrGetPKP:', error);
      throw error;
    }
  };

  /**
   * Use Custom Auth Method to mint PKP
   * Calls the mintPersonalPKP function from pkpManager
   */
  const mintCustomAuthPKP = async (callbackParams: CallbackParams, user: any): Promise<IRelayPKP> => {
    try {
      log('Starting PKP minting process for user:', user.id);
      
      // Call the mint function
      const pkp = await mintPersonalPKP({
        userEmail: callbackParams.userEmail,
        providerType: callbackParams.providerType,
      });
      
      return pkp;
      
    } catch (error) {
      console.error('Error minting PKP:', error);
      throw error;
    }
  };

  /**
   * Save PKP to database
   */
  const savePKPToDatabase = async (authMethodId: string, authToken: string, pkp: IRelayPKP) => {
    try {
      const response = await fetch('/api/user/pkp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          authMethodId,
          pkp,
          pkpType: 'litAction'
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to save PKP: ${errorData.error || response.status}`);
      }
      
      const result = await response.json();
      log('PKP saved to database successfully:', result);
      
    } catch (error) {
      console.error('Error saving PKP to database:', error);
      throw error;
    }
  };

  /**
   * Store authentication data using Context provider
   */
  const storeAuthenticationData = async (callbackParams: CallbackParams, pkp: IRelayPKP, user: any) => {
    try {
      // Create auth method object
      const authMethod = {
        authMethodType: getVastbaseAuthMethodType(),
        authMethodId: generateUnifiedAuthMethodId(callbackParams.userEmail),
        providerType: callbackParams.providerType,
        primaryEmail: callbackParams.userEmail,
        accessToken: callbackParams.accessToken,
      };

      // Update auth method via Context (this will also update localStorage)
      updateAuthMethod(authMethod);

      log('Authentication data stored successfully');

    } catch (error) {
      console.error('Error storing authentication data:', error);
      throw error;
    }
  };

  /**
   * Handle invitation logic
   */
  const handleInvitation = async (invitationId: string, userEmail: string, authMethodId: string) => {
    try {
      // Get invitation details
      const invitationResponse = await fetch(`/api/invitation?id=${invitationId}`);
      if (!invitationResponse.ok) {
        throw new Error('Failed to fetch invitation details');
      }

      const invitationData = await invitationResponse.json();
      const invitation = invitationData.data;

      // Update invitation status to registered
      await fetch('/api/invitation/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invitationId,
          status: 'registered'
        })
      });

      // If it's a multisig wallet invitation, handle registration logic
      if (invitation.tokenType === 'ETH' && invitation.amount === '0') {
        await fetch('/api/invitation/process-registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userEmail,
            invitationId,
            authMethodId
          })
        });
      }

      log('Invitation processed successfully');

    } catch (error) {
      console.error('Error handling invitation:', error);
      // Invitation processing failure should not block the entire auth process
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <LogoLoading />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 mb-4 text-center">
          <div className="text-lg font-semibold mb-2">Authentication Failed</div>
          <div>{error}</div>
        </div>
        <button 
          onClick={() => router.push('/')} 
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back to Login
        </button>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-gray-600">Redirecting...</div>
    </div>
  );
}