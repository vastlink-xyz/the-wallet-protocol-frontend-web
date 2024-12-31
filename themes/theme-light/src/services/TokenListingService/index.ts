import { GasFeeSymbol, TokenType } from "@/types/tokens";
import { ETH } from "./tokens/ETH";
import { MATIC } from "./tokens/MATIC";
import { TVWT } from "./tokens/TVWT";
import { Token } from "./tokens/Token";
import { VAST } from "./tokens/VAST";
import { BASE_ETH } from "./tokens/BASE_ETH";

export class TokenService {
  private static instance: TokenService;
  private tokenMap: Map<TokenType, Token>;
  
  private constructor() {
    this.tokenMap = new Map([
      [TokenType.ETH, new ETH()],
      [TokenType.BASE_ETH, new BASE_ETH()],
      [TokenType.MATIC, new MATIC()],
      [TokenType.TVWT, new TVWT()],
      [TokenType.VAST, new VAST()],
    ]);
  }

  public static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }

  public getToken(type: TokenType): Token {
    const token = this.tokenMap.get(type);
    if (!token) {
      throw new Error(`Unsupported token type: ${type}`);
    }
    return token;
  }

  public getAllTokens() {
    return Array.from(this.tokenMap.values());
  }

  public isNativeToken(token: TokenType): token is Extract<TokenType, TokenType.ETH | TokenType.BASE_ETH | TokenType.MATIC> {
    return token === TokenType.ETH || token === TokenType.BASE_ETH || token === TokenType.MATIC;
  }

  public isERC20Token(token: TokenType): token is Extract<TokenType, TokenType.TVWT | TokenType.VAST> {
    return token === TokenType.TVWT || token === TokenType.VAST;
  }

  public createTokenMap<T>(mapper: (token: Token) => T): Record<TokenType, T> {
    return Array.from(this.tokenMap.entries()).reduce((acc, [type, token]) => {
      acc[type] = mapper(token);
      return acc;
    }, {} as Record<TokenType, T>);
  }

  public getNativeTokenTypeByGasSymbol(symbol: GasFeeSymbol): TokenType | null {
    const tokenType = Array.from(this.tokenMap.values()).find(token => token.gasSymbol === symbol && this.isNativeToken(token.tokenType))?.tokenType;
    return tokenType || null;
  }
}

const theTokenListingService = TokenService.getInstance();
Object.freeze(theTokenListingService);

export {
  theTokenListingService,
  Token,
}
