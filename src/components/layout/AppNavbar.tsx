'use client'

import { useRouter, usePathname } from 'next/navigation'
import { AlertTriangleIcon, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { shouldHideNavbar } from '@/constants/routes'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'

export default function AppNavbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    // Check if user is logged in
    const authMethod = getAuthMethodFromStorage()
    setIsLoggedIn(!!authMethod)
  }, [pathname]) // Re-check when pathname changes
  
  const handleLogout = () => {
    localStorage.clear()
    router.push('/')
  }

  // Don't show navbar on public routes
  if (shouldHideNavbar(pathname)) {
    return null
  }
  
  return (
    <>
      <nav className="bg-[#181818] shadow-sm py-1 px-4 h-13 w-full fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex justify-between items-center">
          <Link href="/assets" className="font-medium text-xl">
            <img src="/vastbase.svg" className='h-13' />
          </Link>

          <p className={cn(
            'text-white',
            'text-xs tablet:text-base',
            'flex items-center gap-2'
          )}>
            <AlertTriangleIcon className={cn(
              'w-4 h-4 text-amber-300',
              'tablet:w-5 h-5'
            )} />
            <span>All assets here are on testnets only</span>
          </p>

          <div className='flex items-center gap-2'>
            <MobileMenu />

            {isLoggedIn ? (
              <Tooltip>
                <TooltipTrigger asChild className='hidden tablet:block'>
                  <LogOut onClick={handleLogout} className="w-4 h-4 text-white cursor-pointer rounded-md" />
                </TooltipTrigger>
                <TooltipContent>
                  Logout
                </TooltipContent>
              </Tooltip>
            ) : null}
          </div>
        </div>
      </nav>
      {/* Spacer div to push content down */}
      <div className="h-13"></div>
    </>
  )
} 