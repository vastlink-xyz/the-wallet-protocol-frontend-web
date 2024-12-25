// export type TokenType = 'ETH' | 'MATIC' | 'TVWT'

export enum TokenType {
  ETH = 'ETH',
  MATIC = 'MATIC',
  TVWT = 'TVWT',
  VAST = 'VAST',
}

export enum GasFeeSymbol {
  POL = 'POL',
  ETH = 'ETH',
  BASE = 'BASE',
}

export type TokenRecord<T> = Record<TokenType, T>;

export type ERC20TokenType = Extract<TokenType, TokenType.TVWT | TokenType.VAST>;

export type NativeTokenType = Extract<TokenType, TokenType.ETH | TokenType.MATIC>;