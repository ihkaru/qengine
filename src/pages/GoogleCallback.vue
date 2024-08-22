<template>
  <q-page class="flex flex-center">
    <p>Processing login...</p>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGoogleAuth } from 'src/composables/useGoogleAuth'

const route = useRoute()
const router = useRouter()
const { handleGoogleCallback } = useGoogleAuth()

onMounted(async () => {
  const code = route.query.code
  if (code) {
    await handleGoogleCallback(code)
    // Redirect to home page or dashboard after successful login
    router.push('/')
  } else {
    // Handle error - no code provided
    router.push('/login')
  }
})
</script>
