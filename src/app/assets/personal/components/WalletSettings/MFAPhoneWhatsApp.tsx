import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from 'lucide-react';
import { log } from '@/lib/utils';

// Define StytchPhoneNumber type based on expected API response
interface StytchPhoneNumber {
  phone_id: string;
  phone_number: string;
  verified: boolean;
}

// UI state for the MFA phone settings
type PhoneUiState = 'initial' | 'setup' | 'verify';

interface MFAPhoneWhatsAppProps {
  // Current phone number information (if exists)
  verifiedPhone: StytchPhoneNumber | null;
  
  // Session JWT for API calls
  sessionJwt: string | null;
  
  // Callback when phone number is successfully added/verified/removed
  onSuccess: () => void;
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
  onSuccess
}: MFAPhoneWhatsAppProps) {
  const [uiState, setUiState] = useState<PhoneUiState>('initial');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [currentOtpMethodId, setCurrentOtpMethodId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
    setCode('');
    setCurrentOtpMethodId(null);
    setUiState('initial');
  };

  // Handle phone number removal
  const handleRemovePhone = async (phoneId: string) => {
    resetMessages();
    if (!window.confirm('Are you sure you want to remove this phone number?')) return;
    setIsLoading(true);
    
    if (!sessionJwt) {
      setError('User session not found.');
      setIsLoading(false);
      return;
    }
    
    try {
      log('MFAPhoneWhatsApp: Removing phone number', phoneId);
      const response = await fetch('/api/mfa/whatsapp/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({ phone_id: phoneId }),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to remove phone number');
      }
      
      setSuccessMessage('Phone number removed successfully.');
      log('MFAPhoneWhatsApp: Phone number removed');
      
      // Notify parent component to refresh the MFA status
      onSuccess();
    } catch (err: any) {
      setError(err.message);
      log('MFAPhoneWhatsApp: Error removing phone number', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle sending OTP code
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();
    if (!sessionJwt) {
      setError('User session not found.');
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Invalid phone number format. Please use E.164 format, e.g., +12345678900');
      return;
    }

    setIsLoading(true);
    try {
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
      setCurrentOtpMethodId(data.method_id);
      setUiState('verify');
      setSuccessMessage('Verification code sent to your phone number.');
      log('MFAPhoneWhatsApp: OTP sent, method_id:', data.method_id);
    } catch (err: any) {
      setError(err.message);
      log('MFAPhoneWhatsApp: Error sending OTP', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle verifying OTP code
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();
    if (!sessionJwt || !currentOtpMethodId) {
      setError('Session or OTP details missing.');
      return;
    }
    if (code.length !== 6) {
      setError('Verification code must be 6 digits.');
      return;
    }

    setIsLoading(true);
    try {
      log('MFAPhoneWhatsApp: Verifying OTP', { method_id: currentOtpMethodId, code });
      const response = await fetch('/api/mfa/whatsapp/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({ method_id: currentOtpMethodId, code }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        log('MFAPhoneWhatsApp: Error response from API', errorData);
        throw new Error(errorData.error || `Failed to verify OTP: ${response.status}`);
      }
      
      const data = await response.json();
      log('MFAPhoneWhatsApp: OTP verified successfully, user data:', data.user);
      
      // Reset form
      setPhoneNumber('');
      setCode('');
      setCurrentOtpMethodId(null);
      setUiState('initial');
      
      // Notify parent component
      onSuccess();
    } catch (err: any) {
      setError(err.message);
      log('MFAPhoneWhatsApp: Error verifying OTP', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Validate phone number format
  const isValidPhoneNumber = (num: string) => num.startsWith('+') && num.length >= 10;

  // Initial state - show current phone (if exists) or add button
  if (uiState === 'initial') {
    return (
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
                onClick={() => handleRemovePhone(verifiedPhone.phone_id)} 
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
    );
  }

  // Phone setup state - enter phone number
  if (uiState === 'setup') {
    return (
      <FormContainer errorMessage={error} successMessage={successMessage}>
        <form onSubmit={handleSendOtp} className="space-y-4">
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
    );
  }

  // Verify code state
  if (uiState === 'verify') {
    return (
      <FormContainer errorMessage={error} successMessage={successMessage}>
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <Label htmlFor="otp-code-input" className="block mb-2">Verification Code</Label>
            <Input 
              id="otp-code-input" 
              type="text" 
              value={code} 
              onChange={(e) => setCode(e.target.value)} 
              placeholder="123456"
              maxLength={6}
              disabled={isLoading}
            />
          </div>
          <p className="text-xs text-muted-foreground">A code was sent via WhatsApp to {phoneNumber}</p>
          <ActionButtons
            primaryText="Verify Code"
            loadingText="Verifying..."
            isLoading={isLoading}
            isDisabled={code.length !== 6}
            onCancel={handleCancel}
          />
        </form>
      </FormContainer>
    );
  }

  return null;
} 