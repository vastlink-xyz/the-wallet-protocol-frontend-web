'use client'

import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Bell } from 'lucide-react';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getProviderByAuthMethodType } from '@/lib/lit';
import { useUnsignedProposals } from '@/hooks/useUnsignedProposals';
import { MessageProposal } from '@/app/api/multisig/storage';

interface MessageProposalWithWalletName extends MessageProposal {
  walletName: string;
}

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

  const proposals = (unsignedProposalsData?.proposals || []) as MessageProposalWithWalletName[];
  const count = unsignedProposalsData?.count || 0;

  // Don't render anything if we shouldn't show on this path or there are no proposals
  if (!shouldShowOnCurrentPath || count === 0) {
    return null;
  }

  // Helper function to get proposal description
  const getProposalDescription = (proposal: MessageProposalWithWalletName) => {
    const walletName = proposal.walletName
    let description = ''
    if (proposal.type === 'transaction') {
      const transactionData = proposal.transactionData;
      if (transactionData) {
        description = `Transaction: Send ${transactionData.value} ${transactionData.tokenType} to ${transactionData.to?.slice(0, 6)}...${transactionData.to?.slice(-4)}`;
      } else {
        description = 'Transaction proposal';
      }
    } else if (proposal.type === 'walletSettings') {
      description = 'Wallet settings update';
    }
    return `${walletName} > ${description}`
  };

  // Helper function to get wallet link
  const getWalletLink = (proposal: MessageProposalWithWalletName) => {
    return `/wallet/${proposal.walletId}/details/proposals?proposalId=${proposal.id}`;
  };

  return (
    <div className="w-full space-y-2">
      {proposals.map((proposal) => (
        <div
          key={proposal.id}
          className="w-full py-[9px] bg-[#e6f7ff] rounded-sm border border-[#91d5ff] flex justify-center items-center px-6"
        >
          <div className="text-black/90 text-sm font-normal leading-snug">
            <div className="flex items-center">
              <Bell className="w-4 h-4 text-blue-500 mr-2" />
              <div className='flex items-center'>
                {getProposalDescription(proposal)} {'>'}
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