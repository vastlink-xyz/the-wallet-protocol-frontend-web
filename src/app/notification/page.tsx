'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function NotificationPage() {
  const router = useRouter();

  const securityMessages = [
    {
      title: 'Set MFA',
      text: 'To make your wallets more secure, we highly recommend you to set up daily withdrawal limits and MFA insettings',
      link: {
        text: 'Set MFA →',
        url: '#',
      }
    },
    {
      title: 'Set Google passkey',
      text: 'To make your wallets more secure, we highly recommend you to set up Google passkey',
      link: {
        text: 'Set Google passkey →',
        url: '#',
      }
    },
    {
      title: 'Set PIN',
      text: 'To make your wallets more secure, we highly recommend you to set up PIN.',
      link: {
        text: 'Set pin →',
        url: '#',
      }
    },
  ];

  return (
    <div className="w-full mx-auto p-6 relative min-w-[342px] laptop:w-[808px] desktop:w-[1224px]">
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back
        </button>
      </div>

      <div className="w-full mx-auto mb-[80px] mt-[24px]">
        <h3 className="text-4xl font-bold mb-5">Notification centre</h3>
        <div className="flex flex-col gap-5">
          {securityMessages.map((message, index) => (
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
              <p className="col-start-2 text-sm">{message.text}</p>
              <div className="w-full h-10 col-span-2 flex flex-row justify-end">
                <Link href={message.link.url} className="font-semibold">
                  {message.link.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
