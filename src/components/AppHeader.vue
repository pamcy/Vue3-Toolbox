<template>
  <header class="my-4">
    <div class="container">
      <nav>
        <ul class="flex">
          <li class="mx-3"><RouterLink to="/">Home</RouterLink></li>
          <li class="mx-3"><RouterLink to="/calendar">Calendar</RouterLink></li>
          <li class="mx-3"><RouterLink to="/markdown">Markdown</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
