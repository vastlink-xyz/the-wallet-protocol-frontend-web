"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { setUserLocale } from "@/services/locale"
import { Locale } from "@/types/locale"

export function LanguageSwitch() {
  const handleChange = (newLocale: Locale) => {
    setUserLocale(newLocale)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-primary cursor-pointer mx-4">
          <Languages size={18} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-card">
        <DropdownMenuItem onClick={() => handleChange('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange('zh')}>
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
