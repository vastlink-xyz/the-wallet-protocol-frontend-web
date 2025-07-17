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

/**
 * Dialog state type for proposal actions. Extensible for future dialog types.
 */
export type ProposalDialogType =
  | { type: 'none' }
  | { type: 'mfa'; proposal: MessageProposal };
  // | { type: 'pin'; proposal: MessageProposal } // for future extension

/**
 * Parameters for useProposalActions hook.
 */
export interface UseProposalActionsParams {
  wallet: MultisigWallet | null;
  walletPkp: any;
  userPkp: any;
  authMethod: any;
  authMethodId: string | null;
  userPhone: string | null;
  /** Refresh proposals list. Can be async or sync. */
  refreshProposals: () => any | Promise<any>;
  /** Refresh notifications. Can be async or sync. */
  refreshNotifications: (authMethodId: string, ethAddress: string) => any | Promise<any>;
  t: any;
  handleExpiredAuth: () => void;
  verifyAuthOrRedirect: () => Promise<boolean>;
}

/**
 * Return type for useProposalActions hook.
 */
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

/**
 * Centralized hook for all proposal actions (sign, execute, cancel, MFA, etc.).
 * All context and refresh logic must be passed in as parameters.
 *
 * @param params See UseProposalActionsParams
 * @returns See UseProposalActionsReturn
 */
export function useProposalActions({
  wallet,
  walletPkp,
  userPkp,
  authMethod,
  authMethodId,
  userPhone,
  refreshProposals,
  refreshNotifications,
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
        await refreshNotifications(authMethodId, userPkp?.ethAddress);
        setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
        setIsDisabled(false);
      }
    } catch (error) {
      toast.error((error as any)?.message || t('execute_proposal_failed'));
      throw error;
    }
  };

  const handleExecuteTransactionProposal = async (proposal: MessageProposal, sessionSigs: any, otpCode: string = '') => {
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
        return;
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
      await refreshNotifications(authMethodId, userPkp?.ethAddress);
      setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
      setIsDisabled(false);
    }
  };

  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    if (!walletPkp || !wallet || !authMethod || !userPkp) return;
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
      const errorMessage = err?.message || '';
      const shortMessage = err?.shortMessage || '';
      if (errorMessage.includes('Google JWT expired') || shortMessage.includes('Google JWT expired')) {
        handleExpiredAuth();
      } else {
        toast.error(err?.message || t('sign_proposal_failed'));
      }
    } finally {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
      setIsDisabled(false);
    }
  };

  const handleSignProposal = async (proposal: MessageProposal) => {
    if (!walletPkp || !authMethod || !wallet || !userPkp || !authMethodId) return;
    const isAuthValid = await verifyAuthOrRedirect();
    if (!isAuthValid) return;
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
        await refreshNotifications(authMethodId, userPkp?.ethAddress);
        // Optionally, you can fetch the updated proposal here if needed
        // For now, just refresh proposals
        await refreshProposals();
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
    if (!authMethod || !userPkp || dialog.type !== 'mfa') throw new Error('Missing required information for OTP verification');
    setDialog({ type: 'none' });
    try {
      setExecutingStates(prev => ({ ...prev, [dialog.proposal.id]: true }));
      setIsDisabled(true);
      const sessionSigs = await getSessionSigsByPkp({ authMethod, pkp: userPkp, refreshStytchAccessToken: true });
      await handleExecuteTransactionProposal(dialog.proposal, sessionSigs, otp);
    } catch (error) {
      // error already handled
    } finally {
      setExecutingStates(prev => ({ ...prev, [dialog.type === 'mfa' ? dialog.proposal.id : '']: false }));
      setIsDisabled(false);
    }
  };

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
        await refreshProposals();
        await refreshNotifications(authMethodId, userPkp?.ethAddress);
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

  // Dialog rendering (extensible for future types)
  let dialogElement: React.ReactNode | null = null;
  if (dialog.type === 'mfa') {
    dialogElement = (
      <MFAOtpDialog
        isOpen={true}
        onClose={() => setDialog({ type: 'none' })}
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