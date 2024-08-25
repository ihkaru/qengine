import { boot } from 'quasar/wrappers'
import GoogleSignInPlugin from "vue3-google-signin"
const clientId = process.env.GOOGLE_CLIENT_ID || ''

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot( ({app}) => {
  app.use(GoogleSignInPlugin, {
    clientId: clientId,
  });
})
