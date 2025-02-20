class PasswordManager {
  private static instance: PasswordManager;
  private password: string | null = null;

  private constructor() {}

  static getInstance(): PasswordManager {
    if (!PasswordManager.instance) {
      PasswordManager.instance = new PasswordManager();
    }
    return PasswordManager.instance;
  }

  clearPassword() {
    console.log('clearing password')
    this.password = null;
  }

  setPassword(password: string) {
    console.log('setting password', password)
    this.password = password;
  }

  getPassword(): string | null {
    console.log('getting password')
    const temp = this.password;
    this.password = null;
    return temp;
  }
}

export const passwordManager = PasswordManager.getInstance();
