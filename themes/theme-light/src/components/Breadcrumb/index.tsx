import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  primaryRoute: {
    path: string;
    name: string;
  };
  secondaryRoute: {
    name: string;
  };
  className?: string;
}

export function Breadcrumb({ primaryRoute, secondaryRoute, className }: BreadcrumbProps) {
  return (
    <div className={cn(
      "h-[22px] justify-start items-center inline-flex",
      'desktop:ml-[50px] desktop:mt-[24px]',
      'laptop:ml-[32px] laptop:mt-[24px]',
      'tablet:ml-[24px] tablet:mt-[24px]',
      'mobile:ml-[16px] mobile:mt-[10px]',
      'ml-[16px] mt-[10px]',
      className
    )}>
      <div className="justify-start items-center gap-1 flex">
        <Link
          to={primaryRoute.path}
          className="text-black/40 text-sm font-normal leading-snug hover:text-black/60 cursor-pointer"
        >
          {primaryRoute.name}
        </Link>
      </div>
      <div className="px-2 flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="text-black/40 text-sm font-normal leading-snug">/</div>
      </div>
      <div className="justify-start items-center flex">
        <div className="text-black/90 text-sm font-normal leading-snug">
          {secondaryRoute.name}
        </div>
      </div>
    </div>
  );
}
