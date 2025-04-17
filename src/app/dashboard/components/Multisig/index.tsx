import { Button } from "@/components/ui/button"
import { IRelayPKP, SessionSigs } from "@lit-protocol/types"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import type { MultisigWallet } from '@/app/api/multisig/storage'
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Multisig({ currentPkp, sessionSigs }: { currentPkp: IRelayPKP, sessionSigs: SessionSigs }) {
  const [isLoading, setIsLoading] = useState(false)
  const [wallets, setWallets] = useState<MultisigWallet[]>([])
  const [signer2Address, setSigner2Address] = useState('')
  const [signer2PublicKey, setSigner2PublicKey] = useState('')
  const [signer2GoogleAuthMethodId, setSigner2GoogleAuthMethodId] = useState('')

  useEffect(() => {
    fetchWallets()
  }, [])

  const fetchWallets = async () => {
    try {
      const { data } = await axios.get(`/api/multisig?address=${currentPkp.ethAddress}`)
      if (data.success) {
        setWallets(data.data)
      }
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

      const response = await axios.post('/api/multisig', {
        multisigPkp: currentPkp,
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
                <div className="text-sm text-gray-500 mt-1">
                  PKP Address: {wallet.pkp.ethAddress}
                </div>
                <div className="text-sm text-gray-500">
                  Created: {new Date(wallet.createdAt).toLocaleDateString()}
                </div>
                <div className="mt-2">
                  <div className="text-sm font-medium">Signers:</div>
                  {wallet.signers.map((signer, index) => (
                    <div key={index} className="text-sm text-gray-500">
                      Signer {index + 1}: {signer.ethAddress}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
