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
import { LIT_CHAINS } from "@lit-protocol/constants"
import { ethers } from "ethers"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// eth sepolia
const chainInfo = {
  rpcUrl: LIT_CHAINS['sepolia'].rpcUrls[0],
  chainId: LIT_CHAINS['sepolia'].chainId,
}

const ethersProvider = new ethers.providers.JsonRpcProvider(
  chainInfo.rpcUrl
);

export function Multisig({
  currentPkp,
  sessionPkp,
  authMethod,
  googleAuthMethodId,
  initialWalletId = '',
}: {
  currentPkp: IRelayPKP,
  sessionPkp: IRelayPKP,
  authMethod: AuthMethod,
  googleAuthMethodId: string,
  initialWalletId?: string,
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [wallets, setWallets] = useState<MultisigWallet[]>([])
  const [proposals, setProposals] = useState<MessageProposal[]>([])
  const [selectedWalletId, setSelectedWalletId] = useState<string>(initialWalletId)
  const [selectedWallet, setSelectedWallet] = useState<MultisigWallet | null>(null)
  const [selectedMultisigPkp, setSelectedMultisigPkp] = useState<IRelayPKP | null>(null)
  const [toAddress, setToAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [data, setData] = useState('')
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
    if (!selectedWalletId || !toAddress || !amount) return

    try {
      setIsLoading(true)
      const txData = {
        to: toAddress,
        value: amount,
        data: data || '0x'
      }
      
      const response = await axios.post('/api/multisig/messages', {
        walletId: selectedWalletId,
        createdBy: currentPkp.ethAddress,
        message: JSON.stringify(txData),
        transactionData: txData
      })

      if (response.data.success) {
        setToAddress('')
        setAmount('')
        setData('')
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
    } catch (error: any) {
      console.error('Failed to sign proposal:', error)
      
      // Check for Google JWT expired error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        toast.error('Your Google login has expired. Please log in again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      } else {
        toast.error(`Error signing proposal: ${errorMessage}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } finally {
      setIsLoading(false)
    }
  }

  const hasUserSigned = (proposal: MessageProposal) => {
    return proposal.signatures.some(sig => sig.signer === currentPkp.ethAddress)
  }
  
  const getTransactionDetails = (proposal: MessageProposal) => {
    try {
      return JSON.parse(proposal.message)
    } catch (e) {
      return { to: 'Unknown', value: 'Unknown', data: 'Unknown' }
    }
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
      
      // Get transaction details from proposal
      const txDetails = getTransactionDetails(proposal)
      log('Transaction details:', txDetails)


      const gasPrice = (await ethersProvider.getGasPrice()).toHexString()
      const nonce = await ethersProvider.getTransactionCount(selectedMultisigPkp.ethAddress)
      log('gas price ', gasPrice, 'nounce', nonce)

      const unsignedTransaction = {
        to: txDetails.to,
        value: ethers.utils.parseEther(txDetails.value).toHexString(),
        gasLimit: 21000,
        gasPrice,
        nonce,
        chainId: chainInfo.chainId,
        data: '0x'
      };
      
      log('Unsigned transaction:', unsignedTransaction)
      
      // Remove '0x' prefix, Lit.Actions.signAndCombineEcdsa requires public key without the '0x' prefix
      const publicKeyForLit = selectedMultisigPkp.publicKey.replace(/^0x/, '');

      const jsParams = {
        message: proposal.message,
        publicKeys: proposal.signatures.map(signer => signer.publicKey),
        // signatures: proposal.signatures.map(sig => sig.signature),
        proposalId: proposal.id,
        walletId: selectedWalletId,
        requiredSignatures: selectedWallet.threshold,
        publicKey: selectedMultisigPkp.publicKey,
        // 
        sendTransaction: true,
        publicKeyForLit,
        chain: 'sepolia',
        unsignedTransaction,
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
      
      log('Parsed response object:', responseObj);
      
      if (responseObj.isValid) {
        let txHash = null;
        
        // Try to extract transaction hash from different response formats
        if (responseObj.sendTxResponse) {
          try {
            const sendTxObj = typeof responseObj.sendTxResponse === 'string'
              ? JSON.parse(responseObj.sendTxResponse)
              : responseObj.sendTxResponse;
              
            if (sendTxObj.status === 'success' && sendTxObj.txReceipt && sendTxObj.txReceipt.hash) {
              txHash = sendTxObj.txReceipt.hash;
              log('Transaction hash from receipt:', txHash);
            }
          } catch (e) {
            console.error('Error parsing sendTxResponse:', e);
          }
        }
        
        await axios.put(`/api/multisig/messages/status`, {
          proposalId: proposal.id,
          walletId: proposal.walletId,
          status: 'completed',
          txHash: txHash
        })
        
        // Refresh proposals
        await fetchProposals()
      }
      
      return response
    } catch (error: any) {
      console.error('Failed to execute multisig Lit Action:', error)
      setExecuteResult({ error: error.message || 'Unknown error' })
      
      // Check for Google JWT expired error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        toast.error('Your Google login has expired. Please log in again.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      } else {
        toast.error(`Error executing transaction: ${errorMessage}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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

          <h2 className="text-lg font-semibold mb-4">Transaction Proposals</h2>
          
          {/* Create new transaction proposal */}
          <div className="mb-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="toAddress">Recipient Address</Label>
              <Input
                id="toAddress"
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
                placeholder="Enter recipient address"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (ETH)</Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter transaction amount"
                type="number"
                step="0.0001"
              />
            </div>
            
            <Button
              onClick={handleCreateProposal}
              disabled={isLoading || !toAddress || !amount}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Transaction Proposal
            </Button>
          </div>

          {/* Proposal list */}
          <div className="space-y-4">
            {proposals.map(proposal => {
              const txDetails = getTransactionDetails(proposal);
              return (
                <div key={proposal.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="mb-2">
                    <div><span className="font-medium">Recipient:</span> {txDetails.to}</div>
                    <div><span className="font-medium">Amount:</span> {txDetails.value} ETH</div>
                    {txDetails.data && txDetails.data !== '0x' && (
                      <div><span className="font-medium">Data:</span> {txDetails.data}</div>
                    )}
                  </div>
                  
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
                        Sign Transaction
                      </Button>
                    )}
                    
                    {hasUserSigned(proposal) && (
                      <div className="text-sm text-green-600 flex items-center">
                        You have signed this transaction
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
                        Execute Transaction
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
              );
            })}
          </div>
        </div>
      )}
    </div>
  )
}
