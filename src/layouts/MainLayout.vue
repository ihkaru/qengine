<template>
  <q-layout view="lHh Lpr lFf" :class="{ 'body--dark': $q.dark.isActive }">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition appear :enter-active-class="enterClass" :leave-active-class="leaveClass" mode="out-in">
          <component :is="Component" :key="route.name" />
        </transition>
      </keep-alive>
    </router-view>
  </q-layout>
</template>

<script setup>
import { useBackHandler } from 'src/composables/useBackHandler';
import { ref, computed, Transition } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const Back = useBackHandler();

const router = useRouter();
const route = useRoute();

const enterClass = computed(() => {
  return route.meta.transition?.enter || 'animated fadeIn';
});

const leaveClass = computed(() => {
  return route.meta.transition?.leave || 'animated fadeOut';
});
</script>
