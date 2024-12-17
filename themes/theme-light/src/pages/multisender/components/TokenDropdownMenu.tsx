import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { symbolByToken } from "@/lib/utils";
import { TokenFactory } from "@/services/TokenService";
import { TokenType } from "@/types/tokens";
import { Transfer } from "../page";


const tokenImageByType = (type: TokenType) => {
  if (type === 'TVWT') {
    return '/imgs/logos/tvwt.png'
  } else if (type === 'ETH') {
    return '/imgs/logos/eth.png'
  } else if (type === 'MATIC') {
    return '/imgs/logos/matic.png'
  }
}

const tokenTypes = TokenFactory.getInstance().getAllTokenTypes()

export function TokenDropdownMenu({
  handleTokenTypeChange,
  index,
  transfer,
}: {
  handleTokenTypeChange: (type: TokenType, index: number) => void
  index: number
  transfer: Transfer
}) {
  return <DropdownMenu>
  <DropdownMenuTrigger className="flex items-center gap-[6px] px-0 py-1">
    <img className="w-[16px] h-[16px]" src={tokenImageByType(transfer.token)} alt="" />
    <span className="font-medium text-sm">{symbolByToken(transfer.token)}</span>
    <img src="/imgs/icons/down_caret.svg" alt="" />
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="bg-white">
    {
      tokenTypes.map((type) => {
        return (
          <DropdownMenuItem
            key={type}
            onClick={() => handleTokenTypeChange(type, index)}
            className="flex items-center gap-[6px]">
            <img className="w-[16px] h-[16px]" src={tokenImageByType(type)} alt="" />
            <span className="font-medium text-sm">{symbolByToken(type)}</span>
          </DropdownMenuItem>
        );
      })
    }
  </DropdownMenuContent>
</DropdownMenu>
}
