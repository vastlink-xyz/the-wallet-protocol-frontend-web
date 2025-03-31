// export type TokenType = 'ETH' | 'MATIC' | 'TVWT'

export enum ChainType {
  BITCOIN = 'BITCOIN',
  BITCOIN_TEST = 'BITCOIN_TEST',
  ETHEREUM = 'ETHEREUM',
}

export enum TokenType {
  ETH = 'ETH',
  BASE_ETH = 'BASE_ETH',
  MATIC = 'MATIC',
  TVWT = 'TVWT',
  VAST = 'VAST',
  BTC_TEST = 'BTC_TEST',
}

export enum GasFeeSymbol {
  POL = 'POL',
  SepoliaETH = 'SepoliaETH',
  BaseSepoliaETH = 'BaseSepoliaETH',
  BTC = 'BTC',
}

export type TokenRecord<T> = Record<TokenType, T>;

export type ERC20TokenType = Extract<TokenType, TokenType.TVWT | TokenType.VAST>;

export type NativeTokenType = Extract<TokenType, TokenType.ETH | TokenType.BASE_ETH | TokenType.MATIC>;