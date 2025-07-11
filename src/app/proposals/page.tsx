"use client";

import { useState, useMemo, useEffect } from "react";
import { useProposals } from "@/hooks/useProposals";
import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { Proposal } from "@/app/wallet/[walletId]/details/proposals/components/Proposal";
import { IRelayPKP } from "@lit-protocol/types";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod";
import { getProviderByAuthMethodType, getSessionSigsByPkp, litNodeClient } from "@/lib/lit";
import { LogoLoading } from "@/components/LogoLoading";
import { cn, log } from "@/lib/utils";
import { toast } from "react-toastify";
import { useAuthExpiration } from "@/hooks/useAuthExpiration";
import { useNotifications } from "@/hooks/useNotifications";
import { signProposal } from "@/app/wallet/[walletId]/details/proposals/utils/sign-proposal";
import { executeTransactionProposal, executeWalletSettingsProposal } from "@/app/wallet/[walletId]/details/proposals/utils/execute-proposal";
import { broadcastTransactionByTokenType } from "@/lib/web3/transaction";
import { SUPPORTED_TOKENS_INFO } from "@/lib/web3/token";
import { sendProposalExecutedNotification } from "@/lib/notification/proposal-executed-notification";
import { MFAOtpDialog } from "@/components/Transaction/MFAOtpDialog";
import { useSearchParams } from "next/navigation";
import { useRef, Suspense } from "react";

type ProposalStatus = "pending" | "completed" | "canceled";

function ProposalsList({ status }: { status: ProposalStatus }) {
  // Get URL search params for proposal targeting
  const searchParams = useSearchParams();
  const targetProposalId = searchParams.get('proposalId');
  
  // Ref for proposal scrolling
  const proposalRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Track if initial scroll has been performed
  const hasScrolledRef = useRef(false);
  
  // User PKP state
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  // Loading states for operations
  const [signingStates, setSigningStates] = useState<Record<string, boolean>>({});
  const [executingStates, setExecutingStates] = useState<Record<string, boolean>>({});
  const [cancelingStates, setCancelingStates] = useState<Record<string, boolean>>({});
  const [isDisabled, setIsDisabled] = useState(false);

  // MFA related states
  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null);
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);

  // Query client for cache invalidation
  const queryClient = useQueryClient();
  
  // Auth and notifications hooks
  const { handleExpiredAuth, verifyAuthOrRedirect } = useAuthExpiration();
  const { refreshNotifications } = useNotifications({ 
    enabled: false // We'll call it manually
  });

  // Fetch user PKP data
  useEffect(() => {
    async function fetchUserData() {
      try {
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) {
          setIsLoadingUser(false);
          return;
        }

        const provider = getProviderByAuthMethodType(authMethod.authMethodType);
        const authMethodIdValue = await provider.getAuthMethodId(authMethod);
        setAuthMethodId(authMethodIdValue);

        const userResponse = await fetch(`/api/user?authMethodId=${authMethodIdValue}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();
          if (userData.litActionPkp) {
            setUserPkp(userData.litActionPkp);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoadingUser(false);
      }
    }

    fetchUserData();
  }, []);

  // Fetch user phone number separately
  useEffect(() => {
    async function fetchUserPhone() {
      try {
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) return;

        const phoneResponse = await fetch('/api/mfa/get-user-phone', {
          headers: {
            'Authorization': `Bearer ${authMethod.accessToken}`
          }
        });

        if (phoneResponse.ok) {
          const phoneData = await phoneResponse.json();
          const phones = phoneData.phones || [];
          
          if (phones.length > 0) {
            setUserPhone(phones[0].phone_number);
          }
        }
      } catch (error) {
        console.error('Error fetching user phone:', error);
      }
    }

    fetchUserPhone();
  }, []);

  // Use new proposals API with user address and status filtering
  const { data: proposals = [], isLoading: isLoadingProposals, refetch: refetchProposals } = useProposals(undefined, { 
    status, 
    userAddress: userPkp?.ethAddress 
  });

  // Fetch wallets using user address
  const { data: wallets = [], isLoading: isLoadingWallets } = useQuery<MultisigWallet[]>({
    queryKey: ['wallets', userPkp?.ethAddress],
    queryFn: async () => {
      if (!userPkp?.ethAddress) return [];
      const { data } = await axios.get(`/api/multisig?address=${userPkp.ethAddress}`);
      return data.data || [];
    },
    enabled: !!userPkp?.ethAddress,
  });

  // Create a map of walletId to wallet for quick lookup
  const walletMap = useMemo(() => {
    const map = new Map<string, MultisigWallet>();
    wallets.forEach(wallet => {
      map.set(wallet.id, wallet);
    });
    return map;
  }, [wallets]);

  // Refresh proposals function
  const refreshProposals = async () => {
    // Only refresh the current status query - more efficient and precise
    await queryClient.invalidateQueries({ 
      queryKey: ['proposals', undefined, status, userPkp?.ethAddress] 
    });
    const result = await refetchProposals();
    return result.data || [];
  };

  // Scroll to target proposal when URL parameter is provided (only on initial load)
  useEffect(() => {
    if (!targetProposalId || isLoadingProposals || proposals.length === 0 || hasScrolledRef.current) return;
    
    // Check if target proposal exists in current proposals
    const targetProposal = proposals.find(p => p.id === targetProposalId);
    if (!targetProposal) {
      console.log('Target proposal not found in proposals:', targetProposalId);
      return;
    }
    
    // Wait for refs to be set and DOM to be updated
    const checkAndScroll = () => {
      const targetElement = proposalRefs.current[targetProposalId];
      
      if (targetElement) {
        console.log('Scrolling to proposal:', targetProposalId);
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        // Add a highlight effect
        targetElement.style.boxShadow = '0 0 0 2px #3b82f6';
        targetElement.style.borderRadius = '8px';
        // Remove highlight after 3 seconds
        setTimeout(() => {
          targetElement.style.boxShadow = '';
          targetElement.style.borderRadius = '';
        }, 3000);
        
        // Mark that we've performed the initial scroll
        hasScrolledRef.current = true;
      } else {
        // If element not found, retry after a short delay
        console.log('Retrying scroll, element not ready yet');
        setTimeout(checkAndScroll, 100);
      }
    };
    
    // Start checking after a short delay to ensure DOM is updated
    setTimeout(checkAndScroll, 100);
  }, [targetProposalId, proposals, isLoadingProposals]);

  // Helper function to execute wallet settings proposal
  const handleExecuteWalletSettingsProposal = async (proposal: MessageProposal, settingsData: any, sessionSigs: any) => {
    if (!userPkp || !authMethodId) return;
    
    const wallet = walletMap.get(proposal.walletId);
    if (!wallet) return;

    const authMethod = getAuthMethodFromStorage();
    if (!authMethod) return;

    try {
      const response = await executeWalletSettingsProposal({
        proposal,
        sessionSigs,
        wallet,
        walletPkp: wallet.pkp,
        authMethod,
        authMethodId,
      });

      if (response.data.success) {
        // Refresh proposals and notifications
        await refreshProposals();
        if (authMethodId && userPkp?.ethAddress) {
          refreshNotifications(authMethodId, userPkp.ethAddress);
        }
        toast.success('Wallet settings updated successfully');
      }
    } catch (error) {
      console.error('Error executing wallet settings proposal:', error);
      throw error;
    }
  };

  // Helper function to execute transaction proposal
  const handleExecuteTransactionProposal = async (proposal: MessageProposal, sessionSigs: any, otpCode: string = '') => {
    if (!userPkp || !authMethodId) return;
    
    const wallet = walletMap.get(proposal.walletId);
    if (!wallet) return;

    const authMethod = getAuthMethodFromStorage();
    if (!authMethod) return;

    const {
      response,
      txData,
      tokenType,
    } = await executeTransactionProposal({
      proposal,
      sessionSigs,
      wallet,
      walletPkp: wallet.pkp,
      authMethod,
      authMethodId,
      otpCode,
      mfaMethodId,
    });

    // Handle the response similar to the original page
    const result = typeof response.response === 'string' 
      ? JSON.parse(response.response) 
      : response.response;

    log('Parsed response object:', result);
    if (result.isValid) {
      if (result.requireMFA) {
        setCurrentProposal(proposal);
        setShowMfaDialog(true);
        toast.warning('Daily limit exceeded');
        return;
      } else if (result.error) {
        toast.error(result.error);
        return;
      }

      // Handle successful execution (transaction broadcasting, etc.)
      let txHash = null;
      if (result.status === 'success') {
        try {
          let sig: any;
          if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
            sig = JSON.parse(result.sig);
          } else {
            sig = (response as any).signatures.btcSignatures;
          }
          
          const txReceipt = await broadcastTransactionByTokenType({
            tokenType,
            options: {
              ...txData,
              sig,
              publicKey: wallet.pkp.publicKey,
            },
          });
          txHash = txReceipt;
          log('txReceipt', txReceipt);
        } catch (e: any) {
          log('error', e);
          if (e.message.includes('insufficient funds for intrinsic transaction cost')) {
            toast.error('Insufficient funds for intrinsic transaction cost');
            return;
          }
          toast.error(`${e.message || 'Transaction failed'}`);
          return;
        }
      }
      
      // Update proposal status
      await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        status: 'completed',
        txHash: txHash
      });
      
      toast.success(`Transaction completed`);
      
      // Send proposal executed notification
      try {
        await sendProposalExecutedNotification({
          proposalType: 'transaction',
          proposal,
          wallet,
          txHash,
        });
      } catch (error) {
        console.error('Error sending proposal executed notifications:', error);
      }

      // Refresh proposals list
      await refreshProposals();
      // Refresh notifications
      refreshNotifications(authMethodId, userPkp.ethAddress);
    }
  };

  // Sign proposal handler
  const handleSignProposal = async (proposal: MessageProposal) => {
    const authMethod = getAuthMethodFromStorage();
    if (!userPkp || !authMethodId || !authMethod) {
      toast.error('User authentication required');
      return;
    }

    const wallet = walletMap.get(proposal.walletId);
    if (!wallet) {
      toast.error('Wallet not found');
      return;
    }

    // Verify auth before proceeding
    const isAuthValid = await verifyAuthOrRedirect();
    if (!isAuthValid) {
      return;
    }

    try {
      setSigningStates(prev => ({ ...prev, [proposal.id]: true }));

      // Sign the proposal
      const response = await signProposal({
        proposal,
        wallet,
        userPkp,
        authMethod,
        authMethodId,
      });

      if (response.data.success) {
        // Refresh data
        const newProposals = await refreshProposals();
        refreshNotifications(authMethodId, userPkp.ethAddress);

        // Find the updated proposal
        const updatedProposal = newProposals.find((p: MessageProposal) => p.id === proposal.id)
        
        // Check if signatures have reached the threshold
        if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
          // Automatically execute the multisig action once threshold is reached
          await executeMultisigLitAction(updatedProposal)
        }
      }
    } catch (error: any) {
      console.error('Failed to sign proposal:', error)
      
      // Check for Google JWT expired error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(error?.message || 'Failed to sign proposal');
      }
    } finally {
      setSigningStates(prev => ({ ...prev, [proposal.id]: false }));
    }
  };

  // Execute proposal handler
  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    if (!userPkp || !authMethodId) {
      toast.error('User authentication required');
      return;
    }

    const wallet = walletMap.get(proposal.walletId);
    if (!wallet) {
      toast.error('Wallet not found');
      return;
    }

    try {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: true }));
      setIsDisabled(true);

      // Ensure lit node client is connected
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      const authMethod = getAuthMethodFromStorage();
      if (!authMethod) {
        toast.error('Authentication method not found');
        return;
      }

      // Get session signatures
      const sessionSigs = await getSessionSigsByPkp({
        authMethod,
        pkp: userPkp,
        refreshStytchAccessToken: true,
      });

      // handle wallet settings proposal
      if (proposal.type === 'walletSettings' && proposal.settingsData) {
        // Call the component's handleExecuteWalletSettingsProposal function
        await handleExecuteWalletSettingsProposal(proposal, proposal.settingsData, sessionSigs);
      } else {
        // Handle transaction proposal - call the component's handleExecuteTransactionProposal
        await handleExecuteTransactionProposal(proposal, sessionSigs);
      }
    } catch (error: any) {
      console.error('Failed to execute proposal:', error);
      if (error?.message?.includes('JWT has expired') || 
          error?.message?.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(error?.message || 'Failed to execute proposal');
      }
    } finally {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
      setIsDisabled(false);
    }
  };

  // Cancel proposal handler
  const handleCancelProposal = async (proposal: MessageProposal) => {
    if (!userPkp || !authMethodId) {
      toast.error('User authentication required');
      return;
    }

    try {
      setCancelingStates(prev => ({ ...prev, [proposal.id]: true }));

      const response = await axios.delete('/api/multisig/messages', {
        params: {
          walletId: proposal.walletId,
          proposalId: proposal.id
        },
        data: {
          canceledBy: {
            authMethodId: authMethodId,
            ethAddress: userPkp.ethAddress
          }
        }
      });

      if (response.data.success) {
        // Refresh data
        await refreshProposals();
        if (authMethodId && userPkp?.ethAddress) {
          refreshNotifications(authMethodId, userPkp.ethAddress);
        }

        toast.success('Proposal canceled successfully');
      }

    } catch (error: any) {
      console.error('Failed to cancel proposal:', error);
      if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else if (error.response?.status === 403) {
        toast.error('You can only cancel proposals you created');
      } else if (error.response?.status === 404) {
        toast.error('Proposal not found');
      } else {
        toast.error('Failed to cancel proposal');
      }
    } finally {
      setCancelingStates(prev => ({ ...prev, [proposal.id]: false }));
    }
  };

  // MFA handlers
  const handleSendOtp = async () => {
    if (!userPhone) {
      throw new Error('Session or phone number not found');
    }

    const authMethod = getAuthMethodFromStorage();
    if (!authMethod) {
      throw new Error('Authentication method not found');
    }

    log('Sending OTP to', userPhone);
    const response = await fetch('/api/mfa/whatsapp/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authMethod.accessToken}`,
      },
      body: JSON.stringify({ phone_number: userPhone }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      log('Error response from API', errorData);
      throw new Error(errorData.error || `Failed to send OTP: ${response.status}`);
    }
    
    const data = await response.json();
    setMfaMethodId(data.method_id);
    log('OTP sent, method_id:', data.method_id);
  };

  const handleOtpVerify = async (otp: string) => {
    if (!userPkp || !currentProposal) {
      throw new Error('Missing required information for OTP verification');
    }

    const authMethod = getAuthMethodFromStorage();
    if (!authMethod) {
      throw new Error('Authentication method not found');
    }

    // Close the dialog
    setShowMfaDialog(false);

    try {
      // Set executing state for this proposal during OTP verification
      setExecutingStates(prev => ({ ...prev, [currentProposal.id]: true }));
      setIsDisabled(true);
      
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true});
      log('otp in handleOtpVerified', otp);
      await handleExecuteTransactionProposal(currentProposal, sessionSigs, otp);
    } catch (error) {
      console.error('Error executing transaction:', error);
    } finally {
      // Clear executing state
      if (currentProposal) {
        setExecutingStates(prev => ({ ...prev, [currentProposal.id]: false }));
      }
      setIsDisabled(false);
    }
  };

  if (isLoadingProposals || isLoadingWallets || isLoadingUser) {
    return <LogoLoading />;
  }

  if (proposals.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        No {status} proposals found.
      </div>
    );
  }

  // If userPkp is not available, show error
  if (!userPkp) {
    return (
      <div className="text-center py-8 text-red-500">
        Unable to load user data. Please ensure you are logged in.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {proposals.map((proposal) => {
          const wallet = walletMap.get(proposal.walletId);
          if (!wallet) {
            return (
              <div key={proposal.id} className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-600">Wallet not found for proposal {proposal.id}</p>
              </div>
            );
          }

          return (
            <div
              key={proposal.id}
              ref={(el) => {
                proposalRefs.current[proposal.id] = el;
              }}
              className="transition-all duration-300"
            >
              <Proposal
                proposal={proposal}
                selectedWallet={wallet}
                handleSignProposal={handleSignProposal}
                executeMultisigLitAction={executeMultisigLitAction}
                handleCancelProposal={handleCancelProposal}
                userPkp={userPkp}
                authMethodId={authMethodId}
                isSigningProposal={signingStates[proposal.id] || false}
                isLoading={executingStates[proposal.id] || false}
                isDisabled={isDisabled}
                isCancelingProposal={cancelingStates[proposal.id] || false}
              />
            </div>
          );
        })}
      </div>

      <MFAOtpDialog
        isOpen={showMfaDialog}
        onClose={() => setShowMfaDialog(false)}
        onOtpVerify={handleOtpVerify}
        sendOtp={handleSendOtp}
        identifier={userPhone}
        title="Verify Transaction"
        description="A verification code will be sent to your phone via WhatsApp"
      />
    </>
  );
}

export default function ProposalsPage() {
  const [activeTab, setActiveTab] = useState<ProposalStatus>("pending");

  const tabs = [
    { id: "pending" as ProposalStatus, label: "Pending" },
    { id: "completed" as ProposalStatus, label: "Completed" },
    { id: "canceled" as ProposalStatus, label: "Cancelled" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Proposals</h1>
      
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'w-[110px] h-[36px] px-4 py-2.5 rounded-full font-medium transition-colors cursor-pointer',
              'flex justify-center items-center',
              activeTab === tab.id ? 'bg-black text-white' : 'text-black',
            )}
          >
            {tab.label}
          </div>
        ))}
      </div>
      
      {/* Tab Content */}
      <div>
        <Suspense fallback={null}>
          <ProposalsList status={activeTab} />
        </Suspense>
      </div>
    </div>
  );
}
