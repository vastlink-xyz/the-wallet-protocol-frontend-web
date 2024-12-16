import DashboardLayout from '@/pages/dashboard/layout';
import ErrorPage from '@/pages/error';
import { marketplaceLoader } from '@/pages/marketplace/route';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { RootLayout } = await import('@/pages/root-layout');
      return { Component: RootLayout };
    },
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        async lazy() {
          const { default: MainLayout } = await import('@/pages/main-layout');
          return { Component: MainLayout };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: LandingPage } = await import('@/pages/landing/page');
              return { Component: LandingPage };
            },
          },
          {
            path: "/auth",
            async lazy() {
              const { default: AuthPage } = await import('@/pages/auth/page');
              return { Component: AuthPage };
            },
          },
          {
            path: '/verify-transaction',
            async lazy() {
              const { default: VerifyTransactionPage } = await import('@/pages/verify/transaction/page');
              return { Component: VerifyTransactionPage };
            },
          },
          {
            path: '/verify-auth',
            async lazy() {
              const { default: VerifyAuthPage } = await import('@/pages/verify/auth/page');
              return { Component: VerifyAuthPage };
            },
          },
          {
            path: '/verify-daily-withdrawal-limit',
            async lazy() {
              const { default: VerifyDailyWithdrawalLimitPage } = await import('@/pages/verify/daily-withdrawal-limit/page');
              return { Component: VerifyDailyWithdrawalLimitPage };
            },
          },
          {
            path: 'dashboard',
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                async lazy() {
                  const { default: Dashboard } = await import('@/pages/dashboard/page');
                  return { Component: Dashboard };
                },
              },
              {
                path: 'viewall',
                async lazy() {
                  const { default: ViewAllPage } = await import('@/pages/dashboard/viewall/page');
                  return { Component: ViewAllPage };
                },
              },
              {
                path: ':token',
                async lazy() {
                  const { default: TokenPage } = await import('@/pages/dashboard/token/page');
                  return { Component: TokenPage };
                },
              },
            ]
          },
          {
            path: 'marketplace',
            children: [
              {
                index: true,
                async lazy() {
                  const { default: MarketplacePage } = await import('@/pages/marketplace/page');
                  return { Component: MarketplacePage };
                },
                loader: marketplaceLoader,
              },
              {
                path: 'search-result',
                async lazy() {
                  const { default: SearchResultPage } = await import('@/pages/marketplace/search-result/page');
                  return { Component: SearchResultPage };
                },
              },
              {
                path: 'feature-detail/:productId',
                async lazy() {
                  const { default: FeatureDetailPage } = await import('@/pages/marketplace/feature-detail/page');
                  return { Component: FeatureDetailPage };
                },
              },
              {
                path: 'multisig-setting',
                async lazy() {
                  const { default: MultisigSettingPage } = await import('@/pages/marketplace/multisig-setting/page');
                  return { Component: MultisigSettingPage };
                },
              },
              {
                path: 'kyb-proxy',
                async lazy() {
                  const { default: KYBProxyPage } = await import('@/pages/marketplace/kyb-proxy/page');
                  return { Component: KYBProxyPage };
                },
              },
              {
                path: 'kyb-self',
                async lazy() {
                  const { default: KYBSelfPage } = await import('@/pages/marketplace/kyb-self/page');
                  return { Component: KYBSelfPage };
                },
              },
              {
                path: 'kyc',
                async lazy() {
                  const { default: ProductKYCPage } = await import('@/pages/marketplace/kyc/page');
                  return { Component: ProductKYCPage };
                },
              },
              {
                path: 'product-flow',
                children: [
                  {
                    path: 'kyb',
                    children: [
                      {
                        path: 'starting',
                        async lazy() {
                          const { default: ProductFlowKYBStartingPage } = await import('@/pages/marketplace/product-flow/kyb/starting/page');
                          return { Component: ProductFlowKYBStartingPage };
                        },
                      },
                      {
                        path: 'ending',
                        async lazy() {
                          const { default: ProductFlowKYBEndingPage } = await import('@/pages/marketplace/product-flow/kyb/ending/page');
                          return { Component: ProductFlowKYBEndingPage };
                        },
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: 'invite',
            children: [
              {
                path: 'transfer',
                async lazy() {
                  const { default: InviteTransferPage } = await import('@/pages/invite/transfer/page');
                  return { Component: InviteTransferPage };
                },
              },
              {
                path: 'register',
                async lazy() {
                  const { default: InviteRegisterPage } = await import('@/pages/invite/register/page');
                  return { Component: InviteRegisterPage };
                },
              }
            ]
          },
          {
            path: 'profile',
            async lazy() {
              const { default: ProfilePage } = await import('@/pages/profile/index');
              return { Component: ProfilePage };
            },
          },
          {
            path: 'multisender',
            async lazy() {
              const { default: MultisenderPage } = await import('@/pages/multisender/page');
              return { Component: MultisenderPage };
            },
          }
        ]
      }
    ]
  }
]);

export default router;
