import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MultisigWallet } from '@/app/api/multisig/storage';

interface MultisigWalletWithUnsignedProposalsCount extends MultisigWallet {
  unsignedProposalsCount: number;
}

// Fetch team wallets function
const fetchTeamWallets = async (userEthAddress: string): Promise<MultisigWalletWithUnsignedProposalsCount[]> => {
  const { data } = await axios.get(`/api/multisig?address=${userEthAddress}`);
  
  if (data.success) {
    return data.data;
  }
  return [];
};

interface UseTeamWalletsOptions {
  userEthAddress: string | null;
  enabled?: boolean;
}

export function useTeamWallets({ 
  userEthAddress, 
  enabled = true,
}: UseTeamWalletsOptions) {
  return useQuery({
    queryKey: ['team-wallets', userEthAddress],
    queryFn: () => fetchTeamWallets(userEthAddress!),
    enabled: !!userEthAddress && enabled,
    staleTime: 5 * 1000, // Consider data stale after 5 seconds
    refetchInterval: false, // Disable automatic refetching
    refetchOnWindowFocus: true, // Refetch when tab becomes active
  });
}