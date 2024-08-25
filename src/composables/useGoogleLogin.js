import { ref } from 'vue'
const clientId = process.env.GOOGLE_CLIENT_ID || '';
console.log('Client ID:', clientId)
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
        client_id: clientId,
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
    console.log(user);
  }

  const logout = () => {
    user.value = null
    window.google?.accounts.id.disableAutoSelect()
  }

  return { user, error, login, logout }
}
