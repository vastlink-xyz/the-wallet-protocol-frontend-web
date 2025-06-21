'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  AUTH_METHOD_STORAGE_KEY,
  getProviderByAuthMethodType,
  mintPersonalPKP,
} from '@/lib/lit';
import { log } from '@/lib/utils';
import { AuthMethod, IRelayPKP } from '@lit-protocol/types';
import axios from 'axios';
import { getUserIdFromToken } from '@/lib/jwt';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';
import { sendRecipientRegisteredEmail } from '@/lib/notification/invite-notification';
import { LogoLoading } from '@/components/LogoLoading';


const getQueryParam = (paramName: string): string | null => {
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(paramName);
  }
  return null;
};

export default function StytchCallbackPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // This page serves as a redirect route. Stytch authentication is actually completed in the StytchOTP component
  // Unlike Google login, Stytch doesn't need a redirect callback, as authentication is completed within the component
  // If a user is redirected to this page, they will be processed based on stored auth data

  useEffect(() => {
    log('Stytch callback page loaded');
    checkStytchAuth();
  }, []);

  const fetchInvitationDetails = async (invitationId: string) => {
    try {
      const response = await fetch(`/api/invitation?id=${invitationId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to fetch invitation: ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.data) {
        log('Invitation details fetched:', data.data);
        return data.data;
      } else {
        log('Invalid invitation data');
      }
    } catch (err) {
      console.error('Error fetching invitation:', err);
    }
  };

  const updateInvitationStatus = async (invitationId: string, status: string) => {
    try {
      const response = await fetch('/api/invitation/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invitationId,
          status
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to update invitation status: ${response.status}`);
      }

      const data = await response.json();
      log('Invitation status updated:', data);
      return data;
    } catch (err) {
      console.error('Error updating invitation status:', err);
      throw err;
    }
  };

  // Check if the user has authenticated with Stytch
  const checkStytchAuth = async () => {
    // Check for stored Stytch authentication method
    const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY);
    
    if (storedAuthMethod) {
      try {
        const authMethod = JSON.parse(storedAuthMethod);
        
        // Get authMethod ID using token
        const userId = getUserIdFromToken(authMethod.accessToken);
        log('Stytch userId:', userId);
        
        // Get user information from API
        try {
          const { data } = await axios.post('/api/stytch/get-user-email', { userId });
          log('User data from API:', data);
          
          // Set email from response
          setEmail(data.email);
          // Process authentication
          await processAuthentication(authMethod, data.email);
        } catch (emailError) {
          console.error('Failed to fetch user information:', emailError);
        }
        
      } catch (error) {
        console.error('Failed to parse stored auth method:', error);
        setError('Authentication data is invalid');
        setLoading(false);
      }
    } else {
      // No Stytch auth info found, might be direct access to this URL
      setError('No authentication data found');
      setLoading(false);
    }
  };

  // Process authentication flow
  const processAuthentication = async (authMethod: AuthMethod, userEmail: string | null) => {
    try {
      if (!authMethod) throw new Error('No auth method provided');
      
      // Get the Stytch provider
      const stytchProvider = getProviderByAuthMethodType(AUTH_METHOD_TYPE.StytchEmailFactorOtp);
      
      // Get auth method ID
      const authMethodId = await stytchProvider.getAuthMethodId(authMethod);
      
      // Check if user has PKPs
      const hasPkps = await checkUserPkps(authMethodId, userEmail);
      log('has pkps', hasPkps);
      log('email', userEmail);
      
      if (!hasPkps && userEmail) {
        // If user has no PKPs, create them automatically
        await handleMintPkp(authMethod);

        // Send recipient registered email
        await handleSendRecipientRegisteredEmail(userEmail, authMethodId);
      }
      
      // Redirect to assets page
      router.push('/assets/personal');
    } catch (error) {
      console.error('Error in processAuthentication:', error);
      setError('Failed to process authentication');
      setLoading(false);
    }
  };

  const handleSendRecipientRegisteredEmail = async (userEmail: string, authMethodId: string) => {
    try {
      const invitationId = getQueryParam('invitationId');
      if (!invitationId) {
        log('No invitation ID found');
        return;
      }

      const invitation = await fetchInvitationDetails(invitationId);

      // Update the invitation status to 'registered'
      await updateInvitationStatus(invitationId, 'registered');

      // Check if this is a multisig wallet invitation (0 ETH transfer)
      if (invitation.tokenType === 'ETH' && invitation.amount === '0') {
        await handleMultisigWalletInvitationRegistration(userEmail, invitationId, authMethodId);
      } else {
        // Regular transfer invitation - send the original email
        await sendRecipientRegisteredEmail({
          to: invitation.senderEmail,
          recipientEmail: userEmail,
          tokenType: invitation.tokenType,
          amount: invitation.amount,
          completeUrl: `${process.env.NEXT_PUBLIC_APP_URL}/assets/personal`
        });
      }
    } catch (error) {
      console.log('Failed to send recipient registered email:', error);
    }
  }

  const handleMultisigWalletInvitationRegistration = async (userEmail: string, invitationId: string, authMethodId: string) => {
    try {
      log('Handling multisig wallet invitation registration for:', userEmail);

      // Call the API to process the registration
      const response = await fetch('/api/invitation/process-registration', {
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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process registration');
      }

      const result = await response.json();
      log('Multisig wallet invitation registration processed:', result);
    } catch (error) {
      console.error('Failed to handle multisig wallet invitation registration:', error);
    }
  }

  // Check if user has PKPs
  const checkUserPkps = async (authMethodId: string, userEmail: string | null): Promise<boolean> => {
    try {
      if (!userEmail) return false;
      
      // First check if the user exists
      const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`);
      
      // If user doesn't exist, create user first
      if (userResponse.status === 404) {
        log('User does not exist, creating new user');
        const createUserResponse = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ authMethodId, email: userEmail }),
        });
        
        if (!createUserResponse.ok) {
          throw new Error('Failed to create user');
        }
        
        log('User created successfully');
        // New user has no PKPs
        return false;
      }
      
      if (!userResponse.ok) {
        throw new Error('Failed to check user');
      }
      
      // Now query user's PKPs
      const pkpResponse = await fetch(`/api/user/pkp?authMethodId=${authMethodId}`);
      
      if (!pkpResponse.ok) {
        throw new Error('Failed to check user PKPs');
      }
      
      const pkps = await pkpResponse.json();
      
      // Check if user has litAction PKP
      return !!(pkps?.litActionPkp);
    } catch (error) {
      console.error('Error checking user PKPs:', error);
      return false;
    }
  };

  const savePkpToDatabase = async (authMethodId: string, pkp: IRelayPKP, pkpType: 'session' | 'litAction') => {
    try {
      const response = await fetch('/api/user/pkp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authMethodId, pkp, pkpType, email }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save PKP');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error saving PKP to database:', error);
      throw error;
    }
  };

  const handleMintPkp = async (authMethod: AuthMethod) => {
    try {
      // Get the Stytch provider
      const stytchProvider = getProviderByAuthMethodType(AUTH_METHOD_TYPE.StytchEmailFactorOtp);

      // Step 1: Get auth method ID
      const authMethodId = await stytchProvider.getAuthMethodId(authMethod);
      
      // Step 2: Mint the PKP with permanent Lit Action
      const pkpForPersonal = await mintPersonalPKP({
        authMethod,
      });
      
      // Step 3: Save second PKP to database with 'litAction' type
      await savePkpToDatabase(authMethodId, pkpForPersonal, 'litAction');
    } catch (error) {
      console.error("Error minting or saving PKP:", error);
      throw error;
    }
  };

  if (loading) {
    return <LogoLoading />
  }
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={() => router.push('/')} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Return to Login
        </button>
      </div>
    );
  }
  
  return <div className="flex items-center justify-center min-h-screen">Redirecting...</div>;
} 