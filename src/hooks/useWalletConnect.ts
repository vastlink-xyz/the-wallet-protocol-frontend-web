import { useContext } from 'react'
import { WalletConnectContext, type WalletConnectContextType } from '@/providers/WalletConnectProvider'

/**
 * Hook to access WalletConnect context
 * 
 * @returns WalletConnect context value containing connection state, sessions, and operations
 * @throws Error if used outside of WalletConnectProvider
 */
export function useWalletConnect(): WalletConnectContextType {
  const context = useContext(WalletConnectContext)
  
  if (!context) {
    throw new Error('useWalletConnect must be used within a WalletConnectProvider')
  }
  
  return context
}