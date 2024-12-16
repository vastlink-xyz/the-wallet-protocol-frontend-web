import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { cn, symbolByToken } from "@/lib/utils";
import { TokenFactory } from "@/services/TokenService";
import { TokenType } from "@/types/tokens";
import { Tooltip } from "antd";
import { InfoIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { SlideToSend } from "./components/SlideToSend";
const tokenTypes = TokenFactory.getInstance().getAllTokenTypes()

const tokenImageByType = (type: TokenType) => {
  if (type === 'TVWT') {
    return '/imgs/logos/tvwt.png'
  } else if (type === 'ETH') {
    return '/imgs/logos/eth.png'
  } else if (type === 'MATIC') {
    return '/imgs/logos/matic.png'
  }
}

interface Transfer {
  to: string;
  note: string;
  amount: string;
  token: TokenType;
}

export default function MultisenderPage() {
  const [transfers, setTransfers] = useState<Transfer[]>([{
    to: "",
    note: "",
    amount: '',
    token: "TVWT",
  },
  ]);

  const [loading, setLoading] = useState(false);

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTransfers = [...transfers];
    newTransfers[index].to = e.target.value;
    setTransfers(newTransfers);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const newTransfers = [...transfers];
    newTransfers[index].note = e.target.value;
    setTransfers(newTransfers);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTransfers = [...transfers];
    newTransfers[index].amount = e.target.value;
    setTransfers(newTransfers);
  };

  const handleTokenTypeChange = (type: TokenType, index: number) => {
    const newTransfers = [...transfers];
    newTransfers[index].token = type;
    setTransfers(newTransfers);
  };

  const handleSend = async () => {
    setLoading(true);
    try {
      // TODO: send
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[76px] w-[985px] mx-auto pb-[320px]">
      <header className="text-center">
        <p className="text-[32px] text-[#111] font-bold leading-tight mb-[16px]">
          Multisender
        </p>
        <p className="text-sm text-[#979797] font-normal leading-none">
          You can add multiple recipients in custom settings
        </p>
      </header>

      <Table className="mt-[40px]">
        <TableHeader className="bg-[#fafafa] [&_tr:first-child_th:first-child]:rounded-tl-xl [&_tr:first-child_th:last-child]:rounded-tr-xl">
          <TableRow className="hover:bg-transparent">
            <TableHead className="h-[42px]">To</TableHead>
            <TableHead className="h-[42px]">Notes</TableHead>
            <TableHead className="h-[42px]">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            transfers.map((transfer, index) => {
              return (
                <TableRow key={index} className="hover:bg-transparent">
                  <TableCell className="flex items-center gap-[12px]">
                    <span>{index + 1}.</span>
                    <Input
                      value={transfer.to}
                      onChange={(e) => handleToChange(e, index)}
                    />
                  </TableCell>
                  <TableCell>
                    <Textarea
                      rows={1}
                      value={transfer.note}
                      onChange={(e) => handleNoteChange(e, index)}
                      className="min-h-[40px] focus-visible:ring-0 focus-visible:border focus-visible:border-black placeholder:text-black/25"
                    />
                  </TableCell>
                  <TableCell className="relative">
                    <Input
                      value={transfer.amount}
                      onChange={(e) => handleAmountChange(e, index)}
                      className={cn(
                        "pl-[100px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                        transfer.token === 'ETH' &&'pl-[134px]',
                        transfer.token === 'MATIC' &&'pl-[90px]',
                      )}
                    />
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 flex items-center">
                      <DropdownMenu>
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
                      {/* <div className="h-[16px] border-r border-[#dbdbdb] mx-[12px]"></div> */}
                    </div>
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>

      <div className="flex items-center justify-end gap-[12px] mt-[24px]">
        <Button
          variant="outline"
          className="h-[24px] text-xs"
        >Import CSV</Button>
        <Button
          variant="outline"
          className="h-[24px] text-xs px-[26px]"
        >
          <PlusIcon className="w-[12px] h-[12px]" strokeWidth={3} />
        </Button>
      </div>

      <div className="mt-[120px]">
        <div className="text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1">
          <p>Estimated gas fee:</p>
          <Tooltip title="Estimated fees may vary and will be recalculated during backend checks." overlayStyle={{maxWidth: 'none'}}>
            <InfoIcon className="w-[16px] h-[16px]" />
          </Tooltip>
        </div>
        <p className="text-black text-sm font-medium leading-none text-right mt-0.5">
          $0.00 ETH
        </p>

        {/* Total amount */}
        <div className="mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1">
          <p>Total amount:</p>
        </div>
        <p className="text-black text-xl font-medium leading-none text-right mt-0.5">
          $0.00 ETH
        </p>

        <div className="mt-[104px]">
          <SlideToSend
            onSuccess={handleSend}
            loading={loading}
            disabled={transfers.some(t => !t.to || !t.amount)}
            className="mx-auto"
          />
          <div className="flex items-center justify-center mt-[26px]">
            <p className="w-auto cursor-pointer text-black text-base font-bold leading-tight">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
