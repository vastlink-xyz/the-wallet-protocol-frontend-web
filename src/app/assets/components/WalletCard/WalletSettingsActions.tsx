import { useState } from "react"
import { WalletSettingsButton } from "./WalletSettingsButton"
import { PersonalWalletSettings } from "@/app/assets/components/Personal/WalletSettings"

interface WalletSettingsActionsProps {
  className?: string
  onSettingsChange?: () => void
}

export function WalletSettingsActions({
  className,
  onSettingsChange,
}: WalletSettingsActionsProps) {
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)

  const handleSettingsClose = () => {
    setShowSettingsDialog(false)
    // Call callback when settings might have changed
    onSettingsChange?.()
  }

  return (
    <>
      {/* Settings Button */}
      <WalletSettingsButton
        onSettingsClick={() => setShowSettingsDialog(true)}
        className={className}
      />

      {/* Personal Wallet Settings */}
      <PersonalWalletSettings 
        isOpen={showSettingsDialog}
        onClose={handleSettingsClose}
      />
    </>
  )
}