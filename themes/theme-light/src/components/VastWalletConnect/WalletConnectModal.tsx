import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn, log } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export function WalletConnectModal({
  onPair,
  isModalOpen,
  dappInfo,
  setIsModalOpen,
  displayUriInput,
}: {
  isModalOpen: boolean;
  dappInfo: { name: string; url: string };
  setIsModalOpen: (isopen: boolean) => void;
  displayUriInput: boolean;
  onPair: (uri: string) => void;
}) {
  const { t } = useTranslation()
  const [uri, setUri] = useState('')
  const [clipboardErrorTip, setClipboardErrorTip] = useState('')
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [])

  const startClipboardListener = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        log('clipboard', clipboardText)
        if (clipboardText.startsWith('wc:')) {
          // Detected WalletConnect uri, stop listening and connect
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          log('exec on pair')
          onPair(clipboardText);
        }
      } catch (error) {
        console.error('Failed to read clipboard:', error);
      }
    }, 1000);
  }

  const handleOpenDapp = async () => {
    try {
      // Checking for clipboard permission
      const clipboardText = await navigator.clipboard.readText();
      log('read', clipboardText)

      setTimeout(async () => {
        // Clear clipboard to avoid pairing with old URI from previous sessions
        await navigator.clipboard.writeText('');
        log('Clipboard cleared');
    
        startClipboardListener();
        window.open(dappInfo.url, '_blank')
      }, 500)

    } catch(err) {
      log('err', err)
      setClipboardErrorTip(t('vastWalletConnect.pairModal.clipboardError'))
    }
  }

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(opened) => setIsModalOpen(opened)}
    >
      <DialogContent
        className="sm:max-w-[500px] text-primary"
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>
            {t('vastWalletConnect.pairModal.title')}
          </DialogTitle>
          <DialogDescription>

          </DialogDescription>
        </DialogHeader>

        <p className="mb-4">
          {t('vastWalletConnect.pairModal.instructions')}
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>{t('vastWalletConnect.pairModal.steps.1')}</li>
          <li>{t('vastWalletConnect.pairModal.steps.2')}</li>
          <li>{t('vastWalletConnect.pairModal.steps.3')}</li>
          <li>{t('vastWalletConnect.pairModal.steps.4')}</li>
          {
            displayUriInput ? (
              <li>{t('vastWalletConnect.pairModal.steps.5a')}</li>
            ) : (
              <li>{t('vastWalletConnect.pairModal.steps.5b')}</li>
            )
          }
        </ol>

        {
          clipboardErrorTip ? (
            <div className="text-destructive-foreground bg-destructive p-2 rounded">
              { clipboardErrorTip }
            </div>
          ) : (
            null
          )
        }

        {
          !displayUriInput && (
            <span
              className={cn(
                "text-blue-600 hover:text-blue-800 mb-4 cursor-pointer inline-block",
                clipboardErrorTip && 'cursor-not-allowed'
              )}
              onClick={() => handleOpenDapp()}
            >
              {t('vastWalletConnect.pairModal.goToDapp')}
            </span>
          )
        }

        {
          displayUriInput && (
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                onChange={(e) => setUri(e.target.value)}
                placeholder={t('vastWalletConnect.pairModal.enterUri')}
                className="focus-visible:ring-black"
              />
              <Button
                type="button"
                onClick={() => onPair(uri)}
              >
                {t('vastWalletConnect.pairModal.pair')}
              </Button>
            </div>
          )
        }

      </DialogContent>
    </Dialog>
  )
}
