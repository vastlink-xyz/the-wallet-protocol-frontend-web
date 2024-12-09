import { CustomStorage } from "./storage";

export type AuthStoreType = 'address' | 'username' | 'displayName' |
'authenticatedHeader' | 'authenticated' | 'desUsername' | 'aeskey';

class Auth {
  private storages: { [key in AuthStoreType]: CustomStorage };

  constructor() {
    this.storages = {
      username: new CustomStorage('username'),
      displayName: new CustomStorage('displayName'),
      address: new CustomStorage('address'),
      authenticatedHeader: new CustomStorage('authenticatedHeader'),
      authenticated: new CustomStorage('authenticated'),
      desUsername: new CustomStorage('desUsername'),
      aeskey: new CustomStorage('aeskey')
    };
  }

  saveAuthDataByKey(key: AuthStoreType, value: any): boolean {
    return this.storages[key].setData(value);
  }

  getAuthDataByKey(key: AuthStoreType): any | null {
    return this.storages[key].getData();
  }

  removeAuthDataByKey(key: AuthStoreType): void {
    this.storages[key].remove();
  }

  clearAllAuthData(): void {
    for (const key in this.storages) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.storages.hasOwnProperty(key)) {
        this.storages[key as AuthStoreType].remove();
      }
    }
  }
  
  all(): { [key in AuthStoreType]?: any } {
    const allData: { [key in AuthStoreType]?: any } = {};
    for (const key in this.storages) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.storages.hasOwnProperty(key)) {
        allData[key as AuthStoreType] = this.storages[key as AuthStoreType].getData();
      }
    }
    return allData;
  }

  isAuthenticated(): boolean {
    // return false
    return !!this.getAuthDataByKey('address')
  }

  getUserRandomAvatar(avatarIndex?: number): string {
    if (avatarIndex) {
      return `/static/avatars/${avatarIndex}.svg`;
    }
    return `/static/avatars/${1}.svg`;
  }
}

export const auth = new Auth();
