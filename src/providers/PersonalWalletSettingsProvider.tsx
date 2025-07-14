'use client'

import { createContext, useState } from "react";

export interface PersonalWalletSettings {
  isPersonalWalletSettingsOpen: boolean;
  showPersonalWalletSettings: () => void;
  closePersonalWalletSettings: () => void;
}

export const PersonalWalletSettingsContext = createContext<PersonalWalletSettings>({
  isPersonalWalletSettingsOpen: false,
  showPersonalWalletSettings: () => {},
  closePersonalWalletSettings: () => {},
});

export function PersonalWalletSettingsProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PersonalWalletSettingsContext.Provider value={{
      isPersonalWalletSettingsOpen: isOpen,
      showPersonalWalletSettings: () => setIsOpen(true),
      closePersonalWalletSettings: () => setIsOpen(false)
    }}>
      {children}
    </PersonalWalletSettingsContext.Provider>
  );
}