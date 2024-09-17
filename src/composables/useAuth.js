// src/composables/useAuth.js
import { ref, watch } from "vue";
import localForage from "src/boot/local-forage";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import { decodeCredential } from "vue3-google-signin";
import { useKegiatanService } from "./useKegiatanService";

export default function useAuth() {
  const { handleLogoutKegiatanService, getIsLoggedIn, setIsLoggedIn } =
    useKegiatanService();
  const token = ref(null);
  const token_expires_at = ref(null);
  const show_success_login = ref(true);
  // const $q = useQuasar();

  const setAuthHeader = (value) => {
    if (value) {
      api.defaults.headers.common["Authorization"] = `Bearer ${value}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  };
  const setShowSuccessLogin = (newSuccessLogin) => {
    show_success_login.value = newSuccessLogin;
  };
  const getShowSuccessLogin = () => {
    return show_success_login.value;
  };

  const isAuthenticated = async () => {
    return !(await isTokenExpired());
  };

  const isTokenExpired = async () => {
    try {
      token.value = await getToken();
      token_expires_at.value = await getTokenExpirationDate();
      let currentTime = new Date();
      console.log("token:", token.value);
      console.log("expires at:", token_expires_at.value);
      console.log("expires at result:", token_expires_at.value < currentTime);
      if (!Boolean(token.value)) {
        return true;
      }
      if (!Boolean(token_expires_at.value)) {
        return true;
      }
      return token_expires_at.value < currentTime;
    } catch (error) {
      console.log("error:", error.message);
      return true;
    }
  };
  const initToken = async () => {
    let storedToken = await localForage.getItem("token");
    let storedTokenExpiresAt = await localForage.getItem("token_expires_at");
    if (Boolean(storedToken)) {
      token.value = storedToken;
      setAuthHeader(storedToken);
    }
    if (Boolean(storedTokenExpiresAt)) {
      token_expires_at.value = storedTokenExpiresAt;
    }
    console.log("init token", await isAuthenticated());
  };

  const getTokenExpirationDate = async () => {
    try {
      if (!Boolean(token_expires_at.value)) {
        token_expires_at.value = await localForage.getItem("token_expires_at");
      }
      const date = new Date(token_expires_at.value);
      return date;
    } catch (error) {
      return null;
    }
  };

  const formatDate = (date) => {
    if (!Boolean(date)) return "N/A";

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short", // Includes the timezone abbreviation
    };

    // Format the date using the Indonesian locale and the user's local timezone
    const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
      date
    );

    return formattedDate;
  };

  const getFormattedTokenExpirationDate = async () => {
    return formatDate(await getTokenExpirationDate());
  };

  watch(token, (newToken) => {
    if (newToken) {
      localForage.setItem("token", newToken);
      setAuthHeader(newToken);
    } else {
      localForage.removeItem("token");
      setAuthHeader(null);
    }
  });
  watch(token_expires_at, (newTokenExpiresAt) => {
    if (Boolean(newTokenExpiresAt)) {
      localForage.setItem("token_expires_at", newTokenExpiresAt);
    } else {
      localForage.removeItem("token_expires_at");
    }
  });
  const getToken = async () => {
    if (!Boolean(token.value)) {
      token.value = await localForage.getItem("token");
    }
    return token.value;
  };

  const redirectIfTokenExpired = async () => {
    let storedToken = await getToken();
    if (!storedToken) {
      return "/login";
    }
    if (isTokenExpired()) return "/login";
    return "/home/beranda";
  };

  const login = async (credential) => {
    try {
      const decodedCredential = decodeCredential(credential);
      setUser(decodedCredential);
      setIsLoggedIn(true);

      const response = await api.post("/login", {
        email: decodedCredential.email,
        credentials: credential,
      });
      token.value = response.data.access_token;
      token_expires_at.value = response.data.expires_at;
    } catch (error) {
      throw error;
    }
    setShowSuccessLogin(true);
  };

  const logout = async () => {
    token.value = null;
    token_expires_at.value = null;
    await localForage.setItem("user", null);
    await localForage.setItem("token", null);
    await localForage.setItem("token_expires_at", null);
    // const {handleLogoutKegiatanService} = useKegiatanService();
    await handleLogoutKegiatanService();
    setIsLoggedIn(false);
    setShowSuccessLogin(false);
  };
  const setUser = async (user) => {
    await localForage.setItem("user", user);
  };
  const user = async () => {
    return await localForage.getItem("user");
  };

  // Initialize token on composable creation
  initToken();

  return {
    token,
    login,
    logout,
    getToken,
    redirectIfTokenExpired,
    getFormattedTokenExpirationDate,
    isTokenExpired,
    getTokenExpirationDate,
    user,
    setUser,
    initToken,
    setShowSuccessLogin,
    getShowSuccessLogin,
    isAuthenticated,
  };
}
