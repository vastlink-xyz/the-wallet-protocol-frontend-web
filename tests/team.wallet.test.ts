import { describe, it, expect } from 'vitest';

import { LitRelay } from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';

import { ExecuteTransactionParams, executePersonalTransaction } from '@/services/personalTransactionService';
import { AuthProviderType } from '@/lib/lit/custom-auth';

import { createAndApproveTransactionProposal, CreateAndApproveTransactionProposalParams, executeTeamTransactionProposal, inviteTeamUser } from '@/services/teamTransactionService';
import { approveProposal, IApprovePrposalParams } from '@/app/wallet/[walletId]/details/proposals/utils/sign-proposal';
import { createTeamWallet } from '@/services/teamWalletService';
import { executeTransactionProposal } from '@/app/wallet/[walletId]/details/proposals/utils/execute-proposal'

import { theUser, theUserA, theUserB, testConfig } from './fixtures';

const user_A_creates_a_team_wallet = async () => {
  const input = {
    authMethod: {
      authMethodType: 37246459,
      authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
      providerType: "email_otp",
      primaryEmail: "johnny@vastlink.xyz",
    },
    authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
    signerAuthMethodIds: [
      "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
    ],
    authMethodType: 37246459,
    dailyLimits: {
      BTC: "0.001",
      ETH: "0.1",
      USDT: "100",
      USDC: "100",
      LITKEY: "100",
      VAST: "100",
    },
    walletName: `Team Wallet ${Date.now()}`,
    actualSigners: [
      {
        email: "johnny@vastlink.xyz",
        ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
        publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
        authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
      },
    ],
    actualThreshold: 1,
    sessionSigs: {
      "https://23.81.180.7:443": {
        sig: "4c9c9168501e6117330e3b2e7dc8b85947ec109e293c25e7522fdc922c3588e1f00d079dfb1d0edecac24c88bb8899dfd7087c048d34241dc59ac7129951160c",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0xa0b46b75192b67de62613ab62b093b5a56488d439aa9adbb3bc59abe34390ff67bc38e13b25eb57fdcf31c4ee51ccd3658334e6ecacd52f9f2b53c88e51f5ced1b\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:36.861Z\\nExpiration Time: 2025-09-30T03:00:36.858Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"9179ac3e94504846d4e97a503ae52b709d4bc19499b56f279c5def8e52c72db5640099ef3b50e087f444f312cf7804a008a4b6cd17757a4a85fdcdbfbe7f39410cc0c0566ef6b1aa677bd078b7ec6f96671906ca58c34115152a2ae68a21ec83\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:23Z\\nExpiration Time: 2025-09-23T03:10:36.868Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-23T03:00:42.911Z\",\"expiration\":\"2025-09-23T03:10:36.868Z\",\"nodeAddress\":\"https://23.81.180.7:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://162.210.195.37:443": {
        sig: "364aaf4f6feaf82c2ef84cdcb3314db5f3f7ede64c7118fb20331442c58f07951e0d95b8d2b1775258490e31b7f72d84fd6c710640d7a0384bd65a7ef74f8802",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0xa0b46b75192b67de62613ab62b093b5a56488d439aa9adbb3bc59abe34390ff67bc38e13b25eb57fdcf31c4ee51ccd3658334e6ecacd52f9f2b53c88e51f5ced1b\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:36.861Z\\nExpiration Time: 2025-09-30T03:00:36.858Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"9179ac3e94504846d4e97a503ae52b709d4bc19499b56f279c5def8e52c72db5640099ef3b50e087f444f312cf7804a008a4b6cd17757a4a85fdcdbfbe7f39410cc0c0566ef6b1aa677bd078b7ec6f96671906ca58c34115152a2ae68a21ec83\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:23Z\\nExpiration Time: 2025-09-23T03:10:36.868Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-23T03:00:42.911Z\",\"expiration\":\"2025-09-23T03:10:36.868Z\",\"nodeAddress\":\"https://162.210.195.37:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://207.244.72.175:443": {
        sig: "5b334de9bda729ba9346ad51a7cd82b1cbb2a7fbda647dbe02a15346011fb90d1237c7bf457b8e78ed605e58ab9fc801e62cbdf3c24fc303ecb99a680a1e2e0a",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0xa0b46b75192b67de62613ab62b093b5a56488d439aa9adbb3bc59abe34390ff67bc38e13b25eb57fdcf31c4ee51ccd3658334e6ecacd52f9f2b53c88e51f5ced1b\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:36.861Z\\nExpiration Time: 2025-09-30T03:00:36.858Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"9179ac3e94504846d4e97a503ae52b709d4bc19499b56f279c5def8e52c72db5640099ef3b50e087f444f312cf7804a008a4b6cd17757a4a85fdcdbfbe7f39410cc0c0566ef6b1aa677bd078b7ec6f96671906ca58c34115152a2ae68a21ec83\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:23Z\\nExpiration Time: 2025-09-23T03:10:36.868Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-23T03:00:42.911Z\",\"expiration\":\"2025-09-23T03:10:36.868Z\",\"nodeAddress\":\"https://207.244.72.175:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://51.255.59.58:443": {
        sig: "4da0744cecdb6605dd78517d62f598cc9268063f70f2967f7af591fb9bbd3c6cae5f85198b4c0c46970394285c63c5fe107e9d7e30216bc12e16aa04b5339e08",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0xa0b46b75192b67de62613ab62b093b5a56488d439aa9adbb3bc59abe34390ff67bc38e13b25eb57fdcf31c4ee51ccd3658334e6ecacd52f9f2b53c88e51f5ced1b\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:36.861Z\\nExpiration Time: 2025-09-30T03:00:36.858Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"9179ac3e94504846d4e97a503ae52b709d4bc19499b56f279c5def8e52c72db5640099ef3b50e087f444f312cf7804a008a4b6cd17757a4a85fdcdbfbe7f39410cc0c0566ef6b1aa677bd078b7ec6f96671906ca58c34115152a2ae68a21ec83\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:23Z\\nExpiration Time: 2025-09-23T03:10:36.868Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-23T03:00:42.911Z\",\"expiration\":\"2025-09-23T03:10:36.868Z\",\"nodeAddress\":\"https://51.255.59.58:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://167.114.17.202:443": {
        sig: "fc586fa396f7b2d2d459126d2edb1292859349a6059505df3c58d0271824604ea853af634dd406ca7b9e7e253af78c1719a5919a2ddf01d24804c4c4de137d06",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0xa0b46b75192b67de62613ab62b093b5a56488d439aa9adbb3bc59abe34390ff67bc38e13b25eb57fdcf31c4ee51ccd3658334e6ecacd52f9f2b53c88e51f5ced1b\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:36.861Z\\nExpiration Time: 2025-09-30T03:00:36.858Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"9179ac3e94504846d4e97a503ae52b709d4bc19499b56f279c5def8e52c72db5640099ef3b50e087f444f312cf7804a008a4b6cd17757a4a85fdcdbfbe7f39410cc0c0566ef6b1aa677bd078b7ec6f96671906ca58c34115152a2ae68a21ec83\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:23Z\\nExpiration Time: 2025-09-23T03:10:36.868Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-23T03:00:42.911Z\",\"expiration\":\"2025-09-23T03:10:36.868Z\",\"nodeAddress\":\"https://167.114.17.202:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://158.69.163.138:443": {
        sig: "4b44a8678c3acd5e6a78ea247b439fe0047dde46705c9addc656c3578bb5602ce54294653490e2661eda93fa429991da6eba670874e6cf1a68e154d0308a3509",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0xa0b46b75192b67de62613ab62b093b5a56488d439aa9adbb3bc59abe34390ff67bc38e13b25eb57fdcf31c4ee51ccd3658334e6ecacd52f9f2b53c88e51f5ced1b\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:36.861Z\\nExpiration Time: 2025-09-30T03:00:36.858Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"9179ac3e94504846d4e97a503ae52b709d4bc19499b56f279c5def8e52c72db5640099ef3b50e087f444f312cf7804a008a4b6cd17757a4a85fdcdbfbe7f39410cc0c0566ef6b1aa677bd078b7ec6f96671906ca58c34115152a2ae68a21ec83\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0xbacd238a91f9c7dc71fc3681cfc2b56a9503f41dd8c742b1f539fa959097b0dd\\nIssued At: 2025-09-23T03:00:23Z\\nExpiration Time: 2025-09-23T03:10:36.868Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-23T03:00:42.911Z\",\"expiration\":\"2025-09-23T03:10:36.868Z\",\"nodeAddress\":\"https://158.69.163.138:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
    },
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTg1Mjc5MzIsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LWEyYWY5Yjg4LTM3ODktNGI2ZC1hOWI5LWUwNmE0MjkzOTRjNiIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUxWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUyWiIsImV4cGlyZXNfYXQiOiIyMDI1LTA5LTI5VDA3OjUzOjUxWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0yMlQwNzo1Mzo1MVoiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LTU4MzIzYmI1LWUxMzgtNGE1NC05YTM3LWRmMjZhNTFjNGEzNiIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnlAdmFzdGxpbmsueHl6In19XX0sImlhdCI6MTc1ODUyNzYzMiwiaXNzIjoic3R5dGNoLmNvbS9wcm9qZWN0LXRlc3QtMGUyNTJiNGQtNDQzOS00ZWMyLWI1ODgtZTdkMDUwZmQ4YjNiIiwibmJmIjoxNzU4NTI3NjMyLCJzdWIiOiJ1c2VyLXRlc3QtNWU3ODNmZWItZTlkNS00ZjU5LWFlYTMtNWQ5OWM4MDljOWJkIn0.j_RPy_TaS3uapqJX9A-UiN_iGZ-hTA6O8q64CMCfhlNF_xWH0vsG1ydlg_DxdwOUNNfvkAeYSh21a9msc-XgVjm2R02yTwFw9JNS5Y-o43KFQnIoanxe23WlgMoPJycBh8GxY0ikLwzJHg9oD7BfpCCQ-uOep-6UeqiPsR3f_YgftsDgIQ9YLLjkLjClWRvE7r7TIUd9D-ehCtmu-dHYRPN5KVM69ev-pKrgvKSchGJ-EIy6QCgTDyYPrev8dAchZviIjXPROVicNlDHgc2QnWEWgkv6KDPw--p8pLoSIGtVFeXswXvgkzujkPz5UavtOBPlOHUfjUcNFscnhpMugQ",
    userPkp: {
      ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
      publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
      tokenId: "0xb04d483ce0bd5a2b56a4c3e453047d66c901bf3b9cdb0c6207c283f134d1a229",
      type: "litAction",
    },
    currentUserEmail: "johnny@vastlink.xyz",
    hasUnregisteredUsers: false,
    handleWalletInvitations: async () => {},
    toastSuccess: () => {},
  }

  return await createTeamWallet(input);
};

const user_A_creates_a_proposal_which_requires_user_B_to_approve = async () => {
  const input : CreateAndApproveTransactionProposalParams = {
    state: {
      to: "0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1",
      recipientAddress: "0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1",
      amount: "0.0001",
      tokenType: "LITKEY",
      mfaMethodId: null,
      mfaPhoneNumber: null,
    },
    wallet: {
      id: "6c3179a7-749b-4ea6-ac01-8ab7091005c8",
      pkp: {
        ethAddress: "0x0a9164b7f43aCbfEf5D97594aB79204d5071EaDe",
        publicKey: "0x048f50495696295673ca1bb495e73c59d8d519ee9fa76fed7ec7df246f6b4197f08a60fe2c06591fcb20a15b324b4a39a20fdbeae77aec930cd28d78cf8c25d249",
        tokenId: "0x501269ec6096b2373852ba44540792ebd9a66a023c5d649e6e94cfec9466dca6",
      },
      signers: [
        {
          ethAddress: "0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1",
          publicKey: "0x048e25d22799f386438f0631053d72470fcc357504795521b1bfe7da0a260e2dd208899f46887e7176fd592134412f5abcbb13fd7566749435afc1b2fbcd06b95b",
          email: "johnny.nan.jiang@gmail.com",
          authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
          // _id: "68d107763c2711b8805baabd",
        },
        {
          ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
          publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
          email: "johnny@vastlink.xyz",
          authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
          // _id: "68d107763c2711b8805baabe",
        },
      ],
      threshold: 2,
      ciphertext: "hUjguVYiXmjTVF9xi5drAUUb1PSO+A2QlCImAIjNU4P5cMD9GACGb08Akejmya56iBUKf/fR+KMq4OXSSh4boR0BsVuLnzd3erHT3iOmLPyWBjTJIOiLuHEqiYNfb2uyaJv6MFqMANamB/FJ3qzDj+gsHYDrg4dUaDhTWGKJEaMYMVhOUoGZoXgq4DXHIXzkO1S7Tr6pfoZBcoSofq+rAUzi1+KUPjxNuG2LMWYg+YAgvZiP0uTSUHKQArtnMTjCisuut1bc283ycFDjtyyg7o9vzRGWKm3RbaVYspjbXuP18kx31euGuw/w0QAW9FNylZzBt8ANpqk0jQuwaJ1i9qEhard7OTEDlfIN5t+I0XyGcPt9SbyntU9Z8BzC/2Q60eK7vDjoP/8E8ZDhTTzK+firuRSJlGuL9HSVsjMNmu8Rqw2/4UapILJfrIjzkNrATe8r1hXOZWPcCU+amArVSzZfk3Yeupv0VhCcEwSk121G6ONzfUlEKPGjaDobmXQ0atDQBhh0jPFX5x3LYddGojFSj0LRibkrCsqSJNUTI9tyAI5Y8cZ5xltHMP2o8mW+Kbrqd/fHb2mxO1BlB1pfKz6AA03+QrPuS3rKCVyFcnfEejOS2fkKL9EKP1b6YNXy8FcPTGXc28lic6CcvS7V/vfanpcpzXwc/IvDR+3LoeBMpuRfS7NkO+hnh8+02QmqSA4sFpiqRz55vVhRSynMqice2k1+PPVFD5CghC3eoU3AuqwfdjCiM7BBqeKH6A6XHMZKwrZno/Y+YLpevbzlMd13V5o9q3i72n5VyPAgxpaUqMXZiXm26p7JKM4DSb+y26JJP9b3FbspixzQa0lbdDBNQbixSGT6pN42np1rSH0zuZsByMuORUw8acCLi43Umk4eE2UInIP0JZ4+45Rn2zNeRBSrPpKR6gprlh5K5/TXWW5BTe2FTqA9SvFc65DKC37wzGL50u8lujPCn8ldBeW26IOVlvFUpSSKH65D3MlsPzmUSatelp8JpPhIdIOJCYj5p4XTRFhLPr+eyKmg4fyl5XsB+xuXGatq64J/iS72WJlbkGezMJcDnxUMdUABz5yjS3j9DT03VaEUHcUVS0FcdoXWoWvYXoW0DZL0nii2g17jZrbEB5N8BNSx4Y3Aa50l3dr72wwC",
      dataToEncryptHash: "ff506c19a013a13b0399367b0a6f49c124e4014a9b96dd225e711dbcc43c1fc1",
      dataToEncryptHashSignature: "0x238807edb634e00dc6be3ff8f65404403b2df177a6d4f43c8c171bcec486c1ba007accbfac615abc38087323d0308527db2230b9be82847412d940f7a0175d2c1b",
      metadata: {
        accessControlConditions: [
          {
            contractAddress: "",
            standardContractType: "",
            chain: "ethereum",
            method: "",
            parameters: [
              ":currentActionIpfsId",
            ],
            returnValueTest: {
              comparator: "=",
              value: "QmSTrAhbiX1F1HH6dLJ7C2uMeCCG15tRLZkbZdAaPk63qG",
            },
          },
        ],
        mfaSettings: {
          dailyLimits: {
            BTC: "0.001",
            ETH: "0.1",
            USDT: "100",
            USDC: "100",
            LITKEY: "100",
            VAST: "100",
          },
        },
        name: "Team Wallet 1",
      },
      name: "Team Wallet 1",
      addresses: {
        eth: "0x0a9164b7f43aCbfEf5D97594aB79204d5071EaDe",
        btc: "tb1qhnuy7y85tl73c3m7lgcym232gv6tpkvm5qv9r5",
      },
    },
    userPkp: {
      ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
      publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
      tokenId: "0xb04d483ce0bd5a2b56a4c3e453047d66c901bf3b9cdb0c6207c283f134d1a229",
      // type: "litAction",
    },
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTg1Mjc5MzIsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LWEyYWY5Yjg4LTM3ODktNGI2ZC1hOWI5LWUwNmE0MjkzOTRjNiIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUxWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUyWiIsImV4cGlyZXNfYXQiOiIyMDI1LTA5LTI5VDA3OjUzOjUxWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0yMlQwNzo1Mzo1MVoiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LTU4MzIzYmI1LWUxMzgtNGE1NC05YTM3LWRmMjZhNTFjNGEzNiIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnlAdmFzdGxpbmsueHl6In19XX0sImlhdCI6MTc1ODUyNzYzMiwiaXNzIjoic3R5dGNoLmNvbS9wcm9qZWN0LXRlc3QtMGUyNTJiNGQtNDQzOS00ZWMyLWI1ODgtZTdkMDUwZmQ4YjNiIiwibmJmIjoxNzU4NTI3NjMyLCJzdWIiOiJ1c2VyLXRlc3QtNWU3ODNmZWItZTlkNS00ZjU5LWFlYTMtNWQ5OWM4MDljOWJkIn0.j_RPy_TaS3uapqJX9A-UiN_iGZ-hTA6O8q64CMCfhlNF_xWH0vsG1ydlg_DxdwOUNNfvkAeYSh21a9msc-XgVjm2R02yTwFw9JNS5Y-o43KFQnIoanxe23WlgMoPJycBh8GxY0ikLwzJHg9oD7BfpCCQ-uOep-6UeqiPsR3f_YgftsDgIQ9YLLjkLjClWRvE7r7TIUd9D-ehCtmu-dHYRPN5KVM69ev-pKrgvKSchGJ-EIy6QCgTDyYPrev8dAchZviIjXPROVicNlDHgc2QnWEWgkv6KDPw--p8pLoSIGtVFeXswXvgkzujkPz5UavtOBPlOHUfjUcNFscnhpMugQ",
    authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
    providerType: AuthProviderType.EMAIL_OTP,
    userEmail: "johnny@vastlink.xyz",
    user: {
      id: "d1438c22-0ce5-4166-8049-bdec3302be52",
      authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
      primaryEmail: "johnny@vastlink.xyz",
      authProviders: [
        {
          providerType: AuthProviderType.EMAIL_OTP,
          sub: "user-test-5e783feb-e9d5-4f59-aea3-5d99c809c9bd",
          email: "johnny@vastlink.xyz",
          isEnabled: true,
          isPrimary: true,
          createdAt: new Date("2025-09-22T07:54:09.185Z"),
          // _id: "68d100a13c2711b8805ba93e",
        },
      ],
      litActionPkp: {
        ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
        publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
        tokenId: "0xb04d483ce0bd5a2b56a4c3e453047d66c901bf3b9cdb0c6207c283f134d1a229",
        type: "litAction",
      },
      walletSettings: {
        dailyWithdrawLimits: {
          BTC: "0.001",
          ETH: "0.1",
          USDT: "100",
          USDC: "100",
          LITKEY: "100",
          VAST: "100",
        },
        securityLayers: [
          {
            id: "382fcd73-67d6-43e0-a2d7-88b678f7e988",
            type: "EMAIL_OTP",
            category: "otp",
            config: {},
            priority: 20,
            isEnabled: true,
            isFallback: true,
          },
        ],
      },
      addresses: {
        eth: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
        btc: "tb1qhyjr4xnkwecyrxs6f9cpwgmx05up97ys443a8g",
      },
    },
    setIsSending: () => {},
    refreshNotifications:  () => {},
    executeTransactionHandler: async () => {},
    onProposalChange: undefined,
    setShowSendDialog:  () => {},
  };

  return await createAndApproveTransactionProposal(input);
}

const user_B_approves_the_proposal = async (proposal: any, wallet: any) => {
  const input: IApprovePrposalParams = {
    proposal,
    wallet,
    userPkp: {
      ethAddress: theUserB.ethAddress,
      publicKey: theUserB.publicKey,
      tokenId: theUserB.tokenId,
      // type: "litAction",
    },
    accessToken: theUserB.accessToken,
    authMethodId: theUserB.authMethodId,
    providerType: AuthProviderType.EMAIL_OTP,
    userEmail: theUserB.email,
  };

  const res1 = await approveProposal(input);

  return res1;
}

const user_B_executes_the_proposal = async (proposal: any, wallet: any) => {
  const input = {
    proposal: {
    _id: "68d33db1fe484137d38a8655",
    id: "488b2c54-8df3-40f5-b283-c7f4551adde2",
    __v: 0,
    createdAt: "2025-09-24T00:39:13.042Z",
    createdBy: {
      authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
      ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
      email: "johnny@vastlink.xyz",
    },
    message: "{\"to\":\"0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1\",\"value\":\"0.0001\",\"data\":\"0x\",\"tokenType\":\"LITKEY\"}",
    settingsData: {
      originalState: {
        threshold: 2,
        signers: [
          {
            ethAddress: "0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1",
            publicKey: "0x048e25d22799f386438f0631053d72470fcc357504795521b1bfe7da0a260e2dd208899f46887e7176fd592134412f5abcbb13fd7566749435afc1b2fbcd06b95b",
            email: "johnny.nan.jiang@gmail.com",
            authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
            _id: "68d107763c2711b8805baabd",
          },
          {
            ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
            publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
            email: "johnny@vastlink.xyz",
            authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
            _id: "68d107763c2711b8805baabe",
          },
        ],
      },
    },
    signatures: [
      {
        signer: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
        signature: "0x41cbea6fbd762aa2291d122ce7d33dc55189a14beb91886f6dec0f244fe98774297219c0863ce6024eba9b373f343cb73f132bca621e216b9b55257e5605e1a21c",
        publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
        _id: "68d33dc89272e835981012d8",
      },
      {
        signer: "0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1",
        signature: "0xc9e25835469f526c35bd5d8382697db1333e4d80eeceb7d782af58e56cb23b17418f04c2d45d596625e95066ce720f66f6cd0265909b1ff962d14a8a9a47f6081b",
        publicKey: "0x048e25d22799f386438f0631053d72470fcc357504795521b1bfe7da0a260e2dd208899f46887e7176fd592134412f5abcbb13fd7566749435afc1b2fbcd06b95b",
        _id: "68d33dcf9272e835981012e1",
      },
    ],
    status: "pending",
    transactionData: {
      to: "0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1",
      value: "0.0001",
      data: "0x",
      tokenType: "LITKEY",
    },
    type: "transaction",
    updatedAt: "2025-09-24T00:39:43.447Z",
    walletId: "6c3179a7-749b-4ea6-ac01-8ab7091005c8",
  },
    _proposal_transactionData: undefined,
    walletPkp: {
      ethAddress: "0x0a9164b7f43aCbfEf5D97594aB79204d5071EaDe",
      publicKey: "0x048f50495696295673ca1bb495e73c59d8d519ee9fa76fed7ec7df246f6b4197f08a60fe2c06591fcb20a15b324b4a39a20fdbeae77aec930cd28d78cf8c25d249",
      tokenId: "0x501269ec6096b2373852ba44540792ebd9a66a023c5d649e6e94cfec9466dca6",
    },
    wallet: {
      id: "6c3179a7-749b-4ea6-ac01-8ab7091005c8",
      pkp: {
        ethAddress: "0x0a9164b7f43aCbfEf5D97594aB79204d5071EaDe",
        publicKey: "0x048f50495696295673ca1bb495e73c59d8d519ee9fa76fed7ec7df246f6b4197f08a60fe2c06591fcb20a15b324b4a39a20fdbeae77aec930cd28d78cf8c25d249",
        tokenId: "0x501269ec6096b2373852ba44540792ebd9a66a023c5d649e6e94cfec9466dca6",
      },
      signers: [
        {
          ethAddress: "0x95D1c2b604c1f24e0f13257f62E9F7d01a300FB1",
          publicKey: "0x048e25d22799f386438f0631053d72470fcc357504795521b1bfe7da0a260e2dd208899f46887e7176fd592134412f5abcbb13fd7566749435afc1b2fbcd06b95b",
          email: "johnny.nan.jiang@gmail.com",
          authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
          _id: "68d107763c2711b8805baabd",
        },
        {
          ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
          publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
          email: "johnny@vastlink.xyz",
          authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
          _id: "68d107763c2711b8805baabe",
        },
      ],
      threshold: 2,
      ciphertext: "hUjguVYiXmjTVF9xi5drAUUb1PSO+A2QlCImAIjNU4P5cMD9GACGb08Akejmya56iBUKf/fR+KMq4OXSSh4boR0BsVuLnzd3erHT3iOmLPyWBjTJIOiLuHEqiYNfb2uyaJv6MFqMANamB/FJ3qzDj+gsHYDrg4dUaDhTWGKJEaMYMVhOUoGZoXgq4DXHIXzkO1S7Tr6pfoZBcoSofq+rAUzi1+KUPjxNuG2LMWYg+YAgvZiP0uTSUHKQArtnMTjCisuut1bc283ycFDjtyyg7o9vzRGWKm3RbaVYspjbXuP18kx31euGuw/w0QAW9FNylZzBt8ANpqk0jQuwaJ1i9qEhard7OTEDlfIN5t+I0XyGcPt9SbyntU9Z8BzC/2Q60eK7vDjoP/8E8ZDhTTzK+firuRSJlGuL9HSVsjMNmu8Rqw2/4UapILJfrIjzkNrATe8r1hXOZWPcCU+amArVSzZfk3Yeupv0VhCcEwSk121G6ONzfUlEKPGjaDobmXQ0atDQBhh0jPFX5x3LYddGojFSj0LRibkrCsqSJNUTI9tyAI5Y8cZ5xltHMP2o8mW+Kbrqd/fHb2mxO1BlB1pfKz6AA03+QrPuS3rKCVyFcnfEejOS2fkKL9EKP1b6YNXy8FcPTGXc28lic6CcvS7V/vfanpcpzXwc/IvDR+3LoeBMpuRfS7NkO+hnh8+02QmqSA4sFpiqRz55vVhRSynMqice2k1+PPVFD5CghC3eoU3AuqwfdjCiM7BBqeKH6A6XHMZKwrZno/Y+YLpevbzlMd13V5o9q3i72n5VyPAgxpaUqMXZiXm26p7JKM4DSb+y26JJP9b3FbspixzQa0lbdDBNQbixSGT6pN42np1rSH0zuZsByMuORUw8acCLi43Umk4eE2UInIP0JZ4+45Rn2zNeRBSrPpKR6gprlh5K5/TXWW5BTe2FTqA9SvFc65DKC37wzGL50u8lujPCn8ldBeW26IOVlvFUpSSKH65D3MlsPzmUSatelp8JpPhIdIOJCYj5p4XTRFhLPr+eyKmg4fyl5XsB+xuXGatq64J/iS72WJlbkGezMJcDnxUMdUABz5yjS3j9DT03VaEUHcUVS0FcdoXWoWvYXoW0DZL0nii2g17jZrbEB5N8BNSx4Y3Aa50l3dr72wwC",
      dataToEncryptHash: "ff506c19a013a13b0399367b0a6f49c124e4014a9b96dd225e711dbcc43c1fc1",
      dataToEncryptHashSignature: "0x238807edb634e00dc6be3ff8f65404403b2df177a6d4f43c8c171bcec486c1ba007accbfac615abc38087323d0308527db2230b9be82847412d940f7a0175d2c1b",
      metadata: {
        accessControlConditions: [
          {
            contractAddress: "",
            standardContractType: "",
            chain: "ethereum",
            method: "",
            parameters: [
              ":currentActionIpfsId",
            ],
            returnValueTest: {
              comparator: "=",
              value: "QmSTrAhbiX1F1HH6dLJ7C2uMeCCG15tRLZkbZdAaPk63qG",
            },
          },
        ],
        mfaSettings: {
          dailyLimits: {
            BTC: "0.001",
            ETH: "0.1",
            USDT: "100",
            USDC: "100",
            LITKEY: "100",
            VAST: "100",
          },
        },
      },
      name: "Team Wallet 1",
      addresses: {
        eth: "0x0a9164b7f43aCbfEf5D97594aB79204d5071EaDe",
        btc: "tb1qhnuy7y85tl73c3m7lgcym232gv6tpkvm5qv9r5",
      },
      unsignedProposalsCount: 1,
    },
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTg1Mjc5MzIsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LWEyYWY5Yjg4LTM3ODktNGI2ZC1hOWI5LWUwNmE0MjkzOTRjNiIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUxWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUyWiIsImV4cGlyZXNfYXQiOiIyMDI1LTA5LTI5VDA3OjUzOjUxWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0yMlQwNzo1Mzo1MVoiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LTU4MzIzYmI1LWUxMzgtNGE1NC05YTM3LWRmMjZhNTFjNGEzNiIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnlAdmFzdGxpbmsueHl6In19XX0sImlhdCI6MTc1ODUyNzYzMiwiaXNzIjoic3R5dGNoLmNvbS9wcm9qZWN0LXRlc3QtMGUyNTJiNGQtNDQzOS00ZWMyLWI1ODgtZTdkMDUwZmQ4YjNiIiwibmJmIjoxNzU4NTI3NjMyLCJzdWIiOiJ1c2VyLXRlc3QtNWU3ODNmZWItZTlkNS00ZjU5LWFlYTMtNWQ5OWM4MDljOWJkIn0.j_RPy_TaS3uapqJX9A-UiN_iGZ-hTA6O8q64CMCfhlNF_xWH0vsG1ydlg_DxdwOUNNfvkAeYSh21a9msc-XgVjm2R02yTwFw9JNS5Y-o43KFQnIoanxe23WlgMoPJycBh8GxY0ikLwzJHg9oD7BfpCCQ-uOep-6UeqiPsR3f_YgftsDgIQ9YLLjkLjClWRvE7r7TIUd9D-ehCtmu-dHYRPN5KVM69ev-pKrgvKSchGJ-EIy6QCgTDyYPrev8dAchZviIjXPROVicNlDHgc2QnWEWgkv6KDPw--p8pLoSIGtVFeXswXvgkzujkPz5UavtOBPlOHUfjUcNFscnhpMugQ",
    providerType: "email_otp",
    authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
    sessionSigs: {
      "https://23.81.180.7:443": {
        sig: "0cc22e8eaa1885226b59d00cfd27359da1b4eee2dafb6c7c7f4068c0a3a43fd369e2b2ad7cb8a079ac75fc33ce8eba79ab21f07397e1a704aff22a5203c14e0a",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0x2ab4f7c7aaae7c850bdf9a604f2c81c62e6935bbce04289573537e64f3eb1eee1a5f93ecb4f92e04110fd4fb0593570a19d7da75c12e51fe25748c3acb716b571c\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0x220065317e103854e553df04aa7189d5516208d3ee4cccd6cee1d8c0c59ab2f6\\nIssued At: 2025-09-24T00:49:46.867Z\\nExpiration Time: 2025-10-01T00:49:46.864Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"8e436353989704f36406acb37907bb934dad43fda78295338c6d7ef95bc7b195e66cbd6a9606febdcddb27056328e76d0cd0e531025187ddba17754909f92496a8eff5f79eac4b995bfb915fa1c3df2aa45c9dd7b63a27ea2902bce17a299d9d\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0x284b7b25aa2cd1ba3d1d95d3edd0bd1f8ce445f8ab3064ba0b10186b50784737\\nIssued At: 2025-09-24T00:42:35Z\\nExpiration Time: 2025-09-24T00:52:55.464Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-24T00:49:46.916Z\",\"expiration\":\"2025-09-24T00:59:46.873Z\",\"nodeAddress\":\"https://23.81.180.7:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://207.244.72.175:443": {
        sig: "a2269d93ecd1885d80c1d7ddabd6d299ac11e82fa10989b5d18c60a66f60cec46fbda38cca103a05419220c09c7679605ce12f7a0043dc649d4ae5e3d791b90e",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0x2ab4f7c7aaae7c850bdf9a604f2c81c62e6935bbce04289573537e64f3eb1eee1a5f93ecb4f92e04110fd4fb0593570a19d7da75c12e51fe25748c3acb716b571c\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0x220065317e103854e553df04aa7189d5516208d3ee4cccd6cee1d8c0c59ab2f6\\nIssued At: 2025-09-24T00:49:46.867Z\\nExpiration Time: 2025-10-01T00:49:46.864Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"8e436353989704f36406acb37907bb934dad43fda78295338c6d7ef95bc7b195e66cbd6a9606febdcddb27056328e76d0cd0e531025187ddba17754909f92496a8eff5f79eac4b995bfb915fa1c3df2aa45c9dd7b63a27ea2902bce17a299d9d\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0x284b7b25aa2cd1ba3d1d95d3edd0bd1f8ce445f8ab3064ba0b10186b50784737\\nIssued At: 2025-09-24T00:42:35Z\\nExpiration Time: 2025-09-24T00:52:55.464Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-24T00:49:46.916Z\",\"expiration\":\"2025-09-24T00:59:46.873Z\",\"nodeAddress\":\"https://207.244.72.175:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://162.210.195.37:443": {
        sig: "a1d23d6d35774f1c224c0ce3616e6a7f3b4e2f117ece22cde6dbfac76fff722dc118bcc8b69500fbbd0684673b977f74f72488b3548b3fee9002df791f667d0c",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0x2ab4f7c7aaae7c850bdf9a604f2c81c62e6935bbce04289573537e64f3eb1eee1a5f93ecb4f92e04110fd4fb0593570a19d7da75c12e51fe25748c3acb716b571c\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0x220065317e103854e553df04aa7189d5516208d3ee4cccd6cee1d8c0c59ab2f6\\nIssued At: 2025-09-24T00:49:46.867Z\\nExpiration Time: 2025-10-01T00:49:46.864Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"8e436353989704f36406acb37907bb934dad43fda78295338c6d7ef95bc7b195e66cbd6a9606febdcddb27056328e76d0cd0e531025187ddba17754909f92496a8eff5f79eac4b995bfb915fa1c3df2aa45c9dd7b63a27ea2902bce17a299d9d\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0x284b7b25aa2cd1ba3d1d95d3edd0bd1f8ce445f8ab3064ba0b10186b50784737\\nIssued At: 2025-09-24T00:42:35Z\\nExpiration Time: 2025-09-24T00:52:55.464Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-24T00:49:46.916Z\",\"expiration\":\"2025-09-24T00:59:46.873Z\",\"nodeAddress\":\"https://162.210.195.37:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://51.255.59.58:443": {
        sig: "03c10275819a6ba992d801be52b533c44d74d8dd7d3d042ec1e9aebd2fdd6cdaa64efba1eb57bc752f9735a64373bedc90570ee0b43b5bc0daeca0cd356f3d00",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0x2ab4f7c7aaae7c850bdf9a604f2c81c62e6935bbce04289573537e64f3eb1eee1a5f93ecb4f92e04110fd4fb0593570a19d7da75c12e51fe25748c3acb716b571c\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0x220065317e103854e553df04aa7189d5516208d3ee4cccd6cee1d8c0c59ab2f6\\nIssued At: 2025-09-24T00:49:46.867Z\\nExpiration Time: 2025-10-01T00:49:46.864Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"8e436353989704f36406acb37907bb934dad43fda78295338c6d7ef95bc7b195e66cbd6a9606febdcddb27056328e76d0cd0e531025187ddba17754909f92496a8eff5f79eac4b995bfb915fa1c3df2aa45c9dd7b63a27ea2902bce17a299d9d\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0x284b7b25aa2cd1ba3d1d95d3edd0bd1f8ce445f8ab3064ba0b10186b50784737\\nIssued At: 2025-09-24T00:42:35Z\\nExpiration Time: 2025-09-24T00:52:55.464Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-24T00:49:46.916Z\",\"expiration\":\"2025-09-24T00:59:46.873Z\",\"nodeAddress\":\"https://51.255.59.58:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://167.114.17.202:443": {
        sig: "dc4f003a5b249018374b8e6225f64e9e6e3681bf56762c2496a5585a1c352f22d70c88fbd87c885b9225f37ec2c83108b5c949dbc11abb84f2ea908b10254700",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0x2ab4f7c7aaae7c850bdf9a604f2c81c62e6935bbce04289573537e64f3eb1eee1a5f93ecb4f92e04110fd4fb0593570a19d7da75c12e51fe25748c3acb716b571c\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0x220065317e103854e553df04aa7189d5516208d3ee4cccd6cee1d8c0c59ab2f6\\nIssued At: 2025-09-24T00:49:46.867Z\\nExpiration Time: 2025-10-01T00:49:46.864Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"8e436353989704f36406acb37907bb934dad43fda78295338c6d7ef95bc7b195e66cbd6a9606febdcddb27056328e76d0cd0e531025187ddba17754909f92496a8eff5f79eac4b995bfb915fa1c3df2aa45c9dd7b63a27ea2902bce17a299d9d\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0x284b7b25aa2cd1ba3d1d95d3edd0bd1f8ce445f8ab3064ba0b10186b50784737\\nIssued At: 2025-09-24T00:42:35Z\\nExpiration Time: 2025-09-24T00:52:55.464Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-24T00:49:46.916Z\",\"expiration\":\"2025-09-24T00:59:46.873Z\",\"nodeAddress\":\"https://167.114.17.202:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
      "https://158.69.163.138:443": {
        sig: "cfb1d961a07e425e07a8f643c40cd78f27eb35e429523f8d2c824e1d910b3c9a19e9420c0c5458cd1fd433e43173da6e4e8146ac0769b4665962940ff582470c",
        derivedVia: "litSessionSignViaNacl",
        signedMessage: "{\"sessionKey\":\"502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\",\"resourceAbilityRequests\":[{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-pkp\"},\"ability\":\"pkp-signing\"},{\"resource\":{\"resource\":\"*\",\"resourcePrefix\":\"lit-litaction\"},\"ability\":\"lit-action-execution\"}],\"capabilities\":[{\"sig\":\"0x2ab4f7c7aaae7c850bdf9a604f2c81c62e6935bbce04289573537e64f3eb1eee1a5f93ecb4f92e04110fd4fb0593570a19d7da75c12e51fe25748c3acb716b571c\",\"derivedVia\":\"web3.eth.personal.sign\",\"signedMessage\":\"localhost wants you to sign in with your Ethereum account:\\n0xF18d36309606FE1f804340A0c202d3C7434806Eb\\n\\nThis is a test statement.  You can put anything you want here. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Auth': 'Auth' for 'lit-ratelimitincrease://270948'.\\n\\nURI: lit:capability:delegation\\nVersion: 1\\nChain ID: 1\\nNonce: 0x220065317e103854e553df04aa7189d5516208d3ee4cccd6cee1d8c0c59ab2f6\\nIssued At: 2025-09-24T00:49:46.867Z\\nExpiration Time: 2025-10-01T00:49:46.864Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LXJhdGVsaW1pdGluY3JlYXNlOi8vMjcwOTQ4Ijp7IkF1dGgvQXV0aCI6W3sibmZ0X2lkIjpbIjI3MDk0OCJdfV19fSwicHJmIjpbXX0\",\"address\":\"0xF18d36309606FE1f804340A0c202d3C7434806Eb\"},{\"sig\":\"{\\\"ProofOfPossession\\\":\\\"8e436353989704f36406acb37907bb934dad43fda78295338c6d7ef95bc7b195e66cbd6a9606febdcddb27056328e76d0cd0e531025187ddba17754909f92496a8eff5f79eac4b995bfb915fa1c3df2aa45c9dd7b63a27ea2902bce17a299d9d\\\"}\",\"algo\":\"LIT_BLS\",\"derivedVia\":\"lit.bls\",\"signedMessage\":\"localhost:3000 wants you to sign in with your Ethereum account:\\n0xE1D0Cc639696207b31a652950258864312B40Fa1\\n\\nLit Protocol PKP session signature I further authorize the stated URI to perform the following actions on my behalf: I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. I further authorize the stated URI to perform the following actions on my behalf: (1) 'Threshold': 'Execution' for 'lit-litaction://*'. (2) 'Threshold': 'Signing' for 'lit-pkp://*'. (3) 'Auth': 'Auth' for 'lit-resolvedauthcontext://*'.\\n\\nURI: lit:session:502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f\\nVersion: 1\\nChain ID: 1\\nNonce: 0x284b7b25aa2cd1ba3d1d95d3edd0bd1f8ce445f8ab3064ba0b10186b50784737\\nIssued At: 2025-09-24T00:42:35Z\\nExpiration Time: 2025-09-24T00:52:55.464Z\\nResources:\\n- urn:recap:eyJhdHQiOnsibGl0LWxpdGFjdGlvbjovLyoiOnsiVGhyZXNob2xkL0V4ZWN1dGlvbiI6W3t9XX0sImxpdC1wa3A6Ly8qIjp7IlRocmVzaG9sZC9TaWduaW5nIjpbe31dfSwibGl0LXJlc29sdmVkYXV0aGNvbnRleHQ6Ly8qIjp7IkF1dGgvQXV0aCI6W3siYXV0aF9jb250ZXh0Ijp7ImFjdGlvbklwZnNJZHMiOlsiUW1aejljcXp2QzlZTFh4RUZ6VHhYM0FxZExURlBNQ3ozN3ZZbW03Z1J6NEN0UiJdLCJhdXRoTWV0aG9kQ29udGV4dHMiOltdLCJhdXRoU2lnQWRkcmVzcyI6bnVsbCwiY3VzdG9tQXV0aFJlc291cmNlIjoidHJ1ZSIsInJlc291cmNlcyI6W119fV19fSwicHJmIjpbXX0\",\"address\":\"0xE1D0Cc639696207b31a652950258864312B40Fa1\"}],\"issuedAt\":\"2025-09-24T00:49:46.916Z\",\"expiration\":\"2025-09-24T00:59:46.873Z\",\"nodeAddress\":\"https://158.69.163.138:443\"}",
        address: "502fa2903fb923258c9dee0d4f412f5d4e46b5d50996bdd6f49262f8b7f5571f",
        algo: "ed25519",
      },
    },
    pinCode: "111111",
    mfaType: "",
    mfaCode: "",
    mfaMethodId: null,
  };

  const res1 = await executeTransactionProposal(input);

  return res1;
}

describe('team wallet tests', () => {
  it('create a team wallet', async () => {
    const res1 = await user_A_creates_a_team_wallet();
    
    expect(res1).toBeDefined();

  }, testConfig.LONG_TIMEOUT);

  it('raise and approve and execute a LITKEY proposal', async () => {
    const res1 = await user_A_creates_a_proposal_which_requires_user_B_to_approve();

    expect(res1).toBeDefined();

    const res2 = await user_B_approves_the_proposal(res1.proposal, res1.wallet);

    expect(res2).toBeDefined();

  }, testConfig.SUPER_LONG_TIMEOUT);

  it('execute a LITKEY proposal', async () => {
    const res1 = await user_B_executes_the_proposal(null, null);

    expect(res1).toBeDefined();
  }, testConfig.SUPER_LONG_TIMEOUT);

});

