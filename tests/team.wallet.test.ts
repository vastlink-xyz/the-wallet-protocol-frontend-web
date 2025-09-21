import { describe, it, expect } from 'vitest';

import { LitRelay } from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';

import { ExecuteTransactionParams, executePersonalTransaction } from '@/services/personalTransactionService';
import { AuthProviderType } from '@/lib/lit/custom-auth';

import { theUser, testConfig } from './fixtures';

describe('team wallet tests', () => {
  it('should be able to raise a LITKEY transaction proposal', async () => {
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
      providerType: "email_otp",
      userEmail: theUser.email,
      litActionPkp: {
        ethAddress: "0x09B0Fd65bFD4D04485431AA23b7da954b9F19E76",
        publicKey: "0x04341f97273b2ea4de16d5ded798aa6e7deb537db2925f3268dc75425cddfed86386ff06d07b2f1a639a5df39c6a39bbb176b1a6b8a70fee7d035edbeac087e32a",
        tokenId: "0x7462197202fcc66b5b2233215a51adaddbfe6710e06d6a690a7f982250964361",
        type: "litAction",
      },
      btcAddress: "tb1q8adu3fuee7js6wprsu4alttn8v6ld3ernfdfg3",
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

