import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MFASettingsContent } from './MFASettingsContent';
import { Input } from "@/components/ui/input";
import { getProviderByAuthMethodType } from '@/lib/lit';
import { toast } from 'react-toastify';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { log } from '@/lib/utils';
import { SUPPORTED_TOKENS_INFO, TokenType, SUPPORTED_TOKEN_SYMBOLS } from '@/lib/web3/token';
import { Settings } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { MFAOtpDialog } from '@/components/Transaction/MFAOtpDialog';
import { LabeledContainer } from '@/components/LabeledContainer';
import { DailyWithdrawLimits, getDefaultDailyWithdrawLimits } from '@/components/Transaction/DailyWithdrawLimits';

export function PersonalWalletSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [tokenLimits, setTokenLimits] = useState<Record<TokenType, string> | undefined>();
  const [isLimitValid, setIsLimitValid] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);

  // State for real MFA Dialog
  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [verifiedPhone, setVerifiedPhone] = useState<string | null>(null);
  const [methodId, setMethodId] = useState<string | null>(null);
  const [phoneId, setPhoneId] = useState<string | null>(null);
  const [pendingSettings, setPendingSettings] = useState<any>(null);
  
  // Get user's session JWT
  const authMethod = getAuthMethodFromStorage();
  const sessionJwt = authMethod?.accessToken;
  
  useEffect(() => {
    const fetchAuthMethodId = async () => {
      try {
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
      }
    };
    
    if (isOpen) {
      fetchAuthMethodId();
    } else {
      // Reset other states if needed when main dialog closes
      setShowMfaDialog(false);
    }
  }, [isOpen]);
  
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
  const fetchUserPhone = async () => {
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
  };
  
  // Handle limits change from DailyWithdrawLimits component
  const handleLimitsChange = (newLimits: Record<TokenType, string>, isValid: boolean) => {
    setTokenLimits(newLimits);
    setIsLimitValid(isValid);
  };
  
  const saveSettings = async () => {
    if (!isLimitValid || !authMethodId || !tokenLimits) return;
    
    setIsSaving(true);
    
    try {
      // Prepare wallet settings to update
      const dailyWithdrawLimits: Record<string, string> = {};
      
      // Add limits for each token
      SUPPORTED_TOKEN_SYMBOLS.forEach(symbol => {
        dailyWithdrawLimits[SUPPORTED_TOKENS_INFO[symbol].symbol] = tokenLimits[symbol];
      });
      
      const settings = {
        dailyWithdrawLimits
      };
      
      // Store settings for later use if MFA is required
      setPendingSettings(settings);
      
      // Call the API to update wallet settings
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
      
      const responseData = await response.json();
      
      if (responseData.requiresMfa) {
        // If MFA is required, show the OTP dialog
        setShowMfaDialog(true);
      } else if (response.ok) {
        // If API returned success and no MFA required, settings were updated
        toast.success("Your wallet settings have been updated successfully.");
        setIsOpen(false);
      } else {
        // Handle other error cases
        throw new Error(responseData.error || 'Failed to save settings');
      }
    } catch (error: any) {
      console.error('Error saving wallet settings:', error);
      toast.error(error.message || "Failed to save wallet settings. Please try again.");
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

    setShowMfaDialog(false);
    toast.success("Your wallet settings have been updated successfully.");
    setIsOpen(false); // Close the settings dialog
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Tooltip>
            <TooltipTrigger asChild>
              <Settings onClick={() => setIsOpen(true)} className="cursor-pointer" size={16} />
            </TooltipTrigger>
            <TooltipContent>
              Settings
            </TooltipContent>
          </Tooltip>
        </DialogTrigger>

        <DialogContent className="p-0 sm:!max-w-[600px]">
          <DialogHeader className="border-b px-8 py-6">
            <DialogTitle>Wallet Settings</DialogTitle>
            <DialogDescription>
              Configure daily withdrawal limits for each supported currency
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[60vh] overflow-y-auto p-8 pt-4">
            <LabeledContainer label="Daily Withdraw Limits" className="mb-8">
              <div className="flex flex-col space-y-4">
                {
                  tokenLimits && (
                    <DailyWithdrawLimits
                      initialLimits={tokenLimits}
                      onChange={handleLimitsChange}
                    />
                  )
                }
              </div>
            </LabeledContainer>

            <LabeledContainer label="MFA Settings">
              <MFASettingsContent 
                isOpen={isOpen} 
                onPhoneUpdated={fetchUserPhone}
              />
            </LabeledContainer>

            <DialogFooter className="pt-4 space-x-2">
              <Button 
                onClick={saveSettings} 
                disabled={!isLimitValid || isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Settings'}
              </Button>
            </DialogFooter>
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
        title="Verify Settings Change"
        description="A verification code will be sent to your phone via WhatsApp"
      />
    </>
  );
}
