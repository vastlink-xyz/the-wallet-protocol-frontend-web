import en from '@root/messages/en.json';
import zh from '@root/messages/en.json';

type AllMessages = typeof en & typeof zh;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends AllMessages {}

  // Declare the OneSdk variable
  declare const OneSdk: any;
}
