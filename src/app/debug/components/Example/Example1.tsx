import { Button } from "@/components/ui/button";
import { litNodeClient } from "@/lib/lit";
import { log } from "@/lib/utils";
import { LitPKPResource } from "@lit-protocol/auth-helpers";

import { LitActionResource } from "@lit-protocol/auth-helpers";
import { LIT_ABILITY } from "@lit-protocol/constants";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { AuthMethod, SessionSigs } from "@lit-protocol/types";
import { ethers } from "ethers";

// bind google jwt and lit action
// const pkp = {
//   "tokenId": "0x2114eedb9ba61a28d3b533ab647bce43d783eb23b8000cc9179512363865780d",
//   "publicKey": "0x040c759ca5d4461247d5bb811f38d49499add034fa24b2b0720e0edefb516a8dfa70074fff5873ced570bd266a1c319c95ba1f7c5d7816206550f74267d05bf690",
//   "ethAddress": "0x81a04c752371f2a70fD0e2E262a1d9c9d66a6056"
// }

// bind lit action
// const pkp = {
//   "tokenId": "0x73405643dd7cd85ba096893c4662fc418900ae0c6183ab9994c597e56f81c3b0",
//   "publicKey": "0x045a7d4f4f106b512c478a04265ed0b285c2d1d107bdbabe0c8c9993aa83b8adc2d1bc34f7b353903e5654786593c465961c63a9b83bbbbf90d72d95aece79a656",
//   "ethAddress": "0x6a2F731e8b07899077e2d9f865EF0FF78329FDac"
// }

// bind 2 different actions
const pkp = {
  "tokenId": "0x2ef8d153abc9c13bd76887b49c0dcae9f50abbca972e713719d08dd7e50138b9",
  "publicKey": "0x044fe1484406f2079d1b5524a154d12fafef4fa9c94dea07f5adb6e7eaf81676f1ea22a38844271cb1f0f481fc1dd901475e4c0173a05f38b00dfead8e10464540",
  "ethAddress": "0x4f4e13C4043A4E99201d43c0D95c34aAf55d8831"
}

export function Example1({
  authMethod,
  pkpPublicKey,
}: {
  authMethod?: AuthMethod;
  pkpPublicKey: string;
}) {
  const getSessionSigs = async () => {
    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }

    const sessionSignatures = await litNodeClient.getPkpSessionSigs({
      pkpPublicKey: '0x041043714804e4236e3fabba7e068571eb7f878754ed1d67d4a1328f764d7acf9d8af7d3b13d834eb3ed4746da68660e848d97e6fbf7feed16f7cd09c9188046c7',
      chain: "ethereum",
      authMethods: [authMethod!],
      resourceAbilityRequests: [
        {
          resource: new LitPKPResource('*'),
          ability: LIT_ABILITY.PKPSigning,
        },
        {
          resource: new LitActionResource("*"),
          ability: LIT_ABILITY.LitActionExecution,
        },
      ],
      // litActionIpfsId: 'QmZdAipjUhGYGkV5TsDVRCE5UG8nJdM9X8z3gtbn7BkdAK',
      // litActionIpfsId: 'Qme2Xoo5zB29e45cDiFz1Fb9iSKYyVZVZtBGZtYDjkEqLr',
      // jsParams: {
      //   magicNumber: 42,
      // },
    });
    log('session sigs', sessionSignatures)

    return sessionSignatures
  }

  const handleExecuteJs = async () => {
    const litActionIpfsId = 'QmUUR1QK2DVS9CfD6b5ggBtvH9UTJuirmCBcMAXkrj2P8p'
    // const litActionIpfsId = 'QmNr3D6Rpgdr4j2ShXRcdMgoxRt7Z2guvDpNDjewZNwaYX'
    // const litActionIpfsId = 'QmZaxsFecnKsPKSGc4XE2vC6dJFosM2VnAaELbudXRPGgN'
    const sessionSigs = await getSessionSigs()
    // Execute Lit Action using only its IPFS ID
    // Note: No code string option provided, only using IPFS ID
    const response = await litNodeClient.executeJs({
      ipfsId: litActionIpfsId, // Use IPFS ID to ensure immutability
      sessionSigs,
      jsParams: {
        publicKey: '0x045e0180adf3774affd6c9f57d6ac15c8f0c64fd2832334e977de8a03c2bd54ce49700c61a4897a063b1c58982aa6717c9ea738207df454a3b128a5e4a412aab8b',
        message: 'hi',
        sigName: 'sig'
      },
    });

    log('res', response)
    
    return response;
  }

  const handleSignMessageWithPKP = async () => {
    try {
      // await litNodeClient.connect();

      if (!pkp || !authMethod) {
        return
      }

      log('current pkp', pkp)

      const sessionSigs = await getSessionSigs()
      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: pkp.publicKey,
        litNodeClient: litNodeClient,
      });

      await pkpWallet.init();
      log('pkpWallet init')

      const message = 'hi'
      
      const signature = await pkpWallet.signMessage(message);

      // Get the address associated with the signature created by signing the message
      const recoveredAddr = ethers.utils.verifyMessage(message, signature);

      // Check if the address associated with the signature is the same as the current PKP
      const verified = pkp.ethAddress.toLowerCase() === recoveredAddr.toLowerCase();
      log('verified', verified)
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  return <div>
    <Button onClick={getSessionSigs}>get session sigs by lit action</Button>
    <Button onClick={handleExecuteJs}>execute lit action</Button>
    <Button onClick={handleSignMessageWithPKP}>sign message with pkp</Button>
  </div>;
}
