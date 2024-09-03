import { ref, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar';
import { Dialog } from 'quasar';


export function useExitHandler() {
  const $q = useQuasar()
  const exitAttempts = ref(0)

  const handleExit = () => {
    exitAttempts.value++

    if (exitAttempts.value === 1) {
      Dialog.create({
        title: 'Exit App',
        message: 'Are you sure you want to exit the app?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // Close the app
        window.close()
      }).onCancel(() => {
        exitAttempts.value = 0
      }).onDismiss(() => {
        exitAttempts.value = 0
      })

      // Reset exit attempts after a delay
      setTimeout(() => {
        exitAttempts.value = 0
      }, 3000)
    } else if (exitAttempts.value === 2) {
      // Force close the app
      window.close()
    }
  }

  const handlePopState = (event) => {
    event.preventDefault()
    handleExit()
  }

  onMounted(() => {
    history.pushState(null, '', window.location.pathname)
    window.addEventListener('popstate', handlePopState)
  })

  onUnmounted(() => {
    window.removeEventListener('popstate', handlePopState)
  })

  return {
    handleExit
  }
}
