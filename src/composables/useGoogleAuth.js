import { ref } from 'vue'
import axios from 'axios'
const api = axios.create({
  baseURL: process.env.QENV_API_URL
})
export function useGoogleAuth() {
  const user = ref(null)
  const error = ref(null)

  const loginWithGoogle = async () => {
    try {
      const response = await api.get('/api/auth/google')
      window.location.href = response.data
    } catch (e) {
      error.value = 'Failed to initiate Google login'
    }
  }

  const handleGoogleCallback = async (code) => {
    try {
      const response = await api.get(`/api/auth/google/callback?code=${code}`)
      user.value = response.data
      localStorage.setItem('token', response.data.access_token)
    } catch (e) {
      error.value = 'Failed to authenticate with Google'
    }
  }

  return { user, error, loginWithGoogle, handleGoogleCallback }
}
