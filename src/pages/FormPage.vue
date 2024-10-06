<template>
  <q-page class="flex flex-center">
    <SurveyComponent v-if="survey" :model="survey" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="touch_app" direction="up" color="blue-10" external-label>
        <q-fab-action external-label color="warning" icon="settings_backup_restore" label="Muat ulang"
          label-position="left" />
        <q-fab-action external-label color="orange" icon="gps_fixed" label="Lokasi" label-position="left" />
        <q-fab-action external-label color="positive" icon="done" label="Approval" label-position="left"
          @click="toggleApproval" />
      </q-fab>
    </q-page-sticky>
    <q-dialog v-model="approval">
      <q-card>
        <q-card-section>
          <div class="text-h6">Approval</div>
        </q-card-section>

        <q-card-section class="q-pt-none ">
          <q-btn style="width: 300px; margin-bottom: 20px;" color="green-9 block">Approve</q-btn>
          <q-btn style="width: 300px; margin-bottom: 20px;" color="red-10 block">Reject</q-btn>
          <q-btn style="width: 300px; margin-bottom: 20px;" color="teal block w-10" @click="simpanDanKeluar">Simpan
            dan Keluar</q-btn>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Tutup" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { useQuasar } from 'quasar'
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useKegiatanService } from 'src/composables/useKegiatanService';
import { useSyncService } from 'src/composables/useSyncService';
import { useAssignmentService } from 'src/composables/useAssignmentService';
import useAuth from 'src/composables/useAuth';
const $q = useQuasar()
const router = useRouter()
const route = useRoute()
const approval = ref(false);
const toggleApproval = function () {
  approval.value = !approval.value;
}
const Kegiatan = useKegiatanService();



const selectedKegiatan = ref(null);
const initSelectedKegiatan = async () => {
  selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
}

const selectedLevel1 = ref(null)
const initSelectedLevel1 = async () => {
  selectedLevel1.value = await Kegiatan.getSelectedLevel1();
}
const masterKegiatan = ref({});
const SyncKegiatan = useSyncService();
const initMasterKegiatan = async () => {
  masterKegiatan.value = await SyncKegiatan.getDataKegiatan(selectedKegiatan.value.id);
  console.log("masterKegiatan", masterKegiatan.value, selectedKegiatan.value.id);
}
const survey = ref(null);
watch(survey, (newSurvey) => {
  if (newSurvey) {
    newSurvey.onValueChanged.add(() => {
      console.log("value changed")
      // saveSurvey(newSurvey); // Auto-save on change
      survey.value = newSurvey;
    });
  }
});
const initSurveyTemplate = async () => {
  console.log("masterKegiatan", masterKegiatan.value)
  console.log("selectedMode3", selectedMode.value)
  console.log("prefiller", selectedResponden.value?.respondens?.data)
  survey.value = new Model(masterKegiatan.value.template.template)

  // isi form jika edit
  if (selectedMode.value == 'editAssignment') {
    survey.value.data = selectedResponden.value.respondens.data;
    console.log("prefill3", survey.value.data)
  }

  // survey.value.onComplete.add(function (result) {
  //   if (!navigator.onLine) {

  //     window.localStorage.setItem('surveyResults', JSON.stringify(result.data));
  //     alert('Data disimpan secara lokal');
  //   } else {
  //     alertResults(result);
  //   }
  // });
}

const Auth = useAuth()
const activeUser = ref(null);
const initAuth = async () => {
  activeUser.value = await Auth.user()
}

const selectedMode = ref(null);
const initSelectedMode = async () => {
  selectedMode.value = await Kegiatan.getSelectedMode();
  console.log("selectedMode.value", selectedMode.value);
}

const selectedResponden = ref(null)
const initSelectedResponden = async () => {
  selectedResponden.value = await Kegiatan.getSelectedResponden();
  console.log("prefiller1", selectedResponden.value)
  if (typeof selectedResponden.value?.respondens?.data == 'string') {
    selectedResponden.value.respondens.data = JSON.parse(selectedResponden.value.respondens.data);
  }
}
onBeforeMount(async () => {
  await initSelectedMode();
  await initSelectedKegiatan();
  await initMasterKegiatan();
  if (selectedMode.value == 'tambahAssignment') {
    await initSelectedResponden();
  }
  await initSurveyTemplate();
  await initSelectedLevel1();
  // await initKegiatan();
  await initAuth();
})
onMounted(async () => {

  if (selectedMode.value == 'tambahAssignment') {
    // Trigger the notification
    $q.notify({
      progress: true,
      message: 'Mode tambah assignment',
      icon: 'info',
      color: 'blue',
      textColor: 'white',
      timeout: 2000
    })
  }
  if (selectedMode.value == 'editAssignment') {
    // Trigger the notification
    $q.notify({
      progress: true,
      message: 'Mode edit assignment',
      icon: 'info',
      color: 'blue',
      textColor: 'white',
      timeout: 2000
    })
  }
})

const alertResults = (sender) => {
  const results = JSON.stringify(sender.data);
  alert(results);
  // saveSurveyResults(
  //   "https://your-web-service.com/" + SURVEY_ID,
  //   sender.data
  // )
}
const simpanDanKeluar = async () => {
  await saveSurvey();
  router.push({
    path: `/nav/kegiatans/${selectedKegiatan.value.id}/haha`,
    query: {
      isSaveSuccess: true
    }
  })
}


const isOnline = ref(navigator.onLine);

const fetchSurveyTemplate = async () => {
  try {
    // First, try to load from localStorage
    const localData = localStorage.getItem('surveyData');
    if (localData) {
      survey.value = new Model(JSON.parse(localData));
      return;
    }

    // If not in localStorage, fetch from API
    const response = await fetch('YOUR_API_ENDPOINT');
    const jsonTemplate = await response.json();
    survey.value = new Model(jsonTemplate);
  } catch (error) {
    console.error('Error fetching survey template:', error);
  }
};

const Assignment = useAssignmentService();
const saveSurvey = async () => {
  let surveyData = {
    json: survey.value.toJSON(),
    data: survey.value.data
  };
  console.log("surveyValue", survey.value);
  console.log("surveyData", surveyData);
  let assignment = null;
  console.log("selectedMode.value", selectedMode.value)
  if (selectedMode.value == 'tambahAssignment') {
    assignment = await Assignment.addNewAssignment(activeUser.value, masterKegiatan.value, selectedLevel1.value, surveyData)
  } else if (selectedMode.value == "editAssignment") {
    assignment = await Assignment.editAssignment(surveyData, selectedResponden.value)
  }
  await Assignment.saveAssignmentToLocal(assignment)
  if (survey.value) {
    // localStorage.setItem('surveyData', JSON.stringify(surveyData));
    // alert('Survey saved locally');
  }
};

const submitSurvey = async () => {
  if (survey.value && isOnline.value) {
    const surveyData = survey.value.toJSON();
    try {
      const response = await fetch('YOUR_SUBMIT_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyData),
      });
      if (response.ok) {
        alert('Survey submitted successfully');
        localStorage.removeItem('surveyData'); // Clear local storage after successful submission
      } else {
        throw new Error('Failed to submit survey');
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('Failed to submit survey. Please try again later.');
    }
  }
};

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine;
};



</script>

<style scoped></style>
