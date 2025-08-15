'use client'

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { log } from '~/lib/utils';
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Mail } from 'lucide-react';
import { toast } from 'react-toastify';
import { getPublicSessionSigs, litNodeClient } from '~/lib/lit';
import { litActionCodeForCheckUserExist } from '~/lib/lit-action-code/check-user-exist.lit';

type OtpStep = 'submit' | 'verify';

interface EmailOTPLoginProps {
  defaultEmail?: string;
  title?: string;
  invitationId?: string;
}

export default function EmailOTPLogin({
  defaultEmail,
  title,
  invitationId,
}: EmailOTPLoginProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<OtpStep>('submit');
  const [email, setEmail] = useState<string>(defaultEmail || '');
  const [methodId, setMethodId] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(false);

  const sendStytchOtp = async () => {
    const sessionSigs = await getPublicSessionSigs();
    const response = await litNodeClient.executeJs({
      ipfsId: 'QmaFEpRBgB3APeahtXkXrjwPTiQkWS7JGGHJxCBTuEpEe2',
      sessionSigs,
      jsParams: {
        userEmail: email,
        env: 'dev',
        devUrl: 'https://7e5f538a899d.ngrok-free.app',
        multisigWalletId: 'da30da0c-81b8-4d28-80da-146ab7b11de6',
      }
    })
    console.log('response', response)
    return JSON.parse(response.response as string);
  }

  const verifyStytchOtp = async () => {
    const sessionSigs = await getPublicSessionSigs();
    const response = await litNodeClient.executeJs({
      ipfsId: 'QmZ5yzqa94k9qQZ35xJBYF4ViHrewmxBjPkMV3iHHNm4DB',
      sessionSigs,
      jsParams: {
        methodId,
        code,
        env: 'dev',
        devUrl: 'https://7e5f538a899d.ngrok-free.app',
        multisigWalletId: 'da30da0c-81b8-4d28-80da-146ab7b11de6',
      }
    })
    console.log('response', response)
    return JSON.parse(response.response as string);
  }

  async function sendPasscode(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      // First check if user exists
      const sessionSigs = await getPublicSessionSigs();
      const response = await litNodeClient.executeJs({
        code: litActionCodeForCheckUserExist,
        sessionSigs,
        jsParams: { 
          userEmail: email
        }
      })
      console.log('response1', response)
      const parsedResponse = JSON.parse(response.response as string);
      log('parsedresponse', parsedResponse)
      const userExists = parsedResponse.exists;
      
      // Validate based on current mode
      if (isRegisterMode && userExists) {
        toast.error('User already exists');
        return;
      }
      
      if (!isRegisterMode && !userExists) {
        toast.error('User not found');
        return;
      }
      
      // Call Stytch REST API directly
      const otpResponse = await sendStytchOtp();
      
      console.log('OTP sent successfully:', otpResponse);
      
      if (!otpResponse?.email_id) {
        throw new Error('Invalid response: method_id not found');
      }
      
      setMethodId(otpResponse.email_id);
      setStep('verify');
    } catch (err: any) {
      log('error sending otp', err);
      toast.error(err.message || 'Failed to send verification code');
    } finally {
      setLoading(false);
    }
  }

  async function authenticate(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      const verifyResponse = await verifyStytchOtp();
      log('verifyResponse', verifyResponse)
      const data = verifyResponse
      
      if (!data?.session_jwt || !data?.user_id) {
        throw new Error('Invalid response: session_jwt or user_id not found');
      }
      
      // Encode authentication parameters for URL transmission
      const authParams = {
        accessToken: data.session_jwt,
        userEmail: email,
        userId: data.user_id
      };
      
      const encodedAuthParams = encodeURIComponent(JSON.stringify(authParams));
      
      // Redirect to unified callback page with auth params
      const callbackPath = `/auth/callback?authParams=${encodedAuthParams}`;
      if (invitationId) {
        navigate(`${callbackPath}&invitationId=${invitationId}`);
      } else {
        navigate(callbackPath);
      }
      
    } catch (err: any) {
      log('error verifying otp2', err);
      toast.error(err.message || 'Failed to verify code');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <h2 className="text-lg font-medium mb-4 text-center">
        {title || (isRegisterMode ? 'Register' : 'Login')}
      </h2>
      {step === 'submit' && (
        <div className="space-y-4">
          <CardHeader>
            <CardTitle>Email</CardTitle>
            <CardDescription>
              Enter your email to receive a verification code
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
                  placeholder="Enter your email"
                />
              </div>

              <Button 
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...': (
                  <>
                    <Mail className="h-4 w-4" />
                    {isRegisterMode ? 'Register' : 'Send Code'}
                  </>
                )}
              </Button>
              
              <p 
                className="text-sm text-black cursor-pointer text-left"
                onClick={() => setIsRegisterMode(!isRegisterMode)}
              >
                {isRegisterMode ? 'Already have an account? Login' : 'Need an account? Register'}
              </p>
            </form>
          </CardContent>
        </div>
      )}

      {step === 'verify' && (
        <div className="space-y-4">
          <CardHeader>
            <CardTitle>Verification Code</CardTitle>
            <CardDescription>
              Enter the verification code sent to {email}
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
                  placeholder="Enter verification code"
                  autoComplete="off"
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Verifying...' : 'Verify'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep('submit')}
                >
                  "Back"
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      )}
    </Card>
  );
}