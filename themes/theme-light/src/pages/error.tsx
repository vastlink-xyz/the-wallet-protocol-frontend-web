import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  useEffect(() => {
    // Get refresh count from sessionStorage to prevent infinite refresh loops
    const refreshCount = Number(sessionStorage.getItem('error_refresh_count') || 0);
    
    if (error.message?.includes('Failed to fetch dynamically imported module')) {
      // Only attempt to refresh once
      // This handles the case where a new version has been deployed
      // but the user's browser is still using the old version
      // Refreshing will reload index.html and get the latest resource references
      if (refreshCount < 1) {
        sessionStorage.setItem('error_refresh_count', String(refreshCount + 1));
        window.location.reload();
      } else {
        // If it still fails after refresh, it's likely due to other issues
        // Clear the counter and log the error to avoid further refresh attempts
        sessionStorage.removeItem('error_refresh_count');
        console.error('Failed to load module after multiple attempts');
      }
    }
  }, []);

  return (
    <div id="error-page" className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg text-gray-600 italic">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
}
