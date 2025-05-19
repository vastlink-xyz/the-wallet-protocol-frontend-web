import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { isTokenValid } from '@/lib/jwt';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';

/**
 * Hook for handling authentication expiration
 * Shows a toast message and redirects to the home page
 */
export function useAuthExpiration() {
  const router = useRouter();
  
  const handleExpiredAuth = (message?: string) => {
    const defaultMessage = 'Your access token has expired. Please log in again.';
    toast.error(message || defaultMessage);
    
    // Redirect to home page after a short delay to allow toast to be visible
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };
  
  const verifyAuthOrRedirect = async () => {
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
  };
  
  return { handleExpiredAuth, verifyAuthOrRedirect };
} 