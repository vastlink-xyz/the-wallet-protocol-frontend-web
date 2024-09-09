'use client'

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function BackArrow({
  pathname='/home'
}: {
  pathname?: string;
}) {
  const router = useRouter()

  return (
    <div
      className="text-brand-foreground p-2 mr-4 hover:scale-105 hover:text-brand-foreground/80 cursor-pointer"
      onClick={() => {
        router.push(pathname)
      }}
    >
      <ArrowLeft />
    </div>
  )
}
