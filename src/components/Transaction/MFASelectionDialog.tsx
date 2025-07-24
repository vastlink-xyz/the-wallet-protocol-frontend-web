import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { AuthMethod } from "@lit-protocol/types";
import { SecurityLayerService } from "@/services/securityLayerService";
import { toast } from "react-toastify";

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
  authMethod: AuthMethod;
  isSending: boolean;
}

export function MFASelectionDialog({
  isOpen,
  onClose,
  onMFAVerify,
  availableMFAOptions,
  authMethod,
  isSending
}: MFASelectionDialogProps) {
  const [selectedMFAType, setSelectedMFAType] = useState<string>('');
  const [mfaCode, setMfaCode] = useState('');
  const [isSendingOTP, setIsSendingOTP] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isVerifyingMFA, setIsVerifyingMFA] = useState(false);
  const [currentMethodId, setCurrentMethodId] = useState<string | null>(null);

  const selectedOption = availableMFAOptions.find(option => option.type === selectedMFAType);

  const handleSendOTP = async () => {
    if (!selectedMFAType) {
      toast.error('Please select an MFA method');
      return;
    }

    try {
      setIsSendingOTP(true);
      const methodId = await SecurityLayerService.sendMFACode(
        authMethod, 
        selectedMFAType as any, 
        selectedOption?.config
      );
      
      // Store the method_id for Email/WhatsApp OTP
      if (methodId) {
        setCurrentMethodId(methodId);
      }
      
      setOtpSent(true);
      toast.success(`OTP sent via ${selectedOption?.label}`);
    } catch (error) {
      console.error('Failed to send OTP:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send OTP');
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleVerifyMFA = async () => {
    if (!selectedMFAType || !mfaCode) {
      toast.error('Please enter the verification code');
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
      toast.error('MFA verification failed');
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
          <DialogTitle>Additional Verification Required</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-4">
              This transaction requires additional verification. Please select a method:
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
                    {option.label}
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
                      Sending...
                    </>
                  ) : (
                    `Send Code via ${selectedOption?.label}`
                  )}
                </Button>
              )}

              {/* OTP sent confirmation with Resend button */}
              {needsOTPSending && otpSent && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-green-800">
                      Verification code sent to your {selectedOption?.label.toLowerCase()}
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
                          Sending...
                        </>
                      ) : (
                        'Resend'
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
                      ? 'Enter code from your authenticator app'
                      : 'Enter verification code'
                    }
                  </Label>
                  <Input
                    id="mfaCode"
                    type="text"
                    placeholder={selectedMFAType === 'TOTP' ? '000000' : 'Enter code'}
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
                      Verifying...
                    </>
                  ) : (
                    'Verify and Send Transaction'
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
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}