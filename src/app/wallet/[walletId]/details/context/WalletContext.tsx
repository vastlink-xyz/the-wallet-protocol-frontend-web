"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MultisigWallet } from "@/app/api/multisig/storage";
import { IRelayPKP } from "@lit-protocol/types";

interface WalletContextType {
  wallet: MultisigWallet | null;
  pkp: IRelayPKP | null;
  isLoading: boolean;
}

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  pkp: null,
  isLoading: true
});

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider({ 
  children, 
  walletId 
}: { 
  children: React.ReactNode,
  walletId: string 
}) {
  const [wallet, setWallet] = useState<MultisigWallet | null>(null);
  const [pkp, setPkp] = useState<IRelayPKP | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWalletData() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/multisig?id=${walletId}`);
        const data = await response.json();
        
        if (data.success) {
          setWallet(data.data);
          setPkp(data.data.pkp);
        } else {
          console.error("Failed to fetch wallet data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (walletId) {
      fetchWalletData();
    }
  }, [walletId]);

  return (
    <WalletContext.Provider value={{ wallet, pkp, isLoading }}>
      {children}
    </WalletContext.Provider>
  );
} 