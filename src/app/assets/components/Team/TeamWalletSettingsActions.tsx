import { useState, useEffect } from "react"
import { WalletSettingsButton } from "@/app/assets/components/WalletCard/WalletSettingsButton"
import { MultisigSetting } from "@/app/assets/components/Team/MultisigSetting"
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod"
import { getProviderByAuthMethodType } from "@/lib/lit"
import { AuthMethod, IRelayPKP } from "@lit-protocol/types"
import { useUnsignedProposals } from "@/hooks/useUnsignedProposals"
import { MultisigWallet } from "@/app/api/multisig/storage"

interface TeamWalletSettingsActionsProps {
  wallet: MultisigWallet
  className?: string
  onSettingsChange?: () => void
}

export function TeamWalletSettingsActions({
  wallet,
  className,
  onSettingsChange,
}: TeamWalletSettingsActionsProps) {
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string>('')
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  
  // Unsigned proposals hook for cache invalidation
  const { invalidateProposalRelatedData } = useUnsignedProposals({
    authMethodId,
    enabled: false, // only need the invalidate function
  })
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedAuthMethod = getAuthMethodFromStorage()
        if (!storedAuthMethod) return
        
        setAuthMethod(storedAuthMethod)
        const provider = getProviderByAuthMethodType(storedAuthMethod.authMethodType)
        const authMethodId = await provider.getAuthMethodId(storedAuthMethod)
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
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }
    
    fetchUserData()
  }, [])

  const handleSettingsSuccess = () => {
    // Refresh data after settings change
    invalidateProposalRelatedData(authMethodId, userPkp?.ethAddress)
    onSettingsChange?.()
  }

  const handleSettingsClose = () => {
    setShowSettingsDialog(false)
    // Call callback when settings dialog closes (settings might have changed)
    onSettingsChange?.()
  }
  
  return (
    <>
      {/* Settings Button */}
      <WalletSettingsButton
        onSettingsClick={() => setShowSettingsDialog(true)}
        className={className}
      />
      
      {/* Multisig Settings Dialog */}
      {
        (showSettingsDialog && userPkp && authMethod && authMethodId) && (
          <MultisigSetting
            open={showSettingsDialog}
            mode="edit"
            walletId={wallet.id}
            authMethod={authMethod}
            userPkp={userPkp}
            authMethodId={authMethodId}
            onClose={handleSettingsClose}
            onSuccess={handleSettingsSuccess}
          />
        )
      }
    </>
  )
}