'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useNotifications } from '@/hooks/useNotifications';
import { PersonalWalletSettingsContext } from '@/providers/PersonalWalletSettingsProvider';
import { Suspense, useContext } from 'react';
import { ProposalsList } from './ProposalList';
import { LogoLoading } from '@/components/LogoLoading';

export default function NotificationPage() {
  const router = useRouter();

  const { securityNotifications, proposalNotifications, isLoading } = useNotifications();

  const { showPersonalWalletSettings } = useContext(
    PersonalWalletSettingsContext
  );

  if (isLoading) {
    return <LogoLoading />;
  }

  return (
    <div className="w-full mx-auto p-6 relative min-w-[342px] laptop:w-[808px] desktop:w-[1224px]">
      <div className="flex items-center justify-between mb-[40px]">
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back
        </button>
      </div>

      <div className="w-full mx-auto mb-[40px]">
        <h3 className="text-4xl font-bold mb-5">Notification centre</h3>
        <div className="flex flex-col gap-5">
          {securityNotifications.map((message, index) => (
            <div
              key={`proposal-${index}`}
              className="px-4 pt-4 grid grid-cols-[24px_1fr] items-center bg-notification-background border border-notification-border rounded-lg shadow-xs"
            >
              <Image
                className="w-4 h-4"
                src="/icons/exclamation-2.svg"
                alt="exclamation"
                width={14}
                height={14}
              />
              <span className="font-semibold">{message.title}</span>
              <p className="col-start-2 text-sm">
                {message.type === 'mfa_setup'
                  ? 'To make your wallets more secure, we highly recommend you to set up daily withdrawal limits and MFA insettings.'
                  : message.message}
              </p>
              <div className="w-full h-10 col-span-2 flex flex-row justify-end mt-4">
                <span
                  onClick={() => showPersonalWalletSettings()}
                  className="font-semibold cursor-pointer"
                >
                  {message.title + ' →'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {proposalNotifications.length > 0 && (
        <div className="w-full mx-auto mb-[40px]">
          <h5 className="text-2xl font-bold mb-5">Proposals</h5>
          <Suspense fallback={null}>
            <ProposalsList proposals={proposalNotifications} />
          </Suspense>
        </div>
      )}

      {securityNotifications.length === 0 && proposalNotifications.length === 0 && (
        <div className="w-full mx-auto mb-[40px] text-center text-gray-500">
          <p className="text-sm">No new notifications</p>
        </div>
      )}
    </div>
  );
}
