import { AuthButtons } from "@/components/AuthButtons";
import { auth, cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const isAuthenticated = auth.isAuthenticated()

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard')
    } else {
      navigate('/auth')
    }
  }

  return (
    <div className={cn(
      'flex flex-col relative',
      'bg-black border-none shadow-none outline-none',
    )}>
      {/* section 2 gradient background */}
      <div className="h-full w-full absolute bg-[linear-gradient(318deg,#000_53.13%,#0b3003_93.1%)] z-1"></div>

      {/* section 1 */}
      <div className={cn(
        "relative text-center",
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
              'text-[10px] tablet:text-sm laptop:text-base desktop:text-xl',
              'leading-3 tablet:leading-tight desktop:leading-normal',
              'pb-[24px] tablet:pb-[40px] laptop:pb-[56px]',
            )}>
              Designed for the community, driven by its demand, and powered by innovative tokenomics.
            </div>

            {/* button desktop only */}
            {/* <div className={cn(
              'h-12 px-6 py-3.5 bg-white rounded-[60px] justify-center items-center gap-2 cursor-pointer',
              'hidden laptop:inline-flex',
            )}>
              <div
                className="text-center text-black text-base font-medium leading-tight"
                onClick={handleGetStarted}
              >Get started for free</div>
            </div> */}
            <AuthButtons />
          </div>

          <img className={cn(
            'w-[343px] tablet:w-[488px] laptop:w-[324px] desktop:w-[488px]',
            'object-contain',
          )}
            src="/imgs/banners/landing_1.png" alt="banner"
          />

          {/* button mobile only */}
          {/* <div className={cn(
            'w-[254px] h-10 px-4 py-3 bg-white rounded-[60px] justify-center items-center gap-2 mx-auto',
            'inline-flex laptop:hidden',
            'mt-[40px] tablet:mt-[56px]',
            'w-[254px] tablet:w-[232px]',
          )}>
            <div
              className="text-center text-black text-sm font-medium leading-none cursor-pointer"
              onClick={handleGetStarted}
            >Get started for free</div>
          </div> */}
          {/* <AuthButtons /> */}
        </div>

      </div>

      {/* section 2 */}
      <div className={cn(
        'relative',
        'bg-[url("/imgs/banners/landing_2.png")]',
        'bg-cover bg-center bg-no-repeat',
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
            )}>Open and scalable</div>
            <div className={cn(
              'text-[#e8ffdc] font-normal leading-7',
              'laptop:w-[403px] desktop:w-[572px]',
              'laptop:text-base desktop:text-xl',
            )}>Open integration with all kinds of products and services via the scalable marketplace.</div>
          </div>
        </div>

        {/* mobile only */}
        <div className={cn(
          'block laptop:hidden',
        )}>
          <div className="text-center mb-[20px]">
            <div className={cn(
              'text-white text-[28px] font-bold leading-[73px]',
            )}>Open and scalable</div>
            <div className={cn(
              'text-[#e8ffdc] font-normal leading-7',
              'text-[10px] tablet:text-sm',
            )}>Open integration with all kinds of products and services.</div>
          </div>

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
            src="/imgs/banners/landing_2_1_large.png" alt="banner"
          />
        </div>
      </div>
    </div>
  );
}
