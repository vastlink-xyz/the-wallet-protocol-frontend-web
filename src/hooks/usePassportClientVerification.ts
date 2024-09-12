'use client'

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createPassportClient } from '@0xpass/passport-viem';
import { http } from 'viem';
import { auth, log } from '@/lib/utils';
import { sepolia } from 'viem/chains';
import { useTranslations } from 'next-intl';

export const usePassportClientVerification = () => {
  const router = useRouter();
  const t = useTranslations('toastError')
  const verifyPassportClient = useCallback(async (chain=sepolia) => {
    const { authenticatedHeader, address } = auth.all();
    const transport = http();
    // try {
    //   const client = await createPassportClient(authenticatedHeader, transport, chain);
    //   log('Passport client created successfully');
    //   return client;
    // } catch (error) {
    //   log('error', error);
    //   toast.error(t('authenticationError'));
    //   auth.clearAllAuthData();
    //   router.push('/');
    //   return null;
    // }
    return {}
  }, [router]);

  return { verifyPassportClient };
};
