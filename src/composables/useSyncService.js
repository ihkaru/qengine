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
    respondenKegiatan: [],
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
    data.value.kegiatan[kegiatanId] = newData;
  };
  const getDataKegiatan = async (kegiatanId) => {
    let kegiatan = findKegiatan(kegiatanId);
    if (!Boolean(kegiatan)) {
      let tes = await localForage.getItem(
        `${"syncData.kegiatan." + kegiatanId}`
      );
      console.log("test", tes);
      data.value.kegiatan.push(JSON.parse(tes));
      kegiatan = findKegiatan(kegiatan);
    }
    return kegiatan;
  };
  const findKegiatan = (kegiatanId) => {
    return data.value.kegiatan.find((kegiatan) => kegiatan?.id === kegiatanId);
  };
  const findRespondenKegiatan = (kegiatanId) => {
    return data.value.respondenKegiatan.find(
      (kegiatan) => kegiatan?.id === kegiatanId
    );
  };
  const syncKegiatan = async (kegiatanId) => {
    if (online.isOnline) {
      await api.get(`/kegiatans/${kegiatanId}`).then(async (response) => {
        console.log("respon", response);
        await setDataKegiatan(response.data, kegiatanId);
      });
    } else {
      throw new Error(
        "Anda sedang offline. Tidak dapat melakukan sinkronisasi"
      );
    }
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
    findRespondenKegiatan,
    syncKegiatan,
    handleLoadKegiatan,
  };
}
