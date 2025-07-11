'use client';

import { useEffect, useState } from 'react';
import { Wallet, Settings, Server, CreditCard, LucideArrowLeft, ChevronLeft, LogOut, SettingsIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { isProtectedRoute } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useNotifications } from '@/hooks/useNotifications';
import Link from 'next/link';
import { PersonalWalletSettings } from '@/app/assets/components/Personal/WalletSettings';

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isCollapsed?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode; // for notifications or other extra content
}

function SidebarItem({ 
  href, 
  icon,
  label,
  isCollapsed = false, 
  onClick,
  className,
  children
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

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
          isCollapsed ? 'w-0 ml-0' : 'w-20 ml-5'
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
  const pathname = usePathname();
  const router = useRouter()
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { proposalNotifications } = useNotifications();
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Check if user is logged in
    const authMethod = getAuthMethodFromStorage()
    setIsLoggedIn(!!authMethod)
  }, [pathname]) // Re-check when pathname changes

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  const authMethod = getAuthMethodFromStorage();
  const showSidebar = authMethod && isProtectedRoute(pathname) && isDesktop;

  if (!showSidebar) {
    return null;
  }

  const handleLogout = () => {
    localStorage.clear()
    router.push('/')
  }

  return (
    <>
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
              label="Wallets"
              isCollapsed={isCollapsed}
            />

            <SidebarItem 
              href="/proposals" 
              icon={<Server className="w-5 h-5" />}
              label="Proposals"
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

            <div className="w-auto mx-6 border-b border border-[#eeeeee]"></div>

            <SidebarItem 
              href="#" 
              icon={<SettingsIcon className="w-5 h-5" />}
              label="Settings"
              isCollapsed={isCollapsed}
              onClick={() => setShowSettingsDialog(true)}
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
                      Logout
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

      {/* Settings Dialog for MFA notifications */}
      <PersonalWalletSettings 
        isOpen={showSettingsDialog}
        onClose={() => setShowSettingsDialog(false)}
      />
    </>
  );
}
