'use client'

import { useState } from 'react';
import { Bell, ReceiptPoundSterling } from 'lucide-react';
import { BaseNotification } from '@/services/NotificationService';
import { PersonalWalletSettings } from '@/app/assets/components/Personal/WalletSettings';

interface NotificationBannerProps {
  notification: BaseNotification;
}

export function NotificationBanner({ notification }: NotificationBannerProps) {
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);

  const handleNotificationClick = () => {
    if (notification.type === 'mfa_setup') {
      setShowSettingsDialog(true);
    }
  };

  const getNotificationStyle = () => {
    switch (notification.type) {
      case 'mfa_setup':
        return {
          bg: 'bg-[#fffbe6]',
          border: 'border-[#ffe58f]',
          icon: <img src="/icons/alert.png" className='w-4 h-4' />,
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: <Bell className="w-4 h-4 text-gray-500" />,
        };
    }
  };

  const { bg, border, icon } = getNotificationStyle();

  const renderNotificationContent = () => {
    if (notification.type === 'mfa_setup') {
      return (
        <div className="text-black/90 text-sm font-normal leading-snug flex items-center gap-2">
          {icon}
          {notification.message}
          <span 
            className="inline-block cursor-pointer text-gray-700 hover:text-gray-900 underline"
            onClick={handleNotificationClick}
          >
            settings
          </span>
        </div>
      );
    }

    return (
      <div className="text-black/90 text-sm font-normal leading-snug flex items-center gap-2 pl-[10vw]">
        {icon}
        {notification.message}
      </div>
    );
  };

  return (
    <>
      <div className={`w-full py-[9px] ${bg} rounded-sm border ${border} justify-between items-center gap-1.5 inline-flex px-[10vw]`}>
        {renderNotificationContent()}
      </div>

      {/* Settings Dialog for MFA notifications */}
      {notification.type === 'mfa_setup' && (
        <PersonalWalletSettings 
          isOpen={showSettingsDialog}
          onClose={() => setShowSettingsDialog(false)}
        />
      )}
    </>
  );
}