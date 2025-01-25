export const REACT_QUERY_STALE_TIME = 1000 * 60 * 60 * 24; // 1 day
export const REACT_QUERY_GC_TIME = 1000 * 60 * 60 * 24; // 1 day
export const OneHourMs = 1000 * 60 * 60; // 1 hour

/**
 * Get a randomized time based on the base time and max offset
 * @param baseTime - The base time in milliseconds
 * @param maxOffset - The maximum offset in milliseconds
 * @returns The randomized time in milliseconds
 */
export function getRandomizedTime(baseTime: number, maxOffset: number = 5 * 60 * 1000): number {
  const randomOffsetMs = Math.floor(Math.random() * maxOffset);
  return baseTime + randomOffsetMs;
}
