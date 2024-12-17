import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { TokenType } from "@/types/tokens";
import { Tooltip } from "antd";
import { InfoIcon, PlusIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { SlideToSend } from "./components/SlideToSend";
import { ToInput } from "./components/ToInput";
import { NoteArea } from "./components/NoteArea";
import { DeleteIcon } from "./components/DeleteIcon";
import { TokenDropdownMenu } from "./components/TokenDropdownMenu";
import { ExitPromptModal } from "./components/ExitPromptModal";
import { useNavigationGuard } from "@/hooks/useNavigationGuard";

export interface Transfer {
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

  const [sending, setSending] = useState(false);

  const isDisabled = useMemo(() => {
    return transfers.some(t => !t.to || !t.amount);
  }, [transfers]);

  const hasContent = useMemo(() => {
    return transfers.some(t => t.to || t.note || t.amount);
  }, [transfers]);

  const { showExitPrompt, handleExitPrompt } = useNavigationGuard({
    shouldBlock: hasContent
  });

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
    setSending(true);
    try {
      // TODO: send
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setSending(false);
    }
  };

  const handleAddTransfer = () => {
    const newTransfer: Transfer = {
      to: "",
      note: "",
      amount: '',
      token: "TVWT",
    };
    
    setTransfers([...transfers, newTransfer]);
  }

  const handleDeleteTransfer = (index: number) => {
    const newTransfers = transfers.filter((_, i) => i !== index);
    setTransfers(newTransfers);
  };

  return (
    <div className={cn(
      "pt-[76px] mx-auto pb-[320px]",
      'w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]',
    )}>
      <header className="text-center">
        <p className="text-[32px] text-[#111] font-bold leading-tight mb-[16px]">
          Multisender
        </p>
        <p className="text-sm text-[#979797] font-normal leading-none">
          You can add multiple recipients in custom settings
        </p>
      </header>

      <div className="mt-[40px]">
        <header className={cn(
          "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
          "h-[42px] pl-[28px] pr-[23px]",
          'text-black/90 text-xs font-normal leading-snug',
          'desktop:gap-[28px] laptop:gap-[23px]',
        )}>
          <div className="desktop:w-[382px] laptop:w-[318px]">To</div>
          <div className="desktop:w-[308px] laptop:w-[299px] hidden laptop:block">Notes</div>
          <div className="flex-1 text-right hidden tablet:block">Amount</div>
        </header>

        <div className="">
          {
            transfers.map((transfer, index) => {
              return (
                <div key={index} className="border-b border-[#ebebeb]">
                  <div
                    className={cn(
                      "flex items-center flex-wrap py-[25px]",
                      'desktop:gap-[28px] laptop:gap-[23px] tablet:gap-[7px] gap-0',
                    )}
                  >
                    {/* To */}
                    <section>
                      <ToInput
                        index={index}
                        transfer={transfer}
                        handleToChange={handleToChange}
                      />
                    </section>

                    {/* Notes */}
                    <section className={cn(
                      "block tablet:hidden laptop:block",
                      'pl-[22px] tablet:pl-0',
                      'py-[12px] tablet:py-0',
                    )}>
                      <NoteArea
                        index={index}
                        transfer={transfer}
                        handleNoteChange={handleNoteChange}
                      />
                    </section>

                    {/* Amount */}
                    <section className={cn(
                      "relative",
                      'ml-[22px] tablet:ml-0',
                    )}>
                      <Input
                        value={transfer.amount}
                        onChange={(e) => handleAmountChange(e, index)}
                        className={cn(
                          "pl-[110px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                          transfer.token === 'ETH' &&'pl-[144px]',
                          transfer.token === 'MATIC' &&'pl-[100px]',
                          'desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]',
                        )}
                        placeholder="Amount"
                      />
                      <div className="absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center">
                        <TokenDropdownMenu
                          index={index}
                          transfer={transfer}
                          handleTokenTypeChange={handleTokenTypeChange}
                        />
                      </div>
                      {/* Delete button */}
                      <div className={cn(
                        "absolute top-1/2 -translate-y-1/2",
                        'laptop:-right-[33px] -right-[102px]',
                        'block tablet:hidden laptop:block',
                        transfers.length === 1 && "hidden laptop:hidden",
                      )}>
                        <DeleteIcon
                          index={index}
                          handleDeleteTransfer={handleDeleteTransfer}
                        />
                      </div>
                    </section>
                  </div>

                  <div
                    className={cn(
                      "items-center justify-between gap-[22px]",
                      'hidden tablet:flex laptop:hidden',
                      'pb-[25px]',
                    )}
                  >
                    {/* Notes */}
                    <section className="pl-[22px] flex-1">
                      <NoteArea
                        index={index}
                        transfer={transfer}
                        handleNoteChange={handleNoteChange}
                      />
                    </section>

                    {/* Delete button */}
                    <div className={cn(
                      transfers.length === 1 && "hidden",
                    )}>
                      <DeleteIcon
                        index={index}
                        handleDeleteTransfer={handleDeleteTransfer}
                      />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="flex items-center justify-end gap-[12px] mt-[24px]">
        <Button
          variant="outline"
          className="h-[24px] text-xs"
        >Import CSV</Button>
        <Button
          variant="outline"
          className="h-[24px] text-xs px-[26px]"
          onClick={handleAddTransfer}
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
            loading={sending}
            disabled={isDisabled}
            className="mx-auto"
          />
          <div className="flex items-center justify-center mt-[26px]">
            <p className="w-auto cursor-pointer text-black text-base font-bold leading-tight">Cancel</p>
          </div>
        </div>
      </div>

      <ExitPromptModal
        isOpen={showExitPrompt}
        onClose={handleExitPrompt}
      />
    </div>
  );
}
