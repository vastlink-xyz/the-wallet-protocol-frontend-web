"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { History, FileText } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WalletDetailsLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams();
  const walletId = params.walletId as string;

  const getActiveTab = () => {
    if (pathname === `/wallet/${walletId}/details/proposals`) {
      return "proposals";
    }
    // Defaults to "transactions" for `/wallet/[walletId]/details` or `/wallet/[walletId]/details/transactions`
    return "transactions"; 
  };

  // This check ensures walletId is available before rendering links
  if (!walletId) {
    return <div>Loading wallet details...</div>; // Or some other loading state
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Wallet Details</h1>
      <p className="text-gray-500 mb-6">
        Showing details for wallet ID: {walletId}
      </p>
      
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
  );
} 