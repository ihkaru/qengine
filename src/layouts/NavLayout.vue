<template>
  <q-layout view="lHh Lpr lFf" :class="{ 'body--dark': $q.dark.isActive }">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="arrow_back" @click="goBack" />
        <q-toolbar-title>Periode</q-toolbar-title>
        <q-btn dense flat round icon="info" />
        <q-btn dense flat round icon="more_vert" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed, Transition } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();


const goBack = () => {
  router.back();
};
</script>
