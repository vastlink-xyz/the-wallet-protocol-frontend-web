import { useState, useEffect, useMemo } from 'react'
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
import { TransactionMFA } from './TransactionMFA'
import { personalTransactionLitActionCode } from '@/lib/lit-action-code/personal-transaction.lit'
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { TokenType, SUPPORTED_TOKENS_INFO } from '@/lib/web3/token'
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from '@/lib/web3/transaction'
import { SelectToken } from "@/components/SelectToken"

interface SendTokenProps {
  litActionPkp: IRelayPKP;
  sessionPkp: IRelayPKP;
  authMethod: AuthMethod;
  authMethodId: string;
  btcAddress: string;
  onClose: () => void;
}

export function SendToken({ 
  litActionPkp, 
  sessionPkp, 
  authMethod, 
  authMethodId,
  btcAddress,
  onClose,
}: SendTokenProps) {
  const [to, setTo] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [showMfa, setShowMfa] = useState(false)
  const { handleExpiredAuth } = useAuthExpiration()
  const [tokenType, setTokenType] = useState<TokenType>('ETH')
  const [tokenInfo, setTokenInfo] = useState(SUPPORTED_TOKENS_INFO[tokenType])

  // Update tokenInfo when tokenType changes
  useEffect(() => {
    setTokenInfo(SUPPORTED_TOKENS_INFO[tokenType])
  }, [tokenType])

  const isValidAmount = useMemo(() => {
    return !isNaN(Number(amount)) && Number(amount) > 0
  }, [amount])

  // Validation
  const canSend = useMemo(() => {
    const isValidEthAddress = recipientAddress && recipientAddress.startsWith('0x') && recipientAddress.length === 42
    const isValidBtcAddress = recipientAddress

    return (isValidEthAddress || isValidBtcAddress) && isValidAmount && !isSending && !showMfa
  }, [recipientAddress, isValidAmount, isSending, showMfa])

  const sendAddress = useMemo(() => {
    if (tokenType === 'ETH') {
      return litActionPkp.ethAddress
    } else if (tokenType === 'BTC') {
      return btcAddress
    }

    return ''
  }, [tokenType, litActionPkp.ethAddress, btcAddress])

  const handleExecuteTransaction = async (otpCode: string, mfaMethodId?: string) => {
    try {
      setIsSending(true)

      const txData = await getToSignTransactionByTokenType({
        tokenType,
        options: {
          sendAddress,
          recipientAddress,
          amount,
        },
      })

      if (!txData) {
        throw new Error('Failed to get transaction data')
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
        ipfsId,
        sessionSigs,
        jsParams: {
          toSignTransaction: txData.toSign,
          transactionAmount: amount,
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
          tokenType,
        }
      })

      log('response', response)

      // Process the response
      const result = typeof response.response === 'string' 
        ? JSON.parse(response.response) 
        : response.response;

      log('result parse', result)
      
      if (result.status === 'success') {
        let sig: any
        if (tokenType === 'ETH') {
          sig = JSON.parse(result.sig)
        } else {
          sig = response.signatures.btcSignatures
        }
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
        
        // Reset form
        setTo('')
        setAmount('')
        setRecipientAddress('')
        onClose()
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
      console.error(`Error sending ${tokenInfo.symbol}:`, error)
      
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
          amount: amount,
          tokenSymbol: tokenInfo.symbol
        }}
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="token-type">Select Token</Label>
        <SelectToken
          onSelect={(value) => setTokenType(value)}
          defaultValue={tokenType}
        />
      </div>

      <SignerEmailField
        label="Recipient"
        input={{
          value: to,
          onChange: (value) => setTo(value),
          placeholder: `Email address or ${tokenInfo.symbol} address`,
          id: "recipient"
        }}
        onAddressFound={(addressData) => {
          if (addressData) {
            const tokenKey = tokenType.toLowerCase();
            setRecipientAddress(addressData.addresses?.[tokenKey] || '');
          } else {
            setRecipientAddress('');
          }
        }}
        tokenType={tokenType}
      />

      <div className="space-y-2">
        <Label htmlFor="amount">Amount ({tokenInfo.symbol})</Label>
        <Input
          id="amount"
          type="number"
          placeholder="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          className={amount && !isValidAmount ? 'border-red-500' : ''}
        />
        {amount && !isValidAmount && (
          <p className="text-red-500 text-xs">Please enter a valid amount</p>
        )}
      </div>

      <Button 
        onClick={() => handleExecuteTransaction('')} 
        disabled={!canSend}
        className="w-full"
      >
        {isSending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          `Send ${tokenInfo.symbol}`
        )}
      </Button>
    </div>
  )
} 