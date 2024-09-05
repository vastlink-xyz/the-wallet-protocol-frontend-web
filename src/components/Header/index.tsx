'use client'

import { Account } from "@/components/UserAccount";
import { auth, cn, customSkinStorage, log } from "@/lib/utils";
import { TokenFactory } from "@/services/TokenService";
import { TokenType } from "@/types/tokens";
import { ArrowLeft, LogOut, Moon, Sun } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LanguageSwitch } from "./LanguageSwitch";
import { useTranslations } from "next-intl";
import { ThemeSwitch } from "./ThemeSwitch";
import { BackArrow } from "../BackArrow";

export function Header() {
  const pathname = usePathname()
  const params = useParams()
  const router = useRouter()
  const t = useTranslations('header')

  const titleMapper: Record<string, string> = {
    '/home': t('overview'),
    '/marketplace': t('marketplace'),
    '/marketplace/kyb-flow': 'KYB Flow',
    '/marketplace/multisig-setting': 'Multisig Setting',
  };

  const title = () => {
    if (pathname.startsWith('/home/')) {
      if (params.token) {
        const tokenType = (params.token as string).toUpperCase()
        const token = TokenFactory.getInstance().createToken(tokenType as TokenType).symbol
        return <div className="flex items-center">
          <BackArrow />
          <span>{token}</span>
        </div>
      } else if (pathname === '/home/transfer-confirmation') {
        return <div className="flex items-center">
          <BackArrow />
        </div>
      }
    } else if (pathname.startsWith('/marketplace/')) {
      return <div className="flex items-center">
        <BackArrow pathname={'/marketplace'} />
        <span>{titleMapper[pathname]}</span>
      </div>
    } else {
      return <div>
        {titleMapper[pathname]}
      </div>
    }
  }

  const handleSignout = () => {
    auth.clearAllAuthData()
    customSkinStorage.remove()
    router.push('/')
  }

  return <header className={cn(
    "px-2 md:px-6 md:py-2 w-full",
    "md:flex md:items-center md:justify-between md:flex-row-reverse",
  )}>
    <div className="flex items-center justify-end">
      <LanguageSwitch />

      <div className="mr-4">
        <ThemeSwitch />
      </div>


      <Account />

      <div
        className="ml-4 text-primary cursor-pointer"
        title="sign out"
        onClick={() => handleSignout()}
      >
        <LogOut size={20} />
      </div>
    </div>

    <div className="text-2xl font-extrabold text-card-foreground mt-8 mx-4 md:mx-0 md:mt-0">
      {
        title()
      }
    </div>
  </header>
}
