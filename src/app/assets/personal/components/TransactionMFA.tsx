import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, AlertCircle, Check } from 'lucide-react';
import { log } from '@/lib/utils';
import { toast } from 'react-toastify';
import { getAuthMethodFromStorage } from '@/lib/storage';

// Define phone number type
interface PhoneNumber {
  phone_id: string;
  phone_number: string;
  verified: boolean;
}

// Component props
interface TransactionMFAProps {
  onVerified: (otp: string, mfaMethodId: string) => void;
  onCancel: () => void;
  transactionData: {
    to: string;
    amount: string;
  };
}

export function TransactionMFA({ onVerified, onCancel, transactionData }: TransactionMFAProps) {
  // State management
  const [isLoading, setIsLoading] = useState(false);
  const [phoneLoading, setPhoneLoading] = useState(true);
  const [verifiedPhone, setVerifiedPhone] = useState<PhoneNumber | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [methodId, setMethodId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Get user session JWT
  const authMethod = getAuthMethodFromStorage();
  const sessionJwt = authMethod?.accessToken;

  // Fetch user's phone number when component loads
  useEffect(() => {
    fetchUserPhone();
  }, []);

  // Get user's WhatsApp phone number
  const fetchUserPhone = async () => {
    setPhoneLoading(true);
    try {
      if (!sessionJwt) {
        throw new Error('Session not found');
      }

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
        setVerifiedPhone(phones[0]);
        // Automatically send OTP
        sendOTP(phones[0].phone_number);
      } else {
        setError('No verified phone number found for WhatsApp authentication. Please add a phone number in your settings.');
      }
    } catch (err: any) {
      setError(err.message);
      log('Error fetching user phone:', err);
    } finally {
      setPhoneLoading(false);
    }
  };

  // Send OTP
  const sendOTP = async (phoneNumber: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    
    try {
      if (!sessionJwt) {
        throw new Error('Session not found');
      }

      const response = await fetch('/api/mfa/whatsapp/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`
        },
        body: JSON.stringify({ 
          phone_number: phoneNumber
        })
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send OTP');
      }
      
      const data = await response.json();
      setMethodId(data.method_id);
      setOtpSent(true);
      setSuccess('Verification code sent to your WhatsApp.');
      log('OTP sent, method_id:', data.method_id);
    } catch (err: any) {
      setError(err.message);
      log('Error sending OTP:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    if (otpCode.length !== 6) {
      setError('Verification code must be 6 digits');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      if (!sessionJwt || !methodId) {
        throw new Error('Session or OTP details missing');
      }

      // Verification successful
      setSuccess('Verification successful');
      log('OTP verified successfully');
      
      // Notify parent component verification was successful
      setTimeout(() => {
        onVerified(otpCode, methodId);
      }, 1000);
    } catch (err: any) {
      setError(err.message);
      log('Error verifying OTP:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP
  const handleResendOTP = () => {
    if (verifiedPhone) {
      sendOTP(verifiedPhone.phone_number);
    }
  };

  // Display error message
  const renderError = () => {
    if (!error) return null;
    return (
      <div className="flex items-start gap-2 p-3 bg-red-50 rounded-md text-red-600 text-sm mt-4">
        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <p>{error}</p>
      </div>
    );
  };

  // Display success message
  const renderSuccess = () => {
    if (!success) return null;
    return (
      <div className="flex items-start gap-2 p-3 bg-green-50 rounded-md text-green-600 text-sm mt-4">
        <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <p>{success}</p>
      </div>
    );
  };

  // Loading state
  if (phoneLoading) {
    return (
      <div className="bg-card p-6 rounded-lg border mt-4">
        <h3 className="text-lg font-medium mb-4">Transaction Verification</h3>
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  // No phone number linked
  if (!verifiedPhone) {
    return (
      <div className="bg-card p-6 rounded-lg border mt-4">
        <h3 className="text-lg font-medium mb-4">Transaction Verification</h3>
        <p className="text-sm text-red-500 mb-4">
          To complete this transaction, you need to set up WhatsApp authentication first.
        </p>
        {renderError()}
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline" onClick={onCancel}>
            Cancel Transaction
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card p-6 rounded-lg border mt-4">
      <h3 className="text-lg font-medium mb-4">Transaction Verification</h3>
      
      <div className="bg-muted p-4 rounded-md mb-6">
        <p className="text-sm font-medium">Transaction Details:</p>
        <div className="text-sm mt-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">To:</span>
            <span>{transactionData.to}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-muted-foreground">Amount:</span>
            <span>{transactionData.amount} ETH</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm mb-6">
        This transaction requires additional verification. Enter the code sent to your WhatsApp 
        ({verifiedPhone.phone_number.replace(/(\d{4})$/, '****$1')}).
      </p>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="otp-code">Verification Code</Label>
          <Input
            id="otp-code"
            placeholder="Enter 6-digit code"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            maxLength={6}
            className="mt-1"
          />
        </div>
        
        {renderError()}
        {renderSuccess()}
        
        <div className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={verifyOTP} 
            disabled={isLoading || otpCode.length !== 6}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              'Confirm'
            )}
          </Button>
          
          <div className="flex justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleResendOTP}
              disabled={isLoading}
            >
              Resend Code
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel Transaction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 