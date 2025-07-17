import React, { useState } from "react";
import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { getSessionSigsByPkp, litNodeClient } from "@/lib/lit";
import { signProposal } from "@/app/wallet/[walletId]/details/proposals/utils/sign-proposal";
import { executeTransactionProposal, executeWalletSettingsProposal } from "@/app/wallet/[walletId]/details/proposals/utils/execute-proposal";
import { broadcastTransactionByTokenType } from "@/lib/web3/transaction";
import { sendProposalExecutedNotification } from "@/lib/notification/proposal-executed-notification";
import { SUPPORTED_TOKENS_INFO } from "@/lib/web3/token";
import { toast } from "react-toastify";
import { MFAOtpDialog } from "@/components/Transaction/MFAOtpDialog";

export type ProposalDialogType =
  | { type: 'none' }
  | { type: 'mfa'; proposal: MessageProposal };

// Custom error for MFA flow
export class MFARequiredError extends Error {
  constructor(public proposal: MessageProposal) {
    super('MFA verification required');
    this.name = 'MFARequiredError';
  }
}

export interface UseProposalActionsParams {
  walletMap: Map<string, MultisigWallet>;
  userPkp: any;
  authMethod: any;
  authMethodId: string | null;
  userPhone: string | null;
  /** Refresh proposals list. Can be async or sync. */
  refreshProposals: () => any | Promise<any>;
  /** Fetch proposals for a wallet and proposalId. */
  fetchProposals: (walletId: string, proposalId: string) => Promise<MessageProposal[]>;
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
  executeMultisigLitAction: (proposal: MessageProposal) => Promise<void>;
  handleCancelProposal: (proposal: MessageProposal) => Promise<void>;
  isSigningProposal: (id: string) => boolean;
  isLoading: (id: string) => boolean;
  isDisabled: boolean;
  isCancelingProposal: (id: string) => boolean;
  dialog: React.ReactNode;
}

export function useProposalActions({
  walletMap,
  userPkp,
  authMethod,
  authMethodId,
  userPhone,
  refreshProposals,
  fetchProposals,
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
  const [dialog, setDialog] = useState<ProposalDialogType>({ type: 'none' });
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);

  // --- Proposal Actions ---
  const handleExecuteWalletSettingsProposal = async (proposal: MessageProposal, settingsData: any, sessionSigs: any) => {
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
    if (!wallet || !walletPkp || !authMethod || !authMethodId) return;
    
    try {
      const response = await executeWalletSettingsProposal({
        proposal,
        sessionSigs,
        wallet,
        walletPkp,
        authMethod,
        authMethodId,
      });
      
      if (response.data.success) {
        toast.success(t('update_wallet_success'));
        await refreshProposals();
        if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
        // Invalidate proposal notifications after execution
        if (invalidateProposalNotifications) await invalidateProposalNotifications();
        // clear loading state
        setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
        setIsDisabled(false);
      }
    } catch (error) {
      console.error('Error executing wallet settings proposal:', error);
      throw error;
    }
  };

  const handleExecuteTransactionProposal = async (proposal: MessageProposal, sessionSigs: any, otpCode: string = '') => {
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
    if (!wallet || !walletPkp || !authMethod || !authMethodId) return;
    
    const { response, txData, tokenType } = await executeTransactionProposal({
      proposal,
      sessionSigs,
      wallet,
      walletPkp,
      authMethod,
      authMethodId,
      otpCode,
      mfaMethodId,
    });
    
    const result = typeof response.response === 'string' ? JSON.parse(response.response) : response.response;
    if (result.isValid) {
      if (result.requireMFA) {
        setDialog({ type: 'mfa', proposal });
        toast.warning('Daily limit exceeded');
        // Throw custom error to signal MFA requirement to parent function
        throw new MFARequiredError(proposal);
      } else if (result.error) {
        toast.error(result.error);
        return;
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
            toast.error(t('insufficient_funds'));
            return;
          }
          toast.error(e.message || t('execute_transaction_failed'));
          return;
        }
      }
      
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
      // Invalidate proposal notifications after execution
      if (invalidateProposalNotifications) await invalidateProposalNotifications();
      // clear loading state
      setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
      setIsDisabled(false);
    }
  };

  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
    if (!walletPkp || !wallet || !authMethod || !userPkp) return;
    
    let mfaRequired = false;
    
    try {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: true }));
      setIsDisabled(true);
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }
      const sessionSigs = await getSessionSigsByPkp({ authMethod, pkp: userPkp, refreshStytchAccessToken: true });
      const isWalletSettingsProposal = proposal.type === 'walletSettings';
      const settingsData = proposal.settingsData;
      if (isWalletSettingsProposal && settingsData) {
        await handleExecuteWalletSettingsProposal(proposal, settingsData, sessionSigs);
      } else {
        await handleExecuteTransactionProposal(proposal, sessionSigs);
      }
    } catch (err: any) {
      // Handle MFA requirement - keep loading state active
      if (err instanceof MFARequiredError) {
        mfaRequired = true;
        // MFA dialog is already set, keep loading state and disabled state
        // Don't clear states - let handleOtpVerify handle the flow
        return;
      }
      
      const errorMessage = err?.message || '';
      const shortMessage = err?.shortMessage || '';
      if (errorMessage.includes('Google JWT expired') || shortMessage.includes('Google JWT expired')) {
        handleExpiredAuth();
      } else {
        toast.error(err?.message || t('sign_proposal_failed'));
      }
    } finally {
      // Only clear states if not in MFA flow
      if (!mfaRequired) {
        setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
        setIsDisabled(false);
      }
    }
  };

  // --- Fully parameterized, parent-compatible handleSignProposal ---
  const handleSignProposal = async (proposal: MessageProposal) => {
    // Parent components expect: sign, refresh notifications, fetchProposals, auto-execute if threshold, else refresh proposals/notifications
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
    if (!walletPkp || !authMethod || !wallet || !userPkp || !authMethodId) return;
    const isAuthValid = await verifyAuthOrRedirect();
    if (!isAuthValid) return;
    
    let mfaTriggered = false;
    
    try {
      setSigningStates(prev => ({ ...prev, [proposal.id]: true }));
      const response = await signProposal({
        proposal,
        wallet,
        userPkp,
        authMethod,
        authMethodId,
      });
      if (response.data.success) {
        // Always refresh notifications if provided
        if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
        // Always fetch latest proposals to check threshold
        const newProposals = await fetchProposals(wallet.id, proposal.id);
        const updatedProposal = newProposals.find((p: MessageProposal) => p.id === proposal.id);
        if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
          try {
            await executeMultisigLitAction(updatedProposal);
          } catch (err: any) {
            // Check if MFA was triggered during execution
            if (err instanceof MFARequiredError) {
              mfaTriggered = true;
              throw err; // Re-throw to be caught by outer catch
            }
            throw err;
          }
        } else {
          toast.success(t('sign_proposal_succeess'));
          if (refreshProposals) await refreshProposals();
          // Only invalidate proposal notifications if not executing
          if (invalidateProposalNotifications) await invalidateProposalNotifications();
        }
      }
    } catch (err: any) {
      if (err instanceof MFARequiredError) {
        mfaTriggered = true;
        // MFA flow started, don't clear states
        return;
      }
      
      const errorMessage = err?.message || '';
      if (errorMessage.includes('Google JWT expired') || (err?.shortMessage && err.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(err?.message || t('sign_proposal_failed'));
      }
    } finally {
      // Don't clear signing state if MFA was triggered
      if (!mfaTriggered) {
        setSigningStates(prev => ({ ...prev, [proposal.id]: false }));
      }
    }
  };

  const handleSendOtp = async () => {
    if (!userPhone || !authMethod) throw new Error('Session or phone number not found');
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
      throw new Error(errorData.error || `Failed to send OTP: ${response.status}`);
    }
    const data = await response.json();
    setMfaMethodId(data.method_id);
  };

  const handleOtpVerify = async (otp: string) => {
    if (dialog.type !== 'mfa') return;
    if (!authMethod || !userPkp) throw new Error('Missing required information for OTP verification');
    
    const currentProposal = dialog.proposal;
    
    try {
      // Continue with transaction execution - states are already set from executeMultisigLitAction
      const sessionSigs = await getSessionSigsByPkp({ authMethod, pkp: userPkp, refreshStytchAccessToken: true });
      await handleExecuteTransactionProposal(currentProposal, sessionSigs, otp);
      
      // On success, clear all states and close dialog
      setExecutingStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setSigningStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setIsDisabled(false);
      setDialog({ type: 'none' });
    } catch (error) {
      console.error('Error executing transaction:', error);
      // On error, also clear states and close dialog
      setExecutingStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setSigningStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setIsDisabled(false);
      setDialog({ type: 'none' });
    }
  };

  // --- Cancel proposal, parameterized for parent notification refresh ---
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

  // Handle MFA dialog close
  const handleMfaDialogClose = () => {
    if (dialog.type === 'mfa') {
      // Clear all states when dialog is closed/cancelled
      setExecutingStates(prev => ({ ...prev, [dialog.proposal.id]: false }));
      setSigningStates(prev => ({ ...prev, [dialog.proposal.id]: false }));
      setIsDisabled(false);
    }
    setDialog({ type: 'none' });
  };

  // Dialog rendering (extensible for future types)
  let dialogElement: React.ReactNode | null = null;
  if (dialog.type === 'mfa') {
    dialogElement = (
      <MFAOtpDialog
        isOpen={true}
        onClose={handleMfaDialogClose}
        onOtpVerify={handleOtpVerify}
        sendOtp={handleSendOtp}
        identifier={userPhone}
        title={t("otp_title")}
        description={t("otp_description")}
      />
    );
  }

  return {
    handleSignProposal,
    executeMultisigLitAction,
    handleCancelProposal,
    isSigningProposal: (id: string) => signingStates[id] || false,
    isLoading: (id: string) => executingStates[id] || false,
    isDisabled,
    isCancelingProposal: (id: string) => cancelingStates[id] || false,
    dialog: dialogElement,
  };
} 