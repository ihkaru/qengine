<template>
  <q-page class="flex flex-center">
    <q-card class="login-card">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-btn
          color="blue"
          icon="fab fa-google"
          label="Login dengan Google"

        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
// import { useGoogleAuth } from 'src/composables/useGoogleAuth'

const { loginWithGoogle } = useGoogleAuth()
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 400px;
}
</style>
