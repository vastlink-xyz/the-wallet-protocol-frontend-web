import { Input } from "@/components/ui/input";
import { Transfer } from "./useMultisender";
import { cn } from "@/lib/utils";
import { AlertCircle, CircleCheck, Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface ToInputValidationState {
  isValidating: boolean;
  isValidEmail: boolean;
  fullAddress: string;
  error: string;
}

export function ToInput({
  index,
  transfer,
  validation: {
    isValidating,
    isValidEmail,
    fullAddress,
    error
  },
  handleToChange,
  handleToBlur,
  sending,
}: {
  index: number;
  transfer: Transfer;
  validation: ToInputValidationState;
  handleToChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleToBlur: (index: number) => void;
  sending: boolean;
}) {
  const { t } = useTranslation();
  const unregisteredEmailNotice = t('/dashboard.[token].sendModal.unregisteredEmailNotice');

  return (
    <div className={cn(
      "flex items-center px-0 relative",
      ((isValidEmail && fullAddress) || error) && "mb-[16px] tablet:mb-0"
    )}>
      <div className="w-[22px]">{index + 1}.</div>
      <Input
        disabled={sending}
        value={transfer.to}
        onChange={(e) => handleToChange(e, index)}
        onBlur={() => handleToBlur(index)}
        placeholder="Enter email or crypto address"
        className={cn(
          "desktop:w-[380px] laptop:w-[318px] tablet:w-[426px] w-[322px]",
          isValidEmail && "border-green-500 focus-visible:border-green-500",
          error && "border-destructive focus-visible:border-destructive",
          error === unregisteredEmailNotice && 'border-blue-500 focus-visible:border-blue-500',
          "pr-10"
        )}
      />
      {isValidating && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Loader className="animate-spin" size={16} />
        </div>
      )}
      {isValidEmail && !isValidating && !error && (
        <CircleCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" size={16} />
      )}
      {error && !isValidating && (
        <AlertCircle className={cn(
          "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
          error === unregisteredEmailNotice && 'text-blue-500'
        )} size={16} />
      )}

      {/* information under input */}
      {isValidEmail && fullAddress && (
        <p className="absolute -bottom-[20px] left-[22px] mt-1 text-xs text-primary/60">
          {fullAddress}
        </p>
      )}
      {error && (
        <p className={cn(
          "absolute -bottom-[20px] left-[22px] text-xs text-destructive",
          error === unregisteredEmailNotice && 'text-blue-400'
        )}>
          {error}
        </p>
      )}
    </div>
  );
}