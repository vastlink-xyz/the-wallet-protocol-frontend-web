'use server'

import { cookies } from 'next/headers'

export async function getTheme() {
  const cookieStore = await cookies()
  return cookieStore.get('current-theme')?.value || 'theme_light'
}