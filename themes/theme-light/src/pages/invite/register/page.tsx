import { useEffect, useState } from "react";
import axios from "axios";
import { auth, handleError, log } from "@/lib/utils";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LogoLoading } from "@/components/LogoLoading";
import { formatEther } from "viem";
import { InviteInfoData, InviteStatus } from "../util";
import api from "@/lib/api";
import keyManagementService from "@/services/KeyManagementService";
import { Loading } from "@/components/Loading";
import { otpService } from "@/services/OTPService";

export default function Page() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [sending, setSending] = useState(false)
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
      const info = await initInviteInfo(inviteInfoId)
  
      // check if the user has registered
      const res = await api.get(`/address/check`, {
        params: { email: info.toEmail }
      });
  
      if (res.data.exists && info.status === 'PENDING' && !info.to) {
        // get user address
        const response = await api.get(`/address/`, {
          params: { email: info.toEmail }
        })

        if (response.data.success) {
          // update current inviteInfo
          await updateInviteInfo(info.id, {
            status: 'REGISTERED',
            to: response.data.address,
          })
          initInviteInfo(inviteInfoId)
        }
      }
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

  async function verifyRegistrationOtp(username: string, otp: string) {
    const fromInvitation = otpService.getVerifyMethod() === 'email-by-sendgrid'
    const response = await axios.post(`${import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL}/auth/verify-registration-otp`, 
      {
        email: username,
        OTP: otp,
        fromInvitation,
      }
    );
    return response.data;
  }

  async function register() {
    const registerUsername = inviteInfo?.toEmail
    if (!registerUsername) {
      toast.error('username is not exited.')
      return
    }

    try {
      setRegistering(true);

      // verify otp and get jwt
      await verifyRegistrationOtp(registerUsername, otp)

      // sign up with keyManagementService
      await keyManagementService.signUp({
        username: registerUsername,
      })

      // setRegistering(false);
      // setAuthenticating(true)
      // const success = await authenticate(registerUsername)
      // if (!success) {
      //   return
      // }

      // update inviteInfo data, includes status and to address
      const { address } = auth.all()
      await updateInviteInfo(inviteInfo.id, {
        status: 'REGISTERED',
        to: address,
      })
      initInviteInfo(inviteInfo.id)
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

  const handleSendEmail = async () => {
    try {
      setSending(true)
  
      // const { address, username } = auth.all()
      // if (address !== inviteInfo?.to || username !== inviteInfo?.toEmail) {
      //   // auth status is wrong, need to authenticate again
      //   const success = await authenticate(inviteInfo?.toEmail!)
      //   if (!success) {
      //     return
      //   }
      // }

      // notify the inviter to finish the transaction
      const response = await api.post(`/invite/send-inviter-transfer-email`, {
        inviteInfoId: inviteInfo?.id,
      })
  
      if (response.data.success) {
        toast.success('Transfer email sent successfully')
        initInviteInfo(inviteInfo!.id)
      }
    } catch(error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setSending(false)
    }
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

                    {
                      inviteStatus === 'REGISTERED' && (
                        <>
                          <div className="mb-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">You have received a crypto transfer!</h2>
                            <p className="mb-2">{inviteInfo.fromEmail} sent you</p>
                            <p className="text-3xl font-bold mb-2">{formatEther(BigInt(inviteInfo.amount))} {inviteInfo.token}</p>
                          </div>
                          <div className="text-center">
                            <p className="mb-4">To accept this transfer, please confirm below.</p>
                            <Button
                              className="w-full mb-4"
                              onClick={() => handleSendEmail()}
                              disabled={sending}
                            >
                              {sending ? <LogoLoading /> : 'Accept Transfer'}
                            </Button>
                          </div>
                        </>
                      )
                    }

                    {
                      inviteStatus === 'WAITING' && (
                        <>
                          <p className="mb-4">Email sent successfully! Please wait for the inviter to complete the transfer.</p>
                          <p className="mb-4">You will receive an email notification once the transfer is complete.</p>
                          <Button
                            className="w-full"
                            onClick={() => navigate('/dashboard')}
                          >
                            Go To Dashboard
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

