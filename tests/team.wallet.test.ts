import { describe, it, expect } from 'vitest';

import { LitRelay } from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';

import { ExecuteTransactionParams, executePersonalTransaction } from '@/services/personalTransactionService';
import { AuthProviderType } from '@/lib/lit/custom-auth';

import { createAndApproveTransactionProposal, CreateAndApproveTransactionProposalParams, executeTeamTransactionProposal, inviteTeamUser } from '@/services/teamTransactionService';
import { approveProposal, ISignPrposalParams } from '@/app/wallet/[walletId]/details/proposals/utils/sign-proposal';

import { theUser, theUserA, theUserB, testConfig } from './fixtures';

const user_A_creates_a_proposal_which_involves_user_B = async () => {
  const input : CreateAndApproveTransactionProposalParams = {
    state: {
      to: "johnny@vastlink.xyz",
      recipientAddress: "0x28e2bf657D5d3C86885458e5ab99e2166f19a475",
      amount: "0.001",
      tokenType: "LITKEY",
      mfaMethodId: null,
      mfaPhoneNumber: null,
    },
    wallet: {
      id: "bb6ef7f3-f8d9-4575-bce7-0b41caff264d",
      pkp: {
        ethAddress: "0xb8ebFb54841b96952204C00BF3e64807F9813b11",
        publicKey: "0x049a37d0a497df3136dcc58d0f020a5aa7765848ad1f3f2d77cd6055aab1e03d203ac69fdd683a18849621cb8058820886b12c4dc871a1c520ca2d73ed16d92d3b",
        tokenId: "0x039624bc2bfebfde8d5cd3b15ef7260f5e2bfe16059def33d025852a23ced6c5",
      },
      signers: [
        theUserB,
        theUserA,
      ],
      threshold: 2,
      ciphertext: "snZ2p4PzwGQdzzqx610bM/KDMZvi92yYTFr1OBYBWQ55rVq5g8wcJDm4CLvKWFEsmlgQmbgCFSukIkMOXUI3uxQ9Do/UHaobRo9GmKTx6KeWBitdRFk30S4CC5axySa5UsJoAjdX6XT9p0M8f38ZTV7lsipbQBF7IEAOCzJgFx7pC6yY30mOix5AZgqZtknPAPf7qRHgWVJ+8gvhPRDjQeq/E0cPxCMPbRAPCimEwcwyI4AU3YNRD0tiz6TDWd7s2f01wJ/L8c0NLFYt3Eyihse5Kl/Lx9R9Aed96qiZiTf83akbxYqI44/NytlKNJpok/y0XRvWX2QKVttm41dMSLx3/NSqdzkQmWHuAg9eMI5VHAUosLOT1MbKoJHHPfhFTJ8UxpsQ5esJZtUilLYS5/5Lg52HevjtTTPiWl5niFYfl/Bj5fqYTYzQDDAFdXZLiJjuazfTQpdMSoEGXwW5on63JPNQQELsudV7hZSfbb37TlNdVsBRCpqjyS/v9qpChjtXbnDeNvSF/0b6PSMi6Bal8G1870u9CXzoXDJSk6kX9KTm5VFtG5lOWAyUcqWxeYY6JBpxS1sjB0HyWXCAskmOns6cwAFri4y5MwNevYkf20phF7X6rB4PPLqVGwKj3s2Wo3S31ImPv9cLp+lS69fzFi9RZKyXr10JvJAL9D3FXNuxkDpo9tG2szxNZ58AjRjKH0fT0+cgv7FZ0/2BFLdxaEmzWOwf3+RU5BbM3eL/+7R9YWgSBQuUDoF8z7j/OU8xPs99x+82OhpkzpkcWaTPMkmfVWjNFcgMX2Kq51oj2fLJp/Z/mftOFh0efMZZSYR6jdNoJgE6HrMBxgr2SlsrffD9pkBwi1aQ1b91rHzIskfFmYhceZbM/WshLOSZW7IMJ9JqPb5mkh8bhJfzLQCPmSwgpYwqR4CLvExiN5tqeSg8d7Ep9jvZDNvtVLGDTxtLyZep1jQk6OTlOml5A+LDNYLS9fw/WjZGICRx+nQjGjxjfQbX4PPhKxAZD1QDsP3apHg5kCMZjRHp44o2Lx0mxgxP6MGv+fwJCp57Qcbkjt9hgItmBovcr5yS8ODXpWhJEL4Yd6w+zDPn7t04WGnrqRk6fm7O0yQwLDpOMX1+b7NDF/gH4qWSKRoGow3JIMKe+S3MwO0C",
      dataToEncryptHash: "aebd91da5eda9dc7ffa3543bb53d18e87c014aa2307afd0a5dffed763a920167",
      dataToEncryptHashSignature: "0x929e606dc9449aa4509d78846b392ca164c8723eff34f10de7fc060723b1fc2009825f8147dccb4feeeb068e372540ce5723a7c4997860ff6f350b15240131ac1b",
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
      name: "Vastlink Founding Team Wallet",
      addresses: {
        eth: "0xb8ebFb54841b96952204C00BF3e64807F9813b11",
        btc: "tb1q2hdqrrwdwkleauwvjq4wxnxn7aky2vqapa74hv",
      },
    },
    userPkp: {
      ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
      publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
      tokenId: "0x7462197202fcc66b5b2233215a51adaddbfe6710e06d6a690a7f982250964361",
      type: "litAction",
    },
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTg0NDc0MTAsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LTk3NTdmMGUzLTI4YjktNGY3Yi1hN2E0LTlmMWRkZDUwYjk5OSIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTIxVDA5OjMxOjUwWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTIxVDA5OjMxOjUwWiIsImV4cGlyZXNfYXQiOiIyMDI1LTA5LTI4VDA5OjMxOjUwWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0yMVQwOTozMTo1MFoiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LThmZTEzNWZhLTE5NmMtNDdiZi1iYmJhLTA3MDM4MTIzZTU1MCIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnkubmFuLmppYW5nQGdtYWlsLmNvbSJ9fV19LCJpYXQiOjE3NTg0NDcxMTAsImlzcyI6InN0eXRjaC5jb20vcHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiIsIm5iZiI6MTc1ODQ0NzExMCwic3ViIjoidXNlci10ZXN0LTU4NmVlYjM0LTVjNGUtNDljNS1iNzQ5LTYxNmY4MGFlZjgyMiJ9.UEUWqgLeITuETzN1ld6tj2GelUYvB8wjTUYpBLmBw91sQS-LhPVQmzS7X2U-MYv7k7Xhdipr4cNa5DQKJqNdFd36z5qv8Vnitt4QUXahRQbLZGArzWxu4rNyoQvyBei8xqrzW8F_0lCFfBmicQOQBRYlj-QGTmdP-LxBv34ZeiOClXsufeXmmOXnxPR6g6ycnkpG16pn1k287dbiOgF4ES2_k_uyFVgHJPoERVv1juwl7JboNP-9u1Ccxp10Gx5s29ICRWvM1jwkg9hMzX5mgXDTcfy4hM_nor-5-uyVGFm6zjJ_Y3O_eQ5YFcTHTvxnUV0L0PPvKFJ3QUpZa3w6-Q",
    authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
    providerType: "email_otp",
    userEmail: "johnny.nan.jiang@gmail.com",
    user: {
      id: "4cd680b0-0ea4-435a-85a1-1f653a209d4a",
      authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
      primaryEmail: "johnny.nan.jiang@gmail.com",
      authProviders: [
        {
          providerType: "email_otp",
          sub: "user-test-586eeb34-5c4e-49c5-b749-616f80aef822",
          email: "johnny.nan.jiang@gmail.com",
          isEnabled: true,
          isPrimary: true,
          createdAt: "2025-09-10T02:21:17.646Z",
          _id: "68c0e09dca715fe74aea957a",
        },
      ],
      litActionPkp: {
        ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
        tokenId: "0x7462197202fcc66b5b2233215a51adaddbfe6710e06d6a690a7f982250964361",
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
            id: "ea56f46b-78e3-48e6-af7a-80696fc849ca",
            type: "EMAIL_OTP",
            category: "otp",
            priority: 20,
            isEnabled: true,
            isFallback: true,
          },
        ],
      },
      addresses: {
        eth: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        btc: "tb1q8adu3fuee7js6wprsu4alttn8v6ld3ernfdfg3",
      },
    },
    setIsSending: () => {},
    refreshNotifications: (_targetAuthMethodId, userEthAddress)=>{},
    refreshProposals: async ()=>{},
    onProposalChange: undefined,
    setShowSendDialog: () => {},
  };

  return await createAndApproveTransactionProposal(input);
}

const user_B_approves_and_executes_the_proposal = async () => {
  const input: ISignPrposalParams = {
    proposal: {
      _id: "68d08f52952c451faca034b9",
      id: "ff258208-6df2-4259-97c6-7236a8376f24",
      __v: 0,
      createdAt: "2025-09-21T23:50:42.167Z",
      createdBy: {
        authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
        ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        email: "johnny.nan.jiang@gmail.com",
      },
      message: "{\"to\":\"0x28e2bf657D5d3C86885458e5ab99e2166f19a475\",\"value\":\"0.001\",\"data\":\"0x\",\"tokenType\":\"LITKEY\"}",
      settingsData: {
        originalState: {
          threshold: 2,
          signers: [
            theUserB,
            theUserA,
          ],
        },
      },
      signatures: [
        {
          signer: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
          signature: "0x8bd5656ba2dccf8273390abb6dbfed363c8349561249c64526e725b34c43e4f4507b4c356e6e7fe2582efe80028dfc402f59d2242a92031e19b5d0c99449b49c1c",
          publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
          _id: "68d08f5f2f46cc7a635f77f9",
        },
      ],
      status: "pending",
      transactionData: {
        to: "0x28e2bf657D5d3C86885458e5ab99e2166f19a475",
        value: "0.001",
        data: "0x",
        tokenType: "LITKEY",
      },
      type: "transaction",
      updatedAt: "2025-09-21T23:50:55.179Z",
      walletId: "bb6ef7f3-f8d9-4575-bce7-0b41caff264d",
    },
    wallet: {
      id: "bb6ef7f3-f8d9-4575-bce7-0b41caff264d",
      pkp: {
        ethAddress: "0xb8ebFb54841b96952204C00BF3e64807F9813b11",
        publicKey: "0x049a37d0a497df3136dcc58d0f020a5aa7765848ad1f3f2d77cd6055aab1e03d203ac69fdd683a18849621cb8058820886b12c4dc871a1c520ca2d73ed16d92d3b",
        tokenId: "0x039624bc2bfebfde8d5cd3b15ef7260f5e2bfe16059def33d025852a23ced6c5",
      },
      signers: [
        {
          ethAddress: "0x28e2bf657D5d3C86885458e5ab99e2166f19a475",
          publicKey: "0x04606eb9f77835a8ba2e8b91e496d2e56b3c29a903c71de010b9efeac78051a5a56f85baad90dafeec382f849b1fb5105b1fdcd546da974601494bf64735e4acbf",
          email: "johnny@vastlink.xyz",
          authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
          _id: "68cfbe8e6ff3bbcb6b4e8d8d",
        },
        {
          ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
          publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
          email: "johnny.nan.jiang@gmail.com",
          authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
          _id: "68cfbe8e6ff3bbcb6b4e8d8e",
        },
      ],
      threshold: 2,
      ciphertext: "snZ2p4PzwGQdzzqx610bM/KDMZvi92yYTFr1OBYBWQ55rVq5g8wcJDm4CLvKWFEsmlgQmbgCFSukIkMOXUI3uxQ9Do/UHaobRo9GmKTx6KeWBitdRFk30S4CC5axySa5UsJoAjdX6XT9p0M8f38ZTV7lsipbQBF7IEAOCzJgFx7pC6yY30mOix5AZgqZtknPAPf7qRHgWVJ+8gvhPRDjQeq/E0cPxCMPbRAPCimEwcwyI4AU3YNRD0tiz6TDWd7s2f01wJ/L8c0NLFYt3Eyihse5Kl/Lx9R9Aed96qiZiTf83akbxYqI44/NytlKNJpok/y0XRvWX2QKVttm41dMSLx3/NSqdzkQmWHuAg9eMI5VHAUosLOT1MbKoJHHPfhFTJ8UxpsQ5esJZtUilLYS5/5Lg52HevjtTTPiWl5niFYfl/Bj5fqYTYzQDDAFdXZLiJjuazfTQpdMSoEGXwW5on63JPNQQELsudV7hZSfbb37TlNdVsBRCpqjyS/v9qpChjtXbnDeNvSF/0b6PSMi6Bal8G1870u9CXzoXDJSk6kX9KTm5VFtG5lOWAyUcqWxeYY6JBpxS1sjB0HyWXCAskmOns6cwAFri4y5MwNevYkf20phF7X6rB4PPLqVGwKj3s2Wo3S31ImPv9cLp+lS69fzFi9RZKyXr10JvJAL9D3FXNuxkDpo9tG2szxNZ58AjRjKH0fT0+cgv7FZ0/2BFLdxaEmzWOwf3+RU5BbM3eL/+7R9YWgSBQuUDoF8z7j/OU8xPs99x+82OhpkzpkcWaTPMkmfVWjNFcgMX2Kq51oj2fLJp/Z/mftOFh0efMZZSYR6jdNoJgE6HrMBxgr2SlsrffD9pkBwi1aQ1b91rHzIskfFmYhceZbM/WshLOSZW7IMJ9JqPb5mkh8bhJfzLQCPmSwgpYwqR4CLvExiN5tqeSg8d7Ep9jvZDNvtVLGDTxtLyZep1jQk6OTlOml5A+LDNYLS9fw/WjZGICRx+nQjGjxjfQbX4PPhKxAZD1QDsP3apHg5kCMZjRHp44o2Lx0mxgxP6MGv+fwJCp57Qcbkjt9hgItmBovcr5yS8ODXpWhJEL4Yd6w+zDPn7t04WGnrqRk6fm7O0yQwLDpOMX1+b7NDF/gH4qWSKRoGow3JIMKe+S3MwO0C",
      dataToEncryptHash: "aebd91da5eda9dc7ffa3543bb53d18e87c014aa2307afd0a5dffed763a920167",
      dataToEncryptHashSignature: "0x929e606dc9449aa4509d78846b392ca164c8723eff34f10de7fc060723b1fc2009825f8147dccb4feeeb068e372540ce5723a7c4997860ff6f350b15240131ac1b",
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
      name: "Vastlink Founding Team Wallet",
      addresses: {
        eth: "0xb8ebFb54841b96952204C00BF3e64807F9813b11",
        btc: "tb1q2hdqrrwdwkleauwvjq4wxnxn7aky2vqapa74hv",
      },
      unsignedProposalsCount: 5,
    },
    userPkp: {
      ethAddress: "0x28e2bf657D5d3C86885458e5ab99e2166f19a475",
      publicKey: "0x04606eb9f77835a8ba2e8b91e496d2e56b3c29a903c71de010b9efeac78051a5a56f85baad90dafeec382f849b1fb5105b1fdcd546da974601494bf64735e4acbf",
      tokenId: "0x2cf03e08c8328d95b260986b503babcc51829e179489489bd1153380847c4442",
      type: "litAction",
    },
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTg1MDEzNTMsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LTQ4NWYyMDk0LTYyMzYtNGEzMy05MjFkLTEyNGI3YmZhNTE5NCIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTIyVDAwOjMwOjUyWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTIyVDAwOjMwOjUzWiIsImV4cGlyZXNfYXQiOiIyMDI1LTA5LTI5VDAwOjMwOjUyWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0yMlQwMDozMDo1MloiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LTY2NmU5MGMzLTIxMGEtNDdkYS1iNmJlLTFlZjlkOWY4ZjMzNiIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnlAdmFzdGxpbmsueHl6In19XX0sImlhdCI6MTc1ODUwMTA1MywiaXNzIjoic3R5dGNoLmNvbS9wcm9qZWN0LXRlc3QtMGUyNTJiNGQtNDQzOS00ZWMyLWI1ODgtZTdkMDUwZmQ4YjNiIiwibmJmIjoxNzU4NTAxMDUzLCJzdWIiOiJ1c2VyLXRlc3QtMDIyY2JiODYtYTkxMC00NmYxLWEwZmYtZDBlYmMzNzhmZjZjIn0.ppN0fByLfIxqUSl9sg_YZxvAh7fN1m9H845l56pYcz2_JFvCKzWyHGK7mEsvSb2lHE3z43g6JH_cFCmxrjtjVRpnNcsMl8t6zIpUlcRnhiy08SLVR58nz8es4JBa1oh5Wtv6rUM3MffCTtoXrxqBcCqxx_j6C_V27l_3lDGlOhvhdwEXe6s4a_X7qMltGoPb4dkuvBLXk7Ro--gbHKgCFh0ielRl0l3zHnk9ABcRPoU1NpjP0NJjH_CC9oKOa38SEawNqt7rkhMb4JyUhnusE6OA630uiSRz0DHEsvdidau4UnEiEdkEAQ6Qm0TO5HywYBmFs8kxBf7wRDqmMG1o4A",
    authMethodId: "0x30c825aeb56f6203ade95d8f56e3dffeb0b4eecde11cee90c0f32a381da87739",
    providerType: "email_otp",
    userEmail: "johnny@vastlink.xyz",
  };

  return await approveProposal(input);
}

describe('team wallet tests', () => {
  it('should be able to raise and approve and execute a LITKEY proposal', async () => {
    let res = await user_A_creates_a_proposal_which_involves_user_B();

    expect(res).toBeDefined();

    res = await user_B_approves_and_executes_the_proposal();

    expect(res).toBeDefined();

  }, testConfig.SUPER_LONG_TIMEOUT);

});

