import { MessageProposal } from '@/app/api/multisig/storage';
import { generateSettingsChangeDescriptions } from '@/app/wallet/[walletId]/details/proposals/utils/settingsDescriptionUtils';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { useNotifications } from '@/hooks/useNotifications';
import { cn } from '@/lib/utils';
import { PersonalWalletSettingsContext } from '@/providers/PersonalWalletSettingsProvider';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useMemo, useState } from 'react';

function generateSettingsMessage(
  t: (key: string, args?: { [key: string]: any }) => string,
  proposal: MessageProposal & { walletName: string },
) {
  if (proposal.type === 'transaction') {
    if (proposal.transactionData?.value && proposal.transactionData?.tokenType) {
      return t('proposal_transaction_message', {
        value: proposal.transactionData.value,
        symbol: proposal.transactionData.tokenType,
      });
    }
  }

  if (proposal.type === 'walletSettings') {
    if (proposal.settingsData && proposal.settingsData.originalState) {
      if (proposal.settingsData?.changeDescription) {
        return proposal.settingsData.changeDescription;
      }

      const changeResult = generateSettingsChangeDescriptions(
        proposal.settingsData,
        proposal.settingsData?.originalState
      );

      const descriptions: string[] = [];

      if (changeResult.changes.name) {
        descriptions.push(
          t('proposal_change_name'),
        );
      }

      if (changeResult.changes.threshold) {
        descriptions.push(
          t('proposal_change_threshold'),
        );
      }

      if (changeResult.changes.signers) {
        if (changeResult.changes.signers.added?.length > 0) {
          descriptions.push(
            t('proposal_add_signer', {
              count: 3,//changeResult.changes.signers.added.length,
            }),
          );
        }
        if (changeResult.changes.signers.removed?.length > 0) {
          descriptions.push(
            t('proposal_remove_signer', {
              count: changeResult.changes.signers.removed.length,
            }),
          );
        }
      }

      if (changeResult.changes.mfaSettings && changeResult.changes.mfaSettings.dailyLimits) {
        const items = Object.entries<any>(changeResult.changes.mfaSettings.dailyLimits);
        if (items.length > 0) {
          descriptions.push(
            t('proposal_daily_limits'),
          );
        }
      }

      if (descriptions.length > 0) {
        return descriptions.join(', ');
      }
    }

    if (proposal.settingsData?.changeDescription) {
      return proposal.settingsData.changeDescription;
    }
  }

  return t('proposal_message');
}

export function NotificationMenu({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const t = useTranslations('NotificationMenu');

  const { showPersonalWalletSettings } = useContext(PersonalWalletSettingsContext);

  const { securityNotifications, proposalNotifications } = useNotifications();

  const [showPopup, setShowPopup] = useState(false);

  const hasUnread = useMemo(() => {
    return securityNotifications.length > 0 || proposalNotifications.length > 0;
  }, [securityNotifications, proposalNotifications]);

  return (
    <HoverCard open={showPopup} onOpenChange={setShowPopup} openDelay={50} closeDelay={100}>
      <HoverCardTrigger>
        <Image
          className={cn('cursor-pointer', className)}
          src={hasUnread ? '/icons/bell-red-dot.svg' : '/icons/bell.svg'}
          alt="bell"
          width={30}
          height={24}
          onClick={() => setShowPopup(true)}
        />
      </HoverCardTrigger>
      <HoverCardContent className="p-0 min-w-[362px] max-h-[525px] overflow-y-auto">
        <div className="relative">
          {/* Header */}
          <div className="sticky top-0 z-10 h-10 px-4 text-sm font-semibold content-center bg-popover">
            {t('title')}
          </div>

          {/* Security */}
          <div className={cn(
            'h-10 px-4 bg-notification-header text-sm font-semibold content-center',
            securityNotifications.length === 0 && 'hidden'
          )}>
            {t('security_setting')}
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
                  <span className="font-semibold">
                    {securityNotification.type === 'mfa_setup' ? t('mfa_setup_title') : securityNotification.title}
                  </span>
                  <span className="px-2 py-0.5 border border-notification-accent rounded-sm text-xs text-notification-accent">
                    {t('important')}
                  </span>
                </div>
                <p className="col-start-2 text-sm">
                  {securityNotification.type === 'mfa_setup' ? t.rich(
                    'mfa_setup_message',
                    {
                      link: (children) => (
                        <span onClick={() => showPersonalWalletSettings()} className='ml-1 font-semibold cursor-pointer text-gray-700 hover:text-gray-900 underline'>
                          {children}
                        </span>
                      )
                    }
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
            {t('proposals')}
          </div>
          {proposalNotifications.map(({ data }, index) => {
            const proposal = data as MessageProposal & { walletName: string };

            const title = proposal.type === 'transaction'
              ? t('proposal_transaction_title', { walletName: proposal.walletName })
              : t('proposal_setting_title', { walletName: proposal.walletName })

            const message = generateSettingsMessage(t, proposal);

            return (
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
                <span className="font-semibold">{title}</span>
                <p className="col-start-2 text-sm line-clamp-2">{message}</p>
                <div className="w-full h-8 col-span-2 flex flex-row justify-end items-center">
                  <Link href={`/proposals?proposalId=${data?.id}`} target="_blank" className="font-semibold">
                    {t('review')}
                  </Link>
                </div>
              </div>
            )})
          }

          {/* Empty state */}
          {securityNotifications.length === 0 && proposalNotifications.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500">
              <p className="text-sm">{t('empty')}</p>
            </div>
          )}

          {/* View all */}
          {hasUnread && (
            <div className="w-full mb-[18px] *:col-span-2 flex flex-row justify-center items-center">
              <Link href="/notification" className="font-semibold underline">
                {t('view_all')}
              </Link>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
