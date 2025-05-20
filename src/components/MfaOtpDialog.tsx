import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle } from 'lucide-react';
import { log } from '@/lib/utils'; // Assuming you have a log utility

interface MfaOtpDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOtpVerified: (verificationDetail?: any) => void;
  sendOtp: () => Promise<void>; 
  verifyOtp: (otp: string) => Promise<any>; 
  identifier?: string | null; // Allow null for identifier initially
  title?: string;
  description?: string;
  actionInProgressText?: string; 
  actionText?: string; 
  retryText?: string; 
}

export function MfaOtpDialog({
  isOpen,
  onClose,
  onOtpVerified,
  sendOtp,
  verifyOtp,
  identifier,
  title = 'Two-Factor Authentication',
  description,
  actionInProgressText = 'Processing...',
  actionText = 'Verify Code',
  retryText = 'Resend Code',
}: MfaOtpDialogProps) {
  const [otp, setOtp] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [initialSendAttempted, setInitialSendAttempted] = useState(false);

  const effectiveDescription = description || `An OTP has been sent to ${identifier || 'your device'}. Please enter it below.`;

  const handleSendOtp = useCallback(async (isRetry = false) => {
    setIsSendingOtp(true);
    setError(null);
    try {
      await sendOtp();
      setOtpSent(true);
      if(isRetry) {
        log('OTP resent successfully');
      }
    } catch (err: any) {
      log('Error sending OTP:', err);
      setError(err.message || 'Failed to send OTP. Please try again.');
      setOtpSent(false); 
    } finally {
      setIsSendingOtp(false);
      setInitialSendAttempted(true);
    }
  }, [sendOtp]);

  useEffect(() => {
    if (isOpen && !otpSent && !isSendingOtp && !initialSendAttempted) {
      handleSendOtp();
    }
    if (!isOpen) {
      setOtp('');
      setError(null);
      setOtpSent(false);
      setIsSendingOtp(false);
      setIsVerifying(false);
      setInitialSendAttempted(false);
    }
  }, [isOpen, otpSent, isSendingOtp, handleSendOtp, initialSendAttempted]);

  const handleVerify = async () => {
    if (!otp.trim()) {
      setError('Please enter the OTP.');
      return;
    }
    setIsVerifying(true);
    setError(null);
    try {
      const verificationResult = await verifyOtp(otp);
      onOtpVerified(verificationResult);
    } catch (err: any) {
      log('Error verifying OTP:', err);
      setError(err.message || 'Invalid or expired OTP. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };
  
  const isLoading = isSendingOtp || isVerifying;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {otpSent && <DialogDescription>{effectiveDescription}</DialogDescription>}
          {!otpSent && !isLoading && error && (
            <DialogDescription className="text-red-500">
              Error sending OTP. Ready to retry.
            </DialogDescription>
          )}
           {!otpSent && isLoading && (
            <DialogDescription>
              Sending OTP...
            </DialogDescription>
          )}
        </DialogHeader>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 text-sm rounded-md my-2">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {otpSent && (
          <div className="space-y-4 py-2">
            <Input
              id="otp-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              maxLength={6}
              disabled={isLoading}
            />
          </div>
        )}

        <DialogFooter className="gap-2 sm:justify-between">
          {otpSent && (
             <Button
              variant="outline"
              onClick={() => handleSendOtp(true)}
              disabled={isLoading}
            >
              {isSendingOtp && !isVerifying ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {isSendingOtp && !isVerifying ? actionInProgressText : retryText}
            </Button>
          )}
          {!otpSent && !isLoading && error && (
             <Button
              onClick={() => handleSendOtp(false)}
              disabled={isLoading}
            >
              {isSendingOtp ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {isSendingOtp ? actionInProgressText : 'Send OTP'}
            </Button>
          )}
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onClose} disabled={isLoading && isVerifying}>
              Cancel
            </Button>
            {otpSent && (
              <Button onClick={handleVerify} disabled={isLoading || !otp.trim()}>
                {isVerifying ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {isVerifying ? actionInProgressText : actionText}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 