import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { PinService } from '@/services/pinService';
import { useTranslations } from 'next-intl';

interface PinVerificationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onPinVerify: (pin: string) => Promise<void>;
  title?: string;
  description?: string;
}

export function PinVerificationDialog({
  isOpen,
  onClose,
  onPinVerify,
  title,
  description
}: PinVerificationDialogProps) {
  const t = useTranslations('PinVerificationDialog');
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // Reset state when dialog opens/closes
  useEffect(() => {
    if (isOpen) {
      setPin('');
      setShowPin(false);
      setIsVerifying(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!PinService.validatePinFormat(pin)) {
      toast.error(t('pin_must_be_6_digits'));
      return;
    }

    setIsVerifying(true);
    try {
      await onPinVerify(pin);
    } catch (error) {
      console.error('PIN verification failed:', error);
      // Clear PIN input on error to allow retry
      setPin('');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCancel = () => {
    if (!isVerifying) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title || t('default_title')}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {description || t('default_description')}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="pin-input" className="block mb-2">
                {t('pin_label')}
              </Label>
              <div className="relative">
                <Input
                  id="pin-input"
                  type={showPin ? "text" : "password"}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder={t('pin_placeholder')}
                  maxLength={6}
                  disabled={isVerifying}
                  className="pr-10"
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2"
                  onClick={() => setShowPin(!showPin)}
                  disabled={isVerifying}
                  tabIndex={-1}
                >
                  {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={isVerifying || !PinService.validatePinFormat(pin)}
                className="flex-1"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('verifying')}
                  </>
                ) : (
                  t('verify_pin')
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isVerifying}
                className="flex-1"
              >
                {t('cancel')}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}