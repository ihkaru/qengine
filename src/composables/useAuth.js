// src/composables/useAuth.js
import { ref, watch } from 'vue'
import localForage from 'src/boot/local-forage'
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import {decodeCredential} from "vue3-google-signin";
import { useKegiatanService } from './useKegiatanService';


export default function useAuth() {
  const {handleLogoutKegiatanService,getIsLoggedIn,setIsLoggedIn} = useKegiatanService();
  const token = ref(null)
  const token_expires_at = ref(null);
  const show_success_login = ref(null);
  const $q = useQuasar();

  const setAuthHeader = (value) => {
    if (value) {
      api.defaults.headers.common['Authorization'] = `Bearer ${value}`
    } else {
      delete api.defaults.headers.common['Authorization']
    }
  }
  const setShowSuccessLogin= (newSuccessLogin)=>{
    show_success_login.value = newSuccessLogin;
  }
  const getShowSuccessLogin= ()=>{
    return show_success_login.value ;
  }

  const isTokenExpired = async ()=>{
    try {
    token.value = await getToken();
      if (!Boolean(token.value)) {
        console.log('1token is expired',token.value);
        return true;
      }
      if (!Boolean(token_expires_at.value)) {
        console.log('2token is expired',token.value);
        return true;
      }

        console.log("is expired",token_expires_at.value < currentTime)
        return token_expires_at.value < currentTime;
      } catch (error) {
        return true;
    }
  }
  const initToken = async () => {
    const storedToken = await localForage.getItem('token')
    const storedTokenExpiresAt = await localForage.getItem('token_expires_at')
    if (Boolean(storedToken)) {
      token.value = storedToken
      setAuthHeader(storedToken)
    }
    if(Boolean(storedTokenExpiresAt)){
      token_expires_at.value = storedTokenExpiresAt
    }
  }

  const getTokenExpirationDate = async () => {
    try {

      if (!Boolean(token_expires_at.value)) {
        token_expires_at.value = await localForage.getItem("token_expires_at");
      }
      const date = new Date(token_expires_at.value);
      return date;
    } catch (error) {
      $q.notify({
        message: "Gagal: "+error.message
      })
      return null;
    }
  }

  const formatDate = (date) => {
    if (!Boolean(date)) return 'N/A';

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short' // Includes the timezone abbreviation
    };

    // Format the date using the Indonesian locale and the user's local timezone
    const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);

    console.log(formattedDate);

    return  formattedDate ;
  }

  const getFormattedTokenExpirationDate = async () => {
    return formatDate(await getTokenExpirationDate());
  }

  watch(token, (newToken) => {
    if (newToken) {
      localForage.setItem('token', newToken)
      setAuthHeader(newToken)
    } else {
      localForage.removeItem('token')
      setAuthHeader(null)
    }
  })
  watch(token_expires_at, (newTokenExpiresAt) => {
    if (Boolean(newTokenExpiresAt)) {
      localForage.setItem('token_expires_at', newTokenExpiresAt)
      console.log("expires at has been set",newTokenExpiresAt)
      setAuthHeader(newTokenExpiresAt)
    } else {
      localForage.removeItem('token_expires_at')
    }
  })
  const getToken = async ()=>{
    if(!Boolean(token.value)){
      token.value = await localForage.getItem('token');
    }
    return token.value;
  }

  const redirectIfTokenExpired = async ()=>{
    let storedToken = await getToken();

    console.log('this is token',storedToken);
    if(!storedToken){
      return '/login';
    }
    if(isTokenExpired()) return '/login';
    return '/home/beranda';
  }

  const login = async (credential) => {
    try {
    const decodedCredential = decodeCredential(credential);
    setUser(decodedCredential);
    setIsLoggedIn(true);
    console.log("Credential: ", credential);

    const response = await api.post('/login', { email: decodedCredential.email, credentials: credential })
    token.value = response.data.access_token
    token_expires_at.value = response.data.expires_at;
    console.log("this is token expired date",token_expires_at.value )

    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
    setShowSuccessLogin(true);
  }

  const logout = async () => {
    token.value = null;
    token_expires_at.value = null;
    await localForage.setItem('user', null);
    await localForage.setItem('token', null);
    await localForage.setItem('token_expires_at', null);
// const {handleLogoutKegiatanService} = useKegiatanService();
    await handleLogoutKegiatanService();
    setIsLoggedIn(false);
    setShowSuccessLogin(false);
  }
  const setUser = async (user) => {
    await localForage.setItem('user', user);
  }
  const user = async () => {
    return await localForage.getItem('user');
  }

  // Initialize token on composable creation
  initToken()

  return {
    token,
    login,logout,
    getToken,
    redirectIfTokenExpired, getFormattedTokenExpirationDate,isTokenExpired,getTokenExpirationDate,
    user,setUser,
    initToken,
    setShowSuccessLogin,getShowSuccessLogin
  }
}
