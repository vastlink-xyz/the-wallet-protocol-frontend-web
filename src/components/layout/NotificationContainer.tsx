'use client'

import { useNotifications } from '@/hooks/useNotifications';
import { usePathname, useRouter } from 'next/navigation';
import { shouldShowNotificationOnPath } from '@/constants/routes';
import { useTranslations } from 'next-intl';

export function NotificationContainer() {
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("AppNavbar");

  const { securityNotifications, isLoading } = useNotifications();

  // Only show notifications on protected routes (not on login/invite pages)
  if (!shouldShowNotificationOnPath(pathname)) {
    return null;
  }

  if (isLoading && securityNotifications.length === 0) {
    return null;
  }

  const handleNotificationClick = () => {
    router.push('/notification');
  };

  // Show single consolidated message if any security notifications exist
  const hasSecurityNotifications = securityNotifications.length > 0;

  return (
    <div className="w-full">
      {hasSecurityNotifications && (
        <div 
          className="w-full py-[9px] bg-[#ffb117] rounded-sm border border-[#ffe58f] justify-center items-center gap-1.5 inline-flex px-[10vw]"
        >
          <div className="text-black/90 text-sm font-normal leading-snug flex items-center">
            {t.rich(
              'security_setup',
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
      )}
    </div>
  );
}