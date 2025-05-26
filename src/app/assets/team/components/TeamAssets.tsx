'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Plus, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MultisigSetting } from './MultisigSetting'
import { getProviderByAuthMethodType } from '@/lib/lit'
import { WalletCard } from '../../components/WalletCard'
import { MultisigWallet } from '@/app/api/multisig/storage'
import { useRouter } from 'next/navigation'

interface TeamAssetsProps {
  authMethod: AuthMethod
}

export default function TeamAssets({ authMethod }: TeamAssetsProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [hasMultisigWallets, setHasMultisigWallets] = useState(false)
  const [wallets, setWallets] = useState<MultisigWallet[]>([])
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  const [sessionPkp, setSessionPKP] = useState<IRelayPKP | null>(null)
  const [showMultisigSetting, setShowMultisigSetting] = useState(false)
  const [authMethodId, setAuthMethodId] = useState<string>('')

  useEffect(() => {
    const fetchUserData = async () => {
      if (!authMethod) return
      
      try {
        setIsLoading(true)
        // Get user's authMethodId
        const provider = getProviderByAuthMethodType(authMethod.authMethodType)
        const authMethodId = await provider.getAuthMethodId(authMethod)
        setAuthMethodId(authMethodId)
        
        // Fetch user's information from database API
        const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`)
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user information')
        }
        
        const userData = await userResponse.json()
        
        // Use litActionPkp from user data
        if (userData.litActionPkp) {
          setUserPkp(userData.litActionPkp)
        }
        if (userData.sessionPkp) {
          setSessionPKP(userData.sessionPkp)
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [authMethod])

  // Check for multisig wallets once we have the user's PKP
  useEffect(() => {
    const checkMultisigWallets = async () => {
      if (!userPkp) return
      
      try {
        const { data } = await axios.get(`/api/multisig?address=${userPkp.ethAddress}`)
        if (data.success) {
          setWallets(data.data)
          setHasMultisigWallets(data.data.length > 0)
        }
      } catch (error) {
        console.error('Failed to fetch team wallets:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkMultisigWallets()
  }, [userPkp])

  const handleRefreshWallets = async () => {
    if (!userPkp) return
    
    try {
      setIsLoading(true)
      const { data } = await axios.get(`/api/multisig?address=${userPkp.ethAddress}`)
      if (data.success) {
        setWallets(data.data)
        setHasMultisigWallets(data.data.length > 0)
      }
    } catch (error) {
      console.error('Failed to refresh multisig wallets:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleWalletSettingsClick = (walletId: string) => {
    window.open(`/multisig?walletId=${walletId}`, '_blank')
  }

  const handleSendClick = (walletId: string) => {
    window.open(`/multisig?walletId=${walletId}`, '_blank')
  }

  return (
    <div className="p-4 flex flex-col items-center gap-4 w-full">
      {isLoading ? (
        <p>Loading team wallets...</p>
      ) : (
        <>
          {hasMultisigWallets ? (
            <div className="w-full max-w-5xl">
              <p className="text-center mb-6 text-lg">You have {wallets.length} team wallet(s)</p>
              <div className="flex flex-col items-center gap-6 w-full">
                {wallets.map(wallet => (
                  <div key={wallet.id} className="w-full max-w-3xl mb-6">
                    <WalletCard
                      avatars={wallet.signers.map(signer => ({ email: signer.email }))}
                      walletName={wallet.name}
                      onSendClick={() => handleSendClick(wallet.id)}
                      onWalletSettingsClick={() => handleWalletSettingsClick(wallet.id)}
                      onReceiveClick={() => {}}
                      onTxHistoryClick={() => {}}
                      btcAddress={wallet.addresses.btc}
                      ethAddress={wallet.addresses.eth}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center mb-4">
              <p>You don&apos;t have any team wallets yet.</p>
              <p className="text-sm text-gray-500 mt-2">Create your first team wallet / multisig wallet by clicking the button below.</p>
            </div>
          )}
        </>
      )}

      {/* fixed button */}
      <button
        className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 shadow-lg z-10 cursor-pointer"
        onClick={() => {
          if (userPkp && authMethodId) {
            setShowMultisigSetting(true)
          } else {
            console.error('Missing userPkp or authMethodId')
          }
        }}
      >
        <Plus className="w-7 h-7" />
      </button>

      {(showMultisigSetting && userPkp && sessionPkp) && (
        <MultisigSetting
          authMethod={authMethod}
          userPkp={userPkp}
          sessionPkp={sessionPkp}
          authMethodId={authMethodId}
          onClose={() => setShowMultisigSetting(false)}
          onSuccess={handleRefreshWallets}
        />
      )}
    </div>
  )
} 