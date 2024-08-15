
export type OnInitiateDepositProps = {
  /** The identifier of the transaction */
  transactionId: string;
  /** The crypto currency that is being off-ramped */
  cryptoCurrency: CryptoCurrency;
  /** The fiat currency that the customer will receive */
  fiatCurrency: FiatCurrency;
  /** Crypto amount in its base unit (0.123 ETH === "0.123") */
  cryptoCurrencyAmount: string;
  /** Crypto amount in its smallest unit (1 ETH === 1x10^18) */
  cryptoCurrencyAmountSmallestDenomination: string;
  /** Fiat amount in its base unit ($1.23 === "1.23"). Only set for fixed quotes. */
  fiatCurrencyAmount: string | null;
  /** The wallet address where the crypto amount needs to be deposited */
  depositWalletAddress: string;
};

export type OnInitiateDepositReplyProps = {
  /**
   * The partner's identifier for a successful deposit. Can be any string, eg
   * the transaction hash.
   */
  depositId: string;
};

/**
 * Represents a Fiat currency such as USD
 */
export type FiatCurrency = {
  /** The identifier of the fiat currency */
  id: string;
  /** The human readable name of the currency such as "US Dollar" */
  name: string;
  /** The code of the currency such as "usd" */
  code: string;
};

/** Represents a Crypto currency such as ETH */
export type CryptoCurrency = {
  /** The identifier of the crypto currency */
  id: string;
  /** The human readable name of the currency such as "Ethereum" */
  name: string;
  /** The code of the currency such as "eth" */
  code: string;
  /** The address location of the token contract on the blockchain */
  contractAddress: string | null;
  /** The chain's Chain ID */
  chainId: string | null;
  /** The coin type as defined in SLIP-0044 */
  coinType: string | null;
  /** The currency's network such as "bitcoin" or "ethereum" */
  networkCode: string | null;
};