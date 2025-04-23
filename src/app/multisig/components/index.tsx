import { Button } from "@/components/ui/button"
import { AuthMethod, IRelayPKP } from "@lit-protocol/types"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import type { MultisigWallet, MessageProposal } from '@/app/api/multisig/storage'
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { executeSignLitAction, mintMultisigPKP } from "../helper"
import { log } from "@/lib/utils"
import { getSessionSigsByPkp, MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID, SIGN_PROPOSAL_LIT_ACTION_IPFS_ID } from "@/lib/lit"
import { litNodeClient } from "@/lib/lit"
import { AlertCircle } from "lucide-react"

export function Multisig({
  currentPkp,
  sessionPkp,
  authMethod,
  googleAuthMethodId,
}: {
  currentPkp: IRelayPKP,
  sessionPkp: IRelayPKP,
  authMethod: AuthMethod,
  googleAuthMethodId: string,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [wallets, setWallets] = useState<MultisigWallet[]>([])
  const [proposals, setProposals] = useState<MessageProposal[]>([])
  const [selectedWalletId, setSelectedWalletId] = useState<string>('')
  const [selectedWallet, setSelectedWallet] = useState<MultisigWallet | null>(null)
  const [selectedMultisigPkp, setSelectedMultisigPkp] = useState<IRelayPKP | null>(null)
  const [message, setMessage] = useState('')
  const [signer2Address, setSigner2Address] = useState('')
  const [signer2PublicKey, setSigner2PublicKey] = useState('')
  const [signer2GoogleAuthMethodId, setSigner2GoogleAuthMethodId] = useState('')
  const [executeResult, setExecuteResult] = useState<any>(null)
  const [fetchingUser2Info, setFetchingUser2Info] = useState(false)
  const [userLookupError, setUserLookupError] = useState('')

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

  // Auto-fetch user information when ETH address changes
  useEffect(() => {
    if (signer2Address && signer2Address.startsWith('0x') && signer2Address.length === 42) {
      fetchUserByAddress(signer2Address);
    } else {
      // Clear other fields if address is invalid
      if (signer2PublicKey || signer2GoogleAuthMethodId) {
        setSigner2PublicKey('');
        setSigner2GoogleAuthMethodId('');
        setUserLookupError('');
      }
    }
  }, [signer2Address]);

  const fetchUserByAddress = async (address: string) => {
    setFetchingUser2Info(true);
    setUserLookupError('');
    
    try {
      const response = await axios.get(`/api/user/address?address=${address}`);
      
      if (response.data.success) {
        const { authMethodId, pkp } = response.data.data;
        setSigner2PublicKey(pkp.publicKey);
        setSigner2GoogleAuthMethodId(authMethodId);
        log('Found user for address', address, pkp, authMethodId);
      } else {
        setUserLookupError('User not found with this address');
        setSigner2PublicKey('');
        setSigner2GoogleAuthMethodId('');
      }
    } catch (error) {
      console.error('Failed to fetch user by address:', error);
      setUserLookupError('Failed to find user with this address');
      setSigner2PublicKey('');
      setSigner2GoogleAuthMethodId('');
    } finally {
      setFetchingUser2Info(false);
    }
  };

  const handleCreateMultisigPKP = async () => {
    if (!currentPkp || !signer2Address || !signer2PublicKey) {
      console.error('Missing required information')
      return
    }
    
    try {
      setIsLoading(true)

      const signer2 = {
        ethAddress: signer2Address,
        publicKey: signer2PublicKey
      }

      const litActionIpfsId = MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID
      log('lit actions ipfs id', litActionIpfsId)

      const multisigPkp = await mintMultisigPKP({
        authMethod,
        litActionIpfsId,
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

  // Update selected wallet and PKP when wallet ID changes
  useEffect(() => {
    if (selectedWalletId) {
      fetchProposals()
      
      // Set the selected wallet and multisig PKP
      const wallet = wallets.find(w => w.id === selectedWalletId)
      if (wallet) {
        setSelectedWallet(wallet)
        setSelectedMultisigPkp(wallet.pkp)
      }
    } else {
      setSelectedWallet(null)
      setSelectedMultisigPkp(null)
    }
  }, [selectedWalletId, wallets])

  const fetchProposals = async () => {
    try {
      const { data } = await axios.get(`/api/multisig/messages?walletId=${selectedWalletId}`)
      if (data.success) {
        setProposals(data.data)
        return data.data
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
    if (!currentPkp || !authMethod) {
      console.error('Missing required information for signing')
      return
    }

    try {
      setIsLoading(true)

      const litActionIpfsId = SIGN_PROPOSAL_LIT_ACTION_IPFS_ID
      log('ipfsid', litActionIpfsId)

      log('current pkp', currentPkp)
      const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPkp)
      log('session sigs', sessionSigs)

      const signature = await executeSignLitAction({
        ipfsId: litActionIpfsId,
        sessionSigs,
        publicKey: currentPkp.publicKey,
        message: proposal.message,
      })
      log('signature', signature)

      // Submit signature to API
      const response = await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        signer: currentPkp.ethAddress,
        signature,
        publicKey: currentPkp.publicKey,
      })

      if (response.data.success) {
        const newProposals = await fetchProposals() // Refresh proposals list
        
        // Find the updated proposal
        const updatedProposal = newProposals.find((p: MessageProposal) => p.id === proposal.id)
        
        // Check if signatures have reached the threshold
        if (updatedProposal && selectedWallet && updatedProposal.signatures.length >= selectedWallet.threshold) {
          console.log('All required signatures collected for proposal:', proposal.id)
          log('Multisig proposal complete:', {
            proposalId: proposal.id,
            message: proposal.message,
            signatures: updatedProposal.signatures.length,
            requiredSignatures: selectedWallet.threshold,
            status: 'Complete'
          })
          
          // Automatically execute the multisig action once threshold is reached
          await executeMultisigLitAction(updatedProposal)
        }
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
  
  // Function to execute a Lit Action using the multisig PKP
  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    if (!selectedMultisigPkp || !selectedWallet || !authMethod) {
      console.error('Missing multisig wallet information or auth method')
      return
    }
    
    try {
      setIsLoading(true)
      setExecuteResult(null)
      
      // Connect to Lit Network
      await litNodeClient.connect()

      log('selected mulsig pkp', selectedMultisigPkp)
      
      // Get session signatures for the current user
      const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPkp)
      
      log('Executing Lit Action with multisig PKP', {
        proposalId: proposal.id,
        multisigPkpAddress: selectedMultisigPkp.ethAddress,
        signatures: proposal.signatures.length,
        message: proposal.message
      })

      log('multisig wallet', selectedWallet)

      const jsParams = {
        message: proposal.message,
        publicKeys: proposal.signatures.map(signer => signer.publicKey),
        // signatures: proposal.signatures.map(sig => sig.signature),
        proposalId: proposal.id,
        walletId: selectedWalletId,
        requiredSignatures: selectedWallet.threshold,
        messageToSign: `Execution approved by multisig`,
        publicKey: selectedMultisigPkp.publicKey
      }
      log('js params', jsParams)

      const litActionIpfsId = await MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID
      log('ipfsid', litActionIpfsId)

      // Execute the Lit Action using the multisig verification
      const response = await litNodeClient.executeJs({
        ipfsId: litActionIpfsId,
        sessionSigs,
        jsParams,
      })
      
      log('Multisig Lit Action execution result:', response)
      setExecuteResult(response)
      
      // Update the proposal status to completed if verification was successful
      const responseObj = typeof response.response === 'string' 
        ? JSON.parse(response.response) 
        : response.response;
        
      if (responseObj.isValid) {
        await axios.put(`/api/multisig/messages/status`, {
          proposalId: proposal.id,
          walletId: proposal.walletId,
          status: 'completed'
        })
        
        // Refresh proposals
        await fetchProposals()
      }
      
      return response
    } catch (error: any) {
      console.error('Failed to execute multisig Lit Action:', error)
      setExecuteResult({ error: error.message || 'Unknown error' })
    } finally {
      setIsLoading(false)
    }
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
            <div className="relative">
              <Input
                id="signer2Address"
                value={signer2Address}
                onChange={(e) => setSigner2Address(e.target.value)}
                placeholder="Enter signer 2 ETH address"
                className={userLookupError ? "border-red-300" : ""}
                disabled={fetchingUser2Info}
              />
              {fetchingUser2Info && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
            </div>
            {userLookupError && (
              <div className="text-sm text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {userLookupError}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signer2PublicKey">Signer 2 Public Key</Label>
            {signer2PublicKey ? (
              <div className="p-2 text-sm break-all bg-gray-50 border rounded-md">
                {signer2PublicKey}
              </div>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signer2GoogleAuthMethodId">Signer 2 Google Auth Method Id</Label>
            {signer2GoogleAuthMethodId ? (
              <div className="p-2 text-sm break-all bg-gray-50 border rounded-md">
                {signer2GoogleAuthMethodId}
              </div>
            ) : null}
          </div>
        </div>

        <Button 
          onClick={handleCreateMultisigPKP}
          disabled={isLoading || fetchingUser2Info || !signer2Address || !signer2PublicKey || !signer2GoogleAuthMethodId}
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
          
          {/* Display selected wallet's PKP info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Selected Multisig Wallet PKP Details</h3>
            {wallets.filter(w => w.id === selectedWalletId).map(wallet => (
              <div key={wallet.id} className="space-y-1">
                <div className="text-sm">
                  <span className="font-medium">PKP Address:</span> {wallet.pkp.ethAddress}
                </div>
                <div className="text-sm break-all">
                  <span className="font-medium">PKP Public Key:</span> {wallet.pkp.publicKey}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Threshold:</span> {wallet.threshold} of {wallet.totalSigners} signers
                </div>
                <div className="text-sm">
                  <span className="font-medium">Signers:</span>
                </div>
                {wallet.signers.map((signer, index) => (
                  <div key={index} className="text-sm ml-4">
                    <span className="font-medium">Signer {index + 1}:</span> {signer.ethAddress}
                  </div>
                ))}
              </div>
            ))}
          </div>

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
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {proposal.status === 'pending' && !hasUserSigned(proposal) && (
                    <Button
                      onClick={() => handleSignProposal(proposal)}
                      disabled={isLoading}
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Sign Proposal
                    </Button>
                  )}
                  
                  {hasUserSigned(proposal) && (
                    <div className="text-sm text-green-600 flex items-center">
                      You have signed this proposal
                    </div>
                  )}
                  
                  {proposal.status === 'pending' && selectedWallet &&
                   proposal.signatures.length >= selectedWallet.threshold && (
                    <Button
                      onClick={() => executeMultisigLitAction(proposal)}
                      disabled={isLoading}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Execute with Multisig PKP
                    </Button>
                  )}
                </div>
                
                {executeResult && proposal.id === executeResult.proposalId && (
                  <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
                    <div className="font-medium mb-1">Execution Result:</div>
                    <pre className="whitespace-pre-wrap break-all">
                      {JSON.stringify(executeResult, null, 2)}
                    </pre>
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
