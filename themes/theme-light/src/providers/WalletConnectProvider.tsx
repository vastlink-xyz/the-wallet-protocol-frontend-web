import { useTranslation } from "react-i18next";
import { createContext, ReactNode, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { auth, log, cn, handleError } from '@/lib/utils';
import { Core } from '@walletconnect/core'
import { buildApprovedNamespaces, getSdkError } from '@walletconnect/utils'
import { IWeb3Wallet, Web3Wallet, Web3WalletTypes } from '@walletconnect/web3wallet'
import { Address, formatEther, hexToBigInt, WalletClient } from 'viem';
import { sepolia } from 'viem/chains';
import { SessionTypes } from '@walletconnect/types';
import { toast } from 'react-toastify';
import { useTransaction } from '@/components/VastWalletConnect/useTransaction';
import { TokenType } from '@/types/tokens';
import { TransactionType } from '@/types/transaction';
import { VerificationModal } from '@/components/VerificationModal';
import { otpService } from "@/services/OTPService";
import keyManagementService from "@/services/KeyManagementService";

interface WalletConnectContextType {
  isAuthenticated: boolean;
  isConnected: boolean;
  handleConnect: () => void;
  connectOpen: boolean;
  setConnectOpen: (open: boolean) => void;
  sessionProposal: Web3WalletTypes.SessionProposal | null;
  handleRejectSession: () => void;
  handleApproveSession: () => void;
  loading: boolean;
  transferOpen: boolean;
  setTransferOpen: (open: boolean) => void;
  transferDetails: {
    from: string;
    to: string;
    value: string;
    data: string;
    token: TokenType;
  } | null;
  requestContent: {
    method: string;
    message: string;
    topic: string;
    response: Partial<{ id: number; jsonrpc: string; result: `0x${string}`; }>;
  };
  handleRejectTransfer: () => void;
  handleConfirmTransfer: () => void;
  pair: (uri: string) => void;
  isModalOpen: boolean;
  dappInfo: { name: string; url: string };
  setDappInfo: (dappInfo: { name: string; url: string }) => void;
  setIsModalOpen: (open: boolean) => void;
  displayUriInput: boolean;
  setDisplayUriInput: (displayUriInput: boolean) => void;
}

const WalletConnectContext = createContext<WalletConnectContextType | undefined>(undefined);

export function WalletConnectProvider({ children }: { children: ReactNode }) {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayUriInput, setDisplayUriInput] = useState(false);
  const [dappInfo, setDappInfo] = useState({ name: '', url: '' });
  const [isConnected, setIsConnected] = useState(false);
  const [web3wallet, setWeb3Wallet] = useState<IWeb3Wallet>();
  const web3walletRef = useRef<IWeb3Wallet>();

  const [verificationOpen, setVerificationOpen] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [verificationTransactionId, setVerificationTransactionId] = useState<string | null>(null);

  const setWeb3WalletWithRef = (w: IWeb3Wallet) => {
    setWeb3Wallet(w);
    web3walletRef.current = w;
  };

  const updateSessionStatus = useCallback(() => {
    const activeSessions = web3walletRef.current?.getActiveSessions();
    log('activeSessions', activeSessions)
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
    setWeb3WalletWithRef(w3w);
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
      // Get chains from either required or optional namespaces
      const eip155Params = params.requiredNamespaces?.eip155 || params.optionalNamespaces?.eip155;
      if (!eip155Params) {
        throw new Error("No EIP155 namespace found in proposal");
      }

      // Use the chains from the namespace, or fallback to current chain if none specified
      const requestedChains = eip155Params.chains || [`eip155:${chain.id}`];
    
      const namespaces = {
        proposal: params,
        supportedNamespaces: {
          eip155: {
            // chains: [`eip155:${chain.id}`],
            chains: requestedChains,
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            // accounts: [`eip155:${chain.id}:${address}`],
            accounts: requestedChains.map(chain => `${chain}:${address}`),
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
        if (otpService.getVerifyMethod() === 'email-by-sendgrid') {
          setVerificationTransactionId(result.transactionId);
          setVerificationOpen(true);
        }
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

  const handleVerify = async (code: string) => {
    if (!verificationTransactionId) {
      toast.error('No transaction id');
      return;
    }

    try {
      setVerificationLoading(true);

      const { hash } = await keyManagementService.signTransactionWithOTP({
        transactionId: verificationTransactionId,
        otp: code,
      });

      if (hash) {
        const { topic, response } = requestContent;
        const res = {
          ...response,
          result: hash,
        }
        await web3wallet?.respondSessionRequest({
          topic,
          response: res as { id: number; jsonrpc: string; result: `0x${string}`; },
        });

        setVerificationOpen(false);
        setTransferOpen(false);
        toast.success('Transaction submitted successfully');
      }
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setVerificationLoading(false);
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
  
  const handleConnect = useCallback(() => {
    if (!isAuthenticated) {
      return;
    }
    if (isConnected) {
      disconnectSession();
    } else {
      openPairModal();
    }
  }, [isAuthenticated, isConnected]);


  const value = {
    isAuthenticated,
    isConnected,
    handleConnect,
    connectOpen,
    setConnectOpen,
    sessionProposal,
    handleRejectSession,
    handleApproveSession,
    loading,
    transferOpen,
    setTransferOpen,
    transferDetails,
    requestContent,
    handleRejectTransfer,
    handleConfirmTransfer,
    pair,
    isModalOpen,
    dappInfo,
    setDappInfo,
    setIsModalOpen,
    displayUriInput,
    setDisplayUriInput,
  };

  return (
    <WalletConnectContext.Provider value={value}>
      {children}
      <VerificationModal
        isOpen={verificationOpen}
        onClose={() => setVerificationOpen(false)}
        loading={verificationLoading}
        onVerify={handleVerify}
        modalClassName="z-[10004]"
      />
    </WalletConnectContext.Provider>
  );
}


export function useWalletConnect() {
  const context = useContext(WalletConnectContext);
  if (context === undefined) {
    throw new Error('useWalletConnect must be used within a WalletConnectProvider');
  }
  return context;
}
