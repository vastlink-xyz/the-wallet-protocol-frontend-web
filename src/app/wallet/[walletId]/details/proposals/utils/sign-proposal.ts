import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { getSessionSigsByPkp, litNodeClient } from "@/lib/lit";
import { getPersonalSignIpfsId } from "@/lib/lit/ipfs-id-env";
import { log } from "@/lib/utils";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import axios from "axios";

interface ISignPrposalParams {
  proposal: MessageProposal;
  userPkp: IRelayPKP;
  authMethod: AuthMethod;
  authMethodId: string;
}

export const signProposal = async ({
  proposal,
  userPkp,
  authMethod,
  authMethodId,
}: ISignPrposalParams) => {
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