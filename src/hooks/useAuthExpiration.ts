import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { isTokenValid } from '@/lib/jwt';
import { useAuthContext } from '@/hooks/useAuthContext';
import { log } from '@/lib/utils';

/**
 * Hook for handling authentication expiration
 * Shows a toast message and redirects to the home page
 * Note: Periodic checking is now handled globally by AuthGuard component
 */
export function useAuthExpiration() {
  const router = useRouter();
  const { authMethod, getCurrentAccessToken } = useAuthContext();
  
  const handleExpiredAuth = useCallback((message?: string) => {
    const defaultMessage = 'Your access token has expired. Please log in again.';
    
    // Use toastId to prevent duplicate toast messages
    toast.error(message || defaultMessage, {
      toastId: 'auth-expired', // Same toastId ensures only one toast is shown
    });
    
    // Redirect to home page after a short delay to allow toast to be visible
    setTimeout(() => {
      // kkktodo
      log('expired auth, redirecting to home page')
      // router.push('/');
    }, 1500);
  }, [router]);
  
  const verifyAuthOrRedirect = useCallback(async () => {
    if (!authMethod) {
      handleExpiredAuth();
      return false;
    }
    
    try {
      const accessToken = await getCurrentAccessToken(true);
      if (!accessToken) {
        handleExpiredAuth();
        return false;
      }

      log('useAuthExpiration verifyAuthOrRedirect accessToken', accessToken)
      
      const isValid = await isTokenValid(authMethod.providerType, accessToken);
      if (!isValid) {
        handleExpiredAuth();
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error verifying auth:', error);
      handleExpiredAuth();
      return false;
    }
  }, [authMethod, handleExpiredAuth, getCurrentAccessToken]);

  // Periodic checking is now handled globally by AuthGuard component
  
  return { handleExpiredAuth, verifyAuthOrRedirect };
} 