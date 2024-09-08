<template>
  <q-page class="flex flex-center">
    <SurveyComponent :model="survey" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="touch_app" direction="up" color="blue-10" external-label>
        <q-fab-action external-label color="warning" icon="settings_backup_restore" label="Muat ulang"
          label-position="left" />
        <q-fab-action external-label color="orange" icon="gps_fixed" label="Lokasi" label-position="left" />
        <q-fab-action external-label color="positive" icon="done" label="Approval" label-position="left"
          @click="toggleApproval" />
      </q-fab>
    </q-page-sticky>
    <q-dialog v-model="approval">
      <q-card>
        <q-card-section>
          <div class="text-h6">Approval</div>
        </q-card-section>

        <q-card-section class="q-pt-none ">
          <q-btn style="width: 300px; margin-bottom: 20px;" color="green-9 block">Approve</q-btn>
          <q-btn style="width: 300px; margin-bottom: 20px;" color="red-10 block">Reject</q-btn>
          <q-btn style="width: 300px; margin-bottom: 20px;" color="teal block w-10" @click="simpanDanKeluar">Simpan
            dan Keluar</q-btn>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Tutup" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { useQuasar } from 'quasar'
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useKegiatanService } from 'src/composables/useKegiatanService';
const $q = useQuasar()
const router = useRouter()
const route = useRoute()
const approval = ref(false);
const toggleApproval = function () {
  approval.value = !approval.value;
}

const selectedKegiatan = ref(null);
const Kegiatan = useKegiatanService();

onBeforeMount(async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  console.log(selectedKegiatan.value)
})
onMounted(async () => {
  if (route.query.mode == 'tambahAssignment') {
    // Trigger the notification
    $q.notify({
      progress: true,
      message: 'Mode tambah assignment',
      icon: 'info',
      color: 'blue',
      textColor: 'white',
      timeout: 2000
    })
  }
  if (route.query.mode == 'editAssignment') {
    // Trigger the notification
    $q.notify({
      progress: true,
      message: 'Mode edit assignment',
      icon: 'info',
      color: 'blue',
      textColor: 'white',
      timeout: 2000
    })
  }
})

const alertResults = (sender) => {
  const results = JSON.stringify(sender.data);
  alert(results);
  // saveSurveyResults(
  //   "https://your-web-service.com/" + SURVEY_ID,
  //   sender.data
  // )
}
const simpanDanKeluar = () => {
  router.push({
    path: `/nav/kegiatans/${selectedKegiatan.value.id}/haha`,
    query: {
      isSaveSuccess: true
    }
  })
}



const json = {
  questions: [
    {
      type: 'text',
      name: 'kepalaRumahTangga',
      title: 'Nama Kepala Rumah Tangga',
      isRequired: true
    },
    {
      type: 'paneldynamic',
      name: 'anggotaRumahTangga',
      title: 'Anggota Rumah Tangga Lainnya',
      renderMode: 'progressTop',
      panelCount: 1,
      panelAddText: 'Tambahkan Anggota Rumah Tangga',
      panelRemoveText: 'Hapus Anggota Rumah Tangga',
      templateTitle: 'Anggota #{panelIndex}',
      templateElements: [
        {
          type: 'text',
          name: 'namaAnggota',
          title: 'Nama Anggota',
          isRequired: true
        }
      ]
    }
  ]
}
const survey = new Model(json);
survey.onComplete.add(function (result) {
  if (!navigator.onLine) {

    window.localStorage.setItem('surveyResults', JSON.stringify(result.data));
    alert('Data disimpan secara lokal');
  } else {
    alertResults(result);
  }
});
</script>

<style scoped></style>
