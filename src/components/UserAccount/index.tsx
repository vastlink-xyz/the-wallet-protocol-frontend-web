'use client'

import { log, auth, cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useUserSkin } from "@/providers/UserSkinProvider"
import { InitialNameLogo } from "../InitialNameLogo"

export function Account() {
  const [displayName, setDisplayName] = useState('')
  const { customLogo, customName } = useUserSkin()

  useEffect(() => {
    const name = auth.all().desUsername?.userDisplayName
    setDisplayName(name)
  }, [])

  return (
    <div className="flex items-center">
      <p className="mr-4 text-foreground">{displayName}</p>
      
      {
        customLogo ? (
          <img
            src={ customLogo }
            alt="Loading"
            className={cn(
              'w-8 h-8',
              'rounded-full'
            )}
          />
        ) : (
          <InitialNameLogo />
        )
      }
    </div>
  )
}
