<template>
  <header class="my-4">
    <nav>
      <ul class="flex">
        <li class="mx-2"><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/calendar">Calendar</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
