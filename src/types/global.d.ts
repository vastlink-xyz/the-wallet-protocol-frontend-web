import en from '@root/messages/en.json';
import zh from '@root/messages/en.json';

type AllMessages = typeof en & typeof zh;

declare global {
  function log(message: string, level?: 'info' | 'warn' | 'error'): void;

  // Use type safe message keys with `next-intl`
  interface IntlMessages extends AllMessages {}
}
