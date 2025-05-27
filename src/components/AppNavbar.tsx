'use client'

import { useRouter, usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { clearAuthMethodFromStorage } from '@/lib/storage/authmethod'
import { useEffect, useState } from 'react'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'
import Image from 'next/image'

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

  // Don't show navbar on login page
  if (pathname === '/') {
    return null
  }
  
  return (
    <nav className="bg-white shadow-sm py-2 px-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/assets/personal" className="font-medium text-xl">
          <Image src="/Vastbase_logo.svg" alt="Vastbase" width={64} height={64} />
        </Link>
        
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        )}
      </div>
    </nav>
  )
} 