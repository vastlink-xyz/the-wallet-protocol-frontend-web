"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MultisigWallet } from "@/app/api/multisig/storage";
import { IRelayPKP } from "@lit-protocol/types";
import { VastbaseAuthMethod } from "@/lib/lit/custom-auth";
import { useAuthContext } from '@/hooks/useAuthContext';

interface WalletContextType {
  wallet: MultisigWallet | null;
  userPkp: IRelayPKP | null;
  authMethod: VastbaseAuthMethod | null;
  authMethodId: string | null;
  walletPkp: IRelayPKP | null;
  isLoading: boolean;
  userPhone: string | null;
}

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  userPkp: null,
  authMethod: null,
  authMethodId: null,
  walletPkp: null,
  isLoading: true,
  userPhone: null
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
  const { authMethod: storedAuthMethod, authMethodId: currentAuthMethodId } = useAuthContext();
  const [wallet, setWallet] = useState<MultisigWallet | null>(null);
  const [walletPkp, setWalletPkp] = useState<IRelayPKP | null>(null);
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null);
  const [authMethod, setAuthMethod] = useState<VastbaseAuthMethod | null>(null);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  useEffect(() => {
    async function initializeData() {
      setIsLoading(true);
      
      try {
        // Step 1: Get auth method from context (this step must be executed first)
        setAuthMethod(storedAuthMethod);
        
        if (!storedAuthMethod) {
          setIsLoading(false);
          return;
        }
        
        // Step 2: Get authMethodId from context (this step must be executed after getting authMethod)
        setAuthMethodId(currentAuthMethodId);
        
        // Step 3: Use Promise.all to fetch remaining data in parallel
        await Promise.all([
          // Fetch wallet data
          (async () => {
            if (!walletId) return;
            
            try {
              const walletResponse = await fetch(`/api/multisig?id=${walletId}`);
              const walletData = await walletResponse.json();
              
              if (walletData.success) {
                setWallet(walletData.data);
                setWalletPkp(walletData.data.pkp);
              } else {
                console.error("Failed to fetch wallet data:", walletData.message);
              }
            } catch (error) {
              console.error("Error fetching wallet data:", error);
            }
          })(),
          
          // Fetch user phone number
          (async () => {
            try {
              const phoneResponse = await fetch('/api/mfa/get-user-phone', {
                headers: {
                  'Authorization': `Bearer ${storedAuthMethod.accessToken}`
                }
              });
              
              if (phoneResponse.ok) {
                const phoneData = await phoneResponse.json();
                const phones = phoneData.phones || [];
                
                if (phones.length > 0) {
                  setUserPhone(phones[0].phone_number);
                }
              }
            } catch (error) {
              console.error('Error fetching user phone:', error);
            }
          })(),
          
          // Fetch user data and session PKP
          (async () => {
            if (!currentAuthMethodId) return;
            
            try {
              const userResponse = await fetch(`/api/user?authMethodId=${currentAuthMethodId}`);
              
              if (userResponse.ok) {
                const userData = await userResponse.json();
                if (userData.litActionPkp) {
                  setUserPkp(userData.litActionPkp);
                }
              } else {
                console.error("Failed to fetch user information");
              }
            } catch (error) {
              console.error("Error fetching user data:", error);
            }
          })()
        ]);
      } catch (error) {
        console.error("Error initializing wallet data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    initializeData();
  }, [walletId, storedAuthMethod, currentAuthMethodId]);

  return (
    <WalletContext.Provider value={{ 
      wallet, 
      userPkp, 
      authMethod, 
      authMethodId, 
      walletPkp, 
      isLoading, 
      userPhone 
    }}>
      {children}
    </WalletContext.Provider>
  );
} 