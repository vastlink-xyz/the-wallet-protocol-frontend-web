import { useBeforeUnload, useBlocker } from 'react-router-dom';
import { useCallback, useState } from 'react';

interface NavigationGuardProps {
  shouldBlock: boolean;
}

export function useNavigationGuard({ shouldBlock }: NavigationGuardProps) {
  const [showExitPrompt, setShowExitPrompt] = useState(false);

  useBeforeUnload(
    useCallback((event) => {
      if (shouldBlock) {
        event.preventDefault();
        return event.returnValue = "You have unsaved changes, are you sure you want to leave?";
      }
    }, [shouldBlock])
  );

  const blocker = useBlocker(
    useCallback(() => {
      if (shouldBlock) {
        setShowExitPrompt(true);
        return true;
      }
      return false;
    }, [shouldBlock])
  );

  const handleExitPrompt = (isQuit: boolean) => {
    setShowExitPrompt(false);
    if (isQuit) {
      blocker?.proceed?.();
    }
  }

  return {
    showExitPrompt,
    handleExitPrompt
  };
} 