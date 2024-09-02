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
      className="bg-brand-foreground/80 text-brand p-2 rounded-lg mr-4 hover:scale-110 cursor-pointer"
      onClick={() => {
        router.push(pathname)
      }}
    >
      <ArrowLeft />
    </div>
  )
}
