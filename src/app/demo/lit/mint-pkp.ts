import axios from 'axios';

export const mintPkp = async (credential: string, clientId: string) => {
  try {
    const baseUrl = 'http://localhost:5001';
    const response = await axios.post(`${baseUrl}/lit/mint-pkp-test`, {
      credential,
      clientId,
    });

    if (!response.data) {
      throw new Error('Failed to mint PKP');
    }

    return response.data;
  } catch (error) {
    console.error('Error minting PKP:', error);
    throw error;
  }
};
