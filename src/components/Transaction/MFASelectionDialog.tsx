import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { SecurityLayerService } from "@/services/securityLayerService";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

export interface MFAOption {
  type: 'WHATSAPP_OTP' | 'TOTP' | 'EMAIL_OTP';
  label: string;
  config?: any;
}

interface MFASelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onMFAVerify: (mfaType: string, mfaCode: string, mfaMethodId?: string) => Promise<void>;
  availableMFAOptions: MFAOption[];
  getCurrentAccessToken: () => Promise<string | null>;
  isSending: boolean;
}

export function MFASelectionDialog({
  isOpen,
  onClose,
  onMFAVerify,
  availableMFAOptions,
  getCurrentAccessToken,
  isSending
}: MFASelectionDialogProps) {
  const t = useTranslations('MFASelectionDialog');
  const [selectedMFAType, setSelectedMFAType] = useState<string>('');
  const [mfaCode, setMfaCode] = useState('');
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isVerifyingMFA, setIsVerifyingMFA] = useState(false);
  const [currentMethodId, setCurrentMethodId] = useState<string | null>(null);

  const selectedOption = availableMFAOptions.find(option => option.type === selectedMFAType);
  
  // Get localized label for MFA type
  const getLocalizedLabel = (type: string) => {
    switch(type) {
      case 'WHATSAPP_OTP': return t('whatsapp_otp');
      case 'TOTP': return t('totp_label');
      case 'EMAIL_OTP': return t('email_otp');
      default: return type;
    }
  };

  const handleSendOTP = async () => {
    if (!selectedMFAType) {
      toast.error(t('select_method_error'));
      return;
    }

    try {
      setIsSendingOTP(true);
      
      const accessToken = await getCurrentAccessToken();
      if (!accessToken) {
        throw new Error('No access token available');
      }
      
      const methodId = await SecurityLayerService.sendMFACode(
        accessToken, 
        selectedMFAType as any, 
        selectedOption?.config
      );
      
      // Store the method_id for Email/WhatsApp OTP
      if (methodId) {
        setCurrentMethodId(methodId);
      }
      
      setOtpSent(true);
      toast.success(t('otp_sent_success', { method: getLocalizedLabel(selectedMFAType) }));
    } catch (error) {
      console.error('Failed to send OTP:', error);
      toast.error(error instanceof Error ? error.message : t('send_otp_failed'));
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleVerifyMFA = async () => {
    if (!selectedMFAType || !mfaCode) {
      toast.error(t('enter_code_error'));
      return;
    }

    try {
      setIsVerifyingMFA(true);
      
      // Determine the correct method_id based on MFA type
      let mfaMethodId: string | undefined;
      
      if (selectedMFAType === 'EMAIL_OTP' || selectedMFAType === 'WHATSAPP_OTP') {
        // For Email/WhatsApp OTP, use the method_id returned from send-code API
        mfaMethodId = currentMethodId || undefined;
      } else if (selectedMFAType === 'TOTP') {
        // For TOTP, no method_id is needed
        mfaMethodId = undefined;
      } else {
        // For other types, fall back to config
        mfaMethodId = selectedOption?.config?.stytchMethodId;
      }
      
      await onMFAVerify(selectedMFAType, mfaCode, mfaMethodId);
    } catch (error) {
      console.error('MFA verification failed:', error);
      toast.error(t('verification_failed'));
    } finally {
      setIsVerifyingMFA(false);
    }
  };

  const handleClose = () => {
    setSelectedMFAType('');
    setMfaCode('');
    setOtpSent(false);
    onClose();
  };

  const needsOTPSending = selectedMFAType === 'WHATSAPP_OTP' || selectedMFAType === 'EMAIL_OTP';
  const canSendOTP = selectedMFAType && !otpSent && needsOTPSending;
  const canVerify = selectedMFAType && mfaCode && (
    selectedMFAType === 'TOTP' || 
    (needsOTPSending && otpSent)
  );
  
  // Only disable during OTP sending or MFA verification, not during the parent isSending state
  const isProcessing = isSendingOTP || isVerifyingMFA;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-4">
              {t('description')}
            </p>
            
            <RadioGroup
              value={selectedMFAType}
              onValueChange={(value) => {
                setSelectedMFAType(value);
                setOtpSent(false);
                setMfaCode('');
              }}
              disabled={isProcessing}
              className="space-y-2"
            >
              {availableMFAOptions.map((option) => (
                <div key={option.type} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.type} id={option.type} />
                  <Label htmlFor={option.type} className="cursor-pointer">
                    {getLocalizedLabel(option.type)}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {selectedMFAType && (
            <div className="space-y-4">
              {/* Send OTP Button for WhatsApp/Email */}
              {needsOTPSending && !otpSent && (
                <Button 
                  onClick={handleSendOTP}
                  disabled={isProcessing}
                  className="w-full"
                >
                  {isSendingOTP ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('sending')}
                    </>
                  ) : (
                    t('send_code_via', { method: getLocalizedLabel(selectedMFAType) })
                  )}
                </Button>
              )}

              {/* OTP sent confirmation with Resend button */}
              {needsOTPSending && otpSent && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-green-800">
                      {t('code_sent_to', { method: getLocalizedLabel(selectedMFAType).toLowerCase() })}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSendOTP}
                      disabled={isProcessing}
                      className="text-green-700 hover:text-green-900 hover:bg-green-100 p-1 h-auto font-medium"
                    >
                      {isSendingOTP ? (
                        <>
                          <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                          {t('sending')}
                        </>
                      ) : (
                        t('resend')
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* Code Input */}
              {(selectedMFAType === 'TOTP' || otpSent) && (
                <div className="space-y-2">
                  <Label htmlFor="mfaCode">
                    {selectedMFAType === 'TOTP' 
                      ? t('enter_totp_code')
                      : t('enter_verification_code')
                    }
                  </Label>
                  <Input
                    id="mfaCode"
                    type="text"
                    placeholder={selectedMFAType === 'TOTP' ? t('totp_placeholder') : t('code_placeholder')}
                    value={mfaCode}
                    onChange={(e) => setMfaCode(e.target.value)}
                    disabled={isProcessing}
                    maxLength={6}
                  />
                </div>
              )}

              {/* Verify Button */}
              {canVerify && (
                <Button 
                  onClick={handleVerifyMFA}
                  disabled={!canVerify || isProcessing}
                  className="w-full"
                >
                  {isVerifyingMFA ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('verifying')}
                    </>
                  ) : (
                    t('verify_button')
                  )}
                </Button>
              )}
            </div>
          )}

          {/* Cancel Button */}
          <Button 
            variant="outline" 
            onClick={handleClose}
            disabled={isProcessing}
            className="w-full"
          >
            {t('cancel')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}