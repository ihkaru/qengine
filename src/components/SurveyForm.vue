<template>
  <q-page>
    <q-header class="bg-white text-black" bordered :class="{ 'body--dark': $q.dark.isActive }">
      <q-toolbar>
        <q-toolbar-title style="font-size: medium; padding-left: 20px;padding-top: 15px;padding-bottom: 15px;"
          class="text-black text-bold">
          <div class="my-0">SAKERNAS AGS 2024 - PENDATAAN</div>
          <div class="m-0" style="font-size: x-small;">FormEngine-0.0.1 🚀</div>
        </q-toolbar-title>

        <q-toggle v-model="$q.dark.isActive" checked-icon="dark_mode" unchecked-icon="light_mode" color="black" />
        <q-btn icon="menu" flat rounded @click="view.toggleLeftDrawer"></q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="view.leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <SurveyComponent :model="survey" />
  </q-page>
</template>

<script setup>
import 'survey-core/defaultV2.min.css';
import { useViewStore } from 'src/stores/view';
import { Model } from 'survey-core';
import EssentialLink from 'components/EssentialLink.vue'
import { useQuasar } from 'quasar'
const $q = useQuasar()

const view = useViewStore();
// const SURVEY_ID = 1;

const alertResults = (sender) => {
  const results = JSON.stringify(sender.data);
  alert(results);
  // saveSurveyResults(
  //   "https://your-web-service.com/" + SURVEY_ID,
  //   sender.data
  // )
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

window.addEventListener('online', function () {
  const results = JSON.parse(window.localStorage.getItem('surveyResults'));
  if (results) {
    alert('Data kembali online ' + window.localStorage.getItem('surveyResults'));
    // Implement your data syncing logic here, e.g., posting to your server
    // window.localStorage.removeItem('surveyResults'); // Clear after syncing
  }
});

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
