import axios from 'axios';

/**
 * Get existing PKP information
 * Calls backend API to retrieve PKP information bound to a specific Google authentication
 * 
 * @param {Object} params - Request parameters
 * @param {string} params.credential - Google authentication credential
 * @param {string} params.clientId - Google client ID
 * @returns {Promise<Object>} - Returns PKP information or error
 */
export async function getExistingPkp({
  credential,
  clientId
}: {
  credential: string;
  clientId: string;
}): Promise<any> {
  try {
    // Call backend API to get PKP information
    const response = await axios.post('http://localhost:5001/lit/get-existing-pkp', {
      credential,
      clientId
    });
    
    // If request is successful, return PKP information
    if (response.data.success) {
      return {
        success: true,
        pkpInfo: response.data.pkpInfo
      };
    } else {
      // If backend returns failure information
      return {
        success: false,
        message: response.data.message || 'Failed to retrieve PKP'
      };
    }
  } catch (error: any) {
    console.error('Error retrieving PKP:', error);
    
    // Handle 404 error - PKP not found
    if (error.response?.status === 404) {
      return {
        success: false,
        message: 'No PKP found associated with this authentication method',
        notFound: true
      };
    }
    
    // Handle other errors
    return {
      success: false,
      message: error.response?.data?.message || error.message || 'Unknown error occurred while retrieving PKP',
      error
    };
  }
}
