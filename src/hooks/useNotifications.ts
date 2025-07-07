import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getProviderByAuthMethodType } from '@/lib/lit';
import { notificationService, BaseNotification, NotificationContext } from '@/services/NotificationService';

interface UseNotificationsOptions {
  enabled?: boolean;
}

export function useNotifications(options: UseNotificationsOptions = {}) {
  const { enabled = true } = options;
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const context: NotificationContext = useMemo(() => ({
    authMethodId: null,
    currentPath: pathname,
  }), [pathname]);

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

  const proposalsQuery = useQuery({
    queryKey: ['notifications', 'proposals', pathname],
    queryFn: async (): Promise<BaseNotification[]> => {
      try {
        if (!shouldShow) return [];
        
        // Get auth method ID
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) return [];

        const provider = getProviderByAuthMethodType(authMethod.authMethodType);
        const authMethodId = await provider.getAuthMethodId(authMethod);

        const updatedContext = { ...context, authMethodId };
        return await notificationService.getProposalNotifications(updatedContext);
      } catch (error) {
        console.error('Error fetching proposal notifications:', error);
        return [];
      }
    },
    enabled: enabled && shouldShow,
    refetchInterval: 60 * 1000, // Refetch every minute for proposals
    staleTime: 10 * 1000,
    refetchOnWindowFocus: true,
  });

  // Combine notifications
  const allNotifications = useMemo(() => {
    const mfaNotifications = mfaQuery.data || [];
    const proposalNotifications = proposalsQuery.data || [];
    return [...mfaNotifications, ...proposalNotifications];
  }, [mfaQuery.data, proposalsQuery.data]);

  // Invalidation functions
  const invalidateMFANotifications = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['notifications', 'mfa'] });
  }, [queryClient]);

  const invalidateProposalNotifications = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['notifications', 'proposals'] });
  }, [queryClient]);

  const invalidateAllNotifications = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['notifications'] });
  }, [queryClient]);

  // Refresh notifications and team wallet indicators after proposal operations
  const refreshProposalUI = useCallback((_targetAuthMethodId?: string | null, userEthAddress?: string | null) => {
    // Refresh proposal notifications in the notification bar
    invalidateProposalNotifications();
    // Refresh team wallets to update red dot indicators
    if (userEthAddress) {
      queryClient.invalidateQueries({ queryKey: ['team-wallets', userEthAddress] });
    }
  }, [invalidateProposalNotifications, queryClient]);


  const isLoading = mfaQuery.isLoading || proposalsQuery.isLoading;
  const error = mfaQuery.error || proposalsQuery.error;

  return {
    notifications: allNotifications,
    mfaNotifications: mfaQuery.data || [],
    proposalNotifications: proposalsQuery.data || [],
    isLoading,
    error,
    refetch: () => Promise.all([mfaQuery.refetch(), proposalsQuery.refetch()]),
    
    // Invalidation functions
    invalidateMFANotifications,
    invalidateProposalNotifications,
    invalidateAllNotifications,
    refreshProposalUI,
  };
}