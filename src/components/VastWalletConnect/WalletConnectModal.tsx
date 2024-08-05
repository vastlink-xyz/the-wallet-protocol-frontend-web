import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { PairContextType, useWalletConnectPair } from "@/providers/WalletConnectPairProvider";
import { log } from "@/lib/utils";

export function WalletConnectModal({
  onPair,
}: {
  onPair: (uri: string) => void;
}) {
  const [uri, setUri] = useState('')
  const {
    isModalOpen,
    dappInfo,
    setIsModalOpen,
  } = useWalletConnectPair() as PairContextType

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(opened) => setIsModalOpen(opened)}
    >
      <DialogContent className="sm:max-w-[500px] text-primary">
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
          <li>Visit the {dappInfo.name} website</li>
          <li>Look for a "Connect Wallet" or similar option</li>
          <li>Choose "WalletConnect" as the connection method</li>
          <li>Copy the provided WalletConnect URI</li>
          <li>Paste the URI in the input field below</li>
        </ol>

        <a
          href={dappInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 mb-4 block cursor-pointer"
        >
          Go to {dappInfo.name}
        </a>

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
      </DialogContent>
    </Dialog>
  )
}
