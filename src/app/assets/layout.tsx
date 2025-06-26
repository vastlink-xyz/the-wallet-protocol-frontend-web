'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { useEffect } from 'react'
import { User, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AssetsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { verifyAuthOrRedirect } = useAuthExpiration()

  useEffect(() => {
    verifyAuthOrRedirect();
  }, [])

  return (
    <div className={cn(
      'max-w-[650px]',
      "mx-auto py-8 px-4",
    )}>
      <div className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-6">
        <Link
          href="/assets/personal"
          className={`w-full text-center rounded-lg py-2.5 text-sm font-medium leading-5 ${
            pathname === '/assets/personal'
              ? 'bg-white shadow text-black'
              : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-700'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <User className="w-4 h-4" />
            Personal Wallet
          </div>
        </Link>
        <Link
          href="/assets/team"
          className={`w-full text-center rounded-lg py-2.5 text-sm font-medium leading-5 ${
            pathname === '/assets/team'
              ? 'bg-white shadow text-black'
              : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-700'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Users className="w-4 h-4" />
            Team Wallet(s)
          </div>
        </Link>
      </div>
      
      {/* Child Route Content */}
      {children}
    </div>
  )
} 