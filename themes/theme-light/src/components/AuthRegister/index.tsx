import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import { log, handleError, emailRegex, cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { Checkbox } from "@/components/ui/checkbox";

export default function AuthRegister() {
  const { t } = useTranslation()

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(true);

  const [emailError, setEmailError] = useState(false);

  const validateEmail = async (value: string) => {
    if (!value) {
      setEmailError(true);
      return false;
    }
    if (!emailRegex.test(value)) {
      setEmailError(true);
      return false;
    }
    if (authenticateSetup) {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_WALLET_PROTOCAL_API_BASEURL}/address/`, {
          params: {
            email: value,
          }
        })
        if (!data.success) {
          setEmailError(true);
          return false;
        }
      } catch (_) {
      }
    }

    setEmailError(false);
    return true;
  };

  async function preRegister() {
    log('call register')
    try {
      setRegistering(true)
      const response = await axios.post(`${import.meta.env.VITE_WALLET_PROTOCAL_API_BASEURL}/auth/generate-otp`,
        {
          email: username,
          displayName: displayName,
          rememberMe: rememberMe,
        }
      );
      log('register res', response);
      if (response.status === 200) {
        toast.success(
          t('/.otpSentMessage')
        )
        setRegistering(false);
      }
    } catch (error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }

  async function preAuthenticate() {
    try {
      setAuthenticating(true)
      const response = await axios.post(`${import.meta.env.VITE_WALLET_PROTOCAL_API_BASEURL}/auth/generate-login-otp`,
        {
          email: username,
          rememberMe: rememberMe,
        }
      );
      if (response.status === 200) {
        toast.success(
          t('/.otpLoginSentMessage')
        )
        setAuthenticating(false);
      }
    } catch (error) {
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
        const { data } = await axios.get(`${import.meta.env.VITE_WALLET_PROTOCAL_API_BASEURL}/address/`, {
          params: {
            email: username,
          }
        })
        if (data.success) {
          toast.error(t('/.emailAlreadySignedUp'))
          return
        }
      } catch (_) {
      }

      await preRegister();
    }
  }

  const handleSwitchAuthMode = () => {
    setAuthenticateSetup(!authenticateSetup)
    setEmailError(false)
  }

  return (
    <div className={cn(
      'relative mx-auto overflow-visible',
      'w-[343px] tablet:w-[536px]',
      'pt-[60px] tablet:pt-[120px]',
    )}>
      <div className={cn(
        'text-[#111111] text-[32px] font-bold leading-tight',
        'text-xl tablet:text-[32px]',
      )}>
        {authenticateSetup ? t('/.signinTitle') : t('/.signupTitle')}
      </div>
      <div className={cn(
        'tablet:whitespace-nowrap',
        'absolute left-0',
        'top-[87px] tablet:top-[155px]',
        'text-[#979797]/90 font-normal leading-snug',
        'text-[10px] tablet:text-sm',
      )}>
        A sign up link will be sent to your email. Please check your inbox and click the link to sign in.
      </div>

      <form
        className={cn(
          'group mt-[84px]',
        )}
        onSubmit={(e) => processUserAccess(e)}
        noValidate
      >
        {
          !authenticateSetup && (
            <div className="mb-[40px] relative">
              <Label htmlFor="displayName">Name</Label>
          <Input
            className={cn(
              'mt-[6px]'
            )}
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value.trim())}
            placeholder="Display Name"
            required
            disabled={registering || authenticating}
            />
          </div>
        )}

        <div className="mb-4 relative">
          <Label htmlFor="email">{t('/.emailLabel')}</Label>
          <Input
            className={cn(
              'mt-[6px]'
            )}
            type="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            onBlur={(e) => validateEmail(e.target.value)}
            placeholder={t('/.emailPlaceholder')}
            required
            disabled={registering || authenticating}
          />
          {emailError && (
            <span className="absolute -bottom-5 text-xs text-red-500">
              {t('/.emailValidationError')}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2 mt-[48px] p-[10px]">
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onCheckedChange={() => setRememberMe(!rememberMe)}
          />
        </div>

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={registering || authenticating || emailError}
        >
        {
          authenticateSetup ? t('/.signUpButton') : t('/.signInButton')
        }
        </Button>
        <label
            htmlFor="rememberMe"
            className="text-xs text-black leading-none font-normal cursor-pointer select-none"
          >
            Remember me for 30 days
        </label>
      </form>

      <div
        className="text-center text-black/90 text-sm font-normal leading-snug cursor-pointer select-none mt-[12px]"
        onClick={handleSwitchAuthMode}
      >
        {
          authenticateSetup ? t('/.signUp') : t('/.alreadyHaveAccount')
        }
      </div>
    </div>
  );
}
