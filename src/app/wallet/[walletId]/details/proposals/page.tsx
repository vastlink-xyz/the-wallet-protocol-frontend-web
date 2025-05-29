"use client";

import { MessageProposal } from "@/app/api/multisig/storage";
import { useState, useEffect, use } from "react";
import { Proposal } from "./components/Proposal";
import { MultisigWallet } from "@/app/api/multisig/storage";
import { fetchProposals } from "./utils/proposal";
import { IRelayPKP } from "@lit-protocol/types";

interface ProposalsPageProps {
  params: Promise<{
    walletId: string;
  }>;
}

export default function ProposalsPage({ params }: ProposalsPageProps) {
  const unwrappedParams = use(params);
  const { walletId } = unwrappedParams;
  const [proposals, setProposals] = useState<MessageProposal[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<MultisigWallet | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProposals = await fetchProposals(walletId);
      setProposals(fetchedProposals);

      try {
        const response = await fetch(`/api/multisig?id=${walletId}`);
        const data = await response.json();
        if (data.success) {
          setSelectedWallet(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch wallet:", error);
      }
    };
    fetchData();
  }, [walletId]);

  if (!selectedWallet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4 space-y-4">
      {proposals.map((proposal) => (
        <Proposal
          key={proposal.id}
          proposal={proposal}
          selectedWallet={selectedWallet}
          executeResult={null}
          handleSignProposal={() => {}}
          executeMultisigLitAction={() => {}}
          hasUserSigned={() => false}
          isSigningProposal={false}
          isLoading={false}
        />
      ))}
    </div>
  );
} 