<template>
  <q-layout view="lHh Lpr lFf" :class="{ 'body--dark': $q.dark.isActive }">
    <q-header class="bg-white text-black" bordered :class="{ 'body--dark': $q.dark.isActive }">
      <q-toolbar>
        <q-toolbar-title style="font-size: medium; padding-left: 20px;padding-top: 15px;padding-bottom: 15px;"
          class="text-black text-bold">
          <div class="my-0">{{ selectedKegiatan?.id }}</div>
          <div class="m-0" style="font-size: x-small;">Template: {{ masterKegiatan?.template?.versi }} 🚀</div>
        </q-toolbar-title>

        <q-toggle v-model="$q.dark.isActive" checked-icon="dark_mode" unchecked-icon="light_mode" color="black" />
        <q-btn icon="menu" flat rounded @click="view.toggleLeftDrawer"></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
      <q-drawer v-model="view.qustionerLeftDrawerOpen" show-if-above bordered>
        <q-list>
          <q-item-label header>
            Essential Links
          </q-item-label>

          <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
        </q-list>
      </q-drawer>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useViewStore } from 'src/stores/view.js';
import EssentialLink from 'components/EssentialLink.vue'
import { useQuasar } from 'quasar';
import { onBeforeMount, onMounted, ref } from 'vue';


const $q = useQuasar()
const view = useViewStore();
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

onBeforeMount(async () => {
  await initSelectedKegiatan();
  await initMasterKegiatan();
})

import { useKegiatanService } from 'src/composables/useKegiatanService';
const Kegiatan = useKegiatanService()
const selectedKegiatan = ref(null);
const initSelectedKegiatan = async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  console.log("selectedKegiatan", selectedKegiatan.value)
}

import { useSyncService } from 'src/composables/useSyncService';
const masterKegiatan = ref({});
const SyncKegiatan = useSyncService();
const initMasterKegiatan = async () => {
  masterKegiatan.value = await SyncKegiatan.getDataKegiatan(selectedKegiatan.value.id);
  console.log("masterKegiatan", masterKegiatan.value);
}
</script>
