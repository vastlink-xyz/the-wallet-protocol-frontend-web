import { useLocation } from "react-router-dom";

type MatchType = 'exact' | 'startsWith' | 'pattern' | 'endsWith' | 'includes';

interface RouteRule {
  path: string;
  match: MatchType;
  pattern?: RegExp;
}

function useRouteMatch(rules: RouteRule[]) {
  const { pathname } = useLocation();

  const isMatched = rules.some(rule => {
    switch (rule.match) {
      case 'exact':
        return pathname === rule.path;
      case 'startsWith':
        return pathname.startsWith(rule.path);
      case 'endsWith':
        return pathname.endsWith(rule.path);
      case 'includes':
        return pathname.includes(rule.path);
      case 'pattern':
        return rule.pattern?.test(pathname);
      default:
        return false;
    }
  });

  return isMatched;
}

// ChatBot rules
const hideChatbotRules = [
  { path: '/', match: 'exact' as const },
  { path: '/auth', match: 'exact' as const },
  { path: '/verify-transaction', match: 'exact' as const },
  { path: '/verify-registration', match: 'exact' as const },
  { path: '/invite', match: 'startsWith' as const },
];

// Header rules
const disableHeaderRules = [
  { path: '/', match: 'exact' as const },
  { path: '/auth', match: 'exact' as const },
  { path: '/verify-transaction', match: 'exact' as const },
  { path: '/verify-registration', match: 'exact' as const },
  { path: '/invite', match: 'startsWith' as const },
];

export function useLayoutFeatures() {
  const hideChatbot = useRouteMatch(hideChatbotRules);
  const disableHeader = useRouteMatch(disableHeaderRules);

  return {
    hideChatbot,
    disableHeader,
  };
}
