"use client";

import { TransactionHistory } from "@/components/Transaction/TransactionHistory";
import { useWallet } from "../context/WalletContext";
import { LogoLoading } from "@/components/LogoLoading";

export default function TransactionHistoryPage() {
  const { wallet, isLoading } = useWallet();
  
  if (isLoading) {
    return <LogoLoading />;
  }
  
  if (!wallet) {
    return <div className="mt-4">Wallet not found</div>;
  }

  return (
    <div className="mt-4">
      {
        wallet.addresses && (
          <TransactionHistory
            addresses={wallet.addresses}
          />
        )
      }
    </div>
  );
} 