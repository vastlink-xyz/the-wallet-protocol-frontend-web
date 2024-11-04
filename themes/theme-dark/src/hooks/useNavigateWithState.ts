import { log } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigateOptions {
  replace?: boolean;
  preserveScroll?: boolean;
  preserveQuery?: boolean;
  state?: Record<string, any>;
}

export function useNavigateWithState() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateWithState = (path: string, options?: NavigateOptions) => {
    navigate(path);
    return
    const finalPath = options?.preserveQuery !== false && location.search 
      ? `${path}${location.search}`
      : path;

    log('navigateWithState', finalPath);

    navigate(finalPath, {
      replace: options?.replace,
      state: {
        from: location.pathname,
        search: location.search,
        lastScrollPosition: options?.preserveScroll !== false ? window.scrollY : 0,
        ...options?.state,
      }
    });
  };

  const goBack = () => {
    log('goBack', location.state);
    if (location.state?.from) {
      navigate(location.state.from, {
        state: {
          ...location.state,
          lastScrollPosition: location.state.lastScrollPosition,
        }
      });
    } else {
      navigate(-1);
    }
  };

  return {
    navigateWithState,
    goBack,
  };
} 

