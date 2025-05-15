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

interface SendEthProps {
  pkp: IRelayPKP;
  authMethod: AuthMethod;
}

export function SendEth({ pkp, authMethod }: SendEthProps) {
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const [isSending, setIsSending] = useState(false)
  const { handleExpiredAuth } = useAuthExpiration()

  // Validation
  const isValidAddress = to.startsWith('0x') && to.length === 42
  const isValidAmount = !isNaN(Number(amount)) && Number(amount) > 0
  const canSend = isValidAddress && isValidAmount && !isSending

  const handleSend = async () => {
    if (!canSend || !pkp) return

    try {
      setIsSending(true)

      // Create a provider for Sepolia
      const provider = new ethers.providers.JsonRpcProvider(
        LIT_CHAINS['sepolia'].rpcUrls[0]
      )

      // Get nonce
      const nonce = await provider.getTransactionCount(pkp.ethAddress)
      
      // Get gas price
      const gasPrice = await provider.getGasPrice()

      // Create the transaction object
      const txData = {
        to,
        value: ethers.utils.parseEther(amount).toHexString(),
        gasPrice: gasPrice.toHexString(),
        gasLimit: 21000, // Standard gas limit for ETH transfer
        nonce,
        chainId: LIT_CHAINS['sepolia'].chainId,
      }

      // Get the session signatures needed for PKP signing
      await litNodeClient.connect()
      const sessionSigs = await getSessionSigsByPkp({
        authMethod, 
        pkp
      })

      // Remove 0x prefix for litNodeClient
      const publicKeyForLit = pkp.publicKey.replace(/^0x/, '')

      // Execute transaction
      const response = await litNodeClient.executeJs({
        code: `
          (async () => {
            // Sign the transaction
            const toSign = ethers.utils.arrayify(
              ethers.utils.keccak256(ethers.utils.serializeTransaction(unsignedTransaction))
            )
            
            const sig = await Lit.Actions.signEcdsa({
              toSign,
              publicKey,
              sigName
            })
            
            // Combine the signature components
            const signature = ethers.utils.joinSignature({
              r: '0x' + sig.r,
              s: '0x' + sig.s,
              v: sig.recid + 27
            })
            
            // Serialize the transaction with the signature
            const signedTx = ethers.utils.serializeTransaction(
              unsignedTransaction,
              signature
            )
            
            // Send the transaction if requested
            if (sendTx) {
              try {
                const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
                const txResponse = await provider.sendTransaction(signedTx)
                Lit.Actions.setResponse({ response: { success: true, txHash: txResponse.hash, signedTx } })
              } catch (err) {
                Lit.Actions.setResponse({ response: { success: false, error: err.message, signedTx } })
              }
            } else {
              Lit.Actions.setResponse({ response: { success: true, signedTx } })
            }
          })()
        `,
        sessionSigs,
        jsParams: {
          unsignedTransaction: txData,
          publicKey: publicKeyForLit,
          sigName: 'sig1',
          sendTx: true,
          rpcUrl: LIT_CHAINS['sepolia'].rpcUrls[0]
        }
      })

      // Process the response
      const result = typeof response.response === 'string' 
        ? JSON.parse(response.response) 
        : response.response;
      
      if (result.success) {
        // Show success message with transaction hash
        toast.success(`Successfully sent ${amount} ETH to ${to}`)
        
        // Reset form
        setTo('')
        setAmount('')
      } else {
        throw new Error(result.error || 'Transaction failed')
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

  return (
    <div className="bg-card p-6 rounded-lg border mt-6">
      <h3 className="text-lg font-medium mb-4">Send ETH</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient Address</Label>
          <Input
            id="recipient"
            placeholder="0x..."
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className={to && !isValidAddress ? 'border-red-500' : ''}
          />
          {to && !isValidAddress && (
            <p className="text-red-500 text-xs">Please enter a valid Ethereum address</p>
          )}
        </div>

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
          onClick={handleSend} 
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