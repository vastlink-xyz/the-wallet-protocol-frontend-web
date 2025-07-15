import { MessageProposal } from '@/app/api/multisig/storage';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

interface UseProposalsOptions {
  enabled?: boolean;
  status?: string;
  userAddress?: string;
}

export const fetchProposals = async (
  walletId?: string,
  id?: string,
  status?: string,
  userAddress?: string
): Promise<MessageProposal[]> => {
  // If walletId is provided, use the original API
  if (walletId) {
    const response = await fetch(`/api/multisig/messages?walletId=${walletId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch proposals');
    }
    const data = await response.json();
    return data.data;
  }

  // Otherwise use the new global proposals API
  const params = new URLSearchParams();
  if (id) params.append('id', id);
  if (status) params.append('status', status);
  if (userAddress) params.append('userAddress', userAddress);

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
  walletId?: string,
  options: UseProposalsOptions = {}
) {
  const { enabled = true, status, userAddress } = options;
  const queryKey = ['proposals', walletId, status, userAddress];

  const queryClient = useQueryClient();

  const q = useQuery<MessageProposal[]>({
    queryKey,
    queryFn: () => fetchProposals(walletId, undefined, status, userAddress),
    enabled,
    refetchOnWindowFocus: true,
    staleTime: 30 * 1000, // Consider data stale after 30 seconds
  });

  const refresh = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey});
    const { data } = await q.refetch();
    return data || [];
  }, [ 'proposals', walletId, status, userAddress ]);

  const mutate = useCallback((newData: MessageProposal[]) => {
    queryClient.setQueryData(queryKey, newData);
  }, [ 'proposals', walletId, status, userAddress ]);

  const mutateItem = useCallback(async (itemId: string) => {
    const data = await fetchProposals(walletId, itemId);
    if (data.length == 0) {
      return null;
    }

    if (q.data && q.data.length > 0) {
      const newData = [ ...q.data ];
      for (const key in newData) {
        if (newData[key].id === data[0].id) {
          // Update the proposal in the local state
          newData[key] = data[0];
          break;
        }
      }
      queryClient.setQueryData(queryKey, newData);
    } else {
      queryClient.setQueryData(queryKey, [...data]);
    }

    return data[0];
  }, [ 'proposals', walletId, status, userAddress ]);

  return {
    ...q,
    refresh,
    mutate,
    mutateItem,
  }
}
