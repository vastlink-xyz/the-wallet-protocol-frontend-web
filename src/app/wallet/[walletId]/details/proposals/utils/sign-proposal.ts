import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { getSessionSigsByPkp, litNodeClient } from "@/lib/lit";
import { getPersonalSignIpfsId } from "@/lib/lit/ipfs-id-env";
import { log } from "@/lib/utils";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import axios from "axios";

interface ISignPrposalParams {
  proposal: MessageProposal;
  wallet: MultisigWallet;
  userPkp: IRelayPKP;
  authMethod: AuthMethod;
  authMethodId: string;
}

export const signProposal = async ({
  proposal,
  wallet,
  userPkp,
  authMethod,
  authMethodId,
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

  const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true})
  log('session sigs', sessionSigs)

  const actionResponse = await litNodeClient.executeJs({
    ipfsId: litActionIpfsId,
    sessionSigs,
    jsParams: {
      message: proposal.message,
      publicKey: userPkp.publicKey,
      env: process.env.NEXT_PUBLIC_ENV,
      devUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
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

  return response
}