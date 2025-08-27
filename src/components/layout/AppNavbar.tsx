'use client'

import { useRouter, usePathname } from 'next/navigation'
import { AlertTriangleIcon } from 'lucide-react'
import Link from 'next/link'
import { shouldHideNavbar } from '@/constants/routes'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'
import { NotificationMenu } from '../NotificationMenu'
import {useTranslations} from 'next-intl';
import LocaleSwitcher from '../LocaleSwitcher'

export default function AppNavbar() {
  const t = useTranslations('AppNavbar');

  const pathname = usePathname()

  // Don't show navbar on public routes
  if (shouldHideNavbar(pathname)) {
    return null
  }

  return (
    <>
      <nav className="bg-[#181818] shadow-sm py-0 px-4 h-13 w-full fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex justify-between items-center">
          <Link href="/assets" className="font-medium text-xl">
            <img src="/vastbase.svg" className='h-13' />
          </Link>

          {
            process.env.NEXT_PUBLIC_ENV?.toLowerCase() !== 'production' && 
            (
              <p className={cn(
                'text-white',
                'text-xs tablet:text-base',
                'flex items-center gap-2'
              )}>
                <AlertTriangleIcon className={cn(
                  'w-4 h-4 text-amber-300',
                  'tablet:w-5 h-5'
                )} />
                <span>{t('testnets')}</span>
              </p>
            )
          }

          <div className='flex items-center gap-2'>
            <LocaleSwitcher />

            <MobileMenu />

            <NotificationMenu className='hidden tablet:block' />
          </div>
        </div>
      </nav>
      {/* Spacer div to push content down */}
      <div className="h-13"></div>
    </>
  )
} 