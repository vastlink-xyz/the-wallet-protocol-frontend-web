'use client'

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { log } from '@/lib/utils';
import { LogoLoading } from '@/components/LogoLoading';
import { toast } from 'react-toastify';
import { parseError } from '@/lib/error';
import { generateUnifiedAuthMethodId, getVastbaseAuthMethodType } from '@/lib/lit/custom-auth';
import { useAuthContext } from '@/hooks/useAuthContext';
import { IRelayPKP } from '@lit-protocol/types';
import { setTokenToStorage } from '@/lib/storage/authmethod';
import { IS_PRODUCTION, KeyManagementPlatform } from '@/constants';

import { createOrGetPersonalWallet } from '@/services/peronsalWalletService';
import { CallbackParams, createOrGetUser } from '@/services/userManagementService';

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
      // const pkp = await createOrGetPKP(callbackParams, user);
      console.debug("createOrGetPersonalWallet()", {callbackParams, user});
      const pkp = await createOrGetPersonalWallet(callbackParams, user, KeyManagementPlatform.LitProtocol);

      // Step 5: Store authentication info
      await storeAuthenticationData(callbackParams, pkp, user);

      // Step 6: Handle invitation logic (if exists)
      const invitationId = searchParams.get('invitationId');
      if (invitationId) {
        await handleInvitation(invitationId, callbackParams.userEmail, user.authMethodId);
      }

      // Step 7: Redirect to debug page for testing
      router.push('/assets');

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

          if (!IS_PRODUCTION) {
            console.debug('authParams logged for tests only:', authParams);
          }

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
      const response = await fetch('/api/auth/verify-and-get-auth-method-id', {
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

      const result = await response.json();
      log('Authentication verification result:', result);
      
      // Check if authentication failed or user not found
      if (!result.success) {
        console.error('API verification failed:', result.error);
        return result.userNotFound || false;
      }
      
      return result.success;
    } catch (error) {
      console.error('Error verifying authentication:', error);
      return false;
    }
  };

  /**
   * Store authentication data using Context provider
   */
  const storeAuthenticationData = async (callbackParams: CallbackParams, pkp: IRelayPKP, user: any) => {
    try {
      // Create auth method object (without accessToken)
      const authMethod = {
        authMethodType: getVastbaseAuthMethodType(),
        authMethodId: generateUnifiedAuthMethodId(callbackParams.userEmail),
        providerType: callbackParams.providerType,
        primaryEmail: callbackParams.userEmail,
      };

      // Store access token separately by provider type
      setTokenToStorage(callbackParams.providerType, callbackParams.accessToken);

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
      <LogoLoading className='mt-[30vh]' />
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