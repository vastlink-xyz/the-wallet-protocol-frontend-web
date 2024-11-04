import { cn } from "@/lib/utils";

export function Loading() {
  return (
    <>
      <div className={cn(
        'hidden tablet:flex',
        'fixed inset-0 justify-center bg-black/50',
        'z-[49]',
      )}>
        <img 
          src="/imgs/icons/loading.svg" 
          alt="loading" 
          className="h-[100px] w-[100px] animate-spin mt-[100px]"
        />
      </div>

      <div className={cn(
        'flex tablet:hidden',
        'fixed inset-0 justify-center items-center',
        'z-[51]',
      )}>
        <div className="w-[126px] h-[56px] py-[16px] px-[12px] bg-[#424242] rounded-lg backdrop-blur-[20px] flex justify-center items-center">
          <img
            src="/imgs/icons/mobile_loading.png"
            alt="loading"
            className="h-8 w-8 animate-spin"
          />
        </div>
      </div>
    </>
  );
}
