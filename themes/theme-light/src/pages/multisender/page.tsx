import { Button } from "@/components/ui/button";
import { cn, symbolByToken } from "@/lib/utils";
import { InfoIcon, LoaderCircle, PlusIcon } from "lucide-react";
import { Divider, Tooltip } from "antd";
import { SlideToSend } from "./components/SlideToSend";
import { ToInput } from "./components/ToInput";
import { NoteArea } from "./components/NoteArea";
import { DeleteIcon } from "./components/DeleteIcon";
import { TokenDropdownMenu } from "./components/TokenDropdownMenu";
import { ExitPromptModal } from "./components/ExitPromptModal";
import { useNavigationGuard } from "@/hooks/useNavigationGuard";
import { TotalAmount, useMultisender } from "./useMultisender";
import { AmountInput } from "./components/AmountInput";
import { DailyLimitAlert } from "./components/DailyLimitAlert";
import { InsufficientBalanceAlert } from "./components/InsufficientBalanceAlert";
import { TokenType } from "@/types/tokens";

export default function MultisenderPage() {
  const {
    transfers,
    toValidations,
    sending,
    isDisabled,
    hasContent,
    handleToChange,
    handleToBlur,
    handleNoteChange,
    handleAmountChange,
    handleTokenTypeChange,
    handleSend,
    handleAddTransfer,
    handleDeleteTransfer,
    totalAmount,
    tokenBalances,
    tokenPrices,
    todayTokenTransferred,
    defaultLimits,
    gasFees,
    isEstimatingFee,
    hasInsufficientBalance,
  } = useMultisender();

  const { showExitPrompt, handleExitPrompt } = useNavigationGuard({
    shouldBlock: hasContent
  });

  return (
    <div className={cn(
      "pt-[76px] mx-auto pb-[320px]",
      'w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]',
    )}>
      <header className="text-center mb-[40px]">
        <p className="text-[32px] text-[#111] font-bold leading-tight mb-[16px]">
          Multisender
        </p>
        <p className="text-sm text-[#979797] font-normal leading-none">
          You can add multiple recipients in custom settings
        </p>
      </header>

      {todayTokenTransferred && (
        <DailyLimitAlert
          todayTokenTransferred={todayTokenTransferred}
          defaultLimits={defaultLimits}
          totalAmount={totalAmount}
        />
      )}

      {tokenPrices && (
        <InsufficientBalanceAlert
          tokenBalances={tokenBalances}
          tokenPrices={tokenPrices}
          totalAmount={totalAmount}
          hasInsufficientBalance={hasInsufficientBalance}
        />
      )}

      <div>
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
                        validation={toValidations[index] || {
                          isValidating: false,
                          isValidEmail: false,
                          fullAddress: '',
                          error: ''
                        }}
                        handleToChange={handleToChange}
                        handleToBlur={handleToBlur}
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
                      <AmountInput
                        index={index}
                        transfer={transfer}
                        handleAmountChange={handleAmountChange}
                      />
                      <div className="absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center">
                        <TokenDropdownMenu
                          index={index}
                          transfer={transfer}
                          handleTokenTypeChange={handleTokenTypeChange}
                        />
                        <Divider type="vertical" className="h-[16px]" />
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

      {/* Estimated gas fee */}
      <div className="mt-[120px]">
        <div className="text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1">
          <p>Estimated gas fee:</p>
          <Tooltip title="Estimated fees may vary and will be recalculated during backend checks." overlayStyle={{ maxWidth: 'none' }}>
            <InfoIcon className="w-[16px] h-[16px]" />
          </Tooltip>
        </div>
        {
          isEstimatingFee ? (
            <span><LoaderCircle className="animate-spin" size={14} /></span>
          ) : gasFees ? (
            <p className="text-black text-sm font-medium leading-none text-right mt-0.5">
              {Object.entries(gasFees)
                .filter(([token]) => token !== 'usdValue' && gasFees[token as keyof TotalAmount] !== '0')
                .map(([token, amount], index, array) => (
                  <span key={token}>
                    {amount} {symbolByToken(token as TokenType)}
                    {index < array.length - 1 && ' & '}
                  </span>
                ))}
              {Object.values(gasFees).some(amount => amount !== '0') &&
                ` (~$${gasFees.usdValue} USD)`}
            </p>
          ) : (
            <span className="text-black">-</span>
          )
        }

        {/* Total amount */}
        <div className="mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1">
          <p>Total amount:</p>
        </div>
        <p className="text-black text-xl font-medium leading-none text-right mt-0.5">
          {Object.entries(totalAmount)
            .filter(([token]) => token !== 'usdValue' && totalAmount[token as keyof TotalAmount] !== '0')
            .map(([token, amount], index, array) => (
              <span key={token}>
                {amount} {symbolByToken(token as TokenType)}
                {index < array.length - 1 && ' & '}
              </span>
            ))}
          {Object.values(totalAmount).some(amount => amount !== '0') &&
            ` (~$${totalAmount.usdValue} USD)`}
        </p>

        <div className="mt-[104px]">
          <SlideToSend
            onSuccess={handleSend}
            loading={sending}
            disabled={isDisabled || isEstimatingFee}
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
