'use client';

import { useEffect, useState } from 'react';
import { Wallet, LogOut, MenuIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { isProtectedRoute } from '@/constants/routes';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface MobileMenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

export function MobileMenu() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const menuItems: MobileMenuItem[] = [
    {
      icon: <Wallet className="w-5 h-5" />,
      label: 'Wallets',
      href: '/assets',
    },
  ];

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
                {menuItems.map((item) => (
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