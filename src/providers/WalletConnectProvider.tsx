'use client'

import React, { createContext, useCallback, useEffect, useState, ReactNode } from 'react'
import type { SessionTypes, ProposalTypes } from '@walletconnect/types'
import type { Web3WalletTypes } from '@walletconnect/web3wallet'
import { walletConnectSessionManager } from '@/lib/walletconnect/sessionManager'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useUserData } from '@/hooks/useUserData'
import { toast } from 'react-toastify'
import { SessionProposalModal } from '@/components/WalletConnect/SessionProposalModal'
import { TransactionRequestModal } from '@/components/WalletConnect/TransactionRequestModal'
import { handleWalletConnectRequest } from '@/lib/walletconnect/transactionHandler'
import { useTranslations } from 'next-intl'

// WalletConnect Context Type
export interface WalletConnectContextType {
  // Connection state
  isConnected: boolean
  isInitialized: boolean
  isInitializing: boolean

  // Session management
  activeSessions: SessionTypes.Struct[]
  sessionProposal: Web3WalletTypes.SessionProposal | null
  
  // Transaction handling
  pendingRequest: Web3WalletTypes.SessionRequest | null

  // Operations
  pair: (uri: string) => Promise<void>
  approveSession: () => Promise<void>
  rejectSession: () => Promise<void>
  approveRequest: () => Promise<void>
  approveRequestWithSecurity: (securityParams: any) => Promise<any>
  rejectRequest: (reason?: string) => Promise<void>
  disconnect: (topic: string) => Promise<void>
  
  // Utilities
  clearSessionProposal: () => void
  clearPendingRequest: () => void
}

// Create Context
export const WalletConnectContext = createContext<WalletConnectContextType | null>(null)

// Provider Props
interface WalletConnectProviderProps {
  children: ReactNode
}

// WalletConnect Provider Component
export function WalletConnectProvider({ children }: WalletConnectProviderProps) {
  // State
  const [isInitialized, setIsInitialized] = useState(false)
  const [isInitializing, setIsInitializing] = useState(false)
  const [activeSessions, setActiveSessions] = useState<SessionTypes.Struct[]>([])
  const [sessionProposal, setSessionProposal] = useState<Web3WalletTypes.SessionProposal | null>(null)
  const [pendingRequest, setPendingRequest] = useState<Web3WalletTypes.SessionRequest | null>(null)

  // Hooks
  const { authMethod, getCurrentAccessToken } = useAuthContext()
  const { userData } = useUserData()
  const t = useTranslations('WalletConnect')

  // Computed state
  const isConnected = activeSessions.length > 0

  // Initialize WalletConnect
  const initializeWalletConnect = useCallback(async () => {
    if (isInitialized || isInitializing || !authMethod || !userData?.litActionPkp) {
      return
    }

    setIsInitializing(true)

    try {
      await walletConnectSessionManager.initialize()

      // Set up event handlers
      walletConnectSessionManager.setOnSessionProposal((proposal) => {
        setSessionProposal(proposal)
      })

      walletConnectSessionManager.setOnSessionRequest((request) => {
        setPendingRequest(request)
      })

      walletConnectSessionManager.setOnSessionDelete((session) => {
        setActiveSessions(prev => prev.filter(s => s.topic !== session.topic))
        toast.info('DApp disconnected')
      })

      // Load existing sessions
      const existingSessions = walletConnectSessionManager.getActiveSessions()
      setActiveSessions(existingSessions)

      setIsInitialized(true)
    } catch (error) {
      console.error('Failed to initialize WalletConnect Provider:', error)
      toast.error('Failed to initialize WalletConnect')
    } finally {
      setIsInitializing(false)
    }
  }, [authMethod, userData, isInitialized, isInitializing])

  // Initialize on mount when auth is ready
  useEffect(() => {
    initializeWalletConnect()
  }, [initializeWalletConnect])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      walletConnectSessionManager.destroy()
    }
  }, [])

  // Pair with DApp
  const pair = useCallback(async (uri: string) => {
    if (!isInitialized) {
      throw new Error('WalletConnect not initialized')
    }

    try {
      await walletConnectSessionManager.pair(uri)
      toast.success(t('pair_success'))
    } catch (error) {
      console.error('Failed to pair:', error)
      toast.error(t('pair_failed'))
      throw error
    }
  }, [isInitialized])

  // Approve session proposal
  const approveSession = useCallback(async () => {
    if (!sessionProposal || !userData?.litActionPkp) {
      throw new Error('No session proposal or user data available')
    }

    try {
      const accounts = [userData.litActionPkp.ethAddress]
      const session = await walletConnectSessionManager.approveSession(sessionProposal, accounts)
      
      setActiveSessions(prev => [...prev, session])
      setSessionProposal(null)
      
      toast.success('Session approved successfully')
    } catch (error) {
      console.error('Failed to approve session:', error)
      toast.error('Failed to approve session')
      throw error
    }
  }, [sessionProposal, userData])

  // Reject session proposal
  const rejectSession = useCallback(async () => {
    if (!sessionProposal) {
      throw new Error('No session proposal available')
    }

    try {
      await walletConnectSessionManager.rejectSession(sessionProposal.id, 'User rejected session')
      setSessionProposal(null)
      toast.info('Session rejected')
    } catch (error) {
      console.error('Failed to reject session:', error)
      toast.error('Failed to reject session')
      throw error
    }
  }, [sessionProposal])

  // Approve request with transaction handling
  const approveRequest = useCallback(async () => {
    if (!pendingRequest || !userData || !authMethod) {
      throw new Error('No pending request, user data, or auth method available')
    }

    try {
      const result = await handleWalletConnectRequest({
        request: pendingRequest,
        userPkp: userData.litActionPkp!,
        accessToken: await getCurrentAccessToken() || '',
        authMethodId: authMethod.authMethodId!,
        providerType: authMethod.providerType!,
        userEmail: authMethod.primaryEmail!,
        user: userData,
        btcAddress: userData.addresses?.btc || '',
        // Security params (empty for backward compatibility)
        pinCode: '',
        mfaType: '',
        mfaCode: '',
        mfaMethodId: '',
        // wallet: undefined, // For personal transactions
      })

      // Respond to WalletConnect with the result
      await walletConnectSessionManager.respondToRequest(
        pendingRequest.topic,
        pendingRequest.id,
        result
      )

      setPendingRequest(null)
      
      // Only show generic toast for signing operations (personalSign, typedData)
      // sendTransaction already shows detailed toast in executePersonalTransaction
      const method = pendingRequest.params.request.method
      if (method === 'personal_sign' || method === 'eth_signTypedData_v4') {
        toast.success(t('request_completed'))
      }
    } catch (error) {
      console.error('Failed to approve request:', error)
      
      // Reject the request on WalletConnect
      await walletConnectSessionManager.rejectRequest(
        pendingRequest.topic,
        pendingRequest.id,
        error instanceof Error ? error.message : 'Transaction failed'
      )
      
      setPendingRequest(null)
      toast.error(error instanceof Error ? error.message : 'Failed to approve request')
      throw error
    }
  }, [pendingRequest, userData, authMethod])

  // Approve request with security verification (PIN/MFA)
  const approveRequestWithSecurity = useCallback(async (securityParams: any) => {
    if (!pendingRequest || !userData || !authMethod) {
      throw new Error('No pending request, user data, or auth method available')
    }

    try {
      const result = await handleWalletConnectRequest({
        request: pendingRequest,
        userPkp: userData.litActionPkp!,
        accessToken: await getCurrentAccessToken() || '',
        authMethodId: authMethod.authMethodId!,
        providerType: authMethod.providerType!,
        userEmail: authMethod.primaryEmail!,
        user: userData,
        btcAddress: userData.addresses?.btc || '',
        // Security params from the verification process
        pinCode: securityParams.pinCode || '',
        mfaType: securityParams.mfaType || '',
        mfaCode: securityParams.mfaCode || '',
        mfaMethodId: securityParams.mfaMethodId || '',
        // wallet: undefined, // For personal transactions
      })

      // Check if result requires MFA (for security verification flow)
      if (result && typeof result === 'object' && result.requiresMFA) {
        return result // Return MFA requirement to security verification hook
      }

      // Respond to WalletConnect with the result
      await walletConnectSessionManager.respondToRequest(
        pendingRequest.topic,
        pendingRequest.id,
        result
      )

      setPendingRequest(null)
      
      // Only show generic toast for signing operations (personalSign, typedData)
      // sendTransaction already shows detailed toast in executePersonalTransaction
      const method = pendingRequest.params.request.method
      if (method === 'personal_sign' || method === 'eth_signTypedData_v4') {
        toast.success(t('request_completed'))
      }
      return { success: true }
    } catch (error) {
      console.error('Failed to approve request:', error)
      
      // Reject the request on WalletConnect
      await walletConnectSessionManager.rejectRequest(
        pendingRequest.topic,
        pendingRequest.id,
        error instanceof Error ? error.message : 'Transaction failed'
      )
      
      setPendingRequest(null)
      toast.error(error instanceof Error ? error.message : 'Failed to approve request')
      throw error
    }
  }, [pendingRequest, userData, authMethod])

  // Reject request
  const rejectRequest = useCallback(async (reason = 'User rejected request') => {
    if (!pendingRequest) {
      throw new Error('No pending request available')
    }

    try {
      await walletConnectSessionManager.rejectRequest(
        pendingRequest.topic,
        pendingRequest.id,
        reason
      )
      setPendingRequest(null)
      toast.info('Request rejected')
    } catch (error) {
      console.error('Failed to reject request:', error)
      toast.error('Failed to reject request')
      throw error
    }
  }, [pendingRequest])

  // Disconnect session
  const disconnect = useCallback(async (topic: string) => {
    try {
      await walletConnectSessionManager.disconnectSession(topic, 'User disconnected')
      setActiveSessions(prev => prev.filter(session => session.topic !== topic))
      toast.success('Session disconnected')
    } catch (error) {
      console.error('Failed to disconnect session:', error)
      toast.error('Failed to disconnect session')
      throw error
    }
  }, [])

  // Clear session proposal
  const clearSessionProposal = useCallback(() => {
    setSessionProposal(null)
  }, [])

  // Clear pending request
  const clearPendingRequest = useCallback(() => {
    setPendingRequest(null)
  }, [])

  // Context value
  const contextValue: WalletConnectContextType = {
    // State
    isConnected,
    isInitialized,
    isInitializing,
    activeSessions,
    sessionProposal,
    pendingRequest,

    // Operations
    pair,
    approveSession,
    rejectSession,
    approveRequest,
    approveRequestWithSecurity,
    rejectRequest,
    disconnect,

    // Utilities
    clearSessionProposal,
    clearPendingRequest,
  }

  return (
    <WalletConnectContext.Provider value={contextValue}>
      {children}
      
      {/* Global WalletConnect Modals */}
      <SessionProposalModal />
      <TransactionRequestModal />
    </WalletConnectContext.Provider>
  )
}