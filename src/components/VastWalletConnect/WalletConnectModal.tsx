import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { PairContextType, useWalletConnectPair } from "@/providers/WalletConnectPairProvider";
import { cn, log } from "@/lib/utils";

const tip = `Clipboard access denied. To use this feature, please click the lock icon to the left of the address bar, find the 'Clipboard' option, set it to 'Allow', then refresh the page.`

export function WalletConnectModal({
  onPair,
}: {
  onPair: (uri: string) => void;
}) {
  const [uri, setUri] = useState('')
  const [clipboardErrorTip, setClipboardErrorTip] = useState('')
  const {
    isModalOpen,
    dappInfo,
    setIsModalOpen,
    displayUriInput,
  } = useWalletConnectPair() as PairContextType
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
      setClipboardErrorTip(tip)
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
            Connect Account
          </DialogTitle>
          <DialogDescription>

          </DialogDescription>
        </DialogHeader>

        <p className="mb-4">
          To pair your wallet with DApp using WalletConnect, please follow these steps:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Visit the Dapp website</li>
          <li>Look for a &quot;Connect Wallet&quot; or similar option</li>
          <li>Choose &quot;WalletConnect&quot; as the connection method</li>
          <li>Copy the provided WalletConnect URI</li>
          {
            displayUriInput ? (
              <li>Paste the URI in the input field below</li>
            ) : (
              <li>Return to this page - the URI will be automatically detected and processed</li>
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
              Go to Dapps
            </span>
          )
        }


        {
          displayUriInput && (
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                onChange={(e) => setUri(e.target.value)}
                placeholder="Enter URI"
                className="focus-visible:ring-black"
              />
              <Button
                type="button"
                onClick={() => onPair(uri)}
              >
                Pair
              </Button>
            </div>
          )
        }

      </DialogContent>
    </Dialog>
  )
}
