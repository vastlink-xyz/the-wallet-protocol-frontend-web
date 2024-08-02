'use client'

import { log } from '@/lib/utils';
import { IWeb3Wallet } from '@walletconnect/web3wallet';
import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

interface DappInfo {
  name: string;
  url: string;
}

export interface PairContextType {
  isModalOpen: boolean;
  setIsModalOpen: (isopen: boolean) => void;

  dappInfo: DappInfo;
  setDappInfo: (dappInfo: DappInfo) => void;

  isConnected: boolean;
  setIsConnected: (isconnect: boolean) => void;

  web3wallet: IWeb3Wallet | undefined;
  setWeb3Wallet: (w: IWeb3Wallet) => void;
}

const WalletConnectPairContext = createContext<PairContextType | undefined>(undefined);

export const WalletConnectPairProvider = ({ children }: PropsWithChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dappInfo, setDappInfo] = useState({ name: '', url: '' });
  const [isConnected, setIsConnected] = useState(false);
  const [web3wallet, setWeb3Wallet] = useState<IWeb3Wallet>();

  return (
    <WalletConnectPairContext.Provider value={{
      isModalOpen,
      setIsModalOpen,
      dappInfo,
      setDappInfo,
      isConnected,
      setIsConnected,
      web3wallet,
      setWeb3Wallet,
    }}>
      {children}
    </WalletConnectPairContext.Provider>
  );
};

export const useWalletConnectPair = () => useContext(WalletConnectPairContext);
