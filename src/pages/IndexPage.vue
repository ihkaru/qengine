<template>
  <q-page-container>
    <q-page class="flex flex-center" flat>
      <h5>Authenticating</h5>
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useAuth from 'src/composables/useAuth'
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
const $q = useQuasar()
const router = useRouter();

const { login, token, redirectIfTokenExpired, initToken } = useAuth()


// onMounted( async ()=>{
//   $q.loading.show();
//   initToken();
//   let redirectUrl = await redirectIfTokenExpired();
//   $q.loading.hide();
//   router.push(redirectUrl);
// })


</script>
