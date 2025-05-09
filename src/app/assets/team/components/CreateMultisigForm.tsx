'use client'

import { useState } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import { getEmailFromGoogleToken, log, isGoogleTokenValid } from '@/lib/utils'
import { SignerEmailField } from '@/components/SignerEmailField'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { calculateCIDFromString, getLitActionIpfsCid, getSessionSigsByPkp, googleProvider, litNodeClient, mintPKP, MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID, uploadViaPinata } from '@/lib/lit'
import { encryptString } from '@lit-protocol/encryption'
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from '@lit-protocol/constants'
import { editAuthmethodLitActionCode } from '@/app/debug/lit-actions/edit-authmethod'
import { ethers } from 'ethers'
import { toast } from "react-toastify"
import { getCreateWalletIpfsId, getUpdateWalletIpfsId } from '@/lib/lit/ipfs-id-env'

interface CreateMultisigFormProps {
  authMethod: AuthMethod
  userPkp: IRelayPKP
  sessionPkp: IRelayPKP
  googleAuthMethodId: string
  onSuccess?: () => void
}

export function CreateMultisigForm({ 
  authMethod, 
  userPkp, 
  sessionPkp,
  googleAuthMethodId, 
  onSuccess 
}: CreateMultisigFormProps) {
  const [isLoading, setIsLoading] = useState(false)
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

  const mintMultisigPKP = async () => {
    const createWalletIpfsIdHex = await getCreateWalletIpfsId("hex")
    const updateWalletIpfsIdHex = await getUpdateWalletIpfsId("hex")
    const createWalletIpfsId = await getCreateWalletIpfsId("base58")

    const multisigPkp = await mintPKP({
      authMethod,
      options: {
        permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction, AUTH_METHOD_TYPE.LitAction, AUTH_METHOD_TYPE.GoogleJwt],
        permittedAuthMethodIds: [createWalletIpfsIdHex, updateWalletIpfsIdHex, googleAuthMethodId],
        permittedAuthMethodPubkeys: ['0x', '0x', '0x'],
        permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.NoPermissions]],
        addPkpEthAddressAsPermittedAddress: false,
        sendPkpToItself: true,
      },
      provider: googleProvider,
    })
    return {
      multisigPkp,
      createWalletIpfsId,
    }
  }

  const handleCreateMultisigPKP = async () => {
    if (!userPkp) {
      console.error('Missing required information')
      return
    }
    
    // Verify Google token before proceeding
    if (!authMethod || !authMethod.accessToken) {
      toast.error('Authentication information is missing');
      return;
    }
    
    const isValid = await isGoogleTokenValid(authMethod.accessToken);
    if (!isValid) {
      toast.error('Your Google login has expired. Please log in again.');
      return;
    }
    
    try {
      setIsLoading(true)

      const { multisigPkp, createWalletIpfsId} = await mintMultisigPKP()
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
            publicKey: userPkp.publicKey,
            authMethodId: googleAuthMethodId
          }
        ],
        threshold: 1,
        mfaSettings,
      }

      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      const updateWalletIpfsId = await getUpdateWalletIpfsId("base58")
      const accessControlConditions = [
        {
          contractAddress: '',
          standardContractType: '',
          chain: 'ethereum',
          method: '',
          parameters: [':currentActionIpfsId'],
          returnValueTest: {
            comparator: '=',
            value: updateWalletIpfsId, // update wallet ipfs cid
          },
        },
      ];

      // Encrypt data
      const { ciphertext, dataToEncryptHash } = await encryptString(
        {
          accessControlConditions,
          dataToEncrypt: JSON.stringify(dataToEncrypt),
        },
        litNodeClient,
      );
      log('encrypt data')

      const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPkp)
      log('session sigs', sessionSigs)

      const litActionRes = await litNodeClient.executeJs({
        ipfsId: createWalletIpfsId,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: googleAuthMethodId,
            authMethodType: ethers.utils.hexValue(AUTH_METHOD_TYPE.GoogleJwt),
          },
          dataToEncryptHash,
          publicKey: multisigPkp.publicKey,
        },
      })
      log('litaction res', litActionRes)

      const signatureObj = litActionRes.signatures['create-wallet-signature']
      if (!signatureObj || !signatureObj.signature) {
        throw new Error('Failed to create multisig wallet')
      }

      const dataToEncryptHashSignature = signatureObj.signature
      log('dataToEncryptHashSignature', dataToEncryptHashSignature)

      const metadata = {
        accessControlConditions,
        mfaSettings,
      }

      const response = await axios.post('/api/multisig', {
        multisigPkp: multisigPkp,
        currentPkp: userPkp,
        signer1Email: currentUserEmail,
        ciphertext,
        dataToEncryptHash,
        metadata,
        dataToEncryptHashSignature,
        authMethodId: googleAuthMethodId
      })

      if (response.data.success) {
        // Clear form
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
        disabled={isLoading}
        className="w-full"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Create Wallet
      </Button>
    </div>
  )
} 