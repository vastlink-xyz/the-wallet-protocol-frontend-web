import { useState, useEffect } from "react"
import { Address } from 'viem'

import { MoveDownLeft, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { QRCodeSVG } from 'qrcode.react';
import { CopyClipboardAddress } from "@/components/CopyClipboardAddress"
import { auth, cn } from "@/lib/utils"
import { Modal } from "@/components/Modal"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import ReactDOM from "react-dom"

export function ReceiveModal({
  address,
  open,
  setOpen,
  onClose,
}: {
  address: Address;
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: (open: boolean) => void;
}) {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')

  useEffect(() => {
    const { username } = auth.all()
    const email = username
    setEmail(email)
  }, [])

  const modalContent = open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-['Roboto']">
      {/* background */}
      <div className="fixed inset-0 bg-[#1f2533]/40"></div>

      {/* modal */}
      <div className={cn(
        "relative z-50 w-[372px]",
      )}>
        <div className="bg-background text-primary rounded-[6px] w-full">
          <header className="flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]">
            <p className="text-black text-lg font-medium font-['Roboto'] leading-normal">Reveive</p>
            <button
              onClick={() => onClose(false)}
              className="text-[#929292] hover:text-[#929292]/80"
            >
              <X />
            </button>
          </header>

          <div className="p-6 border-b border-[#EBEBEB]">

            <Tabs defaultValue="crypto" className="w-full text-center">
              <TabsList className="w-[226px] border border-black rounded-full bg-white">
                <TabsTrigger
                  value="crypto"
                  className="w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full"
                >
                  {t('/dashboard.[token].receiveModal.Crypto')}
                </TabsTrigger>
                <TabsTrigger
                  value="email"
                  className="w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full"
                >
                  {t('/dashboard.[token].receiveModal.Email')}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="crypto">
                <div className="flex items-center justify-center mx-auto mt-6 mb-2">
                  <CopyClipboardAddress address={address} iconSize={14} />
                </div>

                <div className="w-[216px] mx-auto p-[10px]">
                  <QRCodeSVG
                    value={address}
                    size={320}
                    level="H"
                    fgColor="#000"
                    bgColor="#fff"
                    imageSettings={{
                      src: "/static/imgs/logos/vastlink.png",
                      height: 60,
                      width: 60,
                      excavate: true
                    }}
                    style={{ width: '196px', height: '196px' }}
                  />
                </div>
              </TabsContent>

              <TabsContent value="email">
                <div className="flex items-center justify-center mx-auto mt-6 mb-2">
                  <CopyClipboardAddress address={email as any} iconSize={14} />
                </div>

                <div className="w-[216px] mx-auto p-[10px]">
                  <QRCodeSVG
                    value={email}
                    size={320}
                    level="H"
                    fgColor="#000"
                    bgColor="#fff"
                    imageSettings={{
                      src: "/static/imgs/logos/vastlink.png",
                      height: 60,
                      width: 60,
                      excavate: true
                    }}
                    style={{ width: '196px', height: '196px' }}
                  />
                </div>
              </TabsContent>

            </Tabs>
          </div>

          <footer className="flex justify-end items-center gap-2 px-5 py-[14px]">
            {/* <div className="text-black text-sm font-medium font-['Roboto'] leading-none">Asset balance: </div> */}
            <Button
              onClick={() => onClose(false)}
            >
              Share QR code
            </Button>
          </footer>
        </div>
      </div>
    </div>
  ) : null;

  if (typeof window !== 'undefined') {
    return ReactDOM.createPortal(
      modalContent,
      document.body
    );
  }
}
