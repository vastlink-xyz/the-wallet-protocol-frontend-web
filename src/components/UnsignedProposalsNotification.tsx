'use client'

import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Bell } from 'lucide-react';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getProviderByAuthMethodType } from '@/lib/lit';
import { useUnsignedProposals } from '@/hooks/useUnsignedProposals';
import { MessageProposal } from '@/app/api/multisig/storage';

export function UnsignedProposalsNotification() {
  const pathname = usePathname();
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);

  const shouldShowOnCurrentPath = useMemo(() => {
    const prefixPaths = [
      '/auth/google-callback',
      '/login',
      '/invite',
    ]
    const exactPaths = [
      '/'
    ]
    const isExcluded = prefixPaths.some(path => pathname.startsWith(path)) || exactPaths.some(path => pathname === path);
    return !isExcluded;
  }, [pathname]);

  // Get authMethodId on component mount
  useEffect(() => {
    console.log('pathname', pathname, shouldShowOnCurrentPath)
    const getAuthMethodId = async () => {
      try {
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) return;

        const provider = getProviderByAuthMethodType(authMethod.authMethodType);
        const id = await provider.getAuthMethodId(authMethod);
        setAuthMethodId(id);
      } catch (error) {
        console.error('Error getting authMethodId:', error);
      }
    };

    if (shouldShowOnCurrentPath) {
      getAuthMethodId();
    }
  }, [shouldShowOnCurrentPath]);

  // Use custom hook to fetch unsigned proposals
  const { data: unsignedProposalsData } = useUnsignedProposals({
    authMethodId,
    enabled: shouldShowOnCurrentPath,
  });

  const proposals = unsignedProposalsData?.proposals || [];
  const count = unsignedProposalsData?.count || 0;

  // Don't render anything if we shouldn't show on this path or there are no proposals
  if (!shouldShowOnCurrentPath || count === 0) {
    return null;
  }

  // Helper function to get proposal description
  const getProposalDescription = (proposal: MessageProposal) => {
    if (proposal.type === 'transaction') {
      const transactionData = proposal.transactionData;
      if (transactionData) {
        return `Transaction: Send ${transactionData.value} ${transactionData.tokenType} to ${transactionData.to?.slice(0, 6)}...${transactionData.to?.slice(-4)}`;
      }
      return 'Transaction proposal';
    } else if (proposal.type === 'walletSettings') {
      return 'Wallet settings update';
    }
    return 'Proposal';
  };

  // Helper function to get wallet link
  const getWalletLink = (proposal: MessageProposal) => {
    return `/wallet/${proposal.walletId}/details/proposals?proposalId=${proposal.id}`;
  };

  return (
    <div className="w-full space-y-2">
      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          className="w-full py-[9px] bg-[#e6f7ff] rounded-sm border border-[#91d5ff] justify-between items-center gap-1.5 inline-flex px-6"
        >
          <div className="text-left text-black/90 text-sm font-normal leading-snug flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="w-4 h-4 text-blue-500 mr-2" />
              <div className='flex items-center'>
                {getProposalDescription(proposal)} -
                <p
                  className="text-blue-600 hover:text-blue-800 ml-1 underline cursor-pointer"
                  onClick={() => window.open(getWalletLink(proposal), '_blank')}
                >
                  View Proposal
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 