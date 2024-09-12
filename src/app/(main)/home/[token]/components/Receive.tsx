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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import QRCode from 'react-qr-code'
import { CopyClipboardAddress } from "@/components/CopyClipboardAddress"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"
import { auth } from "@/lib/utils"

export function Receive({
  address,
}: {
  address: Address;
}) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const t = useTranslations('/home.[token].receiveModal')

  useEffect(() => {
    if (open) {
      const { username } = auth.all()
      const email = username
      setEmail(email)
    }
  }, [open])

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
          {t('title')}
        </DialogTitle>

        <Tabs defaultValue="crypto" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="crypto" className="w-full">{t('Crypto')}</TabsTrigger>
            <TabsTrigger value="email" className="w-full">{t('Email')}</TabsTrigger>
          </TabsList>

          <TabsContent value="crypto">
            <div className="flex items-center justify-between w-full mt-6 mb-2">
              <CopyClipboardAddress address={address} />
            </div>

            <div className="w-full">
              <QRCode
                fgColor="#7bcdc6"
                // bgColor={theme === 'light' ? '#fff' : '#000'}
                bgColor="transparent"
                value={address}
                style={{width: '100%'}}
                size={320}
              />
            </div>
          </TabsContent>

          <TabsContent value="email">
            <div className="flex items-center justify-between w-full my-6">
              <CopyClipboardAddress address={email as any} />
            </div>
            <div className="w-full">
              <QRCode
                fgColor="#7bcdc6"
                // bgColor={theme === 'light' ? '#fff' : '#000'}
                bgColor="transparent"
                value={email}
                style={{width: '100%'}}
                size={320}
              />
            </div>
          </TabsContent>

        </Tabs>


      </DialogContent>
    </Dialog>
  );
}
