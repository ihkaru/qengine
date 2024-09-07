import { ref, watch, onMounted } from "vue";
import localForage from "src/boot/local-forage";
import { api } from "src/boot/axios";
import { useQuasar } from "quasar";

export function useKegiatanService() {
  const kegiatans = ref(null);
  const rekapitulasi_kegiatan = ref(null);
  const isLoggedIn = ref(null);
  const selectedKegiatan = ref(null);
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
    kegiatans.value = null;
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
    selectedKegiatan.value = await newSelectedKegiatan;
    console.log(selectedKegiatan.value);
    await localForage.setItem(
      "selectedKegiatan",
      JSON.stringify(selectedKegiatan.value)
    );
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
  onMounted(async () => {
    await initKegiatanService();
  });
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
  };
}
