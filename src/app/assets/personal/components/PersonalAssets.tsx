'use client'

import { useState, useEffect, useMemo } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Loader2 } from 'lucide-react'
import { formatEthAmount, log } from '@/lib/utils'
import { getProviderByAuthMethodType } from '@/lib/lit/providers'
import { SendToken } from './SendToken'
import { PersonalWalletSettings } from './WalletSettings'
import { getBtcAddressByPublicKey, fetchBtcBalance } from '@/lib/web3/btc'
import { WalletCard } from '../../components/WalletCard'
import { fetchEthBalance } from '@/lib/web3/eth'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface PersonalAssetsProps {
  authMethod: AuthMethod
}

export default function PersonalAssets({ authMethod }: PersonalAssetsProps) {
  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
  const [sessionPkp, setSessionPkp] = useState<IRelayPKP | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string | null>(null)
  const [btcAddress, setBtcAddress] = useState<string | null>(null)
  const [showSendDialog, setShowSendDialog] = useState(false)

  // Fetch user data
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
          throw new Error('Failed to fetch user information from database')
        }
        
        const userData = await userResponse.json()
        setEmail(userData.email)
        
        // Use litActionPkp from user data
        if (userData.litActionPkp) {
          setLitActionPkp(userData.litActionPkp)
        }
        if (userData.sessionPkp) {
          setSessionPkp(userData.sessionPkp)
          setBtcAddress(userData.addresses?.btc)
        }
      } catch (error) {
        console.error("Error fetching data from database:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [authMethod])

  const handleSendClick = () => {
    setShowSendDialog(true)
  }

  if (isLoading) {
    return (
      <div className="bg-card p-6 rounded-lg border text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
        <p>Loading personal wallet...</p>
      </div>
    )
  }

  // If no PKP exists yet
  if (!litActionPkp || !sessionPkp) {
    return (
      <div className="bg-card p-6 rounded-lg border text-center">
        <p className="text-muted-foreground">No wallet information available</p>
      </div>
    )
  }

  // Display wallet information
  return (
    <div className="space-y-6">

      {
        authMethodId && (
          <Dialog open={showSendDialog} onOpenChange={setShowSendDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send</DialogTitle>
              </DialogHeader>
              <SendToken
                litActionPkp={litActionPkp}
                sessionPkp={sessionPkp}
                authMethod={authMethod}
                btcAddress={btcAddress || ''}
                authMethodId={authMethodId}
                onClose={() => setShowSendDialog(false)}
              />
            </DialogContent>
          </Dialog>
        )
      }

      {
        (email && btcAddress) && (
          <WalletCard
            avatars={[{ email }]}
            walletName={email}
            WalletSettings={<PersonalWalletSettings />}
            onSendClick={handleSendClick}
            onReceiveClick={() => {}}
            onTxHistoryClick={() => {}}
            btcAddress={btcAddress}
            ethAddress={litActionPkp.ethAddress}
          />
        )
      }
    </div>
  )
} 