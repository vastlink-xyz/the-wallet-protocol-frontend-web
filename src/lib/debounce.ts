/**
 * Creates a debounced function that delays invoking the original function 
 * until after a specified wait time has passed since the last time the 
 * debounced function was invoked.
 * Each call to the debounced function resets the timer.
 *
 * @param func - The function to debounce.
 * @param delay - The number of milliseconds to delay.
 * @returns Returns the new debounced function.
 */
function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  // To store the timer ID
  let timeoutId: ReturnType<typeof setTimeout>;

  // Return a new function
  return function(this: ThisParameterType<T>, ...args: Parameters<T>) {
    // Preserve the `this` context
    const context = this;

    // Clear the previous timeout if it exists
    clearTimeout(timeoutId);

    // Set a new timeout
    // After the delay, call the original function with the correct `this` context and arguments
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export default debounce;