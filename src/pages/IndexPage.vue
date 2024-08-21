<template>
  <q-page class="flex flex-center">
    <!-- <SurveyForm/> -->
     <DaftarKegiatan/>
  </q-page>
</template>

<script setup>
// import SurveyForm from 'components/SurveyForm.vue'
AppVisibilityHandlers
import DaftarKegiatan from 'components/DaftarKegiatan.vue'
defineOptions({
  name: 'IndexPage'
});
</script>
