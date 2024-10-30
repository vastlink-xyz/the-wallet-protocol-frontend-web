'use client'

import { log } from '@/lib/utils';
import { IWeb3Wallet } from '@walletconnect/web3wallet';
import React, { createContext, useState, useContext, PropsWithChildren, useRef } from 'react';

interface DappInfo {
  name: string;
  url: string;
}

export interface PairContextType {
  isModalOpen: boolean;
  setIsModalOpen: (isopen: boolean) => void;

  displayUriInput: boolean;
  setDisplayUriInput: (displayUriInput: boolean) => void;

  dappInfo: DappInfo;
  setDappInfo: (dappInfo: DappInfo) => void;

  isConnected: boolean;
  setIsConnected: (isconnect: boolean) => void;

  web3wallet: IWeb3Wallet | undefined;
  setWeb3Wallet: (w: IWeb3Wallet) => void;
  web3walletRef: React.RefObject<IWeb3Wallet | undefined>;
}

const WalletConnectPairContext = createContext<PairContextType | undefined>(undefined);

export const WalletConnectPairProvider = ({ children }: PropsWithChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayUriInput, setDisplayUriInput] = useState(false);
  const [dappInfo, setDappInfo] = useState({ name: '', url: '' });
  const [isConnected, setIsConnected] = useState(false);
  const [web3wallet, setWeb3Wallet] = useState<IWeb3Wallet>();
  const web3walletRef = useRef<IWeb3Wallet>();

  const setWeb3WalletWithRef = (w: IWeb3Wallet) => {
    setWeb3Wallet(w);
    web3walletRef.current = w;
  };

  return (
    <WalletConnectPairContext.Provider value={{
      isModalOpen,
      setIsModalOpen,
      displayUriInput,
      setDisplayUriInput,
      dappInfo,
      setDappInfo,
      isConnected,
      setIsConnected,
      web3wallet,
      setWeb3Wallet: setWeb3WalletWithRef,
      web3walletRef,
    }}>
      {children}
    </WalletConnectPairContext.Provider>
  );
};

export const useWalletConnectPair = () => useContext(WalletConnectPairContext);
