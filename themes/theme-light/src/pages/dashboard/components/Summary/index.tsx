import { CopyClipboardAddress } from "@/components/CopyClipboardAddress";
import { auth, cn } from "@/lib/utils"

export default function DashboardPage() {
  const avatarUrl = auth.getUserRandomAvatar();
  const {address} = auth.all();

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

      <div className={cn(
        'relative z-10',
        'tablet:flex tablet:flex-wrap tablet:justify-between',
        'py-[28px] tablet:py-[72px] tablet:px-[104px]',
        'w-[317px] mx-auto tablet:w-full',
      )}>
        {/* left content */}
        <div>
          <div className={cn(
            'text-white font-bold leading-tight',
            'text-lg tablet:text-[32px]',
            'mb-[25px] tablet:mb-[50px]',
          )}>Total asset</div>
          <div className="flex items-start gap-2">
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
                'text-white font-bold',
                'text-[20px] tablet:text-[40px] tablet:leading-none',
              )}>$0 USD</div>
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
            <div className=" bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer">
              <img src="/imgs/icons/send.svg" alt="" />
              <span className="text-black text-xs font-bold">Send</span>
            </div>
            <div className=" bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer">
              <img src="/imgs/icons/receive.svg" alt="" />
              <span className="text-black text-xs font-bold">Receive</span>
            </div>
            <div className=" bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer">
              <img src="/imgs/icons/receive.svg" alt="" />
              <img src="/imgs/icons/arrow_down.svg" alt="" />
            </div>
          </div>

          <CopyClipboardAddress
            address={address}
            className="text-white text-xs"
            iconClassName="text-white"
            iconSize={14}
          />
        </div>
      </div>

    </div>
  )
}
