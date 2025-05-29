"use client";

import { MessageProposal } from "@/app/api/multisig/storage";
import { useState, useEffect, use } from "react";
import { Proposal } from "./components/Proposal";
import { MultisigWallet } from "@/app/api/multisig/storage";
import { fetchProposals } from "./utils/proposal";
import { IRelayPKP } from "@lit-protocol/types";

interface WalletDetailsPageProps {
  params: Promise<{
    walletId: string;
  }>;
}

export default function WalletDetailsPage({ params }: WalletDetailsPageProps) {
  const unwrappedParams = use(params);
  const { walletId } = unwrappedParams;
  const [proposals, setProposals] = useState<MessageProposal[]>([])
  const [selectedWallet, setSelectedWallet] = useState<MultisigWallet | null>(null)
  const [selectedMultisigPkp, setSelectedMultisigPkp] = useState<IRelayPKP | null>(null)

  // Update selected wallet and PKP when wallet ID changes
  useEffect(() => {
    const fetchData = async () => {
      const proposals = await fetchProposals(walletId)
      setProposals(proposals)

      // Set the selected wallet and multisig PKP
      try {
        const response = await fetch(`/api/multisig?id=${walletId}`)
        const data = await response.json()
        if (data.success) {
          const wallet = data.data
          setSelectedWallet(wallet)
          setSelectedMultisigPkp(wallet.pkp)
        }
      } catch (error) {
        console.error("Failed to fetch wallet:", error)
      }
    }
    fetchData()
  }, [walletId])

  if (!selectedWallet) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Wallet Details</h1>
      <p className="text-gray-500">Showing details for wallet ID: {walletId}</p>

      {/* Transaction history and proposals */}
      <div className="mt-8">
        <div className="space-y-4">
          {proposals.map(proposal => {
            return <Proposal
              key={proposal.id}
              proposal={proposal}
              selectedWallet={selectedWallet}
              executeResult={null}
              handleSignProposal={() => { }}
              executeMultisigLitAction={() => { }}
              hasUserSigned={() => false}
              isSigningProposal={false}
              isLoading={false}
            />
          })}
        </div>
      </div>
    </div>
  );
} 