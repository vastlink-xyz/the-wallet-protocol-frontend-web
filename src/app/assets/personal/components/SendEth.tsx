import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { IRelayPKP } from '@lit-protocol/types'
import { toast } from 'react-toastify'
import { ethers } from 'ethers'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { LIT_CHAINS } from '@lit-protocol/constants'
import { litNodeClient } from '@/lib/lit'
import { getSessionSigsByPkp } from '@/lib/lit'
import { AuthMethod } from '@lit-protocol/types'
import { SignerEmailField } from '@/components/SignerEmailField'
import { log } from '@/lib/utils'
import { getAuthMethodFromStorage } from '@/lib/storage'
import { TransactionMFA } from './TransactionMFA'
import { personalTransactionLitActionCode } from '@/lib/lit-action-code/personal-transaction.lit'
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'

// Create a provider for Sepolia
const provider = new ethers.providers.JsonRpcProvider(
  LIT_CHAINS['sepolia'].rpcUrls[0]
)

interface SendEthProps {
  litActionPkp: IRelayPKP;
  sessionPkp: IRelayPKP;
  authMethod: AuthMethod;
  authMethodId: string;
}

export function SendEth({ litActionPkp, sessionPkp, authMethod, authMethodId }: SendEthProps) {
  const [to, setTo] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [showMfa, setShowMfa] = useState(false)
  const { handleExpiredAuth } = useAuthExpiration()

  // Validation
  const isValidAddress = recipientAddress && recipientAddress.startsWith('0x') && recipientAddress.length === 42
  const isValidAmount = !isNaN(Number(amount)) && Number(amount) > 0
  const canSend = isValidAddress && isValidAmount && !isSending && !showMfa

  const handleCheckPolicy = async () => {
    if (!canSend || !litActionPkp) return
    
    try {
      setIsSending(true)
      log('Checking policy for transaction:', { to: recipientAddress, amount })

      const authMethodObj = getAuthMethodFromStorage()
      const sessionJwt = authMethodObj?.accessToken

      const response = await fetch(`/api/mfa/check-policy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({
          authMethodId,
          amount: Number(amount),
        })
      })
      
      const data = await response.json()
      log('Policy check result:', data)
      return
      
      if (data.requiresMfa) {
        // Show MFA flow
        setShowMfa(true)
        setIsSending(false)
      } else {
        // Execute transaction directly
        handleExecuteTransaction('')
      }
    } catch (error) {
      console.error('Error checking policy:', error)
      toast.error('Failed to check transaction policy')
      setIsSending(false)
    }
  }

  const handleExecuteTransaction = async (otpCode: string, mfaMethodId?: string) => {
    try {
      setIsSending(true)

      // Get nonce
      const nonce = await provider.getTransactionCount(litActionPkp.ethAddress)
      
      // Get gas price
      const gasPrice = await provider.getGasPrice()

      // Create the transaction object
      const txData = {
        to: recipientAddress,
        value: ethers.utils.parseEther(amount).toHexString(),
        gasPrice: gasPrice.toHexString(),
        gasLimit: 21000, // Standard gas limit for ETH transfer
        nonce,
        chainId: LIT_CHAINS['sepolia'].chainId,
      }

      if (!litNodeClient.ready) {
        await litNodeClient.connect()
      }

      const sessionSigs = await getSessionSigsByPkp({
        authMethod, 
        pkp: sessionPkp,
        refreshStytchAccessToken: true,
      })

      const ipfsId = await getPersonalTransactionIpfsId('base58')

      // Execute transaction
      const response = await litNodeClient.executeJs({
        // code: personalTransactionLitActionCode,
        ipfsId,
        sessionSigs,
        jsParams: {
          unsignedTransaction: txData,
          publicKey: litActionPkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
          chain: 'sepolia',
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
          },
          otp: otpCode,
          mfaMethodId,
        }
      })

      log('response', response)

      // Process the response
      const result = typeof response.response === 'string' 
        ? JSON.parse(response.response) 
        : response.response;

      log('result parse', result)
      
      if (result.status === 'success') {
        // Show success message with transaction hash
        toast.success(`Successfully sent ${amount} ETH to ${to}`)
        
        // Reset form
        setTo('')
        setAmount('')
        setRecipientAddress('')
      } else {
        if (result.requireMFA) {
          // Show MFA flow
          setShowMfa(true)
          setIsSending(false)
          toast.warning('Daily limit exceeded')
        } else {
          throw new Error(result.error || 'Transaction failed')
        }
      }
    } catch (error) {
      console.error('Error sending ETH:', error)
      
      // Check if token expired error
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      if (errorMessage.includes('token expired') || errorMessage.includes('JWT expired')) {
        handleExpiredAuth()
      } else {
        toast.error(`Failed to send ETH: ${errorMessage}`)
      }
    } finally {
      setIsSending(false)
    }
  }

  // MFA verification successful callback
  const handleMfaVerified = (otpCode: string, mfaMethodId?: string) => {
    setShowMfa(false)
    handleExecuteTransaction(otpCode, mfaMethodId)
  }

  // MFA cancellation callback
  const handleMfaCancel = () => {
    setShowMfa(false)
    setIsSending(false)
  }

  // Display MFA component
  if (showMfa) {
    return (
      <TransactionMFA 
        onVerified={handleMfaVerified}
        onCancel={handleMfaCancel}
        transactionData={{
          to: to,
          amount: amount
        }}
      />
    )
  }

  return (
    <div className="bg-card p-6 rounded-lg border mt-6">
      <h3 className="text-lg font-medium mb-4">Send ETH</h3>
      
      <div className="space-y-4">
        <SignerEmailField
          label="Recipient"
          input={{
            value: to,
            onChange: (value) => setTo(value),
            placeholder: "Email address or 0x...",
            id: "recipient"
          }}
          onAddressFound={(addressData) => {
            if (addressData) {
              setRecipientAddress(addressData.ethAddress);
            } else {
              setRecipientAddress('');
            }
          }}
        />

        <div className="space-y-2">
          <Label htmlFor="amount">Amount (ETH)</Label>
          <Input
            id="amount"
            type="number"
            placeholder="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.000001"
            className={amount && !isValidAmount ? 'border-red-500' : ''}
          />
          {amount && !isValidAmount && (
            <p className="text-red-500 text-xs">Please enter a valid amount</p>
          )}
        </div>

        <Button 
          onClick={() => handleExecuteTransaction('')} 
          // onClick={handleCheckPolicy} 
          disabled={!canSend}
          className="w-full"
        >
          {isSending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send ETH'
          )}
        </Button>
      </div>
    </div>
  )
} 