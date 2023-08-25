<template>
  <header class="my-4">
    <div class="container">
      <nav>
        <ul class="flex">
          <li v-for="item in menuItems" :key="item.title" class="mx-3">
            <RouterLink :to="item.path">{{ item.title }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

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
