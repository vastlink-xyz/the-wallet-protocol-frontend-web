import { Core } from '@walletconnect/core'
import { Web3Wallet, type IWeb3Wallet, type Web3WalletTypes } from '@walletconnect/web3wallet'
import type { SessionTypes, ProposalTypes, ICore } from '@walletconnect/types'
import { 
  WALLETCONNECT_PROJECT_ID, 
  WALLET_METADATA, 
  getSupportedChainIds, 
  SUPPORTED_METHODS, 
  SUPPORTED_EVENTS 
} from './config'

export class WalletConnectSessionManager {
  private web3wallet: IWeb3Wallet | null = null
  private core: ICore | null = null
  private isInitialized = false

  // Event listeners
  private onSessionProposal: ((proposal: Web3WalletTypes.SessionProposal) => void) | null = null
  private onSessionRequest: ((request: Web3WalletTypes.SessionRequest) => void) | null = null
  private onSessionDelete: ((session: Web3WalletTypes.SessionDelete) => void) | null = null

  async initialize(): Promise<void> {
    if (this.isInitialized) {
      return
    }

    try {
      // Initialize WalletConnect Core
      this.core = new Core({
        projectId: WALLETCONNECT_PROJECT_ID,
      })

      // Initialize Web3Wallet
      this.web3wallet = await Web3Wallet.init({
        core: this.core,
        metadata: WALLET_METADATA,
      })

      this.setupEventListeners()
      this.isInitialized = true
    } catch (error) {
      console.error('Failed to initialize WalletConnect:', error)
      throw error
    }
  }

  private setupEventListeners(): void {
    if (!this.web3wallet) return

    // Session proposal event
    this.web3wallet.on('session_proposal', (event: Web3WalletTypes.SessionProposal) => {
      console.log('Received session proposal:', event)
      if (this.onSessionProposal) {
        this.onSessionProposal(event)
      }
    })

    // Session request event
    this.web3wallet.on('session_request', (request: Web3WalletTypes.SessionRequest) => {
      console.log('Received session request:', request)
      if (this.onSessionRequest) {
        this.onSessionRequest(request)
      }
    })

    // Session delete event
    this.web3wallet.on('session_delete', (event: Web3WalletTypes.SessionDelete) => {
      console.log('Session deleted:', event)
      if (this.onSessionDelete) {
        this.onSessionDelete(event)
      }
    })
  }

  // Pair with a DApp using URI
  async pair(uri: string): Promise<void> {
    if (!this.web3wallet) {
      throw new Error('WalletConnect not initialized')
    }

    try {
      await this.web3wallet.core.pairing.pair({ uri })
      console.log('Pairing initiated with URI:', uri)
    } catch (error) {
      console.error('Failed to pair:', error)
      throw error
    }
  }

  // Approve session proposal
  async approveSession(
    proposal: Web3WalletTypes.SessionProposal,
    accounts: string[]
  ): Promise<SessionTypes.Struct> {
    if (!this.web3wallet) {
      throw new Error('WalletConnect not initialized')
    }

    try {
      const supportedChains = getSupportedChainIds()
      
      const session = await this.web3wallet.approveSession({
        id: proposal.id,
        namespaces: {
          eip155: {
            accounts: supportedChains.flatMap(chain => 
              accounts.map(account => `${chain}:${account}`)
            ),
            methods: SUPPORTED_METHODS as string[],
            events: SUPPORTED_EVENTS as string[],
          },
        },
      })

      console.log('Session approved:', session)
      return session
    } catch (error) {
      console.error('Failed to approve session:', error)
      throw error
    }
  }

  // Reject session proposal
  async rejectSession(proposalId: number | string, reason?: string): Promise<void> {
    if (!this.web3wallet) {
      throw new Error('WalletConnect not initialized')
    }

    try {
      await this.web3wallet.rejectSession({
        id: typeof proposalId === 'string' ? parseInt(proposalId) : proposalId,
        reason: {
          code: 5000,
          message: reason || 'User rejected session',
        },
      })

      console.log('Session rejected:', proposalId)
    } catch (error) {
      console.error('Failed to reject session:', error)
      throw error
    }
  }

  // Respond to session request
  async respondToRequest(
    topic: string,
    requestId: number,
    result: any
  ): Promise<void> {
    if (!this.web3wallet) {
      throw new Error('WalletConnect not initialized')
    }

    try {
      await this.web3wallet.respondSessionRequest({
        topic,
        response: {
          id: requestId,
          result,
          jsonrpc: '2.0',
        },
      })

      console.log('Request responded successfully')
    } catch (error) {
      console.error('Failed to respond to request:', error)
      throw error
    }
  }

  // Reject session request
  async rejectRequest(
    topic: string,
    requestId: number,
    reason?: string
  ): Promise<void> {
    if (!this.web3wallet) {
      throw new Error('WalletConnect not initialized')
    }

    try {
      await this.web3wallet.respondSessionRequest({
        topic,
        response: {
          id: requestId,
          error: {
            code: 5000,
            message: reason || 'User rejected request',
          },
          jsonrpc: '2.0',
        },
      })

      console.log('Request rejected successfully')
    } catch (error) {
      console.error('Failed to reject request:', error)
      throw error
    }
  }

  // Disconnect session
  async disconnectSession(topic: string, reason?: string): Promise<void> {
    if (!this.web3wallet) {
      throw new Error('WalletConnect not initialized')
    }

    try {
      await this.web3wallet.disconnectSession({
        topic,
        reason: {
          code: 6000,
          message: reason || 'User disconnected session',
        },
      })

      console.log('Session disconnected:', topic)
    } catch (error) {
      console.error('Failed to disconnect session:', error)
      throw error
    }
  }

  // Get active sessions
  getActiveSessions(): SessionTypes.Struct[] {
    if (!this.web3wallet) {
      return []
    }

    return Object.values(this.web3wallet.getActiveSessions())
  }

  // Set event listeners
  setOnSessionProposal(callback: (proposal: Web3WalletTypes.SessionProposal) => void): void {
    this.onSessionProposal = callback
  }

  setOnSessionRequest(callback: (request: Web3WalletTypes.SessionRequest) => void): void {
    this.onSessionRequest = callback
  }

  setOnSessionDelete(callback: (session: Web3WalletTypes.SessionDelete) => void): void {
    this.onSessionDelete = callback
  }

  // Cleanup
  async destroy(): Promise<void> {
    if (this.web3wallet) {
      // Remove specific event listeners
      this.web3wallet.removeListener('session_proposal', () => {})
      this.web3wallet.removeListener('session_request', () => {})
      this.web3wallet.removeListener('session_delete', () => {})
      this.web3wallet = null
    }

    if (this.core) {
      this.core = null
    }

    this.isInitialized = false
    console.log('WalletConnect session manager destroyed')
  }
}

// Singleton instance
export const walletConnectSessionManager = new WalletConnectSessionManager()