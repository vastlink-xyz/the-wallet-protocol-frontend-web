'use client'

import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MFASettingsContent } from './MFASettingsContent';
import { MFAPin } from '../MFAPin';
import { getProviderByAuthMethodType } from '@/lib/lit';
import { toast } from 'react-toastify';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getAuthIdByAuthMethod } from '@lit-protocol/lit-auth-client';
import { log } from '@/lib/utils';
import { SUPPORTED_TOKENS_INFO, TokenType, SUPPORTED_TOKEN_SYMBOLS } from '@/lib/web3/token';
import { MFAOtpDialog } from '@/components/Transaction/MFAOtpDialog';
import { LabeledContainer } from '@/components/LabeledContainer';
import { DailyWithdrawLimits } from '@/components/Transaction/DailyWithdrawLimits';
import { LogoLoading } from '@/components/LogoLoading';
import { useNotifications } from '@/hooks/useNotifications';
import { PersonalWalletSettingsContext } from '@/providers/PersonalWalletSettingsProvider';
import { useTranslations } from 'next-intl';
import { PinService } from '@/services/pinService';
import { useSecurityVerification } from '@/hooks/useSecurityVerification';
import { SecurityVerificationService } from '@/services/securityVerificationService';

export function PersonalWalletSettings() {
  const t = useTranslations("PersonalWalletSettings");

  const { isPersonalWalletSettingsOpen, closePersonalWalletSettings } = useContext(PersonalWalletSettingsContext);

  const { invalidateMFANotifications, invalidatePinNotifications } = useNotifications({ enabled: false });
  const [tokenLimits, setTokenLimits] = useState<Record<TokenType, string> | undefined>();
  const [isLimitValid, setIsLimitValid] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  const [isMfaLoading, setIsMfaLoading] = useState<boolean>(false);
  const [pinStatus, setPinStatus] = useState<{ hasPin: boolean }>({ hasPin: false });

  // State for real MFA Dialog
  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [verifiedPhone, setVerifiedPhone] = useState<string | null>(null);
  const [methodId, setMethodId] = useState<string | null>(null);
  const [phoneId, setPhoneId] = useState<string | null>(null);
  const [pendingSettings, setPendingSettings] = useState<any>(null);

  // Get auth method - use useState to make it reactive
  const [authMethod, setAuthMethod] = useState(() => getAuthMethodFromStorage());
  const sessionJwt = authMethod?.accessToken;

  // Refresh auth method when dialog opens
  useEffect(() => {
    if (isPersonalWalletSettingsOpen) {
      const currentAuthMethod = getAuthMethodFromStorage();
      if (currentAuthMethod) {
        setAuthMethod(currentAuthMethod);
      }
    }
  }, [isPersonalWalletSettingsOpen]);

  // sving wallet settings
  const saveWalletSettings = async () => {
    if (!authMethodId || !tokenLimits) {
      throw new Error('Missing required data');
    }

    // Prepare wallet settings to update
    const dailyWithdrawLimits: Record<string, string> = {};
    SUPPORTED_TOKEN_SYMBOLS.forEach(symbol => {
      dailyWithdrawLimits[SUPPORTED_TOKENS_INFO[symbol].symbol] = tokenLimits[symbol];
    });

    const settings = { dailyWithdrawLimits };

    // Save settings
    const response = await fetch('/api/user/settings', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionJwt}`
      },
      body: JSON.stringify({
        authMethodId,
        walletSettings: settings,
      })
    });

    const data = await response.json();

    if (response.ok) {
      return { message: 'Settings updated successfully' };
    } else {
      throw new Error(data.error || 'Failed to save settings');
    }
  };

  // Security verification hook for PIN + MFA
  const securityVerification = useSecurityVerification({
    authMethod,
    executeTransaction: SecurityVerificationService.createProtectedAction({
      contextType: 'forceMFA',
      sessionJwt: sessionJwt || '',
      businessLogic: saveWalletSettings
    })
  });

  // Handle PIN status updates
  const handlePinStatusUpdate = async () => {
    const authMethod = getAuthMethodFromStorage();
    if (!authMethod) return;
    const authMethodId = await getAuthIdByAuthMethod(authMethod);
    const hasPin = await PinService.hasLocalPinData({
      authMethodId,
    });
    setPinStatus({ hasPin });
    // Refresh PIN notifications when PIN status changes
    invalidatePinNotifications();
  };

  // Initialize PIN status on client side
  useEffect(() => {
    const initPinStatus = async () => {
      const authMethod = getAuthMethodFromStorage();
      if (!authMethod) return;
      const authMethodId = await getAuthIdByAuthMethod(authMethod);
      const hasPin = await PinService.hasLocalPinData({
        authMethodId,
      });
      setPinStatus({ hasPin });
    };

    if (isPersonalWalletSettingsOpen) {
      initPinStatus();
    }
  }, [isPersonalWalletSettingsOpen]);

  useEffect(() => {
    const fetchAuthMethodId = async () => {
      try {
        setIsMfaLoading(true);
        // Get auth method directly from storage
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) {
          console.error('No auth method found in storage');
          return;
        }

        const provider = getProviderByAuthMethodType(authMethod.authMethodType);
        const id = await provider.getAuthMethodId(authMethod);
        setAuthMethodId(id);

        if (id) {
          await fetchCurrentSettings(id);
          await fetchUserPhone();
        }
      } catch (error) {
        console.error('Error getting auth method ID:', error);
        setAuthMethodId(null);
      } finally {
        setIsMfaLoading(false);
      }
    };

    if (isPersonalWalletSettingsOpen) {
      fetchAuthMethodId();
    } else {
      // Reset other states if needed when main dialog closes
      setShowMfaDialog(false);
      setIsMfaLoading(false);
    }
  }, [isPersonalWalletSettingsOpen]);

  // Fetch current user settings
  const fetchCurrentSettings = async (id: string) => {
    try {
      const response = await fetch(`/api/user?authMethodId=${id}`);
      if (!response.ok) {
        console.error('Failed to fetch user settings');
        return;
      }

      const userData = await response.json();
      const newLimits = {} as Record<TokenType, string>;

      log('userData', userData.walletSettings.dailyWithdrawLimits);

      // Update limits for each token if they exist in the user settings
      SUPPORTED_TOKEN_SYMBOLS.forEach(symbol => {
        if (userData.walletSettings?.dailyWithdrawLimits?.[SUPPORTED_TOKENS_INFO[symbol].symbol]) {
          newLimits[symbol] = userData.walletSettings.dailyWithdrawLimits[SUPPORTED_TOKENS_INFO[symbol].symbol];
        } else {
          // Use default value if not set
          newLimits[symbol] = SUPPORTED_TOKENS_INFO[symbol].defaultWithdrawLimit;
        }
      });

      log('newLimits', newLimits);

      setTokenLimits(newLimits);
    } catch (error) {
      console.error('Error fetching current settings:', error);
    }
  };

  // Fetch user's phone number for MFA
  const fetchUserPhone = useCallback(async () => {
    if (!sessionJwt) return;

    try {
      const response = await fetch('/api/mfa/get-user-phone', {
        headers: {
          'Authorization': `Bearer ${sessionJwt}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch phone number');
      }

      const data = await response.json();
      const phones = data.phones || [];

      if (phones.length > 0) {
        setVerifiedPhone(phones[0].phone_number);
        setPhoneId(phones[0].phone_id);
      }
    } catch (error) {
      console.error('Error fetching user phone:', error);
    }
  }, [sessionJwt]);

  // Handle limits change from DailyWithdrawLimits component
  const handleLimitsChange = (newLimits: Record<TokenType, string>, isValid: boolean) => {
    setTokenLimits(newLimits);
    setIsLimitValid(isValid);
  };

  const saveSettings = async () => {
    if (!isLimitValid || !authMethodId || !tokenLimits) return;

    setIsSaving(true);

    try {
      const result = await securityVerification.verify({});
      
      if (result.success) {
        toast.success(t("update_success"));
        invalidateMFANotifications();
        closePersonalWalletSettings();
      } else {
        toast.error(result.error || t("update_failed"));
      }
    } catch (error: any) {
      console.error('Error saving wallet settings:', error);
      toast.error(error.message || t("update_failed"));
    } finally {
      setIsSaving(false);
    }
  };

  // Real send OTP function
  const handleSendOtp = async () => {
    if (!sessionJwt || !verifiedPhone) {
      throw new Error('Session or phone number not found');
    }

    log('Sending OTP to', verifiedPhone);
    const response = await fetch('/api/mfa/whatsapp/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionJwt}`,
      },
      body: JSON.stringify({ phone_number: verifiedPhone }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      log('Error response from API', errorData);
      throw new Error(errorData.error || `Failed to send OTP: ${response.status}`);
    }

    const data = await response.json();
    setMethodId(data.method_id);
    log('OTP sent, method_id:', data.method_id);
  };

  // Real verify OTP function
  const handleVerifyOtp = async (otp: string) => {
    if (!sessionJwt || !methodId || !authMethodId || !pendingSettings) {
      throw new Error('Required data for verification is missing');
    }

    if (otp.length !== 6) {
      throw new Error('Verification code must be 6 digits');
    }

    log('Verifying OTP and updating settings', { method_id: methodId, code: otp });
    const response = await fetch('/api/user/settings', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionJwt}`,
      },
      body: JSON.stringify({
        authMethodId,
        walletSettings: pendingSettings,
        otp,
        phoneId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Failed to update settings: ${response.status}`);
    }

    const data = await response.json();
    log('Settings updated successfully', data);

    toast.success(t("update_success"));

    setShowMfaDialog(false);
    closePersonalWalletSettings(); // Close the settings dialog
  };

  return (
    <>
    <Dialog open={isPersonalWalletSettingsOpen} onOpenChange={() => closePersonalWalletSettings()}>
      <DialogContent className="p-0 max-w-[660px] sm:max-w-[660px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>

      <div className="max-h-[60vh] overflow-y-auto p-8 pt-4">
        {isMfaLoading ? (
          <div className="flex justify-center items-center py-8">
            <LogoLoading className='mt-0' />
          </div>
        ) : (
          <>
            <LabeledContainer label={t("daily_withdraw_title")} className="mb-8">
              {
                tokenLimits && (
                  <>
                    {!verifiedPhone && (
                      <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                        <p className="text-amber-800 text-sm">
                          {t("daily_withdraw_description")}
                        </p>
                      </div>
                    )}
                    <DailyWithdrawLimits
                      initialLimits={tokenLimits}
                      onChange={handleLimitsChange}
                    />
                  </>
                )
              }
            </LabeledContainer>

              <LabeledContainer label={t("mfa_pin_settings")} className="mb-8">
                <MFAPin
                  pinStatus={pinStatus}
                  authMethod={authMethod}
                  onSuccess={handlePinStatusUpdate}
                />
              </LabeledContainer>

              <LabeledContainer label={t("mfa_settings")}>
                <MFASettingsContent
                  isOpen={isPersonalWalletSettingsOpen}
                  authMethodId={authMethodId}
                  onPhoneUpdated={fetchUserPhone}
                  onMFAStatusChanged={invalidateMFANotifications}
                />
              </LabeledContainer>

              <DialogFooter className="pt-4 space-x-2">
                <Button
                  onClick={saveSettings}
                  disabled={!isLimitValid || isSaving || securityVerification.isVerifying}
                >
                  {t(isSaving || securityVerification.isVerifying ? 'saving' : 'save')}
                </Button>
              </DialogFooter>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>

      {/* Real MFA OTP Dialog for wallet settings */}
      <MFAOtpDialog
        isOpen={showMfaDialog}
        onClose={() => setShowMfaDialog(false)}
        onOtpVerify={handleVerifyOtp}
        sendOtp={handleSendOtp}
        identifier={verifiedPhone}
        title={t("opt_dialog_title")}
        description={t("opt_dialog_description")}
      />

      {/* PIN and MFA dialogs from security verification hook */}
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
    </>
  );
}
