'use client'

import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { createContext, useState } from "react";

export interface MultisigSettingsParams {
  mode: 'create' | 'edit'
  walletId?: string
  authMethod: AuthMethod
  userPkp: IRelayPKP
  authMethodId: string
  onSuccess?: () => void
}

export interface MultisigSettings {
  params: MultisigSettingsParams | null

  isMultisigSettingsOpen: boolean;
  showMultisigSettings: (params: MultisigSettingsParams) => void;
  closeMultisigSettings: () => void;
}

export const MultisigSettingsContext = createContext<MultisigSettings>({
  params: null,

  isMultisigSettingsOpen: false,
  showMultisigSettings: () => {},
  closeMultisigSettings: () => {},
});

export function MultisigSettingsProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const [params, setParams] = useState<MultisigSettingsParams | null>(null);

  return (
    <MultisigSettingsContext.Provider value={{
      params,
      isMultisigSettingsOpen: isOpen,
      showMultisigSettings: (params) => {
        setParams(params);
        setIsOpen(true);
      },
      closeMultisigSettings: () => {
        setParams(null);
        setIsOpen(false);
      },
    }}>
      {children}
    </MultisigSettingsContext.Provider>
  );
}