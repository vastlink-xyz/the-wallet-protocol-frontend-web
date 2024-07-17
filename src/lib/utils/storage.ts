class CustomStorage {
  private isClient: boolean;
  private key: string;

  constructor(key: string) {
    this.isClient = typeof window !== 'undefined';
    this.key = key;
  }

  set(value: string): void {
    if (this.isClient) {
      localStorage.setItem(this.key, value);
    }
  }

  get(): string | null {
    if (this.isClient) {
      return localStorage.getItem(this.key);
    }
    return null;
  }

  remove(): void {
    if (this.isClient) {
      localStorage.removeItem(this.key);
    }
  }

  // clear(): void {
  //   if (this.isClient) {
  //     localStorage.clear();
  //   }
  // }
}

export const storageAuthenticatedHeader = new CustomStorage('authenticatedHeader');
