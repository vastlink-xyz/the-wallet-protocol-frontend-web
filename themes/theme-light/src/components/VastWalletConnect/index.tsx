
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { useTranslation } from "react-i18next";
import { useWalletConnect } from "@/providers/WalletConnectProvider";
import { cn } from "@/lib/utils";
import { LogoLoading } from "../LogoLoading";
import { WalletConnectModal } from "./WalletConnectModal";
import { useNavigate } from "react-router-dom";

interface VastWalletConnectProps {
  className?: string;
  buttonClassName?: string;
}

export function WalletConnectButton({ className, buttonClassName }: VastWalletConnectProps) {
  const { t } = useTranslation();
  const { isAuthenticated, isConnected, handleConnect } = useWalletConnect();
  const navigate = useNavigate()

  return (
    <div
      className={cn([
        "h-7 px-4 py-2.5 bg-white rounded-[60px]",
        "justify-center items-center gap-2 flex cursor-pointer",
        !isAuthenticated && 'cursor-default',
        className
      ])}
      onClick={() => {
        if (!isAuthenticated) {
          navigate('/auth')
        } else {
          handleConnect()
        }
      }}
    >
      <div className={cn(
        "text-center text-[#111111] text-sm font-medium leading-none select-none",
        buttonClassName
      )}>
        {isConnected ? t('vastWalletConnect.disconnectSession') : t('vastWalletConnect.connectDApps')}
      </div>
    </div>
  );
}

export function VastWalletConnect() {
  const { t } = useTranslation();
  const {
    connectOpen,
    setConnectOpen,
    sessionProposal,
    handleRejectSession,
    handleApproveSession,
    loading,
    transferOpen,
    setTransferOpen,
    transferDetails,
    handleRejectTransfer,
    handleConfirmTransfer,
    pair,
    isModalOpen,
    dappInfo,
    setIsModalOpen,
    displayUriInput,
  } = useWalletConnect();

  return (
    <div className=''>

      <Dialog
        open={connectOpen}
        onOpenChange={(opened) => setConnectOpen(opened)}
      >
        <DialogContent className="sm:max-w-[425px] text-primary">
          <DialogHeader>
            <DialogTitle>
              {t('vastWalletConnect.connectAccount')}
            </DialogTitle>
            <DialogDescription>
              {sessionProposal?.params.proposer.metadata.name}
            </DialogDescription>
          </DialogHeader>

          <div className='border mx-auto flex items-center justify-between space-x-4 rounded-full px-4 py-2'>
            <img className='w-[14px]' src={sessionProposal?.params.proposer.metadata.icons[0]} alt="" />
            <p>{sessionProposal?.params.proposer.metadata.url}</p>
          </div>

          <DialogFooter>
            <Button onClick={handleRejectSession} variant="outline">
              {t('vastWalletConnect.reject')}
            </Button>
            <Button onClick={handleApproveSession}>
              {loading ? (
                <LogoLoading />
              ) : (
                t('vastWalletConnect.approve')
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={transferOpen}
        onOpenChange={(opened) => setTransferOpen(opened)}
      >
        <DialogContent className="sm:max-w-[425px] text-primary">
          <DialogHeader>
            <DialogTitle>Confirm Transfer</DialogTitle>
            <DialogDescription>
              Please review the transfer details below
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="font-medium">From:</label>
              <p className="text-sm">{transferDetails?.from}</p>
            </div>
            <div>
              <label className="font-medium">To:</label>
              <p className="text-sm">{transferDetails?.to}</p>
            </div>
            <div>
              <label className="font-medium">Amount:</label>
              <p className="text-sm">{transferDetails?.value} ETH</p>
            </div>
            {/* <div>
              <label className="font-medium">Data:</label>
              <p className="text-sm break-all">{transferDetails?.data}</p>
            </div> */}
          </div>

          <DialogFooter>
            <Button onClick={handleRejectTransfer} variant="outline">
              Reject
            </Button>
            <Button onClick={handleConfirmTransfer} disabled={loading}>
              {loading ? (
                <LogoLoading />
              ) : (
                'Confirm'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <WalletConnectModal
        onPair={pair}
        isModalOpen={isModalOpen}
        dappInfo={dappInfo}
        setIsModalOpen={setIsModalOpen}
        displayUriInput={displayUriInput}
      />
    </div>
  )
}
