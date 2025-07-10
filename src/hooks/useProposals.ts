import { useQuery } from '@tanstack/react-query';
import { MessageProposal } from '@/app/api/multisig/storage';

interface UseProposalsOptions {
  enabled?: boolean;
  status?: string;
  userAddress?: string;
}

export const fetchProposals = async (walletId?: string, status?: string, userAddress?: string) => {
  // If walletId is provided, use the original API
  if (walletId) {
    const response = await fetch(`/api/multisig/messages?walletId=${walletId}`)
    if (!response.ok) {
      throw new Error('Failed to fetch proposals')
    }
    const data = await response.json()
    return data.data
  }
  
  // Otherwise use the new global proposals API
  const params = new URLSearchParams()
  if (status) params.append('status', status)
  if (userAddress) params.append('userAddress', userAddress)
  
  const response = await fetch(`/api/proposals?${params.toString()}`)
  if (!response.ok) {
    throw new Error('Failed to fetch proposals')
  }
  const data = await response.json()
  return data.data
}

export function useProposals(walletId?: string, options: UseProposalsOptions = {}) {
  const { enabled = true, status, userAddress } = options;

  return useQuery<MessageProposal[]>({
    queryKey: ['proposals', walletId, status, userAddress],
    queryFn: () => fetchProposals(walletId, status, userAddress),
    enabled: enabled,
    refetchOnWindowFocus: true,
    staleTime: 30 * 1000, // Consider data stale after 30 seconds
  });
}