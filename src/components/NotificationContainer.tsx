'use client'

import { useState } from 'react';
import { useNotifications } from '@/hooks/useNotifications';
import { NotificationBanner } from './NotificationBanner';
import { BaseNotification } from '@/services/NotificationService';

interface CollapsibleNotificationGroupProps {
  notifications: BaseNotification[];
}

function CollapsibleNotificationGroup({ notifications }: CollapsibleNotificationGroupProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (notifications.length === 0) return null;

  if (notifications.length === 1) {
    return <NotificationBanner key={notifications[0].id} notification={notifications[0]} />;
  }

  const firstNotification = notifications[0];
  const remainingCount = notifications.length - 1;

  return (
    <div className="w-full">
      <NotificationBanner key={firstNotification.id} notification={firstNotification} />
      
      {!isExpanded && (
        <div className="w-full py-[9px] bg-[#e6f7ff] rounded-sm border border-[#91d5ff] flex justify-center">
          <span className="text-black/70 text-sm font-normal">
            {remainingCount} more notification{remainingCount > 1 ? 's' : ''}
          </span>
          <button
            onClick={() => setIsExpanded(true)}
            className=" text-blue-600 hover:text-blue-800 underline text-sm cursor-pointer pl-2"
          >
            Show all
          </button>
        </div>
      )}

      {isExpanded && (
        <div className="">
          {notifications.slice(1).map((notification) => (
            <div key={notification.id} className="">
              <NotificationBanner notification={notification} />
            </div>
          ))}
          <div className="w-full py-[9px] bg-[#e6f7ff] rounded-sm border border-[#91d5ff] flex justify-center">
            <button
              onClick={() => setIsExpanded(false)}
              className="text-blue-600 hover:text-blue-800 underline text-sm cursor-pointer"
            >
              Show less
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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

  // Separate blue notifications from other notifications
  const blueNotifications = notifications.filter(n => n.type === 'unsigned_proposals');
  const otherNotifications = [testnetWarning, ...notifications.filter(n => n.type !== 'unsigned_proposals')];

  if (isLoading && notifications.length === 0) {
    return (
      <div className="w-full space-y-2">
        <NotificationBanner 
          key={testnetWarning.id} 
          notification={testnetWarning} 
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Render non-blue notifications normally */}
      {otherNotifications.map((notification) => (
        <NotificationBanner 
          key={notification.id} 
          notification={notification} 
        />
      ))}
      
      {/* Render blue notifications with collapsible behavior */}
      <CollapsibleNotificationGroup notifications={blueNotifications} />
    </div>
  );
}