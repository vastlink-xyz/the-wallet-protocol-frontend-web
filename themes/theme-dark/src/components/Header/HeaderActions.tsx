import { LanguageSwitch } from "./LanguageSwitch";
import { VastWalletConnect } from "@/components/VastWalletConnect";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn, log } from "@/lib/utils";
import { useState } from "react";

export function HeaderActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="justify-start items-center gap-[21px] flex">
      <div className="hidden tablet:flex">
        <VastWalletConnect />
      </div>

      <div className="justify-start items-center gap-7 flex">
        {/* learn button always show */}
        <div className={cn(
          'hidden tablet:flex',
          'justify-start items-center gap-6'
        )}>
          {/* <div className="py-2 justify-start items-center gap-2 flex">
            <div className="text-[#a1a1a1] text-base font-medium leading-none">Learn</div>
          </div> */}
        </div>

        {/* mobile show menu icon */}
        <div className="laptop:hidden">
          <DropdownMenu 
            modal={false} 
            open={open} 
            onOpenChange={setOpen}
          >
            <DropdownMenuTrigger asChild>
              <button className="w-6 h-6 flex items-center justify-center">
                <img src="/imgs/icons/menu.svg" className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-none">
              <DropdownMenuItem 
                className={cn('flex tablet:hidden')}
                onSelect={(e) => e.preventDefault()}
              >
                <VastWalletConnect className="p-0 bg-transparent" />
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={cn('hidden tablet:flex')}
                onSelect={(e) => e.preventDefault()}
              >
                <div>Profile</div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
              >
                {/* <div>Notification</div> */}
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
              >
                <LanguageSwitch onLanguageChange={() => setOpen(false)} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* desktop and mobile show profile icon */}
        <div className={cn(
          'flex tablet:hidden laptop:flex',
          'justify-start items-center gap-6 flex-shrink-0'
        )}>
          <img className="w-[24px] h-[24px] flex-shrink-0" src="/imgs/icons/profile.png" />
        </div>

        <div className={cn(
          'hidden laptop:block',
          'w-[2px] h-[20px] bg-[#404040]'
        )}>
        </div>

        <div className={cn(
          'hidden laptop:flex',
          'justify-start items-start gap-6 flex-shrink-0'
        )}>
          <img className="w-[24px] h-[24px] flex-shrink-0" src="/imgs/icons/message.svg" />
        </div>

        <div className={cn(
          'hidden laptop:flex',
          'justify-start items-start gap-6 flex-shrink-0 cursor-pointer'
        )}>
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
}
