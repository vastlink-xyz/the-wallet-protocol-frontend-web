import { cn, log } from "@/lib/utils";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface RouteItem {
  name: string;
  href: string;
}

interface NavigationMenuProps {
  routes: RouteItem[];
  currentRouteName: string;
}

export function NavigationMenu({ routes, currentRouteName }: NavigationMenuProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* desktop */}
      <div className={cn(
        'hidden tablet:flex',
        'justify-start items-center gap-6'
      )}>
        {routes.map((route) => {
          const actived = pathname.startsWith(route.href)
          return (
            <div
              className={cn(
                "py-2 justify-start items-center gap-2 flex relative",
                actived && 'text-white'
              )}
              key={route.name}
            >
              <Link className={cn(
                "text-[#a1a1a1] text-sm font-medium leading-none cursor-pointer",
                actived && 'text-white'
              )} to={route.href}>
                {route.name}
              </Link>
              {actived && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-white" />
              )}
            </div>
          )
        })}
      </div>

      {/* mobile */}
      <div className={cn('flex tablet:hidden')}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-7 justify-start items-center gap-1 inline-flex">
              <div className="text-neutral-50 text-sm font-medium leading-none">
                {currentRouteName}
              </div>
              <img src="/imgs/icons/center_down.svg" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {routes.map((route) => {
              const actived = pathname.startsWith(route.href)
              return (
                <DropdownMenuItem
                  key={route.name}
                  onClick={(e) => {
                    log('click', route.href)
                    navigate(route.href)
                  }}
                >
                  {actived ? (
                    <Link to={route.href} className="flex items-center gap-2">
                      <div className="text-brand-foreground">{route.name}</div>
                      <img src="/imgs/icons/checked.svg" alt="" />
                    </Link>
                  ) : (
                    <div className="">{route.name}</div>
                  )}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
