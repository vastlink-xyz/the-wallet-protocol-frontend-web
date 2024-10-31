import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  // Auth related
  AuthPage,
  VerifyTransactionPage,
  VerifyRegistrationPage,
  
  // Dashboard related
  Dashboard,
  TokenPage,
  
  // Marketplace related
  MarketplacePage,
  SearchResultPage,
  MultisigSettingPage,
  FeatureDetailPage,

  // KYB & KYC related
  KYBProxyPage,
  KYBSelfPage,
  ProductFlowKYBStartingPage,
  ProductFlowKYBEndingPage,
  ProductKYCPage,
  
  // Invite related
  InviteTransferPage,
  InviteRegisterPage,
} from './routes';

// main layout
import MainLayout from '@/pages/main-layout';

// error
import ErrorPage from '@/pages/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth" replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/verify-transaction',
    element: <VerifyTransactionPage />,
  },
  {
    path: '/verify-registration',
    element: <VerifyRegistrationPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: ':token',
            element: <TokenPage />,
          }
        ]
      },
      {
        path: '/marketplace',
        children: [
          {
            index: true,
            element: <MarketplacePage />,
          },
          {
            path: 'search-result',
            element: <SearchResultPage />,
          },
          {
            path: 'feature-detail/:productId',
            element: <FeatureDetailPage />,
          },
          {
            path: 'multisig-setting',
            element: <MultisigSettingPage />,
          },
          {
            path: 'kyb-proxy',
            element: <KYBProxyPage />,
          },
          {
            path: 'kyb-self',
            element: <KYBSelfPage />,
          },
          {
            path: 'kyc',
            element: <ProductKYCPage />,
          },
          {
            path: 'product-flow',
            children: [
              {
                path: 'kyb',
                children: [
                  {
                    path: 'starting',
                    element: <ProductFlowKYBStartingPage />,
                  },
                  {
                    path: 'ending',
                    element: <ProductFlowKYBEndingPage />,
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/invite',
    children: [
      {
        path: 'transfer',
        element: <InviteTransferPage />,
      },
      {
        path: 'register',
        element: <InviteRegisterPage />,
      }
    ]
  },
]);

export default router;
