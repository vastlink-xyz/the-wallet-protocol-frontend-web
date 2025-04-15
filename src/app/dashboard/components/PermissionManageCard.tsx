import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { litNodeClient, SIGN_EIP_191_LIT_ACTION_IPFS_ID_2 } from "@/lib/lit";
import { log } from "@/lib/utils";
import { IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { AUTH_METHOD_SCOPE } from "@lit-protocol/constants";

interface SignMessageCardProps {
  currentPkp: IRelayPKP;
  sessionSigs: SessionSigs;
}

export function PermissionManageCard({
  currentPkp,
  sessionSigs,
}: SignMessageCardProps) {
  const handleAddLitActionPermission = async () => {
    try {
      await litNodeClient.connect();

      if (!sessionSigs) {
        throw new Error('Session signatures not found');
      }

      if (!currentPkp) {
        throw new Error('Current pkp not found');
      }

      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: currentPkp.publicKey,
        litNodeClient: litNodeClient,
      });

      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      log('start to add other lit action...')
      await litContracts.addPermittedAction({
        ipfsId: SIGN_EIP_191_LIT_ACTION_IPFS_ID_2,
        pkpTokenId: currentPkp.tokenId,
        authMethodScopes: [AUTH_METHOD_SCOPE.SignAnything],
      })
      log('add lit action successfully')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-card p-4 rounded-lg border mb-6">
      <h2 className="text-lg font-semibold mb-2">Permission Manage</h2>
      <Button onClick={handleAddLitActionPermission}>Add Another Lit Actioin Permission</Button>
    </div>
  );
} 