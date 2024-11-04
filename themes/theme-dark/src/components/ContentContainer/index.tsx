import { cn } from "@/lib/utils";

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentContainer({ children, className }: ContentContainerProps) {
  return <div className={cn([
    'desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]',
    'mx-auto pb-12',
    className
  ])}>
    {children}
  </div>
}
