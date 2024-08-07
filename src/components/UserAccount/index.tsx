'use client'

import { log, auth } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function Account() {
  const [displayName, setDisplayName] = useState('')

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
    </div>
  )
}
