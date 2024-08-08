'use client'

import { useState, useEffect, FormEvent, useRef } from "react"
import { Address } from 'viem'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MoveDownLeft, Copy, CopyCheck } from "lucide-react"

import QRCode from 'react-qr-code'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from "react-toastify"
import { CopyClipboardAddress } from "@/components/CopyClipboardAddress"

export function Receive({
  address,
}: {
  address: Address;
}) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  return(
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div
          title="Receive"
          className="bg-brand-foreground hover:bg-brand-foreground/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer">
          <MoveDownLeft color="#fff" onClick={() => setOpen(true)} />
        </div>
      </DialogTrigger>

      <DialogContent className="w-[360px] text-primary">
        <DialogTitle>
          Receive
        </DialogTitle>

        <div className="flex items-center justify-between w-full my-6">
          <CopyClipboardAddress address={address} />
        </div>

        <div className="w-full">
          <QRCode
            fgColor="#ed607b"
            value={address}
            style={{width: '100%'}}
            size={320}
          />
        </div>

      </DialogContent>
    </Dialog>
  );
}
