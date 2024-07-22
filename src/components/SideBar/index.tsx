'use client'

import { useRef } from "react"

import { cn } from "@/lib/utils"
import { House, Coins, NotebookText } from "lucide-react"
import Link from "next/link"

export function SideBar() {
  const menuRef = useRef<HTMLUListElement>(null)

  const toggleSidebar = () => {
    menuRef.current?.classList.toggle('scale-0')
    // menuRef.current?.classList.remove('scale-0')
  }

  return <div className="relative">
    <ul
      ref={menuRef}
      className={cn(
        'absolute top-10 left-10 z-10 shadow-lg',
        'md:w-[200px] md:static md:scale-100 md:shadow-none',
        'transition transform scale-0 origin-top-left text-sm p-6 bg-white',
      )}>
      <li>
        <Link href={'/home'} className="flex items-center my-4">
          <House className="mr-2" size={18} strokeWidth={3} />
          Home
        </Link>
      </li>
      <li>
        <Link href={'/transactions'} className="flex items-center my-4 text-gray-500">
          <NotebookText className="mr-2" size={18} color='gray' />
          Transactions
        </Link>
      </li>
      <li>
        <Link href={'/tokens'} className="flex items-center my-4 text-gray-500">
          <Coins className="mr-2" size={18} color="gray" />
          Tokens
        </Link>
      </li>
    </ul>

    <div className="relative md:hidden p-4 focus:outline-none focus:bg-gray-700" onClick={() => toggleSidebar()}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  </div>
}
