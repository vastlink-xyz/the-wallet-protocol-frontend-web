import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { litActionContext, litNodeClient } from "@/lib/lit";
import { getMultisigTransactionIpfsId, getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env";
import { log } from "@/lib/utils";
import { IRelayPKP } from "@lit-protocol/types";
import axios from "axios";
import { fetchUpdatedWallet, getTransactionDetails, sendNotificationsToNewSigners } from "./proposal";
import { sendProposalExecutedNotification } from "@/lib/notification/proposal-executed-notification";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { getToSignTransactionByTokenType } from "@/lib/web3/transaction";
import { getVastbaseAuthMethodType } from "@/lib/lit/custom-auth";

interface IExecuteWalletSettingsProposalParams {
  proposal: MessageProposal;
  sessionSigs: any;
  wallet: MultisigWallet;
  walletPkp: IRelayPKP;
  accessToken: string;
  authMethodId: string;
  providerType: string;
  pinCode?: string;
  mfaType?: string;
  mfaCode?: string;
  mfaMethodId?: string | null;
  userEmail?: string;
}

interface IExecuteTransactionProposalParams {
  proposal: MessageProposal;
  sessionSigs: any;
  wallet: MultisigWallet;
  walletPkp: IRelayPKP;
  accessToken: string;
  providerType: string;
  authMethodId: string;
  pinCode?: string;
  mfaType?: string;
  mfaCode?: string;
  mfaMethodId?: string | null;
}

export const executeWalletSettingsProposal = async ({
  proposal,
  sessionSigs,
  wallet,
  walletPkp,
  accessToken,
  authMethodId,
  providerType,
  pinCode,
  mfaType,
  mfaCode,
  mfaMethodId,
  userEmail,
}: IExecuteWalletSettingsProposalParams) => {
  // Check if proposal is still pending
  if (proposal.status !== 'pending') {
    throw new Error(`Cannot execute proposal with status: ${proposal.status}`);
  }

  const updateWalletIpfsId = await getUpdateWalletIpfsId("base58")

  const litActionResponse = await litNodeClient.executeJs({
    ipfsId: updateWalletIpfsId,
    sessionSigs,
    jsParams: {
      authParams: {
        accessToken,
        providerType: providerType,
        pkpTokenId: walletPkp.tokenId,
        authMethodId: authMethodId,
        authMethodType: getVastbaseAuthMethodType(),
        devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION_LOCAL_ONLY || '',
      },
      publicKey: walletPkp.publicKey,
      vastbaseAuthMethodType: getVastbaseAuthMethodType(),
      env: process.env.NEXT_PUBLIC_ENV,
      devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION_LOCAL_ONLY || '',
      walletId: wallet.id,
      proposalId: proposal.id,
      pinCode: pinCode || '',
      mfaType: mfaType || '',
      mfaCode: mfaCode || '',
      mfaMethodId: mfaMethodId || '',
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

    // Find new signers and send notifications
    const updatedWallet = await fetchUpdatedWallet(wallet.id);
    const settingsData = proposal.settingsData
    if (updatedWallet && settingsData?.signers) {
      // Send notifications to new signers
      sendNotificationsToNewSigners(wallet, updatedWallet, userEmail);
    }

    // Send proposal executed notification to all approvers
    try {
      const notificationResult = await sendProposalExecutedNotification({
        proposalType: 'settings',
        proposal,
        wallet,
      });

      if (notificationResult.success) {
        log(`Proposal executed notifications sent to ${notificationResult.totalSent} approver(s)`);
      } else {
        console.error('Failed to send proposal executed notifications:', notificationResult.error);
      }
    } catch (error) {
      console.error('Error sending proposal executed notifications:', error);
    }
  }

  return response
}

const sendAddressByTokenType = ({
  tokenType,
  walletPkp,
  wallet
}: {
    tokenType: TokenType,
    walletPkp: IRelayPKP,
    wallet: MultisigWallet
}) => {
  if (tokenType === 'ETH') {
    return walletPkp?.ethAddress
  } else if (tokenType === 'BTC') {
    return wallet?.addresses.btc || ''
  } else if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
    return walletPkp?.ethAddress
  }
  
  throw new Error(`Unsupported token type: ${tokenType}`)
}

// Function to execute transaction proposal
export const executeTransactionProposal = async ({
  proposal,
  walletPkp,
  wallet,
  accessToken,
  providerType,
  authMethodId,
  sessionSigs,
  pinCode,
  mfaType,
  mfaCode,
  mfaMethodId,
}: IExecuteTransactionProposalParams) => {
  // Check if proposal is still pending
  if (proposal.status !== 'pending') {
    throw new Error(`Cannot execute proposal with status: ${proposal.status}`);
  }

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

  const tokenType = txDetails.tokenType as TokenType
  const txData = await getToSignTransactionByTokenType({
    tokenType,
    options: {
      sendAddress: sendAddressByTokenType({
        tokenType,
        walletPkp,
        wallet,
      }),
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
    chainType: SUPPORTED_TOKENS_INFO[tokenType].chainType,
    toSignTransaction: txData.toSign,
    transactionAmount: txDetails.value,
    litActionContext,
    authParams: {
      accessToken,
      authMethodId: authMethodId,
      providerType: providerType,
      pkpTokenId: walletPkp.tokenId,
      authMethodType: getVastbaseAuthMethodType(),
      devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION_LOCAL_ONLY || '',
    },
    pinCode: pinCode || '',
    mfaType: mfaType || '',
    mfaCode: mfaCode || '',
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
  return {
    response,
    txData,
    tokenType,
  }
}