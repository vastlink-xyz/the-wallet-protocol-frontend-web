'use client';

import { useEffect, useState } from 'react';
import { Wallet, LogOut, MenuIcon, Server } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { isProtectedRoute } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { useNotifications } from '@/hooks/useNotifications';

interface MobileMenuItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function MobileMenuItem({ 
  href, 
  children, 
  onClick,
  className 
}: MobileMenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center justify-between py-3 px-4 mx-2 rounded-md transition-colors',
        'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
        className
      )}
    >
      {children}
    </Link>
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { proposalNotifications } = useNotifications();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const authMethod = getAuthMethodFromStorage();
    setIsLoggedIn(!!authMethod);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  const authMethod = getAuthMethodFromStorage();
  const showMenu = authMethod && isProtectedRoute(pathname);

  if (!showMenu) {
    return null;
  }

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
    setIsOpen(false);
  };

  return (
    <div className="tablet:hidden relative">
      <MenuIcon 
        className="w-4 h-4 text-white cursor-pointer" 
        onClick={handleMenuToggle}
      />
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-transparent z-40"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-6 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transform transition-all duration-200">
            <div className="py-2">
              <nav className="space-y-1">
                <MobileMenuItem href="/assets" onClick={handleLinkClick}>
                  <div className="flex items-center space-x-3">
                    <Wallet className="w-5 h-5" />
                    <span className="font-medium">Wallets</span>
                  </div>
                </MobileMenuItem>
                
                <MobileMenuItem href="/proposals" onClick={handleLinkClick} className="relative">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <Server className="w-5 h-5" />
                      <span className="font-medium">Proposals</span>
                    </div>
                    {proposalNotifications.length > 0 && (
                      <div className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {proposalNotifications.length}
                      </div>
                    )}
                  </div>
                </MobileMenuItem>
                
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
      )}
    </div>
  );
}