'use client';

import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { Loader2Icon } from 'lucide-react';
import { MultisigWalletAddresses } from '@/app/api/multisig/storage';

interface BalanceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'personal' | 'team'
  addresses: MultisigWalletAddresses
}

export function Balance({ className, variant = 'personal', addresses }: BalanceProps) {
  const isPersonal = variant === 'personal'

  const {
    data: balance,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['balance', addresses.btc, addresses.eth],
    queryFn: async (): Promise<number> => {
      const url = "/api/balance"
      const res = await fetch(url, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(addresses),
        });
      if (!res.ok) {
        throw new Error('Failed to fetch balance');
      }

      const data = await res.json();
      return data.total;
    },
    refetchInterval: 60 * 1000, // Refetch every 10 minutes
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
  });

  return (
    <div
      className={cn(
        'flex flex-row  text-center justify-center items-center',
        className
      )}
    >
      {isLoading && <Loader2Icon className={cn(
        "animate-spin text-white w-8 h-8",
        isPersonal ? 'text-white' : 'text-black'
      )} />}
      {(!isLoading && error) && (
        <span className="leading-8 text-red-500">Failed to loading balance</span>
      )}
      {(!isLoading && !error && balance) && (
        <span
          className={cn('leading-8 text-3xl font-bold', isPersonal ? 'text-white' : 'text-black')}
        >
          ${balance.toFixed(2)}
        </span>
      )}
    </div>
  );
}
