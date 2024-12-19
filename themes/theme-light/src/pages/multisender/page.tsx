import { TokenType } from "@/types/tokens";
import TransferMode from "./components/TransferMode";
import { useState } from "react";
import { ResultMode } from "./components/ResultMode";
import { GasFees } from "./components/TransferMode/useMultisender";

export interface TransferResult {
  to: string;
  type: 'transaction' | 'invitation';
  status: 'sent' | 'failed' | 'pending';
  statusMessage?: string;
  amount: string;
  token: TokenType;
}

const mockTransferResults: TransferResult[] = [
  {
    to: '0x56ed57816E32138668ebFf838c9859a583a04c43',
    type: 'transaction',
    status: 'sent',
    statusMessage: 'Sent and received',
    amount: '100.00',
    token: 'ETH',
  },
  {
    to: '0x123',
    type: 'transaction',
    status: 'failed',
    statusMessage: 'Daily transaction limit exceeded. Please check your email and verify by the OTP.',
    amount: '0.0001',
    token: 'ETH',
  },
  {
    to: '0x123',
    type: 'transaction',
    status: 'failed',
    statusMessage: 'Not sent. Please try transferring again.',
    amount: '100',
    token: 'ETH',
  },
  {
    to: '0x123',
    type: 'invitation',
    status: 'sent',
    statusMessage: 'Sent. The recipient will receive an invitation email to sign up their account.',
    amount: '100',
    token: 'ETH',
  },
]

export default function MultisenderPage() {
  // transfer result mode
  const [isResultMode, setIsResultMode] = useState(false);
  const [transferResults, setTransferResults] = useState<TransferResult[]>([]);
  const [gasFees, setGasFees] = useState<GasFees | null>(null);

  const handleSent = (results: TransferResult[], gasFees: GasFees | null) => {
    setTransferResults(results);
    setGasFees(gasFees);
    setIsResultMode(true);
  }

  return (
    <>
      {isResultMode ? (
        <ResultMode
          transferResults={transferResults}
          onTransferAgain={() => {
            setIsResultMode(false);
          }}
          gasFees={gasFees}
        />
      ) : (
        <TransferMode
          onSent={handleSent}
        />
      )}
    </>
  );
}
