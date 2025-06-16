import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { litNodeClient } from "@/lib/lit";
import { getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env";
import { log } from "@/lib/utils";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import axios from "axios";
import { fetchUpdatedWallet, sendNotificationsToNewSigners } from "./proposal";
import { sendProposalExecutedNotification } from "@/lib/notification/proposal-executed-notification";

interface IExecuteWalletSettingsProposalParams {
  proposal: MessageProposal;
  sessionSigs: any;
  wallet: MultisigWallet;
  walletPkp: IRelayPKP;
  authMethod: AuthMethod;
  authMethodId: string;
}

export const executeWalletSettingsProposal = async ({
  proposal,
  sessionSigs,
  wallet,
  walletPkp,
  authMethod,
  authMethodId,
}: IExecuteWalletSettingsProposalParams) => {

  const updateWalletIpfsId = await getUpdateWalletIpfsId("base58")

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

    // Find new signers and send notifications
    const updatedWallet = await fetchUpdatedWallet(wallet.id);
    const settingsData = proposal.settingsData
    if (updatedWallet && settingsData?.signers) {
      // Send notifications to new signers
      sendNotificationsToNewSigners(wallet, updatedWallet);
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
