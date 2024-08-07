'use client'

import { Account } from "@/components/UserAccount";
import { log } from "@/lib/utils";
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

  return <header className="flex items-center justify-between px-2 md:px-6 md:py-2 w-full">
    <div className="text-2xl font-extrabold text-card-foreground">
      {
        title()
      }
    </div>

    <div className="flex items-center">
      <Account />
    </div>
  </header>
}
