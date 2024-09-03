<template>
  <q-page class="q-pa-md">
    <q-tab-panels v-model="panel" animated swipeable class="full-height" style="min-height: 100%;">
      <q-tab-panel name="beranda">
        <div class="flex justify-between">
          <div class="space-between">
            <div class="text-h6">Halo, {{activeUser?.name}}!</div>
            <div class="text-subtitle2">Selamat datang di CERDAS</div>
          </div>
          <q-btn
            :icon="isOnline ? 'signal_wifi_4_bar' : 'signal_wifi_off'"
            :class="{ 'text-positive': isOnline, 'text-negative': !isOnline, 'pulse-animation': !isOnline }"
            rounded
            flat
          />

        </div>
        <q-card flat bordered class="q-mt-md">
          <q-card-section class="row items-center q-pb-none">
            <div class="col-4 text-center">
              <q-icon name="assignment" size="sm" color="primary" />
              <div class="text-caption">Kegiatan</div>
              <div class="text-h6">{{rekapitulasi_kegiatan?.kegiatan}}</div>
            </div>
            <div class="col-4 text-center">
              <q-icon name="schedule" size="sm" color="primary" />
              <div class="text-caption">Kegiatan Berjalan</div>
              <div class="text-h6">{{rekapitulasi_kegiatan?.periode}}</div>
            </div>
            <div class="col-4 text-center">
              <q-icon name="group" size="sm" color="primary" />
              <div class="text-caption">Assignment</div>
              <div class="text-h6">{{rekapitulasi_kegiatan?.assignment}}</div>
            </div>
          </q-card-section>
        </q-card>
        <div class="row q-mt-md">
          <div class="col-8">
            <div class="text-h6">Daftar Survei</div>
          </div>
          <div class="col-4 text-right">
            <q-btn icon="sync" color="primary" label="SYNC" rounded @click="handleSyncKegiatan"/>
          </div>
        </div>

        <q-card class="q-mt-sm" v-for="k in kegiatans?.data" :key="k.id">
          <q-card-section @click="router.push(`/nav/${k.id}`)">
            <div class="text-h6">{{k.nama+" "+k.tahun}}</div>
            <div class="text-subtitle2">{{constants.LEVEL_PENDATAAN[k.level_pendataan]}}</div>
          </q-card-section>
          <q-card-actions>
            <q-btn flat color="primary" icon="chevron_right" />
          </q-card-actions>
        </q-card>
      </q-tab-panel>
      <q-tab-panel name="upload">
        <h4>Upload</h4>
      </q-tab-panel>
      <q-tab-panel name="bantuan">
        <h4>Bantuan</h4>
      </q-tab-panel>
      <q-tab-panel name="pengaturan">
        <div class="text-h6 q-mb-md">Pengaturan</div>

        <q-card class="q-mb-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src="activeUser.picture">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{activeUser.name}}</q-item-label>
              <q-item-label caption>{{activeUser.email}}</q-item-label>
              <q-item-label caption>session expired:</q-item-label>
              <q-item-label caption>{{formattedTokenExpiredDate}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>

        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="smartphone" color="primary" />
            </q-item-section>
            <q-item-section>Sistem</q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" color="grey" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="backup" color="primary" />
            </q-item-section>
            <q-item-section>Backup</q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" color="grey" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="policy" color="primary" />
            </q-item-section>
            <q-item-section>Kebijakan Privasi</q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" color="grey" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" color="primary" />
            </q-item-section>
            <q-item-section>FAQ Aplikasi</q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" color="grey" />
            </q-item-section>
          </q-item>
        </q-list>

        <q-btn
          class="full-width q-mt-lg"
          color="primary"
          outline
          label="LOGOUT"
          @click="confirmLogout"
        />
      </q-tab-panel>
    </q-tab-panels>


    <q-footer>
      <q-tabs v-model="panel" no-caps align="justify" active-color="primary" indicator-color="primary" class="bg-grey-3 text-grey" flat>
        <q-tab name="beranda" icon="home" label="Beranda" />
        <q-tab name="upload" icon="cloud_upload" label="Upload" />
        <q-tab name="bantuan" icon="help" label="Bantuan" />
        <q-tab name="pengaturan" icon="settings" label="Pengaturan" />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script setup>
import { QSpinnerGears, useQuasar } from 'quasar';
import useAuth from 'src/composables/useAuth';
import { onMounted, ref,onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import { useExitHandler } from 'src/composables/useExitHandler'

import { useOnlineStatus } from 'src/composables/useOnlineStatus';
import {useKegiatanService} from 'src/composables/useKegiatanService';
import { useConstants } from 'src/composables/useConstants';

const { isOnline } = useOnlineStatus();

const {getKegiatans,getRekapitulasiKegiatan,initKegiatanService} = useKegiatanService();
const {user,token,initToken,logout,redirectIfTokenExpired,getFormattedTokenExpirationDate,getTokenExpirationDate,isTokenExpired,getShowSuccessLogin,setShowSuccessLogin} = useAuth();

const constants = useConstants();
const activeUser = ref({});
const router = useRouter();
const formattedTokenExpiredDate = ref('');
const $q = useQuasar();
const panel = ref('beranda');
const canGoBack = ref(false)
const { handleExit } = useExitHandler()
const rekapitulasi_kegiatan = ref({});
const kegiatans = ref({});
const instance = getCurrentInstance();


const handleBackButton = (event) => {
  if (canGoBack.value) {
    router.back()
  } else {
    handleExit()
  }
}

onBeforeMount(async ()=>{
  // initToken();
})
onMounted(async ()=>{
  initToken();
  try{
    rekapitulasi_kegiatan.value = await getRekapitulasiKegiatan();
    kegiatans.value = await getKegiatans();
    console.log("rekapitulasi",rekapitulasi_kegiatan.value)
    console.log("kegiatan",kegiatans.value)
    if(!getShowSuccessLogin()){
      formattedTokenExpiredDate.value =  await getFormattedTokenExpirationDate()
      activeUser.value = await user();
      if(!Boolean(activeUser.value)){
        throw new Error("User tidak ditemukan")
      }
      // forma
      console.log("this is",formattedTokenExpiredDate.value)
      $q.notify({
                progress: true,
                message: 'Berhasil login',
                icon: 'check',
                color: 'green',
                textColor: 'white',
                timeout: 2000
              })
    }

    setShowSuccessLogin(false);
    formattedTokenExpiredDate.value =  await getFormattedTokenExpirationDate()
  } catch (error) {
      $q.notify({
        type: 'negative',
        message: 'Login gagal: '+error.message,
        progress: true,
        timeout: 2000
      })
      router.push("/login")
  }
  // formattedTokenExpiredDate.value = await getFormattedTokenExpirationDate();
  // console.log(isTokenExpired());
  // if(isTokenExpired()) router.push('/login');
  $q.loading.hide();
  console.log('this is user active',activeUser.value);
})
const handleLogout = async ()=>{
  await logout();
  router.push(await redirectIfTokenExpired());
}

const confirmLogout = () => {
      $q.dialog({
        title: 'Confirm',
        message: 'Apakah Anda ingin logout?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        $q.dialog({
          title: 'Confirm',
          message: 'Apakah Anda yakin?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          handleLogout();
      })
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
const handleSyncKegiatan = async ()=>{
  let dismiss = $q.notify({
      progress: true,
      spinner: true,
      message: 'Sync..',
      color: "primary",
      textColor: "white",
      timeout: 5000
      })
  await initKegiatanService(true);
  rekapitulasi_kegiatan.value = await getRekapitulasiKegiatan();
  kegiatans.value = await getKegiatans();
  setTimeout(dismiss,2000);

}
</script>

<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.6s;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pulse-animation {
  animation: pulse 5s infinite;
}
</style>
