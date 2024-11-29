import { cn } from "@/lib/utils"

const SOCIAL_MEDIA_LIST = [
  {
    icon: '/imgs/footer/telegram.svg',
    url: 'https://t.me/+wk6Lw40M2qtlMjk9',
  },
  {
    icon: '/imgs/footer/youtube.svg',
    url: 'https://www.youtube.com/channel/UCZIz3-Q52pDAfd7cJI4eVGQ',
  },
  {
    icon: '/imgs/footer/linkedin.svg',
    url: 'https://www.linkedin.com/company/104843132',
  },
  {
    icon: '/imgs/footer/twitter.svg',
    url: 'https://x.com/thevastlink',
  },
  {
    icon: '/imgs/footer/github.svg',
    url: 'https://github.com/vastlink-xyz',
  },
  {
    icon: '/imgs/footer/medium.svg',
    url: 'https://medium.com/@johnny.nan.jiang',
  },
]

export function Footer() {
  return <div className="bg-black text-center h-[300px] pt-[55px] border-t border-black">
    <div className="flex justify-center gap-4 mb-[32px]">
      {SOCIAL_MEDIA_LIST.map((item) => (
        <a href={item.url} key={item.url} target="_blank" rel="noopener noreferrer">
          <img src={item.icon} alt={item.url} />
        </a>
      ))}
    </div>

    <a 
      href="https://t.me/+wk6Lw40M2qtlMjk9" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-center text-white text-xl underline leading-9 block mb-[32px] cursor-pointer"
    >
      Join our ambassador program
    </a>

    <div className={cn(
      "text-center text-[#828282] text-base font-medium font-['Roboto'] leading-9 mb-[20px]",
      'tablet:text-xl'
    )}>Copenhagen | Dubai | Singapore | Sydney </div>

    <div className="text-[#828282] text-base font-normal font-['Roboto'] leading-relaxed">
      Copyright © Vastlink 2024
    </div>
  </div>
}
