import { useEffect, useState } from "react";
import axios from "axios";
import { handleError, log } from "@/lib/utils";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LogoLoading } from "@/components/LogoLoading";
import { InviteInfoData, InviteStatus } from "../util";
import api from "@/lib/api";
import { Loading } from "@/components/Loading";
import { useAuth0 } from "@auth0/auth0-react";

export default function Page() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { loginWithRedirect } = useAuth0()

  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [loading, setLoading] = useState(false)

  const [inviteInfo, setInviteInfo] = useState<InviteInfoData>();
  const [inviteStatus, setInviteStatus] = useState<InviteStatus>('PENDING');
  const [otp, setOtp] = useState<string>('')

  useEffect(() => {
    init()
  }, [searchParams])

  useEffect(() => {
    if (!inviteInfo) {
      return
    }
    setInviteStatus(inviteInfo.status)
  }, [inviteInfo])

  const init = async () => {
    const inviteInfoId = searchParams.get('inviteInfoId')
    const otp = searchParams.get('otp')

    if (inviteInfoId && otp) {
      setOtp(otp)
      initInviteStatus(inviteInfoId)
    } else {
      toast.error('inviteInfoId or otp is not existed.')
    }
  }
  
  const initInviteStatus = async (inviteInfoId: string) => {
    try {
      setLoading(true)
      await initInviteInfo(inviteInfoId)
    } catch(error) {
      log('error', error)
    } finally {
      setLoading(false)
    }
  }

  const initInviteInfo = async (id: string) => {
    const response = await api.get(`/invite/invite-info/${id}`)
    if (response.data.success) {
      const info = response.data.inviteInfo
      setInviteInfo(info)
      log('inviteinfo', info)
      return info
    }
  }

  const registerBtnText = () => {
    if (registering) {
      // return 'registering...';
      return <LogoLoading />
    } else if (authenticating) {
      // return 'authenticating...';
      return <LogoLoading />
    }
    return 'Click To Sign Up'
  }

  async function verifyInviteOtp(email: string, otp: string) {
    const response = await api.post(`/invite/verify-invite-otp`, 
      {
        email,
        otp: otp,
      }
    );
    return response.data.success;
  }

  async function register() {
    const email = inviteInfo?.toEmail
    if (!email) {
      toast.error('username is not existed.')
      return
    }

    try {
      setRegistering(true);

      // verify otp and get jwt
      // kkktodo: verify otp
      // const otpVerified = await verifyInviteOtp(email, otp)
      const otpVerified = true
      log('otpVerified', otpVerified)

      if (otpVerified) {
        loginWithRedirect({
          appState: {
            returnTo: "/invite/register-claim",
            inviteParams: {
              inviteInfoId: inviteInfo?.id,
              token: inviteInfo?.token,
              amount: inviteInfo?.amount,
              fromEmail: inviteInfo?.fromEmail,
              toEmail: email,
            }
          },
          authorizationParams: {
            screen_hint: "signup",
            login_hint: email,
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            scope: "openid profile email offline_access",
          },
        })

        // update inviteInfo data, includes status and to address
        // const { address } = auth.all()
        // await updateInviteInfo(inviteInfo.id, {
        //   status: 'REGISTERED',
        //   to: address,
        // })
        // initInviteInfo(inviteInfo.id)
      }
    } catch (error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setRegistering(false);
      setAuthenticating(false)
    }
  }

  const updateInviteInfo = async (inviteInfoId: string, updateData: Partial<InviteInfoData>) => {
    const res = await api.post(`/invite/update-invite-info`, {
      id: inviteInfoId,
      ...updateData,
    })
    return res
  }

  return (
    <div className="min-h-custom-main flex items-center justify-center">
      <div className="bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full">
        <div className="flex items-center mb-8">
          <img src="/imgs/logos/logo.svg" className="w-[32px] mr-2" alt="logo" />
          <p className="font-bold">Vastlink</p>
        </div>

        {
          loading ? (
            <Loading />
          ) : (
            <>
              {
                inviteInfo ? (
                  <>
                    {
                      inviteStatus === 'PENDING' && (
                        <>
                          <div className="mb-6">
                            <p className="text-xl font-medium text-primary mb-2">Welcome, {inviteInfo?.toEmail}</p>
                            <p className="text-primary/80">This is your username for Vastlink</p>
                          </div>
                          <Button
                            className="w-full"
                            onClick={() => register()}
                            disabled={registering || authenticating}
                          >
                            { registerBtnText() }
                          </Button>
                        </>
                      )
                    }
                  </>
                ) : (
                  <Loading />
                )
              }
            </>
          )
        }

      </div>
    </div>
  );
}

