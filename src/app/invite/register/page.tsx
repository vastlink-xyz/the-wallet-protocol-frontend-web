'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { usePassport } from "@/hooks/usePassport";
import { auth, handleError, log } from "@/lib/utils";
import theWalletPassportService from "@/services/PassportService";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LogoLoading } from "@/components/LogoLoading";
import { formatEther } from "viem";
import { InviteInfoData, InviteStatus } from "../util";
import api from "@/lib/api";
import keyManagementService from "@/services/KeyManagementService";

export default function Page() {
  const params = useSearchParams();
  const router = useRouter();
  const t = useTranslations('/')

  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(false)

  const [inviteInfo, setInviteInfo] = useState<InviteInfoData>();
  const [inviteStatus, setInviteStatus] = useState<InviteStatus>('PENDING');
  const [otp, setOtp] = useState<string>('')

  const { passport } = usePassport(
    process.env.NEXT_PUBLIC_SCOPE_ID!,
  );

  useEffect(() => {
    init()
  }, [params])

  useEffect(() => {
    if (!inviteInfo) {
      return
    }
    setInviteStatus(inviteInfo.status)
  }, [inviteInfo])

  const init = async () => {
    // web3auth sdk need to be initialized
    await keyManagementService.init()

    const inviteInfoId = params?.get('inviteInfoId')
    const otp = params?.get('otp')

    if (inviteInfoId && otp) {
      setOtp(otp)
      initInviteStatus(inviteInfoId)
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
        } else {
          // kkktodo
          // // the user doesn't bind the address, but they have a keymanagement account
          // const authenticated = await authenticate(info.toEmail, false)
          // if (authenticated) {
          //   // update current inviteInfo
          //   await updateInviteInfo(info.id, {
          //     status: 'REGISTERED',
          //     to: auth.all().address,
          //   })
          //   initInviteInfo(inviteInfoId)
          // } else {
          //   // user doesn't have a passport account
          // }
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
      return 'registering...';
    } else if (authenticating) {
      return 'authenticating...';
    }
    return 'Click To Sign Up'
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

  async function register() {
    const registerUsername = inviteInfo?.toEmail
    if (!registerUsername) {
      toast.error('username is not exited.')
      return
    }

    try {
      setRegistering(true);

      // verify otp and get idToken
      const idToken = await verifyOtp(registerUsername, otp)

      // sign up with keyManagementService
      await keyManagementService.signUp({
        username: registerUsername,
        idToken: idToken,
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
      console.error("Error registering:", error);
      toast.error((error as any).message)
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

  async function authenticate(authUsername: string, toastError=true) {
    try {
      // verify otp and get idToken
      // const idToken = await verifyOtp(authUsername, otp)
      const { idToken } = auth.all()

      await keyManagementService.signIn({
        authUsername,
        idToken,
      })

      return true
    } catch (error: any) {
      if (toastError) {
        toast.error(error.message)
      }
      return false
    }
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
    <div className="h-screen bg-cool-frosted-aqua-80 bg-opacity-20 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6 max-w-md w-full">
        <div className="flex items-center mb-8">
          <img src="/logo-alone.png" className="w-[32px] mr-2" alt="logo" />
          <p className="font-bold">Vast Wallet</p>
        </div>

        {
          loading ? (
            <LogoLoading type={'breathe'} />
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
                            <p className="text-primary/80">This is your username for Vast Wallet</p>
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
                            onClick={() => router.push('/home')}
                          >
                            Go To Home
                          </Button>
                        </>
                      )
                    }
                  </>
                ) : (
                  <LogoLoading type={'breathe'} />
                )
              }
            </>
          )
        }

      </div>
    </div>
  );
}

