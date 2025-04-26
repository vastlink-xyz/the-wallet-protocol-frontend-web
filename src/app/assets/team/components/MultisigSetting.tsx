'use client'

import { useState } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Loader2, X } from 'lucide-react'
import axios from 'axios'
import { mintMultisigPKP } from '@/app/multisig/helper'
import { MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID } from '@/lib/lit'
import { getEmailFromGoogleToken } from '@/lib/utils'
import { SignerEmailField } from '@/components/SignerEmailField'

interface MultisigSettingProps {
  authMethod: AuthMethod
  userPkp: IRelayPKP
  googleAuthMethodId: string
  onClose: () => void
  onSuccess?: () => void
}

export function MultisigSetting({ 
  authMethod, 
  userPkp, 
  googleAuthMethodId, 
  onClose,
  onSuccess 
}: MultisigSettingProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [signer2Email, setSigner2Email] = useState('')
  const [signer2Address, setSigner2Address] = useState('')
  const [signer2PublicKey, setSigner2PublicKey] = useState('')
  const [signer2GoogleAuthMethodId, setSigner2GoogleAuthMethodId] = useState('')

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

      const litActionIpfsId = MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID
      console.log('lit actions ipfs id', litActionIpfsId)

      const multisigPkp = await mintMultisigPKP({
        authMethod,
        litActionIpfsId,
        googleAuthMethodIds: [googleAuthMethodId, signer2GoogleAuthMethodId]
      })
      console.log('multisig pkp', multisigPkp)

      const response = await axios.post('/api/multisig', {
        multisigPkp: multisigPkp,
        currentPkp: userPkp,
        signer2,
        signer1Email: currentUserEmail,
        signer2Email: signer2Email
      })

      if (response.data.success) {
        // Clear form
        setSigner2Email('')
        setSigner2Address('')
        setSigner2PublicKey('')
        setSigner2GoogleAuthMethodId('')
        
        // Call success callback
        if (onSuccess) {
          onSuccess()
        }
        
        // Close modal
        onClose()
      }
    } catch (error) {
      console.error('Failed to create multisig PKP:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-xl font-semibold mb-6">Create 2-of-2 Multisig Wallet</h2>
        <p className="text-sm text-gray-500 mb-4">A 2-of-2 multisig wallet requires approval from both signers to execute any transaction.</p>
        
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
            address={userPkp?.ethAddress}
          />
          
          {/* Second Signer Input */}
          <SignerEmailField 
            label="Second Signer"
            input={{
              value: signer2Email,
              onChange: setSigner2Email,
              placeholder: "Enter signer's email address",
              id: "signer2Email"
            }}
            onAddressFound={(addressData) => {
              if (addressData) {
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
          
          <Button
            onClick={handleCreateMultisigPKP}
            disabled={isLoading || !signer2PublicKey}
            className="w-full"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Multisig Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}
