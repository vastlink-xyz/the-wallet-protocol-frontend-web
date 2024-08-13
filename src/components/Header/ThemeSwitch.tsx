"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ArrowLeft, Moon, Palette, Sun, SunMoon } from "lucide-react";
import axios from 'axios'
import { auth, customSkinStorage, log, ThemeColors, updateTheme } from "@/lib/utils"
import { useUserSkin } from "@/providers/UserSkinProvider";

const iconThemeMapper = {
  'light': <Sun />,
  'dark': <Moon />,
  'custom': <Palette />,
}

type ThemeTypes = 'light' | 'dark'

export function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [customSkin, setCustomSkin] = useState<ThemeColors>({})
  const {
    setCustomColorTheme,
    setCustomLogo,
    setCustomName,

    setCurrentTheme,
    currentTheme,
  } = useUserSkin()

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (theme !== 'system') {
      setCurrentTheme(theme as ThemeTypes)
    } else if (systemTheme) {
      setCurrentTheme(systemTheme)
    }
  }, [theme, systemTheme])
  
  const init = async () => {
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/marketplace/product/customskin`, {
        headers: {
          "Content-Type": "application/json",
          "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
          "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
          "X-Passport-Username": `${desUsername.username}`,
        },
      })
      log('user customskin', res.data)
      if (res.data) {
        setCustomSkin(res.data.colorTheme)
        // 
        setCustomName(res.data.name)
        setCustomLogo(res.data.logo)
        setCustomColorTheme(res.data.colorTheme)
  
        if (customSkinStorage.getData() === 'true') {
          updateTheme(res.data.colorTheme)
        }
      }
    } catch(err) {
      const message = (err as any)?.response?.data
      log('custom skin', message)
    }
  }

  const handleChange = (theme: ThemeTypes) => {
    setCurrentTheme(theme)
    setTheme(theme)
  }

  const currentIcon = () => {
    return iconThemeMapper[currentTheme]
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-primary cursor-pointer mx-4">
          {currentIcon()}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-card min-w-[60px]">
        <DropdownMenuItem className="text-center" onClick={() => handleChange('light')}>
          <Sun size={20} />
          <p className="ml-2">Light</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange('dark')}>
          <Moon size={20} />
          <p className="ml-2">Dark</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
