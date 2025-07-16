import { Settings } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl";

interface WalletSettingsButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  onSettingsClick?: () => void;
}

export function WalletSettingsButton({ className, onSettingsClick }: WalletSettingsButtonProps) {
  const t = useTranslations('Common')

  return (
    <div className={cn("flex justify-end", className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Settings 
            className="w-6 h-6 cursor-pointer text-black" 
            onClick={onSettingsClick}
          />
        </TooltipTrigger>
        <TooltipContent>
          {t('settings')}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}