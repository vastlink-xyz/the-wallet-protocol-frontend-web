import en from '@root/messages/en.json';
import zh from '@root/messages/en.json';

type AllMessages = typeof en & typeof zh;

declare global {
  // Declare the OneSdk variable
  declare const OneSdk: any;

  interface Window {
    OneSdk?: any;
  }
}

declare module 'https://assets.frankiefinancial.io/one-sdk/v1/oneSdk.umd.js';
