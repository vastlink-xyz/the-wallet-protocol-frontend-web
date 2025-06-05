import { NextResponse } from 'next/server';

// Define type for fee data
interface BitcoinFeeData {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
  economyFee?: number;
  minimumFee?: number;
  _source?: string;
}

// Primary and fallback API URLs
const PRIMARY_API_URL = 'https://mempool.space/testnet/api/v1';
const FALLBACK_API_URLS = [
  'https://mempool.bitcoinrpc.org/api/v1',
  'https://mempool.emzy.de/testnet/api/v1'
];
const CACHE_DURATION = 300; // Cache for 5 minutes (increased from 60s)
const MAX_RETRIES = 3; // Maximum number of retry attempts

// Backup static values to use when all APIs fail
const BACKUP_FEE_VALUES: BitcoinFeeData = {
  fastestFee: 25,   // High priority (likely to be included in the next block)
  halfHourFee: 15,  // Medium priority (likely to be included within 3 blocks)
  hourFee: 10,      // Low priority (likely to be included within 6 blocks)
  economyFee: 5,    // Very low priority (might take longer)
  minimumFee: 1     // Absolute minimum fee
};

// In-memory cache (will reset on server restart but helps during high-traffic periods)
let cachedData: BitcoinFeeData | null = null;
let cacheTimestamp = 0;

/**
 * Attempts to fetch fee recommendations from a given API URL
 * @param apiUrl Base URL for mempool API
 * @returns Fee data or null if request fails
 */
async function fetchFeeData(apiUrl: string): Promise<BitcoinFeeData | null> {
  try {
    const response = await fetch(`${apiUrl}/fees/recommended`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'WalletProtocol/1.0'
      },
      // Make sure we don't use cache for too long
      cache: 'no-cache'
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${apiUrl}:`, error);
    return null;
  }
}

/**
 * GET handler for Bitcoin mempool fee recommendations
 * This API proxies requests to mempool.space and caches responses
 */
export async function GET() {
  try {
    // Check in-memory cache first
    const now = Date.now();
    if (cachedData && (now - cacheTimestamp < CACHE_DURATION * 1000)) {
      console.log('Using cached Bitcoin fee data');
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': `public, max-age=${CACHE_DURATION}`,
          'X-Data-Source': 'cache'
        },
      });
    }
    
    // Try primary endpoint first
    let data = await fetchFeeData(PRIMARY_API_URL);
    
    // If primary fails, try fallbacks with retries
    if (!data) {
      console.log('Primary Bitcoin fee API failed, trying fallbacks');
      
      for (const fallbackUrl of FALLBACK_API_URLS) {
        // Try each fallback with retries
        for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
          console.log(`Trying fallback ${fallbackUrl}, attempt ${attempt + 1}`);
          data = await fetchFeeData(fallbackUrl);
          
          if (data) break; // Exit retry loop if successful
          
          // Wait before retrying (exponential backoff)
          if (attempt < MAX_RETRIES - 1) {
            await new Promise(resolve => setTimeout(resolve, 500 * Math.pow(2, attempt)));
          }
        }
        
        if (data) break; // Exit fallback loop if successful
      }
    }
    
    // If all APIs fail, use backup values
    if (!data) {
      console.log('All Bitcoin fee APIs failed, using backup values');
      data = { ...BACKUP_FEE_VALUES, _source: 'backup' };
    }
    
    // Update in-memory cache
    cachedData = data;
    cacheTimestamp = now;
    
    // Add data source for debugging
    const dataSource = data._source || 'api';
    delete data._source; // Remove internal field
    
    // Return the data with cache headers
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': `public, max-age=${CACHE_DURATION}`,
        'X-Data-Source': dataSource
      },
    });
  } catch (error) {
    console.error('Error in Bitcoin fee API:', error);
    
    // Return backup values if there's an unexpected error
    return NextResponse.json(
      { ...BACKUP_FEE_VALUES, source: 'backup-error' },
      { 
        status: 200, // Still return 200 to prevent frontend errors
        headers: {
          'Cache-Control': `public, max-age=300`,
          'X-Data-Source': 'backup-error'
        },
      }
    );
  }
} 