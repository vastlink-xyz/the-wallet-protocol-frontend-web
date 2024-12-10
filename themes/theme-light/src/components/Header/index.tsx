import { auth, cn, log } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationMenu } from "./NavigationMenu";
import { HeaderActions } from "./HeaderActions";

export interface RouteItem {
  name: string;
  href: string;
}

export function Header() {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isAuthenticated = auth.isAuthenticated()

  const routes: RouteItem[] = [
    {
      name: t('header.dashboard'),
      href: '/dashboard',
    },
    {
      name: t('header.marketplace'),
      href: '/marketplace',
    },
    // {
    //   name: t('header.community'),
    //   href: '/community',
    // },
  ];

  // get current route name
  const currentRoute = routes.find(route => pathname.startsWith(route.href))
  const currentRouteName = currentRoute?.name || 'Home' // default show landing page

  return <div className={cn(
    'w-full h-[60px] bg-[#111111] shadow justify-between items-center inline-flex',
    'tablet:px-10 px-4'
  )}>
    <div className="items-center flex">
      {/* logo */}
      <div className={cn(
        'items-center gap-2 flex mr-[46px]',
        'mr-[20px] tablet:mr-[46px]',
        'cursor-pointer'
      )}
        onClick={() => navigate('/')}
      >
        <img src="/imgs/logos/logo.svg" />
        <div className={cn(
          'text-white text-xl font-bold font-["Roboto_Mono"] leading-4',
          'hidden tablet:block',
        )}>Vastlink</div>
      </div>

      {isAuthenticated && (
        <NavigationMenu
          routes={routes}
          currentRouteName={currentRouteName}
        />
      )}
    </div>

    {isAuthenticated && (
      <HeaderActions />
    )}
  </div>

  // <Account />
}
