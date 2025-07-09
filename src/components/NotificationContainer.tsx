'use client'

import { useNotifications } from '@/hooks/useNotifications';
import { NotificationBanner } from './NotificationBanner';



export function NotificationContainer() {
  const { notifications, isLoading } = useNotifications();

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