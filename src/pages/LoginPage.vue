<template>
  <q-page-container>
    <q-page class="flex flex-center" flat>
      <div class="column items-center q-pa-md" style="max-width: 450px">
        <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
          control-color="primary" navigation padding flat height="500px" class="rounded-borders q-mb-lg">
          <q-carousel-slide :name="1" class="column no-wrap flex-center">
            <div class="text-center">
              <div class="text-center q-mb-lg">
                <img src="caro1.jpg" style="width: 200px; height: 200px;" />
              </div>

              <h4 class="text-h5 text-weight-bold q-mb-sm text-blue-10">Selamat Datang di <br>CERDAS</h4>

              <p class="text-body2 text-center q-mb-lg">
                Catatan Elektronik Responden Aktual dan Sistematis <br>
                Satu aplikasi untuk berbagai jenis pendataan.
              </p>
              <!-- <p>Token Exist: {{ Boolean(token) }}</p> -->
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap flex-center">
            <div class="text-center">
              <div class="text-center q-mb-lg">
                <img src="caro2.jpg" style="width: 200px; height: 200px;" />
              </div>

              <h4 class="text-h5 text-weight-bold q-mb-sm text-blue-10">Selamat Datang di <br>CERDAS</h4>

              <p class="text-body2 text-center q-mb-lg">
                Hasil pendataan dapat langsung dikirim dan dipantau secara Realtime
              </p>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap flex-center">
            <div class="text-center">
              <div class="text-center q-mb-lg">
                <img src="caro3.jpg" style="width: 200px; height: 200px;" />
              </div>

              <h4 class="text-h5 text-weight-bold q-mb-sm text-blue-10">Selamat Datang di <br>CERDAS</h4>

              <p class="text-body2 text-center q-mb-lg">
                Dapat digunakan untuk melakukan wawancara secara offline
              </p>
            </div>
          </q-carousel-slide>
        </q-carousel>

        <!-- <q-btn label="Login Sekarang" color="primary" class="full-width q-py-sm q-mb-md" /> -->
        <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
        <br>

        <p class="text-caption text-center">
          Dengan melakukan login, anda setuju dengan
          <a href="#" class="text-primary">Kebijakan Privasi</a> kami
        </p>
        <p class="text-caption text-center">
          Dikembangkan oleh BPS Kabupaten Mempawah
        </p>
        <p class="text-caption text-center">
          Heavily inspired by Fasih BPS!
        </p>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import useAuth from 'src/composables/useAuth'
import { GoogleSignInButton } from "vue3-google-signin";
import { useRouter } from 'vue-router'
import { QSpinnerGears, QSpinnerPie, useQuasar } from 'quasar';
const $q = useQuasar()


const slide = ref(1)
const { login, token, redirectIfTokenExpired, setUser, isTokenExpired, initToken, isAuthenticated } = useAuth()
const router = useRouter()
const tes = ref(1);
onBeforeMount(() => {
})
onMounted(async () => {
  initToken();

  // isAuthenticated().then((value)=>{
  //   if (!value) router.push('/home/beranda');
  // })
})


// handle success event
const handleLoginSuccess = async (response) => {
  try {
    const dismiss = $q.notify({
      progress: true,
      spinner: true,
      message: 'Mohon tunggu..',
      timeout: 10000
    })
    const { credential } = response;

    await login(credential);
    console.log("credential", credential);
    dismiss()
    router.push({ path: '/home/beranda' });
  } catch (error) {
    let dismiss = $q.notify({
      type: 'negative',
      progress: true,
      message: 'Terjadi kesalahan: ' + error.message,
      timeout: 5000
    })
  }

};


// handle an error event
const handleLoginError = () => {
  const dismiss = $q.notify({
    type: 'negative',
    message: 'Login gagal',
    progress: true,
    timeout: 2000
  })
};

const user = ref({});
const getProfile = () => {

}

defineOptions({
  name: 'IndexPage'
});
</script>
