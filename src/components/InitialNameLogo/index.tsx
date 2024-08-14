'use client'

import { auth, cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function InitialNameLogo({
  size=32,
  className='',
}: {
  size?: number;
  className?: string;
}) {
  const [letter, setLetter] = useState('')

  useEffect(() => {
    const {
      desUsername,
    } = auth.all()
    if (desUsername) {
      const letter = desUsername.username.length > 0 ? desUsername.username[0] : ''
      setLetter(letter)
    }
  }, [])

  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground rounded-full flex items-center justify-center',
        `w-[${size}px] h-[${size}px]`,
        className,
      )}
    >
      <div className={cn(
        // 'flex items-center justify-center',
      )}>
        {letter}
      </div>
    </div>
  )
}
