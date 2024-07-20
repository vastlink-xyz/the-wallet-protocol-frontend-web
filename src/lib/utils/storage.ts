import theWalletPassportService from "@/services/PassportService";

export class CustomStorage {
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

  setData(value: any): boolean {
    if (this.isClient) {
      try {
        const jsonString = JSON.stringify(value);
        localStorage.setItem(this.key, jsonString);
        return true;
      } catch (error) {
        console.error("Failed to stringify object", error);
        return false;
      }
    }
    return false;
  }

  getData(): any | null {
    if (this.isClient) {
      const item = localStorage.getItem(this.key);
      if (item) {
        try {
          return JSON.parse(item);
        } catch (error) {
          console.error("Failed to parse JSON", error);
          return null;
        }
      }
    }
    return null;
  }

  // clear(): void {
  //   if (this.isClient) {
  //     localStorage.clear();
  //   }
  // }
}
