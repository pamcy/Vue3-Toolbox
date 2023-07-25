<template>
  <div>
    <h1 class="text-3xl font-bold text-teal-700">{{ title }}</h1>

    <NuxtLink to="/"> Home </NuxtLink>
    <NuxtLink to="/calendar"> Calendar </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Calendar'
    }
  }
}
</script>
