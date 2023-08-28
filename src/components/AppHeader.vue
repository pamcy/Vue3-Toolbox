<template>
  <header class="my-4">
    <div class="container">
      <nav class="flex items-center justify-between">
        <ul class="inline-flex">
          <li v-for="item in menuItems" :key="item.title" class="mx-3">
            <RouterLink :to="item.path">{{ item.title }}</RouterLink>
          </li>
        </ul>

        <button @click="isLoginModalOpen = true">Login</button>

        <LoginModal v-if="isLoginModalOpen" @close-modal="isLoginModalOpen = false" />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import LoginModal from './LoginModal.vue'

const menuItems = ref([
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Calendar',
    path: '/calendar'
  },
  {
    title: 'Markdown',
    path: '/markdown'
  },
  {
    title: 'Carousel',
    path: 'carousel'
  }
])
const isLoginModalOpen = ref(false)
</script>
