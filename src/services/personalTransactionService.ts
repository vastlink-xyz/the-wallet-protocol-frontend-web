import { IRelayPKP } from '@lit-protocol/types'
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from '@/lib/web3/transaction'
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token'
import { getMultiProviderSessionSigs } from '@/lib/lit/pkpManager'
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { toast } from 'react-toastify'
import { litNodeClient } from '@/lib/lit/providers'
import { log } from '@/lib/utils'
import { SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import { AuthProviderType } from '@/lib/lit/custom-auth'
import { litActionContext } from '@/lib/lit'

export const sendAddressByTokenType = (tokenType: TokenType, litActionPkp: IRelayPKP | null, btcAddress: string) => {
  if (tokenType === 'ETH') {
    return litActionPkp?.ethAddress
  } else if (tokenType === 'BTC') {
    return btcAddress || ''
  } else if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
    return litActionPkp?.ethAddress
  }
  
  throw new Error(`Unsupported token type: ${tokenType}`)
}

export interface ExecuteTransactionParams {
  state: SendTransactionDialogState
  accessToken: string
  authMethodType: number
  authMethodId: string
  providerType: AuthProviderType
  userEmail: string
  litActionPkp: IRelayPKP
  btcAddress: string
  handleExpiredAuth: () => void
  setIsSending: (sending: boolean) => void
  setResetAmount: (reset: boolean) => void
  onTransactionSuccess?: () => void
  // New security verification parameters
  pinCode?: string
  mfaType?: string
  mfaCode?: string
  mfaMethodId?: string
}

export const executePersonalTransaction = async ({
  state,
  accessToken,
  authMethodType,
  authMethodId,
  providerType,
  userEmail,
  litActionPkp,
  btcAddress,
  handleExpiredAuth,
  setIsSending,
  setResetAmount,
  onTransactionSuccess,
  pinCode,
  mfaType,
  mfaCode,
  mfaMethodId: newMfaMethodId,
}: ExecuteTransactionParams) => {
  const { to, recipientAddress, amount, tokenType, mfaMethodId: stateMfaMethodId, otpCode } = state

  if (!litActionPkp) {
    throw new Error('No PKP exists')
  }

  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]

  try {
    setIsSending(true)

    const txData = await getToSignTransactionByTokenType({
      tokenType,
      options: {
        sendAddress: sendAddressByTokenType(tokenType, litActionPkp, btcAddress),
        recipientAddress,
        amount,
        publicKey: litActionPkp.publicKey, // Add publicKey for BTC SegWit transactions
      },
    })
    log('txData', txData)

    if (!txData) {
      throw new Error('Failed to get transaction data')
    }

    if (!litNodeClient.ready) {
      await litNodeClient.connect()
    }

    const sessionSigs = await getMultiProviderSessionSigs({
      pkpPublicKey: litActionPkp.publicKey,
      pkpTokenId: litActionPkp.tokenId,
      accessToken,
      providerType,
      userEmail,
    })

    const ipfsId = await getPersonalTransactionIpfsId('base58')

    // Execute transaction
    const response = await litNodeClient.executeJs({
      ipfsId,
      sessionSigs,
      jsParams: {
        toSignTransaction: txData.toSign,
        transactionAmount: amount,
        publicKey: litActionPkp.publicKey,
        litActionContext,
        chainType: SUPPORTED_TOKENS_INFO[tokenType].chainType,
        authParams: {
          accessToken: accessToken,
          authMethodType: authMethodType,
          pkpTokenId: litActionPkp.tokenId,
          providerType: providerType,
        },
        otp: otpCode || '',
        mfaMethodId: newMfaMethodId || stateMfaMethodId,
        tokenType,
        // New security verification parameters
        pinCode: pinCode || '',
        mfaType: mfaType || '',
        mfaCode: mfaCode || '',
      }
    })

    log('response', response)

    // Process the response
    const result = typeof response.response === 'string' 
      ? JSON.parse(response.response) 
      : response.response;

    log('result parse', result)
    
    if (result.status === 'success') {
      const sig: any = typeof result.sig === 'string' ? JSON.parse(result.sig) : result.sig
      const txReceipt = await broadcastTransactionByTokenType({
        tokenType,
        options: {
          ...txData,
          sig,
          publicKey: litActionPkp.publicKey,
        },
      })

      log('txReceipt', txReceipt)
      // Show success message with transaction hash
      toast.success(`Successfully sent ${amount} ${tokenInfo.symbol} to ${to}`)
      
      // Reset amount in SendTransactionDialog
      setResetAmount(true)
      // Reset the trigger immediately to allow future resets
      setTimeout(() => setResetAmount(false), 100)
      
      // Call success callback
      onTransactionSuccess?.()
      
      return { success: true, txReceipt }
    } else {
      // Handle new response format from lit action
      console.log('Checking MFA requirements:', { 
        requiresMFA: result.requiresMFA, 
        hasOptions: !!result.availableMFAOptions,
        optionsLength: result.availableMFAOptions?.length 
      });
      
      if (result.requiresMFA && result.availableMFAOptions) {
        const mfaResponse = {
          requiresMFA: true,
          availableMFAOptions: result.availableMFAOptions,
        };
        console.log('Returning MFA response:', mfaResponse);
        return mfaResponse;
      } else {
        throw new Error(result.error || 'Transaction failed')
      }
    }
  } catch (error) {
    console.log(`Error sending ${tokenInfo.symbol}:`, typeof error, error)
    
    // Check if token expired error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    if (errorMessage.includes('token expired') || errorMessage.includes('JWT expired') || errorMessage.includes('Failed to verify token')) {
      handleExpiredAuth()
    } else {
      toast.error(`Failed to send ${tokenInfo.symbol}: ${errorMessage}`)
    }
  } finally {
    setIsSending(false)
  }
}

interface InviteUserParams {
  state: SendTransactionDialogState
  accessToken: string
  authMethodId: string
  setIsSending: (sending: boolean) => void
  setResetAmount: (reset: boolean) => void
  setShowSendDialog: (show: boolean) => void
}

export const inviteUser = async ({
  state,
  accessToken,
  authMethodId,
  setIsSending,
  setResetAmount,
  setShowSendDialog,
}: InviteUserParams) => {
  const { to, amount, tokenType } = state

  try {
    setIsSending(true)
    // Create pending invitation
    const response = await fetch('/api/invitation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        recipientEmail: to,
        tokenType,
        amount,
        authMethodId,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Failed to create invitation: ${response.status}`);
    }
    const data = await response.json();
    
    if (data.success) {
      toast.success(`Invitation sent to ${to}`);
      
      // Reset amount in SendTransactionDialog
      setResetAmount(true)
      // Reset the trigger immediately to allow future resets
      setTimeout(() => setResetAmount(false), 100)
      
      // Close the dialog
      setShowSendDialog(false);
    }
  } catch (error) {
    console.error('Error inviting user:', error);
    alert(`Failed to send invitation: ${error instanceof Error ? error.message : 'Unknown error'}`);
  } finally {
    setIsSending(false)
  }
}
