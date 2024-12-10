import { useState, useEffect } from 'react';

// Define breakpoints
const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
} as const;

type Breakpoint = keyof typeof breakpoints;

// Define return type for the hook
type BreakpointState = {
  [K in Breakpoint]: boolean;
} & {
  current: Breakpoint;
};

// Singleton to manage resize listeners
class BreakpointManager {
  private static instance: BreakpointManager | null = null;
  private listeners: Set<(state: BreakpointState) => void> = new Set();
  private currentState: BreakpointState;

  private constructor() {
    this.currentState = this.getBreakpointState();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
    }
  }

  public static getInstance(): BreakpointManager {
    if (!BreakpointManager.instance) {
      BreakpointManager.instance = new BreakpointManager();
    }
    return BreakpointManager.instance;
  }

  private getBreakpointState(): BreakpointState {
    if (typeof window === 'undefined') {
      return {
        mobile: false,
        tablet: false,
        laptop: false,
        desktop: false,
        current: 'mobile',
      };
    }

    const width = window.innerWidth;
    const state = {
      mobile: width >= breakpoints.mobile,
      tablet: width >= breakpoints.tablet,
      laptop: width >= breakpoints.laptop,
      desktop: width >= breakpoints.desktop,
      current: 'mobile' as Breakpoint,
    };

    if (width >= breakpoints.desktop) {
      state.current = 'desktop';
    } else if (width >= breakpoints.laptop) {
      state.current = 'laptop';
    } else if (width >= breakpoints.tablet) {
      state.current = 'tablet';
    } else {
      state.current = 'mobile';
    }

    return state;
  }

  private handleResize = () => {
    this.currentState = this.getBreakpointState();
    this.listeners.forEach(listener => listener(this.currentState));
  };

  public subscribe(listener: (state: BreakpointState) => void): () => void {
    this.listeners.add(listener);
    // Immediately call listener with current state
    listener(this.currentState);
    
    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
      if (this.listeners.size === 0 && typeof window !== 'undefined') {
        window.removeEventListener('resize', this.handleResize);
        BreakpointManager.instance = null;
      }
    };
  }

  public getCurrentState(): BreakpointState {
    return this.currentState;
  }
}

function useBreakpoint(): BreakpointState {
  const [state, setState] = useState<BreakpointState>(() => 
    BreakpointManager.getInstance().getCurrentState()
  );

  useEffect(() => {
    const unsubscribe = BreakpointManager.getInstance().subscribe(setState);
    return unsubscribe;
  }, []);

  return state;
}

// Export individual breakpoint hooks
export function useMobile() {
  const breakpoint = useBreakpoint();
  return breakpoint.current === 'mobile';
}

export function useTablet() {
  const breakpoint = useBreakpoint();
  return breakpoint.current === 'tablet';
}

export function useLaptop() {
  const breakpoint = useBreakpoint();
  return breakpoint.current === 'laptop';
}

export function useDesktop() {
  const breakpoint = useBreakpoint();
  return breakpoint.current === 'desktop';
}

// Hook to check if current width is at least the specified breakpoint
export function useMinBreakpoint(breakpoint: Breakpoint) {
  const state = useBreakpoint();
  return state[breakpoint];
}

export default useBreakpoint;
