import { useContext } from 'react';
import { AuthMethodContext } from '@/providers/AuthMethodProvider';
import { AuthContextValue } from '@/types/auth-context';

/**
 * useAuthContext Hook
 * 
 * Convenient hook to access the AuthMethod Context
 * Provides type safety and error checking
 * 
 * @returns AuthContextValue - Authentication context value
 * @throws Error - If used outside of AuthMethodProvider
 * 
 * @example
 * ```tsx
 * const { authMethod, getCustomAuthSessionSigs } = useAuthContext();
 * 
 * const handleTransaction = async () => {
 *   const sessionSigs = await getCustomAuthSessionSigs();
 *   // Use sessionSigs...
 * };
 * ```
 */
export function useAuthContext(): AuthContextValue {
  const context = useContext(AuthMethodContext);
  
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthMethodProvider. ' +
      'Make sure your component is wrapped with <AuthMethodProvider>.'
    );
  }
  
  return context;
}

/**
 * useCustomAuthSessionSigs Hook
 * 
 * Convenient hook to get Custom Auth Session Signatures
 * 
 * @returns Promise<SessionSigs | null> - Session signatures or null
 * 
 * @example
 * ```tsx
 * const getSessionSigs = useCustomAuthSessionSigs();
 * 
 * const handleAction = async () => {
 *   const sessionSigs = await getSessionSigs();
 *   if (!sessionSigs) return;
 *   // Use sessionSigs...
 * };
 * ```
 */
export function useCustomAuthSessionSigs() {
  const { getCustomAuthSessionSigs } = useAuthContext();
  return getCustomAuthSessionSigs;
}