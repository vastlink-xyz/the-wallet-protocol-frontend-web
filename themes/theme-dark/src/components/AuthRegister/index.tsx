"use client";

import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

import { log, handleError, emailRegex } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import keyManagementService from "@/services/KeyManagementService";

export type PageType = 'login' | 'verify-registration'

export default function AuthRegister() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation()

  // const [pageType, setPageType] = useState<PageType>('login')
  const [username, setUsername] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(true);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const init = async () => {
      const email = searchParams?.get('email')
      const otp = searchParams?.get('otp')
      const type = searchParams?.get('type')

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
  }, [searchParams]);

  async function preRegister() {
    log('call register')
    try {
      setRegistering(true)
      const response = await axios.post(`${import.meta.env.VASTLINK_PROTOCAL_API_BASEURL}/auth/generate-otp`, 
        {
          email: username,
        }
      );
      log('register res', response);
      if (response.status === 200) {
        toast.info(
          t('/.otpSentMessage'),
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
    const response = await axios.post(`${import.meta.env.VASTLINK_PROTOCAL_API_BASEURL}/auth/verify-otp`, 
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
      // verify otp and get jwt
      const jwt = await verifyOtp(registerUsername, otp)

      // sign up with keyManagementService
      await keyManagementService.signUp({
        username: registerUsername,
        jwt: jwt,
      })

      setRedirecting(true);
      navigate('/dashboard');
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
      const response = await axios.post(`${import.meta.env.VASTLINK_PROTOCAL_API_BASEURL}/auth/generate-login-otp`, 
        {
          email: username,
        }
      );
      if (response.status === 200) {
        toast.info(
          t('/.otpLoginSentMessage'),
          {
            autoClose: 10000,
          }
        )
        setAuthenticating(false);
      }
    } catch(error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setAuthenticating(false);
    }
  }

  async function authenticate(authUsername: string, otp: string) {
    log('call authenticate', authUsername)
    setAuthenticating(true);
    try {
      // verify otp and get jwt
      const jwt = await verifyOtp(authUsername, otp)

      await keyManagementService.signIn({
        authUsername,
        jwt,
      })

      setRedirecting(true);
      navigate('/dashboard');
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
        const { data } = await axios.get(`${import.meta.env.VASTLINK_PROTOCAL_API_BASEURL}/address/`, {
          params: {
            email: username,
          }
        })
        if (data.success) {
          toast.error(t('/.emailAlreadySignedUp'))
          return
        }
      } catch(_) {
      }

      await preRegister();
    }
  }

  const submitBtnText = () => {
    if (authenticateSetup) {
      if (authenticating) {
        return t('/.authenticating');
      }
      return t('/.signInButton')
    } else {
      if (registering) {
        return t('/.registering');
      } else if (authenticating) {
        return t('/.authenticating');
      }
      return t('/.signUpButton');
    }
  }

  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      {redirecting ? (
        <div className="text-center">
          <p className="text-lg">Redirecting to dashboard...</p>
        </div>
      ) : (
        <Card className="sm:w-[360px] py-4 border-none shadow-none mb-12 bg-white">
          <CardHeader>
            <p className="mb-4 text-lg md:text-2xl m-0 p-0">{authenticateSetup ? t('/.signinTitle') : t('/.signupTitle')}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => processUserAccess(e)} className="group" noValidate>
              <div className="mb-4 relative">
                <Label htmlFor="email">{t('/.emailLabel')}</Label>
                <Input
                  className="w-full mb-2 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 ring-offset-transparent mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                  type="email"
                  id="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.trim())}
                  placeholder={t('/.emailPlaceholder')}
                  required
                  pattern={emailRegex.source}
                  disabled={registering || authenticating}
                />
                <span className="absolute -bottom-5 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  {t('/.emailValidationError')}
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
                authenticateSetup ? t('/.signUp') : t('/.alreadyHaveAccount')
              }
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
