<template>
  <header class="my-4">
    <div class="container">
      <nav class="flex items-center justify-between">
        <ul class="inline-flex">
          <li v-for="item in menuItems" :key="item.title" class="mx-3">
            <RouterLink :to="item.path">{{ item.title }}</RouterLink>
          </li>
        </ul>

        <button v-if="isLoggedIn" class="underline" @click="$emit('handleLogout')">Logout</button>
        <button v-else class="underline" @click="$emit('openLoginModal')">Login</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

defineProps({
  isLoggedIn: Boolean
})
defineEmits(['openLoginModal', 'handleLogout'])

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
</script>
