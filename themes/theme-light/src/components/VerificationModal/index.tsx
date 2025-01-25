import { useEffect, useState } from 'react';
import VerificationInput from 'react-verification-input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Modal } from '@/components/Modal';
import { LogoLoading } from '../LogoLoading';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
  loading?: boolean;
  modalClassName?: string;
  message?: string;
}

export function VerificationModal({ 
  isOpen, 
  onClose,
  onVerify,
  loading = false,
  modalClassName = '',
  message = 'To complete this action securely, please enter the 6-digit verification code we sent to your email address.'
}: VerificationModalProps) {
  const [code, setCode] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setCode('');
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Verification Code"
      containerClassName="w-[343px] tablet:w-[420px]"
      className={modalClassName}
    >
      <div>
        <p className="text-sm text-gray-500 mb-6">
          {message}
        </p>

        <div className="flex justify-center mb-6">
          <VerificationInput
            length={6}
            placeholder=""
            validChars="0-9"
            autoFocus
            classNames={{
              container: "container",
              character: cn(
                "w-10 h-12 rounded-md border border-input text-lg font-medium",
                "flex items-center justify-center mx-1",
                "focus:border-foreground focus:ring-0"
              )
            }}
            value={code}
            onChange={setCode}
          />
        </div>

        <p className="text-xs text-gray-400 mb-6">
          It may take a few minutes to receive the code. Please wait patiently.
        </p>

        <Button
          className="w-full"
          disabled={code.length !== 6 || loading}
          onClick={() => onVerify(code)}
        >
          {loading ? <LogoLoading /> : 'Verify'}
        </Button>
      </div>
    </Modal>
  );
}
