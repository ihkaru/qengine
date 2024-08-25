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

      <q-btn v-if="!user" @click="handleLogin" label="Login Sekarang" color="primary" class="full-width q-py-sm q-mb-md" />
      <div v-else>
        <p>Welcome, {{ user.name }}!</p>
        <q-btn @click="handleLogout" label="Logout" />
      </div>

      <p class="text-caption text-center">
        Dengan melakukan login, anda setuju dengan
        <a href="#" class="text-primary">Kebijakan Privasi</a> kami
      </p>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
// import SurveyForm from 'components/SurveyForm.vue'
import DaftarKegiatan from 'components/DaftarKegiatan.vue'
// import { useGoogleAuth } from 'src/composables/useGoogleAuth'

// const { loginWithGoogle } = useGoogleAuth()

import { useGoogleLogin } from 'src/composables/useGoogleLogin'

const { user, login, logout } = useGoogleLogin()

const handleLogin = async () => {
  try {
    await login()
  } catch (err) {
    console.error('Login failed:', err)
  }
}

const handleLogout = () => {
  logout()}

defineOptions({
  name: 'IndexPage'
});
</script>
