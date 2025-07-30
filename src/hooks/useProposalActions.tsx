import React, { useState } from "react";
import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { litNodeClient } from "@/lib/lit";
import { getMultiProviderSessionSigs } from "@/lib/lit/pkpManager";
import { signProposal } from "@/app/wallet/[walletId]/details/proposals/utils/sign-proposal";
import { executeTransactionProposal, executeWalletSettingsProposal } from "@/app/wallet/[walletId]/details/proposals/utils/execute-proposal";
import { broadcastTransactionByTokenType } from "@/lib/web3/transaction";
import { sendProposalExecutedNotification } from "@/lib/notification/proposal-executed-notification";
import { SUPPORTED_TOKENS_INFO } from "@/lib/web3/token";
import { toast } from "react-toastify";
import { useSecurityVerification } from "@/hooks/useSecurityVerification";
import { fetchProposals } from "./useProposals";
import { AuthProviderType } from "@/lib/lit/custom-auth";

export interface UseProposalActionsParams {
  walletMap: Map<string, MultisigWallet>;
  userPkp: any;
  accessToken: string;
  authMethodId: string | null;
  providerType: AuthProviderType;
  userEmail: string;
  userPhone: string | null;
  /** Refresh proposals list. Can be async or sync. */
  refreshProposals: () => any | Promise<any>;
  /** Refresh notifications. Can be async or sync. */
  refreshNotifications?: (authMethodId: string, ethAddress: string) => any | Promise<any>;
  /** Optionally invalidate proposal notifications. */
  invalidateProposalNotifications?: () => any | Promise<any>;
  t: any;
  handleExpiredAuth: () => void;
  verifyAuthOrRedirect: () => Promise<boolean>;
}

export interface UseProposalActionsReturn {
  handleSignProposal: (proposal: MessageProposal) => Promise<void>;
  handleSignProposalAndExecute: (proposal: MessageProposal) => Promise<void>;
  executeMultisigLitAction: (proposal: MessageProposal) => Promise<void>;
  handleCancelProposal: (proposal: MessageProposal) => Promise<void>;
  isSigningProposal: (id: string) => boolean;
  isExecuting: (id: string) => boolean;
  isDisabled: boolean;
  isCancelingProposal: (id: string) => boolean;
  PinDialog: React.ReactNode;
  MFADialog: React.ReactNode;
}

export function useProposalActions({
  walletMap,
  userPkp,
  accessToken,
  authMethodId,
  providerType,
  userEmail,
  userPhone,
  refreshProposals,
  refreshNotifications,
  invalidateProposalNotifications,
  t,
  handleExpiredAuth,
  verifyAuthOrRedirect,
}: UseProposalActionsParams): UseProposalActionsReturn {
  const [signingStates, setSigningStates] = useState<Record<string, boolean>>({});
  const [executingStates, setExecutingStates] = useState<Record<string, boolean>>({});
  const [cancelingStates, setCancelingStates] = useState<Record<string, boolean>>({});
  const [isDisabled, setIsDisabled] = useState(false);

  // Security verification for transaction proposals (PIN + MFA)
  const transactionSecurityVerification = useSecurityVerification({
    executeTransaction: async (params: any) => {
      const { proposal, sessionSigs, wallet, walletPkp, ...verificationParams } = params;
      return await executeTransactionProposalWithSecurity({
        proposal,
        sessionSigs,
        wallet,
        walletPkp,
        accessToken,
        authMethodId: authMethodId!,
        pinCode: verificationParams.pinCode || '',
        mfaType: verificationParams.mfaType || '',
        mfaCode: verificationParams.mfaCode || '',
        mfaMethodId: verificationParams.mfaMethodId || null,
      });
    },
  });

  // Security verification for wallet settings proposals (PIN only)
  const settingsSecurityVerification = useSecurityVerification({
    executeTransaction: async (params: any) => {
      const { proposal, sessionSigs, wallet, walletPkp, settingsData, ...verificationParams } = params;
      return await executeWalletSettingsProposalWithSecurity({
        proposal,
        sessionSigs,
        wallet,
        walletPkp,
        settingsData,
        accessToken,
        authMethodId: authMethodId!,
        pinCode: verificationParams.pinCode || '',
        mfaType: verificationParams.mfaType || '',
        mfaCode: verificationParams.mfaCode || '',
        mfaMethodId: verificationParams.mfaMethodId || '',
      });
    },
  });

  // Execute transaction proposal with security verification
  const executeTransactionProposalWithSecurity = async ({
    proposal,
    sessionSigs,
    wallet,
    walletPkp,
    accessToken,
    authMethodId,
    pinCode,
    mfaType,
    mfaCode,
    mfaMethodId,
  }: any) => {
    const { response, txData, tokenType } = await executeTransactionProposal({
      proposal,
      sessionSigs,
      wallet,
      walletPkp,
      accessToken,
      authMethodId,
      pinCode,
      mfaType,
      mfaCode,
      mfaMethodId,
    });
    
    const result = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
    
    if (result.isValid) {
      if (result.requiresMFA) {
        // Return the MFA requirement to the security verification hook
        return {
          requiresMFA: true,
          availableMFAOptions: result.availableMFAOptions,
          error: "MFA verification required"
        };
      } else if (result.error) {
        throw new Error(result.error);
      }
      
      let txHash = null;
      if (result.status === 'success') {
        try {
          let sig: any;
          if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
            sig = JSON.parse(result.sig);
          } else {
            sig = response.signatures.btcSignatures;
          }
          const txReceipt = await broadcastTransactionByTokenType({
            tokenType,
            options: {
              ...txData,
              sig,
              publicKey: walletPkp.publicKey,
            },
          });
          txHash = txReceipt;
        } catch (e: any) {
          if (e.message.includes('insufficient funds for intrinsic transaction cost')) {
            throw new Error(t('insufficient_funds'));
          }
          throw new Error(e.message || t('execute_transaction_failed'));
        }
      }
      
      // Update proposal status
      await fetch(`/api/multisig/messages`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          proposalId: proposal.id,
          walletId: proposal.walletId,
          status: 'completed',
          txHash: txHash,
        }),
      });
      
      // Send notification
      try {
        await sendProposalExecutedNotification({
          proposalType: 'transaction',
          proposal,
          wallet,
          txHash,
        });
      } catch (error) {
        // ignore notification error
      }
      
      toast.success(t('transaction_completed'));
      await refreshProposals();
      if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
      if (invalidateProposalNotifications) await invalidateProposalNotifications();
      
      return { success: true };
    } else {
      throw new Error('Transaction execution failed');
    }
  };

  // Execute wallet settings proposal with security verification
  const executeWalletSettingsProposalWithSecurity = async ({
    proposal,
    sessionSigs,
    wallet,
    walletPkp,
    settingsData,
    accessToken,
    authMethodId,
    pinCode,
    mfaType,
    mfaCode,
    mfaMethodId,
  }: any) => {
    const response = await executeWalletSettingsProposal({
      proposal,
      sessionSigs,
      wallet,
      walletPkp,
      accessToken,
      authMethodId,
      pinCode,
      mfaType,
      mfaCode,
      mfaMethodId,
    });
    
    if (response.data.success) {
      toast.success(t('update_wallet_success'));
      await refreshProposals();
      if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
      if (invalidateProposalNotifications) await invalidateProposalNotifications();
      return { success: true };
    } else {
      throw new Error(response.data.error || 'Wallet settings update failed');
    }
  };

  // Execute multisig lit action based on proposal type
  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
    if (!walletPkp || !wallet || !userPkp || !accessToken || !authMethodId) return;
    
    try {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: true }));
      setIsDisabled(true);
      
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }
      const sessionSigs = await getMultiProviderSessionSigs({
        pkpPublicKey: userPkp.publicKey,
        pkpTokenId: userPkp.tokenId,
        accessToken,
        providerType,
        userEmail,
      });
      
      const isWalletSettingsProposal = proposal.type === 'walletSettings';
      const settingsData = proposal.settingsData;
      
      if (isWalletSettingsProposal && settingsData) {
        // Use settings security verification (PIN only)
        await settingsSecurityVerification.verify({
          proposal,
          sessionSigs,
          wallet,
          walletPkp,
          settingsData,
        });
      } else {
        // Use transaction security verification (PIN + MFA)
        await transactionSecurityVerification.verify({
          proposal,
          sessionSigs,
          wallet,
          walletPkp,
        });
      }
      
    } catch (err: any) {
      const errorMessage = err?.message || '';
      const shortMessage = err?.shortMessage || '';
      if (errorMessage.includes('Google JWT expired') || shortMessage.includes('Google JWT expired')) {
        handleExpiredAuth();
      } else {
        toast.error(err?.message || t('execute_proposal_failed'));
      }
    } finally {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
      setIsDisabled(false);
    }
  };

  // Sign proposal only (no auto-execution)
  const handleSignProposal = async (proposal: MessageProposal) => {
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
    if (!walletPkp || !wallet || !userPkp || !authMethodId || !accessToken) return;
    const isAuthValid = await verifyAuthOrRedirect();
    if (!isAuthValid) return;
    
    try {
      setSigningStates(prev => ({ ...prev, [proposal.id]: true }));
      const response = await signProposal({
        proposal,
        wallet,
        userPkp,
        accessToken,
        authMethodId,
        providerType,
        userEmail,
      });
      if (response.data.success) {
        toast.success(t('sign_proposal_succeess'));
        if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
        if (refreshProposals) await refreshProposals();
        if (invalidateProposalNotifications) await invalidateProposalNotifications();
      }
    } catch (err: any) {
      const errorMessage = err?.message || '';
      if (errorMessage.includes('Google JWT expired') || (err?.shortMessage && err.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(err?.message || t('sign_proposal_failed'));
      }
    } finally {
      setSigningStates(prev => ({ ...prev, [proposal.id]: false }));
    }
  };

  // Sign proposal and auto-execute if threshold is reached
  const handleSignProposalAndExecute = async (proposal: MessageProposal) => {
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
    if (!walletPkp || !wallet || !userPkp || !authMethodId || !accessToken) return;
    const isAuthValid = await verifyAuthOrRedirect();
    if (!isAuthValid) return;
    
    try {
      setSigningStates(prev => ({ ...prev, [proposal.id]: true }));
      const response = await signProposal({
        proposal,
        wallet,
        userPkp,
        accessToken,
        authMethodId,
        providerType,
        userEmail,
      });
      if (response.data.success) {
        if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
        // Always fetch latest proposals to check threshold
        const newProposals = await fetchProposals(authMethodId, undefined, wallet.id, proposal.id);
        const updatedProposal = newProposals.find((p: MessageProposal) => p.id === proposal.id);
        if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
          await executeMultisigLitAction(updatedProposal);
        } else {
          toast.success(t('sign_proposal_succeess'));
          if (refreshProposals) await refreshProposals();
          if (invalidateProposalNotifications) await invalidateProposalNotifications();
        }
      }
    } catch (err: any) {
      const errorMessage = err?.message || '';
      if (errorMessage.includes('Google JWT expired') || (err?.shortMessage && err.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(err?.message || t('sign_proposal_failed'));
      }
    } finally {
      setSigningStates(prev => ({ ...prev, [proposal.id]: false }));
    }
  };

  // Cancel proposal
  const handleCancelProposal = async (proposal: MessageProposal) => {
    if (!authMethodId || !userPkp) return;
    try {
      setCancelingStates(prev => ({ ...prev, [proposal.id]: true }));
      const response = await fetch(`/api/multisig/messages?walletId=${proposal.walletId}&proposalId=${proposal.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          canceledBy: {
            authMethodId: authMethodId,
            ethAddress: userPkp.ethAddress,
          },
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success(t('cancel_proposal_success'));
        if (refreshProposals) await refreshProposals();
        if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
        if (invalidateProposalNotifications) await invalidateProposalNotifications();
      }
    } catch (error: any) {
      if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else if (error.response?.status === 403) {
        toast.error(t('disallow_cancel_proposal'));
      } else if (error.response?.status === 404) {
        toast.error(t('proposal_not_found'));
      } else {
        toast.error(t('cancel_proposal_failed'));
      }
    } finally {
      setCancelingStates(prev => ({ ...prev, [proposal.id]: false }));
    }
  };

  return {
    handleSignProposal,
    handleSignProposalAndExecute,
    executeMultisigLitAction,
    handleCancelProposal,
    isSigningProposal: (id: string) => signingStates[id] || false,
    isExecuting: (id: string) => executingStates[id] || false,
    isDisabled,
    isCancelingProposal: (id: string) => cancelingStates[id] || false,
    // Use shared PIN dialog that works for both transaction and settings proposals
    PinDialog: transactionSecurityVerification.PinDialog || settingsSecurityVerification.PinDialog,
    // Only transaction proposals need MFA dialog
    MFADialog: transactionSecurityVerification.MFADialog,
  };
}