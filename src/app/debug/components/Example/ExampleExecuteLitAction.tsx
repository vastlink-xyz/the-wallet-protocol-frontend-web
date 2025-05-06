import { Button } from "@/components/ui/button";
import { litNodeClient } from "@/lib/lit/googleProvider";
import { log } from "@/lib/utils";
import { LitActionResource, LitPKPResource } from "@lit-protocol/auth-helpers";
import { LIT_ABILITY } from "@lit-protocol/constants";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { AuthMethod } from "@lit-protocol/types";
import { ethers } from "ethers";

// pkp sign anything
// const pkp = {
//   "ethAddress" : "0xd027F558d7ae10E673816adb5CdCc23be7814C0e",
//   "publicKey" : "0x04042e218a8729f011641a78da1939ab72299ebb70a0ba750645468311694ad1f24787945ebb91fe24caa76717203546748e89d4c589fe76bfa9e1fbd55f118eb0",
//   "tokenId" : "0xb7aaf498c4d450855f7a3cccc900b24b348f0e108d5d5a7ba9072e9403f6ff4e",
// }

const pkp = {
  "tokenId": "0x5a5f7528df0d67183dd217d928b5f4a1c5b8c14a03e10ca05d5e9f9b105165f5",
  "publicKey": "0x041bfce33110a0c0131787466c22435ad603218c12a8183282c07f515eb3c58b3c55041d54f8eee54e20ee8bf7823f9ddcf6fc759be2172659e6ae3ea3789492e1",
  "ethAddress": "0x40d677EDE3614ED208308086F39fb120c43bF593"
}

// const litActionIpfsId = 'QmRTgmq6YrxQNtunMFTB9qkUpHgCiYQLbBV1Qctmf5XNpB'
const litActionIpfsId = 'QmUZ1u3roPVb2BGsqCbKxGVHk5E8LVHR7dD8ovEbUtKSTV'

export function ExampleExecuteLitAction({
  authMethod,
}: {
  authMethod: AuthMethod;
}) {
  const getSessionSigs = async () => {
    if (!litNodeClient.ready) {
      await litNodeClient.connect();
    }

    const sessionSigs = await litNodeClient.getPkpSessionSigs({
      pkpPublicKey: pkp.publicKey,
      // expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours
      authMethods: [authMethod],
      resourceAbilityRequests: [
        {
          resource: new LitPKPResource('*'),
          ability: LIT_ABILITY.PKPSigning,
        },
        {
          resource: new LitActionResource('*'),
          ability: LIT_ABILITY.LitActionExecution,
        }
      ],
    });
  
    return sessionSigs;
  }

  const handleExecuteLitAction = async () => {
    log('authMethod', authMethod)
    const sessionSigs = await getSessionSigs();
    log('sessionSigs', sessionSigs)
    const authMethodId = await getAuthIdByAuthMethod(authMethod)
    const response = await litNodeClient.executeJs({
      ipfsId: litActionIpfsId, // Use IPFS ID to ensure immutability
      // authMethods: [authMethod],
      sessionSigs,
      jsParams: {
        tokenId: pkp.tokenId,
        authMethodType: '0x6',
        userId: ethers.utils.arrayify(authMethodId),
        accessToken: authMethod.accessToken,
        message: 'Hello, world!',
        publicKey: pkp.publicKey,
        sigName: 'sign-proposal',
        executeAnotherAction: false,
        subLitActionIpfsId: 'QmZJX4QCMd4YVR4CnGYdQMKPRaf1kWDRj7ZFtQaeSEPfdP',
        subLitActionParams: {
          magicNumber: 43,
        }
        // accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA3YjgwYTM2NTQyODUyNWY4YmY3Y2QwODQ2ZDc0YThlZTRlZjM2MjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0OTA0MzM2ODY3MTctZDJqM2Izb2NwdTFxZGFxcWwzOGM1Z2U4NDFmdTc1cDcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0OTA0MzM2ODY3MTctZDJqM2Izb2NwdTFxZGFxcWwzOGM1Z2U4NDFmdTc1cDcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDYyOTE0ODk3NDI3NzEzODE0NzYiLCJlbWFpbCI6InpreWVzaHVvZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ0Q1pYTmk4LTJGdUlsSXEzUzdmMF93IiwiaWF0IjoxNzQ2NDM1MDYwLCJleHAiOjE3NDY0Mzg2NjB9.hi6Il6fLFoQQRhVVD0tIiYri_N5RwlYa52p1kY7rcrg8JM0V4vodJCRYNkZWrU-fuVBIsEQE_ybzxY6S7UJRikbzjfTO_qd-KabbyVJo7qELklUtVClAfbhlOpJUtvZJyZ3njPNur8ZPrXuBJe9aGAbXH8DipCLlxkf20okFkBqPnflDVWDiu9ZCbkPSKhFO332RfVkQLEu647A-1YVq5EDHYrv4fw2ft_H-jDGkIVZrwj1UL9k1LfWaGk3eDttdcE4U86VnLh5ZnfpmtedK-1vREzl9YmlIiCiSQENIHE60WjAS9vnq7UFTwbvAnBCS9brWFqcK9MMH8pCa0PpPFA',
      },
    });
    log('response', response)
  }

  return <div>
    <Button onClick={handleExecuteLitAction}>Execute Lit Action</Button>
  </div>;
}
