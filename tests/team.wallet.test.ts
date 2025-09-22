import { describe, it, expect } from 'vitest';

import { LitRelay } from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';

import { ExecuteTransactionParams, executePersonalTransaction } from '@/services/personalTransactionService';
import { AuthProviderType } from '@/lib/lit/custom-auth';

import { createAndApproveTransactionProposal, CreateAndApproveTransactionProposalParams, executeTeamTransactionProposal, inviteTeamUser } from '@/services/teamTransactionService';
import { approveProposal, IApprovePrposalParams } from '@/app/wallet/[walletId]/details/proposals/utils/sign-proposal';

import { theUser, theUserA, theUserB, testConfig } from './fixtures';

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
    },
    userPkp: {
      ethAddress: "0xE1D0Cc639696207b31a652950258864312B40Fa1",
      publicKey: "0x04ac743862a73ff989407f92bbdd8e04896423af6601ae82696d5f18829dfd47657ceef62deee57f01bb5fdd644700df9d0e80f4a263b4e72894b7ad9d1ab29c70",
      tokenId: "0xb04d483ce0bd5a2b56a4c3e453047d66c901bf3b9cdb0c6207c283f134d1a229",
      type: "litAction",
    },
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTg1Mjc5MzIsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LWEyYWY5Yjg4LTM3ODktNGI2ZC1hOWI5LWUwNmE0MjkzOTRjNiIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUxWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTIyVDA3OjUzOjUyWiIsImV4cGlyZXNfYXQiOiIyMDI1LTA5LTI5VDA3OjUzOjUxWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0yMlQwNzo1Mzo1MVoiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LTU4MzIzYmI1LWUxMzgtNGE1NC05YTM3LWRmMjZhNTFjNGEzNiIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnlAdmFzdGxpbmsueHl6In19XX0sImlhdCI6MTc1ODUyNzYzMiwiaXNzIjoic3R5dGNoLmNvbS9wcm9qZWN0LXRlc3QtMGUyNTJiNGQtNDQzOS00ZWMyLWI1ODgtZTdkMDUwZmQ4YjNiIiwibmJmIjoxNzU4NTI3NjMyLCJzdWIiOiJ1c2VyLXRlc3QtNWU3ODNmZWItZTlkNS00ZjU5LWFlYTMtNWQ5OWM4MDljOWJkIn0.j_RPy_TaS3uapqJX9A-UiN_iGZ-hTA6O8q64CMCfhlNF_xWH0vsG1ydlg_DxdwOUNNfvkAeYSh21a9msc-XgVjm2R02yTwFw9JNS5Y-o43KFQnIoanxe23WlgMoPJycBh8GxY0ikLwzJHg9oD7BfpCCQ-uOep-6UeqiPsR3f_YgftsDgIQ9YLLjkLjClWRvE7r7TIUd9D-ehCtmu-dHYRPN5KVM69ev-pKrgvKSchGJ-EIy6QCgTDyYPrev8dAchZviIjXPROVicNlDHgc2QnWEWgkv6KDPw--p8pLoSIGtVFeXswXvgkzujkPz5UavtOBPlOHUfjUcNFscnhpMugQ",
    authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
    providerType: "email_otp",
    userEmail: "johnny@vastlink.xyz",
    user: {
      id: "d1438c22-0ce5-4166-8049-bdec3302be52",
      authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
      primaryEmail: "johnny@vastlink.xyz",
      authProviders: [
        {
          providerType: "email_otp",
          sub: "user-test-5e783feb-e9d5-4f59-aea3-5d99c809c9bd",
          email: "johnny@vastlink.xyz",
          isEnabled: true,
          isPrimary: true,
          createdAt: "2025-09-22T07:54:09.185Z",
          _id: "68d100a13c2711b8805ba93e",
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
    onProposalChange: undefined,
    setShowSendDialog:  () => {},
  };

  return await createAndApproveTransactionProposal(input);
}

const user_B_approves_and_executes_the_proposal = async (proposal: any, wallet: any) => {
  const input: IApprovePrposalParams = {
    proposal,
    wallet,
    userPkp: {
      ethAddress: theUserB.ethAddress,
      publicKey: theUserB.publicKey,
      tokenId: theUserB.tokenId,
      type: "litAction",
    },
    accessToken: theUserB.accessToken,
    authMethodId: theUserB.authMethodId,
    providerType: "email_otp",
    userEmail: theUserB.email,
  };

  return await approveProposal(input);
}

describe('team wallet tests', () => {
  it('should be able to raise and approve and execute a LITKEY proposal', async () => {
    const res1 = await user_A_creates_a_proposal_which_requires_user_B_to_approve();

    expect(res1).toBeDefined();

    const res2 = await user_B_approves_and_executes_the_proposal(res1.proposal, res1.wallet);

    expect(res2).toBeDefined();

  }, testConfig.SUPER_LONG_TIMEOUT);

});

