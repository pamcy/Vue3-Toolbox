<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/LoginModal.vue'

const isLoginModalOpen = ref(false)
</script>

<template>
  <AppHeader @open-login-modal="isLoginModalOpen = true" />

  <RouterView />

  <Teleport to="body">
    <LoginModal :is-login-modal-open="isLoginModalOpen" @close-modal="isLoginModalOpen = false" />
  </Teleport>
</template>
