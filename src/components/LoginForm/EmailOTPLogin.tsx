'use client'

import { useState, useEffect } from 'react';
import { log } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { parseError } from '@/lib/error';
import { useTranslations } from 'next-intl';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import NewGoogleLogin from './NewGoogleLogin';
import PasskeyLogin from './PasskeyLogin';
import { BASE_URL } from '@/constants';
import { login, LoginMethod } from '@/services/loginService';

type OtpStep = 'submit' | 'verify';

interface EmailOTPLoginProps {
  defaultEmail?: string;
  title?: string;
  invitationId?: string;
  isSignUp: boolean;
}

export default function EmailOTPLogin({
  defaultEmail,
  title,
  invitationId,
  isSignUp,
}: EmailOTPLoginProps) {
  const router = useRouter();
  const transCommon = useTranslations('Common')
  const transStytchOTP = useTranslations('StytchOTP')

  const [step, setStep] = useState<OtpStep>('submit');
  const [email, setEmail] = useState<string>(defaultEmail || '');
  const [methodId, setMethodId] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(isSignUp);

  const transLogin = useTranslations('LoginPage');

  useEffect(() => {  
    setIsRegisterMode(isSignUp);
  }, []);

  async function sendPasscode(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      // First check if user exists
      const { data: checkData } = await axios.post(`${BASE_URL}/api/user/check-exists`, { 
        email 
      });
      
      const userExists = checkData?.exists;
      
      // Validate based on current mode
      if (isRegisterMode && userExists) {
        toast.error(transStytchOTP('user_already_exists'));
        return;
      }
      
      if (!isRegisterMode && !userExists) {
        toast.error(transStytchOTP('user_not_found'));
        return;
      }
      
      // Call backend API to send OTP
      const { data } = await axios.post(`${BASE_URL}/api/stytch/send-otp`, { 
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
      const authParams = await login({ email, emailId: methodId, otpCode: code }, LoginMethod.STYTCH_EMAIL_OTP);
      
      const encodedAuthParams = encodeURIComponent(JSON.stringify(authParams));
      
      // Redirect to unified callback page with auth params
      const callbackPath = `/auth/callback?authParams=${encodedAuthParams}`;
      if (invitationId) {
        router.push(`${callbackPath}&invitationId=${invitationId}`);
      } else {
        router.push(callbackPath);
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
    <div>
      <Card className="w-full">
        <h2 className="text-lg font-medium mb-4 text-center">
          {title || (isRegisterMode ? transStytchOTP('register_button') : transCommon('login'))}
        </h2>
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
                      {isRegisterMode ? transStytchOTP('register_button') : transStytchOTP('login_button')}
                    </>
                  )}
                </Button>
                
                <p 
                  className="text-sm text-black cursor-pointer text-left"
                  onClick={() => setIsRegisterMode(!isRegisterMode)}
                >
                  {isRegisterMode ? transStytchOTP('switch_to_login') : transStytchOTP('switch_to_register')}
                </p>
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
      <div>
        {!isRegisterMode && (
          <><div className="relative" style={{margin: 10 + 'px'}}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">
                {transLogin('or_continue_with')}
              </span>
            </div>
          </div><NewGoogleLogin invitationId={invitationId} /><PasskeyLogin invitationId={invitationId} /></>
        )}
      </div>
    </div>
  )
}