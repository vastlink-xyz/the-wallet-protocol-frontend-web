import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoLoadingProps {
  className?: string;
  imageClassName?: string;
}

export function LogoLoading({ className, imageClassName }: LogoLoadingProps) {
  return (
    <div className={cn("flex items-center justify-center w-full mt-[120px]", className)}>
      <div className={"animate-fade"}>
        <Image src="/Vastbase_logo.svg" alt="Logo" width={100} height={100} className={cn(imageClassName)} />
      </div>
      <style jsx>{`
        @keyframes fade {
          0% {
            opacity: 1;
            scale: 1;
          }
          50% {
            opacity: 0.3;
            scale: 0.95;
          }
          100% {
            opacity: 1;
            scale: 1;
          }
        }
        .animate-fade {
          animation: fade 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}