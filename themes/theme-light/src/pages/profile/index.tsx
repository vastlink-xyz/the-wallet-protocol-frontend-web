import { auth, cn, log } from "@/lib/utils";
import { CopyClipboardAddress } from "@/components/CopyClipboardAddress";
import { useEffect, useState } from "react";
import { ReceiveModal } from "@/pages/dashboard/components/ReceiveModal";
import { AvatarModal } from "./components/AvatarModal";
import { useUserInfo } from "@/hooks/user/useUserInfo";
import { DailyTransactionLimit } from "./components/DailyTransactionLimit";

export default function Page() {
  const { address, username } = auth.all();

  const { data: userInfo } = useUserInfo()
  const [avatar, setAvatar] = useState<string>('')
  const [avatarIndex, setAvatarIndex] = useState<number>(0)
  const [avatarUrl, setAvatarUrl] = useState<string>('')

  const [receiveOpen, setReceiveOpen] = useState(false)
  const [avatarModalOpen, setAvatarModalOpen] = useState(false)

  useEffect(() => {
    if (userInfo) {
      setAvatar(userInfo.avatar)
      setAvatarIndex(userInfo.avatarIndex)
      setAvatarUrl(userInfo.avatar || auth.getUserRandomAvatar(userInfo.avatarIndex))
    }
  }, [userInfo])

  const handleOpenAvatarModal = () => {
    setAvatarModalOpen(true)
  }

  return (
    <div className="pb-[200px]">
      <div
        className={cn(
          'w-full relative overflow-hidden bg-black',
          'h-[186px] tablet:h-[300px]'
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
          'tablet:flex tablet:flex-wrap tablet:justify-between',
          'py-[28px] tablet:py-[72px] tablet:px-[104px]',
          'w-[317px] mx-auto tablet:w-full',
        )}>
          {/* left content */}
          <div>
            <div className={cn(
              'text-white font-bold leading-tight font-["Asap"]',
              'text-lg tablet:text-[32px]',
              'mb-[25px] tablet:mb-[50px]',
            )}>Profile</div>
            <div className="flex items-center">
              <div className="relative group">
                <img
                  src={avatarUrl}
                  alt="avatar"
                  className={cn(
                    'w-[39px] h-[39px] rounded-full',
                    'tablet:w-[72px] tablet:h-[72px]',
                    'mr-[12px] tablet:mr-[24px]',
                  )}
                />
                <div
                  className={cn(
                    'absolute inset-0 flex items-center justify-center',
                    'bg-black/50 rounded-full',
                    'opacity-0 group-hover:opacity-100',
                    'transition-opacity cursor-pointer',
                    'mr-[12px] tablet:mr-[24px]',
                  )}
                  onClick={handleOpenAvatarModal}
                >
                  <img
                    src="/imgs/icons/camera.svg"
                    alt="change avatar"
                    className="w-[16px] h-[16px] tablet:w-[24px] tablet:h-[24px]"
                  />
                </div>
              </div>
              <p className={cn(
                'text-[#828282] leading-tight',
                'text-base tablet:text-2xl',
              )}>{username}</p>
            </div>
          </div>

          {/* right content */}
          <div className={cn(
            'w-[276px] tablet:w-[266px] laptop:w-auto',
            'mx-auto tablet:mx-0',
            'mt-[8px] tablet:mt-[110px]',
            'ml-[50px] tablet:ml-0',
          )}>
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
      </div>

      <div className={cn(
        'w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]',
        'mx-auto',
      )}>
        <DailyTransactionLimit />
      </div>

      {/* receive modal */}
      <ReceiveModal
        address={address}
        open={receiveOpen}
        setOpen={setReceiveOpen}
        onClose={() => setReceiveOpen(false)}
      />

      {/* avatar modal */}
      <AvatarModal
        isOpen={avatarModalOpen}
        onClose={() => setAvatarModalOpen(false)}
        initialAvatarIndex={avatarIndex}
        initialAvatar={avatar}
      />
    </div>
  )
}
