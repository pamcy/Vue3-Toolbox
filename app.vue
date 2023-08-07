<template>
  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()

useHead({
  bodyAttrs: {
    class: route.name === 'carousel' ? 'bg-neutral-900' : 'bg-slate-100'
  }
})
</script>
