type TokenGetter = () => Promise<string>;

class Auth0TokenManager {
  private static instance: Auth0TokenManager;
  private tokenGetter: TokenGetter | null = null;

  private constructor() {}

  public static getInstance(): Auth0TokenManager {
    if (!Auth0TokenManager.instance) {
      Auth0TokenManager.instance = new Auth0TokenManager();
    }
    return Auth0TokenManager.instance;
  }

  setTokenGetter(getter: TokenGetter) {
    this.tokenGetter = getter;
  }

  async getToken(): Promise<string> {
    if (!this.tokenGetter) {
      throw new Error('Token getter not set. Please call setTokenGetter first.');
    }
    return this.tokenGetter();
  }
}

export const auth0TokenManager = Auth0TokenManager.getInstance();