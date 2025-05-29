"use client";

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function WalletDetailsRedirectPage() {
  const router = useRouter();
  const params = useParams();
  const walletId = params.walletId as string;

  useEffect(() => {
    if (walletId) {
      router.replace(`/wallet/${walletId}/details/transactions`);
    }
  }, [walletId, router]);

  return <div>Redirecting...</div>;
} 