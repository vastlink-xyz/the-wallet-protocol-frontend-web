import axios, { AxiosResponse, AxiosError } from 'axios'
import { auth } from "@/lib/utils";
import { toast } from 'react-toastify';
import { auth0TokenManager } from '@/lib/utils/auth0TokenManager';

axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_VASTLINK_CLIENT_API_KEY,
    'x-api-secret': import.meta.env.VITE_VASTLINK_CLIENT_API_SECRET,
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await auth0TokenManager.getToken();
      console.log("token is", token);
      config.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error('Error getting access token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

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
