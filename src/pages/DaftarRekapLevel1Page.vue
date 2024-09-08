<template>
  <q-page class="q-pa-md">
    <q-input outlined dense placeholder="Search" class="q-mb-md">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-btn color="primary" label="SYNC ASSIGNMENT" class="q-mb-md" />
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
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const selectedKegiatan = ref(null);
const Kegiatan = useKegiatanService();

onBeforeMount(async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  console.log(selectedKegiatan.value)
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

const handleSelectWilayah = async (wilayah) => {
  router.push(`/nav/kegiatans/${selectedKegiatan.value.id}/${wilayah.id ?? 'haha'}`)
}
</script>

<style scoped></style>
