import axios, { AxiosError } from 'axios';

export function handleError(error: unknown): { message: string, errorType?: string } {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // Error response data from the server
      const responseData = axiosError.response.data as any
      if (responseData && responseData.message) {
        const { errorType, message } = responseData
        if (errorType) {
          return {
            message,
            errorType,
          }
        }
      }
      return { message: `${axiosError.message}` };
    } else if (axiosError.request) {
      // Request was made but no response was received
      return { message: 'Network error, please check your internet connection' };
    } else {
      // Error occurred while setting up the request
      return { message: `Request error: ${axiosError.message}` };
    }
  } else if (error instanceof Error) {
    // Regular Error object
    return { message: error.message };
  } else {
    // Unknown error type
    return { message: 'An unknown error occurred' };
  }
}
