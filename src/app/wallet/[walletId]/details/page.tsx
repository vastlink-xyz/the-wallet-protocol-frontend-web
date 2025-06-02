"use client";

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function WalletDetailsRedirectPage() {
  const router = useRouter();
  const params = useParams();
  const walletId = params.walletId as string;

  useEffect(() => {
    if (walletId) {
      router.replace(`/wallet/${walletId}/details/proposals`);
    }
  }, [walletId, router]);

  return null;
} 