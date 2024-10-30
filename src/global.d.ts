interface Window {
  [key: `mount${string}`]: ((containerId: string) => void) | undefined;
}
