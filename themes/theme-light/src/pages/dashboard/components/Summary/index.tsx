import { CopyClipboardAddress } from "@/components/CopyClipboardAddress";
import { auth, cn, hideTotalAssetStorage, log } from "@/lib/utils"
import { SendModal } from "../../token/components/SendModal";
import { useEffect, useState } from "react";
import { TokenType } from "@/types/tokens";
import { ReceiveModal } from "../ReceiveModal";
import { useTotalAsset } from "@/hooks/useTotalAsset";
import { useUserInfo } from "@/hooks/user/useUserInfo";
import { theTokenListingService } from "@/services/TokenListingService";

export function Summary() {
  const { address } = auth.all();

  const { data: totalAsset, refetch } = useTotalAsset({
    enabled: !!address,
  })
  const { data: userInfo } = useUserInfo()
  const [avatarUrl, setAvatarUrl] = useState<string>('')

  const [sendOpen, setSendOpen] = useState(false)
  const [receiveOpen, setReceiveOpen] = useState(false)
  const [tokenType, setTokenType] = useState<TokenType>(TokenType.VAST)
  const [hideTotalAsset, setHideTotalAsset] = useState(hideTotalAssetStorage.getData() ?? true)

  useEffect(() => {
    handleTokenTypeChange(tokenType)
  }, [])

  useEffect(() => {
    if (userInfo) {
      setAvatarUrl(userInfo.avatar || auth.getUserRandomAvatar(userInfo.avatarIndex))
    }
  }, [userInfo])

  const handleTokenTypeChange = async (tokenType: TokenType) => {
    setTokenType(tokenType)
  }

  const handleOpenEye = () => {
    setHideTotalAsset(!hideTotalAsset)
    hideTotalAssetStorage.setData(!hideTotalAsset)
  }

  return (
    <div
      className={cn(
        'w-full h-[300px] relative overflow-hidden bg-black',
      )}
    >
      {/* avatar background */}
      <div
        className={cn(
          'absolute inset-[-20%] z-0',
          'bg-center bg-no-repeat bg-cover',
          'blur-[26px] bg-opacity-[0.23] brightness-[0.4]',
        )}
        style={{
          backgroundImage: `url(${avatarUrl})`,
        }}
      />

      {/* content */}
      <div className={cn(
        'relative z-10',
        'tablet:flex tablet:justify-between tablet:gap-2',
        'py-[28px] tablet:py-[72px] tablet:px-[104px]',
        'w-[317px] mx-auto tablet:w-full',
      )}>
        {/* left content */}
        <div>
          <div className={cn(
            'text-white font-bold leading-tight font-["Asap"]',
            'text-lg tablet:text-[32px]',
            'mb-[25px] tablet:mb-[50px]',
          )}>Total asset</div>
          <div className="flex items-start gap-2 tablet:w-auto">
            <img
              src={avatarUrl}
              alt="avatar"
              className={cn(
                'w-[39px] h-[39px] rounded-full',
                'tablet:w-[72px] tablet:h-[72px]',
                'tablet:mr-[24px]',
                'mb-[38px] tablet:mb-0',
              )}
            />
            <div className="flex flex-col">
              <div className={cn(
                'text-[#828282] font-normal leading-none',
                'text-[8px] tablet:text-[16px]',
                'mb-[0px] tablet:mb-[10px]',
              )}>Portfolio value</div>
              <div className={cn(
                'text-white font-bold font-["Asap"] flex items-center gap-4',
                'text-[20px] tablet:text-[40px] tablet:leading-none',
              )}>
                {
                  hideTotalAsset ? (
                    <div className="flex gap-4">
                      ******
                      <img 
                        src={'/imgs/icons/close_eye.svg'}
                        className="w-[30px] h-[30px] cursor-pointer"
                        onClick={handleOpenEye}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      ${totalAsset?.formatted || ''}
                      <div className="flex items-center gap-4">
                        USD
                        <img 
                          src={'/imgs/icons/open_eye.svg'}
                          className="w-[30px] h-[30px] cursor-pointer"
                          onClick={handleOpenEye}
                        />
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        {/* right content */}
        <div className={cn(
          'w-[276px] tablet:w-auto',
          'mx-auto tablet:mx-0',
          'tablet:mt-[75px]',
        )}>
          <div className={cn(
            'flex items-center gap-3 mb-[28px]',
            'justify-center tablet:justify-end',
          )}>
            {/* send */}
            <div
              className=" bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer"
              onClick={() => setSendOpen(true)}
            >
              <img src="/imgs/icons/send.svg" alt="" />
              <span className="text-black text-xs font-bold">Send</span>
            </div>

            {/* receive */}
            <div
              className="bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer"
              onClick={() => setReceiveOpen(true)}
            >
              <img src="/imgs/icons/receive.svg" alt="" />
              <span className="text-black text-xs font-bold">Receive</span>
            </div>

            {/* switch crypto */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer">
                <img 
                  src={tokenTypeIcon()} 
                  className="w-[16px] h-[16px]" 
                  alt="" 
                />
                <img src="/imgs/icons/arrow_down.svg" alt="" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {tokenTypeIcons.map((token) => (
                  <DropdownMenuItem
                    key={token.name}
                    onClick={() => handleTokenTypeChange(token.name as TokenType)}
                  >
                    <div className="flex items-center gap-2">
                      <img 
                        src={token.icon} 
                        className="w-[16px] h-[16px]" 
                        alt="" 
                      />
                      <span className={cn(
                        tokenType === token.name ? 'text-brand-foreground' : 'text-black',
                      )}>{token.name}</span>
                      {tokenType === token.name && (
                        <img src="/imgs/icons/checked.svg" alt="" />
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>

          <div className="flex items-start gap-2">
            <CopyClipboardAddress
              address={address}
              className="text-white text-xs"
              iconClassName="text-white"
              iconSize={14}
            />
            <img
              className="w-[14px] h-[14px] cursor-pointer"
              src="/imgs/icons/qrcode.svg"
              alt=""
              onClick={() => setReceiveOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* send modal */}
      <SendModal
        open={sendOpen}
        setOpen={setSendOpen}
        address={address}
        tokenType={tokenType}
        onClose={() => setSendOpen(false)}
      />

      {/* receive modal */}
      <ReceiveModal
        address={address}
        open={receiveOpen}
        setOpen={setReceiveOpen}
        onClose={() => setReceiveOpen(false)}
      />
    </div>
  )
}
