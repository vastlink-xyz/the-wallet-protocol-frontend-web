import { getPrice } from '@/lib/web3/price';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getPrice();
  return NextResponse.json(data);
}