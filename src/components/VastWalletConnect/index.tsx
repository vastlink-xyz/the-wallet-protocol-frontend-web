'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { auth, log } from '@/lib/utils';
import { createPassportClient } from '@0xpass/passport-viem';
import { Core } from '@walletconnect/core'
import { buildApprovedNamespaces, getSdkError } from '@walletconnect/utils'
import { IWeb3Wallet, Web3Wallet, Web3WalletTypes } from '@walletconnect/web3wallet'
import { Address, formatEther, hexToBigInt, hexToString, http, parseEther, WalletClient } from 'viem';
import { sepolia } from 'viem/chains';
import { PairingTypes, SessionTypes } from '@walletconnect/types';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { toast } from 'react-toastify';
import { Loader } from 'lucide-react';
import { useTransaction } from './useTransaction';
import { WalletConnectModal } from './WalletConnectModal';
import { PairContextType, useWalletConnectPair } from '@/providers/WalletConnectPairProvider';

export function VastWalletConnect() {
  const [address, setAddress] = useState('');
  const [wallet, setWallet] = useState<WalletClient>();
  const walletClientRef = useRef<WalletClient | null>(null)
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
  } | null>(null);
   
  const { signTransaction, waitForTransactionExection } = useTransaction()
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
    const { request } = params;
    const transactionRequest = request.params[0];

    if (request.method === 'eth_sendTransaction') {
      setTransferDetails({
        from: transactionRequest.from,
        to: transactionRequest.to,
        value: formatEther(hexToBigInt(transactionRequest.value)),
        data: transactionRequest.data,
      });
      setTransferOpen(true);
      setRequestContent({
        message: JSON.stringify(transactionRequest, null, 2),
        method: request.method,
        topic,
        response: { id, jsonrpc: "2.0", result: '' },
      });
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
  }

  const onSessionDelete = useCallback(() => {
    log('on session delete')
    updateSessionStatus();
  }, [updateSessionStatus]);

  const generateAccount = async () => {
    const { authenticatedHeader, address } = auth.all()
    const transport = http();
    const client = await createPassportClient(authenticatedHeader, transport, chain)
    setAddress(address)
    setWallet(client)
    walletClientRef.current = client
  }

  const init = async () => {
    const core = new Core({ projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID });
    const w3w = await Web3Wallet.init({
      core,
      metadata: { name: 'Vast Wallet', description: 'Vast Wallet', url: 'www.walletconnect.com', icons: [] }
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
            methods: ["eth_sendTransaction", "personal_sign"],
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
    log('transferDetails', transferDetails, 'wallet', wallet, 'walletref', walletClientRef.current)
    if (!transferDetails || !walletClientRef.current) {
      return;
    }

    try {
      setLoading(true);

      let hash = ''
      const result = await signTransaction({
        to: transferDetails?.to as Address,
        amount: transferDetails.value,
        data: transferDetails.data,
      })

      if (result.needOtp) {
        // Transaction requires OTP verification
        // Wait for the backend to complete OTP verification and execute the transaction
        // This may take some time, the function will periodically check the transaction status
        hash = await waitForTransactionExection(result.transactionId)
      } else {
        hash = result.hash
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
      <div className="flex items-center justify-center space-x-2">
        {
          isConnected ? (
            <Button
              type="button"
              size={'sm'}
              onClick={disconnectSession}
            >
              Disconnect Session
            </Button>
          ) : (
              <Button
                type="button"
                size={'sm'}
                onClick={() => openPairModal()}
              >
                Connect to Dapps
              </Button>
          )
        }
      </div>

      <Dialog
        open={connectOpen}
        onOpenChange={(opened) => setConnectOpen(opened)}
      >
        <DialogContent className="sm:max-w-[425px] text-primary">
          <DialogHeader>
            <DialogTitle>
              Connect Account
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
              Reject
            </Button>
            <Button onClick={handleApproveSession}>
              {loading ? (
                <Loader size={14} className="animate-spin m-auto" />
              ) : (
                'Approve'
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
                <Loader size={14} className="animate-spin m-auto" />
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
