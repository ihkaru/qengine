import { ref, watch, onMounted } from "vue";
import localForage from "src/boot/local-forage";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";

export function useKegiatanService() {
  const kegiatans = ref(null);
  const rekapitulasi_kegiatan = ref(null);
  const isLoggedIn = ref(null);
  const selectedKegiatan = ref(null);
  const selectedLevel1 = ref(null);

  const getKegiatans = async () => {
    if (!Boolean(kegiatans.value)) {
      // kegiatans.value =
      kegiatans.value = await localForage.getItem("kegiatans");
    }
    return kegiatans.value;
  };

  const setIsLoggedIn = async (isLogin) => {
    await localForage.setItem("isLoggedIn", isLogin);
    isLoggedIn.value = isLogin;
  };
  const getIsLoggedIn = async () => {
    return await localForage.getItem("isLoggedIn");
  };
  const setKegiatans = async (newKegiatans) => {
    await localForage.setItem("kegiatans", newKegiatans);
    kegiatans.value = newKegiatans;
  };
  const loadSelectedKegiatan = async () => {
    selectedKegiatan.value = JSON.parse(
      await localForage.getItem("selectedKegiatan")
    );
  };
  const getSelectedKegiatan = async () => {
    if (!Boolean(selectedKegiatan.value)) {
      await loadSelectedKegiatan();
    }
    return selectedKegiatan.value;
  };
  const setSelectedKegiatan = async (newSelectedKegiatan) => {
    selectedKegiatan.value = newSelectedKegiatan;
    console.log(selectedKegiatan.value);
    await localForage.setItem(
      "selectedKegiatan",
      JSON.stringify(selectedKegiatan.value)
    );
  };
  const loadSelectedLevel1 = async () => {
    selectedLevel1.value = JSON.parse(
      await localForage.getItem("selectedLevel1")
    );
  };
  const getSelectedLevel1 = async () => {
    if (!Boolean(selectedLevel1.value)) {
      await loadSelectedLevel1();
    }
    return selectedLevel1.value;
  };
  const setSelectedLevel1 = async (newSelectedLevel1) => {
    selectedLevel1.value = newSelectedLevel1;
    console.log("selected:", selectedLevel1.value);
    await localForage.setItem(
      "selectedLevel1",
      JSON.stringify(selectedLevel1.value)
    );
    console.log();
  };
  const selectedResponden = ref(null);
  const loadSelectedResponden = async () => {
    selectedResponden.value = JSON.parse(
      await localForage.getItem("selectedResponden")
    );
  };
  const getSelectedResponden = async () => {
    if (!Boolean(selectedResponden.value)) {
      await loadSelectedResponden();
    }
    return selectedResponden.value;
  };
  const setSelectedResponden = async (newSelectedResponden) => {
    selectedResponden.value = newSelectedResponden;
    console.log("selected:", selectedResponden.value);
    await localForage.setItem(
      "selectedResponden",
      JSON.stringify(selectedResponden.value)
    );
    console.log();
  };
  const selectedMode = ref(null);
  const loadSelectedMode = async () => {
    selectedMode.value = await localForage.getItem("selectedMode");
  };
  const getSelectedMode = async () => {
    if (!Boolean(selectedMode.value)) {
      await loadSelectedMode();
    }
    return selectedMode.value;
  };
  const setSelectedMode = async (newSelectedMode) => {
    selectedMode.value = newSelectedMode;
    await localForage.setItem("selectedMode", newSelectedMode);
  };
  const getRekapitulasiKegiatan = async () => {
    if (!Boolean(rekapitulasi_kegiatan.value)) {
      // kegiatans.value =
      rekapitulasi_kegiatan.value = await localForage.getItem(
        "rekapitulasi_kegiatan"
      );
    }
    return rekapitulasi_kegiatan.value;
  };

  const setRekapitulasiKegiatan = async (newRekap) => {
    await localForage.setItem("rekapitulasi_kegiatan", newRekap);
    rekapitulasi_kegiatan.value = newRekap;
  };

  const initKegiatanService = async (force = false) => {
    if ((!Boolean(await getKegiatans()) && (await getIsLoggedIn())) || force) {
      api.get("/kegiatans?per_page=30").then(async (response) => {
        await setRekapitulasiKegiatan(response.data.rekapitulasi);
        await setKegiatans(response.data.kegiatans);
      });
    }
  };
  const handleLogoutKegiatanService = async () => {
    await setKegiatans(null);
    await setRekapitulasiKegiatan(null);
  };
  // onMounted(async () => {
  //   await initKegiatanService();
  // });
  initKegiatanService();
  return {
    getKegiatans,
    getRekapitulasiKegiatan,
    handleLogoutKegiatanService,
    setIsLoggedIn,
    getIsLoggedIn,
    initKegiatanService,
    getSelectedKegiatan,
    setSelectedKegiatan,
    loadSelectedKegiatan,
    getSelectedLevel1,
    setSelectedLevel1,
    loadSelectedLevel1,
    getSelectedMode,
    setSelectedMode,
    loadSelectedMode,
    getSelectedResponden,
    setSelectedResponden,
    loadSelectedResponden,
  };
}
