import Moralis from 'moralis';

let isInitialized = false;

export async function initializeMoralis() {
  if (isInitialized) {
    return;
  }

  if (!process.env.MORALIS_API_KEY) {
    throw new Error('Moralis API key is not defined');
  }

  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  isInitialized = true;
} 