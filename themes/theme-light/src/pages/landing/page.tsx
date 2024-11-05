import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* section 1 */}
      <div className={cn(
        "relative text-center",
        "bg-[linear-gradient(155deg,#162f0b_0%,#0d1e05_40%,#000000_90%)]",
      )}>
        <div className={cn(
          'text-left mx-auto',
          'w-[343px] tablet:w-[506px] laptop:w-[936px] desktop:w-[1200px]',
          'pt-[60px] tablet:pt-[120px] laptop:pt-[160px]',
          'pb-[80px] tablet:pb-[80px] laptop:pb-[160px]',
          'flex flex-wrap justify-between',
        )}>
          <div className={cn(
            'w-[343px] tablet:w-[680px] laptop:w-[506px] desktop:w-[624px]',
          )}>
            {/* description */}
            <div className={cn(
              'text-white font-bold',
              'text-2xl tablet:text-[32px] laptop:text-[40px] desktop:text-6xl',
              'leading-7 tablet:leading-[37px] laptop:leading-[52px] desktop:leading-[73px]',
              'pb-[20px] laptop:pb-[40px]',
            )}>
              The global <span className="text-[#52c41a]">PayFi ecosystem</span> made for mass adoption
            </div>
            <div className={cn(
              'text-[#f2f2f2] font-normal',
              'text-[10px] tablet:text-sm desktop:text-xl',
              'leading-3 tablet:leading-tight desktop:leading-normal',
              'pb-[24px] tablet:pb-[40px] laptop:pb-[56px]',
            )}>
              Over 5000 users around the world trust Vastlink’s software and APIs to simplify global PayFi operations, unlock new oppotunitues, and grow without limits
            </div>

            {/* button desktop only */}
            <div className={cn(
              'h-12 px-6 py-3.5 bg-white rounded-[60px] justify-center items-center gap-2',
              'hidden laptop:inline-flex',
            )}>
              <div className="text-center text-black text-base font-medium leading-tight cursor-pointer">Get started for free</div>
            </div>
          </div>

          <img className={cn(
            'w-[343px] tablet:w-[488px] laptop:w-[324px] desktop:w-[488px]',
          )}
            src="/imgs/banners/landing_1.png" alt="banner"
          />

          {/* button mobile only */}
          <div className={cn(
            'w-[254px] h-10 px-4 py-3 bg-white rounded-[60px] justify-center items-center gap-2 mx-auto',
            'inline-flex laptop:hidden',
            'mt-[40px] tablet:mt-[56px]',
            'w-[254px] tablet:w-[232px]',
          )}>
            <div className="text-center text-black text-sm font-medium leading-none">Get started for free</div>
          </div>
        </div>

      </div>

      {/* section 2 */}
      <div className={cn(
        'relative',
        // 'h-[400px] tablet:h-[600px] laptop:h-[800px]',
        'bg-[url("/imgs/banners/landing_2.png")]',
        'bg-cover bg-center bg-no-repeat',
        'bg-black',
        '-mt-[1px]',
      )}>
        {/* desktop only */}
        <div className={cn(
          'flex flex-wrap justify-between items-center mx-auto',
          'w-[343px] tablet:w-[506px] laptop:w-[936px] desktop:w-[1200px]',
          'pt-[60px] tablet:pt-[120px] laptop:pt-[160px]',
          'pb-[80px] tablet:pb-[80px] laptop:pb-[160px]',
          'hidden laptop:flex',
        )}>
          <img
            className={cn(
              'laptop:w-[403px] desktop:w-[530px]',
            )}
            src="/imgs/banners/landing_2_1_large.png" alt="banner"
          />

          <div>
            <div className={cn(
              'text-white font-bold leading-[73px]',
              'laptop:w-[403px] desktop:w-[572px]',
              'laptop:mb-[20px] desktop:mb-[40px]',
              'laptop:text-[28px] desktop:text-5xl',
            )}>Build on the shoulders of giants</div>
            <div className={cn(
              'text-[#e8ffdc] font-normal leading-7',
              'laptop:w-[403px] desktop:w-[572px]',
              'laptop:text-base desktop:text-xl',
            )}>Platform and infrastructure partners, with more exciting features on the way!</div>
          </div>
        </div>

        {/* mobile only */}
        <div className={cn(
          'block laptop:hidden',
        )}>
          <img
            className={cn(
              'block tablet:hidden',
              'w-[343px] mx-auto',
            )}
            src="/imgs/banners/landing_2_1_mobile.png" alt="banner"
          />
          <img
            className={cn(
              'hidden tablet:block',
              'w-[608px] mx-auto',
            )}
            src="/imgs/banners/landing_2_1_tablet.png" alt="banner"
          />
        </div>
      </div>
    </div>
  );
}
