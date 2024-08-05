'use client'

import { log, auth } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"

export function Account() {
  const [displayName, setDisplayName] = useState('')

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const name = auth.all().desUsername?.userDisplayName
    setDisplayName(name)
  }, [])

  return (
    <div className="flex items-center">
      <p className="mr-4 text-foreground">{displayName}</p>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt='avatar' />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>

      {/* <Button onClick={() => {
        if (theme === 'light') {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      }}>switch theme</Button> */}
    </div>
  )
}
