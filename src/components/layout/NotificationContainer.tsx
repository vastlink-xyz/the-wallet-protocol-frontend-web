'use client'

import { useContext, useState } from 'react';
import { useNotifications } from '@/hooks/useNotifications';
import { usePathname } from 'next/navigation';
import { shouldShowNotificationOnPath } from '@/constants/routes';
import { PersonalWalletSettings } from '@/app/assets/components/Personal/WalletSettings';
import { PersonalWalletSettingsContext } from '@/providers/PersonalWalletSettingsProvider';
import { useTranslations } from 'next-intl';

export function NotificationContainer() {
  const pathname = usePathname();

  const t = useTranslations("AppNavbar");

  const { securityNotifications, isLoading } = useNotifications();

  const { showPersonalWalletSettings } = useContext(PersonalWalletSettingsContext);

  // Only show notifications on protected routes (not on login/invite pages)
  if (!shouldShowNotificationOnPath(pathname)) {
    return null;
  }

  if (isLoading && securityNotifications.length === 0) {
    return null;
  }

  const handleNotificationClick = () => {
    showPersonalWalletSettings();
  };

  return (
    <div className="w-full">
      {securityNotifications.map((notification) => (
        <div 
          key={notification.id}
          className="w-full py-[9px] bg-[#ffb117] rounded-sm border border-[#ffe58f] justify-center items-center gap-1.5 inline-flex px-[10vw]"
        >
          <div className="text-black/90 text-sm font-normal leading-snug flex items-center">
            {t.rich(
              "mfa_setup",
              {
                link: (children) => (
                  <span 
                    className="ml-1 inline-block cursor-pointer text-gray-700 hover:text-gray-900 underline"
                    onClick={handleNotificationClick}
                  >
                    {children}
                  </span>
                )
              }
            )}
          </div>
        </div>
      ))}
    </div>
  );
}