'use client'

import { useRouter, usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { shouldHideNavbar } from '@/constants/routes'

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

          <p className='text-white'>All assets on this platform are on testnets only</p>
          
          {isLoggedIn ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer rounded-md hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 text-white" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                Logout
              </TooltipContent>
            </Tooltip>
          ) : <span></span>}
        </div>
      </nav>
      {/* Spacer div to push content down */}
      <div className="h-13"></div>
    </>
  )
} 