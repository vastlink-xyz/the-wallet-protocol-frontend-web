'use client'

import { Account } from "@/components/UserAccount";
import { cn, log } from "@/lib/utils";
import { TokenFactory } from "@/services/TokenService";
import { TokenType } from "@/types/tokens";
import { ArrowLeft, SquareArrowLeft } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const titleMapper: Record<string, string> = {
  '/home': 'Overview',
  '/marketplace': 'Marketplace',
};

export function Header() {
  const pathname = usePathname()
  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    log('pathname', pathname)
    log('params', params)
  }, [pathname])

  const title = () => {
    if (pathname.startsWith('/home/')) {
      if (params.token) {
        const tokenType = (params.token as string).toUpperCase()
        const token = TokenFactory.getInstance().createToken(tokenType as TokenType).symbol
        return <div className="flex items-center">
          <div
            className="text-brand-foreground bg-brand p-2 rounded-lg mr-4 hover:scale-110 cursor-pointer"
            onClick={() => {
              router.push('/home')
            }}
          >
            <ArrowLeft />
          </div>
          <span>{token}</span>
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

    <div className="text-2xl font-extrabold text-card-foreground mt-8 mx-4 md:mx-0 md:mt-0">
      {
        title()
      }
    </div>

  </header>
}
