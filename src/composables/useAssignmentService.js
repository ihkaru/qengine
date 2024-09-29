import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import localForage from "src/boot/local-forage";
import { useConstants } from "./useConstants";
import { useUtils } from "./useUtils";
import { useSyncService } from "./useSyncService";

export function useAssignmentService() {
  const Constant = useConstants();
  const Utils = useUtils();
  const Sync = useSyncService();
  const selectedSurveyData = ref(null);
  const setSelectedSurveyData = async (surveyData) => {
    await localForage.setItem("selectedSurveyData", JSON.stringify(surveyData));
    selectedSurveyData.value = surveyData;
  };
  const getSelectedSurveyData = async () => {
    if (!Boolean(selectedSurveyData.value)) {
      selectedSurveyData.value = JSON.parse(
        await localForage.getItem("selectedSurveyData")
      );
    }
    return selectedSurveyData.value;
  };
  const canTambahAssignment = async (masterKegiatan) => {
    if (masterKegiatan.user.id == masterKegiatan.organisasi.pencacah_id) {
      return true;
    }
    return false;
  };
  const addNewAssignment = async (
    acitveUser,
    masterKegiatan,
    wilayah,
    surveyData
  ) => {
    // saat menambahkan assignment
    // Buat object assignment
    // tambahkan ke array yang digunakan untuk menampilkan tabel
    //
    console.log("surveyData", surveyData);
    const responden_id = uuidv4();
    const now = Utils.dayjs();
    const responden = {
      id: responden_id,
      kegiatan_id: masterKegiatan.kegiatan.id,
      template_id: masterKegiatan.template.id,
      provinsi_id: wilayah.prov_id,
      kabkot_id: wilayah.kabkot_id,
      kecamatan_id: wilayah.kec_id,
      desa_id: wilayah.desa_kel_id,
      sls_id: wilayah.sls_id,
      bs_id: wilayah.bs_id,
      last_riwayat_status: Constant.STATUS_OPEN,
      terakhir_diisi: now,
      data: JSON.stringify(surveyData?.data),
      latitude: null,
      longitude: null,
      jumlah_blank: null,
      jumlah_error: null,
      jumlah_warning: null,
      jumlah_terisi: null,
      created_at: now,
      updated_at: now,
    };
    const assignment = {
      id: uuidv4(),
      pencacah_id: masterKegiatan.organisasi.pencacah_id,
      responden_id: responden_id,
      kegiatan_id: masterKegiatan.kegiatan.id,
      created_at: now,
      updated_at: now,
      respondens: responden,
    };

    return assignment;
  };

  const saveAssignmentToLocal = async (assignment) => {
    console.log("assignment", assignment);
    await Sync.addAssignment(assignment);
  };

  const editAssignment = async (surveyData, assignment) => {
    assignment.respondens.data = JSON.stringify(surveyData.data);
    return assignment;
  };

  return {
    canTambahAssignment,
    saveAssignmentToLocal,
    addNewAssignment,
    editAssignment,
    getSelectedSurveyData,
    setSelectedSurveyData,
  };
}
