import { describe, it, expect } from 'vitest';

import { LitRelay } from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';

import { ExecuteTransactionParams, executePersonalTransaction } from '@/services/personalTransactionService';
import { AuthProviderType } from '@/lib/lit/custom-auth';

const LONG_TIMEOUT = 99999;

describe('Create a wallet', () => {
  it('should be able to create a personal wallet with Lit Protocol', async () => {
    const input: ExecuteTransactionParams = {
      state: {
        to: "tb1qz7ap434cu2yu3d3v9x9npaxakwnsjsl8prhle5",
        recipientAddress: "tb1qz7ap434cu2yu3d3v9x9npaxakwnsjsl8prhle5",
        amount: "0.00001",
        tokenType: "BTC",
        mfaMethodId: null,
        mfaPhoneNumber: null,
      },
      accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Imp3ay10ZXN0LTc3ZGJlNTA4LTEyYjAtNDI1Mi05NTIyLWVkNDhjNDJhNjQ0ZCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiJdLCJleHAiOjE3NTc3MjkwMzMsImh0dHBzOi8vc3R5dGNoLmNvbS9zZXNzaW9uIjp7ImlkIjoic2Vzc2lvbi10ZXN0LTIyNzM2YTc1LTk0N2ItNGVlNy04MTI3LTg3MTA2ZjYwNTAzZCIsInN0YXJ0ZWRfYXQiOiIyMDI1LTA5LTEzVDAxOjU4OjUyWiIsImxhc3RfYWNjZXNzZWRfYXQiOiIyMDI1LTA5LTEzVDAxOjU4OjUzWiIsImV4cGlyZXNfYXQiOiIyMDI1LTA5LTIwVDAxOjU4OjUyWiIsImF0dHJpYnV0ZXMiOnsidXNlcl9hZ2VudCI6IiIsImlwX2FkZHJlc3MiOiIifSwiYXV0aGVudGljYXRpb25fZmFjdG9ycyI6W3sidHlwZSI6Im90cCIsImRlbGl2ZXJ5X21ldGhvZCI6ImVtYWlsIiwibGFzdF9hdXRoZW50aWNhdGVkX2F0IjoiMjAyNS0wOS0xM1QwMTo1ODo1MloiLCJlbWFpbF9mYWN0b3IiOnsiZW1haWxfaWQiOiJlbWFpbC10ZXN0LThmZTEzNWZhLTE5NmMtNDdiZi1iYmJhLTA3MDM4MTIzZTU1MCIsImVtYWlsX2FkZHJlc3MiOiJqb2hubnkubmFuLmppYW5nQGdtYWlsLmNvbSJ9fV19LCJpYXQiOjE3NTc3Mjg3MzMsImlzcyI6InN0eXRjaC5jb20vcHJvamVjdC10ZXN0LTBlMjUyYjRkLTQ0MzktNGVjMi1iNTg4LWU3ZDA1MGZkOGIzYiIsIm5iZiI6MTc1NzcyODczMywic3ViIjoidXNlci10ZXN0LTU4NmVlYjM0LTVjNGUtNDljNS1iNzQ5LTYxNmY4MGFlZjgyMiJ9.y_wzncXxDzD9hRk79xCAQv8tkm8ozXcAsn0fq_05AcvAy3Hidjzbt0aE79ALlsNSDAX8J8AkyzDtqs5or2Kf6r6OOaTN47RJGQ-V8Lu0LU6sAV4JEcZn1thCwLJfVyP5egJwbAm6gbe7QXA09QQNFY9XPM1wfBkXeA-OsdfyFFHTOhrvSPm6l8_WDKOsv561nxMesmxHC_4sod82D2iVgNmCgakmmBnvdnPLT0raHVtYoG3mCO2HxBIkArNRHKlUfAqUM-SbVVZslcm_jG7dlZFBYUXV9b2W8Uc0lggm-AnUTZ5K80AlgLC05lAdTPtRUTUvf_ba7ikd_CLHBwYkIw",
      authMethodType: 37246459,
      authMethodId: "0xcd143a7bca60c810ad2180113e82606ca4c551615ca48ef14f15dcd00691424e",
      providerType: AuthProviderType.EMAIL_OTP,
      userEmail: "johnny.nan.jiang@gmail.com",
      litActionPkp: {
        ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
        tokenId: "0x7462197202fcc66b5b2233215a51adaddbfe6710e06d6a690a7f982250964361",
        type: "litAction",
      },
      btcAddress: "tb1q8adu3fuee7js6wprsu4alttn8v6ld3ernfdfg3",
      onTransactionSuccess: undefined,
      pinCode: "",
      mfaType: undefined,
      mfaCode: undefined,
      mfaMethodId: undefined,
      setIsSending: (a) => {},
      setResetAmount: (a) => {},
    }
    
    const res = await executePersonalTransaction(input);
  
    console.debug('res', res);
  }, LONG_TIMEOUT);

});

