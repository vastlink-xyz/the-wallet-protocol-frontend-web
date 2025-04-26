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
  const [fetchingUser2Info, setFetchingUser2Info] = useState(false)
  const [userLookupError, setUserLookupError] = useState('')

  // Fetch user information by email
  const fetchUserByEmail = async (email: string) => {
    if (!email || !email.includes('@')) {
      return
    }
    
    setFetchingUser2Info(true)
    setUserLookupError('')
    setSigner2Address('')
    setSigner2PublicKey('')
    setSigner2GoogleAuthMethodId('')
    
    try {
      const response = await axios.get(`/api/user/email?email=${encodeURIComponent(email)}`)
      
      if (response.data.success) {
        const { authMethodId, pkp } = response.data.data
        setSigner2Address(pkp.ethAddress)
        setSigner2PublicKey(pkp.publicKey)
        setSigner2GoogleAuthMethodId(authMethodId)
        console.log('Found user for email', email, pkp, authMethodId)
      } else {
        setUserLookupError('User not found')
      }
    } catch (error) {
      console.error('Failed to fetch user by email:', error)
      setUserLookupError('Failed to find user')
    } finally {
      setFetchingUser2Info(false)
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

      // Get current user's email from authMethod
      let currentUserEmail = '';
      if (authMethod.accessToken) {
        const email = getEmailFromGoogleToken(authMethod.accessToken);
        if (email) {
          currentUserEmail = email;
        }
      }

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
          <div className="space-y-1">
            <Label htmlFor="currentUser">Current Signer</Label>
            <Input
              id="currentUser"
              value={userPkp.ethAddress}
              disabled
              className="bg-gray-50"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="signer2Email">Second Signer</Label>
            <Input
              id="signer2Email"
              value={signer2Email}
              onChange={(e) => {
                setSigner2Email(e.target.value)
              }}
              onBlur={() => fetchUserByEmail(signer2Email)}
              placeholder="Enter signer's email address"
              type="email"
            />
          </div>
          
          {fetchingUser2Info && (
            <div className="text-sm text-black flex items-center">
              <Loader2 className="mr-2 h-3 w-3 animate-spin" />
              Looking up user information...
            </div>
          )}
          
          {userLookupError && (
            <div className="text-sm text-red-600">
              {userLookupError}
            </div>
          )}
          
          {signer2Address && (
            <div className="space-y-3">
              <div className="text-sm text-green-600">
                User found
              </div>
              <div className="p-3 bg-gray-50 rounded text-sm break-all">
                <strong>Address:</strong> {signer2Address}
              </div>
            </div>
          )}
          
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
