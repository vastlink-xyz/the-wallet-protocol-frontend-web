import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from 'lucide-react';
import { log } from '@/lib/utils';
import { toast } from 'react-toastify';
import { MFAOtpDialog } from '@/components/Transaction/MFAOtpDialog';
import { useTranslations } from 'next-intl';

// Define StytchPhoneNumber type based on expected API response
interface StytchPhoneNumber {
  phone_id: string;
  phone_number: string;
  verified: boolean;
}

// UI state for the MFA phone settings
type PhoneUiState = 'initial' | 'setup';

interface MFAPhoneWhatsAppProps {
  // Current phone number information (if exists)
  verifiedPhone: StytchPhoneNumber | null;
  
  // Session JWT for API calls
  sessionJwt: string | null;
  
  // Auth method ID for API calls
  authMethodId: string | null;
  
  // Callback when phone number is successfully added/verified/removed
  onSuccess: () => void;

  // Callback to update parent component's phone state
  onPhoneUpdated?: () => Promise<void>;
}

// Common container for all UI states
const FormContainer: React.FC<{
  children: React.ReactNode;
  title?: string;
  errorMessage: string | null;
  successMessage?: string | null;
}> = ({ children, title, errorMessage, successMessage }) => (
  <div className="py-1">
    <h3 className="font-medium text-base mb-4">
      {title || 'WhatsApp Authentication'}
    </h3>

    {errorMessage && (
      <p className="text-sm text-red-500 p-2 bg-red-50 rounded-md mb-2">Error: {errorMessage}</p>
    )}
    {successMessage && (
      <p className="text-sm text-green-600 p-2 bg-green-50 rounded-md mb-2">{successMessage}</p>
    )}
    {children}
  </div>
);

// Action buttons component
const ActionButtons: React.FC<{
  primaryText: string;
  cancelText?: string;
  isLoading: boolean;
  isDisabled: boolean;
  onCancel: () => void;
  loadingText?: string;
}> = ({ primaryText, cancelText, isLoading, isDisabled, onCancel, loadingText }) => (
  <div className="flex gap-2">
    <Button 
      type="submit" 
      disabled={isLoading || isDisabled} 
      className="flex-1"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText || 'Processing...'}
        </>
      ) : primaryText}
    </Button>
    <Button 
      type="button" 
      variant="outline" 
      onClick={onCancel} 
      disabled={isLoading} 
      className="flex-1"
    >
      {cancelText || "Cancel"}
    </Button>
  </div>
);

export function MFAPhoneWhatsApp({ 
  verifiedPhone, 
  sessionJwt,
  authMethodId,
  onSuccess,
  onPhoneUpdated
}: MFAPhoneWhatsAppProps) {
  const t = useTranslations("MFASettings");

  const [uiState, setUiState] = useState<PhoneUiState>('initial');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // State for MfaOtpDialog
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpDialogTitle, setOtpDialogTitle] = useState(t('verify_phone_number'));
  const [otpDialogDescription, setOtpDialogDescription] = useState('');
  const [currentMethod, setCurrentMethod] = useState<{
    action: 'add' | 'remove';
    phoneId?: string;
    methodId?: string;
  } | null>(null);

  // Clear error and success messages
  const resetMessages = () => {
    setError(null);
    setSuccessMessage(null);
  };

  // Handle Add Phone Number button click
  const handleAddClick = () => {
    resetMessages();
    setUiState('setup');
  };
  
  // Handle cancellation
  const handleCancel = () => {
    resetMessages();
    setPhoneNumber('');
    setUiState('initial');
  };

  // Handle OTP Dialog close
  const handleOtpDialogClose = () => {
    setShowOtpDialog(false);
    setCurrentMethod(null);
  };

  // Prepare the OTP dialog state for phone removal verification
  // This ensures all necessary state is set correctly before showing the OTP dialog
  const prepareOtpDialogForRemove = () => {
    if (verifiedPhone && verifiedPhone.phone_number) {
      setCurrentMethod({
        action: 'remove',
        phoneId: verifiedPhone.phone_id,
      });
      setOtpDialogTitle(t('verify_phone_removal'));
      setOtpDialogDescription(t("remove_phone_description", { number: verifiedPhone.phone_number }));
      setShowOtpDialog(true);
    } else {
      setError(t('remove_phone_error'));
    }
  };

  // Handle phone number removal
  const handleRemovePhone = async () => {
    resetMessages();
    if (!window.confirm(t("remove_phone_confirmation"))) return;

    if (!sessionJwt) {
      setError(t('user_not_found'));
      return;
    }

    if (!verifiedPhone) {
      setError(t('phone_not_found'));
      return;
    }

    setIsLoading(true);

    try {
      log('MFAPhoneWhatsApp: Initiating phone number removal', verifiedPhone.phone_id);
      const response = await fetch('/api/mfa/whatsapp/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({
          phone_id: verifiedPhone.phone_id,
          policyContext: {
            contextType: 'personalWalletMFAUpdate',
            mfaType: 'whatsapp',
            removePhoneNumber: verifiedPhone.phone_number,
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || t('remove_phone_failed'));
      }

      if (data.requiresMfa) {
        log('MFAPhoneWhatsApp: MFA required for phone removal');
        prepareOtpDialogForRemove();
      } else {
        // If no MFA required, phone was removed successfully
        setSuccessMessage(t('remove_phone_success'));
        onSuccess();
      }
      
    } catch (err: any) {
      setError(err.message);
      log('MFAPhoneWhatsApp: Error removing phone number', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Send OTP handler for MfaOtpDialog
  const handleSendOtp = async () => {
    if (!sessionJwt) {
      throw new Error(t('user_not_found'));
    }

    if (currentMethod?.action === 'add') {
      if (!isValidPhoneNumber(phoneNumber)) {
        throw new Error(t('invalid_phone_format'));
      }

      log('MFAPhoneWhatsApp: Sending OTP to', phoneNumber);
      const response = await fetch('/api/mfa/whatsapp/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({ phone_number: phoneNumber }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        log('MFAPhoneWhatsApp: Error response from API', errorData);
        throw new Error(errorData.error || t('send_add_otp_failed', { status: response.status }));
      }

      const data = await response.json();
      setCurrentMethod({
        ...currentMethod,
        methodId: data.method_id
      });
      log('MFAPhoneWhatsApp: OTP sent, method_id:', data.method_id);
    } else if (currentMethod?.action === 'remove' && verifiedPhone) {
      log('MFAPhoneWhatsApp: Sending OTP for phone removal verification');
      const response = await fetch('/api/mfa/whatsapp/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({ 
          phone_number: verifiedPhone.phone_number 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t('send_remove_otp_failed', { status: response.status }));
      }

      const data = await response.json();
      setCurrentMethod({
        ...currentMethod,
        methodId: data.method_id
      });
    } else {
      throw new Error(t('invalid_phone_information'));
    }
  };

  // Verify OTP handler for MfaOtpDialog
  const handleVerifyOtp = async (otp: string) => {
    if (!sessionJwt || !currentMethod?.methodId) {
      throw new Error(t('missing_details'));
    }

    if (otp.length !== 6) {
      throw new Error(t('invalid_verification_code'));
    }

    if (currentMethod.action === 'add') {
      log('MFAPhoneWhatsApp: Verifying OTP for adding phone', { method_id: currentMethod.methodId, code: otp });
      const response = await fetch('/api/mfa/whatsapp/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({ method_id: currentMethod.methodId, code: otp }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t("verify_add_otp_failed", { status: response.status }));
      }

      const data = await response.json();
      log('MFAPhoneWhatsApp: Phone added successfully', data);

      await handleOtpVerified(data)
      return data;
    } else if (currentMethod.action === 'remove') {
      log('MFAPhoneWhatsApp: Verifying OTP for removing phone', { method_id: currentMethod.methodId, code: otp });
      const response = await fetch('/api/mfa/whatsapp/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({
          phone_id: currentMethod.phoneId,
          otp: otp,
          policyContext: {
            contextType: 'personalWalletMFAUpdate',
            mfaType: 'whatsapp',
            removePhoneNumber: verifiedPhone?.phone_number,
          },
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t("verify_remove_otp_failed", { status: response.status }));
      }
      
      const data = await response.json();
      log('MFAPhoneWhatsApp: Phone removed successfully', data);
      await handleOtpVerified()
      return data;
    } else {
      throw new Error(t('invalid_operation'));
    }
  };

  // Handle OTP verification completion
  const handleOtpVerified = async (verificationData?: any) => {
    // Close the dialog
    setShowOtpDialog(false);
    
    // Set success message and reset state
    if (currentMethod?.action === 'add') {
      // WhatsApp setup is complete! Now save to our security layers (similar to TOTP)
      if (authMethodId && sessionJwt && verificationData) {
        try {
          // Extract the verified phone number from Stytch response
          const verifiedPhoneFromStytch = verificationData.user?.phone_numbers?.find((p: any) => p.verified);
          const phoneToStore = verifiedPhoneFromStytch?.phone_number || phoneNumber; // Fallback to user input
          const phoneIdToStore = verifiedPhoneFromStytch?.phone_id;
          const methodIdToStore = currentMethod?.methodId; // This is the stytchMethodId we need
          
          // Ensure we have all required fields
          if (!phoneIdToStore || !methodIdToStore) {
            throw new Error('Missing required phone verification data from Stytch');
          }
          
          await fetch('/api/security/layers/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionJwt}`,
            },
            body: JSON.stringify({
              authMethodId,
              layerType: 'WHATSAPP_OTP',
              config: {
                stytchMethodId: methodIdToStore,  // Store the method_id from OTP flow
                phoneNumber: phoneToStore,        // Store the verified phone number from Stytch
                phoneId: phoneIdToStore           // Store phone_id from Stytch
              }
            }),
          });
          log('MFAPhoneWhatsApp: Successfully added WhatsApp layer to security layers', { 
            phoneNumber: phoneToStore, 
            phoneId: phoneIdToStore,
            stytchMethodId: methodIdToStore 
          });
        } catch (error) {
          log('MFAPhoneWhatsApp: Error adding WhatsApp layer to security layers:', error);
          // Don't fail the whole flow if security layers update fails
        }
      }
      
      setSuccessMessage(t('phone_number_added'));
      setPhoneNumber('');
      setUiState('initial');
      
      // Update parent component's phone state if callback exists
      if (onPhoneUpdated) {
        onPhoneUpdated().then(() => {
          toast.success(t('failed_to_modify'));
        }).catch(err => {
          log('Error updating phone state:', err);
        });
      }
    } else if (currentMethod?.action === 'remove') {
      // WhatsApp removal is complete! Now update security layers
      if (authMethodId && sessionJwt) {
        try {
          await fetch('/api/security/layers/remove', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sessionJwt}`,
            },
            body: JSON.stringify({
              authMethodId,
              layerType: 'WHATSAPP_OTP'
            }),
          });
          log('MFAPhoneWhatsApp: Successfully updated security layers after WhatsApp removal');
        } catch (error) {
          log('MFAPhoneWhatsApp: Error updating security layers:', error);
          // Don't fail the whole flow if security layers update fails
        }
      }
      
      setSuccessMessage(t('phone_number_removed'));
    }
    
    // Reset current method
    setCurrentMethod(null);
    
    // Notify parent to refresh MFA status
    onSuccess();
  };

  // Function to handle adding a phone number
  const handleAddPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sessionJwt) {
      setError(t('user_not_found'));
      return;
    }
    
    if (!isValidPhoneNumber(phoneNumber)) {
      setError(t('invalid_phone_format'));
      return;
    }
    
    setCurrentMethod({
      action: 'add'
    });
    setOtpDialogTitle(t('verify_phone_number'));
    setOtpDialogDescription(t('will_send_otp', { number: phoneNumber }));
    setShowOtpDialog(true);
  };

  // Validate phone number format
  const isValidPhoneNumber = (num: string) => num.startsWith('+') && num.length >= 10;

  // Initial state - show current phone (if exists) or add button
  if (uiState === 'initial') {
    return (
      <>
        <FormContainer 
          title={t('whatsapp_auth')}
          errorMessage={error}
          successMessage={successMessage}
        >
          {verifiedPhone ? (
            <div className="bg-muted p-2 rounded-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    {verifiedPhone.phone_number}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('verified_phone')}
                  </p>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={handleRemovePhone} 
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : t('remove')}
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleAddClick} 
              className="w-full"
            >
              {t('add_phone')}
            </Button>
          )}
        </FormContainer>

        {/* OTP Dialog */}
        <MFAOtpDialog 
          isOpen={showOtpDialog}
          onClose={handleOtpDialogClose}
          onOtpVerify={handleVerifyOtp}
          sendOtp={handleSendOtp}
          identifier={currentMethod?.action === 'add' ? phoneNumber : verifiedPhone?.phone_number}
          title={otpDialogTitle}
          description={otpDialogDescription}
        />
      </>
    );
  }

  // Phone setup state - enter phone number
  if (uiState === 'setup') {
    return (
      <>
        <FormContainer
          title={t('whatsapp_auth')}
          errorMessage={error}
          successMessage={successMessage}
        >
          <form onSubmit={handleAddPhone} className="space-y-4">
            <div>
              <Label htmlFor="phone-number-input" className="block mb-2">
                {t('phone_number')}
              </Label>
              <Input 
                id="phone-number-input" 
                type="tel" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                placeholder="+12345678900"
                disabled={isLoading}
              />
            </div>
            <ActionButtons
              primaryText={t('continue')}
              cancelText={t('cancel')}
              loadingText={t('sending')}
              isLoading={isLoading}
              isDisabled={!isValidPhoneNumber(phoneNumber)}
              onCancel={handleCancel}
            />
          </form>
        </FormContainer>

        {/* OTP Dialog */}
        <MFAOtpDialog 
          isOpen={showOtpDialog}
          onClose={handleOtpDialogClose}
          onOtpVerify={handleVerifyOtp}
          sendOtp={handleSendOtp}
          identifier={phoneNumber}
          title={otpDialogTitle}
          description={otpDialogDescription}
        />
      </>
    );
  }

  return null;
} 