import { useRouter } from 'next/navigation';
import { useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { isTokenValid } from '@/lib/jwt';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';

/**
 * Hook for handling authentication expiration
 * Shows a toast message and redirects to the home page
 * @param enablePeriodicCheck - Whether to enable periodic token validation (default: false)
 * @param checkInterval - Interval in milliseconds for periodic checks (default: 5 minutes)
 */
export function useAuthExpiration(enablePeriodicCheck = false, checkInterval = 5 * 60 * 1000) {
  const router = useRouter();
  
  const handleExpiredAuth = useCallback((message?: string) => {
    const defaultMessage = 'Your access token has expired. Please log in again.';
    toast.error(message || defaultMessage);
    
    // Redirect to home page after a short delay to allow toast to be visible
    setTimeout(() => {
      router.push('/');
    }, 1500);
  }, [router]);
  
  const verifyAuthOrRedirect = useCallback(async () => {
    const authMethod = getAuthMethodFromStorage();
    if (!authMethod) {
      handleExpiredAuth();
      return false;
    }
    
    const isValid = await isTokenValid(authMethod);
    if (!isValid) {
      handleExpiredAuth();
      return false;
    }
    
    return true;
  }, [handleExpiredAuth]);

  // Enable periodic check
  useEffect(() => {
    if (!enablePeriodicCheck) return;

    const interval = setInterval(() => {
      verifyAuthOrRedirect();
    }, checkInterval);

    return () => clearInterval(interval);
  }, [enablePeriodicCheck, checkInterval, verifyAuthOrRedirect]);
  
  return { handleExpiredAuth, verifyAuthOrRedirect };
} 