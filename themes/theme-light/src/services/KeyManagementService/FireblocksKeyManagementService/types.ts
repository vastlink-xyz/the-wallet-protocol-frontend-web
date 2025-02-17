export type TPassphraseLocation = "GoogleDrive" | "iCloud";

export interface IBackupInfo {
  passphraseId: string;
  location: TPassphraseLocation;
  createdAt: number;
}

export interface IPassphraseInfo {
  passphraseId: string;
  location: TPassphraseLocation;
}

export interface INewTransactionData {
  note: string;
  accountId: string;
  assetId: string;
  amount?: string;
  destAddress?: string;
  feeLevel?: "LOW" | "MEDIUM" | "HIGH";
  estimateFee?: boolean;
}

export type TRequestDecodedData = { email: string; requestId: string; platform: string };

export interface IPassphraseInfo {
  passphraseId: string;
  location: TPassphraseLocation;
}

export type TPassphrases = Record<string, IPassphraseInfo>;
