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
  const t = useTranslations("MFAOtpDialog")

  const [otp, setOtp] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [initialSendAttempted, setInitialSendAttempted] = useState(false);

  const effectiveDescription = description || t("notice", { identifier: identifier || 'your device'});

  const handleSendOtp = useCallback(async (isRetry = false) => {
    setIsSendingOtp(true);
    try {
      await sendOtp();
      setOtpSent(true);
      if(isRetry) {
        toast.success(t("success"));
        log('OTP resent successfully');
      }
    } catch (err: any) {
      log('Error sending OTP:', err);
      toast.error(err.message || t("failed"));
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
      toast.error(t("empty"));
      return;
    }
    setIsVerifying(true);
    try {
      await onOtpVerify(otp);
    } catch (err: any) {
      log('Error verifying OTP:', err);
      toast.error(err.message || t("invalid"));
    } finally {
      setIsVerifying(false);
    }
  };

  const isLoading = isSendingOtp || isVerifying;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title || t("title")}</DialogTitle>
          {otpSent && <DialogDescription>{effectiveDescription}</DialogDescription>}
          {!otpSent && !isLoading && (
            <DialogDescription>
              {t("ready_to_send")}
            </DialogDescription>
          )}
          {!otpSent && isLoading && (
            <DialogDescription>
              {t("sending_otp")}
            </DialogDescription>
          )}
        </DialogHeader>

        {otpSent && (
          <div className="space-y-4 py-2">
            <Input
              id="otp-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={t("enter_otp")}
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
              {isSendingOtp && !isVerifying ? (actionInProgressText || t("processing")) : (retryText || t("resend_code"))}
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
              {isSendingOtp ? (actionInProgressText || t("processing")) : t('send_otp')}
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
                {isVerifying ? (actionInProgressText || t("processing")) : (actionText || t("verify_code"))}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 