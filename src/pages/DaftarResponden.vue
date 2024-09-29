<template>
  <q-page class="q-pa-md">


    <div class="text-h6 q-mb-sm text-center">{{ selectedLevel1?.sls_id }}</div>
    <div class="text-subtitle1 q-mb-md text-center">{{ selectedLevel1?.sls?.nama }}</div>

    <q-table :rows="assignments" :visible-columns="visible_columns" :columns="columns" :row-key="rowKey"
      :pagination="{ rowsPerPage: 0 }" :filter="filter">
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
            <div class="text-left">This is expand slot for row above.</div>
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
        <q-fab-action external-label color="grey" icon="add" label="Tambah Assignment" label-position="left"
          :disable="!canTambahAssignment" @click="onTambahAssignment" />
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
import { useQuasar } from 'quasar';
import { useAssignmentService } from 'src/composables/useAssignmentService';
import { useKegiatanService } from 'src/composables/useKegiatanService';
import { useSyncService } from 'src/composables/useSyncService';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const $q = useQuasar()
const SyncService = useSyncService();
const masterKegiatan = ref({});

const filter = ref('')
const entriesPerPage = ref(50);
const selectedRow = ref(null)

const selectedKegiatan = ref(null);
const Kegiatan = useKegiatanService();

const selectedLevel1 = ref(null);

const openAksiDialog = ref(false)
const aksiDialogPosition = ref('bottom')

// const columns = ref([
//   { name: 'nus', label: 'NUS', field: 'nus', align: 'left' },
//   { name: 'namaKRT', label: 'Nama KRT', field: 'namaKRT', align: 'left' },
//   { name: 'noUrutBang', label: 'NoUrutBang', field: 'noUrutBang', align: 'left' },
//   { name: 'alamat', label: 'Alamat', field: 'alamat', align: 'left' },
//   { name: 'hasilKunjungan', label: 'Hasil Kunjungan', field: 'hasilKunjungan', align: 'left' }
// ]);

// const assignments = ref([
//   { nus: 11, namaKRT: 'ASNAN', noUrutBang: 12, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
//   { nus: 12, namaKRT: 'SAWIN AJI SAPUTRO', noUrutBang: 23, alamat: 'JALAN RAYA PENITI LUAR, GG. HIBRIDA', hasilKunjungan: '1. Berhasil' },
//   { nus: 13, namaKRT: 'SYAHLI', noUrutBang: 32, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
//   { nus: 14, namaKRT: 'SAKENA', noUrutBang: 39, alamat: 'JALAN RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
//   { nus: 15, namaKRT: 'DIKI', noUrutBang: 47, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
//   { nus: 16, namaKRT: 'IDRUS', noUrutBang: 55, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
//   { nus: 17, namaKRT: 'AMAT NGAZIYAN', noUrutBang: 4, alamat: 'JL. RAYA PENITI LUAR', hasilKunjungan: '1. Berhasil' },
//   { nus: 18, namaKRT: 'IRSAN', noUrutBang: 19, alamat: 'JALAN RAYA PENITI LUAR, GG. HIBRIDA', hasilKunjungan: '1. Berhasil' },
//   { nus: 19, namaKRT: 'ZULFADLI', noUrutBang: 16, alamat: 'JALAN RAYA PENITI LUAR, GG. HIBRIDA', hasilKunjungan: '1. Berhasil' },
// ]);
const columns = ref([]);
const visible_columns = ref([]);
const assignments = ref([]);
const keyColumn = () => {
  return visible_columns.value[0];
}
const rowKey = (row) => {
  console.log(row)
  return row[keyColumn()];
}

const prepareTable = async () => {
  console.log("masterKegiatan", masterKegiatan.value);
  let kolom_wajib = JSON.parse(masterKegiatan.value.template.kolom_wajib);
  columns.value = kolom_wajib.kolom_wajib;
  visible_columns.value = kolom_wajib.visible_columns;

  console.log("column", columns.value)
  console.log("visible", visible_columns.value)
  console.log("assignment1", assignments.value)
  console.log("selectedLevel1.value.sls_id", selectedLevel1.value.sls_id)

  masterKegiatan.value.assignments.forEach(element => {
    console.log("selectedLevel1:", selectedLevel1.value.sls_id)
    console.log("elements1", element)
    console.log("sls_id:", element.respondens.sls_id)
    if (element.respondens.sls_id == selectedLevel1.value.sls_id) {
      if (typeof element.respondens.data == 'string') {
        element.respondens.data = JSON.parse(element.respondens.data);
      }
      assignments.value.push(element.respondens.data);
      console.log('element.respondens.data', element.respondens.data)
    };
  });
  console.log("assignment before", assignments.value)
  // console.log("",assignments.value)
  assignments.value = assignments.value.filter(element => element !== null);
  console.log("assignment after", assignments.value)

}

const Assignment = useAssignmentService();
const canTambahAssignment = ref(null);
const initAssignment = async () => {
  canTambahAssignment.value = await Assignment.canTambahAssignment(masterKegiatan.value);
}

const selectedMode = ref(null)
const initSelectedMode = async () => {
  selectedMode.value = await Kegiatan.getSelectedMode();
}
const selectedResponden = ref(null)
const initSelectedResponden = async () => {
  selectedResponden.value = await Kegiatan.getSelectedResponden();
}
onBeforeMount(async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  selectedLevel1.value = await Kegiatan.getSelectedLevel1();
  masterKegiatan.value = await SyncService.getDataKegiatan(selectedKegiatan.value.id);
  await initSelectedMode();
  await initAssignment();
  await initSelectedResponden();
  console.log("selectedKegiatan:", selectedKegiatan.value)
  console.log("masterKegiatan1:", masterKegiatan.value)
  await prepareTable();

})

watch(masterKegiatan, async (newMasterKegiatan) => {
  if (newMasterKegiatan.value) {
    console.log("watch:", newMasterKegiatan.value);
    await SyncService.setDataKegiatan(newMasterKegiatan.value, selectedKegiatan.value.id);
  }
})

onMounted(async () => {
  if (route.query.isSaveSuccess == 'true') {
    console.log('save success')
    $q.notify({
      progress: true,
      message: 'Isian berhasil disimpan',
      icon: 'check',
      color: 'green',
      textColor: 'white',
      timeout: 2000
    })
  }
})

const openAksi = async (pos, row) => {
  selectedRow.value = row
  selectedResponden.value = masterKegiatan.value.assignments.find((e) => {
    console.log("e.respondens.data1", e.respondens.data)
    let res = e.respondens.data;
    if (typeof e.respondens.data == 'string') {
      res = JSON.parse(e.respondens.data);
    }
    return res[keyColumn()] == rowKey(selectedRow.value)
  })
  await Kegiatan.setSelectedResponden(selectedResponden.value);
  console.log("selected responden", selectedResponden.value)
  console.log("selectedRow", selectedRow.value)
  console.log("selectedRowKey", rowKey(row));
  aksiDialogPosition.value = pos
  openAksiDialog.value = true
}
const onAksiDialog = (aksi) => {
  if (aksi == "buka") onBukaForm();
}

const onBukaForm = async () => {

  let mode = 'editAssignment';
  selectedMode.value = mode
  await Kegiatan.setSelectedMode(selectedMode.value);
  selectedMode.value = await Kegiatan.getSelectedMode()

  router.push(
    {
      path: `/form/kegiatans/${selectedKegiatan.value.id}/respondens/1`,
      query: {
        mode: `editAssignment`
      }
    }
  )
}
const onTambahAssignment = async () => {
  if (!Boolean(canTambahAssignment.value)) {
    return;
  }
  let mode = 'tambahAssignment';
  selectedMode.value = mode
  await Kegiatan.setSelectedMode(selectedMode.value);
  selectedMode.value = await Kegiatan.getSelectedMode()
  if (!Boolean(selectedMode.value)) return;
  router.push({
    path: `/form/kegiatans/${selectedKegiatan.value.id}/respondens/1`,
    query: {
      mode: selectedMode.value
    }
  })
}
</script>

<style scoped></style>
