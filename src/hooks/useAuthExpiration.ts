import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

/**
 * Hook for handling authentication expiration
 * Shows a toast message and redirects to the home page
 */
export function useAuthExpiration() {
  const router = useRouter();
  
  const handleExpiredAuth = (message?: string) => {
    const defaultMessage = 'Your Google login has expired. Please log in again.';
    toast.error(message || defaultMessage);
    
    // Redirect to home page after a short delay to allow toast to be visible
    setTimeout(() => {
      router.push('/');
    }, 1500);
  };
  
  return { handleExpiredAuth };
} 