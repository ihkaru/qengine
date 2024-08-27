<template>
  <!-- <q-page class="flex flex-center"> -->
    <!-- <SurveyForm/> -->
     <!-- <DaftarKegiatan/> -->
  <!-- </q-page> -->
  <q-page class="flex flex-center" flat>
    <h4>Check login status</h4>
  </q-page>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import useAuth from 'src/composables/useAuth'
import { useRouter } from 'vue-router';
const router = useRouter();

const { login,token,redirectIfTokenExpired } = useAuth()


onMounted( async ()=>{
  let redirectUrl = await redirectIfTokenExpired();
  router.push(redirectUrl);
})


</script>
