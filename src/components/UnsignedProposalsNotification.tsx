'use client'

import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Bell } from 'lucide-react';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getProviderByAuthMethodType } from '@/lib/lit';
import { useUnsignedProposals } from '@/hooks/useUnsignedProposals';

export function UnsignedProposalsNotification() {
  const pathname = usePathname();
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);

  const shouldShowOnCurrentPath = useMemo(() => {
    const prefixPaths = [
      '/auth/google-callback',
      '/login',
      '/invite',
    ]
    const exactPaths = [
      '/'
    ]
    const isExcluded = prefixPaths.some(path => pathname.startsWith(path)) || exactPaths.some(path => pathname === path);
    return !isExcluded;
  }, [pathname]);

  // Get authMethodId on component mount
  useEffect(() => {
    console.log('pathname', pathname, shouldShowOnCurrentPath)
    const getAuthMethodId = async () => {
      try {
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) return;

        const provider = getProviderByAuthMethodType(authMethod.authMethodType);
        const id = await provider.getAuthMethodId(authMethod);
        setAuthMethodId(id);
      } catch (error) {
        console.error('Error getting authMethodId:', error);
      }
    };

    if (shouldShowOnCurrentPath) {
      getAuthMethodId();
    }
  }, [shouldShowOnCurrentPath]);

  // Use custom hook to fetch unsigned proposals
  const { data: unsignedProposals = 0, invalidateUnsignedProposals } = useUnsignedProposals({
    authMethodId,
    enabled: shouldShowOnCurrentPath,
  });

  // Don't render anything if we shouldn't show on this path or there are no proposals
  if (!shouldShowOnCurrentPath || unsignedProposals === 0) {
    return null;
  }

  return (
    <div className="w-full py-[9px] bg-[#e6f7ff] rounded-sm border border-[#91d5ff] justify-between items-center gap-1.5 inline-flex px-8">
      <div className="flex-1 text-center">
        <div className="grow shrink basis-0 text-left text-black/90 text-sm font-normal leading-snug flex items-center justify-center">
          <Bell className="w-4 h-4 text-blue-500 mr-2" />
          <span>
            You have {unsignedProposals} pending proposals, go to Transactions {'>'} Proposals
          </span>
        </div>
      </div>
    </div>
  );
} 