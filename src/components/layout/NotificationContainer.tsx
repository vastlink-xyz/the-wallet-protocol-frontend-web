'use client'

import { useNotifications } from '@/hooks/useNotifications';
import { NotificationBanner } from './NotificationBanner';
import { usePathname } from 'next/navigation';
import { shouldShowNotificationOnPath } from '@/constants/routes';

export function NotificationContainer() {
  const { notifications, isLoading } = useNotifications();
  const pathname = usePathname();

  // Only show notifications on protected routes (not on login/invite pages)
  if (!shouldShowNotificationOnPath(pathname)) {
    return null;
  }

  if (isLoading && notifications.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {notifications.map((notification) => (
        <NotificationBanner 
          key={notification.id} 
          notification={notification} 
        />
      ))}
    </div>
  );
}