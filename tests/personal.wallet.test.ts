import { describe, it, expect } from 'vitest';

import { ExecuteTransactionParams, executePersonalTransaction } from '@/services/personalTransactionService';
import { AuthProviderType } from '@/lib/lit/custom-auth';

import { createOrGetPersonalWallet, getAssetPortfolio } from '@/services/peronsalWalletServiceByLitProtocol';

import { theUser, testConfig } from './fixtures';

describe('personal wallet tests', () => {
  it('the user gets his asset portfolio', async () => {
    const res = await getAssetPortfolio({
      authMethodId: '0xa7462ffe061228d9c5617f7e82fabf4cc6edb9905f8079d0ca86cb9e13789b9f'
    });

    expect(res).toBeDefined();
  });

  it('the user creats a or gets his personal wallet', async () => {
    const testData = {
      callbackParams: {
        providerType: "email_otp",
        accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTg3OTUxNzYsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LWQzMGNiMmM3LThkMGUtNDJkYS1hZGE1LWQ4YjE4MDNhZDViNSIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTI1VDEwOjA3OjU1WiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTI1VDEwOjA3OjU2WiIsImV4cGlyZXNfYXQiOiIyMDI1LTEwLTAyVDEwOjA3OjU1WiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0yNVQxMDowNzo1NVoiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LWNkZDkwMWZiLTYyZDEtNGI2Yi04ZGNkLTlhOWI5MmFlMzY4ZSIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnkubmFuLmppYW5nK3Rlc3QtMDAxQGdtYWlsLmNvbSJ9fV19LCJpYXQiOjE3NTg3OTQ4NzYsImlzcyI6InN0eXRjaC5jb20vcHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiIsIm5iZiI6MTc1ODc5NDg3Niwic3ViIjoidXNlci10ZXN0LTc2OWQ4NDJmLWI2ODQtNDdmOS04MWMyLTJiNzA0NjkyZGZmMiJ9.KKl2j3ez_052jrlehjB1Ee7-DAenWDELMpr401wqfUhG2vpdG9OZKXJyEAV0fK2EU0kUcPsJKY-vUn0g1lgN64drERmK2gmXjkBSgaEmINZNMqgaVxaV7f0n-pM_YeltnF-HrKPnljehvkEewhM8URMjZAw59DpJ8F5JRxx-eSiWVNcjYJOy1dKuP_y7IMTRL63tfJ6Ack3NCpYQB66muMmRryh8Mabys6wPm2EoZXbICP4k_6oNH1c-IrcgJtgKtVIwgXQSflmKwlQMk-gSSfsGgO7YBPQsRJm0Pa_Y1PqxfQr01bZuclttfmtgCj9SVB2AmxUuNpXNBypZpfJi7A",
        userEmail: "johnny.nan.jiang+test-001@gmail.com",
      },
      user: {
        id: "bb57ddf7-c5ab-4351-b767-5831d8bf4e1b",
        authMethodId: "0xa7462ffe061228d9c5617f7e82fabf4cc6edb9905f8079d0ca86cb9e13789b9f",
        primaryEmail: "johnny.nan.jiang+test-001@gmail.com",
        authProviders: [
          {
            providerType: "email_otp",
            sub: "user-test-769d842f-b684-47f9-81c2-2b704692dff2",
            email: "johnny.nan.jiang+test-001@gmail.com",
            isEnabled: true,
            isPrimary: true,
            createdAt: "2025-09-25T03:18:04.559Z",
            _id: "68d4b46c8ad6d904f0a902c3",
          },
        ],
        litActionPkp: {
          ethAddress: "0x3C35bb36390e6931E7f614bE61d61857Da318980",
          publicKey: "0x04c5a8a3b5b227614b0359ae5e637169d4530c8279308e307eb05b49a9b63325722a89053462aa413eea1681fcd08f2dc09dc8a05f1e76eb6fc480c879939982b6",
          tokenId: "0x3e712fcce731d63d66bf3aa0cf4ef89e56cb2bfc5e588e96ecd73034094244bc",
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
              id: "d833499a-a4b5-4150-a387-ae1412e07d7c",
              type: "EMAIL_OTP",
              category: "otp",
              priority: 20,
              isEnabled: true,
              isFallback: true,
            },
          ],
        },
        addresses: {
          eth: "0x3C35bb36390e6931E7f614bE61d61857Da318980",
          btc: "tb1qyvd959ezzkkuug9tnxrtn894wt8d9998z5xck5",
        },
      },
    }

    const res = await createOrGetPersonalWallet(testData.callbackParams, testData.user);
    console.debug("res", res);

    expect(res).toBeDefined();
  }, testConfig.LONG_TIMEOUT);

  it('sign and broadcast a BTC transaction', async () => {
    const input: ExecuteTransactionParams = {
      state: {
        to: "tb1qgg0hyr824qfk2cu9wx9qqpt40jsgnevzgqc5uq",
        recipientAddress: "tb1qgg0hyr824qfk2cu9wx9qqpt40jsgnevzgqc5uq",
        amount: "0.0001",
        tokenType: "BTC",
        mfaMethodId: null,
        mfaPhoneNumber: null,
      },
      accessToken: theUser.accessToken,
      authMethodType: 37246459,
      authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
      providerType: AuthProviderType.EMAIL_OTP,
      userEmail: theUser.email,
      litActionPkp: {
        ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
        tokenId: "0x7462197202fcc66b5b2233215a51adaddbfe6710e06d6a690a7f982250964361",
        // type: "litAction",
      },
      btcAddress: "tb1q8adu3fuee7js6wprsu4alttn8v6ld3ernfdfg3",
      handleExpiredAuth: ()=>{},
      setIsSending: ()=>{},
      setResetAmount: ()=>{},
      onTransactionSuccess: undefined,
      pinCode: "",
      mfaType: undefined,
      mfaCode: undefined,
      mfaMethodId: undefined,
    }
    
    const res = await executePersonalTransaction(input);
  
    expect(res).toBeDefined();

  }, testConfig.LONG_TIMEOUT);

  it('sign and broadcast a ETH transaction', async () => {
    const input: ExecuteTransactionParams = {
      state: {
        to: "0x1Ae2785c2D6924016709E67513A1796e14E844EB",
        recipientAddress: "0x1Ae2785c2D6924016709E67513A1796e14E844EB",
        amount: "0.0001",
        tokenType: "ETH",
        mfaMethodId: null,
        mfaPhoneNumber: null,
      },
      accessToken: theUser.accessToken,
      authMethodType: 37246459,
      authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
      providerType: AuthProviderType.EMAIL_OTP,
      userEmail: theUser.email,
      litActionPkp: {
        ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
        tokenId: "0x7462197202fcc66b5b2233215a51adaddbfe6710e06d6a690a7f982250964361",
        // type: "litAction",
      },
      btcAddress: "tb1q8adu3fuee7js6wprsu4alttn8v6ld3ernfdfg3",
      handleExpiredAuth: ()=>{},
      setIsSending: ()=>{},
      setResetAmount: ()=>{},
      onTransactionSuccess: undefined,
      pinCode: "",
      mfaType: undefined,
      mfaCode: undefined,
      mfaMethodId: undefined,
    }
    
    const res = await executePersonalTransaction(input);
  
    expect(res).toBeDefined();

  }, testConfig.LONG_TIMEOUT);

  it('sign and broadcast a USDC transaction', async () => {
    const input: ExecuteTransactionParams = {
      state: {
        to: "0x1Ae2785c2D6924016709E67513A1796e14E844EB",
        recipientAddress: "0x1Ae2785c2D6924016709E67513A1796e14E844EB",
        amount: "1",
        tokenType: "USDC",
        mfaMethodId: null,
        mfaPhoneNumber: null,
      },
      accessToken: theUser.accessToken,
      authMethodType: 37246459,
      authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
      providerType: AuthProviderType.EMAIL_OTP,
      userEmail: theUser.email,
      litActionPkp: {
        ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
        tokenId: "0x7462197202fcc66b5b2233215a51adaddbfe6710e06d6a690a7f982250964361",
        // type: "litAction",
      },
      btcAddress: "tb1q8adu3fuee7js6wprsu4alttn8v6ld3ernfdfg3",
      handleExpiredAuth: ()=>{},
      setIsSending: ()=>{},
      setResetAmount: ()=>{},
      onTransactionSuccess: undefined,
      pinCode: "",
      mfaType: undefined,
      mfaCode: undefined,
      mfaMethodId: undefined,
    }
    
    const res = await executePersonalTransaction(input);
  
    expect(res).toBeDefined();

  }, testConfig.LONG_TIMEOUT);
});

