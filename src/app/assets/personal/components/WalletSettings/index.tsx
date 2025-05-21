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
import { MfaOtpDialog } from '@/components/MfaOtpDialog';
import { log } from '@/lib/utils';

export function PersonalWalletSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [ethLimit, setEthLimit] = useState<string>('0.001');
  const [isLimitValid, setIsLimitValid] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  const [limitError, setLimitError] = useState<string>('');

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
      if (userData.walletSettings?.dailyWithdrawLimits?.ETH) {
        setEthLimit(userData.walletSettings.dailyWithdrawLimits.ETH.toString());
      }
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
  
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Allow empty value so user can clear the input
    if (newValue === '') {
      setLimitError('');
      setEthLimit(newValue);
      setIsLimitValid(false);
      return;
    }
    
    // Validate if input is a valid number
    const numberRegex = /^(0|[1-9]\d*)(\.\d+)?$/;
    if (!numberRegex.test(newValue)) {
      setLimitError('Please enter a valid number');
      setEthLimit(newValue);
      setIsLimitValid(false);
      return;
    }
    
    // Parse to number to ensure validity
    const numValue = parseFloat(newValue);
    if (isNaN(numValue) || numValue < 0) {
      setLimitError('Please enter a number greater than or equal to 0');
      setEthLimit(newValue);
      setIsLimitValid(false);
      return;
    }
    
    setLimitError('');
    setEthLimit(newValue);
    setIsLimitValid(true);
  };
  
  const saveSettings = async () => {
    if (!isLimitValid || !authMethodId) return;
    
    setIsSaving(true);
    
    try {
      // Prepare wallet settings to update
      const settings = {
        dailyWithdrawLimits: {
          ETH: ethLimit
        }
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
          walletSettings: settings
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
    return data;
  };

  // Handle OTP verification completion
  const handleOtpVerified = (verificationDetail?: any) => {
    log('MFA Verified:', verificationDetail);
    setShowMfaDialog(false);
    toast.success("Your wallet settings have been updated successfully.");
    setIsOpen(false); // Close the settings dialog
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Wallet Settings</Button>
        </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Wallet Settings</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>

          <div>
            <h2 className='font-medium mb-2'>Daily Withdraw Limit</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Input 
                  value={ethLimit} 
                  onChange={handleLimitChange} 
                  placeholder="0.001"
                  className="w-32"
                />
                <span className="font-medium">ETH</span>
              </div>
              {limitError && <p className="text-sm text-red-500">{limitError}</p>}
            </div>
          </div>

          <div>
            <h2 className='font-medium mb-2'>MFA Settings</h2>
            <MFASettingsContent 
              isOpen={isOpen} 
              onPhoneUpdated={fetchUserPhone}
            />
          </div>

          <DialogFooter className="pt-4 space-x-2">
            <Button 
              onClick={saveSettings} 
              disabled={!isLimitValid || isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Settings'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Real MFA OTP Dialog for wallet settings */}
      <MfaOtpDialog
        isOpen={showMfaDialog}
        onClose={() => setShowMfaDialog(false)}
        onOtpVerified={handleOtpVerified}
        sendOtp={handleSendOtp}
        verifyOtp={handleVerifyOtp}
        identifier={verifiedPhone}
        title="Verify Settings Change"
        description="A verification code will be sent to your phone via WhatsApp"
      />
    </>
  );
}
