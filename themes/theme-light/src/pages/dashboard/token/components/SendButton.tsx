'use client'

import { MoveUpRight } from "lucide-react"

export function SendButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      title="Send"
      className="bg-foreground hover:bg-foreground/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer text-primary-foreground"
      onClick={onClick}
    >
      <MoveUpRight />
    </div>
  )
}
