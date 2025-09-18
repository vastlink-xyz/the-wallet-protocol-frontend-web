'use client';

import { useTransition, useEffect } from 'react';

import { Locale, locales } from '@/i18n/config';
import { setUserLocale } from '@/services/localeService';
import { useLocale, useTranslations } from 'next-intl';

import { useRouter, useSearchParams } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CheckIcon, GlobeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LocaleSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'lg';
}

export default function LocaleSwitcher({ className, size }: LocaleSwitcherProps) {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const language = searchParams.get('language');

  useEffect(() => {  
    if (language) setUserLocale(language as Locale);
  }, []);

  function handleValueChange(value: string) {
    startTransition(() => {
      setUserLocale(value as Locale);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={cn("flex flex-row p-2 gap-2 items-center cursor-pointer text-white", className)}>
          {/* {size === "lg" ? t(locale) : (<GlobeIcon className="w-5 h-5" />)} */}
          <GlobeIcon className="w-5 h-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          {locales.map((v) => (
            <DropdownMenuItem
              key={v}
              onClick={() => handleValueChange(v)}
              disabled={isPending}
            >
              {t(v)}
              {locale === v && <CheckIcon className="w-4 h-4 ml-auto" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
