'use client'

import { useNotifications } from '@/hooks/useNotifications';
import { NotificationBanner } from './NotificationBanner';

export function NotificationContainer() {
  const { notifications, isLoading } = useNotifications();

  // Static testnet warning notification
  const testnetWarning = {
    id: 'testnet_warning',
    type: 'testnet_warning' as const,
    title: 'Testnet Warning',
    message: 'All assets on this platform are on testnets only',
    data: {}
  };

  const allNotifications = [testnetWarning, ...notifications];

  if (isLoading && notifications.length === 0) {
    return (
      <div className="w-full space-y-2 mt-2">
        <NotificationBanner 
          key={testnetWarning.id} 
          notification={testnetWarning} 
        />
      </div>
    );
  }

  return (
    <div className="w-full space-y-2">
      {allNotifications.map((notification) => (
        <NotificationBanner 
          key={notification.id} 
          notification={notification} 
        />
      ))}
    </div>
  );
}