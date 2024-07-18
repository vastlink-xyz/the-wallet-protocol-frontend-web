'use client'

import { storageAddress } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function Account() {
  const [address, setAddress] = useState('')

  useEffect(() => {
    const addr = storageAddress.getData()
    setAddress(addr)
  }, [])

  return (
    <div className="flex items-center">
      <p className="overflow-hidden text-ellipsis whitespace-nowrap w-[160px] mr-2">{address}</p>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt='avatar' />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
    </div>
  )
}
