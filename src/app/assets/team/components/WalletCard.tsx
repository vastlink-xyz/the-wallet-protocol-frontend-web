import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { IRelayPKP } from '@lit-protocol/types'
import { Loader2, Copy, Check } from 'lucide-react'
import { formatEthAmount, fetchEthBalance } from '@/lib/utils'

interface WalletCardProps {
  id: string
  signers: {
    ethAddress: string
    publicKey: string
    email: string
  }[]
  pkp: {
    ethAddress: string
    publicKey: string
  }
}

export function WalletCard({ id, signers, pkp }: WalletCardProps) {
  const router = useRouter()
  const [balance, setBalance] = useState<string>('')
  const [isLoadingBalance, setIsLoadingBalance] = useState(false)
  const [copied, setCopied] = useState(false)

  // Fetch wallet balance from Sepolia network
  useEffect(() => {
    async function getWalletBalance() {
      if (!pkp?.ethAddress) return
      
      try {
        setIsLoadingBalance(true)
        const balanceEth = await fetchEthBalance(pkp.ethAddress)
        setBalance(balanceEth)
      } catch (error) {
        console.error('Failed to fetch wallet balance:', error)
        setBalance('Error')
      } finally {
        setIsLoadingBalance(false)
      }
    }
    
    getWalletBalance()
  }, [pkp?.ethAddress])

  // Function to copy address to clipboard
  const copyToClipboard = async (e: React.MouseEvent, text: string) => {
    // Stop event propagation to prevent opening wallet page
    e.stopPropagation()
    
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  // Get initials from email
  const getInitials = (email: string) => {
    return email?.charAt(0).toUpperCase() || '?'
  }

  // Get random background color based on email
  const getAvatarColor = (email: string) => {
    if (!email) return '#6B7280'; // Default gray color
    
    // Simple hash function to get consistent color based on email
    let hash = 0
    for (let i = 0; i < email.length; i++) {
      hash = email.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    // Convert to hex color
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase()
    return '#' + '00000'.substring(0, 6 - c.length) + c
  }

  // Remove the truncation of wallet ID
  const truncateId = (id: string) => {
    return id
  }

  // Handle click on the wallet card
  const handleCardClick = () => {
    // Navigate to multisig page with wallet ID as query parameter
    router.push(`/multisig?walletId=${id}`)
  }

  return (
    <div 
      className="bg-white rounded-lg border p-6 shadow-sm relative hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Wallet ID in top left */}
      <div className="absolute top-4 left-4 text-sm font-mono text-gray-500">
        {truncateId(id)}
      </div>
      
      {/* Avatars in top right */}
      <div className="absolute top-4 right-4 flex -space-x-3">
        {signers.map((signer, index) => (
          <div
            key={index}
            className="h-10 w-10 rounded-full flex items-center justify-center text-white text-base font-medium shadow-sm"
            style={{ backgroundColor: getAvatarColor(signer.email) }}
            title={signer.email || signer.ethAddress}
          >
            {getInitials(signer.email)}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="pt-14 pb-4">
        <h3 className="font-medium text-xl">2-of-2 Multisig Wallet</h3>
        
        {/* Wallet address with copy button */}
        <div className="text-gray-600 mt-3 font-mono text-sm flex items-center">
          <span className="truncate">{pkp?.ethAddress}</span>
          <div 
            onClick={(e) => copyToClipboard(e, pkp?.ethAddress || '')}
            className="ml-1 p-1 cursor-pointer"
            aria-label="Copy address"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </div>
        </div>
        
        {/* Balance */}
        <div className="mt-3 flex items-center">
          <span className="text-lg font-medium">
            {isLoadingBalance ? (
              <Loader2 className="h-5 w-5 inline animate-spin mr-1" />
            ) : (
              balance ? `${formatEthAmount(balance)} ETH` : '0 ETH'
            )}
          </span>
        </div>
        
        <p className="text-gray-500 mt-4">
          {signers.length} signers required for transactions
        </p>
      </div>
    </div>
  )
} 