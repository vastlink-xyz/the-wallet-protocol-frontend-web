'use client'

import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useRef, useState } from 'react'
import { auth, log, cn } from '@/lib/utils';
import { Core } from '@walletconnect/core'
import { buildApprovedNamespaces, getSdkError } from '@walletconnect/utils'
import { Web3Wallet, Web3WalletTypes } from '@walletconnect/web3wallet'
import { Address, formatEther, hexToBigInt, WalletClient } from 'viem';
import { sepolia } from 'viem/chains';
import { SessionTypes } from '@walletconnect/types';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { toast } from 'react-toastify';
import { useTransaction } from './useTransaction';
import { WalletConnectModal } from './WalletConnectModal';
import { PairContextType, useWalletConnectPair } from '@/providers/WalletConnectPairProvider';
import { LogoLoading } from '../LogoLoading';
import { TokenType } from '@/types/tokens';
import { TransactionType } from '@/types/transaction';

interface VastWalletConnectProps {
  className?: string;
  buttonClassName?: string;
}

export function VastWalletConnect({ className, buttonClassName }: VastWalletConnectProps) {
  const { t } = useTranslation()
  const isAuthenticated = auth.isAuthenticated()

  const [address, setAddress] = useState('');
  const [wallet, setWallet] = useState<WalletClient>();
  const [session, setSession] = useState<SessionTypes.Struct>();
  const [chain] = useState(sepolia);
  const [connectOpen, setConnectOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requestContent, setRequestContent] = useState({ method: "", message: "", topic: "", response: {} });

  const [sessionProposal, setSessionProposal] = useState<Web3WalletTypes.SessionProposal | null>(null);
  const sessionProposalRef = useRef<Web3WalletTypes.SessionProposal | null>(null);

  const [transferOpen, setTransferOpen] = useState(false);
  const [transferDetails, setTransferDetails] = useState<{
    from: string;
    to: string;
    value: string;
    data: string;
    token: TokenType;
  } | null>(null);
   
  const { signTransaction, waitForTransactionExection, tokenTypeByChainId } = useTransaction()
  const {
    setIsModalOpen,
    isConnected,
    setIsConnected,
    web3wallet,
    setWeb3Wallet,
    web3walletRef,
    setDisplayUriInput,
  } = useWalletConnectPair() as PairContextType

  const updateSessionStatus = useCallback(() => {
    const activeSessions = web3walletRef.current?.getActiveSessions();
    if (activeSessions && Object.keys(activeSessions).length > 0) {
      const currentSession = Object.values(activeSessions)[0];
      setSession(currentSession);
      setIsConnected(true);
    } else {
      setIsConnected(false);
      setSession(undefined);
    }
  }, []);

  const onSessionRequest = useCallback(async (event: Web3WalletTypes.SessionRequest) => {
    log('event', event)
    const { topic, params, id } = event;
    const { request, chainId } = params;
    const transactionRequest = request.params[0];

    if (request.method === 'eth_sendTransaction') {
      setTransferDetails({
        from: transactionRequest.from,
        to: transactionRequest.to,
        value: formatEther(hexToBigInt(transactionRequest.value || '')),
        data: transactionRequest.data,
        token: tokenTypeByChainId(chainId),
      });
      setTransferOpen(true);
      setRequestContent({
        message: JSON.stringify(transactionRequest, null, 2),
        method: request.method,
        topic,
        response: { id, jsonrpc: "2.0", result: '' },
      });
    } else if (request.method === 'eth_signTypedData_v4') {
      log('transferrequest', transactionRequest)
    } else {
      log('else')
    }
  }, [wallet]);

  const onSessionProposal = useCallback(async (proposal: Web3WalletTypes.SessionProposal) => {
    log('proposal received', proposal);
    setSessionProposal(proposal);
    sessionProposalRef.current = proposal
    setConnectOpen(true);
    // handleApproveSession()
  }, []);

  const onProposalExpire = (p: any) => {
    log('proposal_expire', p)
    disconnectSession()
  }

  const onSessionDelete = useCallback(() => {
    log('on session delete')
    updateSessionStatus();
  }, [updateSessionStatus]);

  const generateAccount = async () => {
    setAddress(address)
  }

  const init = async () => {
    const core = new Core({ projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID });
    const w3w = await Web3Wallet.init({
      core,
      metadata: { name: 'Vastlink', description: 'Vastlink', url: 'www.walletconnect.com', icons: [] }
    });
    setWeb3Wallet(w3w);
    updateSessionStatus();
  }

  useEffect(() => {
    generateAccount()
    init();
    return () => {
      if (web3wallet) {
        web3wallet.off("session_proposal", onSessionProposal);
        web3wallet.off('proposal_expire', onProposalExpire);
        web3wallet.off("session_request", onSessionRequest);
        web3wallet.off("session_delete", onSessionDelete);
      }
    };
  }, []);

  useEffect(() => {
    if (web3wallet) {
      web3wallet.on("session_proposal", onSessionProposal);
      web3wallet.on('proposal_expire', onProposalExpire);
      web3wallet.on("session_request", onSessionRequest);
      web3wallet.on("session_delete", onSessionDelete);
      updateSessionStatus()
    }
  }, [web3wallet, onSessionRequest, onSessionDelete, updateSessionStatus]);

  const pair = async (uri: string) => {
    log("pairing with uri", uri);
    if (uri) {
      try {
        await web3wallet?.pair({ uri });
        setConnectOpen(true);
      } catch (e) {
        console.error("Error pairing with uri", e);
        toast.error((e as any).message)
      }
    }
  };

  const handleApproveSession = useCallback(async () => {
    const { address } = auth.all()
    if (!sessionProposalRef.current || !address) {
      return;
    }
    const { id, params } = sessionProposalRef.current;
    try {
      const namespaces = {
        proposal: params,
        supportedNamespaces: {
          eip155: {
            chains: [`eip155:${chain.id}`],
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            accounts: [`eip155:${chain.id}:${address}`],
          },
        },
      };
      const approvedNamespaces = buildApprovedNamespaces(namespaces);
      setLoading(true)
      const session = await web3walletRef.current?.approveSession({ id, namespaces: approvedNamespaces });
      setSession(session);
      setIsConnected(true)
      setConnectOpen(false);
      setIsModalOpen(false)
      setSessionProposal(null);
      toast.success(t('toastSuccess.connectSuccess'))
    } catch (error) {
      console.error("Error approving session:", error);
    } finally {
      setLoading(false)
    }
  }, [web3wallet])

  const handleRejectSession = async () => {
    if (!sessionProposal) return;
    try {
      await web3wallet?.rejectSession({
        id: sessionProposal.id,
        reason: getSdkError("USER_REJECTED"),
      });
      setConnectOpen(false);
      setSessionProposal(null);
    } catch (error) {
      console.error("Error rejecting session:", error);
    }
  };

  const handleConfirmTransfer = async () => {
    if (!transferDetails) {
      return;
    }

    try {
      setLoading(true);

      let hash = ''
      const result = await signTransaction({
        to: transferDetails?.to as Address,
        amount: transferDetails.value,
        data: transferDetails.data,
        token: transferDetails.token,
        transactionType: TransactionType.SWAP,
      })

      if (result?.needOtp) {
        // Transaction requires OTP verification
        // Wait for the backend to complete OTP verification and execute the transaction
        // This may take some time, the function will periodically check the transaction status
        hash = await waitForTransactionExection(result.transactionId)
      } else {
        hash = result?.hash
      }

      log('hash is', hash)

      const { topic, response } = requestContent;
      const res = {
        ...response,
        result: hash,
      }
      await web3wallet?.respondSessionRequest({
        topic,
        response: res as { id: number; jsonrpc: string; result: `0x${string}`; },
      });
      log('successful')

      setTransferOpen(false);
    } catch (error) {
      console.error('Error confirming transfer:', error);
      toast.error('Transfer failed');
    } finally {
      setLoading(false);
    }
  };

  const handleRejectTransfer = async () => {
    const { topic, response } = requestContent;
    const { id } = response as { id: number };
    await web3wallet?.respondSessionRequest({
      topic,
      response: {
        id,
        jsonrpc: "2.0",
        error: {
          code: 5000,
          message: "User rejected.",
        },
      },
    });

    setTransferOpen(false);
    toast.info('Transfer rejected');
  };

  const disconnectSession = async () => {
    if (session?.topic) {
      await web3wallet?.disconnectSession({
        topic: session.topic,
        reason: {
          code: 5000,
          message: "User disconnected",
        },
      });
      updateSessionStatus();
      toast.info('Disconnected')
    }
  };

  const openPairModal = () => {
    log('open')
    setDisplayUriInput(true)
    setIsModalOpen(true)
  }

  return (
    <div className=''>
      <div
        className={cn([
          "h-7 px-4 py-2.5 bg-white rounded-[60px]",
          "justify-center items-center gap-2 flex cursor-pointer",
          !isAuthenticated && 'cursor-default',
          className
        ])}
        onClick={() => {
          if (!isAuthenticated) {
            return
          }
          if (isConnected) {
            disconnectSession()
          } else {
            openPairModal()
          }
        }}
      >
        <div className={cn(
          "text-center text-[#111111] text-sm font-medium  leading-none select-none",
          buttonClassName
        )}>
          {isConnected ? t('vastWalletConnect.disconnectSession') : t('vastWalletConnect.connectDApps')}
        </div>
      </div>

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
      
      <WalletConnectModal onPair={pair} />
    </div>
  )
}
