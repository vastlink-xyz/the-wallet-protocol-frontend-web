'use client'

import { Account } from "@/components/UserAccount";
import { cn, log } from "@/lib/utils";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const titleMapper: Record<string, string> = {
  '/home': 'Overview',
  '/marketplace': 'Marketplace',
};

export function Header() {
  const pathname = usePathname()
  const params = useParams()

  useEffect(() => {
    log('pathname', pathname)
    log('params', params)
  }, [pathname])

  const title = () => {
    if (pathname.startsWith('/home/')) {
      if (params.token) {
        return <div>
          {params.token}
        </div>
      }
    } else {
      return <div>
        {titleMapper[pathname]}
      </div>
    }
  }

  return <header className={cn(
    "px-2 md:px-6 md:py-2 w-full",
    "md:flex md:items-center md:justify-between md:flex-row-reverse",
  )}>
    <div className="flex items-center justify-end">
      <Account />
    </div>

    <div className="text-2xl font-extrabold text-card-foreground mt-4 mx-4 md:mx-0">
      {
        title()
      }
    </div>

  </header>
}
