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
import { useTranslations } from 'next-intl';

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
  title,
  description,
  actionInProgressText,
  actionText,
  retryText,
}: MFAOtpDialogProps) {
  const transCommon = useTranslations("Common")
  const transDialog = useTranslations("MFAOtpDialog")

  const [otp, setOtp] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [initialSendAttempted, setInitialSendAttempted] = useState(false);

  const effectiveDescription = description || transDialog("notice", { identifier: identifier || 'your device'});

  const handleSendOtp = useCallback(async (isRetry = false) => {
    setIsSendingOtp(true);
    try {
      await sendOtp();
      setOtpSent(true);
      if(isRetry) {
        toast.success(transDialog("success"));
        log('OTP resent successfully');
      }
    } catch (err: any) {
      log('Error sending OTP:', err);
      toast.error(err.message || transDialog("failed"));
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
      toast.error(transDialog("empty"));
      return;
    }
    setIsVerifying(true);
    try {
      await onOtpVerify(otp);
    } catch (err: any) {
      log('Error verifying OTP:', err);
      toast.error(err.message || transDialog("invalid"));
    } finally {
      setIsVerifying(false);
    }
  };

  const isLoading = isSendingOtp || isVerifying;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title || transDialog("title")}</DialogTitle>
          {otpSent && <DialogDescription>{effectiveDescription}</DialogDescription>}
          {!otpSent && !isLoading && (
            <DialogDescription>
              {transDialog("ready_to_send")}
            </DialogDescription>
          )}
          {!otpSent && isLoading && (
            <DialogDescription>
              {transDialog("sending_otp")}
            </DialogDescription>
          )}
        </DialogHeader>

        {otpSent && (
          <div className="space-y-4 py-2">
            <Input
              id="otp-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={transDialog("enter_otp")}
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
              {isSendingOtp && !isVerifying ? (actionInProgressText || transDialog("processing")) : (retryText || transDialog("resend_code"))}
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
              {isSendingOtp ? (actionInProgressText || transDialog("processing")) : transDialog('send_otp')}
            </Button>
          )}
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onClose} disabled={isLoading && isVerifying}>
              {transCommon("cancel")}
            </Button>
            {otpSent && (
              <Button onClick={handleVerify} disabled={isLoading || !otp.trim()}>
                {isVerifying ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                {isVerifying ? (actionInProgressText || transDialog("processing")) : (actionText || transDialog("verify_code"))}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 