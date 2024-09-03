import { ref, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar';
import { Dialog } from 'quasar';


export function useConstants() {
  const LEVEL_PENDATAAN = {
    "LEVEL_PENDATAAN_SENSUS":"Sensus",
    "LEVEL_PENDATAAN_SURVEI":"Survei Sampel",
  };
  return {
    LEVEL_PENDATAAN
  }
}
