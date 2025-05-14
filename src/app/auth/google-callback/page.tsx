'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CURRENT_AUTH_PROVIDER_KEY,
  GOOGLE_SIGNIN_REDIRECT, 
  getProviderByAuthMethodType,
  mintPKPNormally, 
  mintPKPWithPermanentLitAction, 
  SIGN_PROPOSAL_LIT_ACTION_IPFS_ID, 
  AUTH_METHOD_STORAGE_KEY
} from '@/lib/lit';
import { log } from '@/lib/utils';
import { isSignInRedirect, getProviderFromUrl } from '@lit-protocol/lit-auth-client';
import { AuthMethod, IRelayPKP } from '@lit-protocol/types';
import { getEmailFromGoogleToken } from '@/lib/jwt';

export default function GoogleCallbackPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    init()
  }, []);
  
  // Initialize and handle Google auth redirect
  const init = async () => {
    log('init')    
    // Handle authentication redirect from Google
    if (isSignInRedirect(GOOGLE_SIGNIN_REDIRECT)) {
      log('Detected redirect from Google OAuth in dashboard page');
      const providerName = getProviderFromUrl();
      if (providerName === 'google') {
        try {
          // Get Google provider
          const googleProvider = getProviderByAuthMethodType('google');
          const authMethod = await googleProvider.authenticate();
          
          // Store authentication method in new storage key
          localStorage.setItem(AUTH_METHOD_STORAGE_KEY, JSON.stringify(authMethod));
          // Set current auth provider
          localStorage.setItem(CURRENT_AUTH_PROVIDER_KEY, 'google');
          
          setAuthMethod(authMethod);

          redirectAfterAuthentication(authMethod)
        } catch (error) {
          console.error('Google authentication failed:', error);
          localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
        }
      }
    } else {
      // Check for stored Google authentication method
      const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY);
                               
      if (storedAuthMethod) {
        // Check for stored auth method
        log('storedauthmethod')
        try {
          const parsedAuthMethod = JSON.parse(storedAuthMethod);
          setAuthMethod(parsedAuthMethod);
          
          // get user email
          const userEmail = getEmailFromGoogleToken(parsedAuthMethod.accessToken);
          setEmail(userEmail);

          redirectAfterAuthentication(parsedAuthMethod)
          return
        } catch (error) {
          console.error('Failed to parse stored auth method:', error);
          localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
        }
      }
      setLoading(false);
    }
  }

  const redirectAfterAuthentication = async (authMethod: AuthMethod) => {
    // router.push('/debug')
    // return
    if (authMethod) {
      try {
        // Get Google provider
        const googleProvider = getProviderByAuthMethodType('google');
        const authMethodId = await googleProvider.getAuthMethodId(authMethod);
        
        // Get user email
        const userEmail = getEmailFromGoogleToken(authMethod.accessToken);
        setEmail(userEmail);
        
        // Check if user has PKPs
        const hasPkps = await checkUserPkps(authMethodId, userEmail);
        log('has pkps', hasPkps)
        
        if (!hasPkps && userEmail) {
          // If user has no PKPs, automatically create PKP
          await handleMintPkp(authMethod);
        }
        
        // Redirect to assets page
        router.push('/assets/personal')
      } catch (error) {
        console.error('Error in redirectAfterAuthentication:', error);
        setLoading(false);
      }
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
      
      // Check if user has both session and litAction PKPs
      return !!(pkps?.sessionPkp && pkps?.litActionPkp);
    } catch (error) {
      console.error('Error checking user PKPs:', error);
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
    localStorage.removeItem(CURRENT_AUTH_PROVIDER_KEY);
    setAuthMethod(null);
    setEmail(null);
    router.push('/');
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
    setLoading(true);
    try {
      const litActionIpfsId = SIGN_PROPOSAL_LIT_ACTION_IPFS_ID
      log('ipfsid', litActionIpfsId)

      // Get Google provider
      const googleProvider = getProviderByAuthMethodType('google');

      // Step 1: Get auth method ID
      const authMethodId = await googleProvider.getAuthMethodId(authMethod);
      
      // Step 2: Mint the first PKP for session
      const pkpForSession = await mintPKPNormally(authMethod);
      
      // Step 3: Save first PKP to database with 'session' type
      await savePkpToDatabase(authMethodId, pkpForSession, 'session');
      
      // Step 4: Mint the second PKP with permanent Lit Action
      const pkpForLitAction = await mintPKPWithPermanentLitAction({
        authMethod,
        litActionIpfsId,
      });
      
      // Step 5: Save second PKP to database with 'litAction' type
      await savePkpToDatabase(authMethodId, pkpForLitAction, 'litAction');
    } catch (error) {
      console.error("Error minting or saving PKP:", error);
    } finally {
      setLoading(false);
    }
  }

  
  // Show loading state
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!authMethod) {
    return <div className="flex items-center justify-center min-h-screen">Please login first</div>;
  }
  
  return null;
}
