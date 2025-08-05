import React, { useCallback } from 'react';
import { MFAPhoneWhatsApp } from './MFAPhoneWhatsApp';
import { MFATOTP } from './MFATotp';
import { SecurityLayerService } from '@/services/securityLayerService';
import { useSecurityLayers } from '@/hooks/useSecurityLayers';

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

  
  // Use React Query hook for security layers - automatically handles caching, deduplication, and loading states
  const { 
    securityLayers, 
    invalidateAndRefetch 
  } = useSecurityLayers({
    enabled: isOpen && !!authMethodId // Only fetch when dialog is open and authMethodId exists
  });

  // Helper to trigger a refresh of MFA methods and notify parent of changes
  const refreshMFAStatus = useCallback(async () => {
    // Invalidate and refetch security layers data
    await invalidateAndRefetch();
    
    if (onMFAStatusChanged) {
      onMFAStatusChanged();
    }
  }, [invalidateAndRefetch, onMFAStatusChanged]);

  // React Query hook automatically handles fetching when enabled condition changes

  // Get MFA layers from unified security layers
  const whatsappLayer = SecurityLayerService.findLayerByType(securityLayers, 'WHATSAPP_OTP');
  const totpLayer = SecurityLayerService.findLayerByType(securityLayers, 'TOTP');
  const hasTotp = totpLayer?.isEnabled || false;

  // Create verifiedPhone object from security layer config if WhatsApp is enabled
  const verifiedPhone = whatsappLayer && whatsappLayer.isEnabled && whatsappLayer.type === 'WHATSAPP_OTP' ? {
    phone_id: whatsappLayer.config.phoneId,
    phone_number: whatsappLayer.config.phoneNumber,
    verified: true
  } : null;

  return (
    <div className="space-y-4">
      {/* Phone WhatsApp MFA */}
      <MFAPhoneWhatsApp 
        verifiedPhone={verifiedPhone}
        authMethodId={authMethodId}
        onSuccess={refreshMFAStatus}
        onPhoneUpdated={onPhoneUpdated}
      />

      {/* TOTP MFA */}
      <MFATOTP 
        hasTotp={hasTotp}
        authMethodId={authMethodId}
        onSuccess={refreshMFAStatus}
      />
    </div>
  );
} 