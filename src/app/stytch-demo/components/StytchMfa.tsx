import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { log } from '@/lib/utils';

type MfaStep = 'idle' | 'code' | 'success';

interface StytchMfaProps {
  userId: string;
  phoneNumber: string; // The phone number to send the MFA code to
  onSuccess?: () => void;
}

export const StytchMfa = ({ userId, phoneNumber, onSuccess }: StytchMfaProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<MfaStep>('idle');
  const [methodId, setMethodId] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  // Trigger MFA process when button is clicked
  async function handleMfaClick() {
    setOpen(true);
    setStep('idle');
    setLoading(true);
    setError(undefined);
    
    try {
      const response = await fetch('/api/stytch/send-sms-mfa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId, 
          phoneNumber 
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send verification code');
      }
      
      setMethodId(data.method_id);
      setStep('code');
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  // Verify the entered code
  async function verifyCode(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(undefined);
    
    try {
      const response = await fetch('/api/stytch/verify-sms-mfa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          methodId, 
          code 
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Invalid verification code');
      }
      
      setStep('success');
      log('MFA verification successful');
      
      // Execute the success callback if provided
      if (onSuccess) {
        onSuccess();
      }
      
      // Close the dialog after a short delay
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button onClick={handleMfaClick}>
        MFA Protected Action
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {step === 'idle' ? 'Sending verification code...' : 
               step === 'code' ? 'Enter verification code' : 
               'Verification successful'}
            </DialogTitle>
            <DialogDescription>
              {step === 'code' && `We've sent a code to ${phoneNumber}. Enter it below to continue.`}
              {step === 'success' && 'You have been successfully verified!'}
            </DialogDescription>
          </DialogHeader>
          
          {error && (
            <div className="text-red-500 mb-4">
              {error.message}
            </div>
          )}
          
          {step === 'code' && (
            <form onSubmit={verifyCode} className="space-y-4">
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Verification code"
                autoComplete="one-time-code"
              />
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Verifying...' : 'Verify'}
                </Button>
              </div>
            </form>
          )}
          
          {step === 'success' && (
            <div className="flex items-center justify-center p-4">
              <div className="text-green-500 font-semibold">✓ Verification successful</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};