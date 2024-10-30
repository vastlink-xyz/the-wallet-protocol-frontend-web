import en from '@/lib/i18n/locales/en.json';
import zh from '@/lib/i18n/locales/zh.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
      zh: typeof zh;
    };
  }
}
