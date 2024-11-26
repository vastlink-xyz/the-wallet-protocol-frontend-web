import { LanguageSwitch } from "./LanguageSwitch";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import api from "@/lib/api";
import { auth, cn, handleError, log } from "@/lib/utils";
import { useState } from "react";
import { toast } from "react-toastify";
import { WalletConnectButton } from "../VastWalletConnect";
import { useNavigate } from "react-router-dom";

export function HeaderActions() {
  const [open, setOpen] = useState(false);
  const isAuthenticated = auth.isAuthenticated()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout')
      auth.clearAllAuthData()
      window.location.href = '/auth'
    } catch (error) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }

  return (
    <div className="justify-start items-center gap-[21px] flex">
      <div className="hidden tablet:flex">
        <WalletConnectButton />
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
                <WalletConnectButton className="p-0 bg-transparent" />
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={cn('hidden tablet:flex')}
                onSelect={(e) => {
                  e.preventDefault()
                  if (!isAuthenticated) {
                    navigate('/auth')
                  }
                }}
              >
                <div>Profile</div>
              </DropdownMenuItem>
              {/* <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
              >
                <div>Notification</div>
              </DropdownMenuItem> */}
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
              >
                <LanguageSwitch onLanguageChange={() => setOpen(false)} />
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className={cn(
                  !isAuthenticated && 'hidden'
                )}
              >
                <div onClick={() => handleLogout()}>Logout</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* desktop and mobile show profile icon */}
        <div className={cn(
          'flex tablet:hidden laptop:flex',
          'justify-start items-center gap-6 flex-shrink-0'
        )}>
          <DropdownMenu
            onOpenChange={() => {
              if (!isAuthenticated) {
                navigate('/auth')
              }
            }}
          >
            <DropdownMenuTrigger asChild>
              <img 
                className="w-[24px] h-[24px] flex-shrink-0 cursor-pointer" 
                src="/imgs/icons/profile.png" 
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn(
              'bg-white',
              !isAuthenticated && 'hidden'
            )}>
              <DropdownMenuItem onSelect={() => handleLogout()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className={cn(
          'hidden laptop:block',
          'w-[2px] h-[20px] bg-[#404040]'
        )}>
        </div>

        {/* <div className={cn(
          'hidden laptop:flex',
          'justify-start items-start gap-6 flex-shrink-0'
        )}>
          <img className="w-[24px] h-[24px] flex-shrink-0" src="/imgs/icons/message.svg" />
        </div> */}

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
