interface CachedPromise<T> {
  promise: Promise<T>;
  timestamp: number;
}

export class PromiseCache {
  private cache = new Map<string, CachedPromise<any>>();
  private readonly expiryTime: number;

  constructor(expiryTimeMs: number = 800) {
    this.expiryTime = expiryTimeMs;
  }

  async getOrCreate<T>(
    key: string,
    creator: () => Promise<T>
  ): Promise<T> {
    const now = Date.now();
    const cached = this.cache.get(key);

    // if there is a request in progress with the same key, return its promise directly
    if (cached && now - cached.timestamp < this.expiryTime) {
      return cached.promise;
    }

    // create a new promise and cache it
    const promise = creator();
    this.cache.set(key, {
      promise,
      timestamp: now
    });

    try {
      const result = await promise;
      return result;
    } finally {
      // clean up cache after request is complete
      setTimeout(() => {
        if (this.cache.get(key)?.timestamp === now) {
          this.cache.delete(key);
        }
      }, this.expiryTime);
    }
  }

  clear() {
    this.cache.clear();
  }
} 