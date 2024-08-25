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
        ux-mode="redirect"
      ></GoogleSignInButton>

      <p class="text-caption text-center">
        Dengan melakukan login, anda setuju dengan
        <a href="#" class="text-primary">Kebijakan Privasi</a> kami
      </p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGoogleLogin } from 'src/composables/useGoogleLogin'

const slide = ref(1)
import {
  GoogleSignInButton
} from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

defineOptions({
  name: 'IndexPage'
});
</script>
