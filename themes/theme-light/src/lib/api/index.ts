import axios, { AxiosResponse, AxiosError } from 'axios'
import { auth } from "@/lib/utils";
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: import.meta.env.VITE_WALLET_PROTOCAL_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = auth.all().idToken;
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      const errorMessage = ((error.response.data as any).message as string) || 'Authentication error';
      console.log(`${errorMessage}, redirecting to login...`);
      
      // Clear the current token
      auth.clearAllAuthData();
      
      if (typeof window !== 'undefined') {
        // Show toast notification
        toast.error(errorMessage);
        // Redirect to login page using router
        console.warn('Router not set, falling back to window.location');
        window.location.href = '/auth';
      }
    }
    // Return the original error to preserve the error message
    return Promise.reject(error);
  }
);

export default api;
