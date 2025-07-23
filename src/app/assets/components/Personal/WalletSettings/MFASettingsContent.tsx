import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { MFAPhoneWhatsApp } from './MFAPhoneWhatsApp';
import { MFATOTP } from './MFATotp';
import { SecurityLayer } from '@/types/security';

// Define StytchPhoneNumber type based on expected API response (used by MFAPhoneWhatsApp component)
interface StytchPhoneNumber {
  phone_id: string;
  phone_number: string;
  verified: boolean;
}

interface MFASettingsContentProps {
  isOpen: boolean;
  authMethodId: string | null;
  onPhoneUpdated?: () => Promise<void>;
  onMFAStatusChanged?: () => void;
}

export function MFASettingsContent({ isOpen, authMethodId, onPhoneUpdated, onMFAStatusChanged }: MFASettingsContentProps) {

  // Main component state
  const [securityLayers, setSecurityLayers] = useState<SecurityLayer[]>([]);

  const prevIsOpen = useRef(isOpen);
  const authMethod = getAuthMethodFromStorage();
  const sessionJwt = authMethod?.accessToken || null;

  // Fetch security layers
  const fetchSecurityLayers = useCallback(async (authId: string) => {
    if (!sessionJwt || !authId) return;

    try {
      const response = await fetch(`/api/security/layers?authMethodId=${authId}`);

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      setSecurityLayers(data.securityLayers || []);
    } catch (err: any) {
      console.error('Error fetching security layers:', err);
    }
  }, [sessionJwt]);

  // Helper to trigger a refresh of MFA methods and notify parent of changes
  const refreshMFAStatus = useCallback(async () => {
    if (authMethodId) {
      await fetchSecurityLayers(authMethodId);
    }
    if (onMFAStatusChanged) {
      onMFAStatusChanged();
    }
  }, [fetchSecurityLayers, authMethodId, onMFAStatusChanged]);

  // Effect to handle dialog open/close
  useEffect(() => {
    if (isOpen && authMethodId) {
      fetchSecurityLayers(authMethodId);
    }
    prevIsOpen.current = isOpen;
  }, [isOpen, fetchSecurityLayers, authMethodId]);

  const whatsappLayer = securityLayers.find(layer => layer.type === 'WHATSAPP_OTP' && layer.isEnabled);
  const hasTotp = securityLayers.some(layer => layer.type === 'TOTP' && layer.isEnabled);

  // Create verifiedPhone object from security layer config if WhatsApp is enabled
  const verifiedPhone = whatsappLayer && whatsappLayer.type === 'WHATSAPP_OTP' ? {
    phone_id: whatsappLayer.config.phoneId,
    phone_number: whatsappLayer.config.phoneNumber,
    verified: true
  } : null;

  return (
    <div className="space-y-4">
      {/* Phone WhatsApp MFA */}
      <MFAPhoneWhatsApp 
        verifiedPhone={verifiedPhone}
        sessionJwt={sessionJwt}
        authMethodId={authMethodId}
        onSuccess={refreshMFAStatus}
        onPhoneUpdated={onPhoneUpdated}
      />

      {/* TOTP MFA */}
      <MFATOTP 
        hasTotp={hasTotp}
        sessionJwt={sessionJwt}
        authMethodId={authMethodId}
        onSuccess={refreshMFAStatus}
      />
    </div>
  );
} 