import { ref, watch, onMounted } from "vue";
import localForage from "src/boot/local-forage";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";
import { useOnlineStatus } from "./useOnlineStatus";
import { useKegiatanService } from "./useKegiatanService";

export function useSyncService() {
  const Kegiatan = useKegiatanService();
  const $q = useQuasar();
  const selectedKegiatan = ref(null);
  const kegiatanData = ref(null);
  const data = ref({
    kegiatan: [],
    assignmentData: [],
  });
  // const dat = {
  //   kegiatan: [
  //     {
  //       id: "kegiatan-1",
  //       respondens: [
  //         {
  //           id: 1,
  //         },
  //         {
  //           id: 2,
  //         },
  //       ],
  //     },
  //     { id: "kegiatan-2" },
  //   ],
  //   respondenKegiatan: [
  //     {
  //       id: "kegiatan-1",
  //       respondens: [{ id: "responden-1" }, { id: "responden-2" }],
  //     },
  //   ],
  // };
  const online = useOnlineStatus();
  onMounted(async () => {
    // await initSyncService();
  });
  const loadDataKegiatan = async (kegiatanId) => {};
  const setDataKegiatan = async (newData, kegiatanId) => {
    await localForage.setItem(
      `${"syncData.kegiatan." + kegiatanId}`,
      JSON.stringify(newData)
    );
    // console.log("set newdata", newData);
    // console.log("get newdata", await getDataKegiatan(kegiatanId));
    data.value.kegiatan[kegiatanId] = newData;
  };
  const getDataKegiatan = async (kegiatanId) => {
    let kegiatan = findKegiatan(kegiatanId);
    if (!Boolean(kegiatan)) {
      let tes = await localForage.getItem(
        `${"syncData.kegiatan." + kegiatanId}`
      );
      // console.log("test", tes, kegiatanId);
      data.value.kegiatan.push(JSON.parse(tes));
      kegiatan = findKegiatan(kegiatanId);
      // console.log("Boolean(kegiatan)", Boolean(kegiatan));
    }
    return kegiatan;
  };
  const findKegiatan = (kegiatanId) => {
    // console.log(
    //   "findKegiatan",
    //   JSON.stringify(data.value),
    //   kegiatanId,
    //   data.value.kegiatan.find(
    //     (kegiatan) => kegiatan.kegiatan.id === kegiatanId
    //   )
    // );
    return data.value.kegiatan.find(
      (kegiatan) => kegiatan.kegiatan.id === kegiatanId
    );
  };
  const findAssignmentKegiatan = (assignmentId) => {
    return data.value.assignmentData.find(
      (assignment) => assignment?.id === assignmentId
    );
  };
  const syncKegiatan = async (kegiatanId) => {
    if (online.isOnline) {
      await api.get(`/kegiatans/${kegiatanId}`).then(async (response) => {
        // console.log("respon", response);
        await setDataKegiatan(response.data, kegiatanId);
      });
    } else {
      throw new Error(
        "Anda sedang offline. Tidak dapat melakukan sinkronisasi"
      );
    }
  };
  const addAssignment = async (newAssignment) => {
    console.log("newAssignment", newAssignment);
    await getAssignmentData();
    await getDataKegiatan(newAssignment.kegiatan_id);
    let oldAssignment = findAssignmentKegiatan(newAssignment.id);
    if (Boolean(oldAssignment?.id)) {
      if (
        oldAssignment.responden.terakhir_diisi <
        newAssignment.responden.terakhir_diisi
      ) {
        await replaceAssignment(newAssignment);
        console.log("replace Assignment");
        return true;
      }
      console.log("replace assignment failed");
      return false;
    }
    console.log("pushing assignment");
    await pushAssignment(newAssignment);
    return true;
  };
  const replaceAssignment = async (newAssignment) => {
    let index = data.value.assignmentData.findIndex(
      (obj) => obj.id === newAssignment.id
    );
    if (index !== -1) {
      // Replace the old object with the new one
      data.value.assignmentData[index] = newAssignment;
      await persistAssignmentData();
    }

    index = data.value.kegiatan[
      newAssignment.kegiatan_id
    ].assignments.findIndex((obj) => obj.id === newAssignment.id);
    if (index !== -1) {
      // Replace the old object with the new one
      data.value.kegiatan[newAssignment.kegiatan_id].assignments[index] =
        newAssignment;
    }
  };
  const pushAssignment = async (assignment) => {
    // console.log("data.value.kegiatan", data.value.kegiatan, assignment);
    // let kegiatanData = findKegiatan(assignment.kegiatan_id);
    console.log("kegiatanData", kegiatanData);
    // kegiatanData.assignments.push(assignment);

    let index = data.value.kegiatan.findIndex((obj) => {
      console.log("obj", obj);
      return obj.kegiatan.id == assignment.kegiatan_id;
    });
    data.value.kegiatan[index].assignments.push(assignment);
    await setDataKegiatan(data.value.kegiatan[index], assignment.kegiatan_id);
    await persistAssignmentData();
  };
  const persistAssignmentData = async () => {
    await localForage.setItem(
      `syncData.assignmentData`,
      JSON.stringify(data.value.assignmentData)
    );
  };
  const getAssignmentData = async () => {
    // console.log(
    //   "before get assignment data",
    //   data.value.assignmentData,
    //   Boolean(data.value.assignmentData.length)
    // );
    if (!Boolean(data.value.assignmentData.length)) {
      data.value.assignmentData = JSON.parse(
        await localForage.getItem(`syncData.assignmentData`)
      );
      // console.log("after local get assignment data", data.value.assignmentData);

      await mergeAssignment();
    }
    // console.log("after get assignment data", data.value.assignmentData);
    return data.value.assignmentData;
  };
  const mergeAssignment = async () => {
    data.value.assignmentData.forEach(async (e) => {
      let oldAssignment = findAssignmentKegiatan(e.id);
      if (Boolean(oldAssignment)) {
        if (
          oldAssignment.responden.terakhir_diisi < e.responden.terakhir_diisi
        ) {
          await replaceAssignment(e);
          return true;
        }
        return false;
      }
      await pushAssignment(e);
      return true;
    });
  };
  const handleLoadKegiatan = async () => {
    selectedKegiatan.value = await Kegiatan.getSelectedKegiatan();
    let dismiss2 = null;
    let dismiss = null;
    try {
      dismiss = $q.notify({
        progress: true,
        message: "Mengambil data",
        spinner: true,
        color: "blue",
        textColor: "white",
        timeout: 2000,
      });
      kegiatanData.value = await getDataKegiatan(selectedKegiatan.value.id);
      if (!Boolean(kegiatanData.value)) {
        dismiss2 = $q.notify({
          progress: true,
          message: "Sync",
          spinner: true,
          color: "blue",
          textColor: "white",
          timeout: 2000,
        });
        await syncKegiatan(selectedKegiatan.value.id);
        kegiatanData.value = await getDataKegiatan(selectedKegiatan.value.id);
        dismiss2();
      }
      dismiss();
    } catch (e) {
      dismiss();
      let errorNot = $q.notify({
        progress: true,
        type: "negative",
        message: e.message,
        timeout: 2000,
      });
    }
    return kegiatanData.value;
  };
  return {
    getDataKegiatan,
    setDataKegiatan,
    findKegiatan,
    findAssignmentKegiatan,
    syncKegiatan,
    handleLoadKegiatan,
    addAssignment,
  };
}
