// src/composables/useAuth.js
import { ref, watch } from 'vue'
import localForage from 'src/boot/local-forage'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import {jwtDecode} from 'jwt-decode';

export default function useAuth() {
  const token = ref(null)
  const token_expires_at = ref(null);
  const show_success_login = ref(null);
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

  const isTokenExpired = ()=>{
    if (!Boolean(token.value)) {
      console.log('1token is expired',token.value);
      return true;
    }
    if (!Boolean(token_expires_at.value)) {
      console.log('2token is expired',token.value);
      return true;
    }
    try {
      console.log("is expired",token_expires_at.value < currentTime)
      return token_expires_at.value < currentTime;
    } catch (error) {
      return true;
    }
  }
  const initToken = async () => {
    const storedToken = await localForage.getItem('token')
    const storedTokenExpiresAt = await localForage.getItem('token_expires_at')
    if (storedToken) {
      token.value = storedToken
      setAuthHeader(storedToken)
    }
    if(storedTokenExpiresAt){
      token_expires_at.value = storedTokenExpiresAt
    }
  }

  const getTokenExpirationDate = (token) => {
    try {
      if (token_expires_at.value === undefined) {
        return null;
      }

      const date = new Date(0); // The 0 sets the date to the epoch
      date.setUTCSeconds(token_expires_at.value);
      return date;
    } catch (error) {
      return null;
    }
  }

  const formatDate = (date) => {
    if (!date) return 'N/A';

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  const getFormattedTokenExpirationDate = async () => {
    return formatDate(getTokenExpirationDate(await localForage.getItem('token')))
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
    if (newTokenExpiresAt) {
      localForage.setItem('token_expires_at', newTokenExpiresAt)
      setAuthHeader(newTokenExpiresAt)
    } else {
      localForage.removeItem('token_expires_at')
    }
  })
  const getToken = async ()=>{
    return await localForage.getItem('token');
  }
  const redirectIfTokenExpired = async ()=>{
    let storedToken = await localForage.getItem('token');
    console.log('this is token',storedToken);
    if(!storedToken){
      return '/login';
    }
    if(isTokenExpired()) return '/login';
    return '/home/beranda';
  }

  const login = async (email, credential) => {
    try {
    const response = await api.post('/login', { email: email, credentials: credential })
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
    redirectIfTokenExpired, getFormattedTokenExpirationDate,isTokenExpired,
    user,setUser,
    initToken,
    setShowSuccessLogin,getShowSuccessLogin
  }
}
