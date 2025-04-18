import { Button } from "@/components/ui/button"
import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import type { MultisigWallet, MessageProposal } from '@/app/api/multisig/storage'
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { mintMultisigPKP } from "./helper"
import { log } from "@/lib/utils"
import { SIGN_EIP_191_LIT_ACTION_IPFS_ID_3 } from "@/lib/lit"
import { executeSecuredLitAction } from "@/lib/lit/executeLitAction"

export function Multisig({
  currentPkp,
  sessionSigs,
  authMethod,
  googleAuthMethodId,
}: {
  currentPkp: IRelayPKP,
  sessionSigs: SessionSigs,
  authMethod: AuthMethod,
  googleAuthMethodId: string,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [wallets, setWallets] = useState<MultisigWallet[]>([])
  const [proposals, setProposals] = useState<MessageProposal[]>([])
  const [selectedWalletId, setSelectedWalletId] = useState<string>('')
  const [message, setMessage] = useState('')
  const [signer2Address, setSigner2Address] = useState('0x2995f3514c3f4Ebe32FbC484A107033b98f20390')
  const [signer2PublicKey, setSigner2PublicKey] = useState('0x04314fc6aac36c845b42d6cd972a52cbcb22d1eef28503165b4ed96676f3bdcff93eddddee8b074cf0a52c2a20952d8b7156b8d082e9931a302b7b2d607211c3f2')
  const [signer2GoogleAuthMethodId, setSigner2GoogleAuthMethodId] = useState('0x92ae1dbc4ec9fe1eb01549bbaa858e58b8e6ccb69a59ceeca67971ddacaec925')

  useEffect(() => {
    fetchWallets()
  }, [currentPkp])

  const fetchWallets = async () => {
    try {
      const { data } = await axios.get(`/api/multisig?address=${currentPkp.ethAddress}`)
      if (data.success) {
        setWallets(data.data)
      }
      log('data', data)
    } catch (error) {
      console.error('Failed to fetch wallets:', error)
    }
  }

  const handleCreateMultisigPKP = async () => {
    if (!currentPkp || !sessionSigs || !signer2Address || !signer2PublicKey) {
      console.error('Missing required information')
      return
    }
    
    try {
      setIsLoading(true)

      const signer2 = {
        ethAddress: signer2Address,
        publicKey: signer2PublicKey
      }

      const multisigPkp = await mintMultisigPKP({
        authMethod,
        litActionIpfsId: SIGN_EIP_191_LIT_ACTION_IPFS_ID_3,
        googleAuthMethodIds: [googleAuthMethodId, signer2GoogleAuthMethodId]
      })
      log('multisig pkp', multisigPkp)

      const response = await axios.post('/api/multisig', {
        multisigPkp: multisigPkp,
        currentPkp,
        signer2
      })

      if (response.data.success) {
        await fetchWallets()
        // Clear form
        setSigner2Address('')
        setSigner2PublicKey('')
        setSigner2GoogleAuthMethodId('')
      }
    } catch (error) {
      console.error('Failed to create multisig PKP:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch proposals when wallet is selected
  useEffect(() => {
    if (selectedWalletId) {
      fetchProposals()
    }
  }, [selectedWalletId])

  const fetchProposals = async () => {
    try {
      const { data } = await axios.get(`/api/multisig/messages?walletId=${selectedWalletId}`)
      if (data.success) {
        setProposals(data.data)
      }
    } catch (error) {
      console.error('Failed to fetch proposals:', error)
    }
  }

  const handleCreateProposal = async () => {
    if (!selectedWalletId || !message) return

    try {
      setIsLoading(true)
      const response = await axios.post('/api/multisig/messages', {
        walletId: selectedWalletId,
        createdBy: currentPkp.ethAddress,
        message
      })

      if (response.data.success) {
        setMessage('')
        await fetchProposals()
      }
    } catch (error) {
      console.error('Failed to create proposal:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignProposal = async (proposal: MessageProposal) => {
    if (!currentPkp || !sessionSigs || !authMethod) {
      console.error('Missing required information for signing')
      return
    }

    try {
      setIsLoading(true)

      // TODO: Replace this with actual Lit Action signature
      // This is a mock implementation
      const mockSignature = {
        signer: currentPkp.ethAddress,
        signature: "0x" + "0".repeat(130), // Mock signature
        signedAt: new Date().toISOString()
      }

      // Submit signature to API
      const response = await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        signer: currentPkp.ethAddress,
        signature: mockSignature.signature
      })

      if (response.data.success) {
        await fetchProposals() // Refresh proposals list
      }
    } catch (error) {
      console.error('Failed to sign proposal:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const hasUserSigned = (proposal: MessageProposal) => {
    return proposal.signatures.some(sig => sig.signer === currentPkp.ethAddress)
  }

  return (
    <div className="space-y-6">
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-lg font-semibold mb-4">Create 2-of-2 Multisig PKP</h2>
        
        <div className="space-y-4 mb-4">
          <div>
            <Label>Signer 1 (You)</Label>
            <div className="text-sm text-gray-500">
              Address: {currentPkp.ethAddress}
            </div>
            <div className="text-sm text-gray-500">
              Public Key: {currentPkp.publicKey}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="signer2Address">Signer 2 Address</Label>
            <Input
              id="signer2Address"
              value={signer2Address}
              onChange={(e) => setSigner2Address(e.target.value)}
              placeholder="Enter signer 2 ETH address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signer2PublicKey">Signer 2 Public Key</Label>
            <Input
              id="signer2PublicKey"
              value={signer2PublicKey}
              onChange={(e) => setSigner2PublicKey(e.target.value)}
              placeholder="Enter signer 2 public key"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signer2GoogleAuthMethodId">Signer 2 Google Auth Method Id</Label>
            <Input
              id="signer2GoogleAuthMethodId"
              value={signer2GoogleAuthMethodId}
              onChange={(e) => setSigner2GoogleAuthMethodId(e.target.value)}
              placeholder="Enter signer 2 google auth method id"
            />
          </div>
        </div>

        <Button 
          onClick={handleCreateMultisigPKP}
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Multisig Wallet
        </Button>
      </div>

      {wallets.length > 0 && (
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">Your Multisig Wallets</h2>
          <div className="space-y-4">
            {wallets.map(wallet => (
              <div key={wallet.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium">Wallet ID: {wallet.id}</div>
                <div className="text-sm text-gray-500">
                  PKP Address: {wallet.pkp.ethAddress}
                </div>
                <Button
                  onClick={() => setSelectedWalletId(wallet.id)}
                  className="mt-2"
                  variant={selectedWalletId === wallet.id ? "default" : "outline"}
                >
                  {selectedWalletId === wallet.id ? "Selected" : "Select"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedWalletId && (
        <div className="bg-card p-4 rounded-lg border">
          <h2 className="text-lg font-semibold mb-4">Message Proposals</h2>
          
          {/* Create new proposal */}
          <div className="mb-6 space-y-4">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter message to sign"
            />
            <Button
              onClick={handleCreateProposal}
              disabled={isLoading || !message}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Proposal
            </Button>
          </div>

          {/* Proposal list */}
          <div className="space-y-4">
            {proposals.map(proposal => (
              <div key={proposal.id} className="p-4 bg-gray-50 rounded-lg">
                <div>Message: {proposal.message}</div>
                <div className="text-sm text-gray-500">
                  Status: {proposal.status}
                </div>
                <div className="text-sm text-gray-500">
                  Signatures: {proposal.signatures.length}
                </div>
                {proposal.status === 'pending' && !hasUserSigned(proposal) && (
                  <Button
                    onClick={() => handleSignProposal(proposal)}
                    disabled={isLoading}
                    className="mt-2"
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign Proposal
                  </Button>
                )}
                {hasUserSigned(proposal) && (
                  <div className="text-sm text-green-600 mt-2">
                    You have signed this proposal
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
