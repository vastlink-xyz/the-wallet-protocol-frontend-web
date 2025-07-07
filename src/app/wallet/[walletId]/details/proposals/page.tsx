"use client";

import { MessageProposal } from "@/app/api/multisig/storage";
import { useState, useEffect, useRef } from "react";
import { Proposal } from "./components/Proposal";
import { fetchProposals, fetchUpdatedWallet, getTransactionDetails, sendNotificationsToNewSigners } from "./utils/proposal";
import { useWallet } from "../context/WalletContext";
import { useParams, useSearchParams } from "next/navigation";
import { getMultisigTransactionIpfsId, getPersonalSignIpfsId, getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env";
import { getSessionSigsByPkp, litNodeClient } from "@/lib/lit";
import { log } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { sendProposalExecutedNotification } from "@/lib/notification/proposal-executed-notification";
import { useAuthExpiration } from "@/hooks/useAuthExpiration";
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from "@/lib/web3/transaction";
import { MFAOtpDialog } from "@/components/Transaction/MFAOtpDialog";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { LogoLoading } from "@/components/LogoLoading";
import { signProposal } from "./utils/sign-proposal";
import { executeTransactionProposal, executeWalletSettingsProposal } from "./utils/execute-proposal";
import { useNotifications } from "@/hooks/useNotifications";
import { useProposals } from "@/hooks/useProposals";
import { useQueryClient } from "@tanstack/react-query";

export default function ProposalsPage() {
  // Get walletId from params
  const params = useParams();
  const walletId = params.walletId as string;
  
  // Get URL search params for proposal targeting
  const searchParams = useSearchParams();
  const targetProposalId = searchParams.get('proposalId');
  
  // Ref for proposal scrolling
  const proposalRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Track if initial scroll has been performed
  const hasScrolledRef = useRef(false);
  
  // Get wallet data from context
  const { wallet, isLoading: isWalletLoading, authMethod, walletPkp, userPkp, authMethodId, userPhone } = useWallet();
  
  // Use React Query for proposals
  const { data: proposals = [], isLoading: isLoadingProposals, refetch: refetchProposals } = useProposals(walletId);
  
  // Query client for cache invalidation
  const queryClient = useQueryClient();

  // Loading states for different operations
  const [signingStates, setSigningStates] = useState<Record<string, boolean>>({});
  const [executingStates, setExecutingStates] = useState<Record<string, boolean>>({});
  const [isDisabled, setIsDisabled] = useState(false);
  
  const { handleExpiredAuth, verifyAuthOrRedirect } = useAuthExpiration();

  // Notifications hook for UI refresh
  const { refreshProposalUI } = useNotifications({
    enabled: false, // only need the refresh function
  });

  // mfa
  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null)
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);


  // Helper function to invalidate and refetch proposals
  const refreshProposals = async () => {
    await queryClient.invalidateQueries({ queryKey: ['proposals', walletId] });
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

  // Function to execute wallet settings change proposal
  const handleExecuteWalletSettingsProposal = async (proposal: MessageProposal, settingsData: any, sessionSigs: any) => {
    if (!wallet || !walletPkp || !authMethod || !authMethodId) return;
    log('selected multisig pkp', walletPkp.publicKey)

    try {
      const response = await executeWalletSettingsProposal({
        proposal,
        sessionSigs,
        wallet,
        walletPkp,
        authMethod,
        authMethodId,
      })

      if (response.data.success) {
        // Refresh proposals using React Query
        const newProposals = await refreshProposals();

        // Invalidate proposal related data to update notification and red dots
        refreshProposalUI(authMethodId, userPkp?.ethAddress);

        toast.success('Wallet settings updated successfully')
      }
    } catch (error) {
      log('error', error);
      throw error
    }
  }

  const handleExecuteTransactionProposal = async (proposal: MessageProposal, sessionSigs: any, otpCode: string = '') => {
    if (!wallet || !walletPkp || !authMethod || !authMethodId) {
      return
    }

    const {
      response,
      txData,
      tokenType,
    } = await executeTransactionProposal({
      proposal,
      sessionSigs,
      wallet,
      walletPkp,
      authMethod,
      authMethodId,
      otpCode,
      mfaMethodId,
    })

    // Update the proposal status to completed if verification was successful
    const result = typeof response.response === 'string' 
      ? JSON.parse(response.response) 
      : response.response;
    log('Parsed response object:', result);

    if (result.isValid) {
      if (result.requireMFA) {
        setCurrentProposal(proposal)
        setShowMfaDialog(true)
        toast.warning('Daily limit exceeded')
        return
      } else if (result.error) {
        toast.error(result.error)
        return
      }
      
      let txHash = null
      // Try to extract transaction hash from different response formats
      if (result.status === 'success') {
        try {
          let sig: any
          if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
            sig = JSON.parse(result.sig)
          } else {
            sig = response.signatures.btcSignatures
          }
          const txReceipt = await broadcastTransactionByTokenType({
            tokenType,
            options: {
              ...txData,
              sig,
              publicKey: walletPkp.publicKey,
            },
          })
          txHash = txReceipt
          log('txReceipt', txReceipt)          
        } catch (e: any) {
          log('error', e)
          if (e.message.includes('insufficient funds for intrinsic transaction cost')) {
            toast.error('Insufficient funds for intrinsic transaction cost')
            return
          }
          toast.error(`${e.message || 'Transaction failed'}`)
          return
        }
      }
      
      await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        status: 'completed',
        txHash: txHash
      })
      toast.success(`Transaction completed`);

      // Send proposal executed notification to all approvers
      if (wallet) {
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
      }

      // Refresh proposals using React Query
      const newProposals = await refreshProposals();

      // Refresh proposal UI to update notification and red dots
      refreshProposalUI(authMethodId, userPkp?.ethAddress);
    }
  }

  // Function to execute a Lit Action using the multisig PKP
  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    if (!walletPkp || !wallet || !authMethod || !userPkp) {
      console.error('Missing multisig wallet information or auth method')
      return
    }
    
    try {
      // Set loading state for this specific proposal execution
      setExecutingStates(prev => ({ ...prev, [proposal.id]: true }));
      // make sure the user cannot sign other proposals
      setIsDisabled(true);
      
      // Connect to Lit Network
      if (!litNodeClient.ready) {
        await litNodeClient.connect()
      }

      log('selected mulsig pkp', walletPkp)
      
      // Get session signatures for the current user
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true})
      
      // Check if this is a wallet settings change proposal
      const isWalletSettingsProposal = proposal.type === 'walletSettings';
      const settingsData = proposal.settingsData;
      
      if (isWalletSettingsProposal && settingsData) {
        // Handle wallet settings change
        await handleExecuteWalletSettingsProposal(proposal, settingsData, sessionSigs);
      } else {
        // Regular transaction execution
        await handleExecuteTransactionProposal(proposal, sessionSigs)
      }
    } catch (error: any) {
      // Check for Google JWT expired error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(`Error executing operation: ${errorMessage}`);
      }
    } finally {
      // Clear loading state for this proposal
      setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
      // make sure the user can sign other proposals
      setIsDisabled(false);
    }
  }

  const handleSignProposal = async (proposal: MessageProposal) => {
    if (!walletPkp || !authMethod || !wallet || !userPkp || !authMethodId) {
      console.error('Missing required information for signing')
      return
    }
    
    // Verify JWT token before proceeding with signing
    const isAuthValid = await verifyAuthOrRedirect();
    if (!isAuthValid) {
      return; // verifyAuthOrRedirect will handle the redirect and toast message
    }
    
    try {
      // Set loading state for this specific proposal signing
      setSigningStates(prev => ({ ...prev, [proposal.id]: true }));

      const response = await signProposal({
        proposal,
        wallet,
        userPkp,
        authMethod,
        authMethodId,
      })

      if (response.data.success) {
        // Refresh proposals using React Query
        const newProposals = await refreshProposals();
        
        // Invalidate proposal related data to update notification and red dots
        refreshProposalUI(authMethodId, userPkp?.ethAddress);
        
        // Find the updated proposal
        const updatedProposal = newProposals.find((p: MessageProposal) => p.id === proposal.id)
        
        // Check if signatures have reached the threshold
        if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
          console.log('All required signatures collected for proposal:', proposal.id)
          log('Multisig proposal complete:', {
            proposalId: proposal.id,
            message: proposal.message,
            signatures: updatedProposal.signatures.length,
            requiredSignatures: wallet.threshold,
            status: 'Complete'
          })
          
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
        toast.error(`Error signing proposal: ${errorMessage}`);
      }
    } finally {
      // Clear loading state for this proposal
      setSigningStates(prev => ({ ...prev, [proposal.id]: false }));
    }
  }

  const handleSendOtp = async () => {
    if (!userPhone || !authMethod) {
      throw new Error('Session or phone number not found');
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
    if (!authMethod || !userPkp || !currentProposal) {
      throw new Error('Missing required information for OTP verification');
    }

    // Close the dialog
    setShowMfaDialog(false);

    try {
      // Set executing state for this proposal during OTP verification
      setExecutingStates(prev => ({ ...prev, [currentProposal.id]: true }));
      // make sure the user cannot sign other proposals
      setIsDisabled(true);
      
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true})
      log('otp in handleOtpVerified', otp)
      await handleExecuteTransactionProposal(currentProposal, sessionSigs, otp)
    } catch (error) {
      console.error('Error executing transaction:', error)
    } finally {
      // Clear executing state
      if (currentProposal) {
        setExecutingStates(prev => ({ ...prev, [currentProposal.id]: false }));
      }
      // make sure the user can sign other proposals
      setIsDisabled(false);
    }
  }

  // Show loading state if wallet or proposals are still loading
  if (isWalletLoading || isLoadingProposals) {
    return <LogoLoading />;
  }

  // If wallet is not available, show an error
  if (!wallet) {
    return <div>Wallet not found</div>;
  }

  return (
    <>
      <div className="mt-4 space-y-4">
        {proposals.length === 0 ? (
          <p>No proposals found for this wallet.</p>
        ) : (
          proposals.map((proposal) => {
            if (!userPkp || !wallet) return null
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
                  userPkp={userPkp}
                  isSigningProposal={signingStates[proposal.id] || false}
                  isLoading={executingStates[proposal.id] || false}
                  isDisabled={isDisabled}
                />
              </div>
            )
          })
        )}
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