import axios, { AxiosResponse } from 'axios'
import { auth } from "@/lib/utils";
import { toast } from 'react-toastify';
import { createPassportClient } from '@0xpass/passport-viem';
import { http } from 'viem';
import { sepolia } from 'viem/chains';

interface AuthenticatedRequestConfig {
  path: string;
  data: any;
}

export async function makeAuthenticatedApiRequest<T=any>({ path, data }: AuthenticatedRequestConfig): Promise<AxiosResponse<T>> {
  try {
    const { authenticatedHeader, desUsername } = auth.all();

    const response: AxiosResponse<T> = await axios.post(
      `${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/${path}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Encrypted-Key": authenticatedHeader["X-Encrypted-Key"],
          "X-Scope-Id": authenticatedHeader["X-Scope-Id"],
          "X-Encrypted-User": authenticatedHeader["X-Encrypted-User"],
          "X-Encrypted-Session": authenticatedHeader["X-Encrypted-Session"],
          "X-Passport-Username": desUsername.username,
        },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function authenticatedHeaderForRequest() {
  const { authenticatedHeader, desUsername } = auth.all();

  const headers = {
    "Content-Type": "application/json",
    "X-Encrypted-Key": authenticatedHeader["X-Encrypted-Key"],
    "X-Scope-Id": authenticatedHeader["X-Scope-Id"],
    "X-Encrypted-User": authenticatedHeader["X-Encrypted-User"],
    "X-Encrypted-Session": authenticatedHeader["X-Encrypted-Session"],
    "X-Passport-Username": desUsername.username,
  }

  return headers
}

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
