import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { theTokenListingService } from "@/services/TokenListingService";
import { TokenType } from "@/types/tokens";
import { Transfer } from "./useMultisender";

const tokenTypes = theTokenListingService.getAllTokens().map(t => t.tokenType)

export function TokenDropdownMenu({
  handleTokenTypeChange,
  index,
  transfer,
  sending,
}: {
  handleTokenTypeChange: (type: TokenType, index: number) => void
  index: number
  transfer: Transfer
  sending: boolean;
}) {
  return <DropdownMenu>
    <DropdownMenuTrigger disabled={sending} className="flex items-center gap-[6px] px-0 py-1 focus:outline-none">
      <img className="w-[16px] h-[16px]" src={theTokenListingService.getToken(transfer.token as TokenType).logo} alt="" />
      <span className="font-medium text-sm">{theTokenListingService.getToken(transfer.token as TokenType).symbol}</span>
      <img src="/imgs/icons/down_caret.svg" alt="" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="bg-white">
      {
        tokenTypes.map((type) => {
          return (
            <DropdownMenuItem
              disabled={sending}
              key={type}
              onClick={() => handleTokenTypeChange(type, index)}
              className="flex items-center gap-[6px]">
              <img className="w-[16px] h-[16px]" src={theTokenListingService.getToken(type).logo} alt="" />
              <span className="font-medium text-sm">{theTokenListingService.getToken(type).symbol}</span>
            </DropdownMenuItem>
          );
        })
      }
    </DropdownMenuContent>
  </DropdownMenu>
}
