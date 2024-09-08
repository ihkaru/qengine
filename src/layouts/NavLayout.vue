<template>
  <q-layout view="lHh Lpr lFf" :class="{ 'body--dark': $q.dark.isActive }">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="arrow_back" @click="Back.goBack" />
        <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>
        <q-btn dense flat round icon="info" />
        <q-btn dense flat round icon="more_vert" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition appear :enter-active-class="enterClass" :leave-active-class="leaveClass" mode="out-in">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useBackHandler } from 'src/composables/useBackHandler';
import { useKegiatanService } from 'src/composables/useKegiatanService';
import { ref, computed, Transition, watch, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const selectedKegiatan = ref(null);
const Kegiatan = useKegiatanService();
const Back = useBackHandler();

// Page title state
const pageTitle = ref(route.meta.title || 'Default Title');


onBeforeMount(async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
  console.log(selectedKegiatan.value)
})


// Watch route changes to update the page title
watch(route, (newRoute) => {
  pageTitle.value = newRoute.meta.title || 'Default Title';
});


const enterClass = computed(() => {
  console.log("called enter")
  return route.meta.transition?.enter || 'animated fadeIn';
});

const leaveClass = computed(() => {
  console.log("called leave")
  return route.meta.transition?.leave || 'animated fadeOut';
});




// const goBack = () => {
//   if (route.meta.title == "Periode") router.push("/home/beranda");
//   else if (route.meta.title == "Daftar Wilayah") router.push(`/nav/kegiatans/${selectedKegiatan.value.id}`);
//   else if (route.meta.title == "Daftar Assignment") router.push(`/nav/kegiatans/${selectedKegiatan.value.id}/list-level-1`);
//   else
//     router.back();
// };
</script>
