'use client'

import { useState } from "react"

export function useThemeLogoPath() {
  const [logoPath, setLogoPath] = useState('/imgs/logos/logo.svg')

  return {
    logoPath,
  }
}
