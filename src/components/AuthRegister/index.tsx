"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import { usePassport } from "@/hooks/usePassport";
import theWalletPassportService from "@/services/PassportService";
import { log, auth, cn, handleError } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import keyManagementService from "@/services/KeyManagementService";

export type PageType = 'login' | 'verify-registration'

export default function AuthRegister() {
  const params = useSearchParams();
  const router = useRouter();
  const t = useTranslations('/')

  // const [pageType, setPageType] = useState<PageType>('login')
  const [username, setUsername] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(true);

  useEffect(() => {
    const init = async () => {
      // web3auth sdk need to be initialized
      await keyManagementService.init()

      const email = params?.get('email')
      const otp = params?.get('otp')
      const type = params?.get('type')

      if (email && otp) {
        setUsername(email)
  
        if (type === 'login') {
          authenticate(email, otp)
        } else {
          register(email, otp)
        }
      }
    }

    init()
  }, [params]);

  async function preRegister() {
    log('call register')
    try {
      setRegistering(true)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/auth/generate-otp`, 
        {
          email: username,
        }
      );
      log('register res', response);
      if (response.status === 200) {
        toast.info(
          t('otpSentMessage'),
          {
            autoClose: 10000,
          }
        )
        setRegistering(false);
      }
    } catch(error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }

  async function verifyOtp(username: string, otp: string) {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/auth/verify-otp`, 
      {
        email: username,
        OTP: otp,
      }
    );
    return response.data;
  }

  async function register(registerUsername: string, otp: string) {
    log('call register')
    setAuthenticateSetup(false)
    setRegistering(true);
    try {
      // verify otp and get idToken
      const idToken = await verifyOtp(registerUsername, otp)

      // sign up with keyManagementService
      await keyManagementService.signUp({
        username: registerUsername,
        idToken: idToken,
      })

      router.push('/home')
      // setAuthenticating(true);
      // await authenticate(registerUsername);
      // setAuthenticating(false);
    } catch (error: unknown) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      log('register finally')
      setRegistering(false);
      setAuthenticating(false);
    }
  }

  async function preAuthenticate() {
    try {
      setAuthenticating(true)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/auth/generate-login-otp`, 
        {
          email: username,
        }
      );
      if (response.status === 200) {
        toast.info(
          t('otpLoginSentMessage'),
          {
            autoClose: 10000,
          }
        )
        setAuthenticating(false);
      }
    } catch(error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }

  async function authenticate(authUsername: string, otp: string) {
    log('call authenticate', authUsername)
    setAuthenticating(true);
    try {
      // verify otp and get idToken
      const idToken = await verifyOtp(authUsername, otp)

      await keyManagementService.signIn({
        authUsername,
        idToken,
      })

      router.push('/home')
    } catch (error: unknown) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setAuthenticating(false);
    }
  }

  const processUserAccess = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authenticateSetup) {
      await preAuthenticate();
    } else {
      // check if email is existed
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/address/check`, {
          params: {
            email: username,
          }
        })
        if (data.exists) {
          toast.error(t('emailAlreadySignedUp'))
          return
        }
      } catch(err) {
      }

      await preRegister();
    }
  }

  const submitBtnText = () => {
    if (authenticateSetup) {
      if (authenticating) {
        return t('authenticating');
      }
      return t('signInButton')
    } else {
      if (registering) {
        return t('registering');
      } else if (authenticating) {
        return t('authenticating');
      }
      return t('signUpButton');
    }
  }

  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <Card className="sm:w-[360px] py-4 border-none shadow-none mb-12 bg-white">
        <CardHeader>
          <p className="mb-4 text-lg md:text-2xl m-0 p-0">{authenticateSetup ? t('signinTitle') : t('signupTitle')}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => processUserAccess(e)} className="group" noValidate>
            <div className="mb-4 relative">
              <Label htmlFor="email">{t('emailLabel')}</Label>
              <Input
                className="w-full mb-2 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 ring-offset-transparent mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                type="email"
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t('emailPlaceholder')}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <span className="absolute -bottom-5 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                {t('emailValidationError')}
              </span>
            </div>
            <Button
              type="submit"
              className="w-full mt-2 rounded-full group-invalid:pointer-events-none group-invalid:opacity-30"
              disabled={registering || authenticating}
            >
              { submitBtnText() }
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="cursor-pointer select-none" onClick={() => setAuthenticateSetup(!authenticateSetup)}>
            {
              authenticateSetup ? t('signUp') : t('alreadyHaveAccount')
            }
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
