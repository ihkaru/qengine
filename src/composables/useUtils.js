import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function useUtils() {
  const getAppVersion = () => {
    return process.env.PWA_VERSION || "0.0.1"; // Default version if not set
  };

  const DateTimeFormat = "YYYY-MM-DD HH:mm:ss";

  const now = () => {
    return dayjs();
  };

  return { getAppVersion, dayjs, DateTimeFormat };
}
