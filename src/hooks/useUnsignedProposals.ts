import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import axios from 'axios';

// Fetch unsigned proposals function
const fetchUnsignedProposals = async (authMethodId: string): Promise<number> => {
  const response = await axios.get(`/api/multisig/messages/unsigned?authMethodId=${authMethodId}`);
  
  if (response.data.success) {
    return response.data.data.count;
  }
  return 0;
};

interface UseUnsignedProposalsOptions {
  authMethodId: string | null;
  enabled?: boolean;
}

export function useUnsignedProposals({ 
  authMethodId, 
  enabled = true,
}: UseUnsignedProposalsOptions) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['unsigned-proposals', authMethodId],
    queryFn: () => fetchUnsignedProposals(authMethodId!),
    enabled: !!authMethodId && enabled,
    refetchInterval: 60 * 60 * 1000, // Refetch every 1 hour
    staleTime: 3 * 1000, // Consider data stale after 3 seconds
    refetchOnWindowFocus: true, // Refetch when tab becomes active
  });

  const invalidateUnsignedProposals = useCallback((targetAuthMethodId?: string | null) => {
    const targetId = targetAuthMethodId || authMethodId;
    if (targetId) {
      queryClient.invalidateQueries({ queryKey: ['unsigned-proposals', targetId] });
    }
  }, [queryClient, authMethodId]);

  const invalidateTeamWallets = useCallback((userEthAddress?: string | null) => {
    if (userEthAddress) {
      queryClient.invalidateQueries({ queryKey: ['team-wallets', userEthAddress] });
    }
  }, [queryClient]);

  const invalidateProposalRelatedData = useCallback((targetAuthMethodId?: string | null, userEthAddress?: string | null) => {
    // Invalidate unsigned proposals notification
    invalidateUnsignedProposals(targetAuthMethodId);
    // Invalidate team wallets with red dots
    invalidateTeamWallets(userEthAddress);
  }, [invalidateUnsignedProposals, invalidateTeamWallets]);

  return {
    ...query,
    invalidateUnsignedProposals,
    invalidateTeamWallets,
    invalidateProposalRelatedData,
  };
}