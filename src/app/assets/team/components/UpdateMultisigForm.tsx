'use client'

import { useState } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { mintMultisigPKP } from '@/app/multisig/helper'
import { getEmailFromGoogleToken, log } from '@/lib/utils'
import { SignerEmailField } from '@/components/SignerEmailField'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getSessionSigsByPkp, litNodeClient, MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID } from '@/lib/lit'
import { encryptString } from '@lit-protocol/encryption'

interface CreateMultisigFormProps {
  authMethod: AuthMethod
  userPkp: IRelayPKP
  googleAuthMethodId: string
  onSuccess?: () => void
}

const accessControlConditions = [
  {
    contractAddress: '',
    standardContractType: '',
    chain: 'ethereum',
    method: '',
    parameters: [':currentActionIpfsId'],
    returnValueTest: {
      comparator: '=',
      value: MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID,
    },
  },
];

const mockMultisigPkp = {
  "ethAddress" : "0xe13E4fBC7D0fb1E6F183C403F08795E4217C08A7",
  "publicKey" : "0x0412bfd3820329fb3676c7249d9d98f7e8b1de543a5454ca51377c9e4a26ef0c894705df26b9ee95fced9e1807f0c2bf81aa5ea6575313cd96b280c8596f3be828",
  "tokenId" : "0xedc1f91b8e7824209027d07d04fd14bfdb0a02cb00e931bd64b7fb82ad807816"
}

export function UpdateMultisigForm({ 
  authMethod, 
  userPkp, 
  googleAuthMethodId, 
  onSuccess 
}: CreateMultisigFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [signer2Email, setSigner2Email] = useState('')
  const [signer2Address, setSigner2Address] = useState('')
  const [signer2PublicKey, setSigner2PublicKey] = useState('')
  const [signer2GoogleAuthMethodId, setSigner2GoogleAuthMethodId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dailyLimit, setDailyLimit] = useState('')

  // Get current user's email from authMethod
  let currentUserEmail = '';
  if (authMethod.accessToken) {
    const email = getEmailFromGoogleToken(authMethod.accessToken);
    if (email) {
      currentUserEmail = email;
    }
  }

  const handleCreateMultisigPKP = async () => {
    if (!userPkp || !signer2Address || !signer2PublicKey || !signer2Email) {
      console.error('Missing required information')
      return
    }
    
    try {
      setIsLoading(true)

      const signer2 = {
        ethAddress: signer2Address,
        publicKey: signer2PublicKey
      }

      const multisigPkp = await mintMultisigPKP({
        authMethod,
        googleAuthMethodIds: [googleAuthMethodId, signer2GoogleAuthMethodId]
      })
      console.log('multisig pkp', multisigPkp)

      const mfaSettings = {
        phoneNumber: phoneNumber,
        dailyLimit: dailyLimit
      }

      const dataToEncrypt = {
        signers: [
          {
            email: currentUserEmail,
            ethAddress: userPkp.ethAddress,
            publicKey: userPkp.publicKey
          },
          {
            email: signer2Email,
            ethAddress: signer2Address,
            publicKey: signer2PublicKey
          },
        ],
        threshold: 2,
        mfaSettings,
      }

      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      // Encrypt data
      const { ciphertext, dataToEncryptHash } = await encryptString(
        {
          accessControlConditions,
          dataToEncrypt: JSON.stringify(dataToEncrypt),
        },
        litNodeClient,
      );

      const sessionSigs = await getSessionSigsByPkp(authMethod, userPkp)

      const litActionRes = await litNodeClient.executeJs({
        ipfsId: 'main',
        sessionSigs,
        jsParams: {
          actionType: 'CreateWallet',
          authParams: {
            accessToken: authMethod.accessToken,
            googleAuthMethodId: googleAuthMethodId,
            publicKey: userPkp.publicKey,
          },
          createWalletParams: {
            dataToEncryptHash,
            publicKey: multisigPkp.publicKey,
          }
        }
      })
      
      const responseObj = typeof litActionRes.response === 'string' 
        ? JSON.parse(litActionRes.response) 
        : litActionRes.response;
      
      log('Parsed response object:', responseObj);
      if (!responseObj.success) {
        throw new Error('Failed to create multisig wallet')
      }

      const metadata = {
        accessControlConditions,
        mfaSettings,
      }

      const response = await axios.post('/api/multisig', {
        multisigPkp: mockMultisigPkp,
        currentPkp: userPkp,
        signer2,
        signer1Email: currentUserEmail,
        signer2Email: signer2Email,
        ciphertext,
        dataToEncryptHash,
        metadata,
        dataToEncryptHashSignature: responseObj.dataToEncryptHashSignature,
      })

      if (response.data.success) {
        // Clear form
        setSigner2Email('')
        setSigner2Address('')
        setSigner2PublicKey('')
        setSigner2GoogleAuthMethodId('')
        setPhoneNumber('')
        setDailyLimit('')
        
        // Call success callback
        if (onSuccess) {
          onSuccess()
        }
      }
    } catch (error) {
      console.error('Failed to create multisig PKP:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Current Signer Display */}
      <SignerEmailField 
        className='mb-6'
        label="Current Signer"
        input={{
          value: currentUserEmail,
          onChange: () => {}, // onChange not needed in disabled mode
          placeholder: "Your email address",
          id: "currentUserEmail"
        }}
        disabled={true}
        inputType="email"
        address={userPkp?.ethAddress}
      />
      
      {/* Second Signer Input */}
      <SignerEmailField 
        label="Second Signer"
        input={{
          value: signer2Email,
          onChange: setSigner2Email,
          placeholder: "Enter signer's email",
          id: "signer2Email"
        }}
        inputType="email"
        onAddressFound={(addressData) => {
          if (addressData && addressData.authMethodId && addressData.publicKey) {
            setSigner2Address(addressData.ethAddress);
            setSigner2PublicKey(addressData.publicKey);
            setSigner2GoogleAuthMethodId(addressData.authMethodId || '');
          } else {
            setSigner2Address('');
            setSigner2PublicKey('');
            setSigner2GoogleAuthMethodId('');
          }
        }}
      />

      {/* MFA Settings */}
      <div className="pt-2">
        <h3 className="font-medium text-sm mb-3">MFA Settings (Optional)</h3>
        
        {/* Phone Number */}
        <div className="mb-3">
          <Label htmlFor="phoneNumber" className="text-xs text-gray-600 mb-1 block">Phone Number for 2FA</Label>
          <Input
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
          />
        </div>
        
        {/* Daily Limit */}
        <div className="mb-3">
          <Label htmlFor="dailyLimit" className="text-xs text-gray-600 mb-1 block">Daily Transfer Limit (USD)</Label>
          <Input
            id="dailyLimit"
            value={dailyLimit}
            onChange={(e) => setDailyLimit(e.target.value)}
            placeholder="1000"
            type="number"
            min="0"
            step="1"
          />
        </div>
      </div>
      
      <Button
        onClick={handleCreateMultisigPKP}
        disabled={isLoading || !signer2PublicKey}
        className="w-full"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Create Multisig Wallet
      </Button>
    </div>
  )
} 