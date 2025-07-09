import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import { notificationService, BaseNotification, NotificationContext } from '@/services/NotificationService';

interface UseNotificationsOptions {
  enabled?: boolean;
}

export function useNotifications(options: UseNotificationsOptions = {}) {
  const { enabled = true } = options;
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const shouldShow = useMemo(() => {
    const excludedPaths = ['/auth/google-callback', '/auth/stytch-callback', '/login', '/invite'];
    const exactExcludedPaths = ['/'];
    const isExcluded = excludedPaths.some(excludedPath => pathname.startsWith(excludedPath)) || exactExcludedPaths.includes(pathname);
    return !isExcluded;
  }, [pathname]);

  // Separate queries for different notification types
  const mfaQuery = useQuery({
    queryKey: ['notifications', 'mfa'],
    queryFn: async (): Promise<BaseNotification[]> => {
      try {
        if (!shouldShow) return [];
        return await notificationService.getMFANotifications();
      } catch (error) {
        console.error('Error fetching MFA notifications:', error);
        return [];
      }
    },
    enabled: enabled && shouldShow,
    refetchInterval: 60 * 60 * 1000, // Refetch every hour for MFA
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
  });

  // Combine notifications
  const allNotifications = useMemo(() => {
    const mfaNotifications = mfaQuery.data || [];
    return [...mfaNotifications];
  }, [mfaQuery.data]);

  // Invalidation functions
  const invalidateMFANotifications = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['notifications', 'mfa'] });
  }, [queryClient]);

  // Refresh notifications and team wallet indicators after proposal operations
  const refreshNotifications = useCallback((_targetAuthMethodId?: string | null, userEthAddress?: string | null) => {
    // Refresh team wallets to update red dot indicators
    if (userEthAddress) {
      queryClient.invalidateQueries({ queryKey: ['team-wallets', userEthAddress] });
    }
  }, [queryClient]);

  const isLoading = mfaQuery.isLoading
  const error = mfaQuery.error

  return {
    notifications: allNotifications,
    mfaNotifications: mfaQuery.data || [],
    isLoading,
    error,
    refetch: () => Promise.all([mfaQuery.refetch()]),
    
    // Invalidation functions
    invalidateMFANotifications,
    refreshNotifications,
  };
}