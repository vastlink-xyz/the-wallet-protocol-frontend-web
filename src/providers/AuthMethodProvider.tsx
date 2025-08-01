'use client';

import React, { createContext, useCallback, ReactNode, useState, useEffect } from 'react';
import { SessionSigs } from '@lit-protocol/types';
import { onAuthStateChanged } from 'firebase/auth';
import { getMultiProviderSessionSigs } from '@/lib/lit';
import { getAuthMethodFromStorage, setAuthMethodToStorage, setTokenToStorage, getTokenFromStorage } from '@/lib/storage/authmethod';
import { VastbaseAuthMethod, AuthProviderType, getVastbaseAuthMethodType } from '@/lib/lit/custom-auth';
import { AuthContextValue } from '@/types/auth-context';
import { auth } from '@/lib/firebase';
import { toast } from 'react-toastify';

/**
 * AuthMethod Context
 */
export const AuthMethodContext = createContext<AuthContextValue | null>(null);

/**
 * AuthMethodProvider Properties
 */
interface AuthMethodProviderProps {
  children: ReactNode;
}

/**
 * AuthMethod Provider Component
 * 
 * Provides application-wide authentication method state management, including:
 * - Current authentication method (authMethod)
 * - Custom Auth Session Signatures getter method
 * - Authentication method update functionality
 * - Convenient access to authentication-related properties
 * 
 * Uses layered architecture:
 * - React components: directly use Context
 * - Utility functions/services: maintain purity through parameter passing
 */
export function AuthMethodProvider({ children }: AuthMethodProviderProps) {
  // Implement authMethod state management directly
  const [authMethod, setAuthMethod] = useState<VastbaseAuthMethod | null>(() => {
    // Initialize with current value from storage
    return getAuthMethodFromStorage();
  });

  useEffect(() => {
    // Initialize with current value from storage for Stytch compatibility
    const currentAuthMethod = getAuthMethodFromStorage();
    setAuthMethod(currentAuthMethod);

    // Firebase auth state change listener for Google login
    const unsubscribeFirebase = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('🔥 Firebase user state change - user signed in');
        
        // For Google login, we need to find user by Google email
        try {
          const token = await user.getIdToken();
          
          // Store Google token separately 
          setTokenToStorage(AuthProviderType.GOOGLE, token);
          
          // Use by-provider API to find user by Google email
          const userLookupResponse = await fetch('/api/user/by-provider', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              providerType: AuthProviderType.GOOGLE,
              userEmail: user.email!,
              accessToken: token,
            })
          });
          
          if (userLookupResponse.ok) {
            const userData = await userLookupResponse.json();
            
            // Check if we already have a Google auth method with same authMethodId
            setAuthMethod(prevAuthMethod => {
              if (prevAuthMethod && 
                  prevAuthMethod.providerType === AuthProviderType.GOOGLE && 
                  prevAuthMethod.authMethodId === userData.authMethodId) {
                
                // Update token storage but don't change auth method object
                setTokenToStorage(AuthProviderType.GOOGLE, token);
                console.log('🔄 Google token updated in storage');
                
                // Return same object reference
                return prevAuthMethod;
              } else {
                // Create new Google auth method using data from database
                const googleAuthMethod: VastbaseAuthMethod = {
                  authMethodType: getVastbaseAuthMethodType(),
                  authMethodId: userData.authMethodId, // Use existing authMethodId from database
                  providerType: AuthProviderType.GOOGLE,
                  primaryEmail: userData.primaryEmail, // From database
                };
                
                setAuthMethodToStorage(googleAuthMethod);
                console.log('✅ Google auth method created with primaryEmail:', userData.primaryEmail);
                console.log('✅ Using existing authMethodId:', userData.authMethodId);
                return googleAuthMethod;
              }
            });
          } else {
            console.warn('❌ User not found in database for Google login');
            toast.error('Account not found. Please register with email first, then add Google login in settings.');
            
            // Sign out from Firebase to clear the authentication state
            await auth.signOut();
          }
        } catch (error) {
          console.error('❌ Google login user verification failed:', error);
        }
      } else {
        // Firebase user signed out, only clear if current session is Google
        const currentAuth = getAuthMethodFromStorage();
        if (currentAuth?.providerType === AuthProviderType.GOOGLE) {
          setAuthMethod(null);
          localStorage.removeItem('vastbase-auth');
          console.log('🔥 Google session cleared');
        }
      }
    });

    return () => {
      unsubscribeFirebase();
    };
  }, []);

  /**
   * Get current access token dynamically based on provider type
   * For Google: Always get latest token from Firebase
   * For Stytch/Passkey: Get from localStorage
   */
  const getCurrentAccessToken = useCallback(async (): Promise<string | null> => {
    if (!authMethod) {
      console.warn('getCurrentAccessToken: No authMethod available');
      return null;
    }

    try {
      switch (authMethod.providerType) {
        case AuthProviderType.GOOGLE:
          // Always get latest token from Firebase to avoid expiration
          const currentUser = auth.currentUser;
          if (currentUser) {
            const latestToken = await currentUser.getIdToken();
            console.log('🔄 Got fresh Google token from Firebase');
            return latestToken;
          } else {
            console.warn('getCurrentAccessToken: No Firebase user signed in');
            return null;
          }
        
        case AuthProviderType.EMAIL_OTP:
        case AuthProviderType.PASSKEY:
          // Get from localStorage for non-expiring tokens
          return getTokenFromStorage(authMethod.providerType);
        
        default:
          console.error(`getCurrentAccessToken: Unsupported provider type: ${authMethod.providerType}`);
          return null;
      }
    } catch (error) {
      console.error('getCurrentAccessToken: Error getting token:', error);
      return null;
    }
  }, [authMethod]);

  /**
   * Update authentication method
   * This function allows components to update the auth method state directly
   */
  const updateAuthMethod = useCallback((newAuthMethod: VastbaseAuthMethod | null) => {
    setAuthMethod(newAuthMethod);
    
    // Also update localStorage for persistence
    if (newAuthMethod) {
      setAuthMethodToStorage(newAuthMethod);
    } else {
      // Clear localStorage if null
      localStorage.removeItem('authmethod');
    }
  }, []);

  /**
   * Get Custom Auth Session Signatures
   * Re-fetch on each call, following Lit Protocol best practices
   * Uses getCurrentAccessToken to get latest token dynamically
   */
  const getCustomAuthSessionSigs = useCallback(async (): Promise<SessionSigs | null> => {
    // Check required authentication information
    if (!authMethod) {
      console.warn('getCustomAuthSessionSigs: Missing authMethod');
      return null;
    }

    // Get user data from API
    try {
      const userResponse = await fetch(`/api/user?authMethodId=${authMethod.authMethodId}`);
      if (!userResponse.ok) {
        console.warn('getCustomAuthSessionSigs: Failed to fetch user data');
        return null;
      }
      const userData = await userResponse.json();

      if (!userData?.litActionPkp) {
        console.warn('getCustomAuthSessionSigs: Missing user PKP');
        return null;
      }

      // Get current token dynamically
      const currentToken = await getCurrentAccessToken();
      if (!currentToken) {
        console.warn('getCustomAuthSessionSigs: Failed to get current access token');
        return null;
      }

      const sessionSigs = await getMultiProviderSessionSigs({
        pkpPublicKey: userData.litActionPkp.publicKey,
        pkpTokenId: userData.litActionPkp.tokenId,
        accessToken: currentToken,
        providerType: authMethod.providerType,
        userEmail: authMethod.primaryEmail,
      });

      return sessionSigs;
    } catch (error) {
      console.error('Error getting custom auth session signatures:', error);
      return null;
    }
  }, [authMethod, getCurrentAccessToken]);

  // Build Context value
  const contextValue: AuthContextValue = {
    authMethod,
    getCustomAuthSessionSigs,
    updateAuthMethod,
    getCurrentAccessToken,
    
    // Convenience properties
    authMethodId: authMethod?.authMethodId || null,
    providerType: authMethod?.providerType || null,
    primaryEmail: authMethod?.primaryEmail || null,
  };

  return (
    <AuthMethodContext.Provider value={contextValue}>
      {children}
    </AuthMethodContext.Provider>
  );
}