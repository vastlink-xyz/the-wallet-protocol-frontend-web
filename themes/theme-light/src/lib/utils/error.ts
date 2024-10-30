import axios, { AxiosError } from 'axios';

export function handleError(error: unknown): { message: string } {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // Error response from the server
      return { message: `${(axiosError.response.data as { message?: string })?.message || axiosError.message}` };
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
