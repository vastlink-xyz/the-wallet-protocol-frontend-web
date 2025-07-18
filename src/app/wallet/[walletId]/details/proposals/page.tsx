"use client";

import { MessageProposal } from "@/app/api/multisig/storage";
import { useEffect, useRef } from "react";
import { Proposal } from "./components/Proposal";
import { useWallet } from "../context/WalletContext";
import { useParams, useSearchParams } from "next/navigation";
import { LogoLoading } from "@/components/LogoLoading";
import { useNotifications } from "@/hooks/useNotifications";
import { useProposals } from "@/hooks/useProposals";
import { Button } from "@/components/ui/button";
import { Loader2Icon, RefreshCcwIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useProposalActions } from "@/hooks/useProposalActions";
import { useAuthExpiration } from "@/hooks/useAuthExpiration";

export default function ProposalsPage() {
  const t = useTranslations('ProposalList');

  // Get walletId from params
  const params = useParams();
  const walletId = params.walletId as string;

  // Get URL search params for proposal targeting
  const searchParams = useSearchParams();
  const targetProposalId = searchParams.get('proposalId');

  // Ref for proposal scrolling
  const proposalRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Track if initial scroll has been performed
  const hasScrolledRef = useRef(false);

  // Get wallet data from context
  const { wallet, isLoading: isWalletLoading, authMethod, authMethodId, userPkp, userPhone } = useWallet();

  // Use React Query for proposals
  const {
    data: proposals = [],
    isLoading: isLoadingProposals,
    isRefetching: isRefetchingProposals,
    refresh: refreshProposals,
  } = useProposals(authMethodId || '',  {
    enabled: !!authMethodId,
    walletId,
  });

  const { handleExpiredAuth, verifyAuthOrRedirect } = useAuthExpiration();

  // Notifications hook for UI refresh
  const { refreshNotifications } = useNotifications({
    enabled: false, // only need the refresh function
  });

  // Create a wallet map for the hook
  const walletMap = new Map();
  if (wallet) {
    walletMap.set(wallet.id, wallet);
  }

  // Use the proposal actions hook
  const {
    handleSignProposal,
    handleSignProposalAndExecute,
    executeMultisigLitAction,
    handleCancelProposal,
    isSigningProposal,
    isExecuting,
    isDisabled,
    isCancelingProposal,
    dialog,
  } = useProposalActions({
    walletMap,
    userPkp,
    authMethod,
    authMethodId,
    userPhone,
    refreshProposals,
    refreshNotifications: (authMethodId: string, ethAddress: string) => {
      refreshNotifications(authMethodId, ethAddress);
    },
    t,
    handleExpiredAuth,
    verifyAuthOrRedirect,
  });

  // Scroll to target proposal when URL parameter is provided (only on initial load)
  useEffect(() => {
    if (!targetProposalId || isLoadingProposals || proposals.length === 0 || hasScrolledRef.current) return;

    // Check if target proposal exists in current proposals
    const targetProposal = proposals.find(p => p.id === targetProposalId);
    if (!targetProposal) {
      console.log('Target proposal not found in proposals:', targetProposalId);
      return;
    }

    // Wait for refs to be set and DOM to be updated
    const checkAndScroll = () => {
      const targetElement = proposalRefs.current[targetProposalId];

      if (targetElement) {
        console.log('Scrolling to proposal:', targetProposalId);
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        // Add a highlight effect
        targetElement.style.boxShadow = '0 0 0 2px #3b82f6';
        targetElement.style.borderRadius = '8px';
        // Remove highlight after 3 seconds
        setTimeout(() => {
          targetElement.style.boxShadow = '';
          targetElement.style.borderRadius = '';
        }, 3000);

        // Mark that we've performed the initial scroll
        hasScrolledRef.current = true;
      } else {
        // If element not found, retry after a short delay
        console.log('Retrying scroll, element not ready yet');
        setTimeout(checkAndScroll, 100);
      }
    };

    // Start checking after a short delay to ensure DOM is updated
    setTimeout(checkAndScroll, 100);
  }, [targetProposalId, proposals, isLoadingProposals]);


  // Show loading state if wallet or proposals are still loading
  if (isWalletLoading || isLoadingProposals || isRefetchingProposals) {
    return <LogoLoading />;
  }

  // If wallet is not available, show an error
  if (!wallet) {
    return <div>{t('wallet_not_found')}</div>;
  }

  // If userPkp is not available, show error
  if (!userPkp) {
    return (
      <div className="text-center py-8 text-red-500">
        {t('login_is_required')}
      </div>
    );
  }

  return (
    <>
      <div className="mt-4">
        {proposals.length === 0 ? (
          <p>{t('empty_proposal_list')}</p>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-end">
              <Button variant="ghost" size="icon" onClick={() => refreshProposals()}>
                {isRefetchingProposals ? (
                  <Loader2Icon className="w-4 h-4 animate-spin" />
                ) : (
                  <RefreshCcwIcon className="w-4 h-4" />
                )}
              </Button>
            </div>
            {proposals.map((proposal) => {
              if (!userPkp || !wallet) return null
              return (
                <div
                  key={proposal.id}
                  ref={(el) => {
                    proposalRefs.current[proposal.id] = el;
                  }}
                  className="transition-all duration-300"
                >
                  <Proposal
                    proposal={proposal}
                    selectedWallet={wallet}
                    handleSignProposal={handleSignProposal}
                    handleSignProposalAndExecute={handleSignProposalAndExecute}
                    executeMultisigLitAction={executeMultisigLitAction}
                    handleCancelProposal={handleCancelProposal}
                    userPkp={userPkp}
                    authMethodId={authMethodId}
                    isSigningProposal={isSigningProposal(proposal.id)}
                    isExecuting={isExecuting(proposal.id)}
                    isDisabled={isDisabled}
                    isCancelingProposal={isCancelingProposal(proposal.id)}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>

      {dialog}
    </>
  );
}