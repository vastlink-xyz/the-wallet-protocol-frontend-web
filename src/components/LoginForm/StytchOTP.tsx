import { useState } from 'react';
import { AUTH_METHOD_STORAGE_KEY, stytchEmailOtpProvider } from '@/lib/lit';
import { log } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';

type OtpStep = 'submit' | 'verify';

/**
 * One-time passcodes can be sent via email through Stytch
 */
const StytchOTP = () => {
  const router = useRouter();
  const [step, setStep] = useState<OtpStep>('submit');
  const [userId, setUserId] = useState<string>('');
  const [methodId, setMethodId] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  async function sendPasscode(event: any) {
    event.preventDefault();
    setLoading(true);
    setError(undefined);
    try {
      // Call backend API to send OTP
      const response = await fetch('/api/stytch/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userId }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send verification code');
      }
      
      console.log('OTP sent successfully:', data);
      setMethodId(data.method_id);
      setStep('verify');
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  async function authenticate(event: any) {
    event.preventDefault();
    setLoading(true);
    setError(undefined);
    try {
      // Call backend API to verify OTP
      const response = await fetch('/api/stytch/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ methodId, code }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify code');
      }
      
      // Use the session JWT and user ID to authenticate with Lit Protocol
      const authMethod = await stytchEmailOtpProvider?.authenticate({
        accessToken: data.session_jwt,
        userId: data.user_id,
      });
      
      log('authMethod from stytch', authMethod);
      localStorage.setItem(AUTH_METHOD_STORAGE_KEY, JSON.stringify(authMethod));
      router.push('/stytch-demo');
      
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <h3 className="text-lg font-medium mb-4 text-center">Email Login</h3>
      {step === 'submit' && (
        <div className="space-y-4">
          <CardHeader>
            <CardTitle>Enter your email</CardTitle>
            <CardDescription>
              A verification code will be sent to your email.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {error && (
              <div className="text-red-500 mb-4">
                {error.message}
              </div>
            )}

            <form onSubmit={sendPasscode} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                  type="email"
                  placeholder="Your email"
                  autoComplete="off"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : (
                  <>
                    <Mail className="h-4 w-4" />
                    Send code
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </div>
      )}

      {step === 'verify' && (
        <div className="space-y-4">
          <CardHeader>
            <CardTitle>Check your email</CardTitle>
            <CardDescription>
              Enter the 6-digit verification code sent to {userId}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {error && (
              <div className="text-red-500 mb-4">
                {error.message}
              </div>
            )}
            
            <form onSubmit={authenticate} className="space-y-4">
              <div>
                <label htmlFor="code" className="sr-only">
                  Code
                </label>
                <Input
                  id="code"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  type="text"
                  placeholder="Verification code"
                  autoComplete="off"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify"}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep('submit')}
                >
                  Try again
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      )}
    </Card>
  );
};

export default StytchOTP;
