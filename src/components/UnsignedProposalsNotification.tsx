'use client'

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import axios from 'axios';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getProviderByAuthMethodType } from '@/lib/lit';

export function UnsignedProposalsNotification() {
  const pathname = usePathname();
  const router = useRouter();
  const [unsignedProposals, setUnsignedProposals] = useState<number>(0);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);

  // Skip notification on login page and other excluded paths
  const excludedPaths = ['/', '/auth/google-callback', '/login', '/invite'];
  const shouldShowOnCurrentPath = !excludedPaths.includes(pathname);

  // Get authMethodId on component mount
  useEffect(() => {
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

  // Check for unsigned proposals
  useEffect(() => {
    if (!authMethodId || !shouldShowOnCurrentPath) return;

    const checkUnsignedProposals = async () => {
      try {
        const response = await axios.get(`/api/multisig/messages/unsigned?authMethodId=${authMethodId}`);
        
        if (response.data.success) {
          setUnsignedProposals(response.data.data.count);
        }
      } catch (error) {
        console.error('Error checking for unsigned proposals:', error);
      }
    };

    checkUnsignedProposals();
  }, [authMethodId, shouldShowOnCurrentPath, pathname]);

  // Don't render anything if we shouldn't show on this path or there are no proposals
  if (!shouldShowOnCurrentPath || unsignedProposals === 0 || !showNotification) {
    return null;
  }

  return (
    <div className="w-full h-[45px] py-[9px] bg-[#e6f7ff] rounded-sm border border-[#91d5ff] justify-between items-center gap-1.5 inline-flex px-8">
      <div className="flex-1 text-center">
        <div className="grow shrink basis-0 text-center text-black/90 text-sm font-normal leading-snug flex items-center justify-center">
          <Bell className="w-4 h-4 text-blue-500 mr-2" />
          <span>
            You have <span className="font-medium">{unsignedProposals}</span> unsigned proposal{unsignedProposals > 1 ? 's' : ''} waiting for your signature.
          </span>
        </div>
      </div>
    </div>
  );
} 