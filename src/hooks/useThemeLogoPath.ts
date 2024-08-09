'use client'

import { forcedLightThemeRoutes } from "@/providers/ThemeProvider"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function useThemeLogoPath() {
  const [logoPath, setLogoPath] = useState('/logo-alone.png')
  const { theme } = useTheme()
  const pathname = usePathname()
  
  useEffect(() => {
    let t = theme
    if (forcedLightThemeRoutes.includes(pathname)) {
      // login and verify-transaction page always apply light theme
      t = 'light'
    }
    setLogoPath(t === 'dark' ? '/logo-alone-dark.png' : '/logo-alone.png')
  }, [theme])

  return {
    logoPath,
  }
}
