import { GasFeeSymbol, TokenType } from "@/types/tokens";
import { ETH } from "./tokens/ETH";
import { MATIC } from "./tokens/MATIC";
import { TVWT } from "./tokens/TVWT";
import { Token } from "./tokens/Token";
import { VAST } from "./tokens/VAST";

export class TokenService {
  private static instance: TokenService;
  private tokenMap: Map<TokenType, Token>;
  
  private constructor() {
    this.tokenMap = new Map([
      [TokenType.ETH, new ETH()],
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

  public isNativeToken(token: TokenType): token is Extract<TokenType, TokenType.ETH | TokenType.MATIC> {
    return token === TokenType.ETH || token === TokenType.MATIC;
  }

  public isERC20Token(token: TokenType): token is Extract<TokenType, TokenType.TVWT> {
    return token === TokenType.TVWT;
  }

  public createTokenMap<T>(mapper: (token: Token) => T): Record<TokenType, T> {
    return Array.from(this.tokenMap.entries()).reduce((acc, [type, token]) => {
      acc[type] = mapper(token);
      return acc;
    }, {} as Record<TokenType, T>);
  }

  public getTokenTypeByGasSymbol(symbol: GasFeeSymbol): TokenType {
    const tokenType = Array.from(this.tokenMap.values()).find(token => token.gasSymbol === symbol)?.tokenType;
    if (!tokenType) {
      throw new Error(`No token found for gas symbol: ${symbol}`);
    }
    return tokenType;
  }
}

const theTokenService = TokenService.getInstance();
Object.freeze(theTokenService);

export {
  theTokenService,
  Token,
}
