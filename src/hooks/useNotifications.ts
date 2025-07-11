import { useQuery, useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import { notificationService, Notification, MFANotification, PendingProposalNotification, NotificationContext } from '@/services/NotificationService';
import { shouldShowNotificationOnPath } from '@/constants/routes';

interface UseNotificationsOptions {
  enabled?: boolean;
}

export function useNotifications(options: UseNotificationsOptions = {}) {
  const { enabled = true } = options;
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const shouldShow = useMemo(() => {
    return shouldShowNotificationOnPath(pathname);
  }, [pathname]);

  // Separate queries for different notification types
  const mfaQuery = useQuery({
    queryKey: ['notifications', 'mfa'],
    queryFn: async (): Promise<MFANotification[]> => {
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
    staleTime: 5 * 1000,
    refetchOnWindowFocus: true,
  });

  const proposalsQuery = useQuery({
    queryKey: ['notifications', 'proposals'],
    queryFn: async (): Promise<PendingProposalNotification[]> => {
      try {
        if (!shouldShow) return [];
        return await notificationService.getPendingProposalNotifications();
      } catch (error) {
        console.error('Error fetching proposal notifications:', error);
        return [];
      }
    },
    enabled: enabled && shouldShow,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes for proposals
    staleTime: 5 * 1000,
    refetchOnWindowFocus: true,
  });

  // Security notifications, currently just MFA
  const securityNotifications = useMemo(() => {
    return [
      ...mfaQuery.data || [],
    ]
  }, [mfaQuery.data])

  // Combine notifications
  const allNotifications = useMemo(() => {
    const proposalNotifications = proposalsQuery.data || [];
    return [...securityNotifications, ...proposalNotifications];
  }, [securityNotifications, proposalsQuery.data]);

  // Invalidation functions
  const invalidateMFANotifications = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['notifications', 'mfa'] });
  }, [queryClient]);

  const invalidateProposalNotifications = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['notifications', 'proposals'] });
  }, [queryClient]);

  // Refresh notifications and team wallet indicators after proposal operations
  const refreshNotifications = useCallback((_targetAuthMethodId?: string | null, userEthAddress?: string | null) => {
    // Refresh team wallets to update red dot indicators
    if (userEthAddress) {
      queryClient.invalidateQueries({ queryKey: ['team-wallets', userEthAddress] });
    }
    // Refresh proposal notifications
    invalidateProposalNotifications();
  }, [queryClient, invalidateProposalNotifications]);

  const isLoading = mfaQuery.isLoading || proposalsQuery.isLoading;
  const error = mfaQuery.error || proposalsQuery.error;

  return {
    allNotifications,
    mfaNotifications: mfaQuery.data || [],
    securityNotifications,
    proposalNotifications: proposalsQuery.data || [],
    isLoading,
    error,
    refetch: () => Promise.all([mfaQuery.refetch(), proposalsQuery.refetch()]),
    
    // Invalidation functions
    invalidateMFANotifications,
    invalidateProposalNotifications,
    refreshNotifications,
  };
}