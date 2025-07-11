'use client'

import { useState } from 'react';
import { useNotifications } from '@/hooks/useNotifications';
import { usePathname } from 'next/navigation';
import { shouldShowNotificationOnPath } from '@/constants/routes';
import { PersonalWalletSettings } from '@/app/assets/components/Personal/WalletSettings';

export function NotificationContainer() {
  const { securityNotifications, isLoading } = useNotifications();
  const pathname = usePathname();
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);

  // Only show notifications on protected routes (not on login/invite pages)
  if (!shouldShowNotificationOnPath(pathname)) {
    return null;
  }

  if (isLoading && securityNotifications.length === 0) {
    return null;
  }

  const handleNotificationClick = () => {
    setShowSettingsDialog(true);
  };

  return (
    <>
      <div className="w-full">
        {securityNotifications.map((notification) => (
          <div 
            key={notification.id}
            className="w-full py-[9px] bg-[#ffb117] rounded-sm border border-[#ffe58f] justify-center items-center gap-1.5 inline-flex px-[10vw]"
          >
            <div className="text-black/90 text-sm font-normal leading-snug flex items-center gap-2">
              {notification.message}
              <span 
                className="inline-block cursor-pointer text-gray-700 hover:text-gray-900 underline"
                onClick={handleNotificationClick}
              >
                set up daily withdrawal limits and MFA in settings
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Settings Dialog for MFA notifications */}
      <PersonalWalletSettings 
        isOpen={showSettingsDialog}
        onClose={() => setShowSettingsDialog(false)}
      />
    </>
  );
}