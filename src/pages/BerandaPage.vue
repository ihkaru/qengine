<template>
  <q-page class="q-pa-md">
    <q-tab-panels v-model="panel" animated swipeable>
      <q-tab-panel name="beranda">
        <div class="text-h6">Halo, {{activeUser.name}}!</div>
        <div class="text-subtitle2">Selamat datang di FASIH</div>

        <q-card flat bordered class="q-mt-md">
          <q-card-section class="row items-center q-pb-none">
            <div class="col-4 text-center">
              <q-icon name="assignment" size="sm" color="primary" />
              <div class="text-caption">Survei</div>
              <div class="text-h6">1</div>
            </div>
            <div class="col-4 text-center">
              <q-icon name="schedule" size="sm" color="primary" />
              <div class="text-caption">Periode</div>
              <div class="text-h6">1</div>
            </div>
            <div class="col-4 text-center">
              <q-icon name="group" size="sm" color="primary" />
              <div class="text-caption">Assignment</div>
              <div class="text-h6">30</div>
            </div>
          </q-card-section>
        </q-card>

        <div class="row q-mt-md">
          <div class="col-8">
            <div class="text-h6">Daftar Survei</div>
          </div>
          <div class="col-4 text-right flex">
            <q-btn color="primary" label="SYNC SURVEI" />
            <q-btn color="primary" label="LOGOUT" @click="handleLogout" />
          </div>
        </div>

        <q-card class="q-mt-sm">
          <q-card-section @click="router.push('/nav/1')">
            <div class="text-h6">SAKERNAS 2024 AGS - PENDATAAN</div>
            <div class="text-subtitle2">Survey Sample</div>
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
        <h4>Pengaturan</h4>
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
import useAuth from 'src/composables/useAuth';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
const {user,logout,redirectIfTokenExpired} = useAuth();
const activeUser = ref({});
const router = useRouter();

const panel = ref('beranda');

onMounted(async ()=>{
  activeUser.value = await user();
  console.log('this is user active',activeUser.value);
})
const handleLogout = async ()=>{
  await logout();
  router.push(await redirectIfTokenExpired());
}

</script>

<style scoped>

</style>
