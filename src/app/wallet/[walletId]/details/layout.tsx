"use client";

import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { History, FileText, ArrowLeft, Wallet } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletProvider, useWallet } from "./context/WalletContext";
import { cn } from "@/lib/utils";
import { TokenAssets } from "@/app/assets/components/WalletCard/TokenAssets";
import { TeamWalletSendReceiveActions } from "@/app/assets/components/Team/TeamWalletSendReceiveActions";
import { TeamWalletSettingsActions } from "@/app/assets/components/Team/TeamWalletSettingsActions";
import { LogoLoading } from "@/components/LogoLoading";
import { useQueryClient } from "@tanstack/react-query";

// Inner component that can use the wallet context
function WalletName() {
  const { wallet, isLoading } = useWallet();
  
  if (isLoading || !wallet) return null;
  
  return (
    <p className={cn(
      "text-lg text-center font-bold",
      "text-[#000000]"
    )}>
      {wallet.name}
    </p>
  );
}

// Component that renders TokenAssets with wallet context
function WalletTokenAssets() {
  const { wallet, isLoading } = useWallet();
  
  if (isLoading || !wallet) return null;
  
  return (
    <TokenAssets 
      btcAddress={wallet.addresses.btc}
      ethAddress={wallet.addresses.eth}
    />
  );
}

// Component that renders send/receive actions with wallet context
function WalletSendReceiveSection() {
  const { wallet, isLoading } = useWallet();
  const queryClient = useQueryClient();
  const params = useParams();
  const walletId = params.walletId as string;
  
  const refreshProposals = async () => {
    await queryClient.invalidateQueries({ queryKey: ['proposals', walletId] });
  };
  
  if (isLoading || !wallet) return null;
  
  return (
    <TeamWalletSendReceiveActions wallet={wallet} refreshProposals={refreshProposals} />
  );
}

// Component that renders settings actions with wallet context
function WalletSettingsSection() {
  const { wallet, isLoading } = useWallet();
  const queryClient = useQueryClient();
  const params = useParams();
  const walletId = params.walletId as string;
  
  const refreshProposals = async () => {
    await queryClient.invalidateQueries({ queryKey: ['proposals', walletId] });
  };
  
  if (isLoading || !wallet) return null;
  
  return (
    <TeamWalletSettingsActions 
      wallet={wallet} 
      refreshProposals={refreshProposals}
    />
  );
}

// Component that handles authorization check
function AuthorizedWalletContent({ children }: { children: React.ReactNode }) {
  const { wallet, isLoading, userPkp } = useWallet();
  
  // Show loading state if wallet is still loading
  if (isLoading) {
    return <LogoLoading />;
  }

  // If wallet is not available, show an error
  if (!wallet) {
    return <div className="mt-4 text-center">Wallet not found</div>;
  }

  // Check if current user is authenticated
  if (!userPkp) {
    return <div className="mt-4 text-center">User not authenticated</div>;
  }

  // Check if current user is authorized to view this wallet
  const isUserAuthorized = wallet.signers.some(signer => 
    signer.ethAddress.toLowerCase() === userPkp.ethAddress.toLowerCase()
  );

  if (!isUserAuthorized) {
    return <div className="mt-4 text-center">You are not authorized to view this wallet</div>;
  }

  return <>{children}</>;
}

export default function WalletDetailsLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const walletId = params.walletId as string;

  const getActiveTab = () => {
    if (pathname === `/wallet/${walletId}/details/transactions`) {
      return "transactions";
    }
    return "proposals"; 
  };

  // This check ensures walletId is available before rendering links
  if (!walletId) {
    return null;
  }

  return (
    <WalletProvider walletId={walletId}>
      <AuthorizedWalletContent>
        <div className={cn(
          "mx-auto py-8 relative",
          'w-[342px] laptop:w-[808px] desktop:w-[1224px]',
        )}>
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.push('/assets')}
              className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </button>
            <WalletName />
            <WalletSettingsSection />
          </div>

          <div className={cn(
            'w-[342px] laptop:w-[640px]',
            'mx-auto mb-[80px] mt-[24px]',
          )}>

            <WalletTokenAssets />
            
            {/* Send/Receive Buttons - After TokenAssets */}
            <WalletSendReceiveSection />
          </div>
          
          <Tabs value={getActiveTab()} className="mb-6 mt-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="transactions" asChild>
                <Link href={`/wallet/${walletId}/details/transactions`}>
                  <History className="w-4 h-4 mr-2" />
                  Transaction History
                </Link>
              </TabsTrigger>
              <TabsTrigger value="proposals" asChild>
                <Link href={`/wallet/${walletId}/details/proposals`}>
                  <FileText className="w-4 h-4 mr-2" />
                  Proposals
                </Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {children}
        </div>
      </AuthorizedWalletContent>
    </WalletProvider>
  );
} 