'use client'

import { useState } from 'react';
import { TriangleAlert, Bell } from 'lucide-react';
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
    } else if (notification.type === 'unsigned_proposals' && notification.data?.walletLink) {
      window.open(notification.data.walletLink, '_blank');
    }
  };

  const getNotificationStyle = () => {
    switch (notification.type) {
      case 'testnet_warning':
        return {
          bg: 'bg-[#fffbe6]',
          border: 'border-[#ffe58f]',
          icon: <img src="/icons/alert.png" className='w-4 h-4' />,
        };
      case 'mfa_setup':
        return {
          bg: 'bg-[#fffbe6]',
          border: 'border-[#ffe58f]',
          icon: <img src="/icons/alert.png" className='w-4 h-4' />,
        };
      case 'unsigned_proposals':
        return {
          bg: 'bg-[#e6f7ff]',
          border: 'border-[#91d5ff]',
          icon: <img src="/icons/pin.png" className='w-4 h-4' />,
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
    if (notification.type === 'testnet_warning') {
      return (
        <div className="grow shrink basis-0 text-center text-black/90 text-sm font-normal leading-snug flex items-center justify-center gap-2">
          {icon}
          {notification.message}
        </div>
      );
    }

    if (notification.type === 'mfa_setup') {
      return (
        <div className="grow shrink basis-0 text-center text-black/90 text-sm font-normal leading-snug flex items-center justify-center gap-2">
          {icon}
          {notification.message}
          <span 
            className="inline-block cursor-pointer text-blue-600 hover:text-blue-800 underline"
            onClick={handleNotificationClick}
          >
            settings
          </span>
        </div>
      );
    }

    if (notification.type === 'unsigned_proposals') {
      return (
        <div className="text-black/90 text-sm font-normal leading-snug">
          <div className="flex items-center justify-center">
            {icon}
            <div className="flex items-center ml-2">
              {notification.message} {'>'}
              <span
                className="text-blue-600 hover:text-blue-800 ml-1 underline cursor-pointer"
                onClick={handleNotificationClick}
              >
                View Proposal
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="grow shrink basis-0 text-center text-black/90 text-sm font-normal leading-snug flex items-center justify-center gap-2">
        {icon}
        {notification.message}
      </div>
    );
  };

  return (
    <>
      <div className={`w-full py-[9px] ${bg} rounded-sm border ${border} justify-between items-center gap-1.5 inline-flex px-8`}>
        <div className="flex-1 text-center">
          {renderNotificationContent()}
        </div>
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