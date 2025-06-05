import { useState } from 'react';
import { 
  STYTCH_SIGNIN_REDIRECT,
  getProviderByAuthMethodType,
} from '@/lib/lit';
import { log, setUserDataToStorage } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import axios from 'axios';
import { setAuthMethodToStorage } from '@/lib/storage/authmethod';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';
import { toast } from 'react-toastify';
import { parseError } from '@/lib/error';

type OtpStep = 'submit' | 'verify';

/**
 * One-time passcodes can be sent via email through Stytch
 */
const StytchOTP = () => {
  const router = useRouter();
  const [step, setStep] = useState<OtpStep>('submit');
  const [email, setEmail] = useState<string>('');
  const [methodId, setMethodId] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function sendPasscode(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      // Call backend API to send OTP
      const { data } = await axios.post('/api/stytch/send-otp', { 
        email 
      });
      
      console.log('OTP sent successfully:', data);
      setMethodId(data.method_id);
      setStep('verify');
    } catch (err: any) {
      log('error sending otp', err);
      toast.error(err.response?.data?.error || 'Failed to send verification code');
    } finally {
      setLoading(false);
    }
  }

  async function authenticate(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      // Call backend API to verify OTP
      const { data } = await axios.post('/api/stytch/verify-otp', {
        methodId,
        code
      });
      
      // Use the session JWT and user ID to authenticate with Lit Protocol
      const authMethod = await getProviderByAuthMethodType(AUTH_METHOD_TYPE.StytchEmailFactorOtp)?.authenticate({
        accessToken: data.session_jwt,
        userId: data.user_id,
      });
      
      log('authMethod from stytch', authMethod);
      
      // Store Stytch authentication method
      setAuthMethodToStorage(authMethod);

      setUserDataToStorage({ email });
      
      // Redirect to Stytch callback page
      router.push(STYTCH_SIGNIN_REDIRECT.replace(window.location.origin, ''));
      
    } catch (err: any) {
      const error = parseError(err);
      log('error verifying otp2', error);
      const parsedError = parseError(error);
      toast.error(parsedError?.message || 'Failed to verify code');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <h2 className="text-lg font-medium mb-4 text-center">Login</h2>
      {step === 'submit' && (
        <div className="space-y-4">
          <CardHeader>
            <CardTitle>Enter your email</CardTitle>
            <CardDescription>
              A verification code will be sent to your email.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={sendPasscode} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                    Send verification code
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
              Enter the 6-digit verification code sent to {email}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
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
