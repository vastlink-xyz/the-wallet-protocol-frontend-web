import { PersonalWalletSettings } from '@/app/assets/components/Personal/WalletSettings';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useNotifications } from '@/hooks/useNotifications';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export function NotificationMenu({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const { securityNotifications, proposalNotifications } = useNotifications()
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);

  const hasUnread = useMemo(() => {
    return securityNotifications.length > 0 || proposalNotifications.length > 0;
  }, [securityNotifications, proposalNotifications])

  return (
    <>
      <HoverCard>
        <HoverCardTrigger>
          <Image
            className={cn('cursor-pointer', className)}
            src={hasUnread ? '/icons/bell-red-dot.svg' : '/icons/bell.svg'}
            alt="bell"
            width={30}
            height={24}
          />
        </HoverCardTrigger>
        <HoverCardContent className="p-0 min-w-[362px] max-h-[525px] overflow-y-auto">
          <div className="relative">
            {/* Header */}
            <div className="sticky top-0 z-10 h-10 px-4 text-sm font-semibold content-center bg-popover">
              Notifications
            </div>

            {/* Security */}
            <div className={cn(
              'h-10 px-4 bg-notification-header text-sm font-semibold content-center',
              securityNotifications.length === 0 && 'hidden'
            )}>
              Security setting
            </div>
            {securityNotifications.map((securityNotification, index) => (
              <div key={`security-${index}`} className="relative">
                <div className="absolute w-1 h-full bg-notification-accent" />
                <div
                  className={cn(
                    'px-4 pt-4 grid grid-cols-[24px_1fr] items-center',
                    index === securityNotifications.length - 1 ? 'pb-4' : null
                  )}
                >
                  <Image
                    className="w-4 h-4"
                    src="/icons/exclamation-2.svg"
                    alt="exclamation"
                    width={14}
                    height={14}
                  />
                  <div className="flex flex-row gap-2 items-center">
                    <span className="font-semibold">{securityNotification.title}</span>
                    <span className="px-2 py-0.5 border border-notification-accent rounded-sm text-xs text-notification-accent">
                      Important
                    </span>
                  </div>
                  <p className="col-start-2 text-sm">
                    {securityNotification.type === 'mfa_setup' ? (
                      <>
                        {securityNotification.message}
                        <span onClick={() => setShowSettingsDialog(true)} className='ml-2 font-semibold cursor-pointer'>
                          set up daily withdrawal limits and MFA insettings
                        </span>
                      </>
                    ) : securityNotification.message}
                  </p>
                </div>
              </div>
            ))}

            {/* Proposals */}
            <div className={cn(
              "h-10 px-4 bg-notification-header text-sm font-semibold content-center",
              proposalNotifications.length === 0 && 'hidden',
            )}>
              Proposals
            </div>
            {proposalNotifications.map((proposalNotification, index) => (
              <div
                key={`proposal-${index}`}
                className={cn(
                  'px-4 pt-4 grid grid-cols-[24px_1fr] items-center',
                  index === proposalNotifications.length - 1 ? 'pb-4' : null
                )}
              >
                <Image
                  className="w-4 h-4"
                  src="/icons/exclamation-1.svg"
                  alt="exclamation"
                  width={14}
                  height={14}
                />
                <span className="font-semibold">{proposalNotification.title}</span>
                <p className="col-start-2 text-sm line-clamp-2">{proposalNotification.message}</p>
                <div className="w-full h-10 col-span-2 flex flex-row justify-end">
                  <Link href={`/proposals?proposalId=${proposalNotification.data?.id}`} target="_blank" className="font-semibold">
                    Review →
                  </Link>
                </div>
              </div>
            ))}

            {/* Empty state */}
            {securityNotifications.length === 0 && proposalNotifications.length === 0 && (
              <div className="px-4 py-8 text-center text-gray-500">
                <p className="text-sm">No new notifications</p>
              </div>
            )}

            {/* View all */}
            {
              proposalNotifications.length > 0 && (
                <div className="w-full mb-[18px] *:col-span-2 flex flex-row justify-center items-center">
                  <Link href="/proposals" className="font-semibold underline">
                    View all
                  </Link>
                </div>
              )
            }
          </div>
        </HoverCardContent>
      </HoverCard>

      {/* Settings Dialog for MFA notifications */}
      <PersonalWalletSettings 
        isOpen={showSettingsDialog}
        onClose={() => setShowSettingsDialog(false)}
      />
    </>
  );
}
