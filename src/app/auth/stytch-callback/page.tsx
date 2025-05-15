'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  AUTH_METHOD_STORAGE_KEY,
  CURRENT_AUTH_PROVIDER_KEY,
  getProviderByAuthMethodType,
  mintPersonalPKP,
  mintSessionPKP, 
  SIGN_PROPOSAL_LIT_ACTION_IPFS_ID 
} from '@/lib/lit';
import { log } from '@/lib/utils';
import { AuthMethod, IRelayPKP } from '@lit-protocol/types';
import axios from 'axios';
import { getUserIdFromToken } from '@/lib/jwt';

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
      const stytchProvider = getProviderByAuthMethodType('stytch');
      
      // Get auth method ID
      const authMethodId = await stytchProvider.getAuthMethodId(authMethod);
      
      // Check if user has PKPs
      const hasPkps = await checkUserPkps(authMethodId, userEmail);
      log('has pkps', hasPkps);
      log('email', userEmail);
      
      if (!hasPkps && userEmail) {
        // If user has no PKPs, create them automatically
        await handleMintPkp(authMethod);
      }
      
      // Store current auth provider
      localStorage.setItem(CURRENT_AUTH_PROVIDER_KEY, 'stytch');
      
      // Redirect to assets page
      router.push('/assets/personal');
    } catch (error) {
      console.error('Error in processAuthentication:', error);
      setError('Failed to process authentication');
      setLoading(false);
    }
  };
  
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
      
      // Check if user has both session and litAction PKPs
      return !!(pkps?.sessionPkp && pkps?.litActionPkp);
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
      const stytchProvider = getProviderByAuthMethodType('stytch');

      // Step 1: Get auth method ID
      const authMethodId = await stytchProvider.getAuthMethodId(authMethod);
      
      // Step 2: Mint the first PKP for session
      const pkpForSession = await mintSessionPKP(authMethod);
      
      // Step 3: Save first PKP to database with 'session' type
      await savePkpToDatabase(authMethodId, pkpForSession, 'session');
      
      // Step 4: Mint the second PKP with permanent Lit Action
      const pkpForLitAction = await mintPersonalPKP({
        authMethod,
      });
      
      // Step 5: Save second PKP to database with 'litAction' type
      await savePkpToDatabase(authMethodId, pkpForLitAction, 'litAction');
    } catch (error) {
      console.error("Error minting or saving PKP:", error);
      throw error;
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Logging in ...</div>;
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