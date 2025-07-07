import { useQuery } from '@tanstack/react-query';
import { fetchProposals } from '@/app/wallet/[walletId]/details/proposals/utils/proposal';
import { MessageProposal } from '@/app/api/multisig/storage';

interface UseProposalsOptions {
  enabled?: boolean;
}

export function useProposals(walletId: string, options: UseProposalsOptions = {}) {
  const { enabled = true } = options;

  return useQuery<MessageProposal[]>({
    queryKey: ['proposals', walletId],
    queryFn: () => fetchProposals(walletId),
    enabled: enabled && !!walletId,
    staleTime: 3 * 1000, // Consider data stale after 3 seconds
    refetchOnWindowFocus: true,
  });
}