<template>
  <q-page class="q-pa-md">
    <div class="text-center text-weight-bold text-blue-7">
      {{ selectedKegiatan?.nama }} {{ selectedKegiatan?.tahun }}
    </div>
    <br>
    <div class="col-4 text-right">
      <q-btn icon="sync" color="primary" label="Sync Periode" rounded />
    </div>
    <br>

    <q-card class="my-card">
      <q-card-section>
      </q-card-section>

      <q-card-section>
        <q-card class="bg-primary text-white">
          <q-card-section>
            <div class="text-h6">{{ selectedKegiatan?.subkategori }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row justify-around">
              <div v-for="(value, key) in statusCounts" :key="key" class="ext-center">
                <div class="text-h5 text-center">{{ value }}</div>
                <div class="text-caption text-center">{{ key }}</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle2">Selesai {{ Helper.daysUntil(selectedKegiatan?.tgl_tutup) }} Hari Lagi - PPL
            </div>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useHelper } from 'src/composables/useHelper';
import { useKegiatanService } from 'src/composables/useKegiatanService';
import { ref, onBeforeMount, onMounted } from 'vue';
const Helper = useHelper()
const Kegiatan = useKegiatanService();
const kegiatans = ref(null)
const selectedKegiatan = ref(null);
const statusCounts = ref({
  Open: 0,
  Submit: 0,
  Reject: 0,
  Pending: 0,
  Approved: 30
});

onBeforeMount(async () => {
  // console.log(kegiatans.value)
  // kegiatans.value = await Kegiatan.getKegiatans();
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  console.log(selectedKegiatan.value)
  // console.log(kegiatans.value)
})
</script>

<style scoped>
/* .my-card {
  width: 100%;
  max-width: 350px;
} */
</style>
