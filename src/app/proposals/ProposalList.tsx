"use client";

import { useState, useMemo, useEffect, useImperativeHandle, forwardRef, useCallback } from "react";
import { fetchProposals, useProposals } from "@/hooks/useProposals";
import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { Proposal } from "@/app/wallet/[walletId]/details/proposals/components/Proposal";
import { IRelayPKP } from "@lit-protocol/types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from '@/hooks/useAuthContext';
import { LogoLoading } from "@/components/LogoLoading";
import { cn } from "@/lib/utils";
import { useAuthExpiration } from "@/hooks/useAuthExpiration";
import { useNotifications } from "@/hooks/useNotifications";
import { useProposalActions } from "@/hooks/useProposalActions";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export type ProposalStatus = "pending" | "completed" | "canceled";

export const ProposalsList = forwardRef(({ status }: { status: ProposalStatus }, ref) => {
  const t = useTranslations('ProposalList');
  const { authMethod: authMethodFromStorage, authMethodId: authMethodIdValue } = useAuthContext();

  // Get URL search params for proposal targeting
  const searchParams = useSearchParams();
  const targetProposalId = searchParams.get('proposalId');

  // Ref for proposal scrolling
  const proposalRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  // Track if initial scroll has been performed
  const hasScrolledRef = useRef(false);

  // User PKP state
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  const [authMethod, setAuthMethod] = useState<any>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  // Auth and notifications hooks
  const { handleExpiredAuth, verifyAuthOrRedirect } = useAuthExpiration();
  const { refreshNotifications } = useNotifications({ 
    enabled: false // We'll call it manually
  });

  // Fetch user PKP data
  useEffect(() => {
    async function fetchUserData() {
      try {
        if (!authMethodFromStorage) {
          setIsLoadingUser(false);
          return;
        }

        setAuthMethod(authMethodFromStorage);

        const userResponse = await fetch(`/api/user?authMethodId=${authMethodIdValue}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();
          if (userData.litActionPkp) {
            setUserPkp(userData.litActionPkp);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoadingUser(false);
      }
    }

    fetchUserData();
  }, [authMethodFromStorage, authMethodIdValue]);

  // Fetch user phone number separately
  useEffect(() => {
    async function fetchUserPhone() {
      try {
        if (!authMethod) return;

        const phoneResponse = await fetch('/api/mfa/get-user-phone', {
          headers: {
            'Authorization': `Bearer ${authMethod.accessToken}`
          }
        });

        if (phoneResponse.ok) {
          const phoneData = await phoneResponse.json();
          const phones = phoneData.phones || [];

          if (phones.length > 0) {
            setUserPhone(phones[0].phone_number);
          }
        }
      } catch (error) {
        console.error('Error fetching user phone:', error);
      }
    }

    fetchUserPhone();
  }, [authMethod]);

  useImperativeHandle(ref, () => ({
    refresh: async () => {
      await refreshProposals();
    },
  }), []);

  // Use new proposals API with user address and status filtering
  const {
    data: proposals = [],
    isLoading: isLoadingProposals,
    isRefetching: isRefetchingProposals,
    refresh: refreshProposals,
  } = useProposals(authMethodId || '', {
    enabled: !!authMethodId,
    status,
  });

  // Fetch wallets using user address
  const { data: wallets = [], isLoading: isLoadingWallets } = useQuery<MultisigWallet[]>({
    queryKey: ['wallets', userPkp?.ethAddress],
    queryFn: async () => {
      if (!userPkp?.ethAddress) return [];
      const { data } = await axios.get(`/api/multisig?address=${userPkp.ethAddress}`);
      return data.data || [];
    },
    enabled: !!userPkp?.ethAddress,
  });

  // Create a map of walletId to wallet for quick lookup
  const walletMap = useMemo(() => {
    const map = new Map<string, MultisigWallet>();
    wallets.forEach(wallet => {
      map.set(wallet.id, wallet);
    });
    return map;
  }, [wallets]);

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
    PinDialog,
    MFADialog,
  } = useProposalActions({
    walletMap,
    userPkp,
    accessToken: authMethod?.accessToken || '',
    authMethodId,
    providerType: authMethod?.providerType || 'EMAIL_OTP' as any,
    userEmail: authMethod?.primaryEmail || '',
    userPhone,
    refreshProposals,
    refreshNotifications: (authMethodId: string, ethAddress: string) => {
      refreshNotifications(authMethodId, ethAddress);
    },
    invalidateProposalNotifications: () => {}, // No-op for proposals page
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


  if (isLoadingProposals || isRefetchingProposals || isLoadingWallets || isLoadingUser) {
    return <LogoLoading />;
  }

  if (proposals.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        {t('empty_proposal_list')}
      </div>
    );
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
      <div className={cn("space-y-4", isRefetchingProposals && "opacity-50")}>
        {proposals.map((proposal) => {
          const wallet = walletMap.get(proposal.walletId);
          if (!wallet) {
            return (
              <div key={proposal.id} className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-600">
                  {t("wallet_not_found_with_id", {id: proposal.id})}
                </p>
              </div>
            );
          }

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
          );
        })}
      </div>

      {PinDialog}
      {MFADialog}
    </>
  );
});

ProposalsList.displayName = 'ProposalsListComponent';
