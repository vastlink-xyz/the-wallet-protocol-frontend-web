'use client'

import { useEffect, useRef, useState } from "react";

import { usePassport } from "@/hooks/usePassport";
import { auth, log } from "@/lib/utils";
import theWalletPassportService from "@/services/PassportService";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LogoLoading } from "@/components/LogoLoading";
import { Address, formatEther } from "viem";
import { InviteInfoData, InviteStatus } from "../util";
import { useTransaction } from "@/components/VastWalletConnect/useTransaction";
import { Token, TokenFactory } from "@/services/TokenService";
import { TokenType } from "@/types/tokens";
import { TransactionType } from "@/types/transaction";
import api from "@/lib/api";
import keyManagementService from "@/services/KeyManagementService";

export default function Page() {
  const params = useSearchParams();
  const router = useRouter();
  const { passport } = usePassport(
    process.env.NEXT_PUBLIC_SCOPE_ID!,
  );
  const { signTransaction, waitForTransactionExection } = useTransaction()
  
  const [inviteInfo, setInviteInfo] = useState<InviteInfoData>();
  const [inviteStatus, setInviteStatus] = useState<InviteStatus>('PENDING');
  const [sending, setSending] = useState(false)
  
  const tokenRef = useRef<Token>()


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
    if (inviteInfoId) {
      initInviteInfo(inviteInfoId)
    }
  }

  const initInviteInfo = async (id: string) => {
    const response = await api.get(`/invite/invite-info/${id}`)
    if (response.data.success) {
      setInviteInfo(response.data.inviteInfo)
      const token = TokenFactory.getInstance().createToken(response.data.inviteInfo.token as TokenType)
      tokenRef.current = token
    }
  }

  // kkktodo
  async function authenticate(authUsername: string) {
    log('call authenticate', authUsername)
    // setAuthenticating(true);
    try {
      await passport.setupEncryption();
      const [authenticatedHeader, address] = await passport.authenticate({
        username: authUsername,
        userDisplayName: authUsername,
      })!;

      const encryptedUsername = `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`
      const aesKey = passport.aesKey;
      const desUsername = await theWalletPassportService.aesDecrypt(encryptedUsername, aesKey);

      // kkktodo
      // save authentication data locally so that don't have to reauthenticate every time refresh the page
      auth.saveAuthDataByKey('authenticated', true)
      auth.saveAuthDataByKey('aeskey', aesKey)
      auth.saveAuthDataByKey('authenticatedHeader', authenticatedHeader)
      auth.saveAuthDataByKey('address', address)
      auth.saveAuthDataByKey('desUsername', JSON.parse(desUsername))

      return true
    } catch (error: any) {
      toast.error(error.message)
      return false
    } finally {
      // setAuthenticating(false);
    }
  }

  const checkLoginedUser = () => {
    const { username, address } = auth.all()
    if (username) {
      return username === inviteInfo?.fromEmail
    } else if (!username || !address) {
      return false
    }
  }

  const handleConfirmTransfer = async () => {
    try {
      // // make sure that the user has been signed in correctly
      // let signinSuccessed = false
      // if (checkLoginedUser()) {
      //   signinSuccessed = true
      // } else {
      //   signinSuccessed = await authenticate(inviteInfo!.fromEmail)
      // }

      // if (!signinSuccessed) {
      //   toast.error('Signin error')
      //   return
      // }

      handleSignTransaction()
    } catch(error: any) {

    }
  }

  const handleSignTransaction = async () => {
    if (!inviteInfo) {
      return
    }

    try {
      setSending(true);
      const amt = formatEther(BigInt(inviteInfo.amount))

      let hash = ''
      const result = await signTransaction({
        to: inviteInfo.to as Address,
        amount: amt,
        token: inviteInfo?.token! as TokenType,
        data: '',
        transactionType: TransactionType.INVITE_TRANSFER,
      })

      if (result.needOtp) {
        // Transaction requires OTP verification
        // Wait for the backend to complete OTP verification and execute the transaction
        // This may take some time, the function will periodically check the transaction status
        hash = await waitForTransactionExection(result.transactionId)
      } else {
        hash = result.hash
      }

      await updateInviteInfo(inviteInfo.id, {
        status: 'COMPLETED',
      })
      initInviteInfo(inviteInfo.id)

      log('hash is', hash)
    } catch (error) {
      console.error('Error confirming transfer:', error);
      toast.error('Transfer failed');
    } finally {
      setSending(false);
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
    <div className="h-screen bg-cool-frosted-aqua-80 bg-opacity-20 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6 max-w-md w-full">
        <div className="flex items-center mb-8">
          <img src="/logo-alone.png" className="w-[32px] mr-2" alt="logo" />
          <p className="font-bold">Vast Wallet</p>
        </div>

        {
          inviteInfo ? (
            <>
              {
                inviteStatus === 'WAITING' && (
                  <div>
                    <h1 className="text-2xl mb-2">Confirm Crypto Transfer</h1>
                    <p className="text-primary/80 mb-4">You are about to send {formatEther(BigInt(inviteInfo.amount))} {inviteInfo.token} to {inviteInfo.toEmail}</p>
                    <p>From: {inviteInfo.fromEmail}</p>
                    <Button
                      className="w-full mt-4"
                      onClick={() => handleConfirmTransfer()}
                      disabled={sending}
                    >
                      {
                        sending ? (
                          <LogoLoading />
                        ) : (
                          'Confirm Transfer'
                        )
                      }
                    </Button>
                  </div>
                )
              }

              {
                inviteStatus === 'COMPLETED' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Transfer Completed!</h2>
                    <p className="text-primary/80">The transaction has been submitted to the network</p>
                    <Button
                      className="w-full mt-6"
                      onClick={() => router.push('/home')}
                    >
                      Return to Home
                    </Button>
                  </div>
                )
              }
            </>
          ) : (
            <LogoLoading type={'breathe'} />
          )
        }

      </div>
    </div>
  );
}

