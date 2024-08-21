<template>
  <q-layout view="lHh LpR fFf">
    <q-header class="bg-white text-black" :class="{ 'body--dark': $q.dark.isActive }"  bordered>
      <q-toolbar>
        <q-btn flat round icon="arrow_back" @click="view.goBack" v-if="view.view !== 'surveys'" />
        <q-toolbar-title class="text-center text-blue-10 text-bold">{{ view.title }}</q-toolbar-title>
        <q-btn icon="more_vert" v-if="view.view !== 'kuesioner'" flat rounded></q-btn>
        <q-btn icon="menu" v-else-if="view.view === 'kuesioner'" flat rounded @click="view.toggleLeftDrawer"></q-btn>
      </q-toolbar>
    </q-header>
    <br>
    <br>
    <br>

    <q-page-container>
      <q-page v-if="view.view === 'surveys'" padding>
        <q-list bordered>
          <q-item v-for="survey in surveys" :key="survey.id" clickable @click="view.selectSurvey(survey)">
            <q-item-section>{{ survey.name }}</q-item-section>
          </q-item>
        </q-list>
      </q-page>

      <q-page v-else-if="view.view === 'villages'" padding>
        <q-list bordered>
          <q-item v-for="village in view.selectedSurvey.villages" :key="village.id" clickable @click="view.selectVillage(village)">
            <q-item-section>{{ village.name }}</q-item-section>
          </q-item>
        </q-list>
      </q-page>

      <q-page v-else-if="view.view === 'rts'" padding>
        <q-list bordered>
          <q-item v-for="rt in view.selectedVillage.rts" :key="rt.id" clickable @click="view.selectRt(rt)">
            <q-item-section>{{ rt.name }}</q-item-section>
          </q-item>
        </q-list>
      </q-page>

      <q-page v-else-if="view.view === 'residents'" padding>
        <q-list bordered>
          <q-item v-for="resident in view.selectedRt.residents" :key="resident.id" clickable @click="view.selectAssignment(resident)">
            <q-item-section>{{ resident.name }}</q-item-section>
          </q-item>
        </q-list>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              icon="menu"
              direction="up"
              color="blue-10"
              external-label
            >
            <q-fab-action external-label  color="warning" icon="palette" label="Info Wana Assignment" label-position="left" />
            <q-fab-action external-label  color="warning" icon="sort_by_alpha" label="Urutkan" label-position="left" />
            <q-fab-action external-label  color="warning" icon="filter_alt" label="Filter by Status" label-position="left" />
            <q-fab-action external-label color="warning" icon="done" label="Tandai wilayah telah selesai" label-position="left" />
            <q-fab-action external-label  color="grey" icon="add" label="Tambah Assignment" label-position="left" />
            </q-fab>
          </q-page-sticky>
      </q-page>
      <q-page v-else-if="view.view === 'kuesioner'" padding>
        <SurveyForm/>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              icon="touch_app"
              direction="up"
              color="blue-10"
              external-label
            >
            <q-fab-action external-label  color="warning" icon="settings_backup_restore" label="Muat ulang" label-position="left" />
            <q-fab-action external-label  color="orange" icon="gps_fixed" label="Lokasi" label-position="left" />
            <q-fab-action external-label color="positive" icon="done" label="Approval" label-position="left"  @click="toggleApproval"/>
            </q-fab>
          </q-page-sticky>
          <q-dialog v-model="approval">
            <q-card>
              <q-card-section>
                <div class="text-h6">Approval</div>
              </q-card-section>

              <q-card-section class="q-pt-none ">
                <q-btn style="width: 200px; margin-bottom: 20px;" color="green-9 block">Approve</q-btn>
                <q-btn  style="width: 200px; margin-bottom: 20px;" color="red-10 block">Reject</q-btn>
                <q-btn style="width: 200px; margin-bottom: 20px;" color="teal block w-10" @click="simpanDanKeluar">Simpan dan Keluar</q-btn>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Tutup" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import SurveyForm from 'components/SurveyForm.vue'
import { useViewStore } from 'stores/view';

const approval = ref(false);
const view = useViewStore();

const toggleApproval = function(){
  approval.value = !approval.value;
}
const simpanDanKeluar = function(){
    view.goBack();
    toggleApproval();
}


const surveys = ref([
      {
        id: 1,
        name: 'Survey Kepuasan Masyarakat',
        villages: [
          {
            id: 1,
            name: 'Desa Ciamis',
            rts: [
              {
                id: 1,
                name: 'RT 01',
                residents: [
                  { id: 1, name: 'John Doe' },
                  { id: 2, name: 'Jane Smith' },
                  { id: 3, name: 'Bob Johnson' }
                ]
              },
              {
                id: 2,
                name: 'RT 02',
                residents: [
                  { id: 4, name: 'Alice Williams' },
                  { id: 5, name: 'Tom Davis' }
                ]
              }
            ]
          },
          {
            id: 2,
            name: 'Desa Sukamaju',
            rts: [
              {
                id: 3,
                name: 'RT 03',
                residents: [
                  { id: 6, name: 'Sarah Lee' },
                  { id: 7, name: 'Mike Brown' },
                  { id: 8, name: 'Emily Wilson' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Survey Kesehatan Lingkungan',
        villages: [
          {
            id: 3,
            name: 'Desa Sukajaya',
            rts: [
              {
                id: 4,
                name: 'RT 04',
                residents: [
                  { id: 9, name: 'David Taylor' },
                  { id: 10, name: 'Jessica Anderson' }
                ]
              }
            ]
          }
        ]
      }
    ])

    // const view = ref('surveys')
    // const title = ref('Daftar Survey')
    // const selectedSurvey = ref(null)
    // const selectedVillage = ref(null)
    // const selectedRt = ref(null)
    // const selectedAssignment = ref(null)

    // const selectSurvey = (survey) => {
    //   selectedSurvey.value = survey
    //   view.value = 'villages'
    //   title.value = survey.name
    // }

    // const selectVillage = (village) => {
    //   selectedVillage.value = village
    //   view.value = 'rts'
    //   title.value = village.name
    // }

    // const selectRt = (rt) => {
    //   selectedRt.value = rt
    //   view.value = 'residents'
    //   title.value = rt.name
    // }
    // const selectAssignment = (assignment) => {
    //   selectedAssignment.value = assignment;
    //   view.value = 'kuesioner';
    //   title.value = assignment.name;
    // }

    // const goBack = () => {
    //   if (view.value === 'residents') {
    //     view.value = 'rts'
    //     title.value = selectedVillage.value.name
    //     selectedRt.value = null
    //   } else if (view.value === 'rts') {
    //     view.value = 'villages'
    //     title.value = selectedSurvey.value.name
    //     selectedVillage.value = null
    //   } else if (view.value === 'villages') {
    //     view.value = 'surveys'
    //     title.value = 'Daftar Survey'
    //     selectedSurvey.value = null
    //   } else if (view.value === 'kuesioner'){
    //     view.value = 'residents';
    //     title.value = selectedRt.value.name;
    //     selectedAssignment.value = null;
    //   }
    // }

    // const leftDrawerOpen = ref(false)

    // function toggleLeftDrawer () {
    //   leftDrawerOpen.value = !leftDrawerOpen.value
    // }


    const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

</script>
