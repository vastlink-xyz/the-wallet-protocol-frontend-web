"use client";

import { MessageProposal } from "@/app/api/multisig/storage";
import { useState, useEffect } from "react";
import { Proposal } from "./components/Proposal";
import { fetchProposals } from "./utils/proposal";
import { useWallet } from "../context/WalletContext";
import { useParams } from "next/navigation";

export default function ProposalsPage() {
  // Get walletId from params
  const params = useParams();
  const walletId = params.walletId as string;
  
  // Get wallet data from context
  const { wallet, isLoading: isWalletLoading } = useWallet();
  
  // Local state for proposals
  const [proposals, setProposals] = useState<MessageProposal[]>([]);
  const [isLoadingProposals, setIsLoadingProposals] = useState(true);

  // Fetch proposals for this wallet
  useEffect(() => {
    async function getProposals() {
      try {
        setIsLoadingProposals(true);
        const fetchedProposals = await fetchProposals(walletId);
        setProposals(fetchedProposals);
      } catch (error) {
        console.error("Failed to fetch proposals:", error);
      } finally {
        setIsLoadingProposals(false);
      }
    }
    
    if (walletId) {
      getProposals();
    }
  }, [walletId]);

  // Show loading state if wallet or proposals are still loading
  if (isWalletLoading || isLoadingProposals) {
    return <div>Loading proposals...</div>;
  }

  // If wallet is not available, show an error
  if (!wallet) {
    return <div>Wallet not found</div>;
  }

  return (
    <div className="mt-4 space-y-4">
      {proposals.length === 0 ? (
        <p>No proposals found for this wallet.</p>
      ) : (
        proposals.map((proposal) => (
          <Proposal
            key={proposal.id}
            proposal={proposal}
            selectedWallet={wallet}
            executeResult={null}
            handleSignProposal={() => {}}
            executeMultisigLitAction={() => {}}
            hasUserSigned={() => false}
            isSigningProposal={false}
            isLoading={false}
          />
        ))
      )}
    </div>
  );
} 