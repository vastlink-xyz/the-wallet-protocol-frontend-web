import axios, { AxiosResponse } from 'axios'
import { auth } from "./auth";
import { toast } from 'react-toastify';
import { createPassportClient } from '@0xpass/passport-viem';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { log } from '.';

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
