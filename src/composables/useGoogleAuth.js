// import { ref } from 'vue'
// import axios from 'axios'
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
// axios.defaults.headers["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token";
// axios.defaults.withCredentials = true
// const api = axios.create({
//   baseURL: process.env.QENV_API_URL
// })

// export function useGoogleAuth() {
//   const user = ref(null)
//   const error = ref(null)
//   const loginWithGoogle = async () => {
//     try {
//       const response = await api.get('/auth/google')
//       window.location.href = response.data
//     } catch (e) {
//       error.value = 'Failed to initiate Google login'
//     }
//   }

//   const handleGoogleCallback = async (code) => {
//     try {
//       const response = await api.get(`/auth/google/callback?code=${code}`)
//       user.value = response.data
//       localStorage.setItem('token', response.data.access_token)
//     } catch (e) {
//       error.value = 'Failed to authenticate with Google'
//     }
//   }

//   return { user, error, loginWithGoogle, handleGoogleCallback }
// }
import { ref } from 'vue'

export function useGoogleLogin() {
  const user = ref(null)
  const error = ref(null)

  const login = () => {
    return new Promise((resolve, reject) => {
      if (!window.google) {
        reject(new Error('Google API not loaded'))
        return
      }

      window.google.accounts.id.initialize({
        client_id: process.env.googleClientId,
        callback: handleCredentialResponse
      })

      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          reject(new Error('Google Sign-In was not displayed or was skipped'))
        }
      })
    })
  }

  const handleCredentialResponse = (response) => {
    const { credential } = response
    // Decode the credential to get user information
    const decodedCredential = JSON.parse(atob(credential.split('.')[1]))
    user.value = {
      id: decodedCredential.sub,
      name: decodedCredential.name,
      email: decodedCredential.email,
      picture: decodedCredential.picture
    }
  }

  const logout = () => {
    user.value = null
    window.google?.accounts.id.disableAutoSelect()
  }

  return { user, error, login, logout }
}
