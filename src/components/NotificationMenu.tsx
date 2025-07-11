import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function NotificationMenu({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const hasUnread = true;

  const securityMessages = [
    {
      title: 'Set MFA',
      text: `To make your wallets more secure, we highly recommend you to <a class="font-semibold" href="#">set up daily withdrawal limits and MFA insettings</a>`,
    },
    {
      title: 'Set MFA',
      text: `To make your wallets more secure, we highly recommend you to <a class="font-semibold" href="#">set up daily withdrawal limits and MFA insettings</a>`,
    },
    {
      title: 'Set MFA',
      text: `To make your wallets more secure, we highly recommend you to <a class="font-semibold" href="#">set up daily withdrawal limits and MFA insettings</a>`,
    },
  ];

  const proposalMessages = [
    {
      title: '{wallet name} – pending proposal',
      text: 'Requires your review and signature',
      link: '#',
    },
    {
      title: '{wallet name} – pending proposal',
      text: 'Requires your review and signature',
      link: '#',
    },
    {
      title: '{wallet name} – pending proposal',
      text: 'Requires your review and signature',
      link: '#',
    },
    {
      title: '{wallet name} – pending proposal',
      text: 'Requires your review and signature',
      link: '#',
    },
    {
      title: '{wallet name} – pending proposal',
      text: 'Requires your review and signature',
      link: '#',
    },
  ];

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Image
          className={className}
          src={hasUnread ? '/icons/bell-red-dot.svg' : '/icons/bell.svg'}
          alt="bell"
          width={30}
          height={24}
        />
      </HoverCardTrigger>
      <HoverCardContent className="p-0 min-w-[362px] h-[525px] overflow-y-auto">
        <div className="relative">
          <div className="sticky top-0 z-10 h-10 px-4 text-sm font-semibold content-center bg-popover">
            Notifications
          </div>
          <div className="h-10 px-4 bg-notification-header text-sm font-semibold content-center">
            Security setting
          </div>
          {securityMessages.map((message, index) => (
            <div key={`security-${index}`} className="relative">
              <div className="absolute w-1 h-full bg-notification-accent" />
              <div
                className={cn(
                  'px-4 pt-4 grid grid-cols-[24px_1fr] items-center',
                  index === securityMessages.length - 1 ? 'pb-4' : null
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
                  <span className="font-semibold">{message.title}</span>
                  <span className="px-2 py-0.5 border border-notification-accent rounded-sm text-xs text-notification-accent">
                    Important
                  </span>
                </div>
                <p
                  className="col-start-2 text-sm"
                  dangerouslySetInnerHTML={{ __html: message.text }}
                />
              </div>
            </div>
          ))}

          <div className="h-10 px-4 bg-notification-header text-sm font-semibold content-center">
            Proposals
          </div>
          {proposalMessages.map((message, index) => (
            <div
              key={`proposal-${index}`}
              className={cn(
                'px-4 pt-4 grid grid-cols-[24px_1fr] items-center',
                index === proposalMessages.length - 1 ? 'pb-4' : null
              )}
            >
              <Image
                className="w-4 h-4"
                src="/icons/exclamation-1.svg"
                alt="exclamation"
                width={14}
                height={14}
              />
              <span className="font-semibold">{message.title}</span>
              <p className="col-start-2 text-sm">{message.text}</p>
              <div className="w-full h-10 col-span-2 flex flex-row justify-end">
                <Link href="#" className="font-semibold">
                  Review →
                </Link>
              </div>
            </div>
          ))}

          <div className="w-full h-10 *:col-span-2 flex flex-row justify-center items-center">
            <Link href="#" className="font-semibold underline">
              View all
            </Link>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
