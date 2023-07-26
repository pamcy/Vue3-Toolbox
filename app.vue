<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-slate-100'
  }
})
</script>
