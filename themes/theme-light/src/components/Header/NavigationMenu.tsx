import { auth, cn, log } from "@/lib/utils";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
  const isAuthenticated = auth.isAuthenticated()

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
              <Link
                className={cn(
                  "text-[#a1a1a1] text-base font-medium leading-none cursor-pointer",
                  actived && 'text-white',
                  !isAuthenticated && 'cursor-default'
                )}
                to={route.href}
                onClick={(e) => {
                  if (!isAuthenticated) {
                    e.preventDefault()
                  }
                }}
              >
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
            <div className={cn(
              "h-7 justify-start items-center gap-1 inline-flex text-[#fafafa]",
              !isAuthenticated && 'text-[#a1a1a1]'
            )}>
              <div className={cn(
                'text-base font-medium leading-none',
                !isAuthenticated && 'text-[#979797]'
              )}>
                {currentRouteName}
              </div>
              <ChevronDown 
                className={cn(
                  "w-4 h-4",
                )} 
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {routes.map((route) => {
              const actived = pathname.startsWith(route.href)
              return (
                <DropdownMenuItem
                  key={route.name}
                  onClick={(e) => {
                    if (!isAuthenticated) {
                      e.preventDefault()
                      navigate('/auth')
                      return
                    }
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
