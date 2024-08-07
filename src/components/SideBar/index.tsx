'use client'

import { RefAttributes, useRef } from "react"

import { cn, log } from "@/lib/utils"
import { House, Coins, NotebookText, Store, LucideProps } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { VastWalletConnect } from "../VastWalletConnect";

const iconComponents = {
  House,
  Store,
};

interface RouteItem {
  name: string;
  href: string;
  icon: keyof typeof iconComponents;
}

const routes: RouteItem[] = [
  {
    name: 'Home',
    href: '/home',
    icon: 'House',
  },
  {
    name: 'Marketplace',
    href: '/marketplace',
    icon: 'Store',
  },
];

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
        'transition transform scale-0 origin-top-left text-sm p-6 rounded-3xl',
      )}
    >
      <div className="flex items-center m-4">
        <img src="/logo-alone.png" className="w-[48px]" alt="logo" />
        <p className="font-extrabold hidden md:block text-primary text-xl">Vast Wallet</p>
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
                      "flex items-center my-4 text-primary",
                      !actived && 'text-muted-foreground',
                    )}>
                    <IconComponent
                      iconName={route.icon}
                      className="mr-2"
                      size={18}
                      strokeWidth={actived ? 3 : 1}
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
