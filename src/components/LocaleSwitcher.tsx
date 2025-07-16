'use client';

import { useTransition } from 'react';

import { Locale, locales } from '@/i18n/config';
import { setUserLocale } from '@/services/localeService';
import { useLocale, useTranslations } from 'next-intl';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckIcon, GlobeIcon } from 'lucide-react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  function handleValueChange(value: string) {
    startTransition(() => {
      setUserLocale(value as Locale);
    });
  }

    return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="p-2 cursor-pointer">
          <GlobeIcon className="w-5 h-5 text-white" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          {locales.map((v) => (
            <DropdownMenuItem key={v} onClick={() => handleValueChange(v)} disabled={isPending}>
              {t(v)}
              {locale === v && (<CheckIcon className="w-4 h-4 ml-auto" />)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
