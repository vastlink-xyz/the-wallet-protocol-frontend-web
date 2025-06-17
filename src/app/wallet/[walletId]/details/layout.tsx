"use client";

import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { History, FileText, ArrowLeft, Wallet } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletProvider, useWallet } from "./context/WalletContext";
import { cn } from "@/lib/utils";

// Inner component that can use the wallet context
function WalletName() {
  const { wallet, isLoading } = useWallet();
  
  if (isLoading || !wallet) return null;
  
  return (
    <div className="flex items-center text-gray-600 text-lg font-medium mb-6">
      <Wallet className="h-5 w-5 mr-2" />
      {wallet.name || "Unnamed Wallet"}
    </div>
  );
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
      <div className={cn(
        "mx-auto py-8",
        'w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]',
      )}>
        <div className="mb-4 flex items-center">
          {/* <h1 className="text-2xl font-bold">Wallet Details</h1> */}
          <button 
            onClick={() => router.push('/assets/team')}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Team Wallet(s)
          </button>
        </div>

        <div className="flex items-center justify-center">
          <WalletName />
        </div>
        
        <Tabs value={getActiveTab()} className="mb-6">
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
    </WalletProvider>
  );
} 