import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from 'lucide-react';
import { log } from '@/lib/utils';
import { MfaOtpDialog } from '@/components/MfaOtpDialog';
import { toast } from 'react-toastify';

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
  
  // Callback when phone number is successfully added/verified/removed
  onSuccess: () => void;

  // Callback to update parent component's phone state
  onPhoneUpdated?: () => Promise<void>;
}

// Common container for all UI states
const FormContainer: React.FC<{
  children: React.ReactNode;
  errorMessage: string | null;
  successMessage?: string | null;
}> = ({ children, errorMessage, successMessage }) => (
  <div className="py-1">
    <h3 className="font-medium text-base mb-4">WhatsApp Authentication</h3>

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
  isLoading: boolean;
  isDisabled: boolean;
  onCancel: () => void;
  loadingText?: string;
}> = ({ primaryText, isLoading, isDisabled, onCancel, loadingText }) => (
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
      Cancel
    </Button>
  </div>
);

export function MFAPhoneWhatsApp({ 
  verifiedPhone, 
  sessionJwt,
  onSuccess,
  onPhoneUpdated
}: MFAPhoneWhatsAppProps) {
  const [uiState, setUiState] = useState<PhoneUiState>('initial');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // State for MfaOtpDialog
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpDialogTitle, setOtpDialogTitle] = useState('Verify Phone Number');
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
      setOtpDialogTitle('Verify Phone Removal');
      setOtpDialogDescription(`Please verify your identity to remove ${verifiedPhone.phone_number}`);
      setShowOtpDialog(true);
    } else {
      setError('No phone number to remove.');
    }
  };

  // Handle phone number removal
  const handleRemovePhone = async () => {
    resetMessages();
    if (!window.confirm('Are you sure you want to remove this phone number?')) return;
    
    if (!sessionJwt) {
      setError('User session not found.');
      return;
    }

    if (!verifiedPhone) {
      setError('No phone number to remove.');
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
        throw new Error(data.error || 'Failed to initiate phone number removal');
      }
      
      if (data.requiresMfa) {
        log('MFAPhoneWhatsApp: MFA required for phone removal');
        prepareOtpDialogForRemove();
      } else {
        // If no MFA required, phone was removed successfully
        setSuccessMessage('Phone number removed successfully.');
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
      throw new Error('User session not found.');
    }

    if (currentMethod?.action === 'add') {
      if (!isValidPhoneNumber(phoneNumber)) {
        throw new Error('Invalid phone number format. Please use E.164 format, e.g., +12345678900');
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
        throw new Error(errorData.error || `Failed to send OTP: ${response.status}`);
      }
      
      const data = await response.json();
      setCurrentMethod({
        ...currentMethod,
        methodId: data.method_id
      });
      log('MFAPhoneWhatsApp: OTP sent, method_id:', data.method_id);
    } else if (currentMethod?.action === 'remove' && verifiedPhone) {
      log('MFAPhoneWhatsApp: Sending OTP for phone removal verification');
      // 使用verified_phone的phone_number
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
        throw new Error(errorData.error || `Failed to send verification OTP: ${response.status}`);
      }
      
      const data = await response.json();
      setCurrentMethod({
        ...currentMethod,
        methodId: data.method_id
      });
    } else {
      throw new Error('Invalid operation or missing phone information');
    }
  };

  // Verify OTP handler for MfaOtpDialog
  const handleVerifyOtp = async (otp: string) => {
    if (!sessionJwt || !currentMethod?.methodId) {
      throw new Error('Session or OTP details missing.');
    }

    if (otp.length !== 6) {
      throw new Error('Verification code must be 6 digits.');
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
        throw new Error(errorData.error || `Failed to verify OTP: ${response.status}`);
      }
      
      const data = await response.json();
      log('MFAPhoneWhatsApp: Phone added successfully', data);
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
        throw new Error(errorData.error || `Failed to remove phone: ${response.status}`);
      }
      
      const data = await response.json();
      log('MFAPhoneWhatsApp: Phone removed successfully', data);
      return data;
    } else {
      throw new Error('Invalid operation');
    }
  };

  // Handle OTP verification completion
  const handleOtpVerified = (verificationDetail?: any) => {
    // Close the dialog
    setShowOtpDialog(false);
    
    // Set success message and reset state
    if (currentMethod?.action === 'add') {
      setSuccessMessage('Phone number added successfully.');
      setPhoneNumber('');
      setUiState('initial');
      
      // Update parent component's phone state if callback exists
      if (onPhoneUpdated) {
        onPhoneUpdated().then(() => {
          toast.success("Phone number verified. You can now modify your settings.");
        }).catch(err => {
          log('Error updating phone state:', err);
        });
      }
    } else if (currentMethod?.action === 'remove') {
      setSuccessMessage('Phone number removed successfully.');
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
      setError('User session not found.');
      return;
    }
    
    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Invalid phone number format. Please use E.164 format, e.g., +12345678900');
      return;
    }
    
    setCurrentMethod({
      action: 'add'
    });
    setOtpDialogTitle('Verify Phone Number');
    setOtpDialogDescription(`An OTP will be sent to ${phoneNumber} via WhatsApp.`);
    setShowOtpDialog(true);
  };

  // Validate phone number format
  const isValidPhoneNumber = (num: string) => num.startsWith('+') && num.length >= 10;

  // Initial state - show current phone (if exists) or add button
  if (uiState === 'initial') {
    return (
      <>
        <FormContainer errorMessage={error} successMessage={successMessage}>
          {verifiedPhone ? (
            <div className="bg-muted p-2 rounded-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{verifiedPhone.phone_number}</p>
                  <p className="text-xs text-muted-foreground">Verified via WhatsApp</p>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={handleRemovePhone} 
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : 'Remove'}
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
              Add Phone Number
            </Button>
          )}
        </FormContainer>

        {/* OTP Dialog */}
        <MfaOtpDialog 
          isOpen={showOtpDialog}
          onClose={handleOtpDialogClose}
          onOtpVerified={handleOtpVerified}
          sendOtp={handleSendOtp}
          verifyOtp={handleVerifyOtp}
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
        <FormContainer errorMessage={error} successMessage={successMessage}>
          <form onSubmit={handleAddPhone} className="space-y-4">
            <div>
              <Label htmlFor="phone-number-input" className="block mb-2">Phone Number (e.g., +12345678900)</Label>
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
              primaryText="Send Code"
              loadingText="Sending..."
              isLoading={isLoading}
              isDisabled={!isValidPhoneNumber(phoneNumber)}
              onCancel={handleCancel}
            />
          </form>
        </FormContainer>

        {/* OTP Dialog */}
        <MfaOtpDialog 
          isOpen={showOtpDialog}
          onClose={handleOtpDialogClose}
          onOtpVerified={handleOtpVerified}
          sendOtp={handleSendOtp}
          verifyOtp={handleVerifyOtp}
          identifier={phoneNumber}
          title={otpDialogTitle}
          description={otpDialogDescription}
        />
      </>
    );
  }

  return null;
} 