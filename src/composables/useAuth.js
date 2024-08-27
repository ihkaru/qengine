// src/composables/useAuth.js
import { ref, watch } from 'vue'
import localForage from 'src/boot/local-forage'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import {jwtDecode} from 'jwt-decode';

export default function useAuth() {
  const token = ref(null)
  const setAuthHeader = (value) => {
    if (value) {
      api.defaults.headers.common['Authorization'] = `Bearer ${value}`
    } else {
      delete api.defaults.headers.common['Authorization']
    }
  }

  const isTokenExpired = (token)=>{
    if (!token) {
      return true;
    }
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch (error) {
      return true;
    }
  }
  const initToken = async () => {
    const storedToken = await localForage.getItem('token')
    if (storedToken) {
      token.value = storedToken
      setAuthHeader(storedToken)
    }
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
  const getToken = async ()=>{
    return await localForage.getItem('token');
  }
  const redirectIfTokenExpired = async ()=>{
    let storedToken = await localForage.getItem('token');
    console.log('this is token',storedToken);
    if(!storedToken){
      return '/login';
    }
    if(isTokenExpired(storedToken)) return '/login';
    return '/home/beranda';
  }

  const login = async (email, credential) => {
    try {
    const response = await api.post('/login', { email: email, credentials: credential })
      token.value = response.data.access_token
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const logout = async () => {
    token.value = null;
    await localForage.setItem('user', null);
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
    redirectIfTokenExpired,
    user,setUser
  }
}
