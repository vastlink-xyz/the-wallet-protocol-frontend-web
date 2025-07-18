import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { log } from '@/lib/utils';
import { MFAPhoneWhatsApp } from './MFAPhoneWhatsApp';
import { MFAPin } from './MFAPin';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { PinService } from '@/services/pinService';

// Define StytchPhoneNumber type based on expected API response
interface StytchPhoneNumber {
  phone_id: string;
  phone_number: string;
  verified: boolean;
}

interface MFASettingsContentProps {
  isOpen: boolean;
  onPhoneUpdated?: () => Promise<void>;
  onMFAStatusChanged?: () => void;
}

export function MFASettingsContent({ isOpen, onPhoneUpdated, onMFAStatusChanged }: MFASettingsContentProps) {
  const t = useTranslations("MFASettings");

  // Main component state
  const [phoneNumbers, setPhoneNumbers] = useState<StytchPhoneNumber[]>([]);
  // Remove pinStatus state, use local computed value

  const prevIsOpen = useRef(isOpen);
  const authMethod = getAuthMethodFromStorage();
  const sessionJwt = authMethod?.accessToken || null;

  // Fetch MFA status from API
  const fetchMFAStatus = useCallback(async () => {
    const token = sessionJwt;
    log('MFASettingsContent: Session JWT token present:', !!token);
    
    if (!token) {
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
      toast.error(t("fetch_error"));
    }
  }, [sessionJwt, t]);

  // Helper to trigger a refresh of MFA methods and notify parent of changes
  const refreshMFAStatus = useCallback(async () => {
    await fetchMFAStatus();
    if (onMFAStatusChanged) {
      onMFAStatusChanged();
    }
    // No need to update pinStatus, will be recomputed
  }, [fetchMFAStatus, onMFAStatusChanged]);

  // Effect to handle dialog open/close
  useEffect(() => {
    if (isOpen) {
      // Always fetch MFA status when dialog is open
      log('MFASettingsContent: Dialog is open, fetching status');
      fetchMFAStatus();
    }
    prevIsOpen.current = isOpen;
  }, [isOpen, fetchMFAStatus]);

  const verifiedPhone = phoneNumbers.find(p => p.verified) || null;
  log('MFASettingsContent: Verified phone found:', verifiedPhone);

  return (
    <div className="space-y-4">
      {/* PIN MFA */}
      <MFAPin 
        pinStatus={{ hasPin: PinService.hasLocalPinData() }}
        authMethod={authMethod}
        onSuccess={refreshMFAStatus}
      />

      {/* Phone WhatsApp MFA */}
      <MFAPhoneWhatsApp 
        verifiedPhone={verifiedPhone}
        sessionJwt={sessionJwt}
        onSuccess={refreshMFAStatus}
        onPhoneUpdated={onPhoneUpdated}
      />
    </div>
  );
} 