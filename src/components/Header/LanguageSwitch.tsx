"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"

export function LanguageSwitch() {
  const handleChange = () => {

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-primary cursor-pointer mx-4">
          <Languages size={18} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChange()}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange()}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
