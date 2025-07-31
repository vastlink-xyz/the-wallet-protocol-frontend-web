'use client';

import React, { createContext, useCallback, ReactNode } from 'react';
import { SessionSigs } from '@lit-protocol/types';
import { useAuthMethod } from '@/hooks/useAuthMethod';
import { useUserData } from '@/hooks/useUserData';
import { getMultiProviderSessionSigs } from '@/lib/lit';
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
 * Provides application-wide authentication state management, including:
 * - Current authentication method (authMethod)
 * - User data (userData) 
 * - Custom Auth Session Signatures getter method
 * - Convenient access to authentication-related properties
 * 
 * Uses layered architecture:
 * - React components: directly use Context
 * - Utility functions/services: maintain purity through parameter passing
 */
export function AuthMethodProvider({ children }: AuthMethodProviderProps) {
  // Get authentication-related state
  const authMethod = useAuthMethod();
  const { userData } = useUserData();

  /**
   * Get Custom Auth Session Signatures
   * Re-fetch on each call, following Lit Protocol best practices
   */
  const getCustomAuthSessionSigs = useCallback(async (): Promise<SessionSigs | null> => {
    // Check required authentication information
    if (!authMethod || !userData?.litActionPkp) {
      console.warn('getCustomAuthSessionSigs: Missing authMethod or user PKP');
      return null;
    }

    try {
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
  }, [authMethod, userData]);

  // Build Context value
  const contextValue: AuthContextValue = {
    authMethod,
    userData,
    getCustomAuthSessionSigs,
    
    // Convenience properties
    authMethodId: authMethod?.authMethodId || null,
    accessToken: authMethod?.accessToken || null,
    providerType: authMethod?.providerType || null,
    primaryEmail: authMethod?.primaryEmail || null,
    hasPkp: !!(userData?.litActionPkp?.ethAddress && 
               userData?.litActionPkp?.publicKey && 
               userData?.litActionPkp?.tokenId),
  };

  return (
    <AuthMethodContext.Provider value={contextValue}>
      {children}
    </AuthMethodContext.Provider>
  );
}