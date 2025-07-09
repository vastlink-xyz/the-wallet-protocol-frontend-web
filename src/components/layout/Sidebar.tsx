'use client';

import { useEffect, useState } from 'react';
import { Wallet, Settings, Server, CreditCard, LucideArrowLeft, ChevronLeft, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { isProtectedRoute } from '@/constants/routes';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

export function SidebarDesktop() {
  const pathname = usePathname();
  const router = useRouter()
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
  const showSidebar = authMethod && isProtectedRoute(pathname);

  if (!showSidebar) {
    return null;
  }

  const sidebarItems: SidebarItem[] = [
    {
      icon: <Wallet className="w-5 h-5" />,
      label: 'Wallets',
      href: '/assets',
    },
    // {
    //   icon: <Server className="w-5 h-5" />,
    //   label: 'Proposal',
    //   href: '/proposals',
    //   badge: 12,
    // },
    // {
    //   icon: <Settings className="w-5 h-5" />,
    //   label: 'Setting',
    //   href: '/settings',
    // },
  ];

  const handleLogout = () => {
    localStorage.clear()
    router.push('/')
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
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center py-2.5 font-medium transition-colors',
                isCollapsed ? 'justify-center px-3 mx-3' : 'justify-between px-6',
                pathname === item.href 
                  ? 'bg-black/20 text-[#090909]' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <div className={cn(
                'flex items-center',
                isCollapsed ? 'justify-center' : 'space-x-5'
              )}>
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </div>
              {item.badge && !isCollapsed && (
                <Badge>12</Badge>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {isLoggedIn ? (
        <Tooltip>
          <TooltipTrigger asChild className='hidden tablet:block'>
            <LogOut onClick={handleLogout} className="absolute bottom-4 left-6 w-4 h-4 text-black cursor-pointer rounded-md" />
          </TooltipTrigger>
          <TooltipContent>
            Logout
          </TooltipContent>
        </Tooltip>
      ) : null}
    </div>
  );
}

interface SidebarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarMobile({ isOpen, onClose }: SidebarMobileProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Check if user is logged in
    const authMethod = getAuthMethodFromStorage();
    setIsLoggedIn(!!authMethod);
  }, [pathname]); // Re-check when pathname changes

  if (!mounted) {
    return null;
  }

  const authMethod = getAuthMethodFromStorage();
  const showSidebar = authMethod && isProtectedRoute(pathname);

  if (!showSidebar || !isOpen) {
    return null;
  }

  const sidebarItems: SidebarItem[] = [
    {
      icon: <Wallet className="w-5 h-5" />,
      label: 'Wallets',
      href: '/assets',
    },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
    onClose();
  };

  return (
    <>
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-transparent z-40"
        onClick={onClose}
      />
      
      {/* Mobile dropdown sidebar */}
      <div className="absolute top-full right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transform transition-all duration-200">
        <div className="py-2">
          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  'flex items-center justify-between py-3 px-4 mx-2 rounded-md transition-colors',
                  'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <Badge>{item.badge}</Badge>
                )}
              </Link>
            ))}
            
            {/* Logout */}
            {isLoggedIn && (
              <>
                <div className="mx-2 my-2 border-t border-gray-200"></div>
                <button
                  onClick={handleLogout}
                  className={cn(
                    'flex items-center w-full py-3 px-4 mx-2 rounded-md transition-colors',
                    'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </div>
                </button>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}

export default function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  // Only show desktop sidebar on desktop screens
  // Mobile sidebar is handled by AppNavbar
  if (isDesktop) {
    return <SidebarDesktop />;
  }
  
  return null;
}