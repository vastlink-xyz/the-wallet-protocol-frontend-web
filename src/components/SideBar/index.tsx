'use client'

import { RefAttributes, useEffect, useRef, useState } from "react"

import { cn, log } from "@/lib/utils"
import { House, Coins, NotebookText, Store, LucideProps } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { VastWalletConnect } from "../VastWalletConnect";
import { useTheme } from "next-themes"
import { useThemeLogoPath } from "@/hooks/useThemeLogoPath"
import { useTranslations } from "next-intl"
import { useUserSkin } from "@/providers/UserSkinProvider"

const iconComponents = {
  House,
  Store,
};

interface RouteItem {
  name: string;
  href: string;
  icon: keyof typeof iconComponents;
}


interface IconComponentProps extends LucideProps {
  iconName: keyof typeof iconComponents;
}

const IconComponent: React.FC<IconComponentProps> = ({ iconName, ...props }) => {
  const Icon = iconComponents[iconName];
  return Icon ? <Icon {...props} /> : null;
};

export function SideBar() {
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { theme } = useTheme()
  const { logoPath } = useThemeLogoPath()
  const { customLogo, customName } = useUserSkin()
  const t = useTranslations('sidebar')
  
  const routes: RouteItem[] = [
    {
      name: t('home'),
      href: '/home',
      icon: 'House',
    },
    {
      name: t('marketplace'),
      href: '/marketplace',
      icon: 'Store',
    },
  ];

  const toggleSidebar = () => {
    menuRef.current?.classList.toggle('scale-0')
  }

  return <div className="relative w-0 md:w-auto md:h-screen flex flex-grow flex-col">
    <div
      ref={menuRef}
      className={cn(
        'absolute top-10 left-10 z-10 shadow-lg',
        'bg-card',
        'md:w-[240px] md:static md:scale-100 md:shadow-none md:m-4 md:flex-grow',
        'transition transform scale-0 origin-top-left text-sm p-2 rounded-3xl',
      )}
    >
      <div className="flex items-center justify-center m-6">
        <img src={customLogo ? customLogo : logoPath} className="w-[32px] mr-2" alt="logo" />
        <p className="font-extrabold hidden md:block text-primary text-xl">{ customName ? customName : t('title')}</p>
      </div>

      <ul
        className={cn(
          'm-6'
        )}>
          {
            routes.map((route) => {
              const actived = pathname.startsWith(route.href)
              return (
                <li key={route.name}>
                  <Link
                    href={route.href}
                    className={cn(
                      "flex items-center my-2 text-muted-foreground p-4 rounded-xl",
                      actived && 'bg-brand text-brand-foreground',
                      'hover:scale-105'
                    )}>
                    <IconComponent
                      iconName={route.icon}
                      className="mr-2"
                      size={18}
                      strokeWidth={2}
                    />
                    { route.name }
                  </Link>
                </li>
              )
            })
          }
      </ul>

      <div className="">
        <VastWalletConnect />
      </div>
    </div>

    <div className="relative md:hidden p-4 focus:outline-none focus:bg-gray-700" onClick={() => toggleSidebar()}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  </div>
}
