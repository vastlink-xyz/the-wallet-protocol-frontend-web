import axios, { AxiosResponse } from 'axios'
import { auth } from "@/lib/utils";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL,
});

api.interceptors.request.use(
  // kkktodo  401
  (config) => {
    const token = auth.all().idToken;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
