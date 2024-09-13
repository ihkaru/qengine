<template>
  <q-page class="q-pa-md">
    <q-input outlined dense placeholder="Search" class="q-mb-md">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-btn color="primary" label="SYNC ASSIGNMENT" class="q-mb-md" />
    <q-card @click="handleSelectWilayah(w)" v-ripple flat bordered v-for="(w, index) in kegiatanData.wilayahKerjas"
      :key="index" class="q-mb-md">
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div class="col-4" v-for="(field, key) in wilayahKerjaAugment(w).fields" :key="key">
            <div class="text-caption text-grey">{{ key }}</div>
            <div>{{ field }}</div>
          </div>
        </div>
      </q-card-section>
      <!-- <q-card-section>
        <div class="row q-col-gutter-md text-center">
          <div class="col" v-for="(stat, key) in region.stats" :key="key">
            <div class="text-h6">{{ stat }}</div>
            <div class="text-caption">{{ key }}</div>
          </div>
        </div>
      </q-card-section> -->
    </q-card>
    <q-card @click="handleSelectWilayah" v-ripple flat bordered v-for="(region, index) in regions" :key="index"
      class="q-mb-md">
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div class="col-4" v-for="(field, key) in region.fields" :key="key">
            <div class="text-caption text-grey">{{ key }}</div>
            <div>{{ field }}</div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-md text-center">
          <div class="col" v-for="(stat, key) in region.stats" :key="key">
            <div class="text-h6">{{ stat }}</div>
            <div class="text-caption">{{ key }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useKegiatanService } from 'src/composables/useKegiatanService';
import { useSyncService } from 'src/composables/useSyncService';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const selectedKegiatan = ref(null);
const Kegiatan = useKegiatanService();
const syncService = useSyncService();
const selecetedLevel1 = ref(null);

const kegiatanData = ref({});
onBeforeMount(async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  kegiatanData.value = await syncService.getDataKegiatan(selectedKegiatan.value.id);
  console.log(kegiatanData.value)
})


const regions = ref([
  {
    fields: {
      PROVINSI: 'KALIMANTAN BARAT',
      'KABUPATEN/KOTA': 'MEMPAWAH',
      KECAMATAN: 'JONGKAT',
      DESA: 'PENITI LUAR',
      NBS: '001B',
      NKS: '200001',
      SLS: 'RT 002 RW 01 DUSUN KARYA BHAKTI'
    },
    stats: {
      Open: 0,
      Submit: 0,
      Reject: 0,
      Pending: 0,
      Approved: 10
    }
  },
  {
    fields: {
      PROVINSI: 'KALIMANTAN BARAT',
      'KABUPATEN/KOTA': 'MEMPAWAH',
      KECAMATAN: 'SEGEDONG',
      DESA: 'PARIT BUGIS',
      NBS: '001B',
      NKS: '150112',
      SLS: 'RT 004 RW 002 DUSUN KERANJI, RT 005 RW 002 DUSUN KERANJI'
    },
    stats: {
      Open: 0,
      Submit: 0,
      Reject: 0,
      Pending: 0,
      Approved: 10
    }
  }
]);
const wilayahKerjaAugment = (wilayahKerja) => {
  console.log("before embeded:", wilayahKerja);
  if (!Boolean(wilayahKerja.fields?.PROVINSI)) {
    wilayahKerja.fields = {};
    wilayahKerja.fields.PROVINSI = wilayahKerja.sls.provinsi;
    wilayahKerja.fields['KABUPATEN/KOTA'] = wilayahKerja.sls.kabkot;
    wilayahKerja.fields.KECAMATAN = wilayahKerja.sls.kecamatan;
    wilayahKerja.fields['DESA/KELURAHAN'] = wilayahKerja.sls.desa_kel;
    wilayahKerja.fields['RT/SLS'] = wilayahKerja.sls.nama;
  }
  console.log("embeded:", wilayahKerja);
  return wilayahKerja;
}
const handleSelectWilayah = async (wilayah) => {
  selecetedLevel1.value = wilayah;
  await Kegiatan.setSelectedLevel1(selecetedLevel1.value)
  console.log("selectedLevel1", await Kegiatan.getSelectedLevel1());
  router.push(`/nav/kegiatans/${selectedKegiatan.value.id}/${wilayah.sls_id ?? 'haha'}`)
}
</script>

<style scoped></style>
