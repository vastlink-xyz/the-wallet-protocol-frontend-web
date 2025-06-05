export const parseError = (error: any) => {
  // Check if it's an Axios error
  if (error?.isAxiosError) {
    return error.response?.data || error.message || error;
  }

  // Original logic for string errors
  if (typeof error === 'string') {
    try {
      const parsed = JSON.parse(error);
      return parsed;
    } catch (e) {
      return error;
    }
  }
  return error;
};
