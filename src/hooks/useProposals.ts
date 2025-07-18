import { MessageProposal } from '@/app/api/multisig/storage';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

interface UseProposalsOptions {
  enabled?: boolean;
  status?: string;
  walletId?: string;
  proposalId?: string;
}

export const fetchProposals = async (
  authMethodId: string,
  status?: string,
  walletId?: string,
  proposalId?: string,
): Promise<MessageProposal[]> => {
  // Otherwise use the new global proposals API
  const params = new URLSearchParams();
  params.append('authMethodId', authMethodId);
  if (status) params.append('status', status);
  if (walletId) params.append('wid', walletId);
  if (proposalId) params.append('pid', proposalId);

  const response = await fetch(`/api/proposals?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch proposals');
  }
  const { success, data } = await response.json();
  if (!success) {
    throw new Error('Failed to fetch proposals');
  }

  return data;
};

export function useProposals(
  authMethodId: string,
  options: UseProposalsOptions = {}
) {
  const { enabled = true, status, walletId, proposalId } = options;
  const queryKey = ['proposals', authMethodId, status, walletId, proposalId];

  const queryClient = useQueryClient();

  const q = useQuery<MessageProposal[]>({
    queryKey,
    queryFn: () => fetchProposals(authMethodId, status, walletId, proposalId),
    enabled,
    refetchOnWindowFocus: true,
    staleTime: 30 * 1000, // Consider data stale after 30 seconds
  });

  const refresh = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey });
    const { data } = await q.refetch();
    return data || [];
  }, queryKey);

  const mutate = useCallback((newData: MessageProposal[]) => {
    queryClient.setQueryData(queryKey, newData);
  }, queryKey);

  return {
    ...q,
    refresh,
    mutate,
  }
}
