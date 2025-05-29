"use client";

import { MessageProposal } from "@/app/api/multisig/storage";
import { useState, useEffect } from "react";
import { Proposal } from "./components/Proposal";
import { fetchProposals, fetchUpdatedWallet, getTransactionDetails, sendNotificationsToNewSigners } from "./utils/proposal";
import { useWallet } from "../context/WalletContext";
import { useParams } from "next/navigation";
import { AuthMethod } from "@lit-protocol/types";
import { getMultisigTransactionIpfsId, getPersonalSignIpfsId, getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env";
import { getSessionSigsByPkp, litNodeClient } from "@/lib/lit";
import { log } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthExpiration } from "@/hooks/useAuthExpiration";
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from "@/lib/web3/transaction";
import { MFAOtpDialog } from "@/components/Transaction/MFAOtpDialog";

export default function ProposalsPage() {
  // Get walletId from params
  const params = useParams();
  const walletId = params.walletId as string;
  
  // Get wallet data from context
  const { wallet, isLoading: isWalletLoading, authMethod, walletPkp, userPkp, sessionPkp, authMethodId, userPhone } = useWallet();
  
  // Local state for proposals
  const [proposals, setProposals] = useState<MessageProposal[]>([]);
  const [isLoadingProposals, setIsLoadingProposals] = useState(true);

  const [isSigningProposal, setIsSigningProposal] = useState(false)
  const { handleExpiredAuth } = useAuthExpiration();
  const [isProposalLoading, setIsProposalLoading] = useState(false);

  // mfa
  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null)
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);


  // Fetch proposals for this wallet
  useEffect(() => {
    async function getProposals() {
      try {
        setIsLoadingProposals(true);
        const fetchedProposals = await fetchProposals(walletId);
        setProposals(fetchedProposals);
      } catch (error) {
        console.error("Failed to fetch proposals:", error);
      } finally {
        setIsLoadingProposals(false);
      }
    }
    
    if (walletId) {
      getProposals();
    }
  }, [walletId]);

  // Function to execute wallet settings change proposal
  const executeWalletSettingsProposal = async (proposal: MessageProposal, settingsData: any, sessionSigs: any) => {
    if (!wallet || !walletPkp || !authMethod) return;
    log('selected multisig pkp', walletPkp.publicKey)

    const updateWalletIpfsId = await getUpdateWalletIpfsId("base58")

    try {
      const litActionResponse = await litNodeClient.executeJs({
        ipfsId: updateWalletIpfsId,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
          },
          publicKey: walletPkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
          walletId: wallet.id,
          proposalId: proposal.id,
        },
      });

      log('lit action res', litActionResponse)

      const responseObj = typeof litActionResponse.response === 'string' 
        ? JSON.parse(litActionResponse.response) 
        : litActionResponse.response;

      const signature = litActionResponse.signatures.dataToEncryptHashSignature.signature

      // get the mfaSettings from the responseObj
      const { mfaSettings } = responseObj.data.newDataToEncrypt;

      const body = {
        id: wallet.id,
        ...responseObj.data.newDataToEncrypt,
        dataToEncryptHash: responseObj.data.dataToEncryptHash,
        ciphertext: responseObj.data.ciphertext,
        dataToEncryptHashSignature: signature,
        metadata: {
          ...wallet.metadata, // save the original metadata
          mfaSettings // update the mfaSettings
        }
      }

      log('Update wallet request body:', body);

      // Save the updated wallet to the database
      const response = await axios.put('/api/multisig', body);
      
      if (response.data.success) {
        // Update proposal status to completed
        await axios.put('/api/multisig/messages', {
          proposalId: proposal.id,
          walletId: proposal.walletId,
          status: 'completed',
        });
        
        // Refresh data
        // kkktodo: refresh wallet data
        const newProposals = await fetchProposals(walletId);
        setProposals(newProposals)
        
        // Find new signers and send notifications
        const updatedWallet = await fetchUpdatedWallet(wallet.id);
        if (updatedWallet && settingsData.signers) {
          // Send notifications to new signers
          await sendNotificationsToNewSigners(wallet, updatedWallet);
        }

        toast.success('Wallet settings updated successfully')
      }
    } catch (error) {
      log('error', error);
    }
  }

  // Function to execute transaction proposal
  const executeTransactionProposal = async (proposal: MessageProposal, sessionSigs: any, otpCode: string = '') => {
    if (!walletPkp || !wallet || !authMethod) return;

    log('Executing Lit Action with multisig PKP', {
      proposalId: proposal.id,
      multisigPkpAddress: walletPkp.ethAddress,
      signatures: proposal.signatures.length,
      message: proposal.message
    })

    log('multisig wallet', wallet)
    
    // Get transaction details from proposal
    const txDetails = getTransactionDetails(proposal, wallet)
    log('Transaction details:', txDetails)

    const tokenType = txDetails.tokenType
    const sendAddress = tokenType === 'ETH' ? walletPkp.ethAddress : wallet.addresses.btc
    const txData = await getToSignTransactionByTokenType({
      tokenType,
      options: {
        sendAddress,
        recipientAddress: txDetails.to,
        amount: txDetails.value,
      },
    })

    log('txData', txData)

    if (!txData) {
      throw new Error('Failed to get transaction data')
    }

    const jsParams = {
      message: proposal.message,
      publicKeys: proposal.signatures.map(signer => signer.publicKey),
      proposalId: proposal.id,
      walletId: wallet.id,
      requiredSignatures: wallet.threshold,
      publicKey: walletPkp.publicKey,
      // 
      sendTransaction: true,
      chain: 'sepolia',
      toSignTransaction: txData.toSign,
      transactionAmount: txDetails.value,
      env: process.env.NEXT_PUBLIC_ENV,
      authParams: {
        accessToken: authMethod.accessToken,
        authMethodId: authMethodId,
        authMethodType: authMethod.authMethodType,
      },
      otp: otpCode,
      mfaMethodId,
      tokenType: proposal.transactionData?.tokenType,
    }
    log('js params', jsParams)

    const litActionIpfsId = await getMultisigTransactionIpfsId('base58')
    log('ipfsid', litActionIpfsId)

    // Execute the Lit Action using the multisig verification
    const response = await litNodeClient.executeJs({
      ipfsId: litActionIpfsId,
      sessionSigs,
      jsParams,
    })
    
    log('Multisig Lit Action execution result:', response)
    
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
          if (tokenType === 'ETH') {
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
          
          toast.success(`Transaction completed`);
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
      
      // Refresh proposals
      const newProposals = await fetchProposals(walletId)
      setProposals(newProposals)
    }
  }

  // Function to execute a Lit Action using the multisig PKP
  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    if (!walletPkp || !wallet || !authMethod || !sessionPkp) {
      console.error('Missing multisig wallet information or auth method')
      return
    }
    
    try {
      setIsProposalLoading(true)
      // Connect to Lit Network
      if (!litNodeClient.ready) {
        await litNodeClient.connect()
      }

      log('selected mulsig pkp', walletPkp)
      
      // Get session signatures for the current user
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: sessionPkp, refreshStytchAccessToken: true})
      
      // Check if this is a wallet settings change proposal
      const isWalletSettingsProposal = proposal.type === 'walletSettings';
      const settingsData = proposal.settingsData;
      
      if (isWalletSettingsProposal && settingsData) {
        // Handle wallet settings change
        await executeWalletSettingsProposal(proposal, settingsData, sessionSigs);
      } else {
        // Regular transaction execution
        await executeTransactionProposal(proposal, sessionSigs);
      }
    } catch (error: any) {
      toast.error(`${error.message || 'Transaction failed'}`)

      // Check for Google JWT expired error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        handleExpiredAuth();
      } else {
        toast.error(`Error executing operation: ${errorMessage}`);
      }
    } finally {
      setIsProposalLoading(false)
    }
  }

  const handleSignProposal = async (proposal: MessageProposal) => {
    if (!walletPkp || !authMethod || !sessionPkp || !wallet || !userPkp) {
      console.error('Missing required information for signing')
      return
    }
    
    try {
      setIsSigningProposal(true)

      const litActionIpfsId = await getPersonalSignIpfsId('base58')
      log('litActionIpfsId', litActionIpfsId)

      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: sessionPkp, refreshStytchAccessToken: true})
      log('session sigs', sessionSigs)

      const actionResponse = await litNodeClient.executeJs({
        ipfsId: litActionIpfsId,
        sessionSigs,
        jsParams: {
          message: proposal.message,
          publicKey: userPkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
          },
        }
      });
      
      const signature = actionResponse.signatures.sig.signature;
      log('signature', signature)

      // Submit signature to API
      const response = await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        signer: userPkp.ethAddress,
        signature,
        publicKey: userPkp.publicKey,
      })

      if (response.data.success) {
        const newProposals = await fetchProposals(walletId) // Refresh proposals list
        setProposals(newProposals)
        
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
      setIsSigningProposal(false)
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
    if (!authMethod || !sessionPkp) {
      throw new Error('Missing required information for OTP verification');
    }

    // Close the dialog
    setShowMfaDialog(false);

    try {
      setIsProposalLoading(true)
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: sessionPkp, refreshStytchAccessToken: true})
      if (currentProposal) {
        log('otp in handleOtpVerified', otp)
        await executeTransactionProposal(currentProposal, sessionSigs, otp)
      }
    } catch (error) {
      console.error('Error executing transaction:', error)
    } finally {
      setIsProposalLoading(false)
    }
  }


  // Show loading state if wallet or proposals are still loading
  if (isWalletLoading || isLoadingProposals) {
    return <div>Loading proposals...</div>;
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
              <Proposal
                key={proposal.id}
                proposal={proposal}
                selectedWallet={wallet}
                handleSignProposal={handleSignProposal}
                executeMultisigLitAction={executeMultisigLitAction}
                userPkp={userPkp}
                isSigningProposal={isSigningProposal}
                isLoading={isProposalLoading}
              />
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