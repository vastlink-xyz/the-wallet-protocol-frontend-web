import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleError, log } from "@/lib/utils";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LogoLoading } from "@/components/LogoLoading";
import { Address, formatEther } from "viem";
import { InviteInfoData, InviteStatus } from "../util";
import { useTransaction } from "@/components/VastWalletConnect/useTransaction";
import { theTokenListingService, Token } from "@/services/TokenListingService";
import { TokenType } from "@/types/tokens";
import { TransactionType } from "@/types/transaction";
import api from "@/lib/api";
import { Loading } from "@/components/Loading";
import { VerificationModal } from "@/components/VerificationModal";
import { otpService } from "@/services/OTPService";
import keyManagementService from "@/services/KeyManagementService";

export default function Page() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signTransaction, waitForTransactionExection } = useTransaction()
  
  const [inviteInfo, setInviteInfo] = useState<InviteInfoData>();
  const [inviteStatus, setInviteStatus] = useState<InviteStatus>('PENDING');
  const [sending, setSending] = useState(false)
  
  const tokenRef = useRef<Token>()
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [verificationTransactionId, setVerificationTransactionId] = useState<string | null>(null);

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
    const inviteInfoId = searchParams?.get('inviteInfoId')
    if (inviteInfoId) {
      initInviteInfo(inviteInfoId)
    }
  }

  const initInviteInfo = async (id: string) => {
    const response = await api.get(`/invite/invite-info/${id}`)
    if (response.data.success) {
      setInviteInfo(response.data.inviteInfo)
      const token = theTokenListingService.getToken(response.data.inviteInfo.token as TokenType)
      tokenRef.current = token
    }
  }

  const handleConfirmTransfer = async () => {
    try {
      handleSignTransaction()
    } catch(error: any) {

    }
  }

  const handleSignTransaction = async () => {
    if (!inviteInfo) {
      return;
    }

    try {
      setSending(true);
      const amt = formatEther(BigInt(inviteInfo.amount))

      let hash = ''
      const result = await signTransaction({
        to: inviteInfo.to as Address,
        amount: amt,
        token: inviteInfo.token! as TokenType,
        data: '',
        transactionType: TransactionType.INVITE_TRANSFER,
      })

      log('result', result)

      if (result?.needOtp) {
        if (otpService.getVerifyMethod() === 'email-by-sendgrid') {
          setVerificationTransactionId(result.transactionId);
          setVerificationOpen(true);
        }
        // Transaction requires OTP verification
        // Wait for the backend to complete OTP verification and execute the transaction
        // This may take some time, the function will periodically check the transaction status
        hash = await waitForTransactionExection(result.transactionId)
      } else {
        hash = result?.hash
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
  };

  const handleVerify = async (code: string) => {
    if (!verificationTransactionId) {
      toast.error('No transaction id');
      return;
    }

    try {
      setVerificationLoading(true);

      const { hash } = await keyManagementService.signTransactionWithOTP({
        transactionId: verificationTransactionId,
        otp: code,
      });

      if (hash) {
        setVerificationOpen(false);
      }
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setVerificationLoading(false);
    }
  };

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
                      onClick={() => navigate('/dashboard')}
                    >
                      Return to Dashboard
                    </Button>
                  </div>
                )
              }
            </>
          ) : (
            <Loading />
          )
        }

      </div>
      
      <VerificationModal
        isOpen={verificationOpen}
        onClose={() => setVerificationOpen(false)}
        loading={verificationLoading}
        onVerify={handleVerify}
        modalClassName="z-[10004]"
      />
    </div>
  );
}

