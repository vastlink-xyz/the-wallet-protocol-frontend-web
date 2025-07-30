import { useState } from 'react';
import { 
  STYTCH_SIGNIN_REDIRECT,
  getProviderByAuthMethodType,
} from '@/lib/lit';
import { log } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import axios from 'axios';
import { setAuthMethodToStorage, VastbaseAuthMethod } from '@/lib/storage/authmethod';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';
import { AuthProviderType, getVastbaseAuthMethodType, generateUnifiedAuthMethodId } from '@/lib/lit/custom-auth';
import { toast } from 'react-toastify';
import { parseError } from '@/lib/error';
import { STYTCH_SESSION_DURATION_MINUTES } from '@/lib/stytch/constants';
import { useTranslations } from 'next-intl';

type OtpStep = 'submit' | 'verify';

interface StytchOTPProps {
  defaultEmail?: string;
  title?: string;
  invitationId?: string;
}

/**
 * One-time passcodes can be sent via email through Stytch
 */
const StytchOTP = ({
  defaultEmail,
  title,
  invitationId,
}: StytchOTPProps) => {
  const router = useRouter();

  const transCommon = useTranslations('Common')
  const transStytchOTP = useTranslations('StytchOTP')

  const [step, setStep] = useState<OtpStep>('submit');
  const [email, setEmail] = useState<string>(defaultEmail || '');
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
      
      if (!data?.method_id) {
        throw new Error('Invalid response: method_id not found');
      }
      
      setMethodId(data.method_id);
      setStep('verify');
    } catch (err: any) {
      log('error sending otp', err);
      toast.error(err.response?.data?.error || transStytchOTP('send_verification_code_failed'));
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
      
      if (!data?.session_jwt || !data?.user_id) {
        throw new Error('Invalid response: session_jwt or user_id not found');
      }
      
      // Use the session JWT and user ID to authenticate with Lit Protocol
      const provider = getProviderByAuthMethodType(AUTH_METHOD_TYPE.StytchEmailFactorOtp);
      
      if (!provider) {
        throw new Error('Failed to get Stytch provider');
      }
      
      // Note: session_duration_minutes must be set here to sync with the Stytch session duration
      // This ensures the provider's session duration matches the Stytch session duration
      const authMethod = await provider.authenticate({
        accessToken: data.session_jwt,
        userId: data.user_id,
        session_duration_minutes: STYTCH_SESSION_DURATION_MINUTES,
      });
      
      log('authMethod from stytch', authMethod);
      
      // Convert to VastbaseAuthMethod format
      const vastbaseAuthMethod: VastbaseAuthMethod = {
        authMethodType: getVastbaseAuthMethodType(),
        authMethodId: generateUnifiedAuthMethodId(email),
        providerType: AuthProviderType.EMAIL_OTP,
        primaryEmail: email,
        accessToken: authMethod.accessToken,
      };
      
      // Store Stytch authentication method
      setAuthMethodToStorage(vastbaseAuthMethod);

      // Redirect to Stytch callback page
      const redirectPath = STYTCH_SIGNIN_REDIRECT.replace(window.location.origin, '');
      if (invitationId) {
        router.push(`${redirectPath}?invitationId=${invitationId}`);
      } else {
        router.push(redirectPath);
      }
      
    } catch (err: any) {
      const error = parseError(err);
      log('error verifying otp2', error);
      const parsedError = parseError(error);
      toast.error(parsedError?.message || transStytchOTP('verify_code_failed'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <h2 className="text-lg font-medium mb-4 text-center">{title || transCommon('login')}</h2>
      {step === 'submit' && (
        <div className="space-y-4">
          <CardHeader>
            <CardTitle>{transStytchOTP('email_title')}</CardTitle>
            <CardDescription>
              {transStytchOTP('email_description')}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={sendPasscode} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  {transStytchOTP('email')}
                </label>
                <Input
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder={transStytchOTP('email_holder')}
                />
              </div>

              <Button 
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2"
              >
                {loading ? transStytchOTP('sending'): (
                  <>
                    <Mail className="h-4 w-4" />
                    {transStytchOTP('send_code')}
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
            <CardTitle>{transStytchOTP('code_title')}</CardTitle>
            <CardDescription>
              {transStytchOTP('code_description', { email })}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={authenticate} className="space-y-4">
              <div>
                <label htmlFor="code" className="sr-only">
                  {transStytchOTP('code')}
                </label>
                <Input
                  id="code"
                  value={code}
                  onChange={e => setCode(e.target.value)}
                  type="text"
                  placeholder={transStytchOTP('code_holder')}
                  autoComplete="off"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  type="submit"
                  disabled={loading}
                >
                  {transStytchOTP(loading ? 'verifying' : 'verify')}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep('submit')}
                >
                  {transStytchOTP('try_again')}
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
