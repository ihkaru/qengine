import { ref, onMounted, onUnmounted } from "vue";
import { useQuasar } from "quasar";
import { Dialog } from "quasar";
import { useRoute, useRouter } from "vue-router";

export function useBackHandler() {
  const $q = useQuasar();
  const route = useRoute();
  const router = useRouter();
  const exitAttempts = ref(0);

  const handleExit = () => {
    exitAttempts.value++;
    if (exitAttempts.value === 1) {
      Dialog.create({
        title: "Exit App",
        message: "Are you sure you want to exit the app?",
        cancel: true,
        persistent: true,
      })
        .onOk(() => {
          // Close the app
          window.close();
        })
        .onCancel(() => {
          exitAttempts.value = 0;
        })
        .onDismiss(() => {
          exitAttempts.value = 0;
        });

      // Reset exit attempts after a delay
      setTimeout(() => {
        exitAttempts.value = 0;
      }, 3000);
    } else if (exitAttempts.value === 2) {
      // Force close the app
      window.close();
    }
  };

  const handlePopState = (event) => {
    event.preventDefault();
    goBack();
  };

  const goBack = () => {
    if (route.meta.title == "Beranda") handleExit();
    else if (route.meta.title == "Periode") router.push("/home/beranda");
    else if (route.meta.title == "Daftar Wilayah")
      router.push(`/nav/kegiatans/${selectedKegiatan.value.id}`);
    else if (route.meta.title == "Daftar Assignment")
      router.push(`/nav/kegiatans/${selectedKegiatan.value.id}/list-level-1`);
    else router.back();
  };
  onMounted(() => {
    // history.pushState(null, "", window.location.pathname);
    window.addEventListener("popstate", handlePopState);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", handlePopState);
  });

  return {
    handleExit,
    goBack,
  };
}
