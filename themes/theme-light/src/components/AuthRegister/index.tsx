import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import { log, handleError, emailRegex, cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { Checkbox } from "@/components/ui/checkbox";
import { LogoLoading } from "../LogoLoading";
import { otpService } from "@/services/OTPService";
import { VerificationModal } from "../VerificationModal";
import keyManagementService from "@/services/KeyManagementService";
import { useNavigate } from "react-router-dom";

export default function AuthRegister() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(true);

  const [emailError, setEmailError] = useState(false);
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [verificationType, setVerificationType] = useState<'signin' | 'signup'>('signin');

  useEffect(() => {
    initDefaults()
  }, [])

  const initDefaults = () => {
    setUsername('')
    setRegistering(false)
    setAuthenticating(false)
    setAuthenticateSetup(true)
    setEmailError(false)
    setVerificationOpen(false)
    setVerificationLoading(false)
    setVerificationMessage('')
  }

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
        const { data } = await axios.get(`${import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL}/address/`, {
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
    try {
      setRegistering(true)
      const response = await axios.post(`${import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL}/auth/generate-registration-otp`,
        {
          email: username,
          displayName: displayName,
          rememberMe: rememberMe,
        }
      );
      if (response.status === 200) {
        if (otpService.getVerifyMethod() === 'email-by-nodemailer') {
          toast.success(t('/.otpSentMessage'))
          setRegistering(false);
        } else if (otpService.getVerifyMethod() === 'email-by-sendgrid') {
          setVerificationOpen(true)
          setVerificationType('signup')
          setVerificationMessage('A verification code has been sent to your email. Please check your inbox and enter the code to sign up.')
        }
      }
    } catch (error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }

  async function preAuthenticate() {
    try {
      setAuthenticating(true)
      const response = await axios.post(`${import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL}/auth/generate-login-otp`,
        {
          email: username,
          rememberMe: rememberMe,
        }
      );
      if (response.status === 200) {
        if (otpService.getVerifyMethod() === 'email-by-nodemailer') {
          toast.success(t('/.otpLoginSentMessage'))
          setAuthenticating(false);
        } else if (otpService.getVerifyMethod() === 'email-by-sendgrid') {
          setVerificationOpen(true)
          setVerificationType('signin')
          setVerificationMessage('A verification code has been sent to your email. Please check your inbox and enter the code to sign in.')
        }
      }
    } catch (error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setAuthenticating(false);
    }
  }

  async function handleVerify(code: string) {
    if (verificationType === 'signin') {
      handleVerifyLogin(code)
    } else if (verificationType === 'signup') {
      handleVerifyRegister(code)
    }
  }

  async function handleVerifyRegister(code: string) {
    try {
      setVerificationLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL}/auth/verify-registration-otp`,
        {
          email: username,
          OTP: code,
          rememberMe: rememberMe,
        }
      );
      if (response.data) {
        await keyManagementService.signUp({
          username,
        });
        navigate('/dashboard');
      }
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setVerificationLoading(false);
    }
  }

  async function handleVerifyLogin(code: string) {
    try {
      setVerificationLoading(true);
      log('verify login', code)
      const response = await axios.post(
        `${import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL}/auth/verify-login-otp`,
        {
          email: username,
          OTP: code,
          rememberMe: rememberMe,
        }
      );
      log('verify res', response);
      if (response.data) {
        await keyManagementService.signIn({
          authUsername: username,
        });
        navigate('/dashboard');
      }
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setVerificationLoading(false);
    }
  }

  const processUserAccess = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authenticateSetup) {
      await preAuthenticate();
    } else {
      // check if email is existed
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL}/address/`, {
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

  const buttonText = () => {
    if (registering || authenticating) {
      return <LogoLoading />
    }
    return !authenticateSetup ? t('/.signUpButton') : t('/.signInButton')
  }

  return (
    <div className={cn(
      'relative mx-auto overflow-visible',
      'w-[343px] tablet:w-[536px]',
    )}>
      <div className={cn(
        'text-[#111111] text-[32px] font-bold leading-tight',
        'text-xl tablet:text-[32px]',
      )}>
        {authenticateSetup ? t('/.signinTitle') : t('/.signupTitle')}
      </div>

      {
        otpService.getVerifyMethod() === 'email-by-nodemailer' && 
        <div className={cn(
          'mt-[8px]',
          'tablet:whitespace-nowrap',
          'text-[#979797]/90 font-normal leading-snug',
          'text-[10px] tablet:text-sm',
        )}>
          A sign up link will be sent to your email. Please check your inbox and click the link to sign in.
        </div>
      }

      <form
        className={cn(
          'group mt-[84px]',
        )}
        onSubmit={(e) => processUserAccess(e)}
        noValidate
      >
        {/* {!authenticateSetup && (
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
        )} */}

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

        {/* remember me */}
        <div className="flex items-center space-x-2 p-[10px] mt-[48px]">
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onCheckedChange={() => setRememberMe(!rememberMe)}
          />
          <label
            htmlFor="rememberMe"
            className="text-xs text-black leading-none font-normal cursor-pointer select-none"
          >
            Remember me for 7 days
          </label>
        </div>

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={registering || authenticating || emailError}
        >
          {buttonText()}
        </Button>

      </form>

      <div
        className="text-center text-black/90 text-sm font-normal leading-snug cursor-pointer select-none mt-[12px]"
        onClick={handleSwitchAuthMode}
      >
        {
          authenticateSetup ? t('/.signUp') : t('/.alreadyHaveAccount')
        }
      </div>

      <VerificationModal
        key={verificationType}
        isOpen={verificationOpen}
        onClose={() => {
          setVerificationOpen(false)
          setRegistering(false)
          setAuthenticating(false)
          setEmailError(false)
        }}
        loading={verificationLoading}
        onVerify={handleVerify}
        message={verificationMessage}
      />
    </div>
  );
}
