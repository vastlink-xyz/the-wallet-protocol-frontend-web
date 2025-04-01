import { useEffect, useState } from "react";
import axios from "axios";
import { auth, getAddressByTokenType, handleError, log } from "@/lib/utils";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LogoLoading } from "@/components/LogoLoading";
import { formatEther } from "viem";
import { InviteInfoData, InviteStatus } from "../util";
import api from "@/lib/api";
import { Loading } from "@/components/Loading";
import { useUserInfo } from "@/hooks/user/useUserInfo";
import { useFireblocksHooks } from "./useFireblocksHooks";

// Temporary Spinner component
const SpinnerComponent = () => (
  <div className="animate-spin h-8 w-8 border-4 border-gray-300 rounded-full border-t-yellow-400"></div>
);

export default function Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const inviteParams = location.state?.inviteParams

  const { data: userInfo } = useUserInfo()
  
  // Using useFireblocksHooks at the component level
  const { 
    registerFireblocks, 
    loading: fireblockLoading, 
    ethAddress,
    addEthAsset
  } = useFireblocksHooks({
    onAddressGenerated: async (address: string) => {
      try {
        // Update invite info if it exists
        if (inviteInfo && inviteInfo.id) {
          await updateInviteInfo(inviteInfo.id, {
            status: 'REGISTERED',
            to: address,
          });
          // Refresh invite info
          await initInviteInfo(inviteInfo.id);
          toast.success("Wallet created successfully!");
        }
      } catch (error) {
        console.error("Failed to update invite info:", error);
        toast.error("Failed to update invite status");
      }
    },
    onError: (error: any) => {
      console.error("Fireblocks registration failed:", error);
      toast.error("Failed to create wallet");
    }
  });

  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(false)

  const [inviteInfo, setInviteInfo] = useState<InviteInfoData>();
  const [inviteStatus, setInviteStatus] = useState<InviteStatus>('PENDING');

  useEffect(() => {
    log('inviteParams', inviteParams)
    init()
  }, [inviteParams, userInfo])

  useEffect(() => {
    if (!inviteInfo) {
      return
    }
    setInviteStatus(inviteInfo.status)
  }, [inviteInfo])
  
  // Check if we need to register Fireblocks when user info and invite info are loaded
  useEffect(() => {
    if (userInfo && inviteInfo && 
        userInfo.email === inviteInfo.toEmail && 
        inviteInfo.status === 'PENDING' && 
        !userInfo.chainAddresses && 
        !ethAddress) {
      registerFireblocks();
    }
  }, [userInfo, inviteInfo, ethAddress]);

  const init = async () => {
    if (!userInfo) {
      return
    }

    const inviteInfoId = inviteParams?.inviteInfoId
    if (inviteInfoId) {
      initInviteStatus(inviteInfoId)
    } else {
      toast.error('inviteInfoId is not existed.')
    }
  }
  
  const initInviteStatus = async (inviteInfoId: string) => {
    try {
      setLoading(true)
      const info = await initInviteInfo(inviteInfoId)
      // No need to handle Fireblocks registration here, it's moved to the useEffect at the component level
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

  // Render loading state
  const renderLoading = () => {
    return <Loading />;
  };

  // Render Fireblocks initialization state
  const renderFireblocksLoading = () => {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Setting up your wallet...</h2>
        <p className="mb-4">This may take a few moments. Please don't close this page.</p>
        <SpinnerComponent />
      </div>
    );
  };

  // Render registered state
  const renderRegistered = () => {
    if (!inviteInfo) return null;
    
    return (
      <div>
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
      </div>
    );
  };

  // Render waiting state
  const renderWaiting = () => {
    return (
      <div>
        <p className="mb-4">Email sent successfully! Please wait for the inviter to complete the transfer.</p>
        <p className="mb-4">You will receive an email notification once the transfer is complete.</p>
        <Button
          className="w-full"
          onClick={() => navigate('/dashboard')}
        >
          Go To Dashboard
        </Button>
      </div>
    );
  };

  // Render invite information
  const renderInviteInfo = () => {
    if (!inviteInfo) {
      return renderLoading();
    }

    switch (inviteStatus) {
      case 'REGISTERED':
        return renderRegistered();
      case 'WAITING':
        return renderWaiting();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-custom-main flex items-center justify-center">
      <div className="bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full">
        <div className="flex items-center mb-8">
          <img src="/imgs/logos/logo.svg" className="w-[32px] mr-2" alt="logo" />
          <p className="font-bold">Vastlink</p>
        </div>

        {loading ? renderLoading() : 
         fireblockLoading ? renderFireblocksLoading() : 
         renderInviteInfo()}
      </div>
    </div>
  );
}

