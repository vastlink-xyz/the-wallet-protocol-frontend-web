import { useState, useEffect, useContext } from "react"
import { WalletSettingsButton } from "@/app/assets/components/WalletCard/WalletSettingsButton"
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod"
import { getProviderByAuthMethodType } from "@/lib/lit"
import { AuthMethod, IRelayPKP } from "@lit-protocol/types"
import { useNotifications } from "@/hooks/useNotifications"
import { MultisigWallet } from "@/app/api/multisig/storage"
import { MultisigSettingsContext } from "@/providers/MultisigSettingsProvider"

interface TeamWalletSettingsActionsProps {
  wallet: MultisigWallet
  refreshProposals?: () => Promise<any>
}

export function TeamWalletSettingsActions({
  wallet,
  refreshProposals,
}: TeamWalletSettingsActionsProps) {
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string>('')
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  
  const { showMultisigSettings } = useContext(MultisigSettingsContext);

  // Notifications hook for UI refresh
  const { refreshNotifications } = useNotifications({
    enabled: false, // only need the refresh function
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

  const handleSettingsSuccess = async () => {
    // Refresh data after settings change
    refreshNotifications(authMethodId, userPkp?.ethAddress)
    
    // Refresh proposals data
    if (refreshProposals) {
      await refreshProposals()
    }
  }

  return (
    // Settings Button
    <WalletSettingsButton
      onSettingsClick={() => {
        if (userPkp && authMethod) {
          showMultisigSettings({
            mode: "edit",
            walletId: wallet.id,
            authMethod,
            userPkp,
            authMethodId,
            onSuccess: handleSettingsSuccess,
          })
        }
      }}
    />
  )
}