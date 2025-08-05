import { LIT_CHAINS } from '@lit-protocol/constants'
import { SUPPORTED_TOKENS_INFO, TokenInfo } from '../web3/token'

// WalletConnect Project ID - needs to be obtained from WalletConnect Cloud
export const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'your-project-id-here'

// Generate supported chains dynamically from project's token configuration
export const getSupportedChains = () => {
  const chainMap: Record<string, string> = {}
  
  Object.values(SUPPORTED_TOKENS_INFO).forEach((tokenInfo: TokenInfo) => {
    if (tokenInfo.chainType === 'EVM') {
      const chainName = tokenInfo.chainName
      const chainConfig = LIT_CHAINS[chainName as keyof typeof LIT_CHAINS]
      
      if (chainConfig?.chainId) {
        const eipChainId = `eip155:${chainConfig.chainId}`
        chainMap[eipChainId] = chainConfig.name || tokenInfo.network
      }
    }
  })
  
  return chainMap
}

// Get array of supported chain IDs for WalletConnect initialization
export const getSupportedChainIds = (): string[] => {
  return Object.keys(getSupportedChains())
}

// Supported methods for WalletConnect
export const SUPPORTED_METHODS = [
  'eth_sendTransaction',
  'personal_sign',
  'eth_signTypedData_v4',
  'eth_accounts',
  'eth_chainId',
  'wallet_switchEthereumChain',
  'wallet_addEthereumChain',
] as string[]

// Supported events for WalletConnect
export const SUPPORTED_EVENTS = [
  'chainChanged',
  'accountsChanged',
] as string[]

// WalletConnect wallet metadata
export const WALLET_METADATA = {
  name: 'Vastbase Wallet',
  description: 'A next generation multisig wallet for teams powered by Lit Protocol',
  url: 'https://vastbase.vastlink.xyz/',
  icons: [`${process.env.NEXT_PUBLIC_APP_URL}/Vastbase_logo.png`],
}

// Web3Wallet initialization configuration
export const WEB3_WALLET_CONFIG = {
  core: undefined, // Will be set at runtime
  metadata: WALLET_METADATA,
} as const

// Helper function to get chain ID from chain name
export const getChainIdFromChainName = (chainName: string): number | undefined => {
  const chainConfig = LIT_CHAINS[chainName as keyof typeof LIT_CHAINS]
  return chainConfig?.chainId
}

// Helper function to convert chain ID to EIP-155 format
export const toEip155ChainId = (chainId: number): string => {
  return `eip155:${chainId}`
}

// Helper function to get chain name from EIP-155 chain ID
export const getChainNameFromEip155 = (eip155ChainId: string): string | undefined => {
  const chainId = parseInt(eip155ChainId.replace('eip155:', ''))
  
  for (const tokenInfo of Object.values(SUPPORTED_TOKENS_INFO) as TokenInfo[]) {
    if (tokenInfo.chainType === 'EVM') {
      const chainConfig = LIT_CHAINS[tokenInfo.chainName as keyof typeof LIT_CHAINS]
      if (chainConfig?.chainId === chainId) {
        return tokenInfo.chainName
      }
    }
  }
  
  return undefined
}