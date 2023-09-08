<script setup>
import { auth } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'

import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/LoginModal.vue'

const isLoginModalOpen = ref(false)
const isLoggedIn = ref(false)
const authUser = ref({})

onMounted(() => {
  // Get the currently signed-in user
  // https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      authUser.value = user
    } else {
      isLoggedIn.value = false
      authUser.value = {}
    }
  })
})
</script>

<template>
  <AppHeader @open-login-modal="isLoginModalOpen = true" />

  <RouterView />

  <Teleport to="body">
    <LoginModal :is-login-modal-open="isLoginModalOpen" @close-modal="isLoginModalOpen = false" />
  </Teleport>
</template>
