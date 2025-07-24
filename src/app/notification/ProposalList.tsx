"use client";

import { useState, useMemo, useEffect, useImperativeHandle, forwardRef, useCallback } from "react";
import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { Proposal } from "@/app/wallet/[walletId]/details/proposals/components/Proposal";
import { IRelayPKP } from "@lit-protocol/types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod";
import { getProviderByAuthMethodType } from "@/lib/lit";
import { LogoLoading } from "@/components/LogoLoading";
import { useAuthExpiration } from "@/hooks/useAuthExpiration";
import { useNotifications } from "@/hooks/useNotifications";
import { useProposalActions } from "@/hooks/useProposalActions";
import { PendingProposalNotification } from "@/services/NotificationService";
import { fetchProposals } from "@/hooks/useProposals";
import { useTranslations } from "next-intl";

export function ProposalsList({ proposals }: { proposals: PendingProposalNotification[] }) {  
  const t = useTranslations('ProposalList');

  // User PKP state
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  const [authMethod, setAuthMethod] = useState<any>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  // Auth and notifications hooks
  const { handleExpiredAuth, verifyAuthOrRedirect } = useAuthExpiration();
  const { invalidateProposalNotifications } = useNotifications({ 
    enabled: false // We'll call it manually
  });

  // Fetch user PKP data
  useEffect(() => {
    async function fetchUserData() {
      try {
        const authMethodFromStorage = getAuthMethodFromStorage();
        if (!authMethodFromStorage) {
          setIsLoadingUser(false);
          return;
        }

        setAuthMethod(authMethodFromStorage);
        const provider = getProviderByAuthMethodType(authMethodFromStorage.authMethodType);
        const authMethodIdValue = await provider.getAuthMethodId(authMethodFromStorage);
        setAuthMethodId(authMethodIdValue);

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
  }, []);

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
    authMethod,
    authMethodId,
    userPhone,
    refreshProposals: invalidateProposalNotifications, // Use invalidateProposalNotifications as refreshProposals
    refreshNotifications: () => {}, // No refreshNotifications needed for notification page
    invalidateProposalNotifications,
    t,
    handleExpiredAuth,
    verifyAuthOrRedirect,
  });


  if (isLoadingWallets || isLoadingUser) {
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
      <div className="space-y-4">
        {proposals.filter((v) => v.data !== undefined).map(({ data }) => {
          const wallet = walletMap.get(data!.walletId);
          if (!wallet) {
            return (
              <div key={data!.id} className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-600">
                  {t("wallet_not_found_with_id", {id: data!.id})}
                </p>
              </div>
            );
          }

          return (
            <div
              key={data!.id}
              className="transition-all duration-300"
            >
              <Proposal
                proposal={data!}
                selectedWallet={wallet}
                handleSignProposal={handleSignProposal}
                handleSignProposalAndExecute={handleSignProposalAndExecute}
                executeMultisigLitAction={executeMultisigLitAction}
                handleCancelProposal={handleCancelProposal}
                userPkp={userPkp}
                authMethodId={authMethodId}
                isSigningProposal={isSigningProposal(data!.id)}
                isExecuting={isExecuting(data!.id)}
                isDisabled={isDisabled}
                isCancelingProposal={isCancelingProposal(data!.id)}
              />
            </div>
          );
        })}
      </div>

      {PinDialog}
      {MFADialog}
    </>
  );
}
