import type { Web3WalletTypes } from '@walletconnect/web3wallet'
import { executePersonalTransaction } from '@/services/personalTransactionService'
import { createAndApproveTransactionProposal } from '@/services/teamTransactionService'
import { getChainNameFromEip155 } from './config'
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token'
import { parseEther } from 'ethers/lib/utils'
import { AuthProviderType } from '@/lib/lit/custom-auth'
import { IRelayPKP } from '@lit-protocol/types'
import { MultisigWallet } from '@/app/api/multisig/storage'
import { User } from '@/app/api/user/storage'
import { litActionContext, litNodeClient } from '@/lib/lit'
import { getMultiProviderSessionSigs } from '@/lib/lit/pkpManager'
import { getPersonalSignIpfsId, getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { getVastbaseAuthMethodType } from '@/lib/lit/custom-auth'
import { ethers } from 'ethers'

export interface TransactionHandlerParams {
  request: Web3WalletTypes.SessionRequest
  userPkp: IRelayPKP
  accessToken: string
  authMethodId: string
  providerType: AuthProviderType
  userEmail: string
  user: User
  btcAddress: string
  wallet?: MultisigWallet // For team transactions
  // Security verification parameters
  pinCode?: string
  mfaType?: string
  mfaCode?: string
  mfaMethodId?: string
}

// Handle WalletConnect requests using existing transaction services
export async function handleWalletConnectRequest(params: TransactionHandlerParams): Promise<any> {
  const { request } = params

  switch (request.params.request.method) {
    case 'eth_sendTransaction':
      return handleSendTransaction(params)
    case 'personal_sign':
      return handlePersonalSign(params)
    case 'eth_signTypedData_v4':
      return handleSignTypedData(params)
    case 'eth_accounts':
      return handleGetAccounts(params)
    case 'eth_chainId':
      return handleGetChainId(params)
    default:
      throw new Error(`Unsupported method: ${request.params.request.method}`)
  }
}

async function handleSendTransaction(params: TransactionHandlerParams): Promise<string> {
  const { request, userPkp, accessToken, authMethodId, providerType, userEmail, btcAddress, pinCode, mfaType, mfaCode, mfaMethodId } = params
  const txParams = request.params.request.params[0]


  // Parse transaction parameters
  const chainName = getChainNameFromEip155(request.params.chainId)
  
  if (!chainName) {
    throw new Error(`Unsupported chain: ${request.params.chainId}`)
  }

  // Determine token type and amount
  const tokenType = determineTokenType(txParams, chainName)
  
  const amount = ethers.utils.formatEther(txParams.value || '0')

  // Create transaction state compatible with existing services
  const transactionState = {
    tokenType,
    amount,
    recipientAddress: txParams.to,
    to: txParams.to, // For compatibility
    gasLimit: txParams.gas || txParams.gasLimit,
    gasPrice: txParams.gasPrice,
    maxFeePerGas: txParams.maxFeePerGas,
    maxPriorityFeePerGas: txParams.maxPriorityFeePerGas,
    data: txParams.data,
    // Required fields for SendTransactionDialogState
    mfaMethodId: mfaMethodId || null,
    mfaPhoneNumber: null, // Not applicable for WalletConnect
  }

  // Execute personal transaction
  return new Promise((resolve, reject) => {
    executePersonalTransaction({
      state: transactionState,
      accessToken,
      authMethodType: getVastbaseAuthMethodType(), // Use the same function as typedData and personalSign
      authMethodId,
      providerType,
      userEmail,
      litActionPkp: userPkp,
      btcAddress,
      // Security parameters
      pinCode: pinCode || '',
      mfaType: mfaType || '',
      mfaCode: mfaCode || '',
      mfaMethodId: mfaMethodId || '',
      handleExpiredAuth: () => {
        reject(new Error('Authentication expired'))
      },
      setIsSending: () => {}, // No-op for WalletConnect
      setResetAmount: () => {}, // No-op for WalletConnect
      onTransactionSuccess: () => {
        // Will be handled by promise resolution
      }
    }).then((result: any) => {
      if (result?.txReceipt?.hash) {
        resolve(result.txReceipt.hash)
      } else if (result?.success && result?.txReceipt) {
        resolve(result.txReceipt)
      } else if (result?.requiresMFA) {
        // Return MFA requirement for security verification flow
        resolve(result)
      } else {
        reject(new Error('Transaction failed'))
      }
    }).catch(reject)
  })
}


async function handlePersonalSign(params: TransactionHandlerParams): Promise<string> {
  const { request, userPkp, accessToken, authMethodId, providerType, userEmail, pinCode, mfaType, mfaCode, mfaMethodId } = params
  
  // Extract message from request params
  // personal_sign format: [message, address]
  const [messageHex, address] = request.params.request.params
  
  // Verify the address matches our PKP address
  if (address.toLowerCase() !== userPkp.ethAddress.toLowerCase()) {
    throw new Error('Address mismatch: signing address does not match PKP address')
  }
  
  // Convert hex message to string for signing
  const message = messageHex.startsWith('0x') ? messageHex.slice(2) : messageHex
  const messageString = Buffer.from(message, 'hex').toString()
  
  try {
    // Get session signatures for authentication
    const sessionSigs = await getMultiProviderSessionSigs({
      pkpPublicKey: userPkp.publicKey,
      pkpTokenId: userPkp.tokenId,
      accessToken,
      providerType,
      userEmail,
    })
    
    // Connect to Lit network if not connected
    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }
    
    // Get the correct IPFS ID for personal signing
    const litActionIpfsId = await getPersonalSignIpfsId('base58')
    
    // Execute the signing Lit Action using IPFS ID (same as proposal signing)
    const result = await litNodeClient.executeJs({
      ipfsId: litActionIpfsId,
      sessionSigs,
      jsParams: {
        message: messageString,
        publicKey: userPkp.publicKey,
        litActionContext,
        authParams: {
          accessToken,
          authMethodId,
          authMethodType: getVastbaseAuthMethodType(), // Use the same function as proposal signing
          providerType,
          pkpTokenId: userPkp.tokenId,
        },
      },
    })
    
    // Extract signature from result (same format as proposal signing)
    if (result.signatures && result.signatures.sig) {
      const signature = result.signatures.sig.signature
      return signature
    } else {
      throw new Error('Failed to generate signature')
    }
  } catch (error) {
    console.error('Personal sign error:', error)
    throw new Error(`Failed to sign message: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

async function handleSignTypedData(params: TransactionHandlerParams): Promise<string> {
  const { request, userPkp, accessToken, authMethodId, providerType, userEmail, pinCode, mfaType, mfaCode, mfaMethodId } = params
  
  // Extract typed data from request params
  // eth_signTypedData_v4 format: [address, typedData]
  const [address, typedDataRaw] = request.params.request.params
  
  // Verify the address matches our PKP address
  if (address.toLowerCase() !== userPkp.ethAddress.toLowerCase()) {
    throw new Error('Address mismatch: signing address does not match PKP address')
  }
  
  try {
    // Parse typedData if it's a string
    let typedData
    if (typeof typedDataRaw === 'string') {
      try {
        typedData = JSON.parse(typedDataRaw)
      } catch (parseError) {
        throw new Error(`Failed to parse typed data JSON: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`)
      }
    } else {
      typedData = typedDataRaw
    }
    
    // Validate typedData structure
    if (!typedData || typeof typedData !== 'object') {
      throw new Error('Invalid typed data: must be an object')
    }
    
    if (!typedData.domain) {
      throw new Error('Invalid typed data: missing domain')
    }
    
    if (!typedData.types) {
      throw new Error('Invalid typed data: missing types')
    }
    
    // Calculate EIP-712 hash
    const domain = typedData.domain
    const rawTypes = typedData.types
    const message = typedData.message || typedData.value
    
    if (!message) {
      throw new Error('Invalid typed data: missing message/value')
    }
    
    // Remove EIP712Domain from types as ethers.js handles it automatically
    const types = { ...rawTypes }
    delete types.EIP712Domain
    
    // Use ethers to calculate the typed data hash
    const hash = ethers.utils._TypedDataEncoder.hash(domain, types, message)
    const hashBytes = ethers.utils.arrayify(hash)
    
    // Get session signatures for authentication
    const sessionSigs = await getMultiProviderSessionSigs({
      pkpPublicKey: userPkp.publicKey,
      pkpTokenId: userPkp.tokenId,
      accessToken,
      providerType,
      userEmail,
    })
    
    // Connect to Lit network if not connected
    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }
    
    // Get the personal transaction IPFS ID (reuse existing Lit Action)
    const litActionIpfsId = await getPersonalTransactionIpfsId('base58')
    
    // Execute the Lit Action, passing the hash as "transaction data"
    const result = await litNodeClient.executeJs({
      ipfsId: litActionIpfsId,
      sessionSigs,
      jsParams: {
        publicKey: userPkp.publicKey,
        toSignTransaction: hashBytes, // Pass hash as "transaction"
        chainType: 'EVM', // Use EVM path for signAndCombineEcdsa
        tokenType: 'ETH', // Dummy value, not used for signing
        transactionAmount: '0', // Dummy value, not used for signing
        litActionContext,
        authParams: {
          accessToken,
          authMethodId,
          authMethodType: getVastbaseAuthMethodType(),
          providerType,
          pkpTokenId: userPkp.tokenId,
        },
        // Security params for typed data signing
        pinCode: pinCode || '',
        mfaType: mfaType || '',
        mfaCode: mfaCode || '',
        mfaMethodId: mfaMethodId || '',
      },
    })
    
    // Parse result and extract signature
    const responseData = JSON.parse(typeof result.response === 'string' ? result.response : JSON.stringify(result.response))
    
    if (responseData.status === 'success' && responseData.sig) {
      let signature = responseData.sig
      
      // If signature is a string, try to parse it as JSON first
      if (typeof signature === 'string') {
        try {
          const parsedSig = JSON.parse(signature)
          if (parsedSig && typeof parsedSig === 'object' && parsedSig.r && parsedSig.s && typeof parsedSig.v !== 'undefined') {
            signature = parsedSig
          }
        } catch (e) {
          // If parsing fails, treat as hex string
        }
      }
      
      // Convert Lit Protocol signature format to standard hex format
      if (typeof signature === 'object' && signature.r && signature.s && typeof signature.v !== 'undefined') {
        // Lit Protocol returns {r, s, v} format, convert to hex string
        let r = signature.r.startsWith('0x') ? signature.r.slice(2) : signature.r
        let s = signature.s.startsWith('0x') ? signature.s.slice(2) : signature.s
        
        // Ensure r and s are exactly 32 bytes (64 hex characters)
        // If r or s is longer than 64 chars, take the last 64 characters
        if (r.length > 64) {
          r = r.slice(-64)
        } else {
          r = r.padStart(64, '0')
        }
        
        if (s.length > 64) {
          s = s.slice(-64)
        } else {
          s = s.padStart(64, '0')
        }
        
        let v = signature.v
        
        // Convert v to standard Ethereum format (27 or 28)
        if (v === 0 || v === 1) {
          v = v + 27 // Convert 0/1 to 27/28
        } else if (v !== 27 && v !== 28) {
          // If v is not in expected range, normalize it
          v = (v % 2) + 27
        }
        
        // Convert v to hex and ensure it's 2 characters
        const vHex = v.toString(16).padStart(2, '0')
        
        // Combine r + s + v into standard signature format
        const standardSignature = '0x' + r + s + vHex
        return standardSignature
      } else if (typeof signature === 'string') {
        // Already in hex format
        return signature
      } else if (signature instanceof Uint8Array) {
        // Convert Uint8Array to hex string
        const hexSignature = '0x' + Array.from(signature).map(b => b.toString(16).padStart(2, '0')).join('')
        return hexSignature
      } else {
        throw new Error(`Unknown signature format from Lit Protocol: ${typeof signature}`)
      }
    } else {
      throw new Error('Failed to generate typed data signature')
    }
  } catch (error) {
    console.error('Typed data sign error:', error)
    throw new Error(`Failed to sign typed data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

async function handleGetAccounts(params: TransactionHandlerParams): Promise<string[]> {
  return [params.userPkp.ethAddress]
}

async function handleGetChainId(params: TransactionHandlerParams): Promise<string> {
  const chainId = params.request.params.chainId.replace('eip155:', '')
  return `0x${parseInt(chainId).toString(16)}`
}

function determineTokenType(txParams: any, chainName: string): TokenType {
  // If there's no value and no data, it's probably a contract interaction
  if (!txParams.value || txParams.value === '0x0') {
    // Check if it's an ERC-20 transfer by looking at supported tokens
    for (const [symbol, tokenInfo] of Object.entries(SUPPORTED_TOKENS_INFO)) {
      if (tokenInfo.chainName === chainName && 
          tokenInfo.contractAddress && 
          txParams.to?.toLowerCase() === tokenInfo.contractAddress.toLowerCase()) {
        return symbol as TokenType
      }
    }
  }

  // Default to native token for the chain
  for (const [symbol, tokenInfo] of Object.entries(SUPPORTED_TOKENS_INFO)) {
    if (tokenInfo.chainName === chainName && !tokenInfo.contractAddress) {
      return symbol as TokenType
    }
  }

  // Fallback to ETH if no match found
  return 'ETH'
}