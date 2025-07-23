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
import { toast } from 'react-toastify';
import { parseError } from '@/lib/error';


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
        
        if (!authMethod?.accessToken) {
          throw new Error('No access token found in stored auth method');
        }
        
        // Get authMethod ID using token
        const userId = getUserIdFromToken(authMethod.accessToken);
        log('Stytch userId:', userId);
        
        // Get user information from API
        try {
          const { data } = await axios.post('/api/stytch/get-user-email', { userId });
          log('User data from API:', data);
          
          if (!data?.email) {
            throw new Error('No email found in user data');
          }
          
          // Set email from response
          setEmail(data.email);
          // Process authentication
          await processAuthentication(authMethod, data.email);
        } catch (emailError) {
          console.error('Failed to fetch user information:', emailError);
          toast.error(`Failed to fetch user information: ${parseError(emailError)}`);
          setError('Failed to fetch user information');
          setLoading(false);
          return;
        }
        
      } catch (error) {
        console.error('Failed to parse stored auth method:', error);
        const errorMessage = error instanceof Error ? error.message : 'Authentication data is invalid';
        toast.error(`Authentication error: ${errorMessage}`);
        setError(errorMessage);
        setLoading(false);
      }
    } else {
      // No Stytch auth info found, might be direct access to this URL
      const errorMessage = 'No authentication data found';
      toast.error(errorMessage);
      setError(errorMessage);
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
      const hasPkps = await checkUserPkps(authMethodId, authMethod, userEmail);
      log('has pkps', hasPkps);
      log('email', userEmail);
      
      if (!hasPkps && userEmail) {
        // If user has no PKPs, create them automatically
        await handleMintPkp(authMethod);

        // Send recipient registered email
        await handleSendRecipientRegisteredEmail(userEmail, authMethodId);
      }
      
      // Redirect to assets page
      router.push('/assets');
    } catch (error) {
      console.error('Error in processAuthentication:', error);
      const errorMessage = `Failed to process authentication: ${parseError(error)}`;
      toast.error(errorMessage);
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
          completeUrl: `${process.env.NEXT_PUBLIC_APP_URL}/assets`
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
  const checkUserPkps = async (authMethodId: string, authMethod: AuthMethod, userEmail: string | null): Promise<boolean> => {
    try {
      if (!userEmail) {
        log('No email provided for PKP check');
        return false;
      }
      
      log('Checking if user has PKPs for authMethodId:', authMethodId);
      
      // First check if the user exists
      const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`);
      
      // If user doesn't exist, create user first
      if (userResponse.status === 404) {
        log('User does not exist, creating new user with email:', userEmail);
        
        const createUserResponse = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authMethod.accessToken}`, // Add session JWT for authentication
          },
          body: JSON.stringify({ authMethodId, email: userEmail }),
        });
        
        if (!createUserResponse.ok) {
          const errorData = await createUserResponse.json();
          throw new Error(`Failed to create user: ${errorData.error || createUserResponse.status}`);
        }
        
        const newUser = await createUserResponse.json();
        log('User created successfully:', {
          id: newUser.id,
          email: newUser.email,
          authMethodId: newUser.authMethodId
        });
        
        // New user has no PKPs
        return false;
      }
      
      if (!userResponse.ok) {
        const errorData = await userResponse.json();
        throw new Error(`Failed to check user: ${errorData.error || userResponse.status}`);
      }
      
      const userData = await userResponse.json();
      log('User exists:', {
        id: userData.id,
        email: userData.email,
        hasLitActionPkp: !!userData.litActionPkp
      });
      
      // Now query user's PKPs
      const pkpResponse = await fetch(`/api/user/pkp?authMethodId=${authMethodId}`);
      
      if (!pkpResponse.ok) {
        const errorData = await pkpResponse.json();
        throw new Error(`Failed to check user PKPs: ${errorData.error || pkpResponse.status}`);
      }
      
      const pkps = await pkpResponse.json();
      log('PKP check result:', {
        hasLitActionPkp: !!pkps?.litActionPkp,
        litActionPkpAddress: pkps?.litActionPkp?.ethAddress
      });
      
      // Check if user has litAction PKP with valid data
      const hasValidPkp = !!(pkps?.litActionPkp?.ethAddress && pkps?.litActionPkp?.publicKey && pkps?.litActionPkp?.tokenId);
      log('Has valid PKP:', hasValidPkp);
      
      return hasValidPkp;
    } catch (error) {
      console.error('Error checking user PKPs:', error);
      return false;
    }
  };

  const savePkpToDatabase = async (authMethodId: string, authMethod: AuthMethod, pkp: IRelayPKP, pkpType: 'session' | 'litAction') => {
    try {
      log('Attempting to save PKP to database:', {
        authMethodId,
        pkpType,
        pkpEthAddress: pkp.ethAddress,
        pkpTokenId: pkp.tokenId
      });
      
      const response = await fetch('/api/user/pkp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authMethod.accessToken}`, // Add session JWT for authentication
        },
        body: JSON.stringify({ authMethodId, pkp, pkpType }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        log('Failed to save PKP to database - API error:', errorData);
        throw new Error(errorData.error || `Failed to save PKP: ${response.status}`);
      }
      
      const result = await response.json();
      log('PKP saved to database successfully:', {
        success: result.success,
        message: result.message
      });
      
      return result;
    } catch (error) {
      console.error('Error saving PKP to database:', error);
      throw error;
    }
  };

  const handleMintPkp = async (authMethod: AuthMethod) => {
    let authMethodId: string | null = null;
    
    try {
      // Get the Stytch provider
      const stytchProvider = getProviderByAuthMethodType(AUTH_METHOD_TYPE.StytchEmailFactorOtp);

      // Step 1: Get auth method ID
      authMethodId = await stytchProvider.getAuthMethodId(authMethod);
      log('Starting PKP minting process for authMethodId:', authMethodId);
      
      // Step 2: Validate that user exists before PKP minting
      const existingUser = await fetch(`/api/user?authMethodId=${authMethodId}`);
      if (existingUser.status === 404) {
        log('User does not exist during PKP minting - this should not happen');
        throw new Error('User must exist before PKP minting');
      }
      
      // Step 3: Mint the PKP with permanent Lit Action
      log('Starting PKP minting...');
      const pkpForPersonal = await mintPersonalPKP({
        authMethod,
      });
      
      // Step 4: Validate PKP structure before saving
      if (!pkpForPersonal?.ethAddress || !pkpForPersonal?.publicKey || !pkpForPersonal?.tokenId) {
        throw new Error(`Invalid PKP structure received: ethAddress=${pkpForPersonal?.ethAddress}, publicKey=${pkpForPersonal?.publicKey}, tokenId=${pkpForPersonal?.tokenId}`);
      }
      
      log('PKP minted successfully:', {
        ethAddress: pkpForPersonal.ethAddress,
        tokenId: pkpForPersonal.tokenId,
        publicKeyLength: pkpForPersonal.publicKey?.length
      });
      
      // Step 5: Save PKP to database with validation
      log('Saving PKP to database...');
      const saveResult = await savePkpToDatabase(authMethodId, authMethod, pkpForPersonal, 'litAction');
      
      if (!saveResult?.success) {
        throw new Error('Failed to save PKP to database');
      }
      
      log('PKP successfully saved to database');
      
    } catch (error) {
      console.error("Error minting or saving PKP:", error);
      
      // PKP minting failed - log the error with context
      const errorMessage = parseError(error);
      log('PKP minting failed for user:', {
        authMethodId,
        email,
        error: errorMessage
      });
      
      // Show user-friendly error message
      toast.error(`Failed to create wallet: ${errorMessage}`);
      
      // Note: We don't delete the user here because:
      // 1. User creation happens in checkUserPkps, not in this function
      // 2. The user record without PKP can be used for retry attempts
      // 3. Manual cleanup may be preferred to understand failure patterns
      
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