<template>
  <header class="my-4">
    <div class="container">
      <nav>
        <ul class="flex">
          <li class="mx-4"><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/calendar">Calendar</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
