import { lazy } from 'react';

// auth
export const AuthPage = lazy(() => import('@/pages/auth/page'))

// dashboard
export const Dashboard = lazy(() => import('@/pages/dashboard/page'))
export const TokenPage = lazy(() => import('@/pages/dashboard/token/page'))

// marketplace
export const MarketplacePage = lazy(() => import('@/pages/marketplace/page'))
export const MultisigSettingPage = lazy(() => import('@/pages/marketplace/multisig-setting/page'))
export const SearchResultPage = lazy(() => import('@/pages/marketplace/search-result/page'))
export const FeatureDetailPage = lazy(() => import('@/pages/marketplace/feature-detail/page'))
// KYB
export const KYBProxyPage = lazy(() => import('@/pages/marketplace/kyb-proxy/page'))
export const KYBSelfPage = lazy(() => import('@/pages/marketplace/kyb-self/page'))
export const ProductFlowKYBStartingPage = lazy(() => import('@/pages/marketplace/product-flow/kyb/starting/page'))
export const ProductFlowKYBEndingPage = lazy(() => import('@/pages/marketplace/product-flow/kyb/ending/page'))

// invite
export const InviteTransferPage = lazy(() => import('@/pages/invite/transfer'))
export const InviteRegisterPage = lazy(() => import('@/pages/invite/register'))

// verify
export const VerifyTransactionPage = lazy(() => import('@/pages/verify/transaction/page'))
export const VerifyRegistrationPage = lazy(() => import('@/pages/verify/registration/page'))
