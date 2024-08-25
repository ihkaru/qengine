import { ref } from 'vue'
import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
axios.defaults.headers["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token";
axios.defaults.withCredentials = true
const api = axios.create({
  baseURL: process.env.QENV_API_URL
})

export function useGoogleAuth() {
  const user = ref(null)
  const error = ref(null)
  const loginWithGoogle = async () => {
    try {
      const response = await api.get('/auth/google')
      window.location.href = response.data
    } catch (e) {
      error.value = 'Failed to initiate Google login'
    }
  }

  const handleGoogleCallback = async (code) => {
    try {
      const response = await api.get(`/auth/google/callback?code=${code}`)
      user.value = response.data
      localStorage.setItem('token', response.data.access_token)
    } catch (e) {
      error.value = 'Failed to authenticate with Google'
    }
  }

  return { user, error, loginWithGoogle, handleGoogleCallback }
}
