import { CountdownSuccess } from "@/components/CountdownSuccess";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleError, log } from "@/lib/utils";
import { toast } from "react-toastify";
import keyManagementService from "@/services/KeyManagementService";
import axios from "axios";

export default function VerifyAuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(true);
  const [showCountdownSuccess, setShowCountdownSuccess] = useState(false);

  useEffect(() => {
    const init = async () => {
      const email = searchParams?.get('email')
      const otp = searchParams?.get('otp')
      const type = searchParams?.get('type')
      const isRememberMe = searchParams?.get('rememberMe')

      if (email && otp) {
        if (type === 'login') {
          authenticate({
            authUsername: email,
            otp,
            isRememberMe: isRememberMe === 'true',
          })
        } else {
          register({
            registerUsername: email,
            otp,
            isRememberMe: isRememberMe === 'true',
          })
        }
      }
    }

    init()
  }, [searchParams]);

  async function authenticate({
    authUsername,
    otp,
    isRememberMe = true,
  }: {
    authUsername: string;
    otp: string;
    isRememberMe?: boolean;
  }) {
    log('call authenticate', authUsername)
    setLoading(true);
    try {
      // verify otp and get idToken
      const idToken = await verifyOtp({
        username: authUsername,
        otp,
        isRememberMe,
      })

      await keyManagementService.signIn({
        authUsername,
      })

      navigate('/dashboard')
    } catch (error: unknown) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setLoading(false);
    }
  }

  async function register({
    registerUsername,
    otp,
    isRememberMe = true,
  }: {
    registerUsername: string;
    otp: string;
    isRememberMe?: boolean;
  }) {
    log('call register')
    setAuthenticateSetup(false)
    setLoading(true);
    try {
      // verify otp and get idToken
      const idToken = await verifyOtp({
        username: registerUsername,
        otp,
        isRememberMe,
      })

      // sign up with keyManagementService
      await keyManagementService.signUp({
        username: registerUsername,
      })

      setShowCountdownSuccess(true)
    } catch (error: unknown) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      log('register finally')
      setLoading(false);
    }
  }

  async function verifyOtp({
    username,
    otp,
    isRememberMe = true,
  }: {
    username: string;
    otp: string;
    isRememberMe?: boolean;
  }) {
    const response = await axios.post(`${import.meta.env.VITE_WALLET_PROTOCAL_API_BASEURL}/auth/verify-otp`,
      {
        email: username,
        OTP: otp,
        rememberMe: isRememberMe,
      }
    );
    return response.data;
  }

  return (
    loading ? (
      <div className="flex justify-center items-center mt-[200px]">
        <img
          src="/imgs/icons/loading.svg"
          alt="loading"
          className="h-[100px] w-[100px] animate-spin mt-[100px]"
        />
      </div>
    ) : (
      showCountdownSuccess ? (
        <CountdownSuccess
          title={`${authenticateSetup ? 'Sign in' : 'Sign up'} successfully`}
          buttonText="Take me to the dashboard"
          redirectUrl="/dashboard"
          description="Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
        />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p className="text-lg">Something went wrong</p>
        </div>
      )
    )
  )
}
