<template>
  <q-page class="flex flex-center" flat>

  </q-page>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import useAuth from 'src/composables/useAuth'
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
const $q = useQuasar()
const router = useRouter();

const { login,token,redirectIfTokenExpired } = useAuth()


onMounted( async ()=>{
  $q.loading.show();
  let redirectUrl = await redirectIfTokenExpired();
  $q.loading.hide();
  router.push(redirectUrl);
})


</script>
