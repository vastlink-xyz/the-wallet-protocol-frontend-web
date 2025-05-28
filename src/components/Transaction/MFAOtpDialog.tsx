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
import { Loader2 } from 'lucide-react';
import { log } from '@/lib/utils'; // Assuming you have a log utility
import { toast } from 'react-toastify';

interface MFAOtpDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOtpVerify: (otp: string) => Promise<void>;
  sendOtp: () => Promise<void>; 
  identifier?: string | null; // Allow null for identifier initially
  title?: string;
  description?: string;
  actionInProgressText?: string; 
  actionText?: string; 
  retryText?: string; 
}

export function MFAOtpDialog({
  isOpen,
  onClose,
  onOtpVerify,
  sendOtp,
  identifier,
  title = 'Two-Factor Authentication',
  description,
  actionInProgressText = 'Processing...',
  actionText = 'Verify Code',
  retryText = 'Resend Code',
}: MFAOtpDialogProps) {
  const [otp, setOtp] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [initialSendAttempted, setInitialSendAttempted] = useState(false);

  const effectiveDescription = description || `An OTP has been sent to ${identifier || 'your device'}. Please enter it below.`;

  const handleSendOtp = useCallback(async (isRetry = false) => {
    setIsSendingOtp(true);
    try {
      await sendOtp();
      setOtpSent(true);
      if(isRetry) {
        toast.success('OTP resent successfully');
        log('OTP resent successfully');
      }
    } catch (err: any) {
      log('Error sending OTP:', err);
      toast.error(err.message || 'Failed to send OTP. Please try again.');
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
      setOtpSent(false);
      setIsSendingOtp(false);
      setIsVerifying(false);
      setInitialSendAttempted(false);
    }
  }, [isOpen, otpSent, isSendingOtp, handleSendOtp, initialSendAttempted]);

  const handleVerify = async () => {
    if (!otp.trim()) {
      toast.error('Please enter the OTP.');
      return;
    }
    setIsVerifying(true);
    try {
      await onOtpVerify(otp);
    } catch (err: any) {
      log('Error verifying OTP:', err);
      toast.error(err.message || 'Invalid or expired OTP. Please try again.');
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
          {!otpSent && !isLoading && (
            <DialogDescription>
              Ready to send OTP.
            </DialogDescription>
          )}
           {!otpSent && isLoading && (
            <DialogDescription>
              Sending OTP...
            </DialogDescription>
          )}
        </DialogHeader>

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
          {!otpSent && !isLoading && (
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