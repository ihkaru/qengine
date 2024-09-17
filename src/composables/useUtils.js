export function useUtils() {
  const getAppVersion = () => {
    return process.env.PWA_VERSION || "0.0.1"; // Default version if not set
  };
  return { getAppVersion };
}
