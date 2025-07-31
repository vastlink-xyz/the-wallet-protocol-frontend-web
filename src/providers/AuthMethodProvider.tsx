'use client';

import React, { createContext, useCallback, ReactNode, useState, useEffect } from 'react';
import { SessionSigs } from '@lit-protocol/types';
import { getMultiProviderSessionSigs } from '@/lib/lit';
import { getAuthMethodFromStorage, setAuthMethodToStorage } from '@/lib/storage/authmethod';
import { VastbaseAuthMethod } from '@/lib/lit/custom-auth';
import { AuthContextValue } from '@/types/auth-context';

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
    // Update auth method when component mounts
    const currentAuthMethod = getAuthMethodFromStorage();
    setAuthMethod(currentAuthMethod);
  }, []);

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
   * Note: This function requires userData to be passed from the caller
   */
  const getCustomAuthSessionSigs = useCallback(async (): Promise<SessionSigs | null> => {
    // Check required authentication information
    if (!authMethod) {
      console.warn('getCustomAuthSessionSigs: Missing authMethod');
      return null;
    }

    // Get user data from useUserData (to avoid circular dependency)
    // Note: Components should use useUserData hook separately to get userData
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

      const sessionSigs = await getMultiProviderSessionSigs({
        pkpPublicKey: userData.litActionPkp.publicKey,
        pkpTokenId: userData.litActionPkp.tokenId,
        accessToken: authMethod.accessToken,
        providerType: authMethod.providerType,
        userEmail: authMethod.primaryEmail,
      });

      return sessionSigs;
    } catch (error) {
      console.error('Error getting custom auth session signatures:', error);
      return null;
    }
  }, [authMethod]);

  // Build Context value
  const contextValue: AuthContextValue = {
    authMethod,
    getCustomAuthSessionSigs,
    updateAuthMethod,
    
    // Convenience properties
    authMethodId: authMethod?.authMethodId || null,
    accessToken: authMethod?.accessToken || null,
    providerType: authMethod?.providerType || null,
    primaryEmail: authMethod?.primaryEmail || null,
  };

  return (
    <AuthMethodContext.Provider value={contextValue}>
      {children}
    </AuthMethodContext.Provider>
  );
}