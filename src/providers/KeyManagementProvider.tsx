'use client';

import { usePassport } from "@/hooks/usePassport";
import { KeyManagementService } from "@/services/KeyManagementService/KeyManagement";
import { PassportKeyManagement } from "@/services/KeyManagementService/PassportKeyManagement";
import React, { useContext, useEffect, useState } from "react";

const KeyManagementContext = React.createContext<KeyManagementService | null>(null);

export function KeyManagementProvider({ children }: { children: React.ReactNode }) {
  const { passport } = usePassport(
    // "07907e39-63c6-4b0b-bca8-377d26445172" // original
    // "43ca2cb8-886e-417f-9e31-0c0c5b3acd1e" // localhost:4943
    // "4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370" // localhost:3000
    process.env.NEXT_PUBLIC_SCOPE_ID!,
  );

  const [keyManagementService, setKeyManagementService] = useState<KeyManagementService | null>(null);

  useEffect(() => {
    if (passport) {
      setKeyManagementService(new PassportKeyManagement(passport));
    }
  }, [passport]);

  return (
    <KeyManagementContext.Provider value={keyManagementService}>
      {children}
    </KeyManagementContext.Provider>
  );
}

export const useKeyManagement = () => useContext(KeyManagementContext);