import { WalletSettingsButton } from "./WalletSettingsButton"
import { PersonalWalletSettingsContext } from "@/providers/PersonalWalletSettingsProvider";
import { useContext } from "react";

export function WalletSettingsActions() {
  const { showPersonalWalletSettings } = useContext(PersonalWalletSettingsContext);

  return (
    // Settings Button
    <WalletSettingsButton onSettingsClick={() => showPersonalWalletSettings()} />
  )
}