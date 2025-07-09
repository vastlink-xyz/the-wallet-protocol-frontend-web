'use client';

import { useEffect, useState } from 'react';
import { Wallet, Database, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { isProtectedRoute } from '@/constants/routes';
import { Badge } from '../ui/badge';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

export function Sidebar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    {
      icon: <Database className="w-5 h-5" />,
      label: 'Proposal',
      href: '/proposals',
      badge: 12,
    },
    // {
    //   icon: <DollarSign className="w-5 h-5" />,
    //   label: 'Pricing',
    //   href: '/pricing',
    // },
    {
      icon: <Settings className="w-5 h-5" />,
      label: 'Setting',
      href: '/settings',
    },
  ];

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
      <div className="py-4">
        <nav className="space-y-6">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                flex items-center justify-between py-2.5 px-6 font-medium transition-colors
                ${pathname === item.href 
                  ? 'bg-black/20 text-[#090909]' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <div className="flex items-center space-x-5">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <Badge>12</Badge>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}