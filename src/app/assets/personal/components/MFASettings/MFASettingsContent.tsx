import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { log } from '@/lib/utils';
import { MFAPhoneWhatsApp } from './MFAPhoneWhatsApp';
import { toast } from 'react-toastify';

// Define StytchPhoneNumber type based on expected API response
interface StytchPhoneNumber {
  phone_id: string;
  phone_number: string;
  verified: boolean;
}

// Helper to get session JWT from storage
const getStytchSessionJwt = (): string | null => {
  const authMethod = getAuthMethodFromStorage();
  return authMethod?.accessToken || null; // accessToken is the session_jwt
};

interface MFASettingsContentProps {
  isOpen: boolean;
}

export function MFASettingsContent({ isOpen }: MFASettingsContentProps) {
  // Main component state
  const [phoneNumbers, setPhoneNumbers] = useState<StytchPhoneNumber[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const prevIsOpen = useRef(isOpen);
  const sessionJwt = getStytchSessionJwt();

  // Helper to trigger a refresh of MFA methods
  const refreshMFAStatus = () => {
    fetchMFAStatus();
  };

  // Fetch MFA status from API
  const fetchMFAStatus = useCallback(async () => {
    setIsLoading(true);
    
    const token = getStytchSessionJwt();
    log('MFASettingsContent: Session JWT token present:', !!token);
    
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      log('MFASettingsContent: fetching mfa status');
      const response = await fetch('/api/mfa/status', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      
      if (!response.ok) {
        const data = await response.json();
        log('MFASettingsContent: Error response from API', data);
        throw new Error(data.error || `Failed to fetch MFA status: ${response.status}`);
      }
      
      const data = await response.json();
      log('MFASettingsContent: mfa status response', data);
      
      // Ensure phone_numbers field exists in data
      if (data && Array.isArray(data.phone_numbers)) {
        setPhoneNumbers(data.phone_numbers);
        log('MFASettingsContent: phone numbers set to state', data.phone_numbers);
      } else {
        log('MFASettingsContent: No phone numbers found in response or invalid format', data);
        setPhoneNumbers([]);
      }
    } catch (err: any) {
      toast.error('MFASettingsContent: Error fetching mfa status');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Effect to handle dialog open/close
  useEffect(() => {
    if (isOpen) {
      // Always fetch MFA status when dialog is open
      log('MFASettingsContent: Dialog is open, fetching status');
      // Ensure fetch is called after component is fully mounted
      setTimeout(() => {
        fetchMFAStatus();
      }, 100);
    }
    prevIsOpen.current = isOpen;
  }, [isOpen, fetchMFAStatus]);

  const verifiedPhone = phoneNumbers.find(p => p.verified) || null;
  log('MFASettingsContent: Verified phone found:', verifiedPhone);

  return (
    <div className="space-y-4 p-2">
      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-center items-center p-2">
          <Loader2 className="h-5 w-5 animate-spin" />
        </div>
      )}

      {/* Phone WhatsApp MFA */}
      <h3 className="font-medium text-base mt-6">WhatsApp Authentication</h3>
      <div className="border rounded-md p-4">
        <MFAPhoneWhatsApp 
          verifiedPhone={verifiedPhone}
          sessionJwt={sessionJwt}
          onSuccess={refreshMFAStatus}
        />
      </div>
    </div>
  );
} 