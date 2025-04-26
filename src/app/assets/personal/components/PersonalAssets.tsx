'use client'

import { useState, useEffect } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { ethers } from 'ethers'
import { LIT_CHAINS } from '@lit-protocol/constants'
import { Loader2 } from 'lucide-react'
import { googleProvider } from '@/lib/lit/googleProvider'

interface PersonalAssetsProps {
  authMethod: AuthMethod
}

export default function PersonalAssets({ authMethod }: PersonalAssetsProps) {
  const [balance, setBalance] = useState<string | null>(null)
  const [isBalanceLoading, setIsBalanceLoading] = useState(false)
  const [pkp, setPkp] = useState<IRelayPKP | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!authMethod) return
      
      try {
        setIsLoading(true)
        // Get user's authMethodId
        const authMethodId = await googleProvider.getAuthMethodId(authMethod)
        
        // Fetch user's information from database API
        const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`)
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user information from database')
        }
        
        const userData = await userResponse.json()
        setEmail(userData.email)
        
        // Use litActionPkp from user data
        if (userData.litActionPkp) {
          setPkp(userData.litActionPkp)
        }
      } catch (error) {
        console.error("Error fetching data from database:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [authMethod])

  // Fetch balance separately
  useEffect(() => {
    const fetchBalance = async () => {
      if (!pkp) return

      try {
        setIsBalanceLoading(true)
        const provider = new ethers.providers.JsonRpcProvider(LIT_CHAINS['sepolia'].rpcUrls[0])
        const balanceWei = await provider.getBalance(pkp.ethAddress)
        const balanceEth = ethers.utils.formatEther(balanceWei)
        setBalance(balanceEth)
      } catch (error) {
        console.error("Error fetching Sepolia balance:", error)
        setBalance("Error")
      } finally {
        setIsBalanceLoading(false)
      }
    }

    fetchBalance()
  }, [pkp])

  if (isLoading) {
    return (
      <div className="bg-card p-6 rounded-lg border text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
        <p>Loading wallet information...</p>
      </div>
    )
  }

  // If no PKP exists yet
  if (!pkp) {
    return (
      <div className="bg-card p-6 rounded-lg border text-center">
        <p className="text-muted-foreground">No wallet information available</p>
      </div>
    )
  }

  // Display wallet information
  return (
    <div className="bg-card p-6 rounded-lg border">
      <div className="space-y-4">
        <div className="space-y-2">
          <div>
            <span className="font-medium">Email:</span> 
            <div className="text-sm bg-muted p-2 rounded break-all mt-1">
              {email}
            </div>
          </div>
          <div>
            <span className="font-medium">Address:</span> 
            <div className="text-sm bg-muted p-2 rounded break-all mt-1">
              {pkp.ethAddress}
            </div>
          </div>
          <div>
            <span className="font-medium">Sepolia ETH Balance:</span>
            <div className="text-sm bg-muted p-2 rounded break-all mt-1">
              {isBalanceLoading ? 
                <Loader2 className="h-4 w-4 animate-spin inline mr-2" /> : 
                balance ? `${balance} ETH` : "0 ETH"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 