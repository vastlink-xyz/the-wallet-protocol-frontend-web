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
import { auth, customSkinStorage, handleError, log, ThemeColors, updateTheme } from "@/lib/utils"
import { useUserSkin } from "@/providers/UserSkinProvider";
import api from "@/lib/api";

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
    try {
      const res = await api.get(`/marketplace/product/customskin`)
      if (res.data?.success) {
        const skinData = res.data?.skin
        setCustomSkin(skinData.colorTheme)
        // 
        setCustomName(skinData.name)
        setCustomLogo(skinData.logo)
        setCustomColorTheme(skinData.colorTheme)
  
        if (customSkinStorage.getData() === 'true') {
          updateTheme(skinData.colorTheme)
        }
      }
    } catch(err) {
      const errorInfo = handleError(err)
      log('custom skin', errorInfo.message)
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
