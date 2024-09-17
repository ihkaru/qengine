export function useUtils() {
  const getAppVersion = () => {
    return process.env.PWA_VERSION || "1.0.0"; // Default version if not set
  };
  return { getAppVersion };
}
