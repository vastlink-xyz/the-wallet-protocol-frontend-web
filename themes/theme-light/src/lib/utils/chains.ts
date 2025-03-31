import { theTokenListingService } from "@/services/TokenListingService";
import { ChainType, TokenType } from "@/types/tokens";

export const getChainTypeByTokenType = (tokenType: TokenType): ChainType => {
  const token = theTokenListingService.getToken(tokenType);
  return token.chainType;
};

export const getAddressByTokenType = (tokenType: TokenType, chainAddresses: { [key in ChainType]?: string }): string => {
  const chainType = getChainTypeByTokenType(tokenType);
  const address = chainAddresses[chainType];
  
  if (!address) {
    throw new Error(`No address found for chain type: ${chainType}`);
  }
  
  return address;
};
