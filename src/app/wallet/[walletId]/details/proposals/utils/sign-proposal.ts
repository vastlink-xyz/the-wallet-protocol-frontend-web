import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { litActionContext, litNodeClient } from "@/lib/lit";
import { getPersonalSignIpfsId } from "@/lib/lit/ipfs-id-env";
import { log } from "@/lib/utils";
import { IRelayPKP } from "@lit-protocol/types";
import axios from "axios";
import { getMultiProviderSessionSigs } from "@/lib/lit/pkpManager";
import { getVastbaseAuthMethodType, AuthProviderType } from "@/lib/lit/custom-auth";

interface ISignPrposalParams {
  proposal: MessageProposal;
  wallet: MultisigWallet;
  userPkp: IRelayPKP;
  accessToken: string;
  authMethodId: string;
  providerType: AuthProviderType;
  userEmail: string;
}

export const signProposal = async ({
  proposal,
  wallet,
  userPkp,
  accessToken,
  authMethodId,
  providerType,
  userEmail,
}: ISignPrposalParams) => {
  // Validate that the current user is a signer of the wallet
  const isUserSigner = wallet.signers.some(signer => 
    signer.ethAddress.toLowerCase() === userPkp.ethAddress.toLowerCase()
  );

  if (!isUserSigner) {
    throw new Error('User is not authorized to sign proposals for this wallet');
  }

  const litActionIpfsId = await getPersonalSignIpfsId('base58')
  log('litActionIpfsId', litActionIpfsId)

  if (!litNodeClient.ready) {
    await litNodeClient.connect();
  }

  const sessionSigs = await getMultiProviderSessionSigs({
    pkpPublicKey: userPkp.publicKey,
    pkpTokenId: userPkp.tokenId,
    accessToken,
    providerType,
    userEmail,
  })
  log('session sigs', sessionSigs)

  const actionResponse = await litNodeClient.executeJs({
    ipfsId: litActionIpfsId,
    sessionSigs,
    jsParams: {
      message: proposal.message,
      publicKey: userPkp.publicKey,
      litActionContext,
      authParams: {
        accessToken,
        providerType,
        pkpTokenId: userPkp.tokenId,
        authMethodId: authMethodId,
        authMethodType: getVastbaseAuthMethodType(),
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

  return response
}