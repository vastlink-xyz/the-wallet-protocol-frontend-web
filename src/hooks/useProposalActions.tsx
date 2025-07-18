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
import { PinVerificationDialog } from "@/components/Transaction/PinVerificationDialog";
import { PinService } from "@/services/pinService";
import { fetchProposals } from "./useProposals";

export type ProposalDialogType =
  | { type: 'none' }
  | { type: 'mfa'; proposal: MessageProposal }
  | { type: 'pin'; proposal: MessageProposal };

// Custom error for MFA flow
export class MFARequiredError extends Error {
  constructor(public proposal: MessageProposal) {
    super('MFA verification required');
    this.name = 'MFARequiredError';
  }
}

// Custom error for PIN verification
export class PinRequiredError extends Error {
  constructor(public proposal: MessageProposal) {
    super('PIN verification required');
    this.name = 'PinRequiredError';
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
  dialog: React.ReactNode;
}

export function useProposalActions({
  walletMap,
  userPkp,
  authMethod,
  authMethodId,
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
        toast.warning(t('daily_limit_exceeded'));
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
    let pinRequired = false;
    
    try {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: true }));
      setIsDisabled(true);
      
      // Check if PIN is required before execution
      if (PinService.hasLocalPinData()) {
        setDialog({ type: 'pin', proposal });
        throw new PinRequiredError(proposal);
      }
      
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
      // Handle PIN requirement - keep loading state active
      if (err instanceof PinRequiredError) {
        pinRequired = true;
        // PIN dialog is already set, keep loading state and disabled state
        // Don't clear states - let handlePinVerify handle the flow
        return;
      }
      
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
      // Only clear states if not in MFA or PIN flow
      if (!mfaRequired && !pinRequired) {
        setExecutingStates(prev => ({ ...prev, [proposal.id]: false }));
        setIsDisabled(false);
      }
    }
  };

  // --- Sign proposal only (no auto-execution) ---
  const handleSignProposal = async (proposal: MessageProposal) => {
    const wallet = walletMap.get(proposal.walletId);
    const walletPkp = wallet?.pkp;
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
        toast.success(t('sign_proposal_succeess'));
        // Always refresh notifications if provided
        if (refreshNotifications) await refreshNotifications(authMethodId, userPkp?.ethAddress);
        // Refresh proposals to show updated state
        if (refreshProposals) await refreshProposals();
        // Invalidate proposal notifications
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

  // --- Sign proposal and auto-execute if threshold is reached ---
  const handleSignProposalAndExecute = async (proposal: MessageProposal) => {
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
        const newProposals = await fetchProposals(authMethodId, undefined, wallet.id, proposal.id);
        const updatedProposal = newProposals.find((p: MessageProposal) => p.id === proposal.id);
        if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
          try {
            await executeMultisigLitAction(updatedProposal);
          } catch (err: any) {
            // Check if PIN or MFA was triggered during execution
            if (err instanceof PinRequiredError || err instanceof MFARequiredError) {
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
      if (err instanceof PinRequiredError || err instanceof MFARequiredError) {
        mfaTriggered = true;
        // PIN or MFA flow started, don't clear states
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

  const handlePinVerify = async (pin: string) => {
    if (dialog.type !== 'pin') return;
    if (!authMethod || !userPkp) throw new Error('Missing required information for PIN verification');
    
    const currentProposal = dialog.proposal;
    
    try {
      // Verify PIN first
      const storedPinData = PinService.getLocalPinData();
      if (!storedPinData) {
        toast.error('No PIN is set');
        throw new Error('No PIN is set');
      }
      
      const isPinValid = await PinService.verifyPin(
        pin,
        storedPinData,
        {
          litActionPkp: userPkp,
          authMethod: authMethod
        }
      );
      
      if (!isPinValid) {
        toast.error('Invalid PIN');
        throw new Error('Invalid PIN'); // This will be caught by the dialog and won't close it
      }
      
      // PIN verified, close dialog and continue with execution
      setDialog({ type: 'none' });
      
      // Continue with transaction execution - states are already set from executeMultisigLitAction
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }
      const sessionSigs = await getSessionSigsByPkp({ authMethod, pkp: userPkp, refreshStytchAccessToken: true });
      const isWalletSettingsProposal = currentProposal.type === 'walletSettings';
      const settingsData = currentProposal.settingsData;
      
      if (isWalletSettingsProposal && settingsData) {
        await handleExecuteWalletSettingsProposal(currentProposal, settingsData, sessionSigs);
      } else {
        await handleExecuteTransactionProposal(currentProposal, sessionSigs);
      }
      
      // On success, clear all states
      setExecutingStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setSigningStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setIsDisabled(false);
    } catch (error: any) {
      console.error('Error verifying PIN or executing proposal:', error);
      
      // If it's a PIN validation error, just throw it to keep dialog open
      if (error.message === 'Invalid PIN' || error.message === 'No PIN is set') {
        throw error;
      }
      
      // Check if MFA is required after PIN verification
      if (error instanceof MFARequiredError) {
        // MFA dialog should already be set by handleExecuteTransactionProposal
        // Keep loading states active for MFA flow
        return;
      }
      
      // On other errors, clear states and close dialog
      setExecutingStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setSigningStates(prev => ({ ...prev, [currentProposal.id]: false }));
      setIsDisabled(false);
      setDialog({ type: 'none' });
    }
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

  // Handle dialog close
  const handleDialogClose = () => {
    if (dialog.type === 'mfa' || dialog.type === 'pin') {
      // Clear all states when dialog is closed/cancelled
      setExecutingStates(prev => ({ ...prev, [dialog.proposal.id]: false }));
      setSigningStates(prev => ({ ...prev, [dialog.proposal.id]: false }));
      setIsDisabled(false);
      
      // Refresh proposals to ensure UI reflects current state
      // This is important when user cancels MFA after successful approve
      if (refreshProposals) {
        refreshProposals();
      }
    }
    setDialog({ type: 'none' });
  };

  // Dialog rendering (extensible for future types)
  let dialogElement: React.ReactNode | null = null;
  if (dialog.type === 'pin') {
    dialogElement = (
      <PinVerificationDialog
        isOpen={true}
        onClose={handleDialogClose}
        onPinVerify={handlePinVerify}
      />
    );
  } else if (dialog.type === 'mfa') {
    dialogElement = (
      <MFAOtpDialog
        isOpen={true}
        onClose={handleDialogClose}
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
    handleSignProposalAndExecute,
    executeMultisigLitAction,
    handleCancelProposal,
    isSigningProposal: (id: string) => signingStates[id] || false,
    isExecuting: (id: string) => executingStates[id] || false,
    isDisabled,
    isCancelingProposal: (id: string) => cancelingStates[id] || false,
    dialog: dialogElement,
  };
} 