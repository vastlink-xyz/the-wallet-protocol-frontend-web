"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { usePathname } from "next/navigation"

export const forcedLightThemeRoutes = [
  '/',
  '/verify-registration',
  '/verify-transaction',
  '/invite/transfer',
  '/invite/register',
]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const {} = useTheme()
  const pathname = usePathname()
  
  return <NextThemesProvider {...props} forcedTheme={forcedLightThemeRoutes.includes(pathname) ? 'light' : undefined}>
    {children}
  </NextThemesProvider>
}

export const ForcedLightThemeComponent = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider forcedTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  )
}
