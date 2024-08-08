'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useThemeLogoPath() {
  const [logoPath, setLogoPath] = useState('/logo-alone.png')
  const { theme } = useTheme()
  
  useEffect(() => {
    setLogoPath(theme === 'dark' ? '/logo-alone-dark.png' : '/logo-alone.png')
  }, [theme])

  return {
    logoPath,
  }
}
