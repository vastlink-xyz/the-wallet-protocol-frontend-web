import { useState } from "react";
import { litActionContext, litNodeClient } from "@/lib/lit";
import { getMultiProviderSessionSigs } from "@/lib/lit/pkpManager";
import { approveProposal } from "@/app/wallet/[walletId]/details/proposals/utils/sign-proposal";
import { toast } from "react-toastify";
import { AuthProviderType, getVastbaseAuthMethodType } from "@/lib/lit/custom-auth";

// Import new API Keys proposal types
import { APIKeysProposal } from "@/app/api/api-keys-proposals/models";
import { log } from "@/lib/utils";

export interface APIKeysProposalActionsParams {
  walletMap: Map<string, any>;
  userPkp: any;
  getCurrentAccessToken: () => Promise<string | null>;
  authMethodId: string | null;
  providerType: AuthProviderType;
  userEmail: string;
  /** Refresh proposals list. Can be async or sync. */
  refreshProposals: () => any | Promise<any>;
  t: any;
  handleExpiredAuth: () => void;
  verifyAuthOrRedirect: () => Promise<boolean>;
}

export interface APIKeysProposalActionsReturn {
  handleApproveProposal: (proposal: any) => Promise<void>;
  handleExecuteProposal: (proposal: any) => Promise<void>;
  isApproving: (id: string) => boolean;
  isExecuting: (id: string) => boolean;
  isDisabled: boolean;
}

export function useAPIKeysProposalActions({
  walletMap,
  userPkp,
  getCurrentAccessToken,
  authMethodId,
  providerType,
  userEmail,
  refreshProposals,
  t,
  handleExpiredAuth,
  verifyAuthOrRedirect,
}: APIKeysProposalActionsParams): APIKeysProposalActionsReturn {
  const [approvingStates, setApprovingStates] = useState<Record<string, boolean>>({});
  const [executingStates, setExecutingStates] = useState<Record<string, boolean>>({});
  const [isDisabled, setIsDisabled] = useState(false);

  // Execute API Keys Lit Action for proposal execution
  const executeAPIKeysLitAction = async (proposal: any) => {
    const wallet = walletMap.get(proposal.multisigWalletId || proposal.walletId);
    if (!wallet || !userPkp || !getCurrentAccessToken || !authMethodId) return;
    
    try {
      setExecutingStates(prev => ({ ...prev, [proposal.id]: true }));
      setIsDisabled(true);
      
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }
      const accessToken = await getCurrentAccessToken();
      if (!accessToken) {
        throw new Error('Access token not available');
      }
      const sessionSigs = await getMultiProviderSessionSigs({
        pkpPublicKey: userPkp.publicKey,
        pkpTokenId: userPkp.tokenId,
        accessToken,
        providerType,
        userEmail,
      });

  // Execute the API Keys management Lit Action
  const response = await executeAPIKeysProposal({
    proposal,
    sessionSigs,
    wallet,
    authParams: {
      providerType,
      accessToken,
      pkpTokenId: userPkp.tokenId,
      authMethodType: getVastbaseAuthMethodType(), // Use the actual custom auth method type
    },
  });
      
      if (response.data.success) {
        // Update proposal status using new API
        await fetch(`/api/api-keys-proposals`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            proposalId: proposal.id,
            action: 'updateStatus',
            status: 'completed',
          }),
        });
        
        toast.success(t('api_keys_update_success') || 'API Keys configuration updated successfully');
        await refreshProposals();
        
        return { success: true };
      } else {
        throw new Error(response.data.error || 'API Keys configuration update failed');
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

  // Approve proposal only (no auto-execution)  
  const handleApproveProposal = async (proposal: any) => {
    const wallet = walletMap.get(proposal.multisigWalletId || proposal.walletId);
    if (!wallet || !userPkp || !authMethodId || !getCurrentAccessToken) return;
    const isAuthValid = await verifyAuthOrRedirect();
    if (!isAuthValid) return;
    
    try {
      setApprovingStates(prev => ({ ...prev, [proposal.id]: true }));
      
      // Get access token for authentication
      const accessToken = await getCurrentAccessToken();
      if (!accessToken) {
        throw new Error('Access token not available');
      }

      // Validate that the current user is a signer of the wallet
      const isUserSigner = wallet.signers?.some((signer: any) => 
        signer.ethAddress.toLowerCase() === userPkp.ethAddress.toLowerCase()
      );

      if (!isUserSigner) {
        throw new Error('User is not authorized to sign proposals for this wallet');
      }

      // Use personal sign Lit Action to generate signature
      await signAPIKeysProposal({
        proposal,
        wallet,
        userPkp,
        accessToken,
        authMethodId,
        providerType,
        userEmail,
      });
      
      toast.success(t('sign_proposal_succeess') || 'Proposal approved successfully');
      if (refreshProposals) await refreshProposals();
      
    } catch (err: any) {
      const errorMessage = err?.message || '';
      if (errorMessage.includes('Google JWT expired') || (err?.shortMessage && err.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(err?.message || t('sign_proposal_failed'));
      }
    } finally {
      setApprovingStates(prev => ({ ...prev, [proposal.id]: false }));
    }
  };

  // Execute proposal (only when threshold is reached)
  const handleExecuteProposal = async (proposal: any) => {
    const wallet = walletMap.get(proposal.multisigWalletId || proposal.walletId);
    if (!wallet || proposal.signatures.length < wallet.threshold) {
      toast.error('Insufficient signatures to execute proposal');
      return;
    }
    
    await executeAPIKeysLitAction(proposal);
  };

  return {
    handleApproveProposal,
    handleExecuteProposal,
    isApproving: (id: string) => approvingStates[id] || false,
    isExecuting: (id: string) => executingStates[id] || false,
    isDisabled,
  };
}

// Sign API Keys proposal using personal sign Lit Action
const signAPIKeysProposal = async ({
  proposal,
  wallet,
  userPkp,
  accessToken,
  authMethodId,
  providerType,
  userEmail,
}: any) => {
  // Import personal sign Lit Action IPFS ID
  const { getPersonalSignIpfsId } = await import('@/lib/lit/ipfs-id-env');
  const personalSignIpfsId = await getPersonalSignIpfsId('base58');
  log('prposal', proposal)

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

  // Generate message for API Keys proposal (similar to team wallet)
  const message = `Execute API Keys Proposal: ${proposal.id}`;

  const actionResponse = await litNodeClient.executeJs({
    ipfsId: personalSignIpfsId,
    sessionSigs,
    jsParams: {
      message,
      publicKey: userPkp.publicKey,
      litActionContext,
      authParams: {
        accessToken,
        providerType,
        pkpTokenId: userPkp.tokenId,
        authMethodId: authMethodId,
        authMethodType: getVastbaseAuthMethodType(), // Use the actual custom auth method type
      },
    }
  });
  
  const signature = actionResponse.signatures.sig.signature;

  // Submit signature to API Keys proposals API
  const response = await fetch('/api/api-keys-proposals', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      proposalId: proposal.id,
      action: 'addSignature',
      signature: {
        signer: userPkp.ethAddress,
        signature,
        publicKey: userPkp.publicKey
      }
    })
  });

  if (!response.ok) {
    throw new Error('Failed to add signature');
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.error || 'Failed to add signature');
  }

  return result;
};

// Execute API Keys proposal with Lit Action
const executeAPIKeysProposal = async ({
  proposal,
  sessionSigs,
  wallet,
  authParams,
}: any) => {
  // Import API Key Management Lit Action IPFS ID
  const { getAPIKeyManagementIpfsId } = await import('@/lib/lit/ipfs-id-env');
  const apiKeyManagementIpfsId = await getAPIKeyManagementIpfsId('base58');

  // Prepare signature verification data
  const message = `Execute API Keys Proposal: ${proposal.id}`;

  // Execute Lit Action for API Keys management
  const result = await litNodeClient.executeJs({
    ipfsId: apiKeyManagementIpfsId,
    sessionSigs,
    jsParams: {
      action: 'execute_proposal',
      proposalId: proposal.id,
      multisigWalletId: proposal.multisigWalletId || proposal.walletId,
      proposalData: proposal.proposalData || proposal.apiKeysData, // Support both formats
      litActionContext,
      authParams,
      // Signature verification parameters
      message
    }
  });

  if (result.response) {
    const response = typeof result.response === 'string' 
      ? JSON.parse(result.response)
      : result.response;
    return { data: response };
  } else {
    throw new Error('No response from Lit Action');
  }
};