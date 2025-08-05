'use client';

import { useContext, useEffect, useState } from 'react';
import { Wallet, Server, ChevronLeft, LogOut, SettingsIcon, BellIcon, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WalletConnectButton } from '@/components/WalletConnect/WalletConnectButton';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthContext } from '@/hooks/useAuthContext';
import { isProtectedRoute } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useNotifications } from '@/hooks/useNotifications';
import Link from 'next/link';
import { PersonalWalletSettingsContext } from '@/providers/PersonalWalletSettingsProvider';
import { useTranslations } from 'next-intl';
import { auth } from '@/lib/firebase';

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode; // for notifications or other extra content
}

function SidebarItem({ 
  href, 
  icon,
  label,
  isActive,
  isCollapsed = false, 
  onClick,
  className,
  children
}: SidebarItemProps) {
  return (
    <Link
      href={onClick ? "#" : href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        'flex items-center py-2.5 font-medium transition-all duration-300',
        'px-6 justify-between',
        isActive 
          ? 'bg-gray-100 text-[#090909]' 
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
        className
      )}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
          {icon}
        </div>
        <div className={cn(
          'overflow-hidden transition-all duration-300',
          isCollapsed ? 'w-0 ml-0' : 'w-25 ml-5'
        )}>
          <span className="whitespace-nowrap block">
            {label}
          </span>
        </div>
      </div>
      {children}
    </Link>
  );
}

export function SidebarDesktop() {
  const router = useRouter()
  const pathname = usePathname();

  const t = useTranslations('Common');

  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { proposalNotifications, allNotifications } = useNotifications();
  const { authMethod } = useAuthContext();

  const { showPersonalWalletSettings } = useContext(PersonalWalletSettingsContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Check if user is logged in
    setIsLoggedIn(!!authMethod)
  }, [pathname, authMethod]) // Re-check when pathname changes

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  const showSidebar = authMethod && isProtectedRoute(pathname) && isDesktop;

  if (!showSidebar) {
    return null;
  }

  const handleLogout = async () => {
    try {
      // Sign out from Firebase if user was logged in with Google
      await auth.signOut();
      console.log('✅ Firebase signed out successfully');
    } catch (error) {
      console.error('❌ Error signing out from Firebase:', error);
      // Continue with logout even if Firebase signOut fails
    }
    
    // Clear all local storage
    localStorage.clear();
    
    // Redirect to login page
    router.push('/');
  }

  return (
    <div className={cn(
      'bg-white border-r shadow-[0px_1px_7px_0px_rgba(0,0,0,0.1)] h-full flex-shrink-0 transition-all duration-300',
      isCollapsed ? 'w-18' : 'w-54'
    )}>
      <div className="py-4 relative">
        {/* Collapse button */}
        <div 
          className={cn(
            'w-6 h-6 absolute z-2 top-[90px] -right-3 bg-[#c7c8c9] text-white rounded-full cursor-pointer flex items-center justify-center hover:bg-[#a0a1a2]',
            'shadow-[4px_0px_20px_0px_rgba(238,238,238,1.00)]',
          )}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronLeft className={cn(
            'w-4 h-4 transition-transform',
            isCollapsed && 'rotate-180'
          )} />
        </div>

        <nav className="space-y-6">
          <SidebarItem 
            href="/assets" 
            icon={<Wallet className="w-5 h-5" />}
            label={t("wallets")}
            isActive={pathname === '/assets' || pathname.startsWith('/wallet/')}
            isCollapsed={isCollapsed}
          />

          <SidebarItem 
            href="/proposals" 
            icon={<Server className="w-5 h-5" />}
            label={t("proposals")}
            isActive={pathname === '/proposals'}
            isCollapsed={isCollapsed}
            className='relative'
          >
            {proposalNotifications.length > 0 && (
              <>
                {isCollapsed ? (
                  <div className="bg-red-500 rounded-full w-[6px] h-[6px] absolute right-4 top-2"></div>
                ) : (
                  <div className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {proposalNotifications.length}
                  </div>
                )}
              </>
            )}
          </SidebarItem>

          <SidebarItem 
            href="/notification" 
            icon={<BellIcon className="w-5 h-5" />}
            label={t("notifications")}
            isActive={pathname === '/notification'}
            isCollapsed={isCollapsed}
            className='relative'
          >
            {allNotifications.length > 0 && (
              <>
                {isCollapsed ? (
                  <div className="bg-red-500 rounded-full w-[6px] h-[6px] absolute right-4 top-2"></div>
                ) : (
                  <div className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {allNotifications.length}
                  </div>
                )}
              </>
            )}
          </SidebarItem>

          <div className="w-auto mx-6 border-b border border-[#eeeeee]"></div>

          {/* WalletConnect Button */}
          <WalletConnectButton 
            mode="sidebar"
            isCollapsed={isCollapsed}
          />

          <SidebarItem 
            href="#" 
            icon={<SettingsIcon className="w-5 h-5" />}
            label={t("settings")}
            isActive={pathname === '/settings'}
            isCollapsed={isCollapsed}
            onClick={() => showPersonalWalletSettings()}
          />
        </nav>
      </div>

      {isLoggedIn ? (
        <Tooltip>
          <TooltipTrigger asChild className='hidden tablet:block'>
            <div className='absolute bottom-4 left-6 cursor-pointer transition-all duration-300' onClick={handleLogout}>
              <div className='flex items-center justify-center'>
                <LogOut className="w-4 h-4 text-black rounded-md flex-shrink-0" />
                <div className={cn(
                  'overflow-hidden transition-all duration-300',
                  isCollapsed ? 'w-0 ml-0' : 'w-[60px] ml-2'
                )}>
                  <span className="whitespace-nowrap block text-black text-sm">
                    {t("logout")}
                  </span>
                </div>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            Logout
          </TooltipContent>
        </Tooltip>
      ) : null}
    </div>
  );
}
