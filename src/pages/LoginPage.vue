<template>
  <!-- <q-page class="flex flex-center"> -->
    <!-- <SurveyForm/> -->
     <!-- <DaftarKegiatan/> -->
  <!-- </q-page> -->
  <q-page class="flex flex-center" flat>
    <div class="column items-center q-pa-md" style="max-width: 400px">

      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        flat
        height="500px"
        class="rounded-borders q-mb-lg"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <div class="text-center">
            <div class="text-center q-mb-lg">
              <img src="caro1.jpg" style="width: 200px; height: 200px;"/>
            </div>

            <h4 class="text-h5 text-weight-bold q-mb-sm text-blue-10">Selamat Datang di <br> Wajok Hilir Cerdas</h4>

            <p class="text-body2 text-center q-mb-lg">
              Aplikasi pengumpulan data Desa Wajok Hilir. Satu aplikasi untuk berbagai jenis pendataan.
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <div class="text-center">
            <div class="text-center q-mb-lg">
              <img src="caro2.jpg" style="width: 200px; height: 200px;"/>
            </div>

            <h4 class="text-h5 text-weight-bold q-mb-sm text-blue-10">Selamat Datang di <br> Wajok Hilir Cerdas</h4>

            <p class="text-body2 text-center q-mb-lg">
              Hasil pendataan dapat langsung dikirim dan dipantau secara Realtime
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <div class="text-center">
            <div class="text-center q-mb-lg">
              <img src="caro3.jpg" style="width: 200px; height: 200px;"/>
            </div>

            <h4 class="text-h5 text-weight-bold q-mb-sm text-blue-10">Selamat Datang di <br> Wajok Hilir Cerdas</h4>

            <p class="text-body2 text-center q-mb-lg">
              Dapat digunakan untk melakukan wawancara secara offline
            </p>
          </div>
        </q-carousel-slide>
      </q-carousel>

      <q-btn label="Login Sekarang" color="primary" class="full-width q-py-sm q-mb-md" />
      <GoogleSignInButton
        @success="handleLoginSuccess"
        @error="handleLoginError"
      ></GoogleSignInButton>

      <p class="text-caption text-center">
        Dengan melakukan login, anda setuju dengan
        <a href="#" class="text-primary">Kebijakan Privasi</a> kami
      </p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import useAuth from 'src/composables/useAuth'
import {GoogleSignInButton,decodeCredential} from "vue3-google-signin";
import { useRouter } from 'vue-router'
import { QSpinnerGears, QSpinnerPie, useQuasar } from 'quasar';
const $q = useQuasar()

const slide = ref(1)
const { login,token,redirectIfTokenExpired,setUser,isTokenExpired} = useAuth()
const router = useRouter()

onMounted( async ()=>{
  console.log("This is token value:", await redirectIfTokenExpired());
  if(!isTokenExpired()) router.push('/home/beranda');
})


// handle success event
const handleLoginSuccess = async (response) => {
  $q.loading.show({
          spinner: QSpinnerGears,
          spinnerColor: 'teal-5',
          message: 'Mohon tunggu..',
          messageColor: 'black',
          backgroundColor: 'white'
        })
  const { credential } = response;
  const decodedCredential = decodeCredential(credential);
  console.log("User:", decodedCredential);
  console.log("Credential: ", credential);
  await login(decodedCredential.email,credential);
  setUser(decodedCredential);
  // console.log('idb profile', await idb.getProfile(decodedCredential.id))
  console.log("Token",token.value)
  console.log( response);
  $q.loading.hide()
  router.push('/home/beranda');
};


// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

const user = ref({});
const getProfile = () => {

}

defineOptions({
  name: 'IndexPage'
});
</script>
