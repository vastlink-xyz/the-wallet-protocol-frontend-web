'use client'

import { useState } from "react"
import { Address } from 'viem'
import { MoveUpRight } from "lucide-react"
import { TokenType } from "@/types/tokens"
import { SendModal } from "./SendModal"
import { SendButton } from "./SendButton"


export function Send({
  balance,
  address,
  tokenType,
  defaultTo,
  defaultAmount,
  defaultNote,
  onClose,
}: {
  balance: string;
  address: Address;
  tokenType: TokenType;
  defaultTo?: string;
  defaultAmount?: string;
  defaultNote?: string;
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SendButton onClick={() => setOpen(true)} />
      <SendModal
        open={open}
        setOpen={setOpen}
        balance={balance}
        address={address}
        tokenType={tokenType}
        defaultTo={defaultTo}
        defaultAmount={defaultAmount}
        defaultNote={defaultNote}
        onClose={onClose}
      />
    </>
  )
}