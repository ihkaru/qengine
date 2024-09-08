<template>
  <q-page class="q-pa-md">


    <div class="text-h6 q-mb-sm text-center">61040800060001B20000100</div>
    <div class="text-subtitle1 q-mb-md text-center">RT 002 RW 01 DUSUN KARYA BHAKTI</div>

    <q-table :rows="assignments" :columns="columns" row-key="nus" :pagination="{ rowsPerPage: 0 }" :filter="filter">
      <template v-slot:top>
        <q-space />
        <q-input label="Cari" outlined dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="blue-8" round dense @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.namaKRT }}.</div>
            <div>
              <div>Status: APPROVED BY PML</div>
              <div>User saat ini arinif</div>
              <q-btn color="green" label="Aksi" class="q-mt-sm" @click="openAksi('bottom', props.row)" />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="menu" direction="up" color="blue-8" external-label>
        <q-fab-action external-label color="warning" icon="palette" label="Info Wana Assignment"
          label-position="left" />
        <q-fab-action external-label color="warning" icon="sort_by_alpha" label="Urutkan" label-position="left" />
        <q-fab-action external-label color="warning" icon="filter_alt" label="Filter by Status" label-position="left" />
        <q-fab-action external-label color="warning" icon="done" label="Tandai wilayah telah selesai"
          label-position="left" />
        <q-fab-action external-label color="grey" icon="add" label="Tambah Assignment" label-position="left" />
      </q-fab>
    </q-page-sticky>
    <q-dialog v-model="openAksiDialog" :position="aksiDialogPosition">
      <q-card rounded style="min-width: 350px">
        <q-card-section class="row items-center justify-between q-pb-none">
          <div class="text-h6">Aksi</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-sm">
          <q-btn rounded class="full-width q-mb-md" color="primary" label="BUKA" @click="onAksiDialog('buka')" />

          <q-btn rounded outline class="full-width q-mb-md" color="primary" label="POSISI PENUGASAN"
            @click="onAksiDialog('posisi')" />

          <q-btn rounded class="full-width q-mb-md" color="green" label="ASSIGN" @click="onAksiDialog('assign')" />

          <q-btn rounded class="full-width q-mb-md" color="yellow" text-color="black" label="RESTORE"
            @click="onAksiDialog('restore')" />

          <q-btn rounded class="full-width" color="negative" label="HAPUS" @click="onAction('hapus')" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { useKegiatanService } from 'src/composables/useKegiatanService';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const filter = ref('')
const entriesPerPage = ref(50);
const selectedRow = ref(null)

const selectedKegiatan = ref(null);
const Kegiatan = useKegiatanService();

const openAksiDialog = ref(false)
const aksiDialogPosition = ref('bottom')

const columns = [
  { name: 'nus', label: 'NUS', field: 'nus', align: 'left' },
  { name: 'namaKRT', label: 'Nama KRT', field: 'namaKRT', align: 'left' },
  { name: 'noUrutBang', label: 'NoUrutBang', field: 'noUrutBang', align: 'left' },
  { name: 'alamat', label: 'Alamat', field: 'alamat', align: 'left' },
  { name: 'hasilKunjungan', label: 'Hasil Kunjungan', field: 'hasilKunjungan', align: 'left' }
];

const assignments = [
  { nus: 11, namaKRT: 'ASNAN', noUrutBang: 12, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
  { nus: 12, namaKRT: 'SAWIN AJI SAPUTRO', noUrutBang: 23, alamat: 'JALAN RAYA PENITI LUAR, GG. HIBRIDA', hasilKunjungan: '1. Berhasil' },
  { nus: 13, namaKRT: 'SYAHLI', noUrutBang: 32, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
  { nus: 14, namaKRT: 'SAKENA', noUrutBang: 39, alamat: 'JALAN RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
  { nus: 15, namaKRT: 'DIKI', noUrutBang: 47, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
  { nus: 16, namaKRT: 'IDRUS', noUrutBang: 55, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
  { nus: 17, namaKRT: 'AMAT NGAZIYAN', noUrutBang: 4, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
  { nus: 18, namaKRT: 'IRSAN', noUrutBang: 19, alamat: 'JALAN RAYA PENITI LUAR, GG. HIBRIDA', hasilKunjungan: '1. Berhasil' },
  { nus: 19, namaKRT: 'ZULFADLI', noUrutBang: 16, alamat: 'JALAN RAYA PENITI LUAR, GG. HIBRIDA', hasilKunjungan: '1. Berhasil' },
];

onBeforeMount(async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  console.log(selectedKegiatan.value)
})


const openAksi = (pos, row) => {
  selectedRow.value = row
  aksiDialogPosition.value = pos
  openAksiDialog.value = true
}
const onAksiDialog = (aksi) => {
  if (aksi == "buka") onBukaForm();
}
const onBukaForm = () => {
  router.push(`/form/kegiatans/${selectedKegiatan.value.id}/respondens/haha`)
}
</script>

<style scoped></style>
