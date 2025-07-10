'use client';

import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getAuthIdByAuthMethod } from '@lit-protocol/lit-auth-client';
import { Loader2Icon } from 'lucide-react';

interface BalanceProps extends React.HTMLAttributes<HTMLDivElement> {
  isPersonal: boolean;
}

export function Balance({ className, isPersonal }: BalanceProps) {
  const {
    data: balance,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['balance'],
    queryFn: async (): Promise<number> => {
      const storedAuthMethod = getAuthMethodFromStorage();
      if (!storedAuthMethod) {
        throw new Error('No auth method found');
      }

      const authMethodId = await getAuthIdByAuthMethod(storedAuthMethod);

      // Fetch user's information from database API
      const res = await fetch(`/api/user/balance?authMethodId=${authMethodId}`);
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
        'flex flex-row text-3xl font-bold text-center justify-center items-center',
        className
      )}
    >
      {isLoading && <Loader2Icon className="animate-spin text-white w-8 h-8" />}
      {(!isLoading && error) && (
        <span className="leading-8 text-red-500">Error loading balance</span>
      )}
      {(!isLoading && !error && balance) && (
        <span
          className={cn('leading-8', isPersonal ? 'text-white' : 'text-black')}
        >
          ${balance.toFixed(2)}
        </span>
      )}
    </div>
  );
}
