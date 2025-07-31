import { useState, useEffect, useContext } from "react"
import { WalletSettingsButton } from "@/app/assets/components/WalletCard/WalletSettingsButton"
import { useAuthContext } from '@/hooks/useAuthContext'
import { useUserData } from '@/hooks/useUserData'
import { IRelayPKP } from "@lit-protocol/types"
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
  const { authMethod, authMethodId } = useAuthContext()
  const { userData } = useUserData()
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  
  const { showMultisigSettings } = useContext(MultisigSettingsContext);

  // Notifications hook for UI refresh
  const { refreshNotifications } = useNotifications({
    enabled: false, // only need the refresh function
  })
  
  useEffect(() => {
    // Set user PKP when user data is available
    if (userData?.litActionPkp) {
      setUserPkp(userData.litActionPkp)
    }
  }, [userData])

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
        if (userPkp) {
          showMultisigSettings({
            mode: "edit",
            walletId: wallet.id,
            userPkp,
            onSuccess: handleSettingsSuccess,
          })
        }
      }}
    />
  )
}