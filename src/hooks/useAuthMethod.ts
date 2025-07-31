import { useState, useEffect } from 'react';
import { VastbaseAuthMethod } from '@/lib/lit/custom-auth';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';

export function useAuthMethod(): VastbaseAuthMethod | null {
  
  const [authMethod, setAuthMethod] = useState<VastbaseAuthMethod | null>(() => {
    // Initialize with current value from storage
    return getAuthMethodFromStorage();
  });

  useEffect(() => {
    // Update auth method when component mounts
    const currentAuthMethod = getAuthMethodFromStorage();
    setAuthMethod(currentAuthMethod);
  }, []);

  return authMethod;
}