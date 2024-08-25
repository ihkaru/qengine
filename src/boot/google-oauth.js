import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  return new Promise((resolve, reject) => {
    const googleScript = document.createElement('script')
    googleScript.setAttribute('src', 'https://accounts.google.com/gsi/client')
    googleScript.onload = resolve
    googleScript.onerror = reject
    document.head.appendChild(googleScript)
  })
})
